import React, {useState} from 'react';

const Carousel = ({obj}) => {   
    const [showAnswer, setShowAnswer] = useState(false);
    let [currentIndex, setCurrentIndex] = useState(0);
    const flipCard = (e) => {
        e.preventDefault();
        setShowAnswer(!showAnswer);
    }
    const prev = (e) => {
        e.preventDefault();
        setCurrentIndex(Math.max(0,currentIndex--));
        setShowAnswer(false);
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
                
                <button onClick={prev}>Previous</button>
                <article className="flash-card" key={obj[currentIndex].key} >
                    <a href="#" onClick={flipCard}>
                        <h3 className={
                            (!showAnswer) ? "question ani-roll-in-from-top": "hide"
                        }>{obj[currentIndex].q}</h3>
                    </a>
                    <a href="#" onClick={flipCard}>
                        <h3 className={
                            (showAnswer) ? "answer ani-roll-up-from-bottom": "hide"
                        }>{obj[currentIndex].a}
                    </h3></a>
                </article>
                <button onClick={next}>Next</button>
            </section>
            </>
        //))
    
       
    )
}

export default Carousel;