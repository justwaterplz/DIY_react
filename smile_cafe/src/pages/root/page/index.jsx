import './index.css'
import products from './data/products';
const Menu = () => {
    return (
      <div className="flex-grow justify-between">
      {/* 1st row */}
      <div className="justify-start items-center flex h-1/3 mt-6 ml-10">
        <span className='text-xl mr-2'>■</span>
        <p className='font-custom text-4xl'>DRINK</p>

        {/* Products */}
        <div className="flex flex-wrap justify-center items-center ml-4 mt-10 w-full">
          {
          products.drinks.map(drink => (
            <div key={`drink-${drink.id}`} className="flex flex-col items-center ml-8 mr-8 mb-4 mt-6">
              <img src={drink.image} alt={drink.name} className="w-32 h-32 object-cover" />
              <p className="text-3xl font-productFont mt-2">{drink.name}</p>
              <p className="text-2xl font-productFont ">{drink.price}</p>
            </div>
          ))
          }
        </div>
      </div>
      
      {/* 2nd row */}
      <div className="justify-start items-center flex h-1/3 ml-10 mt-6">
        <span className='text-xl mr-2'>■</span>
        <p className='font-custom text-4xl'>DESSERT</p>

          {/* Products */}
          <div className="flex flex-wrap justify-center items-center ml-4 mt-10 w-full mr-10">
            {
            products.desserts.map(dessert => (
              <div key={`dessert-${dessert.id}`} className="flex flex-col items-center ml-8 mr-8 mb-4">
                <img src={dessert.image} alt={dessert.name} className="w-32 h-32 object-cover" />
                <p className="text-3xl font-productFont mt-2">{dessert.name}</p>
                <p className="text-2xl font-productFont ">{dessert.price}</p>
              </div>
            ))
            }
          </div>
      </div>
    </div>
        // <div className="flex-grow justify-between">

        //   {/* 1st row */}
        //   <div className="justify-start items-center flex h-1/3 mt-6">
        //     <span className='text-xl mr-2 ml-10'>■</span>
        //     <p className='font-custom text-4xl'>DRINK</p>

        //     {/*  */}
        //   </div>

        //   {/* 2nd row 높이 맞추는데 노가다함*/}
        //   <div className="justify-start items-center flex h-96">
        //     <span className='text-xl mr-2 ml-10'>■</span>
        //     <p className='font-custom text-4xl'>DESSERT</p>
        //   </div>

        //   <div className="flex flex-wrap justify-start items-start ml-10 mt-6">
        //     {products.map(product => (
        //     <div key={product.id} className="flex flex-col items-center ml-4">
        //       <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
        //       <p className="text-lg mt-2">{product.name}</p>
        //       <p className="text-sm">{product.price}</p>
        //     </div>
        //     ))}
        //   </div>
        // </div>
    );
  }
export default Menu;  