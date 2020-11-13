import React, { Component, useState } from 'react';
import {
  HashRouter  as Router,
  Route,
  Switch} from 'react-router-dom';
import ReactGa from 'react-ga';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import QaContext from './context/qa';
import './App.css';
import PlayHome from './pages/PlayHome';
import PlayPage from './pages/PlayPage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';


let questionsObj = {};
if(localStorage.getItem("fc-sets")){
  questionsObj = JSON.parse(localStorage.getItem("fc-sets"))
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
  getCount = (set) => {
    return questionsObj[set].length;
  };
  addQuestionAnswer = (set, q,a) =>{
    questionsObj[set].push({ q , a})
    updateDB("fc-sets", questionsObj);
  };
  getQuestionsAnswers = (set) => {
    return questionsObj[set];
  };
  setIndex = (index = 0) => {
   // console.log(index)
    return(index)};
  createSet = (set) => {
    questionsObj[set]=[]
    updateDB("fc-sets", questionsObj);
  };
  getSets = () =>{
    return Object.keys(questionsObj);
  }
  getAQuestion = (set, id) => {
    return questionsObj[set][id];
  };
  editQuestion = (set, id,q,a) =>{
    questionsObj[set][id] = { q , a};
    updateDB("fc-sets", questionsObj);
  }
  deleteQuestion = (set, id) => {
    questionsObj[set].splice(id,1);
    updateDB("fc-sets", questionsObj);
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
          setIndex: this.setIndex,
          createSet: this.createSet,
          getSets: this.getSets,
          getAQuestion: this.getAQuestion,
          editQuestion: this.editQuestion,
          deleteQuestion: this.deleteQuestion
        }}
      >
        
        <Router >
        <header className="App-header">
            <NavBar count={1} />
        </header>
        <main>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route 
                path="/add-question" 
                //component={AddPage}
                render={(props) => <AddPage {...props} keys={this.getSets}/>}                
                />
                <Route 
                path="/play"
                component={PlayHome}
                exact
                //render={(props) => <AddPage {...props} InUp="in"/>}
                />
                <Route 
                path="/play/:set"
                component={PlayPage}
                //render={(props) => <AddPage {...props} InUp="in"/>}
                />
                <Route 
                path="/edit/:set/:id" 
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
