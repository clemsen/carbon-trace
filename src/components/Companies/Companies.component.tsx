import StyleCompanies from "./Companies.style";
import CompanyItem from "./CompanyItem";
import CompanyItemsTitle from "./CompanyItemsTitle";
import LateralMenu from "../LateralMenu";

import { supabase } from "../../service/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

interface PropsType {
  session: Session | null;
}

const Companies = ({ session }: PropsType) => {
  const [, setLoading] = useState(true);
  const [companies, setCompanies] = useState<any[] | null>(null);

  useEffect(() => {
    getCompanies();
  }, [session]);

  const getCompanies = async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase.from("Company");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCompanies(data);
      }
    } catch (error) {
      alert("Error");
    } finally {
      setLoading(false);
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
