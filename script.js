// script.js

function convertToWebP() {
    const input = document.getElementById('pngInput');
    if (input.files.length === 0) {
        alert("Please select a PNG file first.");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            canvas.toBlob(function(blob) {
                const link = document.getElementById('downloadLink');
                link.href = URL.createObjectURL(blob);
                link.style.display = 'block';
            }, 'image/webp');
        };
    };

    reader.readAsDataURL(file);
}