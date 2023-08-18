import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'


function App() {
    const divStyle={
        color:'white',
        backgroundColor:'powderblue',
        fontSize:'larger',
        padding:'3px',
    }
    return ( 
        <>
            <Banner/>
            <Header/>
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
