import "./__farm_runtime.a7b3dff1.mjs";import "./index_4ff2.js";import "./index_6f92.js";import "./index_ce5c.js";import "./index_eccc.js";import "./index_f10d.js";(function(_){for(var r in _){_[r].__farm_resource_pot__='index_daaa.js';(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__.register(r,_[r])}})({"src/index-server.tsx":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
            return render;
        }
    });
    var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    var _react = _interop_require_default._(farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));
    var _server = _interop_require_default._(farmRequire("node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/server.node.js"));
    var _server1 = farmRequire("node_modules/.pnpm/react-router-dom@6.22.3_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/server.mjs");
    var _main = _interop_require_default._(farmRequire("src/main.tsx"));
    function render(url) {
        return _server.default.renderToString(_react.default.createElement(_react.default.StrictMode, null, _react.default.createElement(_server1.StaticRouter, {
            location: url
        }, _react.default.createElement(_main.default, null))));
    }
}
,
"src/main.tsx":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
            return App;
        }
    });
    var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
    var _react = _interop_require_default._(farmRequire("node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));
    var _reactrouterdom = farmRequire("node_modules/.pnpm/react-router-dom@6.22.3_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js");
    function App() {
        return _react.default.createElement("div", null, _react.default.createElement(_reactrouterdom.Routes, null, _react.default.createElement(_reactrouterdom.Route, {
            path: "/",
            element: _react.default.createElement(Layout, null)
        }, _react.default.createElement(_reactrouterdom.Route, {
            index: true,
            element: _react.default.createElement(Home, null)
        }), _react.default.createElement(_reactrouterdom.Route, {
            path: "about",
            element: _react.default.createElement(About, null)
        }), _react.default.createElement(_reactrouterdom.Route, {
            path: "dashboard",
            element: _react.default.createElement(Dashboard, null)
        }), _react.default.createElement(_reactrouterdom.Route, {
            path: "*",
            element: _react.default.createElement(NoMatch, null)
        }))));
    }
    function Layout() {
        return _react.default.createElement("div", null, _react.default.createElement("nav", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactrouterdom.Link, {
            to: "/"
        }, "Home")), _react.default.createElement("li", null, _react.default.createElement(_reactrouterdom.Link, {
            to: "/about"
        }, "About")), _react.default.createElement("li", null, _react.default.createElement(_reactrouterdom.Link, {
            to: "/dashboard"
        }, "Dashboard")), _react.default.createElement("li", null, _react.default.createElement(_reactrouterdom.Link, {
            to: "/nothing-here"
        }, "Nothing Here")))), _react.default.createElement("hr", null), _react.default.createElement(_reactrouterdom.Outlet, null));
    }
    function Home() {
        return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Home"));
    }
    function About() {
        return _react.default.createElement("div", null, _react.default.createElement("h2", null, "About"));
    }
    function Dashboard() {
        return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Dashboard"));
    }
    function NoMatch() {
        return _react.default.createElement("div", null, _react.default.createElement("h2", null, "Nothing to see here!"), _react.default.createElement("p", null, _react.default.createElement(_reactrouterdom.Link, {
            to: "/"
        }, "Go to the home page")));
    }
}
,});(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__.setInitialLoadedResources(['index_4ff2.js','index_6f92.js','index_ce5c.js','index_eccc.js','index_f10d.js']);(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("src/index-server.tsx");export default entry.default || entry;
//# sourceMappingURL=index.js.map