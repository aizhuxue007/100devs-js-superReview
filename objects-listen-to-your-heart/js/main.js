//Create a stopwatch object that has four properties and three methods
class StopWatch {
    constructor(brand, color, model, shape) {
        this.brand = brand
        this.color = color
        this.model = model 
        this.shape = shape
    }

    reset() {
        console.log('reset')
    }

    start() {
        console.log('track time')
    }

    end() {
        console.log('stop clock')
    }
}

const sw = new StopWatch('toshiba', 'brown', 'sony', 'round')

console.log(sw.brand, sw.color, sw.end())