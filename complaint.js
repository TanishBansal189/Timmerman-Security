let complaint = document.querySelector('.submit-btn')
console.log(complaint)

function showAlert() {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = 'alert success';
    alert.innerHTML = '<strong>Success!</strong> Your complaint has been submitted. We will review it and get back to you shortly.';

    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 7000); // Remove alert after 5 seconds\

    document.getElementById('complaintForm').reset();

    return false; // Prevent form submission for demonstration purposes
}
