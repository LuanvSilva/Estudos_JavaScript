class Property{
    constructor(kind,area,rented){
        this.kind = kind
        this.area = area
        this.rented = rented
    }
}

class app {
    addPoperty(){
        event.preventDefault()
        let kind = document.querySelector('select[name="kind"]').value
        let area = document.querySelector('input[name="area"]').value
        let rented = document.querySelector('input[name="rented"]').checked 
        let property = new Property(kind,area,rented)
        this.addPopertyList(property)
        this.cleanForm()
        
    }
    addPopertyList(Property){
        let list = document.createElement('li')
        let promptinfo = 'Tipo: ' + Property.kind + ' area: ' + Property.area + 'm'
        if(Property.rented){
            let rentedMark = this.createRentedMark()
            list.appendChild(rentedMark)
        }
        list.innerHTML += promptinfo
        let buttonRemove = this.createButton()
        list.appendChild(buttonRemove)
        document.getElementById('Properties').appendChild(list)
    }
    createRentedMark(){
       let rentedMark = document.createElement('span')
       rentedMark.style.color = 'white'
       rentedMark.style.backgroundColor = 'red'
       rentedMark.innerText = 'ALUGADO  '
       return rentedMark

    }
    createButton(){
      let buttonRemove = document.createElement('button')
      buttonRemove.setAttribute("onclick", "app1.remove()")
      buttonRemove.innerText = 'Remover'
      return buttonRemove  
    }
cleanForm() {
document.querySelector("input[name='area']").value = ''
document.querySelector("input[name='rented']").checked = false

}
remove(){
    let liToremove = event.target.parentNode
    document.getElementById('Properties').removeChild(liToremove)
}
}




