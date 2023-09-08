import React from 'react'
import {………………………………….} from './context'
export default class ……………… extends React.Component {
static contextType = userContext
render() {
let [user, setUser] = ………………………………………………..
react/app1/src/context-header2.js
const headerStyle = {
backgroundColor:'#cee',
textAlign:'center',
padding: 5
}
const onClickSignout = (event) => {
event.preventDefault()
setUser('')
}
const onClickSignin = (event) => {
    event.preventDefault()
    setUser('……………………………')
    }
    return (
    <div style={…………………………………………}>
    <a href=" ">Home</a>&nbsp;-&nbsp;
    <a href=" ">Product</a>&nbsp;-&nbsp;
    <a href=" ">Contact Us</a>&nbsp;-&nbsp;&nbsp;
    react/app1/src/context-header2.js (ต่อ)
    {
    (user)
    ? <span>[{user}&nbsp;:&nbsp;<a href=" "
    onClick={……………………….}>Signout</a>]</span>
    : <span>[<a href=" " onClick={……………………………}>
    Signin</a>]</span>
    }
    </div>
    )
    }
    }