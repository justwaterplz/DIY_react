const Menu = () => {
    return (
        <div className="flex flex-row">
      {/* 카테고리 1 */}
      <div className="flex flex-col w-1/4">
        <h2 className="text-xl font-bold">Category 1</h2>
        <ul>
          <li>항목 1</li>
          <li>항목 2</li>
          {/* 다른 항목들 */}
        </ul>
      </div>
      {/* 항목 */}
      <div className="flex flex-col w-3/4">
        <h2 className="text-xl font-bold">Items</h2>
        <div className="flex flex-wrap gap-4">
          <div>
            <img src="item1.jpg" alt="Item 1" className="w-24 h-24" />
            <p>Item 1</p>
            <p>Price: $10</p>
          </div>
          <div>
            <img src="item2.jpg" alt="Item 2" className="w-24 h-24" />
            <p>Item 2</p>
            <p>Price: $15</p>
          </div>
          {/* 다른 항목들 */}
        </div>
      </div>
    </div>
    );
  }
export default Menu;  