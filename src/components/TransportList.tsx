import TransportItem from "./TransportItem";
type TransportListProps = {
  items: {
    name: string;
    movers: boolean;
    passengers: boolean;
    moversNumber: number;
    passengersNumber: number;
    selected: string;
  }[];
  updateItems: (
    items: {
      name: string;
      movers: boolean;
      passengers: boolean;
      moversNumber: number;
      passengersNumber: number;
      selected: string;
    }[]
  ) => void;
  updateShowEditFieldModal: (value: boolean) => void;
  activeItem: string;
  updateActiveItem: (value: string) => void;
};

const TransportList = ({
  items,
  updateItems,
  updateShowEditFieldModal,
  activeItem,
  updateActiveItem,
}: TransportListProps) => {
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
