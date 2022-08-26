import { CompanyCharacteristicType } from "../../../types/types";
import StyleCompanyItem from "./CompanyItem.style";

interface PropsType {
  keyName: string;
  company: string;
  characteristics: CompanyCharacteristicType[];
}

const CompanyItem = ({ keyName, company, characteristics }: PropsType) => {
  const getItcValue = (characteristics: CompanyCharacteristicType[]) => {
    const itcCharacteristic =
      characteristics.filter(
        (characteristic) => characteristic.characteristic === "itc"
      )[0] || null;

    return itcCharacteristic && itcCharacteristic.value;
  };

  return (
    <>
      {keyName && (
        <StyleCompanyItem
          to={{
            pathname: "/company/" + keyName,
          }}
        >
          <div className="company-item-name-logo">
            <img
              className="company-item-logo"
              src={"/images/" + keyName + ".png"}
              alt={"logo " + company}
            />
            <div className="company-item-name">{company}</div>
          </div>
          <div className="company-item-information">
            {getItcValue(characteristics)}
          </div>
        </StyleCompanyItem>
      )}
    </>
  );
};

export default CompanyItem;
