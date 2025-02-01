document.addEventListener("DOMContentLoaded", function () {
    // Profile Image Hover Effect
    const profileImage = document.querySelector(".image-section img");
    profileImage.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s ease-in-out";
    });

    profileImage.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });

    // Add Tooltips for Social Media Icons
    const socialButtons = document.querySelectorAll(".social-btn");
    const tooltips = ["Instagram", "Facebook", "WhatsApp"];

    socialButtons.forEach((button, index) => {
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.textContent = tooltips[index];
        button.appendChild(tooltip);

        button.addEventListener("mouseenter", function () {
            tooltip.style.opacity = "1";
        });

        button.addEventListener("mouseleave", function () {
            tooltip.style.opacity = "0";
        });

        // Add Click Effect
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.9)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 200);
        });
    });

    // Blog Button Click Event
    const blogButton = document.getElementById("blogButton");
    blogButton.addEventListener("click", function () {
        window.location.href = "#"; // Change to the actual HNG blog link
    });
});
