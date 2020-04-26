import React from 'react';
import './App.css';
import {
    Switch,
    Route
} from "react-router-dom";

import Header from './components/header/header';
import Home from "./components/main/home/home";
import ProjectPage from "./components/main/projectPage/projectPage";

function App(props) {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home">
                    <Home state={props.state}/>
                </Route>
                <Route path="/about">
                    <ProjectPage/>
                </Route>
            </Switch>
        </div>
  );
}

export default App;
