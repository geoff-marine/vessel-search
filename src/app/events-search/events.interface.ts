export interface Events {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
  cfr: string;
  CountryCode: string;
  VesselName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
  EventCode: string;
  EventStartDate: string;
  EventEndDate: string; };
}

export interface EventsSource extends Array<Events> {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
  cfr: string;
  CountryCode: string;
  VesselName: string;
  PortCode: string;
  PortName: string;
  Loa: string;
  Lbp: string;
  EventCode: string;
  EventStartDate: string;
  EventEndDate: string; };

}

