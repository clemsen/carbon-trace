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
      />
      <InformationItem
        itemName="Scope 1"
        itemValue={companiesInfo[company].scope1 || ""}
      />
      <InformationItem
        itemName="Scope 2"
        itemValue={companiesInfo[company].scope2 || ""}
      />
      <InformationItem
        itemName="Scope 3"
        itemValue={companiesInfo[company].scope3 || ""}
      />
    </StyleCompanyInformation>
  );
};

export default CompanyInformation;
