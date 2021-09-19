import Config from "../models/config";

const CONFIG: Config = {
    baseurl: "/",

    narrationMarqueeAnimationDelay: 1,
    narrationMarqueeAnimationSpeed: 65,

    entryHallGalleryId: 0,
    entryHallNarrationAudio: "https://sos-diamond-jubilee-exhibitions.s3.amazonaws.com/galleries/entry-hall/20210918/assets/narration/gallery-intro.wav",
    entryHallNarrationText: `
        Welcome to the Sant Rajinder Singh Ji Maharaj Exhibition: Spreading Peace, Happiness and Spiritual Consciousness through Meditation
        Sant Rajinder Singh Ji Maharaj has been devoting his life to helping people throughout the world experience peace, happiness, and spiritual consciousness through meditation. He is the spiritual Master and head of Science of Spirituality, dedicated to inspiring people to learn meditation on the inner Light and Sound for physical, mental, and spiritual health and wellness. He is the author of numerous books such as Inner and Outer Peace through Meditation and Meditation as Medication for the Soul, practical guides that awaken people to the benefits meditation can bring them.
        Since 1989, he has dedicated himself to sharing these inner treasures by teaching meditation on the inner Light and Sound so people from all backgrounds can also achieve inner and outer peace and happiness.
        Each gallery in this exhibition takes you on a journey covering memorable highlights of his life and mission that are making a profound and lasting contribution to humanity for current times and for posterity. 
        The Gallery on Sant Rajinder Singh Ji Maharaj Spreading Peace and Joy through Meditation shares how his life’s work has been to share the meditation practices so people of all backgrounds can experience the wonders, joy, and peace that the inner Light and Sound bring.
        In the Gallery of Sant Rajinder Singh Ji Maharaj’s World Tours, marvel at how tirelessly he has been crisscrossing the globe nonstop since 1989, traveling over 2.5 million miles, making 850 tour stops in 43 countries on 6 continents so people can experience the joys and treasures of meditation.
        In the Gallery of Sant Rajinder Singh Ji Maharaj’s Worldwide Centers see how he has raised awareness and grown meditation’s popularity since 1989, through establishing over 3,200 Science of Spirituality centers in over 50 countries where people learn meditation, meditate together, deepen their inner growth, and join together to offer selfless service to humanity.
        The Gallery of Global Recognition of Sant Rajinder Singh Ji Maharaj’s Humanitarian Work features many esteemed venues at which he has spoken and the numerous International Conferences he convenes, bringing together people from all backgrounds to explore how meditation leads to inner and outer peace. The breadth of his service to humanity continues to be recognized globally by civic and social leaders, with glowing tributes and awards in appreciation of his tireless efforts to make the world a better place.
        The Gallery of  International Books, Media, Radio, TV, Internet broadcasts, and Social Media displays the magnitude of Sant Rajinder Singh Ji Maharaj’s labor of love in producing over 340 books in 56 languages totaling over 1740 titles since 1989.  It features how he also shares with humanity the benefits of meditation and the technique through his inspirational talks and interviews published in magazines, newspapers, on websites, and through TV, radio, Internet broadcasts, and social media viewed by millions.
        The Gallery of Sant Rajinder Singh Ji Maharaj’s Selfless Service and Charitable, Humanitarian Work highlights his universal love and caring for all people through his many humanitarian efforts providing assistance to those in need. His own example of serving humanity has inspired Science of Spirituality’s worldwide centers to lovingly serve people in need in their local areas and globally.
        The Gallery of Meditation for Physical, Mental, and Spiritual Health leaves visitors with inspiration on how meditation can lead to a lasting peace and happiness.
        We hope you enjoy this Sant Rajinder Singh Ji Maharaj exhibition.
    `,

    defaultLobbyLink: "/",
    sourceQueryParameterName: "source",
    sourceQueryParameterValuesToLobbyLinks: {
        "virtual": "https://www.sos.org/diamond-jubilee/exhibhition/virtual",
    },
};

export default CONFIG;