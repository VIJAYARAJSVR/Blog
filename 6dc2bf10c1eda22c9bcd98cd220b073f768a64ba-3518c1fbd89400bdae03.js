(self.webpackChunkblog=self.webpackChunkblog||[]).push([[417],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),u=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),u=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?u(e):i(e);return e!==i(e)&&(e=((e,r,a)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const u=e[l];i&&t.test(u)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&n.test(u)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=r(u)===u&&a(u)!==u,s=o,o=a(u)===u&&r(u)!==u)}return e})(e,i,u)),e=e.replace(o,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),a.pascalCase&&(e=u(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,u)};e.exports=u,e.exports.default=u},8032:function(e,t,n){"use strict";n.d(t,{G:function(){return U},L:function(){return m},M:function(){return L},P:function(){return w},_:function(){return s},a:function(){return o},b:function(){return d},c:function(){return u},g:function(){return f},h:function(){return l}});var r=n(7294),a=(n(3204),n(5697)),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const u=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function f(e,t,n,r,a,i,s,l){const u={};i&&(u.backgroundColor=i,"fixed"===n?(u.width=r,u.height=a,u.backgroundColor=i,u.position="relative"):("constrained"===n||"fullWidth"===n)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);const c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c}const p=["children"],g=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=s(e,p);return r.createElement(r.Fragment,null,r.createElement(g,o({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:n,loading:a,alt:i="",shouldLoad:l}=e,u=s(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:i}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,i=s(e,y);const l=i.sizes||(null==t?void 0:t.sizes),u=r.createElement(b,o({},i,t,{sizes:l,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:l})})),u):u};var x;b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,n=s(e,E);return t?r.createElement(v,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(x=v.propTypes)?void 0:x.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),I=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:I},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],A=new Set;let N,R;const z=function(e){let{as:t="div",image:a,style:i,backgroundColor:u,className:d,class:f,onStartLoad:p,onLoad:g,onError:m}=e,h=s(e,j);const{width:y,height:b,layout:v}=a,x=c(y,b,v),{style:E,className:w}=x,L=s(x,O),k=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);f&&(d=f);const C=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{N||(N=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(R&&A.has(S))return;let t,r;return N.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=n(o({isLoading:!0,isLoaded:A.has(S),image:a},h)),A.has(S)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,S,A,i,p,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{A.has(S)&&R&&(k.current.innerHTML=R(o({isLoading:A.has(S),isLoaded:A.has(S),image:a},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,r.createElement)(t,o({},L,{style:o({},E,i,{backgroundColor:u}),className:w+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},U=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));U.propTypes=T,U.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:n,__imageData:a,__error:i}=t,l=s(t,_);return i&&console.warn(i),a?r.createElement(e,o({image:a},l)):(console.warn("Image not loaded",n),null)}}const D=q((function(e){let{as:t="div",className:n,class:a,style:i,image:l,loading:u="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),g=o({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:x,height:E,layout:I,images:T,placeholder:j,backgroundColor:O}=l,A=c(x,E,I),{style:N,className:R}=A,z=s(A,S),U={fallback:void 0,sources:[]};return T.fallback&&(U.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(U.sources=T.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,o({},z,{style:o({},N,i,{backgroundColor:h}),className:R+(n?" "+n:"")}),r.createElement(m,{layout:I,width:x,height:E},r.createElement(w,o({},f(j,!1,I,x,E,O,y,b))),r.createElement(L,o({"data-gatsby-image-ssr":"",className:p},v,d("eager"===u,!1,U,u,g)))))})),P=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:I,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};D.displayName="StaticImage",D.propTypes=M;const W=q(U);W.displayName="StaticImage",W.propTypes=M},3913:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(1883);var i=e=>{let{menuLinks:t}=e;return r.createElement("nav",null,r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.name},r.createElement(a.Link,{to:e.link},e.name))))))};const o=e=>{let{siteTitle:t,menuLinks:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",null,t),r.createElement(i,{menuLinks:n}))};o.defaultProps={siteTitle:"",siteDescription:"",menuLinks:[]};var s=o;var l=()=>r.createElement(r.Fragment,null);var u=e=>{let{children:t}=e;const{site:n}=(0,a.useStaticQuery)("3109607545");return r.createElement(r.Fragment,null,r.createElement(s,{siteTitle:n.siteMetadata.defaultTitle,menuLinks:n.siteMetadata.menuLinks}),r.createElement("main",{id:"primary"},t),r.createElement(l,null))}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},2663:function(e){e.exports=function(e,t,n,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++a]);++a<i;)n=t(n,e[a],a,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),a=n(9607),i=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),a=n(9932),i=n(1469),o=n(3448),s=r?r.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return a(t,e)+"";if(o(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),a=n(3816),i=n(8748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(a(t).replace(o,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(l){}var a=o.call(e);return r&&(t?e[s]=n:delete e[s]),a}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),a="object"==typeof self&&self&&self.Object===Object&&self,i=r||a||Function("return this")();e.exports=i},2757:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+i+"]",s="\\d+",l="["+n+"]",u="["+r+"]",c="[^"+t+i+s+n+r+a+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+a+"]",g="(?:"+u+"|"+c+")",m="(?:"+p+"|"+c+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?",x=v+b+("(?:\\u200d(?:"+["[^"+t+"]",d,f].join("|")+")"+v+b+")*"),E="(?:"+[l,d,f].join("|")+")"+x,w=RegExp([p+"?"+u+"+"+h+"(?="+[o,p,"$"].join("|")+")",m+"+"+y+"(?="+[o,p+g,"$"].join("|")+")",p+"?"+g+"+"+h,p+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",s,E].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},3816:function(e,t,n){var r=n(9389),a=n(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(i,r).replace(o,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),a=n(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),a=n(3157),i=n(9833),o=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?a(e)?o(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=6dc2bf10c1eda22c9bcd98cd220b073f768a64ba-3518c1fbd89400bdae03.js.map