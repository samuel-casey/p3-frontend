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
        <section className ='custom-container'>
        <div className='pairs'>
        <div id ='Sam' className='us'>content here<span className='abouts'>about sam</span><div className='pics'><img src='https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'/> s</div></div>
        //for sepertion
        <div id ='Jaime' className='us'><div className='pics'><img src='https://images.unsplash.com/photo-1501673618753-48ce9418287b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'/></div><span className='abouts'>about jaime</span>content here</div>
        </div>
        <br/>
        <div className ='pairs'>
        <div id ='Kim' className='us'>content here<span className='abouts'>about kim</span><div className='pics'><img src='https://images.unsplash.com/photo-1586490915014-b2490ffd4727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'/></div> </div>
        //may have to base examples off mine once images added
        <div id ='Q' className='us'><div className='pics'><img src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'/></div><span className ='abouts'>about Q</span>content here</div>
        </div>
        <div className ='quote'>"Quote of the Day"</div>
        </section>
        </>

    )
}