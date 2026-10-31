
// ===================================
// GAYUUU'S WORLD 💗
// Website interactions and animations
// ===================================

// ===================================
// DII'S WORLD 💗
// Website interactions and animations
// ===================================

// 1. Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Dii's World 💗");
});

// 2. Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = ["💗", "💕", "♡", "✨"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "transform 4s linear, opacity 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-110vh) rotate(30deg)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 4200);
}

setInterval(createHeart, 1800);


// 3. Welcome notification
function welcomeGayuuu() {
    alert(
        "Hey Dii! 💗\n\n" +
        "Welcome to your little world!\n" +
        "Someone loves you a LOT! 🎀"
    );
}


// 4. Smooth page navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        console.log("Exploring Dii's World!");
    });
});


// 5. Surprise greeting
function showLoveMessage() {
    alert(
        "You're my favourite human, Dii! 💕\n" +
        "Don't forget that, okay? 🫶"
    );
}


// 6. Dark mode toggle
document.addEventListener("DOMContentLoaded", function () {

    // Restore previously selected theme
    if (localStorage.getItem("dii-theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Create theme button
    const navbar = document.querySelector(".navbar");

    if (navbar && !document.querySelector(".theme-toggle")) {
        const themeButton = document.createElement("button");

        themeButton.className = "theme-toggle";
        themeButton.textContent =
            document.body.classList.contains("dark-mode")
                ? "☀️ Light"
                : "🌙 Dark";

        navbar.appendChild(themeButton);

        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "dii-theme",
                isDark ? "dark" : "light"
            );

            themeButton.textContent =
                isDark ? "☀️ Light" : "🌙 Dark";
        });
    }

    // 7. Flower shower when the page opens
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const flowers = ["🌸", "🌷", "🌺", "✨"];

        for (let i = 0; i < 25; i++) {
            setTimeout(function () {
                const petal = document.createElement("div");

                petal.className = "flower-petal";
                petal.textContent =
                    flowers[Math.floor(Math.random() * flowers.length)];

                petal.style.left = Math.random() * 100 + "vw";
                petal.style.fontSize =
                    (16 + Math.random() * 16) + "px";
                petal.style.animationDuration =
                    (3 + Math.random() * 3) + "s";

                document.body.appendChild(petal);

                setTimeout(() => petal.remove(), 6500);
            }, i * 120);
        }
    }
});

// Birthday video sound settings
document.addEventListener("DOMContentLoaded", function () {
    const birthdayVideo = document.querySelector(
        ".birthday-video-frame video"
    );

    if (birthdayVideo) {
        birthdayVideo.muted = false;
        birthdayVideo.defaultMuted = false;
        birthdayVideo.volume = 1;
    }
});
