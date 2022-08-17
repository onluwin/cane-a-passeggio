;(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]')
    const mobileMenuRef = document.querySelector('[data-menu]')
    const noscroll = { body: document.querySelector("body") }

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false

        menuBtnRef.classList.toggle('is-open')
        menuBtnRef.setAttribute('aria-expanded', !expanded)

        mobileMenuRef.classList.toggle('is-open');
        // noscroll.body.classList.toggle('no-scroll');

        const closeMenu = document.querySelector(`.js-close-menu`)
        const closeMenu2 = document.querySelector(`.js-close-menu2`)
        const closeMenu3 = document.querySelector(`.js-close-menu3`)
        const closeMenu4 = document.querySelector(`.js-close-menu4`)
        
        
        closeMenu.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') } )
        closeMenu2.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') })
        closeMenu3.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') })
        closeMenu4.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') })
        
        closeMenu.addEventListener('click', () => { menuBtnRef.classList.remove('is-open') })
        closeMenu2.addEventListener('click', () => { menuBtnRef.classList.remove('is-open') })
        closeMenu3.addEventListener('click', () => { menuBtnRef.classList.remove('is-open') })
         closeMenu4.addEventListener('click', () => { menuBtnRef.classList.remove('is-open') })

        
    })
})()

// --закрытие моб меню после клика вне его контента--

// var modal = $('.mob-menu');

// function setModal(display){
//   modal.css('display', display);
// }

// $(modal).click(function(e){
//   var target = e.target;
//   if(!($('.mob-menu').is(target)) && $('.mob-menu').has(target).length ===0){
//     setModal('none');
//   }
// });













// ;(() => {
//         const closeMenu = document.querySelector(`.js-close-menu`);
//         const closeMenu2 = document.querySelector(`.js-close-menu2`)
//         const closeMenu3 = document.querySelector(`.js-close-menu3`)
//         const closeMenu4 = document.querySelector(`.js-close-menu4`)
        
        
//         closeMenu.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') })
//         closeMenu2.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') })
//         closeMenu3.addEventListener('click', () => { mobileMenuRef.classList.remove('is-open') })
//         closeMenu4.addEventListener('click', () => {mobileMenuRef.classList.remove('is-open')})
        
//     })
// })()
