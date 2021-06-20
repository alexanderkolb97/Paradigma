// import '../css/ConsultPopUp.css';

const ConsultPopUp = () => {
    let popUpWrapper = document.createElement('div');
    popUpWrapper.classList.add('consult-popup-wrapper');

    let formPartWrapper = document.createElement('div');
    formPartWrapper.classList.add('form-part-wrapper');
    let workerInfo = document.createElement('div');
    workerInfo.classList.add('worker-info');

    let btnClose = document.createElement('button');
    btnClose.classList.add('popup-btn-close');

    // formPartWrapper content

    let h2 = document.createElement('h2');
    h2.classList.add('consult-header');
    h2.innerHTML = 'Просто оставьте заявку <br /> и получите консультацию <br /> по всем вопросам';

    let consultText = document.createElement('div');
    consultText.classList.add('consult-text');
    consultText.innerHTML = 'Как с Вами удобно связаться?';

    let contactsList = document.createElement('ul');
    contactsList.classList.add('contacts-list');
    contactsList.innerHTML = `
        <li>
            <button></button>
            Viber
        </li>
        <li>
            <button></button>
            WhatsApp
        </li>
        <li>
            <button></button>
            Telegram
        </li>
    `;

    let form = document.createElement('form');
    form.innerHTML = `
        <input type="text" placeholder="Ваш номер телефона"/>
        <button type="submit">Жду</button>
    `;

    let terms = document.createElement('p');
    terms.classList.add('terms-accept');
    terms.innerHTML = 'Нажимая на кнопку вы соглашаетесь с <br /> условиями <a href="#">Политики конфиденциальности</a>';

    formPartWrapper.appendChild(h2);
    formPartWrapper.appendChild(consultText);
    formPartWrapper.appendChild(contactsList);
    formPartWrapper.appendChild(form);
    formPartWrapper.appendChild(terms);

    // formContentWrapper ends

    // workerInfo content

    let workerName = document.createElement('span');
    workerName.classList.add('worker-name');
    workerName.innerHTML = '<strong>Николай</strong> <br /> Главный инженер <br />';

    let workerExp = document.createElement('span');
    workerExp.classList.add('worker-exp');
    workerExp.innerHTML = 'Опыт работы с <br /> дымоходами 8 лет';

    workerInfo.appendChild(workerName);
    workerInfo.appendChild(workerExp);

    // workerInfo content ends

    popUpWrapper.appendChild(formPartWrapper);
    popUpWrapper.appendChild(workerInfo);
    popUpWrapper.appendChild(btnClose);

    return popUpWrapper;
}

export default ConsultPopUp;