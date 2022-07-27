import { CompanyInfoType } from "../Companies.component";
import StyleCompanyItem from "./CompanyItem.style";

interface PropsType {
  companyInfo: CompanyInfoType;
}

const CompanyItem = ({ companyInfo }: PropsType) => {
  return (
    <>
      {companyInfo.name && (
        <StyleCompanyItem className="company-item">
          <div className="company-item-name-logo">
            <img
              className="company-item-logo"
              src={"/images/" + companyInfo.name + ".png"}
              alt={"logo " + companyInfo.name}
            />
            <div className="company-item-name">{companyInfo.name}</div>
          </div>
          <div className="company-item-information">{companyInfo.itc}</div>
        </StyleCompanyItem>
      )}
    </>
  );
};

export default CompanyItem;
