"use strict";

function scrollHeader() {
  var header = document.querySelector('header');

  if (this.scrollY > 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader); // Mixer Portfolio

var mixerPortfolio = mixitup('.work-container', {
  selectors: {
    target: '.mix'
  },
  animation: {
    duration: 400
  }
});
var spans = document.querySelectorAll('.work-item');
spans[0].classList.add('active');
spans.forEach(function (ele) {
  ele.addEventListener('click', function () {
    spans.forEach(function (el) {
      el.classList.remove('active');
    });
    this.classList.add('active');
  });
});

function invokeEmail() {
  emailjs.init('iwzuRaiX5b-vZ7haJ');
}

invokeEmail();

function sendEmail() {
  emailjs.send('service_mn9quw6', 'template_9it1hcr', {
    from_name: document.querySelector('#name').value,
    message: document.querySelector('#message').value,
    email_to: document.querySelector('#email').value
  }).then(function (response) {
    console.log(response);
  }, function (error) {
    console.log(error);
  });
}

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  sendEmail();
}); // open navbar

var navOpen = document.querySelector('.navbar-open');
var navbarMenu = document.querySelector('.navbar-menu');
window.addEventListener('scroll', function () {
  if (this.scrollY > 80) {
    navOpen.style.right = '20px';
    navbarMenu.classList.remove('visible');
    navbarMenu.classList.add('hidden');
  } else {
    navOpen.style.right = '-60px';
    navbarMenu.classList.remove('hidden');
    navbarMenu.classList.add('visible');
  }
});
var navOpenIcon = document.querySelector('.bar');
navOpen.addEventListener('click', function () {
  navbarMenu.classList.toggle('visible');

  if (navbarMenu.classList.contains('visible')) {
    navOpenIcon.classList.remove('fa-bars');
    navOpenIcon.classList.add('fa-xmark');
  } else {
    navOpenIcon.classList.remove('fa-xmark');
    navOpenIcon.classList.add('fa-bars');
  }
}); // scroll to top

var scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', function () {
  this.scrollY >= 80 ? scrollBtn.style.right = '20px' : scrollBtn.style.right = '-60px';
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
var theme = document.querySelector('.change-theme');
var themeIcon = document.querySelector('.fa-regular');
theme.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.add('fa-moon');
    themeIcon.classList.remove('fa-sun');
  }
});