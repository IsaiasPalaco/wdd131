document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    reviewCount += 1;

    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('reviewCount').textContent = reviewCount;
});
