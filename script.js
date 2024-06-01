window.addEventListener('load', function() {
    document.querySelector('.garden-background').classList.add('visible');
    setTimeout(() => {
        document.getElementById('stem').classList.remove('hidden');
        document.getElementById('stem').classList.add('visible');
    }, 1000); // Wait 1 second before drawing the stem
    setTimeout(() => {
        document.getElementById('flower').classList.remove('hidden');
        document.getElementById('flower').classList.add('visible');
    }, 3000); // Wait 3 seconds before drawing the flower
});
