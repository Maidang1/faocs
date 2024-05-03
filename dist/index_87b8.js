(function(_){for(var r in _){_[r].__farm_resource_pot__='index_87b8.js';(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__.register(r,_[r])}})({"node_modules/.pnpm/react-router-dom@6.22.3_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js":/**
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
"node_modules/.pnpm/react-router@6.22.3_react@18.2.0/node_modules/react-router/dist/index.js":/**
 * React Router v6.22.3
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
            return _router.AbortedDeferredError;
        },
        Await: function() {
            return Await;
        },
        MemoryRouter: function() {
            return MemoryRouter;
        },
        Navigate: function() {
            return Navigate;
        },
        NavigationType: function() {
            return _router.Action;
        },
        Outlet: function() {
            return Outlet;
        },
        Route: function() {
            return Route;
        },
        Router: function() {
            return Router;
        },
        RouterProvider: function() {
            return RouterProvider;
        },
        Routes: function() {
            return Routes;
        },
        UNSAFE_DataRouterContext: function() {
            return DataRouterContext;
        },
        UNSAFE_DataRouterStateContext: function() {
            return DataRouterStateContext;
        },
        UNSAFE_LocationContext: function() {
            return LocationContext;
        },
        UNSAFE_NavigationContext: function() {
            return NavigationContext;
        },
        UNSAFE_RouteContext: function() {
            return RouteContext;
        },
        UNSAFE_mapRouteProperties: function() {
            return mapRouteProperties;
        },
        UNSAFE_useRouteId: function() {
            return useRouteId;
        },
        UNSAFE_useRoutesImpl: function() {
            return useRoutesImpl;
        },
        createMemoryRouter: function() {
            return createMemoryRouter;
        },
        createPath: function() {
            return _router.createPath;
        },
        createRoutesFromChildren: function() {
            return createRoutesFromChildren;
        },
        createRoutesFromElements: function() {
            return createRoutesFromChildren;
        },
        defer: function() {
            return _router.defer;
        },
        generatePath: function() {
            return _router.generatePath;
        },
        isRouteErrorResponse: function() {
            return _router.isRouteErrorResponse;
        },
        json: function() {
            return _router.json;
        },
        matchPath: function() {
            return _router.matchPath;
        },
        matchRoutes: function() {
            return _router.matchRoutes;
        },
        parsePath: function() {
            return _router.parsePath;
        },
        redirect: function() {
            return _router.redirect;
        },
        redirectDocument: function() {
            return _router.redirectDocument;
        },
        renderMatches: function() {
            return renderMatches;
        },
        resolvePath: function() {
            return _router.resolvePath;
        },
        useActionData: function() {
            return useActionData;
        },
        useAsyncError: function() {
            return useAsyncError;
        },
        useAsyncValue: function() {
            return useAsyncValue;
        },
        useBlocker: function() {
            return useBlocker;
        },
        useHref: function() {
            return useHref;
        },
        useInRouterContext: function() {
            return useInRouterContext;
        },
        useLoaderData: function() {
            return useLoaderData;
        },
        useLocation: function() {
            return useLocation;
        },
        useMatch: function() {
            return useMatch;
        },
        useMatches: function() {
            return useMatches;
        },
        useNavigate: function() {
            return useNavigate;
        },
        useNavigation: function() {
            return useNavigation;
        },
        useNavigationType: function() {
            return useNavigationType;
        },
        useOutlet: function() {
            return useOutlet;
        },
        useOutletContext: function() {
            return useOutletContext;
        },
        useParams: function() {
            return useParams;
        },
        useResolvedPath: function() {
            return useResolvedPath;
        },
        useRevalidator: function() {
            return useRevalidator;
        },
        useRouteError: function() {
            return useRouteError;
        },
        useRouteLoaderData: function() {
            return useRouteLoaderData;
        },
        useRoutes: function() {
            return useRoutes;
        }
    });
    var _interop_require_wildcard = farmRequire("@swc/helpers/_/_interop_require_wildcard");
    var _react = _interop_require_wildcard._(farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));
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
    const DataRouterContext = _react.createContext(null);
    if (process.env.NODE_ENV !== "production") {
        DataRouterContext.displayName = "DataRouter";
    }
    const DataRouterStateContext = _react.createContext(null);
    if (process.env.NODE_ENV !== "production") {
        DataRouterStateContext.displayName = "DataRouterState";
    }
    const AwaitContext = _react.createContext(null);
    if (process.env.NODE_ENV !== "production") {
        AwaitContext.displayName = "Await";
    }
    const NavigationContext = _react.createContext(null);
    if (process.env.NODE_ENV !== "production") {
        NavigationContext.displayName = "Navigation";
    }
    const LocationContext = _react.createContext(null);
    if (process.env.NODE_ENV !== "production") {
        LocationContext.displayName = "Location";
    }
    const RouteContext = _react.createContext({
        outlet: null,
        matches: [],
        isDataRoute: false
    });
    if (process.env.NODE_ENV !== "production") {
        RouteContext.displayName = "Route";
    }
    const RouteErrorContext = _react.createContext(null);
    if (process.env.NODE_ENV !== "production") {
        RouteErrorContext.displayName = "RouteError";
    }
    function useHref(to, _temp) {
        let { relative } = _temp === void 0 ? {} : _temp;
        !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useHref() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let { basename, navigator } = _react.useContext(NavigationContext);
        let { hash, pathname, search } = useResolvedPath(to, {
            relative
        });
        let joinedPathname = pathname;
        if (basename !== "/") {
            joinedPathname = pathname === "/" ? basename : (0, _router.joinPaths)([
                basename,
                pathname
            ]);
        }
        return navigator.createHref({
            pathname: joinedPathname,
            search,
            hash
        });
    }
    function useInRouterContext() {
        return _react.useContext(LocationContext) != null;
    }
    function useLocation() {
        !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useLocation() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        return _react.useContext(LocationContext).location;
    }
    function useNavigationType() {
        return _react.useContext(LocationContext).navigationType;
    }
    function useMatch(pattern) {
        !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useMatch() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let { pathname } = useLocation();
        return _react.useMemo(()=>(0, _router.matchPath)(pattern, pathname), [
            pathname,
            pattern
        ]);
    }
    const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";
    function useIsomorphicLayoutEffect(cb) {
        let isStatic = _react.useContext(NavigationContext).static;
        if (!isStatic) {
            _react.useLayoutEffect(cb);
        }
    }
    function useNavigate() {
        let { isDataRoute } = _react.useContext(RouteContext);
        return isDataRoute ? useNavigateStable() : useNavigateUnstable();
    }
    function useNavigateUnstable() {
        !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useNavigate() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let dataRouterContext = _react.useContext(DataRouterContext);
        let { basename, future, navigator } = _react.useContext(NavigationContext);
        let { matches } = _react.useContext(RouteContext);
        let { pathname: locationPathname } = useLocation();
        let routePathnamesJson = JSON.stringify((0, _router.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
        let activeRef = _react.useRef(false);
        useIsomorphicLayoutEffect(()=>{
            activeRef.current = true;
        });
        let navigate = _react.useCallback(function(to, options) {
            if (options === void 0) {
                options = {};
            }
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : void 0;
            if (!activeRef.current) return;
            if (typeof to === "number") {
                navigator.go(to);
                return;
            }
            let path = (0, _router.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
            if (dataRouterContext == null && basename !== "/") {
                path.pathname = path.pathname === "/" ? basename : (0, _router.joinPaths)([
                    basename,
                    path.pathname
                ]);
            }
            (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
        }, [
            basename,
            navigator,
            routePathnamesJson,
            locationPathname,
            dataRouterContext
        ]);
        return navigate;
    }
    const OutletContext = _react.createContext(null);
    function useOutletContext() {
        return _react.useContext(OutletContext);
    }
    function useOutlet(context) {
        let outlet = _react.useContext(RouteContext).outlet;
        if (outlet) {
            return _react.createElement(OutletContext.Provider, {
                value: context
            }, outlet);
        }
        return outlet;
    }
    function useParams() {
        let { matches } = _react.useContext(RouteContext);
        let routeMatch = matches[matches.length - 1];
        return routeMatch ? routeMatch.params : {};
    }
    function useResolvedPath(to, _temp2) {
        let { relative } = _temp2 === void 0 ? {} : _temp2;
        let { future } = _react.useContext(NavigationContext);
        let { matches } = _react.useContext(RouteContext);
        let { pathname: locationPathname } = useLocation();
        let routePathnamesJson = JSON.stringify((0, _router.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
        return _react.useMemo(()=>(0, _router.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
            to,
            routePathnamesJson,
            locationPathname,
            relative
        ]);
    }
    function useRoutes(routes, locationArg) {
        return useRoutesImpl(routes, locationArg);
    }
    function useRoutesImpl(routes, locationArg, dataRouterState, future) {
        !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "useRoutes() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let { navigator } = _react.useContext(NavigationContext);
        let { matches: parentMatches } = _react.useContext(RouteContext);
        let routeMatch = parentMatches[parentMatches.length - 1];
        let parentParams = routeMatch ? routeMatch.params : {};
        let parentPathname = routeMatch ? routeMatch.pathname : "/";
        let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
        let parentRoute = routeMatch && routeMatch.route;
        if (process.env.NODE_ENV !== "production") {
            let parentPath = parentRoute && parentRoute.path || "";
            warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + 'parent route path has no trailing "*". This means if you navigate ' + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
        }
        let locationFromContext = useLocation();
        let location;
        if (locationArg) {
            var _parsedLocationArg$pa;
            let parsedLocationArg = typeof locationArg === "string" ? (0, _router.parsePath)(locationArg) : locationArg;
            !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : (0, _router.UNSAFE_invariant)(false) : void 0;
            location = parsedLocationArg;
        } else {
            location = locationFromContext;
        }
        let pathname = location.pathname || "/";
        let remainingPathname = pathname;
        if (parentPathnameBase !== "/") {
            let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
            let segments = pathname.replace(/^\//, "").split("/");
            remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
        }
        let matches = (0, _router.matchRoutes)(routes, {
            pathname: remainingPathname
        });
        if (process.env.NODE_ENV !== "production") {
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" ' + "does not have an element or Component. This means it will render an <Outlet /> with a " + 'null value by default resulting in an "empty" page.') : void 0;
        }
        let renderedMatches = _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
                params: Object.assign({}, parentParams, match.params),
                pathname: (0, _router.joinPaths)([
                    parentPathnameBase,
                    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
                ]),
                pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _router.joinPaths)([
                    parentPathnameBase,
                    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
                ])
            })), parentMatches, dataRouterState, future);
        if (locationArg && renderedMatches) {
            return _react.createElement(LocationContext.Provider, {
                value: {
                    location: _extends({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, location),
                    navigationType: _router.Action.Pop
                }
            }, renderedMatches);
        }
        return renderedMatches;
    }
    function DefaultErrorComponent() {
        let error = useRouteError();
        let message = (0, _router.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
        let stack = error instanceof Error ? error.stack : null;
        let lightgrey = "rgba(200,200,200, 0.5)";
        let preStyles = {
            padding: "0.5rem",
            backgroundColor: lightgrey
        };
        let codeStyles = {
            padding: "2px 4px",
            backgroundColor: lightgrey
        };
        let devInfo = null;
        if (process.env.NODE_ENV !== "production") {
            console.error("Error handled by React Router default ErrorBoundary:", error);
            devInfo = _react.createElement(_react.Fragment, null, _react.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), _react.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", _react.createElement("code", {
                style: codeStyles
            }, "ErrorBoundary"), " or", " ", _react.createElement("code", {
                style: codeStyles
            }, "errorElement"), " prop on your route."));
        }
        return _react.createElement(_react.Fragment, null, _react.createElement("h2", null, "Unexpected Application Error!"), _react.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, message), stack ? _react.createElement("pre", {
            style: preStyles
        }, stack) : null, devInfo);
    }
    const defaultErrorElement = _react.createElement(DefaultErrorComponent, null);
    class RenderErrorBoundary extends _react.Component {
        constructor(props){
            super(props);
            this.state = {
                location: props.location,
                revalidation: props.revalidation,
                error: props.error
            };
        }
        static getDerivedStateFromError(error) {
            return {
                error: error
            };
        }
        static getDerivedStateFromProps(props, state) {
            if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
                return {
                    error: props.error,
                    location: props.location,
                    revalidation: props.revalidation
                };
            }
            return {
                error: props.error !== undefined ? props.error : state.error,
                location: state.location,
                revalidation: props.revalidation || state.revalidation
            };
        }
        componentDidCatch(error, errorInfo) {
            console.error("React Router caught the following error during render", error, errorInfo);
        }
        render() {
            return this.state.error !== undefined ? _react.createElement(RouteContext.Provider, {
                value: this.props.routeContext
            }, _react.createElement(RouteErrorContext.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    }
    function RenderedRoute(_ref) {
        let { routeContext, match, children } = _ref;
        let dataRouterContext = _react.useContext(DataRouterContext);
        if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
            dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
        }
        return _react.createElement(RouteContext.Provider, {
            value: routeContext
        }, children);
    }
    function _renderMatches(matches, parentMatches, dataRouterState, future) {
        var _dataRouterState2;
        if (parentMatches === void 0) {
            parentMatches = [];
        }
        if (dataRouterState === void 0) {
            dataRouterState = null;
        }
        if (future === void 0) {
            future = null;
        }
        if (matches == null) {
            var _dataRouterState;
            if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
                matches = dataRouterState.matches;
            } else {
                return null;
            }
        }
        let renderedMatches = matches;
        let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
        if (errors != null) {
            let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]));
            !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : (0, _router.UNSAFE_invariant)(false) : void 0;
            renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
        }
        let renderFallback = false;
        let fallbackIndex = -1;
        if (dataRouterState && future && future.v7_partialHydration) {
            for(let i = 0; i < renderedMatches.length; i++){
                let match = renderedMatches[i];
                if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
                    fallbackIndex = i;
                }
                if (match.route.id) {
                    let { loaderData, errors } = dataRouterState;
                    let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
                    if (match.route.lazy || needsToRunLoader) {
                        renderFallback = true;
                        if (fallbackIndex >= 0) {
                            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                        } else {
                            renderedMatches = [
                                renderedMatches[0]
                            ];
                        }
                        break;
                    }
                }
            }
        }
        return renderedMatches.reduceRight((outlet, match, index)=>{
            let error;
            let shouldRenderHydrateFallback = false;
            let errorElement = null;
            let hydrateFallbackElement = null;
            if (dataRouterState) {
                error = errors && match.route.id ? errors[match.route.id] : undefined;
                errorElement = match.route.errorElement || defaultErrorElement;
                if (renderFallback) {
                    if (fallbackIndex < 0 && index === 0) {
                        warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                        shouldRenderHydrateFallback = true;
                        hydrateFallbackElement = null;
                    } else if (fallbackIndex === index) {
                        shouldRenderHydrateFallback = true;
                        hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                    }
                }
            }
            let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
            let getChildren = ()=>{
                let children;
                if (error) {
                    children = errorElement;
                } else if (shouldRenderHydrateFallback) {
                    children = hydrateFallbackElement;
                } else if (match.route.Component) {
                    children = _react.createElement(match.route.Component, null);
                } else if (match.route.element) {
                    children = match.route.element;
                } else {
                    children = outlet;
                }
                return _react.createElement(RenderedRoute, {
                    match: match,
                    routeContext: {
                        outlet,
                        matches,
                        isDataRoute: dataRouterState != null
                    },
                    children: children
                });
            };
            return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? _react.createElement(RenderErrorBoundary, {
                location: dataRouterState.location,
                revalidation: dataRouterState.revalidation,
                component: errorElement,
                error: error,
                children: getChildren(),
                routeContext: {
                    outlet: null,
                    matches,
                    isDataRoute: true
                }
            }) : getChildren();
        }, null);
    }
    var DataRouterHook = function(DataRouterHook) {
        DataRouterHook["UseBlocker"] = "useBlocker";
        DataRouterHook["UseRevalidator"] = "useRevalidator";
        DataRouterHook["UseNavigateStable"] = "useNavigate";
        return DataRouterHook;
    }(DataRouterHook || {});
    var DataRouterStateHook = function(DataRouterStateHook) {
        DataRouterStateHook["UseBlocker"] = "useBlocker";
        DataRouterStateHook["UseLoaderData"] = "useLoaderData";
        DataRouterStateHook["UseActionData"] = "useActionData";
        DataRouterStateHook["UseRouteError"] = "useRouteError";
        DataRouterStateHook["UseNavigation"] = "useNavigation";
        DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
        DataRouterStateHook["UseMatches"] = "useMatches";
        DataRouterStateHook["UseRevalidator"] = "useRevalidator";
        DataRouterStateHook["UseNavigateStable"] = "useNavigate";
        DataRouterStateHook["UseRouteId"] = "useRouteId";
        return DataRouterStateHook;
    }(DataRouterStateHook || {});
    function getDataRouterConsoleError(hookName) {
        return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
    }
    function useDataRouterContext(hookName) {
        let ctx = _react.useContext(DataRouterContext);
        !ctx ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
        return ctx;
    }
    function useDataRouterState(hookName) {
        let state = _react.useContext(DataRouterStateContext);
        !state ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
        return state;
    }
    function useRouteContext(hookName) {
        let route = _react.useContext(RouteContext);
        !route ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
        return route;
    }
    function useCurrentRouteId(hookName) {
        let route = useRouteContext(hookName);
        let thisRoute = route.matches[route.matches.length - 1];
        !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, hookName + ' can only be used on routes that contain a unique "id"') : (0, _router.UNSAFE_invariant)(false) : void 0;
        return thisRoute.route.id;
    }
    function useRouteId() {
        return useCurrentRouteId(DataRouterStateHook.UseRouteId);
    }
    function useNavigation() {
        let state = useDataRouterState(DataRouterStateHook.UseNavigation);
        return state.navigation;
    }
    function useRevalidator() {
        let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
        let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
        return _react.useMemo(()=>({
                revalidate: dataRouterContext.router.revalidate,
                state: state.revalidation
            }), [
            dataRouterContext.router.revalidate,
            state.revalidation
        ]);
    }
    function useMatches() {
        let { matches, loaderData } = useDataRouterState(DataRouterStateHook.UseMatches);
        return _react.useMemo(()=>matches.map((m)=>(0, _router.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [
            matches,
            loaderData
        ]);
    }
    function useLoaderData() {
        let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
        let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
        if (state.errors && state.errors[routeId] != null) {
            console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
            return undefined;
        }
        return state.loaderData[routeId];
    }
    function useRouteLoaderData(routeId) {
        let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
        return state.loaderData[routeId];
    }
    function useActionData() {
        let state = useDataRouterState(DataRouterStateHook.UseActionData);
        let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
        return state.actionData ? state.actionData[routeId] : undefined;
    }
    function useRouteError() {
        var _state$errors;
        let error = _react.useContext(RouteErrorContext);
        let state = useDataRouterState(DataRouterStateHook.UseRouteError);
        let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
        if (error !== undefined) {
            return error;
        }
        return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
    }
    function useAsyncValue() {
        let value = _react.useContext(AwaitContext);
        return value == null ? void 0 : value._data;
    }
    function useAsyncError() {
        let value = _react.useContext(AwaitContext);
        return value == null ? void 0 : value._error;
    }
    let blockerId = 0;
    function useBlocker(shouldBlock) {
        let { router, basename } = useDataRouterContext(DataRouterHook.UseBlocker);
        let state = useDataRouterState(DataRouterStateHook.UseBlocker);
        let [blockerKey, setBlockerKey] = _react.useState("");
        let blockerFunction = _react.useCallback((arg)=>{
            if (typeof shouldBlock !== "function") {
                return !!shouldBlock;
            }
            if (basename === "/") {
                return shouldBlock(arg);
            }
            let { currentLocation, nextLocation, historyAction } = arg;
            return shouldBlock({
                currentLocation: _extends({}, currentLocation, {
                    pathname: (0, _router.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
                }),
                nextLocation: _extends({}, nextLocation, {
                    pathname: (0, _router.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
                }),
                historyAction
            });
        }, [
            basename,
            shouldBlock
        ]);
        _react.useEffect(()=>{
            let key = String(++blockerId);
            setBlockerKey(key);
            return ()=>router.deleteBlocker(key);
        }, [
            router
        ]);
        _react.useEffect(()=>{
            if (blockerKey !== "") {
                router.getBlocker(blockerKey, blockerFunction);
            }
        }, [
            router,
            blockerKey,
            blockerFunction
        ]);
        return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _router.IDLE_BLOCKER;
    }
    function useNavigateStable() {
        let { router } = useDataRouterContext(DataRouterHook.UseNavigateStable);
        let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
        let activeRef = _react.useRef(false);
        useIsomorphicLayoutEffect(()=>{
            activeRef.current = true;
        });
        let navigate = _react.useCallback(function(to, options) {
            if (options === void 0) {
                options = {};
            }
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : void 0;
            if (!activeRef.current) return;
            if (typeof to === "number") {
                router.navigate(to);
            } else {
                router.navigate(to, _extends({
                    fromRouteId: id
                }, options));
            }
        }, [
            router,
            id
        ]);
        return navigate;
    }
    const alreadyWarned = {};
    function warningOnce(key, cond, message) {
        if (!cond && !alreadyWarned[key]) {
            alreadyWarned[key] = true;
            process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, message) : void 0;
        }
    }
    const START_TRANSITION = "startTransition";
    const startTransitionImpl = _react[START_TRANSITION];
    function RouterProvider(_ref) {
        let { fallbackElement, router, future } = _ref;
        let [state, setStateImpl] = _react.useState(router.state);
        let { v7_startTransition } = future || {};
        let setState = _react.useCallback((newState)=>{
            if (v7_startTransition && startTransitionImpl) {
                startTransitionImpl(()=>setStateImpl(newState));
            } else {
                setStateImpl(newState);
            }
        }, [
            setStateImpl,
            v7_startTransition
        ]);
        _react.useLayoutEffect(()=>router.subscribe(setState), [
            router,
            setState
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
        return _react.createElement(_react.Fragment, null, _react.createElement(DataRouterContext.Provider, {
            value: dataRouterContext
        }, _react.createElement(DataRouterStateContext.Provider, {
            value: state
        }, _react.createElement(Router, {
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
        }) : fallbackElement))), null);
    }
    function DataRoutes(_ref2) {
        let { routes, future, state } = _ref2;
        return useRoutesImpl(routes, undefined, state, future);
    }
    function MemoryRouter(_ref3) {
        let { basename, children, initialEntries, initialIndex, future } = _ref3;
        let historyRef = _react.useRef();
        if (historyRef.current == null) {
            historyRef.current = (0, _router.createMemoryHistory)({
                initialEntries,
                initialIndex,
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
        return _react.createElement(Router, {
            basename: basename,
            children: children,
            location: state.location,
            navigationType: state.action,
            navigator: history,
            future: future
        });
    }
    function Navigate(_ref4) {
        let { to, replace, state, relative } = _ref4;
        !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "<Navigate> may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let { future, static: isStatic } = _react.useContext(NavigationContext);
        process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
        let { matches } = _react.useContext(RouteContext);
        let { pathname: locationPathname } = useLocation();
        let navigate = useNavigate();
        let path = (0, _router.resolveTo)(to, (0, _router.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
        let jsonPath = JSON.stringify(path);
        _react.useEffect(()=>navigate(JSON.parse(jsonPath), {
                replace,
                state,
                relative
            }), [
            navigate,
            jsonPath,
            relative,
            replace,
            state
        ]);
        return null;
    }
    function Outlet(props) {
        return useOutlet(props.context);
    }
    function Route(_props) {
        process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : (0, _router.UNSAFE_invariant)(false);
    }
    function Router(_ref5) {
        let { basename: basenameProp = "/", children = null, location: locationProp, navigationType = _router.Action.Pop, navigator, static: staticProp = false, future } = _ref5;
        !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : (0, _router.UNSAFE_invariant)(false) : void 0;
        let basename = basenameProp.replace(/^\/*/, "/");
        let navigationContext = _react.useMemo(()=>({
                basename,
                navigator,
                static: staticProp,
                future: _extends({
                    v7_relativeSplatPath: false
                }, future)
            }), [
            basename,
            future,
            navigator,
            staticProp
        ]);
        if (typeof locationProp === "string") {
            locationProp = (0, _router.parsePath)(locationProp);
        }
        let { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
        let locationContext = _react.useMemo(()=>{
            let trailingPathname = (0, _router.stripBasename)(pathname, basename);
            if (trailingPathname == null) {
                return null;
            }
            return {
                location: {
                    pathname: trailingPathname,
                    search,
                    hash,
                    state,
                    key
                },
                navigationType
            };
        }, [
            basename,
            pathname,
            search,
            hash,
            state,
            key,
            navigationType
        ]);
        process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(locationContext != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
        if (locationContext == null) {
            return null;
        }
        return _react.createElement(NavigationContext.Provider, {
            value: navigationContext
        }, _react.createElement(LocationContext.Provider, {
            children: children,
            value: locationContext
        }));
    }
    function Routes(_ref6) {
        let { children, location } = _ref6;
        return useRoutes(createRoutesFromChildren(children), location);
    }
    function Await(_ref7) {
        let { children, errorElement, resolve } = _ref7;
        return _react.createElement(AwaitErrorBoundary, {
            resolve: resolve,
            errorElement: errorElement
        }, _react.createElement(ResolveAwait, null, children));
    }
    var AwaitRenderStatus = function(AwaitRenderStatus) {
        AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
        AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
        AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
        return AwaitRenderStatus;
    }(AwaitRenderStatus || {});
    const neverSettledPromise = new Promise(()=>{});
    class AwaitErrorBoundary extends _react.Component {
        constructor(props){
            super(props);
            this.state = {
                error: null
            };
        }
        static getDerivedStateFromError(error) {
            return {
                error
            };
        }
        componentDidCatch(error, errorInfo) {
            console.error("<Await> caught the following error during render", error, errorInfo);
        }
        render() {
            let { children, errorElement, resolve } = this.props;
            let promise = null;
            let status = AwaitRenderStatus.pending;
            if (!(resolve instanceof Promise)) {
                status = AwaitRenderStatus.success;
                promise = Promise.resolve();
                Object.defineProperty(promise, "_tracked", {
                    get: ()=>true
                });
                Object.defineProperty(promise, "_data", {
                    get: ()=>resolve
                });
            } else if (this.state.error) {
                status = AwaitRenderStatus.error;
                let renderError = this.state.error;
                promise = Promise.reject().catch(()=>{});
                Object.defineProperty(promise, "_tracked", {
                    get: ()=>true
                });
                Object.defineProperty(promise, "_error", {
                    get: ()=>renderError
                });
            } else if (resolve._tracked) {
                promise = resolve;
                status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
            } else {
                status = AwaitRenderStatus.pending;
                Object.defineProperty(resolve, "_tracked", {
                    get: ()=>true
                });
                promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                        get: ()=>data
                    }), (error)=>Object.defineProperty(resolve, "_error", {
                        get: ()=>error
                    }));
            }
            if (status === AwaitRenderStatus.error && promise._error instanceof _router.AbortedDeferredError) {
                throw neverSettledPromise;
            }
            if (status === AwaitRenderStatus.error && !errorElement) {
                throw promise._error;
            }
            if (status === AwaitRenderStatus.error) {
                return _react.createElement(AwaitContext.Provider, {
                    value: promise,
                    children: errorElement
                });
            }
            if (status === AwaitRenderStatus.success) {
                return _react.createElement(AwaitContext.Provider, {
                    value: promise,
                    children: children
                });
            }
            throw promise;
        }
    }
    function ResolveAwait(_ref8) {
        let { children } = _ref8;
        let data = useAsyncValue();
        let toRender = typeof children === "function" ? children(data) : children;
        return _react.createElement(_react.Fragment, null, toRender);
    }
    function createRoutesFromChildren(children, parentPath) {
        if (parentPath === void 0) {
            parentPath = [];
        }
        let routes = [];
        _react.Children.forEach(children, (element, index)=>{
            if (!_react.isValidElement(element)) {
                return;
            }
            let treePath = [
                ...parentPath,
                index
            ];
            if (element.type === _react.Fragment) {
                routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
                return;
            }
            !(element.type === Route) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : (0, _router.UNSAFE_invariant)(false) : void 0;
            !(!element.props.index || !element.props.children) ? process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_invariant)(false, "An index route cannot have child routes.") : (0, _router.UNSAFE_invariant)(false) : void 0;
            let route = {
                id: element.props.id || treePath.join("-"),
                caseSensitive: element.props.caseSensitive,
                element: element.props.element,
                Component: element.props.Component,
                index: element.props.index,
                path: element.props.path,
                loader: element.props.loader,
                action: element.props.action,
                errorElement: element.props.errorElement,
                ErrorBoundary: element.props.ErrorBoundary,
                hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
                shouldRevalidate: element.props.shouldRevalidate,
                handle: element.props.handle,
                lazy: element.props.lazy
            };
            if (element.props.children) {
                route.children = createRoutesFromChildren(element.props.children, treePath);
            }
            routes.push(route);
        });
        return routes;
    }
    function renderMatches(matches) {
        return _renderMatches(matches);
    }
    function mapRouteProperties(route) {
        let updates = {
            hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
        };
        if (route.Component) {
            if (process.env.NODE_ENV !== "production") {
                if (route.element) {
                    process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : void 0;
                }
            }
            Object.assign(updates, {
                element: _react.createElement(route.Component),
                Component: undefined
            });
        }
        if (route.HydrateFallback) {
            if (process.env.NODE_ENV !== "production") {
                if (route.hydrateFallbackElement) {
                    process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - " + "`HydrateFallback` will be used.") : void 0;
                }
            }
            Object.assign(updates, {
                hydrateFallbackElement: _react.createElement(route.HydrateFallback),
                HydrateFallback: undefined
            });
        }
        if (route.ErrorBoundary) {
            if (process.env.NODE_ENV !== "production") {
                if (route.errorElement) {
                    process.env.NODE_ENV !== "production" ? (0, _router.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : void 0;
                }
            }
            Object.assign(updates, {
                errorElement: _react.createElement(route.ErrorBoundary),
                ErrorBoundary: undefined
            });
        }
        return updates;
    }
    function createMemoryRouter(routes, opts) {
        return (0, _router.createRouter)({
            basename: opts == null ? void 0 : opts.basename,
            future: _extends({}, opts == null ? void 0 : opts.future, {
                v7_prependBasename: true
            }),
            history: (0, _router.createMemoryHistory)({
                initialEntries: opts == null ? void 0 : opts.initialEntries,
                initialIndex: opts == null ? void 0 : opts.initialIndex
            }),
            hydrationData: opts == null ? void 0 : opts.hydrationData,
            routes,
            mapRouteProperties
        }).initialize();
    }
}
,});