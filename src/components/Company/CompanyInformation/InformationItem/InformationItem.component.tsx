import StyleInformationItem from "./InformationItem.style";

interface PropsType {
  itemName: string;
  itemValue: string;
}

const InformationItem = ({ itemName, itemValue }: PropsType) => {
  return (
    <StyleInformationItem>
      <div className="info-item-name">{itemName}</div>
      <div className="info-item-value">{itemValue}</div>
    </StyleInformationItem>
  );
};

export default InformationItem;
