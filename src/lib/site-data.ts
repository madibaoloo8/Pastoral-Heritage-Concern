export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  image: string;
  cta: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  dateLabel: string;
  summary: string;
  body: string[];
  category: string;
  image: string;
<<<<<<< HEAD
  current?: boolean;
  facts?: { label: string; value: string }[];
=======
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  category: string;
  image: string;
};

export type Publication = {
  title: string;
  type: "Annual Report" | "Policy Brief" | "Community Report" | "Press Release";
  status: "Coming soon" | "Available soon";
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const siteConfig = {
  name: "Pastoral Heritage Concern",
  shortName: "PHC",
  url: "https://www.pastoralheritageconcern.org",
  logo: "/brand/phc-logo.png",
  location: "Nairobi, Kenya",
  email: "paheritageconcern@gmail.com",
  phone: "",
  facebook: "https://www.facebook.com/PastoralHeritageConcern/",
  tagline:
    "Informing development policy and practice through grassroots innovative solutions.",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/projects", label: "Projects & Updates" },
  { href: "/reports", label: "Reports" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  {
    value: "Dialogue",
    label: "Community forums and local conversations designed around trust, prevention, and participation.",
  },
  {
    value: "Inclusion",
    label: "Awareness work that advances dignity, understanding, and practical support for excluded groups.",
  },
  {
    value: "Advocacy",
    label: "Grassroots knowledge translated into policy language, development practice, and stakeholder dialogue.",
  },
  {
    value: "Resilience",
    label: "Community-centered approaches that connect peacebuilding, youth engagement, and public awareness.",
  },
];

export const homepageFocusAreas = [
  {
    title: "Peacebuilding & Community Resilience",
    copy:
      "Convening communities and stakeholders around practical pathways for trust, prevention, and long-term resilience.",
  },
  {
    title: "Youth Engagement",
    copy:
      "Creating space for youth participation in local security, dialogue, and development conversations.",
  },
  {
    title: "Social Inclusion & Awareness",
    copy:
      "Advancing dignity, awareness, and community education around issues that affect excluded groups.",
  },
  {
    title: "Grassroots Policy Dialogue",
    copy:
      "Linking lived realities and local innovation to development policy and implementation practice.",
  },
];

export const programs: Program[] = [
  {
    slug: "peacebuilding-community-resilience",
    title: "Peacebuilding & Community Resilience",
    summary:
      "We strengthen local peace infrastructures through trust, dialogue, and practical resilience.",
    description:
      "We support peacebuilding and resilience by creating trusted spaces for dialogue, prevention, and shared problem-solving. Our approach is rooted in local credibility, public participation, and practical solutions that communities can carry forward.",
    outcomes: [
      "Dialogue-led conflict prevention support",
      "Community participation in peace processes",
      "Resilience thinking linked to daily realities",
    ],
    image: "/gallery/phc-peacebuilding.jpg",
    cta: "Explore peacebuilding work",
  },
  {
    slug: "youth-engagement",
    title: "Youth Engagement",
    summary:
      "We approach young people as civic actors and community partners, not only as beneficiaries.",
    description:
      "We create room for youth voice within development, security, and community conversations. We believe young people should participate in shaping solutions, building trust, and strengthening local resilience.",
    outcomes: [
      "Youth participation in local dialogue forums",
      "Community-centered leadership engagement",
      "Stronger inclusion in prevention conversations",
    ],
    image: "/gallery/phc-youth-engagement.jpg",
    cta: "See youth engagement",
  },
  {
    slug: "countering-violent-extremism",
    title: "Countering Violent Extremism",
    summary:
      "We facilitate prevention-oriented forums grounded in local context, partnership, and dialogue.",
    description:
      "We approach countering violent extremism through dialogue, trust, community awareness, and prevention rooted in local realities. We focus on strengthening resilience before harm takes deeper root.",
    outcomes: [
      "Stakeholder dialogue on prevention pathways",
      "Locally grounded public awareness",
      "Community-centered security conversations",
    ],
    image: "/gallery/phc-community-dialogue.jpg",
    cta: "View prevention initiatives",
  },
  {
    slug: "social-inclusion-awareness",
    title: "Social Inclusion & Awareness",
    summary:
      "We lead awareness and dignity-centered community education where stigma or misunderstanding remain barriers.",
    description:
      "We work to advance dignity, safety, and understanding through community education, county outreach, and practical awareness campaigns. Our inclusion work especially addresses stigma and public misunderstanding around albinism.",
    outcomes: [
      "Community education and myth reduction",
      "Awareness-oriented outreach support",
      "Public messaging that reinforces inclusion and dignity",
    ],
    image: "/gallery/phc-albinism-awareness.jpg",
    cta: "Read inclusion work",
  },
  {
    slug: "pastoralist-grassroots-development",
    title: "Pastoralist & Grassroots Development",
    summary:
      "We elevate local knowledge so development action reflects realities on the ground.",
    description:
      "We believe grassroots development must begin with how communities actually live, organize, and adapt. Our work connects lived experience, local knowledge, and context-sensitive action to more relevant development practice.",
    outcomes: [
      "Locally informed development dialogue",
      "Recognition of community-led innovation",
      "Practical linkage between lived reality and program design",
    ],
<<<<<<< HEAD
    image: "/gallery/phc-current-project/IMG-20260429-WA0013.jpg",
=======
    image: "/gallery/phc-community-outreach.jpg",
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
    cta: "View grassroots development",
  },
  {
    slug: "policy-advocacy-community-dialogue",
    title: "Policy, Advocacy & Community Dialogue",
    summary:
      "We contribute to policy and development conversations by grounding them in field realities.",
    description:
      "We translate what communities are experiencing, prioritizing, and learning into forms that can inform policy, partnerships, and development practice.",
    outcomes: [
      "Grassroots evidence linked to public conversations",
      "Dialogue that informs practice and partnerships",
      "Stronger alignment between communities and institutions",
    ],
    image: "/gallery/phc-partnerships.jpg",
    cta: "Discover advocacy work",
  },
];

export const featuredProjects: Project[] = [
  {
<<<<<<< HEAD
    slug: "mitigating-polycrisis-laisamis-merile-ward",
    title:
      "Mitigating Polycrisis Among Samburu Morans in Laisamis/Merile Ward",
    location: "Laisamis/Merile Ward, Samburu and Marsabit Counties, Kenya",
    dateLabel: "Current project",
    category: "Peacebuilding & Livelihoods",
    current: true,
    summary:
      "We are advancing a community-based response to cattle rustling, highway robbery, and climate stress by supporting 51 Morans with livelihoods, financial skills, climate adaptation knowledge, and peacebuilding training.",
    body: [
      "This concept note responds to a polycrisis affecting Morans in Samburu and Marsabit Counties, especially in Laisamis/Merile Ward. Insecurity linked to cattle rustling and highway robbery is intersecting with drought, resource scarcity, and economic marginalization.",
      "Our approach is to work with 51 Morans, organised into 17 groups of three, and help them move toward practical alternative livelihoods. The project combines sheep and goat trading and rearing, financial literacy, peacebuilding, climate adaptation, group savings, and market linkage support.",
      "The project is distributed across four locations in Laisamis/Merile Ward: Merile with 18 participants, Laisamis with 21, Lontolio with 6, and Nairobi with 6. Participants are selected with elders and local authorities to strengthen fairness and community ownership.",
      "Each group receives seed capital to begin livestock-based activity, alongside financial literacy, climate adaptation training, peacebuilding support, and a monthly group savings discipline meant to build a revolving fund over time.",
      "We see this as both a peacebuilding and economic resilience intervention. By expanding legitimate income options and strengthening local cooperation, we aim to reduce reliance on harmful survival strategies while improving community trust, mobility, and resilience.",
    ],
    facts: [
      { label: "Target participants", value: "51 Morans in 17 groups of three" },
      { label: "Locations", value: "Merile, Laisamis, Lontolio, and Nairobi" },
      { label: "Seed capital", value: "Kshs. 20,000 per group" },
      { label: "Project budget", value: "Kshs. 1,400,000 total" },
      { label: "Monthly savings", value: "Kshs. 1,000 per group" },
      { label: "Livelihood focus", value: "Sheep and goat trading and rearing" },
    ],
    image: "/gallery/phc-current-project/IMG-20260429-WA0026.jpg",
  },
  {
=======
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
    slug: "turkana-albinism-interactive-session",
    title: "Interactive Session with Service Providers and Caregivers of Children with Albinism",
    location: "Turkana / Lodwar, Kenya",
    dateLabel: "May 3, 2019",
    category: "Social Inclusion",
    summary:
      "We convened an interactive session focused on children with albinism, bringing service providers and caregivers into the same conversation around support, awareness, and practical response.",
    body: [
      "On Friday, May 3, 2019, we shared an interactive session involving service providers and caregivers of children with albinism in Turkana. We brought affected families and front-line actors into the same learning space.",
      "This kind of session reflects how we work at our most practical: through community education, convening, and problem-solving around inclusion.",
    ],
    image: "/gallery/phc-content/515414479_24463352369937363_3773270026668671520_n.jpg",
  },
  {
    slug: "chuka-tharaka-nithi-awareness-campaign",
    title: "County Awareness Campaign on Living Positively with Albinism",
    location: "Chuka, Tharaka Nithi County, Kenya",
    dateLabel: "February 20, 2018",
    category: "Social Inclusion",
    summary:
      "We carried out a county-level public education activity focused on helping communities understand albinism, manage it safely, and reduce harmful attitudes.",
    body: [
      "On February 20, 2018, we described our awareness campaign in Chuka, Tharaka Nithi County. We emphasized moving from county to county to educate communities on how to manage albinism safely and positively.",
      "This update reflects our field approach: taking awareness directly into communities, centering understanding, and addressing stigma through face-to-face engagement.",
    ],
    image: "/gallery/phc-content/515999881_24463628489909751_2609029881781484927_n.jpg",
  },
  {
    slug: "kapenguria-albinism-awareness-campaign",
    title: "Kapenguria Awareness Campaign on Respect and Protection",
    location: "Kapenguria, Kenya",
    dateLabel: "February 10, 2018",
    category: "Community Awareness",
    summary:
      "We led a public awareness campaign encouraging communities to respect and support people living with albinism and reject neglect or abuse.",
    body: [
      "On February 10, 2018, we urged communities in Kapenguria to love, respect, and support people with albinism, stressing that every life matters.",
      "This update shows how we use public education not just to inform, but to challenge harmful treatment and normalize inclusion in everyday life.",
    ],
    image: "/gallery/phc-content/481806304_686894176995555_7377831363299627845_n.jpg",
  },
  {
    slug: "narok-albinism-awareness-forum",
    title: "Narok County Forum on Awareness, Protection, and Inclusion",
    location: "Narok County, Kenya",
    dateLabel: "January 27, 2018",
    category: "Public Forum",
    summary:
      "We convened a county-level awareness forum that addressed discrimination, practical protection, and access to information for people living with albinism.",
    body: [
      "On January 27, 2018, we highlighted a Narok County awareness forum that discussed discrimination, protective gear such as caps, and the importance of better community information.",
      "The forum reflects how we combine public dialogue, practical education, and dignity-centered messaging in one accessible community platform.",
    ],
    image: "/gallery/phc-content/515511597_24462073850065215_8058844025935304557_n.jpg",
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "building-peace-and-resilience-in-grassroots-communities",
    title: "Building Peace and Resilience in Grassroots Communities",
    date: "Peacebuilding note",
    category: "Peacebuilding",
    excerpt:
      "Durable peace is strongest when local voices shape both the problem diagnosis and the response.",
    image: "/gallery/phc-peacebuilding.jpg",
    content: [
      "Community peacebuilding depends on trust, participation, and the ability of local actors to help define both priorities and solutions. We believe resilience grows through relationships and grounded civic dialogue.",
      "We believe resilience grows through relationships and grounded civic dialogue. This orientation is especially important in fragile contexts where formal solutions alone do not reach the social realities that drive conflict or insecurity.",
    ],
  },
  {
    slug: "youth-inclusion-in-community-security",
    title: "Youth Inclusion in Community Security",
    date: "Community security note",
    category: "Youth Engagement",
    excerpt:
      "Young people are not only affected by insecurity. They are also key partners in building safer communities.",
    image: "/gallery/phc-youth-engagement.jpg",
    content: [
      "We approach youth engagement as part of wider community resilience. That means creating room for young people to participate in conversations that affect their present and future.",
      "When communities take youth voice seriously, prevention efforts become more credible, more practical, and more likely to endure.",
    ],
  },
  {
    slug: "why-local-knowledge-matters-in-development-policy",
    title: "Why Local Knowledge Matters in Development Policy",
    date: "Policy perspective",
    category: "Policy & Advocacy",
    excerpt:
      "Policy becomes more useful when it starts from lived experience rather than distance from it.",
    image: "/gallery/phc-community-dialogue.jpg",
    content: [
      "Local knowledge helps explain what communities are already doing, where systems are failing, and how interventions can become more relevant. Our work is rooted in that connection between grassroots reality and development practice.",
      "The more institutions listen well, the more development action can respond with credibility and practical value.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "PHC Annual Report",
    type: "Annual Report",
    status: "Coming soon",
    description:
      "Space reserved for our approved annual report and institutional overview.",
  },
  {
    title: "Peacebuilding and Community Dialogue Brief",
    type: "Policy Brief",
    status: "Coming soon",
    description:
      "Reserved for an issue brief or advocacy note linked to our peacebuilding and dialogue work.",
  },
  {
    title: "Community Awareness and Inclusion Report",
    type: "Community Report",
    status: "Available soon",
    description:
      "Reserved for community education, awareness, or field summary reports.",
  },
  {
    title: "Institutional Press Statement",
    type: "Press Release",
    status: "Coming soon",
    description:
      "Reserved for statements, event announcements, and partner communications.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
<<<<<<< HEAD
    src: "/gallery/phc-current-project/IMG-20260429-WA0012.jpg",
    alt: "Goats gathered under a tree during the current pastoral livelihoods project",
    caption:
      "Goats gathered under shade in the current Laisamis/Merile Ward project area, reflecting the pastoral livelihood context that this intervention is built around.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0014.jpg",
    alt: "Road access into the project area in Samburu and Marsabit",
    caption:
      "Road access into the project area, showing the arid and remote terrain that shapes movement, trade, service delivery, and security in this work.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0021.jpg",
    alt: "Morans gathered with goats during the Laisamis/Merile livelihoods intervention",
    caption:
      "Goat-based livelihood activity from our current Laisamis/Merile Ward intervention, where we are working with Morans on practical alternatives to insecurity and economic marginalisation.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0020.jpg",
    alt: "Community livestock handling during the Samburu and Marsabit livelihoods project",
    caption:
      "Livestock exchange and handling scene from the current project, reflecting our focus on sheep and goat trading and rearing as a practical income pathway.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0026.jpg",
    alt: "Participants in the current Morans resilience and livelihoods project",
    caption:
      "Participants in our current project in Laisamis/Merile Ward, where peacebuilding, financial literacy, and livelihood support are being brought together in one intervention.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0033.jpg",
    alt: "Community participants during a field gathering in the current project area",
    caption:
      "Field gathering linked to the current project, showing the community-facing nature of our engagement with Morans, local leaders, and livelihoods activity.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0013.jpg",
    alt: "Livestock market scene from the current Laisamis/Merile Ward intervention",
    caption:
      "Livestock market scene from the current intervention, highlighting the pastoralist context and the project’s connection to livestock-based livelihoods.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0030.jpg",
    alt: "Community members gathering during the current Laisamis/Merile Ward intervention",
    caption:
      "Community members gathering during the current intervention, showing participation, local presence, and the collective nature of the project’s peacebuilding and livelihoods work.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0040.jpg",
    alt: "Morans and community members during the current field engagement",
    caption:
      "Morans and community members during current field engagement, reflecting the active, people-centered atmosphere around the project’s dialogue and livelihoods support.",
  },
  {
    src: "/gallery/phc-current-project/IMG-20260429-WA0046.jpg",
    alt: "Community members in the current Samburu Morans project area",
    caption:
      "Community members in the project area during the current intervention, showing the wider social setting around the livelihoods and peacebuilding work.",
  },
  {
=======
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
    src: "/gallery/phc-community-dialogue.jpg",
    alt: "PHC community dialogue or awareness session",
    caption: "Community dialogue and awareness session from our work with communities and local stakeholders.",
  },
  {
    src: "/gallery/phc-youth-engagement.jpg",
    alt: "PHC facilitator addressing participants during a forum session",
    caption: "Forum facilitation and participant engagement during one of our community sessions.",
  },
  {
    src: "/gallery/phc-peacebuilding.jpg",
    alt: "PHC session with community participants seated during a forum",
    caption: "Community session format we use in dialogue and awareness work.",
  },
  {
    src: "/gallery/phc-albinism-awareness.jpg",
    alt: "Albinism awareness participants holding protective products",
    caption: "Albinism awareness and protective-gear messaging from our inclusion work.",
  },
  {
    src: "/gallery/phc-community-outreach.jpg",
    alt: "PHC outreach participants during a county awareness campaign",
    caption: "County-level awareness activity from our outreach work.",
  },
  {
    src: "/gallery/phc-partnerships.jpg",
    alt: "PHC participants during a community education or facilitation session",
    caption: "Community education and facilitation setting from our field activities.",
  },
  {
    src: "/gallery/phc-content/481806304_686894176995555_7377831363299627845_n.jpg",
    alt: "Group photo from our albinism awareness programme",
    caption:
      "Group photo from our albinism awareness programme, showing children, caregivers, and partners gathered around the Albinism Awareness Programme banner.",
  },
  {
    src: "/gallery/phc-content/514248807_24453000980972502_1368906313733929931_n.jpg",
    alt: "Speaker addressing participants at the Wajir CVE Forum",
    caption:
      "Speaker at the Wajir CVE Forum. The visible banner references a youth engagement forum focused on building resilience against extremism.",
  },
  {
    src: "/gallery/phc-content/514282541_24453001330972467_6075284260396228587_n.jpg",
    alt: "Youth team photo from our Wajir community engagement work",
    caption:
      "Youth team image from our Wajir community engagement work, representing the youth-facing side of forum and outreach activities.",
  },
  {
    src: "/gallery/phc-content/514362504_24453001320972468_6812200245566948540_n.jpg",
    alt: "Participants gathered at the Wajir CVE Forum",
    caption:
      "Group photo from the Wajir CVE forum, showing participants gathered around our event banner.",
  },
  {
    src: "/gallery/phc-content/514396075_24453001070972493_7578738365974301816_n.jpg",
    alt: "Forum participant speaking at the Wajir CVE session",
    caption:
      "Forum participant during the Wajir CVE session, with the banner explicitly referencing resilience against extremism.",
  },
  {
    src: "/gallery/phc-content/514404792_24453001317639135_436416144799516152_n.jpg",
    alt: "Wajir CVE Forum banner",
    caption:
      "Close-up of the Wajir CVE forum banner used during the event.",
  },
  {
    src: "/gallery/phc-content/514411010_24453001074305826_3691854253098311840_n.jpg",
    alt: "Participants listening during a Wajir CVE discussion",
    caption:
      "Discussion table at the Wajir CVE Forum, showing the meeting format and stakeholder participation.",
  },
  {
    src: "/gallery/phc-content/514416409_24453001217639145_9685535821521761_n.jpg",
    alt: "Participants in our albinism support and awareness work holding sunscreen",
    caption:
      "Session image from our albinism support and awareness work, with participants holding sunscreen and other protective materials.",
  },
  {
    src: "/gallery/phc-content/515007231_24453001174305816_1118751644143343447_n.jpg",
    alt: "Youth participants posing with the Wajir CVE Forum banner",
    caption:
      "Youth participants photographed with the Wajir CVE forum banner, reinforcing the youth engagement side of the event.",
  },
  {
    src: "/gallery/phc-content/515044382_24463628483243085_6799843090899779337_n.jpg",
    alt: "Community gathering linked to our awareness and inclusion work",
    caption:
      "Large community session linked to our awareness and inclusion work, showing our facilitator-led approach to community education.",
  },
  {
    src: "/gallery/phc-content/515331937_24453001327639134_3919631828339918608_n.jpg",
    alt: "Speaker addressing the Wajir CVE youth forum",
    caption:
      "Speaker addressing the Wajir CVE youth forum, reflecting our emphasis on dialogue and resilience.",
  },
  {
    src: "/gallery/phc-content/515414479_24463352369937363_3773270026668671520_n.jpg",
    alt: "Indoor awareness session with learners, families, and facilitators",
    caption:
      "Indoor awareness session showing learners, families, and facilitators gathered around practical education and support materials in our albinism-related work.",
  },
  {
    src: "/gallery/phc-content/515441394_24451704111102189_5778170433595601681_n.jpg",
    alt: "Community tree-planting activity from our outreach work",
    caption:
      "Community tree-planting image included as a broader example of local civic participation and field engagement.",
  },
  {
    src: "/gallery/phc-content/515508930_24451704417768825_2650641128417600928_n.jpg",
    alt: "Volunteers participating in a planting activity",
    caption:
      "Volunteer planting activity showing hands-on participation beyond formal meeting spaces.",
  },
  {
    src: "/gallery/phc-content/515511597_24462073850065215_8058844025935304557_n.jpg",
    alt: "Community forum with families seated during a public session",
    caption:
      "Community forum image with families, children, and facilitators seated together in an open, community-based discussion setting.",
  },
  {
    src: "/gallery/phc-content/515700087_24463352383270695_5805512767187943132_n.jpg",
    alt: "Awareness session with participants seated in a classroom setting",
    caption:
      "Awareness session in a classroom-style setting, showing how we use practical learning environments for community education.",
  },
  {
    src: "/gallery/phc-content/515720204_24453003084305625_4077190533791850048_n.jpg",
    alt: "Young football players during a PHC community engagement activity",
    caption:
      "Football activity image from Wajir, included as a youth-engagement visual tied to the broader community forum context.",
  },
  {
    src: "/gallery/phc-content/515999881_24463628489909751_2609029881781484927_n.jpg",
    alt: "Participants in black albinism support shirts holding sunscreen",
    caption:
      "Participants in albinism support shirts holding sunscreen products, reflecting our emphasis on protection, dignity, and practical awareness.",
  },
];
