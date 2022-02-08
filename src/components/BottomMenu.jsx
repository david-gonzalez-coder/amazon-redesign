//---------------IMPORTS----------------
import React, {useState} from "react";
//dependencies
  import styled from "styled-components";
  import { Link } from "react-router-dom";
//icons
  import {AiOutlineMenu} from 'react-icons/ai'
  import {BsPerson,  BsSearch} from 'react-icons/bs'
  import {BiCart, BiUser} from 'react-icons/bi'
  import {GoLocation} from 'react-icons/go'
  import {VscGlobe} from 'react-icons/vsc'
  import {RiLayoutGridFill} from 'react-icons/ri'
  import {MdAccountCircle} from 'react-icons/md'
  
//redux
  import { useStateValue } from "../store/StateProvider";
//firebase
  // import { auth } from "../firebase";
  import {Customizer} from 'my-library-core'
  import amazonLogo from '../assests/amazonLogo.png'
//--------------END_IMPORTS--------------



//------------STYLED-COMPONENTS-----------
const Container = styled.div`
  ${({menuState})=>Customizer({
    tt: '.3s', w: '100%' , p: '10px', d: 'flex',  
    bg: '#fff', m: '0px', pt: 'fixed', bm: '0',l: '0', z: '10',
    jc: 'space-between', anItems: 'center',
    '.centralNav':{
      d: 'flex', fxDit: menuState ? 'column' : 'row',tt: '.3s' 
    }
  })}
  @media (min-width: 600px){
    display: none;
  }
`;
const LogoImg = styled.img`
  width: 60px;
`;
const Counter = styled.span`
  color: #707070;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 5px;
`;

const StyledLink = styled(Link)`
  color: #727272;
  display: flex;
  text-decoration: none;
  align-items: center;
`
const style = {fontSize: "1.5em", margin: '15px 10px 15px 0', color:'#727272' }

//----------END_STYLED-COMPONENTS-----------



//---------------COMPONENT---------------
const BottomMenu = () => {
 //code
 
  const [menuState, setMenuState] = useState(false) //open or close
  const [{ basket, user, loginContent }, dispatch] = useStateValue();

  const setLoginContent = (content) => {
    dispatch({
      type: "SET_LOGIN_CONTENT",
      loginContent: content
    });
  };
  
  // const handleAuthentication = () => {
  //   if (user) {
  //     auth.signOut();
  //   }else{
  //     setLoginContent('SignInForm')
  //   }
  // };
 //end_code

 //render
  return (
    <>

    <Container menuState={menuState}>
      <Link to="/">
        <LogoImg src={amazonLogo} />
      </Link>
      <nav className="centralNav">
        <StyledLink to="/search" >
          <BsSearch style={style}/>{menuState && <p>Search</p>}
        </StyledLink>
        <StyledLink to="/departments">
          <RiLayoutGridFill style={style}/>{menuState && <p>Deparments</p>}
        </StyledLink>
        <StyledLink to="/checkout">
          <BiCart style={style}/> 
          {!menuState && <Counter>{basket?.length}</Counter> }
          {menuState && <p>Basket</p>}
        </StyledLink>
        {menuState && <StyledLink to="#"> <GoLocation style={style}/> <p>Send to <b>mexico</b></p></StyledLink>}
        {menuState && <StyledLink to="#"> <VscGlobe style={style}/> <p>location</p></StyledLink>}
        {menuState && (<StyledLink /*onClick={handleAuthentication}*/ onClick={()=> setLoginContent('SignInForm')} to="/login" > <BiUser style={style}/> <p>sign in</p></StyledLink>)}
        {menuState && (<StyledLink onClick={()=> setLoginContent('SignUpForm')} to="/login" > <MdAccountCircle style={style}/> <p> Register</p></StyledLink>)}

      </nav>
      
        <AiOutlineMenu style={style} onClick={() => setMenuState(!menuState)}/>
    </Container>
    </>
  );
 //end_render
};
//-------------END_COMPONENT---------------
export default BottomMenu;
