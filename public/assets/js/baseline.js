setTimeout(() => {
  history.pushState(null, null, null);
  window.addEventListener("popstate", function () {
    history.pushState(null, null, null);
  });
}, 200);

// const baselines = [
//   "Abundance",
//   "Acceptance",
//   "Accomplished",
//   "Accuracy",
//   "Achievement",
//   "Acknowledged",
//   "Activeness",
//   "Adaptability",
//   "Adoration",
//   "Adroitness",
//   "Adventure",
//   "Affection",
//   "Affluence",
//   "Aggressive",
//   "Agility",
//   "Alertness",
//   "Altruism",
//   "Ambition",
//   "Amusement",
//   "Anticipation",
//   "Appreciation",
//   "Approachable",
//   "Articulate",
//   "Assertiveness",
//   "Assurance",
//   "Attentiveness",
//   "Attractiveness",
//   "Audacity",
//   "Availability",
//   "Awarwness",
//   "Awe",
//   "Balance",
//   "Beauty",
//   "Being The Best",
//   "Belonging",
//   "Benevolence",
//   "Bliss",
//   "Boldness",
//   "Bravery",
//   "Brilliance",
//   "Calmness",
//   "Camaraderie",
//   "Candor",
//   "Capability",
//   "Care",
//   "Carefullness",
//   "Celebrity",
//   "Certainty",
//   "Challenge",
//   "Charity",
//   "Charm",
//   "Chastity",
//   "Cheerfulness",
//   "Clarity",
//   "Cleanliness",
//   "Clear-mindedness",
//   "Cleverness",
//   "Closeness",
//   "Comfort",
//   "Commitment",
//   "Compassion",
//   "Completion",
//   "Composure",
//   "Concentration",
//   "Confidence",
//   "Conformity",
//   "Congruency",
//   "Connection",
//   "Consciousness",
//   "Conviction",
//   "Contentment",
//   "Continuity",
//   "Contribution",
//   "Control",
//   "Conviction",
//   "Conviviality",
//   "Coolness",
//   "Cooperation",
//   "Cordiality",
//   "Correctness",
//   "Courage",
//   "Courtesy",
//   "Craftiness",
//   "Creativity",
//   "Credibility",
//   "Cunning",
//   "Curiosity",
//   "Daring",
//   "Decisiveness",
//   "Decorum",
//   "Deference",
//   "Delight",
//   "Dependability",
//   "Depth",
//   "Desire",
//   "Determination",
//   "Devotation",
//   "Devoutness",
//   "Dexterity",
//   "Dignity",
//   "Diligence",
//   "Direction",
//   "Directness",
//   "Discipline",
//   "Discovery",
//   "Discretion",
//   "Diversity",
//   "Dominance",
//   "Dreaming",
//   "Drive",
//   "Duty",
//   "Dynamism",
//   "Eagerness",
//   "Economy",
//   "Ecstasy",
//   "Education",
//   "Effectiveness",
//   "Efficiency",
//   "Elation",
//   "Elegance",
//   "Empathy",
//   "Encouraging",
//   "Endurance",
//   "Energy",
//   "Enjoyment",
//   "Entertainment",
//   "Enthusiasm",
//   "Excellence",
//   "Excitement",
//   "Exhilaration",
//   "Expectancy",
//   "Expediency",
//   "Experience",
//   "Expertise",
//   "Exploration",
//   "Expressive",
//   "Extravagance",
//   "Extroversion",
//   "Exuberance",
//   "Fairness",
//   "Faith",
//   "Fame",
//   "Family",
//   "Fascination",
//   "Fashion",
//   "Fearlessness",
//   "Ferocity",
//   "Fidelity",
//   "Fierceness",
//   "Finanical",
//   "Firmness",
//   "Fitness",
//   "Flexibility",
//   "Flow",
//   "Fluency",
//   "Focus",
//   "Fortitude",
//   "Frankness",
//   "Freedom",
//   "Friendliness",
//   "Frugality",
//   "Fun",
//   "Gallantry",
//   "Gentility",
//   "Giving",
//   "Grace",
//   "Gratitude",
//   "Gregarious",
//   "Growth",
//   "Guidance",
//   "Happiness",
//   "Harmony",
//   "Health",
//   "Heart",
//   "Helpfulness",
//   "Heroism",
//   "Holiness",
//   "Honesty",
//   "Honor",
//   "Hopefulness",
//   "Hospitality",
//   "Humility",
//   "Humor",
//   "Hygiene",
//   "Imagination",
//   "Impact",
//   "Independence",
//   "Industry",
//   "Ingenuity",
//   "Inquisitiveness",
//   "Insightful",
//   "Inspiration",
//   "Integrity",
//   "Intelligence",
//   "Intensity",
//   "Intimacy",
//   "Intrepidness",
//   "Introversion",
//   "Intution",
//   "Inventiveness",
//   "Inversting",
//   "Joy",
//   "Judiciousness",
//   "Justice",
//   "Keenness",
//   "Kindness",
//   "Knowledge",
//   "Leadership",
//   "Leraning",
//   "Liberation",
//   "Liberty",
//   "Liveliness",
//   "Logic",
//   "Longevity",
//   "Love",
//   "Majesty",
//   "Making A Difference",
//   "Mastery",
//   "Maturity",
//   "Meekness",
//   "Mellowness",
//   "Meticulous",
//   "Mindfulness",
//   "Mpdesty",
//   "Motivation",
//   "Mysterious",
//   "Neatness",
//   "Nerve",
//   "Obedience",
//   "Open-minded",
//   "Openness",
//   "Optimism",
//   "Order",
//   "Organization",
//   "Originality",
//   "Outlandish",
//   "Outrageous",
//   "Passion",
//   "Peace",
//   "Perceptiveness",
//   "Perfection",
//   "Perkiness",
//   "Perseverance",
//   "Piety",
//   "Playfulness",
//   "Pleasantness",
//   "Pleasure",
//   "Poise",
//   "Popularity",
//   "Potency",
//   "Power",
//   "Persistence",
//   "Persuasive",
//   "Philanthropy",
//   "Practically",
//   "Pragmatism",
//   "Precision",
//   "Preparedness",
//   "Presense",
//   "Privacy",
//   "Proactive",
//   "Professional",
//   "Prosperity",
//   "Prudence",
//   "Punctuality",
//   "Purity",
//   "Realism",
//   "Reason",
//   "Recognition",
//   "Recreation",
//   "Refinement",
//   "Reflection",
//   "Relaxation",
//   "Reliability",
//   "Religiousness",
//   "Resilience",
//   "Resolution",
//   "Resolve",
//   "Resourceful",
//   "Respect",
//   "Rest",
//   "Restraint",
//   "Reverence",
//   "Richness",
//   "Rigor",
//   "Sacredness",
//   "Sacrifice",
//   "Sagacity",
//   "Saintliness",
//   "Satisfaction",
//   "Security",
//   "Self-control",
//   "Selflessness",
//   "Self-rellance",
//   "Sensitivity",
//   "Sensuality",
//   "Serenity",
//   "Service",
//   "Sexuality",
//   "Sharing",
//   "Shrewdness",
//   "Signlficance",
//   "Silence",
//   "Silliness",
//   "Simplicity",
//   "Sincerity",
//   "Skilfulness",
//   "Solidarity",
//   "Solitude",
//   "Soundness",
//   "Speed",
//   "Spirit",
//   "Spirituality",
//   "Sponataneity",
//   "Spunk",
//   "Stability",
//   "Stealth",
//   "Stillness",
//   "Strength",
//   "Structure",
//   "Success",
//   "Supremacy",
//   "Sympathy",
//   "Synergy",
//   "Teamwork",
//   "Temperance",
//   "Thankfulness",
//   "horoughness",
//   "Thoughtful",
//   "Thrift",
//   "Tidiness",
//   "Timeliness",
//   "Traditionalism",
//   "Tranquillity",
//   "Transcendence",
//   "Trust",
//   "Truth",
//   "Understanding",
//   "Unflappability",
//   "Uniqueness",
//   "Unity",
//   "Usefulness",
//   "Utllity",
//   "Veriety",
//   "Virtue",
//   "Vision",
//   "Vitality",
//   "Warmth",
//   "Watchfulness",
//   "Wealth",
//   "Wilfulness",
//   "Willingness",
//   "Winning",
//   "Wisdom",
//   "Wittiness",
//   "Wonder",
//   "Youthfulness",
//   "Zeal"
// ];

