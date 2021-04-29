import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Services from './Services';
import Forum from './Forum';
import User from './User';


const App=()=>{


    const Name=()=>{
      return <h1>Hello I am Name</h1>
    };

  return (
  <>
  <Menu/>
 <Switch>
   
   <Route exact path='/' component={About}/>   {/*//we give here what is our home/index pg */}
   <Route exact path='/contact' component={Contact} /> {/*  in path u can type anything which is likely to be typed by user but in component u have to give correct name */}
   <Route path='/contact/Name' component={Name}/>

   
   
   
   <Route exact path='/service' component={()=><Services name='Services'/>} />  
   <Route exact path='/forum' render={()=><Forum name='forum'/>} />  
   {/* //passing props to services ,actually showing difference between render and component while Routing
   //there is no difference in performance
   //just when component is used,it always recreate/renew that component
   //while render doesnot recreate insted update if any thing changes their on call,
   //so when we don't pass props beeter to use component
   //while we use props then better is render */}

   



<Route exact path='/user/:name/:lname' component={User}/>



   
   
   <Route component={Error}/> 
   {/* ^^ if user goes to url which doesn't exist */}
  

 
 </Switch>  {/* //if switch is not written then just as it takes / from user it will show all pages with / means here it will show both about and contact */}
  </>         //but by only writing switch tho it won't show both but by writing / it will always show about
              //so we use exact ,now about will only show as homepg while contact independently
  );
}


export default App;
