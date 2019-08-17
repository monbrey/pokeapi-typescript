export interface INamedApiResource<T> {
    name: string;
    url: string;
}

export interface INamedApiResourceList<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<INamedApiResource<T>>;
}
