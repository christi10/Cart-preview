import classes from './Card.module.css';

const Card = (props) => {
    return (
        <section
            className={`${classes.card} ${props.className ? props.className : ''}`}>

        </section>
    )
}

export default Card;

