// Update Notes Table Method
function updateNotesTable() {
  let table = document.querySelector("#notes-table");
  getNotes().then((data) => {
    data.forEach((note) => {
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      cell1.innerHTML = note.title;
      cell2.innerHTML = note.content;
      cell3.innerHTML = new Date(note.updatedDate).toUTCString();
      cell4.innerHTML = `<button style="cursor: pointer; background-color: transparent; border: none">
      <img src="images/edit.png" alt="Edit Icon" style="width: 22px"  />
      </button>
      <button style="cursor: pointer; background-color: transparent; border: none">
      <img src="images/delete.png" alt="Delete Icon" style="width: 22px"  />
      </button>`;
    });
  });
}
