let w=await chrome.storage.local.get(null);const I="https://beta.nocaptchaai.com/solve",O={"Content-Type":"application/json",apikey:w.apikey},j=t=>document.querySelector(t);function x(){document.querySelector("#recaptcha-verify-button")?.click()}class o{static time(){return Date.now||(Date.now=()=>new Date().getTime()),Date.now()}static date(){return new Date}static sleep(r=1e3){return new Promise(e=>setTimeout(e,r))}static async random_sleep(r,e){const n=Math.floor(Math.random()*(e-r)+r);return await o.sleep(n)}}async function T(t){if(!t)throw new Error("A valid URL must be provided.");const r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch URL. Status code: ${r.status}`);const e=await r.blob(),n=new FileReader;return new Promise((a,l)=>{n.onloadend=()=>{n.result?a(n.result.replace(/^data:image\/(png|jpeg);base64,/,"")):l(new Error("Failed to convert to base64"))},n.readAsDataURL(e)})}async function F(t=500){return new Promise(r=>{let e=!1;if(e)return;const n=setInterval(()=>{e=!0;const a=document.querySelectorAll("table tr td");if(!a)return;const l=a.length;return clearInterval(n),e=!1,r({e:a,length:l})},t)})}function L(){document.querySelector("#recaptcha-anchor")?.click()}function U(){return document.querySelector(".rc-doscaptcha-header")!==null}function C(){const t=document.querySelector(".recaptcha-checkbox")?.getAttribute("aria-checked")==="true",r=document.querySelector("#recaptcha-verify-button")?.disabled;return t||r}function R(){const t=[".rc-imageselect-incorrect-response"];for(const r of t)if(document.querySelector(r)?.style.display==="")return!0;return!1}function E(){const t=[".rc-imageselect-error-select-more",".rc-imageselect-error-dynamic-more",".rc-imageselect-error-select-something"];for(const r of t){const e=document.querySelector(r);if(e?.style.display===""||e?.tabIndex===0)return!0}return!1}function J(){console.log("skipping"),j("#recaptcha-reload-button")?.click()}function M(t){try{return t.classList.contains("rc-imageselect-tileselected")}catch{}return!1}function N(t){return t?.src?.trim()}function A(){const t=document.querySelector(".rc-imageselect-desc strong,.rc-imageselect-desc-no-canonical strong")?.innerText;if(t)return t}function _(t=15e3){return console.log("on_images_ready"),new Promise(async r=>{const e=o.time();for(;;){const n=document.querySelectorAll(".rc-imageselect-tile"),a=document.querySelectorAll(".rc-imageselect-dynamic-selected");if(n.length>0&&a.length===0)return r(!0);if(o.time()-e>t)return r(!1);await o.sleep(100)}})}let D=null;function W(t=1e3){return new Promise(r=>{let e=!1;const n=setInterval(async()=>{if(e)return;e=!0;const a=document.querySelector(".rc-imageselect-instructions")?.innerText?.split(`
`);let l=await A();if(!l){e=!1;return}const u=a.length===3,c=document.querySelectorAll("table tr td");if(c.length!==9&&c.length!==16){e=!1;return}const d=[],i=Array(c.length).fill(null);let g=null,b=!1,k=0;for(const m of c){const y=m?.querySelector("img");if(!y){e=!1;return}const f=N(y);if(!f||f===""){e=!1;return}y.naturalWidth>=300?g=f:y.naturalWidth==100&&(i[k]=f,b=!0),d.push(m),k++}b&&(g=null);const p=JSON.stringify([g,i]);if(D===p){e=!1;return}return D=p,clearInterval(n),e=!1,r({task:l,is_hard:u,cells:d,background_url:g,urls:i})},t)})}async function B(){if(U()){console.log("rate limited");return}if(C()||(!q&&R()?(h=[],q=!0):q=!1,(E()||R())&&(h=[],J()),!await _()))return;const{task:r,is_hard:e,cells:n,background_url:a,urls:l}=await W();console.log(r);const u=n.length==9?33:44;let c=[],d,i=[];if(a===null){d="split_33";for(let s=0;s<l.length;s++){const v=l[s],P=n[s];v&&!h.includes(v)&&(c[s]=await T(v),i.push(P))}}else c.push(await T(a)),d=u,i=n;c={...c};const g=o.time(),b=await A(),p=await(await fetch(I,{method:"POST",headers:O,body:JSON.stringify({images:c,target:b,type:d,method:"recaptcha2"})})).json(),m=p.solution;console.log(m);const f=1500-(o.time()-g);f>0&&await o.sleep(f);let S=0;for(let s of m)m[s]!==!1&&(S++,await p.status==="solved"&&!M(i[s])&&(i[s]?.click(),await o.sleep(300)));for(const s of l)h.push(s),h.length>9&&h.shift();console.log(u,e,S,await _()),(u===33&&e&&S===0&&await _()||u===33&&!e||u===44)&&(await o.sleep(200),x())}let q=!1,h=[];async function z(){console.log("RautoOpen",w.RautoOpen),w.apikey&&w.power!==!1&&w.reCap!==!1&&(L(),await _(),await B(),console.log("tables",await F()),console.log("target",await A()),console.log("image ready",await _()))}let $=await chrome.storage.local.get(null);for(;!(!$.apikey||$.power===!1||$.reCap===!1);)console.log("looping"),await o.sleep(1e3),await z();
