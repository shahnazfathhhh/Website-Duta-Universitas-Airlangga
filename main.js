const $=(s,r=document)=>r.querySelector(s), esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const photo=(src,t)=>`<div class="photo">${src?`<img src="${esc(src)}" alt="${esc(t||"Dokumentasi kegiatan Duta UNAIR")}">`:esc(t)}</div>`;

(function layout(){
  const h=$("#profil")?"index.html":"";
  $("#nav").innerHTML=`<div class="wrap"><a class="logo" href="${h||'#home'}">${SITE.nama}</a>
  <button id="menuBtn" aria-label="Buka menu" aria-expanded="false">☰</button>
  <ul id="menu">${[["tentang","Tentang"],["duta","Duta"],["portofolio","Portofolio"],["kontak","Kontak"]].map(([i,t])=>`<li><a href="${h}#${i}">${t}</a></li>`).join("")}</ul></div>`;
  $("#foot").innerHTML=`<p>© ${new Date().getFullYear()} ${SITE.nama}, Universitas Airlangga</p>
  <p><a href="https://instagram.com/${SITE.instagram}" target="_blank" rel="noopener">@${SITE.instagram}</a> · <a href="mailto:${SITE.email}">${SITE.email}</a></p>`;
  const mb=$("#menuBtn"),m=$("#menu");
  mb.onclick=()=>mb.setAttribute("aria-expanded",m.classList.toggle("open"));
  m.onclick=e=>{if(e.target.tagName==="A"){m.classList.remove("open");mb.setAttribute("aria-expanded",false)}};
})();

if($("#dutaGrid")){
  $("#stats").innerHTML=STATS.map(s=>`<div class="fact"><b>${esc(s.angka)}</b>${esc(s.label)}</div>`).join("");
  $("#vm").innerHTML=`<p class="lead"><b>Visi.</b> ${esc(VISI_MISI.visi)}</p><ul class="misi">${VISI_MISI.misi.map(m=>`<li>${esc(m)}</li>`).join("")}</ul>`;
  $("#latar").innerHTML=LATAR.map(l=>`<div><b>${esc(l.judul)}</b><br>${esc(l.teks)}</div>`).join("");

  const facs=["Semua",...new Set(DUTA.map(d=>d.fakultas))], grid=$("#dutaGrid"), tabs=$("#tabs");
  const render=f=>grid.innerHTML=DUTA.filter(d=>f==="Semua"||d.fakultas===f).map(d=>`
    <a class="card" href="duta.html?id=${esc(d.id)}" aria-label="Profil ${esc(d.nama)}">${photo(d.foto,d.nama[0])}
    <div class="info"><h3>${esc(d.panggilan||d.nama.split(" ")[0])}</h3><p>${esc(d.nama)}</p><p class="fak">${esc(d.fakultas)}</p></div></a>`).join("");
  tabs.innerHTML=facs.map((f,i)=>`<button class="tab" aria-pressed="${i===0}" data-f="${esc(f)}">${esc(f)}</button>`).join("");
  tabs.onclick=e=>{const b=e.target.closest(".tab");if(!b)return;tabs.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-pressed",t===b));render(b.dataset.f)};
  render("Semua");

  $("#pf").innerHTML=PORTOFOLIO.map(p=>`<article><div class="ic">${esc(p.ikon)}</div><h3>${esc(p.judul)}</h3><p>${esc(p.teks)}</p></article>`).join("");
  $("#kegiatan").innerHTML=KEGIATAN.map(k=>`<article class="event">${photo(k.foto,"")}<div class="info"><small>${esc(k.tanggal)} · ${esc(k.tempat)}</small><h3>${esc(k.judul)}</h3></div></article>`).join("");
  $("#gal").innerHTML=(GALERI.length?GALERI:Array(8).fill("")).map(s=>`<div class="shot">${s?`<img src="${esc(s)}" alt="Dokumentasi kegiatan Duta UNAIR">`:""}</div>`).join("");
  $("#sop").innerHTML=SOP.map(s=>`<li><div><b>${esc(s.judul)}</b><span>${esc(s.teks)}</span></div></li>`).join("");
  $("#faq").innerHTML=FAQ.map(f=>`<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
  $("#kontakInfo").innerHTML=`<p><b>Email:</b> <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>
    <p><b>Instagram:</b> <a href="https://instagram.com/${esc(SITE.instagram)}" target="_blank" rel="noopener">@${esc(SITE.instagram)}</a></p>
    <p><b>WhatsApp:</b> <a href="https://wa.me/${esc(SITE.whatsapp)}" target="_blank" rel="noopener">Chat sekarang</a></p>`;

  $("#form").addEventListener("submit",async e=>{
    e.preventDefault();
    const d=Object.fromEntries(new FormData(e.target)), msg=$("#formMsg");
    const submitButton=e.target.querySelector('button[type="submit"]');
    submitButton.disabled=true;
    if(SITE.formEndpoint){
      try{
        await fetch(SITE.formEndpoint,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(d)});
        e.target.reset();
        msg.textContent="Sudah terkirim.";
      } catch(error) {
        console.error("Gagal mengirim permohonan:",error);
        msg.textContent="Gagal mengirim permohonan. Data belum dihapus; silakan coba lagi atau hubungi kami lewat email.";
      } finally {
        submitButton.disabled=false;
      }
      return;
    }
    submitButton.disabled=false;
    const body=`Nama: ${d.nama}\nInstansi: ${d.instansi}\nJenis: ${d.jenis}\nTanggal: ${d.tgl}\n\n${d.detail}`;
    location.href=`mailto:${SITE.email}?subject=${encodeURIComponent("Kerja sama Duta UNAIR - "+d.instansi)}&body=${encodeURIComponent(body)}`;
  });
}

if($("#profil")){
  const id=new URLSearchParams(location.search).get("id"), i=DUTA.findIndex(d=>d.id===id), d=DUTA[i];
  if(!d){$("#profil").innerHTML=`<div class="pwrap"><div><h1>Duta tidak ditemukan</h1><p><a href="index.html#duta">Kembali ke daftar duta</a></p></div></div>`}
  else{
    document.title=`${d.nama} – ${SITE.nama}`;
    const prev=DUTA[(i-1+DUTA.length)%DUTA.length], next=DUTA[(i+1)%DUTA.length];
    $("#profil").innerHTML=`<div class="pwrap">${photo(d.foto,d.nama[0])}<div>
      <h1 class="gold">${esc(d.nama)}</h1><p class="fak">Fakultas ${esc(d.fakultas)}</p><p class="lead">${esc(d.bio)}</p>
      ${d.ig?`<p style="margin-top:16px"><a class="btn fill" href="https://instagram.com/${esc(d.ig)}" target="_blank" rel="noopener">@${esc(d.ig)}</a></p>`:""}
      <p class="pn"><a href="duta.html?id=${prev.id}">‹ ${esc(prev.nama.split(" ")[0])}</a><a href="index.html#duta">Semua duta</a><a href="duta.html?id=${next.id}">${esc(next.nama.split(" ")[0])} ›</a></p></div></div>`;
  }
}
