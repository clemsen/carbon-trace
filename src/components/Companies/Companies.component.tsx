import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";

const companyNames: string[] = ["LVMH", "Danone"];

const Companies = () => {
  return (
    <StyleCompanies className="companies">
      {companyNames.map((companyName: string) => (
        <CompanyItem name={companyName} />
      ))}
    </StyleCompanies>
  );
};

export default Companies;
