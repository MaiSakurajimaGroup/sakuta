type Listener<P> = (event: SakutaEvent<P>) => unknown;

export class Sakuta<Payloads extends Record<string, unknown>> {
	private readonly listeners: Array<Listener<keyof Payloads, Payloads[keyof Payloads]>> = [];

	on(key: Key) {
		//
	}
}

class SakutaEvent<P extends Record<string, unknown>, K extends keyof P> {
	public readonly instance: Sakuta<P>;
	public readonly key: K;
	public readonly data: P[K];

	constructor(instance: Sakuta<P>, key: K, data: P[K]) {
		this.instance = instance;
		this.key = key;
		this.data = data;
	}
}
