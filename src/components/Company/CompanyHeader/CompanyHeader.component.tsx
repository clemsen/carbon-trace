import { companiesInfo } from "../../../constants";
import StyleCompanyHeader from "./CompanyHeader.style";

interface PropsType {
  company: string;
}

const CompanyHeader = ({ company }: PropsType) => {
  return (
    <StyleCompanyHeader className="company-header">
      <div className="company-logo">
        <img
          className="company-item-logo"
          src={"/images/" + companiesInfo[company].name + ".png"}
          alt={"logo " + companiesInfo[company].name}
        />
      </div>
      <div className="company-name">{companiesInfo[company].name}</div>
    </StyleCompanyHeader>
  );
};

export default CompanyHeader;
