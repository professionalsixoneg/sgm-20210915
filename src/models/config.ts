type Config = {
    baseurl: string,

    narrationMarqueeAnimationDelay: number,
    narrationMarqueeAnimationSpeed: number,

    defaultLobbyLink: string,
    sourceQueryParameterName: string,
    sourceQueryParameterValuesToLobbyLinks: { [key: string]: string }
}

export default Config;