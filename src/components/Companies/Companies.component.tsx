import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

import { useFilter, useSelect } from "react-supabase";
import { useLocation } from "react-router-dom";

const Companies = () => {
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search).get("search");
  const themeParam = new URLSearchParams(search).get("theme");

  const filter = useFilter(
    (query) => query.ilike("name", `*${searchParam ?? ""}*`).order("name"),
    [searchParam]
  );

  const [{ data: companies, error, fetching }] = useSelect("Company", {
    columns: "*, CompanyCharacteristic (*), CompanyTag (*)",
    filter,
  });

  const filterTheme = useFilter(
    (query) => query.eq("tagKey", themeParam).order("tagKey"),
    [themeParam]
  );

  const [{ data: tags }] = useSelect("Tag", {
    columns: "*, CompanyTag (*)",
    ...(themeParam && { filter: filterTheme }),
  });

  const getCompaniesFromTags = (tags: any[]) => {
    let listCompanies: any[] = [];
    tags.forEach((companies: any) => {
      companies.CompanyTag.forEach((company: any) => {
        listCompanies.push(company.company);
      });
    });
    return listCompanies;
  };

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
            {companies
              .filter(
                (company) =>
                  tags && getCompaniesFromTags(tags).includes(company.keyName)
              )
              .map((company: any) => (
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
