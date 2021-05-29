import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Question({title, info}) {
    const [showInfo, setShowInfo] = useState(false);

    return (
       <div className="questions">
        <div className="reviews">
            <h3>{title}</h3>
            <button
            onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
            {showInfo && <p>{info}</p>}
        </div>
        </div>
    )
}
