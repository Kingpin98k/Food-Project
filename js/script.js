    // Select the button
    const mobileNavButton = document.querySelector('.btn-mobile-nav');

    // Select the navigation element
    const mainNav = document.querySelector('.header');

    // Add a click event listener to the button
    mobileNavButton.addEventListener('click', () => {
        // Toggle the 'nav-open' class on the navigation element
        mainNav.classList.toggle('nav-open');
    });

    const links = document.querySelectorAll('a:link')
    links.forEach(function(link){
        link.addEventListener('click',function(e){
            e.preventDefault();

            const href = link.getAttribute('href')

            if(href==='#')
            window.scrollTo({
            top:0,
            behavior:"smooth"
            })
            if(href!=="#"&&href.startsWith('#')){
                const sectionElement = document.querySelector(href)
                sectionElement.scrollIntoView({
                    behavior:"smooth"
                })
            }
            if(link.classList.contains('main-nav-link')){
                document.querySelector('header').classList.toggle('nav-open')
            }
    })
})

const observer = new IntersectionObserver(function(entries){
    //One entry for every threshold value
    const ent = entries[0];
    if(!ent.isIntersecting){
        document.body.classList.add('sticky')
    }
    if(ent.isIntersecting){
        document.body.classList.remove('sticky')
    }
},{
    //We want to observe it moving inside of viewport
    root:null,
    //We will have an event when the hero moves out completely of the viewport
    threshold:0,
    rootMargin:"-80px"
})
observer.observe(document.querySelector(".section-hero"))