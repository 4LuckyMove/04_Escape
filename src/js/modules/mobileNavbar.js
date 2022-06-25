let menuBtn = document.querySelector('.menu-mobile-btn');
let menu = document.querySelector('.navbar');

export const mobileBtn = menuBtn.addEventListener('click', function() {
	document.body.classList.toggle('lock');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
const logoLinks = document.querySelectorAll('.logo-link[data-goto]');
const btnLinks = document.querySelectorAll('.btn-link[data-goto]');

if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	if(logoLinks.length > 0) {
		logoLinks.forEach(menuLink => {
			menuLink.addEventListener('click', onMenuLinkClick);
		});
	}

	if(btnLinks.length > 0) {
		btnLinks.forEach(menuLink => {
			menuLink.addEventListener('click', onMenuLinkClick);
		});
	}

	function onMenuLinkClick(event) {
		const menuLink = event.target;

		offMenuLinkClick();
		menuLink.classList.add('active-link');

		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

			if(menuBtn.classList.contains('active')) {
				document.body.classList.remove('lock');
				menuBtn.classList.remove('active');
				menu.classList.remove('active');
			}

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            event.preventDefault();
        }
	}

	function offMenuLinkClick() {
		let menuLinkActive = document.querySelector('.menu-link.active-link');
		if(menuLinkActive) {
			menuLinkActive.classList.remove('active-link');
		}
	}
}