// first baseline

const baselines = [
  {
    id: 1,
    baselines: "Abundance",
    defination: "A plentiful quantity or supply of all things in life",
  },
  {
    id: 2,
    baselines: "Acceptance",
    defination:
      "To be positively accepting of people’s weaknesses and limitations.",
  },
  {
    id: 3,
    baselines: "Accomplished",
    defination: "Being successful/highly skilled in an activity",
  },
  {
    id: 4,
    baselines: "Accuracy",
    defination: "Quality of being correct, exact, precise and without error",
  },
  {
    id: 5,
    baselines: "Achievement",
    defination:
      "Accomplishing something noteworthy, admirable in your work or life in general",
  },
  {
    id: 6,
    baselines: "Acknowledged",
    defination: "Accepted as true, valid and legitimate",
  },
  {
    id: 7,
    baselines: "Activeness",
    defination: "To be active in all areas of life",
  },
  {
    id: 8,
    baselines: "Adaptability",
    defination: "To adjust and be flexible easily to changing circumstances",
  },
  {
    id: 9,
    baselines: "Adoration",
    defination: "Deep love, respect and veneration",
  },
  {
    id: 10,
    baselines: "Adroitness",
    defination: "Being and showing skilfulness",
  },
  {
    id: 11,
    baselines: "Adventure",
    defination: "To seek, create or explore novel or stimulating experiences",
  },
  {
    id: 12,
    baselines: "Affection",
    defination: "To express fondness or devotion often through physical touch",
  },
  {
    id: 13,
    baselines: "Affluence",
    defination: "Abundance of money, property and material wealth",
  },
  { id: 14, baselines: "Aggressive", defination: "Boldly assertive and pushy" },
  {
    id: 15,
    baselines: "Agility",
    defination: "The ability to move quickly and easily",
  },
  { id: 16, baselines: "Alertness", defination: "Fully aware, attentive" },
  { id: 17, baselines: "Altruism", defination: "Caring for others above self" },
  {
    id: 18,
    baselines: "Ambition",
    defination: "Driven by a strong desire to achieve something",
  },
  {
    id: 19,
    baselines: "Amusement",
    defination: "Entertain or divert in an enjoyable and cheerful manner",
  },
  {
    id: 20,
    baselines: "Anticipation",
    defination: "Expectation/ prediction of events",
  },
  {
    id: 21,
    baselines: "Appreciation",
    defination: "Ability to see good/the best in people and situations   ",
  },
  {
    id: 22,
    baselines: "Approachable",
    defination: "Easy to meet, know and talk to",
  },
  {
    id: 23,
    baselines: "Articulate",
    defination:
      "Ability to express, formulate and present with clarity and effectiveness",
  },
  {
    id: 24,
    baselines: "Assertiveness",
    defination:
      "To respectfully stand up for my rights and request what I want",
  },
  {
    id: 25,
    baselines: "Assurance",
    defination: "Promise or pledge/guarantee, surety",
  },
  {
    id: 26,
    baselines: "Attentiveness",
    defination: "Focused consideration, notice or observation",
  },
  {
    id: 27,
    baselines: "Attractiveness",
    defination: "Ability to attract people towards you",
  },
  { id: 28, baselines: "Audacity", defination: "Shocking boldness or daring" },
  {
    id: 29,
    baselines: "Availability",
    defination: "Being available for others always",
  },
  {
    id: 30,
    baselines: "Awareness",
    defination: "To be aware of my own thoughts, feelings and actions",
  },
  {
    id: 31,
    baselines: "Awe",
    defination:
      " To be filled with marvel, amazement when faced wi…imes, things are out of your hands and fate rules",
  },
  {
    id: 32,
    baselines: "Balance",
    defination:
      " Mental and emotional stability/remaining in a calm state and having balanced judges",
  },
  {
    id: 33,
    baselines: "Beauty",
    defination:
      " To experience intense mental pleasure through obs…that which is aesthetically appealing in creation",
  },
  {
    id: 34,
    baselines: "Being The Best",
    defination: " Being the best in everything",
  },
  {
    id: 35,
    baselines: "Belonging",
    defination: " Feeling a sense of connectedness to family and the world",
  },
  {
    id: 36,
    baselines: "Benevolence",
    defination: " Tendency to be kind and be giving",
  },
  { id: 37, baselines: "Bliss", defination: " Supreme joy and happiness" },
  { id: 38, baselines: "Boldness", defination: " Having courage and daring" },
  {
    id: 39,
    baselines: "Bravery",
    defination: " Having a spirit of courage, valour",
  },
  {
    id: 40,
    baselines: "Brilliance",
    defination: " Conspicuous talent, excellence or distinction",
  },
  {
    id: 41,
    baselines: "Calmness",
    defination: " To be calm and entered in every situation",
  },
  {
    id: 42,
    baselines: "Camaraderie",
    defination: " Goodwill and lighthearted connection to friends",
  },
  {
    id: 43,
    baselines: "Candor",
    defination: " The quality of being frank, open and sincere",
  },
  {
    id: 44,
    baselines: "Capability",
    defination: " Having the power, ability, efficiency",
  },
  {
    id: 45,
    baselines: "Care",
    defination:
      " To be physically and emotionally supported by fam…ughout your life and to value the same for others",
  },
  {
    id: 46,
    baselines: "Carefulness",
    defination: " Cautious in one’s actions",
  },
  {
    id: 47,
    baselines: "Celebrity",
    defination: " Desire to be known and be in the public eye",
  },
  {
    id: 48,
    baselines: "Certainty",
    defination:
      " To be free from doubt or reservations/confident and self assured",
  },
  {
    id: 49,
    baselines: "Challenge",
    defination: " To keep challenging yourself to grow, learn and improve",
  },
  { id: 50, baselines: "Charity", defination: " Generosity towards others" },
  {
    id: 51,
    baselines: "Charm",
    defination:
      " The ability to please or attract through personality or beauty",
  },
  {
    id: 52,
    baselines: "Chastity",
    defination: " Innocence and purity/opposite of promiscuous",
  },
  {
    id: 53,
    baselines: "Cheerfulness",
    defination: " Quality of being light hearted and making others happy",
  },
  {
    id: 54,
    baselines: "Clarity",
    defination: " Acting with mental acuity and clear purpose",
  },
  {
    id: 55,
    baselines: "Cleanliness",
    defination:
      " Keeping yourself clean in body, mind and spirit. …thy/cleaning up mistakes and making a fresh start",
  },
  {
    id: 56,
    baselines: "Clear-mindedness",
    defination:
      " The ability to make good decisions and to act qui…d calmly in a difficult situation or an emergency",
  },
  {
    id: 57,
    baselines: "Cleverness",
    defination: " Mentally bright, having sharp or quick intelligence",
  },
  {
    id: 58,
    baselines: "Closeness",
    defination:
      " The quality of having affection or intimacy in a relationship",
  },
  {
    id: 59,
    baselines: "Comfort",
    defination: " A cause or matter of relief or satisfaction",
  },
  {
    id: 60,
    baselines: "Commitment",
    defination: " Being bound in mind or heart to someone or something",
  },
  {
    id: 61,
    baselines: "Compassion",
    defination: " Act with kindness towards those less fortunate",
  },
  {
    id: 62,
    baselines: "Completion",
    defination: " Conclusion/Seeing things to their logical end",
  },
  {
    id: 63,
    baselines: "Composure",
    defination: " Maintaining a peaceful or calm state of mind",
  },
  {
    id: 64,
    baselines: "Concentration",
    defination: " Exclusive attention to one object or situation",
  },
  {
    id: 65,
    baselines: "Confidence",
    defination:
      " Realistic and objective self assurance that you h…at your skills are making a positive contribution",
  },
  {
    id: 66,
    baselines: "Conformity",
    defination: " To be respectful and obedient of rules and regulations",
  },
  {
    id: 67,
    baselines: "Congruency",
    defination: " Keeping all things in balance/ your actions match your words",
  },
  {
    id: 68,
    baselines: "Connection",
    defination:
      " To engage fully in whatever I am doing/be fully present with and for others",
  },
  {
    id: 69,
    baselines: "Consciousness",
    defination:
      " Awareness of the true nature of situations, people and yourself",
  },
  {
    id: 70,
    baselines: "Conviction",
    defination: " Doing things reliably in the same way",
  },
  { id: 71, baselines: "Contentment", defination: " Being satisfied" },
  {
    id: 72,
    baselines: "Continuity",
    defination: " A state of stability and the absence of disruption",
  },
  {
    id: 73,
    baselines: "Contribution",
    defination:
      " To contribute, help, assist or make a positive difference to the world",
  },
  { id: 74, baselines: "Control", defination: " To be in command" },
  {
    id: 75,
    baselines: "Conviction",
    defination: " A firmly held belief or opinion",
  },
  {
    id: 76,
    baselines: "Conviviality",
    defination: " The quality of being friendly and lively",
  },
  {
    id: 77,
    baselines: "Coolness",
    defination: " Absence of excitement or excessive emotions",
  },
  {
    id: 78,
    baselines: "Cooperation",
    defination: " Working well with others/collaborative",
  },
  {
    id: 79,
    baselines: "Cordiality",
    defination: " A feeling of warmth and friendliness",
  },
  {
    id: 80,
    baselines: "Correctness",
    defination: " Desire to be correct in an opinion or judgment",
  },
  {
    id: 81,
    baselines: "Courage",
    defination: " To persist in the face of fear, threat or difficulty",
  },
  {
    id: 82,
    baselines: "Courtesy",
    defination:
      " To interact with others in a polite, respectful, friendly and generous manner",
  },
  {
    id: 83,
    baselines: "Craftiness",
    defination: " Behaviour that is clever and sometimes also dishonest",
  },
  {
    id: 84,
    baselines: "Creativity",
    defination:
      " Original thought and expression that converts ide… images or concepts into practical concrete forms",
  },
  {
    id: 85,
    baselines: "Credibility",
    defination: " Ability to get others to believe in you",
  },
  {
    id: 86,
    baselines: "Cunning",
    defination: " Having skill to achieve one’s ends by all means available",
  },
  {
    id: 87,
    baselines: "Curiosity",
    defination: " To be open minded, interested to explore and discover",
  },
  {
    id: 88,
    baselines: "Daring",
    defination: " Actively seeking adventure and risk",
  },
  {
    id: 89,
    baselines: "Decisiveness",
    defination: " The ability to make decisions quickly and effectively",
  },
  {
    id: 90,
    baselines: "Decorum",
    defination: " Behaviour in accordance with good taste and propriety",
  },
  {
    id: 91,
    baselines: "Deference",
    defination: " Polite submission and respect",
  },
  { id: 92, baselines: "Delight", defination: " To take great pleasure in" },
  { id: 93, baselines: "Dependability", defination: " Reliability" },
  {
    id: 94,
    baselines: "Depth",
    defination: " The quality of being intense or extreme",
  },
  {
    id: 95,
    baselines: "Desire",
    defination:
      " A strong feeling of wanting to have something or wishing for something to happen",
  },
  {
    id: 96,
    baselines: "Determination",
    defination:
      " You focus your energy and efforts on a task and s… will power to do something difficult/impossible.",
  },
  {
    id: 97,
    baselines: "Devotation",
    defination:
      " Love, loyalty, enthusiasm for a person, activity or institution",
  },
  {
    id: 98,
    baselines: "Devoutness",
    defination: " A state of extreme religious piety",
  },
  {
    id: 99,
    baselines: "Dexterity",
    defination: " Skill in performing tasks especially with hands",
  },
  {
    id: 100,
    baselines: "Dignity",
    defination: " The state or quality of being worthy of honour or respect",
  },
  {
    id: 201,
    baselines: "Investing",
    defination:
      "To spend money, time or energy on something for long term benefit or purpose",
  },
  {
    id: 202,
    baselines: "Joy",
    defination: "The feeling of complete happiness and fulfilment",
  },
  {
    id: 203,
    baselines: "Judiciousness",
    defination:
      "sing or showing judgment in action or practical matters/discreet, prudent",
  },
  {
    id: 204,
    baselines: "Justice",
    defination: "Legally correct behaviour or treatment",
  },
  {
    id: 205,
    baselines: "Keenness",
    defination: "The quality of being eager or enthusiastic",
  },
  {
    id: 206,
    baselines: "Kindness",
    defination:
      "To be compassionate, considerate, nurturing or caring towards oneself or others",
  },
  {
    id: 207,
    baselines: "Knowledge",
    defination:
      "Facts, information and skills acquired through exp…eoretical or practical understanding of a subject",
  },
  {
    id: 208,
    baselines: "Leadership",
    defination:
      "The action of leading a group of people or an organisation through example",
  },
  {
    id: 209,
    baselines: "Learning",
    defination:
      "The lifelong acquisition of knowledge and skills through study or experience",
  },
  {
    id: 210,
    baselines: "Liberation",
    defination: "Freedom from limits on thoughts or behaviour",
  },
  {
    id: 211,
    baselines: "Liberty",
    defination: "The power or scope to act as one pleases",
  },
  {
    id: 212,
    baselines: "Liveliness",
    defination:
      "The quality of being outgoing, energetic and enthusiastic/an atmosphere of excitement and activity",
  },
  {
    id: 213,
    baselines: "Logic",
    defination:
      "A proper or reasonable way of thinking about something/ sound thinking",
  },
  { id: 214, baselines: "Longevity", defination: "Long life or service" },
  {
    id: 215,
    baselines: "Love",
    defination: "To act affectionately towards oneself or others",
  },
  { id: 216, baselines: "Majesty", defination: "Being impressive and great" },
  {
    id: 217,
    baselines: "Making A Difference",
    defination: "The positive impact you have on other people’s lives",
  },
  {
    id: 218,
    baselines: "Mastery",
    defination:
      "Comprehensive knowledge or skill in a particular subject or activity",
  },
  {
    id: 219,
    baselines: "Maturity",
    defination: "The state or fact of becoming an adult/coming of age",
  },
  { id: 220, baselines: "Meekness", defination: "Submissive" },
  {
    id: 221,
    baselines: "Mellowness",
    defination: "Kindheartedness through maturity",
  },
  {
    id: 222,
    baselines: "Meticulous",
    defination: "Showing great attention to detail/ very careful and precise",
  },
  {
    id: 223,
    baselines: "Mindfulness",
    defination: "The quality or state of being conscious or aware of something",
  },
  {
    id: 224,
    baselines: "Modesty",
    defination:
      "The quality or state of being unassuming in the estimation of one’s abilities",
  },
  {
    id: 225,
    baselines: "Motivation",
    defination: "Behaving in a particular way based on some reasons",
  },
  {
    id: 226,
    baselines: "Mysterious",
    defination: "Difficult or impossible to understand, explain/mystique",
  },
  {
    id: 227,
    baselines: "Neatness",
    defination: "The quality of being organised and clean",
  },
  {
    id: 228,
    baselines: "Nerve",
    defination: "Steadiness and courage in a demanding situation",
  },
  {
    id: 229,
    baselines: "Obedience",
    defination:
      "Dutiful and submissive compliance with moral and legal obligations establish by society",
  },
  {
    id: 230,
    baselines: "Open-minded",
    defination:
      "To examine ideas from all points of view before reaching a decision",
  },
  {
    id: 231,
    baselines: "Openness",
    defination: "Lack of secrecy or concealment",
  },
  {
    id: 232,
    baselines: "Optimism",
    defination: "Expecting the best possible outcome in every situation",
  },
  {
    id: 233,
    baselines: "Order",
    defination:
      "The arrangement or disposition of people or things in relation to each other/hierarchy",
  },
  {
    id: 234,
    baselines: "Organization",
    defination:
      "A group of people with a particular purpose, such as a business or government department",
  },
  {
    id: 235,
    baselines: "Originality",
    defination: "The ability to come up with novel and unusual ideas",
  },
  { id: 236, baselines: "Outlandish", defination: "Outlandish or bizarre" },
  {
    id: 237,
    baselines: "Outrageous",
    defination: "Shocking or against established norms",
  },
  {
    id: 238,
    baselines: "Passion",
    defination: "Strong uncontrollable emotions",
  },
  {
    id: 239,
    baselines: "Peace",
    defination: "Being free of conflict, violence and noise",
  },
  {
    id: 240,
    baselines: "Perceptiveness",
    defination:
      "Being observant and consciously aware of a situation or people",
  },
  {
    id: 241,
    baselines: "Perfection",
    defination: "The state or quality of being faultless",
  },
  {
    id: 242,
    baselines: "Perkiness",
    defination: "Bubbly, cheerful and with spontaneous good spirits",
  },
  {
    id: 243,
    baselines: "Perseverance",
    defination:
      "Sticking firmly and consistently to a course of action or belief",
  },
  {
    id: 244,
    baselines: "Piety",
    defination: "The quality of being religious or reverent",
  },
  {
    id: 245,
    baselines: "Playfulness",
    defination: "The quality of being lighthearted or full of fun",
  },
  {
    id: 246,
    baselines: "Pleasantness",
    defination:
      "The quality of having a pleasant or agreeable manner in social situations",
  },
  {
    id: 247,
    baselines: "Pleasure",
    defination:
      "A feeling of happy satisfaction/used or intended for entertainment",
  },
  { id: 248, baselines: "Poise", defination: "Graceful or elegant" },
  {
    id: 249,
    baselines: "Popularity",
    defination: "Being liked, admired by many people",
  },
  {
    id: 250,
    baselines: "Potency",
    defination: "The power of something to make an impression",
  },
  {
    id: 251,
    baselines: "Power",
    defination: "To strongly influence or wield authority over others",
  },
  {
    id: 252,
    baselines: "Persistence",
    defination: ". To continue resolutely despite problems and difficulties",
  },
  {
    id: 253,
    baselines: "Persuasive",
    defination: " Good at influencing someone to do or believe something",
  },
  {
    id: 254,
    baselines: "Philanthropy",
    defination:
      "The desire to promote the welfare of others, through the generous donation of money to good causes",
  },
  {
    id: 255,
    baselines: "Practically",
    defination:
      "The aspects of a situation that involve the actual…rience of something rather than theories or ideas",
  },
  {
    id: 256,
    baselines: "Pragmatism",
    defination:
      "An approach that evaluates theories or beliefs in …rms of the success of their practical application",
  },
  { id: 257, baselines: "Precision", defination: "Being exact or accurate" },
  {
    id: 258,
    baselines: "Preparedness",
    defination: "A state of readiness, particularly for war",
  },
  {
    id: 259,
    baselines: "Modesty",
    defination:
      "The state or fact of existing, occurring/ being available for others",
  },
  {
    id: 260,
    baselines: "Privacy",
    defination: "Being undisturbed or not observed by others",
  },
  {
    id: 261,
    baselines: "Proactive",
    defination: "Taking preemptive action to handle a situation",
  },
  {
    id: 262,
    baselines: "Professional",
    defination: "Being highly qualified in a specific profession",
  },
  {
    id: 263,
    baselines: "Prosperity",
    defination: "Being affluent and successful",
  },
  { id: 264, baselines: "Prudence", defination: "Being cautious" },
  {
    id: 265,
    baselines: "Punctuality",
    defination: "Being a stickler for time",
  },
  {
    id: 266,
    baselines: "Purity",
    defination: "Unadulterated/without contamination",
  },
  {
    id: 267,
    baselines: "Realism",
    defination:
      "Accepting a situation as it is and being prepared to deal with it accordingly",
  },
  {
    id: 268,
    baselines: "Reason",
    defination:
      "The ability of the mind to think, understand and form judgements logically",
  },
  {
    id: 269,
    baselines: "Recognition",
    defination: "Getting credit and acclaim for your contribution",
  },
  { id: 270, baselines: "Recreation", defination: "Leisure activity" },
  {
    id: 271,
    baselines: "Refinement",
    defination: "Cultured elegance in behaviour or manner",
  },
  {
    id: 272,
    baselines: "Reflection",
    defination: "Quality of undertaking serious thought and consideration",
  },
  {
    id: 273,
    baselines: "Relaxation",
    defination:
      "A diversion from physical and mental work which reduces stress",
  },
  { id: 274, baselines: "Reliability", defination: "Dependability" },
  {
    id: 275,
    baselines: "Religiousness",
    defination:
      "Having or showing belief in and reverence to religious principles",
  },
  {
    id: 276,
    baselines: "Resilience",
    defination: "Ability to bounce quickly from change or bad circumstances",
  },
  {
    id: 277,
    baselines: "Resolution",
    defination: "The quality of being determined/ firm decision",
  },
  { id: 278, baselines: "Resolve", defination: "Settle or find solution to" },
  {
    id: 279,
    baselines: "Resourceful",
    defination:
      "Ability to find quick and clever ways to overcome difficulties",
  },
  {
    id: 280,
    baselines: "Respect",
    defination:
      "Feeling of deep admiration for someone or somethin…ed on their abilities, qualities and achievements",
  },
  { id: 281, baselines: "Rest", defination: "To take a break from activity" },
  {
    id: 282,
    baselines: "Restraint",
    defination: "Keeping someone or something under control",
  },
  {
    id: 283,
    baselines: "Reverence",
    defination:
      "Having regard for the sacredness of life/have profound respect",
  },
  {
    id: 284,
    baselines: "Richness",
    defination: "Containing plentiful quantities of desirable attributes",
  },
  { id: 285, baselines: "Rigor", defination: "Harsh, stiff, rigid, stern" },
  {
    id: 286,
    baselines: "Sacredness",
    defination:
      "Holy and deserving respect, especially because of connection with God",
  },
  {
    id: 287,
    baselines: "Sacrifice",
    defination:
      "Willingness to give up something for something else more important",
  },
  {
    id: 288,
    baselines: "Sagacity",
    defination: "The ability to make wise and good decisions",
  },
  { id: 289, baselines: "Saintliness", defination: "The quality of holiness" },
  {
    id: 290,
    baselines: "Satisfaction",
    defination: "Pleasure derived from fulfilment of ones wishes",
  },
  {
    id: 291,
    baselines: "Security",
    defination: "Being free from danger or threat",
  },
  {
    id: 292,
    baselines: "Self-control",
    defination: "The ability to control one’s emotions an desires",
  },
  {
    id: 293,
    baselines: "Selflessness",
    defination: "Concern more with the needs/wishes of others over one’s own",
  },
  {
    id: 294,
    baselines: "Self-reliance",
    defination:
      "Dependence on one’s own power and resources rather than those of others",
  },
  {
    id: 295,
    baselines: "Sensitivity",
    defination: "Being aware and conscious of other’s emotions and feelings",
  },
  {
    id: 296,
    baselines: "Sensuality",
    defination:
      "To create, explore and enjoy experiences that stimulate the five senses",
  },
  {
    id: 297,
    baselines: "Serenity",
    defination: "Being calm in mind and peaceful",
  },
  { id: 298, baselines: "Service", defination: "Selfless service to humanity" },
  {
    id: 299,
    baselines: "Sexuality",
    defination: "To express oneself through sensual pleasure",
  },
  {
    id: 300,
    baselines: "Sharing",
    defination: "Dividing and sharing resources with others",
  },
  {
    id: 301,
    baselines: "Shrewdness",
    defination:
      " The quality of having or showing good powers of judgment/street smart",
  },
  {
    id: 302,
    baselines: "Signlficance",
    defination: "Being worthy of attention/importance",
  },
  {
    id: 303,
    baselines: "Silence",
    defination:
      " Keeping things to yourself/avoidance of mentioning or discussing something",
  },
  {
    id: 304,
    baselines: "Silliness",
    defination: " Lack of common sense or judgment/foolishness",
  },
  {
    id: 305,
    baselines: "Simplicity",
    defination: " Being plain, uncomplicate, easy to understand",
  },
  {
    id: 306,
    baselines: "Sincerity",
    defination: " Genuineness and honesty/not fake",
  },
  {
    id: 307,
    baselines: "Skilfulness",
    defination:
      " Adept at/ subtle or imaginative ability in inventing or devising",
  },
  {
    id: 308,
    baselines: "Solidarity",
    defination:
      " Unity or agreement of feeling or action, especially among individuals with a common interest",
  },
  {
    id: 309,
    baselines: "Solitude",
    defination: " Appreciation of one’s own company/being a loner",
  },
  {
    id: 310,
    baselines: "Soundness",
    defination:
      " Being in good condition/robust/ being based on valid reason or good judgment",
  },
  {
    id: 311,
    baselines: "Speed",
    defination: " The rate at which something happens or is done",
  },
  {
    id: 312,
    baselines: "Spirit",
    defination:
      "The prevailing or typical quality, mood, or attitude of a person, group or a period of time",
  },
  {
    id: 313,
    baselines: "Spirituality",
    defination:
      " Being concerned with the human spirit or soul as opposed to material or physical things",
  },
  {
    id: 314,
    baselines: "Sponataneity",
    defination: " Unplanned behaviour or action/spur of the moment",
  },
  { id: 315, baselines: "Spunk", defination: " Courage and determination" },
  {
    id: 316,
    baselines: "Stability",
    defination:
      " With a sound foundation/sane and sensible, not easily upset or disturbed",
  },
  {
    id: 317,
    baselines: "Stealth",
    defination: " Cautious or surreptitiously action or movement",
  },
  {
    id: 318,
    baselines: "Stillness",
    defination: " The absence of movement or sound",
  },
  {
    id: 319,
    baselines: "Strength",
    defination:
      " Physical stamina/the extent to which an argument or case is sound or convincing",
  },
  {
    id: 320,
    baselines: "Structure",
    defination:
      " Being organised/the arrangement of and relations between the parts or elements of something complex",
  },
  {
    id: 321,
    baselines: "Success",
    defination:
      " To attain favourable and prosperous financial res…aining the highest pinnacle in any sphere of life",
  },
  {
    id: 322,
    baselines: "Supremacy",
    defination:
      " The state or condition of being superior to all others in authority, power and status",
  },
  {
    id: 323,
    baselines: "Sympathy",
    defination: " Ability to relate to and share the feelings of others",
  },
  {
    id: 324,
    baselines: "Synergy",
    defination: " Working harmoniously with others for a common goal",
  },
  {
    id: 325,
    baselines: "Teamwork",
    defination:
      " The combined actions of a team to attain a professional/physical goal",
  },
  {
    id: 326,
    baselines: "Temperance",
    defination:
      " Moderation or voluntary self-restraint/abstinence from an activity",
  },
  {
    id: 327,
    baselines: "Thankfulness",
    defination: " Being grateful for what we have/being positive and content",
  },
  {
    id: 328,
    baselines: "Thoroughness",
    defination: " Taking great care and attention to detail",
  },
  {
    id: 329,
    baselines: "Thoughtful",
    defination: " Anticipate people’s thoughts and wishes",
  },
  {
    id: 330,
    baselines: "Thrift",
    defination: " Using money and other resources carefully and not wastefuly",
  },
  { id: 331, baselines: "Tidiness", defination: " Being neat and orderly" },
  {
    id: 332,
    baselines: "Timeliness",
    defination: " Being able to complete tasks within the given time frame",
  },
  {
    id: 333,
    baselines: "Traditionalism",
    defination: " Adherence to social and cultural norms",
  },
  {
    id: 334,
    baselines: "Tranquillity",
    defination: " Peacefulness/lack of disturbance",
  },
  {
    id: 335,
    baselines: "Transcendence",
    defination: " Experiences beyond the normal or physical level",
  },
  {
    id: 336,
    baselines: "Trust",
    defination: " Loyal, faithful, reliable and sincere",
  },
  {
    id: 337,
    baselines: "Truth",
    defination: " In accordance with fact or reality",
  },
  {
    id: 338,
    baselines: "Understanding",
    defination: " Positive truthful relationships with others",
  },
  {
    id: 339,
    baselines: "Unflappability",
    defination: " Not easily upset or disturbed/ grounded",
  },
  {
    id: 340,
    baselines: "Uniqueness",
    defination: " Being one of a kind/ out of the ordinary",
  },
  {
    id: 341,
    baselines: "Unity",
    defination:
      " Being joined as a whole/working together for a common purpose",
  },
  {
    id: 342,
    baselines: "Usefulness",
    defination: " Being able to have utility for a practical purpose",
  },
  {
    id: 343,
    baselines: "Utllity",
    defination: " Being useful, profitable or beneficial",
  },
  {
    id: 344,
    baselines: "Variety",
    defination: " Being diverse/opposite of monotonous and uniform",
  },
  {
    id: 345,
    baselines: "Virtue",
    defination: " Behaviour adhering to high moral standards",
  },
  {
    id: 346,
    baselines: "Vision",
    defination: " To think about or plan the future with imagination or wisdom",
  },
  {
    id: 347,
    baselines: "Vitality",
    defination: " Being strong, active and with energy",
  },
  {
    id: 348,
    baselines: "Warmth",
    defination: " Comfort from the elements/ safe and nourished",
  },
  {
    id: 349,
    baselines: "Watchfulness",
    defination: " Being on the lookout for danger and opportunity",
  },
  {
    id: 350,
    baselines: "Wealth",
    defination: " Plentiful supply of financial and other resources",
  },
  {
    id: 351,
    baselines: "Wilfulness",
    defination:
      " The trait of being prone to disobedience and lack of discipline",
  },
  {
    id: 352,
    baselines: "Willingness",
    defination: " Readiness/ being prepared for a specific action",
  },
  {
    id: 353,
    baselines: "Winning",
    defination: " Victory in a contest or competition",
  },
  {
    id: 354,
    baselines: "Wisdom",
    defination:
      " The quality of having experience, knowledge and good judgment/ being wise",
  },
  {
    id: 355,
    baselines: "Wittiness",
    defination: " The ability to be clever and make people laugh",
  },
  {
    id: 356,
    baselines: "Wonder",
    defination: " To experience life with marvel and amazement",
  },
  {
    id: 357,
    baselines: "Youthfulness",
    defination: " Behaviour or appearance characteristic of young people",
  },
  {
    id: 358,
    baselines: "Zeal",
    defination:
      " Great energy and enthusiasm in pursuit of a cause or objective",
  },
];

