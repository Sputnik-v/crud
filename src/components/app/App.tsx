import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Users from "../users/Users";
import './app.scss';


const App = () => {

    return (
        <div className="container">
            <Title/>
            <div className="container__main">
                <Header/>
                <Users/>
            </div>
            
        </div>
        
    )
}

export default App;