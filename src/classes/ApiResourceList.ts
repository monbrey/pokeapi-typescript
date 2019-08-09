import { IApiResource, INamedApiResource } from "../interfaces/Utility/CommonModels";
import { IApiResourceList } from "../interfaces/Utility/ResourceList";
import ApiResource from "./ApiResource";
import NamedApiResource from "./NamedApiResource";

export default class ApiResourceList<T> implements IApiResourceList<T> {
    public count: number;
    public next: string;
    public previous: string;
    public results: Array<ApiResource<T>>;

    constructor({ count, next, previous, results }, endpoint) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results.map((r: IApiResource<T>) => new ApiResource<T>(r, endpoint));
    }
}
