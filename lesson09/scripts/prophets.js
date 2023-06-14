const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}
  
getProphetData();


const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');
      let p6 = document.createElement('p');
      let label1 = document.createElement('label');
      let label2 = document.createElement('label');
      let label3 = document.createElement('label');
      let label4 = document.createElement('label');
      let label5 = document.createElement('label');
      let label6 = document.createElement('label');
      let span1 = document.createElement('span');
      let span2 = document.createElement('span');
      let span3 = document.createElement('span');
      let span4 = document.createElement('span');
      let span5 = document.createElement('span');
      let span6 = document.createElement('span');
      let cardInfo = document.createElement('div');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Build the p content out to show the prophet's details
    span1.textContent = `${prophet.birthdate}`;
    span1.setAttribute('name', 'birthdate')
    span2.textContent = ` ${prophet.birthplace}`;
    span2.setAttribute('name', 'birthpalce')
    span3.textContent = ` ${prophet.numofchildren}`;
    span3.setAttribute('name', 'numberofchildren')
    span4.textContent = `${prophet.length}`;
    span4.setAttribute('name', 'length');
    span5.textContent = `${prophet.death}`;
    span5.setAttribute('name', 'death');
    let birthdate = prophet.birthdate;
    let deathdate = prophet.death;
    span6.textContent = ` ${calculateAge(birthdate, deathdate, prophet.name)}`;  
    span6.setAttribute('name', 'age');

      // Build the label for the paragraph
        label1.textContent = 'Birth: '
        label1.setAttribute('for', 'birthdate');
        label2.textContent = 'Place: '
        label2.setAttribute('for', 'birthplace');
        label3.textContent = 'Children: '
        label3.setAttribute('for', 'numberofchildren');
        label4.textContent = 'Prophet Years: '
        label4.setAttribute('for', 'length');
        label5.textContent = 'Death: '
        label5.setAttribute('for', 'death');
        label6.textContent = 'Age: '
        label6.setAttribute('for', 'age');


      // Create class for each card
      card.setAttribute('class', 'card');

      // Append label and span in paragraphs
      p1.appendChild(label1);
      p1.appendChild(span1);
      p2.appendChild(label2);
      p2.appendChild(span2);
      p3.appendChild(label3);
      p3.appendChild(span3);
      p4.appendChild(label4);
      p4.appendChild(span4);
      p5.appendChild(label5);
      p5.appendChild(span5);
      p6.appendChild(label6);
      p6.appendChild(span6);
      
      

      // Append the section(card) with the created elements
      card.appendChild(h2);
      cardInfo.appendChild(p1);
      cardInfo.appendChild(p2);
      cardInfo.appendChild(p3);
      cardInfo.appendChild(p4);
      cardInfo.appendChild(p5);
      cardInfo.appendChild(p6);
      card.append(cardInfo);
      card.appendChild(portrait);
      cards.appendChild(card);

      
});

// Calculate Age
function calculateAge(date1, date2, prophet) {
  if (date2 !== 'null'){
      if (prophet === 'Russell M.'){
        const getDate = new Date();
        const day = getDate.getDate();
        const month = getDate.toLocaleDateString('default', {month: 'long'});
        const year = getDate.getFullYear();
        date2 = `${day} ${month} ${year}`;
      };
      const parsedDate1 = parseDate(date1);
      const parsedDate2 = parseDate(date2);

      // Calculate the difference in milliseconds
      const diffInMilliseconds = parsedDate2 - parsedDate1;

      // Convert milliseconds to years
      const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
      const age = Math.floor(diffInMilliseconds / millisecondsPerYear);
      return age;

  function parseDate(dateString) {
      let dateParts = dateString.split(' ');
      const day = parseInt(dateParts[0]);
      const month = parseMonth(dateParts[1]);
      const year = parseInt(dateParts[2]);

      return new Date(year, month, day);
  }

  function parseMonth(monthName) {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months.indexOf(monthName) + 1;
  }

  }
  

}

}; // end of forEach loop


const less10 = document.querySelector("#less10");
const more10 = document.querySelector("#more10");
const showAll = document.querySelector("#showAll");
const prophetFilter =
less10.addEventListener('click', () => {
    const spanLengths = document.querySelectorAll('span[name="length"]');
    const originalDisplay = {};
    

    for (let i = 0; i < spanLengths.length; i++) {
      let span = spanLengths[i];
      const spanParent = span.parentNode.parentNode.parentNode;
      const spanValue = span.textContent;
      originalDisplay[i] = spanParent.style.display;

      if (spanParent.style.display === 'none') {
        spanParent.style.display = '';
      }

      if (spanValue >= 10) {
        spanParent.style.display = 'none';
      }
    }
});

more10.addEventListener('click', () => {
  const spanLengths = document.querySelectorAll('span[name="length"]');
  const originalDisplay = {};

  for (let i = 0; i < spanLengths.length; i++) {
    let span = spanLengths[i];
    const spanParent = span.parentNode.parentNode.parentNode;
    const spanValue = span.textContent;
    originalDisplay[i] = spanParent.style.display;

    if (spanParent.style.display === 'none') {
        spanParent.style.display = '';
    }

    if (spanValue <= 10) {
      spanParent.style.display = 'none';
    };
    
    
  }
});


showAll.addEventListener('click', ()=> {
  const cards = document.querySelectorAll('.card');
  const originalDisplay = {};

  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    originalDisplay[i] = card.style.display;
    
    if (card.style.display === 'none') {
      card.style.display = '';
      
  }
  }
});







