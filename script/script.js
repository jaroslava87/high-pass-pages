// карта
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.769470, 37.638966],
        zoom: 12, 
    });

    var myGeoObject = new ymaps.GeoObject({
geometry: {
    type: "Point" 
}
});

var myPlacemark = new ymaps.Placemark([55.769470, 37.638966],{}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon_map.webp',
    iconImageSize: [60, 60],
});


myMap.geoObjects.add(myGeoObject); 
myMap.geoObjects.add(myPlacemark);
}

// поиск

document.querySelector(".header__search").addEventListener("click", function() {
    document.querySelector(".header_form").classList.add("form__active");
    this.classList.add("active");
  })
  
  document.querySelector(".form-close").addEventListener("click", function() {
     let form = document.querySelector(".header_form");
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__search").classList.remove("active")
  });
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header_form");
    if (!target.closest(".header__form--container")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
    }
  })

  // валидация формы

  new window.JustValidate('.about__form', {
    colorWrong: '#FF3030',
    rules: {
      email: {
        required: true,
        email: true
      }
    },
   messages: {
         email: {
           required: "Вы не ввели e-mail"
         },
       }
    });

new window.JustValidate('.form__content', {
    colorWrong: '#FF3030;',
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
   messages: {
        name: {
          required: "Вы не ввели имя"
        },
         email: {
           required: "Вы не ввели e-mail"
         }
       }
    });

    // бургер

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav--container');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
    function () {
        menu.classList.toggle('header-nav--active');
        document.body.classList.toggle('stop-scroll');
    });

 menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        menu.classList.remove('header-nav--active');
        document.body.classList.remove('stop-scroll');
    })
});

    

