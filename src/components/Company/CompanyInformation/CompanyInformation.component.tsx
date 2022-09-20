import { CompanyCharacteristicType, CompanyType } from "../../../types/types";
import StyleCompanyInformation from "./CompanyInformation.style";

interface PropsType {
  company: CompanyType;
}

const CompanyInformation = ({ company }: PropsType) => {
  const listCharacteristics = company.CompanyCharacteristic.sort(
    (charac1, charac2) =>
      charac1.Characteristic.order - charac2.Characteristic.order
  ).filter((charcteristic) => charcteristic.Characteristic.isDisplayed);

  const getCharacteristic = (
    characName: string
  ): CompanyCharacteristicType | undefined => {
    const listCharacteristicsFiltered = listCharacteristics.filter(
      (charac) => charac.characteristic === characName
    );
    if (listCharacteristicsFiltered.length > 0) {
      return listCharacteristicsFiltered[0];
    }
  };

  return (
    <StyleCompanyInformation className="company-information">
      <div className="info">
        <div className="info-title">L'essentiel</div>
        <div className="info-detail info-good">
          <div className="info-characteristic">
            <span className="info-type">
              {getCharacteristic("co2-eur")?.Characteristic.name}
            </span>
            <span className="info-value">
              {getCharacteristic("co2-eur")?.value}
            </span>
          </div>
          <div className="info-characteristic">
            <span className="info-type">
              {getCharacteristic("co2-total")?.Characteristic.name}
            </span>
            <span className="info-value">
              {getCharacteristic("co2-total")?.value}
            </span>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-title">Ce qui est traçable</div>
        <div className="info-detail info-good">
          <div className="info-characteristic">
            <span className="info-type">
              {getCharacteristic("itc")?.Characteristic.name}
            </span>
            <span className="info-value">
              {getCharacteristic("itc")?.value}
            </span>
          </div>
          <div className="sub-info">
            <span className="sub-info-prefix">dont</span>
            <div className="sub-info-indent">
              <div className="info-characteristic">
                <span className="info-type">
                  {getCharacteristic("scope1")?.Characteristic.name}
                </span>
                <span className="info-value">
                  {getCharacteristic("scope1")?.value}
                </span>
              </div>
              <div className="info-characteristic">
                <span className="info-type">
                  {getCharacteristic("scope2")?.Characteristic.name}
                </span>
                <span className="info-value">
                  {getCharacteristic("scope2")?.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-title">Ce qui n'est pas traçable</div>
        <div className="info-detail info-bad">
          <div className="info-characteristic">
            <span className="info-type">
              {getCharacteristic("scope3")?.Characteristic.name}
            </span>
            <span className="info-value">
              {getCharacteristic("scope3")?.value}
            </span>
          </div>
          <div className="sub-info">
            <span className="sub-info-prefix">dont</span>
            <div className="sub-info-indent">
              <div className="info-characteristic">
                Les émissions liées aux achats de biens et de service par
                l’entreprise
              </div>
              <div className="info-characteristic">
                Les émissions liées à l’utilisation du produit ou service vendu
                par l’entreprise
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleCompanyInformation>
  );
};

export default CompanyInformation;
