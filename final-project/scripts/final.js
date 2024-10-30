document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});

document.addEventListener('DOMContentLoaded', () => {
    const destinations = ['Maputo', 'Bazaruto Archipelago', 'Gorongosa National Park', 'Ilha de Moçambique'];
    const destinationSelect = document.getElementById('destination');
    if (destinationSelect) {
    destinations.forEach(destination => {
            const option = document.createElement('option');
            option.value = destination;
            option.textContent = destination;
            destinationSelect.appendChild(option);
        });
    }

    const reviewForm = document.querySelector('form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(reviewForm);
            const reviewData = {
                firstName: formData.get('fname'),
                lastName: formData.get('lname'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                destination: formData.get('destination'),
                review: formData.get('review')
            };
            console.log('Review submitted:', reviewData);
            alert('Thank you for your review!');
            reviewForm.reset();
        });
    }

    const menuIcon = document.getElementById('menu');
    const navLinks = document.getElementById('nav-links');
    const logo = document.getElementById('logo');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuIcon.classList.toggle('open');
        logo.classList.toggle('centered');
    });
});
