/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/caml_builtin_exceptions.js'");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/curry.js'");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List                            = __webpack_require__(12);
var Curry                           = __webpack_require__(4);
var React                           = __webpack_require__(11);
var Caml_builtin_exceptions         = __webpack_require__(1);
var ReasonReactOptimizedCreateClass = __webpack_require__(61);

function createDomElement(s, props, children) {
  var vararg = /* array */[
      s,
      props
    ].concat(children);
  return React.createElement.apply(null, vararg);
}

var magicNull = null;

function $$default() {
  return /* () */0;
}

function chain(handlerOne, handlerTwo, payload) {
  Curry._1(handlerOne, payload);
  return Curry._1(handlerTwo, payload);
}

var Callback = /* module */[
  /* default */$$default,
  /* chain */chain
];

function lifecycleNoUpdate() {
  return /* NoUpdate */0;
}

function lifecyclePreviousNextUnit() {
  return /* () */0;
}

function lifecyclePreviousCurrentReturnUnit() {
  return /* () */0;
}

function lifecycleReturnUnit() {
  return /* () */0;
}

function lifecycleReturnTrue() {
  return /* true */1;
}

function willReceivePropsDefault(param) {
  return param[/* state */2];
}

function renderDefault() {
  return "RenderNotImplemented";
}

function initialStateDefault() {
  return /* () */0;
}

function reducerDefault(_, _$1) {
  return /* NoUpdate */0;
}

function convertPropsIfTheyreFromJs(props, jsPropsToReason, debugName) {
  var match = props.reasonProps;
  if (match == null) {
    if (jsPropsToReason) {
      return /* Element */[Curry._1(jsPropsToReason[0], props)];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "A JS component called the Reason component " + (debugName + " which didn't implement the JS->Reason React props conversion.")
          ];
    }
  } else {
    return match;
  }
}

