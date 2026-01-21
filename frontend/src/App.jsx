// App.jsx
function JobGoal(){
  return(
    <h2>Hi Lochiii</h2>
  )
}
// 1. We create a function (The Component)
function App() {
  // 2. We return what looks like HTML (This is called JSX)
  return (
    <div>
      <h1>Hello Lochii!</h1>
       
      <p>This is my first step toward the LSEG developer job.</p>
    
     <JobGoal />
    </div>
   
    
  );
}

// 3. We export it so other files can use it
export default App;