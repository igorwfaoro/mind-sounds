export class Exception extends Error {

    constructor(
        public message: string,
        public redirectTo?: string
    ) {
        super();
    }
}