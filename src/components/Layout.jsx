import {Box} from 'my-library-core'
import LateralMenu from './LateralMenu'
import  BottomMenu  from './BottomMenu'
const Layout = ({children,myStyle, ...rest}) => {
    return (
        <Box
            grid 
            cols="85px 1fr"
            x="center"
            myStyle={{'@media (max-width: 600px)': {gtc: '1fr'}}}
            superStyle={myStyle}
            {...rest}
        >
            <LateralMenu />
            <BottomMenu />
            {children}
        </Box>
    )
}
export default Layout