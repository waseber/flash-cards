import React, {useState} from 'react';
import Carousel from '../components/carousel';
import QaContext from '../context/qa';
import NavBar from '../components/NavBar';
import ToC from '../components/toc';

const PlayPage = () => {
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
                <header className="App-header">
                    <NavBar count={context.getCount()} />
                </header>
                <ToC data={context.getQuestionsAnswers()} onQuestionClicked={changeQuestion} />
                <Carousel obj={context.getQuestionsAnswers()} index={questionIndex} onChangeQuestion={changeQuestion}/>
                
            </div>)}}
        </QaContext.Consumer>
    );
}


export default PlayPage;