import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

import { useFilter, useSelect } from "react-supabase";
import { useLocation } from "react-router-dom";

const Companies = () => {
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search).get("search");

  const filter = useFilter(
    (query) => query.ilike("name", `*${searchParam ?? ""}*`),
    [searchParam]
  );

  const [{ data: companies, error, fetching }] = useSelect("Company", {
    filter,
  });

  return (
    <>
      {/* To do : Créer un composant loader et un cas d'erreur */}
      {fetching && <>Chargement ...</>}
      {error && <>{error.message}</>}
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
