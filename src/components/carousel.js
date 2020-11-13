import React, {useEffect, useState} from 'react';
import QaContext from '../context/qa';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faEdit } from '@fortawesome/free-solid-svg-icons'

const Carousel = ({set,onChangeQuestion, obj, index}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    let [currentIndex, setCurrentIndex] = useState(index);
    let [displayIndex, setDisplayIndex] = useState(1);
    let [currentQuestion, setCurrentQuestion] = useState(obj[currentIndex].q);
    let [currentAnswer, setCurrentAnswer] = useState(obj[currentIndex].a);

    const flipCard = (e) => {
        e.preventDefault();
        setShowAnswer(!showAnswer);
    }

    useEffect(()=>{
        setCurrentIndex(index);
        setCurrentQuestion(obj[currentIndex].q)
        setCurrentAnswer(obj[currentIndex].a)
        
        //if(showAnswer) setShowAnswer(false);
        setDisplayIndex(parseInt(currentIndex) + 1)
    },)

    useEffect(()=>{
        setShowAnswer(false);
    }, [index])

    return(            
        <QaContext.Consumer>
        {context =>{ 
                
               //let currentIndex= 0;
                const count = obj.length;
                                
            return (<>
            <h3>{displayIndex} of {obj.length}</h3>
            <section>                
                <a href="#"
                    onClick={onChangeQuestion}
                    data={parseInt(currentIndex)-1}
                    className={
                        (displayIndex > 1) ? "paddle" : "paddle vis-hidden"
                    }
                    ><FontAwesomeIcon icon={faChevronLeft} /></a>
                <div id="carousel-center">
                    <article id="flash-card" className="flash-card" >
                        
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (!showAnswer) ? "question ani-flip-up": "hide"
                        }>
                            <div className="inner-card">
                            <h3>Question:</h3>
                            <h3 >{currentQuestion}</h3>
                            </div>
                        </a>
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (showAnswer) ? "answer  ani-flip-down": "hide"
                            }> 
                                <div className="inner-card">
                                <h3>Answer:</h3>
                            <h3 >{currentAnswer}</h3>
                        </div></a>
                    </article>
                    <Link to={`/edit/${set}/${currentIndex}`}><FontAwesomeIcon icon={faEdit} /></Link>
                </div>
                
                <a href="#" 
                    onClick={onChangeQuestion}
                    data={parseInt(currentIndex)+1}
                    className={
                        (displayIndex == count) ? "paddle vis-hidden" : "paddle"
                    }
                    ><FontAwesomeIcon icon={faChevronRight} /></a>
            </section>
            </>)}}
        </QaContext.Consumer>
        //))
    
       
    )
}

export default Carousel;