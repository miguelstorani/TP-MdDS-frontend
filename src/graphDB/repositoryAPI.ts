
export interface repositoryManagement {
externalURL: string,
id: string,
local: boolean,
location: string,
title: string,
type: string,
unsupported: boolean,
writable: boolean,
readable: boolean,
uri: string,
}

export interface LoginRest {
baseURL: string,    
    userName: string,
    password: string,
}
