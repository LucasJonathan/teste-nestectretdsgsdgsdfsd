import React, { useState, useEffect } from "react";
import Tarefas from "./components/Tarefas";

const Home = () => {

    return (<>
        <div className="App">
            <Tarefas titulo="To-Do" />
        </div>
    </>)
}

export default Home;