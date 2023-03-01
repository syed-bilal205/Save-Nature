const mobile = document.querySelector('.mobileNavbar')
const navHeader =document.querySelector('.header')

mobile.addEventListener('click',()=>{
    navHeader.classList.toggle('active');
})



window.addEventListener('scroll',()=>{
    navHeader.classList.remove('active')
});
