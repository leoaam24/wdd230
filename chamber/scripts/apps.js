function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
}

const x = document.getElementById("hamburgerBtn");
x.onclick=toggleMenu;

const mediaQuery = window.matchMedia('(min-width: 35rem)');
const mediaQueryMax = window.matchMedia('(min-widt: 62.5rem');



// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayNumber = d.getDate();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const modified = document.lastModified;
const dayInt = d.getDay();
document.querySelector("#currentyear").textContent = year;
document.querySelector("#datetime").textContent = `${dayName}, ${dayNumber} ${monthName} ${year}`;
document.querySelector("#lastmodified").textContent = modified;

if (mediaQuery.matches) {
	document.getElementById("info-3").classList.toggle("open");
	document.querySelector("#lastmodified2").textContent = `Last Modification: ${modified}`;
}

const promoBanner = document.querySelector("#bannerdiv");
if (dayInt === 1 || dayInt === 2){
	console.log("it's working");
	promoBanner.style.display = "block";
} else {
	promoBanner.style.display = "none";
}

const card2 = document.querySelector('.card-2');
const card4 = document.querySelector('.card-4');
const card2p = document.querySelector("#card2p");
const card4p = document.querySelector("#card4p");
document.addEventListener('DOMContentLoaded', function() {
	
	if (card2p.scrollWidth > card2.offsetWidth) {
		const seeMoreLink2 = document.createElement('span');
		seeMoreLink2.className = 'see-more';
		seeMoreLink2.textContent = 'See more...';
	  	seeMoreLink2.addEventListener('click', function() {
			card2.style.overflow = 'visible';
			card2p.style.whiteSpace = 'normal';
			seeMoreLink2.style.display = 'none';
	  });
		card2.appendChild(seeMoreLink2);
	};

	if (card4p.scrollWidth > card4.offsetWidth) {
		const seeMoreLink4 = document.createElement('span');
		seeMoreLink4.className = 'see-more';
		seeMoreLink4.textContent = 'See more...';
		seeMoreLink4.addEventListener('click', function() {
			card4.style.overflow = 'visible';
			card4p.style.whiteSpace = 'normal';
			seeMoreLink4.style.display = 'none';
			});
		card4.appendChild(seeMoreLink4);
	}

  });
