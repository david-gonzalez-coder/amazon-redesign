import React from "react";
import { Subtotal, CheckoutCard, Layout, GoToTop } from "../components";
import { useStateValue } from "../store/StateProvider";
import {Box as Wrapper, Box as Products, Box} from "my-library-core";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
      <Layout >
        <Box></Box>
        <Box grid myStyle={{ mxW: '1200px'}} >
        <h2>Your shopping basket</h2>
          <Products 
             y="stretch"
             span="1 / -1"
             p="1rem"
             gap="5px"
             cols="repeat(auto-fill, minmax(450px, 1fr))" 
          >  
            {basket.map((item) => (
              <CheckoutCard
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                numberItems={item.numberItems}
              />
            ))}
  
        </Products>
        {basket.length !== 0 && <Subtotal />}
        </Box>
        <GoToTop />
      </Layout>


  );
};
export default Checkout;
