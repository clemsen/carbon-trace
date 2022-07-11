import Alternatives from "./Alternatives";
import CompanyHeader from "./CompanyHeader";
import CompanyInformation from "./CompanyInformation";
import StyleCompany from "./Company.style";

const Company = () => {
  return (
    <StyleCompany className="company">
      <CompanyHeader />
      <CompanyInformation />
      <Alternatives />
    </StyleCompany>
  );
};

export default Company;
