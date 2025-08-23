import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div className = 'menu'>
            <h1> CREATORVERSE </h1>
            <div className = 'creator-options'>
                <Link to='/'><button>View All Creators</button></Link>
                <Link to='/add'><button>Add a Creator</button></Link>
            </div>
        </div>
    );
}

export default Menu;