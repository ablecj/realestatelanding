$(document).ready(function () {
    $.ajax({
        url: '../../templates/navbar.html', // Load navbar.html file
        method: 'GET',
        success: function (data) {
            $('#navbar').html(data); // Insert navbar content into the placeholder
        },
        error: function (xhr, status, error) {
            console.error('Error loading navbar:', error); // Handle any errors
        }
    });
    $.ajax({
        url: '../../templates/footer.html', // Load navbar.html file
        method: 'GET',
        success: function (data) {
            $('#footer').html(data); // Insert navbar content into the placeholder
        },
        error: function (xhr, status, error) {
            console.error('Error loading navbar:', error); // Handle any errors
        }
    });

    // writing the function to set the actve links dynamically
    // let currentUrl = window.location.pathname;

    // $(".nav-link").each(function () {
    //     let linkPath = $(this).attr("href");

    //     // Normalize paths to avoid mismatches
    //     if (linkPath && currentUrl.endsWith(linkPath)) {
    //         $(this).addClass("active");
    //     } else {
    //         $(this).removeClass("active");
    //     }
    // });

});
