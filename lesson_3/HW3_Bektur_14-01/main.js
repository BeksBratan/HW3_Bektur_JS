// Задание 1:
// Сделать функцию котороя принимает 2 number аргумента
// И вычисляет какой из них меньше

function number(nums1, nums2) {
    console.log(nums1, nums2)
    if (nums1.length > nums2.length){
        alert("nums1 > nums2")
    }else if (nums1.length < nums2.length){
        alert("nums1 < nums2")
    }else{
        alert("nums1 = nums2")
    }
}

const nums1 = [1, 5, 6, 3 ,7]
const nums2 = [1, 1, 6,]
number(nums1, nums2)

// Задание 2:
// Написать функцию countChar
// Которая может считать длину переданной как аргумент

const arr = [1, 3, 6, 16, 4]
function arrayLength(arr) {
    console.log(arr.length)
}
arrayLength(arr)