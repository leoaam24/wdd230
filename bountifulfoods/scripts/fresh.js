
if (document.querySelector('.order-form-container')) {
    async function displayFruits() {
        const response = await fetch('json/fruit.json');
        const data = await response.json();
        buildFruitList(data);
    }
    
    displayFruits();

    const buildFruitList = (data) => {
    
        data.forEach((chunk) => {
            const fruitlist = document.querySelector('.fruit-list');
            const fruitname = chunk.name;
            const fruitgenus = chunk.genus;
            const fruitfamily = chunk.family;
            const fruitordder = chunk.order;
            const fruitnutrition = chunk.nutritions;
            const fruitid = chunk.id;
            
    
            //Create Element
            let fruitdiv = document.createElement('div');
            let fruitcheckbox = document.createElement('input');
            let fruitlabel = document.createElement('label');
            let fruitspan = document.createElement('span');
            
            //Create individual fruit check box
            //HTML format: <div class="fruit-1">
            fruitdiv.setAttribute('class', `fruitindividual`);
            fruitdiv.appendChild(fruitlabel);
            fruitlabel.setAttribute('for', fruitname);
            fruitlabel.appendChild(fruitcheckbox);
            fruitlabel.appendChild(fruitspan);
            fruitspan.textContent = `${fruitname}`;
            fruitcheckbox.setAttribute('class', 'fruitcheckbox');
            fruitcheckbox.setAttribute('type', 'checkbox');
            fruitcheckbox.setAttribute('name', fruitname);
            fruitcheckbox.setAttribute('id', fruitname);
            fruitcheckbox.setAttribute('value', fruitname);
    
            //Append fruitdiv to fruit-list
            fruitlist.appendChild(fruitdiv);
        })
    
        //submit order

        const orderForm = document.querySelector('.order-form');
        
        orderForm.addEventListener('submit', () =>{
            const fname = document.querySelector('#fname').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            const instructions = document.querySelector('#textInstructions').value;
            const checkboxes = document.querySelectorAll('.fruit-list input[type="checkbox"]:checked');
            const selectedFruits = [];
            const customerInfo = [];
            customerInfo.push(fname);
            customerInfo.push(email);
            customerInfo.push(phone);
            checkboxes.forEach((checked) => {
                if (!selectedFruits.includes(checked.value)) {
                    selectedFruits.push(checked.value);
                }
            })

            const currentDate = new Date();
            const currentTimestamp = currentDate.getTime();
            //session storage
            sessionStorage.setItem('selectedFruits', JSON.stringify(selectedFruits));
            sessionStorage.setItem('customerInfo', JSON.stringify(customerInfo));
            sessionStorage.setItem('instructions', instructions);
            sessionStorage.setItem('ordertimestamp', currentTimestamp);

            //local storage
            let ordercounter = localStorage.getItem('successfulorders');
            let newcount = parseInt(ordercounter);

            if (ordercounter === null){
                localStorage.setItem('successfulorders', 1);
            } else {
                localStorage.setItem('successfulorders', (newcount + 1));
            }
            


        })
    }
}