function createClass(debugName) {
  return ReasonReactOptimizedCreateClass.createClass({
              displayName: debugName,
              self: (function (state, retainedProps) {
                  var $$this = this ;
                  return /* record */[
                          /* handle */$$this.handleMethod,
                          /* reduce */$$this.reduceMethod,
                          /* state */state,
                          /* retainedProps */retainedProps
                        ];
                }),
              transitionNextTotalState: (function (curTotalState, reasonStateUpdate) {
                  if (typeof reasonStateUpdate === "number") {
                    return curTotalState;
                  } else {
                    switch (reasonStateUpdate.tag | 0) {
                      case 0 : 
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements,
                                  sideEffects: curTotalState.sideEffects
                                };
                      case 1 : 
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements + 1 | 0,
                                  sideEffects: curTotalState.sideEffects
                                };
                      case 2 : 
                          return {
                                  reasonState: curTotalState.reasonState,
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements + 1 | 0,
                                  sideEffects: /* :: */[
                                    reasonStateUpdate[0],
                                    curTotalState.sideEffects
                                  ]
                                };
                      case 3 : 
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements,
                                  sideEffects: /* :: */[
                                    reasonStateUpdate[1],
                                    curTotalState.sideEffects
                                  ]
                                };
                      case 4 : 
                          return {
                                  reasonState: reasonStateUpdate[0],
                                  reasonStateVersion: curTotalState.reasonStateVersion + 1 | 0,
                                  reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements + 1 | 0,
                                  sideEffects: /* :: */[
                                    reasonStateUpdate[1],
                                    curTotalState.sideEffects
                                  ]
                                };
                      
                    }
                  }
                }),
              getInitialState: (function () {
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var initialReasonState = Curry._1(convertedReasonProps[0][/* initialState */10], /* () */0);
                  return {
                          reasonState: initialReasonState,
                          reasonStateVersion: 1,
                          reasonStateVersionUsedToComputeSubelements: 1,
                          sideEffects: /* [] */0
                        };
                }),
              componentDidMount: (function () {
                  var $$this = this ;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var component = convertedReasonProps[0];
                  if (component[/* didMount */4] !== lifecycleNoUpdate) {
                    var curTotalState = thisJs.state;
                    var curReasonState = curTotalState.reasonState;
                    var self = $$this.self(curReasonState, component[/* retainedProps */11]);
                    var reasonStateUpdate = Curry._1(component[/* didMount */4], self);
                    var nextTotalState = $$this.transitionNextTotalState(curTotalState, reasonStateUpdate);
                    if (nextTotalState.reasonStateVersion !== curTotalState.reasonStateVersion) {
                      return thisJs.setState(nextTotalState);
                    } else {
                      return 0;
                    }
                  } else {
                    return 0;
                  }
                }),
              componentDidUpdate: (function (prevProps, prevState) {
                  var $$this = this ;
                  var thisJs = (this);
                  var curState = thisJs.state;
                  var curReasonState = curState.reasonState;
                  var newJsProps = thisJs.props;
                  var newConvertedReasonProps = convertPropsIfTheyreFromJs(newJsProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  if (newComponent[/* didUpdate */5] !== lifecyclePreviousCurrentReturnUnit) {
                    var match = +(prevProps === newJsProps);
                    var oldConvertedReasonProps = match !== 0 ? newConvertedReasonProps : convertPropsIfTheyreFromJs(prevProps, thisJs.jsPropsToReason, debugName);
                    var prevReasonState = prevState.reasonState;
                    var newSelf = $$this.self(curReasonState, newComponent[/* retainedProps */11]);
                    var oldSelf_000 = /* handle */newSelf[/* handle */0];
                    var oldSelf_001 = /* reduce */newSelf[/* reduce */1];
                    var oldSelf_003 = /* retainedProps */oldConvertedReasonProps[0][/* retainedProps */11];
                    var oldSelf = /* record */[
                      oldSelf_000,
                      oldSelf_001,
                      /* state */prevReasonState,
                      oldSelf_003
                    ];
                    return Curry._1(newComponent[/* didUpdate */5], /* record */[
                                /* oldSelf */oldSelf,
                                /* newSelf */newSelf
                              ]);
                  } else {
                    return 0;
                  }
                }),
              componentWillUnmount: (function () {
                  var $$this = this ;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var component = convertedReasonProps[0];
                  if (component[/* willUnmount */6] !== lifecycleReturnUnit) {
                    var curState = thisJs.state;
                    var curReasonState = curState.reasonState;
                    return Curry._1(component[/* willUnmount */6], $$this.self(curReasonState, component[/* retainedProps */11]));
                  } else {
                    return 0;
                  }
                }),
              componentWillUpdate: (function (nextProps, nextState) {
                  var $$this = this ;
                  var thisJs = (this);
                  var newConvertedReasonProps = convertPropsIfTheyreFromJs(nextProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  if (newComponent[/* willUpdate */7] !== lifecyclePreviousNextUnit) {
                    var oldJsProps = thisJs.props;
                    var match = +(nextProps === oldJsProps);
                    var oldConvertedReasonProps = match !== 0 ? newConvertedReasonProps : convertPropsIfTheyreFromJs(oldJsProps, thisJs.jsPropsToReason, debugName);
                    var curState = thisJs.state;
                    var curReasonState = curState.reasonState;
                    var nextReasonState = nextState.reasonState;
                    var newSelf = $$this.self(nextReasonState, newComponent[/* retainedProps */11]);
                    var oldSelf_000 = /* handle */newSelf[/* handle */0];
                    var oldSelf_001 = /* reduce */newSelf[/* reduce */1];
                    var oldSelf_003 = /* retainedProps */oldConvertedReasonProps[0][/* retainedProps */11];
                    var oldSelf = /* record */[
                      oldSelf_000,
                      oldSelf_001,
                      /* state */curReasonState,
                      oldSelf_003
                    ];
                    return Curry._1(newComponent[/* willUpdate */7], /* record */[
                                /* oldSelf */oldSelf,
                                /* newSelf */newSelf
                              ]);
                  } else {
                    return 0;
                  }
                }),
              componentWillReceiveProps: (function (nextProps) {
                  var $$this = this ;
                  var thisJs = (this);
                  var newConvertedReasonProps = convertPropsIfTheyreFromJs(nextProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  if (newComponent[/* willReceiveProps */3] !== willReceivePropsDefault) {
                    var oldJsProps = thisJs.props;
                    var match = +(nextProps === oldJsProps);
                    var oldConvertedReasonProps = match !== 0 ? newConvertedReasonProps : convertPropsIfTheyreFromJs(oldJsProps, thisJs.jsPropsToReason, debugName);
                    var oldComponent = oldConvertedReasonProps[0];
                    return thisJs.setState((function (curTotalState, _) {
                                  var curReasonState = curTotalState.reasonState;
                                  var curReasonStateVersion = curTotalState.reasonStateVersion;
                                  var oldSelf = $$this.self(curReasonState, oldComponent[/* retainedProps */11]);
                                  var nextReasonState = Curry._1(newComponent[/* willReceiveProps */3], oldSelf);
                                  var match = +(nextReasonState !== curReasonState);
                                  var nextReasonStateVersion = match !== 0 ? curReasonStateVersion + 1 | 0 : curReasonStateVersion;
                                  if (nextReasonStateVersion !== curReasonStateVersion) {
                                    return {
                                            reasonState: nextReasonState,
                                            reasonStateVersion: nextReasonStateVersion,
                                            reasonStateVersionUsedToComputeSubelements: curTotalState.reasonStateVersionUsedToComputeSubelements,
                                            sideEffects: nextReasonState.sideEffects
                                          };
                                  } else {
                                    return curTotalState;
                                  }
                                }));
                  } else {
                    return 0;
                  }
                }),
              shouldComponentUpdate: (function (nextJsProps, nextState, _) {
                  var $$this = this ;
                  var thisJs = (this);
                  var curJsProps = thisJs.props;
                  var propsWarrantRerender = +(nextJsProps !== curJsProps);
                  var oldConvertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var match = +(nextJsProps === curJsProps);
                  var newConvertedReasonProps = match !== 0 ? oldConvertedReasonProps : convertPropsIfTheyreFromJs(nextJsProps, thisJs.jsPropsToReason, debugName);
                  var newComponent = newConvertedReasonProps[0];
                  var nextReasonStateVersion = nextState.reasonStateVersion;
                  var nextReasonStateVersionUsedToComputeSubelements = nextState.reasonStateVersionUsedToComputeSubelements;
                  var stateChangeWarrantsComputingSubelements = +(nextReasonStateVersionUsedToComputeSubelements !== nextReasonStateVersion);
                  var warrantsUpdate = propsWarrantRerender || stateChangeWarrantsComputingSubelements;
                  var nextReasonState = nextState.reasonState;
                  var newSelf = $$this.self(nextReasonState, newComponent[/* retainedProps */11]);
                  var ret;
                  if (warrantsUpdate && newComponent[/* shouldUpdate */8] !== lifecycleReturnTrue) {
                    var curState = thisJs.state;
                    var curReasonState = curState.reasonState;
                    var oldSelf_000 = /* handle */newSelf[/* handle */0];
                    var oldSelf_001 = /* reduce */newSelf[/* reduce */1];
                    var oldSelf_003 = /* retainedProps */oldConvertedReasonProps[0][/* retainedProps */11];
                    var oldSelf = /* record */[
                      oldSelf_000,
                      oldSelf_001,
                      /* state */curReasonState,
                      oldSelf_003
                    ];
                    ret = Curry._1(newComponent[/* shouldUpdate */8], /* record */[
                          /* oldSelf */oldSelf,
                          /* newSelf */newSelf
                        ]);
                  } else {
                    ret = warrantsUpdate;
                  }
                  nextState.reasonStateVersionUsedToComputeSubelements = nextReasonStateVersion;
                  var nextSideEffects = List.rev(nextState.sideEffects);
                  if (nextSideEffects !== /* [] */0) {
                    List.iter((function (performSideEffects) {
                            return Curry._1(performSideEffects, newSelf);
                          }), nextSideEffects);
                    thisJs.setState((function (futureTotalState, _) {
                            var initialSegment = function (_acc, _n, _l) {
                              while(true) {
                                var l = _l;
                                var n = _n;
                                var acc = _acc;
                                if (l) {
                                  if (n > 0) {
                                    _l = l[1];
                                    _n = n - 1 | 0;
                                    _acc = /* :: */[
                                      l[0],
                                      acc
                                    ];
                                    continue ;
                                    
                                  } else {
                                    return List.rev(acc);
                                  }
                                } else {
                                  return List.rev(acc);
                                }
                              };
                            };
                            var n = List.length(futureTotalState.sideEffects) - List.length(nextState.sideEffects) | 0;
                            var newSideEffects = initialSegment(/* [] */0, n, futureTotalState.sideEffects);
                            return {
                                    reasonState: futureTotalState.reasonState,
                                    reasonStateVersion: futureTotalState.reasonStateVersion,
                                    reasonStateVersionUsedToComputeSubelements: futureTotalState.reasonStateVersionUsedToComputeSubelements,
                                    sideEffects: newSideEffects
                                  };
                          }));
                  }
                  return ret;
                }),
              handleMethod: (function (callback) {
                  var $$this = this ;
                  var thisJs = (this);
                  return (function (callbackPayload) {
                      var curState = thisJs.state;
                      var curReasonState = curState.reasonState;
                      var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                      return Curry._2(callback, callbackPayload, $$this.self(curReasonState, convertedReasonProps[0][/* retainedProps */11]));
                    });
                }),
              updateMethod: (function (callback) {
                  var $$this = this ;
                  var thisJs = (this);
                  return (function ($$event) {
                      var curTotalState = thisJs.state;
                      var curReasonState = curTotalState.reasonState;
                      var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                      var reasonStateUpdate = Curry._2(callback, $$event, $$this.self(curReasonState, convertedReasonProps[0][/* retainedProps */11]));
                      if (reasonStateUpdate) {
                        var nextTotalState = $$this.transitionNextTotalState(curTotalState, reasonStateUpdate);
                        if (nextTotalState.reasonStateVersion !== curTotalState.reasonStateVersion) {
                          return thisJs.setState(nextTotalState);
                        } else {
                          return 0;
                        }
                      } else {
                        return magicNull;
                      }
                    });
                }),
              reduceMethod: (function (callback) {
                  var $$this = this ;
                  var thisJs = (this);
                  return (function ($$event) {
                      var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                      var component = convertedReasonProps[0];
                      if (component[/* reducer */12] !== reducerDefault) {
                        var action = Curry._1(callback, $$event);
                        return thisJs.setState((function (curTotalState, _) {
                                      var curReasonState = curTotalState.reasonState;
                                      var reasonStateUpdate = Curry._2(component[/* reducer */12], action, curReasonState);
                                      if (reasonStateUpdate) {
                                        var nextTotalState = $$this.transitionNextTotalState(curTotalState, reasonStateUpdate);
                                        if (nextTotalState.reasonStateVersion !== curTotalState.reasonStateVersion) {
                                          return nextTotalState;
                                        } else {
                                          return magicNull;
                                        }
                                      } else {
                                        return magicNull;
                                      }
                                    }));
                      } else {
                        return 0;
                      }
                    });
                }),
              render: (function () {
                  var $$this = this ;
                  var thisJs = (this);
                  var convertedReasonProps = convertPropsIfTheyreFromJs(thisJs.props, thisJs.jsPropsToReason, debugName);
                  var created = convertedReasonProps[0];
                  var curState = thisJs.state;
                  var curReasonState = curState.reasonState;
                  return Curry._1(created[/* render */9], $$this.self(curReasonState, created[/* retainedProps */11]));
                })
            });
}

