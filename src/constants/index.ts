export type CompanyInfoType = { name: string; itc: string };

export const companiesInfo: Record<string, CompanyInfoType> = {
  lvmh: {
    name: "LVMH",
    itc: "4%",
  },
  danone: {
    name: "Danone",
    itc: "8%",
  },
};

export const SCOPE_1_2 = {
  LVMH: "4%",
  TotalEnergies: ">90%",
  AXA: "Non Communiqué",
  Stellantis: "10%",
};

const SOURCE = {
  LVMH: [
    "https://www.lvmh.fr/groupe/engagements/societe-environnement/empreinte-environnementale-du-groupe/",
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
};
