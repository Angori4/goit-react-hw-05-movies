"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{9253:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,a,c,o,s,i,u,p,l,d,x=r(1413),f=r(9439),v=r(3754),h=r(7689),g=r(2791),m=r(7793),Z=r(1213),j=r(168),w=r(1087),b=r(6444),k=(0,b.ZP)(w.rU)(t||(t=(0,j.Z)(["\n text-decoration: none;\n border: 1px solid orangered;\n  border-radius: 4px;\n  padding:7px 25px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  color: black;\n  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;\ntransition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  \n   :hover {\n    color: orangered;\n    border-color: black;\n  }\n \n"]))),y=b.ZP.div(a||(a=(0,j.Z)(["\n  margin: 25px 0px; \n"]))),_=r(184),P=function(n){var e=n.to;return(0,_.jsx)(y,{children:(0,_.jsxs)(k,{to:e,children:[" ",(0,_.jsx)(Z.gd4,{size:16})," Go back"," "]})})},U=b.ZP.div(c||(c=(0,j.Z)(["\n  max-width: 1200px;\n"]))),S=b.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n  gap: 50px;\n"]))),z=b.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),q=b.ZP.p(i||(i=(0,j.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n"]))),C=b.ZP.span(u||(u=(0,j.Z)(["\n  font-size: 18px;\n"]))),F=b.ZP.ul(p||(p=(0,j.Z)(["\n  list-style-type: square;\n"]))),G=b.ZP.li(l||(l=(0,j.Z)(["\n   margin-top: 20px;\n   padding-left: 15px;\n"]))),H=(0,b.ZP)(w.rU)(d||(d=(0,j.Z)(["\n  font-size: 20px;\n  /* text-decoration: none; */\n  color: black;\n  &:hover {\n    border-radius: 5px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n"]))),I=function(){var n,e,r=(0,g.useState)({}),t=(0,f.Z)(r,2),a=t[0],c=t[1],o=(0,h.UO)().movieId,s=(0,h.TH)(),i=null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movie";(0,g.useEffect)((function(){(0,v.Y5)(o).then((function(n){c(n)}))}),[o]);var u=a.poster_path,p=a.title,l=a.vote_average,d=a.overview,Z=a.genres;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(P,{to:i}),(0,_.jsxs)(U,{children:[(0,_.jsxs)(S,{children:[u?(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(u),alt:p,width:300}):(0,_.jsx)(m.a,{}),(0,_.jsxs)(z,{children:[(0,_.jsx)("h1",{children:p}),(0,_.jsxs)(q,{children:["User Score: ",(0,_.jsx)(C,{children:null===l||void 0===l?void 0:l.toFixed(1)})]}),(0,_.jsx)(q,{children:"Overview"}),(0,_.jsx)(C,{children:d}),(0,_.jsx)(q,{children:"Genres"}),Z&&(0,_.jsx)(C,{children:Z.map((function(n){return n.name})).join(" | ")})]})]}),(0,_.jsxs)(F,{children:[(0,_.jsx)(q,{children:"Additional information"}),(0,_.jsx)(G,{children:(0,_.jsx)(H,{to:"cast",state:(0,x.Z)({},s.state),children:"cast"})}),(0,_.jsx)(G,{children:(0,_.jsx)(H,{to:"reviews",state:(0,x.Z)({},s.state),children:"reviews"})})]}),(0,_.jsx)(g.Suspense,{fallback:(0,_.jsx)(m.a,{}),children:(0,_.jsx)(h.j3,{})})]})]})}},3754:function(n,e,r){r.d(e,{Hx:function(){return h},Y5:function(){return f},bI:function(){return d},uV:function(){return v},wr:function(){return x}});var t=r(5861),a=r(7757),c=r.n(a),o=r(1243),s="https://api.themoviedb.org/3",i="37314a167a558e9a6582597c5654a5d7",u="".concat(s,"/trending/movie/week"),p="".concat(s,"/search/movie"),l="".concat(s,"/movie"),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(p,"?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"?api_key=").concat(i,"&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(l,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=253.e65f4b01.chunk.js.map