import React, {Suspense} from 'react'
import './home.css';
import Navber from '../../Components/Navbar/Navber';
import Footer  from '../../Components/Footer/Footer';
import Navs from './Navs/Navs';
import SlideShow from './SlideShow/SlideShow';
import Categories from './Categories section/Categories';
import BestSelling from './best-selling/BestSelling';
import NewlyProducts from './newly-added/NewlyProducts';
import Offers from './Offers -and-discounts/Offers';
import  SpinnerLoading from '../../Components/spinner/SpinnerLoading';
import { useSelector } from 'react-redux';
export default function Home() {
    const {items,status}=useSelector(state=> state.products);
    return (
       
        <div>
        {status ==="pending" ?(<SpinnerLoading/>):
        (<>
           <Navber />
           <Navs />
           <SlideShow />
           <BestSelling 
           />
           <Categories />
          
           <NewlyProducts />
          
           <Offers  />
          
           <Footer /> 
          </>
       
        )}
        </div>
    )
}
