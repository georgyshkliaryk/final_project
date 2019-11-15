
let height=0, width=0, n=0;
let count = 0;
let j=0;
disabled = [];

function DisabledPlaces() {
    let rand = getRandomInt(0, n);
    for (let i=0; i<rand; i++) {
        let place = getRandomInt(0, n);
        tickets[place].disabled = true;
    }
}
function CheckDisabled() {
    for (let i=0; j<n; i++) {
        if (tickets[i].disabled) {
            disabled[j] = i;
            j++;
        }
    }
}

function ChooseTickets() {
    for (let i=0; i<n; i++) {
            if (tickets[i].checked == true) {
                let place = (i+1) % width; 
                let row = Math.ceil((i+1)/width); 
                alert('Ряд: ' + row + ' Место: ' + place);
            }
        }
}
 function CheckMax() {
    count = 0;
    for (let i=0; i<n; i++) { 
        if (tickets[i].checked) {
            count++;
        }
    }      
    if (count == 5) {
        document.querySelector("#warning").innerHTML = 'Не более 5 билетов!'; 
        for (let i=0; i<n; i++) {
            if (tickets[i].checked == false) {
                tickets[i].disabled = true;
            }
        }
    }
    else {
        document.querySelector("#warning").innerHTML = '';
        for (let i=0; i<n; i++) {
            CheckDisabled();                  
            if (tickets[i].checked == false && disabled.indexOf(i) == -1) {     //&& если место не бало занято изначально
                tickets[i].disabled = false;
            }
        }

    }
}  
function HallChoose() {
    if (document.querySelector('select').options[0].selected) {
        height = 10;
        width = 15;
    }
    if (document.querySelector('select').options[1].selected) {
        height = 15;
        width = 23;
    }
    if (document.querySelector('select').options[2].selected) {
        height = 20;
        width = 30;
    }
    n = height*width;
    document.querySelector('#tickets').innerHTML = '';
    for (let i=0; i<n; i++) {
        if (i % width == 0) {
            let br = document.createElement('br');
            document.querySelector('#tickets').append(br);
        }
        let div = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');

        let class1 = document.createAttribute('class');
        let checkbox = document.createAttribute("type");
        let id = document.createAttribute('id');
        let for1 = document.createAttribute('for');
        
        class1.value = "check";
        id.value = "checkbox" + i;
        checkbox.value = "checkbox";
        for1.value = "checkbox" + i;            //checkbox0, checkbox1, ....
        input.setAttributeNode(checkbox);
        input.setAttributeNode(id);
        label.setAttributeNode(for1);
        div.setAttributeNode(class1);
        document.querySelector('#tickets').append(div);
        document.querySelector('#tickets div').append(input);
        document.querySelector('#tickets div').append(label);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

