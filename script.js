document.addEventListener("DOMContentLoaded", function () {
    // 🌍 Initialize Map
    if (document.getElementById('map')) {
        let map = L.map('map').setView([37.7749, -122.4194], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        let droneMarker = L.marker([37.7749, -122.4194]).addTo(map)
            .bindPopup('🚁 Drone in transit...')
            .openPopup();

        // Simulate Drone Movement
        setInterval(() => {
            let newLat = 37.7749 + (Math.random() - 0.01) * 0.02;
            let newLng = -122.4194 + (Math.random() - 0.01) * 0.02;
            droneMarker.setLatLng([newLat, newLng]);
        }, 3000);
    }

    // 🍔 Mobile Menu Toggle
    function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
    }
    document.querySelector(".hamburger").addEventListener("click", toggleMenu);

    // 🌙 Toggle Dark & Light Mode
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
});

    // 🍔 Hamburger Menu Toggle
    function toggleMenu() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
    }
    document.querySelector(".hamburger").addEventListener("click", toggleMenu);

    // 🌓 Toggle Dark/Light Mode
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });

    // 🚀 Page Navigation
    window.showPage = function (pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    };
});
document.addEventListener("DOMContentLoaded", function () {
    // 🌍 Initialize the Map
    let map = L.map('map').setView([37.7749, -122.4194], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    let droneMarker = L.marker([37.7749, -122.4194]).addTo(map)
        .bindPopup('🚁 Drone in transit...')
        .openPopup();

    // 🎯 Simulate Drone Movement
    setInterval(() => {
        let newLat = 37.7749 + (Math.random() - 0.005) * 0.01;
        let newLng = -122.4194 + (Math.random() - 0.005) * 0.01;
        droneMarker.setLatLng([newLat, newLng]);
        map.setView([newLat, newLng], map.getZoom(), { animate: true });
    }, 3000);

    // 🌓 Toggle Dark/Light Mode
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let droneRegister = document.getElementById("droneRegister").value;
        let droneName = document.getElementById("droneName").value;

        alert(`✅ Login Successful!\nDrone Register No: ${droneRegister}\nDrone Name: ${droneName}`);
        
        // Redirect to dashboard after login
        window.location.href = "dashboard.html";
    });
});
