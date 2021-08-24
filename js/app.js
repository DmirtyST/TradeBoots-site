

const animItems = document.querySelectorAll('.js-animation-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active-animation');
			} else {
				if (!animItem.classList.contains('js-not-endless')) {
					animItem.classList.remove('active-animation');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}



$(window).scroll(function() {
	var height = $(window).scrollTop();
	
		 
	if(height > 100){
	$('.header__burger').addClass('active-burger');
	} else{
		
	$('.header__burger').removeClass('active-burger');
	}
	
	});
	

   $(document).ready(function(){

      $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock')
      });
   });   

   $('.header__link').click(function () {
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock')
		
   })


	
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



new Swiper ('.home-slider',{

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true,
   },


parallax:true,
loop:true,
 slidesPerGroupe:1,
 slidesPerView: 1,
 spaceBetween: 0,
 speed:1500,
 effect: 'coverflow',
 coverflowEffect:{

   //? угол
   rotate:10,

   //? наложение
   stretch:10,

   //? тень
   slideShadows:true,

},
 scrollbar:{
   
   el:'.swiper-scrollbar',
   //возможность перетаскивать скролл
   draggable:true,
 },

 
})

