(function(e){function t(t){for(var c,l,a=t[0],s=t[1],i=t[2],u=0,b=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function l(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9a01a92"}[e]+".js"}function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=l(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",i.name="ChunkLoadError",i.type=c,i.request=o,n[1](i)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-headless-ui-docs/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"37f8":function(e,t,n){},"5e04":function(e,t,n){var c={"./HeadlessInputPage.vue":"7aa7"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="5e04"},"69da":function(e,t,n){"use strict";n("a344")},"7aa7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"flex justify-center"},o={class:"bg-white p-8 rounded-lg shadow-xl"};function l(e,t,n,l,a,s){var i=Object(c["F"])("input-label"),u=Object(c["F"])("input-field"),d=Object(c["F"])("input-error"),b=Object(c["F"])("headless-input"),f=Object(c["F"])("page-structure");return Object(c["z"])(),Object(c["e"])(f,{title:"Headless Input",description:"A rudimentary and accessible input complete with form validation, labels and error messages."},{code:Object(c["S"])((function(){return[Object(c["h"])("pre",null,Object(c["I"])('<template>\n    <headless-input v-model="model" :rules="required" class="flex flex-col">\n        <input-label text="Example input" class="text-black pb-2" />\n        <input-field \n          placeholder="Type something" \n          class="max-w-sm p-3 text-black-900 shadow-lg rounded-lg transition-shadow\n          focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400"\n        />\n        <input-error class="text-red-500 mt-2" />\n    </headless-input>\n</template>\n\n<script lang="ts">\nimport { HeadlessInput, InputLabel, InputError, InputField } from "vue-headless-ui";\nimport { defineComponent, ref } from "vue";\n\nexport default defineComponent({\n  components: { HeadlessInput, InputLabel, InputError, InputField },\n  setup() {\n    const model = ref("");\n    function required(v: string) {\n      if (v) return true;\n      return "This field is required.";\n    }\n    return { model, required };\n  },\n});\n<\/script>'),1)]})),default:Object(c["S"])((function(){return[Object(c["h"])("div",r,[Object(c["h"])("div",o,[Object(c["j"])(b,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model=t}),rules:e.required,class:"flex flex-col"},{default:Object(c["S"])((function(){return[Object(c["j"])(i,{text:"Example input",class:"text-black pb-2"}),Object(c["j"])(u,{class:"max-w-sm p-3 text-black-900 shadow-lg rounded-lg transition-shadow focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400",placeholder:"Type something"}),Object(c["j"])(d,{class:"text-red-500 mt-2"})]})),_:1},8,["modelValue","rules"])])])]})),_:1})}n("a4d3"),n("e01a");var a={class:"flex "},s=Object(c["h"])("div",{class:"w-72",style:{"min-width":"18rem"}},[Object(c["h"])("div",{class:"fixed w-72 box-border"},[Object(c["h"])("div",{class:"p-4 mt-8"},[Object(c["h"])("h1",{class:"font-bold text-xl"},"On this page")])])],-1),i={class:"w-full"},u={class:"mt-8 p-4"},d={class:"font-bold text-4xl"},b={class:"mt-4 font-light text-lg text-gray-300"},f=Object(c["i"])(" Preview "),p=Object(c["i"])(" Code ");function j(e,t,n,r,o,l){var j=Object(c["F"])("headless-tab-switch"),h=Object(c["F"])("headless-tab-switches"),O=Object(c["F"])("headless-tab"),g=Object(c["F"])("code-block"),v=Object(c["F"])("headless-tabs");return Object(c["z"])(),Object(c["g"])("div",a,[s,Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("h1",d,Object(c["I"])(e.title),1),Object(c["h"])("h2",b,Object(c["I"])(e.description),1),Object(c["h"])("div",{class:Object(c["r"])([" rounded mt-8 transition-all",0==e.tab?e.gradient:"bg-black-900"])},[Object(c["j"])(v,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tab=t})},{default:Object(c["S"])((function(t){var n=t.currentTab;return[Object(c["j"])(h,{class:"flex gap-2 px-4"},{default:Object(c["S"])((function(){return[Object(c["j"])(j,{class:Object(c["r"])([" p-3 rounded-md  focus:ring focus:ring-white mt-4 font-medium focus:outline-none transition-shadow ",{"ring ring-white  shadow-lg":0==n}])},{default:Object(c["S"])((function(){return[f]})),_:2},1032,["class"]),Object(c["j"])(j,{class:Object(c["r"])([" p-3 rounded-md  focus:ring focus:ring-white mt-4 font-medium focus:outline-none transition-shadow ",{"ring ring-white  shadow-lg":1==n}])},{default:Object(c["S"])((function(){return[p]})),_:2},1032,["class"])]})),_:2},1024),Object(c["j"])(O,{class:"p-4"},{default:Object(c["S"])((function(){return[Object(c["E"])(e.$slots,"default")]})),_:3}),Object(c["j"])(O,{class:"p-4 overflow-auto max-w-full"},{default:Object(c["S"])((function(){return[Object(c["j"])(g,null,{default:Object(c["S"])((function(){return[Object(c["E"])(e.$slots,"code")]})),_:3})]})),_:3})]})),_:3},8,["modelValue"])],2)]),(Object(c["z"])(),Object(c["g"])(c["a"],null,Object(c["D"])(100,(function(e){return Object(c["h"])("div",{key:e,class:"p-10"},Object(c["I"])(e),1)})),64))])])}var h=n("c0f3"),O=Object(c["k"])({components:{CodeBlock:h["a"]},props:{title:{type:String,default:"Component Title"},description:{type:String,default:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium necessitatibus, maiores quas magnam cum enim eligendi quasi, quibusdam fugiat nostrum? Illum rerum quas velit ea saepe, vero beatae quod."},gradient:{type:String,default:"bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600"}},setup:function(){var e=Object(c["C"])(0);return{tab:e}}});O.render=j;var g=O,v=Object(c["k"])({components:{PageStructure:g},setup:function(){var e=Object(c["C"])("");function t(e){return!!e||"This field is required."}return{model:e,required:t}}});v.render=l;t["default"]=v},"93cb":function(e,t,n){"use strict";n("37f8")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.e60481ad.svg"},a344:function(e,t,n){},c0f3:function(e,t,n){"use strict";var c=n("7a23"),r={class:"flex justify-center"},o={class:"flex-grow w-40"};function l(e,t,n,l,a,s){var i=Object(c["F"])("ssh-pre");return Object(c["z"])(),Object(c["g"])("div",r,[Object(c["h"])("div",o,[Object(c["j"])(i,{language:e.type,dark:"",class:"mb-4 overflow-auto font-mono"},{default:Object(c["S"])((function(){return[Object(c["E"])(e.$slots,"default")]})),_:3},8,["language"])])])}var a=n("9f94"),s=Object(c["k"])({components:{SshPre:a["a"]},props:{type:{type:String,default:"js"}},setup:function(){return{}}});n("93cb");s.render=l;t["a"]=s},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"text-white font-poppins"},o={class:"flex h-full  mx-auto max-w-7xl"},l={class:"flex flex-col   flex-grow"};function a(e,t,n,a,s,i){var u=Object(c["F"])("nav-bar"),d=Object(c["F"])("router-view"),b=Object(c["F"])("app-footer");return Object(c["z"])(),Object(c["g"])("div",r,[Object(c["j"])(u),Object(c["h"])("div",o,[Object(c["h"])("div",l,[Object(c["j"])(d)])]),Object(c["j"])(b)])}var s=Object(c["h"])("div",{class:"py-12 px-4 max-w-7xl mx-auto"},[Object(c["h"])("div",{class:"h-1 bg-white  rounded bg-opacity-10 my-4"}),Object(c["h"])("div",{class:"font-thin"},[Object(c["i"])(" Developed with love by "),Object(c["h"])("a",{href:"https://github.com/horia16",class:"font-medium"},"Horia Rotaru")])],-1),i=[s];function u(e,t,n,r,o,l){return Object(c["z"])(),Object(c["g"])("footer",null,i)}var d=Object(c["k"])({setup:function(){return{}}});d.render=u;var b=d,f=n("9b19"),p=n.n(f),j={class:" sticky top-0   backdrop-filter  backdrop-blur-lg bg-black-900 bg-opacity-40  z-30"},h=Object(c["h"])("div",{class:"px-4 p-6  flex items-center max-w-7xl mx-auto border-b border-gray-600"},[Object(c["h"])("div",null,[Object(c["h"])("img",{src:p.a,alt:"",srcset:"",class:"w-10 h-10"})]),Object(c["h"])("div",{class:"font-bold text-2xl text-white ml-4"},"Vue Headless UI")],-1),O=[h];function g(e,t,n,r,o,l){return Object(c["z"])(),Object(c["g"])("nav",j,O)}var v=Object(c["k"])({setup:function(){return{}}});v.render=g;var m=v,x=Object(c["k"])({components:{NavBar:m,AppFooter:b},setup:function(){return{}}});n("69da");x.render=a;var w=x,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),k={class:"px-4"},S=Object(c["h"])("div",{class:"flex justify-center p-8"},[Object(c["h"])("img",{src:p.a,alt:"Headless UI logo",width:"300"})],-1),_=Object(c["h"])("div",{class:"mb-4"},[Object(c["h"])("h1",{class:"font-bold text-2xl "}," Getting started with Vue Headless UI "),Object(c["h"])("div",{class:"text-lg"}," This library is still under active development and is not recommended for production. ")],-1),F=Object(c["i"])(" This library only supports "),H=Object(c["i"])("Vue 3"),I=Object(c["i"])(". "),T={class:"my-8"},E=Object(c["h"])("h1",{class:"font-bold text-2xl "}," The Why ",-1),q=Object(c["h"])("p",null," This library was created with the scope of providing an easy and quick way of creating custom styled components without the hassle of writing your own complex logic or worring about accessibility. ",-1),P=Object(c["i"])(" This library is similar to and inspired by "),z=Object(c["i"])("Headless UI"),C=Object(c["i"])(" but aims for a much bigger scope with a focus on form components. "),V={id:"installation",class:"my-8"},U=Object(c["h"])("h1",{class:"font-bold text-2xl "}," Installation ",-1),A=Object(c["h"])("pre",null,"npm install vue-headless-ui",-1),L=Object(c["h"])("p",null," Or install it with yarn ",-1),$=Object(c["h"])("pre",null,"yarn add vue-headless-ui",-1),D=Object(c["h"])("h1",{class:"font-bold text-2xl "}," Available components ",-1),B={class:"mt-4"},M={class:"bg-white bg-opacity-10     p-1 rounded-2xl"},N={class:"bg-black-900 p-6 rounded-xl flex gap-4 flex-wrap justify-center"},G=Object(c["h"])("div",null," Headless Input ",-1),J=Object(c["h"])("div",null,[Object(c["h"])("div",{class:"text-sm"}," ******** "),Object(c["h"])("div",{class:"bg-white h-9 w-40 rounded shadow-lg text-black-900 flex p-2"}," ***** ")],-1),R=Object(c["h"])("div",null," Headless Form ",-1),W=Object(c["h"])("div",{class:"flex flex-col gap-1"},[Object(c["h"])("div",{class:"bg-white h-1 w-40 rounded shadow-lg text-black-900 flex p-2"}),Object(c["h"])("div",{class:"bg-white h-1 w-32 rounded shadow-lg text-black-900 flex p-2"}),Object(c["h"])("div",{class:"bg-white h-1 w-36 rounded shadow-lg text-black-900 flex p-2"}),Object(c["h"])("div",{class:"bg-blue-400 h-1 w-12 rounded shadow-lg text-black-900 flex p-2 text-xs"})],-1),K=Object(c["h"])("div",null," Headless Accordion ",-1),Q=Object(c["h"])("div",{class:"flex flex-col gap-1"},[Object(c["h"])("div",{class:"bg-white w-40 rounded shadow-lg text-black-900 flex p-2 justify-end"},[Object(c["h"])("div",{class:"bg-blue-400 h-1 w-2 rounded shadow-lg text-black-900 flex p-2 text-xs"})]),Object(c["h"])("div",{class:"bg-white h-14 w-40 rounded shadow-lg text-black-900 flex p-2"})],-1),X=Object(c["h"])("div",null," Headless Dialog ",-1),Y=Object(c["h"])("div",{class:"flex flex-col gap-1 relative"},[Object(c["h"])("div",{class:"h-8"}),Object(c["h"])("div",{class:"absolute bg-black-900 w-40 h-28 rounded bg-opacity-40"}),Object(c["h"])("div",{class:"absolute w-40 h-28 flex justify-center items-center"},[Object(c["h"])("div",{class:"bg-white h-20 w-36  rounded shadow-lg text-black-900 flex p-2 justify-end"},[Object(c["h"])("div",{class:"bg-red-400 h-1 w-2 rounded shadow-lg text-black-900 flex p-2 text-xs relative"})])])],-1),Z=Object(c["h"])("div",null," Headless Tabs ",-1),ee=Object(c["h"])("div",null,[Object(c["h"])("div",{class:"bg-white shadow-lg w-40 h-24 rounded flex relative"},[Object(c["h"])("div",{class:"flex absolute -top-1 left-1"},[Object(c["h"])("div",{class:"bg-purple-500 border-r rounded h-4  w-10  shadow-lg text-black-900 flex p-2 text-xs relative"}),Object(c["h"])("div",{class:"bg-indigo-500 border-r rounded h-4  w-10  shadow-lg text-black-900 flex p-2 text-xs relative"}),Object(c["h"])("div",{class:"bg-blue-500 h-4 rounded w-10  shadow-lg text-black-900 flex p-2 text-xs relative"})])])],-1),te=Object(c["h"])("div",null," Headless Button ",-1),ne=Object(c["h"])("div",{class:"h-6"},null,-1),ce={class:"bg-indigo-800 shadow-lg w-36 h-12 rounded flex relative"},re={class:"absolute -right-4 -bottom-6 "};function oe(e,t,n,r,o,l){var a=Object(c["F"])("external-link"),s=Object(c["F"])("code-block"),i=Object(c["F"])("component-card"),u=Object(c["F"])("headless-icon");return Object(c["z"])(),Object(c["g"])("div",k,[S,_,Object(c["h"])("div",null,[F,Object(c["j"])(a,{href:"https://github.com/vuejs/vue-next/"},{default:Object(c["S"])((function(){return[H]})),_:1}),I]),Object(c["h"])("div",T,[E,q,Object(c["h"])("p",null,[P,Object(c["j"])(a,{href:"https://headlessui.dev/"},{default:Object(c["S"])((function(){return[z]})),_:1}),C])]),Object(c["h"])("div",V,[U,Object(c["j"])(s,{type:"shell"},{default:Object(c["S"])((function(){return[A]})),_:1}),L,Object(c["j"])(s,{type:"shell"},{default:Object(c["S"])((function(){return[$]})),_:1})]),Object(c["h"])("div",null,[D,Object(c["h"])("div",B,[Object(c["h"])("div",M,[Object(c["h"])("div",N,[Object(c["j"])(i,{class:"bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600",icon:"bi:input-cursor",component:"HeadlessInput"},{drawing:Object(c["S"])((function(){return[J]})),default:Object(c["S"])((function(){return[G]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-purple-400 via-purple-500  to-blue-500",icon:"cil:pen",component:"HeadlessForm"},{drawing:Object(c["S"])((function(){return[W]})),default:Object(c["S"])((function(){return[R]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-green-400 via-green-500  to-green-600",icon:"carbon:row-expand",component:"HeadlessAccordion"},{drawing:Object(c["S"])((function(){return[Q]})),default:Object(c["S"])((function(){return[K]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-red-600 via-red-500  to-red-400",icon:"carbon:popup",component:"HeadlessDialog"},{drawing:Object(c["S"])((function(){return[Y]})),default:Object(c["S"])((function(){return[X]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-pink-400   to-yellow-500",icon:"fluent:tab-desktop-copy-20-regular",component:"HeadlessTabs"},{drawing:Object(c["S"])((function(){return[ee]})),default:Object(c["S"])((function(){return[Z]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-blue-400   to-blue-600",icon:"fluent:cursor-click-20-regular",component:"HeadlessButton"},{drawing:Object(c["S"])((function(){return[Object(c["h"])("div",null,[ne,Object(c["h"])("div",ce,[Object(c["h"])("div",re,[Object(c["j"])(u,{name:"fluent:cursor-click-20-regular",width:46,height:46,iconify:""})])])])]})),default:Object(c["S"])((function(){return[te]})),_:1})])])])])])}var le=n("c0f3"),ae={class:"flex items-center gap-2 font-light"},se={"aria-hidden":"true",class:"w-40 h-28"};function ie(e,t,n,r,o,l){var a=Object(c["F"])("router-link");return Object(c["z"])(),Object(c["e"])(a,{to:"/components/".concat(e.component),class:"shadow-lg p-8 text-xl rounded-2xl w-full max-w-sm flex flex-col justify-center items-center transition-transform gap-2 transform hover:-translate-y-1 select-none"},{default:Object(c["S"])((function(){return[Object(c["h"])("div",ae,[Object(c["E"])(e.$slots,"default")]),Object(c["h"])("div",se,[Object(c["E"])(e.$slots,"drawing")])]})),_:3},8,["to"])}var ue=Object(c["k"])({components:{},props:{icon:{type:String,default:""},component:{type:String,default:""}},setup:function(){return{}}});ue.render=ie;var de=ue,be={class:"font-bold underline text-blue-500",target:"_blank"};function fe(e,t,n,r,o,l){return Object(c["z"])(),Object(c["g"])("a",be,[Object(c["E"])(e.$slots,"default")])}var pe=Object(c["k"])({setup:function(){return{}}});pe.render=fe;var je=pe,he=Object(c["k"])({components:{ExternalLink:je,CodeBlock:le["a"],ComponentCard:de},setup:function(){return{}}});he.render=oe;var Oe=he,ge={key:0};function ve(e,t,n,r,o,l){return e.component?(Object(c["z"])(),Object(c["g"])("div",ge,[(Object(c["z"])(),Object(c["e"])(Object(c["G"])("".concat(e.component,"Page"))))])):Object(c["f"])("",!0)}var me=Object(c["k"])({props:{component:{type:String,default:null}},setup:function(){return{}}});me.render=ve;var xe=me,we=[{path:"/",name:"Home",component:Oe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/components/:component",component:xe,props:!0}],ye=Object(y["a"])({history:Object(y["b"])("/vue-headless-ui-docs/"),routes:we}),ke=ye,Se=(n("d940"),n("737e"),n("2a2a")),_e=n.n(Se),Fe=n("8f07"),He=(n("159b"),n("ac1f"),n("5319"),n("5e04")),Ie={install:function(e){He.keys().forEach((function(t){var n=He(t),c=t.replace(/^.*[\\/]/,"").replace(/\.\w+$/,"");e.component(c,n.default||n)}))}};_e.a.observe(document.body),Object(c["d"])(w).use(ke).use(Fe["a"]).use(Ie).mount("#app")},d940:function(e,t,n){}});
//# sourceMappingURL=app.ace18b04.js.map