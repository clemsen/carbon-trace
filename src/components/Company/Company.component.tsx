import Alternatives from "./Alternatives";
import CompanyHeader from "./CompanyHeader";
import CompanyInformation from "./CompanyInformation";
import StyleCompany from "./Company.style";
import { useParams } from "react-router-dom";

const Company = () => {
  const name = useParams().name;

  return (
    <StyleCompany>
      <CompanyHeader name={name} />
      <CompanyInformation />
      <Alternatives />
    </StyleCompany>
  );
};

export default Company;
