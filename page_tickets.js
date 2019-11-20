
let height=0, width=0, n=0;
let count=0;
let j=0;
let disabled = [];
let hall = "";

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
    document.querySelector('section2').innerHTML = "";
    document.querySelector("#Thx").innerHTML = "";
    document.querySelector("#call").innerHTML = "";
    document.querySelector('#printTickets').style.display = "none";
    HallSize();
    for (let i=0; i<n; i++) {
        if (tickets[i].checked == true) {
            let place = (i+1) % width; 
            let row = Math.ceil((i+1)/width); 
            if (place == 0) 
                place = width;
            let div = document.createElement('div');
            let p = document.createElement('p');
            document.querySelector('section2').appendChild(div);
            div.appendChild(p);
            p.innerHTML = "<b>Ряд: </b>" + row + "<br>" + "<b>Место: </b>" + place + "<br>" + "<b>Зал: </b>" + hall;
            document.querySelector('#printTickets').style.display = "inline-block";
            document.querySelector("#Thx").innerHTML = "Спасибо за заказ, " + registration[0].value + "!";
            document.querySelector("#call").innerHTML = "Мы сделаем звонок по номеру <i>" + registration[2].value + "</i> в ближайшее время для уточнения информации.";
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
        document.querySelector("#warning").innerHTML = 'Не более 5 мест!'; 
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
function HallSize() {
    if (document.querySelector('select').options[0].selected) {
        hall = "Комфортный";
        height = 10;
        width = 15;
        document.querySelector('#tickets').style.width = "20em";
        document.querySelector('#tickets').style.padding = "5em 5em";
        document.querySelector('#tickets').style.height = "15em";
        
    }
    if (document.querySelector('select').options[1].selected) {
        hall = "Средний";
        height = 15;
        width = 23;
        document.querySelector('#tickets').style.width = "30em";
        document.querySelector('#tickets').style.padding = "5em 5em";
        document.querySelector('#tickets').style.height = "25em";
    }
    if (document.querySelector('select').options[2].selected) {
        hall = "Большой";
        height = 20;
        width = 30;
        document.querySelector('#tickets').style.width = "40em";
        document.querySelector('#tickets').style.padding = "5em 5em";
        document.querySelector('#tickets').style.height = "30em";
    }
}
function HallChoose() {
    HallSize();
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
        for1.value = "checkbox" + i;            //checkbox0, checkbox1, ...
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
let isValid = false;
function Registration() {
    for (let i=0; i<(registration.length-1); i++) {
        if (registration[i].value == '') {
            registration.getElementsByTagName("span")[i].style.visibility = "visible";
            isValid = false;
        }
        else {
            isValid = true;
        }
    }
    if (isValid == true) {
        document.querySelector("section1").style.display = "block";
    }
}




