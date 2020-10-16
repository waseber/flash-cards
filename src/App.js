import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import ReactGa from 'react-ga';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import QaContext from './context/qa';
import './App.css';
import PlayPage from './pages/PlayPage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';


let questionsObj = [];
if(localStorage.getItem("questions")){
  questionsObj = JSON.parse(localStorage.getItem("questions"))
}

const updateDB = (db, obj) => {
  localStorage.setItem(db, JSON.stringify(obj))
}


ReactGa.initialize('UA-180626419-1');

ReactGa.pageview('/')
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
    updateDB("questions", questionsObj);    
  };
  getQuestionsAnswers = () => {
    return questionsObj;
  };
  getAQuestion = (id) => {
    return questionsObj[id];
  };
  editQuestion = (id,q,a) =>{
    questionsObj[id] = { q , a};
    updateDB("questions", questionsObj);
  }
  deleteQuestion = (id) => {
    questionsObj.splice(id,1);
    updateDB("questions", questionsObj);
  };

  render(){
    
  return (
    <div className="App">
      <QaContext.Provider
        value={{
          qa: this.state.qa,
          getCount: this.getCount,
          addQuestionAnswer: this.addQuestionAnswer,
          getQuestionsAnswers: this.getQuestionsAnswers,
          getAQuestion: this.getAQuestion,
          editQuestion: this.editQuestion,
          deleteQuestion: this.deleteQuestion
        }}
      >
        <Router basename={process.env.PUBLIC_URL}>
        <main>
            <Switch>
              <Route path="/" exact component={HomePage} />
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
                path="/edit/:id" 
                component={EditPage}
                />
                
                <Route 
                component={NotFoundPage} 
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
