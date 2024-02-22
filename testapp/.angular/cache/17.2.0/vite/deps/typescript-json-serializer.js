import {
  __assign,
  __spreadArray
} from "./chunk-U62FMTEC.js";
import "./chunk-X6JV76XL.js";

// node_modules/typescript-json-serializer/node_modules/reflect-metadata/Reflect.js
var Reflect2;
(function(Reflect3) {
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
    var exporter = makeExporter(Reflect3);
    if (typeof root.Reflect === "undefined") {
      root.Reflect = Reflect3;
    } else {
      exporter = makeExporter(root.Reflect, exporter);
    }
    factory(exporter);
    function makeExporter(target, previous) {
      return function(key, value) {
        if (typeof target[key] !== "function") {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
        }
        if (previous)
          previous(key, value);
      };
    }
  })(function(exporter) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var supportsCreate = typeof Object.create === "function";
    var supportsProto = { __proto__: [] } instanceof Array;
    var downLevel = !supportsCreate && !supportsProto;
    var HashMap = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: supportsCreate ? function() {
        return MakeDictionary(/* @__PURE__ */ Object.create(null));
      } : supportsProto ? function() {
        return MakeDictionary({ __proto__: null });
      } : function() {
        return MakeDictionary({});
      },
      has: downLevel ? function(map, key) {
        return hasOwn.call(map, key);
      } : function(map, key) {
        return key in map;
      },
      get: downLevel ? function(map, key) {
        return hasOwn.call(map, key) ? map[key] : void 0;
      } : function(map, key) {
        return map[key];
      }
    };
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process["env"] && process["env"]["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    var Metadata = new _WeakMap();
    function decorate(decorators, target, propertyKey, attributes) {
      if (!IsUndefined(propertyKey)) {
        if (!IsArray(decorators))
          throw new TypeError();
        if (!IsObject(target))
          throw new TypeError();
        if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
          throw new TypeError();
        if (IsNull(attributes))
          attributes = void 0;
        propertyKey = ToPropertyKey(propertyKey);
        return DecorateProperty(decorators, target, propertyKey, attributes);
      } else {
        if (!IsArray(decorators))
          throw new TypeError();
        if (!IsConstructor(target))
          throw new TypeError();
        return DecorateConstructor(decorators, target);
      }
    }
    exporter("decorate", decorate);
    function metadata(metadataKey, metadataValue) {
      function decorator(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
          throw new TypeError();
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      return decorator;
    }
    exporter("metadata", metadata);
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    exporter("defineMetadata", defineMetadata);
    function hasMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasMetadata", hasMetadata);
    function hasOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasOwnMetadata", hasOwnMetadata);
    function getMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    exporter("getMetadata", getMetadata);
    function getOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("getOwnMetadata", getOwnMetadata);
    function getMetadataKeys(target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryMetadataKeys(target, propertyKey);
    }
    exporter("getMetadataKeys", getMetadataKeys);
    function getOwnMetadataKeys(target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    exporter("getOwnMetadataKeys", getOwnMetadataKeys);
    function deleteMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      var metadataMap = GetOrCreateMetadataMap(
        target,
        propertyKey,
        /*Create*/
        false
      );
      if (IsUndefined(metadataMap))
        return false;
      if (!metadataMap.delete(metadataKey))
        return false;
      if (metadataMap.size > 0)
        return true;
      var targetMetadata = Metadata.get(target);
      targetMetadata.delete(propertyKey);
      if (targetMetadata.size > 0)
        return true;
      Metadata.delete(target);
      return true;
    }
    exporter("deleteMetadata", deleteMetadata);
    function DecorateConstructor(decorators, target) {
      for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
        var decorator = decorators[i2];
        var decorated = decorator(target);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsConstructor(decorated))
            throw new TypeError();
          target = decorated;
        }
      }
      return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
      for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
        var decorator = decorators[i2];
        var decorated = decorator(target, propertyKey, descriptor);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsObject(decorated))
            throw new TypeError();
          descriptor = decorated;
        }
      }
      return descriptor;
    }
    function GetOrCreateMetadataMap(O, P2, Create) {
      var targetMetadata = Metadata.get(O);
      if (IsUndefined(targetMetadata)) {
        if (!Create)
          return void 0;
        targetMetadata = new _Map();
        Metadata.set(O, targetMetadata);
      }
      var metadataMap = targetMetadata.get(P2);
      if (IsUndefined(metadataMap)) {
        if (!Create)
          return void 0;
        metadataMap = new _Map();
        targetMetadata.set(P2, metadataMap);
      }
      return metadataMap;
    }
    function OrdinaryHasMetadata(MetadataKey, O, P2) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P2);
      if (hasOwn2)
        return true;
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent))
        return OrdinaryHasMetadata(MetadataKey, parent, P2);
      return false;
    }
    function OrdinaryHasOwnMetadata(MetadataKey, O, P2) {
      var metadataMap = GetOrCreateMetadataMap(
        O,
        P2,
        /*Create*/
        false
      );
      if (IsUndefined(metadataMap))
        return false;
      return ToBoolean(metadataMap.has(MetadataKey));
    }
    function OrdinaryGetMetadata(MetadataKey, O, P2) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P2);
      if (hasOwn2)
        return OrdinaryGetOwnMetadata(MetadataKey, O, P2);
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent))
        return OrdinaryGetMetadata(MetadataKey, parent, P2);
      return void 0;
    }
    function OrdinaryGetOwnMetadata(MetadataKey, O, P2) {
      var metadataMap = GetOrCreateMetadataMap(
        O,
        P2,
        /*Create*/
        false
      );
      if (IsUndefined(metadataMap))
        return void 0;
      return metadataMap.get(MetadataKey);
    }
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P2) {
      var metadataMap = GetOrCreateMetadataMap(
        O,
        P2,
        /*Create*/
        true
      );
      metadataMap.set(MetadataKey, MetadataValue);
    }
    function OrdinaryMetadataKeys(O, P2) {
      var ownKeys = OrdinaryOwnMetadataKeys(O, P2);
      var parent = OrdinaryGetPrototypeOf(O);
      if (parent === null)
        return ownKeys;
      var parentKeys = OrdinaryMetadataKeys(parent, P2);
      if (parentKeys.length <= 0)
        return ownKeys;
      if (ownKeys.length <= 0)
        return parentKeys;
      var set = new _Set();
      var keys = [];
      for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
        var key = parentKeys_1[_a];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      return keys;
    }
    function OrdinaryOwnMetadataKeys(O, P2) {
      var keys = [];
      var metadataMap = GetOrCreateMetadataMap(
        O,
        P2,
        /*Create*/
        false
      );
      if (IsUndefined(metadataMap))
        return keys;
      var keysObj = metadataMap.keys();
      var iterator = GetIterator(keysObj);
      var k = 0;
      while (true) {
        var next = IteratorStep(iterator);
        if (!next) {
          keys.length = k;
          return keys;
        }
        var nextValue = IteratorValue(next);
        try {
          keys[k] = nextValue;
        } catch (e) {
          try {
            IteratorClose(iterator);
          } finally {
            throw e;
          }
        }
        k++;
      }
    }
    function Type(x) {
      if (x === null)
        return 1;
      switch (typeof x) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return x === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function IsUndefined(x) {
      return x === void 0;
    }
    function IsNull(x) {
      return x === null;
    }
    function IsSymbol(x) {
      return typeof x === "symbol";
    }
    function IsObject(x) {
      return typeof x === "object" ? x !== null : typeof x === "function";
    }
    function ToPrimitive(input, PreferredType) {
      switch (Type(input)) {
        case 0:
          return input;
        case 1:
          return input;
        case 2:
          return input;
        case 3:
          return input;
        case 4:
          return input;
        case 5:
          return input;
      }
      var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
      var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
      if (exoticToPrim !== void 0) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result))
          throw new TypeError();
        return result;
      }
      return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    function OrdinaryToPrimitive(O, hint) {
      if (hint === "string") {
        var toString_1 = O.toString;
        if (IsCallable(toString_1)) {
          var result = toString_1.call(O);
          if (!IsObject(result))
            return result;
        }
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result))
            return result;
        }
      } else {
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result))
            return result;
        }
        var toString_2 = O.toString;
        if (IsCallable(toString_2)) {
          var result = toString_2.call(O);
          if (!IsObject(result))
            return result;
        }
      }
      throw new TypeError();
    }
    function ToBoolean(argument) {
      return !!argument;
    }
    function ToString(argument) {
      return "" + argument;
    }
    function ToPropertyKey(argument) {
      var key = ToPrimitive(
        argument,
        3
        /* String */
      );
      if (IsSymbol(key))
        return key;
      return ToString(key);
    }
    function IsArray(argument) {
      return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
    }
    function IsCallable(argument) {
      return typeof argument === "function";
    }
    function IsConstructor(argument) {
      return typeof argument === "function";
    }
    function IsPropertyKey(argument) {
      switch (Type(argument)) {
        case 3:
          return true;
        case 4:
          return true;
        default:
          return false;
      }
    }
    function GetMethod(V, P2) {
      var func = V[P2];
      if (func === void 0 || func === null)
        return void 0;
      if (!IsCallable(func))
        throw new TypeError();
      return func;
    }
    function GetIterator(obj) {
      var method = GetMethod(obj, iteratorSymbol);
      if (!IsCallable(method))
        throw new TypeError();
      var iterator = method.call(obj);
      if (!IsObject(iterator))
        throw new TypeError();
      return iterator;
    }
    function IteratorValue(iterResult) {
      return iterResult.value;
    }
    function IteratorStep(iterator) {
      var result = iterator.next();
      return result.done ? false : result;
    }
    function IteratorClose(iterator) {
      var f2 = iterator["return"];
      if (f2)
        f2.call(iterator);
    }
    function OrdinaryGetPrototypeOf(O) {
      var proto = Object.getPrototypeOf(O);
      if (typeof O !== "function" || O === functionPrototype)
        return proto;
      if (proto !== functionPrototype)
        return proto;
      var prototype = O.prototype;
      var prototypeProto = prototype && Object.getPrototypeOf(prototype);
      if (prototypeProto == null || prototypeProto === Object.prototype)
        return proto;
      var constructor = prototypeProto.constructor;
      if (typeof constructor !== "function")
        return proto;
      if (constructor === O)
        return proto;
      return constructor;
    }
    function CreateMapPolyfill() {
      var cacheSentinel = {};
      var arraySentinel = [];
      var MapIterator = (
        /** @class */
        function() {
          function MapIterator2(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }
          MapIterator2.prototype["@@iterator"] = function() {
            return this;
          };
          MapIterator2.prototype[iteratorSymbol] = function() {
            return this;
          };
          MapIterator2.prototype.next = function() {
            var index = this._index;
            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(this._keys[index], this._values[index]);
              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }
              return { value: result, done: false };
            }
            return { value: void 0, done: true };
          };
          MapIterator2.prototype.throw = function(error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            throw error;
          };
          MapIterator2.prototype.return = function(value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            return { value, done: true };
          };
          return MapIterator2;
        }()
      );
      return (
        /** @class */
        function() {
          function Map2() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          }
          Object.defineProperty(Map2.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true
          });
          Map2.prototype.has = function(key) {
            return this._find(
              key,
              /*insert*/
              false
            ) >= 0;
          };
          Map2.prototype.get = function(key) {
            var index = this._find(
              key,
              /*insert*/
              false
            );
            return index >= 0 ? this._values[index] : void 0;
          };
          Map2.prototype.set = function(key, value) {
            var index = this._find(
              key,
              /*insert*/
              true
            );
            this._values[index] = value;
            return this;
          };
          Map2.prototype.delete = function(key) {
            var index = this._find(
              key,
              /*insert*/
              false
            );
            if (index >= 0) {
              var size = this._keys.length;
              for (var i2 = index + 1; i2 < size; i2++) {
                this._keys[i2 - 1] = this._keys[i2];
                this._values[i2 - 1] = this._values[i2];
              }
              this._keys.length--;
              this._values.length--;
              if (key === this._cacheKey) {
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map2.prototype.clear = function() {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          };
          Map2.prototype.keys = function() {
            return new MapIterator(this._keys, this._values, getKey);
          };
          Map2.prototype.values = function() {
            return new MapIterator(this._keys, this._values, getValue);
          };
          Map2.prototype.entries = function() {
            return new MapIterator(this._keys, this._values, getEntry);
          };
          Map2.prototype["@@iterator"] = function() {
            return this.entries();
          };
          Map2.prototype[iteratorSymbol] = function() {
            return this.entries();
          };
          Map2.prototype._find = function(key, insert) {
            if (this._cacheKey !== key) {
              this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
            }
            if (this._cacheIndex < 0 && insert) {
              this._cacheIndex = this._keys.length;
              this._keys.push(key);
              this._values.push(void 0);
            }
            return this._cacheIndex;
          };
          return Map2;
        }()
      );
      function getKey(key, _) {
        return key;
      }
      function getValue(_, value) {
        return value;
      }
      function getEntry(key, value) {
        return [key, value];
      }
    }
    function CreateSetPolyfill() {
      return (
        /** @class */
        function() {
          function Set2() {
            this._map = new _Map();
          }
          Object.defineProperty(Set2.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: true,
            configurable: true
          });
          Set2.prototype.has = function(value) {
            return this._map.has(value);
          };
          Set2.prototype.add = function(value) {
            return this._map.set(value, value), this;
          };
          Set2.prototype.delete = function(value) {
            return this._map.delete(value);
          };
          Set2.prototype.clear = function() {
            this._map.clear();
          };
          Set2.prototype.keys = function() {
            return this._map.keys();
          };
          Set2.prototype.values = function() {
            return this._map.values();
          };
          Set2.prototype.entries = function() {
            return this._map.entries();
          };
          Set2.prototype["@@iterator"] = function() {
            return this.keys();
          };
          Set2.prototype[iteratorSymbol] = function() {
            return this.keys();
          };
          return Set2;
        }()
      );
    }
    function CreateWeakMapPolyfill() {
      var UUID_SIZE = 16;
      var keys = HashMap.create();
      var rootKey = CreateUniqueKey();
      return (
        /** @class */
        function() {
          function WeakMap2() {
            this._key = CreateUniqueKey();
          }
          WeakMap2.prototype.has = function(target) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              false
            );
            return table !== void 0 ? HashMap.has(table, this._key) : false;
          };
          WeakMap2.prototype.get = function(target) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              false
            );
            return table !== void 0 ? HashMap.get(table, this._key) : void 0;
          };
          WeakMap2.prototype.set = function(target, value) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              true
            );
            table[this._key] = value;
            return this;
          };
          WeakMap2.prototype.delete = function(target) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              false
            );
            return table !== void 0 ? delete table[this._key] : false;
          };
          WeakMap2.prototype.clear = function() {
            this._key = CreateUniqueKey();
          };
          return WeakMap2;
        }()
      );
      function CreateUniqueKey() {
        var key;
        do
          key = "@@WeakMap@@" + CreateUUID();
        while (HashMap.has(keys, key));
        keys[key] = true;
        return key;
      }
      function GetOrCreateWeakMapTable(target, create) {
        if (!hasOwn.call(target, rootKey)) {
          if (!create)
            return void 0;
          Object.defineProperty(target, rootKey, { value: HashMap.create() });
        }
        return target[rootKey];
      }
      function FillRandomBytes(buffer, size) {
        for (var i2 = 0; i2 < size; ++i2)
          buffer[i2] = Math.random() * 255 | 0;
        return buffer;
      }
      function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
          if (typeof crypto !== "undefined")
            return crypto.getRandomValues(new Uint8Array(size));
          if (typeof msCrypto !== "undefined")
            return msCrypto.getRandomValues(new Uint8Array(size));
          return FillRandomBytes(new Uint8Array(size), size);
        }
        return FillRandomBytes(new Array(size), size);
      }
      function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE);
        data[6] = data[6] & 79 | 64;
        data[8] = data[8] & 191 | 128;
        var result = "";
        for (var offset = 0; offset < UUID_SIZE; ++offset) {
          var byte = data[offset];
          if (offset === 4 || offset === 6 || offset === 8)
            result += "-";
          if (byte < 16)
            result += "0";
          result += byte.toString(16).toLowerCase();
        }
        return result;
      }
    }
    function MakeDictionary(obj) {
      obj.__ = void 0;
      delete obj.__;
      return obj;
    }
  });
})(Reflect2 || (Reflect2 = {}));