function basicComponent(debugName) {
  return /* record */[
          /* debugName */debugName,
          /* reactClassInternal */createClass(debugName),
          /* handedOffState : record */[/* contents : None */0],
          /* willReceiveProps */willReceivePropsDefault,
          /* didMount */lifecycleNoUpdate,
          /* didUpdate */lifecyclePreviousCurrentReturnUnit,
          /* willUnmount */lifecycleReturnUnit,
          /* willUpdate */lifecyclePreviousNextUnit,
          /* shouldUpdate */lifecycleReturnTrue,
          /* render */renderDefault,
          /* initialState */initialStateDefault,
          /* retainedProps : () */0,
          /* reducer */reducerDefault,
          /* jsElementWrapped : None */0
        ];
}

var statelessComponent = basicComponent;

var statelessComponentWithRetainedProps = basicComponent;

var reducerComponent = basicComponent;

var reducerComponentWithRetainedProps = basicComponent;

function element($staropt$star, $staropt$star$1, component) {
  var key = $staropt$star ? $staropt$star[0] : undefined;
  var ref = $staropt$star$1 ? $staropt$star$1[0] : undefined;
  var element$1 = /* Element */[component];
  var match = component[/* jsElementWrapped */13];
  if (match) {
    return Curry._2(match[0], key, ref);
  } else {
    return React.createElement(component[/* reactClassInternal */1], {
                key: key,
                ref: ref,
                reasonProps: element$1
              });
  }
}

function wrapReasonForJs(component, jsPropsToReason) {
  var tmp = component[/* reactClassInternal */1].prototype;
  tmp.jsPropsToReason = /* Some */[jsPropsToReason];
  return component[/* reactClassInternal */1];
}

var dummyInteropComponent = basicComponent("interop");

function wrapJsForReason(reactClass, props, children) {
  var jsElementWrapped = /* Some */[(function (param, param$1) {
        var reactClass$1 = reactClass;
        var props$1 = props;
        var children$1 = children;
        var key = param;
        var ref = param$1;
        var props$2 = Object.assign(Object.assign({ }, props$1), {
              ref: ref,
              key: key
            });
        var varargs = /* array */[
            reactClass$1,
            props$2
          ].concat(children$1);
        return React.createElement.apply(null, varargs);
      })];
  var newrecord = dummyInteropComponent.slice();
  newrecord[/* jsElementWrapped */13] = jsElementWrapped;
  return newrecord;
}

