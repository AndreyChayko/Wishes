document.addEventListener('touchmove', (event) => {
    const body = document.querySelector('body');
    const heart = document.createElement('span');
    const rect = event.target.getBoundingClientRect();
    const x = event.targetTouches[0].clientX - rect.x;
    const y = event.targetTouches[0].clientY - rect.y;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    const size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    const transformValue = Math.random() * 360;
    heart.style.transform = `rotate(${transformValue}deg )`;

    body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000)
})