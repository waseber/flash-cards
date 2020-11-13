import React from 'react';
import {Link} from 'react-router-dom';
import QaContext from '../context/qa';

const PlayHome = () => {
    return(
        <QaContext.Consumer>
            {context =>{ 
                return(
                    <>
                    Hi
                {context.getSets().map((v,i) => {
                    const param = v.toLowerCase().split(" ").join("-");
                    return <Link to={`/play/${param}`} key={i}>{v}</Link>
                    })}
                    </>
                )}}
        </QaContext.Consumer>)
}

export default PlayHome;