import { CompanyType } from "../../../types/types";
import StyleCompanyHeader from "./CompanyHeader.style";

interface PropsType {
  company: CompanyType;
}

const CompanyHeader = ({ company }: PropsType) => {
  return (
    <StyleCompanyHeader className="company-header">
      <div className="company-logo">
        <img
          className="company-item-logo"
          src={"/images/" + company.keyName + ".png"}
          alt={"logo " + company.name}
        />
      </div>
      <div className="company-name">{company.name}</div>
    </StyleCompanyHeader>
  );
};

export default CompanyHeader;
