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
	if (card2p) {
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
	}
  });

// FOR LAST VISIT 
const msToDays = 84600000;
const visits = document.querySelector(".visits");
const visitMessage = document.querySelector('.visit-message');
const lastVisit = document.querySelector(".last-visit");
const numDays = document.querySelector(".number-days");
const dateLastVisit = window.localStorage.getItem("lastVisit");
const msDateNow = Date.now();
const totalDays = ((msDateNow - dateLastVisit) / msToDays);
let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits === 0) {
visitMessage.textContent = "This is your first time visiting the site!";
} else {
if (numVisits === 1) {
	numVisits += 1;
	document.querySelector(".singular-plural").textContent = "time";
	document.querySelector(".visits").textContent = "the 2nd";
} else {
	document.querySelector(".singular-plural").textContent = "times";
	document.querySelector(".visits").textContent = numVisits;
}
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
window.localStorage.setItem("lastVisit", msDateNow);

numDays.textContent = totalDays.toFixed(0);

if (totalDays > 1) {
document.querySelector(".singular-plural-2").textContent = "days";
} else {
document.querySelector(".singular-plural-2").textContent = "day";
}

// Membership Application
if (document.querySelector("#form-container")) {
	const nonprofit = document.querySelector("#r1");
	const bronze = document.querySelector("#r2");
	const silver = document.querySelector("#r3");
	const gold = document.querySelector("#r4");
	let prevSelection = null;
	nonprofit.addEventListener("change", () => {
		if (nonprofit.checked) {
			document.querySelector(".NP-info").style.display = "block";
			document.querySelector(".bronze-info").style.display = "none";
			document.querySelector(".silver-info").style.display = "none";
			document.querySelector(".gold-info").style.display = "none";
			prevSelection = nonprofit;
		} 
	});
	bronze.addEventListener("change", ()=>{
		if (bronze.checked) {
			document.querySelector(".bronze-info").style.display = "block";
			document.querySelector(".NP-info").style.display = "none";
			document.querySelector(".silver-info").style.display = "none";
			document.querySelector(".gold-info").style.display = "none";
			prevSelection = bronze;
		}
	})
	silver.addEventListener("change", ()=>{
		if (silver.checked) {
			document.querySelector(".silver-info").style.display = "block";
			document.querySelector(".NP-info").style.display = "none";
			document.querySelector(".bronze-info").style.display = "none";
			document.querySelector(".gold-info").style.display = "none";
			prevSelection = silver;
		}
	})
	gold.addEventListener("change", ()=>{
		if (gold.checked) {
			document.querySelector(".gold-info").style.display = "block";
			document.querySelector(".NP-info").style.display = "none";
			document.querySelector(".bronze-info").style.display = "none";
			document.querySelector(".silver-info").style.display = "none";
			prevSelection = gold;
		}
	})

	// Timestamp
	const myForm = document.querySelector("#form-container");
	
	if (myForm) {
		const timestamp = document.querySelector("#timestamp");
		let currentDate = new Date();
		currentDate.toISOString();
		timestamp.value = currentDate;
		console.log(timestamp.value);
	}


	const submitBtn = document.querySelector(".submitBtn");
	const form = document.querySelector("form");
	const fname = document.querySelector("#fname");
	const lname = document.querySelector("#lname");
	const email = document.querySelector("#email");
	const phone = document.querySelector("#phone");
	const business = document.querySelector("#business");

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		window.location.href = 'thankyou.html';	
	})



}


