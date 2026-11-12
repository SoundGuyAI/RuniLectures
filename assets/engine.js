// Business Without Borders - shared interactions
(function(){
  var prog=document.getElementById('progress');
  if(prog){addEventListener('scroll',function(){var h=document.documentElement;prog.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

  // flip cards
  document.querySelectorAll('.flip').forEach(function(f){
    f.addEventListener('click',function(){f.setAttribute('aria-pressed',f.getAttribute('aria-pressed')==='true'?'false':'true')});
  });

  // tabs
  document.querySelectorAll('[data-tabs]').forEach(function(group){
    var tabs=group.querySelectorAll('.tab');
    tabs.forEach(function(t){t.addEventListener('click',function(){
      tabs.forEach(function(x){x.setAttribute('aria-selected','false')});
      t.setAttribute('aria-selected','true');
      var panes=group.querySelectorAll('.tabpane');
      panes.forEach(function(p){p.classList.remove('show')});
      var pane=group.querySelector('#'+t.getAttribute('aria-controls'));
      if(pane)pane.classList.add('show');
    })});
  });

  // scenarios: every option is defensible; picking one reveals its tradeoffs + a debrief
  document.querySelectorAll('.scenario').forEach(function(box){
    box.querySelectorAll('.opt').forEach(function(btn){
      btn.addEventListener('click',function(){
        box.querySelectorAll('.opt').forEach(function(b){b.disabled=true});
        btn.classList.add('picked');
        var d=box.querySelector('.debrief');
        if(d)d.classList.add('show');
      });
    });
  });

  // checklists
  document.querySelectorAll('.check').forEach(function(c){
    var out=c.querySelector('.count');
    c.querySelectorAll('input').forEach(function(i){
      i.addEventListener('change',function(){
        i.closest('label').classList.toggle('done',i.checked);
        if(out){var n=c.querySelectorAll('input:checked').length,all=c.querySelectorAll('input').length;out.textContent=n+'/'+all+' pre-flight checks done';}
      });
    });
  });
})();
