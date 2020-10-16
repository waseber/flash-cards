import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import QaContext from '../context/qa';

const AddPage = () => {
    const [questionCount, setQuestionCount] = useState(0); 
    const [questionText, setQuestionText] = useState("");
    const [answerText, setAnswerText] = useState("");
    

    
    return(
        <QaContext.Consumer>
            {context =>{
                setQuestionCount(context.getCount())
                const addQuestion = (e) => {
                    e.preventDefault();
                    //check if question exists already
                    context.addQuestionAnswer(questionText, answerText);
                    setQuestionCount(context.getCount())
                    document.getElementsByTagName('form')[0].reset();
                }
                return (
                    
                    <>
                        <header className="App-header">
                            <NavBar count={questionCount} />
                        </header>
                        <p>There are currently {questionCount} questions</p>
                        <form onSubmit={addQuestion}>
                        <label>
                            Question:
                            <textarea id="question-field" cols="50" rows="3" onChange={e => setQuestionText(e.target.value)}></textarea>
                        </label>
                        <label>
                            Answer:
                            <input id="answer-field" type="text" autoComplete="off" onChange={e => setAnswerText(e.target.value)} />
                        </label>

                        <button type="submit">Add</button>
                        </form>
                    </>
                )}
            }
        </QaContext.Consumer>
    );
}

export default AddPage;