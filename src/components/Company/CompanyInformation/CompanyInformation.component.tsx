const CompanyInformation = () => {
  return (
    <div className="company-information">
      <div className="carbon-tracability-index">
        <div className="scope1">Scope 1</div>
        <div className="scope2">Scope 2</div>
        <div className="scope-suppliers">Scope fournisseurs</div>
      </div>
      <div className="carbon-euro">
        <div className="carbon-euro-tracability">Carbone par € estimé ISR</div>
        <div className="carbon-euro-classic">
          Carbone par € estimé bilan carbone
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
