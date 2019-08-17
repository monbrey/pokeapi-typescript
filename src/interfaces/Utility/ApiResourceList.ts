import { Endpoint } from "../../classes/Endpoint";

export interface IApiResource<T> {
    url: string;
    endpoint?: Endpoint<T>;
}

export interface IApiResourceList<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<IApiResource<T>>;
}
