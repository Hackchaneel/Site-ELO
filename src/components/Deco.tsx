const P=['#D8232A','#F3C614','#1F3C9C','#2A9D8F'];
const D='M0 0L8 0C8 5.3 14 5.3 14 0L22 0L22 8C27.3 8 27.3 14 22 14L22 22L14 22C14 27.3 8 27.3 8 22L0 22L0 14C5.3 14 5.3 8 0 8Z';
type Item={c:number;x:string;y:string;s:number;r:number};
const L:Record<string,Item[]>={
hero:[{c:1,x:'52%',y:'5%',s:64,r:20},{c:3,x:'1%',y:'60%',s:72,r:-15}],
quick:[{c:0,x:'94%',y:'6%',s:90,r:15},{c:2,x:'-2%',y:'88%',s:80,r:-20},{c:1,x:'90%',y:'82%',s:60,r:40}],
chapters:[{c:3,x:'95%',y:'4%',s:100,r:-25},{c:0,x:'-2%',y:'92%',s:70,r:10}],
library:[{c:1,x:'94%',y:'3%',s:90,r:30},{c:2,x:'-2%',y:'50%',s:70,r:-35}],
situacoes:[{c:0,x:'94%',y:'5%',s:80,r:-15},{c:3,x:'-1%',y:'90%',s:90,r:25}],
experiencia:[{c:2,x:'95%',y:'2%',s:100,r:20},{c:1,x:'-2%',y:'96%',s:70,r:-10}],
adapt:[{c:3,x:'94%',y:'8%',s:80,r:35},{c:0,x:'-2%',y:'85%',s:80,r:-30}],
comissao:[{c:1,x:'95%',y:'6%',s:90,r:-20},{c:2,x:'-2%',y:'80%',s:70,r:15}],
closing:[{c:0,x:'80%',y:'10%',s:110,r:10},{c:1,x:'88%',y:'45%',s:90,r:-25},{c:2,x:'74%',y:'70%',s:80,r:30},{c:3,x:'-1%',y:'30%',s:100,r:-10}]};
export function Deco({k}:{k:string}){
 return <div className="puzzles" aria-hidden="true">{(L[k]||[]).map((p,i)=><span key={i} className="puzzle" style={{left:p.x,top:p.y,width:p.s,height:p.s}}><svg viewBox="-1 -1 28 28" style={{transform:`rotate(${p.r}deg)`,animationDelay:`${i*-2.3}s`,animationDuration:`${9+i*2}s`}}><path d={D} fill={P[p.c]} stroke="#fff" strokeOpacity=".5" strokeWidth=".8"/></svg></span>)}</div>;
}
