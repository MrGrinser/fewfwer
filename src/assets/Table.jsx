import ArrayToTable from './ArrayToTable';
import shopItem1 from '../imagesShop/shopItem1.png'
import shopItem2 from '../imagesShop/shopItem2.png'
import shopItem3 from '../imagesShop/shopItem3.png'
import shopItem4 from '../imagesShop/shopItem4.png'
import shopItem5 from '../imagesShop/shopItem5.png'
import shopItem6 from '../imagesShop/shopItem6.png'
import shopItem7 from '../imagesShop/shopItem7.png'
import shopItem8 from '../imagesShop/shopItem8.png'
import '../styles/table.css'
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function Table() {
    
    const pictureArray = [
      shopItem1,
      shopItem2,
      shopItem3,
      shopItem4,
      shopItem5,
      shopItem6,
      shopItem7,
      shopItem8,
      shopItem1,
      shopItem2,
      shopItem3,
      shopItem4,
      shopItem5,
      shopItem6,
      shopItem7,
      shopItem8,
      shopItem1,
      shopItem2,
      shopItem3,
      shopItem4,
      shopItem5,
      shopItem6,
      shopItem7,
      shopItem8,
      shopItem1,
      shopItem2,
      shopItem3,
      shopItem4,
      shopItem5,
      shopItem6,
      shopItem7,
      shopItem8,
    ];
  
    return (
    <div>
         <h1 className="shop-title">Shop Items</h1>
      <div className="table-container">
        
        <ArrayToTable pictureArray={shuffleArray(pictureArray)} />
      </div>
      </div>
    );
  }
  
  export default Table;