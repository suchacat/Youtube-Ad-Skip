// Create a modal dialog
var modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.backgroundColor = 'white';
modal.style.padding = '20px';
modal.style.border = '1px solid #ccc';
modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
modal.style.zIndex = '9999';
modal.style.cursor = 'move'; // Set cursor to indicate draggable

// Create the header
var header = document.createElement('h2');
header.textContent = 'Youtube Ad Skipper';
modal.appendChild(header);

// Create the "Skip Ad" button
var skipButton = document.createElement('button');
skipButton.textContent = 'Skip Ad';
skipButton.onclick = function() {
    // Run the provided JavaScript code
    document.querySelectorAll('video')[0].currentTime = document.querySelectorAll('video')[0].duration;
};
modal.appendChild(skipButton);

// Variables for tracking mouse movement
var isDragging = false;
var offsetX, offsetY;

// Event listener for mousedown (start dragging)
modal.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - modal.getBoundingClientRect().left;
    offsetY = e.clientY - modal.getBoundingClientRect().top;
});

// Event listener for mousemove (dragging)
document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        modal.style.left = e.clientX - offsetX + 'px';
        modal.style.top = e.clientY - offsetY + 'px';
    }
});

// Event listener for mouseup (stop dragging)
document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Append the modal to the document body
document.body.appendChild(modal);
