import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

import { useSelect } from "react-supabase";

const Companies = () => {
  const [{ data: companies, error, fetching }] = useSelect("Company");

  return (
    <>
      {/* To do : Créer un composant loader et un cas d'erreur */}
      {fetching && <>Chargement ...</>}
      {error && <>Une erreur est survenue, veuillez réessayer plus tard</>}
      {companies && (
        <StyleCompanies>
          <div className="company-items">
            <h1>Entreprises</h1>
            <CompanyItemsTitle />
            {companies?.map((company: any) => (
              <CompanyItem company={company.key_name} />
            ))}
          </div>
          <LateralMenu />
        </StyleCompanies>
      )}
    </>
  );
};

export default Companies;
