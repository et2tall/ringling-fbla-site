(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const links = document.querySelector('[data-nav-links]');
  if(!btn || !links) return;

  function toggle(){
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', toggle);

  // Close menu when navigating (mobile)
  links.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    if(links.classList.contains('open')) toggle();
  });
})();