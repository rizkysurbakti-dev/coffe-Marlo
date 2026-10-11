/* ===== DATA MENU =====
   [nama, harga, deskripsi, id foto Unsplash]
   Foto sendiri: taruh di folder img/ dengan nama sesuai nama menu (huruf kecil, spasi jadi "-"),
   contoh: img/espresso-latte.jpg -> otomatis dipakai menggantikan foto Unsplash. */
const EMOJI={"Coffee":"☕","Ice Tea":"🧋","Beverage":"🥤","Juices":"🍹","Pastry":"🥐","Makanan":"🍽️"};
const D={
"Coffee":[
["Marlo's Choco Coffee",32000,"Kopi cokelat (mocha) dengan rasa cokelat kaya dan kopi yang menyegarkan. Nikmat panas maupun dingin.","photo-1461023058943-07fcbe16d735"],
["Espresso Latte",35000,"Espresso premium dengan microfoam hangat yang lembut.","photo-1495521821757-a1efb6729352"],
["Cold Brew",38000,"Diseduh dingin 18 jam, halus dan manis alami.","photo-1556909114-f6e7ad7d3136"],
["Iced Cappuccino",34000,"Cappuccino dingin yang segar dan creamy.","photo-1598103442097-8b74394b95c6"],
["Americano",25000,"Espresso murni dengan air panas, bold dan bersih.","photo-1509042239860-f550ce710b93"],
["Caramel Macchiato",39000,"Susu, espresso, dan saus karamel manis di atasnya.","photo-1442512595331-e89e73853f31"],
["Kopi Susu Gula Aren",28000,"Kopi susu kekinian dengan gula aren asli.","photo-1495521821757-a1efb6729352"],
["Affogato",36000,"Es krim vanila disiram espresso panas.","photo-1461023058943-07fcbe16d735"]],
"Ice Tea":[
["Iced Lemon Tea",24000,"Teh dingin dengan perasan lemon segar.","photo-1556679343-c7306c1976bc"],
["Peach Tea",26000,"Teh wangi dengan aroma persik manis.","photo-1499638673689-79a0b5115d87"],
["Jasmine Iced Tea",22000,"Teh melati dingin yang ringan dan harum.","photo-1556679343-c7306c1976bc"],
["Thai Tea",27000,"Teh susu khas Thailand yang kental dan manis.","photo-1499638673689-79a0b5115d87"],
["Lychee Tea",27000,"Teh dingin dengan buah leci dan sirup lembut.","photo-1556679343-c7306c1976bc"],
["Es Teh Tarik",23000,"Teh tarik creamy disajikan dingin.","photo-1499638673689-79a0b5115d87"]],
"Beverage":[
["Matcha Latte",36000,"Matcha tradisional dengan susu creamy.","photo-1593521885727-46d5dfe1bbb5"],
["Hot Chocolate",30000,"Cokelat panas pekat dengan whipped cream.","photo-1542990253-0d0f5be5f0ed"],
["Red Velvet Latte",34000,"Minuman red velvet manis dengan susu lembut.","photo-1542990253-0d0f5be5f0ed"],
["Taro Latte",33000,"Taro ungu manis dan gurih yang creamy.","photo-1593521885727-46d5dfe1bbb5"],
["Vanilla Milkshake",32000,"Milkshake vanila kental dengan krim.","photo-1542990253-0d0f5be5f0ed"],
["Chocolate Frappe",35000,"Frappe cokelat dingin dengan topping krim.","photo-1461023058943-07fcbe16d735"],
["Wedang Jahe",20000,"Jahe hangat dengan gula merah untuk badan segar.","photo-1499638673689-79a0b5115d87"]],
"Juices":[
["Jus Mangga",28000,"Mangga manis segar tanpa pemanis tambahan.","photo-1553530666-ba953a5ad56d"],
["Smoothie Bowl",42000,"Buah segar, granola, dan topping renyah.","photo-1590301157890-4810ed352733"],
["Orange Juice",26000,"Jeruk peras segar kaya vitamin C.","photo-1600271886742-f049cd451bba"],
["Mix Berry",32000,"Perpaduan stroberi dan blueberry yang segar.","photo-1590301157890-4810ed352733"],
["Jus Alpukat",30000,"Alpukat kental dengan susu cokelat.","photo-1553530666-ba953a5ad56d"],
["Watermelon Fresh",22000,"Semangka segar dingin tanpa gula.","photo-1600271886742-f049cd451bba"]],
"Pastry":[
["Croissant Butter",35000,"Renyah di luar, lembut berlapis di dalam.","photo-1585518419759-64b0bfc7f9a5"],
["Brownie Cokelat",32000,"Cokelat pekat dengan pusat yang lumer.","photo-1607623814075-e51df1bdc82f"],
["Cheesecake",38000,"Cheesecake lembut dengan dasar biskuit.","photo-1613395877344-13d4a8e0d49e"],
["Banana Bread",30000,"Roti pisang lembut dengan taburan streusel.","photo-1585328707852-d1e2f8e6da1a"],
["Almond Croissant",39000,"Croissant isi krim almond dan taburan almond.","photo-1585518419759-64b0bfc7f9a5"],
["Choco Lava Cake",36000,"Kue cokelat hangat dengan lelehan di tengah.","photo-1607623814075-e51df1bdc82f"],
["Cinnamon Roll",33000,"Roti gulung kayu manis dengan glaze keju.","photo-1585328707852-d1e2f8e6da1a"]],
"Makanan":[
["Club Sandwich",45000,"Roti panggang, ayam, telur, dan sayur segar.","photo-1520072959219-c595dc870360"],
["Avocado Toast",42000,"Roti panggang alpukat dengan telur dan biji wijen.","photo-1482049016688-2d3e1b311543"],
["Egg Toast",38000,"Roti panggang telur orak-arik dan keju.","photo-1525351484163-7529414344d8"],
["Margherita Pizza",58000,"Pizza tipis dengan mozzarella dan basil.","photo-1565299624946-b28f40a0ae38"],
["Nasi Goreng Marlo",40000,"Nasi goreng rempah dengan telur mata sapi dan kerupuk.","photo-1504674900247-0877df9cc836"],
["Chicken Katsu",48000,"Ayam katsu renyah dengan saus dan nasi hangat.","photo-1504674900247-0877df9cc836"],
["French Fries",25000,"Kentang goreng renyah dengan saus pilihan.","photo-1565299624946-b28f40a0ae38"]]};

