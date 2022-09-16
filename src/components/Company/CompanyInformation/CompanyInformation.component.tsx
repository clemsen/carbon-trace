import { CompanyType } from "../../../types/types";
import StyleCompanyInformation from "./CompanyInformation.style";
import InformationItem from "./InformationItem";

interface PropsType {
  company: CompanyType;
}

const CompanyInformation = ({ company }: PropsType) => {
  return (
    <StyleCompanyInformation className="company-information">
      {company.CompanyCharacteristic.sort(
        (charac1, charac2) =>
          charac1.Characteristic.order - charac2.Characteristic.order
      )
        .filter((charcteristic) => charcteristic.Characteristic.isDisplayed)
        .map((characteristic) => (
          <InformationItem
            itemName={characteristic.Characteristic.name}
            itemValue={characteristic.value}
            itemDescription={characteristic.Characteristic.description}
          />
        ))}
    </StyleCompanyInformation>
  );
};

export default CompanyInformation;
