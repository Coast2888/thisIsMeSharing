function animateText(headlineId, text) {
    const headline = document.getElementById(headlineId);
    headline.innerHTML = ''; // Clear any existing content

    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement('span');
        letter.innerText = text[i];
        letter.className = 'letter';
        letter.style.animationDelay = `${i * 0.1}s`;
        headline.appendChild(letter);
    }
}

animateText('headline1', "Coast's Domain");
animateText('headline2', "Where Dreams Come To Die");

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
    }, 500);
}

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

document.addEventListener("DOMContentLoaded", () => {
    const barrel = document.getElementById('barrel');
    const images = [
        'images/PlanetVin.png',
        'images/alienWide.png',
        'images/alienMid.png',
        'images/alienCloseup.png',
    ];
    let currentIndex = 0;

    function updateFaces(index) {
        for (let i = 0; i < 4; i++) {
            document.getElementById(`face${i + 1}`).style.backgroundImage = `url(${images[(index + i) % images.length]})`;
        }
    }
});