let spaceship = {
    velocity: 0,
    speedUp: function(aceleration){
        this.velocity += aceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt('Informe o nome da nave ')
    spaceship.type = prompt('informe o tipo da nave ')
    spaceship.maxVelocity = Number(prompt('Informe a velocidade maxima da nave (km/s)'))
}

function acelerate(){
    let aceleration = Number(prompt('Quanto voce quer acelerar? (km/s)'))
    spaceship.speedUp(aceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
        alert('VELOCIDADE MAXIMA ULTRAPASSADA' + 
        '\nVelocidade da nave: ' + spaceship.velocity + 
        '\nVelocidade maxima da Nave : ' + spaceship.maxVelocity + 'km/s' 
        )

        
    }
}
function stop(){
    alert('Nome : ' + spaceship.name + '\ntipo ' + spaceship.type + '\nVelocidade da nave : ' +
    spaceship.velocity + '\nMaxima velocidade: ' + spaceship.maxVelocity)
    spaceship.velocity = 0
}
function showMenu(){
    let chosenOption   
    do {
        chosenOption = prompt('Voce deseja: \n1 Acelerar\n2 Parar')
        switch(chosenOption){
            case '1':
            acelerate()
            break
            case '2':
                stop()
                break
            default:
                alert('opcao invalida')
        }
        
    } while (chosenOption != '2')
}
registerSpaceship()
showMenu()