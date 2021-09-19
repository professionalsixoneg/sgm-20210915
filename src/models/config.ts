type Config = {
    baseurl: string,

    narrationMarqueeAnimationDelay: number,
    narrationMarqueeAnimationSpeed: number,

    entryHallGalleryId: number,
    entryHallNarrationAudio: string,
    entryHallNarrationText: string,

    defaultLobbyLink: string,
    sourceQueryParameterName: string,
    sourceQueryParameterValuesToLobbyLinks: { [key: string]: string },

    exitLink: string,
}

export default Config;