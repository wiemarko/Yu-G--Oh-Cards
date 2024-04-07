       // Flip butonu kodları
document.getElementById('flip').addEventListener('click', function() {
    const images = document.querySelectorAll('#images');
    images.forEach(image => {
        if (image.classList.contains('on-taraf')) {
            image.style.transform = 'rotateY(180deg)';
            image.classList.remove('on-taraf');
            image.classList.add('arka-taraf');
        } else {
            image.style.transform = 'rotateY(0deg)';
            image.classList.remove('arka-taraf');
            image.classList.add('on-taraf');
        }
    });
});