const renderBaselinesFirst = (words, id, step) => {
  const myapp = document.getElementById(id);
  let n = 1;
  words.forEach((data) => {
    const divEl = document.createElement("li");
    divEl.innerHTML = `
          <label class="baseline_word fs-3" title="${data.defination}" for="${data.baselines}${step}"><span>${n}</span>. ${data.baselines}</label>
          <input type="checkbox" name="${data.baselines}" id="${data.baselines}${step}" hidden>
          `;
    n++;
    myapp.append(divEl);
  });
};

renderBaselinesFirst(baselines, "baseline-first", "");

const selectBaseline = (step) => {
  let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
  wordBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("select");
    });
  });
};
selectBaseline("first");

const countBaselineFirst = (step) => {
  const inputs = document.querySelectorAll(`#baseline-${step} input`);

  let count = 0;
  inputs.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.checked) {
        count = count + 1;
      } else {
        count = count - 1;
      }
      document.querySelector(`.count-${step}`).innerText = count;

      // step = 1
      if(step === "first" && count >=26) {
        let subBtn = document.querySelector(`#baseline-sub-first`);
        subBtn.disabled = false;
      }

      //   step = 2
      if (step === "secound" && count >= 24) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-secound`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 3
      if (step === "third" && count >= 6) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-third`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 4
      if (step === "fourth" && count >= 5) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-fourth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 5
      if (step === "fifth" && count >= 4) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-fifth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 6
      if (step === "sixth" && count >= 3) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-sixth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 7
      if (step === "seventh" && count >= 2) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-seventh`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 8
      if (step === "eighth" && count >= 1) {
        let wordBtn = document.querySelectorAll(`#baseline-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-eighth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#ff5959";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }
    });
  });
};

