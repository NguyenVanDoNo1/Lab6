// Open the popup and set the challenge name
function openPopup(challengeName) {
    document.getElementById('challenge-popup').style.display = 'block';
    document.getElementById('challenge-name').value = challengeName + " Challenge";
}

// Close the popup
function closePopup() {
    document.getElementById('challenge-popup').style.display = 'none';
}
// Khởi tạo TinyMCE
document.addEventListener('DOMContentLoaded', function () {
    tinymce.init({
        selector: '#normal', // chỉ định đúng id của textarea
        plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        menubar: false,
        branding: false,
        height: 300, // Set height to avoid resizing issues
        setup: function(editor) {
            editor.on('init', function() {
                editor.getContainer().style.zIndex = '999'; // Ensure TinyMCE sits on top
            });
        }
    });
});
// Open the popup and set the challenge name
function openPopup(challengeName) {
    const popup = document.getElementById('challenge-popup');
    if (popup) {
        popup.style.display = 'block';
        document.getElementById('challenge-name').value = challengeName + " Challenge";
    }
}

// Close the popup
function closePopup() {
    const popup = document.getElementById('challenge-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}
function addTestCase() {
    const container = document.querySelector('.test-case-inputs');
    if (container) {
        const index = container.children.length + 1; // Count existing test cases
        const newRow = `
            <div class="row mb-2 test-case-input">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Input ${index}" required>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Output ${index}" required>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', newRow);
    }
}
tinymce.init({
    selector: '#normal',
    plugins: 'advlist autolink lists link charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste help wordcount',
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
    menubar: false,
    branding: false,
});



