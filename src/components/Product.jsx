import React from "react";
//dependencies
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { useStateValue } from "../store/StateProvider";
import {Box}  from "my-library-core";

//styled components
const Info = styled.div`
  margin-bottom: 15px;
  text-align: left;
  padding: 1rem;
`;
const Price = styled.p`
  margin-top: 5px;
  color: #888888;
`;

const Img = styled.img`
  max-height: 250px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
  border-radius: 3px;
`;

const Product = ({ id, title, image, price, rating }) => {
  const [{ currentProduct }, dispatch] = useStateValue();

  const setCurrent = () => {
    dispatch({
      type: "SET_CURRENT_PRODUCT",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <Link onClick={()=>setCurrent()} to="/product-view" >
      <Box
        flex
        wrap
        flowColumn 
        rounded
        center
        className="cardEffect"
         
        myStyle={{
          bg: '#fff', textDecoration: 'none', h: '100%', c: '#444444'
          
        }}
      >
        <Img src={image} />
        <Info>
          <p>{title}</p>
          <Price><small>$</small>{price}</Price>
        </Info>
      </Box>
      </Link>

  );
};

export default Product;
