// Contact form handling (client-side only)
      (function(){
        const form = document.getElementById('contactForm');
        if(!form) return;
        const firstNameEl = form.querySelector('#first_name');
        const lastNameEl = form.querySelector('#last_name');
        const emailEl = form.querySelector('#email');
        const reasonEl = form.querySelector('#reason');
        const msgEl = form.querySelector('#message');
        const submitBtn = form.querySelector('.btn');
        const formMessage = document.getElementById('formMessage');

        if(!reasonEl.value){ 
          reasonEl.style.color = "#999";
        }
        reasonEl.addEventListener('change', function () {
          reasonEl.style.color = "white";
        }, { once: true });
       

        function setError(field, message){
          const el = form.querySelector('.error[data-for="'+field+'"]');
          if(el) el.textContent = message || '';
        }

        function validate(){
          let ok = true;
          if(!firstNameEl.value.trim()){ 
            setError('first_name','Please enter your First name');
            ok = false 
          } else setError('first_name','');

          if(!lastNameEl.value.trim()){ 
              setError('last_name','Please enter your Last name');
              ok = false 
          } else setError('last_name','');

          const email = emailEl.value.trim();

          if(!email){ 
            setError('email','Please enter your email'); 
            ok = false 
          }
          else if(emailEl.validity.typeMismatch){ 
            setError('email','Please enter a valid email'); 
            ok = false 
          } else setError('email','');

          if(!reasonEl.value){ 
            setError('reason','Please select the reason of your inquiry');
            ok = false 
          } else setError('reason','');
          
          if(!msgEl.value.trim() || msgEl.value.trim().length < 6){ 
            setError('message','Please enter a short message (6+ characters)'); 
            ok = false 
          } else setError('message','');
          return ok;
        }

        form.addEventListener('submit', function(e){
          e.preventDefault();
          if(!validate()) return;
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
          // simulate send delay
          setTimeout(()=>{
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            formMessage.classList.add('show');
            // hide after a while
            setTimeout(()=> formMessage.classList.remove('show'), 6000);
          }, 900);
        });
      })();