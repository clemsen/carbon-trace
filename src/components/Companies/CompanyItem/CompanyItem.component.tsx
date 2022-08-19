import { useEffect, useState } from "react";
import { supabase } from "../../../service/supabaseClient";
import StyleCompanyItem from "./CompanyItem.style";

interface PropsType {
  key_name: string;
  company: string;
}

const CompanyItem = ({ key_name, company }: PropsType) => {
  const [companyItc, setCompanyItc] = useState<any | null>(null);

  useEffect(() => {
    getCompanyItc();
  }, []);

  const getCompanyItc = async () => {
    try {
      let { data } = await supabase
        .from("CompanyCharacteristic")
        .select()
        .eq("company", key_name)
        .eq("characteristic", "itc")
        .single();
      if (data) {
        setCompanyItc(data);
      }
    } catch {
      console.log("Error getting data from supabase");
    }
  };

  return (
    <>
      {key_name && (
        <StyleCompanyItem
          to={{
            pathname: "/company/" + key_name,
          }}
        >
          <div className="company-item-name-logo">
            <img
              className="company-item-logo"
              src={"/images/" + key_name + ".png"}
              alt={"logo " + company}
            />
            <div className="company-item-name">{company}</div>
          </div>
          <div className="company-item-information">{companyItc?.value}</div>
        </StyleCompanyItem>
      )}
    </>
  );
};

export default CompanyItem;
