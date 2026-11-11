const translations={navNews:['News','动态'],currentLabel:['Currently','当前身份'],currentValue:['Undergraduate · Sichuan University','四川大学 · 本科在读'],focusLabel:['Research focus','研究方向'],focusValue:['Embodied AI & Robot Learning','具身智能与机器人学习'],designCreditLabel:['Design inspiration:','设计参考：'],academicScore:["GPA: 94.59/100 · Rank: 1/119","GPA：94.59/100 · 排名：1/119"],
  skip:['Skip to content','跳转到正文'],navHome:['Home','首页'],newsSler:['Our paper','我们的论文'],researchText:['My current research focuses on embodied intelligence and AI agents, with interests in robot learning, visual perception, and how agents connect perception, reasoning, and action. Previously, I worked on all-in-one image restoration. I enjoy exploring related research questions and exchanging ideas with others. Feel free to reach out by email if you are interested in discussing research ideas or potential collaborations.', '我目前主要关注具身智能与 AI 智能体（AI Agents），研究兴趣包括机器人学习、视觉感知，以及智能体如何将感知、推理与行动联系起来。此前，我从事一体化图像复原（All-in-One Image Restoration）研究。我也乐于探索相关研究问题，与他人交流想法。欢迎通过邮件联系我，一起讨论研究思路或合作机会！'],designCredit:['Layout inspired by Xin Lin’s homepage.','页面排版参考林鑫学长的主页。'],navAbout:['About','关于'],navPapers:['Publications','论文'],navEducation:['Education','教育'],navContact:['Contact','联系'],eyebrow:['Sichuan University · Undergraduate researcher','四川大学 · 本科生'],heroLine:['Learning to perceive.<br>Learning to act.','让模型感知世界，<br>让智能走向行动。'],bio:['I am an undergraduate student at <strong>Sichuan University</strong>. I plan to begin my Ph.D. at <strong>Tsinghua University</strong> in 2027, working on embodied intelligence with <strong>Yunxin Liu</strong> and <strong>Ting Cao</strong>.', '我目前是<strong>四川大学</strong>在读本科生。我计划于 2027 年开始在<strong>清华大学</strong>攻读博士学位，跟随<strong>刘云新</strong>和<strong>曹婷</strong>老师研究具身智能。'],researchLabel:['Research interests','研究兴趣'],interest1:['Embodied AI','具身智能'],interest2:['Robot learning','机器人学习'],interest3:['Image restoration','图像复原'],updatesHeading:['News','近期动态'],update1:['is published at ECCV 2026.','发表于 ECCV 2026。'],update2:['Co-authored the second LoViF challenge report on real-world all-in-one image restoration.','参与撰写第二届 LoViF 真实场景一体化图像复原挑战报告。'],papersHeading:['Selected Publications','论文与研究'],papersNote:['Research papers and collaborative reports. My name is highlighted below.','研究论文与合作报告，作者列表中以加粗标出我的姓名。'],researchPaper:['Research paper','研究论文'],challengeReport:['Challenge report','挑战报告'],slerSummary:['Spherical expert routing and global-local granularity fusion for unified restoration across diverse image degradations.','通过球面专家路由与全局—局部粒度融合，实现面向多种图像退化的一体化复原。'],releaseNote:['Implementation and model release in preparation.','实现代码与模型正在准备公开。'],lovifCoauthor:['Co-authored by','合作作者包括'],lovifTeam:['and the challenge participants.','及挑战赛其他参与者。'],lovifSummary:['A collaborative report reviewing methods and results for restoring images under diverse real-world degradation conditions.','合作报告，汇总真实场景下多种退化图像的一体化复原方法与评测结果。'],educationHeading:['Education','教育经历'],university:['Sichuan University','四川大学'],degree:['Undergraduate student','本科在读'],location:['Chengdu, China','中国 · 成都'],educationDate:['2023 — Present','2023 — 至今'],contactHeading:['Get in touch','联系我'],contactCopy:['Interested in embodied AI or image restoration? I would be happy to connect.','欢迎就具身智能、机器人学习与图像复原等研究方向交流。'],footerUpdate:['Updated November 2026','更新于 2026 年 11 月'],backTop:['Back to top ↑','返回顶部 ↑'],copyCitation:['Copy citation','复制引用']
};
let language='en';
const languageButton=document.getElementById('language');
function setLanguage(next){
  language=next;document.documentElement.lang=next==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(!translations[key])return;const value=translations[key][next==='zh'?1:0];if(key==='heroLine'||key==='bio')el.innerHTML=value;else el.textContent=value;});
  languageButton.innerHTML=next==='zh'?'EN':'中文';
  languageButton.setAttribute('aria-label',next==='zh'?'Switch to English':'切换为中文');
  try{localStorage.setItem('homepage-language',next);}catch{}
}
languageButton.addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
try{if(localStorage.getItem('homepage-language')==='zh')setLanguage('zh');}catch{}

const citation=`@inproceedings{peng2026slerir,
  title     = {SLER-IR: Spherical Layer-Wise Expert Routing
               for All-in-One Image Restoration},
  author    = {Peng, Shurui and Lin, Xin and Luo, Shi and
               Ou, Jincen and Zhang, Dizhe and Qi, Lu and
               Nguyen, Truong Q. and Ren, Chao},
  booktitle = {European Conference on Computer Vision},
  year      = {2026},
  pages     = {472--491},
  doi       = {10.1007/978-3-032-37627-5_26}
}`;
const dialog=document.getElementById('citation-dialog');
document.getElementById('citation-text').textContent=citation;
document.querySelectorAll('[data-citation]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('copy-status').textContent='';dialog.showModal();}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.getElementById('copy-citation').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try{await navigator.clipboard.writeText(citation);status.textContent=language==='zh'?'已复制':'Copied';}
  catch{const range=document.createRange();range.selectNodeContents(document.getElementById('citation-text'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent=language==='zh'?'请按 ⌘C 或 Ctrl+C 复制':'Press ⌘C or Ctrl+C to copy';}
});