// node_modules/typescript-json-serializer/dist/index.esm.js
var r = function() {
  function e() {
  }
  return e.getBaseClass = function(e2) {
    return e2 ? Reflect.getPrototypeOf(e2) : void 0;
  }, e.getJsonPropertiesMetadata = function(t, r2) {
    if (t) {
      var i2 = "" + e.apiMap + (r2 || t.constructor.name);
      return Reflect.getMetadata(i2, t);
    }
  }, e.getParamTypes = function(t) {
    return t ? Reflect.getMetadata(e.designParamTypes, t) : void 0;
  }, e.getJsonObjectMetadata = function(t) {
    return t ? Reflect.getMetadata(e.apiMapJsonObject, t) : void 0;
  }, e.getType = function(t, r2) {
    return t ? Reflect.getMetadata(e.designType, t, r2) : void 0;
  }, e.isJsonObject = function(t) {
    return !!t && Reflect.hasOwnMetadata(e.apiMapJsonObject, t);
  }, e.setJsonPropertiesMetadata = function(t, r2) {
    if (r2) {
      var i2 = "" + e.apiMap + r2.constructor.name;
      Reflect.defineMetadata(i2, t, r2);
    }
  }, e.setJsonObject = function(t, r2) {
    r2 && Reflect.defineMetadata(e.apiMapJsonObject, t, r2);
  }, e.setType = function(t, r2, i2) {
    r2 && t && Reflect.defineMetadata(e.designType, t, r2, i2);
  }, e.apiMap = "api:map:", e.apiMapJsonObject = e.apiMap + "jsonObject", e.designType = "design:type", e.designParamTypes = "design:paramtypes", e;
}();
var i = function(e) {
  return "string" == typeof e;
};
var o = function(e) {
  return null !== e && "object" == typeof e && !n(e);
};
var n = function(e) {
  return Array.isArray(e);
};
var a = function(e) {
  return "[object Date]" === toString.call(e);
};
var s = function(e) {
  return r.isJsonObject(e);
};
var l = function(e) {
  return [null, void 0].includes(e);
};
var u = function(e) {
  return e instanceof Set;
};
var c = function(e) {
  try {
    var t = JSON.parse(e);
    return "object" == typeof t ? t : e;
  } catch (t2) {
    return e;
  }
};
var p = function(e, t) {
  return e.filter(function(e2) {
    return !t.some(function(t2) {
      return e2 === t2;
    });
  });
};
var d = function() {
  this.errorCallback = y, this.nullishPolicy = { undefined: "remove", null: "allow" }, this.additionalPropertiesPolicy = "remove";
};
var f = function(e) {
  throw new Error(e);
};
var y = function(e) {
  console.error(e);
};
var v = function() {
  function f2(e) {
    this.options = new d(), this.options = __assign(__assign({}, this.options), e);
  }
  return f2.prototype.deserialize = function(e, t) {
    return i(e) && (e = c(e)), n(e) ? this.deserializeObjectArray(e, t) : o(e) ? this.deserializeObject(e, t) : void this.error("Fail to deserialize: value is not an Array nor an Object.\nReceived: " + JSON.stringify(e) + ".");
  }, f2.prototype.deserializeObject = function(t, n2) {
    var a2, s2 = this;
    if (null === t)
      return "disallow" === this.options.nullishPolicy.null && this.error("Fail to deserialize: null is not assignable to type Object."), null;
    if (void 0 !== t) {
      if (i(t) && (t = c(t)), o(t)) {
        var u2;
        if (function(e) {
          if ("function" != typeof e)
            return false;
          try {
            Reflect.construct(String, [], e);
          } catch (e2) {
            return false;
          }
          return true;
        }(n2)) {
          var d2 = Object.create(n2.prototype), f3 = r.getJsonObjectMetadata(d2.constructor), y2 = null !== (a2 = null == f3 ? void 0 : f3.constructorParams) && void 0 !== a2 ? a2 : [];
          u2 = new (n2.bind.apply(n2, __spreadArray([void 0], y2)))();
        } else
          u2 = n2;
        var v2 = this.getJsonPropertiesMetadata(u2);
        if (!v2)
          return u2;
        var h2 = Object.keys(v2);
        if (h2.forEach(function(e) {
          var r2 = v2[e], i2 = s2.deserializeProperty(u2, e, t, r2);
          s2.checkRequiredProperty(r2, u2, e, i2, t, false);
          var o2 = u2[e];
          i2 === o2 || (null !== i2 || void 0 !== o2) && l(i2) || (o2 = i2), s2.isAllowedProperty(e, o2) && (u2[e] = o2);
        }), "remove" === this.options.additionalPropertiesPolicy)
          return u2;
        var P2 = p(Object.keys(t), h2);
        return P2.length ? ("disallow" === this.options.additionalPropertiesPolicy ? this.error("Additional properties detected in " + JSON.stringify(t) + ": " + P2 + ".") : "allow" === this.options.additionalPropertiesPolicy && P2.forEach(function(e) {
          return u2[e] = t[e];
        }), u2) : u2;
      }
      this.error("Fail to deserialize: type '" + typeof t + "' is not assignable to type 'Object'.\nReceived: " + JSON.stringify(t));
    } else
      "disallow" === this.options.nullishPolicy.undefined && this.error("Fail to deserialize: undefined is not assignable to type Object.");
  }, f2.prototype.deserializeObjectArray = function(e, t) {
    var r2 = this;
    if (null === e)
      return "disallow" === this.options.nullishPolicy.null && this.error("Fail to deserialize: null is not assignable to type Array."), null;
    if (void 0 !== e) {
      if (i(e) && (e = c(e)), n(e))
        return e.reduce(function(e2, i2) {
          var o2 = r2.deserializeObject(i2, t);
          return (!l(o2) || null === o2 && "remove" !== r2.options.nullishPolicy.null || void 0 === o2 && "remove" !== r2.options.nullishPolicy.undefined) && e2.push(o2), e2;
        }, []);
      this.error("Fail to deserialize: type '" + typeof e + "' is not assignable to type 'Array'.\nReceived: " + JSON.stringify(e));
    } else
      "disallow" === this.options.nullishPolicy.undefined && this.error("Fail to deserialize: undefined is not assignable to type Array.");
  }, f2.prototype.serialize = function(e) {
    return n(e) ? this.serializeObjectArray(e) : o(e) ? this.serializeObject(e) : void this.error("Fail to serialize: value is not an Array nor an Object.\nReceived: " + JSON.stringify(e) + ".");
  }, f2.prototype.serializeObject = function(e) {
    var t = this;
    if (null === e)
      return "disallow" === this.options.nullishPolicy.null && this.error("Fail to serialize: null is not assignable to type Object."), null;
    if (void 0 !== e) {
      if (!o(e))
        return e;
      var r2 = this.getJsonPropertiesMetadata(e);
      if (!r2)
        return e;
      var i2 = {}, a2 = Object.keys(e), s2 = Object.keys(r2);
      if (s2.forEach(function(o2) {
        var s3 = r2[o2];
        if (a2.includes(o2)) {
          var l3 = void 0;
          s3.beforeSerialize && (l3 = e[o2], e[o2] = s3.beforeSerialize(e[o2], e));
          var u2 = t.serializeProperty(e, o2, s3);
          if (s3.afterSerialize && (u2 = s3.afterSerialize(u2, e)), e[o2] = l3 || e[o2], n(s3.name))
            s3.name.forEach(function(e2) {
              t.isAllowedProperty(e2, u2[e2]) && (i2[e2] = u2[e2]);
            });
          else if (t.checkRequiredProperty(s3, e, o2, u2, e), t.isAllowedProperty(o2, u2))
            if (s3.isNameOverridden || void 0 === t.options.formatPropertyName)
              i2[s3.name] = u2;
            else {
              var c2 = t.options.formatPropertyName(s3.name);
              i2[c2] = u2;
            }
        } else
          n(s3.name) ? s3.name.forEach(function(e2) {
            t.isAllowedProperty(e2, void 0) && (i2[e2] = void 0);
          }) : (t.checkRequiredProperty(s3, e, o2, void 0, e), t.isAllowedProperty(o2, void 0) && (i2[s3.name] = void 0));
      }), "remove" === this.options.additionalPropertiesPolicy)
        return i2;
      var l2 = p(a2, s2);
      return l2.length ? ("disallow" === this.options.additionalPropertiesPolicy ? this.error("Additional properties detected in " + JSON.stringify(e) + ": " + l2 + ".") : "allow" === this.options.additionalPropertiesPolicy && l2.forEach(function(t2) {
        return i2[t2] = e[t2];
      }), i2) : i2;
    }
    "disallow" === this.options.nullishPolicy.undefined && this.error("Fail to serialize: undefined is not assignable to type Object.");
  }, f2.prototype.serializeObjectArray = function(e) {
    var t = this;
    if (null === e)
      return "disallow" === this.options.nullishPolicy.null && this.error("Fail to serialize: null is not assignable to type Array."), null;
    if (void 0 !== e) {
      if (n(e))
        return e.reduce(function(e2, r2) {
          var i2 = t.serializeObject(r2);
          return (!l(i2) || null === i2 && "remove" !== t.options.nullishPolicy.null || void 0 === i2 && "remove" !== t.options.nullishPolicy.undefined) && e2.push(i2), e2;
        }, []);
      this.error("Fail to serialize: type '" + typeof e + "' is not assignable to type 'Array'.\nReceived: " + JSON.stringify(e) + ".");
    } else
      "disallow" === this.options.nullishPolicy.undefined && this.error("Fail to serialize: undefined is not assignable to type Array.");
  }, f2.prototype.checkRequiredProperty = function(e, t, r2, i2, o2, n2) {
    if (void 0 === n2 && (n2 = true), e.required && l(i2) && l(t[r2])) {
      var a2 = t.constructor.name;
      this.error("Fail to " + (n2 ? "serialize" : "deserialize") + ": Property '" + r2 + "' is required in " + a2 + " " + JSON.stringify(o2) + ".");
    }
  }, f2.prototype.deserializeProperty = function(e, t, i2, o2) {
    if (!l(i2)) {
      var n2 = this.getDataSource(i2, o2, this.options.formatPropertyName);
      if (l(n2))
        return n2;
      var a2, u2 = r.getType(e, t), c2 = this.getDataStructureInformation(u2, e[t], o2), p2 = c2.isArrayProperty, d2 = c2.isSetProperty, f3 = c2.isMapProperty, y2 = c2.isDictionaryProperty, v2 = o2.type || u2;
      o2.beforeDeserialize && (n2 = o2.beforeDeserialize(n2, e));
      var h2 = o2.predicate;
      return y2 || f3 ? (a2 = this.deserializeDictionary(n2, v2, h2), f3 && (a2 = new Map(Object.entries(a2)))) : p2 || d2 ? (a2 = this.deserializeArray(n2, v2, h2), d2 && (a2 = new Set(a2))) : !s(v2) && !h2 || h2 && !h2(n2, i2) ? a2 = this.deserializePrimitive(n2, v2.name) : (v2 = o2.predicate ? o2.predicate(n2, i2) : v2, a2 = this.deserializeObject(n2, v2)), o2.afterDeserialize && (a2 = o2.afterDeserialize(a2, e)), a2;
    }
  }, f2.prototype.deserializePrimitive = function(e, t) {
    if (l(t))
      return e;
    if (typeof e === (t = t.toLowerCase()))
      return e;
    var r2 = "Fail to deserialize: type '" + typeof e + "' is not assignable to type '" + t + "'.\nReceived: " + JSON.stringify(e);
    switch (t) {
      case "string":
        var i2 = e.toString();
        return "[object Object]" === i2 ? void this.error(r2) : i2;
      case "number":
        return /* @__PURE__ */ function(e2) {
          return "number" == typeof e2;
        }(e) ? +e : void this.error(r2);
      case "boolean":
        return void this.error(r2);
      case "date":
        return function(e2) {
          return !a(e2) && !n(e2) && !isNaN(Date.parse(e2));
        }(e) ? new Date(e) : void this.error(r2);
      default:
        return e;
    }
  }, f2.prototype.deserializeDictionary = function(e, t, r2) {
    var i2 = this;
    if (o(e)) {
      var a2 = {};
      return Object.keys(e).forEach(function(o2) {
        var s2 = e[o2];
        a2[o2] = n(s2) ? s2.map(function(o3) {
          return i2.deserializeDictionaryProperty(e, o3, t, r2);
        }) : i2.deserializeDictionaryProperty(e, s2, t, r2);
      }), a2;
    }
    this.error("Fail to deserialize: type '" + typeof e + "' is not assignable to type 'Dictionary'.\nReceived: " + JSON.stringify(e) + ".");
  }, f2.prototype.deserializeDictionaryProperty = function(e, t, r2, i2) {
    var o2 = i2 ? i2(t, e) : void 0;
    return s(r2) || o2 ? this.deserializeObject(t, o2 || r2) : this.deserializePrimitive(t, typeof t);
  }, f2.prototype.deserializeArray = function(e, t, r2) {
    var i2 = this;
    if (n(e))
      return e.reduce(function(o2, n2) {
        var a2;
        return s(t) || r2 ? (t = r2 ? r2(n2, e) : t, a2 = i2.deserializeObject(n2, t)) : a2 = i2.deserializePrimitive(n2, typeof n2), (!l(a2) || null === a2 && "remove" !== i2.options.nullishPolicy.null || void 0 === a2 && "remove" !== i2.options.nullishPolicy.undefined) && o2.push(a2), o2;
      }, []);
    this.error("Fail to deserialize: type '" + typeof e + "' is not assignable to type 'Array'.\nReceived: " + JSON.stringify(e));
  }, f2.prototype.error = function(e) {
    this.options.errorCallback && this.options.errorCallback(e);
  }, f2.prototype.getClassesJsonPropertiesMetadata = function(e, t) {
    return e ? e.reduce(function(e2, i2) {
      var o2 = r.getJsonPropertiesMetadata(t, i2);
      return o2 && e2.push(o2), e2;
    }, []) : [];
  }, f2.prototype.getDataSource = function(e, t, r2) {
    var i2 = t.name, o2 = t.isNameOverridden;
    if (n(i2)) {
      var a2 = {};
      return i2.forEach(function(t2) {
        return a2[t2] = e[t2];
      }), a2;
    }
    return !o2 && r2 ? (i2 = r2(i2), e[i2]) : e[i2];
  }, f2.prototype.getDataStructureInformation = function(e, t, r2) {
    var i2, o2, a2, s2, l2;
    if (r2.dataStructure)
      return { isArrayProperty: null !== (i2 = "array" === r2.dataStructure) && void 0 !== i2 && i2, isDictionaryProperty: null !== (o2 = "dictionary" === r2.dataStructure) && void 0 !== o2 && o2, isMapProperty: null !== (a2 = "map" === r2.dataStructure) && void 0 !== a2 && a2, isSetProperty: null !== (s2 = "set" === r2.dataStructure) && void 0 !== s2 && s2 };
    var c2, p2 = null === (l2 = null == e ? void 0 : e.name) || void 0 === l2 ? void 0 : l2.toLowerCase();
    return "object" === p2 ? { isArrayProperty: n(t), isDictionaryProperty: false, isMapProperty: (c2 = t, c2 instanceof Map), isSetProperty: u(t) } : { isArrayProperty: "array" === p2, isDictionaryProperty: false, isMapProperty: "map" === p2, isSetProperty: "set" === p2 };
  }, f2.prototype.getJsonPropertiesMetadata = function(t) {
    var i2, o2 = (null !== (i2 = r.getJsonObjectMetadata(t.constructor)) && void 0 !== i2 ? i2 : {}).baseClassNames, n2 = r.getJsonPropertiesMetadata(t);
    if (!(n2 || o2 && o2.length))
      return n2;
    if (o2 && o2.length) {
      var a2 = this.getClassesJsonPropertiesMetadata(o2, t);
      return this.mergeJsonPropertiesMetadata.apply(this, __spreadArray(__spreadArray([], a2), [n2]));
    }
    return n2;
  }, f2.prototype.isAllowedProperty = function(e, t) {
    if (l(t)) {
      if ("disallow" === this.options.nullishPolicy["" + t])
        return this.error("Disallowed " + t + " value detected: " + e + "."), false;
      if ("remove" === this.options.nullishPolicy["" + t])
        return false;
    }
    return true;
  }, f2.prototype.mergeJsonPropertiesMetadata = function() {
    for (var e = [], r2 = 0; r2 < arguments.length; r2++)
      e[r2] = arguments[r2];
    var i2 = {};
    return e.forEach(function(e2) {
      e2 && Object.keys(e2).forEach(function(r3) {
        i2[r3] = __assign(__assign({}, i2[r3]), e2[r3]);
      });
    }), i2;
  }, f2.prototype.serializeDictionary = function(e) {
    var t = this;
    if (o(e))
      return Object.keys(e).reduce(function(r2, i2) {
        var o2 = e[i2];
        return r2[i2] = n(o2) ? t.serializeObjectArray(o2) : t.serializeObject(o2), r2;
      }, {});
    this.error("Fail to serialize: type '" + typeof e + "' is not assignable to type 'Dictionary'.\nReceived: " + JSON.stringify(e) + ".");
  }, f2.prototype.serializeProperty = function(e, t, o2) {
    var n2, l2 = this, u2 = e[t], c2 = r.getType(e, t), p2 = this.getDataStructureInformation(c2, u2, o2), d2 = p2.isArrayProperty, f3 = p2.isDictionaryProperty, y2 = p2.isMapProperty, v2 = p2.isSetProperty, h2 = o2.predicate, P2 = o2.type || c2, g2 = s(P2);
    if (u2 && (g2 || h2)) {
      if (d2 || v2) {
        var b2 = v2 ? Array.from(u2) : u2;
        return this.serializeObjectArray(b2);
      }
      if (f3 || y2) {
        if (!y2)
          return this.serializeDictionary(u2);
        var m2 = {};
        return u2.forEach(function(e2, t2) {
          i(t2) ? m2[t2] = e2 : l2.error("Fail to serialize: type of '" + typeof t2 + "' is not assignable to type 'string'.\nReceived: " + JSON.stringify(t2) + ".");
        }), this.serializeDictionary(m2);
      }
      return this.serializeObject(u2);
    }
    return "date" === (null === (n2 = null == P2 ? void 0 : P2.name) || void 0 === n2 ? void 0 : n2.toLocaleLowerCase()) && a(u2) ? u2.toISOString() : u2;
  }, f2;
}();
var h = function(t) {
  var i2 = r.getBaseClass(t);
  return i2 && i2.name ? __spreadArray(__spreadArray([], h(i2)), [i2.name]) : [];
};
var P = function(e) {
  return function(t) {
    var i2, o2 = h(t), n2 = null !== (i2 = null == e ? void 0 : e.constructorParams) && void 0 !== i2 ? i2 : [];
    r.setJsonObject({ baseClassNames: o2, constructorParams: n2 }, t);
  };
};
var g = function(e) {
  return function(t, i2, o2) {
    var n2;
    if (void 0 === i2 && t.prototype) {
      var a2 = r.getParamTypes(t)[o2];
      i2 = b(t.prototype.constructor).get(o2), t = t.prototype, r.setType(a2, t, i2);
    }
    var s2 = null !== (n2 = r.getJsonPropertiesMetadata(t)) && void 0 !== n2 ? n2 : {};
    s2[i2] = m(i2, e), r.setJsonPropertiesMetadata(s2, t);
  };
};
var b = function(e) {
  var t, r2 = e.toString().split("}")[0].replace(/(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, "").replace(/[\r\t\n\v\f ]/g, ""), i2 = r2.length;
  "," === r2[i2 - 2] && (t = r2[i2 - 1]);
  var o2 = t ? new RegExp("(?:(this|" + t + "|\\(" + t + "=t.call\\(this(,.)*\\)\\))\\.)([^,;\n}]+)", "gm") : new RegExp("(?:(this)\\.)([^,;\n}]+)", "gm"), n2 = /* @__PURE__ */ new Map(), a2 = /(?:.*(?:constructor|function).*?(?=\())(?:\()(.+?(?=\)))/m.exec(r2);
  if (!a2 || !a2.length)
    return n2;
  for (var s2, l2 = a2[1].split(","), u2 = function() {
    var e2 = s2.length - 1, t2 = s2[e2].split("="), r3 = l2.findIndex(function(e3) {
      return e3 === t2[1];
    });
    r3 > -1 && n2.set(r3, t2[0]);
  }; s2 = o2.exec(r2); )
    u2();
  return n2;
};
var m = function(e, n2) {
  var a2 = { name: e.toString() };
  return n2 ? i(n2) ? (a2.name = n2, a2.isNameOverridden = true, a2) : (o(n2) && (a2 = __assign(__assign({}, a2), n2), n2.name && (a2.name = n2.name, a2.isNameOverridden = true), function(e2) {
    if (!e2)
      return false;
    var t = r.getParamTypes(e2), i2 = e2.length;
    return (1 === i2 || 2 === i2) && !t;
  }(n2.type) && (delete a2.type, a2.predicate = n2.type)), a2) : a2;
};
export {
  P as JsonObject,
  g as JsonProperty,
  v as JsonSerializer,
  d as JsonSerializerOptions,
  l as isNullish,
  y as logError,
  f as throwError
};
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=typescript-json-serializer.js.map
