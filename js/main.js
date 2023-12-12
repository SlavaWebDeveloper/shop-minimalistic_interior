const infoBtsns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtsns) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    // Скрываю все активные кнопки
    for (let hint of infoHints) {
      hint.classList.add('none');
    }

    // Показываю текущую кнопку 
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
  });

}

// Закрытие подсказки при клике по всему документу
document.addEventListener('click', function () {
  for (let hint of infoHints) {
    hint.classList.add('none');
  }
});

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
  hint.addEventListener('click', (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});


// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProductsAll = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {

  btn.addEventListener('click', function() {

    // Убираю активный класс у всех кнопок
    for (let btn of tabsBtns) {
      btn.classList.remove('tab-controls__btn--active')
    } 

    // Добавляю активный класс к текущей кнопке
    this.classList.add('tab-controls__btn--active');

    // Отображаю нужные товары и скрываю все остальные товары 
    for (let product of tabsProductsAll) {

      // Проверяю на отображение всех товаров
      if (this.dataset.tab === 'All') {

        product.classList.remove('none');

      } else {
        
        if (product.dataset.tabValue === this.dataset.tab) {
          
          product.classList.remove('none');

        } else {

          product.classList.add('none');
          
        }
      
      }
    }

    // update свайпер 
    swiper.update();

  })
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mobile__nav-wrapper--open');
};

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile__nav-wrapper--open');
};