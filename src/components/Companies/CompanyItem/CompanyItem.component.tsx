import StyleCompanyItem from "./CompanyItem.style";

type PropsType = {
  name: string;
};

const companiesInfo: Record<string, any> = {
  LVMH: {
    logo: process.env.PUBLIC_URL + "/images/LVMH.png",
    itc: "4%",
  },
  Danone: {
    logo: process.env.PUBLIC_URL + "/images/Danone.png",
    itc: "8%",
  },
};

const CompanyItem = ({ name }: PropsType) => {
  return (
    <>
      {companiesInfo[name] && (
        <StyleCompanyItem className="company-item">
          <div className="company-item-name-logo">
            <img
              className="company-item-logo"
              src={companiesInfo[name].logo}
              alt={"logo " + name}
            />
            <div className="company-item-name">{name}</div>
          </div>
          <div className="company-item-information">
            {companiesInfo[name].itc}
          </div>
        </StyleCompanyItem>
      )}
    </>
  );
};

export default CompanyItem;
