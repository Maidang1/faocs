(function(_){for(var r in _){_[r].__farm_resource_pot__='index_6f92.js';(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__.register(r,_[r])}})({"node_modules/.pnpm/@remix-run+router@1.15.3/node_modules/@remix-run/router/dist/router.js":/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        AbortedDeferredError: function() {
            return AbortedDeferredError;
        },
        Action: function() {
            return Action;
        },
        IDLE_BLOCKER: function() {
            return IDLE_BLOCKER;
        },
        IDLE_FETCHER: function() {
            return IDLE_FETCHER;
        },
        IDLE_NAVIGATION: function() {
            return IDLE_NAVIGATION;
        },
        UNSAFE_DEFERRED_SYMBOL: function() {
            return UNSAFE_DEFERRED_SYMBOL;
        },
        UNSAFE_DeferredData: function() {
            return DeferredData;
        },
        UNSAFE_ErrorResponseImpl: function() {
            return ErrorResponseImpl;
        },
        UNSAFE_convertRouteMatchToUiMatch: function() {
            return convertRouteMatchToUiMatch;
        },
        UNSAFE_convertRoutesToDataRoutes: function() {
            return convertRoutesToDataRoutes;
        },
        UNSAFE_getResolveToMatches: function() {
            return getResolveToMatches;
        },
        UNSAFE_invariant: function() {
            return invariant;
        },
        UNSAFE_warning: function() {
            return warning;
        },
        createBrowserHistory: function() {
            return createBrowserHistory;
        },
        createHashHistory: function() {
            return createHashHistory;
        },
        createMemoryHistory: function() {
            return createMemoryHistory;
        },
        createPath: function() {
            return createPath;
        },
        createRouter: function() {
            return createRouter;
        },
        createStaticHandler: function() {
            return createStaticHandler;
        },
        defer: function() {
            return defer;
        },
        generatePath: function() {
            return generatePath;
        },
        getStaticContextFromError: function() {
            return getStaticContextFromError;
        },
        getToPathname: function() {
            return getToPathname;
        },
        isDeferredData: function() {
            return isDeferredData;
        },
        isRouteErrorResponse: function() {
            return isRouteErrorResponse;
        },
        joinPaths: function() {
            return joinPaths;
        },
        json: function() {
            return json;
        },
        matchPath: function() {
            return matchPath;
        },
        matchRoutes: function() {
            return matchRoutes;
        },
        normalizePathname: function() {
            return normalizePathname;
        },
        parsePath: function() {
            return parsePath;
        },
        redirect: function() {
            return redirect;
        },
        redirectDocument: function() {
            return redirectDocument;
        },
        resolvePath: function() {
            return resolvePath;
        },
        resolveTo: function() {
            return resolveTo;
        },
        stripBasename: function() {
            return stripBasename;
        }
    });
    function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source){
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    var Action;
    (function(Action) {
        Action["Pop"] = "POP";
        Action["Push"] = "PUSH";
        Action["Replace"] = "REPLACE";
    })(Action || (Action = {}));
    const PopStateEventType = "popstate";
    function createMemoryHistory(options) {
        if (options === void 0) {
            options = {};
        }
        let { initialEntries = [
            "/"
        ], initialIndex, v5Compat = false } = options;
        let entries;
        entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
        let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
        let action = Action.Pop;
        let listener = null;
        function clampIndex(n) {
            return Math.min(Math.max(n, 0), entries.length - 1);
        }
        function getCurrentLocation() {
            return entries[index];
        }
        function createMemoryLocation(to, state, key) {
            if (state === void 0) {
                state = null;
            }
            let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
            warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
            return location;
        }
        function createHref(to) {
            return typeof to === "string" ? to : createPath(to);
        }
        let history = {
            get index () {
                return index;
            },
            get action () {
                return action;
            },
            get location () {
                return getCurrentLocation();
            },
            createHref,
            createURL (to) {
                return new URL(createHref(to), "http://localhost");
            },
            encodeLocation (to) {
                let path = typeof to === "string" ? parsePath(to) : to;
                return {
                    pathname: path.pathname || "",
                    search: path.search || "",
                    hash: path.hash || ""
                };
            },
            push (to, state) {
                action = Action.Push;
                let nextLocation = createMemoryLocation(to, state);
                index += 1;
                entries.splice(index, entries.length, nextLocation);
                if (v5Compat && listener) {
                    listener({
                        action,
                        location: nextLocation,
                        delta: 1
                    });
                }
            },
            replace (to, state) {
                action = Action.Replace;
                let nextLocation = createMemoryLocation(to, state);
                entries[index] = nextLocation;
                if (v5Compat && listener) {
                    listener({
                        action,
                        location: nextLocation,
                        delta: 0
                    });
                }
            },
            go (delta) {
                action = Action.Pop;
                let nextIndex = clampIndex(index + delta);
                let nextLocation = entries[nextIndex];
                index = nextIndex;
                if (listener) {
                    listener({
                        action,
                        location: nextLocation,
                        delta
                    });
                }
            },
            listen (fn) {
                listener = fn;
                return ()=>{
                    listener = null;
                };
            }
        };
        return history;
    }
    function createBrowserHistory(options) {
        if (options === void 0) {
            options = {};
        }
        function createBrowserLocation(window1, globalHistory) {
            let { pathname, search, hash } = window1.location;
            return createLocation("", {
                pathname,
                search,
                hash
            }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
        }
        function createBrowserHref(window1, to) {
            return typeof to === "string" ? to : createPath(to);
        }
        return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function createHashHistory(options) {
        if (options === void 0) {
            options = {};
        }
        function createHashLocation(window1, globalHistory) {
            let { pathname = "/", search = "", hash = "" } = parsePath(window1.location.hash.substr(1));
            if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
                pathname = "/" + pathname;
            }
            return createLocation("", {
                pathname,
                search,
                hash
            }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
        }
        function createHashHref(window1, to) {
            let base = window1.document.querySelector("base");
            let href = "";
            if (base && base.getAttribute("href")) {
                let url = window1.location.href;
                let hashIndex = url.indexOf("#");
                href = hashIndex === -1 ? url : url.slice(0, hashIndex);
            }
            return href + "#" + (typeof to === "string" ? to : createPath(to));
        }
        function validateHashLocation(location, to) {
            warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
        }
        return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
    }
    function invariant(value, message) {
        if (value === false || value === null || typeof value === "undefined") {
            throw new Error(message);
        }
    }
    function warning(cond, message) {
        if (!cond) {
            if (typeof console !== "undefined") console.warn(message);
            try {
                throw new Error(message);
            } catch (e) {}
        }
    }
    function createKey() {
        return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index) {
        return {
            usr: location.state,
            key: location.key,
            idx: index
        };
    }
    function createLocation(current, to, state, key) {
        if (state === void 0) {
            state = null;
        }
        let location = _extends({
            pathname: typeof current === "string" ? current : current.pathname,
            search: "",
            hash: ""
        }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: to && to.key || key || createKey()
        });
        return location;
    }
    function createPath(_ref) {
        let { pathname = "/", search = "", hash = "" } = _ref;
        if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
        if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
        return pathname;
    }
    function parsePath(path) {
        let parsedPath = {};
        if (path) {
            let hashIndex = path.indexOf("#");
            if (hashIndex >= 0) {
                parsedPath.hash = path.substr(hashIndex);
                path = path.substr(0, hashIndex);
            }
            let searchIndex = path.indexOf("?");
            if (searchIndex >= 0) {
                parsedPath.search = path.substr(searchIndex);
                path = path.substr(0, searchIndex);
            }
            if (path) {
                parsedPath.pathname = path;
            }
        }
        return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
        if (options === void 0) {
            options = {};
        }
        let { window: window1 = document.defaultView, v5Compat = false } = options;
        let globalHistory = window1.history;
        let action = Action.Pop;
        let listener = null;
        let index = getIndex();
        if (index == null) {
            index = 0;
            globalHistory.replaceState(_extends({}, globalHistory.state, {
                idx: index
            }), "");
        }
        function getIndex() {
            let state = globalHistory.state || {
                idx: null
            };
            return state.idx;
        }
        function handlePop() {
            action = Action.Pop;
            let nextIndex = getIndex();
            let delta = nextIndex == null ? null : nextIndex - index;
            index = nextIndex;
            if (listener) {
                listener({
                    action,
                    location: history.location,
                    delta
                });
            }
        }
        function push(to, state) {
            action = Action.Push;
            let location = createLocation(history.location, to, state);
            if (validateLocation) validateLocation(location, to);
            index = getIndex() + 1;
            let historyState = getHistoryState(location, index);
            let url = history.createHref(location);
            try {
                globalHistory.pushState(historyState, "", url);
            } catch (error) {
                if (error instanceof DOMException && error.name === "DataCloneError") {
                    throw error;
                }
                window1.location.assign(url);
            }
            if (v5Compat && listener) {
                listener({
                    action,
                    location: history.location,
                    delta: 1
                });
            }
        }
        function replace(to, state) {
            action = Action.Replace;
            let location = createLocation(history.location, to, state);
            if (validateLocation) validateLocation(location, to);
            index = getIndex();
            let historyState = getHistoryState(location, index);
            let url = history.createHref(location);
            globalHistory.replaceState(historyState, "", url);
            if (v5Compat && listener) {
                listener({
                    action,
                    location: history.location,
                    delta: 0
                });
            }
        }
        function createURL(to) {
            let base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
            let href = typeof to === "string" ? to : createPath(to);
            href = href.replace(/ $/, "%20");
            invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
            return new URL(href, base);
        }
        let history = {
            get action () {
                return action;
            },
            get location () {
                return getLocation(window1, globalHistory);
            },
            listen (fn) {
                if (listener) {
                    throw new Error("A history only accepts one active listener");
                }
                window1.addEventListener(PopStateEventType, handlePop);
                listener = fn;
                return ()=>{
                    window1.removeEventListener(PopStateEventType, handlePop);
                    listener = null;
                };
            },
            createHref (to) {
                return createHref(window1, to);
            },
            createURL,
            encodeLocation (to) {
                let url = createURL(to);
                return {
                    pathname: url.pathname,
                    search: url.search,
                    hash: url.hash
                };
            },
            push,
            replace,
            go (n) {
                return globalHistory.go(n);
            }
        };
        return history;
    }
    var ResultType;
    (function(ResultType) {
        ResultType["data"] = "data";
        ResultType["deferred"] = "deferred";
        ResultType["redirect"] = "redirect";
        ResultType["error"] = "error";
    })(ResultType || (ResultType = {}));
    const immutableRouteKeys = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children"
    ]);
    function isIndexRoute(route) {
        return route.index === true;
    }
    function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
        if (parentPath === void 0) {
            parentPath = [];
        }
        if (manifest === void 0) {
            manifest = {};
        }
        return routes.map((route, index)=>{
            let treePath = [
                ...parentPath,
                index
            ];
            let id = typeof route.id === "string" ? route.id : treePath.join("-");
            invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
            invariant(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
            if (isIndexRoute(route)) {
                let indexRoute = _extends({}, route, mapRouteProperties(route), {
                    id
                });
                manifest[id] = indexRoute;
                return indexRoute;
            } else {
                let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
                    id,
                    children: undefined
                });
                manifest[id] = pathOrLayoutRoute;
                if (route.children) {
                    pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
                }
                return pathOrLayoutRoute;
            }
        });
    }
    function matchRoutes(routes, locationArg, basename) {
        if (basename === void 0) {
            basename = "/";
        }
        let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        let pathname = stripBasename(location.pathname || "/", basename);
        if (pathname == null) {
            return null;
        }
        let branches = flattenRoutes(routes);
        rankRouteBranches(branches);
        let matches = null;
        for(let i = 0; matches == null && i < branches.length; ++i){
            let decoded = decodePath(pathname);
            matches = matchRouteBranch(branches[i], decoded);
        }
        return matches;
    }
    function convertRouteMatchToUiMatch(match, loaderData) {
        let { route, pathname, params } = match;
        return {
            id: route.id,
            pathname,
            params,
            data: loaderData[route.id],
            handle: route.handle
        };
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
        if (branches === void 0) {
            branches = [];
        }
        if (parentsMeta === void 0) {
            parentsMeta = [];
        }
        if (parentPath === void 0) {
            parentPath = "";
        }
        let flattenRoute = (route, index, relativePath)=>{
            let meta = {
                relativePath: relativePath === undefined ? route.path || "" : relativePath,
                caseSensitive: route.caseSensitive === true,
                childrenIndex: index,
                route
            };
            if (meta.relativePath.startsWith("/")) {
                invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
                meta.relativePath = meta.relativePath.slice(parentPath.length);
            }
            let path = joinPaths([
                parentPath,
                meta.relativePath
            ]);
            let routesMeta = parentsMeta.concat(meta);
            if (route.children && route.children.length > 0) {
                invariant(route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
                flattenRoutes(route.children, branches, routesMeta, path);
            }
            if (route.path == null && !route.index) {
                return;
            }
            branches.push({
                path,
                score: computeScore(path, route.index),
                routesMeta
            });
        };
        routes.forEach((route, index)=>{
            var _route$path;
            if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
                flattenRoute(route, index);
            } else {
                for (let exploded of explodeOptionalSegments(route.path)){
                    flattenRoute(route, index, exploded);
                }
            }
        });
        return branches;
    }
    function explodeOptionalSegments(path) {
        let segments = path.split("/");
        if (segments.length === 0) return [];
        let [first, ...rest] = segments;
        let isOptional = first.endsWith("?");
        let required = first.replace(/\?$/, "");
        if (rest.length === 0) {
            return isOptional ? [
                required,
                ""
            ] : [
                required
            ];
        }
        let restExploded = explodeOptionalSegments(rest.join("/"));
        let result = [];
        result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
                required,
                subpath
            ].join("/")));
        if (isOptional) {
            result.push(...restExploded);
        }
        return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
        branches.sort((a, b)=>a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
    }
    const paramRe = /^:[\w-]+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s)=>s === "*";
    function computeScore(path, index) {
        let segments = path.split("/");
        let initialScore = segments.length;
        if (segments.some(isSplat)) {
            initialScore += splatPenalty;
        }
        if (index) {
            initialScore += indexRouteValue;
        }
        return segments.filter((s)=>!isSplat(s)).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b) {
        let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
        return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
    }
    function matchRouteBranch(branch, pathname) {
        let { routesMeta } = branch;
        let matchedParams = {};
        let matchedPathname = "/";
        let matches = [];
        for(let i = 0; i < routesMeta.length; ++i){
            let meta = routesMeta[i];
            let end = i === routesMeta.length - 1;
            let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
            let match = matchPath({
                path: meta.relativePath,
                caseSensitive: meta.caseSensitive,
                end
            }, remainingPathname);
            if (!match) return null;
            Object.assign(matchedParams, match.params);
            let route = meta.route;
            matches.push({
                params: matchedParams,
                pathname: joinPaths([
                    matchedPathname,
                    match.pathname
                ]),
                pathnameBase: normalizePathname(joinPaths([
                    matchedPathname,
                    match.pathnameBase
                ])),
                route
            });
            if (match.pathnameBase !== "/") {
                matchedPathname = joinPaths([
                    matchedPathname,
                    match.pathnameBase
                ]);
            }
        }
        return matches;
    }
    function generatePath(originalPath, params) {
        if (params === void 0) {
            params = {};
        }
        let path = originalPath;
        if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
            warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
            path = path.replace(/\*$/, "/*");
        }
        const prefix = path.startsWith("/") ? "/" : "";
        const stringify = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
        const segments = path.split(/\/+/).map((segment, index, array)=>{
            const isLastSegment = index === array.length - 1;
            if (isLastSegment && segment === "*") {
                const star = "*";
                return stringify(params[star]);
            }
            const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
            if (keyMatch) {
                const [, key, optional] = keyMatch;
                let param = params[key];
                invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
                return stringify(param);
            }
            return segment.replace(/\?$/g, "");
        }).filter((segment)=>!!segment);
        return prefix + segments.join("/");
    }
    function matchPath(pattern, pathname) {
        if (typeof pattern === "string") {
            pattern = {
                path: pattern,
                caseSensitive: false,
                end: true
            };
        }
        let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
        let match = pathname.match(matcher);
        if (!match) return null;
        let matchedPathname = match[0];
        let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
        let captureGroups = match.slice(1);
        let params = compiledParams.reduce((memo, _ref, index)=>{
            let { paramName, isOptional } = _ref;
            if (paramName === "*") {
                let splatValue = captureGroups[index] || "";
                pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
            }
            const value = captureGroups[index];
            if (isOptional && !value) {
                memo[paramName] = undefined;
            } else {
                memo[paramName] = (value || "").replace(/%2F/g, "/");
            }
            return memo;
        }, {});
        return {
            params,
            pathname: matchedPathname,
            pathnameBase,
            pattern
        };
    }
    function compilePath(path, caseSensitive, end) {
        if (caseSensitive === void 0) {
            caseSensitive = false;
        }
        if (end === void 0) {
            end = true;
        }
        warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        let params = [];
        let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
            params.push({
                paramName,
                isOptional: isOptional != null
            });
            return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
        });
        if (path.endsWith("*")) {
            params.push({
                paramName: "*"
            });
            regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
        } else if (end) {
            regexpSource += "\\/*$";
        } else if (path !== "" && path !== "/") {
            regexpSource += "(?:(?=\\/|$))";
        } else ;
        let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
        return [
            matcher,
            params
        ];
    }
    function decodePath(value) {
        try {
            return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
        } catch (error) {
            warning(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
            return value;
        }
    }
    function stripBasename(pathname, basename) {
        if (basename === "/") return pathname;
        if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
            return null;
        }
        let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
        let nextChar = pathname.charAt(startIndex);
        if (nextChar && nextChar !== "/") {
            return null;
        }
        return pathname.slice(startIndex) || "/";
    }
    function resolvePath(to, fromPathname) {
        if (fromPathname === void 0) {
            fromPathname = "/";
        }
        let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
        let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
        return {
            pathname,
            search: normalizeSearch(search),
            hash: normalizeHash(hash)
        };
    }
    function resolvePathname(relativePath, fromPathname) {
        let segments = fromPathname.replace(/\/+$/, "").split("/");
        let relativeSegments = relativePath.split("/");
        relativeSegments.forEach((segment)=>{
            if (segment === "..") {
                if (segments.length > 1) segments.pop();
            } else if (segment !== ".") {
                segments.push(segment);
            }
        });
        return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
        return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
        return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
    }
    function getResolveToMatches(matches, v7_relativeSplatPath) {
        let pathMatches = getPathContributingMatches(matches);
        if (v7_relativeSplatPath) {
            return pathMatches.map((match, idx)=>idx === matches.length - 1 ? match.pathname : match.pathnameBase);
        }
        return pathMatches.map((match)=>match.pathnameBase);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
        if (isPathRelative === void 0) {
            isPathRelative = false;
        }
        let to;
        if (typeof toArg === "string") {
            to = parsePath(toArg);
        } else {
            to = _extends({}, toArg);
            invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
            invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
            invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
        }
        let isEmptyPath = toArg === "" || to.pathname === "";
        let toPathname = isEmptyPath ? "/" : to.pathname;
        let from;
        if (toPathname == null) {
            from = locationPathname;
        } else {
            let routePathnameIndex = routePathnames.length - 1;
            if (!isPathRelative && toPathname.startsWith("..")) {
                let toSegments = toPathname.split("/");
                while(toSegments[0] === ".."){
                    toSegments.shift();
                    routePathnameIndex -= 1;
                }
                to.pathname = toSegments.join("/");
            }
            from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
        }
        let path = resolvePath(to, from);
        let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
        let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
        if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
            path.pathname += "/";
        }
        return path;
    }
    function getToPathname(to) {
        return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
    }
    const joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    const normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    const normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    const json = function json(data, init) {
        if (init === void 0) {
            init = {};
        }
        let responseInit = typeof init === "number" ? {
            status: init
        } : init;
        let headers = new Headers(responseInit.headers);
        if (!headers.has("Content-Type")) {
            headers.set("Content-Type", "application/json; charset=utf-8");
        }
        return new Response(JSON.stringify(data), _extends({}, responseInit, {
            headers
        }));
    };
    class AbortedDeferredError extends Error {
    }
    class DeferredData {
        constructor(data, responseInit){
            this.pendingKeysSet = new Set();
            this.subscribers = new Set();
            this.deferredKeys = [];
            invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
            let reject;
            this.abortPromise = new Promise((_, r)=>reject = r);
            this.controller = new AbortController();
            let onAbort = ()=>reject(new AbortedDeferredError("Deferred data aborted"));
            this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
            this.controller.signal.addEventListener("abort", onAbort);
            this.data = Object.entries(data).reduce((acc, _ref2)=>{
                let [key, value] = _ref2;
                return Object.assign(acc, {
                    [key]: this.trackPromise(key, value)
                });
            }, {});
            if (this.done) {
                this.unlistenAbortSignal();
            }
            this.init = responseInit;
        }
        trackPromise(key, value) {
            if (!(value instanceof Promise)) {
                return value;
            }
            this.deferredKeys.push(key);
            this.pendingKeysSet.add(key);
            let promise = Promise.race([
                value,
                this.abortPromise
            ]).then((data)=>this.onSettle(promise, key, undefined, data), (error)=>this.onSettle(promise, key, error));
            promise.catch(()=>{});
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            return promise;
        }
        onSettle(promise, key, error, data) {
            if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
                this.unlistenAbortSignal();
                Object.defineProperty(promise, "_error", {
                    get: ()=>error
                });
                return Promise.reject(error);
            }
            this.pendingKeysSet.delete(key);
            if (this.done) {
                this.unlistenAbortSignal();
            }
            if (error === undefined && data === undefined) {
                let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, ' + "you must resolve/reject with a value or `null`.");
                Object.defineProperty(promise, "_error", {
                    get: ()=>undefinedError
                });
                this.emit(false, key);
                return Promise.reject(undefinedError);
            }
            if (data === undefined) {
                Object.defineProperty(promise, "_error", {
                    get: ()=>error
                });
                this.emit(false, key);
                return Promise.reject(error);
            }
            Object.defineProperty(promise, "_data", {
                get: ()=>data
            });
            this.emit(false, key);
            return data;
        }
        emit(aborted, settledKey) {
            this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
        }
        subscribe(fn) {
            this.subscribers.add(fn);
            return ()=>this.subscribers.delete(fn);
        }
        cancel() {
            this.controller.abort();
            this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
            this.emit(true);
        }
        async resolveData(signal) {
            let aborted = false;
            if (!this.done) {
                let onAbort = ()=>this.cancel();
                signal.addEventListener("abort", onAbort);
                aborted = await new Promise((resolve)=>{
                    this.subscribe((aborted)=>{
                        signal.removeEventListener("abort", onAbort);
                        if (aborted || this.done) {
                            resolve(aborted);
                        }
                    });
                });
            }
            return aborted;
        }
        get done() {
            return this.pendingKeysSet.size === 0;
        }
        get unwrappedData() {
            invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
            return Object.entries(this.data).reduce((acc, _ref3)=>{
                let [key, value] = _ref3;
                return Object.assign(acc, {
                    [key]: unwrapTrackedPromise(value)
                });
            }, {});
        }
        get pendingKeys() {
            return Array.from(this.pendingKeysSet);
        }
    }
    function isTrackedPromise(value) {
        return value instanceof Promise && value._tracked === true;
    }
    function unwrapTrackedPromise(value) {
        if (!isTrackedPromise(value)) {
            return value;
        }
        if (value._error) {
            throw value._error;
        }
        return value._data;
    }
    const defer = function defer(data, init) {
        if (init === void 0) {
            init = {};
        }
        let responseInit = typeof init === "number" ? {
            status: init
        } : init;
        return new DeferredData(data, responseInit);
    };
    const redirect = function redirect(url, init) {
        if (init === void 0) {
            init = 302;
        }
        let responseInit = init;
        if (typeof responseInit === "number") {
            responseInit = {
                status: responseInit
            };
        } else if (typeof responseInit.status === "undefined") {
            responseInit.status = 302;
        }
        let headers = new Headers(responseInit.headers);
        headers.set("Location", url);
        return new Response(null, _extends({}, responseInit, {
            headers
        }));
    };
    const redirectDocument = (url, init)=>{
        let response = redirect(url, init);
        response.headers.set("X-Remix-Reload-Document", "true");
        return response;
    };
    class ErrorResponseImpl {
        constructor(status, statusText, data, internal){
            if (internal === void 0) {
                internal = false;
            }
            this.status = status;
            this.statusText = statusText || "";
            this.internal = internal;
            if (data instanceof Error) {
                this.data = data.toString();
                this.error = data;
            } else {
                this.data = data;
            }
        }
    }
    function isRouteErrorResponse(error) {
        return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    const validMutationMethodsArr = [
        "post",
        "put",
        "patch",
        "delete"
    ];
    const validMutationMethods = new Set(validMutationMethodsArr);
    const validRequestMethodsArr = [
        "get",
        ...validMutationMethodsArr
    ];
    const validRequestMethods = new Set(validRequestMethodsArr);
    const redirectStatusCodes = new Set([
        301,
        302,
        303,
        307,
        308
    ]);
    const redirectPreserveMethodStatusCodes = new Set([
        307,
        308
    ]);
    const IDLE_NAVIGATION = {
        state: "idle",
        location: undefined,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined
    };
    const IDLE_FETCHER = {
        state: "idle",
        data: undefined,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined
    };
    const IDLE_BLOCKER = {
        state: "unblocked",
        proceed: undefined,
        reset: undefined,
        location: undefined
    };
    const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    const defaultMapRouteProperties = (route)=>({
            hasErrorBoundary: Boolean(route.hasErrorBoundary)
        });
    const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
    function createRouter(init) {
        const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
        const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
        const isServer = !isBrowser;
        invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let mapRouteProperties;
        if (init.mapRouteProperties) {
            mapRouteProperties = init.mapRouteProperties;
        } else if (init.detectErrorBoundary) {
            let detectErrorBoundary = init.detectErrorBoundary;
            mapRouteProperties = (route)=>({
                    hasErrorBoundary: detectErrorBoundary(route)
                });
        } else {
            mapRouteProperties = defaultMapRouteProperties;
        }
        let manifest = {};
        let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
        let inFlightDataRoutes;
        let basename = init.basename || "/";
        let future = _extends({
            v7_fetcherPersist: false,
            v7_normalizeFormMethod: false,
            v7_partialHydration: false,
            v7_prependBasename: false,
            v7_relativeSplatPath: false
        }, init.future);
        let unlistenHistory = null;
        let subscribers = new Set();
        let savedScrollPositions = null;
        let getScrollRestorationKey = null;
        let getScrollPosition = null;
        let initialScrollRestored = init.hydrationData != null;
        let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
        let initialErrors = null;
        if (initialMatches == null) {
            let error = getInternalRouterError(404, {
                pathname: init.history.location.pathname
            });
            let { matches, route } = getShortCircuitMatches(dataRoutes);
            initialMatches = matches;
            initialErrors = {
                [route.id]: error
            };
        }
        let initialized;
        let hasLazyRoutes = initialMatches.some((m)=>m.route.lazy);
        let hasLoaders = initialMatches.some((m)=>m.route.loader);
        if (hasLazyRoutes) {
            initialized = false;
        } else if (!hasLoaders) {
            initialized = true;
        } else if (future.v7_partialHydration) {
            let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
            let errors = init.hydrationData ? init.hydrationData.errors : null;
            let isRouteInitialized = (m)=>{
                if (!m.route.loader) return true;
                if (m.route.loader.hydrate === true) return false;
                return loaderData && loaderData[m.route.id] !== undefined || errors && errors[m.route.id] !== undefined;
            };
            if (errors) {
                let idx = initialMatches.findIndex((m)=>errors[m.route.id] !== undefined);
                initialized = initialMatches.slice(0, idx + 1).every(isRouteInitialized);
            } else {
                initialized = initialMatches.every(isRouteInitialized);
            }
        } else {
            initialized = init.hydrationData != null;
        }
        let router;
        let state = {
            historyAction: init.history.action,
            location: init.history.location,
            matches: initialMatches,
            initialized,
            navigation: IDLE_NAVIGATION,
            restoreScrollPosition: init.hydrationData != null ? false : null,
            preventScrollReset: false,
            revalidation: "idle",
            loaderData: init.hydrationData && init.hydrationData.loaderData || {},
            actionData: init.hydrationData && init.hydrationData.actionData || null,
            errors: init.hydrationData && init.hydrationData.errors || initialErrors,
            fetchers: new Map(),
            blockers: new Map()
        };
        let pendingAction = Action.Pop;
        let pendingPreventScrollReset = false;
        let pendingNavigationController;
        let pendingViewTransitionEnabled = false;
        let appliedViewTransitions = new Map();
        let removePageHideEventListener = null;
        let isUninterruptedRevalidation = false;
        let isRevalidationRequired = false;
        let cancelledDeferredRoutes = [];
        let cancelledFetcherLoads = [];
        let fetchControllers = new Map();
        let incrementingLoadId = 0;
        let pendingNavigationLoadId = -1;
        let fetchReloadIds = new Map();
        let fetchRedirectIds = new Set();
        let fetchLoadMatches = new Map();
        let activeFetchers = new Map();
        let deletedFetchers = new Set();
        let activeDeferreds = new Map();
        let blockerFunctions = new Map();
        let ignoreNextHistoryUpdate = false;
        function initialize() {
            unlistenHistory = init.history.listen((_ref)=>{
                let { action: historyAction, location, delta } = _ref;
                if (ignoreNextHistoryUpdate) {
                    ignoreNextHistoryUpdate = false;
                    return;
                }
                warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
                let blockerKey = shouldBlockNavigation({
                    currentLocation: state.location,
                    nextLocation: location,
                    historyAction
                });
                if (blockerKey && delta != null) {
                    ignoreNextHistoryUpdate = true;
                    init.history.go(delta * -1);
                    updateBlocker(blockerKey, {
                        state: "blocked",
                        location,
                        proceed () {
                            updateBlocker(blockerKey, {
                                state: "proceeding",
                                proceed: undefined,
                                reset: undefined,
                                location
                            });
                            init.history.go(delta);
                        },
                        reset () {
                            let blockers = new Map(state.blockers);
                            blockers.set(blockerKey, IDLE_BLOCKER);
                            updateState({
                                blockers
                            });
                        }
                    });
                    return;
                }
                return startNavigation(historyAction, location);
            });
            if (isBrowser) {
                restoreAppliedTransitions(routerWindow, appliedViewTransitions);
                let _saveAppliedTransitions = ()=>persistAppliedTransitions(routerWindow, appliedViewTransitions);
                routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
                removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
            }
            if (!state.initialized) {
                startNavigation(Action.Pop, state.location, {
                    initialHydration: true
                });
            }
            return router;
        }
        function dispose() {
            if (unlistenHistory) {
                unlistenHistory();
            }
            if (removePageHideEventListener) {
                removePageHideEventListener();
            }
            subscribers.clear();
            pendingNavigationController && pendingNavigationController.abort();
            state.fetchers.forEach((_, key)=>deleteFetcher(key));
            state.blockers.forEach((_, key)=>deleteBlocker(key));
        }
        function subscribe(fn) {
            subscribers.add(fn);
            return ()=>subscribers.delete(fn);
        }
        function updateState(newState, opts) {
            if (opts === void 0) {
                opts = {};
            }
            state = _extends({}, state, newState);
            let completedFetchers = [];
            let deletedFetchersKeys = [];
            if (future.v7_fetcherPersist) {
                state.fetchers.forEach((fetcher, key)=>{
                    if (fetcher.state === "idle") {
                        if (deletedFetchers.has(key)) {
                            deletedFetchersKeys.push(key);
                        } else {
                            completedFetchers.push(key);
                        }
                    }
                });
            }
            [
                ...subscribers
            ].forEach((subscriber)=>subscriber(state, {
                    deletedFetchers: deletedFetchersKeys,
                    unstable_viewTransitionOpts: opts.viewTransitionOpts,
                    unstable_flushSync: opts.flushSync === true
                }));
            if (future.v7_fetcherPersist) {
                completedFetchers.forEach((key)=>state.fetchers.delete(key));
                deletedFetchersKeys.forEach((key)=>deleteFetcher(key));
            }
        }
        function completeNavigation(location, newState, _temp) {
            var _location$state, _location$state2;
            let { flushSync } = _temp === void 0 ? {} : _temp;
            let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
            let actionData;
            if (newState.actionData) {
                if (Object.keys(newState.actionData).length > 0) {
                    actionData = newState.actionData;
                } else {
                    actionData = null;
                }
            } else if (isActionReload) {
                actionData = state.actionData;
            } else {
                actionData = null;
            }
            let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
            let blockers = state.blockers;
            if (blockers.size > 0) {
                blockers = new Map(blockers);
                blockers.forEach((_, k)=>blockers.set(k, IDLE_BLOCKER));
            }
            let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
            if (inFlightDataRoutes) {
                dataRoutes = inFlightDataRoutes;
                inFlightDataRoutes = undefined;
            }
            if (isUninterruptedRevalidation) ;
            else if (pendingAction === Action.Pop) ;
            else if (pendingAction === Action.Push) {
                init.history.push(location, location.state);
            } else if (pendingAction === Action.Replace) {
                init.history.replace(location, location.state);
            }
            let viewTransitionOpts;
            if (pendingAction === Action.Pop) {
                let priorPaths = appliedViewTransitions.get(state.location.pathname);
                if (priorPaths && priorPaths.has(location.pathname)) {
                    viewTransitionOpts = {
                        currentLocation: state.location,
                        nextLocation: location
                    };
                } else if (appliedViewTransitions.has(location.pathname)) {
                    viewTransitionOpts = {
                        currentLocation: location,
                        nextLocation: state.location
                    };
                }
            } else if (pendingViewTransitionEnabled) {
                let toPaths = appliedViewTransitions.get(state.location.pathname);
                if (toPaths) {
                    toPaths.add(location.pathname);
                } else {
                    toPaths = new Set([
                        location.pathname
                    ]);
                    appliedViewTransitions.set(state.location.pathname, toPaths);
                }
                viewTransitionOpts = {
                    currentLocation: state.location,
                    nextLocation: location
                };
            }
            updateState(_extends({}, newState, {
                actionData,
                loaderData,
                historyAction: pendingAction,
                location,
                initialized: true,
                navigation: IDLE_NAVIGATION,
                revalidation: "idle",
                restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
                preventScrollReset,
                blockers
            }), {
                viewTransitionOpts,
                flushSync: flushSync === true
            });
            pendingAction = Action.Pop;
            pendingPreventScrollReset = false;
            pendingViewTransitionEnabled = false;
            isUninterruptedRevalidation = false;
            isRevalidationRequired = false;
            cancelledDeferredRoutes = [];
            cancelledFetcherLoads = [];
        }
        async function navigate(to, opts) {
            if (typeof to === "number") {
                init.history.go(to);
                return;
            }
            let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
            let { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
            let currentLocation = state.location;
            let nextLocation = createLocation(state.location, path, opts && opts.state);
            nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
            let userReplace = opts && opts.replace != null ? opts.replace : undefined;
            let historyAction = Action.Push;
            if (userReplace === true) {
                historyAction = Action.Replace;
            } else if (userReplace === false) ;
            else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
                historyAction = Action.Replace;
            }
            let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
            let flushSync = (opts && opts.unstable_flushSync) === true;
            let blockerKey = shouldBlockNavigation({
                currentLocation,
                nextLocation,
                historyAction
            });
            if (blockerKey) {
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location: nextLocation,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location: nextLocation
                        });
                        navigate(to, opts);
                    },
                    reset () {
                        let blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return await startNavigation(historyAction, nextLocation, {
                submission,
                pendingError: error,
                preventScrollReset,
                replace: opts && opts.replace,
                enableViewTransition: opts && opts.unstable_viewTransition,
                flushSync
            });
        }
        function revalidate() {
            interruptActiveLoads();
            updateState({
                revalidation: "loading"
            });
            if (state.navigation.state === "submitting") {
                return;
            }
            if (state.navigation.state === "idle") {
                startNavigation(state.historyAction, state.location, {
                    startUninterruptedRevalidation: true
                });
                return;
            }
            startNavigation(pendingAction || state.historyAction, state.navigation.location, {
                overrideNavigation: state.navigation
            });
        }
        async function startNavigation(historyAction, location, opts) {
            pendingNavigationController && pendingNavigationController.abort();
            pendingNavigationController = null;
            pendingAction = historyAction;
            isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
            saveScrollPosition(state.location, state.matches);
            pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
            pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
            let routesToUse = inFlightDataRoutes || dataRoutes;
            let loadingNavigation = opts && opts.overrideNavigation;
            let matches = matchRoutes(routesToUse, location, basename);
            let flushSync = (opts && opts.flushSync) === true;
            if (!matches) {
                let error = getInternalRouterError(404, {
                    pathname: location.pathname
                });
                let { matches: notFoundMatches, route } = getShortCircuitMatches(routesToUse);
                cancelActiveDeferreds();
                completeNavigation(location, {
                    matches: notFoundMatches,
                    loaderData: {},
                    errors: {
                        [route.id]: error
                    }
                }, {
                    flushSync
                });
                return;
            }
            if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
                completeNavigation(location, {
                    matches
                }, {
                    flushSync
                });
                return;
            }
            pendingNavigationController = new AbortController();
            let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
            let pendingActionData;
            let pendingError;
            if (opts && opts.pendingError) {
                pendingError = {
                    [findNearestBoundary(matches).route.id]: opts.pendingError
                };
            } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
                let actionOutput = await handleAction(request, location, opts.submission, matches, {
                    replace: opts.replace,
                    flushSync
                });
                if (actionOutput.shortCircuited) {
                    return;
                }
                pendingActionData = actionOutput.pendingActionData;
                pendingError = actionOutput.pendingActionError;
                loadingNavigation = getLoadingNavigation(location, opts.submission);
                flushSync = false;
                request = new Request(request.url, {
                    signal: request.signal
                });
            }
            let { shortCircuited, loaderData, errors } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionData, pendingError);
            if (shortCircuited) {
                return;
            }
            pendingNavigationController = null;
            completeNavigation(location, _extends({
                matches
            }, pendingActionData ? {
                actionData: pendingActionData
            } : {}, {
                loaderData,
                errors
            }));
        }
        async function handleAction(request, location, submission, matches, opts) {
            if (opts === void 0) {
                opts = {};
            }
            interruptActiveLoads();
            let navigation = getSubmittingNavigation(location, submission);
            updateState({
                navigation
            }, {
                flushSync: opts.flushSync === true
            });
            let result;
            let actionMatch = getTargetMatch(matches, location);
            if (!actionMatch.route.action && !actionMatch.route.lazy) {
                result = {
                    type: ResultType.error,
                    error: getInternalRouterError(405, {
                        method: request.method,
                        pathname: location.pathname,
                        routeId: actionMatch.route.id
                    })
                };
            } else {
                result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
                if (request.signal.aborted) {
                    return {
                        shortCircuited: true
                    };
                }
            }
            if (isRedirectResult(result)) {
                let replace;
                if (opts && opts.replace != null) {
                    replace = opts.replace;
                } else {
                    replace = result.location === state.location.pathname + state.location.search;
                }
                await startRedirectNavigation(state, result, {
                    submission,
                    replace
                });
                return {
                    shortCircuited: true
                };
            }
            if (isErrorResult(result)) {
                let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                if ((opts && opts.replace) !== true) {
                    pendingAction = Action.Push;
                }
                return {
                    pendingActionData: {},
                    pendingActionError: {
                        [boundaryMatch.route.id]: result.error
                    }
                };
            }
            if (isDeferredResult(result)) {
                throw getInternalRouterError(400, {
                    type: "defer-action"
                });
            }
            return {
                pendingActionData: {
                    [actionMatch.route.id]: result.data
                }
            };
        }
        async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionData, pendingError) {
            let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
            let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
            let routesToUse = inFlightDataRoutes || dataRoutes;
            let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
            cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
            pendingNavigationLoadId = ++incrementingLoadId;
            if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
                let updatedFetchers = markFetchRedirectsDone();
                completeNavigation(location, _extends({
                    matches,
                    loaderData: {},
                    errors: pendingError || null
                }, pendingActionData ? {
                    actionData: pendingActionData
                } : {}, updatedFetchers ? {
                    fetchers: new Map(state.fetchers)
                } : {}), {
                    flushSync
                });
                return {
                    shortCircuited: true
                };
            }
            if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
                revalidatingFetchers.forEach((rf)=>{
                    let fetcher = state.fetchers.get(rf.key);
                    let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                    state.fetchers.set(rf.key, revalidatingFetcher);
                });
                let actionData = pendingActionData || state.actionData;
                updateState(_extends({
                    navigation: loadingNavigation
                }, actionData ? Object.keys(actionData).length === 0 ? {
                    actionData: null
                } : {
                    actionData
                } : {}, revalidatingFetchers.length > 0 ? {
                    fetchers: new Map(state.fetchers)
                } : {}), {
                    flushSync
                });
            }
            revalidatingFetchers.forEach((rf)=>{
                if (fetchControllers.has(rf.key)) {
                    abortFetcher(rf.key);
                }
                if (rf.controller) {
                    fetchControllers.set(rf.key, rf.controller);
                }
            });
            let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
            if (pendingNavigationController) {
                pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
            }
            let { results, loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
            if (request.signal.aborted) {
                return {
                    shortCircuited: true
                };
            }
            if (pendingNavigationController) {
                pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
            }
            revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
            let redirect = findRedirect(results);
            if (redirect) {
                if (redirect.idx >= matchesToLoad.length) {
                    let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                    fetchRedirectIds.add(fetcherKey);
                }
                await startRedirectNavigation(state, redirect.result, {
                    replace
                });
                return {
                    shortCircuited: true
                };
            }
            let { loaderData, errors } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
            activeDeferreds.forEach((deferredData, routeId)=>{
                deferredData.subscribe((aborted)=>{
                    if (aborted || deferredData.done) {
                        activeDeferreds.delete(routeId);
                    }
                });
            });
            if (future.v7_partialHydration && initialHydration && state.errors) {
                Object.entries(state.errors).filter((_ref2)=>{
                    let [id] = _ref2;
                    return !matchesToLoad.some((m)=>m.route.id === id);
                }).forEach((_ref3)=>{
                    let [routeId, error] = _ref3;
                    errors = Object.assign(errors || {}, {
                        [routeId]: error
                    });
                });
            }
            let updatedFetchers = markFetchRedirectsDone();
            let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
            let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
            return _extends({
                loaderData,
                errors
            }, shouldUpdateFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {});
        }
        function fetch(key, routeId, href, opts) {
            if (isServer) {
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
            }
            if (fetchControllers.has(key)) abortFetcher(key);
            let flushSync = (opts && opts.unstable_flushSync) === true;
            let routesToUse = inFlightDataRoutes || dataRoutes;
            let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
            let matches = matchRoutes(routesToUse, normalizedPath, basename);
            if (!matches) {
                setFetcherError(key, routeId, getInternalRouterError(404, {
                    pathname: normalizedPath
                }), {
                    flushSync
                });
                return;
            }
            let { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
            if (error) {
                setFetcherError(key, routeId, error, {
                    flushSync
                });
                return;
            }
            let match = getTargetMatch(matches, path);
            pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
            if (submission && isMutationMethod(submission.formMethod)) {
                handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
                return;
            }
            fetchLoadMatches.set(key, {
                routeId,
                path
            });
            handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
        }
        async function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
            interruptActiveLoads();
            fetchLoadMatches.delete(key);
            if (!match.route.action && !match.route.lazy) {
                let error = getInternalRouterError(405, {
                    method: submission.formMethod,
                    pathname: path,
                    routeId: routeId
                });
                setFetcherError(key, routeId, error, {
                    flushSync
                });
                return;
            }
            let existingFetcher = state.fetchers.get(key);
            updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
                flushSync
            });
            let abortController = new AbortController();
            let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
            fetchControllers.set(key, abortController);
            let originatingLoadId = incrementingLoadId;
            let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
            if (fetchRequest.signal.aborted) {
                if (fetchControllers.get(key) === abortController) {
                    fetchControllers.delete(key);
                }
                return;
            }
            if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
                if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
                    updateFetcherState(key, getDoneFetcher(undefined));
                    return;
                }
            } else {
                if (isRedirectResult(actionResult)) {
                    fetchControllers.delete(key);
                    if (pendingNavigationLoadId > originatingLoadId) {
                        updateFetcherState(key, getDoneFetcher(undefined));
                        return;
                    } else {
                        fetchRedirectIds.add(key);
                        updateFetcherState(key, getLoadingFetcher(submission));
                        return startRedirectNavigation(state, actionResult, {
                            fetcherSubmission: submission
                        });
                    }
                }
                if (isErrorResult(actionResult)) {
                    setFetcherError(key, routeId, actionResult.error);
                    return;
                }
            }
            if (isDeferredResult(actionResult)) {
                throw getInternalRouterError(400, {
                    type: "defer-action"
                });
            }
            let nextLocation = state.navigation.location || state.location;
            let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
            let routesToUse = inFlightDataRoutes || dataRoutes;
            let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
            invariant(matches, "Didn't find any matches after fetcher action");
            let loadId = ++incrementingLoadId;
            fetchReloadIds.set(key, loadId);
            let loadFetcher = getLoadingFetcher(submission, actionResult.data);
            state.fetchers.set(key, loadFetcher);
            let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, {
                [match.route.id]: actionResult.data
            }, undefined);
            revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
                let staleKey = rf.key;
                let existingFetcher = state.fetchers.get(staleKey);
                let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
                state.fetchers.set(staleKey, revalidatingFetcher);
                if (fetchControllers.has(staleKey)) {
                    abortFetcher(staleKey);
                }
                if (rf.controller) {
                    fetchControllers.set(staleKey, rf.controller);
                }
            });
            updateState({
                fetchers: new Map(state.fetchers)
            });
            let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
            abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
            let { results, loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
            if (abortController.signal.aborted) {
                return;
            }
            abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
            fetchReloadIds.delete(key);
            fetchControllers.delete(key);
            revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
            let redirect = findRedirect(results);
            if (redirect) {
                if (redirect.idx >= matchesToLoad.length) {
                    let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                    fetchRedirectIds.add(fetcherKey);
                }
                return startRedirectNavigation(state, redirect.result);
            }
            let { loaderData, errors } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
            if (state.fetchers.has(key)) {
                let doneFetcher = getDoneFetcher(actionResult.data);
                state.fetchers.set(key, doneFetcher);
            }
            abortStaleFetchLoads(loadId);
            if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
                invariant(pendingAction, "Expected pending action");
                pendingNavigationController && pendingNavigationController.abort();
                completeNavigation(state.navigation.location, {
                    matches,
                    loaderData,
                    errors,
                    fetchers: new Map(state.fetchers)
                });
            } else {
                updateState({
                    errors,
                    loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
                    fetchers: new Map(state.fetchers)
                });
                isRevalidationRequired = false;
            }
        }
        async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
            let existingFetcher = state.fetchers.get(key);
            updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
                flushSync
            });
            let abortController = new AbortController();
            let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
            fetchControllers.set(key, abortController);
            let originatingLoadId = incrementingLoadId;
            let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
            if (isDeferredResult(result)) {
                result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
            }
            if (fetchControllers.get(key) === abortController) {
                fetchControllers.delete(key);
            }
            if (fetchRequest.signal.aborted) {
                return;
            }
            if (deletedFetchers.has(key)) {
                updateFetcherState(key, getDoneFetcher(undefined));
                return;
            }
            if (isRedirectResult(result)) {
                if (pendingNavigationLoadId > originatingLoadId) {
                    updateFetcherState(key, getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    await startRedirectNavigation(state, result);
                    return;
                }
            }
            if (isErrorResult(result)) {
                setFetcherError(key, routeId, result.error);
                return;
            }
            invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
            updateFetcherState(key, getDoneFetcher(result.data));
        }
        async function startRedirectNavigation(state, redirect, _temp2) {
            let { submission, fetcherSubmission, replace } = _temp2 === void 0 ? {} : _temp2;
            if (redirect.revalidate) {
                isRevalidationRequired = true;
            }
            let redirectLocation = createLocation(state.location, redirect.location, {
                _isRedirect: true
            });
            invariant(redirectLocation, "Expected a location on the redirect navigation");
            if (isBrowser) {
                let isDocumentReload = false;
                if (redirect.reloadDocument) {
                    isDocumentReload = true;
                } else if (ABSOLUTE_URL_REGEX.test(redirect.location)) {
                    const url = init.history.createURL(redirect.location);
                    isDocumentReload = url.origin !== routerWindow.location.origin || stripBasename(url.pathname, basename) == null;
                }
                if (isDocumentReload) {
                    if (replace) {
                        routerWindow.location.replace(redirect.location);
                    } else {
                        routerWindow.location.assign(redirect.location);
                    }
                    return;
                }
            }
            pendingNavigationController = null;
            let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
            let { formMethod, formAction, formEncType } = state.navigation;
            if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
                submission = getSubmissionFromNavigation(state.navigation);
            }
            let activeSubmission = submission || fetcherSubmission;
            if (redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
                await startNavigation(redirectHistoryAction, redirectLocation, {
                    submission: _extends({}, activeSubmission, {
                        formAction: redirect.location
                    }),
                    preventScrollReset: pendingPreventScrollReset
                });
            } else {
                let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
                await startNavigation(redirectHistoryAction, redirectLocation, {
                    overrideNavigation,
                    fetcherSubmission,
                    preventScrollReset: pendingPreventScrollReset
                });
            }
        }
        async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
            let results = await Promise.all([
                ...matchesToLoad.map((match)=>callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath)),
                ...fetchersToLoad.map((f)=>{
                    if (f.matches && f.match && f.controller) {
                        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
                    } else {
                        let error = {
                            type: ResultType.error,
                            error: getInternalRouterError(404, {
                                pathname: f.path
                            })
                        };
                        return error;
                    }
                })
            ]);
            let loaderResults = results.slice(0, matchesToLoad.length);
            let fetcherResults = results.slice(matchesToLoad.length);
            await Promise.all([
                resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(()=>request.signal), false, state.loaderData),
                resolveDeferredResults(currentMatches, fetchersToLoad.map((f)=>f.match), fetcherResults, fetchersToLoad.map((f)=>f.controller ? f.controller.signal : null), true)
            ]);
            return {
                results,
                loaderResults,
                fetcherResults
            };
        }
        function interruptActiveLoads() {
            isRevalidationRequired = true;
            cancelledDeferredRoutes.push(...cancelActiveDeferreds());
            fetchLoadMatches.forEach((_, key)=>{
                if (fetchControllers.has(key)) {
                    cancelledFetcherLoads.push(key);
                    abortFetcher(key);
                }
            });
        }
        function updateFetcherState(key, fetcher, opts) {
            if (opts === void 0) {
                opts = {};
            }
            state.fetchers.set(key, fetcher);
            updateState({
                fetchers: new Map(state.fetchers)
            }, {
                flushSync: (opts && opts.flushSync) === true
            });
        }
        function setFetcherError(key, routeId, error, opts) {
            if (opts === void 0) {
                opts = {};
            }
            let boundaryMatch = findNearestBoundary(state.matches, routeId);
            deleteFetcher(key);
            updateState({
                errors: {
                    [boundaryMatch.route.id]: error
                },
                fetchers: new Map(state.fetchers)
            }, {
                flushSync: (opts && opts.flushSync) === true
            });
        }
        function getFetcher(key) {
            if (future.v7_fetcherPersist) {
                activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
                if (deletedFetchers.has(key)) {
                    deletedFetchers.delete(key);
                }
            }
            return state.fetchers.get(key) || IDLE_FETCHER;
        }
        function deleteFetcher(key) {
            let fetcher = state.fetchers.get(key);
            if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
                abortFetcher(key);
            }
            fetchLoadMatches.delete(key);
            fetchReloadIds.delete(key);
            fetchRedirectIds.delete(key);
            deletedFetchers.delete(key);
            state.fetchers.delete(key);
        }
        function deleteFetcherAndUpdateState(key) {
            if (future.v7_fetcherPersist) {
                let count = (activeFetchers.get(key) || 0) - 1;
                if (count <= 0) {
                    activeFetchers.delete(key);
                    deletedFetchers.add(key);
                } else {
                    activeFetchers.set(key, count);
                }
            } else {
                deleteFetcher(key);
            }
            updateState({
                fetchers: new Map(state.fetchers)
            });
        }
        function abortFetcher(key) {
            let controller = fetchControllers.get(key);
            invariant(controller, "Expected fetch controller: " + key);
            controller.abort();
            fetchControllers.delete(key);
        }
        function markFetchersDone(keys) {
            for (let key of keys){
                let fetcher = getFetcher(key);
                let doneFetcher = getDoneFetcher(fetcher.data);
                state.fetchers.set(key, doneFetcher);
            }
        }
        function markFetchRedirectsDone() {
            let doneKeys = [];
            let updatedFetchers = false;
            for (let key of fetchRedirectIds){
                let fetcher = state.fetchers.get(key);
                invariant(fetcher, "Expected fetcher: " + key);
                if (fetcher.state === "loading") {
                    fetchRedirectIds.delete(key);
                    doneKeys.push(key);
                    updatedFetchers = true;
                }
            }
            markFetchersDone(doneKeys);
            return updatedFetchers;
        }
        function abortStaleFetchLoads(landedId) {
            let yeetedKeys = [];
            for (let [key, id] of fetchReloadIds){
                if (id < landedId) {
                    let fetcher = state.fetchers.get(key);
                    invariant(fetcher, "Expected fetcher: " + key);
                    if (fetcher.state === "loading") {
                        abortFetcher(key);
                        fetchReloadIds.delete(key);
                        yeetedKeys.push(key);
                    }
                }
            }
            markFetchersDone(yeetedKeys);
            return yeetedKeys.length > 0;
        }
        function getBlocker(key, fn) {
            let blocker = state.blockers.get(key) || IDLE_BLOCKER;
            if (blockerFunctions.get(key) !== fn) {
                blockerFunctions.set(key, fn);
            }
            return blocker;
        }
        function deleteBlocker(key) {
            state.blockers.delete(key);
            blockerFunctions.delete(key);
        }
        function updateBlocker(key, newBlocker) {
            let blocker = state.blockers.get(key) || IDLE_BLOCKER;
            invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
            let blockers = new Map(state.blockers);
            blockers.set(key, newBlocker);
            updateState({
                blockers
            });
        }
        function shouldBlockNavigation(_ref4) {
            let { currentLocation, nextLocation, historyAction } = _ref4;
            if (blockerFunctions.size === 0) {
                return;
            }
            if (blockerFunctions.size > 1) {
                warning(false, "A router only supports one blocker at a time");
            }
            let entries = Array.from(blockerFunctions.entries());
            let [blockerKey, blockerFunction] = entries[entries.length - 1];
            let blocker = state.blockers.get(blockerKey);
            if (blocker && blocker.state === "proceeding") {
                return;
            }
            if (blockerFunction({
                currentLocation,
                nextLocation,
                historyAction
            })) {
                return blockerKey;
            }
        }
        function cancelActiveDeferreds(predicate) {
            let cancelledRouteIds = [];
            activeDeferreds.forEach((dfd, routeId)=>{
                if (!predicate || predicate(routeId)) {
                    dfd.cancel();
                    cancelledRouteIds.push(routeId);
                    activeDeferreds.delete(routeId);
                }
            });
            return cancelledRouteIds;
        }
        function enableScrollRestoration(positions, getPosition, getKey) {
            savedScrollPositions = positions;
            getScrollPosition = getPosition;
            getScrollRestorationKey = getKey || null;
            if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
                initialScrollRestored = true;
                let y = getSavedScrollPosition(state.location, state.matches);
                if (y != null) {
                    updateState({
                        restoreScrollPosition: y
                    });
                }
            }
            return ()=>{
                savedScrollPositions = null;
                getScrollPosition = null;
                getScrollRestorationKey = null;
            };
        }
        function getScrollKey(location, matches) {
            if (getScrollRestorationKey) {
                let key = getScrollRestorationKey(location, matches.map((m)=>convertRouteMatchToUiMatch(m, state.loaderData)));
                return key || location.key;
            }
            return location.key;
        }
        function saveScrollPosition(location, matches) {
            if (savedScrollPositions && getScrollPosition) {
                let key = getScrollKey(location, matches);
                savedScrollPositions[key] = getScrollPosition();
            }
        }
        function getSavedScrollPosition(location, matches) {
            if (savedScrollPositions) {
                let key = getScrollKey(location, matches);
                let y = savedScrollPositions[key];
                if (typeof y === "number") {
                    return y;
                }
            }
            return null;
        }
        function _internalSetRoutes(newRoutes) {
            manifest = {};
            inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
        }
        router = {
            get basename () {
                return basename;
            },
            get future () {
                return future;
            },
            get state () {
                return state;
            },
            get routes () {
                return dataRoutes;
            },
            get window () {
                return routerWindow;
            },
            initialize,
            subscribe,
            enableScrollRestoration,
            navigate,
            fetch,
            revalidate,
            createHref: (to)=>init.history.createHref(to),
            encodeLocation: (to)=>init.history.encodeLocation(to),
            getFetcher,
            deleteFetcher: deleteFetcherAndUpdateState,
            dispose,
            getBlocker,
            deleteBlocker,
            _internalFetchControllers: fetchControllers,
            _internalActiveDeferreds: activeDeferreds,
            _internalSetRoutes
        };
        return router;
    }
    const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
    function createStaticHandler(routes, opts) {
        invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
        let manifest = {};
        let basename = (opts ? opts.basename : null) || "/";
        let mapRouteProperties;
        if (opts != null && opts.mapRouteProperties) {
            mapRouteProperties = opts.mapRouteProperties;
        } else if (opts != null && opts.detectErrorBoundary) {
            let detectErrorBoundary = opts.detectErrorBoundary;
            mapRouteProperties = (route)=>({
                    hasErrorBoundary: detectErrorBoundary(route)
                });
        } else {
            mapRouteProperties = defaultMapRouteProperties;
        }
        let future = _extends({
            v7_relativeSplatPath: false,
            v7_throwAbortReason: false
        }, opts ? opts.future : null);
        let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
        async function query(request, _temp3) {
            let { requestContext } = _temp3 === void 0 ? {} : _temp3;
            let url = new URL(request.url);
            let method = request.method;
            let location = createLocation("", createPath(url), null, "default");
            let matches = matchRoutes(dataRoutes, location, basename);
            if (!isValidMethod(method) && method !== "HEAD") {
                let error = getInternalRouterError(405, {
                    method
                });
                let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
                return {
                    basename,
                    location,
                    matches: methodNotAllowedMatches,
                    loaderData: {},
                    actionData: null,
                    errors: {
                        [route.id]: error
                    },
                    statusCode: error.status,
                    loaderHeaders: {},
                    actionHeaders: {},
                    activeDeferreds: null
                };
            } else if (!matches) {
                let error = getInternalRouterError(404, {
                    pathname: location.pathname
                });
                let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
                return {
                    basename,
                    location,
                    matches: notFoundMatches,
                    loaderData: {},
                    actionData: null,
                    errors: {
                        [route.id]: error
                    },
                    statusCode: error.status,
                    loaderHeaders: {},
                    actionHeaders: {},
                    activeDeferreds: null
                };
            }
            let result = await queryImpl(request, location, matches, requestContext);
            if (isResponse(result)) {
                return result;
            }
            return _extends({
                location,
                basename
            }, result);
        }
        async function queryRoute(request, _temp4) {
            let { routeId, requestContext } = _temp4 === void 0 ? {} : _temp4;
            let url = new URL(request.url);
            let method = request.method;
            let location = createLocation("", createPath(url), null, "default");
            let matches = matchRoutes(dataRoutes, location, basename);
            if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
                throw getInternalRouterError(405, {
                    method
                });
            } else if (!matches) {
                throw getInternalRouterError(404, {
                    pathname: location.pathname
                });
            }
            let match = routeId ? matches.find((m)=>m.route.id === routeId) : getTargetMatch(matches, location);
            if (routeId && !match) {
                throw getInternalRouterError(403, {
                    pathname: location.pathname,
                    routeId
                });
            } else if (!match) {
                throw getInternalRouterError(404, {
                    pathname: location.pathname
                });
            }
            let result = await queryImpl(request, location, matches, requestContext, match);
            if (isResponse(result)) {
                return result;
            }
            let error = result.errors ? Object.values(result.errors)[0] : undefined;
            if (error !== undefined) {
                throw error;
            }
            if (result.actionData) {
                return Object.values(result.actionData)[0];
            }
            if (result.loaderData) {
                var _result$activeDeferre;
                let data = Object.values(result.loaderData)[0];
                if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
                    data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
                }
                return data;
            }
            return undefined;
        }
        async function queryImpl(request, location, matches, requestContext, routeMatch) {
            invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
            try {
                if (isMutationMethod(request.method.toLowerCase())) {
                    let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
                    return result;
                }
                let result = await loadRouteData(request, matches, requestContext, routeMatch);
                return isResponse(result) ? result : _extends({}, result, {
                    actionData: null,
                    actionHeaders: {}
                });
            } catch (e) {
                if (isQueryRouteResponse(e)) {
                    if (e.type === ResultType.error) {
                        throw e.response;
                    }
                    return e.response;
                }
                if (isRedirectResponse(e)) {
                    return e;
                }
                throw e;
            }
        }
        async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
            let result;
            if (!actionMatch.route.action && !actionMatch.route.lazy) {
                let error = getInternalRouterError(405, {
                    method: request.method,
                    pathname: new URL(request.url).pathname,
                    routeId: actionMatch.route.id
                });
                if (isRouteRequest) {
                    throw error;
                }
                result = {
                    type: ResultType.error,
                    error
                };
            } else {
                result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
                    isStaticRequest: true,
                    isRouteRequest,
                    requestContext
                });
                if (request.signal.aborted) {
                    throwStaticHandlerAbortedError(request, isRouteRequest, future);
                }
            }
            if (isRedirectResult(result)) {
                throw new Response(null, {
                    status: result.status,
                    headers: {
                        Location: result.location
                    }
                });
            }
            if (isDeferredResult(result)) {
                let error = getInternalRouterError(400, {
                    type: "defer-action"
                });
                if (isRouteRequest) {
                    throw error;
                }
                result = {
                    type: ResultType.error,
                    error
                };
            }
            if (isRouteRequest) {
                if (isErrorResult(result)) {
                    throw result.error;
                }
                return {
                    matches: [
                        actionMatch
                    ],
                    loaderData: {},
                    actionData: {
                        [actionMatch.route.id]: result.data
                    },
                    errors: null,
                    statusCode: 200,
                    loaderHeaders: {},
                    actionHeaders: {},
                    activeDeferreds: null
                };
            }
            if (isErrorResult(result)) {
                let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                let context = await loadRouteData(request, matches, requestContext, undefined, {
                    [boundaryMatch.route.id]: result.error
                });
                return _extends({}, context, {
                    statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
                    actionData: null,
                    actionHeaders: _extends({}, result.headers ? {
                        [actionMatch.route.id]: result.headers
                    } : {})
                });
            }
            let loaderRequest = new Request(request.url, {
                headers: request.headers,
                redirect: request.redirect,
                signal: request.signal
            });
            let context = await loadRouteData(loaderRequest, matches, requestContext);
            return _extends({}, context, result.statusCode ? {
                statusCode: result.statusCode
            } : {}, {
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                actionHeaders: _extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        }
        async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
            let isRouteRequest = routeMatch != null;
            if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
                throw getInternalRouterError(400, {
                    method: request.method,
                    pathname: new URL(request.url).pathname,
                    routeId: routeMatch == null ? void 0 : routeMatch.route.id
                });
            }
            let requestMatches = routeMatch ? [
                routeMatch
            ] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
            let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
            if (matchesToLoad.length === 0) {
                return {
                    matches,
                    loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                            [m.route.id]: null
                        }), {}),
                    errors: pendingActionError || null,
                    statusCode: 200,
                    loaderHeaders: {},
                    activeDeferreds: null
                };
            }
            let results = await Promise.all([
                ...matchesToLoad.map((match)=>callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
                        isStaticRequest: true,
                        isRouteRequest,
                        requestContext
                    }))
            ]);
            if (request.signal.aborted) {
                throwStaticHandlerAbortedError(request, isRouteRequest, future);
            }
            let activeDeferreds = new Map();
            let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
            let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
            matches.forEach((match)=>{
                if (!executedLoaders.has(match.route.id)) {
                    context.loaderData[match.route.id] = null;
                }
            });
            return _extends({}, context, {
                matches,
                activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
            });
        }
        return {
            dataRoutes,
            query,
            queryRoute
        };
    }
    function getStaticContextFromError(routes, context, error) {
        let newContext = _extends({}, context, {
            statusCode: isRouteErrorResponse(error) ? error.status : 500,
            errors: {
                [context._deepestRenderedBoundaryId || routes[0].id]: error
            }
        });
        return newContext;
    }
    function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
        if (future.v7_throwAbortReason && request.signal.reason !== undefined) {
            throw request.signal.reason;
        }
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    function isSubmissionNavigation(opts) {
        return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
    }
    function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
        let contextualMatches;
        let activeRouteMatch;
        if (fromRouteId) {
            contextualMatches = [];
            for (let match of matches){
                contextualMatches.push(match);
                if (match.route.id === fromRouteId) {
                    activeRouteMatch = match;
                    break;
                }
            }
        } else {
            contextualMatches = matches;
            activeRouteMatch = matches[matches.length - 1];
        }
        let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
        if (to == null) {
            path.search = location.search;
            path.hash = location.hash;
        }
        if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
            path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        }
        if (prependBasename && basename !== "/") {
            path.pathname = path.pathname === "/" ? basename : joinPaths([
                basename,
                path.pathname
            ]);
        }
        return createPath(path);
    }
    function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
        if (!opts || !isSubmissionNavigation(opts)) {
            return {
                path
            };
        }
        if (opts.formMethod && !isValidMethod(opts.formMethod)) {
            return {
                path,
                error: getInternalRouterError(405, {
                    method: opts.formMethod
                })
            };
        }
        let getInvalidBodyError = ()=>({
                path,
                error: getInternalRouterError(400, {
                    type: "invalid-body"
                })
            });
        let rawFormMethod = opts.formMethod || "get";
        let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
        let formAction = stripHashFromPath(path);
        if (opts.body !== undefined) {
            if (opts.formEncType === "text/plain") {
                if (!isMutationMethod(formMethod)) {
                    return getInvalidBodyError();
                }
                let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, _ref5)=>{
                    let [name, value] = _ref5;
                    return "" + acc + name + "=" + value + "\n";
                }, "") : String(opts.body);
                return {
                    path,
                    submission: {
                        formMethod,
                        formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json: undefined,
                        text
                    }
                };
            } else if (opts.formEncType === "application/json") {
                if (!isMutationMethod(formMethod)) {
                    return getInvalidBodyError();
                }
                try {
                    let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                    return {
                        path,
                        submission: {
                            formMethod,
                            formAction,
                            formEncType: opts.formEncType,
                            formData: undefined,
                            json,
                            text: undefined
                        }
                    };
                } catch (e) {
                    return getInvalidBodyError();
                }
            }
        }
        invariant(typeof FormData === "function", "FormData is not available in this environment");
        let searchParams;
        let formData;
        if (opts.formData) {
            searchParams = convertFormDataToSearchParams(opts.formData);
            formData = opts.formData;
        } else if (opts.body instanceof FormData) {
            searchParams = convertFormDataToSearchParams(opts.body);
            formData = opts.body;
        } else if (opts.body instanceof URLSearchParams) {
            searchParams = opts.body;
            formData = convertSearchParamsToFormData(searchParams);
        } else if (opts.body == null) {
            searchParams = new URLSearchParams();
            formData = new FormData();
        } else {
            try {
                searchParams = new URLSearchParams(opts.body);
                formData = convertSearchParamsToFormData(searchParams);
            } catch (e) {
                return getInvalidBodyError();
            }
        }
        let submission = {
            formMethod,
            formAction,
            formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
            formData,
            json: undefined,
            text: undefined
        };
        if (isMutationMethod(submission.formMethod)) {
            return {
                path,
                submission
            };
        }
        let parsedPath = parsePath(path);
        if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
            searchParams.append("index", "");
        }
        parsedPath.search = "?" + searchParams;
        return {
            path: createPath(parsedPath),
            submission
        };
    }
    function getLoaderMatchesUntilBoundary(matches, boundaryId) {
        let boundaryMatches = matches;
        if (boundaryId) {
            let index = matches.findIndex((m)=>m.route.id === boundaryId);
            if (index >= 0) {
                boundaryMatches = matches.slice(0, index);
            }
        }
        return boundaryMatches;
    }
    function getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
        let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
        let currentUrl = history.createURL(state.location);
        let nextUrl = history.createURL(location);
        let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
        let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
        let navigationMatches = boundaryMatches.filter((match, index)=>{
            let { route } = match;
            if (route.lazy) {
                return true;
            }
            if (route.loader == null) {
                return false;
            }
            if (isInitialLoad) {
                if (route.loader.hydrate) {
                    return true;
                }
                return state.loaderData[route.id] === undefined && (!state.errors || state.errors[route.id] === undefined);
            }
            if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) {
                return true;
            }
            let currentRouteMatch = state.matches[index];
            let nextRouteMatch = match;
            return shouldRevalidateLoader(match, _extends({
                currentUrl,
                currentParams: currentRouteMatch.params,
                nextUrl,
                nextParams: nextRouteMatch.params
            }, submission, {
                actionResult,
                defaultShouldRevalidate: isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
            }));
        });
        let revalidatingFetchers = [];
        fetchLoadMatches.forEach((f, key)=>{
            if (isInitialLoad || !matches.some((m)=>m.route.id === f.routeId) || deletedFetchers.has(key)) {
                return;
            }
            let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
            if (!fetcherMatches) {
                revalidatingFetchers.push({
                    key,
                    routeId: f.routeId,
                    path: f.path,
                    matches: null,
                    match: null,
                    controller: null
                });
                return;
            }
            let fetcher = state.fetchers.get(key);
            let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
            let shouldRevalidate = false;
            if (fetchRedirectIds.has(key)) {
                shouldRevalidate = false;
            } else if (cancelledFetcherLoads.includes(key)) {
                shouldRevalidate = true;
            } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
                shouldRevalidate = isRevalidationRequired;
            } else {
                shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
                    currentUrl,
                    currentParams: state.matches[state.matches.length - 1].params,
                    nextUrl,
                    nextParams: matches[matches.length - 1].params
                }, submission, {
                    actionResult,
                    defaultShouldRevalidate: isRevalidationRequired
                }));
            }
            if (shouldRevalidate) {
                revalidatingFetchers.push({
                    key,
                    routeId: f.routeId,
                    path: f.path,
                    matches: fetcherMatches,
                    match: fetcherMatch,
                    controller: new AbortController()
                });
            }
        });
        return [
            navigationMatches,
            revalidatingFetchers
        ];
    }
    function isNewLoader(currentLoaderData, currentMatch, match) {
        let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
        let isMissingData = currentLoaderData[match.route.id] === undefined;
        return isNew || isMissingData;
    }
    function isNewRouteInstance(currentMatch, match) {
        let currentPath = currentMatch.route.path;
        return currentMatch.pathname !== match.pathname || currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
    }
    function shouldRevalidateLoader(loaderMatch, arg) {
        if (loaderMatch.route.shouldRevalidate) {
            let routeChoice = loaderMatch.route.shouldRevalidate(arg);
            if (typeof routeChoice === "boolean") {
                return routeChoice;
            }
        }
        return arg.defaultShouldRevalidate;
    }
    async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
        if (!route.lazy) {
            return;
        }
        let lazyRoute = await route.lazy();
        if (!route.lazy) {
            return;
        }
        let routeToUpdate = manifest[route.id];
        invariant(routeToUpdate, "No route found in manifest");
        let routeUpdates = {};
        for(let lazyRouteProperty in lazyRoute){
            let staticRouteValue = routeToUpdate[lazyRouteProperty];
            let isPropertyStaticallyDefined = staticRouteValue !== undefined && lazyRouteProperty !== "hasErrorBoundary";
            warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
            if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
                routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
            }
        }
        Object.assign(routeToUpdate, routeUpdates);
        Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
            lazy: undefined
        }));
    }
    async function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, v7_relativeSplatPath, opts) {
        if (opts === void 0) {
            opts = {};
        }
        let resultType;
        let result;
        let onReject;
        let runHandler = (handler)=>{
            let reject;
            let abortPromise = new Promise((_, r)=>reject = r);
            onReject = ()=>reject();
            request.signal.addEventListener("abort", onReject);
            return Promise.race([
                handler({
                    request,
                    params: match.params,
                    context: opts.requestContext
                }),
                abortPromise
            ]);
        };
        try {
            let handler = match.route[type];
            if (match.route.lazy) {
                if (handler) {
                    let handlerError;
                    let values = await Promise.all([
                        runHandler(handler).catch((e)=>{
                            handlerError = e;
                        }),
                        loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                    ]);
                    if (handlerError) {
                        throw handlerError;
                    }
                    result = values[0];
                } else {
                    await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
                    handler = match.route[type];
                    if (handler) {
                        result = await runHandler(handler);
                    } else if (type === "action") {
                        let url = new URL(request.url);
                        let pathname = url.pathname + url.search;
                        throw getInternalRouterError(405, {
                            method: request.method,
                            pathname,
                            routeId: match.route.id
                        });
                    } else {
                        return {
                            type: ResultType.data,
                            data: undefined
                        };
                    }
                }
            } else if (!handler) {
                let url = new URL(request.url);
                let pathname = url.pathname + url.search;
                throw getInternalRouterError(404, {
                    pathname
                });
            } else {
                result = await runHandler(handler);
            }
            invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
        } catch (e) {
            resultType = ResultType.error;
            result = e;
        } finally{
            if (onReject) {
                request.signal.removeEventListener("abort", onReject);
            }
        }
        if (isResponse(result)) {
            let status = result.status;
            if (redirectStatusCodes.has(status)) {
                let location = result.headers.get("Location");
                invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
                if (!ABSOLUTE_URL_REGEX.test(location)) {
                    location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location, v7_relativeSplatPath);
                } else if (!opts.isStaticRequest) {
                    let currentUrl = new URL(request.url);
                    let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
                    let isSameBasename = stripBasename(url.pathname, basename) != null;
                    if (url.origin === currentUrl.origin && isSameBasename) {
                        location = url.pathname + url.search + url.hash;
                    }
                }
                if (opts.isStaticRequest) {
                    result.headers.set("Location", location);
                    throw result;
                }
                return {
                    type: ResultType.redirect,
                    status,
                    location,
                    revalidate: result.headers.get("X-Remix-Revalidate") !== null,
                    reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
                };
            }
            if (opts.isRouteRequest) {
                let queryRouteResponse = {
                    type: resultType === ResultType.error ? ResultType.error : ResultType.data,
                    response: result
                };
                throw queryRouteResponse;
            }
            let data;
            try {
                let contentType = result.headers.get("Content-Type");
                if (contentType && /\bapplication\/json\b/.test(contentType)) {
                    if (result.body == null) {
                        data = null;
                    } else {
                        data = await result.json();
                    }
                } else {
                    data = await result.text();
                }
            } catch (e) {
                return {
                    type: ResultType.error,
                    error: e
                };
            }
            if (resultType === ResultType.error) {
                return {
                    type: resultType,
                    error: new ErrorResponseImpl(status, result.statusText, data),
                    headers: result.headers
                };
            }
            return {
                type: ResultType.data,
                data,
                statusCode: result.status,
                headers: result.headers
            };
        }
        if (resultType === ResultType.error) {
            return {
                type: resultType,
                error: result
            };
        }
        if (isDeferredData(result)) {
            var _result$init, _result$init2;
            return {
                type: ResultType.deferred,
                deferredData: result,
                statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
                headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
            };
        }
        return {
            type: ResultType.data,
            data: result
        };
    }
    function createClientSideRequest(history, location, signal, submission) {
        let url = history.createURL(stripHashFromPath(location)).toString();
        let init = {
            signal
        };
        if (submission && isMutationMethod(submission.formMethod)) {
            let { formMethod, formEncType } = submission;
            init.method = formMethod.toUpperCase();
            if (formEncType === "application/json") {
                init.headers = new Headers({
                    "Content-Type": formEncType
                });
                init.body = JSON.stringify(submission.json);
            } else if (formEncType === "text/plain") {
                init.body = submission.text;
            } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
                init.body = convertFormDataToSearchParams(submission.formData);
            } else {
                init.body = submission.formData;
            }
        }
        return new Request(url, init);
    }
    function convertFormDataToSearchParams(formData) {
        let searchParams = new URLSearchParams();
        for (let [key, value] of formData.entries()){
            searchParams.append(key, typeof value === "string" ? value : value.name);
        }
        return searchParams;
    }
    function convertSearchParamsToFormData(searchParams) {
        let formData = new FormData();
        for (let [key, value] of searchParams.entries()){
            formData.append(key, value);
        }
        return formData;
    }
    function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
        let loaderData = {};
        let errors = null;
        let statusCode;
        let foundError = false;
        let loaderHeaders = {};
        results.forEach((result, index)=>{
            let id = matchesToLoad[index].route.id;
            invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
            if (isErrorResult(result)) {
                let boundaryMatch = findNearestBoundary(matches, id);
                let error = result.error;
                if (pendingError) {
                    error = Object.values(pendingError)[0];
                    pendingError = undefined;
                }
                errors = errors || {};
                if (errors[boundaryMatch.route.id] == null) {
                    errors[boundaryMatch.route.id] = error;
                }
                loaderData[id] = undefined;
                if (!foundError) {
                    foundError = true;
                    statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
                }
                if (result.headers) {
                    loaderHeaders[id] = result.headers;
                }
            } else {
                if (isDeferredResult(result)) {
                    activeDeferreds.set(id, result.deferredData);
                    loaderData[id] = result.deferredData.data;
                } else {
                    loaderData[id] = result.data;
                }
                if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
                    statusCode = result.statusCode;
                }
                if (result.headers) {
                    loaderHeaders[id] = result.headers;
                }
            }
        });
        if (pendingError) {
            errors = pendingError;
            loaderData[Object.keys(pendingError)[0]] = undefined;
        }
        return {
            loaderData,
            errors,
            statusCode: statusCode || 200,
            loaderHeaders
        };
    }
    function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
        let { loaderData, errors } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
        for(let index = 0; index < revalidatingFetchers.length; index++){
            let { key, match, controller } = revalidatingFetchers[index];
            invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
            let result = fetcherResults[index];
            if (controller && controller.signal.aborted) {
                continue;
            } else if (isErrorResult(result)) {
                let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
                if (!(errors && errors[boundaryMatch.route.id])) {
                    errors = _extends({}, errors, {
                        [boundaryMatch.route.id]: result.error
                    });
                }
                state.fetchers.delete(key);
            } else if (isRedirectResult(result)) {
                invariant(false, "Unhandled fetcher revalidation redirect");
            } else if (isDeferredResult(result)) {
                invariant(false, "Unhandled fetcher deferred data");
            } else {
                let doneFetcher = getDoneFetcher(result.data);
                state.fetchers.set(key, doneFetcher);
            }
        }
        return {
            loaderData,
            errors
        };
    }
    function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
        let mergedLoaderData = _extends({}, newLoaderData);
        for (let match of matches){
            let id = match.route.id;
            if (newLoaderData.hasOwnProperty(id)) {
                if (newLoaderData[id] !== undefined) {
                    mergedLoaderData[id] = newLoaderData[id];
                }
            } else if (loaderData[id] !== undefined && match.route.loader) {
                mergedLoaderData[id] = loaderData[id];
            }
            if (errors && errors.hasOwnProperty(id)) {
                break;
            }
        }
        return mergedLoaderData;
    }
    function findNearestBoundary(matches, routeId) {
        let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
            ...matches
        ];
        return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
    }
    function getShortCircuitMatches(routes) {
        let route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
            id: "__shim-error-route__"
        };
        return {
            matches: [
                {
                    params: {},
                    pathname: "",
                    pathnameBase: "",
                    route
                }
            ],
            route
        };
    }
    function getInternalRouterError(status, _temp5) {
        let { pathname, routeId, method, type } = _temp5 === void 0 ? {} : _temp5;
        let statusText = "Unknown Server Error";
        let errorMessage = "Unknown @remix-run/router error";
        if (status === 400) {
            statusText = "Bad Request";
            if (method && pathname && routeId) {
                errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
            } else if (type === "defer-action") {
                errorMessage = "defer() is not supported in actions";
            } else if (type === "invalid-body") {
                errorMessage = "Unable to encode submission body";
            }
        } else if (status === 403) {
            statusText = "Forbidden";
            errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
        } else if (status === 404) {
            statusText = "Not Found";
            errorMessage = 'No route matches URL "' + pathname + '"';
        } else if (status === 405) {
            statusText = "Method Not Allowed";
            if (method && pathname && routeId) {
                errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
            } else if (method) {
                errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
            }
        }
        return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
    }
    function findRedirect(results) {
        for(let i = results.length - 1; i >= 0; i--){
            let result = results[i];
            if (isRedirectResult(result)) {
                return {
                    result,
                    idx: i
                };
            }
        }
    }
    function stripHashFromPath(path) {
        let parsedPath = typeof path === "string" ? parsePath(path) : path;
        return createPath(_extends({}, parsedPath, {
            hash: ""
        }));
    }
    function isHashChangeOnly(a, b) {
        if (a.pathname !== b.pathname || a.search !== b.search) {
            return false;
        }
        if (a.hash === "") {
            return b.hash !== "";
        } else if (a.hash === b.hash) {
            return true;
        } else if (b.hash !== "") {
            return true;
        }
        return false;
    }
    function isDeferredResult(result) {
        return result.type === ResultType.deferred;
    }
    function isErrorResult(result) {
        return result.type === ResultType.error;
    }
    function isRedirectResult(result) {
        return (result && result.type) === ResultType.redirect;
    }
    function isDeferredData(value) {
        let deferred = value;
        return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
    }
    function isResponse(value) {
        return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
    }
    function isRedirectResponse(result) {
        if (!isResponse(result)) {
            return false;
        }
        let status = result.status;
        let location = result.headers.get("Location");
        return status >= 300 && status <= 399 && location != null;
    }
    function isQueryRouteResponse(obj) {
        return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
    }
    function isValidMethod(method) {
        return validRequestMethods.has(method.toLowerCase());
    }
    function isMutationMethod(method) {
        return validMutationMethods.has(method.toLowerCase());
    }
    async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
        for(let index = 0; index < results.length; index++){
            let result = results[index];
            let match = matchesToLoad[index];
            if (!match) {
                continue;
            }
            let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
            let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
            if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
                let signal = signals[index];
                invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
                await resolveDeferredData(result, signal, isFetcher).then((result)=>{
                    if (result) {
                        results[index] = result || results[index];
                    }
                });
            }
        }
    }
    async function resolveDeferredData(result, signal, unwrap) {
        if (unwrap === void 0) {
            unwrap = false;
        }
        let aborted = await result.deferredData.resolveData(signal);
        if (aborted) {
            return;
        }
        if (unwrap) {
            try {
                return {
                    type: ResultType.data,
                    data: result.deferredData.unwrappedData
                };
            } catch (e) {
                return {
                    type: ResultType.error,
                    error: e
                };
            }
        }
        return {
            type: ResultType.data,
            data: result.deferredData.data
        };
    }
    function hasNakedIndexQuery(search) {
        return new URLSearchParams(search).getAll("index").some((v)=>v === "");
    }
    function getTargetMatch(matches, location) {
        let search = typeof location === "string" ? parsePath(location).search : location.search;
        if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
            return matches[matches.length - 1];
        }
        let pathMatches = getPathContributingMatches(matches);
        return pathMatches[pathMatches.length - 1];
    }
    function getSubmissionFromNavigation(navigation) {
        let { formMethod, formAction, formEncType, text, formData, json } = navigation;
        if (!formMethod || !formAction || !formEncType) {
            return;
        }
        if (text != null) {
            return {
                formMethod,
                formAction,
                formEncType,
                formData: undefined,
                json: undefined,
                text
            };
        } else if (formData != null) {
            return {
                formMethod,
                formAction,
                formEncType,
                formData,
                json: undefined,
                text: undefined
            };
        } else if (json !== undefined) {
            return {
                formMethod,
                formAction,
                formEncType,
                formData: undefined,
                json,
                text: undefined
            };
        }
    }
    function getLoadingNavigation(location, submission) {
        if (submission) {
            let navigation = {
                state: "loading",
                location,
                formMethod: submission.formMethod,
                formAction: submission.formAction,
                formEncType: submission.formEncType,
                formData: submission.formData,
                json: submission.json,
                text: submission.text
            };
            return navigation;
        } else {
            let navigation = {
                state: "loading",
                location,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                json: undefined,
                text: undefined
            };
            return navigation;
        }
    }
    function getSubmittingNavigation(location, submission) {
        let navigation = {
            state: "submitting",
            location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    }
    function getLoadingFetcher(submission, data) {
        if (submission) {
            let fetcher = {
                state: "loading",
                formMethod: submission.formMethod,
                formAction: submission.formAction,
                formEncType: submission.formEncType,
                formData: submission.formData,
                json: submission.json,
                text: submission.text,
                data
            };
            return fetcher;
        } else {
            let fetcher = {
                state: "loading",
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                json: undefined,
                text: undefined,
                data
            };
            return fetcher;
        }
    }
    function getSubmittingFetcher(submission, existingFetcher) {
        let fetcher = {
            state: "submitting",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data: existingFetcher ? existingFetcher.data : undefined
        };
        return fetcher;
    }
    function getDoneFetcher(data) {
        let fetcher = {
            state: "idle",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data
        };
        return fetcher;
    }
    function restoreAppliedTransitions(_window, transitions) {
        try {
            let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
            if (sessionPositions) {
                let json = JSON.parse(sessionPositions);
                for (let [k, v] of Object.entries(json || {})){
                    if (v && Array.isArray(v)) {
                        transitions.set(k, new Set(v || []));
                    }
                }
            }
        } catch (e) {}
    }
    function persistAppliedTransitions(_window, transitions) {
        if (transitions.size > 0) {
            let json = {};
            for (let [k, v] of transitions){
                json[k] = [
                    ...v
                ];
            }
            try {
                _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
            } catch (error) {
                warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
            }
        }
    }
}
,});