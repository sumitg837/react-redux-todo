import React from 'react';
import Title from '../containers/title'
import AddTask from '../containers/addTask'
import Board from '../components/board'
import '../../public/app.css'

const App = () =>(
    <div>
        <Title />
        <AddTask />
        <Board />
    </div>
);

export default App