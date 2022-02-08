import styled from 'styled-components'
import {Customizer} from 'my-library-core'
import {Link} from 'react-router-dom'

const Container = styled.div`
    border-radius: 3px;
    background-image: url('${({image})=> image}');
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    .poster_content{
        padding: 2rem;
        border-radius: 3px;
        transition: .2s;
        background: #2e2e2e53;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        .poster_title{
            color: #fff;
            font-weight: 500;
            font-size: 1.5rem;
        }
        :hover {
            background: #c0ae0d88;
            transition: .2s;
        }
    }

    //custom
    ${({myStyle})=> Customizer(myStyle)}
`

const Poster = ({title, image, alt, myStyle, linkTo}) => {
    return(
        <Link to={linkTo} className="cardEffect">
            <Container myStyle={myStyle} image={image}>
                <div className="poster_content">
                    <h2 className="poster_title">{title}</h2>
                </div>
            </Container>
        </Link>
    )
}
export default Poster