exports.Callback                            = Callback;
exports.statelessComponent                  = statelessComponent;
exports.statelessComponentWithRetainedProps = statelessComponentWithRetainedProps;
exports.reducerComponent                    = reducerComponent;
exports.reducerComponentWithRetainedProps   = reducerComponentWithRetainedProps;
exports.element                             = element;
exports.wrapReasonForJs                     = wrapReasonForJs;
exports.createDomElement                    = createDomElement;
exports.wrapJsForReason                     = wrapJsForReason;
/* magicNull Not a pure module */


/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/reason-react/node_modules/react/index.js'");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/list.js'");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/block.js'");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/pervasives.js'");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/caml_exceptions.js'");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/react/react.js'");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/caml_array.js'");

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var $$Array     = __webpack_require__(25);
var Js_json     = __webpack_require__(80);
var Caml_format = __webpack_require__(33);
var Caml_string = __webpack_require__(36);

function makeSuccessJson() {
  var json = { };
  json["success"] = true;
  return json;
}

function makeFailureJson(msg) {
  var json = { };
  json["error"] = msg;
  return json;
}

function getOpt(param) {
  var s = param[0];
  if (s) {
    return s[0];
  } else {
    return param[1];
  }
}

function getOptExc(param) {
  var s = param[0];
  if (s) {
    return s[0];
  } else {
    throw param[1];
  }
}

function getDictString(dict, key) {
  var match = dict[key];
  if (match !== undefined) {
    return Js_json.decodeString(match);
  } else {
    return /* None */0;
  }
}

function getDictNumber(dict, key) {
  var match = getDictString(dict, key);
  if (match) {
    return /* Some */[Caml_format.caml_float_of_string(match[0])];
  } else {
    return /* None */0;
  }
}

function getDictObject(dict, key) {
  var match = dict[key];
  if (match !== undefined) {
    return Js_json.decodeObject(match);
  } else {
    return /* None */0;
  }
}

function str(prim) {
  return prim;
}

var listToElement = $$Array.of_list;

function contains(param) {
  var q = param[1];
  var s = param[0];
  var ls = s.length;
  var lq = q.length;
  if (lq > ls) {
    return /* false */0;
  } else {
    var i = 0;
    var j = 0;
    while((i + j | 0) < ls && j < lq) {
      var sc = Caml_string.get(s, i + j | 0);
      var qc = Caml_string.get(q, j);
      if (sc === qc) {
        j = j + 1 | 0;
      } else {
        i = i + 1 | 0;
        j = 0;
      }
    };
    if (j === lq) {
      return /* true */1;
    } else {
      return /* false */0;
    }
  }
}

exports.makeSuccessJson = makeSuccessJson;
exports.makeFailureJson = makeFailureJson;
exports.getOpt          = getOpt;
exports.getOptExc       = getOptExc;
exports.getDictString   = getDictString;
exports.getDictNumber   = getDictNumber;
exports.getDictObject   = getDictObject;
exports.str             = str;
exports.listToElement   = listToElement;
exports.contains        = contains;
/* No side effect */


/***/ }),
/* 25 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/array.js'");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/caml_format.js'");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/caml_string.js'");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/js_exn.js'");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var ReactDOMRe        = __webpack_require__(44);
var ReasonReact       = __webpack_require__(10);
var App$ReactTemplate = __webpack_require__(62);

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"imperavi-kube/dist/css/kube.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
;

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, App$ReactTemplate.make(/* array */[])), "app");

/*  Not a pure module */


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ReactDom                = __webpack_require__(45);
var Caml_array              = __webpack_require__(20);
var Caml_builtin_exceptions = __webpack_require__(1);

function renderToElementWithClassName(reactElement, className) {
  var elements = document.getElementsByClassName(className);
  if (elements.length) {
    ReactDom.render(reactElement, Caml_array.caml_array_get(elements, 0));
    return /* () */0;
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "ReactDOMRE.renderToElementWithClassName: no element of class " + (className + " found in the HTML.")
        ];
  }
}

function renderToElementWithId(reactElement, id) {
  var match = document.getElementById(id);
  if (match == null) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "ReactDOMRE.renderToElementWithId : no element of id " + (id + " found in the HTML.")
        ];
  } else {
    ReactDom.render(reactElement, match);
    return /* () */0;
  }
}

function combine(a, b) {
  return Object.assign(Object.assign({ }, a), b);
}

function unsafeAddProp(style, property, value) {
  var dict = { };
  dict[property] = value;
  return combine(style, dict);
}

var Style = /* module */[
  /* combine */combine,
  /* unsafeAddProp */unsafeAddProp
];

exports.renderToElementWithClassName = renderToElementWithClassName;
exports.renderToElementWithId        = renderToElementWithId;
exports.Style                        = Style;
/* react-dom Not a pure module */


