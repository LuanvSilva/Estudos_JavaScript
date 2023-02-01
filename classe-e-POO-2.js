class Spaceship {
    static get DESACELARATION() {
        return 0.17
    }
    constructor(name,maxQuantity){
        this.name = name
        this.maxQuantity = maxQuantity
        this.currentVelocity = 0

    }
    speedUp(acceleration){
        this.currentVelocity += acceleration * (1 - Spaceship.DESACELARATION)
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name,crewQuantity,sitsQuantity){
        this.sitsQuantity = sitsQuantity
    }
}

class app{
    constructor(){
        this.Spaceship = null
    }
    enrollSpaceship() {
        let spaceshipName = prompt("Qual o nome da nave ?")
        let crewQuantity = prompt("Qual a quantidade de tripulantes?")
        let spaceshipKind = this.askForSpaceshipKind()
        if(spaceshipKind =='1'){
            let weaponsQuantity = prompt("Quantas armas a nave possui")
            this.spaceship = new BattleSpaceship(spaceshipName,crewQuantity,weaponsQuantity)
        } else{
            let sitsQuantity = prompt('Quantos lugares a nave possui')
            this.spaceship = new TransportSpaceship(spaceshipName,crewQuantity,sitsQuantity)
        }
    }
    askForSpaceshipKind() {
        let chosenOption 
        while('1','2'.includes(chosenOption)){
            chosenOption = prompt('Qual o tipo da nave \1 - Batalha \n2- Transporte')
        }
        return chosenOption
    }

}  