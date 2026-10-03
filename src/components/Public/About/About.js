import React from 'react'
import PublicHeader from '../PublicHeader'
import PublicFooter from '../PublicFooter'
import './About.css';
import AnimatedRoutes from '../../../features/animated/AnimatedRoutes';

const About = () => {
  return (
    <>
        <PublicHeader />
        <div className='about-me-container'>
            <AnimatedRoutes>
            <div className='about-body'>
                <h1>About me</h1>
                <div className='about-me-paragraphs'>
                    <p>
                        Hello, my name is Jeremiah 'Jamey' Sheehy, a software developer from California and a lifelong computer geek. I graduated with a Bachelor's Degree in Computer Science from Cal-State, Northridge and I'm currently expanding my portfolio while continually working to grow my technical skills and experience. I first got into programming because I wanted to make video games that little-me wanted to play, but somewhere along the way I fell in love with the systems behind the scenes, as well as the accomplishment you feel building something of your own.<br/><br/>

                        Most of my experience is in backend API development, as I have done that with my own websites and in team projects for school and for fun. Systems and structure are particularly what I enjoy working on the most. I have used many different frameworks and tools for different backend projects like Node, Spring, and Android Studio, while also using AWS for most of hosting and database needs. I have a strong background in Java and plan to continue to build anything that I am interested in at that moment in time.<br/><br/>

                        Outside of the more <i>professional</i> development, I enjoy working on complex systems like my custom compiler project or my hobby of game development. GameDev is where I can merge my love of art (even though I can't draw anything) with my love of programming. I also dabble in homelabbing as it's both fun and convinient to have your own personal cloud and scripts to auto backup your data.<br/><br/>

                        All of the code for the projects featured on this website, including the website itself, is available on my <a href="https://github.com/jameys127" target="_blank" rel="noopener noreferrer">GitHub</a> page.
                    </p>
                </div>
            </div>
            </AnimatedRoutes>
        </div>
        <PublicFooter />
    </>
  )
}

export default About

/*

Hello, my name is Jeremiah 'Jamey' Sheehy, a software developer from California and a lifelong computer geek. I hold a Bachelor's in Computer Science, and my curiosity for how things work, whether that's in code, entire systems, or video games, is what keeps me learning and building new projects just for the fun of it. I first got into programming because I wanted to make the video games I wanted to play, but somewhere along the way I fell in love with the systems behind the scenes, and I've never looked back.<br/><br/>

I'm most at home on the backend, where I get to focus on the logic, structure, and design that make an application work: APIs, databases, and the architecture tying them together. I enjoy picking up new languages and frameworks, and every project teaches me something different. For me, the best way to learn something is to build something with it.<br/><br/>

Outside of the more <i>professional</i> side of development, I love digging into complex systems, like building compilers, and tinkering with game development. GameDev is where I get to merge my love of art (even though I can't draw anything) with my love of programming, channeling my fascination with fantasy settings and worldbuilding into designing game mechanics. It's challenging, but always rewarding!<br/><br/>

All of the code for the projects featured on this website, including the website itself, is available on my <a href="https://github.com/jameys127" target="_blank" rel="noopener noreferrer">GitHub</a> page.

*/