import React from 'react'
import './App.css';

import {Switch, Route, Link} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component"

// const HomePage = (props)=>{
//   console.log(props);

//   return (
//     <div>
//       <Link to="/topics">Topics Page</Link>
//       <button onClick={()=>props.history.push('/topics/23')}>23 topic</button>
//       <button onClick={()=> props.history.push("/topics/24")}> 24 topic</button>
//       <button onClick={()=> props.history.push("/topics/25")}>25 topic</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   )
// }

// const TopicsList = (props)=>{
//   console.log(props)
//   return (
//     <div>
//       <h1>TOPICS LIST PAGE</h1>
//     </div>
//   )
// }

// const TopicDetail = (props)=>{

//   console.log(props);
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
//     </div>
//   )
// }

const HatsPage = ()=>{
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  ) 
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} /> */}
        <Route path="/hats" component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
