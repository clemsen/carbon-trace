import Alternatives from "./Alternatives";
import CompanyHeader from "./CompanyHeader";
import CompanyInformation from "./CompanyInformation";

const Company = () => {
  return (
    <div className="company">
      <CompanyHeader />
      <CompanyInformation />
      <Alternatives />
    </div>
  );
};

export default Company;
