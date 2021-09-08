import { timeStamp } from "console"


export interface ImportSettings {
baseURI: string,
context: string,
data: string,
forceSerial: boolean,
format: string,
message: string,
name: string;
parcerSettings: ParcerSettings; 
status: string,
timeStamp: number,
type: string,
}

export interface ParcerSettings {
    failOnDataType: boolean,
    failOnLanguageTags: boolean,
    normalizeDataTypeValues: boolean,
    normalizeLanguageTags: boolean,
    preserveBNode: boolean,
    stopOnError: boolean,
    verifyDataType: boolean,
    }

    export interface LocationManagement {
active: boolean,
defaultRepository: string,
errorMSG: string,
label: string,
local: boolean,
password: string,
uri: string,
userName: string,

    }
