const messages = [
    "2024 is coming to an end!",
    "I’ve been through so much this year with you by my side- some places we’ve explored together and every single one of them brought me joy because I was with you hehe. ",
    "Our wish to watch EXO is checked off the list too, even it was only Chanyeol (then i wish next year ep6 is real for us and im still by ur side)",
    "I've never opened up to anyone, but with you i would to just talking n talking anything random I want.",
    "So thankyou for always being there for me, thankyou for being css to my html.",
    "I hope we have a good news for our wishlist in the next year, I hope you can share more of your struggles with me to ease your heart, I hope this universe give you the best things u deserve, I hope you always happy for everything you do, also I hope there's still plenty of time for me to share and do anything with you-for you, no matter what they may be.",
    // "Happy new year Sa, my favorite personal person ever!"
];

let index = 0;
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextButton');
const resetButton = document.getElementById('resetButton');
const fireworksContainer = document.getElementById('fireworks');

nextButton.addEventListener('click', () => {
    index++;

    if (index < messages.length) {
        messageElement.textContent = messages[index];
    } else {
        startFireworks();
        messageElement.textContent = 'Happy new year Sa, my favorite personal person ever!';
        // messageElement.textContent = "Happy New Year 2024!";
        nextButton.style.display = 'none';
        resetButton.style.display = 'inline-block';
    }
});

resetButton.addEventListener('click', () => {
    index = 0;
    messageElement.textContent = messages[index];
    nextButton.style.display = 'inline-block';
    resetButton.style.display = 'none';
    fireworksContainer.innerHTML = ''; // Clear fireworks
});

function startFireworks() {
    setInterval(() => {
        for (let i = 0; i < 30; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            firework.style.backgroundColor = getRandomColor();
            fireworksContainer.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1000);
        }
    }, 500);
}

function getRandomColor() {
    const colors = ['#ff4d6d', '#ffd700', '#1e90ff', '#32cd32'];
    return colors[Math.floor(Math.random() * colors.length)];
}