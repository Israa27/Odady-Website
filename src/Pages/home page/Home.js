import React from 'react'
import './home.css';
import Navber from '../../Components/Navbar/Navber';
import Footer  from '../../Components/Footer/Footer';
import Navs from './Navs/Navs';
import SlideShow from './SlideShow/SlideShow';
import Categories from './Categories section/Categories';
import BestSelling from './best-selling/BestSelling';
import NewlyProducts from './newly-added/NewlyProducts';
import Offers from './Offers -and-discounts/Offers';
import {CartState} from '../../contexts/Cart/Context';
export default function Home() {
    const{
        state:{products},
}= CartState()
    console.log(products)
    return (
        <div>
           <Navber />
           <Navs />
           <SlideShow />
           <BestSelling props={products}
           />
           <Categories />
           <NewlyProducts props={products}/>
           <Offers  props={products}/>
          
           <Footer /> 
        </div>
    )
}
