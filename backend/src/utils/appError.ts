import { HTTPSTATUS, HttpStatusCodeType } from "../config/http.config";
import { ErrorCodeEnums, ErrorCodeEnumType } from "../enums/error-code.enum";

export class AppError extends Error {
    public statusCode: HttpStatusCodeType;
    public errorCode?: ErrorCodeEnumType;

    constructor(
        message: string,
        statusCode = HTTPSTATUS.INTERNAL_SERVER_ERROR,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message)
        this.statusCode = statusCode
        this.errorCode = errorCode
        Error.captureStackTrace(this, this.constructor)
    }
}

export class HttpException extends AppError {
    constructor(
        message: "Http Exception Error",
        statusCode: HttpStatusCodeType,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, statusCode, errorCode)
    }
}


export class InternalServerException extends AppError {
    constructor(
        message: "Internal Server Error",
        errorCode: ErrorCodeEnumType
    ) {
        super(
            message,
            HTTPSTATUS.INTERNAL_SERVER_ERROR,
            errorCode || ErrorCodeEnums.INTERNAL_SERVER_ERROR
        )
    }
}

export class NotFoundException extends AppError {
    constructor(
        message: "Resource not found",
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, HTTPSTATUS.NOT_FOUND, errorCode || ErrorCodeEnums.RESOURCE_NOT_FOUND)
    }
}

export class BadRequestException extends AppError {
    constructor(
        message: "Bad Request",
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, HTTPSTATUS.BAD_REQUEST, errorCode || ErrorCodeEnums.VALIDATION_ERROR)
    }
}

export class UnauthorizedException extends AppError {
    constructor(
        message: "Unauthorized Access",
        errorCode?: ErrorCodeEnumType
    ) {
        super(message, HTTPSTATUS.UNAUTHORIZED, errorCode || ErrorCodeEnums.ACCESS_AUAUTHORIZED)
    }
}