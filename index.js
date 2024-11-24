import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from '..//src/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('TodoList'));
root.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
     document.getElementById('TodoList')
);



