const fallbackPapers = [
  [1,2022,'High-Resolution Image Synthesis with Latent Diffusion Models','正式出版','CVPR 2022','10.1109/CVPR52688.2022.01042','扩散基础|生成模型','真实','https://doi.org/10.1109/CVPR52688.2022.01042','用于说明潜空间扩散基础，并非专门的角色一致性论文'],
  [2,2022,'An Image is Worth One Word: Personalizing Text-to-Image Generation using Textual Inversion','预印本/会议','arXiv 2022 · ICLR 2023','','个性化|文本嵌入','真实','https://arxiv.org/abs/2208.01618','学习新文本嵌入的概括与论文一致；无独立出版 DOI'],
  [3,2023,'DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation','正式出版','CVPR 2023','10.1109/CVPR52729.2023.02155','个性化|微调','真实','https://doi.org/10.1109/CVPR52729.2023.02155','少样本微调和类别先验保持的描述准确'],
  [4,2023,'Multi-Concept Customization of Text-to-Image Diffusion','正式出版','CVPR 2023','10.1109/CVPR52729.2023.00192','多概念|参数高效','真实','https://doi.org/10.1109/CVPR52729.2023.00192','Custom Diffusion；只更新少量交叉注意力参数并支持多概念'],
  [5,2023,'IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion Models','预印本','arXiv 2023','','适配器|图像提示','真实','https://arxiv.org/abs/2308.06721','解耦文本与图像交叉注意力；无独立出版 DOI'],
  [6,2024,'PhotoMaker: Customizing Realistic Human Photos via Stacked ID Embedding','正式出版','CVPR 2024','10.1109/CVPR52733.2024.00825','身份嵌入|人像','真实','https://doi.org/10.1109/CVPR52733.2024.00825','堆叠身份嵌入与多参考图描述准确'],
  [7,2024,'InstantID: Zero-shot Identity-Preserving Generation in Seconds','预印本','arXiv 2024','','零样本|身份保持','真实','https://arxiv.org/abs/2401.07519','单张人脸身份特征和关键点条件；无独立出版 DOI'],
  [8,2024,'Training-Free Consistent Text-to-Image Generation','正式出版','ACM TOG 43(4) · SIGGRAPH 2024','10.1145/3658157','训练免|跨图一致性','软幻觉修正','https://doi.org/10.1145/3658157','ConsiStory 是方法名；第一轮曾把它并入正式题名'],
  [9,2024,'StoryDiffusion: Consistent Self-Attention for Long-Range Image and Video Generation','正式出版','NeurIPS 2024','10.52202/079017-3501','故事生成|自注意力','软幻觉修正','https://doi.org/10.52202/079017-3501','第二轮仍按 arXiv 引用，遗漏正式会议状态'],
  [10,2024,'StoryMaker: Towards Holistic Consistent Characters in Text-to-Image Generation','预印本','arXiv 2024','','多条件|故事生成','真实','https://arxiv.org/abs/2409.12576','人脸、角色裁剪图、分割掩码与姿态条件的概括有原文依据'],
  [11,2025,'CharacterFactory','正式出版','IEEE TIP 2025','10.1109/TIP.2025.3558668','GAN|身份嵌入','真实','https://doi.org/10.1109/TIP.2025.3558668','GAN 学习身份嵌入并采样新角色'],
  [12,2025,'CharaConsist','正式出版','ICCV 2025','10.1109/ICCV51701.2025.01490','注意力|token 合并','真实','https://doi.org/10.1109/ICCV51701.2025.01490','点跟踪注意力与自适应 token merging 的描述准确'],
  [13,2025,'UniversalBooth','正式出版','ICCV 2025','10.1109/ICCV51701.2025.01702','模型无关|跨扩散架构','真实','https://doi.org/10.1109/ICCV51701.2025.01702','模型无关和跨扩散架构迁移的描述准确'],
  [14,2025,'DynamicID','正式出版','ICCV 2025','10.1109/ICCV51701.2025.00982','多身份|面部编辑','真实','https://doi.org/10.1109/ICCV51701.2025.00982','支持单 ID 和多 ID，强调身份保真与面部可编辑性'],
  [15,2025,'IDProtector: An Adversarial Noise Encoder to Protect Against ID-Preserving Image Generation','正式出版','CVPR 2025','10.1109/CVPR52734.2025.00287','隐私防护|对抗扰动','真实','https://doi.org/10.1109/CVPR52734.2025.00287','用于说明身份复制风险和防护研究'],
  [16,2026,'CoDi','会议录','ICLR 2026','','身份迁移|细节优化','真实','https://openreview.net/pdf/52275dc22f0bfe50b8e6462b6df54bfa983ab801.pdf','Identity Transport 与 Identity Refinement 对应迁移和细节优化；无独立 DOI'],
  [17,2026,'Consistent Text-to-Image Generation via Scene De-Contextualization','会议录','ICLR 2026','','场景解耦|训练免','真实','https://openreview.net/pdf/0d93aca1a1e2b1e7a4bf128c275500ca78a5426e.pdf','通过削弱主体与场景的固有相关性缓解身份漂移；无独立 DOI'],
  [18,2026,'LCG','预印本','arXiv 2026','','长序列|多角色','真实','https://arxiv.org/abs/2606.26171','明确包含 6—20 幅图像序列和多角色长上下文设置；无独立 DOI'],
  [19,2026,'ViStoryBench','预印本/正式收录','arXiv 2025 · CVPR 2026','','评测基准|视觉故事','软幻觉修正','https://arxiv.org/abs/2505.24862','第二轮把它纳入 2026 阶段可以成立，但参考文献信息过简'],
  [20,2026,'DSH-Bench','正式出版','ECCV 2026','10.1007/978-3-032-37577-3_20','评测基准|数据集','真实','https://doi.org/10.1007/978-3-032-37577-3_20','58 个细分类别、19 种模型的表述与论文记录一致']
].map(([id,year,title,status,venue,doi,tags,verification,url,notes])=>({id,year,title,status,venue,doi,tags,verification,url,notes}));

