
/* ---------- Easing ---------- */
function bez(x1,y1,x2,y2){const A=(a,b)=>1-3*b+3*a,B=(a,b)=>3*b-6*a,C=a=>3*a;
  const f=(t,a,b)=>((A(a,b)*t+B(a,b))*t+C(a))*t,df=(t,a,b)=>3*A(a,b)*t*t+2*B(a,b)*t+C(a);
  return x=>{if(x<=0)return 0;if(x>=1)return 1;let t=x;for(let i=0;i<8;i++){const d=df(t,x1,x2);if(Math.abs(d)<1e-6)break;t-=(f(t,x1,x2)-x)/d;}return f(t,y1,y2);};}
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const lerp=(a,b,t)=>a+(b-a)*t;
const ss=(a,b,x)=>{const t=cl((x-a)/(b-a));return t*t*(3-2*t);};


/* ---------- Final C geometry (symbol component, 195 × 205) ---------- */
const PIECES=[ // draw order: bottom → top
 {name:'lime',color:'#A8D134',ox:26.420013427734375,oy:124.1656265258789,d:"M 122.91500091552734 32.84042739868164 C 130.98000049591064 26.93442726135254 139.18000483512878 15.53442668914795 140.8800048828125 4.534426689147949 C 141.3800048828125 0.9344267845153809 142.98000192642212 -0.4656735360622406 146.0800018310547 0.1343264877796173 C 165.71240234375 3.934226542711258 172.4890956878662 27.025127410888672 162.56399536132812 39.571327209472656 C 153.13579559326172 51.48962688446045 141.07950115203857 61.245627880096436 127.26380157470703 68.13652801513672 C 113.44810199737549 75.027428150177 98.21709728240967 78.88152569532394 82.66819763183594 79.42132568359375 C 67.1192979812622 79.96102565526962 51.639601707458496 77.17292785644531 37.34450149536133 71.25782775878906 C 23.049501419067383 65.34272766113281 10.295000076293945 56.44792461395264 0 45.214324951171875 C 11.78600025177002 53.279324531555176 28.10700225830078 49.789427757263184 36.573001861572266 34.05542755126953 C 49.199602127075195 42.66562747955322 64.40859889984131 47.19572488963604 79.95539855957031 46.976924896240234 C 95.50219821929932 46.75812490284443 110.56300067901611 41.802127838134766 122.91500091552734 32.84042739868164 Z",ext:true},
 {name:'lilac',color:'#9D8BEF',ox:0.07611083984375,oy:8.980010986328125,d:"M 26.343902587890625 160.39999389648438 C 15.294204711914062 148.35061836242676 7.38103723526001 133.94208335876465 3.2584228515625 118.36520385742188 C -0.8641915321350098 102.7883243560791 -1.077904224395752 86.49035453796387 2.63494873046875 70.81820678710938 C 6.347801685333252 55.14605903625488 13.880616188049316 40.549753189086914 24.61083984375 28.235565185546875 C 35.341063499450684 15.921377182006836 48.9606237411499 6.242898464202881 64.34390258789062 0 C 52.152902603149414 8.182999610900879 49.93787670135498 24.995983123779297 62.404876708984375 37.850982666015625 C 53.163644790649414 44.26938343048096 45.65608263015747 52.67393398284912 40.49713134765625 62.376220703125 C 35.33818006515503 72.07850742340088 32.67459688708186 82.80252361297607 32.72454833984375 93.66989135742188 C 32.77449979260564 104.53725910186768 35.536569595336914 115.23883056640625 40.784515380859375 124.89804077148438 C 46.032461166381836 134.5572509765625 53.61701774597168 142.8993434906006 62.916900634765625 149.24099731445312 C 54.45090103149414 164.97499752044678 38.129902839660645 168.46499347686768 26.343902587890625 160.39999389648438 Z",ext:true},
 {name:'coral',color:'#F8532F',ox:54.13848114013672,oy:1.026190161705017,d:"M 10.281509399414062 7.953794002532959 C 31.787309646606445 -0.7751059532165527 55.69690704345703 -2.3701059818267822 78.24720764160156 3.419893980026245 C 100.797607421875 9.209893941879272 120.7082052230835 22.056194305419922 134.8455047607422 39.93679428100586 C 144.76990509033203 52.489094734191895 137.97511100769043 75.45109462738037 118.36151123046875 79.37379455566406 C 115.26151132583618 79.97379457950592 113.66150665283203 78.57379293441772 113.16150665283203 74.97379302978516 C 111.46150660514832 63.973793029785156 103.2615098953247 52.57379341125488 95.1965103149414 46.66779327392578 C 82.75861072540283 37.643592834472656 67.57661056518555 32.68279415369034 51.92081069946289 32.52729415893555 C 36.265010833740234 32.371694162487984 20.97680950164795 37.029794692993164 8.342509269714355 45.80479431152344 C -4.124490737915039 32.94979476928711 -1.9094905853271484 16.136793613433838 10.281509399414062 7.953794002532959 Z",ext:false}
];
const ROX=105.2,ROY=101.3,RIX=72.5,RIY=68.8,TAU=Math.PI*2;

