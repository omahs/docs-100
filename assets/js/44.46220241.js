(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{496:function(t,e,s){"use strict";s.r(e);var r=s(8),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"public-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-endpoints"}},[t._v("#")]),t._v(" Public endpoints")]),t._v(" "),s("p",[t._v("Osmosis supports the following  RPC protocols:")]),t._v(" "),s("ul",[s("li",[t._v("URI over HTTP")]),t._v(" "),s("li",[t._v("JSON-RPC 2.0 over HTTP")]),t._v(" "),s("li",[t._v("JSON-RPC 2.0 over websockets (might be deprecated in the future).")])]),t._v(" "),s("p",[t._v("Anyone can setup a node exposing endpoints to communicate with the Osmosis blockchain, for convenience there are also some public endpoints available for querying the chain. These are recommended for development and testing purposes. For maximun control and reliability it's recommended to run your own node. This can be easility accomplsihed by using the get.osmosis.zone installer.")]),t._v(" "),s("h2",{attrs:{id:"official-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#official-endpoints"}},[t._v("#")]),t._v(" Official endpoints")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("Mainnet")]),t._v(" "),s("th",[t._v("Testnet")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("Network")])]),t._v(" "),s("td",[t._v("Mainnet")]),t._v(" "),s("td",[t._v("Testnet")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Chain ID")])]),t._v(" "),s("td",[t._v("osmosis-1")]),t._v(" "),s("td",[t._v("osmo-test-4")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("GRPC endpoint")])]),t._v(" "),s("td",[t._v("grpc.osmosis.zone")]),t._v(" "),s("td",[t._v("grpc-test.osmosis.zone")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("RPC endpoint")])]),t._v(" "),s("td",[t._v("rpc.osmosis.zone")]),t._v(" "),s("td",[t._v("rpc-test.osmosis.zone")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("RPC Docs")])]),t._v(" "),s("td",[s("a",{attrs:{href:"https://rpc-docs.osmosis.zone/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("a",{attrs:{href:"https://rpc-docs.osmosis.zone/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("LCD endpoint")])]),t._v(" "),s("td",[t._v("lcd.osmosis.zone")]),t._v(" "),s("td",[t._v("lcd-test.osmosis.zone")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("LCD Docs")])]),t._v(" "),s("td",[s("a",{attrs:{href:"https://lcd.osmosis.zone/swagger/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("a",{attrs:{href:"https://lcd-test.osmosis.zone/swagger/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Swagger"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Faucet")])]),t._v(" "),s("td",[t._v("I wish 🤑")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://faucet.osmosis.zone/",target:"_blank",rel:"noopener noreferrer"}},[t._v("faucet.osmosis.zone"),s("OutboundLink")],1)])])])]),t._v(" "),s("h3",{attrs:{id:"rpc-uri-over-http-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-uri-over-http-example"}},[t._v("#")]),t._v(" RPC URI over HTTP Example")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://rpc.osmosis.zone/abci_info?\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("or simply open "),s("a",{attrs:{href:"https://rpc.osmosis.zone/abci_info?",target:"_blank",rel:"noopener noreferrer"}},[t._v("this url"),s("OutboundLink")],1),t._v(" on your browswer")]),t._v(" "),s("h3",{attrs:{id:"json-rpc-2-0-over-http-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-2-0-over-http-example"}},[t._v("#")]),t._v(" JSON-RPC 2.0 over HTTP Example")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" --request POST --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"method": "block", "params": ["4261881"], "id": 1}\'')]),t._v(" https://rpc.osmosis.zone:443\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"lcd-uri-over-http-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lcd-uri-over-http-example"}},[t._v("#")]),t._v(" LCD URI over HTTP example")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl -X GET "https://lcd.osmosis.zone/osmosis/gamm/v1beta1/pools" -H "accept: application/json"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("or simply open "),s("a",{attrs:{href:"https://lcd.osmosis.zone/osmosis/gamm/v1beta1/pools",target:"_blank",rel:"noopener noreferrer"}},[t._v("this url"),s("OutboundLink")],1),t._v(" on your browswer.")]),t._v(" "),s("h2",{attrs:{id:"chain-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chain-registry"}},[t._v("#")]),t._v(" Chain Registry")]),t._v(" "),s("p",[t._v("This repo contains a chain.json and assetlist.json for a number of cosmos-sdk based chains. A chain.json contains data that makes it easy to start running or interacting with a node.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chain Registry"),s("OutboundLink")],1),t._v(" : "),s("code",[t._v("https://github.com/cosmos/chain-registry")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Did you know there is also an NPM package that fetch chain-registry data? "),s("br"),t._v(" "),s("strong",[t._v("Learn more")]),t._v(" : "),s("a",{attrs:{href:"https://www.npmjs.com/package/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/chain-registry"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"other-providers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-providers"}},[t._v("#")]),t._v(" Other providers")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://datahub.figment.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataHub"),s("OutboundLink")],1),t._v(" : "),s("code",[t._v("https://datahub.figment.io")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);