const state={papers:fallbackPapers,query:'',year:'all',status:'all',tag:'all',view:'table'};

function parseCSV(text){
  const rows=[];let row=[],cell='',quoted=false;
  for(let i=0;i<text.length;i++){
    const c=text[i],n=text[i+1];
    if(c==='"'&&quoted&&n==='"'){cell+='"';i++;}
    else if(c==='"'){quoted=!quoted;}
    else if(c===','&&!quoted){row.push(cell);cell='';}
    else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&n==='\n')i++;row.push(cell);if(row.some(v=>v.trim()))rows.push(row);row=[];cell='';}
    else cell+=c;
  }
  if(cell||row.length){row.push(cell);rows.push(row);}
  const headers=rows.shift().map(h=>h.trim());
  return rows.map(r=>Object.fromEntries(headers.map((h,i)=>[h,h==='year'||h==='id'?Number(r[i]):r[i]||''])));
}

async function loadData(){
  try{
    const res=await fetch('data/papers.csv',{cache:'no-store'});if(!res.ok)throw new Error('CSV unavailable');
    state.papers=parseCSV(await res.text());
    document.querySelector('#data-source-note').textContent='当前页面由 data/papers.csv 实时渲染；修改一行并刷新，统计与列表会同步变化。';
  }catch(e){
    document.querySelector('#data-source-note').textContent='当前为直接打开模式，使用 app.js 内置同版数据。通过本地服务器打开即可实时读取 CSV。';
  }
  initFilters();render();renderTimeline();updateMetrics();
}

