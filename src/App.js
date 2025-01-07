import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentLibrary from './components/ComponentLibrary'
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Testimonial from "./components/Testimonial"

export default function App() {
  return (
    <>
      <ComponentLibrary>

        <h1>Badges</h1>
        <section className="badge-section">
          <Badge>Badge</Badge>
          <Badge color="red">Badge</Badge>
          <Badge color="yellow">Badge</Badge>
          <Badge color="green">Badge</Badge>
          <Badge color="blue">Badge</Badge>
          <Badge color="indigo">Badge</Badge>
          <Badge color="purple">Badge</Badge>
          <Badge color="pink">Badge</Badge>
        </section>
        <section className="badge-section">
          <Badge shape="pill">Badge</Badge>
          <Badge shape="pill" color="red">Badge</Badge>
          <Badge shape="pill" color="yellow">Badge</Badge>
          <Badge shape="pill" color="green">Badge</Badge>
          <Badge shape="pill" color="blue">Badge</Badge>
          <Badge shape="pill" color="indigo">Badge</Badge>
          <Badge shape="pill" color="purple">Badge</Badge>
          <Badge shape="pill" color="pink">Badge</Badge>
        </section>

        <h1>Banners</h1>
        <section className="banner-section">
          <Banner status="success" title="Congratulations!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
          <Banner status="warning" title="Attention">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
          <Banner status="error" title="There is a problem with your application">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
          <Banner status="neutral" title="Update available">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
          <br />
          <Banner status="success" title="Congratulations!" ></Banner>
          <Banner status="warning" title="Attention"></Banner>
          <Banner status="error" title="There is a problem with your application"></Banner>
          <Banner status="neutral" title="Update available"></Banner>
        </section>

      </ComponentLibrary>

      <h1>Cards</h1>
      <section className="card-section">
        <Card title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        <Card icon={<FontAwesomeIcon icon={faHouse} />} iconColor="black" title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
      </section>

      <h1>Testimonials</h1>
      <section className="testimonial-section">
        <Testimonial image="./images/testimonial-speaker.jpeg" speaker="May Andersons" location="Workcation, CTO">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>
        <Testimonial speaker="May Andersons" location="Workcation, CTO">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."</Testimonial>
      </section>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);