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
});