/***/ }),
/* 45 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/reason-react/node_modules/react-dom/index.js'");

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(11);

function _assign(prim, prim$1) {
  return Object.assign(prim, prim$1);
}

var emptyObject = { };


/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

// 'use strict';

// var _assign = require('object-assign');

// var emptyObject = require('emptyObject');
// var _invariant = require('invariant');

// if (process.env.NODE_ENV !== 'production') {
//   var warning = require('fbjs/lib/warning');
// }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
// if (process.env.NODE_ENV !== 'production') {
//   ReactPropTypeLocationNames = {
//     prop: 'prop',
//     context: 'context',
//     childContext: 'child context'
//   };
// } else {
  ReactPropTypeLocationNames = {};
// }

;

var factory = (
function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      // if (process.env.NODE_ENV !== 'production') {
      //   validateTypeDef(Constructor, childContextTypes, 'childContext');
      // }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      // if (process.env.NODE_ENV !== 'production') {
      //   validateTypeDef(Constructor, contextTypes, 'context');
      // }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      // if (process.env.NODE_ENV !== 'production') {
      //   validateTypeDef(Constructor, propTypes, 'prop');
      // }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      // if (typeDef.hasOwnProperty(propName)) {
      //   // use a warning instead of an _invariant so components
      //   // don't show up in prod but only in __DEV__
      //   // if (process.env.NODE_ENV !== 'production') {
      //   //   warning(
      //   //     typeof typeDef[propName] === 'function',
      //   //     '%s: %s type `%s` is invalid; it must be a function, usually from ' +
      //   //       'React.PropTypes.',
      //   //     Constructor.displayName || 'ReactClass',
      //   //     ReactPropTypeLocationNames[location],
      //   //     propName
      //   //   );
      //   // }
      // }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      // _invariant(
      //   specPolicy === 'OVERRIDE_BASE',
      //   'ReactClassInterface: You are attempting to override ' +
      //     '`%s` from your class specification. Ensure that your method names ' +
      //     'do not overlap with React methods.',
      //   name
      // );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      // _invariant(
      //   specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
      //   'ReactClassInterface: You are attempting to define ' +
      //     '`%s` on your component more than once. This conflict may be due ' +
      //     'to a mixin.',
      //   name
      // );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      // if (process.env.NODE_ENV !== 'production') {
      //   var typeofSpec = typeof spec;
      //   var isMixinValid = typeofSpec === 'object' && spec !== null;
      //
      //   if (process.env.NODE_ENV !== 'production') {
      //     warning(
      //       isMixinValid,
      //       "%s: You're attempting to include a mixin that is either null " +
      //         'or not an object. Check the mixins included by the component, ' +
      //         'as well as any mixins they include themselves. ' +
      //         'Expected object but got %s.',
      //       Constructor.displayName || 'ReactClass',
      //       spec === null ? null : typeofSpec
      //     );
      //   }
      // }

      return;
    }

    // _invariant(
    //   typeof spec !== 'function',
    //   "ReactClass: You're attempting to " +
    //     'use a component class or function as a mixin. Instead, just use a ' +
    //     'regular object.'
    // );
    // _invariant(
    //   !isValidElement(spec),
    //   "ReactClass: You're attempting to " +
    //     'use a component as a mixin. Instead, just use a regular object.'
    // );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            // _invariant(
            //   isReactClassMethod &&
            //     (specPolicy === 'DEFINE_MANY_MERGED' ||
            //       specPolicy === 'DEFINE_MANY'),
            //   'ReactClass: Unexpected spec policy %s for key %s ' +
            //     'when mixing in component specs.',
            //   specPolicy,
            //   name
            // );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            // if (process.env.NODE_ENV !== 'production') {
            //   // Add verbose displayName to the function, which helps when looking
            //   // at profiling tools.
            //   if (typeof property === 'function' && spec.displayName) {
            //     proto[name].displayName = spec.displayName + '_' + name;
            //   }
            // }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      // _invariant(
      //   !isReserved,
      //   'ReactClass: You are attempting to define a reserved ' +
      //     'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
      //     'as an instance property instead; it will still be accessible on the ' +
      //     'constructor.',
      //   name
      // );

      var isInherited = name in Constructor;
      // _invariant(
      //   !isInherited,
      //   'ReactClass: You are attempting to define ' +
      //     '`%s` on your component more than once. This conflict may be ' +
      //     'due to a mixin.',
      //   name
      // );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    // _invariant(
    //   one && two && typeof one === 'object' && typeof two === 'object',
    //   'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    // );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        // _invariant(
        //   one[key] === undefined,
        //   'mergeIntoWithNoDuplicateKeys(): ' +
        //     'Tried to merge two objects with the same key: `%s`. This conflict ' +
        //     'may be due to a mixin; in particular, this may be caused by two ' +
        //     'getInitialState() or getDefaultProps() methods returning objects ' +
        //     'with clashing keys.',
        //   key
        // );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    // if (process.env.NODE_ENV !== 'production') {
    //   boundMethod.__reactBoundContext = component;
    //   boundMethod.__reactBoundMethod = method;
    //   boundMethod.__reactBoundArguments = null;
    //   var componentName = component.constructor.displayName;
    //   var _bind = boundMethod.bind;
    //   boundMethod.bind = function(newThis) {
    //     for (
    //       var _len = arguments.length,
    //         args = Array(_len > 1 ? _len - 1 : 0),
    //         _key = 1;
    //       _key < _len;
    //       _key++
    //     ) {
    //       args[_key - 1] = arguments[_key];
    //     }
    //
    //     // User is trying to bind() an autobound method; we effectively will
    //     // ignore the value of "this" that the user is trying to use, so
    //     // let's warn.
    //     if (newThis !== component && newThis !== null) {
    //       if (process.env.NODE_ENV !== 'production') {
    //         warning(
    //           false,
    //           'bind(): React component methods may only be bound to the ' +
    //             'component instance. See %s',
    //           componentName
    //         );
    //       }
    //     } else if (!args.length) {
    //       if (process.env.NODE_ENV !== 'production') {
    //         warning(
    //           false,
    //           'bind(): You are binding a component method to the component. ' +
    //             'React does this for you automatically in a high-performance ' +
    //             'way, so you can safely remove this call. See %s',
    //           componentName
    //         );
    //       }
    //       return boundMethod;
    //     }
    //     var reboundMethod = _bind.apply(boundMethod, arguments);
    //     reboundMethod.__reactBoundContext = component;
    //     reboundMethod.__reactBoundMethod = method;
    //     reboundMethod.__reactBoundArguments = args;
    //     return reboundMethod;
    //   };
    // }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      // if (process.env.NODE_ENV !== 'production') {
      //   warning(
      //     this.__didWarnIsMounted,
      //     '%s: isMounted is deprecated. Instead, make sure to clean up ' +
      //       'subscriptions and pending requests in componentWillUnmount to ' +
      //       'prevent memory leaks.',
      //     (this.constructor && this.constructor.displayName) ||
      //       this.name ||
      //       'Component'
      //   );
      //   this.__didWarnIsMounted = true;
      // }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      // if (process.env.NODE_ENV !== 'production') {
      //   warning(
      //     this instanceof Constructor,
      //     'Something is calling a React component directly. Use a factory or ' +
      //       'JSX instead. See: https://fb.me/react-legacyfactory'
      //   );
      // }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      // if (process.env.NODE_ENV !== 'production') {
      //   // We allow auto-mocks to proceed as if they're returning null.
      //   if (
      //     initialState === undefined &&
      //     this.getInitialState._isMockFunction
      //   ) {
      //     // This is probably bad practice. Consider warning here and
      //     // deprecating this convenience.
      //     initialState = null;
      //   }
      // }
      // _invariant(
      //   typeof initialState === 'object' && !Array.isArray(initialState),
      //   '%s.getInitialState(): must return an object or null',
      //   Constructor.displayName || 'ReactCompositeComponent'
      // );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    // if (process.env.NODE_ENV !== 'production') {
    //   // This is a tag to indicate that the use of these method names is ok,
    //   // since it's used with createClass. If it's not, then it's likely a
    //   // mistake so we'll warn you to use the static property, property
    //   // initializer or constructor respectively.
    //   if (Constructor.getDefaultProps) {
    //     Constructor.getDefaultProps.isReactClassApproved = {};
    //   }
    //   if (Constructor.prototype.getInitialState) {
    //     Constructor.prototype.getInitialState.isReactClassApproved = {};
    //   }
    // }

    // _invariant(
    //   Constructor.prototype.render,
    //   'createClass(...): Class specification must implement a `render` method.'
    // );

    // if (process.env.NODE_ENV !== 'production') {
    //   warning(
    //     !Constructor.prototype.componentShouldUpdate,
    //     '%s has a method called ' +
    //       'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
    //       'The name is phrased as a question because the function is ' +
    //       'expected to return a value.',
    //     spec.displayName || 'A component'
    //   );
    //   warning(
    //     !Constructor.prototype.componentWillRecieveProps,
    //     '%s has a method called ' +
    //       'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
    //     spec.displayName || 'A component'
    //   );
    // }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}
);

var reactNoopUpdateQueue = new React.Component().updater;

var createClass = factory(React.Component, React.isValidElement, reactNoopUpdateQueue);

exports._assign              = _assign;
exports.emptyObject          = emptyObject;
exports.factory              = factory;
exports.reactNoopUpdateQueue = reactNoopUpdateQueue;
exports.createClass          = createClass;
/*  Not a pure module */


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var Block                        = __webpack_require__(13);
var Curry                        = __webpack_require__(4);
var React                        = __webpack_require__(16);
var ReasonReact                  = __webpack_require__(10);
var Header$ReactTemplate         = __webpack_require__(79);
var CompanyList$ReactTemplate    = __webpack_require__(82);
var SearchResults$ReactTemplate  = __webpack_require__(84);
var CompanyService$ReactTemplate = __webpack_require__(85);

