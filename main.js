const hourInputElemetn = document.querySelector('.hour-input')
const minutInputElemetn = document.querySelector('.minut-input')
const secunInputdElemetn = 59
const btnElement = document.querySelector('.btn')
let inputValue = []

// const contentTextElement = document.querySelector('.content-text')
const hourElemetn = document.querySelector('.hour')
const minutElemetn = document.querySelector('.minut')
const secundElemetn = document.querySelector('.secund')

btnElement.addEventListener('click', event => {
    btnElement.disabled = true
    let sucund = secunInputdElemetn
    let hour = hourInputElemetn.value
    let minut = minutInputElemetn.value
    secundElemetn.textContent = 59
    setInterval(function timer () {
        minutElemetn.textContent = minut
        hourElemetn.textContent = hour
        if(sucund == 0){
            secundElemetn.textContent = sucund--
            sucund = 59
            minut--
            minutElemetn.textContent = minut
            if(minut == -1){
                hour--
                minut = 59
                hourElemetn.textContent = hour
                if(hour == -1){
                    alert('Tugadi')
                    
                    hourElemetn.textContent = 00
                    minutElemetn.textContent = 00
                    secundElemetn.textContent = 00
                    hour = 0
                    minut = 0
                    window.location.href = 'index.html'
                }
        }}
        else{
            secundElemetn.textContent = sucund--
        }
    }, 1000);
    
})


const timeButtonElement = document.querySelector('#time')
const modalElement = document.querySelector('.timer-modal')
const closeBtnElement = document.querySelector('.close')
timeButtonElement.addEventListener('click', event => {
    modalElement.style.display = 'block'
})
closeBtnElement.addEventListener('click', event => {
    modalElement.style.display = 'none' 
    console.log('test');
})
const timeSaveBtn = document.querySelector('.time-save')
timeSaveBtn.addEventListener('click', event => {
    modalElement.style.display = 'none' 
    hourElemetn.textContent = hourInputElemetn.value
    minutElemetn.textContent = minutInputElemetn.value
    secundElemetn.textContent = 59
})
function myStopFunction() {
    clearInterval(timer());
  }