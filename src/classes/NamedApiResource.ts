import { INamedApiResource } from "../interfaces/Utility/CommonModels";
import { ApiResource } from "./ApiResource";
import { NamedEndpoint } from "./NamedEndpoint";

export class NamedApiResource<T> extends ApiResource<T> implements INamedApiResource<T> {
    public name: string;

    constructor(data: INamedApiResource<T>, endpoint?: NamedEndpoint<T>, ) {
        super(data, endpoint);
        this.name = data.name;
    }
}