countBaselineFirst("first");

// submit first baseline

let baselinesSecount = [];
const submitBaselineFirst = () => {
  const submitBtn = document.querySelector(".submit");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-first-container").style.display = "none";
    document.getElementById("baseline-secound-container").style.display =
      "block";
    document.querySelectorAll("#baseline-first input:checked").forEach((d) => {
      let selectedBaseline = d.previousElementSibling;
      const obj = {
        baselines: d.name,
        defination: selectedBaseline.title,
      };
      baselinesSecount.push(obj);
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesSecount, "baseline-secound", "secound");
    selectBaseline("secound");
    countBaselineFirst("secound");
  });
};

submitBaselineFirst();

// submit secoudn baseline

let baselinesThird = [];
const submitBaselineSecound = () => {
  const submitBtn = document.querySelector(".submit-secound");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-secound-container").style.display =
      "none";
    document.getElementById("baseline-third-container").style.display = "block";
    document
      .querySelectorAll("#baseline-secound input:checked")
      .forEach((d) => {
        let selectedBaseline = d.previousElementSibling;
        const obj = {
          baselines: d.name,
          defination: selectedBaseline.title,
        };
        baselinesThird.push(obj);
        submitBtn.disabled = true;
      });
    renderBaselinesFirst(baselinesThird, "baseline-third", "third");
    selectBaseline("third");
    countBaselineFirst("third");
  });
};
submitBaselineSecound();

