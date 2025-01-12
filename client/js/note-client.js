const baseUrl = "http://localhost:3000";

// Add Note Method
async function addNote(noteData) {
  const response = await fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return response;
}

// Update Note Method
async function updateNote(noteData) {
  const response = await fetch(`${baseUrl}/notes`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return response;
}

// Delete Note Method
async function deleteNote(noteId) {
  const response = await fetch(`${baseUrl}/notes/${noteId}`, {
    method: "DELETE",
  });
  return response;
}

// Get Note By Id Method
async function getNoteById(noteId) {
  const response = await fetch(`${baseUrl}/notes/${noteId}`);
  return response.json();
}

// Get All Note Or Search Method
async function getNotes(noteTitle) {
  let url = `${baseUrl}/notes`;
  if (noteTitle) {
    url += `?title=${noteTitle}`;
  }
  const response = await fetch(url);
  return response.json();
}
