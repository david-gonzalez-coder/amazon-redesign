//dependencies
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "../firebase";
import { useStateValue } from '../store/StateProvider'
import { SignInForm, SignUpForm, ForgotPassword, GoToTop } from '../components'
import { MyBtn, Box, Box as Header, Box as Wrapper } from 'my-library-core'
import amazonLogo2 from '../assests/amazonLogo2.png'
import { Link } from 'react-router-dom'
//styled components

const Login = () => {
  const [{ loginContent }, dispatch] = useStateValue()

  const setLoginContent = (content) => {
    dispatch({
      type: 'SET_LOGIN_CONTENT',
      loginContent: content,
    })
  }

  return (
    <>
      <Wrapper flex bg='#fff' h='100vh'>
        {/* SECTION 1 */}
        <Box
          flex
          center
          myStyle={{
            w: '50%',
            h: '100%',
            bg: 'rgb(234, 237, 237)',
            mxW: '600px',
            'a': {w: '90%'},
            img: { width: '100%' },
            '@media (max-width: 800px)': { d: 'none' },
          }}
        >
          <Link to="/">
          <img
            src={amazonLogo2}
            alt=''
          />
          </Link>
          
        </Box>
        {/* SECTION 2 */}
        <Box h='100vh'>
          <Header
            header
            flex
            myStyle={{
              p: '1rem',
              ai: 'center',
              jc: 'flex-end',
              h: '10vh',
              mnH: '80px',
            }}
          >
            {loginContent === 'SignInForm' && (
              <>
                <p>Not a member?</p>
                <MyBtn
                  text
                  size='large'
                  onClick={() => setLoginContent('SignUpForm')}
                >
                  Sign Up now
                </MyBtn>
              </>
            )}
            {loginContent === 'ForgotPassword' && (
              <>
                <p>Not a member?</p>
                <MyBtn
                  text
                  size='large'
                  onClick={() => setLoginContent('SignUpForm')}
                >
                  Sign Up now
                </MyBtn>
              </>
            )}
            {loginContent === 'SignUpForm' && (
              <>
                <p>Already a member?</p>
                <MyBtn
                  text
                  size='large'
                  onClick={() => setLoginContent('SignInForm')}
                >
                  Sign In
                </MyBtn>
              </>
            )}
          </Header>

          <Box flex h='80vh' center>
            {loginContent === 'SignInForm' && <SignInForm />}
            {loginContent === 'SignUpForm' && <SignUpForm />}
            {loginContent === 'ForgotPassword' && <ForgotPassword />}
          </Box>
        </Box>
        <GoToTop />
      </Wrapper>
    </>
  )
}
export default Login
