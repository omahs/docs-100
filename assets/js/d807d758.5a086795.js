"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[6468],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(i),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||r;return i?n.createElement(f,a(a({ref:t},p),{},{components:i})):n.createElement(f,a({ref:t},p))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},39159:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const r={sidebar_position:1,sidebar_label:"Customizability",description:"What can be customized in the widget."},a="Customizability",s={unversionedId:"user-interface-setup/widget/customization-guide/customizability",id:"user-interface-setup/widget/customization-guide/customizability",title:"Customizability",description:"What can be customized in the widget.",source:"@site/docs/osmosis-outpost/user-interface-setup/widget/customization-guide/customizability.md",sourceDirName:"user-interface-setup/widget/customization-guide",slug:"/user-interface-setup/widget/customization-guide/customizability",permalink:"/osmosis-outpost/user-interface-setup/widget/customization-guide/customizability",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-outpost/user-interface-setup/widget/customization-guide/customizability.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Customizability",description:"What can be customized in the widget."},sidebar:"tutorialSidebar",previous:{title:"Customization Guide",permalink:"/osmosis-outpost/category/customization-guide-1"},next:{title:"Theme Customization",permalink:"/osmosis-outpost/user-interface-setup/widget/customization-guide/theme-customization"}},c={},u=[],p={toc:u};function l(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customizability"},"Customizability"),(0,o.kt)("p",null,"As already stated, each outpost chain can compose style its own ",(0,o.kt)("em",{parentName:"p"},"widget")," by\ncustomizing the provided one in its ",(0,o.kt)("em",{parentName:"p"},"colours"),", to later include it in an\nexisting dApp."),(0,o.kt)("p",null,"We provide you both the design file (the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/file/qOzjC3bBlFk9CQZW2HK5jX/nabla---Outpost-UI-Kit"},(0,o.kt)("strong",{parentName:"a"},"Figma")," link"),")\nof a dApp (an example Frontend Platform Interface) which includes this widget,\nand the widget package for react (the link to the\n",(0,o.kt)("a",{parentName:"p",href:"https://example.com"},(0,o.kt)("strong",{parentName:"a"},"npm")," package"),")."),(0,o.kt)("p",null,"In this way, you can both edit the design and set the widget by code to match\nyour specific requirements. "),(0,o.kt)("p",null,"The widget uses a theme, which allows you to customize the entire interface by\nsimply changing ",(0,o.kt)("strong",{parentName:"p"},"a palette of colors"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:")),"  To get more information about what you can change in the page,\nplease see the documentation ",(0,o.kt)("a",{parentName:"p",href:"./theme-customization"},"here"),".")))}l.isMDXComponent=!0}}]);