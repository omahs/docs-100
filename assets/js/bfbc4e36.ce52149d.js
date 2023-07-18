"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[2541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:4,sidebar_label:"Build for Production",description:"How to build for a production environment."},a="Build for Production",u={unversionedId:"user-interface-setup/frontend-platform-interface/build",id:"user-interface-setup/frontend-platform-interface/build",title:"Build for Production",description:"How to build for a production environment.",source:"@site/docs/osmosis-outpost/user-interface-setup/frontend-platform-interface/build.md",sourceDirName:"user-interface-setup/frontend-platform-interface",slug:"/user-interface-setup/frontend-platform-interface/build",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/build",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-outpost/user-interface-setup/frontend-platform-interface/build.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Build for Production",description:"How to build for a production environment."},sidebar:"tutorialSidebar",previous:{title:"Metadata Configuration",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/metadata-configuration"},next:{title:"Useful Information",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/useful-information"}},l={},s=[{value:"1. Build prod for stencil library of web components:",id:"1-build-prod-for-stencil-library-of-web-components",level:3},{value:"2. Build prod for react library of UI components:",id:"2-build-prod-for-react-library-of-ui-components",level:3},{value:"3. You can now proceed building your dApp for a production stage:",id:"3-you-can-now-proceed-building-your-dapp-for-a-production-stage",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-for-production"},"Build for Production"),(0,n.kt)("p",null,"Assuming you have completely followed the whole guide up to this point, you\nhave your working and fully customized version of the platform. In such a\nscenario, to build the dApp for a production environment, you need to prepare\nthe libraries builds and then build the web application."),(0,n.kt)("h3",{id:"1-build-prod-for-stencil-library-of-web-components"},"1. Build prod for stencil library of web components:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nx run outpost-web-ui:build:production\n")),(0,n.kt)("h3",{id:"2-build-prod-for-react-library-of-ui-components"},"2. Build prod for react library of UI components:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nx run outpost-web-ui-react:build:production\n")),(0,n.kt)("h3",{id:"3-you-can-now-proceed-building-your-dapp-for-a-production-stage"},"3. You can now proceed building your dApp for a production stage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nx build web --configuration=production\n")),(0,n.kt)("p",null,"And... you are ready to ",(0,n.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/deployment"},"deploy")," your\nbrand-new, fully customized platform, allowing your users to exchange their\ntokens with low effort and with a user experience all to envy!"))}p.isMDXComponent=!0}}]);