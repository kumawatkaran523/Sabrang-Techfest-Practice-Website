document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Add the "show" class to the container after a delay (e.g., 1 second)
    setTimeout(function () {
      document.querySelector(".containermain").classList.add("show");
    }, 500); // 1000 milliseconds = 1 second (adjust the delay as needed)
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    // Initially show Flagship images
    document.querySelector(".flagship").classList.add("active");
    document.getElementById("Flagship").classList.add("active"); // Add "active" class to the Flagship button

    // Get all buttons
    var buttons = document.querySelectorAll(".event-button button");

    // Add click event listeners to buttons
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add 'active' class to the clicked button
            this.classList.add("active");

            // Hide all image sections
            var sections = document.querySelectorAll(".flagship, .technical, .cultural, .mgmt, .design");
            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            // Get the ID of the clicked button
            var id = this.getAttribute("id");

            // Show the corresponding image section
            document.querySelector("." + id.toLowerCase()).classList.add("active");
        });
    });
});

  function prev() {
    document.getElementById('slider-container').scrollLeft -= 270;
}

function next() {
    document.getElementById('slider-container').scrollLeft += 270;
}

function autoSlide() {
    next(); // Trigger "Next" button click
}

// Set the interval for auto sliding (e.g., every 3 seconds)
setInterval(autoSlide, 3000);

// Add your jQuery code here for the image zoom functionality
$(".slider-container img").on("click", function () {
    $(this).toggleClass('zoomed');
    $(".overlay").toggleClass('active');
});
 // Function to open the modal and display the clicked image
 const sliderContainer = document.querySelector('.slider');
 const modal = document.getElementById('modal');
 const modalImage = document.getElementById('modal-image');

 function openImage(src) {
     modalImage.src = src;
     modal.style.display = 'flex';
 }

 function closeImage() {
     modal.style.display = 'none';
 }

 // Add click event listeners to all images in the slider
 const images = document.querySelectorAll('.slide img');
 images.forEach((image) => {
     image.addEventListener('click', () => {
         openImage(image.src);
     });
 });

 // Add click event listener to close the modal
 modal.addEventListener('click', () => {
     closeImage();
 }); 


 document.getElementById("registerButton").addEventListener("click", function () {
  // Define the Google Form URL
  var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJbTVKMlMrDmeNJ6NYEQGVXNyLuaF5IbYvDDZfqZH7SBAU9Q/viewform?usp=sf_link";

  // Open the form URL in a new window
  window.open(formUrl, "_blank");
});

document.getElementById("registerButton2").addEventListener("click", function () {
  // Define the Google Form URL
  var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJbTVKMlMrDmeNJ6NYEQGVXNyLuaF5IbYvDDZfqZH7SBAU9Q/viewform?usp=sf_link";

  // Open the form URL in a new window
  window.open(formUrl, "_blank");
});
document.getElementById("rbook").addEventListener("click", function () {
    // Change the src attribute of the embed element;
    var pdf="RULEBOOK.pdf";
    window.open(pdf,"_blank");
  });
  document.getElementById("sbook").addEventListener("click", function () {
    // Change the src attribute of the embed element;
    var s="Schedule.pdf";
    window.open(s,"_blank");
  });

  $(document).ready(function () {
    $("#galleryLink").click(function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        
        // Get the target element (the gallery section) by its ID
        var target = $("#gallerysection");
        
        // Calculate the offset of the target element
        var offset = target.offset().top;
        
        // Animate the scroll to the target element
        $("html, body").animate({ scrollTop: offset }, 80000); // You can adjust the duration (e.g., 1000 milliseconds) for a slower or faster scroll
    });
});
