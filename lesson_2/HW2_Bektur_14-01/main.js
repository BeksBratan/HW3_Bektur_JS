// // HomeWork in class
// const robot = [
//     {
//         username : "Beks",
//         power : 50,
//         speed : 60,
//     },
//     {
//         username : "Adam",
//         power : 100,
//         speed : 80,
//     },
//     {
//         username : "Atay",
//         power : 150,
//         speed : 100,
//     },
// ]
//
// const filtertheBest = robot.filter(theBest => theBest.speed > 60)
// console.log(filtertheBest)




// 1) Задача "Треугольник в цикле": Напишите цикл,
// который за 7 вызовов console.log выводит такой треугольник:
// *
// **
// ***
// **** и так далее

let line = '*'
while(line.length < 7){
    console.log(line);
    line = line + '*'
}


// 2) Задача "FizzBuzz": напишите программу,
// которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел,
// которые делятся и на 3, и на 5.


const allNumber = []

for(let n = 1; n < 100; n++){
    if(n % 3 === 0 && n % 5 === 0 ){
       allNumber.push('FizzBuzz');
    }else if(n % 3 === 0 ){
        allNumber.push("Fizz");
    }else if(n % 5 === 0 ){
        allNumber.push("Buzz");
    }else{
        allNumber.push(n);
    }
}
console.log(allNumber)














