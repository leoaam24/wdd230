async function displayBusinessnes() {
    const response = await fetch('json/data.json');
    const data = await response.json();
    buildDirectory(data);
}

displayBusinessnes();

const buildDirectory = (data) => {
    
    data.forEach((chunk) => {
        // data objects
        const businessname = chunk.businessname;
        const address = chunk.address;
        const phone = chunk.phone;
        const siteAddress = chunk.website;
        const logo = chunk.logo;
        const membership = chunk.membershiplevel;
        const bcode = chunk.businesscode;

        // html selectors
        const cards = document.querySelector(".cards");
        
        // create elements
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let cardimg = document.createElement('img');
        let cardInfo = document.createElement('div');
        let dropdown = document.createElement('span');

        

        // editing card contents
        h2.textContent = businessname;
        p1.textContent = address;
        p2.textContent = phone;
        p3.textContent = siteAddress;
        p4.textContent = membership;
        
        // appending span to paragraph
        // p3.appendChild(siteSpan);


        // setting attributes
        cardimg.setAttribute('src', logo);
        cardimg.setAttribute('loading', 'lazy');
        cardimg.setAttribute('alt', `${bcode}-logo`);
        card.setAttribute('class', 'card');
        p4.setAttribute('class', `${membership}-class`);


        // appending info to Info div
        cardInfo.appendChild(p1);
        cardInfo.appendChild(p2);
        cardInfo.appendChild(p3);
        cardInfo.appendChild(p4);

        // appending elements to card-section
        card.appendChild(cardimg);
        card.appendChild(h2);
        card.appendChild(cardInfo);

        // appending card to cards
        cards.append(card);
    })
};

const cards = document.querySelector(".cards");
const gridBtn = document.querySelector(".grid-view");
const listBtn = document.querySelector(".list-view");

gridBtn.addEventListener('click', () => {
    cards.removeAttribute('id');
})

listBtn.addEventListener('click',()=>{
    cards.setAttribute('id', 'cards-list-view');
})

