'use strict';
(()=>{
 const $=id=>document.getElementById(id);
 function resize(){if(parent!==window&&location.origin!=='null')parent.postMessage({type:'auditmind-kb-height',height:Math.ceil(document.body.scrollHeight)+12},location.origin);}
 new ResizeObserver(resize).observe(document.body);addEventListener('load',resize);
 const allowed=['income-in-progress','income-over-time','outside-scope'],selected=new URLSearchParams(location.search).get('case');
 if(!$('case-list')){if(allowed.includes(selected))document.querySelector('main>a').href='index.html?case='+selected;return;}
 const data=window.AUDITMIND_RAG_SHOWCASE;
 if(!data){$('case-question').textContent='案例文件加载失败，请刷新重试。';return;}
 function show(c){
  for(const b of $('case-list').querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.case===c.id));
  $('case-question').textContent=c.question;$('case-status').textContent=c.outcome==='insufficient_evidence'?'已验证案例 · 资料不足，未生成专业结论':'已验证案例 · 查看历史真实模型回答';
  $('case-meta').textContent=`原生成日期：${c.generatedOn} · 模型：${c.model} · 本次浏览未产生API费用`;
  $('case-answer').innerHTML=c.answerHtml;$('case-references').replaceChildren();
  if(c.citations.length){const heading=document.createElement('h3');heading.textContent='可信引用 · 点击查看公开原文';$('case-references').append(heading);}
  for(const r of c.citations){const article=document.createElement('article'),a=document.createElement('a'),p=document.createElement('p');a.href=r.url;a.textContent='《'+r.title+'》'+r.article+' · 查看原文';p.textContent=r.type;article.className='reference';article.append(a,p);$('case-references').append(article);}
  $('case-raw').textContent=c.rawAnswer;$('case-digest').textContent='原始回答SHA-256：'+c.answerHash+'。仅公开案例与必要条文；私有授权、费用账本和运行路径不在公开包中。';resize();
 }
 for(const c of data.cases){const b=document.createElement('button');b.type='button';b.dataset.case=c.id;b.textContent=c.question;b.addEventListener('click',()=>show(c));$('case-list').append(b);}
 show(data.cases.find(c=>c.id===selected)||data.cases[0]);
})();
