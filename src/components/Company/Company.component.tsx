import CompanyHeader from "./CompanyHeader";
import CompanyInformation from "./CompanyInformation";
import StyleCompany from "./Company.style";
import { useParams } from "react-router-dom";
import LateralMenu from "../LateralMenu";

const Company = () => {
  const company = useParams().company || "";

  return (
    <StyleCompany>
      <div className="company-section">
        <CompanyHeader company={company} />
        <CompanyInformation company={company} />
      </div>
      <LateralMenu />
    </StyleCompany>
  );
};

export default Company;
