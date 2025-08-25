import {supabase} from '../client'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const Edit = () => {

    const {id} = useParams();

    const [creator, updateCreator] = useState({
        name: '',
        url: '',
        description: '',
        image_url: ''
    })

    useEffect(() => {
        const getCreator= async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .eq('id', id);
            updateCreator(data[0]);
        }
        getCreator();
    }, [id])


    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.from('creators')
        .update(creator)
        .eq('id', id)
        window.location = '/'
    }

    const handleChange = (e) => {
        const element_name = e.target.name;
        const element_value = e.target.value;
        updateCreator(prevCreator => ({
            ...prevCreator,
            [element_name]: element_value
        }))
    }

    const handleDelete = async () => {
        await supabase.from('creators')
        .delete()
        .eq('id', id)
        window.location = '/'
    }
    return (
        <div className = 'add'>
            <form>
                <label htmlFor='name'>Name</label><br/>
                <input value={creator.name} type = 'text' name = 'name' id='name' onChange={handleChange}/> <br/>
                <label htmlFor ='image'>Image</label><br/>
                <input value={creator.image_url} type = 'text' id = 'image' name = 'image_url' onChange={handleChange}/><br />
                <label htmlFor='description'>Description</label><br/>
                <textarea value={creator.description} id = 'description' name = 'description' rows='4' cols='50' onChange={handleChange}></textarea>
                <h1 style={{marginTop: '2%', marginBottom: '1%'}}> Social Media Links</h1>
                <label htmlFor='url'>URL</label><br />
                <input value={creator.url} type = 'text' id = 'url' name = 'url' onChange={handleChange}/> <br />
                <input type='button' value='Update' onClick={handleSubmit}/>
                <input type='button' value='Delete' onClick={handleDelete}/>
            </form>
        </div>
    );
}


export default Edit;