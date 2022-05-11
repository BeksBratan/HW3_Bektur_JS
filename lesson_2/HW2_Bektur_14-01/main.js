const robot = [
    {
        username : "Beks",
        power : 50,
        speed : 60,
    },
    {
        username : "Adam",
        power : 100,
        speed : 80,
    },
    {
        username : "Atay",
        power : 150,
        speed : 100,
    },
]

const filtertheBest = robot.filter(theBest => theBest.speed > 60)
console.log(filtertheBest)

// for(let theBest of robot){
//     if(theBest.power > 50) {
//         console.log(theBest)
//     } else if(theBest.speed > 60){
//         console.log(theBest)
//     }
// }