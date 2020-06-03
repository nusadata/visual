(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{187:function(t,e,r){"use strict";r.r(e);r(27),r(31),r(78),r(72),r(45),r(175),r(26),r(70),r(32),r(122);var n=r(46),a=(r(164),r(165)),s=r(117),o={props:{selectorPrefix:{type:String,default:"mdv"},yearRange:{type:Array,default:function(){return[]}}},computed:{colorRange:function(){return{total_cases:[0,1e4],total_deaths:[0,200],incident_rate:[0,200],fatality_rate:[0,8.75]}[this.currentType]},stopRange:function(){return{total_cases:[0,1500,3e3,4500,6e3,7500,9e3,1e4],total_deaths:[0,25,50,75,100,125,150,200],incident_rate:[0,25,50,75,100,125,150,200],fatality_rate:[0,1.25,2.5,3.75,5,6.25,7.5,8.75]}[this.currentType]},legendText:function(){return{total_cases:"Number of total cases",total_deaths:"Number of total deaths",incident_rate:"Number of incident rate",fatality_rate:"Number of fatality rate (%)"}[this.currentType]}},data:function(){return{types:["total_cases","total_deaths","fatality_rate"],currentType:"total_cases",currentYear:this.yearRange[0]}},mounted:function(){var t=this;this.fetchResources().then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){var a,o,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(n.a)(r,2),o=a[0],c=a[1],e.next=3,t.transformToMap(c,t.currentType);case 3:return i=e.sent,e.t0=t,e.t1=t,e.next=8,o.json();case 8:e.t2=e.sent,e.t3=i,e.t4=e.t1.render.call(e.t1,e.t2,e.t3),e.t0.renderLegend.call(e.t0,e.t4),t.$tippy(t.getSelector(".province"),{followCursor:!0,plugins:[s.b],content:function(t){return t.getAttribute("data-tooltip")}});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},watch:{currentYear:function(t){this.rerender(t,this.currentType)},currentType:function(t){this.rerender(this.currentYear,t),this.rerenderLegend(this.currentYear,t)}},methods:{getSelector:function(t){return".".concat(this.selectorPrefix," ").concat(t)},getId:function(t){return"".concat(this.selectorPrefix,"-").concat(t)},render:function(t,e){var r=this,n=this.$d3.geoEquirectangular().scale(1e3).translate([-1650,120]),a=this.$d3.geoPath().projection(n),s=this.$d3.select(this.getSelector(".content")).append("svg").attr("viewBox",[0,0,800,400]),o=this.$d3;return s.append("g").selectAll("path").data(t.features).join("path").attr("fill",(function(t){return r.color(e.get(t.properties.slug).value)})).attr("data-tooltip",(function(t){return"".concat(e.get(t.properties.slug).name," ").concat(e.get(t.properties.slug).value)})).attr("stroke","#22292f").attr("stroke-linejoin","round").attr("d",a).attr("id",(function(t){return r.getId(t.properties.slug)})).attr("class","province").on("mouseover",(function(){s.selectAll(".province").transition().style("opacity",.5).attr("stroke","#22292f"),o.select(this).transition().style("opacity",1).attr("stroke","black")})).on("mouseleave",(function(){s.selectAll(".province").transition().style("opacity",1).attr("stroke","#22292f")})),s},renderLegend:function(t){var e=this,r=this.getId("linear-gradient"),n=t.append("defs").attr("class","linear-gradient-wrapper").append("linearGradient").attr("id",r).attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%"),a=this.stopRange;n.selectAll("stop").data(a).join("stop").attr("offset",(function(t,e){return"".concat(Math.floor((e+1)/a.length*100),"%")})).attr("stop-color",(function(t){return e.color(t)}));var s=t.append("g").attr("class","legend-wrapper").style("transform","translate(calc(50% - 150px), 375px)");s.append("rect").attr("width",300).attr("height",5).style("fill","url(#".concat(r,")"));var o=a.slice(0,a.length-1),c=s.append("g").attr("transform","translate(-35, 20)");return o.forEach((function(t,e){e%2==0&&c.append("text").attr("x",Math.floor((e+1)/a.length*300)).attr("y",0).style("text-anchor","middle").style("fill","#edf2f7").attr("class","legend-stop").text(t)})),s.append("text").style("text-anchor","middle").style("fill","#edf2f7").attr("x",150).attr("y",-12).attr("class","legend-title").text(this.legendText),t},getResourceUrl:function(t){return this.$devMode?t:this.$url(t)},fetchResources:function(){var t=this.getResourceUrl("/id.geojson"),e=this.getResourceUrl("/dengue-indonesia-".concat(this.currentYear,".csv"));return Promise.all([fetch(t),fetch(e)])},rerender:function(t,e){var r=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.getResourceUrl("/dengue-indonesia-".concat(t,".csv")),n.t0=r,n.next=4,fetch(a);case 4:return n.t1=n.sent,n.t2=e,n.next=8,n.t0.transformToMap.call(n.t0,n.t1,n.t2);case 8:n.sent.forEach((function(t,e){var n=r.getId(e);try{r.$d3.select("#"+n).transition().attr("fill",r.color(t.value)),document.getElementById(n)._tippy.setContent("".concat(t.name," ").concat(t.value))}catch(t){console.log(e)}}));case 10:case"end":return n.stop()}}),n)})))()},rerenderLegend:function(t,e){var r=this.$d3.select(this.getSelector(".content svg"));r.select(".linear-gradient-wrapper").remove(),r.select(".legend-wrapper").remove(),this.renderLegend(r)},color:function(t){return this.$d3.scaleQuantize(this.colorRange,this.$d3.schemeBlues[7])(t)},transformToMap:function(t,e){var r=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r.$d3,n.next=3,t.text();case 3:return n.t1=n.sent,n.t2=function(t){return[t.slug,{value:+t[e],name:t.province}]},a=n.t0.csvParse.call(n.t0,n.t1,n.t2),n.abrupt("return",new Map(a));case 7:case"end":return n.stop()}}),n)})))()}}},c=r(30),i=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.selectorPrefix+" max-w-4xl mb-24 mx-auto overflow-x-hidden"},[r("header",{staticClass:"flex flex-wrap items-center"},[r("div",{staticClass:"mx-5 lg:mx-0 w-full lg:w-1/2"},[r("h2",{staticClass:"font-semibold text-2xl pt-4 mb-4",attrs:{id:"map-of-dengue-fever"}},[t._v("\n        Map of "+t._s(t.currentType.replace("_"," "))+" in "+t._s(t.currentYear)+"\n      ")])]),r("div",{staticClass:"mb-5 lg:mb-0 flex-none w-full lg:w-1/2"},[r("div",{staticClass:"mx-5 lg:mx-0 flex items-center justify-start lg:justify-end"},[r("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentYear,expression:"currentYear",modifiers:{number:!0}}],staticClass:"text-gray-800 mr-4",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var r="_value"in e?e._value:e.value;return t._n(r)}));t.currentYear=e.target.multiple?r:r[0]}}},t._l(t.yearRange,(function(e){return r("option",{key:"year-"+e,domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})),0),r("select",{directives:[{name:"model",rawName:"v-model",value:t.currentType,expression:"currentType"}],staticClass:"text-gray-800",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentType=e.target.multiple?r:r[0]}}},t._l(t.types,(function(e){return r("option",{key:"type-"+e,domProps:{value:e}},[t._v("\n            "+t._s(e.replace("_"," "))+"\n          ")])})),0)])])]),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overflow-x-auto"},[e("div",{staticClass:"content min-w-2xl"})])}],!1,null,null,null);e.default=i.exports}}]);