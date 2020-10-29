import React from 'react'
import './About.scss'

export default function About() {

    return(
        <>
        <h1>About</h1>
        <div id ='intro'>Welcome to the *insert name here* App. Constructed by yours truly
        With our App our goal is to bring a better sense of self through motivation,
        goal structure,and help improving organisational skills.</div>
        
        <br/>
        <div className='section'>section</div>
        <div id ='Sam' className='us'>about sam<div className='pics'></div></div>
        <br/>
        <div id ='Jaime' className='us'><div className='pics'></div>about jaime</div>
        <br/>
        <div id ='Kim' className='us'>about kim<div className='pics'></div></div>
        <br/>
        <div id ='Q' className='us'><div className='pics'><img src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'/></div>about Q</div>
        </>
       
    )
}