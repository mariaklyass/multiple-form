import TransportItem from "./TransportItem";

const TransportList = ({
  items,
  updateItems,
  updateShowEditFieldModal,
  activeItem,
  updateActiveItem,
}) => {
  return (
    <div className="gap">
      {items.map((value, index) => (
        <TransportItem
          key={`item-${value.name}`}
          index={index}
          value={value}
          items={items}
          updateItems={updateItems}
          updateShowEditFieldModal={updateShowEditFieldModal}
          activeItem={activeItem}
          updateActiveItem={updateActiveItem}
        />
      ))}
    </div>
  );
};

export default TransportList;
