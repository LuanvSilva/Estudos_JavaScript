class Spaceship {
    constructor(identificador){
        this.identificador = identificador
        this.shootLeft = 5
    }
    short(){
        if(this.shootLeft > 0){
        console.log('Bang!')
        this.shootLeft -= 1
        }else{
            throw new Error('Arma sem muniçao')
        }
    }
    reload(){
        this.shootLeft = 5
    }
}

let fenix = new Spaceship(10)
try{
fenix.short()
fenix.short()
fenix.short()
fenix.short()
fenix.short()
fenix.short()
} catch(e){
    console.log(e.message)
    fenix.reload()
}
console.log(fenix)