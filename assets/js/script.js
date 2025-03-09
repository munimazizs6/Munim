window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
  
$('.expertise .item').hover(function(){
  $('.expertise .item').removeClass('active');
  $(this).addClass('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".portfolio .filters button");
  const items = document.querySelectorAll(".portfolio .items .item");

  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          filterButtons.forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");
          const filter = this.getAttribute("data-filter");
          items.forEach(item => {
              if (filter === "all" || item.classList.contains(filter)) {
                  item.classList.add("active");
              } else {
                  item.classList.remove("active");
              }
          });
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          slideShadows: false,
      },
      loop: false,
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.to(".marquee .left", {
  x: "100vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".marquee",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".marquee .right", {
  x: "-100vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".marquee",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

gsap.utils.toArray(".fade-in-up-1").forEach((heading) => {
  gsap.fromTo(
      heading,
      { opacity: 0, y: 50 }, // Start position
      {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play reverse play reverse", // Replay on scroll up/down
          }
      }
  );
});

gsap.utils.toArray(".fade-in-up-2").forEach((heading) => {
  gsap.fromTo(
      heading,
      { opacity: 0, y: 50 }, // Start position
      {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.7,
          ease: "power3.out",
          scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play reverse play reverse", // Replay on scroll up/down
          }
      }
  );
});

gsap.utils.toArray(".fade-in-up-3").forEach((heading) => {
  gsap.fromTo(
      heading,
      { opacity: 0, y: 50 }, // Start position
      {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 1.4,
          ease: "power3.out",
          scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play reverse play reverse", // Replay on scroll up/down
          }
      }
  );
});

document.querySelectorAll(".home .abs-img").forEach((img, index) => {
  const targetImg = document.querySelectorAll(".expertise .abs-img")[index];

  if (targetImg) {
      gsap.to(img, {
          x: () => targetImg.getBoundingClientRect().left - img.getBoundingClientRect().left,
          y: () => targetImg.getBoundingClientRect().top - img.getBoundingClientRect().top,
          scale: 1, // Optional: Ensure images don't change size
          ease: "power2.out",
          scrollTrigger: {
              trigger: ".expertise",
              start: "top bottom", // Animation starts when .expertise section comes into view
              end: "top center", // Ends when .expertise section reaches center of viewport
              scrub: true,
          }
      });
  }
});

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  markers: false
});

gsap.utils.toArray(".slide").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    end: () => `+=${panel.offsetHeight}`,
    pin: true, 
    pinSpacing: false,
    scrub: 1,
  });
});

$('.menu-toggle').click(function(){
  this.classList.toggle('opened');
  $('.menu-wrapper').toggleClass('opened');
});

$('.menu-wrapper a').click(function(){
  $('.menu-toggle').toggleClass('opened');
  $('.menu-wrapper').toggleClass('opened');
});

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('.about h3').forEach(text => {
  let splitText = new SplitType(text, {
    type: 'words'
  })
  const section = text.closest('section');
  gsap.from(splitText.words, {
    opacity: 0.2,
    ease: 'none',
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: section,
      start: 'top top', 
      end: () => `+=${window.innerHeight * 5}px`,
      scrub: true,
      pin: true,
    }
  })
})
