//dependencies
import { useStateValue } from "../store/StateProvider"
import {Star} from './index'
import {MyBtn, Box} from 'my-library-core'

const CheckoutCard = ({ id, title, image, price, rating, numberItems }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <Box
      grid
      rounded
      center
      className="cardEffect"
      myStyle={{
        bg: '#fff', c: '#292929', p: '1rem',
        //-------
        '.image': {mxH:'200px',w: '60%', objectFit:'contain'},
        '.price':{m: '10px', c: '#888888'},
        //-------
      }}
    >
      <img src={image} className="image" />


      <Box Flex flowColumn x="space-around" myStyle={{h: '100%'}} >
        <header>
          <h2>{title}</h2>
          <p className="price"><small>$</small>{price}</p>
          <Box flex>
            {Array(rating).fill().map((_, i) => (<Star />))}
          </Box>
        </header>

        <Box flex y="center" x="space-between" myStyle={{m: '0'}}>
          <p>{numberItems}</p>
  
            <MyBtn
              primary 
              ripple
              rounded 
              type="danger" 
              myStyle={{m: '0px', mR:'5px'}}  
              onClick={removeFromBasket}
              raisedColor
            >Delete</MyBtn>

        
        </Box>
      </Box> 

    </Box>
  );
};

export default CheckoutCard;
