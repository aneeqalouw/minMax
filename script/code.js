let btn = document.querySelector('[data-btn]')
let minOutput = document.querySelector('[data-min]')
let maxOutput = document.querySelector('[data-max]')




function minMax(){
    let arrInput = document.querySelector('[data-arr]').value 
    let arr = arrInput.split(',')
    let arrInt = []
    for (let i=0; i< arr.length; i++){
        arrInt.push(parseInt(arr[i]))
    }
    let min = Math.min(...arrInt)
    let max = Math.max(...arrInt)
    minOutput.textContent = 'Min: ' + min
    maxOutput.textContent = 'Max: ' + max
}

btn.addEventListener('click', minMax)