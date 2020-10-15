import React from 'react';

//const qaMap = new Map();
export default React.createContext({
    qa:{},
    getCount: ()=>{},
    addQuestionAnswer: (q,a) =>{},
    getQuestionsAnswers: () => {}

});


/*
const getSize = () => {
    return qaMap.size;
}

const getFromMap = (map) => {
    for(let[k,v] of map){
        console.log(`${k} ${v}`)
    }
}

const addToMap = (q, a) => {
    //check if question exists already
    if(qaMap.has(q)) return;
    //question will be the key
    qaMap.set(q, a);
}
*/