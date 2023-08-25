import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'
import {Calculator} from './calculator'
import { Calculator2 } from './calculator2'
import {Table} from './event-data'
import RefsClass from './refs-class'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'


function App() {
    const divStyle={
        color:'white',
        backgroundColor:'powderblue',
        fontSize:'larger',
        padding:'3px',
    }
    return ( 
        <>
            <Header/>
            <Banner/>
            <RefsClass/>
            <RefsFunc/>
            <RefsArray/>
            <p><center><Calendar/></center></p>
            <Content/>
            <h3 style={divStyle}> Hello Na World 
                <br/> สวัสดีนะจ๊ะ 
            </h3>
            <Footer/>
        </>
    );
    
}

export default App;
