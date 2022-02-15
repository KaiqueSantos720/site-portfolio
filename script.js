window.addEventListener("scroll", function(){
    if(this.window.scrollY > 150){
        this.document.querySelector("#navbar").style.opacity = 0.9
    } else{
        this.document.querySelector("#navbar").style.opacity = 1;
    }
});

class MobileNav{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'linkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick); 
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNav = new MobileNav(".mobile-menu", "#navbar-itens", "#navbar-itens li",);
mobileNav.init();