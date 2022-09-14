import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

import { useFilter, useSelect } from "react-supabase";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner";

const Companies = () => {
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search).get("search");
  const themeParam = new URLSearchParams(search).get("theme");

  const filter = useFilter(
    (query) => query.ilike("name", `*${searchParam ?? ""}*`).order("name"),
    [searchParam]
  );

  const [{ data: companies, error, fetching }] = useSelect("Company", {
    columns:
      "*, CompanyCharacteristic (characteristic, value), CompanyTag (tag)",
    filter,
  });

  const filterCompanies = (companies: any[]) =>
    companies.filter(
      (company) =>
        themeParam == null ||
        themeParam === "" ||
        company.CompanyTag.map(
          (companyTag: { tag: string }) => companyTag.tag
        ).includes(themeParam)
    );

  return (
    <>
      {/* To do : Créer un cas d'erreur */}
      {fetching && <Spinner />}
      {error && <>{error.message}</>}
      {companies && (
        <StyleCompanies>
          <div className="company-items">
            <h1>Entreprises</h1>
            <CompanyItemsTitle />
            {filterCompanies(companies).length === 0 && (
              <div className="no-search-result">
                <div>Aucun résultat trouvé pour cette recherche</div>
              </div>
            )}
            {filterCompanies(companies).map((company: any) => (
              <CompanyItem
                keyName={company.keyName}
                company={company.name}
                characteristics={company.CompanyCharacteristic}
              />
            ))}
          </div>
          <LateralMenu />
        </StyleCompanies>
      )}
    </>
  );
};

export default Companies;
