document.addEventListener("DOMContentLoaded", function () {
    const keyInput = document.getElementById("key-input");
    const storedKey = localStorage.getItem("savedKey"); // Daha önce kaydedilmiş key var mı?

    if (storedKey) {
        validateKey(storedKey, true); // Önceden kaydedilen key'i doğrula
    }

    function login() {
        let key = keyInput.value.trim();
        if (!key) {
            alert("Lütfen bir key girin.");
            return;
        }
        validateKey(key, false);
    }

    function validateKey(key, autoLogin) {
        // Sabit anahtarlar ve yönlendirilecek sayfalar
        const keyPageMap = {
    "aX9dY5g8Kf2bN1": "index9.html",  // index9.html için sağlam key
    "Qz8Xl3BvK4yH1Tt": "indexbtc.html",  // indexbtc.html için sağlam key
    "L2yMh7VfP3jAe6Gh": "indexeth.html",  // indexeth.html için sağlam key
    "R6sWv5Fx9TtZaY4D": "indexsol.html",  // indexsol.html için sağlam key
    "B8qJt4Rk5WmUv9Tb": "indexbnb.html",  // indexbnb.html için sağlam key
    "H7fZp9F2XjR3dY6C": "indextrx.html",  // indextrx.html için sağlam key
    "S5zFp1D9Kw7Tj3Pl": "indexpl.html",  // indexpl.html için sağlam key
    "K2uHw7LqZxD6TnV8": "indexdoge.html",  // indexdoge.html için sağlam key
    "F9sDq8Pn6GvR4k3U": "indexusdt.html"  // indexusdt.html için sağlam key
};

        if (keyPageMap[key]) {
            // Eğer girilen key geçerli bir anahtarsa
            let page = keyPageMap[key];  // Anahtar için yönlendirme sayfası

            if (!autoLogin) {
                localStorage.setItem("savedKey", key);
                localStorage.setItem("savedPage", page);
            }

            window.location.href = page; // Kullanıcıyı yönlendir
        } else {
            if (autoLogin) {
                localStorage.removeItem("savedKey");
                localStorage.removeItem("savedPage");
                alert("⚠️Key geçersiz hale geldi, lütfen iletişime geçin @D_admin_D00⚠️.");
            } else {
                alert("⚠️Geçersiz key⚠️");
            }
        }
    }

    // Butona tıklama olayını bağlama
    document.querySelector("button").addEventListener("click", login);

    // Enter tuşuna basınca giriş yapmayı sağla
    keyInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            login();
        }
    });
});

// Satın alma sayfasına yönlendirme fonksiyonu
function buyAccess() {
    window.location.href = "https://t.me/D_admin_D00"; 
}
