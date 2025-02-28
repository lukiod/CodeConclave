function tE(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(r,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xy={exports:{}},ic={},wy={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),nE=Symbol.for("react.portal"),rE=Symbol.for("react.fragment"),iE=Symbol.for("react.strict_mode"),oE=Symbol.for("react.profiler"),sE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),aE=Symbol.for("react.forward_ref"),uE=Symbol.for("react.suspense"),cE=Symbol.for("react.memo"),fE=Symbol.for("react.lazy"),J1=Symbol.iterator;function dE(e){return e===null||typeof e!="object"?null:(e=J1&&e[J1]||e["@@iterator"],typeof e=="function"?e:null)}var Sy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_y=Object.assign,Cy={};function Bo(e,t,n){this.props=e,this.context=t,this.refs=Cy,this.updater=n||Sy}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ey(){}Ey.prototype=Bo.prototype;function sh(e,t,n){this.props=e,this.context=t,this.refs=Cy,this.updater=n||Sy}var lh=sh.prototype=new Ey;lh.constructor=sh;_y(lh,Bo.prototype);lh.isPureReactComponent=!0;var X1=Array.isArray,by=Object.prototype.hasOwnProperty,ah={current:null},ky={key:!0,ref:!0,__self:!0,__source:!0};function Py(e,t,n){var r,s={},l=null,u=null;if(t!=null)for(r in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(l=""+t.key),t)by.call(t,r)&&!ky.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];s.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:vl,type:e,key:l,ref:u,props:s,_owner:ah.current}}function pE(e,t){return{$$typeof:vl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uh(e){return typeof e=="object"&&e!==null&&e.$$typeof===vl}function hE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Z1=/\/+/g;function sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hE(""+e.key):t.toString(36)}function Qa(e,t,n,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case vl:case nE:u=!0}}if(u)return u=e,s=s(u),e=r===""?"."+sd(u,0):r,X1(s)?(n="",e!=null&&(n=e.replace(Z1,"$&/")+"/"),Qa(s,t,n,"",function(h){return h})):s!=null&&(uh(s)&&(s=pE(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(Z1,"$&/")+"/")+e)),t.push(s)),1;if(u=0,r=r===""?".":r+":",X1(e))for(var c=0;c<e.length;c++){l=e[c];var d=r+sd(l,c);u+=Qa(l,t,n,d,s)}else if(d=dE(e),typeof d=="function")for(e=d.call(e),c=0;!(l=e.next()).done;)l=l.value,d=r+sd(l,c++),u+=Qa(l,t,n,d,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function ha(e,t,n){if(e==null)return e;var r=[],s=0;return Qa(e,r,"","",function(l){return t.call(n,l,s++)}),r}function gE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $t={current:null},Ja={transition:null},mE={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:ah};function jy(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:ha,forEach:function(e,t,n){ha(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ha(e,function(){t++}),t},toArray:function(e){return ha(e,function(t){return t})||[]},only:function(e){if(!uh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=Bo;xe.Fragment=rE;xe.Profiler=oE;xe.PureComponent=sh;xe.StrictMode=iE;xe.Suspense=uE;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mE;xe.act=jy;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_y({},e.props),s=e.key,l=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,u=ah.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)by.call(t,d)&&!ky.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:vl,type:e.type,key:s,ref:l,props:r,_owner:u}};xe.createContext=function(e){return e={$$typeof:lE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sE,_context:e},e.Consumer=e};xe.createElement=Py;xe.createFactory=function(e){var t=Py.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:aE,render:e}};xe.isValidElement=uh;xe.lazy=function(e){return{$$typeof:fE,_payload:{_status:-1,_result:e},_init:gE}};xe.memo=function(e,t){return{$$typeof:cE,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=Ja.transition;Ja.transition={};try{e()}finally{Ja.transition=t}};xe.unstable_act=jy;xe.useCallback=function(e,t){return $t.current.useCallback(e,t)};xe.useContext=function(e){return $t.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return $t.current.useDeferredValue(e)};xe.useEffect=function(e,t){return $t.current.useEffect(e,t)};xe.useId=function(){return $t.current.useId()};xe.useImperativeHandle=function(e,t,n){return $t.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return $t.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return $t.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return $t.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return $t.current.useReducer(e,t,n)};xe.useRef=function(e){return $t.current.useRef(e)};xe.useState=function(e){return $t.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return $t.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return $t.current.useTransition()};xe.version="18.3.1";wy.exports=xe;var O=wy.exports;const rt=yy(O),vE=tE({__proto__:null,default:rt},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=O,xE=Symbol.for("react.element"),wE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,_E=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CE={key:!0,ref:!0,__self:!0,__source:!0};function Oy(e,t,n){var r,s={},l=null,u=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)SE.call(t,r)&&!CE.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:xE,type:e,key:l,ref:u,props:s,_owner:_E.current}}ic.Fragment=wE;ic.jsx=Oy;ic.jsxs=Oy;xy.exports=ic;var p=xy.exports,Kd={},Ty={exports:{}},pn={},Ry={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,ne){var se=q.length;q.push(ne);e:for(;0<se;){var X=se-1>>>1,oe=q[X];if(0<s(oe,ne))q[X]=ne,q[se]=oe,se=X;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ne=q[0],se=q.pop();if(se!==ne){q[0]=se;e:for(var X=0,oe=q.length,$e=oe>>>1;X<$e;){var Fe=2*(X+1)-1,De=q[Fe],lt=Fe+1,Xt=q[lt];if(0>s(De,se))lt<oe&&0>s(Xt,De)?(q[X]=Xt,q[lt]=se,X=lt):(q[X]=De,q[Fe]=se,X=Fe);else if(lt<oe&&0>s(Xt,se))q[X]=Xt,q[lt]=se,X=lt;else break e}}return ne}function s(q,ne){var se=q.sortIndex-ne.sortIndex;return se!==0?se:q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}var d=[],h=[],v=1,m=null,_=3,j=!1,E=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(q){for(var ne=n(h);ne!==null;){if(ne.callback===null)r(h);else if(ne.startTime<=q)r(h),ne.sortIndex=ne.expirationTime,t(d,ne);else break;ne=n(h)}}function z(q){if(P=!1,C(q),!E)if(n(d)!==null)E=!0,Se(F);else{var ne=n(h);ne!==null&&ze(z,ne.startTime-q)}}function F(q,ne){E=!1,P&&(P=!1,S(U),U=-1),j=!0;var se=_;try{for(C(ne),m=n(d);m!==null&&(!(m.expirationTime>ne)||q&&!Ce());){var X=m.callback;if(typeof X=="function"){m.callback=null,_=m.priorityLevel;var oe=X(m.expirationTime<=ne);ne=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(d)&&r(d),C(ne)}else r(d);m=n(d)}if(m!==null)var $e=!0;else{var Fe=n(h);Fe!==null&&ze(z,Fe.startTime-ne),$e=!1}return $e}finally{m=null,_=se,j=!1}}var M=!1,L=null,U=-1,Z=5,K=-1;function Ce(){return!(e.unstable_now()-K<Z)}function be(){if(L!==null){var q=e.unstable_now();K=q;var ne=!0;try{ne=L(!0,q)}finally{ne?et():(M=!1,L=null)}}else M=!1}var et;if(typeof x=="function")et=function(){x(be)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,le=At.port2;At.port1.onmessage=be,et=function(){le.postMessage(null)}}else et=function(){R(be,0)};function Se(q){L=q,M||(M=!0,et())}function ze(q,ne){U=R(function(){q(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){E||j||(E=!0,Se(F))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(q){switch(_){case 1:case 2:case 3:var ne=3;break;default:ne=_}var se=_;_=ne;try{return q()}finally{_=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,ne){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=_;_=q;try{return ne()}finally{_=se}},e.unstable_scheduleCallback=function(q,ne,se){var X=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?X+se:X):se=X,q){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=se+oe,q={id:v++,callback:ne,priorityLevel:q,startTime:se,expirationTime:oe,sortIndex:-1},se>X?(q.sortIndex=se,t(h,q),n(d)===null&&q===n(h)&&(P?(S(U),U=-1):P=!0,ze(z,se-X))):(q.sortIndex=oe,t(d,q),E||j||(E=!0,Se(F))),q},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(q){var ne=_;return function(){var se=_;_=ne;try{return q.apply(this,arguments)}finally{_=se}}}})(Ly);Ry.exports=Ly;var EE=Ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE=O,dn=EE;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ay=new Set,qs={};function Ui(e,t){Oo(e,t),Oo(e+"Capture",t)}function Oo(e,t){for(qs[e]=t,e=0;e<t.length;e++)Ay.add(t[e])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,kE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function PE(e){return Yd.call(tm,e)?!0:Yd.call(em,e)?!1:kE.test(e)?tm[e]=!0:(em[e]=!0,!1)}function jE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function OE(e,t,n,r){if(t===null||typeof t>"u"||jE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,s,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ct[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ct[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ct[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ct[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ct[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ct[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ct[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ct[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ct[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ch=/[\-:]([a-z])/g;function fh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ch,fh);Ct[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ch,fh);Ct[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ch,fh);Ct[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ct[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ct[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function dh(e,t,n,r){var s=Ct.hasOwnProperty(t)?Ct[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(OE(t,n,s,r)&&(n=null),r||s===null?PE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tr=bE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),ao=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),Fy=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),Ny=Symbol.for("react.offscreen"),nm=Symbol.iterator;function ys(e){return e===null||typeof e!="object"?null:(e=nm&&e[nm]||e["@@iterator"],typeof e=="function"?e:null)}var Ze=Object.assign,ld;function Ts(e){if(ld===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ld=t&&t[1]||""}return`
`+ld+e}var ad=!1;function ud(e,t){if(!e||ad)return"";ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),l=r.stack.split(`
`),u=s.length-1,c=l.length-1;1<=u&&0<=c&&s[u]!==l[c];)c--;for(;1<=u&&0<=c;u--,c--)if(s[u]!==l[c]){if(u!==1||c!==1)do if(u--,c--,0>c||s[u]!==l[c]){var d=`
`+s[u].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=u&&0<=c);break}}}finally{ad=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ts(e):""}function TE(e){switch(e.tag){case 5:return Ts(e.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return e=ud(e.type,!1),e;case 11:return e=ud(e.type.render,!1),e;case 1:return e=ud(e.type,!0),e;default:return""}}function Zd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uo:return"Fragment";case ao:return"Portal";case Qd:return"Profiler";case ph:return"StrictMode";case Jd:return"Suspense";case Xd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fy:return(e.displayName||"Context")+".Consumer";case zy:return(e._context.displayName||"Context")+".Provider";case hh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gh:return t=e.displayName||null,t!==null?t:Zd(e.type)||"Memo";case Wr:t=e._payload,e=e._init;try{return Zd(e(t))}catch{}}return null}function RE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zd(t);case 8:return t===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function li(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function My(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function LE(e){var t=My(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=LE(e))}function Iy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=My(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ep(e,t){var n=t.checked;return Ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=li(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $y(e,t){t=t.checked,t!=null&&dh(e,"checked",t,!1)}function tp(e,t){$y(e,t);var n=li(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?np(e,t.type,n):t.hasOwnProperty("defaultValue")&&np(e,t.type,li(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function im(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function np(e,t,n){(t!=="number"||xu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rs=Array.isArray;function Co(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+li(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function rp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function om(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Rs(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:li(n)}}function Dy(e,t){var n=li(t.value),r=li(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ip(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var va,By=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ks(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AE=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(e){AE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ns[t]=Ns[e]})});function Wy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ns.hasOwnProperty(e)&&Ns[e]?(""+t).trim():t+"px"}function Hy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Wy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var zE=Ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function op(e,t){if(t){if(zE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function sp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lp=null;function mh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ap=null,Eo=null,bo=null;function lm(e){if(e=wl(e)){if(typeof ap!="function")throw Error(G(280));var t=e.stateNode;t&&(t=uc(t),ap(e.stateNode,e.type,t))}}function Vy(e){Eo?bo?bo.push(e):bo=[e]:Eo=e}function Gy(){if(Eo){var e=Eo,t=bo;if(bo=Eo=null,lm(e),t)for(e=0;e<t.length;e++)lm(t[e])}}function qy(e,t){return e(t)}function Ky(){}var cd=!1;function Yy(e,t,n){if(cd)return e(t,n);cd=!0;try{return qy(e,t,n)}finally{cd=!1,(Eo!==null||bo!==null)&&(Ky(),Gy())}}function Ys(e,t){var n=e.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var up=!1;if(kr)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){up=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{up=!1}function FE(e,t,n,r,s,l,u,c,d){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(v){this.onError(v)}}var Ms=!1,wu=null,Su=!1,cp=null,NE={onError:function(e){Ms=!0,wu=e}};function ME(e,t,n,r,s,l,u,c,d){Ms=!1,wu=null,FE.apply(NE,arguments)}function IE(e,t,n,r,s,l,u,c,d){if(ME.apply(this,arguments),Ms){if(Ms){var h=wu;Ms=!1,wu=null}else throw Error(G(198));Su||(Su=!0,cp=h)}}function Bi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function am(e){if(Bi(e)!==e)throw Error(G(188))}function $E(e){var t=e.alternate;if(!t){if(t=Bi(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return am(s),e;if(l===r)return am(s),t;l=l.sibling}throw Error(G(188))}if(n.return!==r.return)n=s,r=l;else{for(var u=!1,c=s.child;c;){if(c===n){u=!0,n=s,r=l;break}if(c===r){u=!0,r=s,n=l;break}c=c.sibling}if(!u){for(c=l.child;c;){if(c===n){u=!0,n=l,r=s;break}if(c===r){u=!0,r=l,n=s;break}c=c.sibling}if(!u)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function Jy(e){return e=$E(e),e!==null?Xy(e):null}function Xy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xy(e);if(t!==null)return t;e=e.sibling}return null}var Zy=dn.unstable_scheduleCallback,um=dn.unstable_cancelCallback,DE=dn.unstable_shouldYield,UE=dn.unstable_requestPaint,st=dn.unstable_now,BE=dn.unstable_getCurrentPriorityLevel,vh=dn.unstable_ImmediatePriority,ex=dn.unstable_UserBlockingPriority,_u=dn.unstable_NormalPriority,WE=dn.unstable_LowPriority,tx=dn.unstable_IdlePriority,oc=null,sr=null;function HE(e){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(oc,e,void 0,(e.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:qE,VE=Math.log,GE=Math.LN2;function qE(e){return e>>>=0,e===0?32:31-(VE(e)/GE|0)|0}var ya=64,xa=4194304;function Ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var c=u&~s;c!==0?r=Ls(c):(l&=u,l!==0&&(r=Ls(l)))}else u=n&~s,u!==0?r=Ls(u):l!==0&&(r=Ls(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vn(t),s=1<<n,r|=e[n],t&=~s;return r}function KE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Vn(l),c=1<<u,d=s[u];d===-1?(!(c&n)||c&r)&&(s[u]=KE(c,t)):d<=t&&(e.expiredLanes|=c),l&=~c}}function fp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nx(){var e=ya;return ya<<=1,!(ya&4194240)&&(ya=64),e}function fd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vn(t),e[t]=n}function QE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Vn(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function yh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Ae=0;function rx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ix,xh,ox,sx,lx,dp=!1,wa=[],Qr=null,Jr=null,Xr=null,Qs=new Map,Js=new Map,Vr=[],JE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(t.pointerId)}}function ws(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=wl(t),t!==null&&xh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function XE(e,t,n,r,s){switch(t){case"focusin":return Qr=ws(Qr,e,t,n,r,s),!0;case"dragenter":return Jr=ws(Jr,e,t,n,r,s),!0;case"mouseover":return Xr=ws(Xr,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Qs.set(l,ws(Qs.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Js.set(l,ws(Js.get(l)||null,e,t,n,r,s)),!0}return!1}function ax(e){var t=ki(e.target);if(t!==null){var n=Bi(t);if(n!==null){if(t=n.tag,t===13){if(t=Qy(n),t!==null){e.blockedOn=t,lx(e.priority,function(){ox(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lp=r,n.target.dispatchEvent(r),lp=null}else return t=wl(n),t!==null&&xh(t),e.blockedOn=n,!1;t.shift()}return!0}function fm(e,t,n){Xa(e)&&n.delete(t)}function ZE(){dp=!1,Qr!==null&&Xa(Qr)&&(Qr=null),Jr!==null&&Xa(Jr)&&(Jr=null),Xr!==null&&Xa(Xr)&&(Xr=null),Qs.forEach(fm),Js.forEach(fm)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,dp||(dp=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,ZE)))}function Xs(e){function t(s){return Ss(s,e)}if(0<wa.length){Ss(wa[0],e);for(var n=1;n<wa.length;n++){var r=wa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qr!==null&&Ss(Qr,e),Jr!==null&&Ss(Jr,e),Xr!==null&&Ss(Xr,e),Qs.forEach(t),Js.forEach(t),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)ax(n),n.blockedOn===null&&Vr.shift()}var ko=Tr.ReactCurrentBatchConfig,Eu=!0;function eb(e,t,n,r){var s=Ae,l=ko.transition;ko.transition=null;try{Ae=1,wh(e,t,n,r)}finally{Ae=s,ko.transition=l}}function tb(e,t,n,r){var s=Ae,l=ko.transition;ko.transition=null;try{Ae=4,wh(e,t,n,r)}finally{Ae=s,ko.transition=l}}function wh(e,t,n,r){if(Eu){var s=pp(e,t,n,r);if(s===null)Sd(e,t,r,bu,n),cm(e,r);else if(XE(s,e,t,n,r))r.stopPropagation();else if(cm(e,r),t&4&&-1<JE.indexOf(e)){for(;s!==null;){var l=wl(s);if(l!==null&&ix(l),l=pp(e,t,n,r),l===null&&Sd(e,t,r,bu,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else Sd(e,t,r,null,n)}}var bu=null;function pp(e,t,n,r){if(bu=null,e=mh(r),e=ki(e),e!==null)if(t=Bi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bu=e,null}function ux(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BE()){case vh:return 1;case ex:return 4;case _u:case WE:return 16;case tx:return 536870912;default:return 16}default:return 16}}var qr=null,Sh=null,Za=null;function cx(){if(Za)return Za;var e,t=Sh,n=t.length,r,s="value"in qr?qr.value:qr.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===s[l-r];r++);return Za=s.slice(e,1<r?1-r:void 0)}function eu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function dm(){return!1}function hn(e){function t(n,r,s,l,u){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sa:dm,this.isPropagationStopped=dm,this}return Ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=hn(Wo),xl=Ze({},Wo,{view:0,detail:0}),nb=hn(xl),dd,pd,_s,sc=Ze({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_s&&(_s&&e.type==="mousemove"?(dd=e.screenX-_s.screenX,pd=e.screenY-_s.screenY):pd=dd=0,_s=e),dd)},movementY:function(e){return"movementY"in e?e.movementY:pd}}),pm=hn(sc),rb=Ze({},sc,{dataTransfer:0}),ib=hn(rb),ob=Ze({},xl,{relatedTarget:0}),hd=hn(ob),sb=Ze({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),lb=hn(sb),ab=Ze({},Wo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ub=hn(ab),cb=Ze({},Wo,{data:0}),hm=hn(cb),fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},db={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pb[e])?!!t[e]:!1}function Ch(){return hb}var gb=Ze({},xl,{key:function(e){if(e.key){var t=fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?db[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(e){return e.type==="keypress"?eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mb=hn(gb),vb=Ze({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=hn(vb),yb=Ze({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),xb=hn(yb),wb=Ze({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sb=hn(wb),_b=Ze({},sc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cb=hn(_b),Eb=[9,13,27,32],Eh=kr&&"CompositionEvent"in window,Is=null;kr&&"documentMode"in document&&(Is=document.documentMode);var bb=kr&&"TextEvent"in window&&!Is,fx=kr&&(!Eh||Is&&8<Is&&11>=Is),mm=String.fromCharCode(32),vm=!1;function dx(e,t){switch(e){case"keyup":return Eb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function px(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function kb(e,t){switch(e){case"compositionend":return px(t);case"keypress":return t.which!==32?null:(vm=!0,mm);case"textInput":return e=t.data,e===mm&&vm?null:e;default:return null}}function Pb(e,t){if(co)return e==="compositionend"||!Eh&&dx(e,t)?(e=cx(),Za=Sh=qr=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fx&&t.locale!=="ko"?null:t.data;default:return null}}var jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jb[e.type]:t==="textarea"}function hx(e,t,n,r){Vy(r),t=ku(t,"onChange"),0<t.length&&(n=new _h("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $s=null,Zs=null;function Ob(e){bx(e,0)}function lc(e){var t=ho(e);if(Iy(t))return e}function Tb(e,t){if(e==="change")return t}var gx=!1;if(kr){var gd;if(kr){var md="oninput"in document;if(!md){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),md=typeof xm.oninput=="function"}gd=md}else gd=!1;gx=gd&&(!document.documentMode||9<document.documentMode)}function wm(){$s&&($s.detachEvent("onpropertychange",mx),Zs=$s=null)}function mx(e){if(e.propertyName==="value"&&lc(Zs)){var t=[];hx(t,Zs,e,mh(e)),Yy(Ob,t)}}function Rb(e,t,n){e==="focusin"?(wm(),$s=t,Zs=n,$s.attachEvent("onpropertychange",mx)):e==="focusout"&&wm()}function Lb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lc(Zs)}function Ab(e,t){if(e==="click")return lc(t)}function zb(e,t){if(e==="input"||e==="change")return lc(t)}function Fb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yn=typeof Object.is=="function"?Object.is:Fb;function el(e,t){if(Yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Yd.call(t,s)||!Yn(e[s],t[s]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _m(e,t){var n=Sm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function vx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yx(){for(var e=window,t=xu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xu(e.document)}return t}function bh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nb(e){var t=yx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vx(n.ownerDocument.documentElement,n)){if(r!==null&&bh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=_m(n,l);var u=_m(n,r);s&&u&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mb=kr&&"documentMode"in document&&11>=document.documentMode,fo=null,hp=null,Ds=null,gp=!1;function Cm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gp||fo==null||fo!==xu(r)||(r=fo,"selectionStart"in r&&bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&el(Ds,r)||(Ds=r,r=ku(hp,"onSelect"),0<r.length&&(t=new _h("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fo)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var po={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},vd={},xx={};kr&&(xx=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ac(e){if(vd[e])return vd[e];if(!po[e])return e;var t=po[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xx)return vd[e]=t[n];return e}var wx=ac("animationend"),Sx=ac("animationiteration"),_x=ac("animationstart"),Cx=ac("transitionend"),Ex=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(e,t){Ex.set(e,t),Ui(t,[e])}for(var yd=0;yd<Em.length;yd++){var xd=Em[yd],Ib=xd.toLowerCase(),$b=xd[0].toUpperCase()+xd.slice(1);ui(Ib,"on"+$b)}ui(wx,"onAnimationEnd");ui(Sx,"onAnimationIteration");ui(_x,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(Cx,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Db=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function bm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,IE(r,t,void 0,e),e.currentTarget=null}function bx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var u=r.length-1;0<=u;u--){var c=r[u],d=c.instance,h=c.currentTarget;if(c=c.listener,d!==l&&s.isPropagationStopped())break e;bm(s,c,h),l=d}else for(u=0;u<r.length;u++){if(c=r[u],d=c.instance,h=c.currentTarget,c=c.listener,d!==l&&s.isPropagationStopped())break e;bm(s,c,h),l=d}}}if(Su)throw e=cp,Su=!1,cp=null,e}function We(e,t){var n=t[wp];n===void 0&&(n=t[wp]=new Set);var r=e+"__bubble";n.has(r)||(kx(t,e,2,!1),n.add(r))}function wd(e,t,n){var r=0;t&&(r|=4),kx(n,e,r,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function tl(e){if(!e[Ca]){e[Ca]=!0,Ay.forEach(function(n){n!=="selectionchange"&&(Db.has(n)||wd(n,!1,e),wd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,wd("selectionchange",!1,t))}}function kx(e,t,n,r){switch(ux(t)){case 1:var s=eb;break;case 4:s=tb;break;default:s=wh}n=s.bind(null,t,n,e),s=void 0,!up||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Sd(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(u===4)for(u=r.return;u!==null;){var d=u.tag;if((d===3||d===4)&&(d=u.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;u=u.return}for(;c!==null;){if(u=ki(c),u===null)return;if(d=u.tag,d===5||d===6){r=l=u;continue e}c=c.parentNode}}r=r.return}Yy(function(){var h=l,v=mh(n),m=[];e:{var _=Ex.get(e);if(_!==void 0){var j=_h,E=e;switch(e){case"keypress":if(eu(n)===0)break e;case"keydown":case"keyup":j=mb;break;case"focusin":E="focus",j=hd;break;case"focusout":E="blur",j=hd;break;case"beforeblur":case"afterblur":j=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ib;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=xb;break;case wx:case Sx:case _x:j=lb;break;case Cx:j=Sb;break;case"scroll":j=nb;break;case"wheel":j=Cb;break;case"copy":case"cut":case"paste":j=ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=gm}var P=(t&4)!==0,R=!P&&e==="scroll",S=P?_!==null?_+"Capture":null:_;P=[];for(var x=h,C;x!==null;){C=x;var z=C.stateNode;if(C.tag===5&&z!==null&&(C=z,S!==null&&(z=Ys(x,S),z!=null&&P.push(nl(x,z,C)))),R)break;x=x.return}0<P.length&&(_=new j(_,E,null,n,v),m.push({event:_,listeners:P}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",_&&n!==lp&&(E=n.relatedTarget||n.fromElement)&&(ki(E)||E[Pr]))break e;if((j||_)&&(_=v.window===v?v:(_=v.ownerDocument)?_.defaultView||_.parentWindow:window,j?(E=n.relatedTarget||n.toElement,j=h,E=E?ki(E):null,E!==null&&(R=Bi(E),E!==R||E.tag!==5&&E.tag!==6)&&(E=null)):(j=null,E=h),j!==E)){if(P=pm,z="onMouseLeave",S="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(P=gm,z="onPointerLeave",S="onPointerEnter",x="pointer"),R=j==null?_:ho(j),C=E==null?_:ho(E),_=new P(z,x+"leave",j,n,v),_.target=R,_.relatedTarget=C,z=null,ki(v)===h&&(P=new P(S,x+"enter",E,n,v),P.target=C,P.relatedTarget=R,z=P),R=z,j&&E)t:{for(P=j,S=E,x=0,C=P;C;C=so(C))x++;for(C=0,z=S;z;z=so(z))C++;for(;0<x-C;)P=so(P),x--;for(;0<C-x;)S=so(S),C--;for(;x--;){if(P===S||S!==null&&P===S.alternate)break t;P=so(P),S=so(S)}P=null}else P=null;j!==null&&km(m,_,j,P,!1),E!==null&&R!==null&&km(m,R,E,P,!0)}}e:{if(_=h?ho(h):window,j=_.nodeName&&_.nodeName.toLowerCase(),j==="select"||j==="input"&&_.type==="file")var F=Tb;else if(ym(_))if(gx)F=zb;else{F=Lb;var M=Rb}else(j=_.nodeName)&&j.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(F=Ab);if(F&&(F=F(e,h))){hx(m,F,n,v);break e}M&&M(e,_,h),e==="focusout"&&(M=_._wrapperState)&&M.controlled&&_.type==="number"&&np(_,"number",_.value)}switch(M=h?ho(h):window,e){case"focusin":(ym(M)||M.contentEditable==="true")&&(fo=M,hp=h,Ds=null);break;case"focusout":Ds=hp=fo=null;break;case"mousedown":gp=!0;break;case"contextmenu":case"mouseup":case"dragend":gp=!1,Cm(m,n,v);break;case"selectionchange":if(Mb)break;case"keydown":case"keyup":Cm(m,n,v)}var L;if(Eh)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else co?dx(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(fx&&n.locale!=="ko"&&(co||U!=="onCompositionStart"?U==="onCompositionEnd"&&co&&(L=cx()):(qr=v,Sh="value"in qr?qr.value:qr.textContent,co=!0)),M=ku(h,U),0<M.length&&(U=new hm(U,e,null,n,v),m.push({event:U,listeners:M}),L?U.data=L:(L=px(n),L!==null&&(U.data=L)))),(L=bb?kb(e,n):Pb(e,n))&&(h=ku(h,"onBeforeInput"),0<h.length&&(v=new hm("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:h}),v.data=L))}bx(m,t)})}function nl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ku(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Ys(e,n),l!=null&&r.unshift(nl(e,l,s)),l=Ys(e,t),l!=null&&r.push(nl(e,l,s))),e=e.return}return r}function so(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function km(e,t,n,r,s){for(var l=t._reactName,u=[];n!==null&&n!==r;){var c=n,d=c.alternate,h=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&h!==null&&(c=h,s?(d=Ys(n,l),d!=null&&u.unshift(nl(n,d,c))):s||(d=Ys(n,l),d!=null&&u.push(nl(n,d,c)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Ub=/\r\n?/g,Bb=/\u0000|\uFFFD/g;function Pm(e){return(typeof e=="string"?e:""+e).replace(Ub,`
`).replace(Bb,"")}function Ea(e,t,n){if(t=Pm(t),Pm(e)!==t&&n)throw Error(G(425))}function Pu(){}var mp=null,vp=null;function yp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,Wb=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,Hb=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(e){return jm.resolve(null).then(e).catch(Vb)}:xp;function Vb(e){setTimeout(function(){throw e})}function _d(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Xs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Xs(t)}function Zr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),or="__reactFiber$"+Ho,rl="__reactProps$"+Ho,Pr="__reactContainer$"+Ho,wp="__reactEvents$"+Ho,Gb="__reactListeners$"+Ho,qb="__reactHandles$"+Ho;function ki(e){var t=e[or];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pr]||n[or]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Om(e);e!==null;){if(n=e[or])return n;e=Om(e)}return t}e=n,n=e.parentNode}return null}function wl(e){return e=e[or]||e[Pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function uc(e){return e[rl]||null}var Sp=[],go=-1;function ci(e){return{current:e}}function Ve(e){0>go||(e.current=Sp[go],Sp[go]=null,go--)}function Ie(e,t){go++,Sp[go]=e.current,e.current=t}var ai={},Lt=ci(ai),Yt=ci(!1),Fi=ai;function To(e,t){var n=e.type.contextTypes;if(!n)return ai;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Qt(e){return e=e.childContextTypes,e!=null}function ju(){Ve(Yt),Ve(Lt)}function Tm(e,t,n){if(Lt.current!==ai)throw Error(G(168));Ie(Lt,t),Ie(Yt,n)}function Px(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(G(108,RE(e)||"Unknown",s));return Ze({},n,r)}function Ou(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ai,Fi=Lt.current,Ie(Lt,e),Ie(Yt,Yt.current),!0}function Rm(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=Px(e,t,Fi),r.__reactInternalMemoizedMergedChildContext=e,Ve(Yt),Ve(Lt),Ie(Lt,e)):Ve(Yt),Ie(Yt,n)}var _r=null,cc=!1,Cd=!1;function jx(e){_r===null?_r=[e]:_r.push(e)}function Kb(e){cc=!0,jx(e)}function fi(){if(!Cd&&_r!==null){Cd=!0;var e=0,t=Ae;try{var n=_r;for(Ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_r=null,cc=!1}catch(s){throw _r!==null&&(_r=_r.slice(e+1)),Zy(vh,fi),s}finally{Ae=t,Cd=!1}}return null}var mo=[],vo=0,Tu=null,Ru=0,bn=[],kn=0,Ni=null,Cr=1,Er="";function Ci(e,t){mo[vo++]=Ru,mo[vo++]=Tu,Tu=e,Ru=t}function Ox(e,t,n){bn[kn++]=Cr,bn[kn++]=Er,bn[kn++]=Ni,Ni=e;var r=Cr;e=Er;var s=32-Vn(r)-1;r&=~(1<<s),n+=1;var l=32-Vn(t)+s;if(30<l){var u=s-s%5;l=(r&(1<<u)-1).toString(32),r>>=u,s-=u,Cr=1<<32-Vn(t)+s|n<<s|r,Er=l+e}else Cr=1<<l|n<<s|r,Er=e}function kh(e){e.return!==null&&(Ci(e,1),Ox(e,1,0))}function Ph(e){for(;e===Tu;)Tu=mo[--vo],mo[vo]=null,Ru=mo[--vo],mo[vo]=null;for(;e===Ni;)Ni=bn[--kn],bn[kn]=null,Er=bn[--kn],bn[kn]=null,Cr=bn[--kn],bn[kn]=null}var cn=null,un=null,qe=!1,Hn=null;function Tx(e,t){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,cn=e,un=Zr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,cn=e,un=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ni!==null?{id:Cr,overflow:Er}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,cn=e,un=null,!0):!1;default:return!1}}function _p(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cp(e){if(qe){var t=un;if(t){var n=t;if(!Lm(e,t)){if(_p(e))throw Error(G(418));t=Zr(n.nextSibling);var r=cn;t&&Lm(e,t)?Tx(r,n):(e.flags=e.flags&-4097|2,qe=!1,cn=e)}}else{if(_p(e))throw Error(G(418));e.flags=e.flags&-4097|2,qe=!1,cn=e}}}function Am(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cn=e}function ba(e){if(e!==cn)return!1;if(!qe)return Am(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yp(e.type,e.memoizedProps)),t&&(t=un)){if(_p(e))throw Rx(),Error(G(418));for(;t;)Tx(e,t),t=Zr(t.nextSibling)}if(Am(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){un=Zr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}un=null}}else un=cn?Zr(e.stateNode.nextSibling):null;return!0}function Rx(){for(var e=un;e;)e=Zr(e.nextSibling)}function Ro(){un=cn=null,qe=!1}function jh(e){Hn===null?Hn=[e]:Hn.push(e)}var Yb=Tr.ReactCurrentBatchConfig;function Cs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var c=s.refs;u===null?delete c[l]:c[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zm(e){var t=e._init;return t(e._payload)}function Lx(e){function t(S,x){if(e){var C=S.deletions;C===null?(S.deletions=[x],S.flags|=16):C.push(x)}}function n(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function r(S,x){for(S=new Map;x!==null;)x.key!==null?S.set(x.key,x):S.set(x.index,x),x=x.sibling;return S}function s(S,x){return S=ri(S,x),S.index=0,S.sibling=null,S}function l(S,x,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<x?(S.flags|=2,x):C):(S.flags|=2,x)):(S.flags|=1048576,x)}function u(S){return e&&S.alternate===null&&(S.flags|=2),S}function c(S,x,C,z){return x===null||x.tag!==6?(x=Td(C,S.mode,z),x.return=S,x):(x=s(x,C),x.return=S,x)}function d(S,x,C,z){var F=C.type;return F===uo?v(S,x,C.props.children,z,C.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Wr&&zm(F)===x.type)?(z=s(x,C.props),z.ref=Cs(S,x,C),z.return=S,z):(z=lu(C.type,C.key,C.props,null,S.mode,z),z.ref=Cs(S,x,C),z.return=S,z)}function h(S,x,C,z){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=Rd(C,S.mode,z),x.return=S,x):(x=s(x,C.children||[]),x.return=S,x)}function v(S,x,C,z,F){return x===null||x.tag!==7?(x=Li(C,S.mode,z,F),x.return=S,x):(x=s(x,C),x.return=S,x)}function m(S,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Td(""+x,S.mode,C),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:return C=lu(x.type,x.key,x.props,null,S.mode,C),C.ref=Cs(S,null,x),C.return=S,C;case ao:return x=Rd(x,S.mode,C),x.return=S,x;case Wr:var z=x._init;return m(S,z(x._payload),C)}if(Rs(x)||ys(x))return x=Li(x,S.mode,C,null),x.return=S,x;ka(S,x)}return null}function _(S,x,C,z){var F=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return F!==null?null:c(S,x,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ga:return C.key===F?d(S,x,C,z):null;case ao:return C.key===F?h(S,x,C,z):null;case Wr:return F=C._init,_(S,x,F(C._payload),z)}if(Rs(C)||ys(C))return F!==null?null:v(S,x,C,z,null);ka(S,C)}return null}function j(S,x,C,z,F){if(typeof z=="string"&&z!==""||typeof z=="number")return S=S.get(C)||null,c(x,S,""+z,F);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ga:return S=S.get(z.key===null?C:z.key)||null,d(x,S,z,F);case ao:return S=S.get(z.key===null?C:z.key)||null,h(x,S,z,F);case Wr:var M=z._init;return j(S,x,C,M(z._payload),F)}if(Rs(z)||ys(z))return S=S.get(C)||null,v(x,S,z,F,null);ka(x,z)}return null}function E(S,x,C,z){for(var F=null,M=null,L=x,U=x=0,Z=null;L!==null&&U<C.length;U++){L.index>U?(Z=L,L=null):Z=L.sibling;var K=_(S,L,C[U],z);if(K===null){L===null&&(L=Z);break}e&&L&&K.alternate===null&&t(S,L),x=l(K,x,U),M===null?F=K:M.sibling=K,M=K,L=Z}if(U===C.length)return n(S,L),qe&&Ci(S,U),F;if(L===null){for(;U<C.length;U++)L=m(S,C[U],z),L!==null&&(x=l(L,x,U),M===null?F=L:M.sibling=L,M=L);return qe&&Ci(S,U),F}for(L=r(S,L);U<C.length;U++)Z=j(L,S,U,C[U],z),Z!==null&&(e&&Z.alternate!==null&&L.delete(Z.key===null?U:Z.key),x=l(Z,x,U),M===null?F=Z:M.sibling=Z,M=Z);return e&&L.forEach(function(Ce){return t(S,Ce)}),qe&&Ci(S,U),F}function P(S,x,C,z){var F=ys(C);if(typeof F!="function")throw Error(G(150));if(C=F.call(C),C==null)throw Error(G(151));for(var M=F=null,L=x,U=x=0,Z=null,K=C.next();L!==null&&!K.done;U++,K=C.next()){L.index>U?(Z=L,L=null):Z=L.sibling;var Ce=_(S,L,K.value,z);if(Ce===null){L===null&&(L=Z);break}e&&L&&Ce.alternate===null&&t(S,L),x=l(Ce,x,U),M===null?F=Ce:M.sibling=Ce,M=Ce,L=Z}if(K.done)return n(S,L),qe&&Ci(S,U),F;if(L===null){for(;!K.done;U++,K=C.next())K=m(S,K.value,z),K!==null&&(x=l(K,x,U),M===null?F=K:M.sibling=K,M=K);return qe&&Ci(S,U),F}for(L=r(S,L);!K.done;U++,K=C.next())K=j(L,S,U,K.value,z),K!==null&&(e&&K.alternate!==null&&L.delete(K.key===null?U:K.key),x=l(K,x,U),M===null?F=K:M.sibling=K,M=K);return e&&L.forEach(function(be){return t(S,be)}),qe&&Ci(S,U),F}function R(S,x,C,z){if(typeof C=="object"&&C!==null&&C.type===uo&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ga:e:{for(var F=C.key,M=x;M!==null;){if(M.key===F){if(F=C.type,F===uo){if(M.tag===7){n(S,M.sibling),x=s(M,C.props.children),x.return=S,S=x;break e}}else if(M.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Wr&&zm(F)===M.type){n(S,M.sibling),x=s(M,C.props),x.ref=Cs(S,M,C),x.return=S,S=x;break e}n(S,M);break}else t(S,M);M=M.sibling}C.type===uo?(x=Li(C.props.children,S.mode,z,C.key),x.return=S,S=x):(z=lu(C.type,C.key,C.props,null,S.mode,z),z.ref=Cs(S,x,C),z.return=S,S=z)}return u(S);case ao:e:{for(M=C.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){n(S,x.sibling),x=s(x,C.children||[]),x.return=S,S=x;break e}else{n(S,x);break}else t(S,x);x=x.sibling}x=Rd(C,S.mode,z),x.return=S,S=x}return u(S);case Wr:return M=C._init,R(S,x,M(C._payload),z)}if(Rs(C))return E(S,x,C,z);if(ys(C))return P(S,x,C,z);ka(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,x!==null&&x.tag===6?(n(S,x.sibling),x=s(x,C),x.return=S,S=x):(n(S,x),x=Td(C,S.mode,z),x.return=S,S=x),u(S)):n(S,x)}return R}var Lo=Lx(!0),Ax=Lx(!1),Lu=ci(null),Au=null,yo=null,Oh=null;function Th(){Oh=yo=Au=null}function Rh(e){var t=Lu.current;Ve(Lu),e._currentValue=t}function Ep(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Po(e,t){Au=e,Oh=yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qt=!0),e.firstContext=null)}function On(e){var t=e._currentValue;if(Oh!==e)if(e={context:e,memoizedValue:t,next:null},yo===null){if(Au===null)throw Error(G(308));yo=e,Au.dependencies={lanes:0,firstContext:e}}else yo=yo.next=e;return t}var Pi=null;function Lh(e){Pi===null?Pi=[e]:Pi.push(e)}function zx(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Lh(t)):(n.next=s.next,s.next=n),t.interleaved=n,jr(e,r)}function jr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Hr=!1;function Ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ei(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,jr(e,n)}return s=r.interleaved,s===null?(t.next=t,Lh(r)):(t.next=s.next,s.next=t),r.interleaved=t,jr(e,n)}function tu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yh(e,n)}}function Fm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zu(e,t,n,r){var s=e.updateQueue;Hr=!1;var l=s.firstBaseUpdate,u=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var d=c,h=d.next;d.next=null,u===null?l=h:u.next=h,u=d;var v=e.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=h:c.next=h,v.lastBaseUpdate=d))}if(l!==null){var m=s.baseState;u=0,v=h=d=null,c=l;do{var _=c.lane,j=c.eventTime;if((r&_)===_){v!==null&&(v=v.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var E=e,P=c;switch(_=t,j=n,P.tag){case 1:if(E=P.payload,typeof E=="function"){m=E.call(j,m,_);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=P.payload,_=typeof E=="function"?E.call(j,m,_):E,_==null)break e;m=Ze({},m,_);break e;case 2:Hr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,_=s.effects,_===null?s.effects=[c]:_.push(c))}else j={eventTime:j,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(h=v=j,d=m):v=v.next=j,u|=_;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;_=c,c=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(1);if(v===null&&(d=m),s.baseState=d,s.firstBaseUpdate=h,s.lastBaseUpdate=v,t=s.shared.interleaved,t!==null){s=t;do u|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);Ii|=u,e.lanes=u,e.memoizedState=m}}function Nm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(G(191,s));s.call(r)}}}var Sl={},lr=ci(Sl),il=ci(Sl),ol=ci(Sl);function ji(e){if(e===Sl)throw Error(G(174));return e}function zh(e,t){switch(Ie(ol,t),Ie(il,e),Ie(lr,Sl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ip(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ip(t,e)}Ve(lr),Ie(lr,t)}function Ao(){Ve(lr),Ve(il),Ve(ol)}function Nx(e){ji(ol.current);var t=ji(lr.current),n=ip(t,e.type);t!==n&&(Ie(il,e),Ie(lr,n))}function Fh(e){il.current===e&&(Ve(lr),Ve(il))}var Qe=ci(0);function Fu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ed=[];function Nh(){for(var e=0;e<Ed.length;e++)Ed[e]._workInProgressVersionPrimary=null;Ed.length=0}var nu=Tr.ReactCurrentDispatcher,bd=Tr.ReactCurrentBatchConfig,Mi=0,Je=null,pt=null,mt=null,Nu=!1,Us=!1,sl=0,Qb=0;function kt(){throw Error(G(321))}function Mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Ih(e,t,n,r,s,l){if(Mi=l,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nu.current=e===null||e.memoizedState===null?ek:tk,e=n(r,s),Us){l=0;do{if(Us=!1,sl=0,25<=l)throw Error(G(301));l+=1,mt=pt=null,t.updateQueue=null,nu.current=nk,e=n(r,s)}while(Us)}if(nu.current=Mu,t=pt!==null&&pt.next!==null,Mi=0,mt=pt=Je=null,Nu=!1,t)throw Error(G(300));return e}function $h(){var e=sl!==0;return sl=0,e}function rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Je.memoizedState=mt=e:mt=mt.next=e,mt}function Tn(){if(pt===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=mt===null?Je.memoizedState:mt.next;if(t!==null)mt=t,pt=e;else{if(e===null)throw Error(G(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},mt===null?Je.memoizedState=mt=e:mt=mt.next=e}return mt}function ll(e,t){return typeof t=="function"?t(e):t}function kd(e){var t=Tn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=pt,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var u=s.next;s.next=l.next,l.next=u}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var c=u=null,d=null,h=l;do{var v=h.lane;if((Mi&v)===v)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(c=d=m,u=r):d=d.next=m,Je.lanes|=v,Ii|=v}h=h.next}while(h!==null&&h!==l);d===null?u=r:d.next=c,Yn(r,t.memoizedState)||(qt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,Je.lanes|=l,Ii|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pd(e){var t=Tn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var u=s=s.next;do l=e(l,u.action),u=u.next;while(u!==s);Yn(l,t.memoizedState)||(qt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Mx(){}function Ix(e,t){var n=Je,r=Tn(),s=t(),l=!Yn(r.memoizedState,s);if(l&&(r.memoizedState=s,qt=!0),r=r.queue,Dh(Ux.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,al(9,Dx.bind(null,n,r,s,t),void 0,null),yt===null)throw Error(G(349));Mi&30||$x(n,t,s)}return s}function $x(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dx(e,t,n,r){t.value=n,t.getSnapshot=r,Bx(t)&&Wx(e)}function Ux(e,t,n){return n(function(){Bx(t)&&Wx(e)})}function Bx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch{return!0}}function Wx(e){var t=jr(e,1);t!==null&&Gn(t,e,1,-1)}function Mm(e){var t=rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:e},t.queue=e,e=e.dispatch=Zb.bind(null,Je,e),[t.memoizedState,e]}function al(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hx(){return Tn().memoizedState}function ru(e,t,n,r){var s=rr();Je.flags|=e,s.memoizedState=al(1|t,n,void 0,r===void 0?null:r)}function fc(e,t,n,r){var s=Tn();r=r===void 0?null:r;var l=void 0;if(pt!==null){var u=pt.memoizedState;if(l=u.destroy,r!==null&&Mh(r,u.deps)){s.memoizedState=al(t,n,l,r);return}}Je.flags|=e,s.memoizedState=al(1|t,n,l,r)}function Im(e,t){return ru(8390656,8,e,t)}function Dh(e,t){return fc(2048,8,e,t)}function Vx(e,t){return fc(4,2,e,t)}function Gx(e,t){return fc(4,4,e,t)}function qx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kx(e,t,n){return n=n!=null?n.concat([e]):null,fc(4,4,qx.bind(null,t,e),n)}function Uh(){}function Yx(e,t){var n=Tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qx(e,t){var n=Tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jx(e,t,n){return Mi&21?(Yn(n,t)||(n=nx(),Je.lanes|=n,Ii|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qt=!0),e.memoizedState=n)}function Jb(e,t){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var r=bd.transition;bd.transition={};try{e(!1),t()}finally{Ae=n,bd.transition=r}}function Xx(){return Tn().memoizedState}function Xb(e,t,n){var r=ni(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zx(e))e2(t,n);else if(n=zx(e,t,n,r),n!==null){var s=It();Gn(n,e,r,s),t2(n,t,r)}}function Zb(e,t,n){var r=ni(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zx(e))e2(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,c=l(u,n);if(s.hasEagerState=!0,s.eagerState=c,Yn(c,u)){var d=t.interleaved;d===null?(s.next=s,Lh(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}n=zx(e,t,s,r),n!==null&&(s=It(),Gn(n,e,r,s),t2(n,t,r))}}function Zx(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function e2(e,t){Us=Nu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t2(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yh(e,n)}}var Mu={readContext:On,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ek={readContext:On,useCallback:function(e,t){return rr().memoizedState=[e,t===void 0?null:t],e},useContext:On,useEffect:Im,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ru(4194308,4,qx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ru(4194308,4,e,t)},useInsertionEffect:function(e,t){return ru(4,2,e,t)},useMemo:function(e,t){var n=rr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xb.bind(null,Je,e),[r.memoizedState,e]},useRef:function(e){var t=rr();return e={current:e},t.memoizedState=e},useState:Mm,useDebugValue:Uh,useDeferredValue:function(e){return rr().memoizedState=e},useTransition:function(){var e=Mm(!1),t=e[0];return e=Jb.bind(null,e[1]),rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Je,s=rr();if(qe){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),yt===null)throw Error(G(349));Mi&30||$x(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,Im(Ux.bind(null,r,l,e),[e]),r.flags|=2048,al(9,Dx.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=rr(),t=yt.identifierPrefix;if(qe){var n=Er,r=Cr;n=(r&~(1<<32-Vn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tk={readContext:On,useCallback:Yx,useContext:On,useEffect:Dh,useImperativeHandle:Kx,useInsertionEffect:Vx,useLayoutEffect:Gx,useMemo:Qx,useReducer:kd,useRef:Hx,useState:function(){return kd(ll)},useDebugValue:Uh,useDeferredValue:function(e){var t=Tn();return Jx(t,pt.memoizedState,e)},useTransition:function(){var e=kd(ll)[0],t=Tn().memoizedState;return[e,t]},useMutableSource:Mx,useSyncExternalStore:Ix,useId:Xx,unstable_isNewReconciler:!1},nk={readContext:On,useCallback:Yx,useContext:On,useEffect:Dh,useImperativeHandle:Kx,useInsertionEffect:Vx,useLayoutEffect:Gx,useMemo:Qx,useReducer:Pd,useRef:Hx,useState:function(){return Pd(ll)},useDebugValue:Uh,useDeferredValue:function(e){var t=Tn();return pt===null?t.memoizedState=e:Jx(t,pt.memoizedState,e)},useTransition:function(){var e=Pd(ll)[0],t=Tn().memoizedState;return[e,t]},useMutableSource:Mx,useSyncExternalStore:Ix,useId:Xx,unstable_isNewReconciler:!1};function Bn(e,t){if(e&&e.defaultProps){t=Ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={isMounted:function(e){return(e=e._reactInternals)?Bi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=It(),s=ni(e),l=br(r,s);l.payload=t,n!=null&&(l.callback=n),t=ei(e,l,s),t!==null&&(Gn(t,e,s,r),tu(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=It(),s=ni(e),l=br(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ei(e,l,s),t!==null&&(Gn(t,e,s,r),tu(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),r=ni(e),s=br(n,r);s.tag=2,t!=null&&(s.callback=t),t=ei(e,s,r),t!==null&&(Gn(t,e,r,n),tu(t,e,r))}};function $m(e,t,n,r,s,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,u):t.prototype&&t.prototype.isPureReactComponent?!el(n,r)||!el(s,l):!0}function n2(e,t,n){var r=!1,s=ai,l=t.contextType;return typeof l=="object"&&l!==null?l=On(l):(s=Qt(t)?Fi:Lt.current,r=t.contextTypes,l=(r=r!=null)?To(e,s):ai),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function Dm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function kp(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ah(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=On(l):(l=Qt(t)?Fi:Lt.current,s.context=To(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(bp(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&dc.enqueueReplaceState(s,s.state,null),zu(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function zo(e,t){try{var n="",r=t;do n+=TE(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function jd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rk=typeof WeakMap=="function"?WeakMap:Map;function r2(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$u||($u=!0,Mp=r),Pp(e,t)},n}function i2(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Pp(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Pp(e,t),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Um(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rk;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=vk.bind(null,e,t,n),t.then(e,e))}function Bm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wm(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,ei(n,t,1))),n.lanes|=1),e)}var ik=Tr.ReactCurrentOwner,qt=!1;function Mt(e,t,n,r){t.child=e===null?Ax(t,null,n,r):Lo(t,e.child,n,r)}function Hm(e,t,n,r,s){n=n.render;var l=t.ref;return Po(t,s),r=Ih(e,t,n,r,l,s),n=$h(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Or(e,t,s)):(qe&&n&&kh(t),t.flags|=1,Mt(e,t,r,s),t.child)}function Vm(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!Yh(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,o2(e,t,l,r,s)):(e=lu(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(u,r)&&e.ref===t.ref)return Or(e,t,s)}return t.flags|=1,e=ri(l,r),e.ref=t.ref,e.return=t,t.child=e}function o2(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(el(l,r)&&e.ref===t.ref)if(qt=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(qt=!0);else return t.lanes=e.lanes,Or(e,t,s)}return jp(e,t,n,r,s)}function s2(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(wo,ln),ln|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(wo,ln),ln|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ie(wo,ln),ln|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ie(wo,ln),ln|=r;return Mt(e,t,s,n),t.child}function l2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jp(e,t,n,r,s){var l=Qt(n)?Fi:Lt.current;return l=To(t,l),Po(t,s),n=Ih(e,t,n,r,l,s),r=$h(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Or(e,t,s)):(qe&&r&&kh(t),t.flags|=1,Mt(e,t,n,s),t.child)}function Gm(e,t,n,r,s){if(Qt(n)){var l=!0;Ou(t)}else l=!1;if(Po(t,s),t.stateNode===null)iu(e,t),n2(t,n,r),kp(t,n,r,s),r=!0;else if(e===null){var u=t.stateNode,c=t.memoizedProps;u.props=c;var d=u.context,h=n.contextType;typeof h=="object"&&h!==null?h=On(h):(h=Qt(n)?Fi:Lt.current,h=To(t,h));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function";m||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==r||d!==h)&&Dm(t,u,r,h),Hr=!1;var _=t.memoizedState;u.state=_,zu(t,r,u,s),d=t.memoizedState,c!==r||_!==d||Yt.current||Hr?(typeof v=="function"&&(bp(t,n,v,r),d=t.memoizedState),(c=Hr||$m(t,n,c,r,_,d,h))?(m||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),u.props=r,u.state=d,u.context=h,r=c):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Fx(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:Bn(t.type,c),u.props=h,m=t.pendingProps,_=u.context,d=n.contextType,typeof d=="object"&&d!==null?d=On(d):(d=Qt(n)?Fi:Lt.current,d=To(t,d));var j=n.getDerivedStateFromProps;(v=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==m||_!==d)&&Dm(t,u,r,d),Hr=!1,_=t.memoizedState,u.state=_,zu(t,r,u,s);var E=t.memoizedState;c!==m||_!==E||Yt.current||Hr?(typeof j=="function"&&(bp(t,n,j,r),E=t.memoizedState),(h=Hr||$m(t,n,h,r,_,E,d)||!1)?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,E,d),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,E,d)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),u.props=r,u.state=E,u.context=d,r=h):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return Op(e,t,n,r,l,s)}function Op(e,t,n,r,s,l){l2(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return s&&Rm(t,n,!1),Or(e,t,l);r=t.stateNode,ik.current=t;var c=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Lo(t,e.child,null,l),t.child=Lo(t,null,c,l)):Mt(e,t,c,l),t.memoizedState=r.state,s&&Rm(t,n,!0),t.child}function a2(e){var t=e.stateNode;t.pendingContext?Tm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tm(e,t.context,!1),zh(e,t.containerInfo)}function qm(e,t,n,r,s){return Ro(),jh(s),t.flags|=256,Mt(e,t,n,r),t.child}var Tp={dehydrated:null,treeContext:null,retryLane:0};function Rp(e){return{baseLanes:e,cachePool:null,transitions:null}}function u2(e,t,n){var r=t.pendingProps,s=Qe.current,l=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ie(Qe,s&1),e===null)return Cp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=r.children,e=r.fallback,l?(r=t.mode,l=t.child,u={mode:"hidden",children:u},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=u):l=gc(u,r,0,null),e=Li(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Rp(n),t.memoizedState=Tp,e):Bh(t,u));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return ok(e,t,u,r,c,s,n);if(l){l=r.fallback,u=t.mode,s=e.child,c=s.sibling;var d={mode:"hidden",children:r.children};return!(u&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=ri(s,d),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?l=ri(c,l):(l=Li(l,u,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,u=e.child.memoizedState,u=u===null?Rp(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=Tp,r}return l=e.child,e=l.sibling,r=ri(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bh(e,t){return t=gc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pa(e,t,n,r){return r!==null&&jh(r),Lo(t,e.child,null,n),e=Bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ok(e,t,n,r,s,l,u){if(n)return t.flags&256?(t.flags&=-257,r=jd(Error(G(422))),Pa(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=gc({mode:"visible",children:r.children},s,0,null),l=Li(l,s,u,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Lo(t,e.child,null,u),t.child.memoizedState=Rp(u),t.memoizedState=Tp,l);if(!(t.mode&1))return Pa(e,t,u,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(G(419)),r=jd(l,r,void 0),Pa(e,t,u,r)}if(c=(u&e.childLanes)!==0,qt||c){if(r=yt,r!==null){switch(u&-u){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|u)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,jr(e,s),Gn(r,e,s,-1))}return Kh(),r=jd(Error(G(421))),Pa(e,t,u,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=yk.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,un=Zr(s.nextSibling),cn=t,qe=!0,Hn=null,e!==null&&(bn[kn++]=Cr,bn[kn++]=Er,bn[kn++]=Ni,Cr=e.id,Er=e.overflow,Ni=t),t=Bh(t,r.children),t.flags|=4096,t)}function Km(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ep(e.return,t,n)}function Od(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function c2(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(Mt(e,t,r.children,n),r=Qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,n,t);else if(e.tag===19)Km(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Qe,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Fu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Od(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Fu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Od(t,!0,n,null,l);break;case"together":Od(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function iu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ii|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=ri(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ri(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sk(e,t,n){switch(t.tag){case 3:a2(t),Ro();break;case 5:Nx(t);break;case 1:Qt(t.type)&&Ou(t);break;case 4:zh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Ie(Lu,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?u2(e,t,n):(Ie(Qe,Qe.current&1),e=Or(e,t,n),e!==null?e.sibling:null);Ie(Qe,Qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c2(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(Qe,Qe.current),r)break;return null;case 22:case 23:return t.lanes=0,s2(e,t,n)}return Or(e,t,n)}var f2,Lp,d2,p2;f2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lp=function(){};d2=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,ji(lr.current);var l=null;switch(n){case"input":s=ep(e,s),r=ep(e,r),l=[];break;case"select":s=Ze({},s,{value:void 0}),r=Ze({},r,{value:void 0}),l=[];break;case"textarea":s=rp(e,s),r=rp(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pu)}op(n,r);var u;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var c=s[h];for(u in c)c.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(qs.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in r){var d=r[h];if(c=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&d!==c&&(d!=null||c!=null))if(h==="style")if(c){for(u in c)!c.hasOwnProperty(u)||d&&d.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in d)d.hasOwnProperty(u)&&c[u]!==d[u]&&(n||(n={}),n[u]=d[u])}else n||(l||(l=[]),l.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(l=l||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(qs.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&We("scroll",e),l||c===d||(l=[])):(l=l||[]).push(h,d))}n&&(l=l||[]).push("style",n);var h=l;(t.updateQueue=h)&&(t.flags|=4)}};p2=function(e,t,n,r){n!==r&&(t.flags|=4)};function Es(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lk(e,t,n){var r=t.pendingProps;switch(Ph(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(t),null;case 1:return Qt(t.type)&&ju(),Pt(t),null;case 3:return r=t.stateNode,Ao(),Ve(Yt),Ve(Lt),Nh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ba(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hn!==null&&(Dp(Hn),Hn=null))),Lp(e,t),Pt(t),null;case 5:Fh(t);var s=ji(ol.current);if(n=t.type,e!==null&&t.stateNode!=null)d2(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return Pt(t),null}if(e=ji(lr.current),ba(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[or]=t,r[rl]=l,e=(t.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(s=0;s<As.length;s++)We(As[s],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":rm(r,l),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},We("invalid",r);break;case"textarea":om(r,l),We("invalid",r)}op(n,l),s=null;for(var u in l)if(l.hasOwnProperty(u)){var c=l[u];u==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&Ea(r.textContent,c,e),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&Ea(r.textContent,c,e),s=["children",""+c]):qs.hasOwnProperty(u)&&c!=null&&u==="onScroll"&&We("scroll",r)}switch(n){case"input":ma(r),im(r,l,!0);break;case"textarea":ma(r),sm(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Pu)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[or]=t,e[rl]=r,f2(e,t,!1,!1),t.stateNode=e;e:{switch(u=sp(n,r),n){case"dialog":We("cancel",e),We("close",e),s=r;break;case"iframe":case"object":case"embed":We("load",e),s=r;break;case"video":case"audio":for(s=0;s<As.length;s++)We(As[s],e);s=r;break;case"source":We("error",e),s=r;break;case"img":case"image":case"link":We("error",e),We("load",e),s=r;break;case"details":We("toggle",e),s=r;break;case"input":rm(e,r),s=ep(e,r),We("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Ze({},r,{value:void 0}),We("invalid",e);break;case"textarea":om(e,r),s=rp(e,r),We("invalid",e);break;default:s=r}op(n,s),c=s;for(l in c)if(c.hasOwnProperty(l)){var d=c[l];l==="style"?Hy(e,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&By(e,d)):l==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Ks(e,d):typeof d=="number"&&Ks(e,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qs.hasOwnProperty(l)?d!=null&&l==="onScroll"&&We("scroll",e):d!=null&&dh(e,l,d,u))}switch(n){case"input":ma(e),im(e,r,!1);break;case"textarea":ma(e),sm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+li(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Co(e,!!r.multiple,l,!1):r.defaultValue!=null&&Co(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pt(t),null;case 6:if(e&&t.stateNode!=null)p2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=ji(ol.current),ji(lr.current),ba(t)){if(r=t.stateNode,n=t.memoizedProps,r[or]=t,(l=r.nodeValue!==n)&&(e=cn,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=t,t.stateNode=r}return Pt(t),null;case 13:if(Ve(Qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&un!==null&&t.mode&1&&!(t.flags&128))Rx(),Ro(),t.flags|=98560,l=!1;else if(l=ba(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(G(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(G(317));l[or]=t}else Ro(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pt(t),l=!1}else Hn!==null&&(Dp(Hn),Hn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?ht===0&&(ht=3):Kh())),t.updateQueue!==null&&(t.flags|=4),Pt(t),null);case 4:return Ao(),Lp(e,t),e===null&&tl(t.stateNode.containerInfo),Pt(t),null;case 10:return Rh(t.type._context),Pt(t),null;case 17:return Qt(t.type)&&ju(),Pt(t),null;case 19:if(Ve(Qe),l=t.memoizedState,l===null)return Pt(t),null;if(r=(t.flags&128)!==0,u=l.rendering,u===null)if(r)Es(l,!1);else{if(ht!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Fu(e),u!==null){for(t.flags|=128,Es(l,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Qe,Qe.current&1|2),t.child}e=e.sibling}l.tail!==null&&st()>Fo&&(t.flags|=128,r=!0,Es(l,!1),t.lanes=4194304)}else{if(!r)if(e=Fu(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Es(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!qe)return Pt(t),null}else 2*st()-l.renderingStartTime>Fo&&n!==1073741824&&(t.flags|=128,r=!0,Es(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=st(),t.sibling=null,n=Qe.current,Ie(Qe,r?n&1|2:n&1),t):(Pt(t),null);case 22:case 23:return qh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ln&1073741824&&(Pt(t),t.subtreeFlags&6&&(t.flags|=8192)):Pt(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function ak(e,t){switch(Ph(t),t.tag){case 1:return Qt(t.type)&&ju(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ao(),Ve(Yt),Ve(Lt),Nh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fh(t),null;case 13:if(Ve(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ve(Qe),null;case 4:return Ao(),null;case 10:return Rh(t.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var ja=!1,Ot=!1,uk=typeof WeakSet=="function"?WeakSet:Set,te=null;function xo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function Ap(e,t,n){try{n()}catch(r){nt(e,t,r)}}var Ym=!1;function ck(e,t){if(mp=Eu,e=yx(),bh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,c=-1,d=-1,h=0,v=0,m=e,_=null;t:for(;;){for(var j;m!==n||s!==0&&m.nodeType!==3||(c=u+s),m!==l||r!==0&&m.nodeType!==3||(d=u+r),m.nodeType===3&&(u+=m.nodeValue.length),(j=m.firstChild)!==null;)_=m,m=j;for(;;){if(m===e)break t;if(_===n&&++h===s&&(c=u),_===l&&++v===r&&(d=u),(j=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=j}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(vp={focusedElem:e,selectionRange:n},Eu=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var P=E.memoizedProps,R=E.memoizedState,S=t.stateNode,x=S.getSnapshotBeforeUpdate(t.elementType===t.type?P:Bn(t.type,P),R);S.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(z){nt(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return E=Ym,Ym=!1,E}function Bs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&Ap(t,n,l)}s=s.next}while(s!==r)}}function pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h2(e){var t=e.alternate;t!==null&&(e.alternate=null,h2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[or],delete t[rl],delete t[wp],delete t[Gb],delete t[qb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function g2(e){return e.tag===5||e.tag===3||e.tag===4}function Qm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||g2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pu));else if(r!==4&&(e=e.child,e!==null))for(Fp(e,t,n),e=e.sibling;e!==null;)Fp(e,t,n),e=e.sibling}function Np(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Np(e,t,n),e=e.sibling;e!==null;)Np(e,t,n),e=e.sibling}var St=null,Wn=!1;function Ur(e,t,n){for(n=n.child;n!==null;)m2(e,t,n),n=n.sibling}function m2(e,t,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:Ot||xo(n,t);case 6:var r=St,s=Wn;St=null,Ur(e,t,n),St=r,Wn=s,St!==null&&(Wn?(e=St,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(Wn?(e=St,n=n.stateNode,e.nodeType===8?_d(e.parentNode,n):e.nodeType===1&&_d(e,n),Xs(e)):_d(St,n.stateNode));break;case 4:r=St,s=Wn,St=n.stateNode.containerInfo,Wn=!0,Ur(e,t,n),St=r,Wn=s;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,u=l.destroy;l=l.tag,u!==void 0&&(l&2||l&4)&&Ap(n,t,u),s=s.next}while(s!==r)}Ur(e,t,n);break;case 1:if(!Ot&&(xo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){nt(n,t,c)}Ur(e,t,n);break;case 21:Ur(e,t,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Ur(e,t,n),Ot=r):Ur(e,t,n);break;default:Ur(e,t,n)}}function Jm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uk),t.forEach(function(r){var s=xk.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 5:St=c.stateNode,Wn=!1;break e;case 3:St=c.stateNode.containerInfo,Wn=!0;break e;case 4:St=c.stateNode.containerInfo,Wn=!0;break e}c=c.return}if(St===null)throw Error(G(160));m2(l,u,s),St=null,Wn=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(h){nt(s,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)v2(t,e),t=t.sibling}function v2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mn(t,e),tr(e),r&4){try{Bs(3,e,e.return),pc(3,e)}catch(P){nt(e,e.return,P)}try{Bs(5,e,e.return)}catch(P){nt(e,e.return,P)}}break;case 1:Mn(t,e),tr(e),r&512&&n!==null&&xo(n,n.return);break;case 5:if(Mn(t,e),tr(e),r&512&&n!==null&&xo(n,n.return),e.flags&32){var s=e.stateNode;try{Ks(s,"")}catch(P){nt(e,e.return,P)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&$y(s,l),sp(c,u);var h=sp(c,l);for(u=0;u<d.length;u+=2){var v=d[u],m=d[u+1];v==="style"?Hy(s,m):v==="dangerouslySetInnerHTML"?By(s,m):v==="children"?Ks(s,m):dh(s,v,m,h)}switch(c){case"input":tp(s,l);break;case"textarea":Dy(s,l);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?Co(s,!!l.multiple,j,!1):_!==!!l.multiple&&(l.defaultValue!=null?Co(s,!!l.multiple,l.defaultValue,!0):Co(s,!!l.multiple,l.multiple?[]:"",!1))}s[rl]=l}catch(P){nt(e,e.return,P)}}break;case 6:if(Mn(t,e),tr(e),r&4){if(e.stateNode===null)throw Error(G(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(P){nt(e,e.return,P)}}break;case 3:if(Mn(t,e),tr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(t.containerInfo)}catch(P){nt(e,e.return,P)}break;case 4:Mn(t,e),tr(e);break;case 13:Mn(t,e),tr(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Vh=st())),r&4&&Jm(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ot=(h=Ot)||v,Mn(t,e),Ot=h):Mn(t,e),tr(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!v&&e.mode&1)for(te=e,v=e.child;v!==null;){for(m=te=v;te!==null;){switch(_=te,j=_.child,_.tag){case 0:case 11:case 14:case 15:Bs(4,_,_.return);break;case 1:xo(_,_.return);var E=_.stateNode;if(typeof E.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(P){nt(r,n,P)}}break;case 5:xo(_,_.return);break;case 22:if(_.memoizedState!==null){Zm(m);continue}}j!==null?(j.return=_,te=j):Zm(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{s=m.stateNode,h?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=m.stateNode,d=m.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Wy("display",u))}catch(P){nt(e,e.return,P)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){nt(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mn(t,e),tr(e),r&4&&Jm(e);break;case 21:break;default:Mn(t,e),tr(e)}}function tr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(g2(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ks(s,""),r.flags&=-33);var l=Qm(e);Np(e,l,s);break;case 3:case 4:var u=r.stateNode.containerInfo,c=Qm(e);Fp(e,c,u);break;default:throw Error(G(161))}}catch(d){nt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fk(e,t,n){te=e,y2(e)}function y2(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var s=te,l=s.child;if(s.tag===22&&r){var u=s.memoizedState!==null||ja;if(!u){var c=s.alternate,d=c!==null&&c.memoizedState!==null||Ot;c=ja;var h=Ot;if(ja=u,(Ot=d)&&!h)for(te=s;te!==null;)u=te,d=u.child,u.tag===22&&u.memoizedState!==null?ev(s):d!==null?(d.return=u,te=d):ev(s);for(;l!==null;)te=l,y2(l),l=l.sibling;te=s,ja=c,Ot=h}Xm(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,te=l):Xm(e)}}function Xm(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ot||pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Bn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Nm(t,l,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nm(t,u,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Xs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Ot||t.flags&512&&zp(t)}catch(_){nt(t,t.return,_)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function Zm(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function ev(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pc(4,t)}catch(d){nt(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(d){nt(t,s,d)}}var l=t.return;try{zp(t)}catch(d){nt(t,l,d)}break;case 5:var u=t.return;try{zp(t)}catch(d){nt(t,u,d)}}}catch(d){nt(t,t.return,d)}if(t===e){te=null;break}var c=t.sibling;if(c!==null){c.return=t.return,te=c;break}te=t.return}}var dk=Math.ceil,Iu=Tr.ReactCurrentDispatcher,Wh=Tr.ReactCurrentOwner,jn=Tr.ReactCurrentBatchConfig,Ee=0,yt=null,ut=null,_t=0,ln=0,wo=ci(0),ht=0,ul=null,Ii=0,hc=0,Hh=0,Ws=null,Gt=null,Vh=0,Fo=1/0,wr=null,$u=!1,Mp=null,ti=null,Oa=!1,Kr=null,Du=0,Hs=0,Ip=null,ou=-1,su=0;function It(){return Ee&6?st():ou!==-1?ou:ou=st()}function ni(e){return e.mode&1?Ee&2&&_t!==0?_t&-_t:Yb.transition!==null?(su===0&&(su=nx()),su):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:ux(e.type)),e):1}function Gn(e,t,n,r){if(50<Hs)throw Hs=0,Ip=null,Error(G(185));yl(e,n,r),(!(Ee&2)||e!==yt)&&(e===yt&&(!(Ee&2)&&(hc|=n),ht===4&&Gr(e,_t)),Jt(e,r),n===1&&Ee===0&&!(t.mode&1)&&(Fo=st()+500,cc&&fi()))}function Jt(e,t){var n=e.callbackNode;YE(e,t);var r=Cu(e,e===yt?_t:0);if(r===0)n!==null&&um(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&um(n),t===1)e.tag===0?Kb(tv.bind(null,e)):jx(tv.bind(null,e)),Hb(function(){!(Ee&6)&&fi()}),n=null;else{switch(rx(r)){case 1:n=vh;break;case 4:n=ex;break;case 16:n=_u;break;case 536870912:n=tx;break;default:n=_u}n=k2(n,x2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function x2(e,t){if(ou=-1,su=0,Ee&6)throw Error(G(327));var n=e.callbackNode;if(jo()&&e.callbackNode!==n)return null;var r=Cu(e,e===yt?_t:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uu(e,r);else{t=r;var s=Ee;Ee|=2;var l=S2();(yt!==e||_t!==t)&&(wr=null,Fo=st()+500,Ri(e,t));do try{gk();break}catch(c){w2(e,c)}while(1);Th(),Iu.current=l,Ee=s,ut!==null?t=0:(yt=null,_t=0,t=ht)}if(t!==0){if(t===2&&(s=fp(e),s!==0&&(r=s,t=$p(e,s))),t===1)throw n=ul,Ri(e,0),Gr(e,r),Jt(e,st()),n;if(t===6)Gr(e,r);else{if(s=e.current.alternate,!(r&30)&&!pk(s)&&(t=Uu(e,r),t===2&&(l=fp(e),l!==0&&(r=l,t=$p(e,l))),t===1))throw n=ul,Ri(e,0),Gr(e,r),Jt(e,st()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Ei(e,Gt,wr);break;case 3:if(Gr(e,r),(r&130023424)===r&&(t=Vh+500-st(),10<t)){if(Cu(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){It(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xp(Ei.bind(null,e,Gt,wr),t);break}Ei(e,Gt,wr);break;case 4:if(Gr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var u=31-Vn(r);l=1<<u,u=t[u],u>s&&(s=u),r&=~l}if(r=s,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dk(r/1960))-r,10<r){e.timeoutHandle=xp(Ei.bind(null,e,Gt,wr),r);break}Ei(e,Gt,wr);break;case 5:Ei(e,Gt,wr);break;default:throw Error(G(329))}}}return Jt(e,st()),e.callbackNode===n?x2.bind(null,e):null}function $p(e,t){var n=Ws;return e.current.memoizedState.isDehydrated&&(Ri(e,t).flags|=256),e=Uu(e,t),e!==2&&(t=Gt,Gt=n,t!==null&&Dp(t)),e}function Dp(e){Gt===null?Gt=e:Gt.push.apply(Gt,e)}function pk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!Yn(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gr(e,t){for(t&=~Hh,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vn(t),r=1<<n;e[n]=-1,t&=~r}}function tv(e){if(Ee&6)throw Error(G(327));jo();var t=Cu(e,0);if(!(t&1))return Jt(e,st()),null;var n=Uu(e,t);if(e.tag!==0&&n===2){var r=fp(e);r!==0&&(t=r,n=$p(e,r))}if(n===1)throw n=ul,Ri(e,0),Gr(e,t),Jt(e,st()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ei(e,Gt,wr),Jt(e,st()),null}function Gh(e,t){var n=Ee;Ee|=1;try{return e(t)}finally{Ee=n,Ee===0&&(Fo=st()+500,cc&&fi())}}function $i(e){Kr!==null&&Kr.tag===0&&!(Ee&6)&&jo();var t=Ee;Ee|=1;var n=jn.transition,r=Ae;try{if(jn.transition=null,Ae=1,e)return e()}finally{Ae=r,jn.transition=n,Ee=t,!(Ee&6)&&fi()}}function qh(){ln=wo.current,Ve(wo)}function Ri(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wb(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(Ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Ao(),Ve(Yt),Ve(Lt),Nh();break;case 5:Fh(r);break;case 4:Ao();break;case 13:Ve(Qe);break;case 19:Ve(Qe);break;case 10:Rh(r.type._context);break;case 22:case 23:qh()}n=n.return}if(yt=e,ut=e=ri(e.current,null),_t=ln=t,ht=0,ul=null,Hh=hc=Ii=0,Gt=Ws=null,Pi!==null){for(t=0;t<Pi.length;t++)if(n=Pi[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var u=l.next;l.next=s,r.next=u}n.pending=r}Pi=null}return e}function w2(e,t){do{var n=ut;try{if(Th(),nu.current=Mu,Nu){for(var r=Je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Nu=!1}if(Mi=0,mt=pt=Je=null,Us=!1,sl=0,Wh.current=null,n===null||n.return===null){ht=1,ul=t,ut=null;break}e:{var l=e,u=n.return,c=n,d=t;if(t=_t,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,v=c,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var _=v.alternate;_?(v.updateQueue=_.updateQueue,v.memoizedState=_.memoizedState,v.lanes=_.lanes):(v.updateQueue=null,v.memoizedState=null)}var j=Bm(u);if(j!==null){j.flags&=-257,Wm(j,u,c,l,t),j.mode&1&&Um(l,h,t),t=j,d=h;var E=t.updateQueue;if(E===null){var P=new Set;P.add(d),t.updateQueue=P}else E.add(d);break e}else{if(!(t&1)){Um(l,h,t),Kh();break e}d=Error(G(426))}}else if(qe&&c.mode&1){var R=Bm(u);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Wm(R,u,c,l,t),jh(zo(d,c));break e}}l=d=zo(d,c),ht!==4&&(ht=2),Ws===null?Ws=[l]:Ws.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var S=r2(l,d,t);Fm(l,S);break e;case 1:c=d;var x=l.type,C=l.stateNode;if(!(l.flags&128)&&(typeof x.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ti===null||!ti.has(C)))){l.flags|=65536,t&=-t,l.lanes|=t;var z=i2(l,c,t);Fm(l,z);break e}}l=l.return}while(l!==null)}C2(n)}catch(F){t=F,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function S2(){var e=Iu.current;return Iu.current=Mu,e===null?Mu:e}function Kh(){(ht===0||ht===3||ht===2)&&(ht=4),yt===null||!(Ii&268435455)&&!(hc&268435455)||Gr(yt,_t)}function Uu(e,t){var n=Ee;Ee|=2;var r=S2();(yt!==e||_t!==t)&&(wr=null,Ri(e,t));do try{hk();break}catch(s){w2(e,s)}while(1);if(Th(),Ee=n,Iu.current=r,ut!==null)throw Error(G(261));return yt=null,_t=0,ht}function hk(){for(;ut!==null;)_2(ut)}function gk(){for(;ut!==null&&!DE();)_2(ut)}function _2(e){var t=b2(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?C2(e):ut=t,Wh.current=null}function C2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ak(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ht=6,ut=null;return}}else if(n=lk(n,t,ln),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);ht===0&&(ht=5)}function Ei(e,t,n){var r=Ae,s=jn.transition;try{jn.transition=null,Ae=1,mk(e,t,n,r)}finally{jn.transition=s,Ae=r}return null}function mk(e,t,n,r){do jo();while(Kr!==null);if(Ee&6)throw Error(G(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(QE(e,l),e===yt&&(ut=yt=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,k2(_u,function(){return jo(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=jn.transition,jn.transition=null;var u=Ae;Ae=1;var c=Ee;Ee|=4,Wh.current=null,ck(e,n),v2(n,e),Nb(vp),Eu=!!mp,vp=mp=null,e.current=n,fk(n),UE(),Ee=c,Ae=u,jn.transition=l}else e.current=n;if(Oa&&(Oa=!1,Kr=e,Du=s),l=e.pendingLanes,l===0&&(ti=null),HE(n.stateNode),Jt(e,st()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if($u)throw $u=!1,e=Mp,Mp=null,e;return Du&1&&e.tag!==0&&jo(),l=e.pendingLanes,l&1?e===Ip?Hs++:(Hs=0,Ip=e):Hs=0,fi(),null}function jo(){if(Kr!==null){var e=rx(Du),t=jn.transition,n=Ae;try{if(jn.transition=null,Ae=16>e?16:e,Kr===null)var r=!1;else{if(e=Kr,Kr=null,Du=0,Ee&6)throw Error(G(331));var s=Ee;for(Ee|=4,te=e.current;te!==null;){var l=te,u=l.child;if(te.flags&16){var c=l.deletions;if(c!==null){for(var d=0;d<c.length;d++){var h=c[d];for(te=h;te!==null;){var v=te;switch(v.tag){case 0:case 11:case 15:Bs(8,v,l)}var m=v.child;if(m!==null)m.return=v,te=m;else for(;te!==null;){v=te;var _=v.sibling,j=v.return;if(h2(v),v===h){te=null;break}if(_!==null){_.return=j,te=_;break}te=j}}}var E=l.alternate;if(E!==null){var P=E.child;if(P!==null){E.child=null;do{var R=P.sibling;P.sibling=null,P=R}while(P!==null)}}te=l}}if(l.subtreeFlags&2064&&u!==null)u.return=l,te=u;else e:for(;te!==null;){if(l=te,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Bs(9,l,l.return)}var S=l.sibling;if(S!==null){S.return=l.return,te=S;break e}te=l.return}}var x=e.current;for(te=x;te!==null;){u=te;var C=u.child;if(u.subtreeFlags&2064&&C!==null)C.return=u,te=C;else e:for(u=x;te!==null;){if(c=te,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:pc(9,c)}}catch(F){nt(c,c.return,F)}if(c===u){te=null;break e}var z=c.sibling;if(z!==null){z.return=c.return,te=z;break e}te=c.return}}if(Ee=s,fi(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(oc,e)}catch{}r=!0}return r}finally{Ae=n,jn.transition=t}}return!1}function nv(e,t,n){t=zo(n,t),t=r2(e,t,1),e=ei(e,t,1),t=It(),e!==null&&(yl(e,1,t),Jt(e,t))}function nt(e,t,n){if(e.tag===3)nv(e,e,n);else for(;t!==null;){if(t.tag===3){nv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){e=zo(n,e),e=i2(t,e,1),t=ei(t,e,1),e=It(),t!==null&&(yl(t,1,e),Jt(t,e));break}}t=t.return}}function vk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=It(),e.pingedLanes|=e.suspendedLanes&n,yt===e&&(_t&n)===n&&(ht===4||ht===3&&(_t&130023424)===_t&&500>st()-Vh?Ri(e,0):Hh|=n),Jt(e,t)}function E2(e,t){t===0&&(e.mode&1?(t=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):t=1);var n=It();e=jr(e,t),e!==null&&(yl(e,t,n),Jt(e,n))}function yk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),E2(e,n)}function xk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),E2(e,n)}var b2;b2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Yt.current)qt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qt=!1,sk(e,t,n);qt=!!(e.flags&131072)}else qt=!1,qe&&t.flags&1048576&&Ox(t,Ru,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;iu(e,t),e=t.pendingProps;var s=To(t,Lt.current);Po(t,n),s=Ih(null,t,r,e,s,n);var l=$h();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(r)?(l=!0,Ou(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ah(t),s.updater=dc,t.stateNode=s,s._reactInternals=t,kp(t,r,e,n),t=Op(null,t,r,!0,l,n)):(t.tag=0,qe&&l&&kh(t),Mt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(iu(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Sk(r),e=Bn(r,e),s){case 0:t=jp(null,t,r,e,n);break e;case 1:t=Gm(null,t,r,e,n);break e;case 11:t=Hm(null,t,r,e,n);break e;case 14:t=Vm(null,t,r,Bn(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Bn(r,s),jp(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Bn(r,s),Gm(e,t,r,s,n);case 3:e:{if(a2(t),e===null)throw Error(G(387));r=t.pendingProps,l=t.memoizedState,s=l.element,Fx(e,t),zu(t,r,null,n);var u=t.memoizedState;if(r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=zo(Error(G(423)),t),t=qm(e,t,r,n,s);break e}else if(r!==s){s=zo(Error(G(424)),t),t=qm(e,t,r,n,s);break e}else for(un=Zr(t.stateNode.containerInfo.firstChild),cn=t,qe=!0,Hn=null,n=Ax(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ro(),r===s){t=Or(e,t,n);break e}Mt(e,t,r,n)}t=t.child}return t;case 5:return Nx(t),e===null&&Cp(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,u=s.children,yp(r,s)?u=null:l!==null&&yp(r,l)&&(t.flags|=32),l2(e,t),Mt(e,t,u,n),t.child;case 6:return e===null&&Cp(t),null;case 13:return u2(e,t,n);case 4:return zh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lo(t,null,r,n):Mt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Bn(r,s),Hm(e,t,r,s,n);case 7:return Mt(e,t,t.pendingProps,n),t.child;case 8:return Mt(e,t,t.pendingProps.children,n),t.child;case 12:return Mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,u=s.value,Ie(Lu,r._currentValue),r._currentValue=u,l!==null)if(Yn(l.value,u)){if(l.children===s.children&&!Yt.current){t=Or(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){u=l.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(l.tag===1){d=br(-1,n&-n),d.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?d.next=d:(d.next=v.next,v.next=d),h.pending=d}}l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),Ep(l.return,n,t),c.lanes|=n;break}d=d.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(G(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),Ep(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}Mt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Po(t,n),s=On(s),r=r(s),t.flags|=1,Mt(e,t,r,n),t.child;case 14:return r=t.type,s=Bn(r,t.pendingProps),s=Bn(r.type,s),Vm(e,t,r,s,n);case 15:return o2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Bn(r,s),iu(e,t),t.tag=1,Qt(r)?(e=!0,Ou(t)):e=!1,Po(t,n),n2(t,r,s),kp(t,r,s,n),Op(null,t,r,!0,e,n);case 19:return c2(e,t,n);case 22:return s2(e,t,n)}throw Error(G(156,t.tag))};function k2(e,t){return Zy(e,t)}function wk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,r){return new wk(e,t,n,r)}function Yh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sk(e){if(typeof e=="function")return Yh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hh)return 11;if(e===gh)return 14}return 2}function ri(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lu(e,t,n,r,s,l){var u=2;if(r=e,typeof e=="function")Yh(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case uo:return Li(n.children,s,l,t);case ph:u=8,s|=8;break;case Qd:return e=Pn(12,n,t,s|2),e.elementType=Qd,e.lanes=l,e;case Jd:return e=Pn(13,n,t,s),e.elementType=Jd,e.lanes=l,e;case Xd:return e=Pn(19,n,t,s),e.elementType=Xd,e.lanes=l,e;case Ny:return gc(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zy:u=10;break e;case Fy:u=9;break e;case hh:u=11;break e;case gh:u=14;break e;case Wr:u=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Pn(u,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function Li(e,t,n,r){return e=Pn(7,e,r,t),e.lanes=n,e}function gc(e,t,n,r){return e=Pn(22,e,r,t),e.elementType=Ny,e.lanes=n,e.stateNode={isHidden:!1},e}function Td(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function Rd(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _k(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qh(e,t,n,r,s,l,u,c,d){return e=new _k(e,t,n,c,d),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Pn(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ah(l),e}function Ck(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function P2(e){if(!e)return ai;e=e._reactInternals;e:{if(Bi(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Qt(n))return Px(e,n,t)}return t}function j2(e,t,n,r,s,l,u,c,d){return e=Qh(n,r,!0,e,s,l,u,c,d),e.context=P2(null),n=e.current,r=It(),s=ni(n),l=br(r,s),l.callback=t??null,ei(n,l,s),e.current.lanes=s,yl(e,s,r),Jt(e,r),e}function mc(e,t,n,r){var s=t.current,l=It(),u=ni(s);return n=P2(n),t.context===null?t.context=n:t.pendingContext=n,t=br(l,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ei(s,t,u),e!==null&&(Gn(e,s,u,l),tu(e,s,u)),u}function Bu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jh(e,t){rv(e,t),(e=e.alternate)&&rv(e,t)}function Ek(){return null}var O2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xh(e){this._internalRoot=e}vc.prototype.render=Xh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));mc(e,t,null,null)};vc.prototype.unmount=Xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$i(function(){mc(null,e,null,null)}),t[Pr]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=sx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vr.length&&t!==0&&t<Vr[n].priority;n++);Vr.splice(n,0,e),n===0&&ax(e)}};function Zh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iv(){}function bk(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var h=Bu(u);l.call(h)}}var u=j2(t,r,e,0,null,!1,!1,"",iv);return e._reactRootContainer=u,e[Pr]=u.current,tl(e.nodeType===8?e.parentNode:e),$i(),u}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var h=Bu(d);c.call(h)}}var d=Qh(e,0,!1,null,null,!1,!1,"",iv);return e._reactRootContainer=d,e[Pr]=d.current,tl(e.nodeType===8?e.parentNode:e),$i(function(){mc(t,d,n,r)}),d}function xc(e,t,n,r,s){var l=n._reactRootContainer;if(l){var u=l;if(typeof s=="function"){var c=s;s=function(){var d=Bu(u);c.call(d)}}mc(t,u,e,s)}else u=bk(n,t,e,s,r);return Bu(u)}ix=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ls(t.pendingLanes);n!==0&&(yh(t,n|1),Jt(t,st()),!(Ee&6)&&(Fo=st()+500,fi()))}break;case 13:$i(function(){var r=jr(e,1);if(r!==null){var s=It();Gn(r,e,1,s)}}),Jh(e,1)}};xh=function(e){if(e.tag===13){var t=jr(e,134217728);if(t!==null){var n=It();Gn(t,e,134217728,n)}Jh(e,134217728)}};ox=function(e){if(e.tag===13){var t=ni(e),n=jr(e,t);if(n!==null){var r=It();Gn(n,e,t,r)}Jh(e,t)}};sx=function(){return Ae};lx=function(e,t){var n=Ae;try{return Ae=e,t()}finally{Ae=n}};ap=function(e,t,n){switch(t){case"input":if(tp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=uc(r);if(!s)throw Error(G(90));Iy(r),tp(r,s)}}}break;case"textarea":Dy(e,n);break;case"select":t=n.value,t!=null&&Co(e,!!n.multiple,t,!1)}};qy=Gh;Ky=$i;var kk={usingClientEntryPoint:!1,Events:[wl,ho,uc,Vy,Gy,Gh]},bs={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pk={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jy(e),e===null?null:e.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||Ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{oc=Ta.inject(Pk),sr=Ta}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kk;pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(t))throw Error(G(200));return Ck(e,t,null,n)};pn.createRoot=function(e,t){if(!Zh(e))throw Error(G(299));var n=!1,r="",s=O2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Qh(e,1,!1,null,null,n,!1,r,s),e[Pr]=t.current,tl(e.nodeType===8?e.parentNode:e),new Xh(t)};pn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Jy(t),e=e===null?null:e.stateNode,e};pn.flushSync=function(e){return $i(e)};pn.hydrate=function(e,t,n){if(!yc(t))throw Error(G(200));return xc(null,e,t,!0,n)};pn.hydrateRoot=function(e,t,n){if(!Zh(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",u=O2;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=j2(t,null,e,1,n??null,s,!1,l,u),e[Pr]=t.current,tl(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new vc(t)};pn.render=function(e,t,n){if(!yc(t))throw Error(G(200));return xc(null,e,t,!1,n)};pn.unmountComponentAtNode=function(e){if(!yc(e))throw Error(G(40));return e._reactRootContainer?($i(function(){xc(null,null,e,!1,function(){e._reactRootContainer=null,e[Pr]=null})}),!0):!1};pn.unstable_batchedUpdates=Gh;pn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yc(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return xc(e,t,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function T2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T2)}catch(e){console.error(e)}}T2(),Ty.exports=pn;var jk=Ty.exports,ov=jk;Kd.createRoot=ov.createRoot,Kd.hydrateRoot=ov.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cl.apply(this,arguments)}var Yr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yr||(Yr={}));const sv="popstate";function Ok(e){e===void 0&&(e={});function t(r,s){let{pathname:l,search:u,hash:c}=r.location;return Up("",{pathname:l,search:u,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Wu(s)}return Rk(t,n,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function R2(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tk(){return Math.random().toString(36).substr(2,8)}function lv(e,t){return{usr:e.state,key:e.key,idx:t}}function Up(e,t,n,r){return n===void 0&&(n=null),cl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vo(t):t,{state:n,key:t&&t.key||r||Tk()})}function Wu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Rk(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:l=!1}=r,u=s.history,c=Yr.Pop,d=null,h=v();h==null&&(h=0,u.replaceState(cl({},u.state,{idx:h}),""));function v(){return(u.state||{idx:null}).idx}function m(){c=Yr.Pop;let R=v(),S=R==null?null:R-h;h=R,d&&d({action:c,location:P.location,delta:S})}function _(R,S){c=Yr.Push;let x=Up(P.location,R,S);n&&n(x,R),h=v()+1;let C=lv(x,h),z=P.createHref(x);try{u.pushState(C,"",z)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(z)}l&&d&&d({action:c,location:P.location,delta:1})}function j(R,S){c=Yr.Replace;let x=Up(P.location,R,S);n&&n(x,R),h=v();let C=lv(x,h),z=P.createHref(x);u.replaceState(C,"",z),l&&d&&d({action:c,location:P.location,delta:0})}function E(R){let S=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof R=="string"?R:Wu(R);return x=x.replace(/ $/,"%20"),Xe(S,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,S)}let P={get action(){return c},get location(){return e(s,u)},listen(R){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(sv,m),d=R,()=>{s.removeEventListener(sv,m),d=null}},createHref(R){return t(s,R)},createURL:E,encodeLocation(R){let S=E(R);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:_,replace:j,go(R){return u.go(R)}};return P}var av;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(av||(av={}));function Lk(e,t,n){return n===void 0&&(n="/"),Ak(e,t,n,!1)}function Ak(e,t,n,r){let s=typeof t=="string"?Vo(t):t,l=No(s.pathname||"/",n);if(l==null)return null;let u=L2(e);zk(u);let c=null;for(let d=0;c==null&&d<u.length;++d){let h=Vk(l);c=Wk(u[d],h,r)}return c}function L2(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(l,u,c)=>{let d={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};d.relativePath.startsWith("/")&&(Xe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let h=ii([r,d.relativePath]),v=n.concat(d);l.children&&l.children.length>0&&(Xe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),L2(l.children,t,v,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:Uk(h,l.index),routesMeta:v})};return e.forEach((l,u)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,u);else for(let d of A2(l.path))s(l,u,d)}),t}function A2(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return s?[l,""]:[l];let u=A2(r.join("/")),c=[];return c.push(...u.map(d=>d===""?l:[l,d].join("/"))),s&&c.push(...u),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function zk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fk=/^:[\w-]+$/,Nk=3,Mk=2,Ik=1,$k=10,Dk=-2,uv=e=>e==="*";function Uk(e,t){let n=e.split("/"),r=n.length;return n.some(uv)&&(r+=Dk),t&&(r+=Mk),n.filter(s=>!uv(s)).reduce((s,l)=>s+(Fk.test(l)?Nk:l===""?Ik:$k),r)}function Bk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Wk(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,s={},l="/",u=[];for(let c=0;c<r.length;++c){let d=r[c],h=c===r.length-1,v=l==="/"?t:t.slice(l.length)||"/",m=Hu({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},v),_=d.route;if(!m&&h&&n&&!r[r.length-1].route.index&&(m=Hu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},v)),!m)return null;Object.assign(s,m.params),u.push({params:s,pathname:ii([l,m.pathname]),pathnameBase:Yk(ii([l,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(l=ii([l,m.pathnameBase]))}return u}function Hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hk(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],u=l.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((h,v,m)=>{let{paramName:_,isOptional:j}=v;if(_==="*"){let P=c[m]||"";u=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const E=c[m];return j&&!E?h[_]=void 0:h[_]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function Hk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),R2(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Vk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return R2(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function No(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Gk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Vo(e):e;return{pathname:n?n.startsWith("/")?n:qk(n,t):t,search:Qk(r),hash:Jk(s)}}function qk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ld(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function eg(e,t){let n=Kk(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function tg(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Vo(e):(s=cl({},e),Xe(!s.pathname||!s.pathname.includes("?"),Ld("?","pathname","search",s)),Xe(!s.pathname||!s.pathname.includes("#"),Ld("#","pathname","hash",s)),Xe(!s.search||!s.search.includes("#"),Ld("#","search","hash",s)));let l=e===""||s.pathname==="",u=l?"/":s.pathname,c;if(u==null)c=n;else{let m=t.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),m-=1;s.pathname=_.join("/")}c=m>=0?t[m]:"/"}let d=Gk(s,c),h=u&&u!=="/"&&u.endsWith("/"),v=(l||u===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||v)&&(d.pathname+="/"),d}const ii=e=>e.join("/").replace(/\/\/+/g,"/"),Yk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const z2=["post","put","patch","delete"];new Set(z2);const Zk=["get",...z2];new Set(Zk);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fl.apply(this,arguments)}const wc=O.createContext(null),F2=O.createContext(null),Rr=O.createContext(null),Sc=O.createContext(null),ar=O.createContext({outlet:null,matches:[],isDataRoute:!1}),N2=O.createContext(null);function e7(e,t){let{relative:n}=t===void 0?{}:t;Go()||Xe(!1);let{basename:r,navigator:s}=O.useContext(Rr),{hash:l,pathname:u,search:c}=_c(e,{relative:n}),d=u;return r!=="/"&&(d=u==="/"?r:ii([r,u])),s.createHref({pathname:d,search:c,hash:l})}function Go(){return O.useContext(Sc)!=null}function Wi(){return Go()||Xe(!1),O.useContext(Sc).location}function M2(e){O.useContext(Rr).static||O.useLayoutEffect(e)}function di(){let{isDataRoute:e}=O.useContext(ar);return e?m7():t7()}function t7(){Go()||Xe(!1);let e=O.useContext(wc),{basename:t,future:n,navigator:r}=O.useContext(Rr),{matches:s}=O.useContext(ar),{pathname:l}=Wi(),u=JSON.stringify(eg(s,n.v7_relativeSplatPath)),c=O.useRef(!1);return M2(()=>{c.current=!0}),O.useCallback(function(h,v){if(v===void 0&&(v={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=tg(h,JSON.parse(u),l,v.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ii([t,m.pathname])),(v.replace?r.replace:r.push)(m,v.state,v)},[t,r,u,l,e])}const n7=O.createContext(null);function r7(e){let t=O.useContext(ar).outlet;return t&&O.createElement(n7.Provider,{value:e},t)}function i7(){let{matches:e}=O.useContext(ar),t=e[e.length-1];return t?t.params:{}}function _c(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.useContext(Rr),{matches:s}=O.useContext(ar),{pathname:l}=Wi(),u=JSON.stringify(eg(s,r.v7_relativeSplatPath));return O.useMemo(()=>tg(e,JSON.parse(u),l,n==="path"),[e,u,l,n])}function o7(e,t){return s7(e,t)}function s7(e,t,n,r){Go()||Xe(!1);let{navigator:s,static:l}=O.useContext(Rr),{matches:u}=O.useContext(ar),c=u[u.length-1],d=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let v=Wi(),m;if(t){var _;let S=typeof t=="string"?Vo(t):t;h==="/"||(_=S.pathname)!=null&&_.startsWith(h)||Xe(!1),m=S}else m=v;let j=m.pathname||"/",E=j;if(h!=="/"){let S=h.replace(/^\//,"").split("/");E="/"+j.replace(/^\//,"").split("/").slice(S.length).join("/")}let P=!l&&n&&n.matches&&n.matches.length>0?n.matches:Lk(e,{pathname:E}),R=f7(P&&P.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:ii([h,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:ii([h,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),u,n,r);return t&&R?O.createElement(Sc.Provider,{value:{location:fl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Yr.Pop}},R):R}function l7(){let e=g7(),t=Xk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:s},n):null,l)}const a7=O.createElement(l7,null);class u7 extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(ar.Provider,{value:this.props.routeContext},O.createElement(N2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c7(e){let{routeContext:t,match:n,children:r}=e,s=O.useContext(wc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(ar.Provider,{value:t},r)}function f7(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let u=e,c=(s=n)==null?void 0:s.errors;if(c!=null){let v=u.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);v>=0||Xe(!1),u=u.slice(0,Math.min(u.length,v+1))}let d=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let m=u[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=v),m.route.id){let{loaderData:_,errors:j}=n,E=m.route.loader&&_[m.route.id]===void 0&&(!j||j[m.route.id]===void 0);if(m.route.lazy||E){d=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((v,m,_)=>{let j,E=!1,P=null,R=null;n&&(j=c&&m.route.id?c[m.route.id]:void 0,P=m.route.errorElement||a7,d&&(h<0&&_===0?(v7("route-fallback",!1),E=!0,R=null):h===_&&(E=!0,R=m.route.hydrateFallbackElement||null)));let S=t.concat(u.slice(0,_+1)),x=()=>{let C;return j?C=P:E?C=R:m.route.Component?C=O.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=v,O.createElement(c7,{match:m,routeContext:{outlet:v,matches:S,isDataRoute:n!=null},children:C})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?O.createElement(u7,{location:n.location,revalidation:n.revalidation,component:P,error:j,children:x(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):x()},null)}var I2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(I2||{}),Vu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vu||{});function d7(e){let t=O.useContext(wc);return t||Xe(!1),t}function p7(e){let t=O.useContext(F2);return t||Xe(!1),t}function h7(e){let t=O.useContext(ar);return t||Xe(!1),t}function $2(e){let t=h7(),n=t.matches[t.matches.length-1];return n.route.id||Xe(!1),n.route.id}function g7(){var e;let t=O.useContext(N2),n=p7(Vu.UseRouteError),r=$2(Vu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function m7(){let{router:e}=d7(I2.UseNavigateStable),t=$2(Vu.UseNavigateStable),n=O.useRef(!1);return M2(()=>{n.current=!0}),O.useCallback(function(s,l){l===void 0&&(l={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,fl({fromRouteId:t},l)))},[e,t])}const cv={};function v7(e,t,n){!t&&!cv[e]&&(cv[e]=!0)}function y7(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function au(e){let{to:t,replace:n,state:r,relative:s}=e;Go()||Xe(!1);let{future:l,static:u}=O.useContext(Rr),{matches:c}=O.useContext(ar),{pathname:d}=Wi(),h=di(),v=tg(t,eg(c,l.v7_relativeSplatPath),d,s==="path"),m=JSON.stringify(v);return O.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:s}),[h,m,s,n,r]),null}function x7(e){return r7(e.context)}function xr(e){Xe(!1)}function w7(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Yr.Pop,navigator:l,static:u=!1,future:c}=e;Go()&&Xe(!1);let d=t.replace(/^\/*/,"/"),h=O.useMemo(()=>({basename:d,navigator:l,static:u,future:fl({v7_relativeSplatPath:!1},c)}),[d,c,l,u]);typeof r=="string"&&(r=Vo(r));let{pathname:v="/",search:m="",hash:_="",state:j=null,key:E="default"}=r,P=O.useMemo(()=>{let R=No(v,d);return R==null?null:{location:{pathname:R,search:m,hash:_,state:j,key:E},navigationType:s}},[d,v,m,_,j,E,s]);return P==null?null:O.createElement(Rr.Provider,{value:h},O.createElement(Sc.Provider,{children:n,value:P}))}function S7(e){let{children:t,location:n}=e;return o7(Bp(t),n)}new Promise(()=>{});function Bp(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,s)=>{if(!O.isValidElement(r))return;let l=[...t,s];if(r.type===O.Fragment){n.push.apply(n,Bp(r.props.children,l));return}r.type!==xr&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Bp(r.props.children,l)),n.push(u)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gu.apply(this,arguments)}function D2(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,l;for(l=0;l<r.length;l++)s=r[l],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function _7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C7(e,t){return e.button===0&&(!t||t==="_self")&&!_7(e)}const E7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],b7=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],k7="6";try{window.__reactRouterVersion=k7}catch{}const P7=O.createContext({isTransitioning:!1}),j7="startTransition",fv=vE[j7];function O7(e){let{basename:t,children:n,future:r,window:s}=e,l=O.useRef();l.current==null&&(l.current=Ok({window:s,v5Compat:!0}));let u=l.current,[c,d]=O.useState({action:u.action,location:u.location}),{v7_startTransition:h}=r||{},v=O.useCallback(m=>{h&&fv?fv(()=>d(m)):d(m)},[d,h]);return O.useLayoutEffect(()=>u.listen(v),[u,v]),O.useEffect(()=>y7(r),[r]),O.createElement(w7,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:u,future:r})}const T7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cc=O.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:l,replace:u,state:c,target:d,to:h,preventScrollReset:v,viewTransition:m}=t,_=D2(t,E7),{basename:j}=O.useContext(Rr),E,P=!1;if(typeof h=="string"&&R7.test(h)&&(E=h,T7))try{let C=new URL(window.location.href),z=h.startsWith("//")?new URL(C.protocol+h):new URL(h),F=No(z.pathname,j);z.origin===C.origin&&F!=null?h=F+z.search+z.hash:P=!0}catch{}let R=e7(h,{relative:s}),S=A7(h,{replace:u,state:c,target:d,preventScrollReset:v,relative:s,viewTransition:m});function x(C){r&&r(C),C.defaultPrevented||S(C)}return O.createElement("a",Gu({},_,{href:E||R,onClick:P||l?r:x,ref:n,target:d}))}),Ra=O.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:l="",end:u=!1,style:c,to:d,viewTransition:h,children:v}=t,m=D2(t,b7),_=_c(d,{relative:m.relative}),j=Wi(),E=O.useContext(F2),{navigator:P,basename:R}=O.useContext(Rr),S=E!=null&&z7(_)&&h===!0,x=P.encodeLocation?P.encodeLocation(_).pathname:_.pathname,C=j.pathname,z=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;s||(C=C.toLowerCase(),z=z?z.toLowerCase():null,x=x.toLowerCase()),z&&R&&(z=No(z,R)||z);const F=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let M=C===x||!u&&C.startsWith(x)&&C.charAt(F)==="/",L=z!=null&&(z===x||!u&&z.startsWith(x)&&z.charAt(x.length)==="/"),U={isActive:M,isPending:L,isTransitioning:S},Z=M?r:void 0,K;typeof l=="function"?K=l(U):K=[l,M?"active":null,L?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof c=="function"?c(U):c;return O.createElement(Cc,Gu({},m,{"aria-current":Z,className:K,ref:n,style:Ce,to:d,viewTransition:h}),typeof v=="function"?v(U):v)});var Wp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wp||(Wp={}));var dv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dv||(dv={}));function L7(e){let t=O.useContext(wc);return t||Xe(!1),t}function A7(e,t){let{target:n,replace:r,state:s,preventScrollReset:l,relative:u,viewTransition:c}=t===void 0?{}:t,d=di(),h=Wi(),v=_c(e,{relative:u});return O.useCallback(m=>{if(C7(m,n)){m.preventDefault();let _=r!==void 0?r:Wu(h)===Wu(v);d(e,{replace:_,state:s,preventScrollReset:l,relative:u,viewTransition:c})}},[h,d,v,r,s,n,e,l,u,c])}function z7(e,t){t===void 0&&(t={});let n=O.useContext(P7);n==null&&Xe(!1);let{basename:r}=L7(Wp.useViewTransitionState),s=_c(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=No(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=No(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Hu(s.pathname,u)!=null||Hu(s.pathname,l)!=null}function U2(e,t){return function(){return e.apply(t,arguments)}}const{toString:F7}=Object.prototype,{getPrototypeOf:ng}=Object,Ec=(e=>t=>{const n=F7.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qn=e=>(e=e.toLowerCase(),t=>Ec(t)===e),bc=e=>t=>typeof t===e,{isArray:qo}=Array,dl=bc("undefined");function N7(e){return e!==null&&!dl(e)&&e.constructor!==null&&!dl(e.constructor)&&fn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const B2=Qn("ArrayBuffer");function M7(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&B2(e.buffer),t}const I7=bc("string"),fn=bc("function"),W2=bc("number"),kc=e=>e!==null&&typeof e=="object",$7=e=>e===!0||e===!1,uu=e=>{if(Ec(e)!=="object")return!1;const t=ng(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},D7=Qn("Date"),U7=Qn("File"),B7=Qn("Blob"),W7=Qn("FileList"),H7=e=>kc(e)&&fn(e.pipe),V7=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||fn(e.append)&&((t=Ec(e))==="formdata"||t==="object"&&fn(e.toString)&&e.toString()==="[object FormData]"))},G7=Qn("URLSearchParams"),[q7,K7,Y7,Q7]=["ReadableStream","Request","Response","Headers"].map(Qn),J7=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _l(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),qo(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const l=n?Object.getOwnPropertyNames(e):Object.keys(e),u=l.length;let c;for(r=0;r<u;r++)c=l[r],t.call(null,e[c],c,e)}}function H2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Oi=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),V2=e=>!dl(e)&&e!==Oi;function Hp(){const{caseless:e}=V2(this)&&this||{},t={},n=(r,s)=>{const l=e&&H2(t,s)||s;uu(t[l])&&uu(r)?t[l]=Hp(t[l],r):uu(r)?t[l]=Hp({},r):qo(r)?t[l]=r.slice():t[l]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_l(arguments[r],n);return t}const X7=(e,t,n,{allOwnKeys:r}={})=>(_l(t,(s,l)=>{n&&fn(s)?e[l]=U2(s,n):e[l]=s},{allOwnKeys:r}),e),Z7=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),eP=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tP=(e,t,n,r)=>{let s,l,u;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),l=s.length;l-- >0;)u=s[l],(!r||r(u,e,t))&&!c[u]&&(t[u]=e[u],c[u]=!0);e=n!==!1&&ng(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nP=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rP=e=>{if(!e)return null;if(qo(e))return e;let t=e.length;if(!W2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},iP=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ng(Uint8Array)),oP=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const l=s.value;t.call(e,l[0],l[1])}},sP=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},lP=Qn("HTMLFormElement"),aP=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),uP=Qn("RegExp"),G2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_l(n,(s,l)=>{let u;(u=t(s,l,e))!==!1&&(r[l]=u||s)}),Object.defineProperties(e,r)},cP=e=>{G2(e,(t,n)=>{if(fn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(fn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},fP=(e,t)=>{const n={},r=s=>{s.forEach(l=>{n[l]=!0})};return qo(e)?r(e):r(String(e).split(t)),n},dP=()=>{},pP=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function hP(e){return!!(e&&fn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const gP=e=>{const t=new Array(10),n=(r,s)=>{if(kc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const l=qo(r)?[]:{};return _l(r,(u,c)=>{const d=n(u,s+1);!dl(d)&&(l[c]=d)}),t[s]=void 0,l}}return r};return n(e,0)},mP=Qn("AsyncFunction"),vP=e=>e&&(kc(e)||fn(e))&&fn(e.then)&&fn(e.catch),q2=((e,t)=>e?setImmediate:t?((n,r)=>(Oi.addEventListener("message",({source:s,data:l})=>{s===Oi&&l===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Oi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",fn(Oi.postMessage)),yP=typeof queueMicrotask<"u"?queueMicrotask.bind(Oi):typeof process<"u"&&process.nextTick||q2,$={isArray:qo,isArrayBuffer:B2,isBuffer:N7,isFormData:V7,isArrayBufferView:M7,isString:I7,isNumber:W2,isBoolean:$7,isObject:kc,isPlainObject:uu,isReadableStream:q7,isRequest:K7,isResponse:Y7,isHeaders:Q7,isUndefined:dl,isDate:D7,isFile:U7,isBlob:B7,isRegExp:uP,isFunction:fn,isStream:H7,isURLSearchParams:G7,isTypedArray:iP,isFileList:W7,forEach:_l,merge:Hp,extend:X7,trim:J7,stripBOM:Z7,inherits:eP,toFlatObject:tP,kindOf:Ec,kindOfTest:Qn,endsWith:nP,toArray:rP,forEachEntry:oP,matchAll:sP,isHTMLForm:lP,hasOwnProperty:pv,hasOwnProp:pv,reduceDescriptors:G2,freezeMethods:cP,toObjectSet:fP,toCamelCase:aP,noop:dP,toFiniteNumber:pP,findKey:H2,global:Oi,isContextDefined:V2,isSpecCompliantForm:hP,toJSONObject:gP,isAsyncFn:mP,isThenable:vP,setImmediate:q2,asap:yP};function pe(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}$.inherits(pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const K2=pe.prototype,Y2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Y2[e]={value:e}});Object.defineProperties(pe,Y2);Object.defineProperty(K2,"isAxiosError",{value:!0});pe.from=(e,t,n,r,s,l)=>{const u=Object.create(K2);return $.toFlatObject(e,u,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),pe.call(u,e.message,t,n,r,s),u.cause=e,u.name=e.name,l&&Object.assign(u,l),u};const xP=null;function Vp(e){return $.isPlainObject(e)||$.isArray(e)}function Q2(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function hv(e,t,n){return e?e.concat(t).map(function(s,l){return s=Q2(s),!n&&l?"["+s+"]":s}).join(n?".":""):t}function wP(e){return $.isArray(e)&&!e.some(Vp)}const SP=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function Pc(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,R){return!$.isUndefined(R[P])});const r=n.metaTokens,s=n.visitor||v,l=n.dots,u=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(s))throw new TypeError("visitor must be a function");function h(E){if(E===null)return"";if($.isDate(E))return E.toISOString();if(!d&&$.isBlob(E))throw new pe("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(E)||$.isTypedArray(E)?d&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function v(E,P,R){let S=E;if(E&&!R&&typeof E=="object"){if($.endsWith(P,"{}"))P=r?P:P.slice(0,-2),E=JSON.stringify(E);else if($.isArray(E)&&wP(E)||($.isFileList(E)||$.endsWith(P,"[]"))&&(S=$.toArray(E)))return P=Q2(P),S.forEach(function(C,z){!($.isUndefined(C)||C===null)&&t.append(u===!0?hv([P],z,l):u===null?P:P+"[]",h(C))}),!1}return Vp(E)?!0:(t.append(hv(R,P,l),h(E)),!1)}const m=[],_=Object.assign(SP,{defaultVisitor:v,convertValue:h,isVisitable:Vp});function j(E,P){if(!$.isUndefined(E)){if(m.indexOf(E)!==-1)throw Error("Circular reference detected in "+P.join("."));m.push(E),$.forEach(E,function(S,x){(!($.isUndefined(S)||S===null)&&s.call(t,S,$.isString(x)?x.trim():x,P,_))===!0&&j(S,P?P.concat(x):[x])}),m.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return j(e),t}function gv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rg(e,t){this._pairs=[],e&&Pc(e,this,t)}const J2=rg.prototype;J2.append=function(t,n){this._pairs.push([t,n])};J2.toString=function(t){const n=t?function(r){return t.call(this,r,gv)}:gv;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _P(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X2(e,t,n){if(!t)return e;const r=n&&n.encode||_P;$.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let l;if(s?l=s(t,n):l=$.isURLSearchParams(t)?t.toString():new rg(t,n).toString(r),l){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class CP{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const mv=CP,Z2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},EP=typeof URLSearchParams<"u"?URLSearchParams:rg,bP=typeof FormData<"u"?FormData:null,kP=typeof Blob<"u"?Blob:null,PP={isBrowser:!0,classes:{URLSearchParams:EP,FormData:bP,Blob:kP},protocols:["http","https","file","blob","url","data"]},ig=typeof window<"u"&&typeof document<"u",Gp=typeof navigator=="object"&&navigator||void 0,jP=ig&&(!Gp||["ReactNative","NativeScript","NS"].indexOf(Gp.product)<0),OP=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),TP=ig&&window.location.href||"http://localhost",RP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ig,hasStandardBrowserEnv:jP,hasStandardBrowserWebWorkerEnv:OP,navigator:Gp,origin:TP},Symbol.toStringTag,{value:"Module"})),Tt={...RP,...PP};function LP(e,t){return Pc(e,new Tt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,l){return Tt.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},t))}function AP(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zP(e){const t={},n=Object.keys(e);let r;const s=n.length;let l;for(r=0;r<s;r++)l=n[r],t[l]=e[l];return t}function ew(e){function t(n,r,s,l){let u=n[l++];if(u==="__proto__")return!0;const c=Number.isFinite(+u),d=l>=n.length;return u=!u&&$.isArray(s)?s.length:u,d?($.hasOwnProp(s,u)?s[u]=[s[u],r]:s[u]=r,!c):((!s[u]||!$.isObject(s[u]))&&(s[u]=[]),t(n,r,s[u],l)&&$.isArray(s[u])&&(s[u]=zP(s[u])),!c)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,s)=>{t(AP(r),s,n,0)}),n}return null}function FP(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const og={transitional:Z2,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,l=$.isObject(t);if(l&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return s?JSON.stringify(ew(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t)||$.isReadableStream(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LP(t,this.formSerializer).toString();if((c=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Pc(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return l||s?(n.setContentType("application/json",!1),FP(t)):t}],transformResponse:[function(t){const n=this.transitional||og.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if($.isResponse(t)||$.isReadableStream(t))return t;if(t&&$.isString(t)&&(r&&!this.responseType||s)){const u=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(u)throw c.name==="SyntaxError"?pe.from(c,pe.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{og.headers[e]={}});const sg=og,NP=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MP=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(u){s=u.indexOf(":"),n=u.substring(0,s).trim().toLowerCase(),r=u.substring(s+1).trim(),!(!n||t[n]&&NP[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},vv=Symbol("internals");function ks(e){return e&&String(e).trim().toLowerCase()}function cu(e){return e===!1||e==null?e:$.isArray(e)?e.map(cu):String(e)}function IP(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $P=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ad(e,t,n,r,s){if($.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function DP(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function UP(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,l,u){return this[r].call(this,t,s,l,u)},configurable:!0})})}class jc{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function l(c,d,h){const v=ks(d);if(!v)throw new Error("header name must be a non-empty string");const m=$.findKey(s,v);(!m||s[m]===void 0||h===!0||h===void 0&&s[m]!==!1)&&(s[m||d]=cu(c))}const u=(c,d)=>$.forEach(c,(h,v)=>l(h,v,d));if($.isPlainObject(t)||t instanceof this.constructor)u(t,n);else if($.isString(t)&&(t=t.trim())&&!$P(t))u(MP(t),n);else if($.isHeaders(t))for(const[c,d]of t.entries())l(d,c,r);else t!=null&&l(n,t,r);return this}get(t,n){if(t=ks(t),t){const r=$.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return IP(s);if($.isFunction(n))return n.call(this,s,r);if($.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ks(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ad(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function l(u){if(u=ks(u),u){const c=$.findKey(r,u);c&&(!n||Ad(r,r[c],c,n))&&(delete r[c],s=!0)}}return $.isArray(t)?t.forEach(l):l(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const l=n[r];(!t||Ad(this,this[l],l,t,!0))&&(delete this[l],s=!0)}return s}normalize(t){const n=this,r={};return $.forEach(this,(s,l)=>{const u=$.findKey(r,l);if(u){n[u]=cu(s),delete n[l];return}const c=t?DP(l):String(l).trim();c!==l&&delete n[l],n[c]=cu(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[vv]=this[vv]={accessors:{}}).accessors,s=this.prototype;function l(u){const c=ks(u);r[c]||(UP(s,u),r[c]=!0)}return $.isArray(t)?t.forEach(l):l(t),this}}jc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(jc.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(jc);const qn=jc;function zd(e,t){const n=this||sg,r=t||n,s=qn.from(r.headers);let l=r.data;return $.forEach(e,function(c){l=c.call(n,l,s.normalize(),t?t.status:void 0)}),s.normalize(),l}function tw(e){return!!(e&&e.__CANCEL__)}function Ko(e,t,n){pe.call(this,e??"canceled",pe.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Ko,pe,{__CANCEL__:!0});function nw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new pe("Request failed with status code "+n.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function BP(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function WP(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,l=0,u;return t=t!==void 0?t:1e3,function(d){const h=Date.now(),v=r[l];u||(u=h),n[s]=d,r[s]=h;let m=l,_=0;for(;m!==s;)_+=n[m++],m=m%e;if(s=(s+1)%e,s===l&&(l=(l+1)%e),h-u<t)return;const j=v&&h-v;return j?Math.round(_*1e3/j):void 0}}function HP(e,t){let n=0,r=1e3/t,s,l;const u=(h,v=Date.now())=>{n=v,s=null,l&&(clearTimeout(l),l=null),e.apply(null,h)};return[(...h)=>{const v=Date.now(),m=v-n;m>=r?u(h,v):(s=h,l||(l=setTimeout(()=>{l=null,u(s)},r-m)))},()=>s&&u(s)]}const qu=(e,t,n=3)=>{let r=0;const s=WP(50,250);return HP(l=>{const u=l.loaded,c=l.lengthComputable?l.total:void 0,d=u-r,h=s(d),v=u<=c;r=u;const m={loaded:u,total:c,progress:c?u/c:void 0,bytes:d,rate:h||void 0,estimated:h&&c&&v?(c-u)/h:void 0,event:l,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(m)},n)},yv=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xv=e=>(...t)=>$.asap(()=>e(...t)),VP=Tt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Tt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Tt.origin),Tt.navigator&&/(msie|trident)/i.test(Tt.navigator.userAgent)):()=>!0,GP=Tt.hasStandardBrowserEnv?{write(e,t,n,r,s,l){const u=[e+"="+encodeURIComponent(t)];$.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),$.isString(r)&&u.push("path="+r),$.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function qP(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function KP(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function rw(e,t,n){let r=!qP(t);return e&&r||n==!1?KP(e,t):t}const wv=e=>e instanceof qn?{...e}:e;function Di(e,t){t=t||{};const n={};function r(h,v,m,_){return $.isPlainObject(h)&&$.isPlainObject(v)?$.merge.call({caseless:_},h,v):$.isPlainObject(v)?$.merge({},v):$.isArray(v)?v.slice():v}function s(h,v,m,_){if($.isUndefined(v)){if(!$.isUndefined(h))return r(void 0,h,m,_)}else return r(h,v,m,_)}function l(h,v){if(!$.isUndefined(v))return r(void 0,v)}function u(h,v){if($.isUndefined(v)){if(!$.isUndefined(h))return r(void 0,h)}else return r(void 0,v)}function c(h,v,m){if(m in t)return r(h,v);if(m in e)return r(void 0,h)}const d={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:(h,v,m)=>s(wv(h),wv(v),m,!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(v){const m=d[v]||s,_=m(e[v],t[v],v);$.isUndefined(_)&&m!==c||(n[v]=_)}),n}const iw=e=>{const t=Di({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:l,headers:u,auth:c}=t;t.headers=u=qn.from(u),t.url=X2(rw(t.baseURL,t.url),e.params,e.paramsSerializer),c&&u.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if($.isFormData(n)){if(Tt.hasStandardBrowserEnv||Tt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((d=u.getContentType())!==!1){const[h,...v]=d?d.split(";").map(m=>m.trim()).filter(Boolean):[];u.setContentType([h||"multipart/form-data",...v].join("; "))}}if(Tt.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(t)),r||r!==!1&&VP(t.url))){const h=s&&l&&GP.read(l);h&&u.set(s,h)}return t},YP=typeof XMLHttpRequest<"u",QP=YP&&function(e){return new Promise(function(n,r){const s=iw(e);let l=s.data;const u=qn.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:h}=s,v,m,_,j,E;function P(){j&&j(),E&&E(),s.cancelToken&&s.cancelToken.unsubscribe(v),s.signal&&s.signal.removeEventListener("abort",v)}let R=new XMLHttpRequest;R.open(s.method.toUpperCase(),s.url,!0),R.timeout=s.timeout;function S(){if(!R)return;const C=qn.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),F={data:!c||c==="text"||c==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:C,config:e,request:R};nw(function(L){n(L),P()},function(L){r(L),P()},F),R=null}"onloadend"in R?R.onloadend=S:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(S)},R.onabort=function(){R&&(r(new pe("Request aborted",pe.ECONNABORTED,e,R)),R=null)},R.onerror=function(){r(new pe("Network Error",pe.ERR_NETWORK,e,R)),R=null},R.ontimeout=function(){let z=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||Z2;s.timeoutErrorMessage&&(z=s.timeoutErrorMessage),r(new pe(z,F.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,e,R)),R=null},l===void 0&&u.setContentType(null),"setRequestHeader"in R&&$.forEach(u.toJSON(),function(z,F){R.setRequestHeader(F,z)}),$.isUndefined(s.withCredentials)||(R.withCredentials=!!s.withCredentials),c&&c!=="json"&&(R.responseType=s.responseType),h&&([_,E]=qu(h,!0),R.addEventListener("progress",_)),d&&R.upload&&([m,j]=qu(d),R.upload.addEventListener("progress",m),R.upload.addEventListener("loadend",j)),(s.cancelToken||s.signal)&&(v=C=>{R&&(r(!C||C.type?new Ko(null,e,R):C),R.abort(),R=null)},s.cancelToken&&s.cancelToken.subscribe(v),s.signal&&(s.signal.aborted?v():s.signal.addEventListener("abort",v)));const x=BP(s.url);if(x&&Tt.protocols.indexOf(x)===-1){r(new pe("Unsupported protocol "+x+":",pe.ERR_BAD_REQUEST,e));return}R.send(l||null)})},JP=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const l=function(h){if(!s){s=!0,c();const v=h instanceof Error?h:this.reason;r.abort(v instanceof pe?v:new Ko(v instanceof Error?v.message:v))}};let u=t&&setTimeout(()=>{u=null,l(new pe(`timeout ${t} of ms exceeded`,pe.ETIMEDOUT))},t);const c=()=>{e&&(u&&clearTimeout(u),u=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(l):h.removeEventListener("abort",l)}),e=null)};e.forEach(h=>h.addEventListener("abort",l));const{signal:d}=r;return d.unsubscribe=()=>$.asap(c),d}},XP=JP,ZP=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},ej=async function*(e,t){for await(const n of tj(e))yield*ZP(n,t)},tj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Sv=(e,t,n,r)=>{const s=ej(e,t);let l=0,u,c=d=>{u||(u=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:h,value:v}=await s.next();if(h){c(),d.close();return}let m=v.byteLength;if(n){let _=l+=m;n(_)}d.enqueue(new Uint8Array(v))}catch(h){throw c(h),h}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Oc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ow=Oc&&typeof ReadableStream=="function",nj=Oc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),sw=(e,...t)=>{try{return!!e(...t)}catch{return!1}},rj=ow&&sw(()=>{let e=!1;const t=new Request(Tt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_v=64*1024,qp=ow&&sw(()=>$.isReadableStream(new Response("").body)),Ku={stream:qp&&(e=>e.body)};Oc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ku[t]&&(Ku[t]=$.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new pe(`Response type '${t}' is not supported`,pe.ERR_NOT_SUPPORT,r)})})})(new Response);const ij=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(Tt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await nj(e)).byteLength},oj=async(e,t)=>{const n=$.toFiniteNumber(e.getContentLength());return n??ij(t)},sj=Oc&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:l,timeout:u,onDownloadProgress:c,onUploadProgress:d,responseType:h,headers:v,withCredentials:m="same-origin",fetchOptions:_}=iw(e);h=h?(h+"").toLowerCase():"text";let j=XP([s,l&&l.toAbortSignal()],u),E;const P=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let R;try{if(d&&rj&&n!=="get"&&n!=="head"&&(R=await oj(v,r))!==0){let F=new Request(t,{method:"POST",body:r,duplex:"half"}),M;if($.isFormData(r)&&(M=F.headers.get("content-type"))&&v.setContentType(M),F.body){const[L,U]=yv(R,qu(xv(d)));r=Sv(F.body,_v,L,U)}}$.isString(m)||(m=m?"include":"omit");const S="credentials"in Request.prototype;E=new Request(t,{..._,signal:j,method:n.toUpperCase(),headers:v.normalize().toJSON(),body:r,duplex:"half",credentials:S?m:void 0});let x=await fetch(E);const C=qp&&(h==="stream"||h==="response");if(qp&&(c||C&&P)){const F={};["status","statusText","headers"].forEach(Z=>{F[Z]=x[Z]});const M=$.toFiniteNumber(x.headers.get("content-length")),[L,U]=c&&yv(M,qu(xv(c),!0))||[];x=new Response(Sv(x.body,_v,L,()=>{U&&U(),P&&P()}),F)}h=h||"text";let z=await Ku[$.findKey(Ku,h)||"text"](x,e);return!C&&P&&P(),await new Promise((F,M)=>{nw(F,M,{data:z,headers:qn.from(x.headers),status:x.status,statusText:x.statusText,config:e,request:E})})}catch(S){throw P&&P(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new pe("Network Error",pe.ERR_NETWORK,e,E),{cause:S.cause||S}):pe.from(S,S&&S.code,e,E)}}),Kp={http:xP,xhr:QP,fetch:sj};$.forEach(Kp,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Cv=e=>`- ${e}`,lj=e=>$.isFunction(e)||e===null||e===!1,lw={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let l=0;l<t;l++){n=e[l];let u;if(r=n,!lj(n)&&(r=Kp[(u=String(n)).toLowerCase()],r===void 0))throw new pe(`Unknown adapter '${u}'`);if(r)break;s[u||"#"+l]=r}if(!r){const l=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let u=t?l.length>1?`since :
`+l.map(Cv).join(`
`):" "+Cv(l[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return r},adapters:Kp};function Fd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ko(null,e)}function Ev(e){return Fd(e),e.headers=qn.from(e.headers),e.data=zd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lw.getAdapter(e.adapter||sg.adapter)(e).then(function(r){return Fd(e),r.data=zd.call(e,e.transformResponse,r),r.headers=qn.from(r.headers),r},function(r){return tw(r)||(Fd(e),r&&r.response&&(r.response.data=zd.call(e,e.transformResponse,r.response),r.response.headers=qn.from(r.response.headers))),Promise.reject(r)})}const aw="1.8.1",Tc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Tc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const bv={};Tc.transitional=function(t,n,r){function s(l,u){return"[Axios v"+aw+"] Transitional option '"+l+"'"+u+(r?". "+r:"")}return(l,u,c)=>{if(t===!1)throw new pe(s(u," has been removed"+(n?" in "+n:"")),pe.ERR_DEPRECATED);return n&&!bv[u]&&(bv[u]=!0,console.warn(s(u," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,u,c):!0}};Tc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function aj(e,t,n){if(typeof e!="object")throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const l=r[s],u=t[l];if(u){const c=e[l],d=c===void 0||u(c,l,e);if(d!==!0)throw new pe("option "+l+" must be "+d,pe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new pe("Unknown option "+l,pe.ERR_BAD_OPTION)}}const fu={assertOptions:aj,validators:Tc},nr=fu.validators;class Yu{constructor(t){this.defaults=t,this.interceptors={request:new mv,response:new mv}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const l=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Di(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:l}=n;r!==void 0&&fu.assertOptions(r,{silentJSONParsing:nr.transitional(nr.boolean),forcedJSONParsing:nr.transitional(nr.boolean),clarifyTimeoutError:nr.transitional(nr.boolean)},!1),s!=null&&($.isFunction(s)?n.paramsSerializer={serialize:s}:fu.assertOptions(s,{encode:nr.function,serialize:nr.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),fu.assertOptions(n,{baseUrl:nr.spelling("baseURL"),withXsrfToken:nr.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let u=l&&$.merge(l.common,l[n.method]);l&&$.forEach(["delete","get","head","post","put","patch","common"],E=>{delete l[E]}),n.headers=qn.concat(u,l);const c=[];let d=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(n)===!1||(d=d&&P.synchronous,c.unshift(P.fulfilled,P.rejected))});const h=[];this.interceptors.response.forEach(function(P){h.push(P.fulfilled,P.rejected)});let v,m=0,_;if(!d){const E=[Ev.bind(this),void 0];for(E.unshift.apply(E,c),E.push.apply(E,h),_=E.length,v=Promise.resolve(n);m<_;)v=v.then(E[m++],E[m++]);return v}_=c.length;let j=n;for(m=0;m<_;){const E=c[m++],P=c[m++];try{j=E(j)}catch(R){P.call(this,R);break}}try{v=Ev.call(this,j)}catch(E){return Promise.reject(E)}for(m=0,_=h.length;m<_;)v=v.then(h[m++],h[m++]);return v}getUri(t){t=Di(this.defaults,t);const n=rw(t.baseURL,t.url,t.allowAbsoluteUrls);return X2(n,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){Yu.prototype[t]=function(n,r){return this.request(Di(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(l,u,c){return this.request(Di(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}Yu.prototype[t]=n(),Yu.prototype[t+"Form"]=n(!0)});const du=Yu;class lg{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const r=this;this.promise.then(s=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](s);r._listeners=null}),this.promise.then=s=>{let l;const u=new Promise(c=>{r.subscribe(c),l=c}).then(s);return u.cancel=function(){r.unsubscribe(l)},u},t(function(l,u,c){r.reason||(r.reason=new Ko(l,u,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new lg(function(s){t=s}),cancel:t}}}const uj=lg;function cj(e){return function(n){return e.apply(null,n)}}function fj(e){return $.isObject(e)&&e.isAxiosError===!0}const Yp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yp).forEach(([e,t])=>{Yp[t]=e});const dj=Yp;function uw(e){const t=new du(e),n=U2(du.prototype.request,t);return $.extend(n,du.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return uw(Di(e,s))},n}const ct=uw(sg);ct.Axios=du;ct.CanceledError=Ko;ct.CancelToken=uj;ct.isCancel=tw;ct.VERSION=aw;ct.toFormData=Pc;ct.AxiosError=pe;ct.Cancel=ct.CanceledError;ct.all=function(t){return Promise.all(t)};ct.spread=cj;ct.isAxiosError=fj;ct.mergeConfig=Di;ct.AxiosHeaders=qn;ct.formToJSON=e=>ew($.isHTMLForm(e)?new FormData(e):e);ct.getAdapter=lw.getAdapter;ct.HttpStatusCode=dj;ct.default=ct;const bi=ct;function Qp(e){this.message=e}Qp.prototype=new Error,Qp.prototype.name="InvalidCharacterError";var kv=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new Qp("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,s=0,l=0,u="";r=t.charAt(l++);~r&&(n=s%4?64*n+r:r,s++%4)?u+=String.fromCharCode(255&n>>(-2*s&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return u};function pj(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(kv(n).replace(/(.)/g,function(r,s){var l=s.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}(t)}catch{return kv(t)}}function Qu(e){this.message=e}function hj(e,t){if(typeof e!="string")throw new Qu("Invalid token specified");var n=(t=t||{}).header===!0?0:1;try{return JSON.parse(pj(e.split(".")[n]))}catch(r){throw new Qu("Invalid token specified: "+r.message)}}Qu.prototype=new Error,Qu.prototype.name="InvalidTokenError";const cw="https://your-production-api.com/api",Jp=[{id:"javascript",name:"JavaScript",extensions:[".js",".jsx"]},{id:"typescript",name:"TypeScript",extensions:[".ts",".tsx"]},{id:"python",name:"Python",extensions:[".py"]},{id:"java",name:"Java",extensions:[".java"]},{id:"csharp",name:"C#",extensions:[".cs"]},{id:"cpp",name:"C++",extensions:[".cpp",".h"]},{id:"go",name:"Go",extensions:[".go"]},{id:"rust",name:"Rust",extensions:[".rs"]},{id:"ruby",name:"Ruby",extensions:[".rb"]},{id:"php",name:"PHP",extensions:[".php"]},{id:"html",name:"HTML",extensions:[".html",".htm"]},{id:"css",name:"CSS",extensions:[".css"]},{id:"markdown",name:"Markdown",extensions:[".md"]},{id:"json",name:"JSON",extensions:[".json"]},{id:"yaml",name:"YAML",extensions:[".yaml",".yml"]},{id:"ipynb",name:"Jupyter Notebook",extensions:[".ipynb"]}],pi=O.createContext(),gj=({children:e})=>{const[t,n]=O.useState(null),[r,s]=O.useState(localStorage.getItem("token")),[l,u]=O.useState(!0),[c,d]=O.useState(null);bi.defaults.baseURL=cw,r&&(bi.defaults.headers.common.Authorization=`Bearer ${r}`),O.useEffect(()=>{(async()=>{if(r)try{const E=hj(r),P=Date.now()/1e3;if(E.exp<P){m(),u(!1);return}const R=await bi.get("/api/auth/me");n(R.data)}catch(E){console.error("Failed to load user:",E),m()}u(!1)})()},[r]);const h=async j=>{var E,P;d(null);try{const R=await bi.post("/api/auth/register",j);return localStorage.setItem("token",R.data.token),s(R.data.token),n(R.data.user),R.data}catch(R){throw d(((P=(E=R.response)==null?void 0:E.data)==null?void 0:P.message)||"Registration failed. Please try again."),R}},v=async j=>{var E,P;d(null);try{const R=await bi.post("/api/auth/login",j);return localStorage.setItem("token",R.data.token),s(R.data.token),n(R.data.user),R.data}catch(R){throw d(((P=(E=R.response)==null?void 0:E.data)==null?void 0:P.message)||"Login failed. Please check your credentials."),R}},m=()=>{localStorage.removeItem("token"),s(null),n(null),delete bi.defaults.headers.common.Authorization},_={currentUser:t,token:r,loading:l,error:c,register:h,login:v,logout:m,setError:d};return p.jsx(pi.Provider,{value:_,children:e})};var Kt=function(){return Kt=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Kt.apply(this,arguments)};function Ju(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,l;r<s;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var He="-ms-",Vs="-moz-",Te="-webkit-",fw="comm",Rc="rule",ag="decl",mj="@import",dw="@keyframes",vj="@layer",pw=Math.abs,ug=String.fromCharCode,Xp=Object.assign;function yj(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function hw(e){return e.trim()}function Sr(e,t){return(e=t.exec(e))?e[0]:e}function me(e,t,n){return e.replace(t,n)}function pu(e,t,n){return e.indexOf(t,n)}function vt(e,t){return e.charCodeAt(t)|0}function Mo(e,t,n){return e.slice(t,n)}function ir(e){return e.length}function gw(e){return e.length}function zs(e,t){return t.push(e),e}function xj(e,t){return e.map(t).join("")}function Pv(e,t){return e.filter(function(n){return!Sr(n,t)})}var Lc=1,Io=1,mw=0,Rn=0,at=0,Yo="";function Ac(e,t,n,r,s,l,u,c){return{value:e,root:t,parent:n,type:r,props:s,children:l,line:Lc,column:Io,length:u,return:"",siblings:c}}function Br(e,t){return Xp(Ac("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lo(e){for(;e.root;)e=Br(e.root,{children:[e]});zs(e,e.siblings)}function wj(){return at}function Sj(){return at=Rn>0?vt(Yo,--Rn):0,Io--,at===10&&(Io=1,Lc--),at}function Kn(){return at=Rn<mw?vt(Yo,Rn++):0,Io++,at===10&&(Io=1,Lc++),at}function Ai(){return vt(Yo,Rn)}function hu(){return Rn}function zc(e,t){return Mo(Yo,e,t)}function Zp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _j(e){return Lc=Io=1,mw=ir(Yo=e),Rn=0,[]}function Cj(e){return Yo="",e}function Nd(e){return hw(zc(Rn-1,eh(e===91?e+2:e===40?e+1:e)))}function Ej(e){for(;(at=Ai())&&at<33;)Kn();return Zp(e)>2||Zp(at)>3?"":" "}function bj(e,t){for(;--t&&Kn()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return zc(e,hu()+(t<6&&Ai()==32&&Kn()==32))}function eh(e){for(;Kn();)switch(at){case e:return Rn;case 34:case 39:e!==34&&e!==39&&eh(at);break;case 40:e===41&&eh(e);break;case 92:Kn();break}return Rn}function kj(e,t){for(;Kn()&&e+at!==47+10;)if(e+at===42+42&&Ai()===47)break;return"/*"+zc(t,Rn-1)+"*"+ug(e===47?e:Kn())}function Pj(e){for(;!Zp(Ai());)Kn();return zc(e,Rn)}function jj(e){return Cj(gu("",null,null,null,[""],e=_j(e),0,[0],e))}function gu(e,t,n,r,s,l,u,c,d){for(var h=0,v=0,m=u,_=0,j=0,E=0,P=1,R=1,S=1,x=0,C="",z=s,F=l,M=r,L=C;R;)switch(E=x,x=Kn()){case 40:if(E!=108&&vt(L,m-1)==58){pu(L+=me(Nd(x),"&","&\f"),"&\f",pw(h?c[h-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:L+=Nd(x);break;case 9:case 10:case 13:case 32:L+=Ej(E);break;case 92:L+=bj(hu()-1,7);continue;case 47:switch(Ai()){case 42:case 47:zs(Oj(kj(Kn(),hu()),t,n,d),d);break;default:L+="/"}break;case 123*P:c[h++]=ir(L)*S;case 125*P:case 59:case 0:switch(x){case 0:case 125:R=0;case 59+v:S==-1&&(L=me(L,/\f/g,"")),j>0&&ir(L)-m&&zs(j>32?Ov(L+";",r,n,m-1,d):Ov(me(L," ","")+";",r,n,m-2,d),d);break;case 59:L+=";";default:if(zs(M=jv(L,t,n,h,v,s,c,C,z=[],F=[],m,l),l),x===123)if(v===0)gu(L,t,M,M,z,l,m,c,F);else switch(_===99&&vt(L,3)===110?100:_){case 100:case 108:case 109:case 115:gu(e,M,M,r&&zs(jv(e,M,M,0,0,s,c,C,s,z=[],m,F),F),s,F,m,c,r?z:F);break;default:gu(L,M,M,M,[""],F,0,c,F)}}h=v=j=0,P=S=1,C=L="",m=u;break;case 58:m=1+ir(L),j=E;default:if(P<1){if(x==123)--P;else if(x==125&&P++==0&&Sj()==125)continue}switch(L+=ug(x),x*P){case 38:S=v>0?1:(L+="\f",-1);break;case 44:c[h++]=(ir(L)-1)*S,S=1;break;case 64:Ai()===45&&(L+=Nd(Kn())),_=Ai(),v=m=ir(C=L+=Pj(hu())),x++;break;case 45:E===45&&ir(L)==2&&(P=0)}}return l}function jv(e,t,n,r,s,l,u,c,d,h,v,m){for(var _=s-1,j=s===0?l:[""],E=gw(j),P=0,R=0,S=0;P<r;++P)for(var x=0,C=Mo(e,_+1,_=pw(R=u[P])),z=e;x<E;++x)(z=hw(R>0?j[x]+" "+C:me(C,/&\f/g,j[x])))&&(d[S++]=z);return Ac(e,t,n,s===0?Rc:c,d,h,v,m)}function Oj(e,t,n,r){return Ac(e,t,n,fw,ug(wj()),Mo(e,2,-2),0,r)}function Ov(e,t,n,r,s){return Ac(e,t,n,ag,Mo(e,0,r),Mo(e,r+1,-1),r,s)}function vw(e,t,n){switch(yj(e,t)){case 5103:return Te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+e+e;case 4789:return Vs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+e+Vs+e+He+e+e;case 5936:switch(vt(e,t+11)){case 114:return Te+e+He+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Te+e+He+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Te+e+He+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Te+e+He+e+e;case 6165:return Te+e+He+"flex-"+e+e;case 5187:return Te+e+me(e,/(\w+).+(:[^]+)/,Te+"box-$1$2"+He+"flex-$1$2")+e;case 5443:return Te+e+He+"flex-item-"+me(e,/flex-|-self/g,"")+(Sr(e,/flex-|baseline/)?"":He+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return Te+e+He+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Te+e+He+me(e,"shrink","negative")+e;case 5292:return Te+e+He+me(e,"basis","preferred-size")+e;case 6060:return Te+"box-"+me(e,"-grow","")+Te+e+He+me(e,"grow","positive")+e;case 4554:return Te+me(e,/([^-])(transform)/g,"$1"+Te+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+e+e;case 4200:if(!Sr(e,/flex-|baseline/))return He+"grid-column-align"+Mo(e,t)+e;break;case 2592:case 3360:return He+me(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,s){return t=s,Sr(r.props,/grid-\w+-end/)})?~pu(e+(n=n[t].value),"span",0)?e:He+me(e,"-start","")+e+He+"grid-row-span:"+(~pu(n,"span",0)?Sr(n,/\d+/):+Sr(n,/\d+/)-+Sr(e,/\d+/))+";":He+me(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Sr(r.props,/grid-\w+-start/)})?e:He+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,Te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ir(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Vs+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pu(e,"stretch",0)?vw(me(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,l,u,c,d,h){return He+s+":"+l+h+(u?He+s+"-span:"+(c?d:+d-+l)+h:"")+e});case 4949:if(vt(e,t+6)===121)return me(e,":",":"+Te)+e;break;case 6444:switch(vt(e,vt(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(vt(e,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+He+"$2box$3")+e;case 100:return me(e,":",":"+He)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function Xu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Tj(e,t,n,r){switch(e.type){case vj:if(e.children.length)break;case mj:case ag:return e.return=e.return||e.value;case fw:return"";case dw:return e.return=e.value+"{"+Xu(e.children,r)+"}";case Rc:if(!ir(e.value=e.props.join(",")))return""}return ir(n=Xu(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rj(e){var t=gw(e);return function(n,r,s,l){for(var u="",c=0;c<t;c++)u+=e[c](n,r,s,l)||"";return u}}function Lj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Aj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ag:e.return=vw(e.value,e.length,n);return;case dw:return Xu([Br(e,{value:me(e.value,"@","@"+Te)})],r);case Rc:if(e.length)return xj(n=e.props,function(s){switch(Sr(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lo(Br(e,{props:[me(s,/:(read-\w+)/,":"+Vs+"$1")]})),lo(Br(e,{props:[s]})),Xp(e,{props:Pv(n,r)});break;case"::placeholder":lo(Br(e,{props:[me(s,/:(plac\w+)/,":"+Te+"input-$1")]})),lo(Br(e,{props:[me(s,/:(plac\w+)/,":"+Vs+"$1")]})),lo(Br(e,{props:[me(s,/:(plac\w+)/,He+"input-$1")]})),lo(Br(e,{props:[s]})),Xp(e,{props:Pv(n,r)});break}return""})}}var zj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$o=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yw="active",xw="data-styled-version",Fc="6.1.15",cg=`/*!sc*/
`,Zu=typeof window<"u"&&"HTMLElement"in window,Fj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Nc=Object.freeze([]),Do=Object.freeze({});function Nj(e,t,n){return n===void 0&&(n=Do),e.theme!==n.theme&&e.theme||t||n.theme}var ww=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ij=/(^-|-$)/g;function Tv(e){return e.replace(Mj,"-").replace(Ij,"")}var $j=/(a)(d)/gi,La=52,Rv=function(e){return String.fromCharCode(e+(e>25?39:97))};function th(e){var t,n="";for(t=Math.abs(e);t>La;t=t/La|0)n=Rv(t%La)+n;return(Rv(t%La)+n).replace($j,"$1-$2")}var Md,Sw=5381,So=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_w=function(e){return So(Sw,e)};function Dj(e){return th(_w(e)>>>0)}function Uj(e){return e.displayName||e.name||"Component"}function Id(e){return typeof e=="string"&&!0}var Cw=typeof Symbol=="function"&&Symbol.for,Ew=Cw?Symbol.for("react.memo"):60115,Bj=Cw?Symbol.for("react.forward_ref"):60112,Wj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vj=((Md={})[Bj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Md[Ew]=bw,Md);function Lv(e){return("type"in(t=e)&&t.type.$$typeof)===Ew?bw:"$$typeof"in e?Vj[e.$$typeof]:Wj;var t}var Gj=Object.defineProperty,qj=Object.getOwnPropertyNames,Av=Object.getOwnPropertySymbols,Kj=Object.getOwnPropertyDescriptor,Yj=Object.getPrototypeOf,zv=Object.prototype;function kw(e,t,n){if(typeof t!="string"){if(zv){var r=Yj(t);r&&r!==zv&&kw(e,r,n)}var s=qj(t);Av&&(s=s.concat(Av(t)));for(var l=Lv(e),u=Lv(t),c=0;c<s.length;++c){var d=s[c];if(!(d in Hj||n&&n[d]||u&&d in u||l&&d in l)){var h=Kj(t,d);try{Gj(e,d,h)}catch{}}}}return e}function Uo(e){return typeof e=="function"}function fg(e){return typeof e=="object"&&"styledComponentId"in e}function Ti(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Fv(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function pl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nh(e,t,n){if(n===void 0&&(n=!1),!n&&!pl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nh(e[r],t[r]);else if(pl(t))for(var r in t)e[r]=nh(e[r],t[r]);return e}function dg(e,t){Object.defineProperty(e,"toString",{value:t})}function Cl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,l=s;t>=l;)if((l<<=1)<0)throw Cl(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var u=s;u<l;u++)this.groupSizes[u]=0}for(var c=this.indexOfGroup(t+1),d=(u=0,n.length);u<d;u++)this.tag.insertRule(c,n[u])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),s=r+n;this.groupSizes[t]=0;for(var l=r;l<s;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],s=this.indexOfGroup(t),l=s+r,u=s;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(cg);return n},e}(),mu=new Map,ec=new Map,vu=1,Aa=function(e){if(mu.has(e))return mu.get(e);for(;ec.has(vu);)vu++;var t=vu++;return mu.set(e,t),ec.set(t,e),t},Jj=function(e,t){vu=t+1,mu.set(e,t),ec.set(t,e)},Xj="style[".concat($o,"][").concat(xw,'="').concat(Fc,'"]'),Zj=new RegExp("^".concat($o,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),e9=function(e,t,n){for(var r,s=n.split(","),l=0,u=s.length;l<u;l++)(r=s[l])&&e.registerName(t,r)},t9=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cg),s=[],l=0,u=r.length;l<u;l++){var c=r[l].trim();if(c){var d=c.match(Zj);if(d){var h=0|parseInt(d[1],10),v=d[2];h!==0&&(Jj(v,h),e9(e,v,d[3]),e.getTag().insertRules(h,s)),s.length=0}else s.push(c)}}},Nv=function(e){for(var t=document.querySelectorAll(Xj),n=0,r=t.length;n<r;n++){var s=t[n];s&&s.getAttribute($o)!==yw&&(t9(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function n9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),s=function(c){var d=Array.from(c.querySelectorAll("style[".concat($o,"]")));return d[d.length-1]}(n),l=s!==void 0?s.nextSibling:null;r.setAttribute($o,yw),r.setAttribute(xw,Fc);var u=n9();return u&&r.setAttribute("nonce",u),n.insertBefore(r,l),r},r9=function(){function e(t){this.element=Pw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,s=0,l=r.length;s<l;s++){var u=r[s];if(u.ownerNode===n)return u}throw Cl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),i9=function(){function e(t){this.element=Pw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),o9=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Mv=Zu,s9={isServer:!Zu,useCSSOMInjection:!Fj},jw=function(){function e(t,n,r){t===void 0&&(t=Do),n===void 0&&(n={});var s=this;this.options=Kt(Kt({},s9),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zu&&Mv&&(Mv=!1,Nv(this)),dg(this,function(){return function(l){for(var u=l.getTag(),c=u.length,d="",h=function(m){var _=function(S){return ec.get(S)}(m);if(_===void 0)return"continue";var j=l.names.get(_),E=u.getGroup(m);if(j===void 0||!j.size||E.length===0)return"continue";var P="".concat($o,".g").concat(m,'[id="').concat(_,'"]'),R="";j!==void 0&&j.forEach(function(S){S.length>0&&(R+="".concat(S,","))}),d+="".concat(E).concat(P,'{content:"').concat(R,'"}').concat(cg)},v=0;v<c;v++)h(v);return d}(s)})}return e.registerId=function(t){return Aa(t)},e.prototype.rehydrate=function(){!this.server&&Zu&&Nv(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Kt(Kt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,s=n.target;return n.isServer?new o9(s):r?new r9(s):new i9(s)}(this.options),new Qj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Aa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Aa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Aa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),l9=/&/g,a9=/^\s*\/\/.*$/gm;function Ow(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ow(n.children,t)),n})}function u9(e){var t,n,r,s=e===void 0?Do:e,l=s.options,u=l===void 0?Do:l,c=s.plugins,d=c===void 0?Nc:c,h=function(_,j,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):_},v=d.slice();v.push(function(_){_.type===Rc&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(l9,n).replace(r,h))}),u.prefix&&v.push(Aj),v.push(Tj);var m=function(_,j,E,P){j===void 0&&(j=""),E===void 0&&(E=""),P===void 0&&(P="&"),t=P,n=j,r=new RegExp("\\".concat(n,"\\b"),"g");var R=_.replace(a9,""),S=jj(E||j?"".concat(E," ").concat(j," { ").concat(R," }"):R);u.namespace&&(S=Ow(S,u.namespace));var x=[];return Xu(S,Rj(v.concat(Lj(function(C){return x.push(C)})))),x};return m.hash=d.length?d.reduce(function(_,j){return j.name||Cl(15),So(_,j.name)},Sw).toString():"",m}var c9=new jw,rh=u9(),Tw=rt.createContext({shouldForwardProp:void 0,styleSheet:c9,stylis:rh});Tw.Consumer;rt.createContext(void 0);function Iv(){return O.useContext(Tw)}var f9=function(){function e(t,n){var r=this;this.inject=function(s,l){l===void 0&&(l=rh);var u=r.name+l.hash;s.hasNameForId(r.id,u)||s.insertRules(r.id,u,l(r.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,dg(this,function(){throw Cl(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rh),this.name+t.hash},e}(),d9=function(e){return e>="A"&&e<="Z"};function $v(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;d9(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rw=function(e){return e==null||e===!1||e===""},Lw=function(e){var t,n,r=[];for(var s in e){var l=e[s];e.hasOwnProperty(s)&&!Rw(l)&&(Array.isArray(l)&&l.isCss||Uo(l)?r.push("".concat($v(s),":"),l,";"):pl(l)?r.push.apply(r,Ju(Ju(["".concat(s," {")],Lw(l),!1),["}"],!1)):r.push("".concat($v(s),": ").concat((t=s,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in zj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zi(e,t,n,r){if(Rw(e))return[];if(fg(e))return[".".concat(e.styledComponentId)];if(Uo(e)){if(!Uo(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var s=e(t);return zi(s,t,n,r)}var l;return e instanceof f9?n?(e.inject(n,r),[e.getName(r)]):[e]:pl(e)?Lw(e):Array.isArray(e)?Array.prototype.concat.apply(Nc,e.map(function(u){return zi(u,t,n,r)})):[e.toString()]}function p9(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Uo(n)&&!fg(n))return!1}return!0}var h9=_w(Fc),g9=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&p9(t),this.componentId=n,this.baseHash=So(h9,n),this.baseStyle=r,jw.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=Ti(s,this.staticRulesId);else{var l=Fv(zi(this.rules,t,n,r)),u=th(So(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var c=r(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,c)}s=Ti(s,u),this.staticRulesId=u}else{for(var d=So(this.baseHash,r.hash),h="",v=0;v<this.rules.length;v++){var m=this.rules[v];if(typeof m=="string")h+=m;else if(m){var _=Fv(zi(m,t,n,r));d=So(d,_+v),h+=_}}if(h){var j=th(d>>>0);n.hasNameForId(this.componentId,j)||n.insertRules(this.componentId,j,r(h,".".concat(j),void 0,this.componentId)),s=Ti(s,j)}}return s},e}(),Aw=rt.createContext(void 0);Aw.Consumer;var $d={};function m9(e,t,n){var r=fg(e),s=e,l=!Id(e),u=t.attrs,c=u===void 0?Nc:u,d=t.componentId,h=d===void 0?function(z,F){var M=typeof z!="string"?"sc":Tv(z);$d[M]=($d[M]||0)+1;var L="".concat(M,"-").concat(Dj(Fc+M+$d[M]));return F?"".concat(F,"-").concat(L):L}(t.displayName,t.parentComponentId):d,v=t.displayName,m=v===void 0?function(z){return Id(z)?"styled.".concat(z):"Styled(".concat(Uj(z),")")}(e):v,_=t.displayName&&t.componentId?"".concat(Tv(t.displayName),"-").concat(t.componentId):t.componentId||h,j=r&&s.attrs?s.attrs.concat(c).filter(Boolean):c,E=t.shouldForwardProp;if(r&&s.shouldForwardProp){var P=s.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;E=function(z,F){return P(z,F)&&R(z,F)}}else E=P}var S=new g9(n,_,r?s.componentStyle:void 0);function x(z,F){return function(M,L,U){var Z=M.attrs,K=M.componentStyle,Ce=M.defaultProps,be=M.foldedComponentIds,et=M.styledComponentId,At=M.target,le=rt.useContext(Aw),Se=Iv(),ze=M.shouldForwardProp||Se.shouldForwardProp,q=Nj(L,le,Ce)||Do,ne=function(De,lt,Xt){for(var J,H=Kt(Kt({},lt),{className:void 0,theme:Xt}),Y=0;Y<De.length;Y+=1){var re=Uo(J=De[Y])?J(H):J;for(var ke in re)H[ke]=ke==="className"?Ti(H[ke],re[ke]):ke==="style"?Kt(Kt({},H[ke]),re[ke]):re[ke]}return lt.className&&(H.className=Ti(H.className,lt.className)),H}(Z,L,q),se=ne.as||At,X={};for(var oe in ne)ne[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&ne.theme===q||(oe==="forwardedAs"?X.as=ne.forwardedAs:ze&&!ze(oe,se)||(X[oe]=ne[oe]));var $e=function(De,lt){var Xt=Iv(),J=De.generateAndInjectStyles(lt,Xt.styleSheet,Xt.stylis);return J}(K,ne),Fe=Ti(be,et);return $e&&(Fe+=" "+$e),ne.className&&(Fe+=" "+ne.className),X[Id(se)&&!ww.has(se)?"class":"className"]=Fe,U&&(X.ref=U),O.createElement(se,X)}(C,z,F)}x.displayName=m;var C=rt.forwardRef(x);return C.attrs=j,C.componentStyle=S,C.displayName=m,C.shouldForwardProp=E,C.foldedComponentIds=r?Ti(s.foldedComponentIds,s.styledComponentId):"",C.styledComponentId=_,C.target=r?s.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=r?function(F){for(var M=[],L=1;L<arguments.length;L++)M[L-1]=arguments[L];for(var U=0,Z=M;U<Z.length;U++)nh(F,Z[U],!0);return F}({},s.defaultProps,z):z}}),dg(C,function(){return".".concat(C.styledComponentId)}),l&&kw(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Dv(e,t){for(var n=[e[0]],r=0,s=t.length;r<s;r+=1)n.push(t[r],e[r+1]);return n}var Uv=function(e){return Object.assign(e,{isCss:!0})};function v9(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Uo(e)||pl(e))return Uv(zi(Dv(Nc,Ju([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?zi(r):Uv(zi(Dv(r,t)))}function ih(e,t,n){if(n===void 0&&(n=Do),!t)throw Cl(1,t);var r=function(s){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,v9.apply(void 0,Ju([s],l,!1)))};return r.attrs=function(s){return ih(e,t,Kt(Kt({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return ih(e,t,Kt(Kt({},n),s))},r}var zw=function(e){return ih(m9,e)},k=zw;ww.forEach(function(e){k[e]=zw(e)});const Fw=()=>{const[e,t]=O.useState({email:"",password:""}),[n,r]=O.useState(!1),{login:s,error:l,setError:u}=O.useContext(pi),c=di(),d=v=>{t({...e,[v.target.name]:v.target.value}),l&&u(null)},h=async v=>{v.preventDefault(),r(!0);try{await s(e),c("/dashboard")}catch(m){console.error("Login error:",m)}finally{r(!1)}};return p.jsxs(y9,{children:[l&&p.jsx(_9,{children:l}),p.jsxs(x9,{onSubmit:h,children:[p.jsxs(Bv,{children:[p.jsx(Wv,{htmlFor:"email",children:"Email"}),p.jsx(Hv,{type:"email",id:"email",name:"email",value:e.email,onChange:d,required:!0,placeholder:"Enter your email"})]}),p.jsxs(Bv,{children:[p.jsx(Wv,{htmlFor:"password",children:"Password"}),p.jsx(Hv,{type:"password",id:"password",name:"password",value:e.password,onChange:d,required:!0,placeholder:"Enter your password"})]}),p.jsx(w9,{children:"Forgot password?"}),p.jsx(S9,{type:"submit",disabled:n,children:n?"Logging in...":"Log In"})]})]})},y9=k.div`
  width: 100%;
`,x9=k.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Bv=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Wv=k.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: #4a5568;
`,Hv=k.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`,w9=k.a`
  font-size: 0.875rem;
  color: #3182ce;
  text-align: right;
  margin-top: -0.5rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,S9=k.button`
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 0.5rem;
  
  &:hover:not(:disabled) {
    background-color: #2c5282;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`,_9=k.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`,Nw=e=>e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!1,C9=e=>e?e.length<6?{isValid:!1,message:"Password must be at least 6 characters"}:{isValid:!0,message:""}:{isValid:!1,message:"Password is required"},E9=e=>e?e.length<3?{isValid:!1,message:"Username must be at least 3 characters"}:e.length>20?{isValid:!1,message:"Username must be no more than 20 characters"}:/^[a-zA-Z0-9_-]+$/.test(e)?{isValid:!0,message:""}:{isValid:!1,message:"Username can only contain letters, numbers, underscores, and hyphens"}:{isValid:!1,message:"Username is required"},b9=e=>e?e.length<1?{isValid:!1,message:"Project name must not be empty"}:e.length>50?{isValid:!1,message:"Project name must be no more than 50 characters"}:{isValid:!0,message:""}:{isValid:!1,message:"Project name is required"},Mw=()=>{const[e,t]=O.useState({username:"",email:"",password:"",confirmPassword:""}),[n,r]=O.useState({}),[s,l]=O.useState(!1),{register:u,error:c,setError:d}=O.useContext(pi),h=di(),v=j=>{const{name:E,value:P}=j.target;t({...e,[E]:P}),n[E]&&r({...n,[E]:""}),c&&d(null)},m=()=>{const j={},E=E9(e.username);E.isValid||(j.username=E.message),Nw(e.email)||(j.email="Please enter a valid email address");const P=C9(e.password);return P.isValid||(j.password=P.message),e.password!==e.confirmPassword&&(j.confirmPassword="Passwords do not match"),r(j),Object.keys(j).length===0},_=async j=>{if(j.preventDefault(),!!m()){l(!0);try{const{confirmPassword:E,...P}=e;await u(P),h("/dashboard")}catch(E){console.error("Registration error:",E)}finally{l(!1)}}};return p.jsxs(k9,{children:[c&&p.jsx(O9,{children:c}),p.jsxs(P9,{onSubmit:_,children:[p.jsxs(za,{children:[p.jsx(Fa,{htmlFor:"username",children:"Username"}),p.jsx(Na,{type:"text",id:"username",name:"username",value:e.username,onChange:v,placeholder:"Choose a username",isInvalid:!!n.username}),n.username&&p.jsx(Ma,{children:n.username})]}),p.jsxs(za,{children:[p.jsx(Fa,{htmlFor:"email",children:"Email"}),p.jsx(Na,{type:"email",id:"email",name:"email",value:e.email,onChange:v,placeholder:"Enter your email",isInvalid:!!n.email}),n.email&&p.jsx(Ma,{children:n.email})]}),p.jsxs(za,{children:[p.jsx(Fa,{htmlFor:"password",children:"Password"}),p.jsx(Na,{type:"password",id:"password",name:"password",value:e.password,onChange:v,placeholder:"Create a password",isInvalid:!!n.password}),n.password&&p.jsx(Ma,{children:n.password})]}),p.jsxs(za,{children:[p.jsx(Fa,{htmlFor:"confirmPassword",children:"Confirm Password"}),p.jsx(Na,{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:v,placeholder:"Confirm your password",isInvalid:!!n.confirmPassword}),n.confirmPassword&&p.jsx(Ma,{children:n.confirmPassword})]}),p.jsx(j9,{type:"submit",disabled:s,children:s?"Creating Account...":"Sign Up"})]})]})},k9=k.div`
  width: 100%;
`,P9=k.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,za=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Fa=k.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: #4a5568;
`,Na=k.input`
  padding: 0.75rem;
  border: 1px solid ${e=>e.isInvalid?"#e53e3e":"#e2e8f0"};
  border-radius: 0.25rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.isInvalid?"#e53e3e":"#3182ce"};
    box-shadow: 0 0 0 3px ${e=>e.isInvalid?"rgba(229, 62, 62, 0.2)":"rgba(49, 130, 206, 0.2)"};
  }
`,Ma=k.p`
  margin: 0;
  font-size: 0.875rem;
  color: #e53e3e;
`,j9=k.button`
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #2c5282;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`,O9=k.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;var Iw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vv=rt.createContext&&rt.createContext(Iw),oi=globalThis&&globalThis.__assign||function(){return oi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},oi.apply(this,arguments)},T9=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function $w(e){return e&&e.map(function(t,n){return rt.createElement(t.tag,oi({key:n},t.attr),$w(t.child))})}function je(e){return function(t){return rt.createElement(R9,oi({attr:oi({},e.attr)},t),$w(e.child))}}function R9(e){var t=function(n){var r=e.attr,s=e.size,l=e.title,u=T9(e,["attr","size","title"]),c=s||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),rt.createElement("svg",oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:d,style:oi(oi({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&rt.createElement("title",null,l),e.children)};return Vv!==void 0?rt.createElement(Vv.Consumer,null,function(n){return t(n)}):t(Iw)}function Dw(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"}}]})(e)}function Uw(e){return je({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(e)}function Bw(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"}}]})(e)}function pg(e){return je({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"}}]})(e)}function Ww(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"}}]})(e)}function L9(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function A9(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function z9(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function Qo(e){return je({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function F9(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function N9(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"}}]})(e)}function M9(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function Hw(e){return je({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)}function I9(e){return je({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function tc(e){return je({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}}]})(e)}function $9(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(e)}function D9(e){return je({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"}}]})(e)}function Vw(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}}]})(e)}function hg(e){return je({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"}}]})(e)}function gg(e){return je({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function mg(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Gw(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function hl(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function U9(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"}}]})(e)}function qw(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function vg(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"}}]})(e)}function B9(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function W9(e){return je({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function yg(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function H9(e){return je({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"}}]})(e)}function V9(e){return je({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const G9=()=>{const[e,t]=O.useState("login");return p.jsxs(q9,{children:[p.jsxs(K9,{children:[p.jsxs(Y9,{children:[p.jsxs(Q9,{children:[p.jsx(J9,{children:p.jsx(Qo,{})}),p.jsx(X9,{children:"Code Editor"})]}),p.jsxs(Z9,{children:[p.jsx(eO,{children:"Features"}),p.jsxs(Ia,{children:[p.jsx($a,{children:"Multiple Languages"}),p.jsx(Da,{children:"Support for JavaScript, Python, HTML, CSS and many more"})]}),p.jsxs(Ia,{children:[p.jsx($a,{children:"Jupyter Notebooks"}),p.jsx(Da,{children:"Built-in support for .ipynb files with interactive cells"})]}),p.jsxs(Ia,{children:[p.jsx($a,{children:"Collaboration"}),p.jsx(Da,{children:"Share your projects with team members and collaborate"})]}),p.jsxs(Ia,{children:[p.jsx($a,{children:"Project Management"}),p.jsx(Da,{children:"Organize your code into projects with multiple files"})]})]})]}),p.jsxs(tO,{children:[p.jsxs(nO,{children:[p.jsx(Gv,{isActive:e==="login",onClick:()=>t("login"),children:"Log In"}),p.jsx(Gv,{isActive:e==="register",onClick:()=>t("register"),children:"Sign Up"})]}),p.jsx(rO,{children:e==="login"?p.jsx(Fw,{}):p.jsx(Mw,{})})]})]}),p.jsx(iO,{children:p.jsxs(oO,{children:["© ",new Date().getFullYear()," Code Editor. All rights reserved."]})})]})},q9=k.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`,K9=k.div`
  display: flex;
  flex: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`,Y9=k.div`
  flex: 5;
  background-color: #2d3748;
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
`,Q9=k.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`,J9=k.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #63b3ed;
`,X9=k.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`,Z9=k.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,eO=k.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #63b3ed;
`,Ia=k.div`
  margin-bottom: 1.5rem;
`,$a=k.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,Da=k.p`
  color: #a0aec0;
  line-height: 1.5;
`,tO=k.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 992px) {
    padding: 1rem;
  }
`,nO=k.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 400px;
`,Gv=k.button`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${e=>e.isActive?"#3182ce":"#e2e8f0"};
  color: ${e=>e.isActive?"white":"#4a5568"};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  
  &:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  &:hover {
    background-color: ${e=>e.isActive?"#2c5282":"#cbd5e0"};
  }
`,rO=k.div`
  width: 100%;
  max-width: 400px;
`,iO=k.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-top: 1px solid #e2e8f0;
`,oO=k.p`
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
`,sO=()=>p.jsx(Fw,{}),lO=()=>p.jsx(Mw,{}),gn=bi.create({baseURL:cw,headers:{"Content-Type":"application/json"}});gn.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));gn.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("token"),window.location.href="/login"),Promise.reject(e)});const Kw=async()=>(await gn.get("/projects")).data,aO=async e=>(await gn.get(`/projects/${e}`)).data,uO=async e=>(await gn.post("/projects",e)).data,cO=async(e,t)=>(await gn.put(`/projects/${e}`,t)).data,Yw=async e=>(await gn.delete(`/projects/${e}`)).data,Qw=async e=>(await gn.get(`/projects/${e}/files`)).data,Jw=async(e,t)=>(await gn.post(`/projects/${e}/files`,t)).data,fO=async(e,t)=>(await gn.get(`/projects/${e}/files/${t}`)).data,Xw=async(e,t,n)=>(await gn.put(`/projects/${e}/files/${t}`,{content:n})).data,Zw=async(e,t)=>(await gn.delete(`/projects/${e}/files/${t}`)).data,e4=async(e,t)=>(await gn.post(`/projects/${e}/share`,t)).data;function oh(e){"@babel/helpers - typeof";return oh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oh(e)}function Jn(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Rt(e){Jn(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||oh(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var dO={};function pO(){return dO}function qv(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function yu(e,t){Jn(2,arguments);var n=Rt(e),r=Rt(t),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}function hO(e,t){Jn(2,arguments);var n=Rt(e),r=Rt(t),s=n.getFullYear()-r.getFullYear(),l=n.getMonth()-r.getMonth();return s*12+l}function gO(e,t){return Jn(2,arguments),Rt(e).getTime()-Rt(t).getTime()}var Kv={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},mO="trunc";function vO(e){return e?Kv[e]:Kv[mO]}function yO(e){Jn(1,arguments);var t=Rt(e);return t.setHours(23,59,59,999),t}function xO(e){Jn(1,arguments);var t=Rt(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function wO(e){Jn(1,arguments);var t=Rt(e);return yO(t).getTime()===xO(t).getTime()}function SO(e,t){Jn(2,arguments);var n=Rt(e),r=Rt(t),s=yu(n,r),l=Math.abs(hO(n,r)),u;if(l<1)u=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*l);var c=yu(n,r)===-s;wO(Rt(e))&&l===1&&yu(e,r)===1&&(c=!1),u=s*(l-Number(c))}return u===0?0:u}function _O(e,t,n){Jn(2,arguments);var r=gO(e,t)/1e3;return vO(n==null?void 0:n.roundingMethod)(r)}var CO={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},EO=function(t,n,r){var s,l=CO[t];return typeof l=="string"?s=l:n===1?s=l.one:s=l.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+s:s+" ago":s};const bO=EO;function Dd(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var kO={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},PO={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},jO={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},OO={date:Dd({formats:kO,defaultWidth:"full"}),time:Dd({formats:PO,defaultWidth:"full"}),dateTime:Dd({formats:jO,defaultWidth:"full"})};const TO=OO;var RO={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},LO=function(t,n,r,s){return RO[t]};const AO=LO;function Ps(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",s;if(r==="formatting"&&e.formattingValues){var l=e.defaultFormattingWidth||e.defaultWidth,u=n!=null&&n.width?String(n.width):l;s=e.formattingValues[u]||e.formattingValues[l]}else{var c=e.defaultWidth,d=n!=null&&n.width?String(n.width):e.defaultWidth;s=e.values[d]||e.values[c]}var h=e.argumentCallback?e.argumentCallback(t):t;return s[h]}}var zO={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},FO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},NO={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},MO={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},IO={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},$O={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},DO=function(t,n){var r=Number(t),s=r%100;if(s>20||s<10)switch(s%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},UO={ordinalNumber:DO,era:Ps({values:zO,defaultWidth:"wide"}),quarter:Ps({values:FO,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Ps({values:NO,defaultWidth:"wide"}),day:Ps({values:MO,defaultWidth:"wide"}),dayPeriod:Ps({values:IO,defaultWidth:"wide",formattingValues:$O,defaultFormattingWidth:"wide"})};const BO=UO;function js(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,s=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],l=t.match(s);if(!l)return null;var u=l[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?HO(c,function(m){return m.test(u)}):WO(c,function(m){return m.test(u)}),h;h=e.valueCallback?e.valueCallback(d):d,h=n.valueCallback?n.valueCallback(h):h;var v=t.slice(u.length);return{value:h,rest:v}}}function WO(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function HO(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function VO(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var s=r[0],l=t.match(e.parsePattern);if(!l)return null;var u=e.valueCallback?e.valueCallback(l[0]):l[0];u=n.valueCallback?n.valueCallback(u):u;var c=t.slice(s.length);return{value:u,rest:c}}}var GO=/^(\d+)(th|st|nd|rd)?/i,qO=/\d+/i,KO={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},YO={any:[/^b/i,/^(a|c)/i]},QO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},JO={any:[/1/i,/2/i,/3/i,/4/i]},XO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ZO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},eT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},tT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nT={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},rT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},iT={ordinalNumber:VO({matchPattern:GO,parsePattern:qO,valueCallback:function(t){return parseInt(t,10)}}),era:js({matchPatterns:KO,defaultMatchWidth:"wide",parsePatterns:YO,defaultParseWidth:"any"}),quarter:js({matchPatterns:QO,defaultMatchWidth:"wide",parsePatterns:JO,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:js({matchPatterns:XO,defaultMatchWidth:"wide",parsePatterns:ZO,defaultParseWidth:"any"}),day:js({matchPatterns:eT,defaultMatchWidth:"wide",parsePatterns:tT,defaultParseWidth:"any"}),dayPeriod:js({matchPatterns:nT,defaultMatchWidth:"any",parsePatterns:rT,defaultParseWidth:"any"})};const oT=iT;var sT={code:"en-US",formatDistance:bO,formatLong:TO,formatRelative:AO,localize:BO,match:oT,options:{weekStartsOn:0,firstWeekContainsDate:1}};const lT=sT;function t4(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function aT(e){return t4({},e)}var Yv=1440,uT=2520,Ud=43200,cT=86400;function fT(e,t,n){var r,s;Jn(2,arguments);var l=pO(),u=(r=(s=n==null?void 0:n.locale)!==null&&s!==void 0?s:l.locale)!==null&&r!==void 0?r:lT;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=yu(e,t);if(isNaN(c))throw new RangeError("Invalid time value");var d=t4(aT(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:c}),h,v;c>0?(h=Rt(t),v=Rt(e)):(h=Rt(e),v=Rt(t));var m=_O(v,h),_=(qv(v)-qv(h))/1e3,j=Math.round((m-_)/60),E;if(j<2)return n!=null&&n.includeSeconds?m<5?u.formatDistance("lessThanXSeconds",5,d):m<10?u.formatDistance("lessThanXSeconds",10,d):m<20?u.formatDistance("lessThanXSeconds",20,d):m<40?u.formatDistance("halfAMinute",0,d):m<60?u.formatDistance("lessThanXMinutes",1,d):u.formatDistance("xMinutes",1,d):j===0?u.formatDistance("lessThanXMinutes",1,d):u.formatDistance("xMinutes",j,d);if(j<45)return u.formatDistance("xMinutes",j,d);if(j<90)return u.formatDistance("aboutXHours",1,d);if(j<Yv){var P=Math.round(j/60);return u.formatDistance("aboutXHours",P,d)}else{if(j<uT)return u.formatDistance("xDays",1,d);if(j<Ud){var R=Math.round(j/Yv);return u.formatDistance("xDays",R,d)}else if(j<cT)return E=Math.round(j/Ud),u.formatDistance("aboutXMonths",E,d)}if(E=SO(v,h),E<12){var S=Math.round(j/Ud);return u.formatDistance("xMonths",S,d)}else{var x=E%12,C=Math.floor(E/12);return x<3?u.formatDistance("aboutXYears",C,d):x<9?u.formatDistance("overXYears",C,d):u.formatDistance("almostXYears",C+1,d)}}function dT(e,t){return Jn(1,arguments),fT(e,Date.now(),t)}const n4=({project:e,onDelete:t,isOwner:n})=>{const[r,s]=O.useState(!1),[l,u]=O.useState({top:0,right:0}),c=v=>{v.preventDefault(),v.stopPropagation();const m=v.currentTarget.getBoundingClientRect();u({top:m.bottom+window.scrollY,right:window.innerWidth-m.right-window.scrollX}),s(!r)},d=v=>{v.preventDefault(),v.stopPropagation(),s(!1),t()},h=e.createdAt?dT(new Date(e.createdAt),{addSuffix:!0}):"Unknown date";return p.jsx(pT,{children:p.jsx(Cc,{to:`/projects/${e._id}`,children:p.jsxs(hT,{children:[p.jsxs(gT,{children:[p.jsx(mT,{children:p.jsx(Qo,{})}),p.jsx(vT,{children:e.name}),p.jsx(yT,{onClick:c,children:p.jsx(Hw,{})}),r&&p.jsxs(xT,{style:{top:l.top,right:l.right},children:[n&&p.jsxs(Qv,{onClick:d,children:[p.jsx(yg,{}),"Delete"]}),p.jsxs(Qv,{children:[p.jsx(vg,{}),"Share"]})]})]}),p.jsx(wT,{children:e.description||"No description provided"}),p.jsxs(ST,{children:[p.jsxs(_T,{children:[p.jsxs(CT,{isPublic:e.isPublic,children:[e.isPublic?p.jsx(hg,{}):p.jsx(mg,{}),e.isPublic?"Public":"Private"]}),p.jsxs(ET,{children:["Created ",h]})]}),p.jsxs(bT,{children:[p.jsx(kT,{children:p.jsx(V9,{})}),p.jsx(PT,{children:n?"You":e.owner.username||"Unknown User"})]})]})]})})})},pT=k.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
`,hT=k.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`,gT=k.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`,mT=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ebf8ff;
  color: #3182ce;
  border-radius: 8px;
  margin-right: 12px;
  
  svg {
    font-size: 18px;
  }
`,vT=k.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,yT=k.button`
  background-color: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f7fafc;
    color: #4a5568;
  }
  
  svg {
    font-size: 14px;
  }
`,xT=k.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
  overflow: hidden;
`,Qv=k.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 14px;
    color: #718096;
  }
`,wT=k.p`
  margin: 0 0 20px;
  color: #718096;
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
  
  // Display only 2 lines with ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ST=k.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`,_T=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,CT=k.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.isPublic?"#38a169":"#718096"};
  background-color: ${e=>e.isPublic?"#f0fff4":"#f7fafc"};
  padding: 4px 8px;
  border-radius: 4px;
  
  svg {
    font-size: 10px;
  }
`,ET=k.div`
  font-size: 12px;
  color: #a0aec0;
`,bT=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,kT=k.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  
  svg {
    font-size: 12px;
  }
`,PT=k.div`
  font-size: 12px;
  color: #718096;
`,jT=({isOpen:e,onClose:t,onCreate:n})=>{const[r,s]=O.useState({name:"",description:"",isPublic:!1}),[l,u]=O.useState(""),[c,d]=O.useState(!1);if(!e)return null;const h=m=>{const{name:_,value:j,type:E,checked:P}=m.target;s({...r,[_]:E==="checkbox"?P:j}),l&&u("")},v=m=>{m.preventDefault();const _=b9(r.name);if(!_.isValid){u(_.message);return}d(!0);try{n(r),s({name:"",description:"",isPublic:!1})}catch(j){u(j.message||"Failed to create project. Please try again.")}finally{d(!1)}};return p.jsx(OT,{onClick:t,children:p.jsxs(TT,{onClick:m=>m.stopPropagation(),children:[p.jsxs(RT,{children:[p.jsx(LT,{children:"Create New Project"}),p.jsx(AT,{onClick:t,children:"×"})]}),p.jsxs(zT,{children:[l&&p.jsx(BT,{children:l}),p.jsxs(FT,{onSubmit:v,children:[p.jsxs(Bd,{children:[p.jsx(Jv,{htmlFor:"name",children:"Project Name"}),p.jsx(NT,{type:"text",id:"name",name:"name",value:r.name,onChange:h,placeholder:"Enter project name",autoFocus:!0})]}),p.jsxs(Bd,{children:[p.jsx(Jv,{htmlFor:"description",children:"Description (optional)"}),p.jsx(MT,{id:"description",name:"description",value:r.description,onChange:h,placeholder:"Enter project description",rows:3})]}),p.jsx(Bd,{children:p.jsxs(IT,{children:[p.jsxs(Xv,{isSelected:!r.isPublic,onClick:()=>s({...r,isPublic:!1}),children:[p.jsx(mg,{}),p.jsxs("div",{children:[p.jsx(Zv,{children:"Private"}),p.jsx(ey,{children:"Only you and people you share with can access"})]})]}),p.jsxs(Xv,{isSelected:r.isPublic,onClick:()=>s({...r,isPublic:!0}),children:[p.jsx(hg,{}),p.jsxs("div",{children:[p.jsx(Zv,{children:"Public"}),p.jsx(ey,{children:"Anyone with the link can view this project"})]})]})]})}),p.jsxs($T,{children:[p.jsx(DT,{type:"button",onClick:t,children:"Cancel"}),p.jsx(UT,{type:"submit",disabled:c,children:c?"Creating...":"Create Project"})]})]})]})]})})},OT=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,TT=k.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`,RT=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e2e8f0;
`,LT=k.h3`
  font-weight: 600;
  font-size: 18px;
  color: #2d3748;
  margin: 0;
`,AT=k.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #a0aec0;
  cursor: pointer;
  
  &:hover {
    color: #4a5568;
  }
`,zT=k.div`
  padding: 20px;
`,FT=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Bd=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Jv=k.label`
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
`,NT=k.input`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`,MT=k.textarea`
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`,IT=k.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,Xv=k.div`
  flex: 1;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid ${e=>e.isSelected?"#3182ce":"#e2e8f0"};
  border-radius: 6px;
  background-color: ${e=>e.isSelected?"#ebf8ff":"white"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${e=>e.isSelected?"#3182ce":"#cbd5e0"};
    background-color: ${e=>e.isSelected?"#ebf8ff":"#f7fafc"};
  }
  
  svg {
    color: ${e=>e.isSelected?"#3182ce":"#718096"};
    font-size: 18px;
    margin-top: 2px;
  }
`,Zv=k.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #2d3748;
`,ey=k.p`
  margin: 0;
  font-size: 12px;
  color: #718096;
`,$T=k.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`,r4=k.button`
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`,DT=k(r4)`
  background-color: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  
  &:hover {
    background-color: #f7fafc;
  }
`,UT=k(r4)`
  background-color: #3182ce;
  border: none;
  color: white;
  
  &:hover {
    background-color: #2c5282;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`,BT=k.div`
  color: #e53e3e;
  background-color: #FFF5F5;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid #e53e3e;
`,WT=()=>{const[e,t]=O.useState([]),[n,r]=O.useState(!0),[s,l]=O.useState(null),[u,c]=O.useState(!1),[d,h]=O.useState(""),[v,m]=O.useState("all"),{currentUser:_}=O.useContext(pi);O.useEffect(()=>{j()},[]);const j=async()=>{r(!0);try{const S=await Kw();t(S),l(null)}catch(S){console.error("Error fetching projects:",S),l("Failed to load projects. Please try again.")}finally{r(!1)}},E=async S=>{try{const x=await uO(S);t([...e,x]),c(!1)}catch(x){console.error("Error creating project:",x),l("Failed to create project. Please try again.")}},P=async S=>{if(window.confirm("Are you sure you want to delete this project?"))try{await Yw(S),t(e.filter(x=>x._id!==S))}catch(x){console.error("Error deleting project:",x),l("Failed to delete project. Please try again.")}},R=e.filter(S=>v==="owned"?S.owner._id===_.id:v==="shared"?S.collaborators.some(x=>x.user._id===_.id):!0).filter(S=>S.name.toLowerCase().includes(d.toLowerCase())||S.description&&S.description.toLowerCase().includes(d.toLowerCase()));return n?p.jsxs(oR,{children:[p.jsx(sR,{}),p.jsx("p",{children:"Loading projects..."})]}):p.jsxs(HT,{children:[p.jsxs(VT,{children:[p.jsx(GT,{children:"My Projects"}),p.jsxs(qT,{children:[p.jsxs(KT,{children:[p.jsx(YT,{children:p.jsx(qw,{})}),p.jsx(QT,{type:"text",placeholder:"Search projects...",value:d,onChange:S=>h(S.target.value)})]}),p.jsxs(JT,{children:[p.jsxs(XT,{children:[p.jsx($9,{}),p.jsx("span",{children:"Filter:"})]}),p.jsxs(ZT,{value:v,onChange:S=>m(S.target.value),children:[p.jsx("option",{value:"all",children:"All Projects"}),p.jsx("option",{value:"owned",children:"My Projects"}),p.jsx("option",{value:"shared",children:"Shared With Me"})]})]}),p.jsxs(eR,{onClick:()=>c(!0),children:[p.jsx(hl,{}),p.jsx("span",{children:"New Project"})]})]})]}),s&&p.jsx(iR,{children:s}),R.length===0?p.jsxs(nR,{children:[p.jsx("h2",{children:"No projects found"}),d||v!=="all"?p.jsx("p",{children:"Try changing your search or filter criteria."}):p.jsxs(p.Fragment,{children:[p.jsx("p",{children:"Create your first project to get started!"}),p.jsxs(rR,{onClick:()=>c(!0),children:[p.jsx(hl,{}),p.jsx("span",{children:"Create Project"})]})]})]}):p.jsx(tR,{children:R.map(S=>p.jsx(n4,{project:S,onDelete:()=>P(S._id),isOwner:S.owner._id===_.id},S._id))}),p.jsx(jT,{isOpen:u,onClose:()=>c(!1),onCreate:E})]})},HT=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,VT=k.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,GT=k.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #2d3748;
`,qT=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,KT=k.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0 10px;
  
  @media (min-width: 768px) {
    width: 250px;
  }
`,YT=k.div`
  color: #a0aec0;
  display: flex;
  align-items: center;
`,QT=k.input`
  border: none;
  padding: 8px 10px;
  flex-grow: 1;
  outline: none;
  font-size: 14px;
`,JT=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,XT=k.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #4a5568;
  font-size: 14px;
  
  svg {
    font-size: 12px;
  }
`,ZT=k.select`
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: white;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  
  &:focus {
    border-color: #3182ce;
  }
`,eR=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2c5282;
  }
  
  svg {
    font-size: 12px;
  }
`,tR=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,nR=k.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #e2e8f0;
  
  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #2d3748;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 20px;
    color: #718096;
  }
`,rR=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 auto;
  
  &:hover {
    background-color: #2c5282;
  }
`,iR=k.div`
  background-color: #FFF5F5;
  color: #C53030;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-left: 4px solid #C53030;
`,oR=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #718096;
`,sR=k.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;var i4={exports:{}},lR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aR=lR,uR=aR;function o4(){}function s4(){}s4.resetWarningCache=o4;var cR=function(){function e(r,s,l,u,c,d){if(d!==uR){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s4,resetWarningCache:o4};return n.PropTypes=n,n};i4.exports=cR();var fR=i4.exports;const Le=yy(fR);var En=typeof window<"u"?window:null,xg=En===null,gl=xg?void 0:En.document,In="addEventListener",$n="removeEventListener",Wd="getBoundingClientRect",Os="_a",Dn="_b",yr="_c",Ua="horizontal",Un=function(){return!1},dR=xg?"calc":["","-webkit-","-moz-","-o-"].filter(function(e){var t=gl.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length}).shift()+"calc",l4=function(e){return typeof e=="string"||e instanceof String},ty=function(e){if(l4(e)){var t=gl.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},jt=function(e,t,n){var r=e[t];return r!==void 0?r:n},Ba=function(e,t,n,r){if(t){if(r==="end")return 0;if(r==="center")return e/2}else if(n){if(r==="start")return 0;if(r==="center")return e/2}return e},pR=function(e,t){var n=gl.createElement("div");return n.className="gutter gutter-"+t,n},hR=function(e,t,n){var r={};return l4(t)?r[e]=t:r[e]=dR+"("+t+"% - "+n+"px)",r},gR=function(e,t){var n;return n={},n[e]=t+"px",n},ny=function(e,t){if(t===void 0&&(t={}),xg)return{};var n=e,r,s,l,u,c,d;Array.from&&(n=Array.from(n));var h=ty(n[0]),v=h.parentNode,m=getComputedStyle?getComputedStyle(v):null,_=m?m.flexDirection:null,j=jt(t,"sizes")||n.map(function(){return 100/n.length}),E=jt(t,"minSize",100),P=Array.isArray(E)?E:n.map(function(){return E}),R=jt(t,"maxSize",1/0),S=Array.isArray(R)?R:n.map(function(){return R}),x=jt(t,"expandToMin",!1),C=jt(t,"gutterSize",10),z=jt(t,"gutterAlign","center"),F=jt(t,"snapOffset",30),M=Array.isArray(F)?F:n.map(function(){return F}),L=jt(t,"dragInterval",1),U=jt(t,"direction",Ua),Z=jt(t,"cursor",U===Ua?"col-resize":"row-resize"),K=jt(t,"gutter",pR),Ce=jt(t,"elementStyle",hR),be=jt(t,"gutterStyle",gR);U===Ua?(r="width",s="clientX",l="left",u="right",c="clientWidth"):U==="vertical"&&(r="height",s="clientY",l="top",u="bottom",c="clientHeight");function et(J,H,Y,re){var ke=Ce(r,H,Y,re);Object.keys(ke).forEach(function(Ke){J.style[Ke]=ke[Ke]})}function At(J,H,Y){var re=be(r,H,Y);Object.keys(re).forEach(function(ke){J.style[ke]=re[ke]})}function le(){return d.map(function(J){return J.size})}function Se(J){return"touches"in J?J.touches[0][s]:J[s]}function ze(J){var H=d[this.a],Y=d[this.b],re=H.size+Y.size;H.size=J/this.size*re,Y.size=re-J/this.size*re,et(H.element,H.size,this[Dn],H.i),et(Y.element,Y.size,this[yr],Y.i)}function q(J){var H,Y=d[this.a],re=d[this.b];this.dragging&&(H=Se(J)-this.start+(this[Dn]-this.dragOffset),L>1&&(H=Math.round(H/L)*L),H<=Y.minSize+Y.snapOffset+this[Dn]?H=Y.minSize+this[Dn]:H>=this.size-(re.minSize+re.snapOffset+this[yr])&&(H=this.size-(re.minSize+this[yr])),H>=Y.maxSize-Y.snapOffset+this[Dn]?H=Y.maxSize+this[Dn]:H<=this.size-(re.maxSize-re.snapOffset+this[yr])&&(H=this.size-(re.maxSize+this[yr])),ze.call(this,H),jt(t,"onDrag",Un)(le()))}function ne(){var J=d[this.a].element,H=d[this.b].element,Y=J[Wd](),re=H[Wd]();this.size=Y[r]+re[r]+this[Dn]+this[yr],this.start=Y[l],this.end=Y[u]}function se(J){if(!getComputedStyle)return null;var H=getComputedStyle(J);if(!H)return null;var Y=J[c];return Y===0?null:(U===Ua?Y-=parseFloat(H.paddingLeft)+parseFloat(H.paddingRight):Y-=parseFloat(H.paddingTop)+parseFloat(H.paddingBottom),Y)}function X(J){var H=se(v);if(H===null||P.reduce(function(Ke,Ue){return Ke+Ue},0)>H)return J;var Y=0,re=[],ke=J.map(function(Ke,Ue){var Zt=H*Ke/100,Hi=Ba(C,Ue===0,Ue===J.length-1,z),Ut=P[Ue]+Hi;return Zt<Ut?(Y+=Ut-Zt,re.push(0),Ut):(re.push(Zt-Ut),Zt)});return Y===0?J:ke.map(function(Ke,Ue){var Zt=Ke;if(Y>0&&re[Ue]-Y>0){var Hi=Math.min(Y,re[Ue]-Y);Y-=Hi,Zt=Ke-Hi}return Zt/H*100})}function oe(){var J=this,H=d[J.a].element,Y=d[J.b].element;J.dragging&&jt(t,"onDragEnd",Un)(le()),J.dragging=!1,En[$n]("mouseup",J.stop),En[$n]("touchend",J.stop),En[$n]("touchcancel",J.stop),En[$n]("mousemove",J.move),En[$n]("touchmove",J.move),J.stop=null,J.move=null,H[$n]("selectstart",Un),H[$n]("dragstart",Un),Y[$n]("selectstart",Un),Y[$n]("dragstart",Un),H.style.userSelect="",H.style.webkitUserSelect="",H.style.MozUserSelect="",H.style.pointerEvents="",Y.style.userSelect="",Y.style.webkitUserSelect="",Y.style.MozUserSelect="",Y.style.pointerEvents="",J.gutter.style.cursor="",J.parent.style.cursor="",gl.body.style.cursor=""}function $e(J){if(!("button"in J&&J.button!==0)){var H=this,Y=d[H.a].element,re=d[H.b].element;H.dragging||jt(t,"onDragStart",Un)(le()),J.preventDefault(),H.dragging=!0,H.move=q.bind(H),H.stop=oe.bind(H),En[In]("mouseup",H.stop),En[In]("touchend",H.stop),En[In]("touchcancel",H.stop),En[In]("mousemove",H.move),En[In]("touchmove",H.move),Y[In]("selectstart",Un),Y[In]("dragstart",Un),re[In]("selectstart",Un),re[In]("dragstart",Un),Y.style.userSelect="none",Y.style.webkitUserSelect="none",Y.style.MozUserSelect="none",Y.style.pointerEvents="none",re.style.userSelect="none",re.style.webkitUserSelect="none",re.style.MozUserSelect="none",re.style.pointerEvents="none",H.gutter.style.cursor=Z,H.parent.style.cursor=Z,gl.body.style.cursor=Z,ne.call(H),H.dragOffset=Se(J)-H.end}}j=X(j);var Fe=[];d=n.map(function(J,H){var Y={element:ty(J),size:j[H],minSize:P[H],maxSize:S[H],snapOffset:M[H],i:H},re;if(H>0&&(re={a:H-1,b:H,dragging:!1,direction:U,parent:v},re[Dn]=Ba(C,H-1===0,!1,z),re[yr]=Ba(C,!1,H===n.length-1,z),_==="row-reverse"||_==="column-reverse")){var ke=re.a;re.a=re.b,re.b=ke}if(H>0){var Ke=K(H,U,Y.element);At(Ke,C,H),re[Os]=$e.bind(re),Ke[In]("mousedown",re[Os]),Ke[In]("touchstart",re[Os]),v.insertBefore(Ke,Y.element),re.gutter=Ke}return et(Y.element,Y.size,Ba(C,H===0,H===n.length-1,z),H),H>0&&Fe.push(re),Y});function De(J){var H=J.i===Fe.length,Y=H?Fe[J.i-1]:Fe[J.i];ne.call(Y);var re=H?Y.size-J.minSize-Y[yr]:J.minSize+Y[Dn];ze.call(Y,re)}d.forEach(function(J){var H=J.element[Wd]()[r];H<J.minSize&&(x?De(J):J.minSize=H)});function lt(J){var H=X(J);H.forEach(function(Y,re){if(re>0){var ke=Fe[re-1],Ke=d[ke.a],Ue=d[ke.b];Ke.size=H[re-1],Ue.size=Y,et(Ke.element,Ke.size,ke[Dn],Ke.i),et(Ue.element,Ue.size,ke[yr],Ue.i)}})}function Xt(J,H){Fe.forEach(function(Y){if(H!==!0?Y.parent.removeChild(Y.gutter):(Y.gutter[$n]("mousedown",Y[Os]),Y.gutter[$n]("touchstart",Y[Os])),J!==!0){var re=Ce(r,Y.a.size,Y[Dn]);Object.keys(re).forEach(function(ke){d[Y.a].element.style[ke]="",d[Y.b].element.style[ke]=""})}})}return{setSizes:lt,getSizes:le,collapse:function(H){De(d[H])},destroy:Xt,parent:v,pairs:Fe}};function Hd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)===-1&&(n[r]=e[r]);return n}var wg=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){var r=this.props;r.children;var s=r.gutter,l=Hd(r,["children","gutter"]),u=l;u.gutter=function(c,d){var h;return s?h=s(c,d):(h=document.createElement("div"),h.className="gutter gutter-"+d),h.__isSplitGutter=!0,h},this.split=ny(this.parent.children,u)},t.prototype.componentDidUpdate=function(r){var s=this,l=this.props;l.children;var u=l.minSize,c=l.sizes,d=l.collapsed,h=Hd(l,["children","minSize","sizes","collapsed"]),v=h,m=r.minSize,_=r.sizes,j=r.collapsed,E=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"],P=E.map(function(x){return s.props[x]!==r[x]}).reduce(function(x,C){return x||C},!1);if(Array.isArray(u)&&Array.isArray(m)){var R=!1;u.forEach(function(x,C){R=R||x!==m[C]}),P=P||R}else Array.isArray(u)||Array.isArray(m)?P=!0:P=P||u!==m;if(P)v.minSize=u,v.sizes=c||this.split.getSizes(),this.split.destroy(!0,!0),v.gutter=function(x,C,z){return z.previousSibling},this.split=ny(Array.from(this.parent.children).filter(function(x){return!x.__isSplitGutter}),v);else if(c){var S=!1;c.forEach(function(x,C){S=S||x!==_[C]}),S&&this.split.setSizes(this.props.sizes)}Number.isInteger(d)&&(d!==j||P)&&this.split.collapse(d)},t.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},t.prototype.render=function(){var r=this,s=this.props;s.sizes,s.minSize,s.maxSize,s.expandToMin,s.gutterSize,s.gutterAlign,s.snapOffset,s.dragInterval,s.direction,s.cursor,s.gutter,s.elementStyle,s.gutterStyle,s.onDrag,s.onDragStart,s.onDragEnd,s.collapsed;var l=s.children,u=Hd(s,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]),c=u;return rt.createElement("div",Object.assign({},{ref:function(d){r.parent=d}},c),l)},t}(rt.Component);wg.propTypes={sizes:Le.arrayOf(Le.number),minSize:Le.oneOfType([Le.number,Le.arrayOf(Le.number)]),maxSize:Le.oneOfType([Le.number,Le.arrayOf(Le.number)]),expandToMin:Le.bool,gutterSize:Le.number,gutterAlign:Le.string,snapOffset:Le.oneOfType([Le.number,Le.arrayOf(Le.number)]),dragInterval:Le.number,direction:Le.string,cursor:Le.string,gutter:Le.func,elementStyle:Le.func,gutterStyle:Le.func,onDrag:Le.func,onDragStart:Le.func,onDragEnd:Le.func,collapsed:Le.number,children:Le.arrayOf(Le.element)};wg.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};var nc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */nc.exports;(function(e,t){(function(){var n,r="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,v="__lodash_placeholder__",m=1,_=2,j=4,E=1,P=2,R=1,S=2,x=4,C=8,z=16,F=32,M=64,L=128,U=256,Z=512,K=30,Ce="...",be=800,et=16,At=1,le=2,Se=3,ze=1/0,q=9007199254740991,ne=17976931348623157e292,se=0/0,X=4294967295,oe=X-1,$e=X>>>1,Fe=[["ary",L],["bind",R],["bindKey",S],["curry",C],["curryRight",z],["flip",Z],["partial",F],["partialRight",M],["rearg",U]],De="[object Arguments]",lt="[object Array]",Xt="[object AsyncFunction]",J="[object Boolean]",H="[object Date]",Y="[object DOMException]",re="[object Error]",ke="[object Function]",Ke="[object GeneratorFunction]",Ue="[object Map]",Zt="[object Number]",Hi="[object Null]",Ut="[object Object]",Sg="[object Promise]",x4="[object Proxy]",Xo="[object RegExp]",Ln="[object Set]",Zo="[object String]",bl="[object Symbol]",w4="[object Undefined]",es="[object WeakMap]",S4="[object WeakSet]",ts="[object ArrayBuffer]",Vi="[object DataView]",Ic="[object Float32Array]",$c="[object Float64Array]",Dc="[object Int8Array]",Uc="[object Int16Array]",Bc="[object Int32Array]",Wc="[object Uint8Array]",Hc="[object Uint8ClampedArray]",Vc="[object Uint16Array]",Gc="[object Uint32Array]",_4=/\b__p \+= '';/g,C4=/\b(__p \+=) '' \+/g,E4=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_g=/&(?:amp|lt|gt|quot|#39);/g,Cg=/[&<>"']/g,b4=RegExp(_g.source),k4=RegExp(Cg.source),P4=/<%-([\s\S]+?)%>/g,j4=/<%([\s\S]+?)%>/g,Eg=/<%=([\s\S]+?)%>/g,O4=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T4=/^\w*$/,R4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qc=/[\\^$.*+?()[\]{}|]/g,L4=RegExp(qc.source),Kc=/^\s+/,A4=/\s/,z4=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,F4=/\{\n\/\* \[wrapped with (.+)\] \*/,N4=/,? & /,M4=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,I4=/[()=,{}\[\]\/\s]/,$4=/\\(\\)?/g,D4=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,bg=/\w*$/,U4=/^[-+]0x[0-9a-f]+$/i,B4=/^0b[01]+$/i,W4=/^\[object .+?Constructor\]$/,H4=/^0o[0-7]+$/i,V4=/^(?:0|[1-9]\d*)$/,G4=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,kl=/($^)/,q4=/['\n\r\u2028\u2029\\]/g,Pl="\\ud800-\\udfff",K4="\\u0300-\\u036f",Y4="\\ufe20-\\ufe2f",Q4="\\u20d0-\\u20ff",kg=K4+Y4+Q4,Pg="\\u2700-\\u27bf",jg="a-z\\xdf-\\xf6\\xf8-\\xff",J4="\\xac\\xb1\\xd7\\xf7",X4="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Z4="\\u2000-\\u206f",eS=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Og="A-Z\\xc0-\\xd6\\xd8-\\xde",Tg="\\ufe0e\\ufe0f",Rg=J4+X4+Z4+eS,Yc="['’]",tS="["+Pl+"]",Lg="["+Rg+"]",jl="["+kg+"]",Ag="\\d+",nS="["+Pg+"]",zg="["+jg+"]",Fg="[^"+Pl+Rg+Ag+Pg+jg+Og+"]",Qc="\\ud83c[\\udffb-\\udfff]",rS="(?:"+jl+"|"+Qc+")",Ng="[^"+Pl+"]",Jc="(?:\\ud83c[\\udde6-\\uddff]){2}",Xc="[\\ud800-\\udbff][\\udc00-\\udfff]",Gi="["+Og+"]",Mg="\\u200d",Ig="(?:"+zg+"|"+Fg+")",iS="(?:"+Gi+"|"+Fg+")",$g="(?:"+Yc+"(?:d|ll|m|re|s|t|ve))?",Dg="(?:"+Yc+"(?:D|LL|M|RE|S|T|VE))?",Ug=rS+"?",Bg="["+Tg+"]?",oS="(?:"+Mg+"(?:"+[Ng,Jc,Xc].join("|")+")"+Bg+Ug+")*",sS="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",lS="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wg=Bg+Ug+oS,aS="(?:"+[nS,Jc,Xc].join("|")+")"+Wg,uS="(?:"+[Ng+jl+"?",jl,Jc,Xc,tS].join("|")+")",cS=RegExp(Yc,"g"),fS=RegExp(jl,"g"),Zc=RegExp(Qc+"(?="+Qc+")|"+uS+Wg,"g"),dS=RegExp([Gi+"?"+zg+"+"+$g+"(?="+[Lg,Gi,"$"].join("|")+")",iS+"+"+Dg+"(?="+[Lg,Gi+Ig,"$"].join("|")+")",Gi+"?"+Ig+"+"+$g,Gi+"+"+Dg,lS,sS,Ag,aS].join("|"),"g"),pS=RegExp("["+Mg+Pl+kg+Tg+"]"),hS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,gS=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],mS=-1,Be={};Be[Ic]=Be[$c]=Be[Dc]=Be[Uc]=Be[Bc]=Be[Wc]=Be[Hc]=Be[Vc]=Be[Gc]=!0,Be[De]=Be[lt]=Be[ts]=Be[J]=Be[Vi]=Be[H]=Be[re]=Be[ke]=Be[Ue]=Be[Zt]=Be[Ut]=Be[Xo]=Be[Ln]=Be[Zo]=Be[es]=!1;var Me={};Me[De]=Me[lt]=Me[ts]=Me[Vi]=Me[J]=Me[H]=Me[Ic]=Me[$c]=Me[Dc]=Me[Uc]=Me[Bc]=Me[Ue]=Me[Zt]=Me[Ut]=Me[Xo]=Me[Ln]=Me[Zo]=Me[bl]=Me[Wc]=Me[Hc]=Me[Vc]=Me[Gc]=!0,Me[re]=Me[ke]=Me[es]=!1;var vS={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},yS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xS={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},wS={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},SS=parseFloat,_S=parseInt,Hg=typeof vs=="object"&&vs&&vs.Object===Object&&vs,CS=typeof self=="object"&&self&&self.Object===Object&&self,xt=Hg||CS||Function("return this")(),ef=t&&!t.nodeType&&t,hi=ef&&!0&&e&&!e.nodeType&&e,Vg=hi&&hi.exports===ef,tf=Vg&&Hg.process,mn=function(){try{var A=hi&&hi.require&&hi.require("util").types;return A||tf&&tf.binding&&tf.binding("util")}catch{}}(),Gg=mn&&mn.isArrayBuffer,qg=mn&&mn.isDate,Kg=mn&&mn.isMap,Yg=mn&&mn.isRegExp,Qg=mn&&mn.isSet,Jg=mn&&mn.isTypedArray;function en(A,D,I){switch(I.length){case 0:return A.call(D);case 1:return A.call(D,I[0]);case 2:return A.call(D,I[0],I[1]);case 3:return A.call(D,I[0],I[1],I[2])}return A.apply(D,I)}function ES(A,D,I,ee){for(var fe=-1,Pe=A==null?0:A.length;++fe<Pe;){var ft=A[fe];D(ee,ft,I(ft),A)}return ee}function vn(A,D){for(var I=-1,ee=A==null?0:A.length;++I<ee&&D(A[I],I,A)!==!1;);return A}function bS(A,D){for(var I=A==null?0:A.length;I--&&D(A[I],I,A)!==!1;);return A}function Xg(A,D){for(var I=-1,ee=A==null?0:A.length;++I<ee;)if(!D(A[I],I,A))return!1;return!0}function Lr(A,D){for(var I=-1,ee=A==null?0:A.length,fe=0,Pe=[];++I<ee;){var ft=A[I];D(ft,I,A)&&(Pe[fe++]=ft)}return Pe}function Ol(A,D){var I=A==null?0:A.length;return!!I&&qi(A,D,0)>-1}function nf(A,D,I){for(var ee=-1,fe=A==null?0:A.length;++ee<fe;)if(I(D,A[ee]))return!0;return!1}function Ge(A,D){for(var I=-1,ee=A==null?0:A.length,fe=Array(ee);++I<ee;)fe[I]=D(A[I],I,A);return fe}function Ar(A,D){for(var I=-1,ee=D.length,fe=A.length;++I<ee;)A[fe+I]=D[I];return A}function rf(A,D,I,ee){var fe=-1,Pe=A==null?0:A.length;for(ee&&Pe&&(I=A[++fe]);++fe<Pe;)I=D(I,A[fe],fe,A);return I}function kS(A,D,I,ee){var fe=A==null?0:A.length;for(ee&&fe&&(I=A[--fe]);fe--;)I=D(I,A[fe],fe,A);return I}function of(A,D){for(var I=-1,ee=A==null?0:A.length;++I<ee;)if(D(A[I],I,A))return!0;return!1}var PS=sf("length");function jS(A){return A.split("")}function OS(A){return A.match(M4)||[]}function Zg(A,D,I){var ee;return I(A,function(fe,Pe,ft){if(D(fe,Pe,ft))return ee=Pe,!1}),ee}function Tl(A,D,I,ee){for(var fe=A.length,Pe=I+(ee?1:-1);ee?Pe--:++Pe<fe;)if(D(A[Pe],Pe,A))return Pe;return-1}function qi(A,D,I){return D===D?US(A,D,I):Tl(A,e0,I)}function TS(A,D,I,ee){for(var fe=I-1,Pe=A.length;++fe<Pe;)if(ee(A[fe],D))return fe;return-1}function e0(A){return A!==A}function t0(A,D){var I=A==null?0:A.length;return I?af(A,D)/I:se}function sf(A){return function(D){return D==null?n:D[A]}}function lf(A){return function(D){return A==null?n:A[D]}}function n0(A,D,I,ee,fe){return fe(A,function(Pe,ft,Ne){I=ee?(ee=!1,Pe):D(I,Pe,ft,Ne)}),I}function RS(A,D){var I=A.length;for(A.sort(D);I--;)A[I]=A[I].value;return A}function af(A,D){for(var I,ee=-1,fe=A.length;++ee<fe;){var Pe=D(A[ee]);Pe!==n&&(I=I===n?Pe:I+Pe)}return I}function uf(A,D){for(var I=-1,ee=Array(A);++I<A;)ee[I]=D(I);return ee}function LS(A,D){return Ge(D,function(I){return[I,A[I]]})}function r0(A){return A&&A.slice(0,l0(A)+1).replace(Kc,"")}function tn(A){return function(D){return A(D)}}function cf(A,D){return Ge(D,function(I){return A[I]})}function ns(A,D){return A.has(D)}function i0(A,D){for(var I=-1,ee=A.length;++I<ee&&qi(D,A[I],0)>-1;);return I}function o0(A,D){for(var I=A.length;I--&&qi(D,A[I],0)>-1;);return I}function AS(A,D){for(var I=A.length,ee=0;I--;)A[I]===D&&++ee;return ee}var zS=lf(vS),FS=lf(yS);function NS(A){return"\\"+wS[A]}function MS(A,D){return A==null?n:A[D]}function Ki(A){return pS.test(A)}function IS(A){return hS.test(A)}function $S(A){for(var D,I=[];!(D=A.next()).done;)I.push(D.value);return I}function ff(A){var D=-1,I=Array(A.size);return A.forEach(function(ee,fe){I[++D]=[fe,ee]}),I}function s0(A,D){return function(I){return A(D(I))}}function zr(A,D){for(var I=-1,ee=A.length,fe=0,Pe=[];++I<ee;){var ft=A[I];(ft===D||ft===v)&&(A[I]=v,Pe[fe++]=I)}return Pe}function Rl(A){var D=-1,I=Array(A.size);return A.forEach(function(ee){I[++D]=ee}),I}function DS(A){var D=-1,I=Array(A.size);return A.forEach(function(ee){I[++D]=[ee,ee]}),I}function US(A,D,I){for(var ee=I-1,fe=A.length;++ee<fe;)if(A[ee]===D)return ee;return-1}function BS(A,D,I){for(var ee=I+1;ee--;)if(A[ee]===D)return ee;return ee}function Yi(A){return Ki(A)?HS(A):PS(A)}function An(A){return Ki(A)?VS(A):jS(A)}function l0(A){for(var D=A.length;D--&&A4.test(A.charAt(D)););return D}var WS=lf(xS);function HS(A){for(var D=Zc.lastIndex=0;Zc.test(A);)++D;return D}function VS(A){return A.match(Zc)||[]}function GS(A){return A.match(dS)||[]}var qS=function A(D){D=D==null?xt:Qi.defaults(xt.Object(),D,Qi.pick(xt,gS));var I=D.Array,ee=D.Date,fe=D.Error,Pe=D.Function,ft=D.Math,Ne=D.Object,df=D.RegExp,KS=D.String,yn=D.TypeError,Ll=I.prototype,YS=Pe.prototype,Ji=Ne.prototype,Al=D["__core-js_shared__"],zl=YS.toString,Re=Ji.hasOwnProperty,QS=0,a0=function(){var i=/[^.]+$/.exec(Al&&Al.keys&&Al.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Fl=Ji.toString,JS=zl.call(Ne),XS=xt._,ZS=df("^"+zl.call(Re).replace(qc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nl=Vg?D.Buffer:n,Fr=D.Symbol,Ml=D.Uint8Array,u0=Nl?Nl.allocUnsafe:n,Il=s0(Ne.getPrototypeOf,Ne),c0=Ne.create,f0=Ji.propertyIsEnumerable,$l=Ll.splice,d0=Fr?Fr.isConcatSpreadable:n,rs=Fr?Fr.iterator:n,gi=Fr?Fr.toStringTag:n,Dl=function(){try{var i=wi(Ne,"defineProperty");return i({},"",{}),i}catch{}}(),e3=D.clearTimeout!==xt.clearTimeout&&D.clearTimeout,t3=ee&&ee.now!==xt.Date.now&&ee.now,n3=D.setTimeout!==xt.setTimeout&&D.setTimeout,Ul=ft.ceil,Bl=ft.floor,pf=Ne.getOwnPropertySymbols,r3=Nl?Nl.isBuffer:n,p0=D.isFinite,i3=Ll.join,o3=s0(Ne.keys,Ne),dt=ft.max,Et=ft.min,s3=ee.now,l3=D.parseInt,h0=ft.random,a3=Ll.reverse,hf=wi(D,"DataView"),is=wi(D,"Map"),gf=wi(D,"Promise"),Xi=wi(D,"Set"),os=wi(D,"WeakMap"),ss=wi(Ne,"create"),Wl=os&&new os,Zi={},u3=Si(hf),c3=Si(is),f3=Si(gf),d3=Si(Xi),p3=Si(os),Hl=Fr?Fr.prototype:n,ls=Hl?Hl.valueOf:n,g0=Hl?Hl.toString:n;function y(i){if(tt(i)&&!de(i)&&!(i instanceof we)){if(i instanceof xn)return i;if(Re.call(i,"__wrapped__"))return m1(i)}return new xn(i)}var eo=function(){function i(){}return function(o){if(!Ye(o))return{};if(c0)return c0(o);i.prototype=o;var a=new i;return i.prototype=n,a}}();function Vl(){}function xn(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}y.templateSettings={escape:P4,evaluate:j4,interpolate:Eg,variable:"",imports:{_:y}},y.prototype=Vl.prototype,y.prototype.constructor=y,xn.prototype=eo(Vl.prototype),xn.prototype.constructor=xn;function we(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=X,this.__views__=[]}function h3(){var i=new we(this.__wrapped__);return i.__actions__=Bt(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Bt(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Bt(this.__views__),i}function g3(){if(this.__filtered__){var i=new we(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function m3(){var i=this.__wrapped__.value(),o=this.__dir__,a=de(i),f=o<0,g=a?i.length:0,w=j6(0,g,this.__views__),b=w.start,T=w.end,N=T-b,B=f?T:b-1,W=this.__iteratees__,V=W.length,Q=0,ie=Et(N,this.__takeCount__);if(!a||!f&&g==N&&ie==N)return $0(i,this.__actions__);var ue=[];e:for(;N--&&Q<ie;){B+=o;for(var ge=-1,ce=i[B];++ge<V;){var ye=W[ge],_e=ye.iteratee,on=ye.type,Nt=_e(ce);if(on==le)ce=Nt;else if(!Nt){if(on==At)continue e;break e}}ue[Q++]=ce}return ue}we.prototype=eo(Vl.prototype),we.prototype.constructor=we;function mi(i){var o=-1,a=i==null?0:i.length;for(this.clear();++o<a;){var f=i[o];this.set(f[0],f[1])}}function v3(){this.__data__=ss?ss(null):{},this.size=0}function y3(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function x3(i){var o=this.__data__;if(ss){var a=o[i];return a===d?n:a}return Re.call(o,i)?o[i]:n}function w3(i){var o=this.__data__;return ss?o[i]!==n:Re.call(o,i)}function S3(i,o){var a=this.__data__;return this.size+=this.has(i)?0:1,a[i]=ss&&o===n?d:o,this}mi.prototype.clear=v3,mi.prototype.delete=y3,mi.prototype.get=x3,mi.prototype.has=w3,mi.prototype.set=S3;function ur(i){var o=-1,a=i==null?0:i.length;for(this.clear();++o<a;){var f=i[o];this.set(f[0],f[1])}}function _3(){this.__data__=[],this.size=0}function C3(i){var o=this.__data__,a=Gl(o,i);if(a<0)return!1;var f=o.length-1;return a==f?o.pop():$l.call(o,a,1),--this.size,!0}function E3(i){var o=this.__data__,a=Gl(o,i);return a<0?n:o[a][1]}function b3(i){return Gl(this.__data__,i)>-1}function k3(i,o){var a=this.__data__,f=Gl(a,i);return f<0?(++this.size,a.push([i,o])):a[f][1]=o,this}ur.prototype.clear=_3,ur.prototype.delete=C3,ur.prototype.get=E3,ur.prototype.has=b3,ur.prototype.set=k3;function cr(i){var o=-1,a=i==null?0:i.length;for(this.clear();++o<a;){var f=i[o];this.set(f[0],f[1])}}function P3(){this.size=0,this.__data__={hash:new mi,map:new(is||ur),string:new mi}}function j3(i){var o=ia(this,i).delete(i);return this.size-=o?1:0,o}function O3(i){return ia(this,i).get(i)}function T3(i){return ia(this,i).has(i)}function R3(i,o){var a=ia(this,i),f=a.size;return a.set(i,o),this.size+=a.size==f?0:1,this}cr.prototype.clear=P3,cr.prototype.delete=j3,cr.prototype.get=O3,cr.prototype.has=T3,cr.prototype.set=R3;function vi(i){var o=-1,a=i==null?0:i.length;for(this.__data__=new cr;++o<a;)this.add(i[o])}function L3(i){return this.__data__.set(i,d),this}function A3(i){return this.__data__.has(i)}vi.prototype.add=vi.prototype.push=L3,vi.prototype.has=A3;function zn(i){var o=this.__data__=new ur(i);this.size=o.size}function z3(){this.__data__=new ur,this.size=0}function F3(i){var o=this.__data__,a=o.delete(i);return this.size=o.size,a}function N3(i){return this.__data__.get(i)}function M3(i){return this.__data__.has(i)}function I3(i,o){var a=this.__data__;if(a instanceof ur){var f=a.__data__;if(!is||f.length<s-1)return f.push([i,o]),this.size=++a.size,this;a=this.__data__=new cr(f)}return a.set(i,o),this.size=a.size,this}zn.prototype.clear=z3,zn.prototype.delete=F3,zn.prototype.get=N3,zn.prototype.has=M3,zn.prototype.set=I3;function m0(i,o){var a=de(i),f=!a&&_i(i),g=!a&&!f&&Dr(i),w=!a&&!f&&!g&&io(i),b=a||f||g||w,T=b?uf(i.length,KS):[],N=T.length;for(var B in i)(o||Re.call(i,B))&&!(b&&(B=="length"||g&&(B=="offset"||B=="parent")||w&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||hr(B,N)))&&T.push(B);return T}function v0(i){var o=i.length;return o?i[kf(0,o-1)]:n}function $3(i,o){return oa(Bt(i),yi(o,0,i.length))}function D3(i){return oa(Bt(i))}function mf(i,o,a){(a!==n&&!Fn(i[o],a)||a===n&&!(o in i))&&fr(i,o,a)}function as(i,o,a){var f=i[o];(!(Re.call(i,o)&&Fn(f,a))||a===n&&!(o in i))&&fr(i,o,a)}function Gl(i,o){for(var a=i.length;a--;)if(Fn(i[a][0],o))return a;return-1}function U3(i,o,a,f){return Nr(i,function(g,w,b){o(f,g,a(g),b)}),f}function y0(i,o){return i&&Zn(o,gt(o),i)}function B3(i,o){return i&&Zn(o,Ht(o),i)}function fr(i,o,a){o=="__proto__"&&Dl?Dl(i,o,{configurable:!0,enumerable:!0,value:a,writable:!0}):i[o]=a}function vf(i,o){for(var a=-1,f=o.length,g=I(f),w=i==null;++a<f;)g[a]=w?n:Jf(i,o[a]);return g}function yi(i,o,a){return i===i&&(a!==n&&(i=i<=a?i:a),o!==n&&(i=i>=o?i:o)),i}function wn(i,o,a,f,g,w){var b,T=o&m,N=o&_,B=o&j;if(a&&(b=g?a(i,f,g,w):a(i)),b!==n)return b;if(!Ye(i))return i;var W=de(i);if(W){if(b=T6(i),!T)return Bt(i,b)}else{var V=bt(i),Q=V==ke||V==Ke;if(Dr(i))return B0(i,T);if(V==Ut||V==De||Q&&!g){if(b=N||Q?{}:l1(i),!T)return N?x6(i,B3(b,i)):y6(i,y0(b,i))}else{if(!Me[V])return g?i:{};b=R6(i,V,T)}}w||(w=new zn);var ie=w.get(i);if(ie)return ie;w.set(i,b),N1(i)?i.forEach(function(ce){b.add(wn(ce,o,a,ce,i,w))}):z1(i)&&i.forEach(function(ce,ye){b.set(ye,wn(ce,o,a,ye,i,w))});var ue=B?N?Mf:Nf:N?Ht:gt,ge=W?n:ue(i);return vn(ge||i,function(ce,ye){ge&&(ye=ce,ce=i[ye]),as(b,ye,wn(ce,o,a,ye,i,w))}),b}function W3(i){var o=gt(i);return function(a){return x0(a,i,o)}}function x0(i,o,a){var f=a.length;if(i==null)return!f;for(i=Ne(i);f--;){var g=a[f],w=o[g],b=i[g];if(b===n&&!(g in i)||!w(b))return!1}return!0}function w0(i,o,a){if(typeof i!="function")throw new yn(u);return gs(function(){i.apply(n,a)},o)}function us(i,o,a,f){var g=-1,w=Ol,b=!0,T=i.length,N=[],B=o.length;if(!T)return N;a&&(o=Ge(o,tn(a))),f?(w=nf,b=!1):o.length>=s&&(w=ns,b=!1,o=new vi(o));e:for(;++g<T;){var W=i[g],V=a==null?W:a(W);if(W=f||W!==0?W:0,b&&V===V){for(var Q=B;Q--;)if(o[Q]===V)continue e;N.push(W)}else w(o,V,f)||N.push(W)}return N}var Nr=q0(Xn),S0=q0(xf,!0);function H3(i,o){var a=!0;return Nr(i,function(f,g,w){return a=!!o(f,g,w),a}),a}function ql(i,o,a){for(var f=-1,g=i.length;++f<g;){var w=i[f],b=o(w);if(b!=null&&(T===n?b===b&&!rn(b):a(b,T)))var T=b,N=w}return N}function V3(i,o,a,f){var g=i.length;for(a=he(a),a<0&&(a=-a>g?0:g+a),f=f===n||f>g?g:he(f),f<0&&(f+=g),f=a>f?0:I1(f);a<f;)i[a++]=o;return i}function _0(i,o){var a=[];return Nr(i,function(f,g,w){o(f,g,w)&&a.push(f)}),a}function wt(i,o,a,f,g){var w=-1,b=i.length;for(a||(a=A6),g||(g=[]);++w<b;){var T=i[w];o>0&&a(T)?o>1?wt(T,o-1,a,f,g):Ar(g,T):f||(g[g.length]=T)}return g}var yf=K0(),C0=K0(!0);function Xn(i,o){return i&&yf(i,o,gt)}function xf(i,o){return i&&C0(i,o,gt)}function Kl(i,o){return Lr(o,function(a){return gr(i[a])})}function xi(i,o){o=Ir(o,i);for(var a=0,f=o.length;i!=null&&a<f;)i=i[er(o[a++])];return a&&a==f?i:n}function E0(i,o,a){var f=o(i);return de(i)?f:Ar(f,a(i))}function zt(i){return i==null?i===n?w4:Hi:gi&&gi in Ne(i)?P6(i):D6(i)}function wf(i,o){return i>o}function G3(i,o){return i!=null&&Re.call(i,o)}function q3(i,o){return i!=null&&o in Ne(i)}function K3(i,o,a){return i>=Et(o,a)&&i<dt(o,a)}function Sf(i,o,a){for(var f=a?nf:Ol,g=i[0].length,w=i.length,b=w,T=I(w),N=1/0,B=[];b--;){var W=i[b];b&&o&&(W=Ge(W,tn(o))),N=Et(W.length,N),T[b]=!a&&(o||g>=120&&W.length>=120)?new vi(b&&W):n}W=i[0];var V=-1,Q=T[0];e:for(;++V<g&&B.length<N;){var ie=W[V],ue=o?o(ie):ie;if(ie=a||ie!==0?ie:0,!(Q?ns(Q,ue):f(B,ue,a))){for(b=w;--b;){var ge=T[b];if(!(ge?ns(ge,ue):f(i[b],ue,a)))continue e}Q&&Q.push(ue),B.push(ie)}}return B}function Y3(i,o,a,f){return Xn(i,function(g,w,b){o(f,a(g),w,b)}),f}function cs(i,o,a){o=Ir(o,i),i=f1(i,o);var f=i==null?i:i[er(_n(o))];return f==null?n:en(f,i,a)}function b0(i){return tt(i)&&zt(i)==De}function Q3(i){return tt(i)&&zt(i)==ts}function J3(i){return tt(i)&&zt(i)==H}function fs(i,o,a,f,g){return i===o?!0:i==null||o==null||!tt(i)&&!tt(o)?i!==i&&o!==o:X3(i,o,a,f,fs,g)}function X3(i,o,a,f,g,w){var b=de(i),T=de(o),N=b?lt:bt(i),B=T?lt:bt(o);N=N==De?Ut:N,B=B==De?Ut:B;var W=N==Ut,V=B==Ut,Q=N==B;if(Q&&Dr(i)){if(!Dr(o))return!1;b=!0,W=!1}if(Q&&!W)return w||(w=new zn),b||io(i)?i1(i,o,a,f,g,w):b6(i,o,N,a,f,g,w);if(!(a&E)){var ie=W&&Re.call(i,"__wrapped__"),ue=V&&Re.call(o,"__wrapped__");if(ie||ue){var ge=ie?i.value():i,ce=ue?o.value():o;return w||(w=new zn),g(ge,ce,a,f,w)}}return Q?(w||(w=new zn),k6(i,o,a,f,g,w)):!1}function Z3(i){return tt(i)&&bt(i)==Ue}function _f(i,o,a,f){var g=a.length,w=g,b=!f;if(i==null)return!w;for(i=Ne(i);g--;){var T=a[g];if(b&&T[2]?T[1]!==i[T[0]]:!(T[0]in i))return!1}for(;++g<w;){T=a[g];var N=T[0],B=i[N],W=T[1];if(b&&T[2]){if(B===n&&!(N in i))return!1}else{var V=new zn;if(f)var Q=f(B,W,N,i,o,V);if(!(Q===n?fs(W,B,E|P,f,V):Q))return!1}}return!0}function k0(i){if(!Ye(i)||F6(i))return!1;var o=gr(i)?ZS:W4;return o.test(Si(i))}function e6(i){return tt(i)&&zt(i)==Xo}function t6(i){return tt(i)&&bt(i)==Ln}function n6(i){return tt(i)&&fa(i.length)&&!!Be[zt(i)]}function P0(i){return typeof i=="function"?i:i==null?Vt:typeof i=="object"?de(i)?T0(i[0],i[1]):O0(i):Y1(i)}function Cf(i){if(!hs(i))return o3(i);var o=[];for(var a in Ne(i))Re.call(i,a)&&a!="constructor"&&o.push(a);return o}function r6(i){if(!Ye(i))return $6(i);var o=hs(i),a=[];for(var f in i)f=="constructor"&&(o||!Re.call(i,f))||a.push(f);return a}function Ef(i,o){return i<o}function j0(i,o){var a=-1,f=Wt(i)?I(i.length):[];return Nr(i,function(g,w,b){f[++a]=o(g,w,b)}),f}function O0(i){var o=$f(i);return o.length==1&&o[0][2]?u1(o[0][0],o[0][1]):function(a){return a===i||_f(a,i,o)}}function T0(i,o){return Uf(i)&&a1(o)?u1(er(i),o):function(a){var f=Jf(a,i);return f===n&&f===o?Xf(a,i):fs(o,f,E|P)}}function Yl(i,o,a,f,g){i!==o&&yf(o,function(w,b){if(g||(g=new zn),Ye(w))i6(i,o,b,a,Yl,f,g);else{var T=f?f(Wf(i,b),w,b+"",i,o,g):n;T===n&&(T=w),mf(i,b,T)}},Ht)}function i6(i,o,a,f,g,w,b){var T=Wf(i,a),N=Wf(o,a),B=b.get(N);if(B){mf(i,a,B);return}var W=w?w(T,N,a+"",i,o,b):n,V=W===n;if(V){var Q=de(N),ie=!Q&&Dr(N),ue=!Q&&!ie&&io(N);W=N,Q||ie||ue?de(T)?W=T:it(T)?W=Bt(T):ie?(V=!1,W=B0(N,!0)):ue?(V=!1,W=W0(N,!0)):W=[]:ms(N)||_i(N)?(W=T,_i(T)?W=$1(T):(!Ye(T)||gr(T))&&(W=l1(N))):V=!1}V&&(b.set(N,W),g(W,N,f,w,b),b.delete(N)),mf(i,a,W)}function R0(i,o){var a=i.length;if(a)return o+=o<0?a:0,hr(o,a)?i[o]:n}function L0(i,o,a){o.length?o=Ge(o,function(w){return de(w)?function(b){return xi(b,w.length===1?w[0]:w)}:w}):o=[Vt];var f=-1;o=Ge(o,tn(ae()));var g=j0(i,function(w,b,T){var N=Ge(o,function(B){return B(w)});return{criteria:N,index:++f,value:w}});return RS(g,function(w,b){return v6(w,b,a)})}function o6(i,o){return A0(i,o,function(a,f){return Xf(i,f)})}function A0(i,o,a){for(var f=-1,g=o.length,w={};++f<g;){var b=o[f],T=xi(i,b);a(T,b)&&ds(w,Ir(b,i),T)}return w}function s6(i){return function(o){return xi(o,i)}}function bf(i,o,a,f){var g=f?TS:qi,w=-1,b=o.length,T=i;for(i===o&&(o=Bt(o)),a&&(T=Ge(i,tn(a)));++w<b;)for(var N=0,B=o[w],W=a?a(B):B;(N=g(T,W,N,f))>-1;)T!==i&&$l.call(T,N,1),$l.call(i,N,1);return i}function z0(i,o){for(var a=i?o.length:0,f=a-1;a--;){var g=o[a];if(a==f||g!==w){var w=g;hr(g)?$l.call(i,g,1):Of(i,g)}}return i}function kf(i,o){return i+Bl(h0()*(o-i+1))}function l6(i,o,a,f){for(var g=-1,w=dt(Ul((o-i)/(a||1)),0),b=I(w);w--;)b[f?w:++g]=i,i+=a;return b}function Pf(i,o){var a="";if(!i||o<1||o>q)return a;do o%2&&(a+=i),o=Bl(o/2),o&&(i+=i);while(o);return a}function ve(i,o){return Hf(c1(i,o,Vt),i+"")}function a6(i){return v0(oo(i))}function u6(i,o){var a=oo(i);return oa(a,yi(o,0,a.length))}function ds(i,o,a,f){if(!Ye(i))return i;o=Ir(o,i);for(var g=-1,w=o.length,b=w-1,T=i;T!=null&&++g<w;){var N=er(o[g]),B=a;if(N==="__proto__"||N==="constructor"||N==="prototype")return i;if(g!=b){var W=T[N];B=f?f(W,N,T):n,B===n&&(B=Ye(W)?W:hr(o[g+1])?[]:{})}as(T,N,B),T=T[N]}return i}var F0=Wl?function(i,o){return Wl.set(i,o),i}:Vt,c6=Dl?function(i,o){return Dl(i,"toString",{configurable:!0,enumerable:!1,value:ed(o),writable:!0})}:Vt;function f6(i){return oa(oo(i))}function Sn(i,o,a){var f=-1,g=i.length;o<0&&(o=-o>g?0:g+o),a=a>g?g:a,a<0&&(a+=g),g=o>a?0:a-o>>>0,o>>>=0;for(var w=I(g);++f<g;)w[f]=i[f+o];return w}function d6(i,o){var a;return Nr(i,function(f,g,w){return a=o(f,g,w),!a}),!!a}function Ql(i,o,a){var f=0,g=i==null?f:i.length;if(typeof o=="number"&&o===o&&g<=$e){for(;f<g;){var w=f+g>>>1,b=i[w];b!==null&&!rn(b)&&(a?b<=o:b<o)?f=w+1:g=w}return g}return jf(i,o,Vt,a)}function jf(i,o,a,f){var g=0,w=i==null?0:i.length;if(w===0)return 0;o=a(o);for(var b=o!==o,T=o===null,N=rn(o),B=o===n;g<w;){var W=Bl((g+w)/2),V=a(i[W]),Q=V!==n,ie=V===null,ue=V===V,ge=rn(V);if(b)var ce=f||ue;else B?ce=ue&&(f||Q):T?ce=ue&&Q&&(f||!ie):N?ce=ue&&Q&&!ie&&(f||!ge):ie||ge?ce=!1:ce=f?V<=o:V<o;ce?g=W+1:w=W}return Et(w,oe)}function N0(i,o){for(var a=-1,f=i.length,g=0,w=[];++a<f;){var b=i[a],T=o?o(b):b;if(!a||!Fn(T,N)){var N=T;w[g++]=b===0?0:b}}return w}function M0(i){return typeof i=="number"?i:rn(i)?se:+i}function nn(i){if(typeof i=="string")return i;if(de(i))return Ge(i,nn)+"";if(rn(i))return g0?g0.call(i):"";var o=i+"";return o=="0"&&1/i==-ze?"-0":o}function Mr(i,o,a){var f=-1,g=Ol,w=i.length,b=!0,T=[],N=T;if(a)b=!1,g=nf;else if(w>=s){var B=o?null:C6(i);if(B)return Rl(B);b=!1,g=ns,N=new vi}else N=o?[]:T;e:for(;++f<w;){var W=i[f],V=o?o(W):W;if(W=a||W!==0?W:0,b&&V===V){for(var Q=N.length;Q--;)if(N[Q]===V)continue e;o&&N.push(V),T.push(W)}else g(N,V,a)||(N!==T&&N.push(V),T.push(W))}return T}function Of(i,o){return o=Ir(o,i),i=f1(i,o),i==null||delete i[er(_n(o))]}function I0(i,o,a,f){return ds(i,o,a(xi(i,o)),f)}function Jl(i,o,a,f){for(var g=i.length,w=f?g:-1;(f?w--:++w<g)&&o(i[w],w,i););return a?Sn(i,f?0:w,f?w+1:g):Sn(i,f?w+1:0,f?g:w)}function $0(i,o){var a=i;return a instanceof we&&(a=a.value()),rf(o,function(f,g){return g.func.apply(g.thisArg,Ar([f],g.args))},a)}function Tf(i,o,a){var f=i.length;if(f<2)return f?Mr(i[0]):[];for(var g=-1,w=I(f);++g<f;)for(var b=i[g],T=-1;++T<f;)T!=g&&(w[g]=us(w[g]||b,i[T],o,a));return Mr(wt(w,1),o,a)}function D0(i,o,a){for(var f=-1,g=i.length,w=o.length,b={};++f<g;){var T=f<w?o[f]:n;a(b,i[f],T)}return b}function Rf(i){return it(i)?i:[]}function Lf(i){return typeof i=="function"?i:Vt}function Ir(i,o){return de(i)?i:Uf(i,o)?[i]:g1(Oe(i))}var p6=ve;function $r(i,o,a){var f=i.length;return a=a===n?f:a,!o&&a>=f?i:Sn(i,o,a)}var U0=e3||function(i){return xt.clearTimeout(i)};function B0(i,o){if(o)return i.slice();var a=i.length,f=u0?u0(a):new i.constructor(a);return i.copy(f),f}function Af(i){var o=new i.constructor(i.byteLength);return new Ml(o).set(new Ml(i)),o}function h6(i,o){var a=o?Af(i.buffer):i.buffer;return new i.constructor(a,i.byteOffset,i.byteLength)}function g6(i){var o=new i.constructor(i.source,bg.exec(i));return o.lastIndex=i.lastIndex,o}function m6(i){return ls?Ne(ls.call(i)):{}}function W0(i,o){var a=o?Af(i.buffer):i.buffer;return new i.constructor(a,i.byteOffset,i.length)}function H0(i,o){if(i!==o){var a=i!==n,f=i===null,g=i===i,w=rn(i),b=o!==n,T=o===null,N=o===o,B=rn(o);if(!T&&!B&&!w&&i>o||w&&b&&N&&!T&&!B||f&&b&&N||!a&&N||!g)return 1;if(!f&&!w&&!B&&i<o||B&&a&&g&&!f&&!w||T&&a&&g||!b&&g||!N)return-1}return 0}function v6(i,o,a){for(var f=-1,g=i.criteria,w=o.criteria,b=g.length,T=a.length;++f<b;){var N=H0(g[f],w[f]);if(N){if(f>=T)return N;var B=a[f];return N*(B=="desc"?-1:1)}}return i.index-o.index}function V0(i,o,a,f){for(var g=-1,w=i.length,b=a.length,T=-1,N=o.length,B=dt(w-b,0),W=I(N+B),V=!f;++T<N;)W[T]=o[T];for(;++g<b;)(V||g<w)&&(W[a[g]]=i[g]);for(;B--;)W[T++]=i[g++];return W}function G0(i,o,a,f){for(var g=-1,w=i.length,b=-1,T=a.length,N=-1,B=o.length,W=dt(w-T,0),V=I(W+B),Q=!f;++g<W;)V[g]=i[g];for(var ie=g;++N<B;)V[ie+N]=o[N];for(;++b<T;)(Q||g<w)&&(V[ie+a[b]]=i[g++]);return V}function Bt(i,o){var a=-1,f=i.length;for(o||(o=I(f));++a<f;)o[a]=i[a];return o}function Zn(i,o,a,f){var g=!a;a||(a={});for(var w=-1,b=o.length;++w<b;){var T=o[w],N=f?f(a[T],i[T],T,a,i):n;N===n&&(N=i[T]),g?fr(a,T,N):as(a,T,N)}return a}function y6(i,o){return Zn(i,Df(i),o)}function x6(i,o){return Zn(i,o1(i),o)}function Xl(i,o){return function(a,f){var g=de(a)?ES:U3,w=o?o():{};return g(a,i,ae(f,2),w)}}function to(i){return ve(function(o,a){var f=-1,g=a.length,w=g>1?a[g-1]:n,b=g>2?a[2]:n;for(w=i.length>3&&typeof w=="function"?(g--,w):n,b&&Ft(a[0],a[1],b)&&(w=g<3?n:w,g=1),o=Ne(o);++f<g;){var T=a[f];T&&i(o,T,f,w)}return o})}function q0(i,o){return function(a,f){if(a==null)return a;if(!Wt(a))return i(a,f);for(var g=a.length,w=o?g:-1,b=Ne(a);(o?w--:++w<g)&&f(b[w],w,b)!==!1;);return a}}function K0(i){return function(o,a,f){for(var g=-1,w=Ne(o),b=f(o),T=b.length;T--;){var N=b[i?T:++g];if(a(w[N],N,w)===!1)break}return o}}function w6(i,o,a){var f=o&R,g=ps(i);function w(){var b=this&&this!==xt&&this instanceof w?g:i;return b.apply(f?a:this,arguments)}return w}function Y0(i){return function(o){o=Oe(o);var a=Ki(o)?An(o):n,f=a?a[0]:o.charAt(0),g=a?$r(a,1).join(""):o.slice(1);return f[i]()+g}}function no(i){return function(o){return rf(q1(G1(o).replace(cS,"")),i,"")}}function ps(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var a=eo(i.prototype),f=i.apply(a,o);return Ye(f)?f:a}}function S6(i,o,a){var f=ps(i);function g(){for(var w=arguments.length,b=I(w),T=w,N=ro(g);T--;)b[T]=arguments[T];var B=w<3&&b[0]!==N&&b[w-1]!==N?[]:zr(b,N);if(w-=B.length,w<a)return e1(i,o,Zl,g.placeholder,n,b,B,n,n,a-w);var W=this&&this!==xt&&this instanceof g?f:i;return en(W,this,b)}return g}function Q0(i){return function(o,a,f){var g=Ne(o);if(!Wt(o)){var w=ae(a,3);o=gt(o),a=function(T){return w(g[T],T,g)}}var b=i(o,a,f);return b>-1?g[w?o[b]:b]:n}}function J0(i){return pr(function(o){var a=o.length,f=a,g=xn.prototype.thru;for(i&&o.reverse();f--;){var w=o[f];if(typeof w!="function")throw new yn(u);if(g&&!b&&ra(w)=="wrapper")var b=new xn([],!0)}for(f=b?f:a;++f<a;){w=o[f];var T=ra(w),N=T=="wrapper"?If(w):n;N&&Bf(N[0])&&N[1]==(L|C|F|U)&&!N[4].length&&N[9]==1?b=b[ra(N[0])].apply(b,N[3]):b=w.length==1&&Bf(w)?b[T]():b.thru(w)}return function(){var B=arguments,W=B[0];if(b&&B.length==1&&de(W))return b.plant(W).value();for(var V=0,Q=a?o[V].apply(this,B):W;++V<a;)Q=o[V].call(this,Q);return Q}})}function Zl(i,o,a,f,g,w,b,T,N,B){var W=o&L,V=o&R,Q=o&S,ie=o&(C|z),ue=o&Z,ge=Q?n:ps(i);function ce(){for(var ye=arguments.length,_e=I(ye),on=ye;on--;)_e[on]=arguments[on];if(ie)var Nt=ro(ce),sn=AS(_e,Nt);if(f&&(_e=V0(_e,f,g,ie)),w&&(_e=G0(_e,w,b,ie)),ye-=sn,ie&&ye<B){var ot=zr(_e,Nt);return e1(i,o,Zl,ce.placeholder,a,_e,ot,T,N,B-ye)}var Nn=V?a:this,vr=Q?Nn[i]:i;return ye=_e.length,T?_e=U6(_e,T):ue&&ye>1&&_e.reverse(),W&&N<ye&&(_e.length=N),this&&this!==xt&&this instanceof ce&&(vr=ge||ps(vr)),vr.apply(Nn,_e)}return ce}function X0(i,o){return function(a,f){return Y3(a,i,o(f),{})}}function ea(i,o){return function(a,f){var g;if(a===n&&f===n)return o;if(a!==n&&(g=a),f!==n){if(g===n)return f;typeof a=="string"||typeof f=="string"?(a=nn(a),f=nn(f)):(a=M0(a),f=M0(f)),g=i(a,f)}return g}}function zf(i){return pr(function(o){return o=Ge(o,tn(ae())),ve(function(a){var f=this;return i(o,function(g){return en(g,f,a)})})})}function ta(i,o){o=o===n?" ":nn(o);var a=o.length;if(a<2)return a?Pf(o,i):o;var f=Pf(o,Ul(i/Yi(o)));return Ki(o)?$r(An(f),0,i).join(""):f.slice(0,i)}function _6(i,o,a,f){var g=o&R,w=ps(i);function b(){for(var T=-1,N=arguments.length,B=-1,W=f.length,V=I(W+N),Q=this&&this!==xt&&this instanceof b?w:i;++B<W;)V[B]=f[B];for(;N--;)V[B++]=arguments[++T];return en(Q,g?a:this,V)}return b}function Z0(i){return function(o,a,f){return f&&typeof f!="number"&&Ft(o,a,f)&&(a=f=n),o=mr(o),a===n?(a=o,o=0):a=mr(a),f=f===n?o<a?1:-1:mr(f),l6(o,a,f,i)}}function na(i){return function(o,a){return typeof o=="string"&&typeof a=="string"||(o=Cn(o),a=Cn(a)),i(o,a)}}function e1(i,o,a,f,g,w,b,T,N,B){var W=o&C,V=W?b:n,Q=W?n:b,ie=W?w:n,ue=W?n:w;o|=W?F:M,o&=~(W?M:F),o&x||(o&=~(R|S));var ge=[i,o,g,ie,V,ue,Q,T,N,B],ce=a.apply(n,ge);return Bf(i)&&d1(ce,ge),ce.placeholder=f,p1(ce,i,o)}function Ff(i){var o=ft[i];return function(a,f){if(a=Cn(a),f=f==null?0:Et(he(f),292),f&&p0(a)){var g=(Oe(a)+"e").split("e"),w=o(g[0]+"e"+(+g[1]+f));return g=(Oe(w)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return o(a)}}var C6=Xi&&1/Rl(new Xi([,-0]))[1]==ze?function(i){return new Xi(i)}:rd;function t1(i){return function(o){var a=bt(o);return a==Ue?ff(o):a==Ln?DS(o):LS(o,i(o))}}function dr(i,o,a,f,g,w,b,T){var N=o&S;if(!N&&typeof i!="function")throw new yn(u);var B=f?f.length:0;if(B||(o&=~(F|M),f=g=n),b=b===n?b:dt(he(b),0),T=T===n?T:he(T),B-=g?g.length:0,o&M){var W=f,V=g;f=g=n}var Q=N?n:If(i),ie=[i,o,a,f,g,W,V,w,b,T];if(Q&&I6(ie,Q),i=ie[0],o=ie[1],a=ie[2],f=ie[3],g=ie[4],T=ie[9]=ie[9]===n?N?0:i.length:dt(ie[9]-B,0),!T&&o&(C|z)&&(o&=~(C|z)),!o||o==R)var ue=w6(i,o,a);else o==C||o==z?ue=S6(i,o,T):(o==F||o==(R|F))&&!g.length?ue=_6(i,o,a,f):ue=Zl.apply(n,ie);var ge=Q?F0:d1;return p1(ge(ue,ie),i,o)}function n1(i,o,a,f){return i===n||Fn(i,Ji[a])&&!Re.call(f,a)?o:i}function r1(i,o,a,f,g,w){return Ye(i)&&Ye(o)&&(w.set(o,i),Yl(i,o,n,r1,w),w.delete(o)),i}function E6(i){return ms(i)?n:i}function i1(i,o,a,f,g,w){var b=a&E,T=i.length,N=o.length;if(T!=N&&!(b&&N>T))return!1;var B=w.get(i),W=w.get(o);if(B&&W)return B==o&&W==i;var V=-1,Q=!0,ie=a&P?new vi:n;for(w.set(i,o),w.set(o,i);++V<T;){var ue=i[V],ge=o[V];if(f)var ce=b?f(ge,ue,V,o,i,w):f(ue,ge,V,i,o,w);if(ce!==n){if(ce)continue;Q=!1;break}if(ie){if(!of(o,function(ye,_e){if(!ns(ie,_e)&&(ue===ye||g(ue,ye,a,f,w)))return ie.push(_e)})){Q=!1;break}}else if(!(ue===ge||g(ue,ge,a,f,w))){Q=!1;break}}return w.delete(i),w.delete(o),Q}function b6(i,o,a,f,g,w,b){switch(a){case Vi:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case ts:return!(i.byteLength!=o.byteLength||!w(new Ml(i),new Ml(o)));case J:case H:case Zt:return Fn(+i,+o);case re:return i.name==o.name&&i.message==o.message;case Xo:case Zo:return i==o+"";case Ue:var T=ff;case Ln:var N=f&E;if(T||(T=Rl),i.size!=o.size&&!N)return!1;var B=b.get(i);if(B)return B==o;f|=P,b.set(i,o);var W=i1(T(i),T(o),f,g,w,b);return b.delete(i),W;case bl:if(ls)return ls.call(i)==ls.call(o)}return!1}function k6(i,o,a,f,g,w){var b=a&E,T=Nf(i),N=T.length,B=Nf(o),W=B.length;if(N!=W&&!b)return!1;for(var V=N;V--;){var Q=T[V];if(!(b?Q in o:Re.call(o,Q)))return!1}var ie=w.get(i),ue=w.get(o);if(ie&&ue)return ie==o&&ue==i;var ge=!0;w.set(i,o),w.set(o,i);for(var ce=b;++V<N;){Q=T[V];var ye=i[Q],_e=o[Q];if(f)var on=b?f(_e,ye,Q,o,i,w):f(ye,_e,Q,i,o,w);if(!(on===n?ye===_e||g(ye,_e,a,f,w):on)){ge=!1;break}ce||(ce=Q=="constructor")}if(ge&&!ce){var Nt=i.constructor,sn=o.constructor;Nt!=sn&&"constructor"in i&&"constructor"in o&&!(typeof Nt=="function"&&Nt instanceof Nt&&typeof sn=="function"&&sn instanceof sn)&&(ge=!1)}return w.delete(i),w.delete(o),ge}function pr(i){return Hf(c1(i,n,x1),i+"")}function Nf(i){return E0(i,gt,Df)}function Mf(i){return E0(i,Ht,o1)}var If=Wl?function(i){return Wl.get(i)}:rd;function ra(i){for(var o=i.name+"",a=Zi[o],f=Re.call(Zi,o)?a.length:0;f--;){var g=a[f],w=g.func;if(w==null||w==i)return g.name}return o}function ro(i){var o=Re.call(y,"placeholder")?y:i;return o.placeholder}function ae(){var i=y.iteratee||td;return i=i===td?P0:i,arguments.length?i(arguments[0],arguments[1]):i}function ia(i,o){var a=i.__data__;return z6(o)?a[typeof o=="string"?"string":"hash"]:a.map}function $f(i){for(var o=gt(i),a=o.length;a--;){var f=o[a],g=i[f];o[a]=[f,g,a1(g)]}return o}function wi(i,o){var a=MS(i,o);return k0(a)?a:n}function P6(i){var o=Re.call(i,gi),a=i[gi];try{i[gi]=n;var f=!0}catch{}var g=Fl.call(i);return f&&(o?i[gi]=a:delete i[gi]),g}var Df=pf?function(i){return i==null?[]:(i=Ne(i),Lr(pf(i),function(o){return f0.call(i,o)}))}:id,o1=pf?function(i){for(var o=[];i;)Ar(o,Df(i)),i=Il(i);return o}:id,bt=zt;(hf&&bt(new hf(new ArrayBuffer(1)))!=Vi||is&&bt(new is)!=Ue||gf&&bt(gf.resolve())!=Sg||Xi&&bt(new Xi)!=Ln||os&&bt(new os)!=es)&&(bt=function(i){var o=zt(i),a=o==Ut?i.constructor:n,f=a?Si(a):"";if(f)switch(f){case u3:return Vi;case c3:return Ue;case f3:return Sg;case d3:return Ln;case p3:return es}return o});function j6(i,o,a){for(var f=-1,g=a.length;++f<g;){var w=a[f],b=w.size;switch(w.type){case"drop":i+=b;break;case"dropRight":o-=b;break;case"take":o=Et(o,i+b);break;case"takeRight":i=dt(i,o-b);break}}return{start:i,end:o}}function O6(i){var o=i.match(F4);return o?o[1].split(N4):[]}function s1(i,o,a){o=Ir(o,i);for(var f=-1,g=o.length,w=!1;++f<g;){var b=er(o[f]);if(!(w=i!=null&&a(i,b)))break;i=i[b]}return w||++f!=g?w:(g=i==null?0:i.length,!!g&&fa(g)&&hr(b,g)&&(de(i)||_i(i)))}function T6(i){var o=i.length,a=new i.constructor(o);return o&&typeof i[0]=="string"&&Re.call(i,"index")&&(a.index=i.index,a.input=i.input),a}function l1(i){return typeof i.constructor=="function"&&!hs(i)?eo(Il(i)):{}}function R6(i,o,a){var f=i.constructor;switch(o){case ts:return Af(i);case J:case H:return new f(+i);case Vi:return h6(i,a);case Ic:case $c:case Dc:case Uc:case Bc:case Wc:case Hc:case Vc:case Gc:return W0(i,a);case Ue:return new f;case Zt:case Zo:return new f(i);case Xo:return g6(i);case Ln:return new f;case bl:return m6(i)}}function L6(i,o){var a=o.length;if(!a)return i;var f=a-1;return o[f]=(a>1?"& ":"")+o[f],o=o.join(a>2?", ":" "),i.replace(z4,`{
/* [wrapped with `+o+`] */
`)}function A6(i){return de(i)||_i(i)||!!(d0&&i&&i[d0])}function hr(i,o){var a=typeof i;return o=o??q,!!o&&(a=="number"||a!="symbol"&&V4.test(i))&&i>-1&&i%1==0&&i<o}function Ft(i,o,a){if(!Ye(a))return!1;var f=typeof o;return(f=="number"?Wt(a)&&hr(o,a.length):f=="string"&&o in a)?Fn(a[o],i):!1}function Uf(i,o){if(de(i))return!1;var a=typeof i;return a=="number"||a=="symbol"||a=="boolean"||i==null||rn(i)?!0:T4.test(i)||!O4.test(i)||o!=null&&i in Ne(o)}function z6(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function Bf(i){var o=ra(i),a=y[o];if(typeof a!="function"||!(o in we.prototype))return!1;if(i===a)return!0;var f=If(a);return!!f&&i===f[0]}function F6(i){return!!a0&&a0 in i}var N6=Al?gr:od;function hs(i){var o=i&&i.constructor,a=typeof o=="function"&&o.prototype||Ji;return i===a}function a1(i){return i===i&&!Ye(i)}function u1(i,o){return function(a){return a==null?!1:a[i]===o&&(o!==n||i in Ne(a))}}function M6(i){var o=ua(i,function(f){return a.size===h&&a.clear(),f}),a=o.cache;return o}function I6(i,o){var a=i[1],f=o[1],g=a|f,w=g<(R|S|L),b=f==L&&a==C||f==L&&a==U&&i[7].length<=o[8]||f==(L|U)&&o[7].length<=o[8]&&a==C;if(!(w||b))return i;f&R&&(i[2]=o[2],g|=a&R?0:x);var T=o[3];if(T){var N=i[3];i[3]=N?V0(N,T,o[4]):T,i[4]=N?zr(i[3],v):o[4]}return T=o[5],T&&(N=i[5],i[5]=N?G0(N,T,o[6]):T,i[6]=N?zr(i[5],v):o[6]),T=o[7],T&&(i[7]=T),f&L&&(i[8]=i[8]==null?o[8]:Et(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=g,i}function $6(i){var o=[];if(i!=null)for(var a in Ne(i))o.push(a);return o}function D6(i){return Fl.call(i)}function c1(i,o,a){return o=dt(o===n?i.length-1:o,0),function(){for(var f=arguments,g=-1,w=dt(f.length-o,0),b=I(w);++g<w;)b[g]=f[o+g];g=-1;for(var T=I(o+1);++g<o;)T[g]=f[g];return T[o]=a(b),en(i,this,T)}}function f1(i,o){return o.length<2?i:xi(i,Sn(o,0,-1))}function U6(i,o){for(var a=i.length,f=Et(o.length,a),g=Bt(i);f--;){var w=o[f];i[f]=hr(w,a)?g[w]:n}return i}function Wf(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var d1=h1(F0),gs=n3||function(i,o){return xt.setTimeout(i,o)},Hf=h1(c6);function p1(i,o,a){var f=o+"";return Hf(i,L6(f,B6(O6(f),a)))}function h1(i){var o=0,a=0;return function(){var f=s3(),g=et-(f-a);if(a=f,g>0){if(++o>=be)return arguments[0]}else o=0;return i.apply(n,arguments)}}function oa(i,o){var a=-1,f=i.length,g=f-1;for(o=o===n?f:o;++a<o;){var w=kf(a,g),b=i[w];i[w]=i[a],i[a]=b}return i.length=o,i}var g1=M6(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(R4,function(a,f,g,w){o.push(g?w.replace($4,"$1"):f||a)}),o});function er(i){if(typeof i=="string"||rn(i))return i;var o=i+"";return o=="0"&&1/i==-ze?"-0":o}function Si(i){if(i!=null){try{return zl.call(i)}catch{}try{return i+""}catch{}}return""}function B6(i,o){return vn(Fe,function(a){var f="_."+a[0];o&a[1]&&!Ol(i,f)&&i.push(f)}),i.sort()}function m1(i){if(i instanceof we)return i.clone();var o=new xn(i.__wrapped__,i.__chain__);return o.__actions__=Bt(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function W6(i,o,a){(a?Ft(i,o,a):o===n)?o=1:o=dt(he(o),0);var f=i==null?0:i.length;if(!f||o<1)return[];for(var g=0,w=0,b=I(Ul(f/o));g<f;)b[w++]=Sn(i,g,g+=o);return b}function H6(i){for(var o=-1,a=i==null?0:i.length,f=0,g=[];++o<a;){var w=i[o];w&&(g[f++]=w)}return g}function V6(){var i=arguments.length;if(!i)return[];for(var o=I(i-1),a=arguments[0],f=i;f--;)o[f-1]=arguments[f];return Ar(de(a)?Bt(a):[a],wt(o,1))}var G6=ve(function(i,o){return it(i)?us(i,wt(o,1,it,!0)):[]}),q6=ve(function(i,o){var a=_n(o);return it(a)&&(a=n),it(i)?us(i,wt(o,1,it,!0),ae(a,2)):[]}),K6=ve(function(i,o){var a=_n(o);return it(a)&&(a=n),it(i)?us(i,wt(o,1,it,!0),n,a):[]});function Y6(i,o,a){var f=i==null?0:i.length;return f?(o=a||o===n?1:he(o),Sn(i,o<0?0:o,f)):[]}function Q6(i,o,a){var f=i==null?0:i.length;return f?(o=a||o===n?1:he(o),o=f-o,Sn(i,0,o<0?0:o)):[]}function J6(i,o){return i&&i.length?Jl(i,ae(o,3),!0,!0):[]}function X6(i,o){return i&&i.length?Jl(i,ae(o,3),!0):[]}function Z6(i,o,a,f){var g=i==null?0:i.length;return g?(a&&typeof a!="number"&&Ft(i,o,a)&&(a=0,f=g),V3(i,o,a,f)):[]}function v1(i,o,a){var f=i==null?0:i.length;if(!f)return-1;var g=a==null?0:he(a);return g<0&&(g=dt(f+g,0)),Tl(i,ae(o,3),g)}function y1(i,o,a){var f=i==null?0:i.length;if(!f)return-1;var g=f-1;return a!==n&&(g=he(a),g=a<0?dt(f+g,0):Et(g,f-1)),Tl(i,ae(o,3),g,!0)}function x1(i){var o=i==null?0:i.length;return o?wt(i,1):[]}function e5(i){var o=i==null?0:i.length;return o?wt(i,ze):[]}function t5(i,o){var a=i==null?0:i.length;return a?(o=o===n?1:he(o),wt(i,o)):[]}function n5(i){for(var o=-1,a=i==null?0:i.length,f={};++o<a;){var g=i[o];f[g[0]]=g[1]}return f}function w1(i){return i&&i.length?i[0]:n}function r5(i,o,a){var f=i==null?0:i.length;if(!f)return-1;var g=a==null?0:he(a);return g<0&&(g=dt(f+g,0)),qi(i,o,g)}function i5(i){var o=i==null?0:i.length;return o?Sn(i,0,-1):[]}var o5=ve(function(i){var o=Ge(i,Rf);return o.length&&o[0]===i[0]?Sf(o):[]}),s5=ve(function(i){var o=_n(i),a=Ge(i,Rf);return o===_n(a)?o=n:a.pop(),a.length&&a[0]===i[0]?Sf(a,ae(o,2)):[]}),l5=ve(function(i){var o=_n(i),a=Ge(i,Rf);return o=typeof o=="function"?o:n,o&&a.pop(),a.length&&a[0]===i[0]?Sf(a,n,o):[]});function a5(i,o){return i==null?"":i3.call(i,o)}function _n(i){var o=i==null?0:i.length;return o?i[o-1]:n}function u5(i,o,a){var f=i==null?0:i.length;if(!f)return-1;var g=f;return a!==n&&(g=he(a),g=g<0?dt(f+g,0):Et(g,f-1)),o===o?BS(i,o,g):Tl(i,e0,g,!0)}function c5(i,o){return i&&i.length?R0(i,he(o)):n}var f5=ve(S1);function S1(i,o){return i&&i.length&&o&&o.length?bf(i,o):i}function d5(i,o,a){return i&&i.length&&o&&o.length?bf(i,o,ae(a,2)):i}function p5(i,o,a){return i&&i.length&&o&&o.length?bf(i,o,n,a):i}var h5=pr(function(i,o){var a=i==null?0:i.length,f=vf(i,o);return z0(i,Ge(o,function(g){return hr(g,a)?+g:g}).sort(H0)),f});function g5(i,o){var a=[];if(!(i&&i.length))return a;var f=-1,g=[],w=i.length;for(o=ae(o,3);++f<w;){var b=i[f];o(b,f,i)&&(a.push(b),g.push(f))}return z0(i,g),a}function Vf(i){return i==null?i:a3.call(i)}function m5(i,o,a){var f=i==null?0:i.length;return f?(a&&typeof a!="number"&&Ft(i,o,a)?(o=0,a=f):(o=o==null?0:he(o),a=a===n?f:he(a)),Sn(i,o,a)):[]}function v5(i,o){return Ql(i,o)}function y5(i,o,a){return jf(i,o,ae(a,2))}function x5(i,o){var a=i==null?0:i.length;if(a){var f=Ql(i,o);if(f<a&&Fn(i[f],o))return f}return-1}function w5(i,o){return Ql(i,o,!0)}function S5(i,o,a){return jf(i,o,ae(a,2),!0)}function _5(i,o){var a=i==null?0:i.length;if(a){var f=Ql(i,o,!0)-1;if(Fn(i[f],o))return f}return-1}function C5(i){return i&&i.length?N0(i):[]}function E5(i,o){return i&&i.length?N0(i,ae(o,2)):[]}function b5(i){var o=i==null?0:i.length;return o?Sn(i,1,o):[]}function k5(i,o,a){return i&&i.length?(o=a||o===n?1:he(o),Sn(i,0,o<0?0:o)):[]}function P5(i,o,a){var f=i==null?0:i.length;return f?(o=a||o===n?1:he(o),o=f-o,Sn(i,o<0?0:o,f)):[]}function j5(i,o){return i&&i.length?Jl(i,ae(o,3),!1,!0):[]}function O5(i,o){return i&&i.length?Jl(i,ae(o,3)):[]}var T5=ve(function(i){return Mr(wt(i,1,it,!0))}),R5=ve(function(i){var o=_n(i);return it(o)&&(o=n),Mr(wt(i,1,it,!0),ae(o,2))}),L5=ve(function(i){var o=_n(i);return o=typeof o=="function"?o:n,Mr(wt(i,1,it,!0),n,o)});function A5(i){return i&&i.length?Mr(i):[]}function z5(i,o){return i&&i.length?Mr(i,ae(o,2)):[]}function F5(i,o){return o=typeof o=="function"?o:n,i&&i.length?Mr(i,n,o):[]}function Gf(i){if(!(i&&i.length))return[];var o=0;return i=Lr(i,function(a){if(it(a))return o=dt(a.length,o),!0}),uf(o,function(a){return Ge(i,sf(a))})}function _1(i,o){if(!(i&&i.length))return[];var a=Gf(i);return o==null?a:Ge(a,function(f){return en(o,n,f)})}var N5=ve(function(i,o){return it(i)?us(i,o):[]}),M5=ve(function(i){return Tf(Lr(i,it))}),I5=ve(function(i){var o=_n(i);return it(o)&&(o=n),Tf(Lr(i,it),ae(o,2))}),$5=ve(function(i){var o=_n(i);return o=typeof o=="function"?o:n,Tf(Lr(i,it),n,o)}),D5=ve(Gf);function U5(i,o){return D0(i||[],o||[],as)}function B5(i,o){return D0(i||[],o||[],ds)}var W5=ve(function(i){var o=i.length,a=o>1?i[o-1]:n;return a=typeof a=="function"?(i.pop(),a):n,_1(i,a)});function C1(i){var o=y(i);return o.__chain__=!0,o}function H5(i,o){return o(i),i}function sa(i,o){return o(i)}var V5=pr(function(i){var o=i.length,a=o?i[0]:0,f=this.__wrapped__,g=function(w){return vf(w,i)};return o>1||this.__actions__.length||!(f instanceof we)||!hr(a)?this.thru(g):(f=f.slice(a,+a+(o?1:0)),f.__actions__.push({func:sa,args:[g],thisArg:n}),new xn(f,this.__chain__).thru(function(w){return o&&!w.length&&w.push(n),w}))});function G5(){return C1(this)}function q5(){return new xn(this.value(),this.__chain__)}function K5(){this.__values__===n&&(this.__values__=M1(this.value()));var i=this.__index__>=this.__values__.length,o=i?n:this.__values__[this.__index__++];return{done:i,value:o}}function Y5(){return this}function Q5(i){for(var o,a=this;a instanceof Vl;){var f=m1(a);f.__index__=0,f.__values__=n,o?g.__wrapped__=f:o=f;var g=f;a=a.__wrapped__}return g.__wrapped__=i,o}function J5(){var i=this.__wrapped__;if(i instanceof we){var o=i;return this.__actions__.length&&(o=new we(this)),o=o.reverse(),o.__actions__.push({func:sa,args:[Vf],thisArg:n}),new xn(o,this.__chain__)}return this.thru(Vf)}function X5(){return $0(this.__wrapped__,this.__actions__)}var Z5=Xl(function(i,o,a){Re.call(i,a)?++i[a]:fr(i,a,1)});function e_(i,o,a){var f=de(i)?Xg:H3;return a&&Ft(i,o,a)&&(o=n),f(i,ae(o,3))}function t_(i,o){var a=de(i)?Lr:_0;return a(i,ae(o,3))}var n_=Q0(v1),r_=Q0(y1);function i_(i,o){return wt(la(i,o),1)}function o_(i,o){return wt(la(i,o),ze)}function s_(i,o,a){return a=a===n?1:he(a),wt(la(i,o),a)}function E1(i,o){var a=de(i)?vn:Nr;return a(i,ae(o,3))}function b1(i,o){var a=de(i)?bS:S0;return a(i,ae(o,3))}var l_=Xl(function(i,o,a){Re.call(i,a)?i[a].push(o):fr(i,a,[o])});function a_(i,o,a,f){i=Wt(i)?i:oo(i),a=a&&!f?he(a):0;var g=i.length;return a<0&&(a=dt(g+a,0)),da(i)?a<=g&&i.indexOf(o,a)>-1:!!g&&qi(i,o,a)>-1}var u_=ve(function(i,o,a){var f=-1,g=typeof o=="function",w=Wt(i)?I(i.length):[];return Nr(i,function(b){w[++f]=g?en(o,b,a):cs(b,o,a)}),w}),c_=Xl(function(i,o,a){fr(i,a,o)});function la(i,o){var a=de(i)?Ge:j0;return a(i,ae(o,3))}function f_(i,o,a,f){return i==null?[]:(de(o)||(o=o==null?[]:[o]),a=f?n:a,de(a)||(a=a==null?[]:[a]),L0(i,o,a))}var d_=Xl(function(i,o,a){i[a?0:1].push(o)},function(){return[[],[]]});function p_(i,o,a){var f=de(i)?rf:n0,g=arguments.length<3;return f(i,ae(o,4),a,g,Nr)}function h_(i,o,a){var f=de(i)?kS:n0,g=arguments.length<3;return f(i,ae(o,4),a,g,S0)}function g_(i,o){var a=de(i)?Lr:_0;return a(i,ca(ae(o,3)))}function m_(i){var o=de(i)?v0:a6;return o(i)}function v_(i,o,a){(a?Ft(i,o,a):o===n)?o=1:o=he(o);var f=de(i)?$3:u6;return f(i,o)}function y_(i){var o=de(i)?D3:f6;return o(i)}function x_(i){if(i==null)return 0;if(Wt(i))return da(i)?Yi(i):i.length;var o=bt(i);return o==Ue||o==Ln?i.size:Cf(i).length}function w_(i,o,a){var f=de(i)?of:d6;return a&&Ft(i,o,a)&&(o=n),f(i,ae(o,3))}var S_=ve(function(i,o){if(i==null)return[];var a=o.length;return a>1&&Ft(i,o[0],o[1])?o=[]:a>2&&Ft(o[0],o[1],o[2])&&(o=[o[0]]),L0(i,wt(o,1),[])}),aa=t3||function(){return xt.Date.now()};function __(i,o){if(typeof o!="function")throw new yn(u);return i=he(i),function(){if(--i<1)return o.apply(this,arguments)}}function k1(i,o,a){return o=a?n:o,o=i&&o==null?i.length:o,dr(i,L,n,n,n,n,o)}function P1(i,o){var a;if(typeof o!="function")throw new yn(u);return i=he(i),function(){return--i>0&&(a=o.apply(this,arguments)),i<=1&&(o=n),a}}var qf=ve(function(i,o,a){var f=R;if(a.length){var g=zr(a,ro(qf));f|=F}return dr(i,f,o,a,g)}),j1=ve(function(i,o,a){var f=R|S;if(a.length){var g=zr(a,ro(j1));f|=F}return dr(o,f,i,a,g)});function O1(i,o,a){o=a?n:o;var f=dr(i,C,n,n,n,n,n,o);return f.placeholder=O1.placeholder,f}function T1(i,o,a){o=a?n:o;var f=dr(i,z,n,n,n,n,n,o);return f.placeholder=T1.placeholder,f}function R1(i,o,a){var f,g,w,b,T,N,B=0,W=!1,V=!1,Q=!0;if(typeof i!="function")throw new yn(u);o=Cn(o)||0,Ye(a)&&(W=!!a.leading,V="maxWait"in a,w=V?dt(Cn(a.maxWait)||0,o):w,Q="trailing"in a?!!a.trailing:Q);function ie(ot){var Nn=f,vr=g;return f=g=n,B=ot,b=i.apply(vr,Nn),b}function ue(ot){return B=ot,T=gs(ye,o),W?ie(ot):b}function ge(ot){var Nn=ot-N,vr=ot-B,Q1=o-Nn;return V?Et(Q1,w-vr):Q1}function ce(ot){var Nn=ot-N,vr=ot-B;return N===n||Nn>=o||Nn<0||V&&vr>=w}function ye(){var ot=aa();if(ce(ot))return _e(ot);T=gs(ye,ge(ot))}function _e(ot){return T=n,Q&&f?ie(ot):(f=g=n,b)}function on(){T!==n&&U0(T),B=0,f=N=g=T=n}function Nt(){return T===n?b:_e(aa())}function sn(){var ot=aa(),Nn=ce(ot);if(f=arguments,g=this,N=ot,Nn){if(T===n)return ue(N);if(V)return U0(T),T=gs(ye,o),ie(N)}return T===n&&(T=gs(ye,o)),b}return sn.cancel=on,sn.flush=Nt,sn}var C_=ve(function(i,o){return w0(i,1,o)}),E_=ve(function(i,o,a){return w0(i,Cn(o)||0,a)});function b_(i){return dr(i,Z)}function ua(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new yn(u);var a=function(){var f=arguments,g=o?o.apply(this,f):f[0],w=a.cache;if(w.has(g))return w.get(g);var b=i.apply(this,f);return a.cache=w.set(g,b)||w,b};return a.cache=new(ua.Cache||cr),a}ua.Cache=cr;function ca(i){if(typeof i!="function")throw new yn(u);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function k_(i){return P1(2,i)}var P_=p6(function(i,o){o=o.length==1&&de(o[0])?Ge(o[0],tn(ae())):Ge(wt(o,1),tn(ae()));var a=o.length;return ve(function(f){for(var g=-1,w=Et(f.length,a);++g<w;)f[g]=o[g].call(this,f[g]);return en(i,this,f)})}),Kf=ve(function(i,o){var a=zr(o,ro(Kf));return dr(i,F,n,o,a)}),L1=ve(function(i,o){var a=zr(o,ro(L1));return dr(i,M,n,o,a)}),j_=pr(function(i,o){return dr(i,U,n,n,n,o)});function O_(i,o){if(typeof i!="function")throw new yn(u);return o=o===n?o:he(o),ve(i,o)}function T_(i,o){if(typeof i!="function")throw new yn(u);return o=o==null?0:dt(he(o),0),ve(function(a){var f=a[o],g=$r(a,0,o);return f&&Ar(g,f),en(i,this,g)})}function R_(i,o,a){var f=!0,g=!0;if(typeof i!="function")throw new yn(u);return Ye(a)&&(f="leading"in a?!!a.leading:f,g="trailing"in a?!!a.trailing:g),R1(i,o,{leading:f,maxWait:o,trailing:g})}function L_(i){return k1(i,1)}function A_(i,o){return Kf(Lf(o),i)}function z_(){if(!arguments.length)return[];var i=arguments[0];return de(i)?i:[i]}function F_(i){return wn(i,j)}function N_(i,o){return o=typeof o=="function"?o:n,wn(i,j,o)}function M_(i){return wn(i,m|j)}function I_(i,o){return o=typeof o=="function"?o:n,wn(i,m|j,o)}function $_(i,o){return o==null||x0(i,o,gt(o))}function Fn(i,o){return i===o||i!==i&&o!==o}var D_=na(wf),U_=na(function(i,o){return i>=o}),_i=b0(function(){return arguments}())?b0:function(i){return tt(i)&&Re.call(i,"callee")&&!f0.call(i,"callee")},de=I.isArray,B_=Gg?tn(Gg):Q3;function Wt(i){return i!=null&&fa(i.length)&&!gr(i)}function it(i){return tt(i)&&Wt(i)}function W_(i){return i===!0||i===!1||tt(i)&&zt(i)==J}var Dr=r3||od,H_=qg?tn(qg):J3;function V_(i){return tt(i)&&i.nodeType===1&&!ms(i)}function G_(i){if(i==null)return!0;if(Wt(i)&&(de(i)||typeof i=="string"||typeof i.splice=="function"||Dr(i)||io(i)||_i(i)))return!i.length;var o=bt(i);if(o==Ue||o==Ln)return!i.size;if(hs(i))return!Cf(i).length;for(var a in i)if(Re.call(i,a))return!1;return!0}function q_(i,o){return fs(i,o)}function K_(i,o,a){a=typeof a=="function"?a:n;var f=a?a(i,o):n;return f===n?fs(i,o,n,a):!!f}function Yf(i){if(!tt(i))return!1;var o=zt(i);return o==re||o==Y||typeof i.message=="string"&&typeof i.name=="string"&&!ms(i)}function Y_(i){return typeof i=="number"&&p0(i)}function gr(i){if(!Ye(i))return!1;var o=zt(i);return o==ke||o==Ke||o==Xt||o==x4}function A1(i){return typeof i=="number"&&i==he(i)}function fa(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=q}function Ye(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function tt(i){return i!=null&&typeof i=="object"}var z1=Kg?tn(Kg):Z3;function Q_(i,o){return i===o||_f(i,o,$f(o))}function J_(i,o,a){return a=typeof a=="function"?a:n,_f(i,o,$f(o),a)}function X_(i){return F1(i)&&i!=+i}function Z_(i){if(N6(i))throw new fe(l);return k0(i)}function e8(i){return i===null}function t8(i){return i==null}function F1(i){return typeof i=="number"||tt(i)&&zt(i)==Zt}function ms(i){if(!tt(i)||zt(i)!=Ut)return!1;var o=Il(i);if(o===null)return!0;var a=Re.call(o,"constructor")&&o.constructor;return typeof a=="function"&&a instanceof a&&zl.call(a)==JS}var Qf=Yg?tn(Yg):e6;function n8(i){return A1(i)&&i>=-q&&i<=q}var N1=Qg?tn(Qg):t6;function da(i){return typeof i=="string"||!de(i)&&tt(i)&&zt(i)==Zo}function rn(i){return typeof i=="symbol"||tt(i)&&zt(i)==bl}var io=Jg?tn(Jg):n6;function r8(i){return i===n}function i8(i){return tt(i)&&bt(i)==es}function o8(i){return tt(i)&&zt(i)==S4}var s8=na(Ef),l8=na(function(i,o){return i<=o});function M1(i){if(!i)return[];if(Wt(i))return da(i)?An(i):Bt(i);if(rs&&i[rs])return $S(i[rs]());var o=bt(i),a=o==Ue?ff:o==Ln?Rl:oo;return a(i)}function mr(i){if(!i)return i===0?i:0;if(i=Cn(i),i===ze||i===-ze){var o=i<0?-1:1;return o*ne}return i===i?i:0}function he(i){var o=mr(i),a=o%1;return o===o?a?o-a:o:0}function I1(i){return i?yi(he(i),0,X):0}function Cn(i){if(typeof i=="number")return i;if(rn(i))return se;if(Ye(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=Ye(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=r0(i);var a=B4.test(i);return a||H4.test(i)?_S(i.slice(2),a?2:8):U4.test(i)?se:+i}function $1(i){return Zn(i,Ht(i))}function a8(i){return i?yi(he(i),-q,q):i===0?i:0}function Oe(i){return i==null?"":nn(i)}var u8=to(function(i,o){if(hs(o)||Wt(o)){Zn(o,gt(o),i);return}for(var a in o)Re.call(o,a)&&as(i,a,o[a])}),D1=to(function(i,o){Zn(o,Ht(o),i)}),pa=to(function(i,o,a,f){Zn(o,Ht(o),i,f)}),c8=to(function(i,o,a,f){Zn(o,gt(o),i,f)}),f8=pr(vf);function d8(i,o){var a=eo(i);return o==null?a:y0(a,o)}var p8=ve(function(i,o){i=Ne(i);var a=-1,f=o.length,g=f>2?o[2]:n;for(g&&Ft(o[0],o[1],g)&&(f=1);++a<f;)for(var w=o[a],b=Ht(w),T=-1,N=b.length;++T<N;){var B=b[T],W=i[B];(W===n||Fn(W,Ji[B])&&!Re.call(i,B))&&(i[B]=w[B])}return i}),h8=ve(function(i){return i.push(n,r1),en(U1,n,i)});function g8(i,o){return Zg(i,ae(o,3),Xn)}function m8(i,o){return Zg(i,ae(o,3),xf)}function v8(i,o){return i==null?i:yf(i,ae(o,3),Ht)}function y8(i,o){return i==null?i:C0(i,ae(o,3),Ht)}function x8(i,o){return i&&Xn(i,ae(o,3))}function w8(i,o){return i&&xf(i,ae(o,3))}function S8(i){return i==null?[]:Kl(i,gt(i))}function _8(i){return i==null?[]:Kl(i,Ht(i))}function Jf(i,o,a){var f=i==null?n:xi(i,o);return f===n?a:f}function C8(i,o){return i!=null&&s1(i,o,G3)}function Xf(i,o){return i!=null&&s1(i,o,q3)}var E8=X0(function(i,o,a){o!=null&&typeof o.toString!="function"&&(o=Fl.call(o)),i[o]=a},ed(Vt)),b8=X0(function(i,o,a){o!=null&&typeof o.toString!="function"&&(o=Fl.call(o)),Re.call(i,o)?i[o].push(a):i[o]=[a]},ae),k8=ve(cs);function gt(i){return Wt(i)?m0(i):Cf(i)}function Ht(i){return Wt(i)?m0(i,!0):r6(i)}function P8(i,o){var a={};return o=ae(o,3),Xn(i,function(f,g,w){fr(a,o(f,g,w),f)}),a}function j8(i,o){var a={};return o=ae(o,3),Xn(i,function(f,g,w){fr(a,g,o(f,g,w))}),a}var O8=to(function(i,o,a){Yl(i,o,a)}),U1=to(function(i,o,a,f){Yl(i,o,a,f)}),T8=pr(function(i,o){var a={};if(i==null)return a;var f=!1;o=Ge(o,function(w){return w=Ir(w,i),f||(f=w.length>1),w}),Zn(i,Mf(i),a),f&&(a=wn(a,m|_|j,E6));for(var g=o.length;g--;)Of(a,o[g]);return a});function R8(i,o){return B1(i,ca(ae(o)))}var L8=pr(function(i,o){return i==null?{}:o6(i,o)});function B1(i,o){if(i==null)return{};var a=Ge(Mf(i),function(f){return[f]});return o=ae(o),A0(i,a,function(f,g){return o(f,g[0])})}function A8(i,o,a){o=Ir(o,i);var f=-1,g=o.length;for(g||(g=1,i=n);++f<g;){var w=i==null?n:i[er(o[f])];w===n&&(f=g,w=a),i=gr(w)?w.call(i):w}return i}function z8(i,o,a){return i==null?i:ds(i,o,a)}function F8(i,o,a,f){return f=typeof f=="function"?f:n,i==null?i:ds(i,o,a,f)}var W1=t1(gt),H1=t1(Ht);function N8(i,o,a){var f=de(i),g=f||Dr(i)||io(i);if(o=ae(o,4),a==null){var w=i&&i.constructor;g?a=f?new w:[]:Ye(i)?a=gr(w)?eo(Il(i)):{}:a={}}return(g?vn:Xn)(i,function(b,T,N){return o(a,b,T,N)}),a}function M8(i,o){return i==null?!0:Of(i,o)}function I8(i,o,a){return i==null?i:I0(i,o,Lf(a))}function $8(i,o,a,f){return f=typeof f=="function"?f:n,i==null?i:I0(i,o,Lf(a),f)}function oo(i){return i==null?[]:cf(i,gt(i))}function D8(i){return i==null?[]:cf(i,Ht(i))}function U8(i,o,a){return a===n&&(a=o,o=n),a!==n&&(a=Cn(a),a=a===a?a:0),o!==n&&(o=Cn(o),o=o===o?o:0),yi(Cn(i),o,a)}function B8(i,o,a){return o=mr(o),a===n?(a=o,o=0):a=mr(a),i=Cn(i),K3(i,o,a)}function W8(i,o,a){if(a&&typeof a!="boolean"&&Ft(i,o,a)&&(o=a=n),a===n&&(typeof o=="boolean"?(a=o,o=n):typeof i=="boolean"&&(a=i,i=n)),i===n&&o===n?(i=0,o=1):(i=mr(i),o===n?(o=i,i=0):o=mr(o)),i>o){var f=i;i=o,o=f}if(a||i%1||o%1){var g=h0();return Et(i+g*(o-i+SS("1e-"+((g+"").length-1))),o)}return kf(i,o)}var H8=no(function(i,o,a){return o=o.toLowerCase(),i+(a?V1(o):o)});function V1(i){return Zf(Oe(i).toLowerCase())}function G1(i){return i=Oe(i),i&&i.replace(G4,zS).replace(fS,"")}function V8(i,o,a){i=Oe(i),o=nn(o);var f=i.length;a=a===n?f:yi(he(a),0,f);var g=a;return a-=o.length,a>=0&&i.slice(a,g)==o}function G8(i){return i=Oe(i),i&&k4.test(i)?i.replace(Cg,FS):i}function q8(i){return i=Oe(i),i&&L4.test(i)?i.replace(qc,"\\$&"):i}var K8=no(function(i,o,a){return i+(a?"-":"")+o.toLowerCase()}),Y8=no(function(i,o,a){return i+(a?" ":"")+o.toLowerCase()}),Q8=Y0("toLowerCase");function J8(i,o,a){i=Oe(i),o=he(o);var f=o?Yi(i):0;if(!o||f>=o)return i;var g=(o-f)/2;return ta(Bl(g),a)+i+ta(Ul(g),a)}function X8(i,o,a){i=Oe(i),o=he(o);var f=o?Yi(i):0;return o&&f<o?i+ta(o-f,a):i}function Z8(i,o,a){i=Oe(i),o=he(o);var f=o?Yi(i):0;return o&&f<o?ta(o-f,a)+i:i}function eC(i,o,a){return a||o==null?o=0:o&&(o=+o),l3(Oe(i).replace(Kc,""),o||0)}function tC(i,o,a){return(a?Ft(i,o,a):o===n)?o=1:o=he(o),Pf(Oe(i),o)}function nC(){var i=arguments,o=Oe(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var rC=no(function(i,o,a){return i+(a?"_":"")+o.toLowerCase()});function iC(i,o,a){return a&&typeof a!="number"&&Ft(i,o,a)&&(o=a=n),a=a===n?X:a>>>0,a?(i=Oe(i),i&&(typeof o=="string"||o!=null&&!Qf(o))&&(o=nn(o),!o&&Ki(i))?$r(An(i),0,a):i.split(o,a)):[]}var oC=no(function(i,o,a){return i+(a?" ":"")+Zf(o)});function sC(i,o,a){return i=Oe(i),a=a==null?0:yi(he(a),0,i.length),o=nn(o),i.slice(a,a+o.length)==o}function lC(i,o,a){var f=y.templateSettings;a&&Ft(i,o,a)&&(o=n),i=Oe(i),o=pa({},o,f,n1);var g=pa({},o.imports,f.imports,n1),w=gt(g),b=cf(g,w),T,N,B=0,W=o.interpolate||kl,V="__p += '",Q=df((o.escape||kl).source+"|"+W.source+"|"+(W===Eg?D4:kl).source+"|"+(o.evaluate||kl).source+"|$","g"),ie="//# sourceURL="+(Re.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++mS+"]")+`
`;i.replace(Q,function(ce,ye,_e,on,Nt,sn){return _e||(_e=on),V+=i.slice(B,sn).replace(q4,NS),ye&&(T=!0,V+=`' +
__e(`+ye+`) +
'`),Nt&&(N=!0,V+=`';
`+Nt+`;
__p += '`),_e&&(V+=`' +
((__t = (`+_e+`)) == null ? '' : __t) +
'`),B=sn+ce.length,ce}),V+=`';
`;var ue=Re.call(o,"variable")&&o.variable;if(!ue)V=`with (obj) {
`+V+`
}
`;else if(I4.test(ue))throw new fe(c);V=(N?V.replace(_4,""):V).replace(C4,"$1").replace(E4,"$1;"),V="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var ge=K1(function(){return Pe(w,ie+"return "+V).apply(n,b)});if(ge.source=V,Yf(ge))throw ge;return ge}function aC(i){return Oe(i).toLowerCase()}function uC(i){return Oe(i).toUpperCase()}function cC(i,o,a){if(i=Oe(i),i&&(a||o===n))return r0(i);if(!i||!(o=nn(o)))return i;var f=An(i),g=An(o),w=i0(f,g),b=o0(f,g)+1;return $r(f,w,b).join("")}function fC(i,o,a){if(i=Oe(i),i&&(a||o===n))return i.slice(0,l0(i)+1);if(!i||!(o=nn(o)))return i;var f=An(i),g=o0(f,An(o))+1;return $r(f,0,g).join("")}function dC(i,o,a){if(i=Oe(i),i&&(a||o===n))return i.replace(Kc,"");if(!i||!(o=nn(o)))return i;var f=An(i),g=i0(f,An(o));return $r(f,g).join("")}function pC(i,o){var a=K,f=Ce;if(Ye(o)){var g="separator"in o?o.separator:g;a="length"in o?he(o.length):a,f="omission"in o?nn(o.omission):f}i=Oe(i);var w=i.length;if(Ki(i)){var b=An(i);w=b.length}if(a>=w)return i;var T=a-Yi(f);if(T<1)return f;var N=b?$r(b,0,T).join(""):i.slice(0,T);if(g===n)return N+f;if(b&&(T+=N.length-T),Qf(g)){if(i.slice(T).search(g)){var B,W=N;for(g.global||(g=df(g.source,Oe(bg.exec(g))+"g")),g.lastIndex=0;B=g.exec(W);)var V=B.index;N=N.slice(0,V===n?T:V)}}else if(i.indexOf(nn(g),T)!=T){var Q=N.lastIndexOf(g);Q>-1&&(N=N.slice(0,Q))}return N+f}function hC(i){return i=Oe(i),i&&b4.test(i)?i.replace(_g,WS):i}var gC=no(function(i,o,a){return i+(a?" ":"")+o.toUpperCase()}),Zf=Y0("toUpperCase");function q1(i,o,a){return i=Oe(i),o=a?n:o,o===n?IS(i)?GS(i):OS(i):i.match(o)||[]}var K1=ve(function(i,o){try{return en(i,n,o)}catch(a){return Yf(a)?a:new fe(a)}}),mC=pr(function(i,o){return vn(o,function(a){a=er(a),fr(i,a,qf(i[a],i))}),i});function vC(i){var o=i==null?0:i.length,a=ae();return i=o?Ge(i,function(f){if(typeof f[1]!="function")throw new yn(u);return[a(f[0]),f[1]]}):[],ve(function(f){for(var g=-1;++g<o;){var w=i[g];if(en(w[0],this,f))return en(w[1],this,f)}})}function yC(i){return W3(wn(i,m))}function ed(i){return function(){return i}}function xC(i,o){return i==null||i!==i?o:i}var wC=J0(),SC=J0(!0);function Vt(i){return i}function td(i){return P0(typeof i=="function"?i:wn(i,m))}function _C(i){return O0(wn(i,m))}function CC(i,o){return T0(i,wn(o,m))}var EC=ve(function(i,o){return function(a){return cs(a,i,o)}}),bC=ve(function(i,o){return function(a){return cs(i,a,o)}});function nd(i,o,a){var f=gt(o),g=Kl(o,f);a==null&&!(Ye(o)&&(g.length||!f.length))&&(a=o,o=i,i=this,g=Kl(o,gt(o)));var w=!(Ye(a)&&"chain"in a)||!!a.chain,b=gr(i);return vn(g,function(T){var N=o[T];i[T]=N,b&&(i.prototype[T]=function(){var B=this.__chain__;if(w||B){var W=i(this.__wrapped__),V=W.__actions__=Bt(this.__actions__);return V.push({func:N,args:arguments,thisArg:i}),W.__chain__=B,W}return N.apply(i,Ar([this.value()],arguments))})}),i}function kC(){return xt._===this&&(xt._=XS),this}function rd(){}function PC(i){return i=he(i),ve(function(o){return R0(o,i)})}var jC=zf(Ge),OC=zf(Xg),TC=zf(of);function Y1(i){return Uf(i)?sf(er(i)):s6(i)}function RC(i){return function(o){return i==null?n:xi(i,o)}}var LC=Z0(),AC=Z0(!0);function id(){return[]}function od(){return!1}function zC(){return{}}function FC(){return""}function NC(){return!0}function MC(i,o){if(i=he(i),i<1||i>q)return[];var a=X,f=Et(i,X);o=ae(o),i-=X;for(var g=uf(f,o);++a<i;)o(a);return g}function IC(i){return de(i)?Ge(i,er):rn(i)?[i]:Bt(g1(Oe(i)))}function $C(i){var o=++QS;return Oe(i)+o}var DC=ea(function(i,o){return i+o},0),UC=Ff("ceil"),BC=ea(function(i,o){return i/o},1),WC=Ff("floor");function HC(i){return i&&i.length?ql(i,Vt,wf):n}function VC(i,o){return i&&i.length?ql(i,ae(o,2),wf):n}function GC(i){return t0(i,Vt)}function qC(i,o){return t0(i,ae(o,2))}function KC(i){return i&&i.length?ql(i,Vt,Ef):n}function YC(i,o){return i&&i.length?ql(i,ae(o,2),Ef):n}var QC=ea(function(i,o){return i*o},1),JC=Ff("round"),XC=ea(function(i,o){return i-o},0);function ZC(i){return i&&i.length?af(i,Vt):0}function eE(i,o){return i&&i.length?af(i,ae(o,2)):0}return y.after=__,y.ary=k1,y.assign=u8,y.assignIn=D1,y.assignInWith=pa,y.assignWith=c8,y.at=f8,y.before=P1,y.bind=qf,y.bindAll=mC,y.bindKey=j1,y.castArray=z_,y.chain=C1,y.chunk=W6,y.compact=H6,y.concat=V6,y.cond=vC,y.conforms=yC,y.constant=ed,y.countBy=Z5,y.create=d8,y.curry=O1,y.curryRight=T1,y.debounce=R1,y.defaults=p8,y.defaultsDeep=h8,y.defer=C_,y.delay=E_,y.difference=G6,y.differenceBy=q6,y.differenceWith=K6,y.drop=Y6,y.dropRight=Q6,y.dropRightWhile=J6,y.dropWhile=X6,y.fill=Z6,y.filter=t_,y.flatMap=i_,y.flatMapDeep=o_,y.flatMapDepth=s_,y.flatten=x1,y.flattenDeep=e5,y.flattenDepth=t5,y.flip=b_,y.flow=wC,y.flowRight=SC,y.fromPairs=n5,y.functions=S8,y.functionsIn=_8,y.groupBy=l_,y.initial=i5,y.intersection=o5,y.intersectionBy=s5,y.intersectionWith=l5,y.invert=E8,y.invertBy=b8,y.invokeMap=u_,y.iteratee=td,y.keyBy=c_,y.keys=gt,y.keysIn=Ht,y.map=la,y.mapKeys=P8,y.mapValues=j8,y.matches=_C,y.matchesProperty=CC,y.memoize=ua,y.merge=O8,y.mergeWith=U1,y.method=EC,y.methodOf=bC,y.mixin=nd,y.negate=ca,y.nthArg=PC,y.omit=T8,y.omitBy=R8,y.once=k_,y.orderBy=f_,y.over=jC,y.overArgs=P_,y.overEvery=OC,y.overSome=TC,y.partial=Kf,y.partialRight=L1,y.partition=d_,y.pick=L8,y.pickBy=B1,y.property=Y1,y.propertyOf=RC,y.pull=f5,y.pullAll=S1,y.pullAllBy=d5,y.pullAllWith=p5,y.pullAt=h5,y.range=LC,y.rangeRight=AC,y.rearg=j_,y.reject=g_,y.remove=g5,y.rest=O_,y.reverse=Vf,y.sampleSize=v_,y.set=z8,y.setWith=F8,y.shuffle=y_,y.slice=m5,y.sortBy=S_,y.sortedUniq=C5,y.sortedUniqBy=E5,y.split=iC,y.spread=T_,y.tail=b5,y.take=k5,y.takeRight=P5,y.takeRightWhile=j5,y.takeWhile=O5,y.tap=H5,y.throttle=R_,y.thru=sa,y.toArray=M1,y.toPairs=W1,y.toPairsIn=H1,y.toPath=IC,y.toPlainObject=$1,y.transform=N8,y.unary=L_,y.union=T5,y.unionBy=R5,y.unionWith=L5,y.uniq=A5,y.uniqBy=z5,y.uniqWith=F5,y.unset=M8,y.unzip=Gf,y.unzipWith=_1,y.update=I8,y.updateWith=$8,y.values=oo,y.valuesIn=D8,y.without=N5,y.words=q1,y.wrap=A_,y.xor=M5,y.xorBy=I5,y.xorWith=$5,y.zip=D5,y.zipObject=U5,y.zipObjectDeep=B5,y.zipWith=W5,y.entries=W1,y.entriesIn=H1,y.extend=D1,y.extendWith=pa,nd(y,y),y.add=DC,y.attempt=K1,y.camelCase=H8,y.capitalize=V1,y.ceil=UC,y.clamp=U8,y.clone=F_,y.cloneDeep=M_,y.cloneDeepWith=I_,y.cloneWith=N_,y.conformsTo=$_,y.deburr=G1,y.defaultTo=xC,y.divide=BC,y.endsWith=V8,y.eq=Fn,y.escape=G8,y.escapeRegExp=q8,y.every=e_,y.find=n_,y.findIndex=v1,y.findKey=g8,y.findLast=r_,y.findLastIndex=y1,y.findLastKey=m8,y.floor=WC,y.forEach=E1,y.forEachRight=b1,y.forIn=v8,y.forInRight=y8,y.forOwn=x8,y.forOwnRight=w8,y.get=Jf,y.gt=D_,y.gte=U_,y.has=C8,y.hasIn=Xf,y.head=w1,y.identity=Vt,y.includes=a_,y.indexOf=r5,y.inRange=B8,y.invoke=k8,y.isArguments=_i,y.isArray=de,y.isArrayBuffer=B_,y.isArrayLike=Wt,y.isArrayLikeObject=it,y.isBoolean=W_,y.isBuffer=Dr,y.isDate=H_,y.isElement=V_,y.isEmpty=G_,y.isEqual=q_,y.isEqualWith=K_,y.isError=Yf,y.isFinite=Y_,y.isFunction=gr,y.isInteger=A1,y.isLength=fa,y.isMap=z1,y.isMatch=Q_,y.isMatchWith=J_,y.isNaN=X_,y.isNative=Z_,y.isNil=t8,y.isNull=e8,y.isNumber=F1,y.isObject=Ye,y.isObjectLike=tt,y.isPlainObject=ms,y.isRegExp=Qf,y.isSafeInteger=n8,y.isSet=N1,y.isString=da,y.isSymbol=rn,y.isTypedArray=io,y.isUndefined=r8,y.isWeakMap=i8,y.isWeakSet=o8,y.join=a5,y.kebabCase=K8,y.last=_n,y.lastIndexOf=u5,y.lowerCase=Y8,y.lowerFirst=Q8,y.lt=s8,y.lte=l8,y.max=HC,y.maxBy=VC,y.mean=GC,y.meanBy=qC,y.min=KC,y.minBy=YC,y.stubArray=id,y.stubFalse=od,y.stubObject=zC,y.stubString=FC,y.stubTrue=NC,y.multiply=QC,y.nth=c5,y.noConflict=kC,y.noop=rd,y.now=aa,y.pad=J8,y.padEnd=X8,y.padStart=Z8,y.parseInt=eC,y.random=W8,y.reduce=p_,y.reduceRight=h_,y.repeat=tC,y.replace=nC,y.result=A8,y.round=JC,y.runInContext=A,y.sample=m_,y.size=x_,y.snakeCase=rC,y.some=w_,y.sortedIndex=v5,y.sortedIndexBy=y5,y.sortedIndexOf=x5,y.sortedLastIndex=w5,y.sortedLastIndexBy=S5,y.sortedLastIndexOf=_5,y.startCase=oC,y.startsWith=sC,y.subtract=XC,y.sum=ZC,y.sumBy=eE,y.template=lC,y.times=MC,y.toFinite=mr,y.toInteger=he,y.toLength=I1,y.toLower=aC,y.toNumber=Cn,y.toSafeInteger=a8,y.toString=Oe,y.toUpper=uC,y.trim=cC,y.trimEnd=fC,y.trimStart=dC,y.truncate=pC,y.unescape=hC,y.uniqueId=$C,y.upperCase=gC,y.upperFirst=Zf,y.each=E1,y.eachRight=b1,y.first=w1,nd(y,function(){var i={};return Xn(y,function(o,a){Re.call(y.prototype,a)||(i[a]=o)}),i}(),{chain:!1}),y.VERSION=r,vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){y[i].placeholder=y}),vn(["drop","take"],function(i,o){we.prototype[i]=function(a){a=a===n?1:dt(he(a),0);var f=this.__filtered__&&!o?new we(this):this.clone();return f.__filtered__?f.__takeCount__=Et(a,f.__takeCount__):f.__views__.push({size:Et(a,X),type:i+(f.__dir__<0?"Right":"")}),f},we.prototype[i+"Right"]=function(a){return this.reverse()[i](a).reverse()}}),vn(["filter","map","takeWhile"],function(i,o){var a=o+1,f=a==At||a==Se;we.prototype[i]=function(g){var w=this.clone();return w.__iteratees__.push({iteratee:ae(g,3),type:a}),w.__filtered__=w.__filtered__||f,w}}),vn(["head","last"],function(i,o){var a="take"+(o?"Right":"");we.prototype[i]=function(){return this[a](1).value()[0]}}),vn(["initial","tail"],function(i,o){var a="drop"+(o?"":"Right");we.prototype[i]=function(){return this.__filtered__?new we(this):this[a](1)}}),we.prototype.compact=function(){return this.filter(Vt)},we.prototype.find=function(i){return this.filter(i).head()},we.prototype.findLast=function(i){return this.reverse().find(i)},we.prototype.invokeMap=ve(function(i,o){return typeof i=="function"?new we(this):this.map(function(a){return cs(a,i,o)})}),we.prototype.reject=function(i){return this.filter(ca(ae(i)))},we.prototype.slice=function(i,o){i=he(i);var a=this;return a.__filtered__&&(i>0||o<0)?new we(a):(i<0?a=a.takeRight(-i):i&&(a=a.drop(i)),o!==n&&(o=he(o),a=o<0?a.dropRight(-o):a.take(o-i)),a)},we.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},we.prototype.toArray=function(){return this.take(X)},Xn(we.prototype,function(i,o){var a=/^(?:filter|find|map|reject)|While$/.test(o),f=/^(?:head|last)$/.test(o),g=y[f?"take"+(o=="last"?"Right":""):o],w=f||/^find/.test(o);g&&(y.prototype[o]=function(){var b=this.__wrapped__,T=f?[1]:arguments,N=b instanceof we,B=T[0],W=N||de(b),V=function(ye){var _e=g.apply(y,Ar([ye],T));return f&&Q?_e[0]:_e};W&&a&&typeof B=="function"&&B.length!=1&&(N=W=!1);var Q=this.__chain__,ie=!!this.__actions__.length,ue=w&&!Q,ge=N&&!ie;if(!w&&W){b=ge?b:new we(this);var ce=i.apply(b,T);return ce.__actions__.push({func:sa,args:[V],thisArg:n}),new xn(ce,Q)}return ue&&ge?i.apply(this,T):(ce=this.thru(V),ue?f?ce.value()[0]:ce.value():ce)})}),vn(["pop","push","shift","sort","splice","unshift"],function(i){var o=Ll[i],a=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",f=/^(?:pop|shift)$/.test(i);y.prototype[i]=function(){var g=arguments;if(f&&!this.__chain__){var w=this.value();return o.apply(de(w)?w:[],g)}return this[a](function(b){return o.apply(de(b)?b:[],g)})}}),Xn(we.prototype,function(i,o){var a=y[o];if(a){var f=a.name+"";Re.call(Zi,f)||(Zi[f]=[]),Zi[f].push({name:o,func:a})}}),Zi[Zl(n,S).name]=[{name:"wrapper",func:n}],we.prototype.clone=h3,we.prototype.reverse=g3,we.prototype.value=m3,y.prototype.at=V5,y.prototype.chain=G5,y.prototype.commit=q5,y.prototype.next=K5,y.prototype.plant=Q5,y.prototype.reverse=J5,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=X5,y.prototype.first=y.prototype.head,rs&&(y.prototype[rs]=Y5),y},Qi=qS();hi?((hi.exports=Qi)._=Qi,ef._=Qi):xt._=Qi}).call(vs)})(nc,nc.exports);var mR=nc.exports;const Jo=O.createContext(),vR=({children:e})=>{const[t,n]=O.useState(null),[r,s]=O.useState([]),[l,u]=O.useState(null),[c,d]=O.useState([]),[h,v]=O.useState({}),[m,_]=O.useState(!1),[j,E]=O.useState(null),[P,R]=O.useState(null),S=O.useCallback(mR.debounce(async(F,M,L)=>{try{_(!0),R(null),await Xw(F,M,L),v(U=>{const Z={...U};return delete Z[M],Z}),E("File saved successfully"),setTimeout(()=>E(null),3e3)}catch(U){console.error("Error saving file:",U),R("Failed to save file")}finally{_(!1)}},1e3),[]),x=F=>{if(!l||!t)return;const M={...l,content:F};d(c.map(L=>L._id===l._id?M:L)),u(M),v(L=>({...L,[l._id]:!0})),S(t._id,l._id,F)},C=F=>{c.some(M=>M._id===F._id)||d([...c,F]),u(F)},z=F=>{const M=c.filter(L=>L._id!==F);d(M),l&&l._id===F&&M.length>0?u(M[M.length-1]):M.length===0&&u(null),v(L=>{const U={...L};return delete U[F],U})};return p.jsx(Jo.Provider,{value:{currentProject:t,setCurrentProject:n,files:r,setFiles:s,activeFile:l,setActiveFile:u,openFiles:c,setOpenFiles:d,handleFileChange:x,openFile:C,closeFile:z,unsavedChanges:h,saving:m,saveSuccess:j,saveError:P},children:e})},yR=e=>{const[t,n]=O.useState(null),[r,s]=O.useState([]),[l,u]=O.useState(!0),[c,d]=O.useState(null),h=di(),v=O.useCallback(async()=>{var P,R,S;if(e){u(!0);try{const x=await aO(e);n(x),d(null)}catch(x){console.error("Error fetching project:",x),d(((R=(P=x.response)==null?void 0:P.data)==null?void 0:R.message)||"Failed to load project"),((S=x.response)==null?void 0:S.status)===404&&h("/dashboard")}finally{u(!1)}}},[e,h]),m=O.useCallback(async()=>{var P,R;if(e)try{const S=await Qw(e);s(S)}catch(S){console.error("Error fetching files:",S),d(((R=(P=S.response)==null?void 0:P.data)==null?void 0:R.message)||"Failed to load files")}},[e]),_=async P=>{var R,S;try{const x=await cO(e,P);return n(x),x}catch(x){throw console.error("Error updating project:",x),d(((S=(R=x.response)==null?void 0:R.data)==null?void 0:S.message)||"Failed to update project"),x}},j=async()=>{var P,R;try{await Yw(e),h("/dashboard")}catch(S){throw console.error("Error deleting project:",S),d(((R=(P=S.response)==null?void 0:P.data)==null?void 0:R.message)||"Failed to delete project"),S}},E=async(P,R)=>{var S,x;try{const C=await e4(e,{email:P,role:R});return n(C),C}catch(C){throw console.error("Error sharing project:",C),d(((x=(S=C.response)==null?void 0:S.data)==null?void 0:x.message)||"Failed to share project"),C}};return O.useEffect(()=>{e&&(v(),m())},[e,v,m]),{project:t,files:r,isLoading:l,error:c,fetchProject:v,fetchFiles:m,updateProject:_,deleteProject:j,shareProject:E,setFiles:s}},xR=(e,t,n)=>{const r=O.useCallback(async v=>{try{const m=await Jw(e,v);return n([...t,m]),m}catch(m){throw console.error("Error creating file:",m),m}},[e,t,n]),s=O.useCallback(async(v,m)=>{try{const _=await Xw(e,v,m);return n(t.map(j=>j._id===v?_:j)),_}catch(_){throw console.error("Error updating file:",_),_}},[e,t,n]),l=O.useCallback(async v=>{try{return await Zw(e,v),n(t.filter(m=>m._id!==v)),!0}catch(m){throw console.error("Error deleting file:",m),m}},[e,t,n]),u=O.useCallback(async v=>{try{return await fO(e,v)}catch(m){throw console.error("Error fetching file content:",m),m}},[e]),c=O.useCallback(()=>{const v={},m=[];return t.forEach(_=>{v[_._id]={..._,children:[]}}),t.forEach(_=>{_.parentId&&v[_.parentId]?v[_.parentId].children.push(v[_._id]):m.push(v[_._id])}),m},[t]),d=O.useCallback(v=>t.find(m=>m._id===v)||null,[t]),h=O.useCallback(v=>{const m=[];let _=d(v);if(!_)return m;for(m.unshift(_);_&&_.parentId;)_=d(_.parentId),_&&m.unshift(_);return m},[d]);return{createFile:r,updateFile:s,deleteFile:l,getFileContent:u,buildFileTree:c,findFileById:d,getFilePath:h}},wR=({isOpen:e,onClose:t,onCreate:n,folder:r})=>{const[s,l]=O.useState(""),[u,c]=O.useState("file"),[d,h]=O.useState(".js"),[v,m]=O.useState("");if(!e)return null;const _=E=>{if(E.preventDefault(),!s.trim()){m("Name is required");return}if(s.includes("/")||s.includes("\\")){m("Name cannot contain / or \\");return}n({name:s,type:u,extension:u==="file"?d:"",content:"",language:u==="file"?j(d):""}),l(""),c("file"),h(".js"),m("")},j=E=>{const P=Jp.find(R=>R.extensions.includes(E.toLowerCase()));return P?P.id:"plaintext"};return p.jsx(SR,{onClick:t,children:p.jsxs(_R,{onClick:E=>E.stopPropagation(),children:[p.jsx(CR,{children:r?`New File in ${r.name}`:"Create New"}),p.jsxs(ER,{onSubmit:_,children:[p.jsxs(bR,{children:[p.jsxs(ry,{isSelected:u==="file",onClick:()=>c("file"),children:[p.jsx(tc,{}),p.jsx("span",{children:"File"})]}),p.jsxs(ry,{isSelected:u==="directory",onClick:()=>c("directory"),children:[p.jsx(Vw,{}),p.jsx("span",{children:"Folder"})]})]}),p.jsxs(iy,{children:[p.jsx(oy,{htmlFor:"name",children:"Name"}),p.jsx(kR,{id:"name",type:"text",value:s,onChange:E=>{l(E.target.value),v&&m("")},placeholder:u==="file"?"filename":"folder name",autoFocus:!0})]}),u==="file"&&p.jsxs(iy,{children:[p.jsx(oy,{htmlFor:"extension",children:"Extension"}),p.jsx(PR,{id:"extension",value:d,onChange:E=>h(E.target.value),children:Jp.map(E=>E.extensions.map(P=>p.jsxs("option",{value:P,children:[P," (",E.name,")"]},P)))})]}),v&&p.jsx(RR,{children:v}),p.jsxs(jR,{children:[p.jsx(OR,{type:"button",onClick:t,children:"Cancel"}),p.jsxs(TR,{type:"submit",children:["Create ",u==="file"?"File":"Folder"]})]})]})]})})},SR=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,_R=k.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
`,CR=k.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
`,ER=k.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,bR=k.div`
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
`,ry=k.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: ${e=>e.isSelected?"#ebf8ff":"transparent"};
  color: ${e=>e.isSelected?"#3182ce":"#4a5568"};
  border-bottom: 2px solid ${e=>e.isSelected?"#3182ce":"transparent"};
  
  svg {
    font-size: 18px;
  }
  
  span {
    font-size: 14px;
  }
  
  &:hover {
    background-color: ${e=>e.isSelected?"#ebf8ff":"#f7fafc"};
  }
`,iy=k.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,oy=k.label`
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
`,kR=k.input`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`,PR=k.select`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`,jR=k.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`,a4=k.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`,OR=k(a4)`
  background-color: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  
  &:hover {
    background-color: #f7fafc;
  }
`,TR=k(a4)`
  background-color: #3182ce;
  border: none;
  color: white;
  
  &:hover {
    background-color: #2c5282;
  }
`,RR=k.div`
  color: #e53e3e;
  font-size: 14px;
  background-color: #FFF5F5;
  padding: 8px 12px;
  border-radius: 4px;
  border-left: 3px solid #e53e3e;
`,LR=({projectId:e})=>{const[t,n]=O.useState({}),[r,s]=O.useState({visible:!1,x:0,y:0,fileId:null}),[l,u]=O.useState(!1),[c,d]=O.useState(null),[h,v]=O.useState(!0),{files:m,setFiles:_,activeFile:j,openFile:E}=O.useContext(Jo);O.useEffect(()=>{(async()=>{v(!0);try{const U=await Qw(e);_(U)}catch(U){console.error("Error fetching files:",U)}finally{v(!1)}})()},[e,_]);const P=L=>{n({...t,[L]:!t[L]})},R=L=>{L.type==="file"?E(L):P(L._id)},S=(L,U)=>{L.preventDefault(),s({visible:!0,x:L.clientX,y:L.clientY,fileId:U})},x=()=>{s({visible:!1,x:0,y:0,fileId:null})},C=async L=>{try{const U=await Jw(e,{...L,parentId:c?c._id:null});_([...m,U]),u(!1),U.type==="file"&&E(U)}catch(U){console.error("Error creating file:",U)}},z=async L=>{const U=m.find(Z=>Z._id===L);if(U&&window.confirm(`Are you sure you want to delete ${U.name}${U.extension||""}?`))try{await Zw(e,L),_(m.filter(Z=>Z._id!==L)),x()}catch(Z){console.error("Error deleting file:",Z)}},F=L=>{var Z;if(L.type==="directory")return t[L._id]?p.jsx(D9,{}):p.jsx(Vw,{});switch((Z=L.extension)==null?void 0:Z.substring(1).toLowerCase()){case"js":case"jsx":return p.jsx(Bw,{});case"py":return p.jsx(Ww,{});case"html":return p.jsx(Uw,{});case"css":return p.jsx(Dw,{});case"md":return p.jsx(pg,{});case"ipynb":return p.jsx(Qo,{});default:return p.jsx(tc,{})}},M=()=>{const L={};m.forEach(K=>{L[K.parentId||"root"]||(L[K.parentId||"root"]=[]),L[K.parentId||"root"].push(K)});const U=K=>K.sort((Ce,be)=>Ce.type==="directory"&&be.type!=="directory"?-1:Ce.type!=="directory"&&be.type==="directory"?1:Ce.name.localeCompare(be.name)),Z=(K="root")=>{const Ce=L[K]||[];return Ce.length===0?null:p.jsx(u4,{children:U(Ce).map(be=>p.jsxs(MR,{isActive:j&&j._id===be._id,onClick:()=>R(be),onContextMenu:et=>S(et,be._id),children:[p.jsx(IR,{children:F(be)}),p.jsxs($R,{children:[be.name,be.type==="file"?be.extension:""]}),be.type==="directory"&&t[be._id]&&Z(be._id)]},be._id))})};return Z()};return h?p.jsx(WR,{children:"Loading files..."}):p.jsxs(AR,{onClick:x,children:[p.jsxs(zR,{children:[p.jsx(FR,{children:"Files"}),p.jsx(NR,{onClick:L=>{L.stopPropagation(),d(null),u(!0)},title:"Add new file",children:p.jsx(hl,{})})]}),m.length===0?p.jsxs(UR,{children:[p.jsx("p",{children:"No files yet"}),p.jsx(BR,{onClick:()=>u(!0),children:"Create File"})]}):M(),r.visible&&p.jsxs(DR,{style:{top:r.y,left:r.x},children:[p.jsx(sy,{onClick:()=>{const L=m.find(U=>U._id===r.fileId);L&&L.type==="directory"&&(d(L),u(!0),x())},children:"Add File"}),p.jsx(sy,{onClick:()=>z(r.fileId),children:"Delete"})]}),p.jsx(wR,{isOpen:l,onClose:()=>u(!1),onCreate:C,folder:c})]})},AR=k.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-right: 1px solid #e2e8f0;
  overflow: hidden;
`,zR=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #edf2f7;
`,FR=k.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: #4a5568;
`,NR=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: #4a5568;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    background-color: #e2e8f0;
  }
`,u4=k.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`,MR=k.li`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
  position: relative;
  background-color: ${e=>e.isActive?"#e6f7ff":"transparent"};
  border-left: 3px solid ${e=>e.isActive?"#1890ff":"transparent"};
  
  &:hover {
    background-color: ${e=>e.isActive?"#e6f7ff":"#f0f0f0"};
  }
  
  ${u4} {
    margin-left: 20px;
    margin-top: 5px;
  }
`,IR=k.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: #4a5568;
  
  svg {
    width: 14px;
    height: 14px;
  }
`,$R=k.span`
  font-size: 13px;
  color: #4a5568;
  word-break: break-all;
`,DR=k.div`
  position: fixed;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 150px;
`,sy=k.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`,UR=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  
  p {
    color: #718096;
    margin-bottom: 15px;
  }
`,BR=k.button`
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  
  &:hover {
    background-color: #2c5282;
  }
`,WR=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #718096;
  font-size: 14px;
`,HR=()=>{const{openFiles:e,activeFile:t,setActiveFile:n,closeFile:r,unsavedChanges:s,saving:l}=O.useContext(Jo);if(!e||e.length===0)return p.jsx(XR,{children:"No files open"});const u=c=>{if(!c)return p.jsx(tc,{});switch(c.substring(1).toLowerCase()){case"js":case"jsx":return p.jsx(Bw,{});case"py":return p.jsx(Ww,{});case"html":return p.jsx(Uw,{});case"css":return p.jsx(Dw,{});case"md":return p.jsx(pg,{});case"ipynb":return p.jsx(Qo,{});default:return p.jsx(tc,{})}};return p.jsxs(VR,{children:[p.jsx(GR,{children:e.map(c=>p.jsxs(qR,{isActive:t&&t._id===c._id,onClick:()=>n(c),children:[p.jsx(KR,{children:u(c.extension)}),p.jsxs(YR,{children:[c.name,c.extension]}),s[c._id]&&p.jsx(QR,{children:"●"}),p.jsx(JR,{onClick:d=>{d.stopPropagation(),r(c._id)},children:p.jsx(W9,{})})]},c._id))}),l&&p.jsx(ZR,{children:"Saving..."})]})},VR=k.div`
  display: flex;
  background-color: #edf2f7;
  border-bottom: 1px solid #e2e8f0;
  height: 40px;
  overflow-x: auto;
  position: relative;
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`,GR=k.div`
  display: flex;
  height: 100%;
`,qR=k.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
  min-width: 120px;
  max-width: 200px;
  background-color: ${e=>e.isActive?"white":"#edf2f7"};
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid ${e=>e.isActive?"white":"#e2e8f0"};
  margin-bottom: ${e=>e.isActive?"-1px":"0"};
  cursor: pointer;
  user-select: none;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    background-color: ${e=>e.isActive?"white":"#f7fafc"};
  }
`,KR=k.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: #4a5568;
  
  svg {
    width: 14px;
    height: 14px;
  }
`,YR=k.span`
  font-size: 13px;
  color: #4a5568;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,QR=k.span`
  color: #3182ce;
  font-size: 14px;
  margin-right: 6px;
`,JR=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #a0aec0;
  cursor: pointer;
  padding: 2px;
  
  svg {
    width: 10px;
    height: 10px;
  }
  
  &:hover {
    background-color: #e2e8f0;
    color: #4a5568;
  }
`,XR=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #edf2f7;
  border-bottom: 1px solid #e2e8f0;
  color: #a0aec0;
  font-size: 13px;
`,ZR=k.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
  font-size: 12px;
  background-color: #edf2f7;
  padding: 2px 6px;
  border-radius: 4px;
`;function eL(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ly(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function ay(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ly(Object(n),!0).forEach(function(r){eL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ly(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tL(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,l;for(l=0;l<r.length;l++)s=r[l],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function nL(e,t){if(e==null)return{};var n=tL(e,t),r,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rL(e,t){return iL(e)||oL(e,t)||sL(e,t)||lL()}function iL(e){if(Array.isArray(e))return e}function oL(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,s=!1,l=void 0;try{for(var u=e[Symbol.iterator](),c;!(r=(c=u.next()).done)&&(n.push(c.value),!(t&&n.length===t));r=!0);}catch(d){s=!0,l=d}finally{try{!r&&u.return!=null&&u.return()}finally{if(s)throw l}}return n}}function sL(e,t){if(e){if(typeof e=="string")return uy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uy(e,t)}}function uy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aL(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function fy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cy(Object(n),!0).forEach(function(r){aL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uL(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(s,l){return l(s)},r)}}function Fs(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return s.length>=e.length?e.apply(this,s):function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return t.apply(n,[].concat(s,c))}}}function rc(e){return{}.toString.call(e).includes("Object")}function cL(e){return!Object.keys(e).length}function ml(e){return typeof e=="function"}function fL(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function dL(e,t){return rc(t)||si("changeType"),Object.keys(t).some(function(n){return!fL(e,n)})&&si("changeField"),t}function pL(e){ml(e)||si("selectorType")}function hL(e){ml(e)||rc(e)||si("handlerType"),rc(e)&&Object.values(e).some(function(t){return!ml(t)})&&si("handlersType")}function gL(e){e||si("initialIsRequired"),rc(e)||si("initialType"),cL(e)&&si("initialContent")}function mL(e,t){throw new Error(e[t]||e.default)}var vL={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},si=Fs(mL)(vL),Wa={changes:dL,selector:pL,handler:hL,initial:gL};function yL(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Wa.initial(e),Wa.handler(t);var n={current:e},r=Fs(SL)(n,t),s=Fs(wL)(n),l=Fs(Wa.changes)(e),u=Fs(xL)(n);function c(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(v){return v};return Wa.selector(h),h(n.current)}function d(h){uL(r,s,l,u)(h)}return[c,d]}function xL(e,t){return ml(t)?t(e.current):t}function wL(e,t){return e.current=fy(fy({},e.current),t),t}function SL(e,t,n){return ml(t)?t(e.current):Object.keys(n).forEach(function(r){var s;return(s=t[r])===null||s===void 0?void 0:s.call(t,e.current[r])}),n}var _L={create:yL},CL={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function EL(e){return function t(){for(var n=this,r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return s.length>=e.length?e.apply(this,s):function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return t.apply(n,[].concat(s,c))}}}function bL(e){return{}.toString.call(e).includes("Object")}function kL(e){return e||dy("configIsRequired"),bL(e)||dy("configType"),e.urls?(PL(),{paths:{vs:e.urls.monacoBase}}):e}function PL(){console.warn(c4.deprecation)}function jL(e,t){throw new Error(e[t]||e.default)}var c4={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},dy=EL(jL)(c4),OL={config:kL},TL=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduceRight(function(l,u){return u(l)},s)}};function f4(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],f4(e[n],t[n]))}),ay(ay({},e),t)}var RL={type:"cancelation",msg:"operation is manually canceled"};function Vd(e){var t=!1,n=new Promise(function(r,s){e.then(function(l){return t?s(RL):r(l)}),e.catch(s)});return n.cancel=function(){return t=!0},n}var LL=_L.create({config:CL,isInitialized:!1,resolve:null,reject:null,monaco:null}),d4=rL(LL,2),El=d4[0],Mc=d4[1];function AL(e){var t=OL.config(e),n=t.monaco,r=nL(t,["monaco"]);Mc(function(s){return{config:f4(s.config,r),monaco:n}})}function zL(){var e=El(function(t){var n=t.monaco,r=t.isInitialized,s=t.resolve;return{monaco:n,isInitialized:r,resolve:s}});if(!e.isInitialized){if(Mc({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Vd(Gd);if(window.monaco&&window.monaco.editor)return p4(window.monaco),e.resolve(window.monaco),Vd(Gd);TL(FL,ML)(IL)}return Vd(Gd)}function FL(e){return document.body.appendChild(e)}function NL(e){var t=document.createElement("script");return e&&(t.src=e),t}function ML(e){var t=El(function(r){var s=r.config,l=r.reject;return{config:s,reject:l}}),n=NL("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function IL(){var e=El(function(n){var r=n.config,s=n.resolve,l=n.reject;return{config:r,resolve:s,reject:l}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){p4(n),e.resolve(n)},function(n){e.reject(n)})}function p4(e){El().monaco||Mc({monaco:e})}function $L(){return El(function(e){var t=e.monaco;return t})}var Gd=new Promise(function(e,t){return Mc({resolve:e,reject:t})}),h4={config:AL,init:zL,__getMonacoInstance:$L},DL={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},qd=DL,UL={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},BL=UL;function WL({children:e}){return rt.createElement("div",{style:BL.container},e)}var HL=WL,VL=HL;function GL({width:e,height:t,isEditorReady:n,loading:r,_ref:s,className:l,wrapperProps:u}){return rt.createElement("section",{style:{...qd.wrapper,width:e,height:t},...u},!n&&rt.createElement(VL,null,r),rt.createElement("div",{ref:s,style:{...qd.fullWidth,...!n&&qd.hide},className:l}))}var qL=GL,g4=O.memo(qL);function KL(e){O.useEffect(e,[])}var m4=KL;function YL(e,t,n=!0){let r=O.useRef(!0);O.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var an=YL;function Gs(){}function _o(e,t,n,r){return QL(e,r)||JL(e,t,n,r)}function QL(e,t){return e.editor.getModel(v4(e,t))}function JL(e,t,n,r){return e.editor.createModel(t,n,r?v4(e,r):void 0)}function v4(e,t){return e.Uri.parse(t)}function XL({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:s,originalModelPath:l,modifiedModelPath:u,keepCurrentOriginalModel:c=!1,keepCurrentModifiedModel:d=!1,theme:h="light",loading:v="Loading...",options:m={},height:_="100%",width:j="100%",className:E,wrapperProps:P={},beforeMount:R=Gs,onMount:S=Gs}){let[x,C]=O.useState(!1),[z,F]=O.useState(!0),M=O.useRef(null),L=O.useRef(null),U=O.useRef(null),Z=O.useRef(S),K=O.useRef(R),Ce=O.useRef(!1);m4(()=>{let le=h4.init();return le.then(Se=>(L.current=Se)&&F(!1)).catch(Se=>(Se==null?void 0:Se.type)!=="cancelation"&&console.error("Monaco initialization: error:",Se)),()=>M.current?At():le.cancel()}),an(()=>{if(M.current&&L.current){let le=M.current.getOriginalEditor(),Se=_o(L.current,e||"",r||n||"text",l||"");Se!==le.getModel()&&le.setModel(Se)}},[l],x),an(()=>{if(M.current&&L.current){let le=M.current.getModifiedEditor(),Se=_o(L.current,t||"",s||n||"text",u||"");Se!==le.getModel()&&le.setModel(Se)}},[u],x),an(()=>{let le=M.current.getModifiedEditor();le.getOption(L.current.editor.EditorOption.readOnly)?le.setValue(t||""):t!==le.getValue()&&(le.executeEdits("",[{range:le.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),le.pushUndoStop())},[t],x),an(()=>{var le,Se;(Se=(le=M.current)==null?void 0:le.getModel())==null||Se.original.setValue(e||"")},[e],x),an(()=>{let{original:le,modified:Se}=M.current.getModel();L.current.editor.setModelLanguage(le,r||n||"text"),L.current.editor.setModelLanguage(Se,s||n||"text")},[n,r,s],x),an(()=>{var le;(le=L.current)==null||le.editor.setTheme(h)},[h],x),an(()=>{var le;(le=M.current)==null||le.updateOptions(m)},[m],x);let be=O.useCallback(()=>{var ze;if(!L.current)return;K.current(L.current);let le=_o(L.current,e||"",r||n||"text",l||""),Se=_o(L.current,t||"",s||n||"text",u||"");(ze=M.current)==null||ze.setModel({original:le,modified:Se})},[n,t,s,e,r,l,u]),et=O.useCallback(()=>{var le;!Ce.current&&U.current&&(M.current=L.current.editor.createDiffEditor(U.current,{automaticLayout:!0,...m}),be(),(le=L.current)==null||le.editor.setTheme(h),C(!0),Ce.current=!0)},[m,h,be]);O.useEffect(()=>{x&&Z.current(M.current,L.current)},[x]),O.useEffect(()=>{!z&&!x&&et()},[z,x,et]);function At(){var Se,ze,q,ne;let le=(Se=M.current)==null?void 0:Se.getModel();c||((ze=le==null?void 0:le.original)==null||ze.dispose()),d||((q=le==null?void 0:le.modified)==null||q.dispose()),(ne=M.current)==null||ne.dispose()}return rt.createElement(g4,{width:j,height:_,isEditorReady:x,loading:v,_ref:U,className:E,wrapperProps:P})}var ZL=XL;O.memo(ZL);function eA(e){let t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}var tA=eA,Ha=new Map;function nA({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:s,path:l,theme:u="light",line:c,loading:d="Loading...",options:h={},overrideServices:v={},saveViewState:m=!0,keepCurrentModel:_=!1,width:j="100%",height:E="100%",className:P,wrapperProps:R={},beforeMount:S=Gs,onMount:x=Gs,onChange:C,onValidate:z=Gs}){let[F,M]=O.useState(!1),[L,U]=O.useState(!0),Z=O.useRef(null),K=O.useRef(null),Ce=O.useRef(null),be=O.useRef(x),et=O.useRef(S),At=O.useRef(),le=O.useRef(r),Se=tA(l),ze=O.useRef(!1),q=O.useRef(!1);m4(()=>{let X=h4.init();return X.then(oe=>(Z.current=oe)&&U(!1)).catch(oe=>(oe==null?void 0:oe.type)!=="cancelation"&&console.error("Monaco initialization: error:",oe)),()=>K.current?se():X.cancel()}),an(()=>{var oe,$e,Fe,De;let X=_o(Z.current,e||r||"",t||s||"",l||n||"");X!==((oe=K.current)==null?void 0:oe.getModel())&&(m&&Ha.set(Se,($e=K.current)==null?void 0:$e.saveViewState()),(Fe=K.current)==null||Fe.setModel(X),m&&((De=K.current)==null||De.restoreViewState(Ha.get(l))))},[l],F),an(()=>{var X;(X=K.current)==null||X.updateOptions(h)},[h],F),an(()=>{!K.current||r===void 0||(K.current.getOption(Z.current.editor.EditorOption.readOnly)?K.current.setValue(r):r!==K.current.getValue()&&(q.current=!0,K.current.executeEdits("",[{range:K.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),K.current.pushUndoStop(),q.current=!1))},[r],F),an(()=>{var oe,$e;let X=(oe=K.current)==null?void 0:oe.getModel();X&&s&&(($e=Z.current)==null||$e.editor.setModelLanguage(X,s))},[s],F),an(()=>{var X;c!==void 0&&((X=K.current)==null||X.revealLine(c))},[c],F),an(()=>{var X;(X=Z.current)==null||X.editor.setTheme(u)},[u],F);let ne=O.useCallback(()=>{var X;if(!(!Ce.current||!Z.current)&&!ze.current){et.current(Z.current);let oe=l||n,$e=_o(Z.current,r||e||"",t||s||"",oe||"");K.current=(X=Z.current)==null?void 0:X.editor.create(Ce.current,{model:$e,automaticLayout:!0,...h},v),m&&K.current.restoreViewState(Ha.get(oe)),Z.current.editor.setTheme(u),c!==void 0&&K.current.revealLine(c),M(!0),ze.current=!0}},[e,t,n,r,s,l,h,v,m,u,c]);O.useEffect(()=>{F&&be.current(K.current,Z.current)},[F]),O.useEffect(()=>{!L&&!F&&ne()},[L,F,ne]),le.current=r,O.useEffect(()=>{var X,oe;F&&C&&((X=At.current)==null||X.dispose(),At.current=(oe=K.current)==null?void 0:oe.onDidChangeModelContent($e=>{q.current||C(K.current.getValue(),$e)}))},[F,C]),O.useEffect(()=>{if(F){let X=Z.current.editor.onDidChangeMarkers(oe=>{var Fe;let $e=(Fe=K.current.getModel())==null?void 0:Fe.uri;if($e&&oe.find(De=>De.path===$e.path)){let De=Z.current.editor.getModelMarkers({resource:$e});z==null||z(De)}});return()=>{X==null||X.dispose()}}return()=>{}},[F,z]);function se(){var X,oe;(X=At.current)==null||X.dispose(),_?m&&Ha.set(l,K.current.saveViewState()):(oe=K.current.getModel())==null||oe.dispose(),K.current.dispose()}return rt.createElement(g4,{width:j,height:E,isEditorReady:F,loading:d,_ref:Ce,className:P,wrapperProps:R})}var rA=nA,iA=O.memo(rA),y4=iA;const oA=({file:e})=>{const t=O.useRef(null),{handleFileChange:n}=O.useContext(Jo);O.useEffect(()=>{t.current&&t.current.focus()},[e==null?void 0:e._id]);const r=l=>{t.current=l,l.focus()},s=()=>{if(!e||!e.extension)return"plaintext";const l=e.extension.toLowerCase(),u=Jp.find(c=>c.extensions.includes(l));return u?u.id:"plaintext"};return e?p.jsx(sA,{children:p.jsx(y4,{height:"100%",language:s(),value:e.content,theme:"vs-dark",onChange:l=>n(l),onMount:r,options:{minimap:{enabled:!0},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:14,fontFamily:"'Fira Code', 'Droid Sans Mono', 'monospace'",fontLigatures:!0,automaticLayout:!0,tabSize:2,lineNumbers:"on",scrollbar:{vertical:"auto",horizontal:"auto"}}})}):p.jsx(lA,{children:p.jsx("p",{children:"Select a file to edit"})})},sA=k.div`
  flex: 1;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
`,lA=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f8f9fa;
  color: #718096;
  font-size: 1.1rem;
`,aA=({outputs:e})=>{if(!e||e.length===0)return null;const t=(s,l)=>s.output_type==="stream"?p.jsx(cA,{name:s.name,children:s.text.join("")},l):s.output_type==="execute_result"?n(s,l):s.output_type==="display_data"?r(s,l):s.output_type==="error"?p.jsxs(fA,{children:[p.jsxs("div",{children:[s.ename,": ",s.evalue]}),s.traceback&&p.jsx("pre",{children:s.traceback.join("")})]},l):p.jsx(pA,{children:JSON.stringify(s,null,2)},l),n=(s,l)=>{if(s.data&&s.data["text/plain"])return p.jsx(Va,{children:Array.isArray(s.data["text/plain"])?s.data["text/plain"].join(""):s.data["text/plain"]},l);if(s.data&&s.data["text/html"]){const u=Array.isArray(s.data["text/html"])?s.data["text/html"].join(""):s.data["text/html"];return p.jsx("div",{dangerouslySetInnerHTML:{__html:u}},l)}return p.jsx(Va,{children:JSON.stringify(s.data,null,2)},l)},r=(s,l)=>{if(s.data&&s.data["image/png"]){const u=s.data["image/png"];return p.jsx(dA,{children:p.jsx("img",{src:`data:image/png;base64,${u}`,alt:"Output"})},l)}if(s.data&&s.data["image/svg+xml"]){const u=Array.isArray(s.data["image/svg+xml"])?s.data["image/svg+xml"].join(""):s.data["image/svg+xml"];return p.jsx("div",{dangerouslySetInnerHTML:{__html:u}},l)}return s.data&&s.data["text/plain"]?p.jsx(Va,{children:Array.isArray(s.data["text/plain"])?s.data["text/plain"].join(""):s.data["text/plain"]},l):p.jsx(Va,{children:JSON.stringify(s.data,null,2)},l)};return p.jsx(uA,{children:e.map(t)})},uA=k.div`
  padding: 10px;
  font-family: monospace;
  font-size: 14px;
`,cA=k.pre`
  margin: 0;
  padding: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: ${e=>e.name==="stderr"?"#e53e3e":"inherit"};
  background-color: ${e=>e.name==="stderr"?"#FFF5F5":"transparent"};
`,Va=k.pre`
  margin: 0;
  padding: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
`,fA=k.div`
  margin: 0;
  padding: 8px;
  color: #e53e3e;
  background-color: #FFF5F5;
  border-left: 3px solid #e53e3e;
  
  pre {
    margin: 8px 0 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: monospace;
  }
`,dA=k.div`
  padding: 8px;
  text-align: center;
  
  img {
    max-width: 100%;
  }
`,pA=k.pre`
  margin: 0;
  padding: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #718096;
  font-size: 12px;
  background-color: #F7FAFC;
`,hA=({cell:e,index:t,onChange:n,onDelete:r,onAddBelow:s,onTypeChange:l})=>{const[u,c]=O.useState(!1),[d,h]=O.useState(!0),v=P=>{n(P)},m=()=>e.cell_type||"code",_=()=>{const P=m();return P==="markdown"?"markdown":P==="raw"?"plaintext":"python"},j=()=>e.source?Array.isArray(e.source)?e.source.join(""):e.source:"",E=()=>{const R=m()==="code"?"markdown":"code";l(R)};return p.jsxs(gA,{children:[p.jsxs(mA,{children:[p.jsx(vA,{children:t+1}),p.jsxs(yA,{children:[p.jsx(Ga,{title:`Change to ${m()==="code"?"markdown":"code"}`,onClick:E,children:m()==="code"?p.jsx(Qo,{}):p.jsx(pg,{})}),m()==="code"&&p.jsx(Ga,{title:"Run cell",onClick:()=>console.log("Run cell not implemented yet"),children:p.jsx(Gw,{})}),p.jsx(Ga,{title:"Add cell below",onClick:s,children:p.jsx(hl,{})}),p.jsx(Ga,{title:"Delete cell",onClick:r,children:p.jsx(yg,{})})]})]}),p.jsxs(xA,{children:[p.jsx(wA,{isEditing:u,isFocused:u,onClick:()=>!u&&c(!0),children:p.jsx(y4,{height:m()==="markdown"?"150px":"200px",language:_(),value:j(),theme:"vs-dark",onChange:v,onFocus:()=>c(!0),onBlur:()=>c(!1),options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:14,lineNumbers:"off",folding:!1,glyphMargin:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"on",automaticLayout:!0,tabSize:2,contextmenu:!1,scrollbar:{vertical:"auto",horizontal:"auto"}}})}),m()==="code"&&e.outputs&&e.outputs.length>0&&p.jsxs(SA,{show:d,children:[p.jsxs(_A,{onClick:()=>h(!d),children:["Output ",d?"▼":"▶"]}),d&&p.jsx(aA,{outputs:e.outputs})]})]})]})},gA=k.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,mA=k.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: #edf2f7;
  border-bottom: 1px solid #e2e8f0;
`,vA=k.div`
  font-family: monospace;
  font-size: 12px;
  color: #718096;
  background-color: #e2e8f0;
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 8px;
  min-width: 20px;
  text-align: center;
`,yA=k.div`
  display: flex;
  gap: 4px;
`,Ga=k.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px 6px;
  color: #4a5568;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e2e8f0;
  }
  
  svg {
    width: 12px;
    height: 12px;
  }
`,xA=k.div`
  display: flex;
  flex-direction: column;
`,wA=k.div`
  border-left: 3px solid ${e=>e.isFocused?"#3182ce":"transparent"};
  transition: border-color 0.2s;
  
  &:hover {
    border-left: 3px solid ${e=>e.isFocused?"#3182ce":"#e2e8f0"};
  }
`,SA=k.div`
  border-top: 1px solid #e2e8f0;
  display: ${e=>e.show?"block":"none"};
`,_A=k.div`
  padding: 4px 8px;
  background-color: #f7fafc;
  font-size: 12px;
  color: #718096;
  cursor: pointer;
  border-bottom: 1px solid #e2e8f0;
  
  &:hover {
    background-color: #edf2f7;
  }
`,CA=e=>{try{if(typeof e=="object")return e;const t=JSON.parse(e);if(!t.cells||!Array.isArray(t.cells))throw new Error("Invalid notebook format: missing cells array");return t.metadata||(t.metadata={}),t}catch(t){return console.error("Error parsing notebook:",t),{nbformat:4,nbformat_minor:5,metadata:{kernelspec:{display_name:"Python 3",language:"python",name:"python3"},language_info:{name:"python",version:"3.8.0"}},cells:[{cell_type:"markdown",metadata:{},source:[`# New Notebook

This notebook was created automatically.`]},{cell_type:"code",metadata:{},source:["# Enter code here"],outputs:[]}]}}},EA=(e,t,n,r)=>{const s=JSON.parse(JSON.stringify(e));if(!s.cells||!s.cells[t])throw new Error(`Cell at index ${t} does not exist`);const l=s.cells[t];return l.cell_type=r,l.source=n.split(`
`).map(u=>`${u}
`),r==="code"&&!l.outputs&&(l.outputs=[],l.execution_count=null),s},bA=(e,t="code",n=-1)=>{const r=JSON.parse(JSON.stringify(e)),s={cell_type:t,metadata:{},source:[]};return t==="code"&&(s.outputs=[],s.execution_count=null),n===-1||!r.cells?(r.cells=r.cells||[],r.cells.push(s)):r.cells.splice(n+1,0,s),r},kA=(e,t)=>{const n=JSON.parse(JSON.stringify(e));if(!n.cells||!n.cells[t])throw new Error(`Cell at index ${t} does not exist`);if(n.cells.length<=1)throw new Error("Cannot delete the last cell");return n.cells.splice(t,1),n},PA=({file:e})=>{const[t,n]=O.useState([]),[r,s]=O.useState(null),{handleFileChange:l}=O.useContext(Jo);O.useEffect(()=>{if(e&&e.content)try{const h=CA(e.content);s(h),n(h.cells.map((v,m)=>({id:m,...v})))}catch(h){console.error("Error parsing notebook:",h),n([])}},[e]);const u=(h,v,m="code")=>{const _=[...t];if(_[h]={..._[h],source:v.split(`
`).map(j=>j+`
`),cell_type:m},n(_),r){const j=EA(r,h,v,m);s(j),l(JSON.stringify(j,null,2))}},c=(h="code",v=t.length-1)=>{const m={id:t.length,cell_type:h,source:[""],metadata:{},outputs:[]},_=[...t];if(_.splice(v+1,0,m),n(_),r){const j=bA(r,h,v);s(j),l(JSON.stringify(j,null,2))}},d=h=>{if(t.length<=1)return;const v=t.filter((m,_)=>_!==h);if(n(v),r){const m=kA(r,h);s(m),l(JSON.stringify(m,null,2))}};return e?p.jsxs(jA,{children:[t.map((h,v)=>p.jsx(hA,{cell:h,index:v,onChange:m=>u(v,m,h.cell_type),onDelete:()=>d(v),onAddBelow:()=>c(h.cell_type,v),onTypeChange:m=>u(v,h.source.join(""),m)},`cell-${v}`)),p.jsxs(TA,{onClick:()=>c(),children:[p.jsx(hl,{})," Add Cell"]})]}):p.jsx(OA,{children:p.jsx("p",{children:"Select a notebook file to edit"})})},jA=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  background-color: #f8f9fa;
`,OA=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f8f9fa;
  color: #718096;
  font-size: 1.1rem;
`,TA=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #edf2f7;
  border: 1px dashed #cbd5e0;
  border-radius: 4px;
  padding: 8px;
  margin: 8px 0;
  color: #4a5568;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #e2e8f0;
  }
`,RA=({project:e,onShare:t})=>{const[n,r]=O.useState(!1),s=di();if(!e)return null;const l=()=>{s("/dashboard")},u=()=>{alert("Export functionality not implemented yet")},c=()=>{alert("Run code functionality not implemented yet")};return p.jsxs(LA,{children:[p.jsxs(AA,{children:[p.jsxs(zA,{onClick:l,children:[p.jsx(gg,{}),p.jsx("span",{children:"Dashboard"})]}),p.jsx(FA,{children:e.name})]}),p.jsxs(NA,{children:[p.jsxs(py,{onClick:c,children:[p.jsx(Gw,{}),p.jsx("span",{children:"Run"})]}),p.jsxs(py,{onClick:t,children:[p.jsx(vg,{}),p.jsx("span",{children:"Share"})]}),p.jsx(MA,{onClick:()=>r(!n),isActive:n,children:p.jsx(Hw,{})}),n&&p.jsx(IA,{children:p.jsxs($A,{onClick:u,children:[p.jsx(M9,{}),p.jsx("span",{children:"Export Project"})]})})]})]})},LA=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,AA=k.div`
  display: flex;
  align-items: center;
`,zA=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #4a5568;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    span {
      display: none;
    }
  }
`,FA=k.h1`
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0 16px;
  padding-left: 16px;
  border-left: 1px solid #e2e8f0;
  
  @media (max-width: 576px) {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,NA=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`,py=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #4a5568;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    span {
      display: none;
    }
    
    padding: 8px;
  }
`,MA=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.isActive?"#f7fafc":"transparent"};
  border: none;
  color: #4a5568;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
`,IA=k.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 180px;
`,$A=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 14px;
    color: #718096;
  }
`,DA=({isOpen:e,onClose:t,project:n,projectId:r})=>{const[s,l]=O.useState(""),[u,c]=O.useState("viewer"),[d,h]=O.useState(!1),[v,m]=O.useState(""),[_,j]=O.useState(""),[E,P]=O.useState(!1),[R,S]=O.useState((n==null?void 0:n.isPublic)||!1);if(!e||!n)return null;const x=async F=>{var M,L;if(F.preventDefault(),!Nw(s)){m("Please enter a valid email address");return}h(!0),m("");try{await e4(r,{email:s,role:u}),j(`Project shared with ${s} successfully!`),l(""),setTimeout(()=>{j("")},3e3)}catch(U){m(((L=(M=U.response)==null?void 0:M.data)==null?void 0:L.message)||"Failed to share project. Please try again.")}finally{h(!1)}},C=()=>{const F=`${window.location.origin}/projects/${r}`;navigator.clipboard.writeText(F),P(!0),setTimeout(()=>{P(!1)},2e3)},z=async()=>{var F,M;h(!0);try{S(!R),j(`Project is now ${R?"private":"public"}`),setTimeout(()=>{j("")},3e3)}catch(L){m(((M=(F=L.response)==null?void 0:F.data)==null?void 0:M.message)||"Failed to update project visibility")}finally{h(!1)}};return p.jsx(UA,{onClick:t,children:p.jsxs(BA,{onClick:F=>F.stopPropagation(),children:[p.jsxs(WA,{children:[p.jsx(HA,{children:"Share Project"}),p.jsx(VA,{onClick:t,children:"×"})]}),p.jsxs(GA,{children:[p.jsx(qa,{children:"Share via Link"}),p.jsxs(qA,{children:[p.jsxs(KA,{children:[window.location.origin,"/projects/",r]}),p.jsx(YA,{onClick:C,children:E?p.jsx(A9,{}):p.jsx(N9,{})})]}),p.jsx(qa,{children:"Project Visibility"}),p.jsxs(QA,{children:[p.jsxs(hy,{isSelected:R,onClick:z,disabled:d,children:[p.jsx(gy,{isPublic:!0,children:p.jsx(hg,{})}),p.jsxs("div",{children:[p.jsx(my,{children:"Public"}),p.jsx(vy,{children:"Anyone with the link can view this project"})]})]}),p.jsxs(hy,{isSelected:!R,onClick:z,disabled:d,children:[p.jsx(gy,{isPublic:!1,children:p.jsx(mg,{})}),p.jsxs("div",{children:[p.jsx(my,{children:"Private"}),p.jsx(vy,{children:"Only you and people you share with can access"})]})]})]}),p.jsx(qa,{children:"Share with People"}),v&&p.jsx(dz,{children:v}),_&&p.jsx(pz,{children:_}),p.jsx(JA,{onSubmit:x,children:p.jsxs(XA,{children:[p.jsxs(ZA,{children:[p.jsx(ez,{type:"email",value:s,onChange:F=>l(F.target.value),placeholder:"Enter email address",required:!0}),p.jsxs(tz,{value:u,onChange:F=>c(F.target.value),children:[p.jsx("option",{value:"viewer",children:"Viewer"}),p.jsx("option",{value:"editor",children:"Editor"}),p.jsx("option",{value:"admin",children:"Admin"})]})]}),p.jsx(nz,{type:"submit",disabled:d,children:d?"Sharing...":"Share"})]})}),n.collaborators&&n.collaborators.length>0&&p.jsxs(p.Fragment,{children:[p.jsx(qa,{children:"Collaborators"}),p.jsx(rz,{children:n.collaborators.map(F=>p.jsxs(iz,{children:[p.jsxs(oz,{children:[p.jsx(sz,{children:F.user.username||F.user.email}),p.jsx(lz,{children:F.user.email})]}),p.jsx(az,{children:F.role.charAt(0).toUpperCase()+F.role.slice(1)}),p.jsx(uz,{title:"Remove collaborator",onClick:()=>{},children:p.jsx(yg,{})})]},F.user._id))})]}),p.jsx(cz,{children:p.jsx(fz,{onClick:t,children:"Close"})})]})]})})},UA=k.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,BA=k.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,WA=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e2e8f0;
`,HA=k.h3`
  font-weight: 600;
  font-size: 18px;
  color: #2d3748;
  margin: 0;
`,VA=k.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #a0aec0;
  cursor: pointer;
  
  &:hover {
    color: #4a5568;
  }
`,GA=k.div`
  padding: 20px;
`,qa=k.h4`
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin: 20px 0 10px;
  
  &:first-child {
    margin-top: 0;
  }
`,qA=k.div`
  display: flex;
  align-items: center;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 15px;
`,KA=k.div`
  flex: 1;
  font-size: 14px;
  color: #4a5568;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,YA=k.button`
  background-color: transparent;
  border: none;
  color: ${e=>e.copied?"#38a169":"#4a5568"};
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #3182ce;
  }
`,QA=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,hy=k.div`
  flex: 1;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid ${e=>e.isSelected?"#3182ce":"#e2e8f0"};
  border-radius: 6px;
  background-color: ${e=>e.isSelected?"#ebf8ff":"white"};
  cursor: pointer;
  transition: all 0.2s;
  opacity: ${e=>e.disabled?.7:1};
  pointer-events: ${e=>e.disabled?"none":"auto"};
  
  &:hover {
    border-color: ${e=>e.isSelected?"#3182ce":"#cbd5e0"};
    background-color: ${e=>e.isSelected?"#ebf8ff":"#f7fafc"};
  }
`,gy=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.isPublic?"#c6f6d5":"#e2e8f0"};
  color: ${e=>e.isPublic?"#38a169":"#4a5568"};
  
  svg {
    font-size: 16px;
  }
`,my=k.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #2d3748;
`,vy=k.p`
  margin: 0;
  font-size: 12px;
  color: #718096;
`,JA=k.form`
  margin-bottom: 20px;
`,XA=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ZA=k.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,ez=k.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`,tz=k.select`
  width: 120px;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`,nz=k.button`
  padding: 10px 16px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #2c5282;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`,rz=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`,iz=k.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f7fafc;
`,oz=k.div`
  flex: 1;
`,sz=k.div`
  font-size: 14px;
  font-weight: 500;
  color: #2d3748;
`,lz=k.div`
  font-size: 12px;
  color: #718096;
`,az=k.div`
  font-size: 12px;
  font-weight: 500;
  color: #4a5568;
  background-color: #edf2f7;
  padding: 4px 8px;
  border-radius: 4px;
`,uz=k.button`
  background-color: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #e53e3e;
  }
  
  svg {
    font-size: 14px;
  }
`,cz=k.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`,fz=k.button`
  padding: 10px 16px;
  background-color: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
`,dz=k.div`
  color: #e53e3e;
  background-color: #FFF5F5;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid #e53e3e;
`,pz=k.div`
  color: #38a169;
  background-color: #F0FFF4;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  border-left: 3px solid #38a169;
`,hz=()=>{const{projectId:e}=i7(),t=di(),{setCurrentProject:n,activeFile:r,setActiveFile:s}=O.useContext(Jo),{project:l,files:u,isLoading:c,error:d,fetchProject:h,fetchFiles:v,setFiles:m}=yR(e),[_,j]=O.useState(!1);xR(e,u,m),O.useEffect(()=>{l&&n(l)},[l,n]);const E=P=>P&&P.extension===".ipynb";return c?p.jsxs(wz,{children:[p.jsx(Sz,{}),p.jsx("p",{children:"Loading project..."})]}):d?p.jsxs(_z,{children:[p.jsx(Cz,{children:d}),p.jsx(Ez,{onClick:()=>t("/dashboard"),children:"Back to Dashboard"})]}):p.jsxs(gz,{children:[p.jsx(RA,{project:l,onShare:()=>j(!0)}),p.jsx(mz,{children:p.jsxs(wg,{sizes:[20,80],minSize:150,expandToMin:!1,gutterSize:10,gutterAlign:"center",direction:"horizontal",className:"split-container",children:[p.jsx(vz,{children:p.jsx(LR,{projectId:e})}),p.jsxs(yz,{children:[p.jsx(HR,{}),r?E(r)?p.jsx(PA,{file:r}):p.jsx(oA,{file:r}):p.jsx(xz,{children:p.jsx("p",{children:"No file selected. Select a file from the explorer or create a new file."})})]})]})}),p.jsx(DA,{isOpen:_,onClose:()=>j(!1),project:l,projectId:e})]})},gz=k.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,mz=k.div`
  flex: 1;
  overflow: hidden;
  
  .split-container {
    display: flex;
    height: 100%;
  }
  
  .gutter {
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .gutter.gutter-horizontal {
    cursor: col-resize;
  }
`,vz=k.div`
  height: 100%;
  overflow: auto;
  background-color: #f5f5f5;
`,yz=k.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,xz=k.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  color: #666;
  text-align: center;
  padding: 2rem;
`,wz=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`,Sz=k.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,_z=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`,Cz=k.div`
  background-color: #fed7d7;
  color: #c53030;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  max-width: 500px;
  text-align: center;
`,Ez=k.button`
  padding: 0.75rem 1.5rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #2c5282;
  }
`,bz=()=>{const[e,t]=O.useState([]),[n,r]=O.useState(!0),[s,l]=O.useState(null),[u,c]=O.useState(""),{currentUser:d}=O.useContext(pi);O.useEffect(()=>{(async()=>{r(!0);try{const _=(await Kw()).filter(j=>j.owner._id!==d.id&&(j.collaborators.some(E=>E.user._id===d.id)||j.isPublic));t(_),l(null)}catch(m){console.error("Error fetching shared projects:",m),l("Failed to load shared projects. Please try again.")}finally{r(!1)}})()},[d.id]);const h=e.filter(v=>v.name.toLowerCase().includes(u.toLowerCase())||v.description&&v.description.toLowerCase().includes(u.toLowerCase()));return n?p.jsxs(Nz,{children:[p.jsx(Mz,{}),p.jsx("p",{children:"Loading shared projects..."})]}):p.jsxs(kz,{children:[p.jsxs(Pz,{children:[p.jsx(jz,{children:"Shared Projects"}),p.jsx(Oz,{children:p.jsxs(Tz,{children:[p.jsx(Rz,{children:p.jsx(qw,{})}),p.jsx(Lz,{type:"text",placeholder:"Search projects...",value:u,onChange:v=>c(v.target.value)})]})})]}),s&&p.jsx(Fz,{children:s}),h.length===0?p.jsxs(zz,{children:[p.jsx("h2",{children:"No shared projects found"}),p.jsx("p",{children:u?"Try changing your search criteria.":"Projects shared with you will appear here."})]}):p.jsx(Az,{children:h.map(v=>p.jsx(n4,{project:v,isOwner:!1},v._id))})]})},kz=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,Pz=k.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,jz=k.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #2d3748;
`,Oz=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,Tz=k.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0 10px;
  
  @media (min-width: 768px) {
    width: 250px;
  }
`,Rz=k.div`
  color: #a0aec0;
  display: flex;
  align-items: center;
`,Lz=k.input`
  border: none;
  padding: 8px 10px;
  flex-grow: 1;
  outline: none;
  font-size: 14px;
`,Az=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`,zz=k.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #e2e8f0;
  
  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #2d3748;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 0;
    color: #718096;
  }
`,Fz=k.div`
  background-color: #FFF5F5;
  color: #C53030;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-left: 4px solid #C53030;
`,Nz=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #718096;
`,Mz=k.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,Iz=()=>p.jsx($z,{children:p.jsxs(Dz,{children:[p.jsx(Uz,{children:p.jsx(I9,{})}),p.jsx(Bz,{children:"404"}),p.jsx(Wz,{children:"Page Not Found"}),p.jsx(Hz,{children:"The page you're looking for doesn't exist or has been moved."}),p.jsxs(Vz,{to:"/dashboard",children:[p.jsx(gg,{})," Go to Dashboard"]})]})}),$z=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
`,Dz=k.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
  text-align: center;
`,Uz=k.div`
  font-size: 4rem;
  color: #e53e3e;
  margin-bottom: 1rem;
`,Bz=k.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  line-height: 1;
`,Wz=k.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0.5rem 0 1.5rem;
`,Hz=k.p`
  color: #718096;
  margin-bottom: 2rem;
`,Vz=k(Cc)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2c5282;
    text-decoration: none;
  }
`,Gz=({children:e})=>{const{currentUser:t,loading:n}=O.useContext(pi),r=Wi();return n?null:t?e:p.jsx(au,{to:"/login",state:{from:r},replace:!0})},qz=({toggleSidebar:e})=>{const{currentUser:t,logout:n}=O.useContext(pi),[r,s]=O.useState(!1),l=di(),u=()=>{n(),l("/login")};return p.jsxs(Kz,{children:[p.jsxs(Yz,{children:[p.jsx(Qz,{onClick:e,children:p.jsx(L9,{})}),p.jsx(Cc,{to:"/",children:p.jsxs(Jz,{children:[p.jsx(Qo,{}),p.jsx(Xz,{children:"Code Editor"})]})})]}),p.jsx(Zz,{children:p.jsxs(eF,{children:[p.jsxs(tF,{onClick:()=>s(!r),children:[p.jsx(H9,{}),p.jsx(nF,{children:(t==null?void 0:t.username)||"User"}),p.jsx(z9,{size:12})]}),r&&p.jsxs(rF,{children:[p.jsxs(iF,{children:[p.jsx("strong",{children:t==null?void 0:t.username}),p.jsx("small",{children:t==null?void 0:t.email})]}),p.jsx(oF,{}),p.jsxs(sF,{onClick:u,children:[p.jsx(B9,{}),"Sign Out"]})]})]})})]})},Kz=k.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #1a202c;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`,Yz=k.div`
  display: flex;
  align-items: center;
`,Qz=k.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 15px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,Jz=k.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`,Xz=k.span`
  @media (max-width: 600px) {
    display: none;
  }
`,Zz=k.div`
  display: flex;
  align-items: center;
`,eF=k.div`
  position: relative;
`,tF=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  svg:first-child {
    font-size: 20px;
  }
`,nF=k.span`
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 600px) {
    display: none;
  }
`,rF=k.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  overflow: hidden;
  z-index: 100;
`,iF=k.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  strong {
    color: #2d3748;
    font-size: 14px;
  }
  
  small {
    color: #718096;
    font-size: 12px;
  }
`,oF=k.div`
  height: 1px;
  background-color: #e2e8f0;
`,sF=k.button`
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
  color: #4a5568;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  svg {
    font-size: 14px;
    color: #718096;
  }
`,lF=({isOpen:e})=>p.jsxs(aF,{isOpen:e,children:[p.jsxs(uF,{children:[p.jsx(Ka,{children:p.jsxs(Ra,{to:"/dashboard",end:!0,children:[p.jsx(gg,{}),p.jsx(Ya,{children:"Dashboard"})]})}),p.jsx(Ka,{children:p.jsxs(Ra,{to:"/shared",children:[p.jsx(vg,{}),p.jsx(Ya,{children:"Shared with me"})]})}),p.jsx(cF,{}),p.jsx(Ka,{children:p.jsxs(Ra,{to:"/settings",children:[p.jsx(F9,{}),p.jsx(Ya,{children:"Settings"})]})}),p.jsx(Ka,{children:p.jsxs(Ra,{to:"/help",children:[p.jsx(U9,{}),p.jsx(Ya,{children:"Help"})]})})]}),p.jsx(fF,{children:p.jsx(dF,{children:"Code Editor v1.0.0"})})]}),aF=k.div`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: #f8f9fa;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  z-index: 5;
  transform: translateX(${e=>e.isOpen?"0":"-100%"});
`,uF=k.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 1;
`,Ka=k.li`
  a {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: #4a5568;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      background-color: #edf2f7;
    }
    
    &.active {
      color: #3182ce;
      background-color: #ebf8ff;
      border-left: 3px solid #3182ce;
      padding-left: 17px; /* 20px - 3px border */
      
      svg {
        color: #3182ce;
      }
    }
    
    svg {
      font-size: 16px;
      margin-right: 12px;
      color: #718096;
    }
  }
`,Ya=k.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cF=k.div`
  height: 1px;
  background-color: #e2e8f0;
  margin: 10px 0;
`,fF=k.div`
  padding: 15px 20px;
  border-top: 1px solid #e2e8f0;
`,dF=k.div`
  font-size: 12px;
  color: #a0aec0;
  text-align: center;
`,pF=()=>{const[e,t]=O.useState(!0),n=()=>{t(!e)};return p.jsxs(hF,{children:[p.jsx(qz,{toggleSidebar:n}),p.jsxs(gF,{children:[p.jsx(lF,{isOpen:e}),p.jsx(mF,{sidebarOpen:e,children:p.jsx(x7,{})})]})]})},hF=k.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`,gF=k.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,mF=k.main`
  flex: 1;
  overflow: auto;
  padding: 20px;
  transition: margin-left 0.3s;
  margin-left: ${e=>e.sidebarOpen?"250px":"0"};
`,vF=()=>{const{loading:e,currentUser:t}=O.useContext(pi);return e?p.jsxs(yF,{children:[p.jsx(xF,{}),p.jsx(wF,{children:"Loading..."})]}):p.jsxs(S7,{children:[p.jsx(xr,{path:"/",element:t?p.jsx(au,{to:"/dashboard",replace:!0}):p.jsx(G9,{})}),p.jsx(xr,{path:"/login",element:t?p.jsx(au,{to:"/dashboard",replace:!0}):p.jsx(sO,{})}),p.jsx(xr,{path:"/register",element:t?p.jsx(au,{to:"/dashboard",replace:!0}):p.jsx(lO,{})}),p.jsxs(xr,{path:"/",element:p.jsx(Gz,{children:p.jsx(pF,{})}),children:[p.jsx(xr,{path:"dashboard",element:p.jsx(WT,{})}),p.jsx(xr,{path:"projects/:projectId",element:p.jsx(hz,{})}),p.jsx(xr,{path:"shared",element:p.jsx(bz,{})})]}),p.jsx(xr,{path:"*",element:p.jsx(Iz,{})})]})},yF=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`,xF=k.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3182ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 20px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,wF=k.p`
  font-size: 1.2rem;
  color: #4a5568;
`;Kd.createRoot(document.getElementById("root")).render(p.jsx(rt.StrictMode,{children:p.jsx(O7,{children:p.jsx(gj,{children:p.jsx(vR,{children:p.jsx(vF,{})})})})}));
//# sourceMappingURL=index-9f40d3ab.js.map
