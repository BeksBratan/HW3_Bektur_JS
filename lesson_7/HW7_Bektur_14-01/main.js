class Building {
    constructor(door, floor, window) {
        this.door = door
        this.floor = floor
        this.window = window
    }
}

class House extends Building{
    constructor(door, floor, window, furniture,
                TV, bathroom, room, refrigerator,
                balcony, toshok, computer, swimmingPool, luster ) {
        super(door, floor, window);
        this.furniture = furniture
        this.TV = TV
        this.bathroom = bathroom
        this.room = room
        this.refrigerator = refrigerator
        this.balcony = balcony
        this.toshok = toshok
        this.computer = computer
        this.swimmingPool = swimmingPool
        this.luster = luster
    }
}
const BeksHouse = new House(
    8,
    3,
    10,
    5,
    4,
    3,
    8,
    2,
    2,
    100,
    3,
    1,
    8
)
console.log(BeksHouse)

class School extends Building{
    constructor(door, floor, window, TV, bathroom, room, computer,
                teacher, kitchen, guard, library, field, auditorium,
                projector, blackboard, hall) {
        super(door, floor, window,);
        this.TV = TV
        this.bathroom = bathroom
        this.room = room
        this.computer = computer
        this.teacher = teacher
        this.kitchen = kitchen
        this.guard = guard
        this.library = library
        this.field = field
        this.auditorium = auditorium
        this.projector = projector
        this.blackboard = blackboard
        this.hall = hall
    }
}

const BeksSchool = new School(
    40,
    3,
    80,
    2,
    3,
    40,
    40,
    40,
    1,
    3,
    1,
    2,
    1,
    40,
    40,
    1

)
console.log(BeksSchool)