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
    "The future is bleak. - Unknown"
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
        ['#8e24aa', '#4a148c']  
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
    galaxy.style.width = '900px'; 
    galaxy.style.height = '900px';
    galaxy.style.position = 'relative';
    galaxy.style.left = '50%'; //center it
    galaxy.style.top = '50%';
    galaxy.style.transform = 'translate(-50%, -50%)'; 
    galaxy.style.backgroundImage = "url('images/galaxy.png')"; 
    galaxy.style.backgroundSize = 'contain'; 
    galaxy.style.backgroundRepeat = 'no-repeat';
    galaxy.style.backgroundPosition = 'center';
    galaxy.style.opacity = '0.4'; 
    galaxy.style.zIndex = '1'; 

    //add an animation
    galaxy.style.animation = 'floatLargeGalaxy 20s infinite alternate ease-in-out';

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
createPlanets(7);
wrapFloatingImages(); // Enclose floating images in planets
displayRandomQuote();