var component = ReasonReact.reducerComponent("App");

function selectCompany(reduce, companyName) {
  console.log(companyName);
  CompanyService$ReactTemplate.fetchEmployees(companyName).then((function (employees) {
          Curry._2(reduce, (function () {
                  return /* EmployeesLoaded */Block.__(1, [
                            employees,
                            companyName
                          ]);
                }), /* () */0);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function loadCompanies(reduce) {
  CompanyService$ReactTemplate.fetchCompanies(/* () */0).then((function (companies) {
          Curry._2(reduce, (function () {
                  return /* CompaniesLoaded */Block.__(0, [companies]);
                }), /* () */0);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function updateQuery(reduce, query) {
  return Curry._2(reduce, (function () {
                return /* QueryUpdated */Block.__(3, [query]);
              }), /* () */0);
}

function executeQuery(reduce, query) {
  CompanyService$ReactTemplate.fetchSearch(query).then((function (results) {
          Curry._2(reduce, (function () {
                  return /* SearchResultsLoaded */Block.__(2, [results]);
                }), /* () */0);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function make() {
  var newrecord = component.slice();
  newrecord[/* didMount */4] = (function (param) {
      loadCompanies(param[/* reduce */1]);
      return /* NoUpdate */0;
    });
  newrecord[/* render */9] = (function (param) {
      var state = param[/* state */2];
      var reduce = param[/* reduce */1];
      var match = +(state[/* query */3] !== "");
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Header$ReactTemplate.make(state[/* query */3], (function ($$event) {
                            var query = $$event.target.value;
                            Curry._2(reduce, (function () {
                                    return /* QueryUpdated */Block.__(3, [query]);
                                  }), /* () */0);
                            return executeQuery(reduce, query);
                          }), (function () {
                            return executeQuery(reduce, state[/* query */3]);
                          }), /* array */[])), match !== 0 ? ReasonReact.element(/* None */0, /* None */0, SearchResults$ReactTemplate.make(state[/* results */4], /* array */[])) : ReasonReact.element(/* None */0, /* None */0, CompanyList$ReactTemplate.make(state[/* companies */0], state[/* employees */1], state[/* selectedCompany */2], (function (name) {
                              return selectCompany(reduce, name);
                            }), /* array */[])));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* companies : [] */0,
              /* employees : [] */0,
              /* selectedCompany */"",
              /* query */"",
              /* results : [] */0
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      switch (action.tag | 0) {
        case 0 : 
            return /* Update */Block.__(0, [/* record */[
                        /* companies */action[0],
                        /* employees */state[/* employees */1],
                        /* selectedCompany */state[/* selectedCompany */2],
                        /* query */state[/* query */3],
                        /* results */state[/* results */4]
                      ]]);
        case 1 : 
            return /* Update */Block.__(0, [/* record */[
                        /* companies */state[/* companies */0],
                        /* employees */action[0],
                        /* selectedCompany */action[1],
                        /* query */"",
                        /* results : [] */0
                      ]]);
        case 2 : 
            return /* Update */Block.__(0, [/* record */[
                        /* companies */state[/* companies */0],
                        /* employees */state[/* employees */1],
                        /* selectedCompany */state[/* selectedCompany */2],
                        /* query */state[/* query */3],
                        /* results */action[0]
                      ]]);
        case 3 : 
            return /* Update */Block.__(0, [/* record */[
                        /* companies */state[/* companies */0],
                        /* employees */state[/* employees */1],
                        /* selectedCompany */state[/* selectedCompany */2],
                        /* query */action[0],
                        /* results */state[/* results */4]
                      ]]);
        
      }
    });
  return newrecord;
}

exports.component     = component;
exports.selectCompany = selectCompany;
exports.loadCompanies = loadCompanies;
exports.updateQuery   = updateQuery;
exports.executeQuery  = executeQuery;
exports.make          = make;
/* component Not a pure module */


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var Curry               = __webpack_require__(4);
var React               = __webpack_require__(16);
var ReasonReact         = __webpack_require__(10);
var Utils$ReactTemplate = __webpack_require__(24);

 __webpack_require__(81) 
;

var component = ReasonReact.statelessComponent("Header");

function executeQuery($$event, action) {
  if ($$event.keyCode === 13) {
    $$event.preventDefault();
    return Curry._1(action, /* () */0);
  } else {
    return 0;
  }
}

function make(query, onQueryUpdate, onQueryExecute, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  id: "top"
                }, React.createElement("div", {
                      id: "top-brand"
                    }, Utils$ReactTemplate.str("Company browser")), React.createElement("nav", {
                      id: "top-nav-main"
                    }, React.createElement("input", {
                          className: "searchBox",
                          placeholder: "Search",
                          value: query,
                          onKeyDown: (function ($$event) {
                              return executeQuery($$event, onQueryExecute);
                            }),
                          onChange: onQueryUpdate
                        })));
    });
  return newrecord;
}

exports.component    = component;
exports.executeQuery = executeQuery;
exports.make         = make;
/*  Not a pure module */


/***/ }),
/* 80 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/js_json.js'");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| #top {\n|     display: flex;\n|     align-items: center;");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var List                = __webpack_require__(12);
var Curry               = __webpack_require__(4);
var React               = __webpack_require__(16);
var Pervasives          = __webpack_require__(14);
var ReasonReact         = __webpack_require__(10);
var Utils$ReactTemplate = __webpack_require__(24);

 __webpack_require__(83) 
;

var component = ReasonReact.statelessComponent("CompanyList");

function make(companies, employees, selectedCompany, onSelectCompany, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "row gutters main"
                }, React.createElement("div", {
                      className: "col col-3"
                    }, React.createElement("ul", {
                          className: "unstyled"
                        }, Utils$ReactTemplate.listToElement(List.map((function (c) {
                                    var match = +(c[/* name */0] === selectedCompany);
                                    return React.createElement("li", {
                                                key: c[/* name */0],
                                                className: match !== 0 ? "active" : "",
                                                onClick: (function () {
                                                    return Curry._1(onSelectCompany, c[/* name */0]);
                                                  })
                                              }, Utils$ReactTemplate.str(c[/* name */0]));
                                  }), companies)))), React.createElement("div", {
                      className: "col col-9"
                    }, React.createElement("table", {
                          className: "bordered"
                        }, React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", undefined, Utils$ReactTemplate.str("First name")), React.createElement("th", undefined, Utils$ReactTemplate.str("Last name")), React.createElement("th", undefined, Utils$ReactTemplate.str("Birthday")), React.createElement("th", undefined, Utils$ReactTemplate.str("Salary")))), React.createElement("tbody", undefined, Utils$ReactTemplate.listToElement(List.map((function (e) {
                                        return React.createElement("tr", {
                                                    key: e[/* lastName */1]
                                                  }, React.createElement("td", undefined, Utils$ReactTemplate.str(e[/* firstName */0])), React.createElement("td", undefined, Utils$ReactTemplate.str(e[/* lastName */1])), React.createElement("td", undefined, Utils$ReactTemplate.str(e[/* birthday */2])), React.createElement("td", undefined, Utils$ReactTemplate.str("$" + Pervasives.string_of_float(e[/* salary */3]))));
                                      }), employees))))));
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/*  Not a pure module */


