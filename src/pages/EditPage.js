import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import QaContext from '../context/qa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const EditPage = ({match}) => {
    let [questionText, setQuestionText] = useState();
    let [answerText, setAnswerText] = useState();
    let [status, setStatus] = useState();

    
    const id = match.params.id;
    return(
        <QaContext.Consumer>
            {context =>{
                const editQuestion = (e) => {
                    e.preventDefault();
                    //check if question exists already
                    context.editQuestion(id, questionText, answerText);
                    //document.getElementsByTagName('form')[0].reset();
                    setStatus("Successfully updated");
                }

                const deleteQuestion = (e) => {
                    e.preventDefault();
                    //confirm deletion
                    let r = window.confirm("Are you sure you want to delete this question?");
                    if (r == true) {
                        context.deleteQuestion(id);
                        alert("Deleted");
                        return <Redirect to="/play" />
                    }                    

                }

                return (<>
                <h2>Edit Your Question</h2>
                <form onSubmit={editQuestion} key={id}>
                        <label>
                            Question:
                            <textarea 
                                id="question-field" 
                                cols="50" 
                                rows="3" 
                                onChange={e => setQuestionText(e.target.value)}
                                defaultValue={context.getAQuestion(id).q}></textarea>
                        </label>
                        <label>
                            Answer:
                            <input 
                                id="answer-field" 
                                type="text" 
                                onChange={e => setAnswerText(e.target.value)} 
                                defaultValue={context.getAQuestion(id).a}/>
                        </label>

                        <button type="submit">Edit</button>
                        <a href="#" onClick={deleteQuestion}><FontAwesomeIcon icon={faTrashAlt} /></a>
                        <p>{status}</p>
                        </form>
            </>)}}
        </QaContext.Consumer>
    )
}

export default EditPage;