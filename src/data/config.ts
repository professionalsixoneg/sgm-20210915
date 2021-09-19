import Config from "../models/config";

const CONFIG: Config = {
    baseurl: "/",

    narrationMarqueeAnimationDelay: 1,
    narrationMarqueeAnimationSpeed: 65,

    defaultLobbyLink: "/",
    sourceQueryParameterName: "source",
    sourceQueryParameterValuesToLobbyLinks: {
        "virtual": "https://www.sos.org/diamond-jubilee/exhibhition/virtual",
    },
};

export default CONFIG;