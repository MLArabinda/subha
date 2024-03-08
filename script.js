document.getElementById("showImageButton").addEventListener("click", function() {
    if (!document.getElementById("displayedImage")) {
      var img = document.createElement("img");
      img.src = "chhua.jpg"; // Replace "image.jpg" with the path to your image
      img.alt = "Displayed Image";
      img.id = "displayedImage"; // Add an id to the image
      img.className = "image";
      img.style.width = "20vw"
      this.parentNode.appendChild(img); // Append the image after the button
    }
  });
  