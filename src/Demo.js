// component-------------------->>functional/class
// functional: jyade modify nhi krna hai ya state k sath nhi khelna hai to functional component ka use krenge
// class: ye bhut power deta like kuchh update krna hai to class component ka use krenge


// note:>>>>. class component ko functional component me change kr sakte hai

import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './Demo.css'

const Demo =({name} )=>{
    
        return <div className = "maindiv_style"> 
<h1>hi demo {name}</h1>
        <p>welcome</p>
        </div>
    }



export default Demo