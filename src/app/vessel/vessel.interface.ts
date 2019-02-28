export interface Vessel {
  cfr: string;
  CountryCode: string;
  VesselName: string;
  ExactName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
}

export interface VesselSource {
  source: Vessel;
}
