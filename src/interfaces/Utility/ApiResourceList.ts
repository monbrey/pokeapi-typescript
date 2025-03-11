import { Endpoint } from "../../lib/Endpoint";

export interface Base {
  id: number;
}

export interface NamedBase extends Base {
  name: string;
}

export interface ApiResource<T extends Base> {
  url: string;
  endpoint?: Endpoint<T>;
}

export interface ApiResourceList<T extends Base> {
  count: number;
  next: string;
  previous: string;
  results: ;
}