function parse(d,ox,oy){const t=d.trim().split(/\s+/);const pts=[];let i=0,cx=0,cy=0;
  while(i<t.length){const c=t[i++];
    if(c==='M'){cx=+t[i++]+ox;cy=+t[i++]+oy;pts.push([cx,cy]);}
    else if(c==='C'){const a=[+t[i++]+ox,+t[i++]+oy,+t[i++]+ox,+t[i++]+oy,+t[i++]+ox,+t[i++]+oy];
      for(let k=1;k<=28;k++){const u=k/28,v=1-u;pts.push([v*v*v*cx+3*v*v*u*a[0]+3*v*u*u*a[2]+u*u*u*a[4],v*v*v*cy+3*v*v*u*a[1]+3*v*u*u*a[3]+u*u*u*a[5]]);}
      cx=a[4];cy=a[5];}
    else if(c==='Z'){}
  }return pts;}
PIECES.forEach(p=>p.xy=parse(p.d,p.ox,p.oy));
let minX=1e9,minY=1e9,maxY=-1e9;PIECES.forEach(p=>p.xy.forEach(([x,y])=>{minX=Math.min(minX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}));
const CX=minX+ROX,CY=(minY+maxY)/2;

function toRing(x,y){const dx=x-CX,dy=y-CY;let rho=.5,phi=0;
  for(let k=0;k<10;k++){const rx=RIX+(ROX-RIX)*rho,ry=RIY+(ROY-RIY)*rho;phi=Math.atan2(dy/ry,dx/rx);
    const c=Math.cos(phi),s=Math.sin(phi);const L0=Math.hypot(RIX*c,RIY*s),L1=Math.hypot(ROX*c,ROY*s);rho=(Math.hypot(dx,dy)-L0)/(L1-L0);}
  if(phi<0)phi+=TAU;return [phi,rho];}
function fromRing(phi,rho){const rx=RIX+(ROX-RIX)*rho,ry=RIY+(ROY-RIY)*rho;return [CX+rx*Math.cos(phi),CY+ry*Math.sin(phi)];}

const CAP=16.3/87; // half ring thickness in radians (approx.)
PIECES.forEach(p=>{p.ring=p.xy.map(([x,y])=>toRing(x,y));p.min=Math.min(...p.ring.map(r=>r[0]));p.max=Math.max(...p.ring.map(r=>r[0]));
  p.center=(p.min+p.max)/2;p.L0=p.max-p.min;
  // resample real outline & a clean capsule with matching anchors so they can morph point-to-point
  const EZ=0.36,SC=[87,32.6];const R=p.ring;const n=R.length;
  const near=(tp,tr)=>{let bi=0,bd=1e9;R.forEach(([a,b],i)=>{const d=Math.hypot((a-tp)*SC[0],(b-tr)*SC[1]);if(d<bd){bd=d;bi=i;}});return bi;};
  let ia=near(p.min+EZ,1),ib=near(p.max-EZ,1),ic=near(p.max-EZ,0),id=near(p.min+EZ,0);
  const fwd=(i,j)=>(j-i+n)%n;let pts=R;
  if(fwd(ia,ib)>fwd(ia,id)){pts=R.slice().reverse();const m=x=>n-1-x;[ia,ib,ic,id]=[m(ia),m(ib),m(ic),m(id)];}
  const seg=(i,j)=>{const o=[];let k=i;o.push(pts[k]);while(k!==j){k=(k+1)%n;o.push(pts[k]);}return o;};
  const rs=(arr,N)=>{const L=[0];for(let i=1;i<arr.length;i++)L.push(L[i-1]+Math.hypot((arr[i][0]-arr[i-1][0])*SC[0],(arr[i][1]-arr[i-1][1])*SC[1]));const tot=L[L.length-1]||1;const o=[];let j=0;
    for(let k=0;k<N;k++){const tg=tot*k/N;while(j<arr.length-2&&L[j+1]<tg)j++;const u=(tg-L[j])/((L[j+1]-L[j])||1);o.push([lerp(arr[j][0],arr[j+1][0],u),lerp(arr[j][1],arr[j+1][1],u)]);}return o;};
  const NS_=[90,70,90,70];
  const realSegs=[seg(ia,ib),seg(ib,ic),seg(ic,id),seg(id,ia)];
  const capEnd=(edge,dir)=>{const base=dir>0?p.max:p.min;const o=[];const e0=base-dir*EZ,e1=base-dir*CAP;
    const r0=dir>0?1:0;o.push([e0,r0]);o.push([e1,r0]);for(let k=1;k<24;k++){const th=Math.PI*k/24;const rr=dir>0?.5+.5*Math.cos(th):.5-.5*Math.cos(th);o.push([e1+dir*CAP*Math.sin(th),rr]);}o.push([e1,1-r0]);o.push([e0,1-r0]);return o;};
  const capSegs=[[[p.min+EZ,1],[p.max-EZ,1]],capEnd(0,1),[[p.max-EZ,0],[p.min+EZ,0]],capEnd(0,-1)];
  p.ring=[];p.cap=[];realSegs.forEach((sg,k)=>{p.ring.push(...rs(sg,NS_[k]));p.cap.push(...rs(capSegs[k],NS_[k]));});
  if(p.ext){ // uncut continuation hidden under the piece above: band + round cap
    const a=p.max-0.38,b=p.max+0.12,e=[];
    for(let k=0;k<=24;k++)e.push([a+(b-a)*k/24,1]);
    for(let k=1;k<24;k++){const th=Math.PI*k/24;e.push([b+CAP*Math.sin(th),.5+.5*Math.cos(th)]);}
    for(let k=24;k>=0;k--)e.push([a+(b-a)*k/24,0]);
    p.extRing=e;p.extCap=e.map(([phi,rho])=>{const r=cl(rho);const bulge=CAP*Math.sqrt(Math.max(0,1-(2*r-1)**2));return [Math.min(p.max-CAP+bulge,phi),r];});}
});

/* ---------- Render one piece given tail T / head H (absolute angles) ---------- */
const E=0.24; // rigid end zones (keep caps & lobes undistorted)
function mapPhi(phi,p,T,H){const L=H-T;
  if(L>=2*E){if(phi<=p.min+E)return T+(phi-p.min);if(phi>=p.max-E)return H-(p.max-phi);
    return T+E+(phi-(p.min+E))*(L-2*E)/(p.L0-2*E);}
  const s=L/(2*E);if(phi<=p.min+E)return T+(phi-p.min)*s;if(phi>=p.max-E)return H-(p.max-phi)*s;return (T+H)/2;}
function shape(ring,p,st,cap){let d='';const m=st.m==null?1:st.m;for(let i=0;i<ring.length;i++){let [phi,rho]=ring[i];if(cap&&m<1){phi=lerp(cap[i][0],phi,m);rho=lerp(cap[i][1],rho,m);}
    const q=mapPhi(phi,p,st.T,st.H);const u=cl((q-st.T)/Math.max(1e-3,st.H-st.T));
    const k=st.k?st.k(u):1;const [x,y]=fromRing(q,.5+(rho-.5)*k*(st.w||1));
    d+=(i?'L':'M')+x.toFixed(2)+' '+y.toFixed(2);}return d+'Z';}
// liquid thickness: thinner in the middle and slightly swollen at the leading end when fast
function liquid(vT,vH,amt=1){const s=cl(Math.max(Math.abs(vT),Math.abs(vH))/7)*amt;const lead=vH>=vT?1:0;
  return u=>1-0.10*s*Math.sin(Math.PI*u)+0.06*s*(lead?ss(.72,1,u):ss(.72,1,1-u));}

/* ---------- The four animations: return per-piece {T,H,o} at time t ---------- */
const F=PIECES.map(p=>({min:p.min,max:p.max,c:p.center,L:p.L0}));
const A={};
// 1 — Spinner : three short arcs spin like a loader, decelerate and unfurl into the C
A.spinner={dur:2.9,fn(t){return F.map((f,i)=>{const d=[0.10,0.05,0][i];
  const p=bez(.72,0,.22,1.035)(cl((t-d)/2.35));const q=bez(.5,0,.2,1)(cl((t-0.75-d)/1.75));
  return {c:f.c-TAU*1.15*(1-p),L:lerp(0.5,f.L,q),o:ss(0,.25,t)};});}};
// 1b — Spinner + resolve : spinner start (from rest), loader-style resolution, same length as 01
A.spinres={dur:3.3,fn(t){const P=1.3;const R=bez(.4,0,.2,1)(cl((t-0.5)/1.9));
  const turns=[2.404,2.036,1.65],durs=[3.15,3.0,2.85];
  return F.map((f,i)=>{const p=bez(.6,0,.22,1)(cl(t/durs[i]));const loopL=0.5+0.4*(0.5-0.5*Math.cos(TAU*cl(t-0.15,0,9)/P));
  return {c:f.c-TAU*turns[i]*(1-p),L:lerp(loopL,f.L,R),o:ss(0,.25,t)};});}};
// 2 — Pour : the C pours out of its opening (counter-clockwise); each arc slips under the one above
A.pour={dur:3.0,fn(t){const S=F[2].max-0.28;return F.map((f,i)=>{const d=[0.36,0.18,0][i];const D=0.95+0.32*(S-f.c)/Math.PI;
  const p=bez(.55,0,.15,1)(cl((t-d)/D));const q=bez(.4,0,.2,1)(cl((t-d-0.08)/(D+0.15)));
  return {c:lerp(S,f.c,p),L:lerp(0.5,f.L,q),o:ss(d,d+0.14,t)};});}};
// 3 — Fan : pieces start stacked under the coral arc and slide out one by one, revealing the layering
A.fan={dur:2.7,fn(t){const g=-0.9*(1-bez(.6,0,.2,1)(cl(t/1.9)));return F.map((f,i)=>{const d=[0.62,0.38,0][i];
  const off=(F[2].c-f.c);const p=bez(.62,0,.18,1.06)(cl((t-d)/1.35));return {c:f.c+off*(1-p)+g,L:f.L,o:ss(0,.3,t)};});}};
// 4 — Loader : loopable breathing spinner for the app, then resolves into the C
A.loader={dur:4.2,fn(t){const tc=2.6,P=1.3,w=TAU/1.05;return F.map((f,i)=>{const ph=f.c-F[2].c;
  const loopC=t=>F[2].c-TAU*1.4+ph+w*t+0.35*Math.sin(TAU*t/P);const loopL=t=>0.5+0.5*(0.5-0.5*Math.cos(TAU*t/P));
  const R=bez(.45,0,.15,1)(cl((t-tc)/1.25));let target=f.c;const end=loopC(tc+1.25);while(target<end-0.15)target+=TAU;
  return {c:lerp(loopC(t),target,R),L:lerp(loopL(t),f.L,R),o:ss(0,.25,t)};});}};
// engine: smear (liquid trail) + morph toward clean capsule while moving / short
function state(anim,i,t){const dt=1/240;const a=anim.fn(Math.max(0,t-dt))[i],b=anim.fn(t+dt)[i],n=anim.fn(t)[i];
  const v=(b.c-a.c)/(2*dt),vL=(b.L-a.L)/(2*dt);const sm=0.045*Math.abs(v);
  let T=n.c-n.L/2,H=n.c+n.L/2;if(v>0)T-=sm;else H+=sm;
  const f=F[i];const m=ss(.72,1,n.L/f.L)*(1-ss(.25,2.2,Math.abs(v)));
  return {T,H,o:n.o,m,k:liquid(v>0?0:v,v>0?v:0)};}
