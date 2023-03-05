import React from 'react'
import '../style/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/serviceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero___content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'know Before You Go'} />
                            <img src={worldImg} alt=""/>
                        </div>
                        <h1>
                            Traveling opens the door to creating{" "}
                            <span className='highlight'> memories</span>
                        </h1>
                        <p>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita ex blanditiis id aut similique. Quas possimus sequi asperiores quis perferendis molestiae, reiciendis accusamus ipsum sunt, nostrum labore totam. Rerum! 
                        </p>
                    </div>
                </Col>
                <Col lg="2">
                <div className="hero__img-box">
                    <img src={heroImg} alt=''/>
                </div>
                </Col>
                <Col lg="2">
                <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt='' controls autoPlay/>
                </div>
                </Col>
                <Col lg="2">
                <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt=''/>
                </div>
                </Col>
                
                <SearchBar />

            </Row>
        </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg="3">
                   <h5 className="services__subtitle">What we serve</h5>
                   <h2 className="serviced__title">we offer our best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>


    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className='featured tour-title'>
                        Our featured tours
                    </h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>


    <section>
        <Container>
            <Row>
                <Col>
                    <div className="experience__content">
                        <Subtitle subtitle={"Experience"}/>

                        <h2>
                            With our all experience <br /> we will serve you
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <br />
                            Quas aliquam, hic tempora inventore suscipit unde.
                        </p>
                    </div>

                    <div className="counter_wrapper d-flex align-items-center gap-5">
                       <div className="counter__box">
                          <span> 12k+</span>
                          <h6>Successful trip</h6>
                       </div>
                       <div className="counter__box">
                          <span> 2k+</span>
                          <h6>Regular clients</h6>
                       </div>
                       <div className="counter__box">
                          <span> 15</span>
                          <h6>Years experience</h6>
                       </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='experience__img'>
                        <img src={experienceImg} alt=''/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                   <Subtitle subtitle={'Callery'}/>
                   <h2 className='gallery__title'>Visit our customers tour gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                   <Subtitle subtitle={'Fans Love'}/>
                   <h2 className='testimonil__title'>What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials />
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter />
  </>
}

export default Home