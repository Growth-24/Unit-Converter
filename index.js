
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const litersEl = document.getElementById("liters-el")
const kilosEl = document.getElementById("kilos-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


convertBtn.addEventListener("click", function() {
    const baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet.toFixed(3)} feet` 
    litersEl.textContent = `${baseValue} liters = ${baseValue * literToGallon.toFixed(3)} gallons` 
    kilosEl.textContent = `${baseValue} kilos = ${baseValue * kiloToPound.toFixed(3)} pounds` 
})
