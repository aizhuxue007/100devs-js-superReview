//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class StreetFighter {
    constructor(name, style, color, height) {
        this.name = name
        this.style = style
        this.color = color
        this.height = height
    }

    punch() {
        console.log('punch')
    }

    yell() {
        console.log('yell')
    }

    kick() {
        console.log('kick')
    }
}

const sf = new StreetFighter('Tim', 'Drunken', 'Black', 5)

sf.punch()
sf.yell()
sf.kick()