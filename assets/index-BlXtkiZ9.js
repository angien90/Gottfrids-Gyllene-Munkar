(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(a){if(a.ep)return;a.ep=!0;const e=t(a);fetch(a.href,e)}})();const l=[{id:0,namn:"Kolakungen",img:{url:"./img/munk_med_kola_glasyr.png",width:250,height:250,alt:"Munk med kolaglasyr och kola bitar"},raiting:3,kategori:"Övrigt",pris:15,amount:0},{id:1,namn:"Chokladhjulet",img:{url:"./img/munk_choklad_glasyr.png",width:250,height:250,alt:"Munk med chokladglasyr"},raiting:4,kategori:"Choklad",pris:20,amount:0},{id:2,namn:"Mörkets mysterium",img:{url:"./img/munk_extra_choklad.png",width:250,height:250,alt:"Munk med chokladglasyr och chokladbitar"},raiting:4,kategori:"Choklad",pris:25,amount:0},{id:3,namn:"Smurfmunken",img:{url:"./img/munk_gron_glasyr_med_musli.png",width:250,height:250,alt:"Munk med päronglasyr och musli"},raiting:3,kategori:"Glutenfri",pris:25,amount:0},{id:4,namn:"Guldklumpen",img:{url:"./img/munk_med_honungs_glasyr.png",width:250,height:250,alt:"Munk med honungsglasyr och choklad strössel"},raiting:5,kategori:"Övrigt",pris:20,amount:0},{id:5,namn:"Rosa moln",img:{url:"./img/munk_rosa_glasyr_med_florsocker.png",width:250,height:250,alt:"Munk med hallonglasyr och florsocker"},raiting:5,kategori:"Glutenfri",pris:25,amount:0},{id:6,namn:"Smaklösa Sven",img:{url:"./img/munk_utan_glasyr.png",width:250,height:250,alt:"Munk utan glasyr"},raiting:2,kategori:"Övrigt",pris:10,amount:0},{id:7,namn:"Rosa prinsessan",img:{url:"./img/munk_rosa_glasyr_med_godis.png",width:250,height:250,alt:"Munk med hallonglasyr och godis"},raiting:3,kategori:"Hallon",pris:25,amount:0},{id:8,namn:"Trollkarlens förtrollning",img:{url:"./img/munk_choklad_glasyr_med_notter_och_bar.png",width:250,height:250,alt:"Munk med chokladglasyr samt bär och nötter"},raiting:5,kategori:"Choklad",pris:15,amount:0},{id:9,namn:"C-vitamin-kungen",img:{url:"./img/munk_orange_gasyr_med_apelsin.png",width:250,height:250,alt:"Munk med apelsinglasyr och apelsinbitar"},raiting:4,kategori:"Glutenfri",pris:25,amount:0},{id:10,namn:"Rosapantern",img:{url:"./img/munk_rosa_glasyr_med_strossel.png",width:250,height:250,alt:"Munk med hallonglasyr och strössel"},raiting:3,kategori:"Övrigt",pris:20,amount:0},{id:11,namn:"Nötskallen",img:{url:"./img/munk_choklad_och_notter.png",width:250,height:250,alt:"Munk med chokladglasyr och nötter"},raiting:5,kategori:"Glutenfri",pris:20,amount:0},{id:12,namn:"Polarbjörnen",img:{url:"./img/munk_vit_glasyr_med_choklad_strossel.png",width:250,height:250,alt:"Munk med vit glasyr och choklad strössel"},raiting:4,kategori:"Övrigt",pris:25,amount:0}],R=document.querySelector("#product-list");function J(){R.inneHTML="",l.forEach(t=>{let o=t.pris;c()&&(o=Math.round(t.pris*1.15)),R.innerHTML+=`
      <article class="eachProduct">
        <h3>${t.namn}</h3>
        <img src="${t.img.url}" width="${t.img.width}" height="${t.img.height}" alt="${t.img.alt}"> 
        <p>${t.img.alt}</p>
        <div class="product-information">
          <h4>${v(t.raiting)}</h4>
          <h4>Kategori: ${t.kategori}</h4>
          <h4>${o} kr/st</h4>
        </div>
        
        <div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${t.id}">remove_shopping_cart</button>
          <input type="number" name="counter" "min="0" value="${t.amount}" id="input-${t.id}" aria-label="amount">
          <button class="add material-symbols-outlined" id="add-${t.id}">add_shopping_cart</button>
        </div>
      </article>
    `}),document.querySelectorAll("button.remove").forEach(t=>{t.addEventListener("click",y)}),document.querySelectorAll("button.add").forEach(t=>{t.addEventListener("click",E)}),document.querySelectorAll('input[name="counter"]').forEach(t=>{t.addEventListener("input",o=>{const a=parseInt(o.target.id.replace("input-","")),e=parseInt(o.target.value)||0;p(a,e),u(),m()})})}J();function y(n){const r=Number(n.target.id.replace("remove-",""));console.log("Du klickade på ID:",r);const t=l.findIndex(o=>o.id===r);if(console.log("Okjetet är:",t),t===-1){console.error("Kolla att id:t är rätt.");return}if(l[t].amount>0){l[t].amount-=1;const a=n.target.closest(".eachProduct").querySelector("input");a.value=l[t].amount}else console.log("Du kan inte ha ett negativt antal produkter.");u(),m()}function E(n){const r=Number(n.target.id.replace("add-","")),t=l.findIndex(o=>o.id===r);if(t!==-1){l[t].amount+=1;const a=n.target.closest(".eachProduct").querySelector("input");a.value=l[t].amount}else console.error("Kunde inte hitta produkten med ID:",r);u(),m()}function v(n){const r=String(n).indexOf(".");let t="";for(let o=0;o<n;o++)t+="<span>⭐</span>";return r!==-1&&(t+="<span></span>"),t}function u(){const n=l.filter(t=>t.amount>0),r=document.getElementById("cart");r.innerHTML="",n.forEach(t=>{let o=t.pris;c()&&(o=Math.round(t.pris*1.15));const a=document.createElement("div");a.classList.add("cart-item"),a.innerHTML=`
      <div class="product-cart">
        <img src="${t.img.url}" alt="${t.img.alt}">
        <h3>${t.namn}</h3>
        <h4>${t.amount} st á ${o} kr</h4> 
        <h4>Pris: ${t.amount*o} kr</h4> 
      </div>
    `,r.appendChild(a)}),l.reduce((t,o)=>t+o.amount,0),at()}function p(n,r){const t=l.find(o=>o.id===n);t&&(t.amount=r)}document.querySelectorAll('input[name="counter"]').forEach(n=>{n.addEventListener("input",r=>{const t=parseInt(r.target.id.replace("input-","")),o=parseInt(r.target.value)||0;p(t,o),u()})});function at(){let n=0;document.querySelectorAll('input[name="counter"]').forEach(o=>{const a=parseInt(o.value)||0;n+=a});const t=document.querySelector(".cart-count");t.textContent=n>0?n:"",t.setAttribute("data-count",n)}function m(){let n=0,r=0;l.forEach(d=>{const k=document.getElementById(`input-${d.id}`)?parseInt(document.getElementById(`input-${d.id}`).value)||0:d.amount;d.amount=k;let q=d.pris;c()&&(q=Math.round(d.pris*1.15)),n+=k*q,r+=k});const t=parseFloat(lt())+parseFloat(T(n)),o=st(r,n),a=document.getElementById("totalCost");a.textContent=`Totalt: ${n+o-t} kr`;const e=document.getElementById("totalSum");e.textContent=`${n+o-t} kr`;const i=document.getElementById("discount");i.textContent=`Din rabatt: ${t} kr`;const s=document.getElementById("shippingCost");s.textContent=`Din fraktkostnad: ${o} kr`,T(n),dt()}function st(n,r){return n>15?0:25+.1*r}function lt(){let n=0;return l.forEach(r=>{r.amount>=10&&(n+=r.amount*r.pris*.1)}),n}function T(n){const r=new Date,t=r.getDay()===1,o=r.getHours()<10,a=document.getElementById("discount-summary");if(t&&o){const e=(n*.1).toFixed(2);return a.textContent=`Grattis! Du får idag måndagsrabatt så vi drar ytterligare ${e} kr från ditt köp`,e}else return a.textContent="",0}function c(){const n=new Date,r=n.getDay(),t=n.getHours();return r===5&&t>=15||r===6||r===0&&t<3}function dt(){const n=l.reduce((t,o)=>t+o.amount*o.pris,0),r=document.getElementById("invoice");n>800?(r.disabled=!0,document.getElementById("paymentMethodErrorMessage").textContent=" Faktura är inte tillgänglig vid köp över 800 kr!"):(r.disabled=!1,document.getElementById("paymentMethodErrorMessage").textContent="")}function Q(n){const r=[...l];r.sort((e,i)=>n?e.namn.localeCompare(i.namn):i.namn.localeCompare(e.namn));const t=document.getElementById("product-list");t.innerHTML="",r.forEach(e=>{let i=e.pris;c()&&(i=Math.round(e.pris*1.15));const s=document.createElement("div");s.classList.add("eachProduct"),s.innerHTML=`
      <h3>${e.namn}</h3>
      <img src="${e.img.url}" alt="${e.img.alt}">
      <p>${e.img.alt}</p>
      <div class="product-information">
        <h4>${v(e.raiting)}</h4>
        <h4>Kategori: ${e.kategori}</h4>
        <h4>${i} kr/st</h4> <!-- Visa justerat pris -->
      </div>
      
      <div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${e.id}">remove_shopping_cart</button>
          <input type="number" name="counter" "min="0" value="${e.amount}" id="input-${e.id}" aria-label="amount">
          <button class="add material-symbols-outlined" id="add-${e.id}">add_shopping_cart</button>
        </div>
    `,t.appendChild(s)}),document.querySelectorAll("button.remove").forEach(e=>{e.addEventListener("click",y)}),document.querySelectorAll("button.add").forEach(e=>{e.addEventListener("click",E)}),document.querySelectorAll('input[name="counter"]').forEach(e=>{e.addEventListener("input",i=>{const s=parseInt(i.target.id.replace("input-","")),d=parseInt(i.target.value)||0;p(s,d),u(),m()})})}const U=document.getElementById("sortName");U.addEventListener("click",()=>{Q(!0)});let I=!0;U.addEventListener("click",()=>{Q(I),I=!I});function X(n){const r=[...l];r.sort((e,i)=>n?e.kategori.localeCompare(i.kategori):i.kategori.localeCompare(e.kategori));const t=document.getElementById("product-list");t.innerHTML="",r.forEach(e=>{let i=e.pris;c()&&(i=Math.round(e.pris*1.15));const s=document.createElement("div");s.classList.add("eachProduct"),s.innerHTML=`
      <h3>${e.namn}</h3>
      <img src="${e.img.url}" alt="${e.img.alt}">
      <p>${e.img.alt}</p>
      <div class="product-information">
        <h4>${v(e.raiting)}</h4>
        <h4>Kategori: ${e.kategori}</h4>
        <h4>${i} kr/st</h4> 
      </div>
      
      <div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${e.id}">remove_shopping_cart</button>
          <input type="number" name="counter" "min="0" value="${e.amount}" id="input-${e.id}" aria-label="amount">
          <button class="add material-symbols-outlined" id="add-${e.id}">add_shopping_cart</button>
        </div>
    `,t.appendChild(s)}),document.querySelectorAll("button.remove").forEach(e=>{e.addEventListener("click",y)}),document.querySelectorAll("button.add").forEach(e=>{e.addEventListener("click",E)}),document.querySelectorAll('input[name="counter"]').forEach(e=>{e.addEventListener("input",i=>{const s=parseInt(i.target.id.replace("input-","")),d=parseInt(i.target.value)||0;p(s,d),u(),m()})})}const Y=document.getElementById("sortCategory");Y.addEventListener("click",()=>{X(!0)});let b=!0;Y.addEventListener("click",()=>{X(b),b=!b});function ut(n){const r=[...l];r.sort((e,i)=>n?e.pris-i.pris:i.pris-e.pris);const t=document.getElementById("product-list");t.innerHTML="",r.forEach(e=>{let i=e.pris;c()&&(i=Math.round(e.pris*1.15));const s=document.createElement("div");s.classList.add("eachProduct"),s.innerHTML=`
      <h3>${e.namn}</h3>
      <img src="${e.img.url}" alt="${e.img.alt}">
      <p>${e.img.alt}</p>
      <div class="product-information">
        <h4>${v(e.raiting)}</h4>
        <h4>Kategori: ${e.kategori}</h4>
        <h4>${i} kr/st</h4>
      </div>
      
      <<div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${e.id}">remove_shopping_cart</button>
          <input type="number" name="counter" "min="0" value="${e.amount}" id="input-${e.id}" aria-label="amount">
          <button class="add material-symbols-outlined" id="add-${e.id}">add_shopping_cart</button>
        </div>
    `,t.appendChild(s)}),document.querySelectorAll("button.remove").forEach(e=>{e.addEventListener("click",y)}),document.querySelectorAll("button.add").forEach(e=>{e.addEventListener("click",E)}),document.querySelectorAll('input[name="counter"]').forEach(e=>{e.addEventListener("input",i=>{const s=parseInt(i.target.id.replace("input-","")),d=parseInt(i.target.value)||0;p(s,d),u(),m()})})}const mt=document.getElementById("sortPrice");mt.addEventListener("click",()=>{ut(!B),B=!B});let B=!0;function ct(n){const r=[...l];r.sort((e,i)=>n?e.raiting-i.raiting:i.raiting-e.raiting);const t=document.getElementById("product-list");t.innerHTML="",r.forEach(e=>{let i=e.pris;c()&&(i=Math.round(e.pris*1.15));const s=document.createElement("div");s.classList.add("eachProduct"),s.innerHTML=`
      <h3>${e.namn}</h3>
      <img src="${e.img.url}" alt="${e.img.alt}">
      <p>${e.img.alt}</p>
      <div class="product-information">
        <h4>${v(e.raiting)}</h4>
        <h4>Kategori: ${e.kategori}</h4>
        <h4>${i} kr/st</h4>
      </div>
      
      <div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${e.id}">remove_shopping_cart</button>
          <input type="number" name="counter" "min="0" value="${e.amount}" id="input-${e.id}" aria-label="amount">
          <button class="add material-symbols-outlined" id="add-${e.id}">add_shopping_cart</button>
        </div>
    `,t.appendChild(s)}),document.querySelectorAll("button.remove").forEach(e=>{e.addEventListener("click",y)}),document.querySelectorAll("button.add").forEach(e=>{e.addEventListener("click",E)}),document.querySelectorAll('input[name="counter"]').forEach(e=>{e.addEventListener("input",i=>{const s=parseInt(i.target.id.replace("input-","")),d=parseInt(i.target.value)||0;p(s,d),u(),m()})})}const gt=document.getElementById("sortRating");gt.addEventListener("click",()=>{ct(!C),C=!C});let C=!0;function pt(n){const r=[...l];r.sort((e,i)=>e.id-i.id);const t=document.getElementById("product-list");t.innerHTML="",r.forEach(e=>{let i=e.pris;c()&&(i=Math.round(e.pris*1.15));const s=document.createElement("div");s.classList.add("eachProduct"),s.innerHTML=`
      <h3>${e.namn}</h3>
      <img src="${e.img.url}" alt="${e.img.alt}">
      <p>${e.img.alt}</p>
      <div class="product-information">
        <h4>${v(e.raiting)}</h4>
        <h4>Kategori: ${e.kategori}</h4>
        <h4>${i} kr/st</h4> 
      </div>
      
      <div class="product-counter">
          <button class="remove material-symbols-outlined" id="remove-${e.id}">remove_shopping_cart</button>
          <input type="number" name="counter" "min="0" value="${e.amount}" id="input-${e.id}" aria-label="amount">
          <button class="add material-symbols-outlined" id="add-${e.id}">add_shopping_cart</button>
        </div>
    `,t.appendChild(s)}),document.querySelectorAll("button.remove").forEach(e=>{e.addEventListener("click",y)}),document.querySelectorAll("button.add").forEach(e=>{e.addEventListener("click",E)}),document.querySelectorAll('input[name="counter"]').forEach(e=>{e.addEventListener("input",i=>{const s=parseInt(i.target.id.replace("input-","")),d=parseInt(i.target.value)||0;p(s,d),u(),m()})})}const yt=document.getElementById("sortStop");yt.addEventListener("click",()=>{pt(!$),$=!$});let $=!0;function Z(n){const r=/^[a-öA-Ö][a-öA-Ö '-]+$/,t=document.getElementById("firstNameError"),o=document.getElementById("firstNameErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent="Fel: Får enbart innehålla bokstäver, mellanslag, apostrof och bindestreck.";else return t.style.display="none",o.textContent="",!0}function P(n){const r=/^[a-öA-Ö][a-öA-Ö '-]+$/,t=document.getElementById("lastNameError"),o=document.getElementById("lastNameErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent=" Fel: Får enbart innehålla bokstäver, mellanslag, apostrof och bindestreck.";else return t.style.display="none",o.textContent="",!0}function tt(n){const r=/^[a-öA-Ö0-9][a-öA-Ö0-9 '-]+$/,t=document.getElementById("addressError"),o=document.getElementById("addressErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent=" Du har inte angett en giltig adress";else return t.style.display="none",o.textContent="",!0}function et(n){const r=/^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/,t=document.getElementById("zipCodeError"),o=document.getElementById("zipCodeErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent=" Du får enbart ange siffror";else return t.style.display="none",o.textContent="",!0}function nt(n){const r=/^[a-öA-Ö][a-öA-Ö '-]+$/,t=document.getElementById("postalAddressError"),o=document.getElementById("postalAddressErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent=" Du har inte angett en giltig postadress";else return t.style.display="none",o.textContent="",!0}function ot(n){const r=/^([0|\+[0-9]{1,5})?([0-9]{10})$/,t=document.getElementById("phoneError"),o=document.getElementById("phoneErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent=" Du har inte angett ett giltig telefonnummer. Ange utan mellanslag eller bindestreck";else return t.style.display="none",o.textContent="",!0}function rt(n){const r=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,t=document.getElementById("emailError"),o=document.getElementById("emailErrorMessage");if(n==="")t.style.display="none",o.textContent="";else if(!r.test(n))t.style.display="inline-block",o.textContent=" Du har inte angett en giltig e-postadress";else return t.style.display="none",o.textContent="",!0}function it(n){const r=/^(card|invoice)$/,t=document.getElementById("paymentMethodError"),o=document.getElementById("paymentMethodErrorMessage");if(console.log(n),n==="")t.style.display="inline-block",o.textContent="Fel: Vänligen välj ett betalningssätt.";else if(!r.test(n))t.style.display="inline-block",o.textContent="Fel: Ogiltigt betalningssätt.";else return t.style.display="none",o.textContent="",!0}function g(){const n=Z(M.value),r=P(x.value),t=tt(f.value),o=et(_.value),a=nt(A.value),e=ot(N.value),i=rt(S.value),s=it(D.value),d=document.getElementById("submit");n&&r&&t&&o&&a&&e&&i&&s?d.disabled=!1:d.disabled=!0}const M=document.getElementById("fname");M.addEventListener("input",()=>{Z(M.value),g()});const x=document.getElementById("lname");x.addEventListener("input",()=>{P(x.value),g()});const f=document.getElementById("address");f.addEventListener("input",()=>{tt(f.value),g()});const _=document.getElementById("zipCode");_.addEventListener("input",()=>{et(_.value),g()});const A=document.getElementById("postalAddress");A.addEventListener("input",()=>{nt(A.value),g()});const N=document.getElementById("phone");N.addEventListener("input",()=>{ot(N.value),g()});const S=document.getElementById("email");S.addEventListener("input",()=>{rt(S.value),g()});const D=document.getElementById("paymentMethod");D.addEventListener("input",()=>{it(D.value),g()});function Et(n){const r=/^[a-öA-Ö][a-öA-Ö '-]+$/,t=document.getElementById("cardNameError"),o=document.getElementById("cardNameErrorMessage");return n===""?(t.style.display="none",o.textContent="",!1):r.test(n)?(t.style.display="none",o.textContent="",!0):(t.style.display="inline-block",o.textContent=" Du har inte angett ett giltigt namn",!1)}const H=document.getElementById("cname");H.addEventListener("input",()=>{Et(H.value)});function vt(n){const r=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|35[2-9][0-9]{14})$/,t=document.getElementById("cardNumberError"),o=document.getElementById("cardNumberErrorMessage"),a=n.replace(/\s/g,"");return a===""?(t.style.display="none",o.textContent="",!1):r.test(a)?(t.style.display="none",o.textContent="",!0):(t.style.display="inline-block",o.textContent="Du har inte angett ett giltigt kortnummer",!1)}const F=document.getElementById("ccnum");F.addEventListener("input",()=>{vt(F.value)});function ft(n){const r=/^(0[1-9]|1[0-2])(\/|-)([0-9]{2})$/,t=document.getElementById("expDateError"),o=document.getElementById("expDateErrorMessage");return n===""?(t.style.display="none",o.textContent="",!1):r.test(n)?(t.style.display="none",o.textContent="",!0):(t.style.display="inline-block",o.textContent=" Du har inte angett ett giltigt utgångsdatum",!1)}const O=document.getElementById("expdate");O.addEventListener("input",()=>{ft(O.value)});function ht(n){const r=/^[0-9]{3,4}$/,t=document.getElementById("cvvError"),o=document.getElementById("cvvErrorMessage");return n===""?(t.style.display="none",o.textContent="",!1):r.test(n)?(t.style.display="none",o.textContent="",!0):(t.style.display="inline-block",o.textContent=" Du har inte angett en giltig cvv",!1)}const K=document.getElementById("cvv");K.addEventListener("input",()=>{ht(K.value)});function kt(n){const r=/^\d{6}(?:\d{2})?[-\s]?\d{4}$/,t=document.getElementById("securityNumberError"),o=document.getElementById("securityNumberErrorMessage");return n===""?(t.style.display="none",o.textContent="",!1):r.test(n)?(t.style.display="none",o.textContent="",!0):(t.style.display="inline-block",o.textContent=" Du har inte angett ett giltigt personnummer",!1)}const V=document.getElementById("secnumber");V.addEventListener("input",()=>{kt(V.value)});const h=document.getElementById("paymentMethod"),z=document.getElementById("paymentDetails");h.addEventListener("change",()=>{h.value!=="card"?z.style.display="none":z.style.display="block"});const G=document.getElementById("paymentDetailsInvoice");h.addEventListener("change",()=>{h.value!=="invoice"?G.style.display="none":G.style.display="block"});function It(){document.getElementById("myForm").reset()}function bt(){l.forEach(r=>{r.amount=0});const n=document.getElementById("product-list");n.innerHTML="",J(),u()}const Bt=document.getElementById("clearButton");function Ct(){It(),bt()}Bt.addEventListener("click",Ct);const $t=document.getElementById("submit");$t.addEventListener("click",n=>{n.preventDefault();const r=f.value,t=confirm("Är du säker på att du vill skicka beställningen?");alert(t?`Tack för din beställning! Dina munkar är nu påväg till dig på adressen ${r}. Vår leveranstid är för närvarande 8 dagar.`:"Beställningen avbröts.")});const Lt=document.getElementById("countdown");let j;function Mt(){let n=14,r=59;j=setInterval(()=>{r===0?(n--,r=59):r--,Lt.textContent=n+"min "+r+"sek",n===0&&r===0&&(clearInterval(j),localStorage.clear(),alert("Din beställning kommer nu att rensas då du tog för lång tid på dig ;)"),location.reload())},1e3)}Mt();const xt=document.getElementById("themeToggle"),W=document.getElementById("theme-icon"),L=localStorage.getItem("theme");L&&(document.documentElement.setAttribute("data-theme",L),w(L));xt.addEventListener("click",()=>{document.documentElement.getAttribute("data-theme")==="dark"?(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),w("light")):(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),w("dark"))});function w(n){n==="dark"?W.textContent="dark_mode":W.textContent="light_mode"}
