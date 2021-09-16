"use strict";(self.webpackChunkrecipe_book=self.webpackChunkrecipe_book||[]).push([[641],{8641:(Z,d,l)=>{l.r(d),l.d(d,{AuthModule:()=>x});var s=l(665),p=l(266),g=l(4466),t=l(639);let m=(()=>{class n{constructor(){this.close=new t.vpe}onClose(){this.close.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.onClose()}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return o.onClose()}),t._uU(6,"Close"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(o.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:white;box-shadow:0 2px 8px #00000042}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),n})(),u=(()=>{class n{constructor(e){this.viewContainerRef=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","appPlaceholder",""]]}),n})();var h=l(100),f=l(8583);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[[1,"lds-ring"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div"),t.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #000;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#000 transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),n})();function v(n,i){}function C(n,i){1&n&&(t.TgZ(0,"div",5),t._UZ(1,"app-loading-spinner"),t.qZA())}function _(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",6,7),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.MAs(1);return t.oxw().onSubmit(r)}),t.TgZ(2,"div",8),t.TgZ(3,"label",9),t._uU(4,"Email"),t.qZA(),t._UZ(5,"input",10),t.qZA(),t.TgZ(6,"div",8),t.TgZ(7,"label",11),t._uU(8,"Password"),t.qZA(),t._UZ(9,"input",12),t.qZA(),t.TgZ(10,"div"),t.TgZ(11,"button",13),t._uU(12),t.qZA(),t._uU(13," | "),t.TgZ(14,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSwitchMode()}),t._uU(15),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.MAs(1),o=t.oxw();t.xp6(11),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",o.isLoginMode?"Login":"Sign Up"," "),t.xp6(3),t.hij(" Switch To ",o.isLoginMode?"Sign Up":"Login"," ")}}let A=(()=>{class n{constructor(e,o,r){this.authService=e,this.router=o,this.componentFactoryResolver=r,this.isLoginMode=!0,this.isLoading=!1,this.error=""}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(e){if(!e.valid)return;const o=e.value.email,r=e.value.password;let c;this.isLoading=!0,c=this.isLoginMode?this.authService.login(o,r):this.authService.signup(o,r),c.subscribe(a=>{console.log(a),this.isLoading=!1,this.router.navigate(["/recipes"])},a=>{console.log(a),this.error=a,this.showErrorAlert(a),this.isLoading=!1}),e.reset()}onErrorHandle(){this.error=""}showErrorAlert(e){const o=this.componentFactoryResolver.resolveComponentFactory(m),r=this.alertHost.viewContainerRef;r.clear();const c=r.createComponent(o);c.instance.message=e,this.closeSub=c.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),r.clear()})}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.e),t.Y36(p.F0),t.Y36(t._Vd))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],viewQuery:function(e,o){if(1&e&&t.Gf(u,5),2&e){let r;t.iGM(r=t.CRH())&&(o.alertHost=r.first)}},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12"],["style","text-align: center",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["required","","type","email","ngModel","","id","email","name","email","email","",1,"form-control"],["for","password"],["required","","type","password","name","password","ngModel","","id","password","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,v,0,0,"ng-template",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,C,2,0,"div",3),t.YNc(4,_,16,3,"form",4),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading))},directives:[u,f.O5,b,s._Y,s.JL,s.F,s.Fj,s.Q7,s.JJ,s.On,s.on,s.wO],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.m,s.u5,p.Bz.forChild([{path:"",component:A}])]]}),n})()}}]);