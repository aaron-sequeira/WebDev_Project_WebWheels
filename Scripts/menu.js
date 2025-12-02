// Hamburger menu toggle
      (function(){
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.vnav');
        const overlay = document.querySelector('.nav-overlay');
        
        function toggleMenu() {
          const isActive = nav.classList.contains('active');
          nav.classList.toggle('active');
          hamburger.classList.toggle('active');
          overlay.classList.toggle('active');
          hamburger.setAttribute('aria-expanded', !isActive);
        }
        
        if(hamburger && nav) {
          hamburger.addEventListener('click', toggleMenu);
          overlay.addEventListener('click', toggleMenu);
          
          // Close menu when clicking nav items on mobile
          const navItems = document.querySelectorAll('.vnav .nav-item');
          navItems.forEach(item => {
            item.addEventListener('click', () => {
              if(window.innerWidth <= 640) {
                toggleMenu();
              }
            });
          });
        }
      })();

      // for navbar
      (function(){
        const navItems = Array.from(document.querySelectorAll('.vnav .nav-item'));
        const currentFile = (function(){
          const p = location.pathname || location.href;
          const seg = p.split('/').filter(Boolean).pop() || '';
          return seg.toLowerCase();
        })();
        navItems.forEach(a=>{
          const href = (a.getAttribute('href')||'').split('/').filter(Boolean).pop() || '';
          if(href && href.toLowerCase() === currentFile) a.classList.add('active');
          a.addEventListener('click', ()=>{navItems.forEach(n=>n.classList.remove('active'));a.classList.add('active')});
        });
      })();

      