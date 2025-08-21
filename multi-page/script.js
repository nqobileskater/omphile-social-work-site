
// Mobile nav toggle (simple)
document.addEventListener('click', (e)=>{
  const nav = document.querySelector('nav ul');
  const btn = document.querySelector('#menuToggle');
  if(e.target.id==='menuToggle'){
    nav.style.display = nav.style.display==='flex' ? 'none':'flex';
  }
});

// Simple form handler (demo only)
const contactForm = document.querySelector('#contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    alert('Thank you, ' + (data.name||'') + '! We will contact you shortly.');
    contactForm.reset();
  });
}
