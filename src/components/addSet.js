import React, {useState} from 'react';
import QaContext from '../context/qa';

const AddSet = ({handleSubmit}) => {
    const [setTitle, setSetTitle] = useState("");
    const [setlist, setSetlist] = useState([]);

    

    return(
        <QaContext.Consumer>
        {context =>{

            const addNewSet = (e) => {
                e.preventDefault();
                const oldSetlist = [...setlist];
                oldSetlist.push(setTitle.toLowerCase().split(" ").join("-"))
                
                context.createSet(setTitle.toLowerCase().split(" ").join("-"));
                setSetlist(oldSetlist);
                handleSubmit(setTitle.toLowerCase().split(" ").join("-"))
                //setQuestionCount(context.getCount())
                document.getElementsByTagName('form')[0].reset();
            }

            return(
            <>
                <form className="form--add" onSubmit={addNewSet}>
                    <h3>Create a New Question Set</h3>                   
                    <label>
                        Title:
                        <input id="set-field" type="text" className="input-field" autoComplete="off" onChange={e => setSetTitle(e.target.value)} />
                    </label>

                    <button type="submit">Add</button>
                </form>
            </>
            )
        }}
        </QaContext.Consumer>
    )
}


export default AddSet;