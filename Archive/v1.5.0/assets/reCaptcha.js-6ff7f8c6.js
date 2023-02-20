(async()=>{let R=await chrome.storage.local.get(null);const x="https://beta.nocaptchaai.com/solve",P={"Content-Type":"application/json",apikey:R.apikey},U=e=>document.querySelector(e);function j(){document.querySelector("#recaptcha-verify-button")?.click()}class o{static time(){return Date.now||(Date.now=()=>new Date().getTime()),Date.now()}static date(){return new Date}static sleep(t=1e3){return new Promise(r=>setTimeout(r,t))}static async random_sleep(t,r){const n=Math.floor(Math.random()*(r-t)+t);return await o.sleep(n)}}async function q(e){if(!e)throw new Error("A valid URL must be provided.");const t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch URL. Status code: ${t.status}`);const r=await t.blob(),n=new FileReader;return new Promise((g,c)=>{n.onloadend=()=>{n.result?g(n.result.replace(/^data:image\/(png|jpeg);base64,/,"")):c(new Error("Failed to convert to base64"))},n.readAsDataURL(r)})}function C(){return document.querySelector(".recaptcha-checkbox")!==null}function I(){return document.querySelector("#rc-imageselect")!==null}function L(){document.querySelector("#recaptcha-anchor")?.click()}async function W(e){A()||(await o.sleep(500),L())}function E(){return document.querySelector(".rc-doscaptcha-header")!==null}function A(){const e=document.querySelector(".recaptcha-checkbox")?.getAttribute("aria-checked")==="true",t=document.querySelector("#recaptcha-verify-button")?.disabled;return e||t}function $(){const e=[".rc-imageselect-incorrect-response"];for(const t of e)if(document.querySelector(t)?.style.display==="")return!0;return!1}function O(){const e=[".rc-imageselect-error-select-more",".rc-imageselect-error-dynamic-more",".rc-imageselect-error-select-something"];for(const t of e){const r=document.querySelector(t);if(r?.style.display===""||r?.tabIndex===0)return!0}return!1}function J(){console.log("skipping"),U("#recaptcha-reload-button")?.click()}function M(e){try{return e.classList.contains("rc-imageselect-tileselected")}catch{}return!1}function N(e){return e?.src?.trim()}function T(){const e=document.querySelector(".rc-imageselect-desc strong,.rc-imageselect-desc-no-canonical strong")?.innerText;if(e)return e}function b(){return new Promise(async e=>{for(;;){await o.sleep(100);const t=document.querySelectorAll(".rc-imageselect-tile"),r=document.querySelectorAll(".rc-imageselect-dynamic-selected");if(t.length>0&&r.length===0)return e(!0)}})}let D=null;function V(e=1e3){return new Promise(t=>{let r=!1;const n=setInterval(async()=>{if(r)return;r=!0;const g=document.querySelector(".rc-imageselect-instructions")?.innerText?.split(`
`);let c=await T();if(!c){r=!1;return}const i=g.length===3,a=document.querySelectorAll("table tr td");if(a.length!==9&&a.length!==16){r=!1;return}const h=[],s=Array(a.length).fill(null);let y=null,p=!1,S=0;for(const f of a){const _=f?.querySelector("img");if(!_){r=!1;return}const d=N(_);if(!d||d===""){r=!1;return}_.naturalWidth>=300?y=d:_.naturalWidth==100&&(s[S]=d,p=!0),h.push(f),S++}p&&(y=null);const u=JSON.stringify([y,s]);if(D===u){r=!1;return}return D=u,clearInterval(n),r=!1,t({task:c,is_hard:i,cells:h,background_url:y,urls:s})},e)})}async function z(){const e=[...document.querySelectorAll('iframe[src*="/recaptcha/api2/anchor"]'),...document.querySelectorAll('iframe[src*="/recaptcha/enterprise/anchor"]')];if(e.length===0)return!1;for(const t of e)if(window.getComputedStyle(t).visibility==="visible")return await F(!0);return await F(!1)}async function F(e){return e}async function B(){const e=[...document.querySelectorAll('iframe[src*="/recaptcha/api2/bframe"]'),...document.querySelectorAll('iframe[src*="/recaptcha/enterprise/bframe"]')];if(e.length>0){for(const t of e)if(window.getComputedStyle(t).visibility==="visible")return!0;return!1}}async function G(){if(console.log("on_image_frame"),E()){console.log("rate limited");return}if(console.log("not rate limited"),A()||(console.log("not solved"),!k&&$()?(m=[],k=!0):k=!1,console.log("not incorrect"),(O()||$())&&(m=[],J()),console.log("not error"),!await b()))return;console.log("images ready");const{task:t,is_hard:r,cells:n,background_url:g,urls:c}=await V();console.log(t);const i=n.length==9?33:44;let a=[],h,s=[];if(g===null){h="split_33";for(let l=0;l<c.length;l++){const v=c[l],H=n[l];v&&!m.includes(v)&&(a[l]=await q(v),s.push(H))}console.log(a)}else a.push(await q(g)),h=i,s=n,console.log(s);a={...a};const y=o.time(),p=await T();console.log("target",p);const u=await(await fetch(x,{method:"POST",headers:P,body:JSON.stringify({images:a,target:p,type:h,method:"recaptcha2"})})).json();u.error==="Unauthorized"&&(window.alert(u.message),await o.sleep(3e3),window.open("https://dash.noCaptchaAi.com"));const f=u.solution;console.log(f);const d=1500-(o.time()-y);d>0&&await o.sleep(d);let w=f.length;console.log("length",f.length),console.log("clicks",w);for(let l of f)await u.status==="solved"&&!M(s[l])&&(s[l]?.click(),await o.sleep(300));for(const l of c)m.push(l),m.length>9&&m.shift();console.log("n =",i,"is hard",r,"clicks = ",w,"onImageReady",await b()),(i===33&&r&&w===0&&await b()||i===33&&!r||i===44)&&(await o.sleep(200),j(),w=0)}let k=!1,m=[];for(;;)await o.sleep(1e3),await B(),await z(),C()?await W():I()&&await G()})();