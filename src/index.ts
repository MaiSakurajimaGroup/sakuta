export type Arguments<T> = [T] extends [(...args: infer U) => any]
	? U
	: [T] extends [void]
	? never[]
	: [T];

interface TypedEventEmitter<Events> {
	on<E extends keyof Events>(event: E, listener: Events[E]): this;
	once<E extends keyof Events>(event: E, listener: Events[E]): this;
	off<E extends keyof Events>(event: E, listener: Events[E]): this;
	removeAll<E extends keyof Events>(event?: E): this;
	emit<E extends keyof Events>(event: E, ...args: Arguments<Events[E]>): boolean;
}

export class Sakuta<Events> implements TypedEventEmitter<Events> {
	on<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	once<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	off<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	removeAll<E extends keyof Events>(event?: E): this {
		throw new Error('Method not implemented.');
	}

	emit<E extends keyof Events>(event: E, ...args: Arguments<Events[E]>): boolean {
		throw new Error('Method not implemented.');
	}
}
