import ConsultPopUp from './ConsultPopUp.js';
import LicensePopUp from './LicensePopUp.js';

window.addEventListener('load', () => {
    const mapHandler = () => {
        let mapIcon = document.querySelector('.map-wrapper');
        let mapPopUp = document.querySelector('.pop-up-map');

        mapIcon.addEventListener('click', () => mapPopUp.classList.toggle('hidden'));
    }

    mapHandler()

    //

    const consultPopUpHandler = () => {
        let app = document.querySelector('.app');
        let consultPopUp = ConsultPopUp();

        let consultBtn = document.querySelector('.btn-consult');
        consultBtn.addEventListener('click', () => app.appendChild(consultPopUp))

        document.addEventListener('mouseup', (e) => {
            if(!consultPopUp.contains(e.target) || e.target.classList.contains('popup-btn-close')) consultPopUp.remove()
        })
    }

    consultPopUpHandler()

    //

    const licensePopUpWrapper = () => {
        let app = document.querySelector('.app');
        let licensePopUp = LicensePopUp();

        let licensesList = document.querySelectorAll('.licenses-slider li');


        licensesList.forEach(license => {
            license.addEventListener('click', () => app.appendChild(licensePopUp))

            document.addEventListener('mouseup', (e) => {
                if(!licensePopUp.contains(e.target) || e.target.classList.contains('license-close-btn')) licensePopUp.remove()
            })
        })
    }

    licensePopUpWrapper()

    // 

    // burger

    const burgerHandler = () => {
        let burger = document.querySelector('.burger');
        let menu = document.querySelector('nav ul');
        let lines = burger.querySelectorAll('.line');
        let first = burger.querySelector('.first');
        let second = burger.querySelector('.second');
        let third = burger.querySelector('.third');
        
        burger.addEventListener('click', () => {
            menu.classList.toggle('show');
            lines.forEach(line => line.classList.toggle('switching-color'));
            first.classList.toggle('rotate-up');
            second.classList.toggle('switch-right');
            third.classList.toggle('rotate-down');
        })
    }

    burgerHandler()

})