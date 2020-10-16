import React from 'react';
import Carousel from '../components/carousel';
import QaContext from '../context/qa';
import NavBar from '../components/NavBar';

const PlayPage = () => {

    return(
        <QaContext.Consumer>
            {context =>(<>
                <header className="App-header">
                    <NavBar count={context.getCount()} />
                </header>
                <Carousel obj={context.getQuestionsAnswers()}/>
                
            </>)}
        </QaContext.Consumer>
    );
}


export default PlayPage;