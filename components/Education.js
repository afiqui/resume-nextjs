import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                <Item 
                        time="2021 - current (B.Sc.)" 
                        name="Universidade Positivo (UP)"
                        major="Software Engineering"
                        //gpa="3.82"
                        color="blue"
                    />
                    <Item 
                        time="2019 - 2020 (B.Sc.)" 
                        name="Pucminas University (PUC)"
                        major="Software Engineering"
                        //gpa="3.82"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2012 - 2017 (High School)"
                        name="Colégio Santo Agostinho"
                        //gpa="3.49"
                        color="red"
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}