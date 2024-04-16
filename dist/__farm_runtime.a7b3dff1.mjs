import __farmNodeModule from 'node:module';globalThis.nodeRequire = __farmNodeModule.createRequire(import.meta.url);(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548'] = {__FARM_TARGET_ENV__: 'node'};(function(r,e){var t={};function n(r){return Promise.resolve(o(r))}function o(e){if(t[e])return t[e].exports;var i={id:e,exports:{}};r[e](i,i.exports,o,n);t[e]=i;return i.exports}o(e)})({"node_modules/.pnpm/@farmfe+runtime-plugin-import-meta@0.2.0/node_modules/@farmfe/runtime-plugin-import-meta/src/index.ts.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
            return _default;
        }
    });
    const __global_this__ = typeof globalThis !== "undefined" ? globalThis : window;
    var _default = {
        name: "farm-runtime-import-meta",
        _moduleSystem: {},
        bootstrap (system) {
            this._moduleSystem = system;
        },
        moduleCreated (module) {
            module.meta.env = {
                ...{
                    "NODE_ENV": "development"
                } ?? {},
                mode: process.env.NODE_ENV,
                dev: process.env.NODE_ENV === "development",
                prod: process.env.NODE_ENV === "production"
            };
            const publicPath = this._moduleSystem.publicPaths?.[0] || "";
            const { location } = __global_this__;
            const url = location ? `${location.protocol}//${location.host}${publicPath.replace(/\/$/, "")}/${module.id}?t=${Date.now()}` : module.resource_pot;
            module.meta.url = url;
        }
    };
}
,
"node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/index.ts.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
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
        ModuleSystem: function() {
            return _modulesystem.ModuleSystem;
        },
        Plugin: function() {
            return _plugin.FarmRuntimePlugin;
        }
    });
    var _interop_require_default = farmRequire("node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_interop_require_default.js.farm-runtime");
    var _indexts = _interop_require_default._(farmRequire("node_modules/.pnpm/@farmfe+runtime-plugin-import-meta@0.2.0/node_modules/@farmfe/runtime-plugin-import-meta/src/index.ts.farm-runtime"));
    var _modulesystem = farmRequire("node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/module-system.ts.farm-runtime");
    var _plugin = farmRequire("node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/plugin.ts.farm-runtime");
    var _resourceloader = farmRequire("node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/resource-loader.ts.farm-runtime");
    _resourceloader.__farm_global_this__.__farm_module_system__ = (function() {
        const moduleSystem = new _modulesystem.ModuleSystem();
        return function() {
            return moduleSystem;
        };
    })()();
    (globalThis || window || global)["bcce8776ff46d7442b9b9612fc5fe548"].__farm_module_system__.setPlugins([
        _indexts.default
    ]);
}
,
"node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/module-system.ts.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "ModuleSystem", {
        enumerable: true,
        get: function() {
            return ModuleSystem;
        }
    });
    var _module = farmRequire("node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/module.ts.farm-runtime");
    var _plugin = farmRequire("node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/plugin.ts.farm-runtime");
    var _resourceloader = farmRequire("node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/resource-loader.ts.farm-runtime");
    var _interop_require_default = farmRequire("node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_interop_require_default.js.farm-runtime");
    var _interop_require_wildcard = farmRequire("node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_interop_require_wildcard.js.farm-runtime");
    var _export_star = farmRequire("node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_export_star.js.farm-runtime");
    const __global_this__ = globalThis || window;
    const INTERNAL_MODULE_MAP = {
        "@swc/helpers/_/_interop_require_default": {
            default: _interop_require_default._interop_require_default,
            _: _interop_require_default._interop_require_default
        },
        "@swc/helpers/_/_interop_require_wildcard": {
            default: _interop_require_wildcard._interop_require_wildcard,
            _: _interop_require_wildcard._interop_require_wildcard
        },
        "@swc/helpers/_/_export_star": {
            default: _export_star._export_star,
            _: _export_star._export_star
        }
    };
    class ModuleSystem {
        modules;
        cache;
        externalModules;
        publicPaths;
        dynamicModuleResourcesMap;
        resourceLoader;
        pluginContainer;
        targetEnv;
        constructor(){
            this.modules = {};
            this.cache = {};
            this.publicPaths = [];
            this.dynamicModuleResourcesMap = {};
            this.resourceLoader = new _resourceloader.ResourceLoader(this, this.publicPaths);
            this.pluginContainer = new _plugin.FarmRuntimePluginContainer([]);
            this.targetEnv = _resourceloader.targetEnv;
            this.externalModules = {};
        }
        require(moduleId, isCJS = false) {
            if (INTERNAL_MODULE_MAP[moduleId]) {
                return INTERNAL_MODULE_MAP[moduleId];
            }
            if (this.cache[moduleId]) {
                const shouldSkip = this.pluginContainer.hookBail("readModuleCache", this.cache[moduleId]);
                if (!shouldSkip) {
                    return this.cache[moduleId].exports;
                }
            }
            const initializer = this.modules[moduleId];
            if (!initializer) {
                if (this.externalModules[moduleId]) {
                    const exports1 = this.externalModules[moduleId];
                    if (isCJS) {
                        return exports1.default || exports1;
                    }
                    return exports1;
                }
                if ((this.targetEnv === "node" || !_resourceloader.isBrowser) && nodeRequire) {
                    const externalModule = nodeRequire(moduleId);
                    return externalModule;
                }
                this.pluginContainer.hookSerial("moduleNotFound", moduleId);
                console.debug(`[Farm] Module "${moduleId}" is not registered`);
                return {};
            }
            const module = new _module.Module(moduleId, this.require.bind(this));
            module.resource_pot = initializer.__farm_resource_pot__;
            this.pluginContainer.hookSerial("moduleCreated", module);
            this.cache[moduleId] = module;
            if (!(globalThis || global || window || {}).require) {
                (globalThis || global || window || {
                    require: undefined
                }).require = this.require.bind(this);
            }
            initializer(module, module.exports, this.require.bind(this), this.farmDynamicRequire.bind(this));
            this.pluginContainer.hookSerial("moduleInitialized", module);
            return module.exports;
        }
        farmDynamicRequire(moduleId) {
            if (this.modules[moduleId]) {
                const exports1 = this.require(moduleId);
                if (exports1.__farm_async) {
                    return exports1.default;
                } else {
                    return Promise.resolve(exports1);
                }
            }
            const resources = this.dynamicModuleResourcesMap[moduleId];
            if (!resources || resources.length === 0) {
                throw new Error(`Dynamic imported module "${moduleId}" does not belong to any resource`);
            }
            return Promise.all(resources.map((resource)=>this.resourceLoader.load(resource))).then(()=>{
                if (!this.modules[moduleId]) {
                    throw new Error(`Dynamic imported module "${moduleId}" is not registered.`);
                }
                const result = this.require(moduleId);
                if (result.__farm_async) {
                    return result.default;
                } else {
                    return result;
                }
            }).catch((err)=>{
                console.error(`[Farm] Error loading dynamic module "${moduleId}"`, err);
                throw err;
            });
        }
        register(moduleId, initializer) {
            if (this.modules[moduleId]) {
                console.warn(`Module "${moduleId}" has registered! It should not be registered twice`);
                return;
            }
            this.modules[moduleId] = initializer;
        }
        update(moduleId, init) {
            this.modules[moduleId] = init;
            this.clearCache(moduleId);
        }
        delete(moduleId) {
            if (this.modules[moduleId]) {
                this.clearCache(moduleId);
                delete this.modules[moduleId];
                return true;
            } else {
                return false;
            }
        }
        getModuleUrl(moduleId) {
            const publicPath = this.publicPaths[0] ?? "";
            if (__global_this__.location) {
                const url = `${__global_this__.location.protocol}//${__global_this__.location.host}${publicPath.endsWith("/") ? publicPath.slice(0, -1) : publicPath}/${this.modules[moduleId].__farm_resource_pot__}`;
                return url;
            } else {
                return this.modules[moduleId].__farm_resource_pot__;
            }
        }
        getCache(moduleId) {
            return this.cache[moduleId];
        }
        clearCache(moduleId) {
            if (this.cache[moduleId]) {
                delete this.cache[moduleId];
                return true;
            } else {
                return false;
            }
        }
        setInitialLoadedResources(resources) {
            for (const resource of resources){
                this.resourceLoader.setLoadedResource(resource);
            }
        }
        setDynamicModuleResourcesMap(dynamicModuleResourcesMap) {
            this.dynamicModuleResourcesMap = dynamicModuleResourcesMap;
        }
        setPublicPaths(publicPaths) {
            this.publicPaths = publicPaths;
            this.resourceLoader.publicPaths = this.publicPaths;
        }
        setPlugins(plugins) {
            this.pluginContainer.plugins = plugins;
        }
        addPlugin(plugin) {
            if (this.pluginContainer.plugins.every((p)=>p.name !== plugin.name)) {
                this.pluginContainer.plugins.push(plugin);
            }
        }
        removePlugin(pluginName) {
            this.pluginContainer.plugins = this.pluginContainer.plugins.filter((p)=>p.name !== pluginName);
        }
        setExternalModules(externalModules) {
            Object.assign(this.externalModules, externalModules || {});
        }
        bootstrap() {
            this.pluginContainer.hookSerial("bootstrap", this);
        }
    }
}
,
"node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/module.ts.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "Module", {
        enumerable: true,
        get: function() {
            return Module;
        }
    });
    class Module {
        id;
        exports;
        resource_pot;
        meta;
        require;
        constructor(id, require){
            this.id = id;
            this.exports = {};
            this.meta = {
                env: {}
            };
            this.require = require;
        }
    }
}
,
"node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/plugin.ts.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "FarmRuntimePluginContainer", {
        enumerable: true,
        get: function() {
            return FarmRuntimePluginContainer;
        }
    });
    class FarmRuntimePluginContainer {
        plugins = [];
        constructor(plugins){
            this.plugins = plugins;
        }
        hookSerial(hookName, ...args) {
            for (const plugin of this.plugins){
                const hook = plugin[hookName];
                if (hook) {
                    hook.apply(plugin, args);
                }
            }
        }
        hookBail(hookName, ...args) {
            for (const plugin of this.plugins){
                const hook = plugin[hookName];
                if (hook) {
                    const result = hook.apply(plugin, args);
                    if (result) {
                        return result;
                    }
                }
            }
        }
    }
}
,
"node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/resource-loader.ts.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
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
        ResourceLoader: function() {
            return ResourceLoader;
        },
        __farm_global_this__: function() {
            return __farm_global_this__;
        },
        isBrowser: function() {
            return isBrowser;
        },
        targetEnv: function() {
            return targetEnv;
        }
    });
    const __farm_global_this__ = eval("(globalThis || window || global)['bcce8776ff46d7442b9b9612fc5fe548']");
    const targetEnv = __farm_global_this__.__FARM_TARGET_ENV__ || "node";
    const isBrowser = targetEnv === "browser" && (globalThis || window).document;
    class ResourceLoader {
        moduleSystem;
        _loadedResources;
        _loadingResources;
        publicPaths;
        constructor(moduleSystem, publicPaths){
            this.moduleSystem = moduleSystem;
            this._loadedResources = {};
            this._loadingResources = {};
            this.publicPaths = publicPaths;
        }
        load(resource, index = 0) {
            if (!isBrowser) {
                const result = this.moduleSystem.pluginContainer.hookBail("loadResource", resource);
                if (result) {
                    return result.then((res)=>{
                        if (!res.success && res.retryWithDefaultResourceLoader) {
                            if (resource.type === "script") {
                                return this._loadScript(`./${resource.path}`);
                            } else if (resource.type === "link") {
                                return this._loadLink(`./${resource.path}`);
                            }
                        } else if (!res.success) {
                            throw new Error(`[Farm] Failed to load resource: "${resource.path}, type: ${resource.type}". Original Error: ${res.err}`);
                        }
                    });
                } else {
                    if (resource.type === "script") {
                        return this._loadScript(`./${resource.path}`);
                    } else if (resource.type === "link") {
                        return this._loadLink(`./${resource.path}`);
                    }
                }
            }
            const publicPath = this.publicPaths[index];
            const url = `${publicPath.endsWith("/") ? publicPath.slice(0, -1) : publicPath}/${resource.path}`;
            if (this._loadedResources[resource.path]) {
                return;
            } else if (this._loadingResources[resource.path]) {
                return this._loadingResources[resource.path];
            }
            const result = this.moduleSystem.pluginContainer.hookBail("loadResource", resource);
            if (result) {
                return result.then((res)=>{
                    if (res.success) {
                        this.setLoadedResource(resource.path);
                    } else if (res.retryWithDefaultResourceLoader) {
                        return this._load(url, resource, index);
                    } else {
                        throw new Error(`[Farm] Failed to load resource: "${resource.path}, type: ${resource.type}". Original Error: ${res.err}`);
                    }
                });
            } else {
                return this._load(url, resource, index);
            }
        }
        setLoadedResource(path) {
            this._loadedResources[path] = true;
        }
        isResourceLoaded(path) {
            return this._loadedResources[path];
        }
        _load(url, resource, index) {
            let promise = Promise.resolve();
            if (resource.type === "script") {
                promise = this._loadScript(url);
            } else if (resource.type === "link") {
                promise = this._loadLink(url);
            }
            this._loadingResources[resource.path] = promise;
            promise.then(()=>{
                this._loadedResources[resource.path] = true;
            }).catch((e)=>{
                console.warn(`[Farm] Failed to load resource "${url}" using publicPath: ${this.publicPaths[index]}`);
                index++;
                if (index < this.publicPaths.length) {
                    return this._load(url, resource, index);
                } else {
                    throw new Error(`[Farm] Failed to load resource: "${resource.path}, type: ${resource.type}". ${e}`);
                }
            });
            return promise;
        }
        _loadScript(path) {
            if (!isBrowser) {
                return import(path);
            } else {
                return new Promise((resolve, reject)=>{
                    const script = document.createElement("script");
                    script.src = path;
                    document.body.appendChild(script);
                    script.onload = ()=>{
                        resolve();
                    };
                    script.onerror = (e)=>{
                        reject(e);
                    };
                });
            }
        }
        _loadLink(path) {
            if (!isBrowser) {
                return Promise.resolve();
            } else {
                return new Promise((resolve, reject)=>{
                    const link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = path;
                    document.head.appendChild(link);
                    link.onload = ()=>{
                        resolve();
                    };
                    link.onerror = (e)=>{
                        reject(e);
                    };
                });
            }
        }
    }
}
,
"node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_export_star.js.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
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
        _: function() {
            return _export_star;
        },
        _export_star: function() {
            return _export_star;
        }
    });
    function _export_star(from, to) {
        Object.keys(from).forEach(function(k) {
            if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
                Object.defineProperty(to, k, {
                    enumerable: true,
                    get: function() {
                        return from[k];
                    }
                });
            }
        });
        return from;
    }
}
,
"node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_interop_require_default.js.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
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
        _: function() {
            return _interop_require_default;
        },
        _interop_require_default: function() {
            return _interop_require_default;
        }
    });
    function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
}
,
"node_modules/.pnpm/@swc+helpers@0.5.9/node_modules/@swc/helpers/esm/_interop_require_wildcard.js.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
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
        _: function() {
            return _interop_require_wildcard;
        },
        _interop_require_wildcard: function() {
            return _interop_require_wildcard;
        }
    });
    function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) return obj;
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
            default: obj
        };
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) return cache.get(obj);
        var newObj = {
            __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var key in obj){
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        if (cache) cache.set(obj, newObj);
        return newObj;
    }
}
,},"node_modules/.pnpm/@farmfe+runtime@0.10.0/node_modules/@farmfe/runtime/src/index.ts.farm-runtime");