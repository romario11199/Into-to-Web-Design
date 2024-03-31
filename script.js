// Get the modal element
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var openModalBtn = document.getElementById('openModalBtn');

// Get the close button element
var closeButton = document.getElementsByClassName('close')[0];

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener to open the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

// Event listener to close the modal when the close button is clicked
closeButton.addEventListener('click', closeModal);

// Event listener to close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});