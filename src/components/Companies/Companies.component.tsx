import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";

const companyNames: string[] = ["LVMH", "Danone", "Bouygues"];

const Companies = () => {
  return (
    <StyleCompanies className="companies">
      <h1>Entreprises</h1>
      {companyNames.map((companyName: string) => (
        <CompanyItem name={companyName} />
      ))}
    </StyleCompanies>
  );
};

export default Companies;
