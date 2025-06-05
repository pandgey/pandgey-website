// Set current time
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000);

// Matrix effect background
function createMatrixRain() {
    const matrix = document.getElementById('matrix');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.color = '#00ff00';
        drop.style.fontSize = '14px';
        drop.style.fontFamily = 'monospace';
        drop.style.left = Math.random() * window.innerWidth + 'px';
        drop.style.top = '-20px';
        drop.style.opacity = Math.random() * 0.5;
        drop.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        drop.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        matrix.appendChild(drop);
        
        setTimeout(() => {
            if (drop.parentNode) {
                drop.parentNode.removeChild(drop);
            }
        }, 10000);
    }
}

// Create matrix rain periodically
setInterval(createMatrixRain, 1000);
createMatrixRain();

// Add typing effect to some elements
function addTypingEffect() {
    const elements = document.querySelectorAll('.output');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'typing 0.5s steps(40, end)';
        }, index * 100);
    });
}

// Random glitch effect
function randomGlitch() {
    const elements = document.querySelectorAll('.ascii-art, .section-title');
    const randomEl = elements[Math.floor(Math.random() * elements.length)];
    randomEl.classList.add('glitch');
    setTimeout(() => {
        randomEl.classList.remove('glitch');
    }, 300);
}

setInterval(randomGlitch, 5000);

// Interactive link effects
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function() {
        const responses = [
            'Connection established...',
            'Handshake successful...',
            'Redirecting to secure channel...',
            'Access granted...'
        ];
        alert(responses[Math.floor(Math.random() * responses.length)]);
    });
});

// Countdown timer (just for fun)
let countdown = 999999;
setInterval(() => {
    document.getElementById('countdown').textContent = countdown--;
    if (countdown < 0) countdown = 999999;
}, 1000);

console.log(`
╔══════════════════════════════════════╗
║  Welcome to pandgey's terminal!      ║
║  Type 'help' for available commands  ║
╚══════════════════════════════════════╝
`);