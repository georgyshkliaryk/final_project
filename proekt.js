
let height=0, width=0, n=0;
let count = 0;

function DisabledPlaces() {
    let rand = getRandomInt(0, n);
    for (let i=0; i<rand; i++) {
        let place = getRandomInt(0, n);
        tickets[place].disabled = true;
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
/* function CheckMax() {
    count++;
    if (count == 15) { 
        for (let i=0; i<n; i++) {
            if (tickets[i].checked == false) {
                tickets[i].disabled = true;
            }
        }
    }
    if (count > 5) {
        alert('Выберите не более 5 мест!');
        if (tickets.checked == true) {
            tickets.checked = false;
        }
    }
}  */
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
        let input = document.createElement('input');
        let checkbox = document.createAttribute("type");
        checkbox.value = "checkbox";
        input.setAttributeNode(checkbox);
        document.querySelector('#tickets').append(input);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

