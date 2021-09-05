type Listener<P extends Record<string, unknown>, K extends keyof P> = (
	event: SakutaEvent<K, P>
) => unknown;

export class Sakuta<Key extends string, Payloads extends Record<Key, unknown>> {
	private readonly listeners: Array<Listener<Payloads, keyof Payloads>> = [];

	on(key: Key) {
		console.log(key);
	}
}

class SakutaEvent<K extends string, P extends Record<K, unknown>> {
	public readonly instance: Sakuta<K, P>;
	public readonly key: K;
	public readonly data: P[K];

	constructor(instance: Sakuta<K, P>, key: K, data: P[K]) {
		this.instance = instance;
		this.key = key;
		this.data = data;
	}
}
