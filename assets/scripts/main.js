// Sticky NavBar (Scroll)
window.addEventListener('scroll',function HeaderSticky(){
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
});