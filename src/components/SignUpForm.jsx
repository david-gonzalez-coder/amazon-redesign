

// import React, { useState } from "react";
// //dependencies
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// // import { auth } from "../firebase";
// import { useStateValue } from "../store/StateProvider";
// //components
// import {Box, Box as Form, MyBtn} from 'my-library-core'
// //styled components



// const style = {
//   mT: '30px',
// 'label': {
//   fw: '500',
// },
// "input[type='text'],input[type='password']":{
//   b: 'none',
//   br: '5px',
//   wr: '100%',
//   mr: '10px 0 30px 0',
//   h: '30px',
//   bg: '#f2f2f2',
//   p: '1.25rem',
//   ':focus': {
//     bg: '#fff',
//     outline: '1px solid #ccc',
//   }
// },
// '.terms': {
//   w: '100%', mBm:  '30px',
//   'label':{m: '5px',fw: '400',}
// }
// }


// const SignUpForm = () => {
//   const navigate = useNavigate()
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [{ loginContent }, dispatch] = useStateValue();

  
//   const setLoginContent = (content) => {
//     dispatch({
//       type: "SET_LOGIN_CONTENT",
//       loginContent: content
//     });
//   };

//   const signUp = (e) => {
//     e.preventDefault();
//     navigate('/')
//   };
//   return (
//     <Box
//       flex 
//       flexColumn 
//       rounded 
//       bg="#fff"
//       myStyle={{
//         w: '500px', h: 'fit-content',p:"1.5rem",
//         '.form_title':{ fw: '500',  mBm: '20px'}
//       }}
//     >
//       <h2 className="form_title">Sign Up to Amazon </h2>
//         <Form form myStyle={style}>
//           <label htmlFor="">Name</label>
//           <input 
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="">E-mail</label>
//           <input 
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
          
//           <label htmlFor="">Password</label> 
//           <input 
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="+6Characters"
//           />
//           <div className="terms">
//             <input type="checkbox" id="terms" />
//             <label htmlFor="terms">Creating an account means you’re okay with our Terms of Service, Privacy Policy</label> 
//           </div>
          
//           <MyBtn primary onClick={()=>signUp} myStyle={{w: '48%', bg: '#f0c14b', m: '0', mR: '15px'}}>Sign Up</MyBtn>
//           <MyBtn primary onClick={()=>signUp} myStyle={{w: '48%', m: '0', bg: '#3A81F1'}}>Sign Up with Google</MyBtn>      
//         </Form>
//     </Box>
//   )
// }
// export default SignUpForm;




import React, { useState } from "react";
//dependencies
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
import { useStateValue } from "../store/StateProvider";
//components
import {MyBtn} from 'my-library-core'
//styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: #fff;
  height: fit-content;
  border-radius: 5px;
  padding: 20px;
  .form_title{
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
const Form = styled.div`

  label{
    font-weight: 500;
  }
  input[type="text"],
  input[type="password"]{
    border: none;
    border-radius: 5px;
    width: 100%;
    margin: 10px 0 30px 0;
    height: 30px;
    background: #f2f2f2;
    padding: 1.25rem;
    :focus{
      background: #fff;
      outline: 1px solid #ccc;
    }
  }
  .terms{
    width: 100%;
    margin-bottom:  30px;
    label{
      margin: 5px;
      font-weight: 400;
    }
  }
`

//#a88734 #9c7e31 #846a29; #f0c14b;

const SignUpForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ loginContent }, dispatch] = useStateValue();

  
  const setLoginContent = (content) => {
    dispatch({
      type: "SET_LOGIN_CONTENT",
      loginContent: content
    });
  };

  const signUp = (e) => {
    e.preventDefault();
    navigate('/')
  };
  return (
    <Container>
      <h2 className="form_title">Sign Up to Amazon </h2>
        <Form>
          <label htmlFor="">Name</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">E-mail</label>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="">Password</label> 
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="+6Characters"
          />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Creating an account means you’re okay with our Terms of Service, Privacy Policy</label> 
          </div>
          
          <MyBtn rounded primary onClick={()=>signUp} myStyle={{w: '48%', bg: '#f0c14b', m: '0', mR: '15px'}}>Sign Up</MyBtn>
          <MyBtn rounded primary onClick={()=>signUp} myStyle={{w: '48%', m: '0', bg: '#3A81F1'}}>Sign Up with Google</MyBtn>      
        </Form>
    </Container>
  )
}
export default SignUpForm;

