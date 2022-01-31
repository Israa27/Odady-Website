import React from 'react'
import './card.css';
import { Card} from 'react-bootstrap';
import { CartState } from '../../contexts/Cart/Context';
import cardimg from '../../Assets/images/cardimg.png'
export default function ProductCard({products,name,image, price}) {
  const{
    state:{cart},
    dispatch,
  }=CartState();
    return (
       
          <Card className='card'>
            <button className='card-btn'><i class="far fa-heart"></i></button>
            <Card.Img variant="top" src={image} alt='' />
            <Card.Body>
            <Card.Title className="card-span">{name}</Card.Title>
            <Card.Text className="card-span1">
                    {price}
            </Card.Text>
             <button className='card-add-to-btn' onClick={()=>{dispatch({
               type:"ADD-TO-CART",
               payload:products
             })}}>اضف الى السلة</button>
            </Card.Body>
          </Card>
        

        

  
    )
}
