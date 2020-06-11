
class UserError extends Error {
    public readonly name: string;
    public readonly httpCode: Number;
    public readonly isOperacional: boolean;

    constructor(name: string, httpCode: Number, description: string, isOperational: boolean) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype)

        this.name = name
        this.httpCode = httpCode
        this.isOperacional = isOperational

        Error.captureStackTrace(this)
    }
    
}