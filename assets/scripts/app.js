const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('show', 'animated');
            observer.unobserve(entry.target);
        }
    });
});


const hiddenSections = document.getElementsByTagName('section');
Array.from(hiddenSections).forEach((el) => observer.observe(el));