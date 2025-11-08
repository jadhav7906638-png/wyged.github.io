document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeader = document.querySelector('.dropdown-header');
    const dropdownList = document.querySelector('.dropdown-list');
    const listItems = document.querySelectorAll('.dropdown-list li');
    const selectedItemSpan = document.getElementById('selected-item');

    // 1. Toggle Dropdown Open/Close
    dropdownHeader.addEventListener('click', function() {
        // Toggle the 'hidden' class on the list
        dropdownList.classList.toggle('hidden');
        // Toggle the 'open' class on the header for chevron rotation
        dropdownHeader.classList.toggle('open');
    });

    // 2. Handle Item Selection
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all items
            listItems.forEach(li => li.classList.remove('active'));

            // Add 'active' class to the clicked item
            this.classList.add('active');

            // Update the header text with the selected item's text content
            // Trim() removes extra spaces/newlines around the text
            selectedItemSpan.textContent = this.textContent.trim();

            // Close the dropdown after selection
            dropdownList.classList.add('hidden');
            dropdownHeader.classList.remove('open');

            // OPTIONAL: Log the selected value (e.g., for form submission)
            const selectedValue = this.getAttribute('data-value');
            console.log("Selected Value:", selectedValue);
        });
    });

    // 3. Close Dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const container = document.querySelector('.dropdown-container');
        // Check if the click occurred outside the container
        if (!container.contains(event.target)) {
            dropdownList.classList.add('hidden');
            dropdownHeader.classList.remove('open');
        }
    });
});