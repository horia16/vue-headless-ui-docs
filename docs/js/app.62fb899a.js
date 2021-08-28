(function(e){function t(t){for(var c,l,a=t[0],s=t[1],i=t[2],u=0,d=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function l(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9a01a92"}[e]+".js"}function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=l(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",i.name="ChunkLoadError",i.type=c,i.request=o,n[1](i)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-headless-ui-docs/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"37f8":function(e,t,n){},"422b":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n("7a23"),r=Object(c["C"])(!1)},"5e04":function(e,t,n){var c={"./HeadlessInputPage.vue":"7aa7"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="5e04"},"69da":function(e,t,n){"use strict";n("a344")},"7aa7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"flex justify-center"},o={class:"bg-white p-8 rounded-lg shadow-xl"};function l(e,t,n,l,a,s){var i=Object(c["F"])("input-label"),u=Object(c["F"])("input-field"),b=Object(c["F"])("input-error"),d=Object(c["F"])("headless-input"),f=Object(c["F"])("page-structure");return Object(c["z"])(),Object(c["e"])(f,{title:"Headless Input",description:"A rudimentary and accessible input complete with form validation, labels and error messages.",structure:e.structure},{code:Object(c["S"])((function(){return[Object(c["h"])("pre",null,Object(c["I"])('<template>\n    <headless-input v-model="model" :rules="required" class="flex flex-col">\n        <input-label text="Example input" class="text-black pb-2" />\n        <input-field \n          placeholder="Type something" \n          class="max-w-sm p-3 text-black-900 shadow-lg rounded-lg transition-shadow\n          focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400"\n        />\n        <input-error class="text-red-500 mt-2" />\n    </headless-input>\n</template>\n\n<script lang="ts">\nimport { HeadlessInput, InputLabel, InputError, InputField } from "vue-headless-ui";\nimport { defineComponent, ref } from "vue";\n\nexport default defineComponent({\n  components: { HeadlessInput, InputLabel, InputError, InputField },\n  setup() {\n    const model = ref("");\n    function required(v: string) {\n      if (v) return true;\n      return "This field is required.";\n    }\n    return { model, required };\n  },\n});\n<\/script>'),1)]})),default:Object(c["S"])((function(){return[Object(c["h"])("div",r,[Object(c["h"])("div",o,[Object(c["j"])(d,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model=t}),rules:e.required,class:"flex flex-col"},{default:Object(c["S"])((function(){return[Object(c["j"])(i,{text:"Example input",class:"text-black pb-2"}),Object(c["j"])(u,{class:"max-w-sm p-3 text-black-900 shadow-lg rounded-lg transition-shadow focus:outline-none focus:ring focus:ring-blue-400 border border-gray-400",placeholder:"Type something"}),Object(c["j"])(b,{class:"text-red-500 mt-2"})]})),_:1},8,["modelValue","rules"])])])]})),_:1},8,["structure"])}n("b0c0"),n("a4d3"),n("e01a");var a={class:"flex "},s={class:"fixed w-72 box-border bg-black-900"},i={class:"p-4 mt-8"},u=["href"],b={class:"ml-4 mt-1"},d=["href"],f={class:"w-full"},j={class:"mt-8 p-4"},p={class:"font-bold text-4xl"},O={class:"mt-4 font-light text-lg text-gray-300"},h=Object(c["i"])(" Preview "),m=Object(c["i"])(" Code ");function g(e,t,n,r,o,l){var g=Object(c["F"])("headless-icon"),v=Object(c["F"])("router-link"),x=Object(c["F"])("accordion"),w=Object(c["F"])("headless-tab-switch"),y=Object(c["F"])("headless-tab-switches"),k=Object(c["F"])("headless-tab"),S=Object(c["F"])("code-block"),_=Object(c["F"])("headless-tabs");return Object(c["z"])(),Object(c["g"])("div",a,[Object(c["h"])("div",{class:Object(c["r"])(["w-72 fixed top-0 z-40 md:z-auto h-screen md:h-auto md:relative bg-black-900 transform md:transform-none transition-transform",{"-translate-x-full":!e.isDrawerOpen}]),style:{"min-width":"18rem"}},[Object(c["h"])("div",s,[Object(c["h"])("div",i,[Object(c["j"])(x,{title:"Components",openByDefault:"",class:"mb-8"},{default:Object(c["S"])((function(){return[Object(c["h"])("ul",null,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["D"])(e.components,(function(e,t){return Object(c["z"])(),Object(c["g"])("li",{key:t,class:"my-4"},[Object(c["j"])(v,{to:"/components/".concat(e.name),class:"flex items-center gap-2 ring ring-white ring-opacity-10 rounded p-1"},{default:Object(c["S"])((function(){return[Object(c["j"])(g,{name:e.icon,iconify:""},null,8,["name"]),Object(c["h"])("div",null,Object(c["I"])(e.name),1)]})),_:2},1032,["to"])])})),128))])]})),_:1}),Object(c["j"])(x,{title:"On the page",openByDefault:"",class:"mb-8"},{default:Object(c["S"])((function(){return[Object(c["h"])("ul",null,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["D"])(e.structure,(function(e,t){return Object(c["z"])(),Object(c["g"])("li",{key:t,class:""},[Object(c["h"])("a",{href:"#".concat(e.id),class:"flex flex-col my-2 font-light"},[Object(c["h"])("div",null,Object(c["I"])(t+1)+". "+Object(c["I"])(e.title),1)],8,u),Object(c["h"])("ul",b,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["D"])(e.children,(function(e,n){return Object(c["z"])(),Object(c["g"])("li",{key:n,class:""},[Object(c["h"])("a",{href:"#".concat(e.id),class:"font-thin"},Object(c["I"])(t+1)+"."+Object(c["I"])(n+1)+". "+Object(c["I"])(e.title),9,d)])})),128))])])})),128))])]})),_:1})])])],2),Object(c["h"])("div",f,[Object(c["h"])("div",j,[Object(c["h"])("h1",p,Object(c["I"])(e.title),1),Object(c["h"])("h2",O,Object(c["I"])(e.description),1),Object(c["h"])("div",{class:Object(c["r"])([" rounded mt-8 transition-all ring-4 ring-white ring-opacity-30",0==e.tab?e.gradient:"bg-black-900"]),id:"componentPreview"},[Object(c["j"])(_,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tab=t})},{default:Object(c["S"])((function(t){var n=t.currentTab;return[Object(c["j"])(y,{class:"flex gap-2 px-4 mb-4"},{default:Object(c["S"])((function(){return[Object(c["j"])(w,{class:Object(c["r"])([" p-3 rounded-md  focus:ring focus:ring-white focus:ring-opacity-30 mt-4 font-medium focus:outline-none transition-shadow ",{"bg-white text-black-900  shadow-lg":0==n}])},{default:Object(c["S"])((function(){return[h]})),_:2},1032,["class"]),Object(c["j"])(w,{class:Object(c["r"])([" p-3 rounded-md  focus:ring focus:ring-white focus:ring-opacity-30 mt-4 font-medium focus:outline-none transition-shadow ",{"bg-white text-black-900  shadow-lg":1==n}])},{default:Object(c["S"])((function(){return[m]})),_:2},1032,["class"])]})),_:2},1024),Object(c["j"])(k,{class:"p-4"},{default:Object(c["S"])((function(){return[Object(c["E"])(e.$slots,"default")]})),_:3}),Object(c["j"])(k,{class:"p-4 overflow-auto max-w-full"},{default:Object(c["S"])((function(){return[Object(c["j"])(S,null,{default:Object(c["S"])((function(){return[Object(c["E"])(e.$slots,"code")]})),_:3})]})),_:3})]})),_:3},8,["modelValue"])],2)]),(Object(c["z"])(),Object(c["g"])(c["a"],null,Object(c["D"])(100,(function(e){return Object(c["h"])("div",{key:e,class:"p-10"},Object(c["I"])(e),1)})),64))])])}var v=n("422b"),x=["onClick"],w={class:"text-md"},y={class:"w-full p-2 rounded bg-opacity-10 flex flex-col mt-2"};function k(e,t,n,r,o,l){var a=Object(c["F"])("headless-icon"),s=Object(c["F"])("accordion-header"),i=Object(c["F"])("accordion-content"),u=Object(c["F"])("headless-accordion");return Object(c["z"])(),Object(c["e"])(u,{self:""},{default:Object(c["S"])((function(){return[Object(c["j"])(s,{class:"flex w-full"},{default:Object(c["S"])((function(t){var n=t.toggle,r=t.isOpen;return[Object(c["h"])("button",{onClick:n,class:"bg-white w-full p-2 rounded bg-opacity-10 flex justify-between items-center"},[Object(c["h"])("h1",w,Object(c["I"])(e.title),1),Object(c["j"])(a,{name:r?"akar-icons:circle-chevron-up-fill":"akar-icons:circle-chevron-down-fill",iconify:""},null,8,["name"])],8,x)]})),_:1}),Object(c["j"])(i,{class:""},{default:Object(c["S"])((function(){return[Object(c["h"])("div",y,[Object(c["E"])(e.$slots,"default")])]})),_:3})]})),_:3})}var S=Object(c["k"])({props:{modelValue:{type:Boolean,default:null},title:{type:String,default:null}},setup:function(e,t){return{}}});S.render=k;var _=S,F=n("c0f3"),I=Object(c["k"])({components:{CodeBlock:F["a"],Accordion:_},props:{title:{type:String,default:"Component Title"},description:{type:String,default:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium necessitatibus, maiores quas magnam cum enim eligendi quasi, quibusdam fugiat nostrum? Illum rerum quas velit ea saepe, vero beatae quod."},gradient:{type:String,default:"bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600"},structure:{type:Array,default:null}},setup:function(){var e=Object(c["C"])(0),t=[{name:"HeadlessInput",icon:"bi:input-cursor"},{name:"HeadlessForm",icon:"teenyicons:attachment-outline"},{name:"HeadlessAccordion",icon:"carbon:row-expand"},{name:"HeadlessDialog",icon:"carbon:popup"},{name:"HeadlessTabs",icon:"fluent:table-insert-row-24-regular"},{name:"HeadlessButton",icon:"dashicons:button"}];return{tab:e,components:t,isDrawerOpen:v["a"]}}});I.render=g;var H=I,z=Object(c["k"])({components:{PageStructure:H},setup:function(){var e=Object(c["C"])("");function t(e){return!!e||"This field is required."}var n=[{title:"Component Preview",id:"componentPreview",children:[]},{title:"Component Structure",id:"componentStructure",children:[{title:"Test Child",id:"testChild"}]}];return{model:e,required:t,structure:n}}});z.render=l;t["default"]=z},"93cb":function(e,t,n){"use strict";n("37f8")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.e60481ad.svg"},a344:function(e,t,n){},c0f3:function(e,t,n){"use strict";var c=n("7a23"),r={class:"flex justify-center"},o={class:"flex-grow w-40"};function l(e,t,n,l,a,s){var i=Object(c["F"])("ssh-pre");return Object(c["z"])(),Object(c["g"])("div",r,[Object(c["h"])("div",o,[Object(c["j"])(i,{language:e.type,dark:"",class:"mb-4 overflow-auto font-mono"},{default:Object(c["S"])((function(){return[Object(c["E"])(e.$slots,"default")]})),_:3},8,["language"])])])}var a=n("9f94"),s=Object(c["k"])({components:{SshPre:a["a"]},props:{type:{type:String,default:"js"}},setup:function(){return{}}});n("93cb");s.render=l;t["a"]=s},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={class:"text-white font-poppins"},o={class:"flex h-full  mx-auto max-w-7xl"},l={class:"flex flex-col   flex-grow"};function a(e,t,n,a,s,i){var u=Object(c["F"])("nav-bar"),b=Object(c["F"])("router-view"),d=Object(c["F"])("app-footer");return Object(c["z"])(),Object(c["g"])("div",r,[Object(c["j"])(u),Object(c["h"])("div",o,[Object(c["h"])("div",l,[Object(c["j"])(b)])]),Object(c["j"])(d)])}var s=Object(c["h"])("div",{class:"py-12 px-4 max-w-7xl mx-auto"},[Object(c["h"])("div",{class:"h-1 bg-white  rounded bg-opacity-10 my-4"}),Object(c["h"])("div",{class:"font-thin"},[Object(c["i"])(" Developed with love by "),Object(c["h"])("a",{href:"https://github.com/horia16",class:"font-medium"},"Horia Rotaru")])],-1),i=[s];function u(e,t,n,r,o,l){return Object(c["z"])(),Object(c["g"])("footer",null,i)}var b=Object(c["k"])({setup:function(){return{}}});b.render=u;var d=b,f=n("9b19"),j=n.n(f),p={class:" sticky top-0   backdrop-filter  backdrop-blur-lg bg-black-900 bg-opacity-40  z-30"},O={class:"px-4 p-6  flex items-center max-w-7xl mx-auto border-b border-gray-600 justify-between"},h=Object(c["h"])("div",{class:"flex items-center"},[Object(c["h"])("img",{src:j.a,alt:"",srcset:"",class:"w-10 h-10"}),Object(c["h"])("div",{class:"font-bold text-2xl text-white ml-4"},"Vue Headless UI")],-1),m={class:"md:hidden"};function g(e,t,n,r,o,l){var a=Object(c["F"])("headless-icon"),s=Object(c["F"])("headless-button");return Object(c["z"])(),Object(c["g"])("nav",p,[Object(c["h"])("div",O,[h,Object(c["h"])("div",m,[Object(c["j"])(s,{class:"p-2 bg-indigo-800 flex justify-center items-center rounded-full focus:ring focus:ring-indigo-600 focus:ring-opacity-40",onClick:t[0]||(t[0]=function(t){return e.isDrawerOpen=!e.isDrawerOpen})},{default:Object(c["S"])((function(){return[Object(c["j"])(a,{name:"entypo:menu",iconify:""})]})),_:1})])])])}var v=n("422b"),x=Object(c["k"])({setup:function(){return{isDrawerOpen:v["a"]}}});x.render=g;var w=x,y=Object(c["k"])({components:{NavBar:w,AppFooter:d},setup:function(){return{}}});n("69da");y.render=a;var k=y,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),_={class:"px-4"},F=Object(c["h"])("div",{class:"flex justify-center p-8"},[Object(c["h"])("img",{src:j.a,alt:"Headless UI logo",width:"300"})],-1),I=Object(c["h"])("div",{class:"mb-4"},[Object(c["h"])("h1",{class:"font-bold text-2xl "}," Getting started with Vue Headless UI "),Object(c["h"])("div",{class:"text-lg"}," This library is still under active development and is not recommended for production. ")],-1),H=Object(c["i"])(" This library only supports "),z=Object(c["i"])("Vue 3"),C=Object(c["i"])(". "),T={class:"my-8"},E=Object(c["h"])("h1",{class:"font-bold text-2xl "}," The Why ",-1),D=Object(c["h"])("p",null," This library was created with the scope of providing an easy and quick way of creating custom styled components without the hassle of writing your own complex logic or worring about accessibility. ",-1),P=Object(c["i"])(" This library is similar to and inspired by "),q=Object(c["i"])("Headless UI"),A=Object(c["i"])(" but aims for a much bigger scope with a focus on form components. "),V={id:"installation",class:"my-8"},B=Object(c["h"])("h1",{class:"font-bold text-2xl "}," Installation ",-1),U=Object(c["h"])("pre",null,"npm install vue-headless-ui",-1),$=Object(c["h"])("p",null," Or install it with yarn ",-1),L=Object(c["h"])("pre",null,"yarn add vue-headless-ui",-1),M=Object(c["h"])("h1",{class:"font-bold text-2xl "}," Available components ",-1),N={class:"mt-4"},G={class:"bg-white bg-opacity-10     p-1 rounded-2xl"},J={class:"bg-black-900 p-6 rounded-xl flex gap-4 flex-wrap justify-center"},R=Object(c["h"])("div",null," Headless Input ",-1),W=Object(c["h"])("div",null,[Object(c["h"])("div",{class:"text-sm"}," ******** "),Object(c["h"])("div",{class:"bg-white h-9 w-40 rounded shadow-lg text-black-900 flex p-2"}," ***** ")],-1),K=Object(c["h"])("div",null," Headless Form ",-1),Q=Object(c["h"])("div",{class:"flex flex-col gap-1"},[Object(c["h"])("div",{class:"bg-white h-1 w-40 rounded shadow-lg text-black-900 flex p-2"}),Object(c["h"])("div",{class:"bg-white h-1 w-32 rounded shadow-lg text-black-900 flex p-2"}),Object(c["h"])("div",{class:"bg-white h-1 w-36 rounded shadow-lg text-black-900 flex p-2"}),Object(c["h"])("div",{class:"bg-blue-400 h-1 w-12 rounded shadow-lg text-black-900 flex p-2 text-xs"})],-1),X=Object(c["h"])("div",null," Headless Accordion ",-1),Y=Object(c["h"])("div",{class:"flex flex-col gap-1"},[Object(c["h"])("div",{class:"bg-white w-40 rounded shadow-lg text-black-900 flex p-2 justify-end"},[Object(c["h"])("div",{class:"bg-blue-400 h-1 w-2 rounded shadow-lg text-black-900 flex p-2 text-xs"})]),Object(c["h"])("div",{class:"bg-white h-14 w-40 rounded shadow-lg text-black-900 flex p-2"})],-1),Z=Object(c["h"])("div",null," Headless Dialog ",-1),ee=Object(c["h"])("div",{class:"flex flex-col gap-1 relative"},[Object(c["h"])("div",{class:"h-8"}),Object(c["h"])("div",{class:"absolute bg-black-900 w-40 h-28 rounded bg-opacity-40"}),Object(c["h"])("div",{class:"absolute w-40 h-28 flex justify-center items-center"},[Object(c["h"])("div",{class:"bg-white h-20 w-36  rounded shadow-lg text-black-900 flex p-2 justify-end"},[Object(c["h"])("div",{class:"bg-red-400 h-1 w-2 rounded shadow-lg text-black-900 flex p-2 text-xs relative"})])])],-1),te=Object(c["h"])("div",null," Headless Tabs ",-1),ne=Object(c["h"])("div",null,[Object(c["h"])("div",{class:"bg-white shadow-lg w-40 h-24 rounded flex relative"},[Object(c["h"])("div",{class:"flex absolute -top-1 left-1"},[Object(c["h"])("div",{class:"bg-purple-500 border-r rounded h-4  w-10  shadow-lg text-black-900 flex p-2 text-xs relative"}),Object(c["h"])("div",{class:"bg-indigo-500 border-r rounded h-4  w-10  shadow-lg text-black-900 flex p-2 text-xs relative"}),Object(c["h"])("div",{class:"bg-blue-500 h-4 rounded w-10  shadow-lg text-black-900 flex p-2 text-xs relative"})])])],-1),ce=Object(c["h"])("div",null," Headless Button ",-1),re=Object(c["h"])("div",{class:"h-6"},null,-1),oe={class:"bg-indigo-800 shadow-lg w-36 h-12 rounded flex relative"},le={class:"absolute -right-4 -bottom-6 "};function ae(e,t,n,r,o,l){var a=Object(c["F"])("external-link"),s=Object(c["F"])("code-block"),i=Object(c["F"])("component-card"),u=Object(c["F"])("headless-icon");return Object(c["z"])(),Object(c["g"])("div",_,[F,I,Object(c["h"])("div",null,[H,Object(c["j"])(a,{href:"https://github.com/vuejs/vue-next/"},{default:Object(c["S"])((function(){return[z]})),_:1}),C]),Object(c["h"])("div",T,[E,D,Object(c["h"])("p",null,[P,Object(c["j"])(a,{href:"https://headlessui.dev/"},{default:Object(c["S"])((function(){return[q]})),_:1}),A])]),Object(c["h"])("div",V,[B,Object(c["j"])(s,{type:"shell"},{default:Object(c["S"])((function(){return[U]})),_:1}),$,Object(c["j"])(s,{type:"shell"},{default:Object(c["S"])((function(){return[L]})),_:1})]),Object(c["h"])("div",null,[M,Object(c["h"])("div",N,[Object(c["h"])("div",G,[Object(c["h"])("div",J,[Object(c["j"])(i,{class:"bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600",icon:"bi:input-cursor",component:"HeadlessInput"},{drawing:Object(c["S"])((function(){return[W]})),default:Object(c["S"])((function(){return[R]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-purple-400 via-purple-500  to-blue-500",icon:"cil:pen",component:"HeadlessForm"},{drawing:Object(c["S"])((function(){return[Q]})),default:Object(c["S"])((function(){return[K]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-green-400 via-green-500  to-green-600",icon:"carbon:row-expand",component:"HeadlessAccordion"},{drawing:Object(c["S"])((function(){return[Y]})),default:Object(c["S"])((function(){return[X]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-red-600 via-red-500  to-red-400",icon:"carbon:popup",component:"HeadlessDialog"},{drawing:Object(c["S"])((function(){return[ee]})),default:Object(c["S"])((function(){return[Z]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-pink-400   to-yellow-500",icon:"fluent:tab-desktop-copy-20-regular",component:"HeadlessTabs"},{drawing:Object(c["S"])((function(){return[ne]})),default:Object(c["S"])((function(){return[te]})),_:1}),Object(c["j"])(i,{class:"bg-gradient-to-r from-blue-400   to-blue-600",icon:"fluent:cursor-click-20-regular",component:"HeadlessButton"},{drawing:Object(c["S"])((function(){return[Object(c["h"])("div",null,[re,Object(c["h"])("div",oe,[Object(c["h"])("div",le,[Object(c["j"])(u,{name:"fluent:cursor-click-20-regular",width:46,height:46,iconify:""})])])])]})),default:Object(c["S"])((function(){return[ce]})),_:1})])])])])])}var se=n("c0f3"),ie={class:"flex items-center gap-2 font-light"},ue={"aria-hidden":"true",class:"w-40 h-28"};function be(e,t,n,r,o,l){var a=Object(c["F"])("router-link");return Object(c["z"])(),Object(c["e"])(a,{to:"/components/".concat(e.component),class:"shadow-lg p-8 text-xl rounded-2xl w-full max-w-sm flex flex-col justify-center items-center transition-transform gap-2 transform hover:-translate-y-1 select-none"},{default:Object(c["S"])((function(){return[Object(c["h"])("div",ie,[Object(c["E"])(e.$slots,"default")]),Object(c["h"])("div",ue,[Object(c["E"])(e.$slots,"drawing")])]})),_:3},8,["to"])}var de=Object(c["k"])({components:{},props:{icon:{type:String,default:""},component:{type:String,default:""}},setup:function(){return{}}});de.render=be;var fe=de,je={class:"font-bold underline text-blue-500",target:"_blank"};function pe(e,t,n,r,o,l){return Object(c["z"])(),Object(c["g"])("a",je,[Object(c["E"])(e.$slots,"default")])}var Oe=Object(c["k"])({setup:function(){return{}}});Oe.render=pe;var he=Oe,me=Object(c["k"])({components:{ExternalLink:he,CodeBlock:se["a"],ComponentCard:fe},setup:function(){return{}}});me.render=ae;var ge=me,ve={key:0};function xe(e,t,n,r,o,l){return e.component?(Object(c["z"])(),Object(c["g"])("div",ve,[(Object(c["z"])(),Object(c["e"])(Object(c["G"])("".concat(e.component,"Page"))))])):Object(c["f"])("",!0)}var we=Object(c["k"])({props:{component:{type:String,default:null}},setup:function(){return{}}});we.render=xe;var ye=we,ke=[{path:"/",name:"Home",component:ge},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/components/:component",component:ye,props:!0}],Se=Object(S["a"])({history:Object(S["b"])("/vue-headless-ui-docs/"),routes:ke}),_e=Se;Se.beforeEach((function(){window.scrollTo(0,0)}));n("d940"),n("737e");var Fe=n("2a2a"),Ie=n.n(Fe),He=n("8f07"),ze=(n("159b"),n("ac1f"),n("5319"),n("5e04")),Ce={install:function(e){ze.keys().forEach((function(t){var n=ze(t),c=t.replace(/^.*[\\/]/,"").replace(/\.\w+$/,"");e.component(c,n.default||n)}))}};Ie.a.observe(document.body),Object(c["d"])(k).use(_e).use(He["a"]).use(Ce).mount("#app")},d940:function(e,t,n){}});
//# sourceMappingURL=app.62fb899a.js.map