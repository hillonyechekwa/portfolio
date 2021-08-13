import React from "react"
import Avatar from '../components/avatar'
import '../styles/index.scss'
import Nav from '../components/nav';
import Button from '../components/button'
import Card from '../components/card';


const Home = () => {
  return (
    <>
      <Nav />
      <header>
        <Avatar />
        <hgroup>
          <h2 className="title">Hill Onyechekwa</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam iusto in quia aspernatur quaerat odio adipisci molestiae atque, porro rem doloremque consectetur suscipit libero blanditiis a minus velit assumenda?</h3>
        </hgroup>
      </header>
      <section className="projects">
        <div>
          <h2 className="title">Projects</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, assumenda incidunt. Dolores libero quidem unde ad excepturi ex id officiis non recusandae porro nisi, sapiente incidunt, nihil quis sit, rem perferendis ea delectus commodi fugit tempora. Ex tempore magni facere.</p>
        </div>
        <Button name="see projects" type="secondary projects-button" dest="./projects"/>
      </section>
      <section className="writing">
        <h2 className="title">Writing</h2>
        <div className="card-wrapper">
          <Card title="blogtitle1" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, libero!" addclass="blog-card bc1" />
          <Card title="blogtitle2" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, libero!" addclass="blog-card bc2" />
          <Card title="blogtitle3" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, libero!" addclass="blog-card bc3" />
        </div>
        <a href="https://aheadfullofcode.com" className="outlink">Visit Blog</a>
      </section>
      <section className="community">
        <h2 className="title">Community and Teaching</h2>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem explicabo hic asperiores? Ut voluptatibus ipsum reiciendis maxime porro totam, autem quas, quidem, quae ab possimus? Dolorem necessitatibus adipisci a tempore non. Nisi enim dolores laborum modi, distinctio ratione ad esse porro assumenda saepe voluptatum ipsam, natus quod. Non, minus?</p>
        <a href="https://instagram.com/successorgenerationcommunity" className="outlink">see our works</a>
        </div>
      </section> 
    </>
  )
}



export default Home