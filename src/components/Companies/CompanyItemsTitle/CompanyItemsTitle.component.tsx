import StyleCompanyItem from "./CompanyItemsTitle.style";

const CompanyItem = () => {
  return (
    <StyleCompanyItem>
      <div className="company-item-name-logo company-items-title">
        Entreprise
      </div>
      <div className="company-item-information company-items-title">
        kg de CO2 par €
      </div>
    </StyleCompanyItem>
  );
};

export default CompanyItem;
