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
// Open Edit Modal Method
let editNoteModal = document.getElementById("editNoteModal");
function openEditModal(noteId) {
  document.getElementById("editError").innerHTML = "";
  showModal(editNoteModal);
  let closeBtn = document.getElementById("closeEdit");
  let cancelBtn = document.getElementById("cancelEditNoteBtn");
  closeBtn.onclick = () => hideModal(editNoteModal);
  cancelBtn.onclick = () => hideModal(editNoteModal);
  loadNoteData(noteId);
}
// Display Data In Modal
function loadNoteData(noteId) {
  editNoteModal.dataset.noteId = noteId;
  getNoteById(noteId)
    .then((data) => {
      document.getElementById("editTitle").value = data.title;
      document.getElementById("editContent").value = data.content;
    })
    .catch((error) => {
      document.getElementById("editError").innerHTML = error;
    });
}

function saveEditNote() {
  let titleValue = document.getElementById("editTitle").value;
  let contentValue = document.getElementById("editContent").value;
  let errEl = document.getElementById("editError");
  let noteData = {
    _id: editNoteModal.dataset.noteId,
    title: titleValue,
    content: contentValue,
  };
  updateNote(noteData)
    .then((response) => {
      if (response.ok) {
        hideModal(editNoteModal);
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
