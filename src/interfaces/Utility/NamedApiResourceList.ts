export interface NamedApiResource<T> {
    name: string;
    url: string;
}

export interface NamedApiResourceList<T> {
    count: number;
    next: string;
    previous: string;
    results: ;
}
