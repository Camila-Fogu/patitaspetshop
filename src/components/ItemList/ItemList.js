import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
