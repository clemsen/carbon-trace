import StyleCompanyHeader from "./CompanyHeader.style";

interface PropsType {
  name?: string;
}

const CompanyHeader = ({ name }: PropsType) => {
  return (
    <StyleCompanyHeader className="company-header">
      <div className="company-logo">Logo Entreprise </div>
      <div className="company-name">{name}</div>
    </StyleCompanyHeader>
  );
};

export default CompanyHeader;
