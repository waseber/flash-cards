import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Carousel = ({obj}) => {
    console.log(obj)   
    const [showAnswer, setShowAnswer] = useState(false);
    let [currentIndex, setCurrentIndex] = useState(0);
   //let currentIndex= 0;
    const count = obj.length;
    let [currentQuestion, setCurrentQuestion] = useState(obj[currentIndex].q);
    let [currentAnswer, setCurrentAnswer] = useState(obj[currentIndex].a);
    const flipCard = (e) => {
        e.preventDefault();
        setShowAnswer(!showAnswer);
    }
    const prev = (e) => {
        e.preventDefault();
        console.log("prev")
        if(currentIndex +1 > 1){
            setCurrentIndex(currentIndex-=1)
            setCurrentQuestion(obj[currentIndex].q)
            setCurrentAnswer(obj[currentIndex].a)
            //;
            setShowAnswer(false);
        }
    }

    const next = (e) => {
        e.preventDefault();
        console.log("next")
        if(currentIndex < count){
            setCurrentIndex(currentIndex+=1);
            setCurrentQuestion(obj[currentIndex].q)
            setCurrentAnswer(obj[currentIndex].a)
            setShowAnswer(false);
        }
        
    }

    return(
        //obj[currentIndex].map( (question, key) => (
            
            <>
            <h2>{currentIndex + 1} of {obj.length}</h2>
            <section>
                
                <a href="#"
                    onClick={prev}
                    className={
                        (currentIndex +1 > 1) ? "" : "vis-hidden"
                    }
                    >Previous</a>
                <div>
                    <article className="flash-card ani-flip-up" >
                        
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (!showAnswer) ? "question show": "hide"
                        }>
                            <h2>Question:</h2>
                            <h3 >{currentQuestion}</h3>
                        </a>
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (showAnswer) ? "answer show": "hide"
                            }>
                                <h2>Answer:</h2>
                            <h3 >{currentAnswer}
                        </h3></a>
                    </article>
                    <Link to={`/edit/${currentIndex}`}>Edit</Link>
                </div>
                
                <a href="#" 
                    onClick={next}
                    className={
                        (currentIndex +1 == count) ? "vis-hidden" : ""
                    }
                    >Next</a>
            </section>
            </>
        //))
    
       
    )
}

export default Carousel;