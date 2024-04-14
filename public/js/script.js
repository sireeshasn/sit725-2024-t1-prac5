$(document).ready(function() {
    // Initialize modal
    $('.modal').modal();

    // Open modal when #clickMeButton is clicked
    $('#clickMeButton').click(function() {
        $('#modal1').modal('open');
    });

    // Handle form submission
    $('#formSubmit').click(function() {
        // Retrieve form data
        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        var password = $('#password').val();
        var email = $('#email').val();

        var formData = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email
        };

        // Send AJAX POST request to server
        $.ajax({
            type: 'POST',
            url: '/api/cats',
            data: formData,
            success: function(response) {
                // Handle successful response
                console.log(response); // Log server response
                $('#catPostSuccess').text('Cat post successful'); // Update success message
            },
            error: function(error) {
                // Handle AJAX error
                console.error('Error:', error); // Log error
                // Optionally display error message to user
            }
        });

        // Close modal after form submission
        $('#modal1').modal('close');
    });
});

