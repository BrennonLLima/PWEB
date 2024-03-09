window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset;
  
    const navItems = document.querySelectorAll("#nav li");
    for (const navItem of navItems) {
      const sectionId = navItem.querySelector("a").getAttribute("href");
      const sectionElement = document.getElementById(sectionId);
  
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;
  
      if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
        navItem.classList.add("ativo");
      } else {
        navItem.classList.remove("ativo");
      }
    }
  });
  