// Update Notes Table Method
function updateNotesTable(noteId, noteTitle) {
  let table = document.querySelector("#notes-table");
  let rowCount = table.rows.length;
  while (--rowCount) {
    table.deleteRow(rowCount);
  }
  getNotes(noteTitle)
    .then((data) => {
      data.forEach((note) => {
        let row = table.insertRow(1);
        row.id = note["_id"];
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = note.title;
        cell2.innerHTML = note.content;
        cell3.innerHTML = new Date(note.updatedDate).toUTCString();
        cell4.innerHTML = `<button onclick="openEditModal('${note["_id"]}')" style="cursor: pointer; background-color: transparent; border: none">
      <img src="images/edit.png" alt="Edit Icon" style="width: 22px"  />
      </button>
      <button onclick="confirmDeleteNote('${note["_id"]}')" style="cursor: pointer; background-color: transparent; border: none">
      <img src="images/delete.png" alt="Delete Icon" style="width: 22px"  />
      </button>`;
      });
    })
    .then(() => {
      if (noteId) {
        document.getElementById(noteId).style.animation = "new-row 5s ease";
      }
    });
}

// Search For Note Method
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchNotes();
  }
});
function searchNotes() {
  let searchTitle = searchInput.value;
  updateNotesTable(undefined, searchTitle);
}

// Delete Note Method
function confirmDeleteNote(noteId) {
  let action = confirm("Are you sure that you want to delete this note?");
  if (action) {
    deleteNote(noteId).then(() => {
      updateNotesTable();
    });
  }
}
