import React from 'react';
import {useParams,useLocation, useHistory} from 'react-router-dom';
//useParams hook to go to any subdomin or any specofic part of page


// const User=({match})=>{
//     return(
//         <h1>I am User {match.params.name} Page</h1>
//     )

// }



const User=()=>{
    const {name,lname}=useParams();      //name is written under {} bcz there can be multiple subdomains so we take it in object
    

    //for example if we want to show specific things on specific url
    const location=useLocation();       //useLocation hook


   const history=useHistory();  //useHistory hook->for instance if want to go back where we visited earlier
  //returns object


    return(
        <>
        <h1>I am User {name} {lname} Page</h1>  {/*//whatever user write after user/anything it comes inplace of variable name here  */}
        
        <p>My current Location is {location.pathname}</p>
        {location.pathname===`/user/user_main/user_sub` ? (
            // <button onClick={()=> alert(`you are awesome`)}>Click Me</button>     //if it is specific url then show a button otherwise not
                                                                  //i.e if u want to give button to any premium user or buyer of course
        
        
        <button onClick={()=>history.goBack()}>Click Me to Go Back</button> //prevoius button was only 4 showing useLocation
                                                                //this is to show use history as well going back prev visited pg
        
          //u can also use push for eg history.push('/') to go to main pg
        ):null}

        </>
    )
}

export default User;