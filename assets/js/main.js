// Projects page filter
document.querySelectorAll('.flt button').forEach(function(b){
  b.addEventListener('click',function(){
    document.querySelectorAll('.flt button').forEach(function(x){x.classList.toggle('on',x===b)});
    document.querySelectorAll('.pj a').forEach(function(a){
      a.classList.toggle('h',b.dataset.f!=='all'&&a.dataset.c.indexOf(b.dataset.f)<0);
    });
  });
});
