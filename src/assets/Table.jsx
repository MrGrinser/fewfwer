import ArrayToTable from './ArrayToTable';
import shopItem1 from '../imagesShop/shopItem1.png'
import shopItem2 from '../imagesShop/shopItem2.png'
import shopItem3 from '../imagesShop/shopItem3.png'
import shopItem4 from '../imagesShop/shopItem4.png'
import shopItem5 from '../imagesShop/shopItem5.png'
import shopItem6 from '../imagesShop/shopItem6.png'
import shopItem7 from '../imagesShop/shopItem7.png'
import shopItem8 from '../imagesShop/shopItem8.png'
import shopItem9 from '../imagesShop/shopItem9.png'
import shopItem10 from '../imagesShop/shopItem10.png'
import shopItem11 from '../imagesShop/shopItem11.png'
import shopItem12 from '../imagesShop/shopItem12.png'
import shopItem13 from '../imagesShop/shopItem13.png'
import shopItem14 from '../imagesShop/shopItem14.png'
import shopItem15 from '../imagesShop/shopItem15.png'
import shopItem16 from '../imagesShop/shopItem16.png'
import shopItem17 from '../imagesShop/shopItem17.png'
import shopItem18 from '../imagesShop/shopItem18.png'
import shopItem19 from '../imagesShop/shopItem19.png'
import '../styles/table.css'
// function Table() {
//   const exampleArray = Array.from({ length: 32 }, (_, index) => index + 1);
  
//   return (
//     <div>
//       <h1>Array to Table Example</h1>
//       <ArrayToTable array={exampleArray} />
//     </div>
//   );
// }

// export default Table;
function Table() {
    // Put all the image URLs into an array
    const pictureArray = [
      shopItem1,
      shopItem2,
      shopItem3,
      shopItem4,
      shopItem5,
      shopItem6,
      shopItem7,
      shopItem8,
      shopItem9,
      shopItem10,
      shopItem11,
      shopItem12,
      shopItem13,
      shopItem14,
      shopItem15,
      shopItem16,
      shopItem17,
      shopItem18,
      shopItem19,
      // Add other images here
    ];
  
    return (
    <div>
         <h1 className="shop-title">Shop Items</h1>
      <div className="table-container">
        
        <ArrayToTable pictureArray={pictureArray} />
      </div>
      </div>
    );
  }
  
  export default Table;