const maxHearts = 100;
let currentHeartsNumber = 0;
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
    heart.style.transform = `rotate(${transformValue}deg)`;

    if (currentHeartsNumber <= maxHearts) {
        body.appendChild(heart);
        currentHeartsNumber++;
        setTimeout(() => {
            heart.remove();
            if (currentHeartsNumber !== 0) {
                currentHeartsNumber--;
            }
        }, 1000);
    }
});

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const cardLink = document.querySelector('.card');
        const header = document.querySelector('.header');
        const message = document.querySelector('.message');
        cardLink.addEventListener('click', () => {
            cardLink.classList.toggle('active');
            header.classList.toggle('hide');
            message.classList.toggle('show');
        });
    }
}
