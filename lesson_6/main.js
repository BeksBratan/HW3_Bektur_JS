const a = 'hello'
let b = 10

var c;
c = 'abc'


const  first_name = 'Jack'
const last_name = 'Ajanov'

// console.log(first_name + ' ' + last_name)
console.log(`first name : ${first_name}`)



const getFullName = (user) =>{
    return 'First Name : ' + user.first_name + '\n'
}

const user = {
    first_name : 'Beks',
    last_name : 'Bekmamam'
}

console.log(getFullName(user))

const mass = [1, 2, 4 ,5 ,6]
const mass2 = [...mass]
// for (let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
console.log(mass2)


const obj = {
    username: 'Beks',
    age: 15,
    last_name : "Bekmamatov"
}
const obj2 = [{...obj}]
console.log(obj2)



const props = {
    onSumbit : () =>{
        console.log("Sumbit")
    },
    data : [
        {
            key : "Value"
        },
        {
            key2 : "Value2"
        },
        {
            key3 : "Value3"
        }
    ]
}
const {data, onSumbit} = props
console.log(data)
onSumbit()

console.log(props.data[1].key2)
