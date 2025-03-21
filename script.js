//your JS code here. If required.
const container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        square.style.backgroundColor = randomColor;
    });

    square.addEventListener('mouseout', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#f0f0f0'; // Reset to default color
        }, 1000); // 1 second delay
    });
}