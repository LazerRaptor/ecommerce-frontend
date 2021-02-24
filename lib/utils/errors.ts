class RESTError extends Error {
    status: number;
    info: string;
    constructor(
        info: string, 
        ...params
    ) { 
        super(...params)
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = 'REST Error'
        this.info = info
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RESTError)
        }
    }
}

export { RESTError };