// submit third baseline

let baselinesFourth = [];
const submitBaselineThird = () => {
  const submitBtn = document.querySelector(".submit-third");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-third-container").style.display = "none";
    document.getElementById("baseline-fourth-container").style.display =
      "block";
    document.querySelectorAll("#baseline-third input:checked").forEach((d) => {
      let selectedBaseline = d.previousElementSibling;
        const obj = {
          baselines: d.name,
          defination: selectedBaseline.title,
        };
        baselinesFourth.push(obj);
        submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesFourth, "baseline-fourth", "fourth");
    selectBaseline("fourth");
    countBaselineFirst("fourth");
  });
};
submitBaselineThird();

// final array for baseline selection

let baseline = [];

// final array for baseline selection end

// submit fourth baseline

let baselinesFifth = [];
const submitBaselinefourth = () => {
  const submitBtn = document.querySelector(".submit-fourth");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-fourth-container").style.display = "none";
    document.getElementById("baseline-fifth-container").style.display = "block";
    document.querySelectorAll("#baseline-fourth input").forEach((d) => {
      if (d.checked) {
        let selectedBaseline = d.previousElementSibling;
        const obj = {
          baselines: d.name,
          defination: selectedBaseline.title,
        };
        baselinesFifth.push(obj);
        submitBtn.disabled = true;
      } else {
        baseline.push(d.name);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesFifth, "baseline-fifth", "fifth");
    selectBaseline("fifth");
    countBaselineFirst("fifth");
  });
};
submitBaselinefourth();

