export type CompanyInfoType = {
  name: string;
  itc: string;
  scope12?: string;
  scope1?: string;
  scope2?: string;
  scope3?: string;
  co2supplier?: string;
};

export const companiesInfo: Record<string, CompanyInfoType> = {
  lvmh: {
    name: "LVMH",
    itc: "6%",
    scope1: "1%",
    scope2: "5%",
    scope3: "94%",
    co2supplier: "0%",
  },
  danone: {
    name: "Danone",
    itc: "32%",
    scope12: "32%",
    scope3: "68%",
    co2supplier: "0%",
  },
  adobe: {
    name: "Adobe",
    itc: "13%",
    scope1: "1%",
    scope2: "12%",
    scope3: "87%",
    co2supplier: "0%",
  },
};

export const SCOPE_1_2 = {
  LVMH: "4%",
  TotalEnergies: ">90%",
  AXA: "Non Communiqué",
  Stellantis: "10%",
};

export const SOURCE = {
  LVMH: [
    "https://www.lvmh.fr/groupe/engagements/societe-environnement/empreinte-environnementale-du-groupe/", //2021
  ],
  Danone: [
    "https://www.danone.com/content/dam/danone-corp/danone-com/about-us-impact/policies-and-commitments/en/2016/2016_05_18_ClimatePolicyFullVersion.pdf", //2016
  ],
  TotalEnergies: [
    "https://totalenergies.com/sites/g/files/nytnzq121/files/documents/2020-10/TOTAL_RAPPORT_CLIMAT_2020.pdf",
  ],
  AXA: [
    "https://www-axa-com.cdn.axa-contento-118412.eu/www-axa-com/3989afa7-966b-40b4-9280-c57c7b82191a_AXA-2022_Climate-and-Biodiversity-report.pdf",
  ],
  Stellantis: [
    "https://www.stellantis.com/content/dam/stellantis-corporate/sustainability/csr-disclosure/stellantis/2021/Stellantis_2021_CSR_Report.pdf",
  ],
  Adobe: [
    "https://www.globaldata.com/data-insights/technology-media-and-telecom/adobe-annual-ghg-emissions/",
  ],
};
