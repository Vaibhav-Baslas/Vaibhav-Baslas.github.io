import './Card.css';

function Card(props) {

    function handleChoice() {
        if (!props.disabled)
            props.handleChoice(props.card);
    }

    return (
        <div className='cardd'>
            <div className={props.flipped ? "flippedd" : ""}>
                <img  className={`frontt ${props.card.matched ? "matchedd" : ''}`} src={props.card.src} alt="card front" />
                <img className='backk' src="https://wallpaperaccess.com/full/886478.jpg" alt="card back" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}

export default Card;
