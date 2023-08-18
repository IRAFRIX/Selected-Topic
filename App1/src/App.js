import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'
import {Calculator} from './calculator'
import { Calculator2 } from './calculator2'
import {Table} from './event-data'

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
            <Table/>
            <p><center><Calendar/></center></p>
            <Content/>
            <h3 style={divStyle}> Hello Na World 
                <br/> สวัสดีนะจ๊ะ 
            </h3>
            <Calculator/>
            <Calculator2/>
            <Footer/>
        </>
    );
    
}

export default App;
