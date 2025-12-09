
document.addEventListener('DOMContentLoaded', function() {
    
    // Accordion Toggle Logic (Moved from App.js)
    const categoryHeaders = document.querySelectorAll('.category-header');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
        // Get the parent container (.category-item)
        const categoryItem = header.closest('.category-item');
        
        // 1. Close all other open categories (Optional, but good UX)
        document.querySelectorAll('.category-item.open').forEach(item => {
            if (item !== categoryItem) {
                item.classList.remove('open');
            }
        });
        
        // 2. Toggle the 'open' class on the clicked category
        categoryItem.classList.toggle('open');
        });
    });
});