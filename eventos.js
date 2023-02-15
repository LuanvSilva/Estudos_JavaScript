let komodoShip = {
    name:'Komodo',
    velocity: 80 ,
    acceleration: 2
}
const velocityAfter = (velocity,acceleration) =>{
   return new Promise(function(resolve,reject) {
        setTimeout(() => {
            if(acceleration > 0 ){
                velocity += acceleration * 2
                console.log('Nova velocidade ' + velocity + ' km/h ')
                resolve(velocity)
            }else{
                console.log('Aceleração Invalida ')
                reject('Nao pssui aceleração ')
            }
        },1000)
    })
}
velocityAfter(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log('Depois de acelerar:\n' + komodoShip)
})
console.log('Execução de Promisses')