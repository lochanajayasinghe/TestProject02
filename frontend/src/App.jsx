// // App.jsx
// function JobGoal(){
//   return(
//     <h2>Hi Lochiii</h2>
//   )
// }
// // 1. We create a function (The Component)
// function App() {
//   // 2. We return what looks like HTML (This is called JSX)
//   return (
//     <div>
//       <h1>Hello Lochii!</h1>
       
//       <p>This is my first step toward the LSEG developer job.</p>
    
//      <JobGoal />
//     </div>
   
    
//   );
// }

// // 3. We export it so other files can use it
// export default App;


// 1. We MUST import 'useState' to give the component memory
import { useState } from 'react'
import './App.css' // (Keep this if you have basic styles)

function App() {
  // 2. This is the "Hook". 
  // 'hours' is the current value (starts at 0).
  // 'setHours' is the magic button to change it.
  const [hours, setHours] = useState(0);

  function addHour() {
    // We never say hours = hours + 1. That is illegal in React!
    // We use the setter function:
    setHours(hours + 1);
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>LSEG Prep Tracker</h1>
      
      {/* 3. We display the state variable here */}
      <h2>Hours Studied: {addHour}</h2>

      {/* 4. When clicked, it runs our function */}
      <button onClick={addHour}>
        I studied 1 hour
      </button>

        {/* Challenge: Can you make this button work? */}
      <button onClick={() => setHours(0)} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default App;