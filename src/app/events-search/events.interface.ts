export interface Events {
  cfr: string;
  CountryCode: string;
  VesselName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
  EventCode: string;
  EventStartDate: string;
  EventEndDate: string;
  TonRef: string;
  PowerMain: string;
}

export interface EventsSource extends Array<Events> {

  cfr: string;
  CountryCode: string;
  VesselName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
  EventCode: string;
  EventStartDate: string;
  EventEndDate: string;
  TonRef: string;
  PowerMain: string;

}

