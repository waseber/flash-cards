(this["webpackJsonpflash-cards"]=this["webpackJsonpflash-cards"]||[]).push([[0],{26:function(e,t,n){e.exports=n(40)},31:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(20),c=n.n(r),o=(n(31),n(21)),u=n(22),s=n(25),i=n(24),m=n(8),d=n(2),f=n(17),E=function(e){var t;return console.log("count ",e),e.count>0&&(t=l.a.createElement("span",null," | ",l.a.createElement(m.c,{to:"/play"},"Play"))),l.a.createElement("nav",null,l.a.createElement(m.c,{exact:!0,to:"/"},"Home")," | ",l.a.createElement(m.c,{to:"/add-question"},"Add"),t)},h=l.a.createContext({qa:{},getCount:function(){},addQuestionAnswer:function(e,t){},getQuestionsAnswers:function(){},getAQuestion:function(){},editQuestion:function(){},deleteQuestion:function(){}}),p=function(){return l.a.createElement(h.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement(E,{count:e.getCount()})),l.a.createElement("h1",null,"Make Your Own Flash Cards!"),l.a.createElement("p",null,"Make it what you want. ",l.a.createElement("br",null),"Whatever you need to study for, add questions and answers and then quiz yourself or friends and family!"))}))},g=n(6),b=function(){var e=Object(a.useState)(0),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(g.a)(c,2),u=o[0],s=o[1],i=Object(a.useState)(""),m=Object(g.a)(i,2),d=m[0],f=m[1];return l.a.createElement(h.Consumer,null,(function(e){r(e.getCount());return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement(E,{count:n})),l.a.createElement("p",null,"There are currently ",n," questions"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addQuestionAnswer(u,d),r(e.getCount()),document.getElementsByTagName("form")[0].reset()}},l.a.createElement("label",null,"Question:",l.a.createElement("textarea",{id:"question-field",cols:"50",rows:"3",onChange:function(e){return s(e.target.value)}})),l.a.createElement("label",null,"Answer:",l.a.createElement("input",{id:"answer-field",type:"text",autoComplete:"off",onChange:function(e){return f(e.target.value)}})),l.a.createElement("button",{type:"submit"},"Add")))}))},w=(n(36),n(10)),v=n(11),Q=function(e){var t=e.obj;console.log(t);var n=Object(a.useState)(!1),r=Object(g.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(0),s=Object(g.a)(u,2),i=s[0],d=s[1],f=t.length,E=Object(a.useState)(t[i].q),h=Object(g.a)(E,2),p=h[0],b=h[1],Q=Object(a.useState)(t[i].a),A=Object(g.a)(Q,2),O=A[0],j=A[1],C=function(e){e.preventDefault(),o(!c),console.log("click")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,i+1," of ",t.length),l.a.createElement("section",null,l.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),i+1>1&&(d(i-=1),b(t[i].q),j(t[i].a),o(!1))},className:i+1>1?"paddle":"paddle vis-hidden"},l.a.createElement(w.a,{icon:v.a})),l.a.createElement("div",{id:"carousel-center"},l.a.createElement("article",{id:"flash-card",className:"flash-card"},l.a.createElement("a",{href:"#",onClick:C,className:c?"hide":"question ani-flip-up"},l.a.createElement("div",{className:"inner-card"},l.a.createElement("h2",null,"Question:"),l.a.createElement("h3",null,p))),l.a.createElement("a",{href:"#",onClick:C,className:c?"answer  ani-flip-down":"hide"},l.a.createElement("div",{className:"inner-card"},l.a.createElement("h2",null,"Answer:"),l.a.createElement("h3",null,O)))),l.a.createElement(m.b,{to:"/edit/".concat(i)},l.a.createElement(w.a,{icon:v.c}))),l.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),i<f&&(d(i+=1),b(t[i].q),j(t[i].a),o(!1))},className:i+1==f?"paddle vis-hidden":"paddle"},l.a.createElement(w.a,{icon:v.b}))))},A=function(){return l.a.createElement(h.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement(E,{count:e.getCount()})),l.a.createElement(Q,{obj:e.getQuestionsAnswers()}))}))},O=Object(d.f)((function(e){var t=e.match,n=(e.props,Object(a.useState)()),r=Object(g.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(),s=Object(g.a)(u,2),i=s[0],m=s[1],d=Object(a.useState)(),f=Object(g.a)(d,2),p=f[0],b=f[1],Q=t.params.id;return l.a.createElement(h.Consumer,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement(E,{count:e.getCount()})),l.a.createElement("h2",null,"Edit Your Question"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.editQuestion(Q,c,i),b("Successfully updated")},key:Q},l.a.createElement("label",null,"Question:",l.a.createElement("textarea",{id:"question-field",cols:"50",rows:"3",onChange:function(e){return o(e.target.value)},defaultValue:e.getAQuestion(Q).q})),l.a.createElement("label",null,"Answer:",l.a.createElement("input",{id:"answer-field",type:"text",autoComplete:"off",onChange:function(e){return m(e.target.value)},defaultValue:e.getAQuestion(Q).a})),l.a.createElement("button",{type:"submit"},"Edit"),l.a.createElement("a",{href:"#",onClick:function(t){t.preventDefault(),1==window.confirm("Are you sure you want to delete this question?")&&(e.deleteQuestion(Q),alert("Deleted"),window.location.href="/flash-cards/play")}},l.a.createElement(w.a,{icon:v.d})),l.a.createElement("p",null,p)))}))})),j=function(){return l.a.createElement("h1",null,"404: Page Not Found")},C=[];localStorage.getItem("questions")&&(C=JSON.parse(localStorage.getItem("questions")));var y=function(e,t){localStorage.setItem(e,JSON.stringify(t))};f.a.initialize("UA-180626419-1"),f.a.pageview("/");var q=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={qa:C},e.getCount=function(){return C.length},e.addQuestionAnswer=function(e,t){C.push({q:e,a:t}),y("questions",C)},e.getQuestionsAnswers=function(){return C},e.getAQuestion=function(e){return C[e]},e.editQuestion=function(e,t,n){C[e]={q:t,a:n},y("questions",C)},e.deleteQuestion=function(e){C.splice(e,1),y("questions",C)},e}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.Provider,{value:{qa:this.state.qa,getCount:this.getCount,addQuestionAnswer:this.addQuestionAnswer,getQuestionsAnswers:this.getQuestionsAnswers,getAQuestion:this.getAQuestion,editQuestion:this.editQuestion,deleteQuestion:this.deleteQuestion}},l.a.createElement(m.a,{basename:"/flash-cards"},l.a.createElement("main",null,l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:p}),l.a.createElement(d.a,{path:"/add-question",component:b}),l.a.createElement(d.a,{path:"/play",component:A}),l.a.createElement(d.a,{path:"/edit/:id",component:O}),l.a.createElement(d.a,{component:j}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f43a1df8.chunk.js.map