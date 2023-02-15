class Spaceship {
    constructor(name,maxCapacity,currentCharge){
        this.name = name
        this.maxCapacity = maxCapacity
        this.currentCharge = currentCharge
    }
    currentPercentCharge(){
        return this.currentCharge * 100 / this.maxCapacity
    }
  turnOn(){
        this.checkCurrentload().then(currentCharge => {
           console.log(`(${this.name}) Partida autorizada em ${currentCharge} `)
        }).catch(currentCharge =>{
            console.log(`(${this.name}) Partida não autorizada carga em apenas ${currentCharge} %`)
        })
    }
   
checkCurrentload(){
    return new Promise((resolve,reject) => {
        let currentCharge = this.Spaceship.currentPercentCharge()
        if(currentCharge >= 30) {
            resolve(currentCharge)
        }else{
            reject(currentCharge)
        }
    })
} 
}
  
const sophia = new Spaceship('Sophia',10,5)
const amsterda = new Spaceship('Amsterdã', 14, 10)
const dwarfStart = new Spaceship('Estrela-Anã', 20, 4)



sophia.turnOn()
amsterda.turnOn()
dwarfStart.turnOn()
