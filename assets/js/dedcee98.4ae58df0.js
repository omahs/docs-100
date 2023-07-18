"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[1774],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>m});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},l=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=c(o),m=r,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return o?n.createElement(d,a(a({ref:e},l),{},{components:o})):n.createElement(d,a({ref:e},l))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},66681:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:10,sidebar_label:"Stats Configuration",description:"The stats configuration variable."},a="Stats Configuration",s={unversionedId:"user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/stats-configuration",id:"user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/stats-configuration",title:"Stats Configuration",description:"The stats configuration variable.",source:"@site/docs/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/stats-configuration.md",sourceDirName:"user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements",slug:"/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/stats-configuration",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/stats-configuration",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/stats-configuration.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Stats Configuration",description:"The stats configuration variable."},sidebar:"tutorialSidebar",previous:{title:"Social Configuration",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/social-configuration"},next:{title:"Wallet Connect Configuration",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/customization/customizable-elements/wallet-connect-configuration"}},u={},c=[{value:"ANALYTICS_BASE_URL",id:"analytics_base_url",level:3}],l={toc:c};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stats-configuration"},"Stats Configuration"),(0,r.kt)("p",null,"This configuration allows you to set the current base url for the current\nliquidity data source. At the moment, the logic is realized to only work\nwith ",(0,r.kt)("strong",{parentName:"p"},"imperator")," as the unique ",(0,r.kt)("em",{parentName:"p"},"data source"),". It would probably also be\npossible, with future updates, to provide other sources, ",(0,r.kt)("strong",{parentName:"p"},"if needed"),"."),(0,r.kt)("p",null,"This configuration affects the logic of the platform."),(0,r.kt)("h3",{id:"analytics_base_url"},"ANALYTICS_BASE_URL"),(0,r.kt)("p",null,"This is a url to the ",(0,r.kt)("em",{parentName:"p"},"imperator api base url"),". The default value is the\nfollowing, as per the version available at the time of writing this\ndocumentation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},"HINT")),": Do not change if not strictly needed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NEXT_PUBLIC_ANALYTICS_BASE_URL=https://api-osmosis.imperator.co/\n")))}p.isMDXComponent=!0}}]);