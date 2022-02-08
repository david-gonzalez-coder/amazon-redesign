import React from "react";
//dependencies
import CurrencyFormat from "react-currency-format";
import {MyBtn, Box} from "my-library-core"
//redux
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from "../store/reducer";



const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Box 
      flex
      rounded
      flexColumn
      span="1/-1"
      myStyle={{
         w: '100%', h: '150px', p: '20px',
        bg: '#f3f3f3', pt: 'sticky', bm: '0px',
        '@media (max-width: 600px)':{
          mBm: '80px'
        }
      }}
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <Box flex y="center" myStyle={{'input': {mR: '5px'}}}>
              <input type="checkbox" /> This order contain a gift
            </Box>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <MyBtn primary myStyle={{m: '0'}}>Proceed to checkout </MyBtn>
    </Box>
  );
};
export default Subtotal;
