import React from 'react';
import {FaPaw} from 'react-icons/fa';

interface CharacteristicsProps {
    content : string;
}

const CharacteristicsItem = React.memo(({content}: CharacteristicsProps) => {
  return (
    <li className='flex gap-2 capitalize'>
        <FaPaw className="text-primary-green"/>
        {content} 
    </li> 
  )
})

export default CharacteristicsItem