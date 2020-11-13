import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import QaContext from '../context/qa';
import AddSet from '../components/addSet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const AddPage = (keys) => {
    const [questionCount, setQuestionCount] = useState(0); 
    const [questionText, setQuestionText] = useState("");
    const [answerText, setAnswerText] = useState("");
    const [setlist, setSetlist] = useState(keys.keys);
    const [setTitle, setSetTitle] = useState(setlist[0]);
    const [currentSet, setCurrentSet] = useState(setTitle);
    const [modalIn, setModalIn] = useState(false);
        
    return(
        <QaContext.Consumer>
            {context =>{
                setQuestionCount(context.getCount(currentSet));              
                const setAdded = (title) => {
                    setSetTitle(title)
                    //e.preventDefault();
                    const oldSetlist = [...setlist];
                    oldSetlist.push(title)
                    
                    context.createSet(title);
                    setCurrentSet(title);
                    setSetlist(oldSetlist)
                    setModalIn(false);
                    //setQuestionCount(context.getCount())
                }
                
                //setQuestionCount(context.getCount(currentSet))
                const addQuestion = (e) => {
                    e.preventDefault();
                    //check if question exists already
                    context.addQuestionAnswer(setTitle, questionText, answerText);
                    setQuestionCount(context.getCount(currentSet))
                    document.getElementsByTagName('form')[0].reset();
                }

                const toggleModal = (e) => {
                    e.preventDefault();
                    setModalIn(!modalIn);
                }

                return (                    
                    <>
                        {(setlist.length > 0) ?
                        <>
                        
                        <form onSubmit={addQuestion}>
                            
                            <label>
                                Set:
                                <select className="input-field">
                                    {setlist.map( (v,i) =><option key={i}>{v}</option>)}
                                </select>
                            </label>
                            <p>There are currently {questionCount} questions</p>
                            <label>
                                Question:
                                <textarea id="question-field" className="input-field" cols="50" rows="3" onChange={e => setQuestionText(e.target.value)}></textarea>
                            </label>
                            <label>
                                Answer:
                                <input id="answer-field" type="text" className="input-field" autoComplete="off" onChange={e => setAnswerText(e.target.value)} />
                            </label>

                            <button type="submit">Add</button>
                           
                        </form>
                        <a href="#" onClick={toggleModal}>Add new Question Set</a>
                            <div 
                                id="addSetModal"
                                className={
                                    (modalIn) ? "modal in": "modal"
                                }>
                                    <a href="#" onClick={toggleModal}><FontAwesomeIcon icon={faTimes} /></a>
                                    <AddSet handleSubmit={setAdded}/></div>
                        </>
                        :<AddSet handleSubmit={setAdded}/>
                        }
                         
                    </>
                )}
            }
        </QaContext.Consumer>
    );
}

export default AddPage;