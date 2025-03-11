import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Berry } from "./Berry";

export type BerryFirmness = {
	berries: NamedApiResource<Berry>[];
	id: number;
	name: string;
	names: Name[];
};
