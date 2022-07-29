import StyleCompanyItem from "./CompanyItemsTitle.style";

const CompanyItem = () => {
  return (
    <StyleCompanyItem>
      <div className="company-item-name-logo company-items-title">
        Entreprise
      </div>
      <div className="company-item-information company-items-title">
        Indice de Tracabilité Carbone
      </div>
    </StyleCompanyItem>
  );
};

export default CompanyItem;
