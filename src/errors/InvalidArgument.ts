import { declareError } from "./declareError"

export const InvalidArgument = declareError(
    "InvalidArgument",
    function (argName: string, reason?: string) {
        if (reason !== undefined) {
            return `"${argName}": ${reason}`;
        }
        return `"${argName}"`;
    }
)