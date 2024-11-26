import React from 'react';
import './App'
import Navbar from './components/Navbar';



function  TodoList() {

  const [result, setResult] = React.useState("");

  //function for Adding text
 
  const  Addtext = () => {

    const text = document.getElementById("text");
    setResult(result + text);
    };

  //function for Clear-all text

    const Clear = () => {
      setResult("");
      };

      //function for  deleting one  letter from text

      const Delete = () => {
        setResult(result.slice(0, -1));
        };


        return (
          <>
          <div className="App">
            <Navbar/>
            <div className="container">
                <textarea className='textArea' id="text" rows="10" cols="30" ></textarea> 
                <button onClick={Addtext}>Add</button>
                <button onClick={Delete}>Delete</button>
                <button onClick={Clear}>Clear</button>
            <div className="result">
                <h2>Todo List:{Addtext}</h2>
                <p>{result}</p>
            </div>
            </div>
          </div>
            </>
        )};

        export default TodoList;