// submit fifth baseline

let baselinesSixth = [];
const submitBaselineFifth = () => {
  const submitBtn = document.querySelector(".submit-fifth");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-fifth-container").style.display = "none";
    document.getElementById("baseline-sixth-container").style.display = "block";
    document.querySelectorAll("#baseline-fifth input").forEach((d) => {
      if (d.checked) {
        let selectedBaseline = d.previousElementSibling;
        const obj = {
          baselines: d.name,
          defination: selectedBaseline.title,
        };
         baselinesSixth.push(obj);
        submitBtn.disabled = true;
      } else {
        baseline.push(d.name);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesSixth, "baseline-sixth", "sixth");
    selectBaseline("sixth");
    countBaselineFirst("sixth");
  });
};
submitBaselineFifth();

// submit sixth baseline

let baselinesSeventh = [];
const submitBaselineSixth = () => {
  const submitBtn = document.querySelector(".submit-sixth");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-sixth-container").style.display = "none";
    document.getElementById("baseline-seventh-container").style.display =
      "block";
    document.querySelectorAll("#baseline-sixth input").forEach((d) => {
      if (d.checked) {
        let selectedBaseline = d.previousElementSibling;
        const obj = {
          baselines: d.name,
          defination: selectedBaseline.title,
        };
        baselinesSeventh.push(obj);
        submitBtn.disabled = true;
      } else {
        baseline.push(d.name);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesSeventh, "baseline-seventh", "seventh");
    selectBaseline("seventh");
    countBaselineFirst("seventh");
  });
};
submitBaselineSixth();

