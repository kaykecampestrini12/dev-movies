
import { Container } from './styles'
import { getImages } from '../../util/get_Images'

function Card ( {item } ) {
    return(
        <Container>
            <img src={getImages(item.poster_path || item.profile_path || "")} alt={item.title || item.name || ""} />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}

export default Card