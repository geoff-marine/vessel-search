export interface Vessel {
  cfr: string;
  CountryCode: string;
  VesselName: string;
  ExactName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
  TonRef: string;
  PowerMain: string;
}

export interface VesselSource extends Array<Vessel> {
  cfr: string;
  CountryCode: string;
  VesselName: string;
  ExactName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
  TonRef: string;
  PowerMain: string;
}

