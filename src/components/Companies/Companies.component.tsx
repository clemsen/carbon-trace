import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

import { supabase } from "../../service/supabaseClient";
import { useEffect, useState } from "react";

const Companies = () => {
  const [companies, setCompanies] = useState<any[] | null>(null);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    try {
      let { data } = await supabase.from("Company");
      if (data) {
        setCompanies(data);
      }
    } catch {
      console.log("Error getting data from supabase");
    }
  };

  return (
    <StyleCompanies>
      <div className="company-items">
        <>{console.log("companies = ", companies)}</>
        <h1>Entreprises</h1>
        <CompanyItemsTitle />
        {companies?.map((company: any) => (
          <CompanyItem company={company.key_name} />
        ))}
      </div>
      <LateralMenu />
    </StyleCompanies>
  );
};

export default Companies;
