import './polyfills.server.mjs';
import{$ as Pe,A as h,B as f,C as Me,D as Ae,E as _,F as ne,G as v,H as re,I as Ee,J as Fe,K as we,L as j,N as Ie,S as Se,U as Ne,V as w,W as p,X as oe,Z as xe,_ as Oe,a as me,b as ge,c as _e,ca as Te,d as ve,e as k,f as R,g as u,h as y,i as G,ia as se,j as d,k as c,l as ye,m as J,n as Q,o as Ce,p as A,q as ee,r as E,s,t as te,u as F,v as g,w as Ve,x as De,y as ie,z as be}from"./chunk-WNEOMVCC.mjs";import{a,b as l}from"./chunk-5XUXGTUW.mjs";var Le=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(te),s(ee))}}static{this.\u0275dir=c({type:i})}}return i})(),lt=(()=>{class i extends Le{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ce(i)))(r||i)}})()}static{this.\u0275dir=c({type:i,features:[g]})}}return i})(),We=new y("");var ut={provide:We,useExisting:R(()=>z),multi:!0};function dt(){let i=oe()?oe().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ct=new y(""),z=(()=>{class i extends Le{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(te),s(ee),s(ct,8))}}static{this.\u0275dir=c({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&_("input",function(m){return r._handleInput(m.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(m){return r._compositionEnd(m.target.value)})},features:[j([ut]),g]})}}return i})();var $e=new y(""),qe=new y("");function ze(i){return i!=null}function Ze(i){return Ie(i)?ge(i):i}function Xe(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Ye(i,e){return e.map(t=>t(i))}function ht(i){return!i.validate}function Ke(i){return i.map(e=>ht(e)?e:t=>e.validate(t))}function ft(i){if(!i)return null;let e=i.filter(ze);return e.length==0?null:function(t){return Xe(Ye(t,e))}}function le(i){return i!=null?ft(Ke(i)):null}function pt(i){if(!i)return null;let e=i.filter(ze);return e.length==0?null:function(t){let n=Ye(t,e).map(Ze);return ve(n).pipe(_e(Xe))}}function ue(i){return i!=null?pt(Ke(i)):null}function ke(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function mt(i){return i._rawValidators}function gt(i){return i._rawAsyncValidators}function ae(i){return i?Array.isArray(i)?i:[i]:[]}function U(i,e){return Array.isArray(i)?i.includes(e):i===e}function Re(i,e){let t=ae(e);return ae(i).forEach(r=>{U(t,r)||t.push(r)}),t}function Ge(i,e){return ae(e).filter(t=>!U(i,t))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},D=class extends H{get formDirective(){return null}get path(){return null}},P=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},_t={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ai=l(a({},_t),{"[class.ng-submitted]":"isSubmitted"}),Je=(()=>{class i extends L{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(P,2))}}static{this.\u0275dir=c({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ie("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[g]})}}return i})(),Qe=(()=>{class i extends L{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(D,10))}}static{this.\u0275dir=c({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&ie("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[g]})}}return i})();var I="VALID",B="INVALID",C="PENDING",S="DISABLED",b=class{},W=class extends b{constructor(e,t){super(),this.value=e,this.source=t}},x=class extends b{constructor(e,t){super(),this.pristine=e,this.source=t}},O=class extends b{constructor(e,t){super(),this.touched=e,this.source=t}},V=class extends b{constructor(e,t){super(),this.status=e,this.source=t}};function et(i){return(Z(i)?i.validators:i)||null}function vt(i){return Array.isArray(i)?le(i):i||null}function tt(i,e){return(Z(e)?e.asyncValidators:i)||null}function yt(i){return Array.isArray(i)?ue(i):i||null}function Z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ct(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new k(1e3,"");if(!n[t])throw new k(1001,"")}function Vt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new k(1002,"")})}var $=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=w(()=>this.statusReactive()),this.statusReactive=F(void 0),this._pristine=w(()=>this.pristineReactive()),this.pristineReactive=F(!0),this._touched=w(()=>this.touchedReactive()),this.touchedReactive=F(!1),this._events=new me,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===B}get pending(){return this.status==C}get disabled(){return this.status===S}get enabled(){return this.status!==S}get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new O(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new O(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(e={}){this.status=C;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new V(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,n)),this._events.next(new V(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===C)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,t)),this._events.next(new V(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new V(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(B)?B:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new x(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=vt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=yt(this._rawAsyncValidators)}},q=class extends ${constructor(e,t,n){super(et(t),tt(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Vt(this,!0,e),Object.keys(e).forEach(n=>{Ct(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var de=new y("CallSetDisabledState",{providedIn:"root",factory:()=>ce}),ce="always";function Dt(i,e){return[...e.path,i]}function it(i,e,t=ce){nt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Mt(i,e),Et(i,e),At(i,e),bt(i,e)}function je(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function bt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function nt(i,e){let t=mt(i);e.validator!==null?i.setValidators(ke(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=gt(i);e.asyncValidator!==null?i.setAsyncValidators(ke(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();je(e._rawValidators,r),je(e._rawAsyncValidators,r)}function Mt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&rt(i,e)})}function At(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&rt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function rt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Et(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ft(i,e){i==null,nt(i,e)}function wt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function It(i){return Object.getPrototypeOf(i.constructor)===lt}function St(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Nt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===z?t=o:It(o)?n=o:r=o}),r||n||t||null}var xt={provide:D,useExisting:R(()=>he)},N=Promise.resolve(),he=(()=>{class i extends D{get submitted(){return p(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=w(()=>this.submittedReactive()),this.submittedReactive=F(!1),this._directives=new Set,this.ngSubmit=new A,this.form=new q({},le(t),ue(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){N.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),it(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){N.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){N.then(()=>{let n=this._findContainer(t.path),r=new q({});Ft(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){N.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){N.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),St(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(s($e,10),s(qe,10),s(de,8))}}static{this.\u0275dir=c({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&_("submit",function(m){return r.onSubmit(m)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[j([xt]),g]})}}return i})();function Be(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ue(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ot=class extends ${constructor(e=null,t,n){super(et(t),tt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Pt={provide:P,useExisting:R(()=>fe)},He=Promise.resolve(),fe=(()=>{class i extends P{constructor(t,n,r,o,m,at){super(),this._changeDetectorRef=m,this.callSetDisabledState=at,this.control=new Ot,this._registered=!1,this.name="",this.update=new A,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Nt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),wt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){it(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){He.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Ne(n);He.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Dt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(s(D,9),s($e,10),s(qe,10),s(We,10),s(Se,8),s(de,8))}}static{this.\u0275dir=c({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[j([Pt]),g,ye]})}}return i})(),ot=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=c({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Tt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=u({})}}return i})();var st=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:de,useValue:t.callSetDisabledState??ce}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=d({type:i})}static{this.\u0275inj=u({imports:[Tt]})}}return i})();var Rt=[],X=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=d({type:i});static \u0275inj=u({imports:[se.forRoot(Rt),se]})};function jt(i,e){if(i&1){let t=Ae();h(0,"div",0)(1,"div",5),v(2),f(),h(3,"div",6),_("click",function(){let r=J(t).index,o=ne();return Q(o.toggleDone(r))}),v(4),f(),h(5,"button",7),_("click",function(){let r=J(t).index,o=ne();return Q(o.deleteTodo(r))}),v(6,"Remove"),f()()}if(i&2){let t=e.$implicit,n=e.index;be("todo",t.completed?"done":"",""),E(2),re(n),E(2),re(t.content)}}var Y=class i{constructor(){}todos;inputTodo="";ngOnInit(){this.todos=[]}toggleDone(e){this.todos.map((t,n)=>(n==e&&(t.completed=!t.completed),t))}deleteTodo(e){this.todos=this.todos.filter((t,n)=>n!==e)}addTodo(){this.todos.push({content:this.inputTodo,completed:!1}),this.inputTodo=""}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=G({type:i,selectors:[["app-todo"]],decls:6,vars:2,consts:[[1,"todos"],[3,"ngSubmit"],["type","text","name","inputTodo","placeholder","Enter your todo",1,"todo-input",3,"ngModelChange","ngModel"],["type","submit"],["class","todos",3,"class",4,"ngFor","ngForOf"],[1,"id"],[1,"content",3,"click"],[1,"delete",3,"click"]],template:function(t,n){t&1&&(h(0,"div",0)(1,"form",1),_("ngSubmit",function(){return n.addTodo()}),h(2,"input",2),we("ngModelChange",function(o){return Fe(n.inputTodo,o)||(n.inputTodo=o),o}),f(),h(3,"button",3),v(4,"Add Todo"),f()()(),Ve(5,jt,7,5,"div",4)),t&2&&(E(2),Ee("ngModel",n.inputTodo),E(3),De("ngForOf",n.todos))},dependencies:[xe,ot,z,Je,Qe,fe,he],styles:[".todos[_ngcontent-%COMP%]{margin:20px}.todo[_ngcontent-%COMP%]{display:flex;align-items:center;margin:5px 0}.done[_ngcontent-%COMP%]{text-decoration:line-through}.content[_ngcontent-%COMP%]{flex:1;cursor:pointer;margin-left:10px}.delete[_ngcontent-%COMP%]{margin-left:10px;color:red}.id[_ngcontent-%COMP%]{width:30px;font-weight:700;margin-right:10px}"]})};var M=class i{title="ToDoList";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=G({type:i,selectors:[["app-root"]],decls:3,vars:0,template:function(t,n){t&1&&(h(0,"p"),v(1,"To Do List!"),f(),Me(2,"app-todo"))},dependencies:[Y]})};var K=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=d({type:i,bootstrap:[M]});static \u0275inj=u({providers:[Pe()],imports:[Oe,X,st]})};var pe=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=d({type:i,bootstrap:[M]});static \u0275inj=u({imports:[K,Te]})};export{pe as a};
