import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "./LateralMenu";

export type CompanyInfoType = { name: string; itc: string };

const companiesInfo: CompanyInfoType[] = [
  {
    name: "LVMH",
    itc: "4%",
  },
  {
    name: "Danone",
    itc: "8%",
  },
];

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
