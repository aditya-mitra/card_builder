(this.webpackJsonpcard_builder=this.webpackJsonpcard_builder||[]).push([[0],{246:function(e,t,a){e.exports=a(426)},256:function(e,t,a){},368:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"doGetAll",(function(){return D})),a.d(n,"doPutOne",(function(){return B}));var r=a(0),i=a.n(r),c=a(34),l=a.n(c),s=a(46),o=a(23),u=a(211),h="PUT ONE CHARACTER",d=[],m=Object(o.c)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET ALL":var a=t.payload;return a;default:return e}},putOne:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:console.log("AT PUT ONE, we have the intial state as ",e,"\n and the action as ",t);var a=t.payload,n=a.cards,r=a.newCharacter,i=n.unshift(r);return{cards:i};default:return e}}}),v=Object(o.d)(Object(o.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=Object(o.e)(m,{},v),p=(a(255),a(256),a(19)),f=a(20),g=a(22),E=a(21),O=a(442),w=a(427),j=a(48),y=a(440),C=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={activeItem:"home"},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return i.a.createElement(O.a,{inverted:!0,stackable:!0},i.a.createElement(O.a.Item,{name:"home",active:"home"===e,onClick:this.handleItemClick}),i.a.createElement(O.a.Item,{name:"messages",active:"messages"===e,onClick:this.handleItemClick}),i.a.createElement(O.a.Item,{name:"friends",active:"friends"===e,onClick:this.handleItemClick}),i.a.createElement(O.a.Menu,{position:"right"},i.a.createElement(O.a.Item,null,i.a.createElement(w.a,{animated:"fade",inverted:!0,onClick:this.props.handleShow},i.a.createElement(w.a.Content,{visible:!0},"Create New"),i.a.createElement(w.a.Content,{hidden:!0},i.a.createElement(j.a,{name:"plus"})))),i.a.createElement(O.a.Item,null,i.a.createElement(y.a,{category:!0,fluid:!0}))))}}]),a}(r.Component),k=a(47),S=a(446),I=(a(368),a(35)),N=a.n(I),_=a(59),T=a(102),x=a.n(T),P="https://cardbuilderv1.herokuapp.com/";function A(e){return H.apply(this,arguments)}function H(){return(H=Object(_.a)(N.a.mark((function e(t){var a,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,e.next=3,x()({method:"POST",url:P+"characters",data:t}).catch((function(e){return e}));case 3:if(a=e.sent,n=a.data,a){e.next=9;break}return e.abrupt("return",{status:0,message:"Please check your network connectivity!"});case 9:if(!("code"in n)||"23505"!==n.code){e.next=13;break}return e.abrupt("return",{status:0,message:"Buddy, that Character already exists!"});case 13:if(!("code"in n)){e.next=15;break}return e.abrupt("return",{status:0,message:"Oops! Something went wrong while submitting your Character. Error Code : "+n.code});case 15:return r=n.character_id,e.abrupt("return",{status:1,character_id:r,message:"Your character was saved!"});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return function(e,t){console.log("we have getState as",t()),x.a.get(P).then((function(e){return e.data})).then((function(t){return e({type:"GET ALL",payload:t})})).catch((function(e){return console.log(e)}))}}function B(e){return function(){var t=Object(_.a)(N.a.mark((function t(a,n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=e,console.log(r,"is the value of id"),x.a.get(P+r)).then((function(e){return e.data})).then((function(e){return a({type:h,payload:{cards:n().cards,newCharacter:e[0]}})})).catch((function(e){return console.log(e,"while retreiving that card")}));case 1:case"end":return t.stop()}var r}),t)})));return function(e,a){return t.apply(this,arguments)}}()}var G=a(230);a(387);function L(){return["red","green","blue"][Math.floor(3*Math.random())]}var q=function(e){var t=e.name,a=e.shows,n=e.abilities,r=e.img;e.id,n=Array.isArray(n)?n:n.split(",");var c,l=[],s=0,o=Object(G.a)(n);try{for(o.s();!(c=o.n()).done;){var u=c.value,h=i.a.createElement("label",{key:s++,className:"class-badge badge-"+L()},u);l.push(h)}}catch(d){o.e(d)}finally{o.f()}return i.a.createElement("div",{className:"character-card-v2 card-"+L()},i.a.createElement("div",{className:"portrait",style:{backgroundImage:"url("+r+")"}}),i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"names"},i.a.createElement("div",{className:"glitch-wrapper"},i.a.createElement("div",{className:"glitch","data-text":t},t)),i.a.createElement("small",null,a)),i.a.createElement("div",{className:"classes"},l)))},R=a(24),W=a(444),M=a(445),U=function(e){var t=e.animation,a=e.direction,n=e.visible,r=e.hideBar,c=window.innerWidth,l="very wide";return l=c<400?"thin":c>=400&&c<600?"wide":"very wide",i.a.createElement(W.a,{as:O.a,animation:t,direction:a,icon:"labeled",inverted:!0,vertical:!0,visible:n,size:"massive",width:l,onHide:r},i.a.createElement(O.a.Item,{as:"a"},i.a.createElement(j.a,{name:"home"}),"Home"),i.a.createElement(O.a.Item,{as:"a"},i.a.createElement(j.a,{name:"gamepad"}),"Games"),i.a.createElement(O.a.Item,{as:"a"},i.a.createElement(j.a,{name:"camera"}),"Channels"))},X=function(e){return function(t){Object(g.a)(n,t);var a=Object(E.a)(n);function n(e){var t;return Object(p.a)(this,n),(t=a.call(this,e)).state={visible:!1},t.handleClick=t.handleClick.bind(Object(R.a)(t)),t.hideBar=t.hideBar.bind(Object(R.a)(t)),t}return Object(f.a)(n,[{key:"handleClick",value:function(e){this.setState((function(e,t){return{visible:!e.visible}}))}},{key:"hideBar",value:function(){this.setState((function(e,t){return{visible:!1}}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(W.a.Pushable,{as:M.a,style:{overflow:"hidden"}},i.a.createElement(U,{animation:"slide along",direction:"right",visible:this.state.visible,hideBar:this.hideBar}),i.a.createElement(W.a.Pusher,{dimmed:this.state.visible},i.a.createElement(e,Object.assign({handleClick:this.handleClick},this.props)))))}}]),n}(r.Component)};var F=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.props.doGetAll()}},{key:"render",value:function(){var e=this.props,t=e.handleClick,a=e.cards,n=function(e,t,a){for(var n=[],r=0;r<e;r++){var c=i.a.createElement(S.a.Column,{floated:"left",key:a[r].id,onClick:t},i.a.createElement(q,Object.assign({},a[r],{key:a[r].id})));n.push(c)}return n}(a.length,t,a);return i.a.createElement("div",{className:"main container"},i.a.createElement(S.a,{stackable:!0,columns:3,celled:"internally"},n.map((function(e){return e}))))}}]),a}(r.Component),J=X(Object(s.b)((function(e){return Object(k.a)({},e)}),(function(e){return Object(o.b)(n,e)}))(F)),z=a(443),V=(a(388),a(99)),Y=a(441),$=a(437),K=a(439),Q=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return i.a.createElement($.a,{size:"big",onSubmit:this.props.handleSubmit},i.a.createElement($.a.Group,{widths:"equal"},i.a.createElement($.a.Input,{required:!0,label:"The Name of your Awesome Character",placeholder:"The Flash",name:"name",value:this.props.name,onChange:this.props.handleChange})),i.a.createElement($.a.Group,{widths:"equal"},i.a.createElement($.a.Input,{required:!0,label:"Where did you find your character?",placeholder:"The Justice League",name:"shows",value:this.props.shows,onChange:this.props.handleChange})),i.a.createElement($.a.Group,{widths:"equal"},i.a.createElement(K.a,{inverted:!0,trigger:i.a.createElement($.a.Input,{required:!0,label:"What all stuff your character can do?",placeholder:"Runs fast, Lightning",name:"abilities",value:this.props.abilities,onChange:this.props.handleChange})},i.a.createElement(K.a.Content,null,"Please enter comma separated values"))),i.a.createElement($.a.Group,{widths:"equal"},i.a.createElement(K.a,{inverted:!0,trigger:i.a.createElement($.a.Input,{required:!0,label:"Paste in an image of your character",placeholder:"https://img1.looper.com/img/gallery/easter-eggs-in-the-flash-only-real-fans-noticed/intro-1576603048.jpg",name:"img",value:this.props.img,onChange:this.props.handleChange})},i.a.createElement(K.a.Content,null,"Please make sure it is a valid URL!"))),i.a.createElement(w.a,{loading:this.props.loading,color:"green",inverted:!0,type:"submit"},"Submit"))}}]),a}(r.Component);var Z=function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n.handleDismiss=n.handleDismiss.bind(Object(R.a)(n));var r=n.props.status;return"edit"===r?(n.state=Object(k.a)(Object(k.a)({},n.props),{},{err:""}),delete n.state[r]):n.state={name:"",shows:"",img:"",abilities:"",err:"",loading:!1},n}return Object(f.a)(a,[{key:"handleChange",value:function(e,t){var a=t.name,n=t.value;this.setState(Object(V.a)({},a,n))}},{key:"handleSubmit",value:function(){var e=Object(_.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submitting data now",this.state),this.setState({loading:!0}),delete(t=Object(k.a)({},this.state)).err,delete t.loading,e.next=7,A(t);case 7:if(0===(a=e.sent).status&&this.setState({loading:!1,err:a.message}),1!==a.status){e.next=15;break}return e.next=12,new Promise((function(e){return setTimeout(e,1500)}));case 12:this.props.doPutOne(a.character_id),this.props.hideForm(),this.setState({name:"",shows:"",img:"",abilities:"",err:"",loading:!1});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleDismiss",value:function(){this.setState({err:""})}},{key:"render",value:function(){return i.a.createElement(M.a,{piled:!0},this.state.err&&this.state.err.length>0?i.a.createElement(Y.a,{icon:!0,error:!0,onDismiss:this.handleDismiss},i.a.createElement(j.a,{name:"times circle"}),i.a.createElement(Y.a.Header,{floated:!0},this.state.err)):null,i.a.createElement(S.a,{columns:3,stackable:!0,celled:"internally"},i.a.createElement(S.a.Column,{floated:"left"},i.a.createElement(q,this.state)),i.a.createElement(S.a.Column,{floated:"right"},i.a.createElement(Q,Object.assign({handleChange:this.handleChange,handleSubmit:this.handleSubmit},this.state)))))}}]),a}(r.Component),ee=Object(s.b)((function(e){return Object(k.a)({},e)}),(function(e){return Object(o.b)(n,e)}))(Z);var te=function(e){return function(t){Object(g.a)(n,t);var a=Object(E.a)(n);function n(e){var t;return Object(p.a)(this,n),(t=a.call(this,e)).handleShow=function(){return t.setState({active:!0})},t.handleHide=function(){return t.setState({active:!1})},t.state={active:!1},t.handleShow=t.handleShow.bind(Object(R.a)(t)),t.handleHide=t.handleHide.bind(Object(R.a)(t)),t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.state.active;return i.a.createElement(z.a.Dimmable,{dimmed:t},i.a.createElement(e,{handleHide:this.handleHide,handleShow:this.handleShow}),i.a.createElement(z.a,{active:t,onClickOutside:this.handleHide,verticalAlign:"top"},i.a.createElement("div",{className:"builtform container"},i.a.createElement(ee,{hideForm:this.handleHide}))))}}]),n}(i.a.Component)}((function(e){return i.a.createElement("div",null,i.a.createElement(C,e),i.a.createElement(J,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,{store:b},i.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[246,1,2]]]);
//# sourceMappingURL=main.e232d39f.chunk.js.map