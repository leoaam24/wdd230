if (document.querySelector('.success-container')) {
    async function displayFruits() {
        const response = await fetch('json/fruit.json');
        const data = await response.json();
        buildSuccesspage(data);
    }

    displayFruits();


    const buildSuccesspage = (data) => {
        const fruitchoicediv =  document.querySelector('#fruit-choice');
        const instructionscontainer = document.querySelector('.special-instructions-container');
        const instructions = sessionStorage.getItem('instructions');
        const customerdetails = document.querySelector('.customer-details');
        const customerarray = sessionStorage.getItem('customerInfo');
        const customer = customerarray ? JSON.parse(customerarray) : [];
        const ordertimestamp = sessionStorage.getItem('ordertimestamp');
        const orderdate = new Date(parseInt(ordertimestamp));
        
        const options = {
            timeZone: 'America/Los_Angeles',
            timeZoneName: 'short',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };

        const formattedDate = orderdate.toLocaleString('en-US', options);

        //Create Customer Details

        let cname = document.createElement('p');
        let cemail = document.createElement('p');
        let cphone = document.createElement('p');
        let corderdate = document.createElement('p');
        let cinstructions = document.createElement('p');

        customerdetails.appendChild(corderdate);
        corderdate.textContent = `Date & Time: ${formattedDate}`;
        customerdetails.appendChild(cname);
        cname.textContent = `First Name: ${customer[0]}`;
        customerdetails.appendChild(cemail);
        cemail.textContent = `Email: ${customer[1]}`;
        customerdetails.appendChild(cphone);
        cphone.textContent = `Phone: ${customer[2]}`;
        cinstructions.textContent = instructions;

        const fruitlist = [];
        const carbolist = [];
        const proteinlist = [];
        const fatlist = [];
        const calorieslist = [];
        const sugarlist = [];
        data.forEach((chunk) => {
            const fruitname = chunk.name;
            const fruitgenus = chunk.genus;
            const fruitfamily = chunk.family;
            const fruitordder = chunk.order;
            const fruitnutrition = chunk.nutritions;
            const fruitid = chunk.id;

            const selectedFruits = sessionStorage.getItem('selectedFruits');
            const fruitschoice = selectedFruits ? JSON.parse(selectedFruits) : [];

            if (fruitschoice.includes(fruitname)) {
                if (!fruitlist.includes(fruitname)){
                    fruitlist.push(fruitname);
                    carbolist.push(fruitnutrition.carbohydrates);
                    proteinlist.push(fruitnutrition.protein);
                    fatlist.push(fruitnutrition.fat);
                    calorieslist.push(fruitnutrition.calories);
                    sugarlist.push(fruitnutrition.sugar);
                }
                let div = document.createElement('div');
                let name = document.createElement('p');
                let genus = document.createElement('p');
                let family = document.createElement('p');
                let nutrition = document.createElement('p');
                div.setAttribute('class', 'fruit-info');
                div.appendChild(name);
                name.textContent = `Name: ${fruitname}`;
                div.appendChild(genus);
                genus.textContent = `Genus: ${fruitgenus}`;
                div.appendChild(family);
                family.textContent = `Family: ${fruitfamily}`;
                div.appendChild(nutrition);
                nutrition.setAttribute('id', 'nutritionfacts');
                nutrition.innerHTML = `Carbohydrates: ${fruitnutrition.carbohydrates}<br>
                                        Protein: ${fruitnutrition.protein}<br>
                                        Fat: ${fruitnutrition.fat}<br>
                                        Calories: ${fruitnutrition.calories}<br>
                                        Sugar: ${fruitnutrition.sugar}`;
                fruitchoicediv.appendChild(div);
            }

            instructionscontainer.appendChild(cinstructions);
        })

        //build Total Nutrition
        const nutritioncontainer = document.querySelector('.total-nutrition');
        let sumofcarbo = sumOf(carbolist);
        let sumofprotein = sumOf(proteinlist);
        let sumoffat = sumOf(fatlist);
        let sumofcalories = sumOf(calorieslist);
        let sumofsugar = sumOf(sugarlist);

        let carbo = document.createElement('p');
        let prot = document.createElement('p');
        let fat = document.createElement('p');
        let calo = document.createElement('p');
        let sug = document.createElement('p');

        nutritioncontainer.appendChild(carbo);
        nutritioncontainer.appendChild(prot);
        nutritioncontainer.appendChild(fat);
        nutritioncontainer.appendChild(calo);
        nutritioncontainer.appendChild(sug);

        carbo.textContent = `Carbohydrates: ${sumofcarbo}`;
        prot.textContent = `Protein: ${sumofprotein}`;
        fat.textContent = `Fat: ${sumoffat}`;
        calo.textContent = `Calories: ${sumofcalories}`;
        sug.textContent = `Sugar: ${sumofsugar}`;


        function sumOf(Numbers) {
            return Numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          }
    }
}
