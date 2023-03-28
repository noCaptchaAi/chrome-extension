function u(o){document.querySelectorAll(".challenge-interface").forEach(a=>{const e=document.createElement("img");e.src="https://avatars.githubusercontent.com/u/110127579",e.style.display="block",e.style.width="40px",e.style.height="40px",e.style.zIndex="99999",e.style.left="50%",e.style.marginLeft="-18px",e.style.cursor="pointer",e.style.filter="drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.5))",e.style.animation="spin 1s linear infinite",e.style.animationDelay="20s",e.style.position="absolute",e.style.bottom="-3px",e.onclick=()=>{window.open("https://nocaptchaai.com","_blank")},a.appendChild(e)})}async function m(o){const t=document.createElement("div");t.id="jsNotif",t.style.position="fixed",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.background="linear-gradient(to right, #00b4db, #0083b0)",t.style.color="#fff",t.style.fontSize="30px",t.style.padding="30px",t.style.borderRadius="10px",t.style.boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)",document.body.appendChild(t);const a=15;for(let n=0;n<o.length;n++)await d(a),t.textContent+=o[n];const e=document.createElement("style");e.textContent=`@keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #jsNotif {
    animation: fade-in-out 3s ease-in-out forwards;
  }`,document.head.appendChild(e)}function d(o){return new Promise(t=>setTimeout(t,o))}class r{static now(){return Date.now()}static currentDate(){return new Date}static sleep(t){return new Promise(a=>setTimeout(a,t))}static async randomSleep(t,a){const e=Math.floor(Math.random()*(a-t)+t);return await r.sleep(e)}}const f=async(o,t,a)=>{const e=o,n=t,l=await(await fetch(a)).arrayBuffer(),c=new Blob([l],{type:"audio/mp3"}),i=new FormData;i.append("audio",c,"audio.mp3");const s=await fetch(e,{method:"POST",headers:{apikey:n},body:i}),p=await s.json();return s.ok?p.solution:s.message};export{r as T,u as a,f as g,m as j};