/***/ }),
/* 83 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .main {\n|     padding: 20px;\n| }");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var List                = __webpack_require__(12);
var React               = __webpack_require__(16);
var Pervasives          = __webpack_require__(14);
var ReasonReact         = __webpack_require__(10);
var Utils$ReactTemplate = __webpack_require__(24);

var component = ReasonReact.statelessComponent("SearchResults");

function make(results, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "row gutters main"
                }, React.createElement("div", {
                      className: "col col-12"
                    }, React.createElement("table", {
                          className: "bordered"
                        }, React.createElement("tbody", undefined, Utils$ReactTemplate.listToElement(List.mapi((function (idx, result) {
                                        return React.createElement("tr", {
                                                    key: Pervasives.string_of_int(idx)
                                                  }, React.createElement("td", undefined, Utils$ReactTemplate.str(result)));
                                      }), results))))));
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var $$Array     = __webpack_require__(25);
var Json_decode = __webpack_require__(86);

function parseCompany(json) {
  return /* record */[
          /* name */Json_decode.string(json),
          /* employees : [] */0
        ];
}

function parseCompanies(json) {
  return $$Array.to_list(Json_decode.array(parseCompany, json));
}

function parseEmployee(json) {
  return /* record */[
          /* firstName */Json_decode.field("firstName", Json_decode.string, json),
          /* lastName */Json_decode.field("lastName", Json_decode.string, json),
          /* birthday */Json_decode.field("birthday", Json_decode.string, json),
          /* salary */Json_decode.field("salary", Json_decode.$$float, json)
        ];
}

function parseEmployees(json) {
  return $$Array.to_list(Json_decode.array(parseEmployee, json));
}

function parseSearch(json) {
  return $$Array.to_list(Json_decode.array(Json_decode.string, json));
}

var apiUrl = "http://localhost:3000";

