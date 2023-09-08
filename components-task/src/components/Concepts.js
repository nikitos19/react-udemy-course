import { Concept } from "./Concept"

export const Concepts = (props) => {
    return (
        <div className='concepts'>
            {props.items.map((item, index) => <Concept key={`concept-${index}`} image={item.image} title={item.title} description={item.description} />)}
        </div>
    )
}