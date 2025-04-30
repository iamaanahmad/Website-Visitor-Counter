// Check if localStorage is available
function isLocalStorageAvailable() {
    try {
        const test = 'test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

// Get or initialize the visitor count
function getVisitorCount() {
    if (isLocalStorageAvailable()) {
        let count = localStorage.getItem('visitorCount');
        if (count === null) {
            count = 0;
        } else {
            count = parseInt(count);
        }
        return count;
    }
    return 0; // Fallback if localStorage isn't available
}

// Update the visitor count
function updateVisitorCount() {
    if (isLocalStorageAvailable()) {
        let count = getVisitorCount() + 1;
        localStorage.setItem('visitorCount', count.toString());
        return count;
    }
    return 0;
}

// Display the visitor count
function displayVisitorCount() {
    const countElement = document.getElementById('visitorCount');
    const count = updateVisitorCount();
    countElement.textContent = count;
    
    // Simple animation
    countElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countElement.style.transform = 'scale(1)';
    }, 300);
}

// Initialize when the page loads
window.onload = displayVisitorCount;
