import React, {Suspense} from 'react'
import './home.css';
import Navs from './Navs/Navs';
import SlideShow from './SlideShow/SlideShow';
import Categories from './Categories section/Categories';
import BestSelling from './best-selling/BestSelling';
import NewlyProducts from './newly-added/NewlyProducts';
import Offers from './Offers -and-discounts/Offers';



export default function Home() {
    
   
    return (
        
        <div>
        
          
           <Navs />
           <SlideShow />
           <BestSelling 
           />
           <Categories />
          
           <NewlyProducts />
          
           <Offers  />
          
          
         
       
        
        </div>
    )
}
