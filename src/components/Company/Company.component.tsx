import CompanyHeader from "./CompanyHeader";
import CompanyInformation from "./CompanyInformation";
import StyleCompany from "./Company.style";
import { useParams } from "react-router-dom";
import LateralMenu from "../LateralMenu";

import { useSelect, useFilter } from "react-supabase";
import Spinner from "../Spinner";

const Company = () => {
  const companyKeyName = useParams().company || "";

  const filter = useFilter(
    (query) => query.eq("keyName", companyKeyName),
    [companyKeyName]
  );

  const [{ data: companies, error, fetching }] = useSelect("Company", {
    columns: "*, CompanyCharacteristic (*, Characteristic (*))",
    filter,
  });

  return (
    <>
      {/* To do : Créer un cas d'erreur */}
      {fetching && <Spinner />}
      {error && <>{error.message}</>}
      {companies?.length === 1 && (
        <StyleCompany>
          <div className="company-section">
            <CompanyHeader company={companies[0]} />
            <CompanyInformation company={companies[0]} />
          </div>
          <LateralMenu />
        </StyleCompany>
      )}
    </>
  );
};

export default Company;
