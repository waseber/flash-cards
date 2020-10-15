import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Carousel = ({obj}) => {   
    const [showAnswer, setShowAnswer] = useState(false);
    let [currentIndex, setCurrentIndex] = useState(0);
    const flipCard = (e) => {
        e.preventDefault();
        setShowAnswer(!showAnswer);
    }
    const prev = (e) => {
        e.preventDefault();
        if(currentIndex > 0){
            setCurrentIndex(currentIndex--);
            setShowAnswer(false);
        }
    }

    const next = (e) => {
        e.preventDefault();
        if(currentIndex < obj.length){
            setCurrentIndex(currentIndex++);
            setShowAnswer(false);
        }
        
    }

    
    return(
        
        
        //obj[currentIndex].map( (question, key) => (
            <>
            <h2>{currentIndex + 1} of {obj.length}</h2>
            <section>
                
                <button 
                    onClick={prev}
                    className={
                        (currentIndex > 0) ? "" : "vis-hidden"
                    }
                    >Previous</button>
                <div>
                    <article className="flash-card ani-flip-up" key={obj[currentIndex].key} >
                        
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (!showAnswer) ? "question show": "hide"
                        }>
                            <h2>Question</h2>
                            <h3 >{obj[currentIndex].q}</h3>
                        </a>
                        <a href="#" 
                            onClick={flipCard}
                            className={
                                (showAnswer) ? "answer show": "hide"
                            }>
                                <h2>Answer</h2>
                            <h3 >{obj[currentIndex].a}
                        </h3></a>
                    </article>
                    <Link to={`/edit/${currentIndex}`}>Edit</Link>
                </div>
                
                <button 
                    onClick={next}
                    className={
                        (currentIndex < obj.length) ? "" : "vis-hidden"
                    }
                    >Next</button>
            </section>
            </>
        //))
    
       
    )
}

export default Carousel;