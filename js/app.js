// slider films



const swiper = new Swiper('.swiper-items', {
	loop: true,
	mousewheel: true,
	slidesPerView: 7,
	spaceBetween: 30,
	centeredSlides: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
},

	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		// when window width is >= 320px
		320: {
		  slidesPerView: 2.5,
		  spaceBetween: 10
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 2.6,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 3.25,
		  spaceBetween: 40
		},
		767: {
			slidesPerView: 3.5,
			spaceBetween: 10
		},
		975: {
			slidesPerView: 5,
			spaceBetween: 50
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 50
		},
		1500: {
			slidesPerView: 7,
			spaceBetween: 100
		},
	}
});



//popular slider



const swiper__popular = new Swiper('.slider__popular', {
loop: true,
mousewheel: false,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
	      clickable: true,
	},	
	autoplay: {
		delay: 5000,
	},
});



//actor slider



const swiper__actor = new Swiper('.slider__actor', {
	loop: true,
	mousewheel: true,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 10
		},
		// when window width is >= 320px
		320: {
		  slidesPerView: 3,
		  spaceBetween: 10
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 4,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 5,
		  spaceBetween: 40
		},
		767: {
			slidesPerView: 6,
			spaceBetween: 10
		},
		975: {
			slidesPerView: 8,
			spaceBetween: 50
		},
		1200: {
			slidesPerView: 10,
			spaceBetween: 50
		},
		1500: {
			slidesPerView: 12,
			spaceBetween: 100
		},
	}
});



// burger btn



const menuBtn = document.querySelector('.menu-btn');
const menuForm = document.querySelector('.menu-form');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuForm.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuForm.classList.remove('open');
		menuOpen = false;
	}
});




// burger tab



const tabsBtn = document.querySelectorAll(".form-tab");
const tabsItems = document.querySelectorAll(".form-content");

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
	tabsBtn.forEach(function(item) {
		item.addEventListener("click", function() {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabId);

			if( ! currentBtn.classList.contains('active') ) {
				tabsBtn.forEach(function(item) {
					item.classList.remove('active');
				});

				tabsItems.forEach(function(item) {
					item.classList.remove('active');
				});
			}


			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		});
	});	
}
	
document.querySelector('.form-tab:nth-child(2)').click();


// player changer


let player = function() {
	let playerItem = document.querySelectorAll('.selectopt'),
	playerContent = document.querySelectorAll('.player'),
	playerNum;

	playerItem.forEach(item => {
		item.addEventListener('click', selectPlayerItem)
	});

	function selectPlayerItem() {
		playerItem.forEach(item => {
			item.classList.remove('active');
		})
		this.classList.add("active");
		playerNum = this.getAttribute('player-item');
		selectPlayerContent(playerNum);
	}

	function selectPlayerContent(playerNum) {
		playerContent.forEach(item => {
			item.classList.contains(playerNum)? item.classList.add('active') : item.classList.remove('active');
		})
	}
};

player();


// like - dislike

const innerNameBtn = document.querySelectorAll('.name-inner-btn');

innerNameBtn.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		btn.classList.toggle('active')
	})
);

// XYU


// comments

const showContainers = document.querySelectorAll('.show-replies');

showContainers.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		let parentContainer = e.target.closest(".comment__container");
		let _id = parentContainer.id;
		if (_id) {
			let childernContainer = parentContainer.querySelectorAll(`[dataset=${_id}]`);
			childernContainer.forEach(child => child.classList.toggle('opened'))
		}
	})
);



//loader



var loader = document.getElementById("preloader");
	window.addEventListener('load', function(){
		loader.style.display = 'none'
	});


