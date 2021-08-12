type Listener<P> = (event: SakutaEvent<P>) => unknown;

export class Sakuta<Payloads extends Record<string, unknown>> {
	private readonly listeners: Array<Listener<keyof Payloads, Payloads[keyof Payloads]>> = [];

	on(key: Key) {
		//
	}
}

class SakutaEvent<P> {
	public readonly instance: Sakuta<P>;
	public readonly key: string;
	public readonly data: T;

	constructor(instance: Sakuta<P>, key: string, data: T) {
		this.instance = instance;
		this.key = key;
		this.data = data;
	}
}
