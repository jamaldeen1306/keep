import React, { useState } from 'react'
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import './CreateNote.css';



const CreateNote = (props) => {
  const [isExpanded, setIsExpended] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const expand = () => {
    setIsExpended(true);

  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };

    });
  };


  const submitNote = (event) => {
    event.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    })
    setIsExpended(false)
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name='title'
            placeholder='Title'
            type="text"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name='content'
          placeholder='Take a note...'
          onClick={expand}
          onChange={handleChange}
          rows={isExpanded ? 3 : 3}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

 


export default CreateNote;