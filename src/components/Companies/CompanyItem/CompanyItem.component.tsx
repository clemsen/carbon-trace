import StyleCompanyItem from "./CompanyItem.style";

type PropsType = {
  name: string;
};

const CompanyItem = ({ name }: PropsType) => {
  return <StyleCompanyItem>{name}</StyleCompanyItem>;
};

export default CompanyItem;
