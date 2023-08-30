var hde = document.querySelector('#hde');
var top1 = document.querySelector('.top1');


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


window.onscroll = () => {
        console.log(window.scrollY)
        if(window.scrollY > 800){
            hde.classList.add('bg-header');
        }else{
            hde.classList.remove('bg-header');
        }

    if (window.scrollY >100) {
        top1.classList.add('show');
    }else {
        top1.classList.remove('show');
    }
}
top1.onclick = () => {
    window.scrollTo({
        top : 0,
        behavior: 'smooth',
    })
}



