function initTabs() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTabs(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTabs(index);
      });
    });
  }
}

initTabs();
// ==================================================== //

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// =======================================================//

// ativando scrool links
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function handleToScroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      //uma outra forma de fazer o scroll //

      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", handleToScroll);
    });
  }
}
initScrollSuave();
// ===================================================== //

// ativando scroll lateral //

function initScrollLateral() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const windowMetade = window.innerHeight * 0.7;

        const sectionTopo = section.getBoundingClientRect().top - windowMetade;
        if (sectionTopo < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initScrollLateral();
// =================================================================== //
