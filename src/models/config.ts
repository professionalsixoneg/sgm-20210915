type Config = {
    baseurl: string,

    defaultLobbyLink: string,
    sourceQueryParameterName: string,
    sourceQueryParameterValuesToLobbyLinks: { [key: string]: string }
}

export default Config;