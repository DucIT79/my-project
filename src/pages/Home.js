import React ,{ useEffect }from 'react'
import { ProductList } from '../components/Product/ProductList'
import { Banner } from '../components/Layout/Banner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'reactstrap';


export const Home = () => {
   useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,     
        });
    }, []);

  return (
    <div id="home">
      <Banner />
      <Container>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
           <ProductList />
      </div>
     </Container>
    </div>
  )
}
