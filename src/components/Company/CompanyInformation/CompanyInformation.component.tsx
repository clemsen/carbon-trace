import { CompanyType } from "../../../types/types";
import StyleCompanyInformation from "./CompanyInformation.style";
import InformationItem from "./InformationItem";

interface PropsType {
  company: CompanyType;
}

const CompanyInformation = ({ company }: PropsType) => {
  return (
    <StyleCompanyInformation className="company-information">
      {company.CompanyCharacteristic.map((characteristic) => (
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
