document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the click event for "Handbags"
    document.querySelector('nav .navbar a[href="#"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'h.html/h1.html';
    });

    // Function to handle the click event for "Footwear"
    document.querySelector('nav .navbar ul li:nth-of-type(2) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'w.html/w1.html';
    });

    // Function to handle the click event for "Dresses"
    document.querySelector('nav .navbar ul li:nth-of-type(3) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 't.html/t1.html';
    });

    // Function to handle the click event for "Tops"
    document.querySelector('nav .navbar ul li:nth-of-type(4) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'x.html/x1.html';
    });

    // Function to handle the click event for "Lehangas"
    document.querySelector('nav .navbar ul li:nth-of-type(5) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'y.html/u.html';
    });

    // Function to handle the click event for "Sarees"
    document.querySelector('nav .navbar ul li:nth-of-type(6) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'z.html/z1.html';
    });

    // Function to handle the click event for "Main File"
    document.querySelector('nav .navbar ul li:nth-of-type(7) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'f1.html';
    });
});
