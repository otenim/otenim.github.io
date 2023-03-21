"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=n(c)===c&&r(c)!==c,i=s,s=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return w},S:function(){return U},_:function(){return i},a:function(){return s},b:function(){return u},g:function(){return d},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,m);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,c=i(e,f);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=i(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,s({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var E;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,v);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],k=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:l().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],j=new Set;let A,P;const O=function(e){let{as:t="div",image:r,style:l,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,T);const{width:y,height:b,layout:E}=r,v=c(y,b,E),{style:w,className:N}=v,S=i(v,I),C=(0,n.useRef)(),k=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const x=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,y,b);return(0,n.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(k);if(P&&j.has(k))return;let t,n;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(k),image:r},h)),j.has(k)||(t=requestAnimationFrame((()=>{C.current&&(n=i(C.current,k,j,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(k)&&P&&(C.current.innerHTML=P(s({isLoading:j.has(k),isLoaded:j.has(k),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},S,{style:s({},w,l,{backgroundColor:u}),className:N+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},R=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));R.propTypes=L,R.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=i(t,_);return l&&console.warn(l),r?n.createElement(e,s({image:r},o)):(console.warn("Image not loaded",a),null)}}const $=M((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,E=i(e,S);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:x,layout:L,images:T,placeholder:I,backgroundColor:j}=o,A=c(v,x,L),{style:P,className:O}=A,R=i(A,C),_={fallback:void 0,sources:[]};return T.fallback&&(_.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?k(T.fallback.srcSet):void 0})),T.sources&&(_.sources=T.sources.map((e=>s({},e,{srcSet:k(e.srcSet)})))),n.createElement(t,s({},R,{style:s({},P,l,{backgroundColor:h}),className:O+(a?" "+a:"")}),n.createElement(g,{layout:L,width:v,height:x},n.createElement(w,s({},d(I,!1,L,v,x,j,y,b))),n.createElement(N,s({"data-gatsby-image-ssr":"",className:p},E,u("eager"===m,!1,_,m,f)))))})),q=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),F={src:l().string.isRequired,alt:x,width:q,height:q,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};$.displayName="StaticImage",$.propTypes=F;const U=M(R);U.displayName="StaticImage",U.propTypes=F},135:function(e,t,a){a.r(t),a.d(t,{Head:function(){return S},default:function(){return C}});var n=a(7294),r=a(1883),l=a(4184),s=a.n(l),i=a(6792),o=a(5893);const c=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const l=(0,i.vE)(e,"row"),c=(0,i.pi)(),u=(0,i.zG)(),d=`${l}-cols`,m=[];return c.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==u?`-${e}`:"";null!=a&&m.push(`${d}${r}-${a}`)})),(0,o.jsx)(a,{ref:r,...n,className:s()(t,l,...m)})}));c.displayName="Row";var u=c;const d=n.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,i.vE)(t,"col");const r=(0,i.pi)(),l=(0,i.zG)(),o=[],c=[];return r.forEach((e=>{const a=n[e];let r,s,i;delete n[e],"object"==typeof a&&null!=a?({span:r,offset:s,order:i}=a):r=a;const u=e!==l?`-${e}`:"";r&&o.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=i&&c.push(`order${u}-${i}`),null!=s&&c.push(`offset${u}-${s}`)})),[{...n,className:s()(a,...o,...c)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,o.jsx)(r,{...n,ref:t,className:s()(a,!c.length&&l)})}));d.displayName="Col";var m=d,p=a(8032),g=a(9143),f="styles-module--content-list-style--05300",h="styles-module--important-name-style--bd051",y="styles-module--section-content-style--fb88f",b="styles-module--section-title-style--fc652";const E=()=>n.createElement("div",null,n.createElement("h2",{className:b},"PUBLIFICATIONS"),n.createElement("div",{className:y},n.createElement("ul",{className:"styles-module--publication-list-style--6efef"},n.createElement("li",null)))),v=()=>n.createElement("div",{className:"styles-module--intro-section-style--8f872"},n.createElement(u,{className:"justify-content-md-center"},n.createElement(m,{md:"auto"},n.createElement("div",{className:"styles-module--thumbnail-picture-style--b66db"},n.createElement(p.S,{src:"https://avatars.githubusercontent.com/u/26879886?v=4",__imageData:a(2690)})))),n.createElement(u,{className:"justify-content-md-center"},n.createElement(m,{md:"auto"},n.createElement("p",{className:"styles-module--name-style--9a523"},"Mineto Tsukada"))),n.createElement(u,{className:"justify-content-md-center"},n.createElement(m,{md:"auto"},n.createElement("p",null,"CS Ph.D. new graduate @ Keio University"))),n.createElement(u,{className:"justify-content-md-center"},n.createElement(m,{md:"auto"},n.createElement("p",null,n.createElement(r.rU,{to:"https://github.com/otenim"},"GitHub"),",",n.createElement(r.rU,{to:"https://scholar.google.com/citations?user=59yO56AAAAAJ&hl=ja"},"Google Scholar"))))),w=()=>n.createElement("div",null,n.createElement("h2",{className:b},"WORK EXPERIENCES"),n.createElement("div",{className:y},n.createElement("ul",{className:f},n.createElement("li",null,n.createElement("p",null,n.createElement("span",{className:h},"Japan Society for the Promotion of Science")," (Apr. 2020 - Mar. 2023)"),n.createElement("p",null,"Chiyoda-ku, Tokyo, Japan"),n.createElement("p",null,"Research Fellow DC1")),n.createElement("li",null,n.createElement("p",null,n.createElement("span",{className:h},"Ghelia Inc.")," (Jun. 2017 - Feb. 2023)"),n.createElement("p",null,"Taito-ku, Tokyo, Japan"),n.createElement("p",null,"Machine Learning Engineer (Part-Time)")),n.createElement("li",null,n.createElement("p",null,n.createElement("span",{className:h},"Intel Corp.")," (Jun. 2018 - Aug. 2018)"),n.createElement("p",null,"Chiyoda-ku, Tokyo, Japan"),n.createElement("p",null,"Software Engineer (Intern)"))))),N=()=>n.createElement("div",null,n.createElement("h2",{className:b},"EDUCATIONS"),n.createElement("div",{className:y},n.createElement("ul",{className:f},n.createElement("li",null,n.createElement("p",null,n.createElement("span",{className:h},"Ph.D. in Engineering")," (Apr. 2020 - Mar. 2023)"),n.createElement("p",null,"Center for Information and Computer Science, Graduate School of Science and Technology, Keio University")),n.createElement("li",null,n.createElement("p",null,n.createElement("span",{className:h},"Master of Engineering")," (Apr. 2018 - Mar. 2020)"),n.createElement("p",null,"Center for Information and Computer Science, Graduate School of Science and Technology, Keio University")),n.createElement("li",null,n.createElement("p",null,n.createElement("span",{className:h},"Bachelor of Engineering")," (Apr. 2014 - Mar. 2018)"),n.createElement("p",null,"Department of Information and Computer Science, Faculty of Science and Technology, Keio University"))))),S=()=>n.createElement("title",null,"Home");var C=()=>n.createElement(g.Z,null,n.createElement(v,null),n.createElement(w,null),n.createElement(N,null),n.createElement(E,null))},2690:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#58d8f8","images":{"fallback":{"src":"/static/bf6bff43789aaaddea616530ce4eeb4b/24f3d/26879886.png","srcSet":"/static/bf6bff43789aaaddea616530ce4eeb4b/10479/26879886.png 115w,\\n/static/bf6bff43789aaaddea616530ce4eeb4b/b7af2/26879886.png 230w,\\n/static/bf6bff43789aaaddea616530ce4eeb4b/24f3d/26879886.png 460w","sizes":"(min-width: 460px) 460px, 100vw"},"sources":[{"srcSet":"/static/bf6bff43789aaaddea616530ce4eeb4b/f8466/26879886.webp 115w,\\n/static/bf6bff43789aaaddea616530ce4eeb4b/84992/26879886.webp 230w,\\n/static/bf6bff43789aaaddea616530ce4eeb4b/b5c5b/26879886.webp 460w","type":"image/webp","sizes":"(min-width: 460px) 460px, 100vw"}]},"width":460,"height":460}')}}]);
//# sourceMappingURL=component---src-pages-index-js-019bfbaa3eedc6577902.js.map