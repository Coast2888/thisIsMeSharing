function animateText(headlineId, text) {
    const headline = document.getElementById(headlineId);
    headline.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement('span');
        letter.innerText = text[i];
        letter.className = 'letter';
        letter.style.animationDelay = `${i * 0.1}s`;
        headline.appendChild(letter);
    }
}

animateText('headline1', "Coast's");
animateText('headline2', "Domain");

function showReference(section) {
    document.getElementById('ref-' + section).style.display = 'block';
}

function hideReference(section) {
    document.getElementById('ref-' + section).style.display = 'none';
}

function toggleDiv(divId) {
    const div = document.getElementById(divId);
    div.classList.toggle('visible');
}

function slideInPanel() {
    const panel = document.getElementById('panel');
    panel.classList.remove('hidden');
    setTimeout(() => {
        panel.style.left = '50%';
        panel.style.transform = 'translate(-50%, -50%)';
    }, 10);
}

function closePanel() {
    const panel = document.getElementById('panel');
    panel.style.left = '-100%';
    setTimeout(() => {
        panel.classList.add('hidden');
    }, 10);
}

document.querySelectorAll('.collapse-trigger').forEach(trigger => {
    trigger.addEventListener('click', function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    testimonials[currentTestimonial].style.display = 'block';
}

setInterval(showNextTestimonial, 5000);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const answers = [
    "Yes, definitely!",
    "No, absolutely not!",
    "Ask again later.",
    "Cannot predict now.",
    "It is certain.",
    "Don't count on it.",
    "Yes, in due time.",
    "My sources say no.",
    "You may rely on it.",
    "Very doubtful."
];

function getAnswer() {
    const question = document.getElementById('question').value;
    if (question.trim() === "") {
        document.getElementById('answer').textContent = "Please ask a question.";
    } else {
        const randomIndex = Math.floor(Math.random() * answers.length);
        document.getElementById('answer').textContent = answers[randomIndex];
    }
}