import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="Jun - Dec 2019" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Pucminas</h4>
                        <p>
                            <i className="position">Internship of supporting team</i><br/>
                            Maintenance of <b>computers</b> and <b>networks</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Jan 2020 - current" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Muserver.club</h4>
                        <p>
                            <i className="position">Software Developer for games (owner)</i><br/>
                            Develope many products and softwares for games<br/>
                            using <b>NodeJS</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="April 2021 - current" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Wiser Educação</h4>
                        <p>
                            <i className="position">Node.js Backend Developer</i><br/>
                            Develop new features and mainteneces on APIs from<br/>
                            <b>Wiseup Online</b> and <b>Wiseup LIVE</b>
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}