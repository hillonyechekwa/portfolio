import React from "react"
import Avatar from '../components/avatar'
import '../styles/index.scss'
import Button from '../components/button'
import Card from '../components/card';


const Home = () => {
  return (
    <>
      <header>
        <Avatar />
        <hgroup>
          <h2>Hill Onyechekwa</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam iusto in quia aspernatur quaerat odio adipisci molestiae atque, porro rem doloremque consectetur suscipit libero blanditiis a minus velit assumenda?</h3>
        </hgroup>
      </header>
      <section className="projects">
        <div>
          <h2>Projects</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, assumenda incidunt. Dolores libero quidem unde ad excepturi ex id officiis non recusandae porro nisi, sapiente incidunt, nihil quis sit, rem perferendis ea delectus commodi fugit tempora. Ex tempore magni facere.</p>
        </div>
        <Button type="primary projects-button" name="see projects"></Button>
      </section>
      <section className="writing">
        <h2>Writing</h2>
        <div className="card-wrapper">
          <Card title="blogtitle1" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, libero!" addclass="blog-card bc1"/>
          <Card title="blogtitle2" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, libero!" addclass="blog-card bc2"/>
          <Card title="blogtitle3" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, libero!" addclass="blog-card bc3"/>
        </div>
          <Button type="secondary writn-btn" name="visit my blog" />
      </section>
    </>
  )
}



export default Home