import React, {useState} from 'react';
import Carousel from '../components/carousel';
import QaContext from '../context/qa';
import NavBar from '../components/NavBar';
import ToC from '../components/toc';

const PlayPage = ({ match }) => {
    const set = match.params.set;
    let [questionIndex, setQuestionIndex] = useState(0);//index
    return(
        <QaContext.Consumer>
            {context =>{ 
                function changeQuestion(e){
                    e.preventDefault();
                    setQuestionIndex(e.currentTarget.getAttribute('data'))
                    console.log(e.currentTarget)
                }
                
                return(<div className="play-page">
                <ToC data={context.getQuestionsAnswers(set)} onQuestionClicked={changeQuestion} />
                <Carousel set={set} obj={context.getQuestionsAnswers(set)} index={questionIndex} onChangeQuestion={changeQuestion}/>
                
            </div>)}}
        </QaContext.Consumer>
    );
}


export default PlayPage;