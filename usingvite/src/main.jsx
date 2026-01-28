import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Myapp(){
    return (
        <>
        <h2>sim sim</h2>
        </>
    )
}
 
const reactelement= {
    type:'a',
    props:{
        href:'https://google.com',         
        target:'_blank'
    },

    children: 'click me to visit google'
}


// react predefined method

const username="sahil yadaav"

const reactele= React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},  //you can leave it empty
    'click me to visit google',
    username
)

const secondelement= <a href="https://google.com" target='_blank'>click me</a>
createRoot(document.getElementById('root')).render(
 
    // <Myapp/>
    // Myapp=()   you can also use it like function call

    // reactelement    => cant use because you dont know how react define keys

    // secondelement    //convert in react key format object

      reactele

    // <App/>
)
