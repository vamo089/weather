(window.webpackJsonpdata=window.webpackJsonpdata||[]).push([[0],{201:function(t,n,e){t.exports=e(365)},365:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"saveCityList",(function(){return I})),e.d(r,"getCitiesList",(function(){return D})),e.d(r,"setWeatherFromList",(function(){return R})),e.d(r,"openHourlySlider",(function(){return k})),e.d(r,"setSlider",(function(){return C})),e.d(r,"sliderWasChange",(function(){return L})),e.d(r,"setCityWeather",(function(){return P})),e.d(r,"saveDailyWeather",(function(){return F})),e.d(r,"initialization",(function(){return N})),e.d(r,"getCityWeatherRequest",(function(){return M})),e.d(r,"getDaysWeather",(function(){return V})),e.d(r,"toMainScreen",(function(){return q}));var i=e(1),a=e.n(i),o=e(14),c=e.n(o),u=e(17),l=e(7),f=e(163),d=e(367),s=e(160);function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(e,!0).forEach((function(n){Object(f.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var b,h=Object(d.a)({SET_CURRENT_CITY:function(t,n){return m({},t,{currentCity:n.payload})},SET_CITY_WEATHER:function(t,n){return m({},t,{weather:n.payload})},SAVE_DAILY_WEATHER:function(t,n){return m({},t,{dailyWeather:n.payload})},SAVE_CITY_LIST:function(t,n){return m({},t,{cityList:n.payload})},SET_SLIDER:function(t,n){return m({},t,{slider:n.payload})}},{weather:{city:null,temp:null,description:null,icon:null},cityList:null,slider:null}),y=Object(l.c)({reducer:h,form:s.a}),g=e(165),v=e.n(g),O=e(166),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,E=Object(l.e)(y,x(Object(l.a)(v.a,O.a))),j=e(13),w=e(366),S=e(44),C=Object(w.a)({SET_SLIDER:function(t){return t}}).setSlider,k=function(t){return function(n,e){var r=e().reducer.dailyWeather[t].hourly;n(C(r)),n(I(null));var i=e().reducer.slider;n(P(i[0]))}},L=function(t,n){return function(e,r){var i=t/n,a=r().reducer.slider;e(P(a[i-1]))}},z=e(167),T=e.n(z),W=function(t){return function(n){var e,r=[];t.forEach((function(t){var n=T.a.unix(t.dt),i=n.day(),a=n.format("dddd"),o=n.format("hha");if(i!==e&&(r.push({day:a,hourly:[]}),e=i),i===e){var c=t.weather[0],u=c.description,l=c.icon,f=c.main;r.filter((function(t){return t.day===a}))[0].hourly.push({dayName:a,main:f,icon:l,hour:o,description:u,temp:t.main.temp.toFixed(1)})}})),n(F(r))}},_=e(161),I=Object(w.a)({SAVE_CITY_LIST:function(t){return t}}).saveCityList,D=function(t){var n=t.target;return function(t,e){var r=n.value;r&&(t(I([])),b?(clearTimeout(b),b=setTimeout((function(){t(A(r))}),1e3)):b=setTimeout((function(){t(A(r))}),1e3)),e().reducer.slider&&t(C(null))}},A=function(t){return function(n){var e=[];fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=".concat(t),{headers:{"x-rapidapi-host":"wft-geo-db.p.rapidapi.com","x-rapidapi-key":"5dfbe0fb22msh73b75a7c5fb4eb4p14268ajsn2c16ebc4028b"}}).then((function(t){return t.json()})).then((function(t){var r=t.data;r.length?r.forEach((function(t){var i=t.city;M(i).then((function(a){var o=r[r.length-1].city===i;a&&(a.countryCode=t.countryCode,e.push(a)),o&&n(I(e))}))})):n(I(null))}))}},R=function(t){return function(n,e){var r=e().reducer.cityList,i=r[t].city;n(Object(S.a)("city","city",i)),n(P(r[t])),n(I(null)),V(i).then((function(t){return n(W(t))}))}},H=Object(w.a)({SET_CITY_WEATHER:function(t){return t},SAVE_DAILY_WEATHER:function(t){return t}}),P=H.setCityWeather,F=H.saveDailyWeather,N=function(){return function(t,n){t(B());setInterval((function(){n().reducer.slider||t(B())}),6e4)}},B=function(){return function(t){Y().then((function(n){var e=n.city;t(Object(S.a)("city","city",e)),M(e).then((function(n){return t(P(n))})),V(e).then((function(n){return t(W(n))}))}))}},Y=function(){return fetch("https://api.ipgeolocation.io/ipgeo?apiKey=1cde62f22bfd4c8387f89ddef6daf3a0&fields=city").then((function(t){return t.json()}))},M=function(t){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987")).then((function(t){return t.json()})).then((function(t){if(200===t.cod){var n=t.main.temp,e=t.weather,r=t.name,i=e[0],a=i.icon,o=i.description,c=i.main;return{temp:n.toFixed(1),icon:a,description:o,main:c,city:r}}}))},V=function(t){return fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987")).then((function(t){return t.json()})).then((function(t){return t.list}))},q=function(){return function(t,n){var e=Object(_.a)("city")(n()).city;M(e).then((function(n){n?(t(P(n)),V(e).then((function(n){return t(W(n))}))):t(B())})),t(C(null))}},U=e(12),J=e(168);function X(){var t=Object(j.a)(["\n\tmargin-top: 2px;\n\tfont-family: 'OpenSansBold',sans-serif;\n\tfont-size: 26px;\n\tsup{\n\t\tfont-weight: 600;\n\t}\n"]);return X=function(){return t},t}function G(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tp{\n\t\tmargin: 0 5px 0 0;\n\t\tfont-size: 24px;\n\t}\n\ti{\n\t\tfont-size: 30px;\n\t}\n"]);return G=function(){return t},t}function K(){var t=Object(j.a)(["\n\twidth: 100%;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n\tfont-size: 20px;\n\ttext-align: center;\n\tcursor: pointer;\n\t&:not(:last-child){\n\t\tborder-right: 2px solid rgba(255, 255, 255, 0.5);\n\t}\n"]);return K=function(){return t},t}function Q(){var t=Object(j.a)(["\n    display: flex;\n    width: 100%;\n"]);return Q=function(){return t},t}var Z=U.default.div(Q()),$=U.default.div(K()),tt=U.default.div(G()),nt=U.default.div(X()),et=Object(u.b)((function(t){return{dailyWeather:t.reducer.dailyWeather}}),(function(t){return{openHourlySlider:Object(l.b)(r,t).openHourlySlider}}))((function(t){var n=t.dailyWeather,e=t.openHourlySlider;return a.a.createElement(Z,null,n&&n.map((function(t,n){var r=t.day,i=t.hourly.filter((function(t){return"12am"===t.hour||"03am"}))[0],o=i.temp,c=i.icon,u=i.description;return a.a.createElement($,{key:n,title:u,onClick:function(){e(n)}},a.a.createElement(tt,null,a.a.createElement("p",null,r.slice(0,3)),a.a.createElement("i",{className:"owi owi-".concat(c)}," ")),a.a.createElement(nt,null,o,a.a.createElement("sup",null,"\u2103")))})))})),rt=e(174);e(325);function it(){var t=Object(j.a)(["\n    display: flex;\n    width: ",";\n    padding: 50px;\n    margin: auto;\n    .rc-slider-mark{\n    \tleft: -33px;\n    }\n"]);return it=function(){return t},t}var at=U.default.div(it(),(function(t){return"".concat(t.width,"0%")})),ot={backgroundColor:"rgba(0, 0, 0, 0.5)"},ct={backgroundColor:"#000"},ut={border:"2px solid #000"},lt={color:"#000",fontFamily:"OpenSans,sans-serif",fontSize:"23px",strong:{fontSize:"16px",marginLeft:"2px"}},ft=Object(u.b)((function(t){return{slider:t.reducer.slider}}),(function(t){var n=Object(l.b)(r,t);return{openHourlySlider:n.openHourlySlider,sliderWasChange:n.sliderWasChange}}))((function(t){for(var n,e=t.slider,r=t.sliderWasChange,i=e.length,o={},c=0;c<i;c++){n=100/i;var u=e[c].hour;o[n*(c+1)]={style:lt,label:a.a.createElement("span",null,parseFloat(u),a.a.createElement("strong",{style:lt.strong},u.split(parseFloat(u))[1])," ")}}return a.a.createElement(at,{width:i},a.a.createElement(rt.a,{handleStyle:ut,dotStyle:ut,trackStyle:ct,railStyle:ot,marks:o,step:null,onAfterChange:function(t){r(t,n)}}))})),dt=(e(326),e(158)),st=e(159);function pt(){var t=Object(j.a)(["\n\ttext-align: center;\n\tfont-size: 28px;\n\ti{\n\t\tanimation: rotate 2s linear infinite;\n\t}\n\t@keyframes rotate {\n\t\t0% { transform: rotate(0deg); }\n\t\t100% { transform: rotate(90deg); }\n\t};\n"]);return pt=function(){return t},t}var mt=U.default.div(pt()),bt=function(){return a.a.createElement(mt,null,a.a.createElement("i",{className:"owi owi-01d"}," "))};function ht(){var t=Object(j.a)(["\n\tfont-size: 20px;\n\ttext-align: center;\n\tpadding: 5px;\n\tcursor: pointer;\n\tdisplay: block;\n\t&:first-child{\n\t\tborder-top: 2px solid rgba(255, 255, 255, 0.5);\n\t}\n\t&:hover{\n\t\tbackground: #ccc;\n\t}\n"]);return ht=function(){return t},t}function yt(){var t=Object(j.a)(["\n\ttop: 66px;\n\tz-index: 1;\n\tmargin: 0;\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n"]);return yt=function(){return t},t}function gt(){var t=Object(j.a)(["\n\tfont-size: 36px;\n\ttext-align: center;\n    border: none;\n    background: transparent;\n    line-height: normal;\n    &:focus{\n    \toutline: none;\n    }\n"]);return gt=function(){return t},t}function vt(){var t=Object(j.a)(["\n\tmargin: auto;\n\tposition: relative;\n"]);return vt=function(){return t},t}var Ot=U.default.div(vt()),xt=Object(U.default)(dt.a)(gt()),Et=U.default.ul(yt()),jt=U.default.li(ht()),wt=function(t){var n=t.getCitiesList,e=t.cityList,r=t.setWeatherFromList;return a.a.createElement(Ot,null,a.a.createElement(xt,{onChange:n,placeholder:"city",name:"city",component:"input",type:"text",autoComplete:"off"}),a.a.createElement(Et,null,e&&!e.length&&a.a.createElement(bt,null),e&&e.map((function(t,n){var e=t.city,i=t.countryCode;return a.a.createElement(jt,{key:n,onClick:function(){r(n)}},e,", ",i)}))))};wt=Object(st.a)({form:"city"})(wt);var St=Object(u.b)((function(t){return{cityList:t.reducer.cityList}}),(function(t){var n=Object(l.b)(r,t);return{getCitiesList:n.getCitiesList,setWeatherFromList:n.setWeatherFromList}}))(wt);function Ct(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content:space-between;\n\tborder-top: 2px solid rgba(255, 255, 255, 0.5);\n\tmargin-right: 10px;\n\tmargin-left: 10px;\n"]);return Ct=function(){return t},t}function kt(){var t=Object(j.a)(["\n\talign-self: center;\n\tfont-size: 35px;\n\twhite-space: nowrap;\n\tfont-family: 'OpenSansBold',sans-serif;\n\twidth: 85px;  \n  sup{\n\ttop: -1em;\n\tleft: -0.5em;\n\tfont-size: 14px;\n\tfont-weight: 600;\n  }\n"]);return kt=function(){return t},t}function Lt(){var t=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\tmargin-right: 5px;    \n    color: #000;\n    font-size: 27px;\n    text-align: center;\n\tp{\n\t\tmargin: 0;\n\t}\n\tp:nth-child(1){\n\t\tfont-family: 'OpenSansBold',sans-serif;\n\t\t&::first-letter{\n\t\t\ttext-transform: uppercase;\n\t\t}\n\t}\n\tp:nth-child(2){\n\t\tfont-family: 'OpenSans',sans-serif;\n\t}\n"]);return Lt=function(){return t},t}function zt(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n\tpadding-left: 20px;\n\tpadding-right: 12px;\n\tborder-right: 2px solid rgba(255, 255, 255, 0.5);\n\tcursor: ",";\n\ti{\n\t\tfont-size: 60px;\n\t\tmargin-right: 5px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"]);return zt=function(){return t},t}function Tt(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n"]);return Tt=function(){return t},t}function Wt(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\tborder-radius: 3px;\n\tbackground:rgba(255, 255, 255, 0.5);\n\tborder: 3px solid rgba(255, 255, 255, 0.5);\n"]);return Wt=function(){return t},t}var _t=U.default.div(Wt()),It=U.default.div(Tt()),Dt=U.default.div(zt(),(function(t){return t.slider?"pointer":"auto"})),At=U.default.div(Lt()),Rt=U.default.div(kt()),Ht=U.default.div(Ct()),Pt=Object(u.b)((function(t){return{weather:t.reducer.weather,slider:t.reducer.slider}}),(function(t){return{toMainScreen:Object(l.b)(r,t).toMainScreen}}))((function(t){var n=t.weather,e=t.slider,r=t.toMainScreen;return a.a.createElement(_t,null,a.a.createElement(It,null,a.a.createElement(Dt,{slider:e,onClick:e&&r},a.a.createElement(At,{title:n.description},a.a.createElement("p",null,n.main),a.a.createElement("p",null,n.dayName||"Today")),a.a.createElement("i",{className:"owi owi-".concat(n.icon)}," "),a.a.createElement(Rt,null,n.temp," ",a.a.createElement("sup",null,"\u2103"))),a.a.createElement(St,null)),a.a.createElement(Ht,null,e?a.a.createElement(ft,null):a.a.createElement(et,null)))}));function Ft(){var t=Object(j.a)(['\n    width: 66%;\n    margin: auto;\n    min-height: 100vh;\n    background: url("./images/background.jpg") no-repeat;\n    background-size: cover;\n    filter: brightness(0.6);\n    border-right: solid rgba(255, 255, 255, 0.5);\n    border-left: solid rgba(255, 255, 255, 0.5);\n']);return Ft=function(){return t},t}function Nt(){var t=Object(j.a)(['\n    position: absolute;\n    width: 100%;\n    min-height: 100vh;\n    margin: auto;\n    background: url("./images/background.jpg") no-repeat;\n    background-size: cover;\n    filter:contrast(0.7);\n']);return Nt=function(){return t},t}function Bt(){var t=Object(j.a)(["\n  color: #fff;\n  font-size: 70px;\n  text-align: center;\n  font-family: 'OpenSansBold',sans-serif;\n"]);return Bt=function(){return t},t}function Yt(){var t=Object(j.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  font-family: 'OpenSans',sans-serif;\n"]);return Yt=function(){return t},t}function Mt(){var t=Object(j.a)(["\n  body{\n  \t@font-face {\n\t\tsrc: url('./fonts/OpenSans-Regular.ttf');\n\t\tfont-family: 'OpenSans';\n\t}\n    @font-face {\n\t\tsrc: url('./fonts/OpenSans-Bold.ttf');\n\t\tfont-family: 'OpenSansBold';\n    }\n  }\n"]);return Mt=function(){return t},t}var Vt=Object(U.createGlobalStyle)(Mt()),qt=U.default.div(Yt()),Ut=U.default.h1(Bt()),Jt=U.default.div(Nt()),Xt=U.default.div(Ft());var Gt=Object(u.b)(null,(function(t){return{initialization:Object(l.b)(r,t).initialization}}))((function(t){var n=t.initialization;return Object(i.useEffect)((function(){n()}),[n]),a.a.createElement("div",null,a.a.createElement(J.Normalize,null),a.a.createElement(Vt,null),a.a.createElement(Jt,null),a.a.createElement(Xt,null),a.a.createElement(qt,null,a.a.createElement(Ut,null,"Bundle Up!"),a.a.createElement(Pt,null)))}));c.a.render(a.a.createElement(u.a,{store:E},a.a.createElement(Gt,null)),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.78a5b194.chunk.js.map