const HERO_IMG='photo-1461023058943-07fcbe16d735',N1='photo-1447933601403-0c6688de566e',N2='photo-1495521821757-a1efb6729352';
const rp=n=>'Rp'+n.toLocaleString('id-ID'),$=id=>document.getElementById(id);
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const U=(i,w=500,h=600)=>`https://images.unsplash.com/${i}?auto=format&w=${w}&h=${h}&fit=crop&q=80`;
let tab='Coffee',cur=0,fqv=1,cart={},pay='cash',grand=0,timer,all=[];
Object.keys(D).forEach(k=>D[k].forEach(x=>all.push({id:all.length,n:x[0],p:x[1],d:x[2],i:x[3],c:k})));
const byCat=c=>all.filter(x=>x.c===c);

/* ===== GAMBAR: img/ lokal -> Unsplash -> ilustrasi cadangan (tidak pernah kosong) ===== */
function ph(e,label){const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="500" height="600" viewBox="0 0 500 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9cfb8"/><stop offset="1" stop-color="#a9744f"/></linearGradient></defs><rect width="500" height="600" fill="url(#g)"/><text x="250" y="320" font-size="170" text-anchor="middle">${e}</text><text x="250" y="440" font-size="30" font-family="sans-serif" fill="#3a1f19" text-anchor="middle">${label}</text></svg>`;return 'data:image/svg+xml,'+encodeURIComponent(svg)}
function imgErr(el){if(!el.dataset.s){el.dataset.s=1;el.src=el.dataset.u}else{el.onerror=null;el.src=ph(el.dataset.e,el.dataset.l)}}
function setImg(el,m,w,h){el.dataset.s='';el.dataset.u=U(m.i,w,h);el.dataset.e=EMOJI[m.c];el.dataset.l=m.n;el.onerror=()=>imgErr(el);el.src='img/'+slug(m.n)+'.jpg'}
function im(m,w=500,h=600){return `<img src="img/${slug(m.n)}.jpg" data-u="${U(m.i,w,h)}" data-e="${EMOJI[m.c]}" data-l="${m.n.replace(/"/g,'')}" onerror="imgErr(this)" alt="${m.n.replace(/"/g,'')}">`}
function plain(el,id,e,l){el.dataset.u=U(id);el.dataset.e=e;el.dataset.l=l;el.onerror=()=>{if(!el.dataset.s){el.dataset.s=1;el.src=el.dataset.u}else{el.onerror=null;el.src=ph(e,l)}};el.src='img/'+slug(l)+'.jpg'}

/* ===== GAMBAR LAIN ===== */
plain($('heroImg'),'photo-1495521821757-a1efb6729352','☕','Latte Art');
plain($('storyImg'),'photo-1556909114-f6e7ad7d3136','🧊','Cold Brew');
[['photo-1554118811-1e0d58224f24','🏠','Interior Kafe'],['photo-1447933601403-0c6688de566e','🫘','Biji Kopi'],['photo-1445116572660-236099ec97a0','☕','Suasana Kafe'],['photo-1559925393-8be0ec4767c8','👨‍🍳','Barista']].forEach((s,i)=>{const e=document.createElement('img');if(!i)e.className='on';e.alt=s[2];plain(e,s[0],s[1],s[2]);$('slide').appendChild(e)});
let si=0;setInterval(()=>{const a=$('slide').children;a[si].classList.remove('on');si=(si+1)%a.length;a[si].classList.add('on')},3500);

/* ===== TEKS & ELEMEN BERGERAK ===== */
const WD=['Better Days','Cozy Mornings','Warm Moments'];let wi=0;
setInterval(()=>{const e=$('rot');e.style.opacity=0;setTimeout(()=>{wi=(wi+1)%WD.length;e.textContent=WD[wi];e.style.opacity=1},400)},3200);
const SP=['FRESH BEANS','PREMIUM TASTE','COZY SPACE','ECO FRIENDLY','BUKA 08.00 – 23.00','HAND ROASTED'];
$('strip').innerHTML=[...Array(4)].map(()=>SP.map(x=>`<span>${x}</span><span class="d">✦</span>`).join('')).join('');
for(let i=0;i<12;i++){const b=document.createElement('div');b.className=i%3?'bean':'leaf';if(!(i%3))b.textContent='🍃';b.style.cssText=`left:${Math.random()*100}%;animation-duration:${7+Math.random()*7}s;animation-delay:-${Math.random()*10}s`;$('hero').appendChild(b)}

/* ===== TAB, PRODUK PILIHAN, KARTU MENU ===== */
const cats=Object.keys(D);let hov=false;
$('tabs').innerHTML=cats.map(k=>`<button class="tab${k===tab?' on':''}" onclick="setTab('${k}')">${EMOJI[k]} ${k}</button>`).join('');
function setTab(k){tab=k;cur=0;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.textContent.trim().endsWith(k)));feat();grid()}
function feat(){const f=byCat(tab)[cur];fqv=1;$('fqn').textContent=1;$('feat').classList.add('sw');
 setTimeout(()=>{setImg($('fImg'),f,500,500);$('fn').textContent=f.n;$('fp').textContent=rp(f.p);$('fd').textContent=f.d;$('feat').classList.remove('sw')},250)}
function nx(d){const n=byCat(tab).length;cur=(cur+d+n)%n;feat()}
$('feat').onmouseenter=()=>hov=true;$('feat').onmouseleave=()=>hov=false;
setInterval(()=>{if(!hov)nx(1)},5000);
function ctl(id){const q=cart[id];return q?`<div class="st"><button onclick="chg2(${id},-1)">−</button><b>${q}</b><button onclick="chg2(${id},1)">+</button></div>`:`<button class="ord" onclick="add(${id})">Order Now →</button>`}
function refCtl(){document.querySelectorAll('.ctl').forEach(e=>e.innerHTML=ctl(+e.dataset.id))}
function grid(){$('pg').innerHTML=byCat(tab).map((x,i)=>`<div class="pk" style="--d:${i}"><div class="pic">${im(x,300,300)}</div><h3>${x.n}</h3><p>${x.d}</p><div class="pr">${rp(x.p)}</div><div class="ctl" data-id="${x.id}">${ctl(x.id)}</div></div>`).join('')}
function fq(d){fqv=Math.max(1,fqv+d);$('fqn').textContent=fqv}
function addF(){add(byCat(tab)[cur].id,fqv)}

/* ===== KERANJANG ===== */
function toast(t){const e=document.createElement('div');e.className='toast';e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),2000)}
function add(id,n=1){cart[id]=(cart[id]||0)+n;upd();toast('✓ '+all[id].n+' ditambahkan')}
function chg2(id,d){cart[id]+=d;if(cart[id]<=0)delete cart[id];upd()}
function sub_(){return Object.keys(cart).reduce((s,i)=>s+all[i].p*cart[i],0)}
function upd(){let n=0;const rows=Object.keys(cart).map(i=>{const m=all[i],q=cart[i];n+=q;return `<div class="ci">${im(m,100,100)}<div class="t">${m.n}<br><small>${rp(m.p*q)}</small></div><div class="q"><button onclick="chg2(${i},-1)">−</button>${q}<button onclick="chg2(${i},1)">+</button></div></div>`});
 $('cc').textContent=n;$('cbn').textContent=n;$('ct').textContent=rp(sub_());$('cbt').textContent=rp(sub_());$('cbar').classList.toggle('show',n>0);
 $('cl').innerHTML=rows.join('')||'<p style="text-align:center;color:#999;margin-top:40px">Keranjang masih kosong ☕</p>';refCtl()}
function openCart(){$('ov').classList.add('show');$('dr').classList.add('show')}
function closeAll(){$('ov').classList.remove('show');$('dr').classList.remove('show');$('md').classList.remove('show');clearInterval(timer)}

/* ===== PEMBAYARAN + PROMO (promo hanya muncul untuk yang sudah pernah membeli) ===== */
const PROMO='MARLO10',PK='marlo_promo';let promoOn=false;
const earned=()=>{try{return localStorage.getItem(PK)==='1'}catch(e){return false}};
function calc(){const s=sub_(),disc=promoOn?Math.round(s*.1):0,tx=Math.round((s-disc)*.1);return{s,disc,tx,g:s-disc+tx}}
function sumUp(){const c=calc();grand=c.g;$('sum').innerHTML=`Subtotal <b>${rp(c.s)}</b><br>${c.disc?`Promo ${PROMO} (10%) <b>-${rp(c.disc)}</b><br>`:''}Pajak 10% <b>${rp(c.tx)}</b><br><b style="float:none">Total bayar</b> <b style="font-size:15px">${rp(c.g)}</b>`;setPay(pay)}
$('chips').innerHTML=['Saus extra','Es batu sedikit','Tanpa gula','Susu oat','Panas saja'].map(c=>`<span onclick="chip('${c}')">+ ${c}</span>`).join('');
function chip(c){const t=$('nt');t.value=t.value?t.value+', '+c:c}
function openCo(){if(!sub_())return toast('Pilih menu dulu ya');promoOn=false;$('pc').value='';$('promoBox').classList.toggle('hide',!earned());
 $('dr').classList.remove('show');$('md').classList.add('show');$('s1').classList.remove('hide');$('s2').classList.add('hide');sumUp()}
function applyPromo(){if($('pc').value.trim().toUpperCase()!==PROMO||!earned())return toast('Kode promo tidak valid');promoOn=true;toast('✓ Promo 10% dipakai');sumUp()}
function setPay(p){pay=p;$('p-cash').classList.toggle('on',p==='cash');$('p-qris').classList.toggle('on',p==='qris');$('cashBox').classList.toggle('hide',p!=='cash');$('qrisBox').classList.toggle('hide',p!=='qris');clearInterval(timer);
 $('pb').textContent=p==='cash'?'Konfirmasi Pesanan':'Saya Sudah Bayar';
 if(p==='qris'){$('qr').innerHTML='';$('qa').textContent=rp(grand);try{new QRCode($('qr'),{text:'QRIS-DEMO|MARLOS COFFEE|AMT='+grand+'|REF='+Date.now(),width:170,height:170})}catch(e){$('qr').textContent='QR gagal dimuat'}
  let s=300;$('cd').textContent='05:00';timer=setInterval(()=>{s--;$('cd').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');if(s<=0){clearInterval(timer);setPay('qris')}},1000)}}
function calcChg(){const v=+$('cashIn').value;$('chg').textContent=v>=grand?rp(v-grand):'Kurang '+rp(grand-v)}
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
function confirmPay(){const name=$('nm').value.trim();if(!name)return toast('Isi nama pemesan dulu');
 const cash=+$('cashIn').value;if(pay==='cash'&&cash&&cash<grand)return toast('Uang kurang dari total');
 clearInterval(timer);const c=calc(),id='MC-'+Math.floor(1000+Math.random()*9000),note=$('nt').value.trim(),d=new Date().toLocaleString('id-ID');
 const items=Object.keys(cart).map(i=>`<div class="r"><span>${cart[i]}x ${all[i].n}</span><span>${rp(all[i].p*cart[i])}</span></div>`).join('');
 $('stk').innerHTML=`<div style="text-align:center"><b>MARLO'S COFFEE</b><br>Jl. Braga No. 21, Bandung<br>${d}</div><hr><div class="r"><span>No. Pesanan</span><b>${id}</b></div><div class="r"><span>Nama</span><span>${esc(name)}</span></div><div class="r"><span>Jenis</span><span>${$('tp').value}</span></div><hr>${items}<hr><div class="r"><span>Subtotal</span><span>${rp(c.s)}</span></div>${c.disc?`<div class="r"><span>Promo ${PROMO}</span><span>-${rp(c.disc)}</span></div>`:''}<div class="r"><span>Pajak 10%</span><span>${rp(c.tx)}</span></div><div class="r"><b>TOTAL</b><b>${rp(c.g)}</b></div><hr><div class="r"><span>Bayar</span><span>${pay==='cash'?'Tunai':'QRIS'}</span></div>${pay==='cash'&&cash>=c.g?`<div class="r"><span>Tunai</span><span>${rp(cash)}</span></div><div class="r"><span>Kembali</span><span>${rp(cash-c.g)}</span></div>`:''}<hr><div><b>Catatan tambahan:</b><br>${note?esc(note):'-'}</div><hr><div class="gift">🎁 Promo khusus pelanggan!<br>Kode untuk pesanan berikutnya:<b>${PROMO}</b>Diskon 10%</div><hr><div style="text-align:center">Terima kasih! ☕</div>`;
 try{localStorage.setItem(PK,'1')}catch(e){}
 $('s1').classList.add('hide');$('s2').classList.remove('hide');cart={};upd()}

/* ===== ULASAN, RESERVASI, SUBSCRIBE ===== */
let R=[{n:'Rina',t:'Choco Coffee-nya juara, tidak terlalu manis. Tempatnya nyaman buat kerja!'},{n:'Dimas',t:'Croissant renyah banget. Saran: tambah colokan di area luar.'},{n:'Sari',t:'Pemesanan online gampang, bayar QRIS langsung beres.'},{n:'Bagas',t:'Cold brew-nya halus. Mohon tambah varian sirup rasa karamel.'},{n:'Mega',t:"Pelayanan ramah dan cepat. Sukses terus Marlo's!"}];
try{R=[...JSON.parse(localStorage.getItem('marlo_r')||'[]'),...R]}catch(e){}
function renR(){const c=R.map(r=>`<div class="rc"><span class="stars">★★★★★</span><p>“${esc(r.t)}”</p><b>${esc(r.n)}</b></div>`).join('');$('rt').innerHTML=c+c}
function postR(){const n=$('rn').value.trim(),t=$('rs').value.trim();if(!n||!t)return toast('Isi nama dan sarannya dulu ya');
 R.unshift({n,t});try{const s=JSON.parse(localStorage.getItem('marlo_r')||'[]');s.unshift({n,t});localStorage.setItem('marlo_r',JSON.stringify(s.slice(0,30)))}catch(e){}
 renR();$('rn').value=$('rs').value='';toast('Terima kasih atas sarannya, '+n+'!')}
function reserve(){const n=$('rvn').value.trim();if(!n||!/\S+@\S+\.\S+/.test($('rve').value))return toast('Isi nama dan email yang valid');toast('✓ Terima kasih '+n+', kami akan menghubungimu!');['rvn','rve','rvm'].forEach(i=>$(i).value='')}
function sub(){if(!/\S+@\S+\.\S+/.test($('mail').value))return toast('Email belum valid');toast('✓ Terima kasih sudah berlangganan!');$('mail').value=''}

/* ===== MUNCUL SAAT SCROLL (aman: konten tetap tampil walau script gagal) ===== */
document.documentElement.classList.add('js');
const rv=document.querySelectorAll('.rv');
const chk=()=>rv.forEach(e=>{if(e.getBoundingClientRect().top<innerHeight+120)e.classList.add('in')});
addEventListener('scroll',chk,{passive:true});addEventListener('resize',chk);

/* ===== MULAI ===== */
renR();grid();upd();setTimeout(()=>{feat();chk()},50);
