type Config = {
    baseurl: string,

    narrationMarqueeAnimationDelay: number,
    narrationMarqueeAnimationSpeed: number,

    entryHall3DLink: string,
    entryHallGalleryId: number,
    entryHallNarrationAudio: string,
    entryHallNarrationText: string,

    defaultLobbyLink: string,
    sourceQueryParameterName: string,
    sourceQueryParameterValuesToLobbyLinks: { [key: string]: string },

    exitLink: string,
}

export default Config;