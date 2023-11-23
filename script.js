const inputbox = document.getElementById('inputbox')
const taskContainer = document.querySelector('.taskContainer')
const UL = document.querySelector('#items');
const form = document.querySelector('form')
const icon = document.querySelectorAll('ul li span i')
const li = document.querySelector('ul li')


form.addEventListener("submit", (event) => {
    event.preventDefault()
})
function addTask() {
    if(inputbox.value === ""){
        alert("Your must write task name!")

    }else{
    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    let label = document.createElement('label')
    label.innerText = inputbox.value;
    let span = document.createElement('span')
    span.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    li.appendChild(checkbox);
    li.appendChild(label)
    li.appendChild(span)

    UL.appendChild(li)
    
    }
    inputbox.value = ""
    saveData();
}




UL.addEventListener('click', function(event) {

    if(event.target.tagName === "INPUT") {
        if(event.target.nextElementSibling.classList.contains('lh')){
        event.target.nextElementSibling.classList.remove('lh')
        event.target.checked = false;
        }else{
            event.target.nextElementSibling.classList.add('lh')
            event.target.checked = true;
        }

    }else if(event.target.tagName === "I") {
        let span = event.target.parentNode
        let li = span.parentNode

        li.remove()
    }
    saveData();
    
},false)


function saveData() {
    localStorage.setItem('data', UL.innerHTML)
}

function showData() {

    UL.innerHTML = localStorage.getItem('data')
    
}

showData()

