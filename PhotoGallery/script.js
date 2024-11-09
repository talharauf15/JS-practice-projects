const boxes = document.querySelectorAll('.box img');
const preview = document.querySelector('.preview-container img');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        preview.src = box.src;
        preview.style.display = 'block';
    });
    
    box.addEventListener('mouseleave', () => {
        preview.style.display = 'none';
    });
});