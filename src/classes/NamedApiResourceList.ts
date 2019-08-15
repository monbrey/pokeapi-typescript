import { INamedApiResource } from "../interfaces/Utility/CommonModels";
import { INamedApiResourceList } from "../interfaces/Utility/ResourceList";
import { ApiResourceList } from "./ApiResourceList";
import { NamedApiResource } from "./NamedApiResource";

export class NamedApiResourceList<T> extends ApiResourceList<T> implements INamedApiResourceList<T> {
    public results: Array<NamedApiResource<T>>;

    constructor({ count, next, previous, results }, endpoint) {
        super({ count, next, previous, results: [] }, endpoint);

        this.results = results.map((r: INamedApiResource<T>) => new NamedApiResource<T>(r, endpoint));
    }
}
