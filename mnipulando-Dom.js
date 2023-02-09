function saveHouse() {
    let area = document.querySelector('input[name="area"]').value
    let number = document.querySelector('input[name="number"]').value
    let bairro = document.querySelector('input[name="bairro"]').value
    let city = document.querySelector('input[name="city"]').value

    let newListValue = document.createElement('table')
    newListValue.innerText = area + 'm , numero ' + number + ' ( ' + bairro + ' - ' + city + ' ) '

    let removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.innerText = 'Remover'
    removeButton.setAttribute('onclick', 'removeHouse(this)')
    newListValue.appendChild(removeButton)
    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button){
    let trToremove = button.parentNode
    document.getElementById('house-list').removeChild(trToremove)
}