import { companiesInfo, CompanyInfoType } from "../../constants";
import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "./LateralMenu";

const Companies = () => {
  return (
    <StyleCompanies>
      <div className="company-items">
        <h1>Entreprises</h1>
        <CompanyItemsTitle />
        {companiesInfo.map((companyInfo: CompanyInfoType) => (
          <CompanyItem companyInfo={companyInfo} />
        ))}
      </div>
      <LateralMenu />
    </StyleCompanies>
  );
};

export default Companies;
