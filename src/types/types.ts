export type CompanyCharacteristicType = {
  id: number;
  company: string;
  characteristic: string;
  value: string;
  startDate: string;
  endDate: string;
  isDisplayed: boolean;
  Characteristic: CharacteristicType;
};

export type CompanyType = {
  id: number;
  keyName: string;
  name: string;
  createdAt: string;
  CompanyCharacteristic: CompanyCharacteristicType[];
};

export type CharacteristicType = {
  id: number;
  type: string;
  name: string;
  description?: string;
};
