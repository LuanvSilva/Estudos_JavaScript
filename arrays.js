const hitchedSpaceships = [["Fenix",8,true],['Golias',10,true],["Helmet",5,false],['Elemental',3,true],['Darwin',15,false]] 

let filtro = hitchedSpaceships.filter((element) =>{
   return element[1] > 9
    
} ).map(element =>{
    return element[0]
})

let hitplataform = hitchedSpaceships.findIndex(element => {
    return element[2] == false
})

let highlightesSpaceships = hitchedSpaceships.map(element => {
    return element[0].toUpperCase()
})

let message = 'Espaçonaves com mais de 9 tripulantes '+ filtro.join(', ')
message += '\nPlataforma com processo de engate '+ (hitplataform +1)
message += '\nEspaçonaves destacadas '+ highlightesSpaceships.join(', ')

alert(message )
