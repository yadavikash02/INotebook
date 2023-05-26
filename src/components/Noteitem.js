import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = "In this note the title is"+note.title+". And description is"+note.description;
        window.speechSynthesis.speak(msg);
        // showAlert(": successfully speak Text", "success");
    }
    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="mx-3">
                        <span className="material-symbols-outlined mx-1 " onClick={speak}>
                            text_to_speech
                        </span>
                        <span className="material-symbols-outlined mx-1" onClick={() => { deleteNote(note._id) }}>
                            delete
                        </span>
                        <span className="material-symbols-outlined mx-1" onClick={() => { updateNote(note) }}>edit_note</span>
                        </div>
                    </div>

                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
