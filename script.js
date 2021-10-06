// getting button from doc
let newDieBtn = document.getElementById('new-die-btn');
let rollDieBtn = document.getElementById('roll-die-btn');

// creating container
let container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

// setting class for creation of new die
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.style.height = '100px'
        this.div.style.width = '100px'
        this.div.style.backgroundColor = 'rgb(102, 202, 186)';
        container.appendChild(this.div)

        // setting random number generator from 1-6
        function getRandomNumber(min, max) {
            min = Math.ceil(1);
            max = Math.floor(7);
            return Math.floor(Math.random() * (7 - 1) + 1)
        }

        // assigning random numbers to div ids
        let randomNumber = getRandomNumber()
        this.div.id = randomNumber;
        this.div.textContent = randomNumber;

        // setting numbers to their dice unicode values
        if (randomNumber === 1) {
            this.div.textContent = '\u2680'
        } else if (randomNumber === 2) {
            this.div.textContent = '\u2681'
        } else if (randomNumber === 3) {
            this.div.textContent = '\u2682'
        } else if (randomNumber === 4) {
            this.div.textContent = '\u2683'
        } else if (randomNumber === 5) {
            this.div.textContent = '\u2684'
        } else if (randomNumber === 6) {
            this.div.textContent = '\u2685'
        }

        // setting Roll Die button to roll all dice when clicked
        rollDieBtn.addEventListener('click', () => this.roll())

        this.div.addEventListener('click', () => this.roll())
    }

    // creating rolling method that will update the numbers on the dice
    roll() {
        function getRandomNumber(min, max) {
            min = Math.ceil(1);
            max = Math.floor(7);
            return Math.floor(Math.random() * (7 - 1) + 1)
        }
        let randomNumber = getRandomNumber()
        this.div.id = randomNumber;
        this.div.textContent = randomNumber;

        if (randomNumber === 1) {
            this.div.textContent = '\u2680'
        } else if (randomNumber === 2) {
            this.div.textContent = '\u2681'
        } else if (randomNumber === 3) {
            this.div.textContent = '\u2682'
        } else if (randomNumber === 4) {
            this.div.textContent = '\u2683'
        } else if (randomNumber === 5) {
            this.div.textContent = '\u2684'
        } else if (randomNumber === 6) {
            this.div.textContent = '\u2685'
        }
    }
}

// new die every time button is clicked
newDieBtn.addEventListener('click', () => {
    new Die();
})

