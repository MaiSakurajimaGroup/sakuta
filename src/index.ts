type Listener<P extends Record<string, unknown>, Key extends keyof P> = (
	event: SakutaEvent<P, Key>
) => unknown;

export class Sakuta<Payloads extends Record<string, unknown>> {
	private readonly listeners: Map<keyof Payloads, Array<Listener<Payloads, keyof Payloads>>>;

	public constructor() {
		this.listeners = new Map();
	}

	public on<K extends keyof Payloads>(key: K, listener: Listener<Payloads, K>) {
		const existing = this.listeners.get(key) ?? [];
		this.listeners.set(key, [...existing, listener]);
	}

	public emit<K extends keyof Payloads>(key: K, data: Payloads[K]) {
		const listeners = this.listeners.get(key);

		if (!listeners) {
			return;
		}

		for (const listener of listeners) {
			listener(new SakutaEvent(this, key, data));
		}
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
