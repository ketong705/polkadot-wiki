"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[434],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,o(o({ref:e},d),{},{components:a})):n.createElement(c,o({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[m]="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61656:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={id:"wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of wallets in Polkadot ecosystem.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../wallets"},i=void 0,p={unversionedId:"general/wallets",id:"general/wallets",title:"Wallets",description:"An overview of wallets in Polkadot ecosystem.",source:"@site/../docs/general/wallets.md",sourceDirName:"general",slug:"/wallets",permalink:"/docs/wallets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/wallets.md",tags:[],version:"current",lastUpdatedBy:"Leemo",lastUpdatedAt:1679483166,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of wallets in Polkadot ecosystem.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../wallets"},sidebar:"docs",previous:{title:"Do Your Own Research",permalink:"/docs/how-to-dyor"},next:{title:"Ledger",permalink:"/docs/ledger"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Browser Extensions",id:"browser-extensions",level:3},{value:"Mobile Wallets",id:"mobile-wallets",level:3},{value:"Enkrypt",id:"enkrypt",level:2},{value:"Fearless Wallet",id:"fearless-wallet",level:2},{value:"Nova Wallet",id:"nova-wallet",level:2},{value:"PolkaGate",id:"polkagate",level:2},{value:"Polkawallet",id:"polkawallet",level:2},{value:"SubWallet",id:"subwallet",level:2},{value:"Talisman",id:"talisman",level:2}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Using your due diligence in researching and using the wallets listed below would be best. For any\nissues related to these wallet, reach out to their support teams directly.")),(0,l.kt)("p",null,"If you are new to blockchain technology, generally a typical blockchain network account is a\npublic-private key pair. Access to a private key gives full access to all the allowed transactions\non that blockchain account. It is essential to keep the private key secure."),(0,l.kt)("p",null,"Typically, the account keys are either stored and accessed through a browser extension or a\nsmartphone app (which are considered as a hot wallets as they are online), or an air-gapped device\nor a hardware wallet (which are considered as cold wallets as they are offline)."),(0,l.kt)("admonition",{title:"Not your keys, not your tokens!",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"With ",(0,l.kt)("strong",{parentName:"p"},"custodial wallets")," (like accounts in centralized exchanges), another party controls your\nprivate keys. Private keys are used to access funds in your account, so you trust the exchange that\nyour key will always be given to you whenever you need it. With ",(0,l.kt)("strong",{parentName:"p"},"non-custodial wallets"),", only you\ncan access your account's private key.")),(0,l.kt)("p",null,"To realize the multichain vision of Polkadot,\nit is important to have non-custodial wallets that make it convenient to interact with multiple\nblockchains in Polkadot ecosystem. Below there\nis a list of all non-custodial treasury-funded wallets developed by the community."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("h3",{id:"browser-extensions"},"Browser Extensions"),(0,l.kt)("p",null,"At a bare minimum, browser extension wallets act as key storage and management solution, allowing\nyou to use your accounts with apps in the Web3 space. The wallets listed below offer functionality\nbeyond that, allowing the featured actions to be performed directly through the extension. Some of\nthem also allow interaction with air-gapped wallets and hardware devices."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,l.kt)("th",{parentName:"tr",align:null},"Browsers"),(0,l.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,l.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,l.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,l.kt)("th",{parentName:"tr",align:null},"Governance"),(0,l.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.enkrypt.com/?mtm_campaign=Polkadot%20Wiki%20-%20Supported%20Wallets"},"Enkrypt")),(0,l.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox, Opera, Safari"),(0,l.kt)("td",{parentName:"tr",align:null},"No, No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#enkrypt"},"Enkrypt Features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkagate.xyz/"},"PolkaGate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/polkagate-the-gateway-to/ginchbkmljhldofnbjabmeophlhdldgp"},"Brave"),", ",(0,l.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/polkagate-the-gateway-to/ginchbkmljhldofnbjabmeophlhdldgp"},"Chrome"),", ",(0,l.kt)("a",{parentName:"td",href:"https://addons.mozilla.org/en-US/firefox/addon/polkagate"},"Firefox"),", ",(0,l.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/polkagate-the-gateway-to/ginchbkmljhldofnbjabmeophlhdldgp"},"Edge")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#polkagate"},"PolkaGate features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn"},"Brave"),", ",(0,l.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn"},"Chrome"),", ",(0,l.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn"},"Edge"),", ",(0,l.kt)("a",{parentName:"td",href:"https://addons.mozilla.org/en-US/firefox/addon/subwallet/"},"Firefox")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.talisman.xyz/"},"Talisman")),(0,l.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#talisman"},"Talisman features"))))),(0,l.kt)("admonition",{title:"Ledger support only for chromium-based browsers",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Currently, all browser extensions support Ledger devices only on chromium-based browsers (i.e.\nChrome, Brave, Edge, Opera).")),(0,l.kt)("h3",{id:"mobile-wallets"},"Mobile Wallets"),(0,l.kt)("p",null,"Mobile wallets are fully packaged apps that allow all the featured actions, as well as the storage\nand management of your accounts, through the mobile app. Unlike browser extensions, mobile wallets\nusually can\u2019t connect to third-party web apps. Some mobile wallets provide support for hardware\nwallets through Bluetooth connectivity."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,l.kt)("th",{parentName:"tr",align:null},"Platforms"),(0,l.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,l.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,l.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,l.kt)("th",{parentName:"tr",align:null},"Governance"),(0,l.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fearless-wallet"},"Fearless Wallet Features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://novawallet.io/"},"Nova Wallet"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nova-wallet"},"Nova Wallet features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkawallet.io/"},"Polkawallet")),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#polkawallet"},"Polkawallet features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"apple.co/3WafLpm"},"iOS (Testflight)"),", ",(0,l.kt)("a",{parentName:"td",href:"bit.ly/3DE2Dlg"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"*","Note about Nova wallet"),(0,l.kt)("p",{parentName:"admonition"},"There's ",(0,l.kt)("strong",{parentName:"p"},"another")," Nova wallet that is ",(0,l.kt)("strong",{parentName:"p"},"unrelated")," to the Polkadot ecosystem. Users are advised\nto ensure that they use the correct Nova wallet by downloading the app from their official website:\n",(0,l.kt)("a",{parentName:"p",href:"https://novawallet.io/"},"https://novawallet.io/"),". Before creating or restoring accounts , it is wise\nto double-check the wallet website URLs through official channels (most projects have it listed on\ntheir official social media handles).")),(0,l.kt)("h2",{id:"enkrypt"},"Enkrypt"),(0,l.kt)("p",null,"A multichain crypto wallet - Bitcoin, Ethereum, Polkadot, Kusama and a few parachains.\nNon-custodial, private, hardware wallet support (Ledger and Trezor). Private and open source. Hold,\nsend, and receive tokens and NFTs. Swap tokens and bridge assets between chains. Manage multiple\naccounts on multiple networks. Connect to web3 apps. Recipient of a development grant from Web3\nFoundation."),(0,l.kt)("h2",{id:"fearless-wallet"},"Fearless Wallet"),(0,l.kt)("p",null,"The DeFi Wallet for the Future Android and iOS native mobile Polkadot/Kusama wallet for the Dotsama\necosystem with emphasis on UX, performance, and security. Fearless Wallet aims to radically expand\naccess to decentralized finance (DeFi) by making complex functions much easier to use and\nunderstand. The App supports such features as follows: Staking, Crowdloans, Parachain Accounts,\nNomination pools native staking, dApp signer (experimental), Scam addresses warning, Network issues\nwarning. Fearless Wallet received funding from Kusama Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/23"},"1"),", ",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/34"},"2"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/74"},"3"),", ",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/102"},"4"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/178"},"5"),"]."),(0,l.kt)("h2",{id:"nova-wallet"},"Nova Wallet"),(0,l.kt)("p",null,"A user-friendly wallet for the Polkadot & Kusama ecosystems, providing a smooth web3 experience on\nboth iOS and Android. Nova Wallet supports OpenGov (including agile delegations), Governance v1\n(including support for parachain governance), Staking, NFT management, XCM Transfers, Parity Signer\n& Ledger Support, DApp Support with Polkadot JS and Metamask/EVM Integration and crowdloans. Nova\nWallet received funding from Kusama Treasury [",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/122"},"1"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/158"},"2"),"], as well as funding from the Polkadot Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/314"},"1"),"]."),(0,l.kt)("h2",{id:"polkagate"},"PolkaGate"),(0,l.kt)("p",null,"PolkaGate extension is a Kusama Treasury supported\n[",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/205"},"1"),"] extension/wallet. It is the next version of\nPolkadot-JS Plus, completely re-developed, with a new look and many performance improvements.\nSupports address only accounts, crowdloans, export/import/derive account(s), ledger support, pool\nstaking, parachain accounts, phishing website detection, proxy management, QR account import, solo\nstaking, support different remote nodes, transfer funds, view balances (Crypto/USD), view\ntransaction history, view an address as QR code."),(0,l.kt)("h2",{id:"polkawallet"},"Polkawallet"),(0,l.kt)("p",null,"Polkawallet provides cross-chain asset one-stop management, convenient staking, governance, and\nmultiple DeFi services; the private key is self-owned. Polkawallet received funding from Kusama\nTreasury [",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/32"},"1"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/41"},"2"),"]."),(0,l.kt)("h2",{id:"subwallet"},"SubWallet"),(0,l.kt)("p",null,"A non-custodial Polkadot, Substrate & Ethereum wallet. Track, send, receive, and monitor multi-chain\nassets on 150+ networks. Import account with seed phrase, private key, QR code, and JSON file.\nImport token & NFT, attach read-only account. XCM Transfer, NFT Management, Parity Signer & Ledger\nsupport, light clients support, EVM DApp support, MetaMask compatibility, custom endpoints, fiat\non-ramp, phishing detection, transaction history. SubWallet received funding from Polkadot Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/138"},"1"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/162"},"2"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/218"},"3"),"]."),(0,l.kt)("h2",{id:"talisman"},"Talisman"),(0,l.kt)("p",null,"A better way to explore Web3. Keep your assets safe, manage your portfolio and explore Polkadot and\nEthereum apps with Talisman. Interact with Web3 apps, store your favourite crypto assets and manage\nyour accounts on over 150+ Substrate and EVM networks. NFT Management, ledger Support, fiat On-ramp,\nportfolio tracking. Talisman received funding from Polkadot Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/148"},"1"),"]."))}k.isMDXComponent=!0}}]);