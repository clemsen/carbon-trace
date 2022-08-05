import { companiesInfo } from "../../constants";
import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

const Companies = () => {
  return (
    <StyleCompanies>
      <div className="company-items">
        <h1>Entreprises</h1>
        <CompanyItemsTitle />
        {Object.keys(companiesInfo).map((company: string) => (
          <CompanyItem company={company} />
        ))}
      </div>
      <LateralMenu />
    </StyleCompanies>
  );
};

export default Companies;
