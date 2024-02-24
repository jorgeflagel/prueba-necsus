document.getElementById('download-pdf').addEventListener('click', function() {
    const button = document.querySelector('#download-pdf');
    const cv = document.querySelector('#cv');
    button.style.display = "none";

    window.print();

    button.style.display = "block";

});
