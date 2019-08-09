import ApiResource from "../../classes/ApiResource";
import NamedApiResource from "../../classes/NamedApiResource";

export interface IApiResourceList<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<ApiResource<T>>;
}

export interface INamedApiResourceList<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<NamedApiResource<T>>;
}
