document.addEventListener("DOMContentLoaded", function() {
    const resimler = document.querySelectorAll(".on-taraf");

    resimler.forEach(function(card) {
        resim.addEventListener("click", function() {
            // Tüm resimlerden aktif sınıfı kaldır
            resimler.forEach(function(card) {
                resim.classList.remove("active");
            });

            // Tıklanan resme aktif sınıfı ekle
            this.classList.add("active");
        });
    });
});



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
