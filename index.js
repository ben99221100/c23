let container = document.getElementById("container")
let word = "מחשב"

function guess() {
    let inputElement = document.getElementById("inputId")

    let firstLetter = inputElement.value.charAt(0)
    let secondLetter =  inputElement.value.charAt(1)
    let thirdLetter =  inputElement.value.charAt(2)
    let fourthLetter =  inputElement.value.charAt(3)

    container.innerHTML += `

        <div class="row">
            <div style="background-color: ${getColor(firstLetter, 0)}" class="letter">${firstLetter}</div>
            <div style="background-color: ${getColor(secondLetter, 1)}" class="letter">${secondLetter}</div>
            <div style="background-color: ${getColor(thirdLetter, 2)}" class="letter">${thirdLetter}</div>
            <div style="background-color: ${getColor(fourthLetter, 3)}" class="letter">${fourthLetter}</div>
        </div>
    
    `
}

function getColor(letter, position) {

    if (word.charAt(position) == letter) {
        return "green"
    }
    if (word.includes(letter)) {
        return "yellow"
    }
    return "gray"

}