// submit seventh baseline

let baselinesEighth = [];
const submitBaselineSeventh = () => {
  const submitBtn = document.querySelector(".submit-seventh");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-seventh-container").style.display =
      "none";
    document.getElementById("baseline-eighth-container").style.display =
      "block";
    document.querySelectorAll("#baseline-seventh input").forEach((d) => {
      if (d.checked) {
        let selectedBaseline = d.previousElementSibling;
        const obj = {
          baselines: d.name,
          defination: selectedBaseline.title,
        };
        baselinesEighth.push(obj);
        submitBtn.disabled = true;
        baseline.push(d.name);
      } else {
        baseline.push(d.name);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesEighth, "baseline-eighth", "eighth");
    selectBaseline("eighth");
    countBaselineFirst("eighth");
  });
};
submitBaselineSeventh();

// submit eighth baseline

// submit to the api
const uuid = document.getElementById("uuid").value;
const postBaseline = async (baselineList) => {
  const responce = await fetch("/client/baseline/" + uuid, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(baselineList),
  });
  const data = await responce.json();
  return data;
};

// let baselinesNingth = [];
const submitBaselineEighth = () => {
  const submitBtn = document.querySelector(".submit-eighth");
  submitBtn.addEventListener("click", () => {
    document.getElementById("baseline-eighth-container").style.display = "none";
    document.getElementById("baseline-ningth-container").style.display =
      "block";
    postBaseline(baseline.reverse()).then((d) => {
      const result = d.user.baselines[0];
      const myapp = document.getElementById("baseline-ningth");
      let n = 1;
      result.forEach((baselineResult) => {
        if (d.status === "success") {
          const divEl = document.createElement("li");
          divEl.innerHTML = `
          <label class="baseline_word fs-3">${n}. ${baselineResult}</label>
          `;
          myapp.append(divEl);
          n++;
        } else if (d.status === "alreadyDone") {
          const msg = (document.querySelector(".message").innerText =
            d.message);
          const divEl = document.createElement("li");
          divEl.innerHTML = `
          <label class="baseline_word fs-3">${n}.
           ${baselineResult}</label>
          `;
          myapp.append(divEl);
          n++;
        }
      });
    });
  });
};
submitBaselineEighth();
