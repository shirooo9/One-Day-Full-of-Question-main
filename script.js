document.addEventListener("DOMContentLoaded", function () {
  const loadingContainer = document.getElementById("loading-container");

  // Array file HTML yang akan ditampilkan secara bergantian
  const loadingFiles = [
    "Loading/loading1.html",
    "Loading/loading2.html",
    "Loading/loading3.html",
    "Loading/loading4.html",
  ];
  let currentIndex = 0;

  // Fungsi untuk memuat dan menampilkan konten dari file HTML
  function loadNextLoading() {
    fetch(loadingFiles[currentIndex])
      .then((response) => response.text())
      .then((data) => {
        loadingContainer.innerHTML = data;
        currentIndex = (currentIndex + 1) % loadingFiles.length;
      })
      .catch((error) => console.error("Error loading file:", error));
  }

  // Interval untuk berganti animasi loading setiap 2 detik
  setInterval(loadNextLoading, 2000);

  // Muat animasi loading pertama kali
  loadNextLoading();
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading-container").classList.add("hidden");
    document.getElementById("profile-container").classList.remove("hidden");
  }, 3000); // Simulating a 3-second loading time
});

document.addEventListener("DOMContentLoaded", () => {
  const nextPageButtons = document.querySelectorAll(".nextPage");
  const prevPageButtons = document.querySelectorAll(".prevPage");

  nextPageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = button.getAttribute("data-target");
      }, 500); // Match this duration with the CSS transition duration
    });
  });

  prevPageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = button.getAttribute("data-target");
      }, 500); // Match this duration with the CSS transition duration
    });
  });

  document.body.classList.add("fade-in");
});
