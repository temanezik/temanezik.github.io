(function(){
    'use strict';

    class Menu {
        constructor(settings) {
            this.menuNode = settings.menuNode;
        }

        toggleMenuState(className) {
            if (typeof className !== 'string' || className.length === 0) {
                return console.log('you did not give the class for toggleState function');
            }
            return  this.menuNode.classList.toggle(className);
        }
    }

    const jsMenuNode = document.querySelector('.menu');
    const demoMenu = new Menu ({
        menuNode: jsMenuNode
    });

    function callMenuToggle(event) {
        demoMenu.toggleMenuState('menu_activated');
    }

    jsMenuNode.querySelector('.menu__hamburger').addEventListener('click', callMenuToggle);
})();

let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}