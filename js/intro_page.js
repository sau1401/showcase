const starContainer = document.getElementById('stars');
const images = document.querySelectorAll('.floating-image');
const galaxyContainer = document.getElementById('galaxies');
const quoteDisplay = document.getElementById('quote-display');
const planetContainer = document.querySelector('.celestial-bodies');


const quotes = [
    "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty. - Winston Churchill",
    "If anything can go wrong, it will. - Murphy's Law",
    "Hope for the best, prepare for the worst. - Unknown",
    "Don't get your hopes up. - Unknown",
    "It's always darkest before the dawn, but that doesn't mean dawn is coming. - Unknown",
    "The only thing certain in life is death and taxes. - Benjamin Franklin",
    "The glass is always half empty. - Unknown", 
    "What could possibly go right? - Unknown", 
    "You can't win them all. - Unknown",
    "The future is bleak. - Unknown",
    "A good plan violently executed now is better than a perfect plan executed next week. - George S. Patton",
    "Never take counsel of your fears. - Stonewall Jackson",
    "It's not that I can't be fooled, but I'm not fooled often. - Jack Keane",
    "If your actions inspire others to dream more, do more and become more, you are a leader. – John Quincy Adams",
    "Do one thing every day that scares you. ― Eleanor Roosevelt",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett, The Light in the Heart",
    "The unexamined life is not worth living. ― Socrates",
    "You have power over your mind - not outside events. Realize this, and you will find strength. ―Marcus Aurelius"
];

//random color gradients that were generated
function getRandomColor() {
    const colors = [
    ['#90caf9', '#0d47a1'], 
    ['#43a047', '#004d40'], 
    ['#9c27b0', '#4a148c'], 
    ['#ffeb3b', '#f57f17'], 
    ['#f4511e', '#bf360c'], 
    ['#d32f2f', '#b71c1c'], 
    ['#29b6f6', '#01579b'], 
    ['#8e24aa', '#4a148c'],
    ['#ff9800', '#e65100'], 
    ['#76ff03', '#33691e'], 
    ['#1e88e5', '#0d47a1'], 
    ['#ec407a', '#880e4f'], 
    ['#795548', '#3e2723'], 
    ['#8bc34a', '#1b5e20'], 
    ['#fdd835', '#f57f17'],
    ['#673ab7', '#311b92'], 
    ['#03a9f4', '#01579b'], 
    ['#ff5722', '#bf360c'], 
    ['#cddc39', '#827717'], 
    ['#607d8b', '#263238'], 
    ['#e91e63', '#880e4f'], 
    ['#4caf50', '#1b5e20'], 
    ['#ff1744', '#b71c1c'], 
    ['#00bcd4', '#006064'], 
    ['#ffd600', '#ff6f00'], 
    ['#3f51b5', '#1a237e'], 
    ['#aa00ff', '#4a148c'], 
    ['#64ffda', '#004d40'], 
    ['#c2185b', '#880e4f'], 
    ['#ffa726', '#e65100'], 
    ['#b0bec5', '#37474f'],
    ['#ffcc80', '#ff6d00'], 
    ['#ff8a80', '#d50000'], 
    ['#ff80ab', '#c51162'], 
    ['#ea80fc', '#aa00ff'], 
    ['#b39ddb', '#311b92'], 
    ['#82b1ff', '#0d47a1'], 
    ['#80d8ff', '#0091ea'], 
    ['#a7ffeb', '#004d40'], 
    ['#ccff90', '#33691e'], 
    ['#f4ff81', '#f57f17'], 
    ['#ffb74d', '#e65100'], 
    ['#ff5252', '#b71c1c'], 
    ['#ff4081', '#880e4f'], 
    ['#e040fb', '#6a1b9a'], 
    ['#7c4dff', '#311b92'], 
    ['#536dfe', '#1a237e'], 
    ['#448aff', '#0d47a1'], 
    ['#18ffff', '#006064'], 
    ['#69f0ae', '#1b5e20'], 
    ['#dce775', '#827717']
];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function wrapFloatingImages() {
    images.forEach((image) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('planet');

        //randomize the color based on the color list above
        const [startColor, endColor] = getRandomColor();
        wrapper.style.background = `radial-gradient(circle, ${startColor}, ${endColor})`;

        //set the size and position of the planet wrapper
        wrapper.style.width = '120px'; //larger than the image
        wrapper.style.height = '120px';
        wrapper.style.borderRadius = '50%';
        wrapper.style.position = 'absolute';
        wrapper.style.animation = `floatPlanet ${Math.random() * 10 + 10}s infinite alternate ease-in-out`; //use a random number for the floating animation

        //randomize position based on the window's size
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 120);
        wrapper.style.left = `${x}px`;
        wrapper.style.top = `${y}px`;

        // replace the image's parent w/ the wrapper, and put the image inside of the wrapper
        image.parentNode.replaceChild(wrapper, image);
        wrapper.appendChild(image);

        //now, center the image
        image.style.position = 'absolute';
        image.style.top = '50%';
        image.style.left = '50%';
        image.style.transform = 'translate(-50%, -50%)';
    });
}

//generate random stars
function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        //random position based on the size of the current window
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 1; //between 1 and 4px
        const delay = Math.random() * 5; //set the animation delay here

        //apply the dimensions here
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${delay}s`;

        starContainer.appendChild(star);
    }
}

//creates a random galaxy
function createGalaxy() {
    const galaxy = document.createElement('div');
    galaxy.classList.add('galaxy');

    //set size and position w/ other elements
    galaxy.style.width = '1200px'; 
    galaxy.style.height = '1200px';
    galaxy.style.position = 'relative';
    galaxy.style.left = '50%'; //center it
    galaxy.style.top = '50%';
    galaxy.style.transform = 'translate(-50%, -50%)'; 
    galaxy.style.backgroundImage = "url('images/galaxy.png')"; 
    galaxy.style.backgroundSize = 'contain'; 
    galaxy.style.backgroundRepeat = 'no-repeat';
    galaxy.style.backgroundPosition = 'center';
    galaxy.style.opacity = '0.6';
    galaxy.style.zIndex = '1'; 

    //add an animation
    galaxy.style.animation = 'floatLargeGalaxy 20s infinite alternate ease-in-out, shineEffect 3s infinite alternate ease-in-out';

    //then add the galaxy to the container
    galaxyContainer.appendChild(galaxy);
}

//fisplay a random quote with this; generate a random index based on the length of the quotes constant list above
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

function createPlanets(count) {
    for (let i = 0; i < count; i++) {
        const planet = document.createElement('div');
        planet.classList.add('planet');

        //randomize the color
        const [startColor, endColor] = getRandomColor();
        planet.style.background = `radial-gradient(circle, ${startColor}, ${endColor})`;

        //randomize the size and position
        const size = Math.random() * 80 + 50; //between 50px and 130px
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        const x = Math.random() * (window.innerWidth - size);
        const y = Math.random() * (window.innerHeight - size);
        planet.style.left = `${x}px`;
        planet.style.top = `${y}px`;

        //randomize the animation speed 
        const animationDuration = Math.random() * 10 + 10; //10 seconds to 20 seconds
        planet.style.animationDuration = `${animationDuration}s`;

        planetContainer.appendChild(planet);
    }
}


//add a clicker listener for the quote
quoteDisplay.addEventListener('click', displayRandomQuote); 

createStars(150);
createGalaxy();
createPlanets(9);
wrapFloatingImages(); //enclose floating images in planets
displayRandomQuote();