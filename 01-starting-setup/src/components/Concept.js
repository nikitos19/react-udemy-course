export const Concept = (props) => {
    return (
        <div className='concept'>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}