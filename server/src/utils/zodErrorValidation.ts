import { SafeParseError } from "zod";

export function flattenZErrors(error:SafeParseError<any>) {

    return Object.fromEntries(
        Object.entries(error.error.flatten().fieldErrors).map(([field, errors]) => {
            if(errors === undefined){
                return [field,'no errors']
            }
            return [field, errors[0]]
        })
    )

}