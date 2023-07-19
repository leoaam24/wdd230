if (window.matchMedia('(min-width: 699px)').matches) {
    const navbuttonopen = document.querySelector('#navButtonOpen');
    const navbuttonclose = document.querySelector('#navButtonClose');
    const sidenavcontainer = document.querySelector('#mySideNav');
    const sidenavbackground = document.querySelector('.sidenavbackground');
    const weatherInfo = document.querySelector('.weather-info');

    navbuttonopen.addEventListener('click', ()=> {
    sidenavcontainer.style.width = "40%";
    navbuttonopen.style.display = "none";
    navbuttonclose.style.display = "unset";
    sidenavbackground.style.display = "unset";
    if (weatherInfo) {
        weatherInfo.style.display = "none";
    }
    
    })

    const sidenav = document.querySelector('.sidenav');
    const liElements = document.querySelectorAll('.sidenav li');

    for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('mouseover', function() {
        sidenav.style.overflowX = 'unset';
    });

    liElements[i].addEventListener('mouseout', function() {
        sidenav.style.overflowX = '';
    });
    }

    navbuttonclose.addEventListener('click', ()=>{
    sidenavcontainer.style.width = "0%";
    navbuttonopen.style.display = "unset";
    navbuttonclose.style.display = "none";
    sidenavbackground.style.display = "none";
    if (document.querySelector('.order-form-container')) {
        weatherInfo.style.display = "none";
    } else {
        if (weatherInfo){
            weatherInfo.style.display = "unset";
        }
        
    }
    })
    
} else {
    const navbuttonopen = document.querySelector('#navButtonOpen');
    navbuttonopen.style.display = "none";
}


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
    document.querySelector("#lastmodified").textContent = modified;

    if (document.querySelector('.order-form-container')) {
        document.querySelector('.weather-info').style.display = 'none';
    }

    const orderCount = localStorage.getItem('successfulorders');
    const htmlordercount = document.querySelector('#orderCount');

    if (document.querySelector('.hero-container')){
        if (orderCount === null){
            htmlordercount.textContent = `Welcome! Discover the pure essence of fruits in every sip!`
        } else if (parseInt(orderCount) === 1){
            htmlordercount.textContent = `How's your 1st order? Don't miss out! Resdiscover the deliciousness of our drink!`
        } else if (parseInt(orderCount) > 1){
            htmlordercount.textContent = `We're glad to have you back! Orders made: ${orderCount} 👏🏻`;
        }
    }

    if (document.querySelector('.aboutus-container')){
        const sendfeedbackform = document.querySelector('.sendfeedback-form');

        sendfeedbackform.addEventListener('submit', () => {
            alert('Message Sent!');
        })
    }

    if (document.querySelector('.hero-container')){
        const freshbutton = document.querySelector('#freshButton');

        freshbutton.addEventListener('click', () => {
            window.location.href = 'freshpage.html';
        });
    }

    
