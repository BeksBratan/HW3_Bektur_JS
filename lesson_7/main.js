// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(
//     10,
//     50,
//     "black"
// )
//
// const sharik = new Dog(
//     5,
//     25,
//     'pink'
// )
//


class Animal {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voiceText = voiceText;
    }
    
    voice(){
        console.log(this.voiceText)
    }
}

class bear extends Animal{
    constructor(type, gender, color, voiceText, height, weight) {
        super(type, gender, color, voiceText);
        this.weight = weight;
        this.height = height;
    }
    purpose(){
        console.log(`bear height : ${this.height}`)
    }
}

const Misha =  new bear(
    "wild",
    'male',
    'white',
    'AAAAA',
    2,
    500
)
Misha.purpose()

class Cat extends Animal{
    constructor(type, gender, color, voiceText, height, weight, earLength, speed) {
        super(type, gender, color, voiceText);
        this.height = height
        this.speed = speed
        this.earLength = earLength
        this.weight = weight
    }
}
const Tom = new Cat(
    'pet',
    'male',
    'white',
    'Myau',
    20,
    6,
    5,
    10
)

