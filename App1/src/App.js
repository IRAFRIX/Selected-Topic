import React, {useState} from 'react'
import { Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'
//import {Calculator} from './calculator'
//import { Calculator2 } from './calculator2'
//import {Table} from './event-data'
//import RefsClass from './refs-class'
//import RefsFunc from './refs-func'
//import RefsArray from './refs-array'
//import Cart from './state-class'
//import MessageBox from './state-func'
//import Header from './context-header'
//import Content from './context-content'
import { userContext } from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'



function App() {
    const divStyle={
        color:'white',
        backgroundColor:'powderblue',
        fontSize:'larger',
        padding:'3px',
    }
    const [user, setUser] = useState(null);
    return ( 
        <>
            <Banner/>
            <userContext.Provider value={[user, setUser]}>
            <Header2/>
            <Content2/>
            </userContext.Provider>
            <p><center><Calendar/></center></p>
            <h3 style={divStyle}> Hello Na World 
                <br/> สวัสดีนะจ๊ะ 
            </h3>
            <Footer/>
        </>
    );
    
}

export default App;
