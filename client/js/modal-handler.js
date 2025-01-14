// Global Methods
function showModal(modal) {
  modal.style.display = "block";
}
function hideModal(modal) {
  modal.style.display = "none";
}
//   Open Add Modal Method
let addNoteModal = document.getElementById("addNoteModal");
function openAddModal() {
  document.getElementById("addTitle").value = "";
  document.getElementById("addContent").value = "";
  document.getElementById("addError").innerHTML = "";
  showModal(addNoteModal);
  // Close Add Modal Method
  let closeBtn = document.getElementById("closeAdd");
  let cancelBtn = document.getElementById("cancelAddNoteBtn");
  closeBtn.onclick = () => hideModal(addNoteModal);
  cancelBtn.onclick = () => hideModal(addNoteModal);
}

// Save New Note Method
function saveNewNote() {
  let titleValue = document.getElementById("addTitle").value;
  let contentValue = document.getElementById("addContent").value;
  let errEl = document.getElementById("addError");
  let noteData = { title: titleValue, content: contentValue };
  addNote(noteData)
    .then((response) => {
      if (response.ok) {
        hideModal(addNoteModal);
        updateNotesTable();
      } else {
        response
          .text()
          .then((err) => (errEl.innerHTML = err))
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => (errEl.innerHTML = error));
}

function openEditModal(noteId) {
  let editNoteModal = document.getElementById("editNoteModal");
  showModal(editNoteModal);
  let closeBtn = document.getElementById("closeEdit");
  let cancelBtn = document.getElementById("cancelEditNoteBtn");
  closeBtn.onclick = () => hideModal(editNoteModal);
  cancelBtn.onclick = () => hideModal(editNoteModal);
}
