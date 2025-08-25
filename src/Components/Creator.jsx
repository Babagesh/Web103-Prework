const Creator = ({creatorInfo}) => {
    return (
        <div className = 'creator'>
            <img src = {creatorInfo.imgUrl} alt = 'creator photo'/>
            <h1> Name: {creatorInfo.name}</h1>
            <p> Description: {creatorInfo.description}</p>
            <a href={creatorInfo.url}></a>
            <Link to='/edit'>Edit</Link>
        </div>
    )
}

export default Creator;