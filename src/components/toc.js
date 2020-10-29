import React, {useState} from 'react';
import QaContext from '../context/qa';

const ToC = ({onQuestionClicked, data}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const toggleMenu = (e) =>{
        e.preventDefault();
        setShowMenu(!showMenu);
    }
    return(
                    
        <QaContext.Consumer>
        {context =>{ 

            /*const changeQuestion = (e) => {
                e.preventDefault();
                context.setIndex(selectedIndex);
            }*/
            return(<>
        <a href="#" className="toc-link" onClick={toggleMenu}>Menu</a>
        <div 
            className={(showMenu)? "toc-component in": "toc-component"}>
            <ul>
            {data.map( (v, i) =>
                <li key={i}><a href="#" onClick={onQuestionClicked} data={i}>{v.q}</a></li>
            )}
            </ul>
        </div>
        </>)}}
        </QaContext.Consumer>
    )
}


export default ToC;