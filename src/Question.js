import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Question({title, info}) {
    const [showInfo, setShowInfo] = useState(false);
    const toogle = () => {
        setShowInfo(!showInfo)
    }
    return (
       <div className="questions">
        <div className="reviews">
            <h3>{title}</h3>
            <button
            onClick={toogle}>
                {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </div>
            {showInfo && <p>{info}</p>}
        </div>
    )
}
