import './ItemListContainer.css'

export default function ItemListContainer(props) {

const {greeting} = props;

    return (
        <div>
            <p className='card-title1'>{greeting}</p>
        </div>
    )
}