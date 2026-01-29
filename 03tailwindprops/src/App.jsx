import React  from 'react'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

const App = () => {
   
  let myobj={
    name:"Sahil Yadav Brand",
    title:"fjsdklfsdlsdflsflksgklsdflgjdflgjdfjkljgldfjgkldfjlgkjdflkgdfklg"
  }

    return (

      <>
       <Card  title="Sahil Yadav" someobj={myobj}/>
       <Card  title="Rao Sahab" someobj={myobj}/>
       </>
    );
};
export default App
