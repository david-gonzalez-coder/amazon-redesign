
import {Star} from './index'
import {Box} from "my-library-core";


const Comment = ({id, rating, title, abstract, userName }) => {
    return(
        <Box 
            wrap
            flex
            flowColumn 
            myStyle={{
                 gc: '1/ -1', bg: '#fff', p: '1rem', c: '#3d3d3d',
                '.abstract': {lnH: '23px'}
            }}
        >
            <Box flex>
                <h3 >{userName}</h3>
                <Box flex >
                    {Array(rating).fill().map((_, i) => (<Star />) )}
                </Box>
            </Box>

            <Box myStyle={{p: '1rem'}}>
                <h3>{title}</h3>
                <div className="abstract">{abstract}</div>
            </Box>
        </Box>
    )
}
export default Comment