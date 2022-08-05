import { companiesInfo } from "../../../constants";
import StyleCompanyItem from "./CompanyItem.style";

interface PropsType {
  company: string;
}

const CompanyItem = ({ company }: PropsType) => {
  return (
    <>
      {companiesInfo[company].name && (
        <StyleCompanyItem
          to={{
            pathname: "/company/" + companiesInfo[company].name.toLowerCase(),
          }}
        >
          <div className="company-item-name-logo">
            <img
              className="company-item-logo"
              src={"/images/" + companiesInfo[company].name + ".png"}
              alt={"logo " + companiesInfo[company].name}
            />
            <div className="company-item-name">
              {companiesInfo[company].name}
            </div>
          </div>
          <div className="company-item-information">
            {companiesInfo[company].itc}
          </div>
        </StyleCompanyItem>
      )}
    </>
  );
};

export default CompanyItem;
