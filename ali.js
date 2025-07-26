
// Back-to-top button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.width = "50px"; // Equal width and height for round shape
backToTopButton.style.height = "50px";
backToTopButton.style.padding = "10px";
backToTopButton.style.fontSize = "16px";
backToTopButton.style.backgroundColor = "rgb(243, 164, 61)";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "50%"; // Fully round button
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; // Add shadow for better visibility
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  // Smooth scrolling to top
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  
  function toggleMenu() {
      const menu = document.getElementById('sideMenu');
      menu.classList.toggle('active');
    }

     window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Hide completely after fade out
  });

    