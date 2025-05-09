export default function List(props) {

//   fruits.sort((a, b) => 
//     b.name.localeCompare(a.name),
    
//   );

//   fruits.sort((a, b) => b.price - a.price)


// const lowPriceFruits = fruits.filter((fruit) => fruit.price < 100);

//    const  listItems = lowPriceFruits.map((lowPriceFruit) => (
//     <li>
//       {lowPriceFruit.name} : &nbsp; {lowPriceFruit.price}
//     </li>
//   ));

const itemList = props.items;  
const category = props.category;
  
const listItems = itemList.map((item) =><li key={item.id}> {item.name} : {item.price}</li>)
  return ( 
    <>
     <h3>{category}</h3>
    <ol>{listItems}</ol>
   
  
 
    
    </>  
)
}
