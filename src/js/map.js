const countryInfo = {
  "Canada": {
    organizations: "Canadian Human Trafficking Hotline",
    email: "hotline@ccteht.ca",
    phone: "1-833-900-1010",
  },
  "United States": {
    organizations: "Hope for justice",
    email: "info.us@hopeforjustice.org",
    phone: "(+1)615-356-046",
  },
  "United Kingdom": {
    organizations: "The Freedom Fund",
    email: "info@freedomfund.org",
    phone: "+44 (0) 203 777 2200",
  },
  "Australia": {
    organizations: "Anto-slavery Australia",
    email: "asalegal@uts.edu.au",
    phone: "0295148115",
  },
  "Japan": {
    organizations: "Not For Sale Jpapan",
    email: "japan@notforsalecampaign.org",
    phone: "-",
  },
  "Denmark": {
    organizations: "Danish Institute for Human Rights",
    email: "mape@humanrights.dk",
    phone: "+45 91 32 57 20",
  },
  // Add more countries here
};

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
            infoBox.textContent = "";
  
            // Highlight the path on hover
            path.classList.add("highlighted");
  
            // Fetch info from the countryInfo
            const info = countryInfo[countryName];
  
            if (info) {
              // If info exists, display it
              infoBox.innerHTML = `
                <strong>${countryName}</strong><br>
                Organizations: ${info.organizations || "N/A"}<br>
                Email: ${info.email || "N/A"}<br>
                Phone: ${info.phone || "N/A"}
              `;
            } else {
              // If no info exists, display a default message
              infoBox.innerHTML = `
                <strong>${countryName}</strong><br>
                We are working on getting more information available.
              `;
            }
          });
  
          path.addEventListener("mouseleave", () => {
            infoBox.textContent = "Hover over a country";
            
            // Remove the highlight when mouse leaves
            path.classList.remove("highlighted");
          });
        });
      })
      .catch((err) => console.error("Failed to load SVG:", err));
  });
  