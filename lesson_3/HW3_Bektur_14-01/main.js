// // Задание 1:
// // Сделать функцию котороя принимает 2 number аргумента
// // И вычисляет какой из них меньше
//
// function number(nums1, nums2) {
//     console.log(nums1, nums2)
//     if (nums1.length > nums2.length){
//         alert("nums1 > nums2")
//     }else if (nums1.length < nums2.length){
//         alert("nums1 < nums2")
//     }else{
//         alert("nums1 = nums2")
//     }
// }
//
// const nums1 = [1, 5, 6, 3 ,7]
// const nums2 = [1, 1, 6,]
// number(nums1, nums2)
//
// // Задание 2:
// // Написать функцию countChar
// // Которая может считать длину переданной как аргумент
//
// const arr = [1, 3, 6, 16, 4]
// function arrayLength(arr) {
//     console.log(arr.length)
// }
// arrayLength(arr)

// Задания на дом:
// 1. Обвернуть в функцию следующее задание -  Задача "FizzBuzz":
// напишите программу, которая выводит через console.log все числа от 1 до 100,
// с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел,
// которые делятся и на 3, и на 5.
// 2. читать смотреть в инете про функции и закрепить тему

function task(FizzBuzz, Fizz, Buzz) {
    console.log(FizzBuzz, Fizz, Buzz)
    for (let n = 1 ; n < 100; n++){
        if (n % 3 === 0 && n % 5 === 0){
            console.log(n + '-FizzBuzz')
        }else if (n % 5 === 0){
            console.log(n + '-Buzz')
        }else if (n % 3 === 0){
            console.log(n + '-Fizz')
        }else{
            console.log(n)
        }
    }
}
task()




