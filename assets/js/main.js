// Main JS: smooth scrolling, simple reveal-on-scroll, and small UI helpers.
document.addEventListener('DOMContentLoaded', function () {
  // Year injection for footers
  const y = new Date().getFullYear()
  document.querySelectorAll('#year, #year-about, #year-projects').forEach(el => el && (el.textContent = y))

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({behavior:'smooth',block:'start'})
    })
  })

  // Simple reveal on scroll
  const reveals = document.querySelectorAll('.reveal')
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    })
  }, {threshold: 0.08})
  reveals.forEach(r => obs.observe(r))

  // Nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.nav-links')
  if(toggle && links){
    toggle.addEventListener('click', ()=>{
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex'
    })
  }
})
