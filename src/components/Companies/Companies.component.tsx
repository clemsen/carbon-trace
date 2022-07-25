import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "./LateralMenu";

const companyNames: string[] = ["LVMH", "Danone", "Bouygues"];

const Companies = () => {
  return (
    <StyleCompanies className="companies">
      <div className="company-items">
        <h1>Entreprises</h1>
        <CompanyItemsTitle />
        {companyNames.map((companyName: string) => (
          <CompanyItem name={companyName} />
        ))}
      </div>
      <LateralMenu />
    </StyleCompanies>
  );
};

export default Companies;
