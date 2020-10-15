import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faEdit } from '@fortawesome/free-solid-svg-icons'

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
        console.log("click")
        //clone flash-card
        /*const itm = document.getElementById("flash-card");
        const cln = itm.cloneNode(true);
        //append the new one to carousel-center
        document.getElementById("carousel-center").appendChild(cln);
        //delete the old one
        document.getElementById("carousel-center").removeChild(itm);

        
        if(showAnswer!=true){
            document.getElementById("flash-card").classList.add("ani-flip-up");
        } else {
            document.getElementById("flash-card").classList.add("ani-flip-down");
        }*/
    }
    const prev = (e) => {
        e.preventDefault();
        if(currentIndex +1 > 1){
            setCurrentIndex(currentIndex-=1)
            setCurrentQuestion(obj[currentIndex].q)
            setCurrentAnswer(obj[currentIndex].a)
            setShowAnswer(false);
        }
    }

    const next = (e) => {
        e.preventDefault();
        if(currentIndex < count){
            setCurrentIndex(currentIndex+=1);
            setCurrentQuestion(obj[currentIndex].q)
            setCurrentAnswer(obj[currentIndex].a)
            setShowAnswer(false);
        }
        
    }

    return(            
            <>
            <h2>{currentIndex + 1} of {obj.length}</h2>
            <section>
                
                <a href="#"
                    onClick={prev}
                    className={
                        (currentIndex +1 > 1) ? "paddle" : "paddle vis-hidden"
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
                            <h2>Question:</h2>
                            <h3 >{currentQuestion}</h3>
                            </div>
                        </a>
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (showAnswer) ? "answer  ani-flip-down": "hide"
                            }> 
                                <div className="inner-card">
                                <h2>Answer:</h2>
                            <h3 >{currentAnswer}</h3>
                        </div></a>
                    </article>
                    <Link to={`/edit/${currentIndex}`}><FontAwesomeIcon icon={faEdit} /></Link>
                </div>
                
                <a href="#" 
                    onClick={next}
                    className={
                        (currentIndex +1 == count) ? "paddle vis-hidden" : "paddle"
                    }
                    ><FontAwesomeIcon icon={faChevronRight} /></a>
            </section>
            </>
        //))
    
       
    )
}

export default Carousel;