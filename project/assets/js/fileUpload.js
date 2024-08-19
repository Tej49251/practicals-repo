// assets/js/fileUpload.js

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.querySelector('#file');

    if (fileInput) {
        fileInput.addEventListener('change', function () {
            const fileName = fileInput.files[0].name;
            const allowedExtensions = /(\.zip|\.rar|\.7z|\.tar\.gz)$/i;

            if (!allowedExtensions.exec(fileName)) {
                alert('Invalid file type. Please upload a zip, rar, 7z, or tar.gz file.');
                fileInput.value = '';  // Clear the input
            } else {
                // Show file name if the file type is valid
                alert(`File selected: ${fileName}`);
            }
        });
    }
});
