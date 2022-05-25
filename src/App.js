import React from 'react';

const PersonalData = (props) => {
    return(
        <>
            <h1>First Name: {props.firstname}</h1>
            <h1>Last Name: {props.lastname}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Hobby: {props.hobby}</h2>
        </>
        
    );
}

const App = () => {
    return (  
        <div>
            <h1>Hello Testing React 1 2 3</h1>
            <PersonalData firstname = 'khant' lastname='wai yan' age='21' hobby='chess'/>
        </div>
    );
}

export default App;