function fetchCompanies() {
  return fetch("http://localhost:3000/companies").then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve($$Array.to_list(Json_decode.array(parseCompany, json)));
              }));
}

function fetchEmployees(name) {
  return fetch(apiUrl + ("/employees?name=" + name)).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve($$Array.to_list(Json_decode.array(parseEmployee, json)));
              }));
}

function fetchSearch(query) {
  return fetch(apiUrl + ("/search?query=" + query)).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve($$Array.to_list(Json_decode.array(Json_decode.string, json)));
              }));
}

exports.parseCompany   = parseCompany;
exports.parseCompanies = parseCompanies;
exports.parseEmployee  = parseEmployee;
exports.parseEmployees = parseEmployees;
exports.parseSearch    = parseSearch;
exports.apiUrl         = apiUrl;
exports.fetchCompanies = fetchCompanies;
exports.fetchEmployees = fetchEmployees;
exports.fetchSearch    = fetchSearch;
/* No side effect */


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List                    = __webpack_require__(12);
var $$Array                 = __webpack_require__(25);
var Curry                   = __webpack_require__(4);
var Js_exn                  = __webpack_require__(42);
var Js_math                 = __webpack_require__(87);
var Caml_exceptions         = __webpack_require__(15);
var Caml_builtin_exceptions = __webpack_require__(1);

function _isInteger(value) {
  if (isFinite(value)) {
    return +(Js_math.floor(value) === value);
  } else {
    return /* false */0;
  }
}

var DecodeError = Caml_exceptions.create("Json_decode.DecodeError");

function $$boolean(json) {
  if (typeof json === "boolean") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected boolean, got " + JSON.stringify(json)
        ];
  }
}

function bool(json) {
  return +$$boolean(json);
}

function $$float(json) {
  if (typeof json === "number") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected number, got " + JSON.stringify(json)
        ];
  }
}

function $$int(json) {
  var f = $$float(json);
  if (_isInteger(f)) {
    return f;
  } else {
    throw [
          DecodeError,
          "Expected integer, got " + JSON.stringify(json)
        ];
  }
}

function string(json) {
  if (typeof json === "string") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected string, got " + JSON.stringify(json)
        ];
  }
}

function nullable(decode, json) {
  if (json === null) {
    return null;
  } else {
    return Curry._1(decode, json);
  }
}

function nullAs(value, json) {
  if (json === null) {
    return value;
  } else {
    throw [
          DecodeError,
          "Expected null, got " + JSON.stringify(json)
        ];
  }
}

function array(decode, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    var target = new Array(length);
    for(var i = 0 ,i_finish = length - 1 | 0; i <= i_finish; ++i){
      var value = Curry._1(decode, json[i]);
      target[i] = value;
    }
    return target;
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function list(decode, json) {
  return $$Array.to_list(array(decode, json));
}

function pair(left, right, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    if (length === 2) {
      return /* tuple */[
              Curry._1(left, json[0]),
              Curry._1(right, json[1])
            ];
    } else {
      throw [
            DecodeError,
            "Expected array of length 2, got array of length " + (String(length) + "")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function dict(decode, json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    var keys = Object.keys(json);
    var l = keys.length;
    var target = { };
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      var key = keys[i];
      var value = Curry._1(decode, json[key]);
      target[key] = value;
    }
    return target;
  } else {
    throw [
          DecodeError,
          "Expected object, got " + JSON.stringify(json)
        ];
  }
}

function field(key, decode, json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    var match = json[key];
    if (match !== undefined) {
      return Curry._1(decode, match);
    } else {
      throw [
            DecodeError,
            "Expected field \'" + (String(key) + "\'")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected object, got " + JSON.stringify(json)
        ];
  }
}

function at(key_path, decoder) {
  if (key_path) {
    var rest = key_path[1];
    var key = key_path[0];
    if (rest) {
      var partial_arg = at(rest, decoder);
      return (function (param) {
          return field(key, partial_arg, param);
        });
    } else {
      return (function (param) {
          return field(key, decoder, param);
        });
    }
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Expected key_path to contain at least one element"
        ];
  }
}

function optional(decode, json) {
  var exit = 0;
  var v;
  try {
    v = Curry._1(decode, json);
    exit = 1;
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === DecodeError) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[v];
  }
  
}

function oneOf(_decoders, json) {
  while(true) {
    var decoders = _decoders;
    if (decoders) {
      try {
        return Curry._1(decoders[0], json);
      }
      catch (exn){
        _decoders = decoders[1];
        continue ;
        
      }
    } else {
      var length = List.length(decoders);
      throw [
            DecodeError,
            "Expected oneOf " + (String(length) + ", got ") + JSON.stringify(json)
          ];
    }
  };
}

function either(a, b) {
  var partial_arg_001 = /* :: */[
    b,
    /* [] */0
  ];
  var partial_arg = /* :: */[
    a,
    partial_arg_001
  ];
  return (function (param) {
      return oneOf(partial_arg, param);
    });
}

function withDefault($$default, decode, json) {
  try {
    return Curry._1(decode, json);
  }
  catch (exn){
    return $$default;
  }
}

function map(f, decode, json) {
  return Curry._1(f, Curry._1(decode, json));
}

function andThen(b, a, json) {
  return Curry._2(b, Curry._1(a, json), json);
}

exports.DecodeError = DecodeError;
exports.$$boolean   = $$boolean;
exports.bool        = bool;
exports.$$float     = $$float;
exports.$$int       = $$int;
exports.string      = string;
exports.nullable    = nullable;
exports.nullAs      = nullAs;
exports.array       = array;
exports.list        = list;
exports.pair        = pair;
exports.dict        = dict;
exports.field       = field;
exports.at          = at;
exports.optional    = optional;
exports.oneOf       = oneOf;
exports.either      = either;
exports.withDefault = withDefault;
exports.map         = map;
exports.andThen     = andThen;
/* No side effect */


/***/ }),
/* 87 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/prisc_000/code/bs-companies/node_modules/bs-platform/lib/js/js_math.js'");

/***/ })
/******/ ]);