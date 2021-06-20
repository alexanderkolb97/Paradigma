const License = () => {
    let licensePopUpWrapper = document.createElement('div');
    licensePopUpWrapper.classList.add('license-popup-wrapper');

    let licenseContent = document.createElement('div');
    licenseContent.classList.add('license-content');

    let licenseHeader = document.createElement('h2');
    licenseHeader.classList.add('license-header');
    licenseHeader.innerHTML = 'Some license';

    let licenseText = document.createElement('p');
    licenseText.classList.add('license-text');
    licenseText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officiis recusandae fugit nemo molestiae omnis soluta explicabo alias deleniti tenetur voluptatem reprehenderit animi ex quod molestias iure corporis numquam ab excepturi blanditiis quas corrupti provident sed error? Provident, autem doloremque. Error nulla ea eius veritatis laboriosam ad sapiente saepe, maxime consequuntur, vel debitis delectus. Magni harum neque amet rerum nesciunt quasi expedita similique corrupti quas in, placeat atque deleniti. Error sit, debitis ipsam saepe nam voluptatibus odio temporibus delectus minus velit corporis maiores adipisci, nulla quas voluptates voluptatum dolores recusandae fugit. Soluta facere repellat maiores suscipit quis. Adipisci, vitae nulla.';

    let licenseCloseBtn = document.createElement('button');
    licenseCloseBtn.classList.add('license-close-btn');

    licenseContent.appendChild(licenseHeader);
    licenseContent.appendChild(licenseText);
    licenseContent.appendChild(licenseCloseBtn);
    
    licensePopUpWrapper.appendChild(licenseContent);

    return licensePopUpWrapper
}

export default License;
