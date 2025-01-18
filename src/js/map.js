document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("info-box");
    const mapContainer = document.getElementById("map-container");
  
    // Load the SVG dynamically
    fetch("/map/worldmap.svg")
      .then((response) => response.text())
      .then((svgData) => {
        mapContainer.innerHTML = svgData;
  
        // Add hover events to paths
        const paths = mapContainer.querySelectorAll("path");
  
        paths.forEach((path) => {
          path.addEventListener("mouseenter", () => {
            const countryName = path.getAttribute("title");
            infoBox.textContent = countryName;
          });
  
          path.addEventListener("mouseleave", () => {
            infoBox.textContent = "Hover over a country";
          });
        });
      })
      .catch((err) => console.error("Failed to load SVG:", err));
  });
  