import {supabase} from '../client'
import {useState} from 'react'

const Add = () => {

    const {creator, updateCreator} = useState({
        name: '',
        url: '',
        description: '',
        image_url: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const {error} = supabase.from('creators')
        .insert(creator)
        .select();
        console.log(error);
        window.location = '/'
    }

    const handleChange = (e) => {
        const element_name = e.target.name;
        const element_value = e.target.value;
        updateCreator(prevCreator => ({
            ...prevCreator,
            [name]: element_value
        }))

    }
    return (
        <div className = 'add'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label><br/>
                <input type = 'text' name = 'name' id='name' onChange={handleChange}/> <br/>
                <label htmlFor ='image'>Image</label><br/>
                <input type = 'text' id = 'image' name = 'image_url' onChange={handleChange}/><br />
                <label htmlFor='description'>Description</label><br/>
                <textarea id = 'description' name = 'description' row='4' cols='50' onChange={handleChange}></textarea>
                <h1 style={{marginTop: '2%', marginBottom: '1%'}}> Social Media Links</h1>
                <label htmlFor='url'>URL</label><br />
                <input type = 'text' id = 'url' name = 'url' onChange={handleChange}/> <br />
                <button>Submit</button>
            </form>
        </div>
    );
}


export default Add;