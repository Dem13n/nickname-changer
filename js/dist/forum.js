module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["components/EditUserModal"]},,function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["utils/extractText"]},,,function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),i=n(7),s=n.n(i),u=n(8),c=n.n(u),p=n(5),l=n.n(p),d=n(2),f=n.n(d),h=n(3),y=n(4),b=function(e){function t(){return e.apply(this,arguments)||this}Object(h.a)(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),this.displayname=m.prop(app.session.user.displayName())},n.className=function(){return"ChangeNickNameModal Modal--small"},n.title=function(){return app.translator.trans("dem13n.forum.nickname.change")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"text",autocomplete:"off",name:"nickname",className:"FormControl",bidi:this.displayname,disabled:this.loading})),m("div",{className:"Form-group"},f.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("dem13n.forum.nickname.submit_button")}))))},n.onsubmit=function(e){var t=this;e.preventDefault(),this.displayname()===app.session.user.username()||!this.displayname()&&app.session.user.displayName()===app.session.user.username()?this.hide():(this.loading=!0,app.session.user.save({nickname:this.displayname()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){t.loading=!1,m.redraw()})))},t}(n.n(y).a);r.a.initializers.add("dem13n-nickname-changer",(function(){Object(a.extend)(s.a.prototype,"accountItems",(function(e){this.displayname=m.prop(r.a.session.user.displayName()),this.username=m.prop(r.a.session.user.username()),e.add("ChangeNickName",f.a.component({children:r.a.translator.trans("dem13n.forum.nickname.change"),className:"Button",disabled:!0!==r.a.session.user.data.attributes.canPermanentNicknameChange&&!(1==r.a.forum.attribute("NicknameChange")||this.username()==this.displayname()),onclick:function(){return r.a.modal.show(new b)}}))})),Object(a.extend)(l.a.prototype,"init",(function(){var e=this.props.user;this.displayname=m.prop(e.displayName()===this.username()?"":e.displayName())})),Object(a.extend)(l.a.prototype,"fields",(function(e){e.add("nickname",m("div",{className:"Form-group"},m("label",null,r.a.translator.trans("dem13n.forum.nickname.head_title")),m("input",{className:"FormControl",placeholder:c()(r.a.translator.trans("dem13n.forum.nickname.new_nickname")),bidi:this.displayname})),100)})),Object(a.extend)(l.a.prototype,"data",(function(e){var t=this.props.user;this.displayname()!==this.username()?this.displayname()!==m.prop(t.displayName()===this.username()?"":t.displayName())()&&(e.nickname=this.displayname()):this.hide()}))}))}]);
//# sourceMappingURL=forum.js.map