function ativandoTabs() {
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

ativandoTabs();
// ==================================================== //

function ativandoAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.add("ativo");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
ativandoAccordion();

// =======================================================//

// ativando scroolSuave
function ativandoScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function handleToScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

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
ativandoScrollSuave();
