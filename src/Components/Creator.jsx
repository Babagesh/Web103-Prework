import {Link} from 'react-router-dom'


const Creator = ({creatorInfo}) => {
    return (
        <div className = 'creator'>
            <Link to={`/${creatorInfo.id}`}><img src = {creatorInfo.image_url} alt = 'creator photo'/></Link> 
            <h1> Name: {creatorInfo.name}</h1>
            <p> Description: {creatorInfo.description}</p>
            <a href={creatorInfo.url}>URL: {creatorInfo.url}</a>
            <Link to={`/edit/${creatorInfo.id}`}>Edit</Link>
        </div>
    )
}

export default Creator;