class spaceship {
constructor(name,crewQuantity){
    this.name = name
    this.crewQuantity = crewQuantity
    this.isHitched = false
    this.entraceDoorsOpen = false
}
hitch(){
    this.isHitched = true
    this.entraceDoorsOpen = true
}
}
function showmenu(){
    let choseOption 
    while (choseOption != '1' && choseOption != '2' && choseOption != '3'  ) {
        choseOption = prompt('Oque deseja fazer?\n' +
                              '1- Engatar nave \n'+
                              '2- Imprimir naves\n'+
                              '3- Sair do programa')
    }
    return choseOption
}

function createSpaceship(){
    let spaceshipName = prompt('Informe o nome da nave ')
    let crewQuantity = prompt('Informe a qauntidade de tripulantes')
    let spaceship = new spaceship(spaceshipName,crewQuantity)
    return spaceship
}

function printSpaceshipsList(spaceship){
    let spaceshipsList = ''
    spaceship.forEach((spaceship,index) => {
        printSpaceshipsList += (index +1) + ' - '+ spaceship.name +
        ' ( ' + spaceship.crewQuantity + 'Tripulantes\n'

        
    });
    alert(printSpaceshipsList)
}

let hitchedSpacechips = []
let choseOption

while(choseOption != '3'){
    choseOption = showmenu()
    switch(choseOption){
        case '1':
            let spaceshipToadd = createSpaceship()
            spaceshipToadd.hitch()
            hitchedSpacechips.push(spaceshipToadd)
            break
        case '2':
            printSpaceshipsList(hitchedSpacechips)
            break
    }
}