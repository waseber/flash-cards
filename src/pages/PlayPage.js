import React from 'react';
import Carousel from '../components/carousel';
import QaContext from '../context/qa';

const PlayPage = () => {

    return(
        <QaContext.Consumer>
            {context =>(<>
                <Carousel obj={context.getQuestionsAnswers()}/>
                
            </>)}
        </QaContext.Consumer>
    );
}


export default PlayPage;