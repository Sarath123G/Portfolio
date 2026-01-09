// Text Typing Animation
const textElement = document.getElementById('typing-text');
const texts = ["Specializing in Data Analytics", "Data Visualization", "Machine Learning"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    // Check if element exists to avoid errors if ID is missing
    if(textElement) {
        textElement.textContent = letter;
    }

    if (letter.length === currentText.length) {
        setTimeout(() => {
            // Delete effect could be added here, or just switch
            // For simplicity, we'll just wait and then start next word
            // But a backspace effect looks cooler. Let's do a simple clear and next for now to keep it clean, 
            // or better, implement backspacing.
            setTimeout(erase, 2000); 
        }, 100);
    } else {
        setTimeout(type, 100);
    }
}

function erase() {
    if (index > 0) {
        letter = currentText.slice(0, --index);
        if(textElement) textElement.textContent = letter;
        setTimeout(erase, 50);
    } else {
        count++;
        setTimeout(type, 500);
    }
}

// Start typing on load
document.addEventListener('DOMContentLoaded', type);


// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            // Optional: remove class to re-animate on scroll up
            // reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollReveal);
// Trigger once on load
scrollReveal();


// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
