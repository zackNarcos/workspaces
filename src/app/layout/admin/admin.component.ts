import {AfterViewInit, Component, OnInit} from '@angular/core';
import PerfectScrollbar from "perfect-scrollbar";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {

  constructor(
    private moduleStoreService: ModuleStoreService
  ) {
    this.moduleStoreService.loadProjects()
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.navbarFixed(0);
    // Toggle Sidenav
    const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
    const iconSidenav = document.getElementById('iconSidenav');
    const sidenav = document.getElementById('sidenav-main');
    let body = document.getElementsByTagName('body')[0];
    let className = 'g-sidenav-pinned';

    // Resize navbar color depends on configurator active type of sidenav

    let referenceButtons = document.querySelector('[data-class]');

    window.addEventListener("resize", navbarColorOnResize);

    function navbarColorOnResize() {
      if (window.innerWidth > 1200) {
        if (referenceButtons?.classList.contains('active') && referenceButtons.getAttribute('data-class') === 'bg-transparent') {
          sidenav?.classList.remove('bg-white');
        } else {
          sidenav?.classList.add('bg-white');
        }
      } else {
        sidenav?.classList.add('bg-white');
        sidenav?.classList.remove('bg-transparent');
      }
    }

    if (iconNavbarSidenav) {
      iconNavbarSidenav.addEventListener("click", toggleSidenav);
    }

    if (iconSidenav) {
      iconSidenav.addEventListener("click", toggleSidenav);
    }

    function toggleSidenav() {
      if (body.classList.contains(className)) {
        body.classList.remove(className);
        setTimeout(function() {
          sidenav?.classList.remove('bg-white');
        }, 100);
        sidenav?.classList.remove('bg-transparent');

      } else {
        body.classList.add(className);
        sidenav?.classList.add('bg-white');
        sidenav?.classList.remove('bg-transparent');
        iconSidenav?.classList.remove('d-none');
      }
    }

    const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      if (document.getElementsByClassName('main-content')[0]) {
        const mainpanel = document.querySelector('.main-content');
        if (mainpanel) {
          const ps = new PerfectScrollbar(mainpanel);
        }
      }

      if (document.getElementsByClassName('sidenav')[0]) {
        const sidebar = document.querySelector('.sidenav');
        if (sidebar) {
          const ps1 = new PerfectScrollbar(sidebar);
        }
      }

      if (document.getElementsByClassName('navbar-collapse')[0]) {
        const fixedplugin = document.querySelector('.navbar:not(.navbar-expand-lg) .navbar-collapse');
        if (fixedplugin) {
          const ps2 = new PerfectScrollbar(fixedplugin);
        }
      }

      if (document.getElementsByClassName('fixed-plugin')[0]) {
        const fixedplugin = document.querySelector('.fixed-plugin');
        if (fixedplugin) {
          const ps3 = new PerfectScrollbar(fixedplugin);
        }
      }
    }

    // Verify navbar blur on scroll
    this.navbarBlurOnScroll('navbarBlur');

    // Fixed Plugin

    if (document.querySelector('.fixed-plugin')) {
      const fixedPlugin = document.querySelector('.fixed-plugin');
      const fixedPluginButton = document.querySelector('.fixed-plugin-button');
      const fixedPluginButtonNav = document.querySelector('.fixed-plugin-button-nav');
      const fixedPluginCard = document.querySelector('.fixed-plugin .card');
      const fixedPluginCloseButton = document.querySelectorAll('.fixed-plugin-close-button');
      const navbar = document.getElementById('navbarBlur');
      const buttonNavbarFixed = document.getElementById('navbarFixed');

      if (fixedPluginButton) {
        fixedPluginButton.addEventListener('click', function() {
          if (!fixedPlugin?.classList.contains('show')) {
            fixedPlugin?.classList.add('show');
          } else {
            fixedPlugin.classList.remove('show');
          }
        })
      }

      if (fixedPluginButtonNav) {
        fixedPluginButtonNav.addEventListener('click',  function() {
          if (!fixedPlugin?.classList.contains('show')) {
            fixedPlugin?.classList.add('show');
          } else {
            fixedPlugin.classList.remove('show');
          }
        })
      }

      fixedPluginCloseButton.forEach(function(el) {
        el.addEventListener('click', function() {
          fixedPlugin?.classList.remove('show');
        })
      })

      document.querySelector('body')?.addEventListener('click',function(e) {
        const target = e.target as HTMLElement;
        if (e.target != fixedPluginButton && e.target != fixedPluginButtonNav && target.closest('.fixed-plugin .card') != fixedPluginCard) {
          fixedPlugin?.classList.remove('show');
        }
      })

      if (navbar) {
        if (navbar.getAttribute('navbar-scroll') == 'true') {
          buttonNavbarFixed?.setAttribute("checked", "true");
        }
      }

    }

    // Deactivate sidenav type buttons on resize and small screens
    window.addEventListener("resize", sidenavTypeOnResize);
    window.addEventListener("load", sidenavTypeOnResize);

    function sidenavTypeOnResize() {
      let elements = document.querySelectorAll('[onclick="sidebarType(this)"]');
      if (window.innerWidth < 1200) {
        elements.forEach(function(el) {
          el.classList.add('disabled');
        });
      } else {
        elements.forEach(function(el) {
          el.classList.remove('disabled');
        });
      }
    }
// Tabs navigation

    const total = document.querySelectorAll('.nav-pills') as NodeListOf<HTMLElement>;

    total.forEach(function(item, i) {
      let moving_div = document.createElement('div');
      const first_li = item.querySelector('li:first-child .nav-link') as HTMLElement;
      const tab = first_li?.cloneNode() as HTMLElement;
      if (tab) {
        tab.innerHTML = "-";

        moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
        moving_div.appendChild(tab);
        item.appendChild(moving_div);
      }

      const list_length = item.getElementsByTagName("li").length;

      moving_div.style.padding = '0px';
      moving_div.style.width = first_li?.offsetWidth + 'px';
      moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
      moving_div.style.transition = '.5s ease';

    });
    // Tabs navigation resize

    window.addEventListener('resize', function(event) {
      total.forEach(function(item, i) {
        item?.querySelector('.moving-tab')?.remove();
        const moving_div = document.createElement('div');
        const tab = item?.querySelector(".nav-link.active")?.cloneNode() as HTMLElement
        tab.innerHTML = "-";

        moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
        moving_div.appendChild(tab);

        item.appendChild(moving_div);

        moving_div.style.padding = '0px';
        moving_div.style.transition = '.5s ease';

      });

      if (window.innerWidth < 991) {
        total.forEach(function(item, i) {
          if (!item.classList.contains('flex-column')) {
            item.classList.add('flex-column', 'on-resize');
          }
        });
      } else {
        total.forEach(function(item, i) {
          if (item.classList.contains('on-resize')) {
            item.classList.remove('flex-column', 'on-resize');
          }
        })
      }
    });


    function getEventTarget(e: Event) {
      e = e || window.event;
      return e.target || e.srcElement;
    }

// End tabs navigation
  }
  //Set Sidebar Color
  sidebarColor($event: any) {
    const parent = $event.target.parentElement?.children;
    const color = $event.target.getAttribute("data-color");

    if (parent == null) return;
    for (let i = 0; i < parent.length; i++) {
      parent[i].classList.remove('active');
    }

    if (!$event.target.classList.contains('active')) {
      $event.target.classList.add('active');
    } else {
      $event.target.classList.remove('active');
    }

    const sidebar = document.querySelector('.sidenav');
    sidebar?.setAttribute("data-color", color? color : 'white');

    if (document.querySelector('#sidenavCard')) {
      const sidenavCard = document.querySelector('#sidenavCard');
      let sidenavCardClasses = ['card', 'card-background', 'shadow-none', 'card-background-mask-' + color];
      if (sidenavCard)
      sidenavCard.className = '';
      sidenavCard?.classList.add(...sidenavCardClasses);

      const sidenavCardIcon = document.querySelector('#sidenavCardIcon');
      let sidenavCardIconClasses = ['ni', 'ni-diamond', 'text-gradient', 'text-lg', 'top-0', 'text-' + color];
      if (sidenavCardIcon)
      sidenavCardIcon.className = '';
      sidenavCardIcon?.classList.add(...sidenavCardIconClasses);
    }

  }
