(function(_){for(var r in _){_[r].__farm_resource_pot__='index_ce5c.js';(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__.register(r,_[r])}})({"node_modules/.pnpm/react-router-dom@6.22.3_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js":/**
 * React Router DOM v6.22.3
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
            return _reactrouter.AbortedDeferredError;
        },
        Await: function() {
            return _reactrouter.Await;
        },
        BrowserRouter: function() {
            return BrowserRouter;
        },
        Form: function() {
            return Form;
        },
        HashRouter: function() {
            return HashRouter;
        },
        Link: function() {
            return Link;
        },
        MemoryRouter: function() {
            return _reactrouter.MemoryRouter;
        },
        NavLink: function() {
            return NavLink;
        },
        Navigate: function() {
            return _reactrouter.Navigate;
        },
        NavigationType: function() {
            return _reactrouter.NavigationType;
        },
        Outlet: function() {
            return _reactrouter.Outlet;
        },
        Route: function() {
            return _reactrouter.Route;
        },
        Router: function() {
            return _reactrouter.Router;
        },
        RouterProvider: function() {
            return RouterProvider;
        },
        Routes: function() {
            return _reactrouter.Routes;
        },
        ScrollRestoration: function() {
            return ScrollRestoration;
        },
        UNSAFE_DataRouterContext: function() {
            return _reactrouter.UNSAFE_DataRouterContext;
        },
        UNSAFE_DataRouterStateContext: function() {
            return _reactrouter.UNSAFE_DataRouterStateContext;
        },
        UNSAFE_FetchersContext: function() {
            return FetchersContext;
        },
        UNSAFE_LocationContext: function() {
            return _reactrouter.UNSAFE_LocationContext;
        },
        UNSAFE_NavigationContext: function() {
            return _reactrouter.UNSAFE_NavigationContext;
        },
        UNSAFE_RouteContext: function() {
            return _reactrouter.UNSAFE_RouteContext;
        },
        UNSAFE_ViewTransitionContext: function() {
            return ViewTransitionContext;
        },
        UNSAFE_useRouteId: function() {
            return _reactrouter.UNSAFE_useRouteId;
        },
        UNSAFE_useScrollRestoration: function() {
            return useScrollRestoration;
        },
        createBrowserRouter: function() {
            return createBrowserRouter;
        },
        createHashRouter: function() {
            return createHashRouter;
        },
        createMemoryRouter: function() {
            return _reactrouter.createMemoryRouter;
        },
        createPath: function() {
            return _reactrouter.createPath;
        },
        createRoutesFromChildren: function() {
            return _reactrouter.createRoutesFromChildren;
        },
        createRoutesFromElements: function() {
            return _reactrouter.createRoutesFromElements;
        },
        createSearchParams: function() {
            return createSearchParams;
        },
        defer: function() {
            return _reactrouter.defer;
        },
        generatePath: function() {
            return _reactrouter.generatePath;
        },
        isRouteErrorResponse: function() {
            return _reactrouter.isRouteErrorResponse;
        },
        json: function() {
            return _reactrouter.json;
        },
        matchPath: function() {
            return _reactrouter.matchPath;
        },
        matchRoutes: function() {
            return _reactrouter.matchRoutes;
        },
        parsePath: function() {
            return _reactrouter.parsePath;
        },
        redirect: function() {
            return _reactrouter.redirect;
        },
        redirectDocument: function() {
            return _reactrouter.redirectDocument;
        },
        renderMatches: function() {
            return _reactrouter.renderMatches;
        },
        resolvePath: function() {
            return _reactrouter.resolvePath;
        },
        unstable_HistoryRouter: function() {
            return HistoryRouter;
        },
        unstable_usePrompt: function() {
            return usePrompt;
        },
        unstable_useViewTransitionState: function() {
            return useViewTransitionState;
        },
        useActionData: function() {
            return _reactrouter.useActionData;
        },
        useAsyncError: function() {
            return _reactrouter.useAsyncError;
        },
        useAsyncValue: function() {
            return _reactrouter.useAsyncValue;
        },
        useBeforeUnload: function() {
            return useBeforeUnload;
        },
        useBlocker: function() {
            return _reactrouter.useBlocker;
        },
        useFetcher: function() {
            return useFetcher;
        },
        useFetchers: function() {
            return useFetchers;
        },
        useFormAction: function() {
            return useFormAction;
        },
        useHref: function() {
            return _reactrouter.useHref;
        },
        useInRouterContext: function() {
            return _reactrouter.useInRouterContext;
        },
        useLinkClickHandler: function() {
            return useLinkClickHandler;
        },
        useLoaderData: function() {
            return _reactrouter.useLoaderData;
        },
        useLocation: function() {
            return _reactrouter.useLocation;
        },
        useMatch: function() {
            return _reactrouter.useMatch;
        },
        useMatches: function() {
            return _reactrouter.useMatches;
        },
        useNavigate: function() {
            return _reactrouter.useNavigate;
        },
        useNavigation: function() {
            return _reactrouter.useNavigation;
        },
        useNavigationType: function() {
            return _reactrouter.useNavigationType;
        },
        useOutlet: function() {
            return _reactrouter.useOutlet;
        },
        useOutletContext: function() {
            return _reactrouter.useOutletContext;
        },
        useParams: function() {
            return _reactrouter.useParams;
        },
        useResolvedPath: function() {
            return _reactrouter.useResolvedPath;
        },
        useRevalidator: function() {
            return _reactrouter.useRevalidator;
        },
        useRouteError: function() {
            return _reactrouter.useRouteError;
        },
        useRouteLoaderData: function() {
            return _reactrouter.useRouteLoaderData;
        },
        useRoutes: function() {
            return _reactrouter.useRoutes;
        },
        useSearchParams: function() {
            return useSearchParams;
        },
        useSubmit: function() {
            return useSubmit;
        }
    });
    var _interop_require_wildcard = farmRequire("@swc/helpers/_/_interop_require_wildcard");
    var _react = _interop_require_wildcard._(farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));
    var _reactdom = _interop_require_wildcard._(farmRequire("node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"));
    var _reactrouter = farmRequire("node_modules/.pnpm/react-router@6.22.3_react@18.2.0/node_modules/react-router/dist/index.js");
    var _router = farmRequire("node_modules/.pnpm/@remix-run+router@1.15.3/node_modules/@remix-run/router/dist/router.js");
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
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
        return target;
    }
    const defaultMethod = "get";
    const defaultEncType = "application/x-www-form-urlencoded";
    function isHtmlElement(object) {
        return object != null && typeof object.tagName === "string";
    }
    function isButtonElement(object) {
        return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
    }
    function isFormElement(object) {
        return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
    }
    function isInputElement(object) {
        return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
    }
    function isModifiedEvent(event) {
        return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    }
    function shouldProcessLinkClick(event, target) {
        return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
    }
    function createSearchParams(init) {
        if (init === void 0) {
            init = "";
        }
        return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
            let value = init[key];
            return memo.concat(Array.isArray(value) ? value.map((v)=>[
                    key,
                    v
                ]) : [
                [
                    key,
                    value
                ]
            ]);
        }, []));
    }
    function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
        let searchParams = createSearchParams(locationSearch);
        if (defaultSearchParams) {
            defaultSearchParams.forEach((_, key)=>{
                if (!searchParams.has(key)) {
                    defaultSearchParams.getAll(key).forEach((value)=>{
                        searchParams.append(key, value);
                    });
                }
            });
        }
        return searchParams;
    }
    let _formDataSupportsSubmitter = null;
    function isFormDataSubmitterSupported() {
        if (_formDataSupportsSubmitter === null) {
            try {
                new FormData(document.createElement("form"), 0);
                _formDataSupportsSubmitter = false;
            } catch (e) {
                _formDataSupportsSubmitter = true;
            }
        }
        return _formDataSupportsSubmitter;
    }
    const supportedFormEncTypes = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function getFormEncType(encType) {
        if (encType != null && !supportedFormEncTypes.has(encType)) {
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, '"' + encType + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + defaultEncType + '"')) : void 0;
            return null;
        }
        return encType;
    }
    function getFormSubmissionInfo(target, basename) {
        let method;
        let action;
        let encType;
        let formData;
        let body;
        if (isFormElement(target)) {
            let attr = target.getAttribute("action");
            action = attr ? (0, _router.stripBasename)(attr, basename) : null;
            method = target.getAttribute("method") || defaultMethod;
            encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
            formData = new FormData(target);
        } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
            let form = target.form;
            if (form == null) {
                throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            }
            let attr = target.getAttribute("formaction") || form.getAttribute("action");
            action = attr ? (0, _router.stripBasename)(attr, basename) : null;
            method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
            encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
            formData = new FormData(form, target);
            if (!isFormDataSubmitterSupported()) {
                let { name, type, value } = target;
                if (type === "image") {
                    let prefix = name ? name + "." : "";
                    formData.append(prefix + "x", "0");
                    formData.append(prefix + "y", "0");
                } else if (name) {
                    formData.append(name, value);
                }
            }
        } else if (isHtmlElement(target)) {
            throw new Error("Cannot submit element that is not <form>, <button>, or " + '<input type="submit|image">');
        } else {
            method = defaultMethod;
            action = null;
            encType = defaultEncType;
            body = target;
        }
        if (formData && encType === "text/plain") {
            body = formData;
            formData = undefined;
        }
        return {
            action,
            method: method.toLowerCase(),
            encType,
            formData,
            body
        };
    }
    const _excluded = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition"
    ], _excluded2 = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "unstable_viewTransition",
        "children"
    ], _excluded3 = [
        "fetcherKey",
        "navigate",
        "reloadDocument",
        "replace",
        "state",
        "method",
        "action",
        "onSubmit",
        "relative",
        "preventScrollReset",
        "unstable_viewTransition"
    ];
    const REACT_ROUTER_VERSION = "6";
    try {
        window.__reactRouterVersion = REACT_ROUTER_VERSION;
    } catch (e) {}
    function createBrowserRouter(routes, opts) {
        return (0, _router.createRouter)({
            basename: opts == null ? void 0 : opts.basename,
            future: _extends({}, opts == null ? void 0 : opts.future, {
                v7_prependBasename: true
            }),
            history: (0, _router.createBrowserHistory)({
                window: opts == null ? void 0 : opts.window
            }),
            hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
            routes,
            mapRouteProperties: _reactrouter.UNSAFE_mapRouteProperties,
            window: opts == null ? void 0 : opts.window
        }).initialize();
    }
    function createHashRouter(routes, opts) {
        return (0, _router.createRouter)({
            basename: opts == null ? void 0 : opts.basename,
            future: _extends({}, opts == null ? void 0 : opts.future, {
                v7_prependBasename: true
            }),
            history: (0, _router.createHashHistory)({
                window: opts == null ? void 0 : opts.window
            }),
            hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
            routes,
            mapRouteProperties: _reactrouter.UNSAFE_mapRouteProperties,
            window: opts == null ? void 0 : opts.window
        }).initialize();
    }
    function parseHydrationData() {
        var _window;
        let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
        if (state && state.errors) {
            state = _extends({}, state, {
                errors: deserializeErrors(state.errors)
            });
        }
        return state;
    }
    function deserializeErrors(errors) {
        if (!errors) return null;
        let entries = Object.entries(errors);
        let serialized = {};
        for (let [key, val] of entries){
            if (val && val.__type === "RouteErrorResponse") {
                serialized[key] = new _router.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
            } else if (val && val.__type === "Error") {
                if (val.__subType) {
                    let ErrorConstructor = window[val.__subType];
                    if (typeof ErrorConstructor === "function") {
                        try {
                            let error = new ErrorConstructor(val.message);
                            error.stack = "";
                            serialized[key] = error;
                        } catch (e) {}
                    }
                }
                if (serialized[key] == null) {
                    let error = new Error(val.message);
                    error.stack = "";
                    serialized[key] = error;
                }
            } else {
                serialized[key] = val;
            }
        }
        return serialized;
    }
    const ViewTransitionContext = _react.createContext({
        isTransitioning: false
    });
    if (process.env.NODE_ENV !== "production") {
        ViewTransitionContext.displayName = "ViewTransition";
    }
    const FetchersContext = _react.createContext(new Map());
    if (process.env.NODE_ENV !== "production") {
        FetchersContext.displayName = "Fetchers";
    }
    const START_TRANSITION = "startTransition";
    const startTransitionImpl = _react[START_TRANSITION];
    const FLUSH_SYNC = "flushSync";
    const flushSyncImpl = _reactdom[FLUSH_SYNC];
    const USE_ID = "useId";
    const useIdImpl = _react[USE_ID];
    function startTransitionSafe(cb) {
        if (startTransitionImpl) {
            startTransitionImpl(cb);
        } else {
            cb();
        }
    }
    function flushSyncSafe(cb) {
        if (flushSyncImpl) {
            flushSyncImpl(cb);
        } else {
            cb();
        }
    }
    class Deferred {
        constructor(){
            this.status = "pending";
            this.promise = new Promise((resolve, reject)=>{
                this.resolve = (value)=>{
                    if (this.status === "pending") {
                        this.status = "resolved";
                        resolve(value);
                    }
                };
                this.reject = (reason)=>{
                    if (this.status === "pending") {
                        this.status = "rejected";
                        reject(reason);
                    }
                };
            });
        }
    }
    function RouterProvider(_ref) {
        let { fallbackElement, router, future } = _ref;
        let [state, setStateImpl] = _react.useState(router.state);
        let [pendingState, setPendingState] = _react.useState();
        let [vtContext, setVtContext] = _react.useState({
            isTransitioning: false
        });
        let [renderDfd, setRenderDfd] = _react.useState();
        let [transition, setTransition] = _react.useState();
        let [interruption, setInterruption] = _react.useState();
        let fetcherData = _react.useRef(new Map());
        let { v7_startTransition } = future || {};
        let optInStartTransition = _react.useCallback((cb)=>{
            if (v7_startTransition) {
                startTransitionSafe(cb);
            } else {
                cb();
            }
        }, [
            v7_startTransition
        ]);
        let setState = _react.useCallback((newState, _ref2)=>{
            let { deletedFetchers, unstable_flushSync: flushSync, unstable_viewTransitionOpts: viewTransitionOpts } = _ref2;
            deletedFetchers.forEach((key)=>fetcherData.current.delete(key));
            newState.fetchers.forEach((fetcher, key)=>{
                if (fetcher.data !== undefined) {
                    fetcherData.current.set(key, fetcher.data);
                }
            });
            let isViewTransitionUnavailable = router.window == null || typeof router.window.document.startViewTransition !== "function";
            if (!viewTransitionOpts || isViewTransitionUnavailable) {
                if (flushSync) {
                    flushSyncSafe(()=>setStateImpl(newState));
                } else {
                    optInStartTransition(()=>setStateImpl(newState));
                }
                return;
            }
            if (flushSync) {
                flushSyncSafe(()=>{
                    if (transition) {
                        renderDfd && renderDfd.resolve();
                        transition.skipTransition();
                    }
                    setVtContext({
                        isTransitioning: true,
                        flushSync: true,
                        currentLocation: viewTransitionOpts.currentLocation,
                        nextLocation: viewTransitionOpts.nextLocation
                    });
                });
                let t = router.window.document.startViewTransition(()=>{
                    flushSyncSafe(()=>setStateImpl(newState));
                });
                t.finished.finally(()=>{
                    flushSyncSafe(()=>{
                        setRenderDfd(undefined);
                        setTransition(undefined);
                        setPendingState(undefined);
                        setVtContext({
                            isTransitioning: false
                        });
                    });
                });
                flushSyncSafe(()=>setTransition(t));
                return;
            }
            if (transition) {
                renderDfd && renderDfd.resolve();
                transition.skipTransition();
                setInterruption({
                    state: newState,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            } else {
                setPendingState(newState);
                setVtContext({
                    isTransitioning: true,
                    flushSync: false,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            }
        }, [
            router.window,
            transition,
            renderDfd,
            fetcherData,
            optInStartTransition
        ]);
        _react.useLayoutEffect(()=>router.subscribe(setState), [
            router,
            setState
        ]);
        _react.useEffect(()=>{
            if (vtContext.isTransitioning && !vtContext.flushSync) {
                setRenderDfd(new Deferred());
            }
        }, [
            vtContext
        ]);
        _react.useEffect(()=>{
            if (renderDfd && pendingState && router.window) {
                let newState = pendingState;
                let renderPromise = renderDfd.promise;
                let transition = router.window.document.startViewTransition(async ()=>{
                    optInStartTransition(()=>setStateImpl(newState));
                    await renderPromise;
                });
                transition.finished.finally(()=>{
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
                setTransition(transition);
            }
        }, [
            optInStartTransition,
            pendingState,
            renderDfd,
            router.window
        ]);
        _react.useEffect(()=>{
            if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
                renderDfd.resolve();
            }
        }, [
            renderDfd,
            transition,
            state.location,
            pendingState
        ]);
        _react.useEffect(()=>{
            if (!vtContext.isTransitioning && interruption) {
                setPendingState(interruption.state);
                setVtContext({
                    isTransitioning: true,
                    flushSync: false,
                    currentLocation: interruption.currentLocation,
                    nextLocation: interruption.nextLocation
                });
                setInterruption(undefined);
            }
        }, [
            vtContext.isTransitioning,
            interruption
        ]);
        _react.useEffect(()=>{
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : void 0;
        }, []);
        let navigator = _react.useMemo(()=>{
            return {
                createHref: router.createHref,
                encodeLocation: router.encodeLocation,
                go: (n)=>router.navigate(n),
                push: (to, state, opts)=>router.navigate(to, {
                        state,
                        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                    }),
                replace: (to, state, opts)=>router.navigate(to, {
                        replace: true,
                        state,
                        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                    })
            };
        }, [
            router
        ]);
        let basename = router.basename || "/";
        let dataRouterContext = _react.useMemo(()=>({
                router,
                navigator,
                static: false,
                basename
            }), [
            router,
            navigator,
            basename
        ]);
        return _react.createElement(_react.Fragment, null, _react.createElement(_reactrouter.UNSAFE_DataRouterContext.Provider, {
            value: dataRouterContext
        }, _react.createElement(_reactrouter.UNSAFE_DataRouterStateContext.Provider, {
            value: state
        }, _react.createElement(FetchersContext.Provider, {
            value: fetcherData.current
        }, _react.createElement(ViewTransitionContext.Provider, {
            value: vtContext
        }, _react.createElement(_reactrouter.Router, {
            basename: basename,
            location: state.location,
            navigationType: state.historyAction,
            navigator: navigator,
            future: {
                v7_relativeSplatPath: router.future.v7_relativeSplatPath
            }
        }, state.initialized || router.future.v7_partialHydration ? _react.createElement(DataRoutes, {
            routes: router.routes,
            future: router.future,
            state: state
        }) : fallbackElement))))), null);
    }
    function DataRoutes(_ref3) {
        let { routes, future, state } = _ref3;
        return (0, _reactrouter.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
    }
    function BrowserRouter(_ref4) {
        let { basename, children, future, window: window1 } = _ref4;
        let historyRef = _react.useRef();
        if (historyRef.current == null) {
            historyRef.current = (0, _router.createBrowserHistory)({
                window: window1,
                v5Compat: true
            });
        }
        let history = historyRef.current;
        let [state, setStateImpl] = _react.useState({
            action: history.action,
            location: history.location
        });
        let { v7_startTransition } = future || {};
        let setState = _react.useCallback((newState)=>{
            v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
        }, [
            setStateImpl,
            v7_startTransition
        ]);
        _react.useLayoutEffect(()=>history.listen(setState), [
            history,
            setState
        ]);
        return _react.createElement(_reactrouter.Router, {
            basename: basename,
            children: children,
            location: state.location,
            navigationType: state.action,
            navigator: history,
            future: future
        });
    }
    function HashRouter(_ref5) {
        let { basename, children, future, window: window1 } = _ref5;
        let historyRef = _react.useRef();
        if (historyRef.current == null) {
            historyRef.current = (0, _router.createHashHistory)({
                window: window1,
                v5Compat: true
            });
        }
        let history = historyRef.current;
        let [state, setStateImpl] = _react.useState({
            action: history.action,
            location: history.location
        });
        let { v7_startTransition } = future || {};
        let setState = _react.useCallback((newState)=>{
            v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
        }, [
            setStateImpl,
            v7_startTransition
        ]);
        _react.useLayoutEffect(()=>history.listen(setState), [
            history,
            setState
        ]);
        return _react.createElement(_reactrouter.Router, {
            basename: basename,
            children: children,
            location: state.location,
            navigationType: state.action,
            navigator: history,
            future: future
        });
    }
    function HistoryRouter(_ref6) {
        let { basename, children, future, history } = _ref6;
        let [state, setStateImpl] = _react.useState({
            action: history.action,
            location: history.location
        });
        let { v7_startTransition } = future || {};
        let setState = _react.useCallback((newState)=>{
            v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
        }, [
            setStateImpl,
            v7_startTransition
        ]);
        _react.useLayoutEffect(()=>history.listen(setState), [
            history,
            setState
        ]);
        return _react.createElement(_reactrouter.Router, {
            basename: basename,
            children: children,
            location: state.location,
            navigationType: state.action,
            navigator: history,
            future: future
        });
    }
    if (process.env.NODE_ENV !== "production") {
        HistoryRouter.displayName = "unstable_HistoryRouter";
    }
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
    const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    const Link = _react.forwardRef(function LinkWithRef(_ref7, ref) {
        let { onClick, relative, reloadDocument, replace, state, target, to, preventScrollReset, unstable_viewTransition } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
        let { basename } = _react.useContext(_reactrouter.UNSAFE_NavigationContext);
        let absoluteHref;
        let isExternal = false;
        if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
            absoluteHref = to;
            if (isBrowser) {
                try {
                    let currentUrl = new URL(window.location.href);
                    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                    let path = (0, _router.stripBasename)(targetUrl.pathname, basename);
                    if (targetUrl.origin === currentUrl.origin && path != null) {
                        to = path + targetUrl.search + targetUrl.hash;
                    } else {
                        isExternal = true;
                    }
                } catch (e) {
                    process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, '<Link to="' + to + '"> contains an invalid URL which will probably break ' + "when clicked - please update to a valid URL path.") : void 0;
                }
            }
        }
        let href = (0, _reactrouter.useHref)(to, {
            relative
        });
        let internalOnClick = useLinkClickHandler(to, {
            replace,
            state,
            target,
            preventScrollReset,
            relative,
            unstable_viewTransition
        });
        function handleClick(event) {
            if (onClick) onClick(event);
            if (!event.defaultPrevented) {
                internalOnClick(event);
            }
        }
        return _react.createElement("a", _extends({}, rest, {
            href: absoluteHref || href,
            onClick: isExternal || reloadDocument ? onClick : handleClick,
            ref: ref,
            target: target
        }));
    });
    if (process.env.NODE_ENV !== "production") {
        Link.displayName = "Link";
    }
    const NavLink = _react.forwardRef(function NavLinkWithRef(_ref8, ref) {
        let { "aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, unstable_viewTransition, children } = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
        let path = (0, _reactrouter.useResolvedPath)(to, {
            relative: rest.relative
        });
        let location = (0, _reactrouter.useLocation)();
        let routerState = _react.useContext(_reactrouter.UNSAFE_DataRouterStateContext);
        let { navigator, basename } = _react.useContext(_reactrouter.UNSAFE_NavigationContext);
        let isTransitioning = routerState != null && useViewTransitionState(path) && unstable_viewTransition === true;
        let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
        let locationPathname = location.pathname;
        let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
        if (!caseSensitive) {
            locationPathname = locationPathname.toLowerCase();
            nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
            toPathname = toPathname.toLowerCase();
        }
        if (nextLocationPathname && basename) {
            nextLocationPathname = (0, _router.stripBasename)(nextLocationPathname, basename) || nextLocationPathname;
        }
        const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
        let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
        let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
        let renderProps = {
            isActive,
            isPending,
            isTransitioning
        };
        let ariaCurrent = isActive ? ariaCurrentProp : undefined;
        let className;
        if (typeof classNameProp === "function") {
            className = classNameProp(renderProps);
        } else {
            className = [
                classNameProp,
                isActive ? "active" : null,
                isPending ? "pending" : null,
                isTransitioning ? "transitioning" : null
            ].filter(Boolean).join(" ");
        }
        let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
        return _react.createElement(Link, _extends({}, rest, {
            "aria-current": ariaCurrent,
            className: className,
            ref: ref,
            style: style,
            to: to,
            unstable_viewTransition: unstable_viewTransition
        }), typeof children === "function" ? children(renderProps) : children);
    });
    if (process.env.NODE_ENV !== "production") {
        NavLink.displayName = "NavLink";
    }
    const Form = _react.forwardRef((_ref9, forwardedRef)=>{
        let { fetcherKey, navigate, reloadDocument, replace, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, unstable_viewTransition } = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
        let submit = useSubmit();
        let formAction = useFormAction(action, {
            relative
        });
        let formMethod = method.toLowerCase() === "get" ? "get" : "post";
        let submitHandler = (event)=>{
            onSubmit && onSubmit(event);
            if (event.defaultPrevented) return;
            event.preventDefault();
            let submitter = event.nativeEvent.submitter;
            let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
            submit(submitter || event.currentTarget, {
                fetcherKey,
                method: submitMethod,
                navigate,
                replace,
                state,
                relative,
                preventScrollReset,
                unstable_viewTransition
            });
        };
        return _react.createElement("form", _extends({
            ref: forwardedRef,
            method: formMethod,
            action: formAction,
            onSubmit: reloadDocument ? onSubmit : submitHandler
        }, props));
    });
    if (process.env.NODE_ENV !== "production") {
        Form.displayName = "Form";
    }
    function ScrollRestoration(_ref10) {
        let { getKey, storageKey } = _ref10;
        useScrollRestoration({
            getKey,
            storageKey
        });
        return null;
    }
    if (process.env.NODE_ENV !== "production") {
        ScrollRestoration.displayName = "ScrollRestoration";
    }
    var DataRouterHook;
    (function(DataRouterHook) {
        DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
        DataRouterHook["UseSubmit"] = "useSubmit";
        DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
        DataRouterHook["UseFetcher"] = "useFetcher";
        DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
    })(DataRouterHook || (DataRouterHook = {}));
    var DataRouterStateHook;
    (function(DataRouterStateHook) {
        DataRouterStateHook["UseFetcher"] = "useFetcher";
        DataRouterStateHook["UseFetchers"] = "useFetchers";
        DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    function getDataRouterConsoleError(hookName) {
        return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
    }
    function useDataRouterContext(hookName) {
        let ctx = _react.useContext(_reactrouter.UNSAFE_DataRouterContext);
        !ctx ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
        return ctx;
    }
    function useDataRouterState(hookName) {
        let state = _react.useContext(_reactrouter.UNSAFE_DataRouterStateContext);
        !state ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
        return state;
    }
    function useLinkClickHandler(to, _temp) {
        let { target, replace: replaceProp, state, preventScrollReset, relative, unstable_viewTransition } = _temp === void 0 ? {} : _temp;
        let navigate = (0, _reactrouter.useNavigate)();
        let location = (0, _reactrouter.useLocation)();
        let path = (0, _reactrouter.useResolvedPath)(to, {
            relative
        });
        return _react.useCallback((event)=>{
            if (shouldProcessLinkClick(event, target)) {
                event.preventDefault();
                let replace = replaceProp !== undefined ? replaceProp : (0, _reactrouter.createPath)(location) === (0, _reactrouter.createPath)(path);
                navigate(to, {
                    replace,
                    state,
                    preventScrollReset,
                    relative,
                    unstable_viewTransition
                });
            }
        }, [
            location,
            navigate,
            path,
            replaceProp,
            state,
            target,
            to,
            preventScrollReset,
            relative,
            unstable_viewTransition
        ]);
    }
    function useSearchParams(defaultInit) {
        process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : void 0;
        let defaultSearchParamsRef = _react.useRef(createSearchParams(defaultInit));
        let hasSetSearchParamsRef = _react.useRef(false);
        let location = (0, _reactrouter.useLocation)();
        let searchParams = _react.useMemo(()=>getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
            location.search
        ]);
        let navigate = (0, _reactrouter.useNavigate)();
        let setSearchParams = _react.useCallback((nextInit, navigateOptions)=>{
            const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
            hasSetSearchParamsRef.current = true;
            navigate("?" + newSearchParams, navigateOptions);
        }, [
            navigate,
            searchParams
        ]);
        return [
            searchParams,
            setSearchParams
        ];
    }
    function validateClientSideSubmission() {
        if (typeof document === "undefined") {
            throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
        }
    }
    let fetcherId = 0;
    let getUniqueFetcherId = ()=>"__" + String(++fetcherId) + "__";
    function useSubmit() {
        let { router } = useDataRouterContext(DataRouterHook.UseSubmit);
        let { basename } = _react.useContext(_reactrouter.UNSAFE_NavigationContext);
        let currentRouteId = (0, _reactrouter.UNSAFE_useRouteId)();
        return _react.useCallback(function(target, options) {
            if (options === void 0) {
                options = {};
            }
            validateClientSideSubmission();
            let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
            if (options.navigate === false) {
                let key = options.fetcherKey || getUniqueFetcherId();
                router.fetch(key, currentRouteId, options.action || action, {
                    preventScrollReset: options.preventScrollReset,
                    formData,
                    body,
                    formMethod: options.method || method,
                    formEncType: options.encType || encType,
                    unstable_flushSync: options.unstable_flushSync
                });
            } else {
                router.navigate(options.action || action, {
                    preventScrollReset: options.preventScrollReset,
                    formData,
                    body,
                    formMethod: options.method || method,
                    formEncType: options.encType || encType,
                    replace: options.replace,
                    state: options.state,
                    fromRouteId: currentRouteId,
                    unstable_flushSync: options.unstable_flushSync,
                    unstable_viewTransition: options.unstable_viewTransition
                });
            }
        }, [
            router,
            basename,
            currentRouteId
        ]);
    }
    function useFormAction(action, _temp2) {
        let { relative } = _temp2 === void 0 ? {} : _temp2;
        let { basename } = _react.useContext(_reactrouter.UNSAFE_NavigationContext);
        let routeContext = _react.useContext(_reactrouter.UNSAFE_RouteContext);
        !routeContext ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let [match] = routeContext.matches.slice(-1);
        let path = _extends({}, (0, _reactrouter.useResolvedPath)(action ? action : ".", {
            relative
        }));
        let location = (0, _reactrouter.useLocation)();
        if (action == null) {
            path.search = location.search;
            let params = new URLSearchParams(path.search);
            if (params.has("index") && params.get("index") === "") {
                params.delete("index");
                path.search = params.toString() ? "?" + params.toString() : "";
            }
        }
        if ((!action || action === ".") && match.route.index) {
            path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        }
        if (basename !== "/") {
            path.pathname = path.pathname === "/" ? basename : (0, _router.joinPaths)([
                basename,
                path.pathname
            ]);
        }
        return (0, _reactrouter.createPath)(path);
    }
    function useFetcher(_temp3) {
        var _route$matches;
        let { key } = _temp3 === void 0 ? {} : _temp3;
        let { router } = useDataRouterContext(DataRouterHook.UseFetcher);
        let state = useDataRouterState(DataRouterStateHook.UseFetcher);
        let fetcherData = _react.useContext(FetchersContext);
        let route = _react.useContext(_reactrouter.UNSAFE_RouteContext);
        let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
        !fetcherData ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext") : (0, _router.UNSAFE_invariant)(false) : void 0;
        !route ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : (0, _router.UNSAFE_invariant)(false) : void 0;
        !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, 'useFetcher can only be used on routes that contain a unique "id"') : (0, _router.UNSAFE_invariant)(false) : void 0;
        let defaultKey = useIdImpl ? useIdImpl() : "";
        let [fetcherKey, setFetcherKey] = _react.useState(key || defaultKey);
        if (key && key !== fetcherKey) {
            setFetcherKey(key);
        } else if (!fetcherKey) {
            setFetcherKey(getUniqueFetcherId());
        }
        _react.useEffect(()=>{
            router.getFetcher(fetcherKey);
            return ()=>{
                router.deleteFetcher(fetcherKey);
            };
        }, [
            router,
            fetcherKey
        ]);
        let load = _react.useCallback((href, opts)=>{
            !routeId ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : (0, _router.UNSAFE_invariant)(false) : void 0;
            router.fetch(fetcherKey, routeId, href, opts);
        }, [
            fetcherKey,
            routeId,
            router
        ]);
        let submitImpl = useSubmit();
        let submit = _react.useCallback((target, opts)=>{
            submitImpl(target, _extends({}, opts, {
                navigate: false,
                fetcherKey
            }));
        }, [
            fetcherKey,
            submitImpl
        ]);
        let FetcherForm = _react.useMemo(()=>{
            let FetcherForm = _react.forwardRef((props, ref)=>{
                return _react.createElement(Form, _extends({}, props, {
                    navigate: false,
                    fetcherKey: fetcherKey,
                    ref: ref
                }));
            });
            if (process.env.NODE_ENV !== "production") {
                FetcherForm.displayName = "fetcher.Form";
            }
            return FetcherForm;
        }, [
            fetcherKey
        ]);
        let fetcher = state.fetchers.get(fetcherKey) || _router.IDLE_FETCHER;
        let data = fetcherData.get(fetcherKey);
        let fetcherWithComponents = _react.useMemo(()=>_extends({
                Form: FetcherForm,
                submit,
                load
            }, fetcher, {
                data
            }), [
            FetcherForm,
            submit,
            load,
            fetcher,
            data
        ]);
        return fetcherWithComponents;
    }
    function useFetchers() {
        let state = useDataRouterState(DataRouterStateHook.UseFetchers);
        return Array.from(state.fetchers.entries()).map((_ref11)=>{
            let [key, fetcher] = _ref11;
            return _extends({}, fetcher, {
                key
            });
        });
    }
    const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
    let savedScrollPositions = {};
    function useScrollRestoration(_temp4) {
        let { getKey, storageKey } = _temp4 === void 0 ? {} : _temp4;
        let { router } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
        let { restoreScrollPosition, preventScrollReset } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
        let { basename } = _react.useContext(_reactrouter.UNSAFE_NavigationContext);
        let location = (0, _reactrouter.useLocation)();
        let matches = (0, _reactrouter.useMatches)();
        let navigation = (0, _reactrouter.useNavigation)();
        _react.useEffect(()=>{
            window.history.scrollRestoration = "manual";
            return ()=>{
                window.history.scrollRestoration = "auto";
            };
        }, []);
        usePageHide(_react.useCallback(()=>{
            if (navigation.state === "idle") {
                let key = (getKey ? getKey(location, matches) : null) || location.key;
                savedScrollPositions[key] = window.scrollY;
            }
            try {
                sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
            } catch (error) {
                process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : void 0;
            }
            window.history.scrollRestoration = "auto";
        }, [
            storageKey,
            getKey,
            navigation.state,
            location,
            matches
        ]));
        if (typeof document !== "undefined") {
            _react.useLayoutEffect(()=>{
                try {
                    let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                    if (sessionPositions) {
                        savedScrollPositions = JSON.parse(sessionPositions);
                    }
                } catch (e) {}
            }, [
                storageKey
            ]);
            _react.useLayoutEffect(()=>{
                let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches)=>getKey(_extends({}, location, {
                        pathname: (0, _router.stripBasename)(location.pathname, basename) || location.pathname
                    }), matches) : getKey;
                let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, ()=>window.scrollY, getKeyWithoutBasename);
                return ()=>disableScrollRestoration && disableScrollRestoration();
            }, [
                router,
                basename,
                getKey
            ]);
            _react.useLayoutEffect(()=>{
                if (restoreScrollPosition === false) {
                    return;
                }
                if (typeof restoreScrollPosition === "number") {
                    window.scrollTo(0, restoreScrollPosition);
                    return;
                }
                if (location.hash) {
                    let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                    if (el) {
                        el.scrollIntoView();
                        return;
                    }
                }
                if (preventScrollReset === true) {
                    return;
                }
                window.scrollTo(0, 0);
            }, [
                location,
                restoreScrollPosition,
                preventScrollReset
            ]);
        }
    }
    function useBeforeUnload(callback, options) {
        let { capture } = options || {};
        _react.useEffect(()=>{
            let opts = capture != null ? {
                capture
            } : undefined;
            window.addEventListener("beforeunload", callback, opts);
            return ()=>{
                window.removeEventListener("beforeunload", callback, opts);
            };
        }, [
            callback,
            capture
        ]);
    }
    function usePageHide(callback, options) {
        let { capture } = options || {};
        _react.useEffect(()=>{
            let opts = capture != null ? {
                capture
            } : undefined;
            window.addEventListener("pagehide", callback, opts);
            return ()=>{
                window.removeEventListener("pagehide", callback, opts);
            };
        }, [
            callback,
            capture
        ]);
    }
    function usePrompt(_ref12) {
        let { when, message } = _ref12;
        let blocker = (0, _reactrouter.useBlocker)(when);
        _react.useEffect(()=>{
            if (blocker.state === "blocked") {
                let proceed = window.confirm(message);
                if (proceed) {
                    setTimeout(blocker.proceed, 0);
                } else {
                    blocker.reset();
                }
            }
        }, [
            blocker,
            message
        ]);
        _react.useEffect(()=>{
            if (blocker.state === "blocked" && !when) {
                blocker.reset();
            }
        }, [
            blocker,
            when
        ]);
    }
    function useViewTransitionState(to, opts) {
        if (opts === void 0) {
            opts = {};
        }
        let vtContext = _react.useContext(ViewTransitionContext);
        !(vtContext != null) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let { basename } = useDataRouterContext(DataRouterHook.useViewTransitionState);
        let path = (0, _reactrouter.useResolvedPath)(to, {
            relative: opts.relative
        });
        if (!vtContext.isTransitioning) {
            return false;
        }
        let currentPath = (0, _router.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
        let nextPath = (0, _router.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
        return (0, _router.matchPath)(path.pathname, nextPath) != null || (0, _router.matchPath)(path.pathname, currentPath) != null;
    }
}
,
"node_modules/.pnpm/react-router-dom@6.22.3_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/server.mjs":function  (module, exports, farmRequire, farmDynamicRequire) {
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
        StaticRouter: function() {
            return StaticRouter;
        },
        StaticRouterProvider: function() {
            return StaticRouterProvider;
        },
        createStaticHandler: function() {
            return createStaticHandler;
        },
        createStaticRouter: function() {
            return createStaticRouter;
        }
    });
    var _interop_require_wildcard = farmRequire("@swc/helpers/_/_interop_require_wildcard");
    var _react = _interop_require_wildcard._(farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));
    var _router = farmRequire("node_modules/.pnpm/@remix-run+router@1.15.3/node_modules/@remix-run/router/dist/router.js");
    var _reactrouter = farmRequire("node_modules/.pnpm/react-router@6.22.3_react@18.2.0/node_modules/react-router/dist/index.js");
    var _reactrouterdom = farmRequire("node_modules/.pnpm/react-router-dom@6.22.3_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js");
    function StaticRouter({ basename, children, location: locationProp = "/", future }) {
        if (typeof locationProp === "string") {
            locationProp = (0, _reactrouterdom.parsePath)(locationProp);
        }
        let action = _router.Action.Pop;
        let location = {
            pathname: locationProp.pathname || "/",
            search: locationProp.search || "",
            hash: locationProp.hash || "",
            state: locationProp.state || null,
            key: locationProp.key || "default"
        };
        let staticNavigator = getStatelessNavigator();
        return _react.createElement(_reactrouterdom.Router, {
            basename: basename,
            children: children,
            location: location,
            navigationType: action,
            navigator: staticNavigator,
            future: future,
            static: true
        });
    }
    function StaticRouterProvider({ context, router, hydrate = true, nonce }) {
        !(router && context) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "You must provide `router` and `context` to <StaticRouterProvider>") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let dataRouterContext = {
            router,
            navigator: getStatelessNavigator(),
            static: true,
            staticContext: context,
            basename: context.basename || "/"
        };
        let fetchersContext = new Map();
        let hydrateScript = "";
        if (hydrate !== false) {
            let data = {
                loaderData: context.loaderData,
                actionData: context.actionData,
                errors: serializeErrors(context.errors)
            };
            let json = htmlEscape(JSON.stringify(JSON.stringify(data)));
            hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
        }
        let { state } = dataRouterContext.router;
        return _react.createElement(_react.Fragment, null, _react.createElement(_reactrouterdom.UNSAFE_DataRouterContext.Provider, {
            value: dataRouterContext
        }, _react.createElement(_reactrouterdom.UNSAFE_DataRouterStateContext.Provider, {
            value: state
        }, _react.createElement(_reactrouterdom.UNSAFE_FetchersContext.Provider, {
            value: fetchersContext
        }, _react.createElement(_reactrouterdom.UNSAFE_ViewTransitionContext.Provider, {
            value: {
                isTransitioning: false
            }
        }, _react.createElement(_reactrouterdom.Router, {
            basename: dataRouterContext.basename,
            location: state.location,
            navigationType: state.historyAction,
            navigator: dataRouterContext.navigator,
            static: dataRouterContext.static,
            future: {
                v7_relativeSplatPath: router.future.v7_relativeSplatPath
            }
        }, _react.createElement(DataRoutes, {
            routes: router.routes,
            future: router.future,
            state: state
        })))))), hydrateScript ? _react.createElement("script", {
            suppressHydrationWarning: true,
            nonce: nonce,
            dangerouslySetInnerHTML: {
                __html: hydrateScript
            }
        }) : null);
    }
    function DataRoutes({ routes, future, state }) {
        return (0, _reactrouter.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
    }
    function serializeErrors(errors) {
        if (!errors) return null;
        let entries = Object.entries(errors);
        let serialized = {};
        for (let [key, val] of entries){
            if ((0, _router.isRouteErrorResponse)(val)) {
                serialized[key] = {
                    ...val,
                    __type: "RouteErrorResponse"
                };
            } else if (val instanceof Error) {
                serialized[key] = {
                    message: val.message,
                    __type: "Error",
                    ...val.name !== "Error" ? {
                        __subType: val.name
                    } : {}
                };
            } else {
                serialized[key] = val;
            }
        }
        return serialized;
    }
    function getStatelessNavigator() {
        return {
            createHref,
            encodeLocation,
            push (to) {
                throw new Error(`You cannot use navigator.push() on the server because it is a stateless ` + `environment. This error was probably triggered when you did a ` + `\`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
            },
            replace (to) {
                throw new Error(`You cannot use navigator.replace() on the server because it is a stateless ` + `environment. This error was probably triggered when you did a ` + `\`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere ` + `in your app.`);
            },
            go (delta) {
                throw new Error(`You cannot use navigator.go() on the server because it is a stateless ` + `environment. This error was probably triggered when you did a ` + `\`navigate(${delta})\` somewhere in your app.`);
            },
            back () {
                throw new Error(`You cannot use navigator.back() on the server because it is a stateless ` + `environment.`);
            },
            forward () {
                throw new Error(`You cannot use navigator.forward() on the server because it is a stateless ` + `environment.`);
            }
        };
    }
    function createStaticHandler(routes, opts) {
        return (0, _router.createStaticHandler)(routes, {
            ...opts,
            mapRouteProperties: _reactrouter.UNSAFE_mapRouteProperties
        });
    }
    function createStaticRouter(routes, context, opts = {}) {
        let manifest = {};
        let dataRoutes = (0, _router.UNSAFE_convertRoutesToDataRoutes)(routes, _reactrouter.UNSAFE_mapRouteProperties, undefined, manifest);
        let matches = context.matches.map((match)=>{
            let route = manifest[match.route.id] || match.route;
            return {
                ...match,
                route
            };
        });
        let msg = (method)=>`You cannot use router.${method}() on the server because it is a stateless environment`;
        return {
            get basename () {
                return context.basename;
            },
            get future () {
                return {
                    v7_fetcherPersist: false,
                    v7_normalizeFormMethod: false,
                    v7_partialHydration: opts.future?.v7_partialHydration === true,
                    v7_prependBasename: false,
                    v7_relativeSplatPath: opts.future?.v7_relativeSplatPath === true
                };
            },
            get state () {
                return {
                    historyAction: _router.Action.Pop,
                    location: context.location,
                    matches,
                    loaderData: context.loaderData,
                    actionData: context.actionData,
                    errors: context.errors,
                    initialized: true,
                    navigation: _router.IDLE_NAVIGATION,
                    restoreScrollPosition: null,
                    preventScrollReset: false,
                    revalidation: "idle",
                    fetchers: new Map(),
                    blockers: new Map()
                };
            },
            get routes () {
                return dataRoutes;
            },
            get window () {
                return undefined;
            },
            initialize () {
                throw msg("initialize");
            },
            subscribe () {
                throw msg("subscribe");
            },
            enableScrollRestoration () {
                throw msg("enableScrollRestoration");
            },
            navigate () {
                throw msg("navigate");
            },
            fetch () {
                throw msg("fetch");
            },
            revalidate () {
                throw msg("revalidate");
            },
            createHref,
            encodeLocation,
            getFetcher () {
                return _router.IDLE_FETCHER;
            },
            deleteFetcher () {
                throw msg("deleteFetcher");
            },
            dispose () {
                throw msg("dispose");
            },
            getBlocker () {
                return _router.IDLE_BLOCKER;
            },
            deleteBlocker () {
                throw msg("deleteBlocker");
            },
            _internalFetchControllers: new Map(),
            _internalActiveDeferreds: new Map(),
            _internalSetRoutes () {
                throw msg("_internalSetRoutes");
            }
        };
    }
    function createHref(to) {
        return typeof to === "string" ? to : (0, _reactrouterdom.createPath)(to);
    }
    function encodeLocation(to) {
        let href = typeof to === "string" ? to : (0, _reactrouterdom.createPath)(to);
        href = href.replace(/ $/, "%20");
        let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
        return {
            pathname: encoded.pathname,
            search: encoded.search,
            hash: encoded.hash
        };
    }
    const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    const ESCAPE_LOOKUP = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };
    const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
    function htmlEscape(str) {
        return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
    }
}
,
"node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js":/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
        (function() {
            "use strict";
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
            }
            var ReactVersion = "18.2.0";
            var REACT_ELEMENT_TYPE = Symbol.for("react.element");
            var REACT_PORTAL_TYPE = Symbol.for("react.portal");
            var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
            var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
            var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
            var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
            var REACT_CONTEXT_TYPE = Symbol.for("react.context");
            var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
            var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
            var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
            var REACT_MEMO_TYPE = Symbol.for("react.memo");
            var REACT_LAZY_TYPE = Symbol.for("react.lazy");
            var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
            var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = "@@iterator";
            function getIteratorFn(maybeIterable) {
                if (maybeIterable === null || typeof maybeIterable !== "object") {
                    return null;
                }
                var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                if (typeof maybeIterator === "function") {
                    return maybeIterator;
                }
                return null;
            }
            var ReactCurrentDispatcher = {
                current: null
            };
            var ReactCurrentBatchConfig = {
                transition: null
            };
            var ReactCurrentActQueue = {
                current: null,
                isBatchingLegacy: false,
                didScheduleLegacyUpdate: false
            };
            var ReactCurrentOwner = {
                current: null
            };
            var ReactDebugCurrentFrame = {};
            var currentExtraStackFrame = null;
            function setExtraStackFrame(stack) {
                {
                    currentExtraStackFrame = stack;
                }
            }
            {
                ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                    {
                        currentExtraStackFrame = stack;
                    }
                };
                ReactDebugCurrentFrame.getCurrentStack = null;
                ReactDebugCurrentFrame.getStackAddendum = function() {
                    var stack = "";
                    if (currentExtraStackFrame) {
                        stack += currentExtraStackFrame;
                    }
                    var impl = ReactDebugCurrentFrame.getCurrentStack;
                    if (impl) {
                        stack += impl() || "";
                    }
                    return stack;
                };
            }
            var enableScopeAPI = false;
            var enableCacheElement = false;
            var enableTransitionTracing = false;
            var enableLegacyHidden = false;
            var enableDebugTracing = false;
            var ReactSharedInternals = {
                ReactCurrentDispatcher: ReactCurrentDispatcher,
                ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                ReactCurrentOwner: ReactCurrentOwner
            };
            {
                ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
            }
            function warn(format) {
                {
                    {
                        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                            args[_key - 1] = arguments[_key];
                        }
                        printWarning("warn", format, args);
                    }
                }
            }
            function error(format) {
                {
                    {
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                            args[_key2 - 1] = arguments[_key2];
                        }
                        printWarning("error", format, args);
                    }
                }
            }
            function printWarning(level, format, args) {
                {
                    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                    var stack = ReactDebugCurrentFrame.getStackAddendum();
                    if (stack !== "") {
                        format += "%s";
                        args = args.concat([
                            stack
                        ]);
                    }
                    var argsWithFormat = args.map(function(item) {
                        return String(item);
                    });
                    argsWithFormat.unshift("Warning: " + format);
                    Function.prototype.apply.call(console[level], console, argsWithFormat);
                }
            }
            var didWarnStateUpdateForUnmountedComponent = {};
            function warnNoop(publicInstance, callerName) {
                {
                    var _constructor = publicInstance.constructor;
                    var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                    var warningKey = componentName + "." + callerName;
                    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                        return;
                    }
                    error("Can't call %s on a component that is not yet mounted. " + "This is a no-op, but it might indicate a bug in your application. " + "Instead, assign to `this.state` directly or define a `state = {};` " + "class property with the desired state in the %s component.", callerName, componentName);
                    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                }
            }
            var ReactNoopUpdateQueue = {
                isMounted: function(publicInstance) {
                    return false;
                },
                enqueueForceUpdate: function(publicInstance, callback, callerName) {
                    warnNoop(publicInstance, "forceUpdate");
                },
                enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                    warnNoop(publicInstance, "replaceState");
                },
                enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                    warnNoop(publicInstance, "setState");
                }
            };
            var assign = Object.assign;
            var emptyObject = {};
            {
                Object.freeze(emptyObject);
            }
            function Component(props, context, updater) {
                this.props = props;
                this.context = context;
                this.refs = emptyObject;
                this.updater = updater || ReactNoopUpdateQueue;
            }
            Component.prototype.isReactComponent = {};
            Component.prototype.setState = function(partialState, callback) {
                if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
                    throw new Error("setState(...): takes an object of state variables to update or a " + "function which returns an object of state variables.");
                }
                this.updater.enqueueSetState(this, partialState, callback, "setState");
            };
            Component.prototype.forceUpdate = function(callback) {
                this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
            };
            {
                var deprecatedAPIs = {
                    isMounted: [
                        "isMounted",
                        "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks."
                    ],
                    replaceState: [
                        "replaceState",
                        "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)."
                    ]
                };
                var defineDeprecationWarning = function(methodName, info) {
                    Object.defineProperty(Component.prototype, methodName, {
                        get: function() {
                            warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                            return undefined;
                        }
                    });
                };
                for(var fnName in deprecatedAPIs){
                    if (deprecatedAPIs.hasOwnProperty(fnName)) {
                        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                    }
                }
            }
            function ComponentDummy() {}
            ComponentDummy.prototype = Component.prototype;
            function PureComponent(props, context, updater) {
                this.props = props;
                this.context = context;
                this.refs = emptyObject;
                this.updater = updater || ReactNoopUpdateQueue;
            }
            var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
            pureComponentPrototype.constructor = PureComponent;
            assign(pureComponentPrototype, Component.prototype);
            pureComponentPrototype.isPureReactComponent = true;
            function createRef() {
                var refObject = {
                    current: null
                };
                {
                    Object.seal(refObject);
                }
                return refObject;
            }
            var isArrayImpl = Array.isArray;
            function isArray(a) {
                return isArrayImpl(a);
            }
            function typeName(value) {
                {
                    var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                    return type;
                }
            }
            function willCoercionThrow(value) {
                {
                    try {
                        testStringCoercion(value);
                        return false;
                    } catch (e) {
                        return true;
                    }
                }
            }
            function testStringCoercion(value) {
                return "" + value;
            }
            function checkKeyStringCoercion(value) {
                {
                    if (willCoercionThrow(value)) {
                        error("The provided key is an unsupported type %s." + " This value must be coerced to a string before before using it here.", typeName(value));
                        return testStringCoercion(value);
                    }
                }
            }
            function getWrappedName(outerType, innerType, wrapperName) {
                var displayName = outerType.displayName;
                if (displayName) {
                    return displayName;
                }
                var functionName = innerType.displayName || innerType.name || "";
                return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
            }
            function getContextName(type) {
                return type.displayName || "Context";
            }
            function getComponentNameFromType(type) {
                if (type == null) {
                    return null;
                }
                {
                    if (typeof type.tag === "number") {
                        error("Received an unexpected object in getComponentNameFromType(). " + "This is likely a bug in React. Please file an issue.");
                    }
                }
                if (typeof type === "function") {
                    return type.displayName || type.name || null;
                }
                if (typeof type === "string") {
                    return type;
                }
                switch(type){
                    case REACT_FRAGMENT_TYPE:
                        return "Fragment";
                    case REACT_PORTAL_TYPE:
                        return "Portal";
                    case REACT_PROFILER_TYPE:
                        return "Profiler";
                    case REACT_STRICT_MODE_TYPE:
                        return "StrictMode";
                    case REACT_SUSPENSE_TYPE:
                        return "Suspense";
                    case REACT_SUSPENSE_LIST_TYPE:
                        return "SuspenseList";
                }
                if (typeof type === "object") {
                    switch(type.$$typeof){
                        case REACT_CONTEXT_TYPE:
                            var context = type;
                            return getContextName(context) + ".Consumer";
                        case REACT_PROVIDER_TYPE:
                            var provider = type;
                            return getContextName(provider._context) + ".Provider";
                        case REACT_FORWARD_REF_TYPE:
                            return getWrappedName(type, type.render, "ForwardRef");
                        case REACT_MEMO_TYPE:
                            var outerName = type.displayName || null;
                            if (outerName !== null) {
                                return outerName;
                            }
                            return getComponentNameFromType(type.type) || "Memo";
                        case REACT_LAZY_TYPE:
                            {
                                var lazyComponent = type;
                                var payload = lazyComponent._payload;
                                var init = lazyComponent._init;
                                try {
                                    return getComponentNameFromType(init(payload));
                                } catch (x) {
                                    return null;
                                }
                            }
                    }
                }
                return null;
            }
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var RESERVED_PROPS = {
                key: true,
                ref: true,
                __self: true,
                __source: true
            };
            var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
            {
                didWarnAboutStringRefs = {};
            }
            function hasValidRef(config) {
                {
                    if (hasOwnProperty.call(config, "ref")) {
                        var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                        if (getter && getter.isReactWarning) {
                            return false;
                        }
                    }
                }
                return config.ref !== undefined;
            }
            function hasValidKey(config) {
                {
                    if (hasOwnProperty.call(config, "key")) {
                        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                        if (getter && getter.isReactWarning) {
                            return false;
                        }
                    }
                }
                return config.key !== undefined;
            }
            function defineKeyPropWarningGetter(props, displayName) {
                var warnAboutAccessingKey = function() {
                    {
                        if (!specialPropKeyWarningShown) {
                            specialPropKeyWarningShown = true;
                            error("%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
                        }
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, "key", {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
            function defineRefPropWarningGetter(props, displayName) {
                var warnAboutAccessingRef = function() {
                    {
                        if (!specialPropRefWarningShown) {
                            specialPropRefWarningShown = true;
                            error("%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
                        }
                    }
                };
                warnAboutAccessingRef.isReactWarning = true;
                Object.defineProperty(props, "ref", {
                    get: warnAboutAccessingRef,
                    configurable: true
                });
            }
            function warnIfStringRefCannotBeAutoConverted(config) {
                {
                    if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                        var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                        if (!didWarnAboutStringRefs[componentName]) {
                            error('Component "%s" contains the string ref "%s". ' + "Support for string refs will be removed in a future major release. " + "This case cannot be automatically converted to an arrow function. " + "We ask you to manually fix this case by using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-string-ref", componentName, config.ref);
                            didWarnAboutStringRefs[componentName] = true;
                        }
                    }
                }
            }
            var ReactElement = function(type, key, ref, self, source, owner, props) {
                var element = {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: type,
                    key: key,
                    ref: ref,
                    props: props,
                    _owner: owner
                };
                {
                    element._store = {};
                    Object.defineProperty(element._store, "validated", {
                        configurable: false,
                        enumerable: false,
                        writable: true,
                        value: false
                    });
                    Object.defineProperty(element, "_self", {
                        configurable: false,
                        enumerable: false,
                        writable: false,
                        value: self
                    });
                    Object.defineProperty(element, "_source", {
                        configurable: false,
                        enumerable: false,
                        writable: false,
                        value: source
                    });
                    if (Object.freeze) {
                        Object.freeze(element.props);
                        Object.freeze(element);
                    }
                }
                return element;
            };
            function createElement(type, config, children) {
                var propName;
                var props = {};
                var key = null;
                var ref = null;
                var self = null;
                var source = null;
                if (config != null) {
                    if (hasValidRef(config)) {
                        ref = config.ref;
                        {
                            warnIfStringRefCannotBeAutoConverted(config);
                        }
                    }
                    if (hasValidKey(config)) {
                        {
                            checkKeyStringCoercion(config.key);
                        }
                        key = "" + config.key;
                    }
                    self = config.__self === undefined ? null : config.__self;
                    source = config.__source === undefined ? null : config.__source;
                    for(propName in config){
                        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                            props[propName] = config[propName];
                        }
                    }
                }
                var childrenLength = arguments.length - 2;
                if (childrenLength === 1) {
                    props.children = children;
                } else if (childrenLength > 1) {
                    var childArray = Array(childrenLength);
                    for(var i = 0; i < childrenLength; i++){
                        childArray[i] = arguments[i + 2];
                    }
                    {
                        if (Object.freeze) {
                            Object.freeze(childArray);
                        }
                    }
                    props.children = childArray;
                }
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for(propName in defaultProps){
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                {
                    if (key || ref) {
                        var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                        if (key) {
                            defineKeyPropWarningGetter(props, displayName);
                        }
                        if (ref) {
                            defineRefPropWarningGetter(props, displayName);
                        }
                    }
                }
                return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
            function cloneAndReplaceKey(oldElement, newKey) {
                var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                return newElement;
            }
            function cloneElement(element, config, children) {
                if (element === null || element === undefined) {
                    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                }
                var propName;
                var props = assign({}, element.props);
                var key = element.key;
                var ref = element.ref;
                var self = element._self;
                var source = element._source;
                var owner = element._owner;
                if (config != null) {
                    if (hasValidRef(config)) {
                        ref = config.ref;
                        owner = ReactCurrentOwner.current;
                    }
                    if (hasValidKey(config)) {
                        {
                            checkKeyStringCoercion(config.key);
                        }
                        key = "" + config.key;
                    }
                    var defaultProps;
                    if (element.type && element.type.defaultProps) {
                        defaultProps = element.type.defaultProps;
                    }
                    for(propName in config){
                        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                            if (config[propName] === undefined && defaultProps !== undefined) {
                                props[propName] = defaultProps[propName];
                            } else {
                                props[propName] = config[propName];
                            }
                        }
                    }
                }
                var childrenLength = arguments.length - 2;
                if (childrenLength === 1) {
                    props.children = children;
                } else if (childrenLength > 1) {
                    var childArray = Array(childrenLength);
                    for(var i = 0; i < childrenLength; i++){
                        childArray[i] = arguments[i + 2];
                    }
                    props.children = childArray;
                }
                return ReactElement(element.type, key, ref, self, source, owner, props);
            }
            function isValidElement(object) {
                return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            var SEPARATOR = ".";
            var SUBSEPARATOR = ":";
            function escape(key) {
                var escapeRegex = /[=:]/g;
                var escaperLookup = {
                    "=": "=0",
                    ":": "=2"
                };
                var escapedString = key.replace(escapeRegex, function(match) {
                    return escaperLookup[match];
                });
                return "$" + escapedString;
            }
            var didWarnAboutMaps = false;
            var userProvidedKeyEscapeRegex = /\/+/g;
            function escapeUserProvidedKey(text) {
                return text.replace(userProvidedKeyEscapeRegex, "$&/");
            }
            function getElementKey(element, index) {
                if (typeof element === "object" && element !== null && element.key != null) {
                    {
                        checkKeyStringCoercion(element.key);
                    }
                    return escape("" + element.key);
                }
                return index.toString(36);
            }
            function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                var type = typeof children;
                if (type === "undefined" || type === "boolean") {
                    children = null;
                }
                var invokeCallback = false;
                if (children === null) {
                    invokeCallback = true;
                } else {
                    switch(type){
                        case "string":
                        case "number":
                            invokeCallback = true;
                            break;
                        case "object":
                            switch(children.$$typeof){
                                case REACT_ELEMENT_TYPE:
                                case REACT_PORTAL_TYPE:
                                    invokeCallback = true;
                            }
                    }
                }
                if (invokeCallback) {
                    var _child = children;
                    var mappedChild = callback(_child);
                    var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                    if (isArray(mappedChild)) {
                        var escapedChildKey = "";
                        if (childKey != null) {
                            escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                        }
                        mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                            return c;
                        });
                    } else if (mappedChild != null) {
                        if (isValidElement(mappedChild)) {
                            {
                                if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                    checkKeyStringCoercion(mappedChild.key);
                                }
                            }
                            mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                        }
                        array.push(mappedChild);
                    }
                    return 1;
                }
                var child;
                var nextName;
                var subtreeCount = 0;
                var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                if (isArray(children)) {
                    for(var i = 0; i < children.length; i++){
                        child = children[i];
                        nextName = nextNamePrefix + getElementKey(child, i);
                        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                    }
                } else {
                    var iteratorFn = getIteratorFn(children);
                    if (typeof iteratorFn === "function") {
                        var iterableChildren = children;
                        {
                            if (iteratorFn === iterableChildren.entries) {
                                if (!didWarnAboutMaps) {
                                    warn("Using Maps as children is not supported. " + "Use an array of keyed ReactElements instead.");
                                }
                                didWarnAboutMaps = true;
                            }
                        }
                        var iterator = iteratorFn.call(iterableChildren);
                        var step;
                        var ii = 0;
                        while(!(step = iterator.next()).done){
                            child = step.value;
                            nextName = nextNamePrefix + getElementKey(child, ii++);
                            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                        }
                    } else if (type === "object") {
                        var childrenString = String(children);
                        throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
                    }
                }
                return subtreeCount;
            }
            function mapChildren(children, func, context) {
                if (children == null) {
                    return children;
                }
                var result = [];
                var count = 0;
                mapIntoArray(children, result, "", "", function(child) {
                    return func.call(context, child, count++);
                });
                return result;
            }
            function countChildren(children) {
                var n = 0;
                mapChildren(children, function() {
                    n++;
                });
                return n;
            }
            function forEachChildren(children, forEachFunc, forEachContext) {
                mapChildren(children, function() {
                    forEachFunc.apply(this, arguments);
                }, forEachContext);
            }
            function toArray(children) {
                return mapChildren(children, function(child) {
                    return child;
                }) || [];
            }
            function onlyChild(children) {
                if (!isValidElement(children)) {
                    throw new Error("React.Children.only expected to receive a single React element child.");
                }
                return children;
            }
            function createContext(defaultValue) {
                var context = {
                    $$typeof: REACT_CONTEXT_TYPE,
                    _currentValue: defaultValue,
                    _currentValue2: defaultValue,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                };
                context.Provider = {
                    $$typeof: REACT_PROVIDER_TYPE,
                    _context: context
                };
                var hasWarnedAboutUsingNestedContextConsumers = false;
                var hasWarnedAboutUsingConsumerProvider = false;
                var hasWarnedAboutDisplayNameOnConsumer = false;
                {
                    var Consumer = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        _context: context
                    };
                    Object.defineProperties(Consumer, {
                        Provider: {
                            get: function() {
                                if (!hasWarnedAboutUsingConsumerProvider) {
                                    hasWarnedAboutUsingConsumerProvider = true;
                                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Provider> instead?");
                                }
                                return context.Provider;
                            },
                            set: function(_Provider) {
                                context.Provider = _Provider;
                            }
                        },
                        _currentValue: {
                            get: function() {
                                return context._currentValue;
                            },
                            set: function(_currentValue) {
                                context._currentValue = _currentValue;
                            }
                        },
                        _currentValue2: {
                            get: function() {
                                return context._currentValue2;
                            },
                            set: function(_currentValue2) {
                                context._currentValue2 = _currentValue2;
                            }
                        },
                        _threadCount: {
                            get: function() {
                                return context._threadCount;
                            },
                            set: function(_threadCount) {
                                context._threadCount = _threadCount;
                            }
                        },
                        Consumer: {
                            get: function() {
                                if (!hasWarnedAboutUsingNestedContextConsumers) {
                                    hasWarnedAboutUsingNestedContextConsumers = true;
                                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Consumer> instead?");
                                }
                                return context.Consumer;
                            }
                        },
                        displayName: {
                            get: function() {
                                return context.displayName;
                            },
                            set: function(displayName) {
                                if (!hasWarnedAboutDisplayNameOnConsumer) {
                                    warn("Setting `displayName` on Context.Consumer has no effect. " + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                    hasWarnedAboutDisplayNameOnConsumer = true;
                                }
                            }
                        }
                    });
                    context.Consumer = Consumer;
                }
                {
                    context._currentRenderer = null;
                    context._currentRenderer2 = null;
                }
                return context;
            }
            var Uninitialized = -1;
            var Pending = 0;
            var Resolved = 1;
            var Rejected = 2;
            function lazyInitializer(payload) {
                if (payload._status === Uninitialized) {
                    var ctor = payload._result;
                    var thenable = ctor();
                    thenable.then(function(moduleObject) {
                        if (payload._status === Pending || payload._status === Uninitialized) {
                            var resolved = payload;
                            resolved._status = Resolved;
                            resolved._result = moduleObject;
                        }
                    }, function(error) {
                        if (payload._status === Pending || payload._status === Uninitialized) {
                            var rejected = payload;
                            rejected._status = Rejected;
                            rejected._result = error;
                        }
                    });
                    if (payload._status === Uninitialized) {
                        var pending = payload;
                        pending._status = Pending;
                        pending._result = thenable;
                    }
                }
                if (payload._status === Resolved) {
                    var moduleObject = payload._result;
                    {
                        if (moduleObject === undefined) {
                            error("lazy: Expected the result of a dynamic imp" + "ort() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))\n\n" + "Did you accidentally put curly braces around the import?", moduleObject);
                        }
                    }
                    {
                        if (!("default" in moduleObject)) {
                            error("lazy: Expected the result of a dynamic imp" + "ort() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))", moduleObject);
                        }
                    }
                    return moduleObject.default;
                } else {
                    throw payload._result;
                }
            }
            function lazy(ctor) {
                var payload = {
                    _status: Uninitialized,
                    _result: ctor
                };
                var lazyType = {
                    $$typeof: REACT_LAZY_TYPE,
                    _payload: payload,
                    _init: lazyInitializer
                };
                {
                    var defaultProps;
                    var propTypes;
                    Object.defineProperties(lazyType, {
                        defaultProps: {
                            configurable: true,
                            get: function() {
                                return defaultProps;
                            },
                            set: function(newDefaultProps) {
                                error("React.lazy(...): It is not supported to assign `defaultProps` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                                defaultProps = newDefaultProps;
                                Object.defineProperty(lazyType, "defaultProps", {
                                    enumerable: true
                                });
                            }
                        },
                        propTypes: {
                            configurable: true,
                            get: function() {
                                return propTypes;
                            },
                            set: function(newPropTypes) {
                                error("React.lazy(...): It is not supported to assign `propTypes` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                                propTypes = newPropTypes;
                                Object.defineProperty(lazyType, "propTypes", {
                                    enumerable: true
                                });
                            }
                        }
                    });
                }
                return lazyType;
            }
            function forwardRef(render) {
                {
                    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                        error("forwardRef requires a render function but received a `memo` " + "component. Instead of forwardRef(memo(...)), use " + "memo(forwardRef(...)).");
                    } else if (typeof render !== "function") {
                        error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
                    } else {
                        if (render.length !== 0 && render.length !== 2) {
                            error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                        }
                    }
                    if (render != null) {
                        if (render.defaultProps != null || render.propTypes != null) {
                            error("forwardRef render functions do not support propTypes or defaultProps. " + "Did you accidentally pass a React component?");
                        }
                    }
                }
                var elementType = {
                    $$typeof: REACT_FORWARD_REF_TYPE,
                    render: render
                };
                {
                    var ownName;
                    Object.defineProperty(elementType, "displayName", {
                        enumerable: false,
                        configurable: true,
                        get: function() {
                            return ownName;
                        },
                        set: function(name) {
                            ownName = name;
                            if (!render.name && !render.displayName) {
                                render.displayName = name;
                            }
                        }
                    });
                }
                return elementType;
            }
            var REACT_MODULE_REFERENCE;
            {
                REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
            }
            function isValidElementType(type) {
                if (typeof type === "string" || typeof type === "function") {
                    return true;
                }
                if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                    return true;
                }
                if (typeof type === "object" && type !== null) {
                    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
                        return true;
                    }
                }
                return false;
            }
            function memo(type, compare) {
                {
                    if (!isValidElementType(type)) {
                        error("memo: The first argument must be a component. Instead " + "received: %s", type === null ? "null" : typeof type);
                    }
                }
                var elementType = {
                    $$typeof: REACT_MEMO_TYPE,
                    type: type,
                    compare: compare === undefined ? null : compare
                };
                {
                    var ownName;
                    Object.defineProperty(elementType, "displayName", {
                        enumerable: false,
                        configurable: true,
                        get: function() {
                            return ownName;
                        },
                        set: function(name) {
                            ownName = name;
                            if (!type.name && !type.displayName) {
                                type.displayName = name;
                            }
                        }
                    });
                }
                return elementType;
            }
            function resolveDispatcher() {
                var dispatcher = ReactCurrentDispatcher.current;
                {
                    if (dispatcher === null) {
                        error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for" + " one of the following reasons:\n" + "1. You might have mismatching versions of React and the renderer (such as React DOM)\n" + "2. You might be breaking the Rules of Hooks\n" + "3. You might have more than one copy of React in the same app\n" + "See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                    }
                }
                return dispatcher;
            }
            function useContext(Context) {
                var dispatcher = resolveDispatcher();
                {
                    if (Context._context !== undefined) {
                        var realContext = Context._context;
                        if (realContext.Consumer === Context) {
                            error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " + "removed in a future major release. Did you mean to call useContext(Context) instead?");
                        } else if (realContext.Provider === Context) {
                            error("Calling useContext(Context.Provider) is not supported. " + "Did you mean to call useContext(Context) instead?");
                        }
                    }
                }
                return dispatcher.useContext(Context);
            }
            function useState(initialState) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useState(initialState);
            }
            function useReducer(reducer, initialArg, init) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useReducer(reducer, initialArg, init);
            }
            function useRef(initialValue) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useRef(initialValue);
            }
            function useEffect(create, deps) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useEffect(create, deps);
            }
            function useInsertionEffect(create, deps) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useInsertionEffect(create, deps);
            }
            function useLayoutEffect(create, deps) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useLayoutEffect(create, deps);
            }
            function useCallback(callback, deps) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useCallback(callback, deps);
            }
            function useMemo(create, deps) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useMemo(create, deps);
            }
            function useImperativeHandle(ref, create, deps) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useImperativeHandle(ref, create, deps);
            }
            function useDebugValue(value, formatterFn) {
                {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useDebugValue(value, formatterFn);
                }
            }
            function useTransition() {
                var dispatcher = resolveDispatcher();
                return dispatcher.useTransition();
            }
            function useDeferredValue(value) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDeferredValue(value);
            }
            function useId() {
                var dispatcher = resolveDispatcher();
                return dispatcher.useId();
            }
            function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                var dispatcher = resolveDispatcher();
                return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
            }
            var disabledDepth = 0;
            var prevLog;
            var prevInfo;
            var prevWarn;
            var prevError;
            var prevGroup;
            var prevGroupCollapsed;
            var prevGroupEnd;
            function disabledLog() {}
            disabledLog.__reactDisabledLog = true;
            function disableLogs() {
                {
                    if (disabledDepth === 0) {
                        prevLog = console.log;
                        prevInfo = console.info;
                        prevWarn = console.warn;
                        prevError = console.error;
                        prevGroup = console.group;
                        prevGroupCollapsed = console.groupCollapsed;
                        prevGroupEnd = console.groupEnd;
                        var props = {
                            configurable: true,
                            enumerable: true,
                            value: disabledLog,
                            writable: true
                        };
                        Object.defineProperties(console, {
                            info: props,
                            log: props,
                            warn: props,
                            error: props,
                            group: props,
                            groupCollapsed: props,
                            groupEnd: props
                        });
                    }
                    disabledDepth++;
                }
            }
            function reenableLogs() {
                {
                    disabledDepth--;
                    if (disabledDepth === 0) {
                        var props = {
                            configurable: true,
                            enumerable: true,
                            writable: true
                        };
                        Object.defineProperties(console, {
                            log: assign({}, props, {
                                value: prevLog
                            }),
                            info: assign({}, props, {
                                value: prevInfo
                            }),
                            warn: assign({}, props, {
                                value: prevWarn
                            }),
                            error: assign({}, props, {
                                value: prevError
                            }),
                            group: assign({}, props, {
                                value: prevGroup
                            }),
                            groupCollapsed: assign({}, props, {
                                value: prevGroupCollapsed
                            }),
                            groupEnd: assign({}, props, {
                                value: prevGroupEnd
                            })
                        });
                    }
                    if (disabledDepth < 0) {
                        error("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
                    }
                }
            }
            var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
            var prefix;
            function describeBuiltInComponentFrame(name, source, ownerFn) {
                {
                    if (prefix === undefined) {
                        try {
                            throw Error();
                        } catch (x) {
                            var match = x.stack.trim().match(/\n( *(at )?)/);
                            prefix = match && match[1] || "";
                        }
                    }
                    return "\n" + prefix + name;
                }
            }
            var reentry = false;
            var componentFrameCache;
            {
                var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                componentFrameCache = new PossiblyWeakMap();
            }
            function describeNativeComponentFrame(fn, construct) {
                if (!fn || reentry) {
                    return "";
                }
                {
                    var frame = componentFrameCache.get(fn);
                    if (frame !== undefined) {
                        return frame;
                    }
                }
                var control;
                reentry = true;
                var previousPrepareStackTrace = Error.prepareStackTrace;
                Error.prepareStackTrace = undefined;
                var previousDispatcher;
                {
                    previousDispatcher = ReactCurrentDispatcher$1.current;
                    ReactCurrentDispatcher$1.current = null;
                    disableLogs();
                }
                try {
                    if (construct) {
                        var Fake = function() {
                            throw Error();
                        };
                        Object.defineProperty(Fake.prototype, "props", {
                            set: function() {
                                throw Error();
                            }
                        });
                        if (typeof Reflect === "object" && Reflect.construct) {
                            try {
                                Reflect.construct(Fake, []);
                            } catch (x) {
                                control = x;
                            }
                            Reflect.construct(fn, [], Fake);
                        } else {
                            try {
                                Fake.call();
                            } catch (x) {
                                control = x;
                            }
                            fn.call(Fake.prototype);
                        }
                    } else {
                        try {
                            throw Error();
                        } catch (x) {
                            control = x;
                        }
                        fn();
                    }
                } catch (sample) {
                    if (sample && control && typeof sample.stack === "string") {
                        var sampleLines = sample.stack.split("\n");
                        var controlLines = control.stack.split("\n");
                        var s = sampleLines.length - 1;
                        var c = controlLines.length - 1;
                        while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                            c--;
                        }
                        for(; s >= 1 && c >= 0; s--, c--){
                            if (sampleLines[s] !== controlLines[c]) {
                                if (s !== 1 || c !== 1) {
                                    do {
                                        s--;
                                        c--;
                                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                            if (fn.displayName && _frame.includes("<anonymous>")) {
                                                _frame = _frame.replace("<anonymous>", fn.displayName);
                                            }
                                            {
                                                if (typeof fn === "function") {
                                                    componentFrameCache.set(fn, _frame);
                                                }
                                            }
                                            return _frame;
                                        }
                                    }while (s >= 1 && c >= 0);
                                }
                                break;
                            }
                        }
                    }
                } finally{
                    reentry = false;
                    {
                        ReactCurrentDispatcher$1.current = previousDispatcher;
                        reenableLogs();
                    }
                    Error.prepareStackTrace = previousPrepareStackTrace;
                }
                var name = fn ? fn.displayName || fn.name : "";
                var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                {
                    if (typeof fn === "function") {
                        componentFrameCache.set(fn, syntheticFrame);
                    }
                }
                return syntheticFrame;
            }
            function describeFunctionComponentFrame(fn, source, ownerFn) {
                {
                    return describeNativeComponentFrame(fn, false);
                }
            }
            function shouldConstruct(Component) {
                var prototype = Component.prototype;
                return !!(prototype && prototype.isReactComponent);
            }
            function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                if (type == null) {
                    return "";
                }
                if (typeof type === "function") {
                    {
                        return describeNativeComponentFrame(type, shouldConstruct(type));
                    }
                }
                if (typeof type === "string") {
                    return describeBuiltInComponentFrame(type);
                }
                switch(type){
                    case REACT_SUSPENSE_TYPE:
                        return describeBuiltInComponentFrame("Suspense");
                    case REACT_SUSPENSE_LIST_TYPE:
                        return describeBuiltInComponentFrame("SuspenseList");
                }
                if (typeof type === "object") {
                    switch(type.$$typeof){
                        case REACT_FORWARD_REF_TYPE:
                            return describeFunctionComponentFrame(type.render);
                        case REACT_MEMO_TYPE:
                            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                        case REACT_LAZY_TYPE:
                            {
                                var lazyComponent = type;
                                var payload = lazyComponent._payload;
                                var init = lazyComponent._init;
                                try {
                                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                } catch (x) {}
                            }
                    }
                }
                return "";
            }
            var loggedTypeFailures = {};
            var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
            function setCurrentlyValidatingElement(element) {
                {
                    if (element) {
                        var owner = element._owner;
                        var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                        ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                    } else {
                        ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                    }
                }
            }
            function checkPropTypes(typeSpecs, values, location, componentName, element) {
                {
                    var has = Function.call.bind(hasOwnProperty);
                    for(var typeSpecName in typeSpecs){
                        if (has(typeSpecs, typeSpecName)) {
                            var error$1 = void 0;
                            try {
                                if (typeof typeSpecs[typeSpecName] !== "function") {
                                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                    err.name = "Invariant Violation";
                                    throw err;
                                }
                                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                            } catch (ex) {
                                error$1 = ex;
                            }
                            if (error$1 && !(error$1 instanceof Error)) {
                                setCurrentlyValidatingElement(element);
                                error("%s: type specification of %s" + " `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                                setCurrentlyValidatingElement(null);
                            }
                            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                                loggedTypeFailures[error$1.message] = true;
                                setCurrentlyValidatingElement(element);
                                error("Failed %s type: %s", location, error$1.message);
                                setCurrentlyValidatingElement(null);
                            }
                        }
                    }
                }
            }
            function setCurrentlyValidatingElement$1(element) {
                {
                    if (element) {
                        var owner = element._owner;
                        var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                        setExtraStackFrame(stack);
                    } else {
                        setExtraStackFrame(null);
                    }
                }
            }
            var propTypesMisspellWarningShown;
            {
                propTypesMisspellWarningShown = false;
            }
            function getDeclarationErrorAddendum() {
                if (ReactCurrentOwner.current) {
                    var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (name) {
                        return "\n\nCheck the render method of `" + name + "`.";
                    }
                }
                return "";
            }
            function getSourceInfoErrorAddendum(source) {
                if (source !== undefined) {
                    var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                    var lineNumber = source.lineNumber;
                    return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                }
                return "";
            }
            function getSourceInfoErrorAddendumForProps(elementProps) {
                if (elementProps !== null && elementProps !== undefined) {
                    return getSourceInfoErrorAddendum(elementProps.__source);
                }
                return "";
            }
            var ownerHasKeyUseWarning = {};
            function getCurrentComponentErrorInfo(parentType) {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
            function validateExplicitKey(element, parentType) {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                var childOwner = "";
                if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                }
                {
                    setCurrentlyValidatingElement$1(element);
                    error('Each child in a list should have a unique "key" prop.' + "%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
                    setCurrentlyValidatingElement$1(null);
                }
            }
            function validateChildKeys(node, parentType) {
                if (typeof node !== "object") {
                    return;
                }
                if (isArray(node)) {
                    for(var i = 0; i < node.length; i++){
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                } else if (isValidElement(node)) {
                    if (node._store) {
                        node._store.validated = true;
                    }
                } else if (node) {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === "function") {
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while(!(step = iterator.next()).done){
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
            function validatePropTypes(element) {
                {
                    var type = element.type;
                    if (type === null || type === undefined || typeof type === "string") {
                        return;
                    }
                    var propTypes;
                    if (typeof type === "function") {
                        propTypes = type.propTypes;
                    } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                        propTypes = type.propTypes;
                    } else {
                        return;
                    }
                    if (propTypes) {
                        var name = getComponentNameFromType(type);
                        checkPropTypes(propTypes, element.props, "prop", name, element);
                    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                        propTypesMisspellWarningShown = true;
                        var _name = getComponentNameFromType(type);
                        error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                    }
                    if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                        error("getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.");
                    }
                }
            }
            function validateFragmentProps(fragment) {
                {
                    var keys = Object.keys(fragment.props);
                    for(var i = 0; i < keys.length; i++){
                        var key = keys[i];
                        if (key !== "children" && key !== "key") {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid prop `%s` supplied to `React.Fragment`. " + "React.Fragment can only have `key` and `children` props.", key);
                            setCurrentlyValidatingElement$1(null);
                            break;
                        }
                    }
                    if (fragment.ref !== null) {
                        setCurrentlyValidatingElement$1(fragment);
                        error("Invalid attribute `ref` supplied to `React.Fragment`.");
                        setCurrentlyValidatingElement$1(null);
                    }
                }
            }
            function createElementWithValidation(type, props, children) {
                var validType = isValidElementType(type);
                if (!validType) {
                    var info = "";
                    if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                        info += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                    if (sourceInfo) {
                        info += sourceInfo;
                    } else {
                        info += getDeclarationErrorAddendum();
                    }
                    var typeString;
                    if (type === null) {
                        typeString = "null";
                    } else if (isArray(type)) {
                        typeString = "array";
                    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                        info = " Did you accidentally export a JSX literal instead of a component?";
                    } else {
                        typeString = typeof type;
                    }
                    {
                        error("React.createElement: type is invalid -- expected a string (for " + "built-in components) or a class/function (for composite " + "components) but got: %s.%s", typeString, info);
                    }
                }
                var element = createElement.apply(this, arguments);
                if (element == null) {
                    return element;
                }
                if (validType) {
                    for(var i = 2; i < arguments.length; i++){
                        validateChildKeys(arguments[i], type);
                    }
                }
                if (type === REACT_FRAGMENT_TYPE) {
                    validateFragmentProps(element);
                } else {
                    validatePropTypes(element);
                }
                return element;
            }
            var didWarnAboutDeprecatedCreateFactory = false;
            function createFactoryWithValidation(type) {
                var validatedFactory = createElementWithValidation.bind(null, type);
                validatedFactory.type = type;
                {
                    if (!didWarnAboutDeprecatedCreateFactory) {
                        didWarnAboutDeprecatedCreateFactory = true;
                        warn("React.createFactory() is deprecated and will be removed in " + "a future major release. Consider using JSX " + "or use React.createElement() directly instead.");
                    }
                    Object.defineProperty(validatedFactory, "type", {
                        enumerable: false,
                        get: function() {
                            warn("Factory.type is deprecated. Access the class directly " + "before passing it to createFactory.");
                            Object.defineProperty(this, "type", {
                                value: type
                            });
                            return type;
                        }
                    });
                }
                return validatedFactory;
            }
            function cloneElementWithValidation(element, props, children) {
                var newElement = cloneElement.apply(this, arguments);
                for(var i = 2; i < arguments.length; i++){
                    validateChildKeys(arguments[i], newElement.type);
                }
                validatePropTypes(newElement);
                return newElement;
            }
            function startTransition(scope, options) {
                var prevTransition = ReactCurrentBatchConfig.transition;
                ReactCurrentBatchConfig.transition = {};
                var currentTransition = ReactCurrentBatchConfig.transition;
                {
                    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
                }
                try {
                    scope();
                } finally{
                    ReactCurrentBatchConfig.transition = prevTransition;
                    {
                        if (prevTransition === null && currentTransition._updatedFibers) {
                            var updatedFibersCount = currentTransition._updatedFibers.size;
                            if (updatedFibersCount > 10) {
                                warn("Detected a large number of updates inside startTransition. " + "If this is due to a subscription please re-write it to use React provided hooks. " + "Otherwise concurrent mode guarantees are off the table.");
                            }
                            currentTransition._updatedFibers.clear();
                        }
                    }
                }
            }
            var didWarnAboutMessageChannel = false;
            var enqueueTaskImpl = null;
            function enqueueTask(task) {
                if (enqueueTaskImpl === null) {
                    try {
                        var requireString = ("require" + Math.random()).slice(0, 7);
                        var nodeRequire = module && module[requireString];
                        enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
                    } catch (_err) {
                        enqueueTaskImpl = function(callback) {
                            {
                                if (didWarnAboutMessageChannel === false) {
                                    didWarnAboutMessageChannel = true;
                                    if (typeof MessageChannel === "undefined") {
                                        error("This browser does not have a MessageChannel implementation, " + "so enqueuing tasks via await act(async () => ...) will fail. " + "Please file an issue at https://github.com/facebook/react/issues " + "if you encounter this warning.");
                                    }
                                }
                            }
                            var channel = new MessageChannel();
                            channel.port1.onmessage = callback;
                            channel.port2.postMessage(undefined);
                        };
                    }
                }
                return enqueueTaskImpl(task);
            }
            var actScopeDepth = 0;
            var didWarnNoAwaitAct = false;
            function act(callback) {
                {
                    var prevActScopeDepth = actScopeDepth;
                    actScopeDepth++;
                    if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                    }
                    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                    var result;
                    try {
                        ReactCurrentActQueue.isBatchingLegacy = true;
                        result = callback();
                        if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                            var queue = ReactCurrentActQueue.current;
                            if (queue !== null) {
                                ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                flushActQueue(queue);
                            }
                        }
                    } catch (error) {
                        popActScope(prevActScopeDepth);
                        throw error;
                    } finally{
                        ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                    }
                    if (result !== null && typeof result === "object" && typeof result.then === "function") {
                        var thenableResult = result;
                        var wasAwaited = false;
                        var thenable = {
                            then: function(resolve, reject) {
                                wasAwaited = true;
                                thenableResult.then(function(returnValue) {
                                    popActScope(prevActScopeDepth);
                                    if (actScopeDepth === 0) {
                                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                    } else {
                                        resolve(returnValue);
                                    }
                                }, function(error) {
                                    popActScope(prevActScopeDepth);
                                    reject(error);
                                });
                            }
                        };
                        {
                            if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                                Promise.resolve().then(function() {}).then(function() {
                                    if (!wasAwaited) {
                                        didWarnNoAwaitAct = true;
                                        error("You called act(async () => ...) without await. " + "This could lead to unexpected testing behaviour, " + "interleaving multiple act calls and mixing their " + "scopes. " + "You should - await act(async () => ...);");
                                    }
                                });
                            }
                        }
                        return thenable;
                    } else {
                        var returnValue = result;
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) {
                            var _queue = ReactCurrentActQueue.current;
                            if (_queue !== null) {
                                flushActQueue(_queue);
                                ReactCurrentActQueue.current = null;
                            }
                            var _thenable = {
                                then: function(resolve, reject) {
                                    if (ReactCurrentActQueue.current === null) {
                                        ReactCurrentActQueue.current = [];
                                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                    } else {
                                        resolve(returnValue);
                                    }
                                }
                            };
                            return _thenable;
                        } else {
                            var _thenable2 = {
                                then: function(resolve, reject) {
                                    resolve(returnValue);
                                }
                            };
                            return _thenable2;
                        }
                    }
                }
            }
            function popActScope(prevActScopeDepth) {
                {
                    if (prevActScopeDepth !== actScopeDepth - 1) {
                        error("You seem to have overlapping act() calls, this is not supported. " + "Be sure to await previous act() calls before making a new one. ");
                    }
                    actScopeDepth = prevActScopeDepth;
                }
            }
            function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                {
                    var queue = ReactCurrentActQueue.current;
                    if (queue !== null) {
                        try {
                            flushActQueue(queue);
                            enqueueTask(function() {
                                if (queue.length === 0) {
                                    ReactCurrentActQueue.current = null;
                                    resolve(returnValue);
                                } else {
                                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                }
                            });
                        } catch (error) {
                            reject(error);
                        }
                    } else {
                        resolve(returnValue);
                    }
                }
            }
            var isFlushing = false;
            function flushActQueue(queue) {
                {
                    if (!isFlushing) {
                        isFlushing = true;
                        var i = 0;
                        try {
                            for(; i < queue.length; i++){
                                var callback = queue[i];
                                do {
                                    callback = callback(true);
                                }while (callback !== null);
                            }
                            queue.length = 0;
                        } catch (error) {
                            queue = queue.slice(i + 1);
                            throw error;
                        } finally{
                            isFlushing = false;
                        }
                    }
                }
            }
            var createElement$1 = createElementWithValidation;
            var cloneElement$1 = cloneElementWithValidation;
            var createFactory = createFactoryWithValidation;
            var Children = {
                map: mapChildren,
                forEach: forEachChildren,
                count: countChildren,
                toArray: toArray,
                only: onlyChild
            };
            exports.Children = Children;
            exports.Component = Component;
            exports.Fragment = REACT_FRAGMENT_TYPE;
            exports.Profiler = REACT_PROFILER_TYPE;
            exports.PureComponent = PureComponent;
            exports.StrictMode = REACT_STRICT_MODE_TYPE;
            exports.Suspense = REACT_SUSPENSE_TYPE;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
            exports.cloneElement = cloneElement$1;
            exports.createContext = createContext;
            exports.createElement = createElement$1;
            exports.createFactory = createFactory;
            exports.createRef = createRef;
            exports.forwardRef = forwardRef;
            exports.isValidElement = isValidElement;
            exports.lazy = lazy;
            exports.memo = memo;
            exports.startTransition = startTransition;
            exports.unstable_act = act;
            exports.useCallback = useCallback;
            exports.useContext = useContext;
            exports.useDebugValue = useDebugValue;
            exports.useDeferredValue = useDeferredValue;
            exports.useEffect = useEffect;
            exports.useId = useId;
            exports.useImperativeHandle = useImperativeHandle;
            exports.useInsertionEffect = useInsertionEffect;
            exports.useLayoutEffect = useLayoutEffect;
            exports.useMemo = useMemo;
            exports.useReducer = useReducer;
            exports.useRef = useRef;
            exports.useState = useState;
            exports.useSyncExternalStore = useSyncExternalStore;
            exports.useTransition = useTransition;
            exports.version = ReactVersion;
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
            }
        })();
    }
}
,
"node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js":/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
    function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
    }
    var B = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, C = Object.assign, D = {};
    function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {}
    F.prototype = E.prototype;
    function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
    }
    var H = G.prototype = new F;
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = !0;
    var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
        current: null
    }, L = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
            for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
            c.children = f;
        }
        if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
        return {
            $$typeof: l,
            type: a,
            key: k,
            ref: h,
            props: c,
            _owner: K.current
        };
    }
    function N(a, b) {
        return {
            $$typeof: l,
            type: a.type,
            key: b,
            ref: a.ref,
            props: a.props,
            _owner: a._owner
        };
    }
    function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
        var b = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + a.replace(/[=:]/g, function(a) {
            return b[a];
        });
    }
    var P = /\/+/g;
    function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = !1;
        if (null === a) h = !0;
        else switch(k){
            case "string":
            case "number":
                h = !0;
                break;
            case "object":
                switch(a.$$typeof){
                    case l:
                    case n:
                        h = !0;
                }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
            return a;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for(var g = 0; g < a.length; g++){
            k = a[g];
            var f = d + Q(k, g);
            h += R(k, b, e, f, c);
        }
        else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
    }
    function S(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a) {
            return b.call(e, a, c++);
        });
        return d;
    }
    function T(a) {
        if (-1 === a._status) {
            var b = a._result;
            b = b();
            b.then(function(b) {
                if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
            }, function(b) {
                if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
            });
            -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
    }
    var U = {
        current: null
    }, V = {
        transition: null
    }, W = {
        ReactCurrentDispatcher: U,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: K
    };
    exports.Children = {
        map: S,
        forEach: function(a, b, e) {
            S(a, function() {
                b.apply(this, arguments);
            }, e);
        },
        count: function(a) {
            var b = 0;
            S(a, function() {
                b++;
            });
            return b;
        },
        toArray: function(a) {
            return S(a, function(a) {
                return a;
            }) || [];
        },
        only: function(a) {
            if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
            return a;
        }
    };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
            void 0 !== b.ref && (k = b.ref, h = K.current);
            void 0 !== b.key && (c = "" + b.key);
            if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
            for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
            g = Array(f);
            for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
            d.children = g;
        }
        return {
            $$typeof: l,
            type: a.type,
            key: c,
            ref: k,
            props: d,
            _owner: h
        };
    };
    exports.createContext = function(a) {
        a = {
            $$typeof: u,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        };
        a.Provider = {
            $$typeof: t,
            _context: a
        };
        return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
    };
    exports.createRef = function() {
        return {
            current: null
        };
    };
    exports.forwardRef = function(a) {
        return {
            $$typeof: v,
            render: a
        };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: a
            },
            _init: T
        };
    };
    exports.memo = function(a, b) {
        return {
            $$typeof: x,
            type: a,
            compare: void 0 === b ? null : b
        };
    };
    exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
            a();
        } finally{
            V.transition = b;
        }
    };
    exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
        return U.current.useContext(a);
    };
    exports.useDebugValue = function() {};
    exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
    };
    exports.useId = function() {
        return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
        return U.current.useRef(a);
    };
    exports.useState = function(a) {
        return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
        return U.current.useTransition();
    };
    exports.version = "18.2.0";
}
,
"node_modules/.pnpm/react@18.2.0/node_modules/react/index.js":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
        module.exports = farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js", true);
    } else {
        module.exports = farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js", true);
    }
}
,});