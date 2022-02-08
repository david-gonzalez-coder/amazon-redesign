import styled from 'styled-components'
const StarImg = styled.div`
    width: 18px;
    img{
        width: 100%;
    }
` 
const Star = () => {
    return <StarImg><img src="https://images.emojiterra.com/twitter/v13.0/512px/2b50.png"/></StarImg>
}
export default Star