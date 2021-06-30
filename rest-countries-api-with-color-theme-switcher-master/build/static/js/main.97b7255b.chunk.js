(this["webpackJsonprest-countries-api-with-color-theme-switcher-master"]=this["webpackJsonprest-countries-api-with-color-theme-switcher-master"]||[]).push([[0],{56:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var r,a,i,c,o,s,l,d,p,u,b,h,x,f=t(0),m=t(17),j=t.n(m),g=(t(56),t(5)),k=t(12),O=t(6),w=t(4),v=t(48),y=t(49),T=Object(f.createContext)(),C=t(1),N=function(){var e=Object(f.useContext)(T),n=e.toggleDarkTheme,t=e.darkTheme;return Object(C.jsx)(E,{darkTheme:t,children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{children:Object(C.jsx)(k.b,{to:"/",children:Object(C.jsx)("h2",{children:"Where in the world?"})})}),Object(C.jsx)("div",{children:Object(C.jsxs)("span",{onClick:n,tabIndex:"0",children:[t?Object(C.jsx)(S,{}):Object(C.jsx)(R,{}),Object(C.jsx)("p",{children:"Dark Mode"})]})})]})})},E=w.a.header(r||(r=Object(g.a)(["\n  height: 80px;\n  display: flex;\n  background-color: ",";\n  box-shadow: ",";\n  .container {\n    max-width: 90%;\n    width: 1280px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    a {\n      text-decoration: none;\n      color: ",";\n      outline: none;\n      h2 {\n        @media (max-width: 450px) {\n          font-size: 1.2rem !important;\n        }\n        @media (max-width: 370px) {\n          font-size: 1rem !important;\n        }\n      }\n      &:focus {\n        transform: scale(1.02);\n        filter: brightness(0.9);\n      }\n      &:hover {\n        filter: brightness(0.85);\n      }\n    }\n    span {\n      color: ",";\n      cursor: pointer;\n      outline: none;\n\n      &:focus {\n        transform: scale(1.02);\n        filter: brightness(0.9);\n      }\n      &:hover {\n        filter: brightness(0.85);\n      }\n    }\n    p {\n      font-size: 1rem;\n      font-weight: 600;\n      margin-left: 0.5rem;\n      display: inline-block;\n      transform: translateY(1px);\n      @media (max-width: 370px) {\n        font-size: 13px !important;\n      }\n    }\n  }\n"])),(function(e){return e.darkTheme?"#283640":"white"}),(function(e){return e.darkTheme?"inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63":"2px 2px 10px #1e272d63"}),(function(e){return e.darkTheme?"white":"black"}),(function(e){return e.darkTheme?"white":"black"})),R=Object(w.a)(v.a)(a||(a=Object(g.a)(["\n  color: black;\n  width: 14px;\n"]))),S=Object(w.a)(y.a)(i||(i=Object(g.a)(["\n  color: white;\n  width: 14px;\n"]))),L=t(24),D=Object(f.createContext)(),I=function(e){e.handleSearch;var n=Object(f.useContext)(T).darkTheme,t=Object(f.useContext)(D),r=t.searchTerm,a=t.selectValue,i=t.filterCountries,c=t.filterSearchCountries;return Object(C.jsx)(_,{darkTheme:n,children:Object(C.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)(z,{darkTheme:n}),Object(C.jsx)("input",{type:"text",value:r,placeholder:"Search for a country...",onChange:function(e){return a?i(a,e.target.value):c(e.target.value)}})]})})},_=w.a.div(c||(c=Object(g.a)(["\n  width: 480px;\n  margin-right: 20px;\n  @media (max-width: 690px) {\n    width: 100%;\n    margin-right: 0;\n  }\n  form {\n    position: relative;\n    width: 100%;\n\n    input {\n      background-color: ",";\n      border-radius: 5px;\n      border: none;\n      font-size: 14px;\n      color: ",";\n      padding: 20px 20px 20px 80px;\n      width: 100%;\n      outline: none;\n      box-shadow: ",";\n      @media (max-width: 690px) {\n        width: 100%;\n        margin-right: 0;\n      }\n      ::placeholder {\n        color: ",";\n        font-size: 13px;\n      }\n      &:hover {\n        background-color: ",";\n        box-shadow: 0px 0px 2px 2px #0000002b;\n      }\n      &:focus {\n        background-color: ",";\n        box-shadow: 0px 0px 2px 2px #0000002b;\n      }\n    }\n  }\n"])),(function(e){return e.darkTheme?"#283640":"white"}),(function(e){return e.darkTheme?"white":"black"}),(function(e){return e.darkTheme?"inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63":"2px 2px 10px #1e272d63"}),(function(e){return e.darkTheme?"white":"black"}),(function(e){return e.darkTheme?"#272f34":"white"}),(function(e){return e.darkTheme?"#272f34":"white"})),z=Object(w.a)(L.a)(o||(o=Object(g.a)(["\n  color: ",";\n  width: 22px;\n  font-weight: bold !important;\n  position: absolute;\n  top: 50%;\n  left: 40px;\n  transform: translate(-50%, -50%);\n"])),(function(e){return e.darkTheme?"white":"black"})),P=t(3),F=t(51),V=function(e){e.handleSelectChange;var n=Object(f.useContext)(T).darkTheme,t=Object(f.useContext)(D),r=t.filterSelectCountries,a=(t.selectValue,t.searchTerm),i=t.filterCountries,c="",o="",s="";n?(c="white",o="#283640",s="#1c2a32"):(c="black",o="white",s="#e0e0e0");var l={option:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{backgroundColor:n.isFocused?n.selectProps.backgroundHover:n.selectProps.backgroundColor,borderColor:"#283640",color:n.selectProps.color,cursor:"pointer",display:"flex",fontSize:"13px",padding:"12px 32px",alignItems:"center","&:active":{backgroundColor:n.selectProps.backgroundColor},"&:hover":{backgroundColor:n.selectProps.backgroundHover},"&:nth-of-type(5)":{borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"},"&:nth-of-type(1)":{borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}})},menu:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{backgroundColor:"transparent"})},menuList:function(){return{border:"0",borderRadius:"5px",backgroundColor:"transparent"}},placeholder:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{color:n.selectProps.color})},dropdownIndicator:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{color:n.selectProps.color})},singleValue:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{color:n.selectProps.color})},valueContainer:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{color:n.selectProps.color})},control:function(e,n){return Object(P.a)(Object(P.a)({},e),{},{width:210,height:56,fontSize:"13px",cursor:"pointer",backgroundColor:n.selectProps.backgroundColor,color:n.selectProps.color,display:"flex",borderRadius:"5px",paddingLeft:"20px",paddingRight:"20px",outline:"none",border:"none",boxShadow:n.isFocused?"inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63":"2px 2px 10px #1e272d63"})}};return Object(C.jsx)(A,{children:Object(C.jsx)(F.a,{color:c,backgroundColor:o,backgroundHover:s,styles:l,options:[{value:"africa",label:"Africa"},{value:"america",label:"America"},{value:"asia",label:"Asia"},{value:"europe",label:"Europe"},{value:"oceania",label:"Oceania"}],isClearable:!1,isSearchable:!1,placeholder:"Filter by Region",components:{IndicatorSeparator:function(){return null}},onChange:function(e){return a?i(e.value,a):r(e.value)}})})},A=w.a.div(s||(s=Object(g.a)(["\n  @media (max-width: 690px) {\n    margin-top: 30px;\n  }\n"]))),B=function(e){var n,t=e.name,r=e.population,a=e.region,i=e.capital,c=e.flag,o=e.code,s=Object(f.useContext)(T).darkTheme;return Object(C.jsxs)(U,{darkTheme:s,children:[Object(C.jsxs)("div",{className:"card-details",children:[Object(C.jsx)(G,{darkTheme:s,className:"card-details__icon"}),Object(C.jsx)("p",{children:"details"})]}),Object(C.jsxs)(k.b,{to:"/detail/".concat(o),className:"link",children:[Object(C.jsx)("div",{className:"flag-container",children:Object(C.jsx)("img",{src:c,alt:t})}),Object(C.jsxs)("div",{className:"details",children:[Object(C.jsx)("h3",{children:t}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Population: "}),Object(C.jsx)("span",{className:"info",children:(n=r,n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Region: "}),Object(C.jsx)("span",{className:"info",children:a})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Capital: "}),Object(C.jsx)("span",{className:"info",children:i})]})]})]})]})},U=w.a.div(l||(l=Object(g.a)(["\n  background-color: ",";\n  border-radius: 5px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.5s ease;\n  position: relative;\n  box-shadow: ",';\n  outline: none;\n  .card-details {\n    p {\n      position: absolute;\n      font-size: 13px;\n      display: block;\n      text-align: center;\n      font-weight: 800;\n      font-family: "Nunito Sans", sans-serif;\n      position: absolute;\n      margin-top: 13px;\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      color: white;\n      opacity: 0;\n      display: none;\n      transition: opacity 200ms linear;\n    }\n  }\n  &::after {\n    content: "";\n    width: 100%;\n    height: 0%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #000000d1;\n    position: absolute;\n    pointer-events: none;\n  }\n  a {\n    text-decoration: none;\n    outline: none;\n    border: none;\n  }\n  &:hover {\n    &::after {\n      height: 100%;\n    }\n    p {\n      opacity: 1;\n      z-index: 10;\n      top: 56%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      display: block;\n    }\n    .card-details__icon {\n      top: 45% !important;\n    }\n  }\n  &:focus-within {\n    transform: scale(1.03);\n  }\n\n  .details {\n    height: 176px;\n    padding: 0 25px;\n    color: ',";\n    font-size: 14px;\n    div {\n      margin-bottom: 5px;\n      span {\n        &:nth-of-type(1) {\n          font-weight: 600;\n        }\n      }\n    }\n    h3 {\n      padding-top: 28px;\n      padding-bottom: 15px;\n    }\n  }\n  .flag-container {\n    height: 160px;\n    width: 100%;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n"])),(function(e){return e.darkTheme?"#283640":"white"}),(function(e){return e.darkTheme?" 2px 2px 10px #1e272d63":"2px 2px 10px #1e272d63"}),(function(e){return e.darkTheme?"white":"black"})),G=Object(w.a)(L.a)(d||(d=Object(g.a)(["\n  color: ",";\n  width: 60px;\n  font-weight: bold !important;\n  position: absolute;\n  top: 50%;\n  left: 40px;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  font-size: 2.5rem;\n  color: white;\n  z-index: 2;\n  top: 120%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 300ms ease-in-out;\n  pointer-events: none;\n"])),(function(e){return e.darkTheme?"white":"black"})),H=function(){var e=Object(f.useContext)(D).filteredCountries;return Object(C.jsx)("div",{children:Object(C.jsx)(J,{children:e?e.map((function(e){return Object(C.jsx)(B,{name:e.name,population:e.population,region:e.region,capital:e.capital,flag:e.flag,code:e.alpha3Code},e.alpha2Code)})):"Sorry, no results."})})},J=w.a.div(p||(p=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(264px, 264px));\n  justify-content: space-evenly;\n  grid-gap: 73px;\n"]))),M=function(){return Object(C.jsxs)("div",{children:[Object(C.jsxs)(W,{children:[Object(C.jsx)(I,{}),Object(C.jsx)(V,{})]}),Object(C.jsx)(H,{})]})},W=w.a.div(u||(u=Object(g.a)(["\n  display: flex;\n  padding: 48px 0;\n  justify-content: space-between;\n  @media (max-width: 690px) {\n    flex-direction: column;\n  }\n"]))),Y=t(26),K=t.n(Y),q=t(50),Q=function(){return Object(C.jsxs)(X,{class:"sk-fading-circle",children:[Object(C.jsx)("div",{class:"sk-circle1 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle2 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle3 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle4 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle5 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle6 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle7 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle8 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle9 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle10 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle11 sk-circle"}),Object(C.jsx)("div",{class:"sk-circle12 sk-circle"})]})},X=w.a.div(b||(b=Object(g.a)(['\n  .sk-fading-circle {\n    margin: 100px auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n  }\n\n  .sk-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n  .sk-fading-circle .sk-circle:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  }\n  .sk-fading-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n    -ms-transform: rotate(30deg);\n    transform: rotate(30deg);\n  }\n  .sk-fading-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n  }\n  .sk-fading-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n  .sk-fading-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n    -ms-transform: rotate(120deg);\n    transform: rotate(120deg);\n  }\n  .sk-fading-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n    -ms-transform: rotate(150deg);\n    transform: rotate(150deg);\n  }\n  .sk-fading-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  .sk-fading-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n    -ms-transform: rotate(210deg);\n    transform: rotate(210deg);\n  }\n  .sk-fading-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n    -ms-transform: rotate(240deg);\n    transform: rotate(240deg);\n  }\n  .sk-fading-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n  .sk-fading-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n    -ms-transform: rotate(300deg);\n    transform: rotate(300deg);\n  }\n  .sk-fading-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n    -ms-transform: rotate(330deg);\n    transform: rotate(330deg);\n  }\n  .sk-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n  }\n  .sk-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n  }\n  .sk-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n  }\n  .sk-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n  }\n  .sk-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n  }\n  .sk-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n  }\n  .sk-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n  }\n  .sk-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n  }\n  .sk-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n  }\n  .sk-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n  }\n  .sk-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n  }\n\n  @-webkit-keyframes sk-circleFadeDelay {\n    0%,\n    39%,\n    100% {\n      opacity: 0;\n    }\n    40% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes sk-circleFadeDelay {\n    0%,\n    39%,\n    100% {\n      opacity: 0;\n    }\n    40% {\n      opacity: 1;\n    }\n  }\n'])));K.a.registerLocale(t(76));var Z,$,ee=function(e){var n,t=e.match,r=Object(f.useContext)(D),a=Object(f.useContext)(T).darkTheme,i=r.getCountrieDetail,c=r.countrieDetail,o=r.clearFilteredCountries,s=r.clearCountrieDetail;return Object(f.useEffect)((function(){i(t.params.id),console.log(t.params.id)}),[]),Object(f.useEffect)((function(){i(t.params.id)}),[t.params.id]),Object(C.jsxs)(ne,{darkTheme:a,children:[Object(C.jsxs)("div",{className:"btn-container",children:[Object(C.jsx)(te,{style:{position:"absolute"},darkTheme:a}),Object(C.jsx)(k.b,{className:"btn-back",to:"/",onClick:function(){o(),s()},children:"Back"})]}),c?Object(C.jsxs)("div",{className:"details",children:[Object(C.jsx)("div",{className:"details-flag",children:Object(C.jsx)("img",{src:c.flag,alt:c.name})}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsx)("h2",{children:c.name}),Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Native name: "}),Object(C.jsx)("span",{children:c.nativeName})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Population: "}),Object(C.jsx)("span",{children:c.population?(n=c.population,n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")):""})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Region: "}),Object(C.jsx)("span",{children:c.region})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Sub Region: "}),Object(C.jsx)("span",{children:c.subregion})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Capital: "}),Object(C.jsx)("span",{children:c.capital})]})]}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Top Level Domain: "}),Object(C.jsx)("span",{children:c.topLevelDomain})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Currencies: "}),c.currencies?c.currencies[0].name:""]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Languages: "}),Object(C.jsx)("span",{children:c.languages?c.languages.map((function(e){return Object(C.jsxs)("span",{style:{fontWeight:"400"},children:[" ",e.name,c.languages[c.languages.length-1]===e?"":","]},e.nativeName)})):""})]})]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Border Countries: "}),c.borders?c.borders.map((function(e){return K.a.getName(e,"en",{select:"official"})?Object(C.jsx)(k.b,{to:"/detail/".concat(e),"aria-label":"Countrie",children:K.a.getName(e,"en",{select:"official"})},e):""})):"",c.borders&&c.borders.length<1?"None":""]})]}),Object(C.jsx)("div",{})]}):Object(C.jsx)(Q,{})]})},ne=w.a.div(h||(h=Object(g.a)(["\n  .btn-container {\n    width: 160px;\n    position: relative;\n  }\n  .btn-back {\n    margin: 8vh 0;\n    background-color: ",";\n    border: none;\n    color: ",";\n    text-align: center;\n    display: inline;\n    padding: 0.4rem 5rem;\n    padding-left: 4.5rem;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    outline: none;\n    text-decoration: none;\n    border: 1px solid transparent;\n    box-shadow: ",";\n\n    &:hover {\n      background-color: ",";\n      box-shadow: 0px 0px 2px 2px #0000002b;\n    }\n  }\n  .details {\n    display: flex;\n    justify-content: space-between;\n    @media (max-width: 1024px) {\n      flex-direction: column;\n      padding-bottom: 100px;\n    }\n  }\n\n  .details-flag {\n    width: 45%;\n    @media (max-width: 1170px) {\n      width: 48%;\n    }\n    @media (max-width: 1024px) {\n      width: 80%;\n      margin: 0 auto;\n      margin-bottom: 40px;\n    }\n    @media (max-width: 640px) {\n      width: 100%;\n    }\n    img {\n      width: 100%;\n    }\n  }\n\n  .information {\n    width: 45%;\n    @media (max-width: 1170px) {\n      width: 48%;\n    }\n    @media (max-width: 1024px) {\n      width: 80%;\n      margin: 0 auto;\n    }\n    @media (max-width: 640px) {\n      width: 100%;\n    }\n    margin-left: auto;\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    a {\n      margin-right: 4px;\n      background-color: ",";\n      padding: 4px 20px;\n      font-size: 14px;\n      border-radius: 3px;\n      cursor: pointer;\n      margin: 5px;\n      box-shadow: ",";\n\n      display: inline-block;\n      text-decoration: none;\n      color: ",";\n      &:hover {\n        background-color: ",";\n        box-shadow: 0px 0px 2px 2px #0000002b;\n      }\n    }\n    h2 {\n      color: ",";\n      margin-bottom: 22px;\n    }\n    div {\n      margin-bottom: 7px;\n      span {\n        font-size: 14px;\n        &:nth-of-type(1) {\n          font-weight: 800;\n          color: ",";\n        }\n      }\n    }\n  }\n  .flex {\n    display: flex;\n    margin-bottom: 30px !important;\n    @media (max-width: 640px) {\n      flex-direction: column;\n    }\n    div {\n      &:nth-of-type(1) {\n        flex: 1;\n      }\n    }\n  }\n"])),(function(e){return e.darkTheme?"#283640":"white"}),(function(e){return e.darkTheme?"white":"#283640"}),(function(e){return e.darkTheme?"inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63":"2px 2px 10px #1e272d63"}),(function(e){return e.darkTheme?"#272f34":"white"}),(function(e){return e.darkTheme?"#ece3e3eb":"black"}),(function(e){return e.darkTheme?"#283640":"white"}),(function(e){return e.darkTheme?"inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63":"2px 2px 10px #1e272d63"}),(function(e){return e.darkTheme?"white":"black"}),(function(e){return e.darkTheme?"#272f34":"white"}),(function(e){return e.darkTheme?"white":"black"}),(function(e){return e.darkTheme?"#ffffffeb":"black"})),te=Object(w.a)(q.a)(x||(x=Object(g.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 31px;\n  width: 22px;\n  color: ",";\n  pointer-events: none;\n"])),(function(e){return e.darkTheme?"white":"black"})),re=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"This is the about page"})})},ae=function(){var e=Object(f.useContext)(T).darkTheme;return Object(C.jsx)(k.a,{children:Object(C.jsxs)(ie,{darkTheme:e,children:[Object(C.jsx)(N,{}),Object(C.jsx)(ce,{children:Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{path:"/",exact:!0,component:M}),Object(C.jsx)(O.a,{path:"/detail/:id",component:ee}),Object(C.jsx)(O.a,{path:"/about",component:re})]})})]})})},ie=w.a.main(Z||(Z=Object(g.a)(["\n  background: ",";\n"])),(function(e){return e.darkTheme?"#1c2a32":"#fafafa"})),ce=w.a.div($||($=Object(g.a)(["\n  min-height: calc(100vh - 80px);\n  max-width: 90%;\n  width: 1280px;\n  margin: 0 auto;\n}\n"]))),oe=t(21),se=t.n(oe),le=t(34),de=t(25),pe=t(35),ue=t.n(pe),be="GET_COUNTRIES",he="SET_LOADING",xe="GET_COUNTRIE_DETAIL",fe="CLEAR_COUNTRIE_DETAIL",me="FILTER_SEARCH_COUNTRIES",je="FILTER_SELECT_COUNTRIES",ge="FILTER_COUNTRIES",ke="CLEAR_FILTERED_COUNTRIES",Oe="TOGGLE_DARK_THEME",we=function(e,n){switch(n.type){case he:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case be:return Object(P.a)(Object(P.a)({},e),{},{countries:n.payload,filteredCountries:n.payload,loading:!1});case xe:return Object(P.a)(Object(P.a)({},e),{},{countrieDetail:n.payload,loading:!1});case fe:return Object(P.a)(Object(P.a)({},e),{},{countrieDetail:{}});case ge:return Object(P.a)(Object(P.a)({},e),{},{searchTerm:n.payload.searchTerm,selectValue:n.payload.selectValue,filteredCountries:e.countries.filter((function(e){return e.name.toLowerCase().includes(n.payload.searchTerm.toLowerCase().trim())})).filter((function(e){return e.region.toLowerCase().includes(n.payload.selectValue.toLowerCase().trim())}))});case me:return Object(P.a)(Object(P.a)({},e),{},{searchTerm:n.payload,filteredCountries:e.countries.filter((function(e){return e.name.toLowerCase().includes(n.payload.toLowerCase().trim())}))});case je:return Object(P.a)(Object(P.a)({},e),{},{selectValue:n.payload,filteredCountries:e.countries.filter((function(e){return e.region.toLowerCase().includes(n.payload.toLowerCase())}))});case ke:return Object(P.a)(Object(P.a)({},e),{},{filteredCountries:e.countries});default:return e}},ve=function(e){var n=Object(f.useReducer)(we,{countries:[],countrieDetail:{},loading:!1,filteredCountries:[],searchTerm:"",selectValue:null}),t=Object(de.a)(n,2),r=t[0],a=t[1],i=function(){var e=Object(le.a)(se.a.mark((function e(){var n,t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:he}),e.next=3,ue.a.get("https://restcountries.eu/rest/v2/all");case 3:n=e.sent,t=n.data,a({type:be,payload:t});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(f.useEffect)((function(){i()}),[]);var c=function(){var e=Object(le.a)(se.a.mark((function e(n){var t,r;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:he}),e.next=3,ue.a.get("https://restcountries.eu/rest/v2/alpha/".concat(n));case 3:t=e.sent,r=t.data,a({type:xe,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(C.jsx)(D.Provider,{value:{countries:r.countries,countrieDetail:r.countrieDetail,loading:r.loading,searchTerm:r.searchTerm,selectValue:r.selectValue,filteredCountries:r.filteredCountries,getCountries:i,getCountrieDetail:c,clearCountrieDetail:function(){a({type:fe})},filterSelectCountries:function(e){a({type:je,payload:e})},filterSearchCountries:function(e){a({type:me,payload:e})},filterCountries:function(e,n){console.log("selectValue: ",e,"searchTerm: ",n),a({type:ge,payload:{selectValue:e,searchTerm:n}})},clearFilteredCountries:function(){a({type:ke})}},children:e.children})},ye=function(e,n){switch(n.type){case Oe:return{darkTheme:!e.darkTheme};default:return e}},Te=function(e){var n=Object(f.useReducer)(ye,{darkTheme:!0},(function(){var e=localStorage.getItem("darkTheme");return e?JSON.parse(e):[]})),t=Object(de.a)(n,2),r=t[0],a=t[1];Object(f.useEffect)((function(){localStorage.setItem("darkTheme",JSON.stringify(r))}),[r]);return Object(C.jsx)(T.Provider,{value:{darkTheme:r.darkTheme,toggleDarkTheme:function(){a({type:Oe})}},children:e.children})};j.a.render(Object(C.jsx)(ve,{children:Object(C.jsx)(Te,{children:Object(C.jsx)(ae,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.97b7255b.chunk.js.map