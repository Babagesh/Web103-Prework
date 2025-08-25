import {useEffect, useState} from 'react'
import {supabase} from '../client'
import Creator from '../Components/Creator'


const Creators = () => {

    const [creators, setCreators] = useState([]);
    useEffect( () => {
        const getCreators = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            setCreators(data);
        }
        getCreators();
    }, [creators])

    return (
        <div className = 'creators'>
            {creators && creators.map(creator => 
                <Creator 
                    key={creator.id}
                    creatorInfo={creator}
                />
            )}
        </div>
    )
}

export default Creators;