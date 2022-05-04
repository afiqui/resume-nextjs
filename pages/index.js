import React from 'react'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Education from './../components/Education'
import Skills from './../components/Skills'

const index = ()=>  {

    return (
        <main>
            <Header />
            <About />
            <Experiences />
            <Education />
            <Skills />            
        </main>
    )
}

export default index;