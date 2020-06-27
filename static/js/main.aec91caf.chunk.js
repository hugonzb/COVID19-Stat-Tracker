(this["webpackJsonpcovid19-stat-tracker"]=this["webpackJsonpcovid19-stat-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__1V40r",card:"Cards_card__2tLSu",infected:"Cards_infected__1Ro7b",recovered:"Cards_recovered__3qMd3",deaths:"Cards_deaths__3gFiv"}},201:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(66),o=a.n(c),s=a(6),u=a.n(s),i=a(13),d=a(67),l=a(68),m=a(79),p=a(77),f=a(215),v=a(218),h=a(217),E=a(219),b=a(28),x=a.n(b),y=a(11),_=a.n(y),g=a(29),w=a.n(g),j=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:_.a.container},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:w()(_.a.card,_.a.infected)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(E.a,{variant:"h5"},n.a.createElement(x.a,{start:0,end:a.value,duration:3,separate:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of total cases"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:w()(_.a.card,_.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(E.a,{variant:"h5"},n.a.createElement(x.a,{start:0,end:r.value,duration:3,separate:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of recoveries"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:w()(_.a.card,_.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(E.a,{variant:"h5"},n.a.createElement(x.a,{start:0,end:c.value,duration:3,separate:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of deaths"))))):"Loading Statistics..."},S=a(78),k=a(40),C=a.n(k),O="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r,n,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(O);case 3:return t=e.sent,a=t.data,r=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate,s={confirmed:r,recovered:n,deaths:c,lastUpdate:o},e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(O,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(73),I=a(75),U=a.n(I),A=function(){var e=Object(r.useState)([]),t=Object(S.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var o=a.length?n.a.createElement(B.a,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"blue",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Infected",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5",fill:!0}]}}):null;return n.a.createElement("div",{className:U.a.container},o)},J=function(){return n.a.createElement("h1",null,"CountryPicker")},L=a(76),M=a.n(L),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.data;return n.a.createElement("div",{className:M.a.container},n.a.createElement(j,{data:this.state.data}),n.a.createElement(A,{data:this.state.data}),n.a.createElement(J,null))}}]),a}(n.a.Component);o.a.render(n.a.createElement(R,null),document.getElementById("root"))},75:function(e,t,a){e.exports={container:"Chart_container__146jp"}},76:function(e,t,a){e.exports={container:"App_container__3ZHrG"}},81:function(e,t,a){e.exports=a(201)}},[[81,1,2]]]);
//# sourceMappingURL=main.aec91caf.chunk.js.map