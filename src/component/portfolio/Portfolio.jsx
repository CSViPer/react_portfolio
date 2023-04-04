import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THIS ANONYMOUSLY
const data = [
  {
      id: 1,
      image: IMG1,
      title: 'Restaurant Management Application',
      github: 'https://github.com/CSViPer/Responsive-Travel-Website.github.io',
      demo: 'https://dribbble.com/shots/19491530-Restaurant-Management-Dashboard-App'
  },
  {
      id: 2,
      image: IMG2,
      title: 'TODO-list-app-node-js-mini-project',
      github: 'https://github.com/CSViPer/TODO-list-app-node-js-mini-project',
      demo: 'https://dribbble.com/shots/20127375-ToDo-List'
  },
  {
      id: 3,
      image: IMG3,
      title: 'Interactive Music Player Application',
      github: 'https://github.com/CSViPer/MUSICPLAYER',
      demo: 'https://dribbble.com/shots/9338617-Simple-Music-Player'
  },
  {
      id: 4,
      image: IMG4,
      title: 'PingPong Game',
      github: 'https://github.com/CSViPer/PINGPONG',
      demo: 'https://dribbble.com/shots/20928167-SHOT-Packaging-design-for-tennis-equipment'
  },
  {
      id: 5,
      image: IMG5,
      title: 'Hospital Management System',
      github: 'https://github.com/CSViPer/HMS',
      demo: 'https://dribbble.com/shots/17090181-Medical-Management-System-Apps-Landing-Page'
  },
  {
      id: 6,
      image: IMG6,
      title: 'Personal Portfolio Website Demo',
      github: 'https://github.com/CSViPer/CSViPer.github.io',
      demo: 'https://dribbble.com/shots/18260583-Fisma-Creative-Agency-Landing-Page-Animation'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio