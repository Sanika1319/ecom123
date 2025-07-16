import { useRef, useState } from "react";

function About(){

  const[username ,setUsername] =useState('');

  // const username = useRef();
     const onhandlesubmit = (event) =>{
        event.preventDefault();
        // console.log(username); //object of input 
        // console.log(username.current.value) //data
        console.log(username);
      }
       const onhandlechange = (event) => {
    setUsername(event.target.value);
  };
    
    return(<>
    

        <div className="about-container">
      <h2>About Us Page</h2>
      <form onSubmit={onhandlesubmit} className="about-form">
        {/* <input
          ref={username}
          placeholder="Enter Here"
          className="form-input"
        /> */}
        <input
         
          value={username}
          onChange={onhandlechange}
          className="form-input"
          placeholder="Enter your name"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    </>)
}
export default About;