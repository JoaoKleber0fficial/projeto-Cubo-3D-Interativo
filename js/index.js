document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        toggleButton.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
    });

    document.addEventListener('mousemove', (event) => {
        const cube = document.querySelector('.cube');
        const xAxis = (window.innerWidth / 2 - event.pageX) / 10;
        const yAxis = (window.innerHeight / 2 - event.pageY) / 10;
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    document.addEventListener('touchmove', (event) => {
        const cube = document.querySelector('.cube');
        const touch = event.touches[0];
        const xAxis = (window.innerWidth / 2 - touch.pageX) / 10;
        const yAxis = (window.innerHeight / 2 - touch.pageY) / 10;
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});
