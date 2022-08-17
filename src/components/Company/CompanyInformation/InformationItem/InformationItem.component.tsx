import React from "react";
import StyleInformationItem from "./InformationItem.style";
import InformationModal from "./InformationModal";

interface PropsType {
  itemName: string;
  itemValue: string;
}

const InformationItem = ({ itemName, itemValue }: PropsType) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <StyleInformationItem>
      <div className="info-item-name">
        {itemName}
        <img
          src="/images/information.png"
          alt="information"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        />
        {showModal && (
          <InformationModal description="blabla car de la mote qsdlkgjfb qsdmfionqzsd:f misd fmoiqsdbnvkqns viuqz sdq; vioups dcvlqsmdjbncoqsd vjlh bzfemiubc ckjlih" />
        )}
      </div>
      <div className="info-item-value">{itemValue}</div>
    </StyleInformationItem>
  );
};

export default InformationItem;
