import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import AddPage from './pages/AddPage';
import QaContext from './context/qa';
import './App.css';
import PlayPage from './pages/PlayPage';


let questionsObj = [];
if(localStorage.getItem("questions")){
  questionsObj = JSON.parse(localStorage.getItem("questions"))
}

//const qaMap = new Map();
class App extends Component {
 
  state = {
    qa: questionsObj,
  };
  getCount = () => {
    return questionsObj.length;
  };
  addQuestionAnswer = (q,a) =>{
    questionsObj.push({ q , a})
    localStorage.setItem("questions", JSON.stringify(questionsObj))
    //objectStore.add({q:q,a:a});
    //return tx.complete;
    //var qaObjectStore = db.transaction("questionsAndAnswers", "readwrite").objectStore("questionsAndAnswers");
    //customerData.forEach(function(customer) {
      
     // qaObjectStore.add(a);
    //qaMap.set(q,a);
    //console.log(qaMap.keys())
  };
  getQuestionsAnswers = () => {
    return questionsObj;
  };

  render(){
    
  return (
    <div className="App">
      <QaContext.Provider
        value={{
          qa: this.state.qa,
          getCount: this.getCount,
          addQuestionAnswer: this.addQuestionAnswer,
          getQuestionsAnswers: this.getQuestionsAnswers
        }}
      >
        <Router>
        <header className="App-header">
          <NavBar />
        </header>
        <main>
            <Switch>
              <Route 
                path="/add-question" 
                component={AddPage}
                />
                <Route 
                path="/play"
                component={PlayPage} 
                //render={(props) => <AddPage {...props} InUp="in"/>}
                />
                <Route 
                path="/"
                component={PlayPage} 
                exact
                />
            </Switch>
        </main>
        </Router>
      </QaContext.Provider>
    </div>
  );
}
}

export default App;
