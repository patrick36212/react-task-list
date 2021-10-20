(this["webpackJsonpreact-task-list"]=this["webpackJsonpreact-task-list"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var o,r,c,a,i,s,d,l,b,u,j,h,x,O,f,p,g,m,k,v,T,w,y=t(1),D=t.n(y),C=t(12),S=t.n(C),A=t(4),N=t(2),L=t(3),z=L.c.button(o||(o=Object(N.a)(["\n    background-color: transparent;\n    border: none;\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n\n    ","\n"])),(function(n){return n.complete&&Object(L.b)(r||(r=Object(N.a)(["\n        transition: 1s;\n\n        &:hover {\n            color: hsl(0, 0%, 100%);\n            background-color: hsl(120, 100%, 35%);\n            border-radius: 15px;\n        }\n    "])))}),(function(n){return n.done&&Object(L.b)(c||(c=Object(N.a)(["\n        background-color: hsl(120, 100%, 25%);\n        color: hsl(0, 0%, 100%);\n        border-radius: 15px;\n\n        &:hover {\n            background-color: hsl(120, 100%, 35%);\n        }\n    "])))}),(function(n){return n.remove&&Object(L.b)(a||(a=Object(N.a)(["\n        transition: 1s;\n\n        &:hover {\n            background-color: hsl(0, 100%, 50%);\n            color: white;\n            border-radius: 15px;\n        }\n\n        &:active {\n            color: hsl(0, 0%, 0%);\n        }\n    "])))}),(function(n){return n.selectAll&&Object(L.b)(i||(i=Object(N.a)(["\n        padding: 5px;\n        color: hsl(180, 100%, 25%);\n        transition: 1s;\n\n        &:hover {\n            color: hsl(180, 100%, 35%);\n        }\n\n        &:active {\n            color: hsl(0, 0%, 0%);\n        }\n\n        &:disabled {\n            color: hsl(0, 0%, 87%);\n            cursor: auto;\n        }\n    "])))}),(function(n){return n.hideDone&&Object(L.b)(s||(s=Object(N.a)(["\n        min-width: 127px;\n        padding: 5px;\n        color: hsl(180, 100%, 25%);\n        transition: 1s;\n\n        &:hover {\n            color: hsl(180, 100%, 35%);\n        }\n\n        &:disabled {\n            color: hsl(0, 0%, 87%);\n            cursor: auto;\n        }\n    "])))}),(function(n){return n.form&&Object(L.b)(d||(d=Object(N.a)(["\n        background-color: hsl(180, 100%, 25%);\n        color: white;\n        border: none;\n        min-width: fit-content;\n        padding: 10px;\n        transition: 1s;\n\n        &:hover {\n            cursor: pointer;\n            transform: scale(1.08);\n            background-color: hsl(180, 100%, 35%);\n        }\n    "])))})),F=L.c.div(l||(l=Object(N.a)(["\n    display: flex;\n    gap: 20px;\n\n    @media (max-width: 767px) {\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n"]))),I=L.c.form(b||(b=Object(N.a)(["\n    padding: 15px;\n    display: flex;\n    gap: 10px;\n\n    @media (max-width: 767px) {\n        flex-direction: column;\n    }\n"]))),J=L.c.input(u||(u=Object(N.a)(["\n    padding: 10px;\n    width: 100%;\n    border: 2px solid hsl(0, 0%, 90%);\n"]))),H=t(0),P=function(n){var e=n.addNewTask,t=Object(y.useState)(""),o=Object(A.a)(t,2),r=o[0],c=o[1],a=Object(y.useRef)(null);return Object(H.jsxs)(I,{onSubmit:function(n){n.preventDefault(),e(r.trim()),c("")},children:[Object(H.jsx)(J,{value:r,type:"text",placeholder:"What is to do?",onChange:function(n){return c(n.target.value)},ref:a}),Object(H.jsx)(z,{form:!0,type:"submit",onClick:function(){a.current.focus()},children:"Add Task"})]})},B=L.c.header(j||(j=Object(N.a)(["\n    background-color: inherit;\n    width: 100%;\n    padding: 10px 0;\n"]))),E=L.c.h1(h||(h=Object(N.a)(["\n    margin: 0;\n"]))),M=function(n){var e=n.title;return Object(H.jsx)(B,{children:Object(H.jsx)(E,{children:e})})},K=L.c.footer(x||(x=Object(N.a)(["\n    text-align: center;\n"]))),R=function(n){var e=n.year,t=n.name;return Object(H.jsxs)(K,{children:["Coded by"," ",t," \xa9 ",e]})},W=L.c.section(O||(O=Object(N.a)(["\n    background-color: hsl(0, 0%, 100%);\n    margin: 20px auto;\n"]))),_=L.c.header(f||(f=Object(N.a)(["\n    border-bottom: 2px solid hsl(0, 0%, 90%);\n    display: flex;\n\n    @media (max-width: 767px) {\n        flex-direction: column;\n        text-align: center;\n    }\n"]))),q=L.c.h2(p||(p=Object(N.a)(["\n    margin: 5px 0;\n    padding: 15px;\n    flex-grow: 1;\n"]))),G=function(n){var e=n.title,t=n.additionalContent,o=n.body;return Object(H.jsxs)(W,{children:[Object(H.jsxs)(_,{children:[Object(H.jsx)(q,{children:e}),t]}),o]})},Q=L.c.ul(g||(g=Object(N.a)(["\n    padding: 10px;\n    list-style-type: none;\n"]))),U=L.c.li(m||(m=Object(N.a)(["\n    align-items: center;\n    display: flex;\n    padding: 5px;\n    margin-top: 10px;\n    border-bottom: 1px solid hsl(0, 0%, 87%);\n\n    ","\n"])),(function(n){return n.hidden&&Object(L.b)(k||(k=Object(N.a)(["\n        display: none;\n    "])))})),V=L.c.p(v||(v=Object(N.a)(["\n    padding: 0 10px;\n    display: flex;\n    flex-grow: 1;\n    word-break: break-word;\n\n    ","\n"])),(function(n){return n.done&&Object(L.b)(T||(T=Object(N.a)(["\n        text-decoration: line-through;\n    "])))})),X=function(n){var e=n.tasks,t=n.hideDoneTasks,o=n.removeTask,r=n.toggleDoneTask;return Object(H.jsx)(Q,{children:e.map((function(n){return Object(H.jsxs)(U,{hidden:n.done&&t,children:[Object(H.jsx)(z,{onClick:function(){return r(n.id)},done:n.done,complete:!0,children:Object(H.jsx)("i",{className:"material-icons md-24",children:"task_alt"})}),Object(H.jsx)(V,{done:n.done,children:n.content}),Object(H.jsx)(z,{onClick:function(){return o(n.id)},remove:!0,children:Object(H.jsx)("i",{className:"material-icons md-24",children:"delete"})})]},n.id)}))})},Y=function(n){var e=n.tasks,t=n.hideDoneTasks,o=n.toggleHideDone,r=n.markAllTaskDone;return 0===e.length?null:Object(H.jsxs)(F,{children:[Object(H.jsx)(z,{onClick:r,disabled:e.every((function(n){return n.done})),selectAll:!0,children:"Mark all as done"}),Object(H.jsxs)(z,{onClick:o,hideDone:!0,children:[e.some((function(n){return n.done}))&&t?"Show":"Hide"," done"]})]})},Z=L.c.main(w||(w=Object(N.a)(["\n    margin: 0 auto;\n    padding: 20px;\n    max-width: 1024px;\n\n    @media (max-width: 767px) {\n        max-width: 100%;\n    }\n"]))),$=function(n){var e=n.children;return Object(H.jsx)(Z,{children:e})},nn=t(16),en=t(6);var tn,on=function(){var n=Object(y.useState)(!1),e=Object(A.a)(n,2),t=e[0],o=e[1],r=function(){var n=Object(y.useState)(JSON.parse(localStorage.getItem("storedTasks"))||[]),e=Object(A.a)(n,2),t=e[0],o=e[1];return Object(y.useEffect)((function(){localStorage.setItem("storedTasks",JSON.stringify(t))}),[t]),{tasks:t,addNewTask:function(n){if(""!==n)return o((function(e){return[].concat(Object(nn.a)(e),[{content:n,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))},removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},markAllTaskDone:function(){o((function(n){return n.map((function(n){return Object(en.a)(Object(en.a)({},n),{},{done:!0})}))}))},toggleDoneTask:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(en.a)(Object(en.a)({},e),{},{done:!e.done}):e}))}))}}}(),c=r.tasks,a=r.addNewTask,i=r.removeTask,s=r.markAllTaskDone,d=r.toggleDoneTask;return Object(H.jsxs)($,{children:[Object(H.jsx)(M,{title:"Task List"}),Object(H.jsx)(G,{title:"Add task",body:Object(H.jsx)(P,{addNewTask:a})}),Object(H.jsx)(G,{title:"List of tasks",body:Object(H.jsx)(X,{toggleDoneTask:d,removeTask:i,tasks:c,hideDoneTasks:t}),additionalContent:Object(H.jsx)(Y,{tasks:c,hideDoneTasks:t,toggleHideDone:function(){o(t=!t)},markAllTaskDone:s})}),Object(H.jsx)(R,{name:"Patryk Krawczyk",year:"2021"})]})},rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),c(n),a(n)}))},cn=Object(L.a)(tn||(tn=Object(N.a)(["\n    html {\n        background-color: hsl(0, 0%, 95%);\n        box-sizing: border-box;  \n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Lato', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"])));S.a.render(Object(H.jsxs)(D.a.StrictMode,{children:[Object(H.jsx)(cn,{}),Object(H.jsx)(on,{})]}),document.getElementById("root")),rn()}},[[24,1,2]]]);
//# sourceMappingURL=main.371f749a.chunk.js.map