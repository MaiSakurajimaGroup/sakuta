export type Arguments<T> = [T] extends [(...args: infer U) => any]
	? U
	: [T] extends [void]
	? never[]
	: [T];

interface TypedEventEmitter<Events> {
	addListener<E extends keyof Events>(event: E, listener: Events[E]): this;
	on<E extends keyof Events>(event: E, listener: Events[E]): this;
	once<E extends keyof Events>(event: E, listener: Events[E]): this;
	prependListener<E extends keyof Events>(event: E, listener: Events[E]): this;
	prependOnceListener<E extends keyof Events>(event: E, listener: Events[E]): this;

	off<E extends keyof Events>(event: E, listener: Events[E]): this;
	removeAllListeners<E extends keyof Events>(event?: E): this;
	removeListener<E extends keyof Events>(event: E, listener: Events[E]): this;

	emit<E extends keyof Events>(event: E, ...args: Arguments<Events[E]>): boolean;
	eventNames(): Array<keyof Events | string | symbol>;
	rawListeners<E extends keyof Events>(event: E): () => unknown[];
	listeners<E extends keyof Events>(event: E): () => unknown[];
	listenerCount<E extends keyof Events>(event: E): number;

	getMaxListeners(): number;
	setMaxListeners(maxListeners: number): this;
}

export class Sakuta<Events> implements TypedEventEmitter<Events> {
	addListener<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	on<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	once<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	prependListener<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	prependOnceListener<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	off<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	removeAllListeners<E extends keyof Events>(event?: E): this {
		throw new Error('Method not implemented.');
	}

	removeListener<E extends keyof Events>(event: E, listener: Events[E]): this {
		throw new Error('Method not implemented.');
	}

	emit<E extends keyof Events>(event: E, ...args: Arguments<Events[E]>): boolean {
		throw new Error('Method not implemented.');
	}

	eventNames(): Array<string | symbol | keyof Events> {
		throw new Error('Method not implemented.');
	}

	rawListeners<E extends keyof Events>(event: E): Function[] {
		throw new Error('Method not implemented.');
	}

	listeners<E extends keyof Events>(event: E): Function[] {
		throw new Error('Method not implemented.');
	}

	listenerCount<E extends keyof Events>(event: E): number {
		throw new Error('Method not implemented.');
	}

	getMaxListeners(): number {
		throw new Error('Method not implemented.');
	}

	setMaxListeners(maxListeners: number): this {
		throw new Error('Method not implemented.');
	}
	//
}
