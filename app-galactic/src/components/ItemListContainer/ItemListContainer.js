import './ItemListContainer.css'

const ItemListContainer = ({ greeting}) => {
    return(
        <div class="item badge text-wrap ">
         <h1 class="text">{greeting}</h1>
      </div>
    )
}

export default ItemListContainer