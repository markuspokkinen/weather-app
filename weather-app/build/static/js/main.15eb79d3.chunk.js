(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(22)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=(a(14),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),d=(a(15),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={icon:t.icon},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({icon:t.icon})}},{key:"render",value:function(){var t="nothing";switch(this.state.icon){case"01d":case"01n":t="spinner"}return i.a.createElement("img",{className:t,src:"https://openweathermap.org/img/w/"+this.state.icon+".png",alt:"not loaded"})}}]),e}(n.Component)),h=(a(16),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).addtime=function(t){return parseInt(t.split(":")[0])+3+":"+t.split(":")[1]+":"+t.split(":")[2]},a.getwindirec=function(t){var e;return[{min:348.75,max:11.25},{min:11.25,max:33.75},{min:33.75,max:56.25},{min:56.25,max:78.75},{min:78.75,max:101.25},{min:101.25,max:123.75},{min:123.75,max:146.25},{min:146.25,max:168.75},{min:168.75,max:191.25},{min:191.25,max:213.75},{min:213.75,max:236.25},{min:236.25,max:258.75},{min:258.75,max:281.25},{min:281.25,max:303.75},{min:303.75,max:326.25},{min:326.25,max:348.75}].forEach(function(a,n){a.min<t&&a.max>t&&(e=n)}),["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][e]+": "+t},a.state={list:a.props.data},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({list:t.data})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"dayDiv"},this.state.list.map(function(e){return i.a.createElement("div",{className:"onedayDiv",key:"one: "+e.dt_txt},i.a.createElement("p",null,t.addtime(e.dt_txt.split(" ")[1])),i.a.createElement(d,{icon:e.weather[0].icon}),i.a.createElement("p",{style:{borderTop:"dashed 1px black"}},"Temp: "),i.a.createElement("p",null,Math.round(e.main.temp),"\u2103"),i.a.createElement("p",null,"\u2191 ",e.main.temp_max,"\u2103 \u2193",e.main.temp_min,"\u2103"),i.a.createElement("p",{style:{borderTop:"dashed 1px black"}},"Humidity:"),i.a.createElement("p",null,e.main.humidity,"%"),i.a.createElement("p",{style:{borderTop:"dashed 1px black"}},"Wind:"),i.a.createElement("p",null,e.wind.speed," m/s"),i.a.createElement("p",null,t.getwindirec(e.wind.deg),"\xb0"))}))}}]),e}(n.Component)),p=(a(17),a(18),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).getfivedays=function(t){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return t.list.map(function(t){return t.split("-")[2]}).map(function(t){var a=new Date;return a.setDate(parseInt(t,10)),e[a.getDay()]})},a.onClick=function(t){var e=a.state.five.indexOf(t.target.innerText);a.props.callback(e),a.setState({index:e})},a.state={list:a.props.list,five:a.getfivedays(a.props),index:0},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({list:t.list,five:this.getfivedays(t)})}},{key:"render",value:function(){var t=this,e={backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"5px"};return i.a.createElement("div",{id:"fivedaysdiv"},this.state.list.map(function(a,n){return i.a.createElement("div",{key:"five["+n+"]",className:"fivedayOne",onClick:t.onClick.bind(t),style:t.state.index===n?e:{}},i.a.createElement("p",null,t.state.five[n]))}))}}]),e}(n.Component)),f=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).getWeatherdata=function(t){fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+t.lat+"&lon="+t.lon+"&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric").then(function(t){return t.json()}).then(function(t){var e=t.list.map(function(t){return t.dt_txt.split(" ")[0]}),n=e.filter(function(t,a){return e.indexOf(t)===a}),i=n.map(function(e){return t.list.filter(function(t){return t.dt_txt.includes(e)})});n.shift(),a.setState({daysArray:i,days:n})})},a.daycallback=function(t){a.setState({index:t+1})},a.state={days:[],daysArray:[],index:1},a.getWeatherdata(a.props),a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.getWeatherdata(t)}},{key:"render",value:function(){return this.state.daysArray.length>0?i.a.createElement("div",{id:"forcast-main"},i.a.createElement("h2",null,"Today"),i.a.createElement(h,{data:this.state.daysArray[0]}),i.a.createElement("h2",null,"Forecast"),i.a.createElement(p,{list:this.state.days,callback:this.daycallback.bind(this)}),i.a.createElement(h,{data:this.state.daysArray[this.state.index]})):i.a.createElement("div",null)}}]),e}(n.Component),v=(a(19),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={main:a.props.main},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({main:t.main})}},{key:"render",value:function(){return i.a.createElement("div",{id:"otherCurrentdata"},i.a.createElement("p",null,"\u2191 ",this.state.main.temp_max," \u2103 \u2193 ",this.state.main.temp_min," \u2103"),i.a.createElement("p",null,"humidity: ",this.state.main.humidity,"%"),i.a.createElement("p",null,"pressure: ",this.state.main.pressure," hPa"))}}]),e}(n.Component)),b=(a(20),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).getWeatherdata=function(t){fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t.lat+"&lon="+t.lon+"&APPID=9592eb101cb5b0e09de21ab8f991d0c3&units=metric").then(function(t){return t.json()}).then(function(t){a.setState({name:t.name,weather:t.weather,main:t.main})})},a.state={name:"",weather:[{}],main:{}},a.getWeatherdata(a.props),a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.getWeatherdata(t)}},{key:"render",value:function(){return i.a.createElement("div",{id:"current-div"},i.a.createElement("h2",null," ",this.state.name," "),i.a.createElement("h1",null,Math.round(this.state.main.temp)," \u2103"),i.a.createElement(d,{icon:this.state.weather[0].icon}),i.a.createElement(v,{main:this.state.main}))}}]),e}(n.Component)),y=(a(21),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={lat:0,lon:0},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){t.setState({lat:e.coords.latitude,lon:e.coords.longitude})})}},{key:"render",value:function(){return i.a.createElement("div",{id:"app"},i.a.createElement(b,{lat:this.state.lat,lon:this.state.lon}),i.a.createElement(f,{lat:this.state.lat,lon:this.state.lon}))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.15eb79d3.chunk.js.map