// Set Navbar Fixed
   navbarFixed($event: any) {
    let classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
    const navbar = document.getElementById('navbarBlur');

    if (!$event?.target?.getAttribute("checked") && $event === 0) {
      navbar?.classList.add(...classes);
      navbar?.setAttribute('navbar-scroll', 'true');
      this.navbarBlurOnScroll('navbarBlur');
      $event?.target?.setAttribute("checked", "true");
    } else {
      navbar?.classList.remove(...classes);
      navbar?.setAttribute('navbar-scroll', 'false');
      this.navbarBlurOnScroll('navbarBlur');
      $event.target.removeAttribute("checked");
    }
  };
  //Set Sidebar Type
  sidebarType($event: any) {
    const parent = $event.target.parentElement.children;
    const color = $event.target.getAttribute("data-class");

    const colors = [];

    for (let i = 0; i < parent.length; i++) {
      parent[i].classList.remove('active');
      colors.push(parent[i].getAttribute('data-class'));
    }

    if (!$event.target.classList.contains('active')) {
      $event.target.classList.add('active');
    } else {
      $event.target.classList.remove('active');
    }

    const sidebar = document.querySelector('.sidenav');

    for (let i = 0; i < colors.length; i++) {
      sidebar?.classList.remove(colors[i]);
    }

    sidebar?.classList.add(color);
  }
  // Navbar blur on scroll
  navbarBlurOnScroll(id: any) {
    const navbar = document.getElementById(id);
    let navbarScrollActive = navbar ? navbar.getAttribute("navbar-scroll") : false;
    let scrollDistance = 5;
    let classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
    let toggleClasses = ['shadow-none'];

    if (navbarScrollActive == 'true') {
      window.onscroll = this.debounce(function() {
        if (window.scrollY > scrollDistance) {
          blurNavbar();
        } else {
          transparentNavbar();
        }
      }, 10);
    } else {
      window.onscroll = this.debounce(function() {
        transparentNavbar();
      }, 10);
    }

    function blurNavbar() {
      navbar?.classList.add(...classes)
      navbar?.classList.remove(...toggleClasses)

      toggleNavLinksColor('blur');
    }

    function transparentNavbar() {
      if (navbar) {
        navbar.classList.remove(...classes)
        navbar.classList.add(...toggleClasses)

        toggleNavLinksColor('transparent');
      }
    }

    function toggleNavLinksColor(type: string) {
      let navLinks = document.querySelectorAll('.navbar-main .nav-link')
      let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

      if (type === "blur") {
        navLinks.forEach(element => {
          element.classList.remove('text-body')
        });

        navLinksToggler.forEach(element => {
          element.classList.add('bg-dark')
        });
      } else if (type === "transparent") {
        navLinks.forEach(element => {
          element.classList.add('text-body')
        });

        navLinksToggler.forEach(element => {
          element.classList.remove('bg-dark')
        });
      }
    }
  }
  debounce(func: any, wait: number, immediate?: boolean) {
    let timeout: any;
    return function() {
      // @ts-ignore
      const context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
}
