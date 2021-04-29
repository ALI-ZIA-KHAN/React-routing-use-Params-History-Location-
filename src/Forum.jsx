import React from 'react';
import {useEffect} from 'react';

const Forum=(props)=>{
  useEffect(()=>{
      document.addEventListener("click",handleClick);
                              //these events were not taught just wriiten by thapa

      return function cleanup(){
          document.removeEventListener('click',handleClick);
      }
  })

  function handleClick(){
      console.log('Hi I am Forum Effect ')
  }




    return <h1>Hello I am  Forum Page</h1>
};

export default Forum;