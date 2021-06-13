type MessageFunction<Args extends any[]> = (...args: Args) => string;

export function declareError<Args extends any[]>(name: string, message: MessageFunction<Args>) {
    return class extends Error {
        constructor(...args: Args) {
            super(message(...args));
            this.name = name;
        }
    };
}