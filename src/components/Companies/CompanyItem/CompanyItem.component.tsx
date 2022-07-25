import StyleCompanyItem from "./CompanyItem.style";

type PropsType = {
  name: string;
};

const companiesInfo: Record<string, any> = {
  LVMH: {
    logo: "logo.png",
    itc: "4%",
  },
  Danone: {
    logo: "logo.png",
    itc: "8%",
  },
};

const CompanyItem = ({ name }: PropsType) => {
  return (
    <>
      {companiesInfo[name] && (
        <StyleCompanyItem>
          <img src={companiesInfo[name].logo} alt="logo" />
          <div>{name}</div>
          <div>{companiesInfo[name].itc}</div>
        </StyleCompanyItem>
      )}
    </>
  );
};

export default CompanyItem;
