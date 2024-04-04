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