!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=29)}([function(e,t,n){var r=n(22)("wks"),o=n(23),i=n(1).Symbol,c="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=c&&i[e]||(c?i:o)("Symbol."+e))}).store=r},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports={}},function(e,t,n){var r=n(10),o=n(20);e.exports=n(6)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(11);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(40),o=n(9);e.exports=function(e){return r(o(e))}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(5),o=n(44),i=n(45),c=Object.defineProperty;t.f=n(6)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(22)("keys"),o=n(23);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t,n){n(37);for(var r=n(1),o=n(4),i=n(3),c=n(0)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var s=u[a],l=r[s],f=l&&l.prototype;f&&!f[c]&&o(f,c,s),i[s]=i.Array}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){"use strict";var r=n(41),o=n(18),i=n(46),c=n(4),u=n(3),a=n(47),s=n(25),l=n(55),f=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};e.exports=function(e,t,n,v,g,m,y){a(n,t,v);var h,x,b,w=function(e){if(!p&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},_=t+" Iterator",O="values"==g,S=!1,k=e.prototype,E=k[f]||k["@@iterator"]||g&&k[g],j=E||w(g),T=g?O?w("entries"):j:void 0,C="Array"==t?k.entries||E:E;if(C&&(b=l(C.call(new e)))!==Object.prototype&&b.next&&(s(b,_,!0),r||"function"==typeof b[f]||c(b,f,d)),O&&E&&"values"!==E.name&&(S=!0,j=function(){return E.call(this)}),r&&!y||!p&&!S&&k[f]||c(k,f,j),u[t]=j,u[_]=d,g)if(h={values:O?j:w("values"),keys:m?j:w("keys"),entries:T},y)for(x in h)x in k||i(k,x,h[x]);else o(o.P+o.F*(p||S),t,h);return h}},function(e,t,n){var r=n(1),o=n(2),i=n(42),c=n(4),u=n(7),a=function(e,t,n){var s,l,f,p=e&a.F,d=e&a.G,v=e&a.S,g=e&a.P,m=e&a.B,y=e&a.W,h=d?o:o[t]||(o[t]={}),x=h.prototype,b=d?r:v?r[t]:(r[t]||{}).prototype;d&&(n=t);for(s in n)(l=!p&&b&&void 0!==b[s])&&u(h,s)||(f=l?b[s]:n[s],h[s]=d&&"function"!=typeof b[s]?n[s]:m&&l?i(f,r):y&&b[s]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):g&&"function"==typeof f?i(Function.call,f):f,g&&((h.virtual||(h.virtual={}))[s]=f,e&a.R&&x&&!x[s]&&c(x,s,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(50),o=n(24);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(10).f,o=n(7),i=n(0)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){var r=n(9);e.exports=function(e){return Object(r(e))}},function(e,t,n){"use strict";var r=n(56)(!0);n(17)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(16),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=Object(e),o))?n:i?r(t):"Object"==(u=r(t))&&"function"==typeof t.callee?"Arguments":u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(30)},function(e,t,n){"use strict";var r=n(31),o=(n.n(r),n(32)),i=(n.n(o),n(33)),c=wp.blocks,u=c.InspectorControls,a=c.ColorPalette,s=wp.components,l=s.SelectControl,f=s.PanelBody,p=s.PanelColor,d=wp.i18n.__;(0,wp.blocks.registerBlockType)("embed-sendy/block-embed-sendy",{title:d("Embed Sendy"),description:d("Displays a form for Sendy mailing list."),icon:"forms",category:"common",keywords:[d("Sendy"),d("form"),d("newsletter")],attributes:{list:{type:"string",default:esdBlockSettings.default_list},formBackgroundColor:{type:"string",default:"#f5f5f5"},formTextColor:{type:"string",default:"#000000"}},edit:function(e){var t=e.attributes,n=t.list,r=t.formBackgroundColor,o=t.formTextColor,c=e.className,s=e.setAttributes,v=Object(i.a)(esdBlockSettings.form_header),g=Object(i.a)(esdBlockSettings.form_footer);return[wp.element.createElement(u,{key:"inspector"},wp.element.createElement(f,null,wp.element.createElement(l,{label:d("Mailing List"),description:d("Choose mailing list to use for the subscription form."),value:n,options:JSON.parse(esdBlockSettings.lists),onChange:function(e){return s({list:e})}}),wp.element.createElement(p,{title:d("Form Background Color"),colorValue:r,initialOpen:!1},wp.element.createElement(a,{label:d("Form Background Color"),value:r,onChange:function(e){return s({formBackgroundColor:e})},colors:["#00d1b2","#3373dc","#209cef","#22d25f","#ffdd57","#ff3860","#7941b6","#392F43"]})),wp.element.createElement(p,{title:d("Text Color"),colorValue:o,initialOpen:!1},wp.element.createElement(a,{label:d("Background Color"),value:o,onChange:function(e){return s({formTextColor:e})},colors:["#32373c","#fff"]})))),wp.element.createElement("form",{method:"post",id:"js-esd-form",className:"esd-form "+c,key:"block-field",style:{backgroundColor:r,color:o}},v&&wp.element.createElement("div",{className:"esd-form__row esd-form__header",dangerouslySetInnerHTML:{__html:v}}),wp.element.createElement("div",{className:"esd-form__row esd-form__fields"},wp.element.createElement("input",{type:"email",name:"email",placeholder:"Enter your email",readOnly:!0}),wp.element.createElement("input",{type:"submit",value:"Subscribe",disabled:"true"})),g&&wp.element.createElement("div",{className:"esd-form__row esd-form__footer",dangerouslySetInnerHTML:{__html:g}}))]},save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){for(var t=[],n=e,r=void 0;r=n.match(l);)t.push(n.slice(0,r.index)),t.push(r[0]),n=n.slice(r.index+r[0].length);return n.length&&t.push(n),t}function o(e,t){for(var n=r(e),o=!1,i=s()(t),c=1;c<n.length;c+=2)for(var u=0;u<i.length;u++){var a=i[u];if(-1!==n[c].indexOf(a)){n[c]=n[c].replace(new RegExp(a,"g"),t[a]),o=!0;break}}return o&&(e=n.join("")),e}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];if(""===e.trim())return"";if(e+="\n",-1!==e.indexOf("<pre")){var r=e.split("</pre>"),i=r.pop();e="";for(var c=0;c<r.length;c++){var a=r[c],s=a.indexOf("<pre");if(-1!==s){var l="<pre wp-pre-tag-"+c+"></pre>";n.push([l,a.substr(s)+"</pre>"]),e+=a.substr(0,s)+l}else e+=a}e+=i}e=e.replace(/<br\s*\/?>\s*<br\s*\/?>/g,"\n\n");var f="(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";e=e.replace(new RegExp("(<"+f+"[s/>])","g"),"\n\n$1"),e=e.replace(new RegExp("(</"+f+">)","g"),"$1\n\n"),e=e.replace(/\r\n|\r/g,"\n"),e=o(e,{"\n":" \x3c!-- wpnl --\x3e "}),-1!==e.indexOf("<option")&&(e=e.replace(/\s*<option/g,"<option"),e=e.replace(/<\/option>\s*/g,"</option>")),-1!==e.indexOf("</object>")&&(e=e.replace(/(<object[^>]*>)\s*/g,"$1"),e=e.replace(/\s*<\/object>/g,"</object>"),e=e.replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g,"$1")),-1===e.indexOf("<source")&&-1===e.indexOf("<track")||(e=e.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g,"$1"),e=e.replace(/\s*([<\[]\/(?:audio|video)[>\]])/g,"$1"),e=e.replace(/\s*(<(?:source|track)[^>]*>)\s*/g,"$1")),-1!==e.indexOf("<figcaption")&&(e=e.replace(/\s*(<figcaption[^>]*>)/,"$1"),e=e.replace(/<\/figcaption>\s*/,"</figcaption>")),e=e.replace(/\n\n+/g,"\n\n");var p=e.split(/\n\s*\n/).filter(Boolean);return e="",p.forEach(function(t){e+="<p>"+t.replace(/^\n*|\n*$/g,"")+"</p>\n"}),e=e.replace(/<p>\s*<\/p>/g,""),e=e.replace(/<p>([^<]+)<\/(div|address|form)>/g,"<p>$1</p></$2>"),e=e.replace(new RegExp("<p>s*(</?"+f+"[^>]*>)s*</p>","g"),"$1"),e=e.replace(/<p>(<li.+?)<\/p>/g,"$1"),e=e.replace(/<p><blockquote([^>]*)>/gi,"<blockquote$1><p>"),e=e.replace(/<\/blockquote><\/p>/g,"</p></blockquote>"),e=e.replace(new RegExp("<p>s*(</?"+f+"[^>]*>)","g"),"$1"),e=e.replace(new RegExp("(</?"+f+"[^>]*>)s*</p>","g"),"$1"),t&&(e=e.replace(/<(script|style).*?<\/\\1>/g,function(e){return e[0].replace(/\n/g,"<WPPreserveNewline />")}),e=e.replace(/<br>|<br\/>/g,"<br />"),e=e.replace(/(<br \/>)?\s*\n/g,function(e,t){return t?e:"<br />\n"}),e=e.replace(/<WPPreserveNewline \/>/g,"\n")),e=e.replace(new RegExp("(</?"+f+"[^>]*>)s*<br />","g"),"$1"),e=e.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g,"$1"),e=e.replace(/\n<\/p>$/g,"</p>"),n.forEach(function(t){var n=u()(t,2),r=n[0],o=n[1];e=e.replace(r,o)}),-1!==e.indexOf("\x3c!-- wpnl --\x3e")&&(e=e.replace(/\s?<!-- wpnl -->\s?/g,"\n")),e}t.a=i;var c=n(34),u=n.n(c),a=n(62),s=n.n(a),l=function(){return new RegExp("(<((?=!--|!\\[CDATA\\[)((?=!-)!(?:-(?!->)[^\\-]*)*(?:--\x3e)?|!\\[CDATA\\[[^\\]]*(?:](?!]>)[^\\]]*)*?(?:]]>)?)|[^>]*>?))")}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(35),i=r(o),c=n(58),u=r(c);t.default=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=(0,u.default)(e);!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(e,t,n){e.exports={default:n(36),__esModule:!0}},function(e,t,n){n(15),n(27),e.exports=n(57)},function(e,t,n){"use strict";var r=n(38),o=n(39),i=n(3),c=n(8);e.exports=n(17)(Array,"Array",function(e,t){this._t=c(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,n):"values"==t?o(0,e[n]):o(0,[n,e[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var r=n(16);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=!0},function(e,t,n){var r=n(43);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){e.exports=!n(6)&&!n(12)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(11);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";var r=n(48),o=n(20),i=n(25),c={};n(4)(c,n(0)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(c,{next:o(1,n)}),i(e,t+" Iterator")}},function(e,t,n){var r=n(5),o=n(49),i=n(24),c=n(14)("IE_PROTO"),u=function(){},a=function(){var e,t=n(19)("iframe"),r=i.length;for(t.style.display="none",n(54).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),a=e.F;r--;)delete a.prototype[i[r]];return a()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[c]=e):n=a(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(10),o=n(5),i=n(21);e.exports=n(6)?Object.defineProperties:function(e,t){o(e);for(var n,c=i(t),u=c.length,a=0;u>a;)r.f(e,n=c[a++],t[n]);return e}},function(e,t,n){var r=n(7),o=n(8),i=n(51)(!1),c=n(14)("IE_PROTO");e.exports=function(e,t){var n,u=o(e),a=0,s=[];for(n in u)n!=c&&r(u,n)&&s.push(n);for(;t.length>a;)r(u,n=t[a++])&&(~i(s,n)||s.push(n));return s}},function(e,t,n){var r=n(8),o=n(52),i=n(53);e.exports=function(e){return function(t,n,c){var u,a=r(t),s=o(a.length),l=i(c,s);if(e&&n!=n){for(;s>l;)if((u=a[l++])!=u)return!0}else for(;s>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(13),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(13),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},function(e,t,n){var r=n(1).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(7),o=n(26),i=n(14)("IE_PROTO"),c=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},function(e,t,n){var r=n(13),o=n(9);e.exports=function(e){return function(t,n){var i,c,u=String(o(t)),a=r(n),s=u.length;return a<0||a>=s?e?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?e?u.charAt(a):i:e?u.slice(a,a+2):c-56320+(i-55296<<10)+65536)}}},function(e,t,n){var r=n(28),o=n(0)("iterator"),i=n(3);e.exports=n(2).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(r(t))}},function(e,t,n){e.exports={default:n(59),__esModule:!0}},function(e,t,n){n(15),n(27),e.exports=n(60)},function(e,t,n){var r=n(5),o=n(61);e.exports=n(2).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},function(e,t,n){var r=n(28),o=n(0)("iterator"),i=n(3);e.exports=n(2).getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[r(e)]}},function(e,t,n){e.exports={default:n(63),__esModule:!0}},function(e,t,n){n(64),e.exports=n(2).Object.keys},function(e,t,n){var r=n(26),o=n(21);n(65)("keys",function(){return function(e){return o(r(e))}})},function(e,t,n){var r=n(18),o=n(2),i=n(12);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],c={};c[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}}]);