function unique(values){return [...new Set(values)].sort((a,b)=>String(a).localeCompare(String(b),'zh-CN'));}
function addOptions(select,values){values.forEach(v=>select.insertAdjacentHTML('beforeend',`<option value="${escapeHTML(v)}">${escapeHTML(v)}</option>`));}
function initFilters(){
  addOptions(document.querySelector('#year-filter'),unique(state.papers.map(p=>p.year)));
  addOptions(document.querySelector('#status-filter'),unique(state.papers.map(p=>p.status)));
  addOptions(document.querySelector('#tag-filter'),unique(state.papers.flatMap(p=>p.tags.split('|'))));
}
function escapeHTML(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function filtered(){
  const q=state.query.toLowerCase();
  return state.papers.filter(p=>(state.year==='all'||String(p.year)===state.year)&&(state.status==='all'||p.status===state.status)&&(state.tag==='all'||p.tags.split('|').includes(state.tag))&&(!q||`${p.title} ${p.tags} ${p.notes} ${p.venue}`.toLowerCase().includes(q)));
}
function tagHTML(tags){return tags.split('|').map(t=>`<span class="pill">${escapeHTML(t)}</span>`).join('');}
function render(){
  const papers=filtered();document.querySelector('#result-count').textContent=`${papers.length} 条记录`;
  document.querySelector('#paper-tbody').innerHTML=papers.map(p=>`<tr><td>${p.year}</td><td><span class="paper-title">${escapeHTML(p.title)}</span><br><small>${escapeHTML(p.doi||'无独立出版 DOI')}</small></td><td>${escapeHTML(p.venue)}<br><small>${escapeHTML(p.status)}</small></td><td>${tagHTML(p.tags)}</td><td><span class="${p.verification==='真实'?'verified':'warn'}">${escapeHTML(p.verification)}</span><br><small>${escapeHTML(p.notes)}</small></td><td><a class="source-link" href="${escapeHTML(p.url)}" target="_blank" rel="noopener">原始入口 ↗</a></td></tr>`).join('');
  document.querySelector('#card-view').innerHTML=papers.map(p=>`<article class="paper-card"><span>${p.year} · ${escapeHTML(p.venue)}</span><h3>${escapeHTML(p.title)}</h3><div>${tagHTML(p.tags)}</div><p class="meta">${escapeHTML(p.notes)}</p><div class="card-bottom"><b class="${p.verification==='真实'?'verified':'warn'}">${escapeHTML(p.verification)}</b><a class="source-link" href="${escapeHTML(p.url)}" target="_blank" rel="noopener">查看 ↗</a></div></article>`).join('');
}
function updateMetrics(){document.querySelector('#paper-count').textContent=state.papers.length;document.querySelector('#doi-count').textContent=state.papers.filter(p=>p.doi).length;}
function renderTimeline(){
  const notes={2022:['潜空间扩散与文本嵌入','从生成底座走向可学习的新概念。'],2023:['主体驱动个性化','微调、参数高效更新与图像提示适配器并行。'],2024:['身份条件与长程叙事','训练免一致性、自注意力和多条件控制集中出现。'],2025:['跨架构、编辑与防护','方法开始兼顾多身份、可编辑性和身份复制风险。'],2026:['长序列与评测体系','研究从“生成一张像”转向多角色序列和系统评测。']};
  document.querySelector('#timeline-list').innerHTML=Object.entries(notes).map(([y,[t,d]])=>`<article><b>${y}</b><h3>${t}</h3><p>${d}</p><small>${state.papers.filter(p=>p.year==y).length} 篇核验条目</small></article>`).join('');
}

const rounds=[
  {label:'第一轮',title:'内容大体正确，证据链最弱',copy:'11 篇文献都能找到，但没有 DOI，也没有说明哪些是预印本、哪些已经正式发表；ConsiStory 还把方法名写进了正式题名。它不是“凭空造文献”，而是把查证成本转交给了读者。',bars:[['硬幻觉率',0],['元数据问题率',9.1],['直接可追溯率',0]]},
  {label:'第二轮',title:'结构更系统，仍有软幻觉与引用缺口',copy:'智能体扩大了检索范围，却没有自动解决版本更新和论断绑定。StoryDiffusion 仍停留在 arXiv，ViStoryBench 信息过简，FLUX 适配判断也缺直接引用。',bars:[['硬幻觉率',0],['问题条目率',25],['直接可追溯率',58]]},
  {label:'第三轮',title:'元数据最完整，但题目被主动缩窄',copy:'限定 2022—2026、优先权威来源、要求 DOI 与链接，并把复检动作写进提示词后，8 个正式 DOI 全部对应；4 篇预印本也明确标注无独立出版 DOI。',bars:[['硬幻觉率',0],['元数据问题率',0],['直接可追溯率',100]]}
];
function setRound(i){const r=rounds[i];document.querySelector('#round-label').textContent=r.label;document.querySelector('#round-title').textContent=r.title;document.querySelector('#round-copy').textContent=r.copy;document.querySelector('#audit-bars').innerHTML=r.bars.map(([n,v])=>`<div class="bar"><div class="bar-head"><span>${n}</span><b>${v}%</b></div><div class="bar-track"><div class="bar-fill" style="width:${v}%"></div></div></div>`).join('');document.querySelectorAll('.round').forEach((b,j)=>{b.classList.toggle('active',j===i);b.setAttribute('aria-selected',j===i)});}
const lenses={hard:['01 / 04','论文不存在，或 DOI 指向另一篇论文','这是最严重的一类。本次逐条核验没有发现这种情况，因此硬幻觉率为 0%，但这并不能替代后续三类检查。'],soft:['02 / 04','论文真实，但题名、年份或发表状态含混','ConsiStory 题名和 StoryDiffusion 出版状态属于这一类。它不一定改变技术理解，却会降低可复查性。'],gap:['03 / 04','判断可能合理，正文却没有直接支撑它的文献','“开始适配 FLUX 等扩散 Transformer”在第二轮没有对应引用。能推断，不等于已经引用。'],over:['04 / 04','把特定实验设置写成普遍结论','角色一致性常受姿态、风格和多角色场景影响，但每项结论都应保留论文原本的适用边界。']};
function setLens(key){const [i,t,c]=lenses[key];document.querySelector('#lens-index').textContent=i;document.querySelector('#lens-title').textContent=t;document.querySelector('#lens-copy').textContent=c;document.querySelectorAll('.lens-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.lens===key));}

document.querySelector('#search').addEventListener('input',e=>{state.query=e.target.value.trim();render()});
[['year-filter','year'],['status-filter','status'],['tag-filter','tag']].forEach(([id,k])=>document.querySelector('#'+id).addEventListener('change',e=>{state[k]=e.target.value;render()}));
document.querySelector('#reset-filters').addEventListener('click',()=>{state.query='';state.year=state.status=state.tag='all';document.querySelector('#search').value='';['year-filter','status-filter','tag-filter'].forEach(id=>document.querySelector('#'+id).value='all');render()});
document.querySelectorAll('.view-switch button').forEach(b=>b.addEventListener('click',()=>{state.view=b.dataset.view;document.querySelector('#table-view').hidden=state.view!=='table';document.querySelector('#card-view').hidden=state.view!=='cards';document.querySelectorAll('.view-switch button').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)})}));
document.querySelectorAll('.round').forEach(b=>b.addEventListener('click',()=>setRound(Number(b.dataset.round))));
document.querySelectorAll('.lens-tabs button').forEach(b=>b.addEventListener('click',()=>setLens(b.dataset.lens)));
document.querySelectorAll('.explore-card').forEach(c=>c.addEventListener('click',()=>document.querySelector(c.dataset.jump).scrollIntoView({behavior:'smooth'})));
document.querySelector('.menu-toggle').addEventListener('click',e=>{const nav=document.querySelector('#main-nav'),open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#main-nav').classList.remove('open')));
document.querySelector('#copy-template').addEventListener('click',async()=>{const text=document.querySelector('#template-code').innerText;try{await navigator.clipboard.writeText(text);document.querySelector('#copy-status').textContent='模板已复制，可以直接粘贴到下一次调研。'}catch(e){document.querySelector('#copy-status').textContent='浏览器未授权剪贴板，请手动选择代码复制。'}});
setRound(0);setLens('hard');loadData();
requestAnimationFrame(()=>{document.documentElement.dataset.viewportWidth=window.innerWidth;document.documentElement.dataset.scrollWidth=document.documentElement.scrollWidth;});
