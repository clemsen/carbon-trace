import { companiesInfo } from "../../../constants";
import StyleCompanyInformation from "./CompanyInformation.style";
import InformationItem from "./InformationItem";

interface PropsType {
  company: string;
}

const CompanyInformation = ({ company }: PropsType) => {
  return (
    <StyleCompanyInformation className="company-information">
      <InformationItem
        itemName="Indice de Tracabilité Carbone"
        itemValue={companiesInfo[company].itc}
        itemDescription="Indice de Tracabilité Carbone"
      />
      <InformationItem
        itemName="Scope 1"
        itemValue={companiesInfo[company].scope1 || ""}
        itemDescription="Description Scope 1"
      />
      <InformationItem
        itemName="Scope 2"
        itemValue={companiesInfo[company].scope2 || ""}
        itemDescription="Description Scope 2"
      />
      <InformationItem
        itemName="Scope 3"
        itemValue={companiesInfo[company].scope3 || ""}
      />
      <InformationItem
        itemName="Part du CO2 transmis par les fournisseurs"
        itemValue={companiesInfo[company].co2supplier || ""}
      />
    </StyleCompanyInformation>
  );
};

export default CompanyInformation;
