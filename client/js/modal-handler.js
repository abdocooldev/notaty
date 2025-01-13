// Global Methods
function showModal(modal) {
  modal.style.display = "block";
}
function hideModal(modal) {
    modal.style.display = "none";
  }
//   Open Add Modal Method
function openAddModal() {
  let addNoteModal = document.getElementById("addNoteModal");
  showModal(addNoteModal);
}
// Close Add Modal Method
let closeBtn = document.getElementById("closeAdd");
let cancelBtn = document.getElementById("cancelAddNoteBtn");
closeBtn.onclick = () => hideModal(addNoteModal);
cancelBtn.onclick = () => hideModal(addNoteModal);
