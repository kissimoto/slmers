
// script.js
document.getElementById('year').textContent = new Date().getFullYear();


// Smooth scrolling and explanation card handling
document.addEventListener('DOMContentLoaded', function() {
    const explanationCards = document.querySelectorAll('.explanation-card');
    const defaultState = document.querySelector('.default-state');
    const closeButtons = document.querySelectorAll('.close-explanation');
    
    // Function to hide all explanation cards and show default state
    function hideAllExplanations() {
        explanationCards.forEach(card => {
            card.classList.remove('active');
        });
        if (defaultState) {
            defaultState.classList.add('active');
        }
    }
    
    // Function to show specific explanation card
    function showExplanation(id) {
        hideAllExplanations();
        const card = document.getElementById(id);
        if (card) {
            card.classList.add('active');
        }
        if (defaultState) {
            defaultState.classList.remove('active');
        }
    }
    
    // Handle "more" link clicks
    document.querySelectorAll('.more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showExplanation(targetId);
            
            // Smooth scroll to explanatory section
            const explanatorySection = document.querySelector('.explanatory-cards-section');
            explanatorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Handle close button clicks
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllExplanations();
        });
    });
    
    // Initialize with default state visible
    hideAllExplanations();
    
    // Handle URL hash on page load
    if (window.location.hash && window.location.hash.startsWith('#explanation-')) {
        showExplanation(window.location.hash.substring(1));
    }
});
