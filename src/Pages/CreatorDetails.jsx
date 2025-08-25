import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import {supabase} from '../client'

const CreatorDetails = () => {

    const {id} = useParams();

    const [creator, setCreator] = useState({
        name: '',
        image_url: '',
        description: '',
        url: ''
    });
    useEffect(() => {
        const getCreator= async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .eq('id', id);
            setCreator(data[0]);
        }
        getCreator();
    }, [id])

    return (
        <div className = 'creator-details'>
             <div className='creator-details-card'>
                <img src={creator.image_url} alt={creator.name} />
                <h1>{creator.name}</h1>
                <p>{creator.description}</p>
                <a href={creator.url} target="_blank" rel="noopener noreferrer">
                    Visit Channel
                </a>
            </div>
        </div>
    );
}

export default CreatorDetails;