/**
* Template Name: Day
* Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
* Updated: May 18 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// (function() {
//   "use strict";
//   const preloader = document.querySelector('#preloader');
//   if (preloader) {
//     window.addEventListener('load', () => {
//        preloader.remove();
//    });   }
  
//  document.addEventListener('scroll', function() {
//      var element = document.querySelector('.navbar');
//     if (window.scrollY > 200) {
//        element.classList.add('scroll');
//     } else {
//         element.classList.remove('scroll');
//     }
//  });


  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('.collapse').classList.toggle('show');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  // mobile navbar functionality
  document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle-btn');
    const navMenu = document.querySelector('.nav-bar-menu');

    function toggleMobileNav() {
        navMenu.classList.toggle('show');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }

    mobileNavToggleBtn.addEventListener('click', toggleMobileNav);

    document.querySelectorAll('.nav-bar-menu a').forEach(navLink => {
        navLink.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                toggleMobileNav();
            }
        });
    });
});
 // end

  /**
   * Preloader
   */


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

/* youtube testimoials*/

function scrollLeft() {
  const container = document.querySelector('.video-scroll-container');
  container.scrollBy({
      left: -300, // Adjust this value to control the scroll distance
      behavior: 'smooth'
  });
}

function scrollRight() {
  const container = document.querySelector('.video-scroll-container');
  container.scrollBy({
      left: 300, // Adjust this value to control the scroll distance
      behavior: 'smooth'
  });
}

$(".video-scroll-container").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  loop: true,
  nav: false,
  dots: true,
  items: 1,
  dotsData: true,
});


// Automatic scrolling
let scrollDirection = 1; // 1 for right, -1 for left
const autoScrollInterval = setInterval(() => {
  const container = document.querySelector('.video-scroll-container');
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      scrollDirection = -1;
  } else if (container.scrollLeft === 0) {
      scrollDirection = 1;
  }
  container.scrollBy({
      left: 300 * scrollDirection, // Adjust this value to control the scroll distance
      behavior: 'smooth'
  });
}, 3000); // Adjust the interval time (in milliseconds) as needed

//reviews scroll
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reviews');
  container.addEventListener('mouseover', () => {
      container.style.animationPlayState = 'paused';
  });
  container.addEventListener('mouseout', () => {
      container.style.animationPlayState = 'running';
  });
});


//contact form


  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;

    if (!name || !phone || !location) {
      alert('Please fill in all fields');
      return;
    }

    // Prepare data to send
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('location', location);

    // Send data using fetch to a server-side script that handles email sending
    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset(); // Reset form fields after successful submission
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was a problem submitting your form. Please try again later.');
    });
  });

