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
document.querySelector("#currentyear").textContent = year;
document.querySelector("#datetime").textContent = `${dayName}, ${dayNumber} ${monthName} ${year}`;
document.querySelector("#lastmodified").textContent = modified;

if (mediaQuery.matches) {
	document.getElementById("info-3").classList.toggle("open");
	document.querySelector("#lastmodified2").textContent = `Last Modification: ${modified}`;
}