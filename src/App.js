import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CreateNote from './Components/CreateNote/CreateNote';
import DisplayNote from './Components/DisplayNote/DisplayNote';


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id

      })
    })
  }
  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <DisplayNote id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
        )
      })}
    
    </div>
  );
}

export default App;