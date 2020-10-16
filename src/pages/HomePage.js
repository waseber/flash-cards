import React from 'react';
import NavBar from '../components/NavBar';
import QaContext from '../context/qa';

const HomePage = () => {
    return(
        <QaContext.Consumer>
            {context =>(<>
            <header className="App-header">
                <NavBar count={context.getCount()} />
            </header>
            <h1>Make Your Own Flash Cards!</h1>
            <p>Make it what you want. <br/>Whatever you need to study for, add questions and answers and then quiz yourself or friends and family!</p>
        </>)}
        </QaContext.Consumer>
    );
}

export default HomePage;