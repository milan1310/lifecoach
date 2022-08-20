const baselines = [
  { id: 1, n_code: " I am just not good enough", e_code: "I am the best." },
  {
    id: 2,
    n_code: " Fear of disappointing God",
    e_code: "God is always with me.",
  },
  {
    id: 3,
    n_code: " Lack of faith in my own good or my own goals",
    e_code: "I am the creator of my own destiny.",
  },
  {
    id: 4,
    n_code: " I don't contribute",
    e_code: "I am here to contribute.",
  },
  {
    id: 5,
    n_code: "I don't have the ability to protect myself emotionally",
    e_code: " I am a powerhouse of positive emotions",
  },
  { id: 6, n_code: "I am not lovable", e_code: "I am a love magnet" },
  {
    id: 7,
    n_code: " Severely abused/beaten/denied food, love, and attention",
    e_code: "I am always loved, protected and respected",
  },
  {
    id: 8,
    n_code:
      " I have to keep my distance in relationships because others will trample on my emotion",
    e_code: "Every relationship is an opportunity to grow and blossom",
  },
  {
    id: 9,
    n_code: " I can't be what I want because others won't be safe",
    e_code: "Every relationship is an opportunity to grow and blossom",
  },
  {
    id: 10,
    n_code: " I can't change jobs because my dependents won't feel secure",
    e_code: "I bring joy and prosperity in any job I do.",
  },
  {
    id: 11,
    n_code:
      " I have to change myself for others in order to be loved or lovable",
    e_code: "I am loveable as I am",
  },
  {
    id: 12,
    n_code: " I have to be weak or submissive in order to be loved",
    e_code: "People love me when I am strong and powerful.",
  },
  {
    id: 13,
    n_code: " Always giving in to what others want",
    e_code: "I am assertive.",
  },
  {
    id: 14,
    n_code: "I can't love myself or others unconditionally",
    e_code: "I am full of unconditional love for myself and others",
  },
  {
    id: 15,
    n_code: "Belief that I am unable to love",
    e_code: "My love is limitless ",
  },
  {
    id: 16,
    n_code: "Don't know how to give and receive love",
    e_code: "I attract and give love where ever I go.",
  },
  {
    id: 17,
    n_code: "Can't let love in",
    e_code: "I feel love in every cell of my body.",
  },
  {
    id: 18,
    n_code: "Denied food, love, and/or attention",
    e_code: "I am fulfilled.",
  },
  {
    id: 19,
    n_code: "Never hugged or touched enough",
    e_code: " People always express physical and emotional love to me",
  },
  {
    id: 20,
    n_code: "My main priority is to preserve my family or other's needs",
    e_code: "I feel complete and satisfied taking care of myself and my loved ones",
  },
  {
    id: 21,
    n_code: "I always have to sacrifice myself for the greater cause",
    e_code: "I enjoy my journey to greatness.",
  },
  {
    id: 22,
    n_code: "I can't survive on my own",
    e_code: "I am like an umbrella for my family.",
  },
  {
    id: 23,
    n_code: "Disconnected from my true self",
    e_code: "I am connected to my divine self.",
  },
  {
    id: 24,
    n_code: "I don't remember the real me",
    e_code: "I am unique and real.",
  },
  {
    id: 25,
    n_code: "I always give love, but there is never enough love for me",
    e_code: "The more love I give the more abundance of love I receive",
  },
  {
    id: 26,
    n_code: "I have to earn love",
    e_code: "Love comes to me abundantly.",
  },
  {
    id: 27,
    n_code: "Resentment about dysfunctional tribal beliefs regarding love",
    e_code: "Love is the ultimate religion",
  },
  {
    id: 28,
    n_code: "Resentment about false and imitation love displayed in the media and in movies",
    e_code: "My love is beyond false projections.",
  },
  {
    id: 29,
    n_code: "Deep grief over the loss of a loved one",
    e_code: "Love never dies and my loved ones live in my heart always",
  },
  {
    id: 30,
    n_code: "Holding onto all the emotional abuse in my life",
    e_code: "I hold only positive emotions in my heart",
  },
  {
    id: 31,
    n_code: "Need to hang onto all my unhealed wounds",
    e_code: "Letting go of my wounds makes me stronger.",
  },
  {
    id: 32,
    n_code: "Holding onto the pain so I will never allow it to happen again",
    e_code:
      "I am strong and powerful and negative patterns do not repeat for me",
  },
  {
    id: 33,
    n_code: "I have to be sad if someone else is sad",
    e_code: "I am a source of unlimited joy and happiness",
  },
  {
    id: 34,
    n_code: "My love is always being rejected",
    e_code: " Everyone loves me and I am a love magnet",
  },
  {
    id: 35,
    n_code: "I have to earn love",
    e_code: " Love comes to me abundantly and unconditionally.",
  },
  {
    id: 36,
    n_code: "Feeling like I am going to give up; I can't take it any longer",
    e_code: "I never give up.",
  },
  {
    id: 37,
    n_code: "I can't commit",
    e_code: "I am committed to all that is positive in life",
  },
  {
    id: 38,
    n_code: "Resistant to follow my true calling or the desires of my heart",
    e_code: "I always listen to and follow my inner voice",
  },
  {
    id: 39,
    n_code: "Stuck in the pattern because there is no other way to do it",
    e_code: " I always do things that are innovative and novel",
  },
  {
    id: 40,
    n_code: "Untrue to myself and others",
    e_code: "Being Honest and truthful is key to my success.",
  },
  {
    id: 41,
    n_code: "Filled to the brim with unexpressed love",
    e_code: "Sharing my love makes me happy and fulfilled",
  },
  {
    id: 42,
    n_code: "Paying too much attention to material or external world because feelings are not safe",
    e_code: "My feelings are free from materialism and external world.",
  },
  {
    id: 43,
    n_code: "Too much energy into intellectual activities",
    e_code: "Intellectual activity makes me powerful.",
  },
  {
    id: 44,
    n_code: "Life has to be a struggle",
    e_code: "My life is a beautiful journey of continuous growth and wonder",
  },
  {
    id: 45,
    n_code: "If I speak the truth, I will create exactly what I am afraid of",
    e_code: "I am fearless and truthful.",
  },
  {
    id: 46,
    n_code: "If I speak the truth, I will lose the ones I love",
    e_code: "People love me for my truthfulness and honesty.",
  },
  {
    id: 47,
    n_code: "I can't figure it all out, I don't understand what is going on",
    e_code: "I am clear and can control my life.",
  },
  {
    id: 48,
    n_code: "I am out of control with power",
    e_code: "I am more responsible when I am in power.",
  },
  {
    id: 49,
    n_code: "Shutting down my inspiration",
    e_code: " I am a powerful source of inspiration",
  },
  {
    id: 50,
    n_code: "Feeling spaced out, ungrounded, and fuzzy",
    e_code: "I am clear, confident and most grounded in my ways.",
  },
  {
    id: 51,
    n_code: "Unable to live in the present",
    e_code: "I am always living in the present moment.",
  },
  {
    id: 52,
    n_code: "I am afraid to be the real me",
    e_code: "I am different and unique.",
  },
  {
    id: 53,
    n_code: "Can't be myself around my family",
    e_code: "I am at my best with my family.",
  },
  {
    id: 54,
    n_code: "I always mess things up",
    e_code: "I make amazing things happen",
  },
  {
    id: 55,
    n_code: "It is always my fault",
    e_code: "I take charge to make it better.",
  },
  {
    id: 56,
    n_code: "I release blocks of intuitive sight and wisdom",
    e_code: "I am full of wisdom and intuition.",
  },
  {
    id: 57,
    n_code: "I think I am crazy when I am being intuitive",
    e_code: "I am positive and intuitive",
  },
  {
    id: 58,
    n_code: "Others will think I am crazy if I share my intuition",
    e_code: "People respect me when I share my intuitions.",
  },
  {
    id: 59,
    n_code: "I am a burden",
    e_code: "I am positive, intuitive and a gift to humanity",
  },
  {
    id: 60,
    n_code: "My skills aren't good enough to assist others",
    e_code: "I am highly skilled in helping those I assist",
  },
  {
    id: 61,
    n_code: "I have to sacrifice myself to please another so they can feel safe",
    e_code: "People feel safe and supported in my presence.",
  },
  {
    id: 62,
    n_code: "I am afraid to feel certain emotions.",
    e_code: "I express my emotions freely",
  },
  {
    id: 63,
    n_code: "I have family DNA patterns that no longer serve my highest and greatest good",
    e_code: "I create possibilities of my own",
  },
  {
    id: 64,
    n_code: "I have to steal other's power to survive",
    e_code: "I am Powerful and Self sufficient",
  },
  {
    id: 65,
    n_code: "I expect criticism from others",
    e_code: "People are entitled to their own opinion, I love who I am",
  },
  {
    id: 66,
    n_code: "I have/can't get rid of all the negative family and cultural expectations",
    e_code: "I set my own expectations & I achieve them",
  },
  {
    id: 67,
    n_code: "I have to deny my feelings",
    e_code: "I embrace my feelings and express them fully",
  },
  {
    id: 68,
    n_code: "I have co-dependent relationships",
    e_code: "I am self reliant and have inter-dependent relationships",
  },
  {
    id: 69,
    n_code: "I need my addictions; they serve me",
    e_code: "I am defined by my good habits",
  },
  { id: 70, n_code: "I need to prove myself", e_code: "I lead myself" },
  {
    id: 71,
    n_code: "I am following family patterns in career, dress, money, and lifestyle choices",
    e_code: "I am independent and innovative",
  },
  {
    id: 72,
    n_code: "I am not taking care of myself",
    e_code: "I am the architect of my life and take care of my health",
  },
  {
    id: 73,
    n_code: "I am stuck in family dysfunction",
    e_code: "I equip my family to function with ease and grace",
  },
  {
    id: 74,
    n_code: "I am trapped in negativity",
    e_code: " I am an incurable optimist and full of positivity",
  },
  { id: 75, n_code: "I can't make a choice", e_code: "My life, I make powerful decisions" },
  {
    id: 76,
    n_code: "I can't let go of the rage",
    e_code: "I forgive and let go easily",
  },
  {
    id: 77,
    n_code: "I am unwilling to involve myself in power",
    e_code: "I am the captain of my own ship",
  },
  {
    id: 78,
    n_code: "I am stuck in poverty",
    e_code: "I am a money magnet",
  },
  {
    id: 79,
    n_code: "I am stuck in/can't get out of abusive relationships",
    e_code:
      "I am free to let go of relationships that do not serve me. I nurture healthy relationships",
  },
  {
    id: 80,
    n_code: "I am stuck in pain",
    e_code: "I heal myself unconditionally",
  },
  {
    id: 81,
    n_code: "I can't find a way out",
    e_code: "I am an amazing solution provider",
  },
  {
    id: 82,
    n_code: "I can't handle this/life/anything",
    e_code: "Life is simple, solutions come easily to me",
  },
  {
    id: 83,
    n_code: "I can't feel too much; my emotions must be controlled",
    e_code: "I accept and embrace my emotions",
  },
  {
    id: 84,
    n_code: "I will never be whole/healed/complete",
    e_code: "I am whole and complete by myself",
  },
  {
    id: 85,
    n_code: "It is bad to disobey environmental, and/or cultural authority",
    e_code: "I am aligned with the environment and culture around me",
  },
  {
    id: 86,
    n_code: "Not safe to show my differences",
    e_code: "My uniqueness adds value to me",
  },
  {
    id: 87,
    n_code: "Trying to fit other’s into my mold",
    e_code: " I accept everyone’s uniqueness",
  },
  {
    id: 88,
    n_code: "Relationships are unsafe",
    e_code: "Relationships are my strength",
  },
  {
    id: 89,
    n_code: "My needs are not being met",
    e_code: "My needs are abundantly met",
  },
  {
    id: 90,
    n_code: "I keep needing to sell myself",
    e_code: "I am my own USP (Unique Selling Point)",
  },
  {
    id: 91,
    n_code: "Everything I do is unacceptable",
    e_code: " I accept and appreciate who I am",
  },
  {
    id: 92,
    n_code: "Feeling powerless to make others stop hurting",
    e_code: "I bring joy wherever I am",
  },
  {
    id: 93,
    n_code: "There is no partner to meet my needs",
    e_code: "I complete myself",
  },
  {
    id: 94,
    n_code: "I won't be able to meet the needs of others",
    e_code: "I empower and enable others to fulfill their own needs",
  },
  {
    id: 95,
    n_code: "Give away too much of myself in business and relationships",
    e_code: "I create healthy boundaries in business and relationships",
  },
  {
    id: 96,
    n_code: "False perceptions around money",
    e_code: "I am crystal clear about money and it comes to me easily",
  },
  {
    id: 97,
    n_code: "I always feel like I must give my life to make others happy",
    e_code: " I am happy to make others happy while preserving myself",
  },
  {
    id: 98,
    n_code: "It is not safe to feel my feelings",
    e_code: "I embrace my feelings",
  },
  {
    id: 99,
    n_code: "Fear of being labeled or stereotyped",
    e_code: "I am awesome and blessed and do not worry about other’s opinions",
  },
  {
    id: 100,
    n_code: " Feeling numb, blocked, removed, or disconnected",
    e_code: "I am the epitome of strength and connection",
  },
  //
  {
    id: 101,
    n_code: " God is punishing me because of my past choices",
    e_code: "God has better plans for me",
  },
  {
    id: 102,
    n_code: " Feels like nothing is coming together",
    e_code: "Everything happens for the best",
  },
  {
    id: 103,
    n_code: " Allowing the same experience to occur over and over",
    e_code: " Every experience is a new learning and I have broken the negative cycle of repetition",
  },
  {
    id: 104,
    n_code: " Feeling like it is always going to be this way",
    e_code: "Everyday brings along new promises",
  },
  {
    id: 105,
    n_code: " Frustrated that not everyone is happy at the same time",
    e_code:
      "Everybody has their own journey, people experience happiness in their own time",
  },
  {
    id: 106,
    n_code: " Everything has to be my way because I know best",
    e_code: "I respect and accept others choices",
  },
  {
    id: 107,
    n_code: " Need to control my environment and everyone around me",
    e_code: "Even God gives free will and I support those around me in their choices",
  },
  {
    id: 108,
    n_code: " I can't relate to other's pain or suffering",
    e_code: "I empathize and empower people to overcome their pain",
  },
  {
    id: 109,
    n_code: "Swallowing other people's thoughts or opinions about me, or life in general",
    e_code: "I build my own opinions about myself or life in general",
  },
  {
    id: 110,
    n_code: " Not being able to move forward",
    e_code: "I am unstoppable",
  },
  {
    id: 111,
    n_code: " Refusing to see it any other way",
    e_code: "I am adaptable and open to see possibilities",
  },
  {
    id: 112,
    n_code: "Releasing mental thought processes that no longer serve my highest and greatest good",
    e_code: "I am free to express my innovativeness",
  },
  {
    id: 113,
    n_code: " Having trouble making the connection",
    e_code: "Connection happens naturally to me",
  },
  {
    id: 114,
    n_code: " Can't let go of the past",
    e_code: "The lessons of the past makes me stronger",
  },
  {
    id: 115,
    n_code: " Other's needs are more important than mine",
    e_code: "I fulfil my needs so that I can take care of others",
  },
  {
    id: 116,
    n_code: " Fear of looking foolish or of humiliation",
    e_code: "Everybody has their opinions, I don?t care",
  },
  {
    id: 117,
    n_code: " Fear of being fat",
    e_code: "My body is my temple. I nurture and look after it religiously",
  },
  {
    id: 118,
    n_code: " Pretending like nothing is wrong",
    e_code: "Only the Truth can set me free",
  },
  {
    id: 119,
    n_code: " I don't know who I am",
    e_code: " I am confident in who I am",
  },
  {
    id: 120,
    n_code: " God is never there when I need Him",
    e_code: "God is always there for me",
  },
  {
    id: 121,
    n_code: " I don't deserve to be loved or to receive light",
    e_code: "I am deserving of love and light",
  },
  {
    id: 122,
    n_code: " Lack of faith to create anything different",
    e_code: "I am creative",
  },
  { id: 123, n_code: " No one wants me", e_code: "I am valued and cherished and I belong" },
  { id: 124, n_code: " Lack of reasoning or common sense", e_code:"I have great mental clarity and common sense" },
  {
    id: 125,
    n_code: "I release whatever keeps me running old behaviors of thought and perception",
    e_code: "I let go of the past",
  },
  { id: 126, n_code: " Can't keep track of time", e_code: "I am Punctual" },
  { id: 127, n_code: " I am not worth it", e_code: "I am Worthy" },
  { id: 128, n_code: " I don't deserve it", e_code: "I am deserving" },
  {
    id: 129,
    n_code: "Have to reject myself and give you all the reasons I am not lovable",
    e_code: "I love and accept myself the way I am",
  },
  { id: 130, n_code: " I am a burden", e_code: "I am a blessing to humanity" },
  {
    id: 131,
    n_code: " I am controlled by others",
    e_code: "I am powerful & free",
  },
  {
    id: 132,
    n_code: " There is only one right way",
    e_code: "I am open to possibilities",
  },
  {
    id: 133,
    n_code: " I will get out of your way before you ask me to",
    e_code: " I am confident about my choices and will stick with them",
  },
  {
    id: 134,
    n_code: " I am just hard to deal with",
    e_code: "I am pleasant, welcoming and happy",
  },
  {
    id: 135,
    n_code: " Shifting my truths and beliefs so I don't follow the crowd",
    e_code: "I am firm in my beliefs and decisions",
  },
  {
    id: 136,
    n_code: " I am more intelligent than most people",
    e_code: "I am able to learn from everyone",
  },
  {
    id: 137,
    n_code: "I release the blocks in my mind that don't allow me to evaluate my beliefs and attitudes",
    e_code: "I am free from all limiting beliefs",
  },
  {
    id: 138,
    n_code: " I am unable to access my intellectual ability",
    e_code: "I've unleashed my intellectual potential",
  },
  {
    id: 139,
    n_code: " I release what doesn't allow me to know and accept the truth",
    e_code: "I accept the truth",
  },
  {
    id: 140,
    n_code: " If I change, I might lose myself",
    e_code: "Every change discovers the NEW me",
  },
  {
    id: 141,
    n_code: "The small satisfaction I get in the moment is not worth the effort",
    e_code: "Each moment is a celebration",
  },
  {
    id: 142,
    n_code: " I don't want to know the truth",
    e_code: "Every truth sets me free",
  },
  { id: 143, n_code: " I have no insight", e_code: "My insights inspire" },
  {
    id: 144,
    n_code: " Can't express myself sexually",
    e_code: "I am sexually liberated",
  },
  {
    id: 145,
    n_code: " I have to carry all the problems, but I can't complain",
    e_code: "I am a solution provider",
  },
  {
    id: 146,
    n_code: " My desires are not important",
    e_code: "My desires ignite me",
  },
  {
    id: 147,
    n_code: " My reality is too overwhelming",
    e_code: "My reality is empowering",
  },
  {
    id: 148,
    n_code: " I don't want to be here any longer",
    e_code: "I belong here",
  },
  {
    id: 149,
    n_code: " I don't have anywhere to go",
    e_code: "The world is full of opportunities",
  },
  {
    id: 150,
    n_code: " I'm not good with money.",
    e_code: "I am a money magnet",
  },
  {
    id: 151,
    n_code: " I don't have a head for business.",
    e_code: "Business is in my blood",
  },
  {
    id: 152,
    n_code: " Only people who are good at business can be successful.",
    e_code: "I define my success",
  },
  {
    id: 153,
    n_code: "All the good people already have jobs or are too expensive for me to hire.",
    e_code: "I attract the best talent in the industry",
  },
  {
    id: 154,
    n_code: "Success is 20% inspiration and 80 % perspiration. That sounds too hard!",
    e_code: "I attract success easily",
  },
  {
    id: 155,
    n_code: ` To be successful and wealthy, I’d have “to give it my all”, and that’s more than I can give`,
    e_code: " I easily get returns in multiples of what I give",
  },
  {
    id: 156,
    n_code: ' "Real" work is "hard" work.',
    e_code: "Real work is SMART work",
  },
  {
    id: 157,
    n_code: ' Honest money has to be "hard earned".',
    e_code: "Honesty attracts good fortune and abundance",
  },
  {
    id: 158,
    n_code: " I hate marketing.",
    e_code: "Marketing Creates opportunities",
  },
  {
    id: 159,
    n_code: " I'm not a salesperson.",
    e_code: "Selling is serving",
  },
  {
    id: 160,
    n_code: " People who sell things are dishonest/sleazy.",
    e_code: "People are doing their best to make a difference when they market",
  },
  {
    id: 161,
    n_code: " I can't find/afford the help I need.",
    e_code: "I have an abundance of resources",
  },
  {
    id: 162,
    n_code: "I just want to stick to what I'm good at, and let others handle the rest.",
    e_code: "I am curious/excited about exploring new opportunities",
  },
  {
    id: 163,
    n_code: " I just want someone to tell me what to do.",
    e_code: "I am an awesome decision maker",
  },
  {
    id: 164,
    n_code: " I have no idea how to start a business.",
    e_code: "I am a business mastermind",
  },
  {
    id: 165,
    n_code: "Leaders are born, not made, and I've never been a great leader.",
    e_code: "There is a leader in everyone",
  },
  {
    id: 166,
    n_code: " Getting rich is about being in the right place at the right time.",
    e_code: "I am the Master of my destiny",
  },
  {
    id: 167,
    n_code: " I've just never been lucky like that.",
    e_code: "I am extremely fortunate",
  },
  {
    id: 168,
    n_code: " Nothing I do ever works, why would this time be any different?",
    e_code: "I make things happen",
  },
  {
    id: 169,
    n_code: " Making more money means working more hours.",
    e_code: "Adding value attracts money",
  },
  {
    id: 170,
    n_code: " I'm too busy just trying to get by/break even.",
    e_code: "I am driven by my passion",
  },
  {
    id: 171,
    n_code: " I don't want to work that hard.",
    e_code: "My work is my passion and I love it",
  },
  { id: 172, n_code: " I hate working.", e_code: "I love my work because it inspires me" },
  {
    id: 173,
    n_code: " I hate/am bad at networking. and meeting new people.",
    e_code: "I make valuable connections",
  },
  {
    id: 174,
    n_code: " I don't like/am not good at working with other people.",
    e_code: "I attract the right and amazing people",
  },
  {
    id: 175,
    n_code: " I'm not a people person.",
    e_code: "I love people and people love me",
  },
  {
    id: 176,
    n_code: " I don't know the right people.",
    e_code: "I always interact with the right people",
  },
  {
    id: 177,
    n_code: " People don't like me.",
    e_code: "Everybody loves me",
  },
  {
    id: 178,
    n_code: "I don't like working with people because I can't handle conflict.",
    e_code: "I love working with people because I am an awesome team player",
  },
  {
    id: 179,
    n_code: " Things are fine the way they are.",
    e_code: "The best is yet to come",
  },
  {
    id: 180,
    n_code: " I don't want to be greedy.",
    e_code: "Abundance is my birth right",
  },
  {
    id: 181,
    n_code: " There are people who need money a lot more than I do.",
    e_code: "I deserve more money to empower the needy",
  },
  {
    id: 182,
    n_code: " I'm just not good with people.",
    e_code: "I am a people person"
  },
  {
    id: 183,
    n_code: " I don't want to learn anything new.",
    e_code: "I am a lifelong learner",
  },
  {
    id: 184,
    n_code: " I don't like/am not good with technology.",
    e_code: "I'm a tech savvy",
  },
  {
    id: 185,
    n_code: " Starting over is too hard/too much work.",
    e_code: "I always learn and reinvent myself",
  },
  {
    id: 186,
    n_code: " I'm too old to try something new and/or be successful.",
    e_code: "Age is just a number",
  },
  {
    id: 187,
    n_code: " If I haven't been successful by now, I never will be.",
    e_code: "Take the wisdom from experience, move forward and success is yours",
  },
  {
    id: 188,
    n_code: " I'm too old to work hard.",
    e_code: "Age is just a number",
  },
  {
    id: 189,
    n_code: " I'm not that good at anything.",
    e_code: "I am good at everything I choose to do",
  },
  {
    id: 190,
    n_code: " You need money to make money.",
    e_code: "I am capable of making money",
  },
  {
    id: 191,
    n_code: " I never have money.",
    e_code: "I have an abundance of money",
  },
  {
    id: 192,
    n_code: "If I try to make a living from my passion, I won't be passionate about it any more.",
    e_code: "My passion pays me all the time",
  },
  {
    id: 193,
    n_code: " The things I'm passionate about can't make money.",
    e_code: "My passion always makes money for me",
  },
  { id: 194, n_code: " Hobbies don't pay.", e_code: "Hobbies always pay" },
  {
    id: 195,
    n_code: "If you're having fun at work, you're not getting enough done.",
    e_code: "Fun at work makes me productive",
  },
  {
    id: 196,
    n_code: " It feels wrong making money doing something I love.",
    e_code: "It's my right to make money doing something I, love,",
  },
  {
    id: 197,
    n_code: " I grew up poor, so financial abundance isn't in the cards.",
    e_code: "I am rich & financially independent",
  },
  {
    id: 198,
    n_code: " Money stresses me out.",
    e_code: "Money empowers me",
  },
  { id: 199, n_code: " Money is dirty.", e_code: "Money is freedom" },
  {
    id: 200,
    n_code: " Rich people are greedy.",
    e_code: "Rich people are philanthropic",
  },
  {
    id: 201,
    n_code: " Being successful/having money changes people.",
    e_code: "Money transform people for the good",
  },
  {
    id: 202,
    n_code: " Rich people are fake.",
    e_code: "Rich people are genuine",
  },
  {
    id: 203,
    n_code: " Rich people have no morals.",
    e_code: "Rich people are principled",
  },
  {
    id: 204,
    n_code: " Other people get rich and famous.",
    e_code: "I am rich & famous",
  },
  {
    id: 205,
    n_code: " Having a lot of money makes you a bad person.",
    e_code: "Money brings out the best in you",
  },
  {
    id: 206,
    n_code: " I don't deserve a lot of money.",
    e_code: "I deserve wealth and abundance",
  },
  {
    id: 207,
    n_code: " Having a lot of money is bad.",
    e_code: " Money always gives financial freedom",
  },
  {
    id: 208,
    n_code: "When it comes to the rich and middle class, it's us against them.",
    e_code: "Money is a great equaliser",
  },
  {
    id: 209,
    n_code: " Having money means sacrificing your integrity.",
    e_code: "I create wealth with integrity",
  },
  {
    id: 210,
    n_code: " I don't like rich people.",
    e_code: "I admire and respect rich people",
  },
  {
    id: 211,
    n_code: " I just want to make enough to get by.",
    e_code: "I always have surplus money",
  },
  {
    id: 212,
    n_code: " If I'm successful, my family/friends won't like me.",
    e_code: "I am successful and my family and friends are happy with me and for me",
  },
  {
    id: 213,
    n_code: " If I make more money, I'll have that much more to lose.",
    e_code: "I make more money , I gain more",
  },
  {
    id: 214,
    n_code: " I don't need/want a lot of money.",
    e_code: "I have excess money",
  },
  {
    id: 215,
    n_code: " Anything more than $ is too much for me.",
    e_code: "I attract infinite amounts of wealth",
  },
  {
    id: 216,
    n_code: " Dealing with/talking about money stresses me out.",
    e_code: "Dealing with money gives me pleasure and uplifts me",
  },
  {
    id: 217,
    n_code: " When I think about success, it feels like it's not meant to be.",
    e_code: "Success is my birth right",
  },
  {
    id: 218,
    n_code: " When it comes to work and money, I just want stability.",
    e_code: "My work is worship and I get money as a gift from God",
  },
  {
    id: 219,
    n_code: " I'm a parent, I can't take risks.",
    e_code:
      "I am a parent and hence I will do everything for the success of my children",
  },
  {
    id: 220,
    n_code: " My kids need me, so I can't start something new.",
    e_code: "My kids motivate me to do something new",
  },
  {
    id: 221,
    n_code: "If I spend money on myself, that means less money for my kids.",
    e_code: "I have enough to spend on me and my children",
  },
  {
    id: 222,
    n_code: " It's irresponsible to take risks.",
    e_code: "My decisions boost my success",
  },
  {
    id: 223,
    n_code: " Taking risks is selfish.",
    e_code: "Exploration creates universal innovation",
  },
  {
    id: 224,
    n_code: " Wanting more money is selfish/ shallow.",
    e_code: "Money makes me more generous and giving",
  },
  //
  {
    id: 225,
    n_code: " I hate my job, but it pays the mortgage.",
    e_code: "I love my job, it helps me thrive",
  },
  {
    id: 226,
    n_code: " It's too scary to try something new.",
    e_code: "I love to try new things",
  },
  {
    id: 227,
    n_code: "Every time I make big changes in my life, something bad happens.",
    e_code: "I see an opportunity to learn and grow in every big thing",
  },
  {
    id: 228,
    n_code: " My life is falling apart, so I can't try something new.",
    e_code: "My life is blessed and I am a master of innovation",
  },
  {
    id: 229,
    n_code: " I have to fix my life before I can try something new.",
    e_code: "I am always ready to learn and start new things",
  },
  {
    id: 230,
    n_code: " I have health issues, so I can't try something new.",
    e_code: "Am always fit to try new things",
  },
  {
    id: 231,
    n_code: "  I don’t have time to try something else",
    e_code: "I prioritise my time for new things",
  },
  { id: 232, n_code: " I'll start tomorrow.", e_code: "I'll do it now" },
  {
    id: 233,
    n_code: " There's never enough time to finish things.",
    e_code: "I complete things on time",
  },
  {
    id: 234,
    n_code: " I'm too busy.",
    e_code: "I have time for everything",
  },
  {
    id: 235,
    n_code: " I wouldn't know what to do with that much money.",
    e_code: "I have enough plans to utilise my wealth",
  },
  {
    id: 236,
    n_code: "I don't like attention, so I'd rather just be a little bit successful.",
    e_code: "I love being the centre of attraction",
  },
  {
    id: 237,
    n_code: " I just want to work at home in my pajamas everyday.",
    e_code: " I love working in a comfortable environment",
  },
  {
    id: 238,
    n_code: " If I get what I want, I might lose it.",
    e_code: "I value the abundance I receive",
  },
  {
    id: 239,
    n_code: " If I have more money, that means other people have less.",
    e_code: "There is enough abundance for everyone",
  },
  {
    id: 240,
    n_code: " I already have a pretty good life, why do I need more?",
    e_code: "I have an amazing life and more will allow me to impact the lives of others",
  },
  {
    id: 241,
    n_code: "I've had enough good fortune over the years already. I should let others have the rest.",
    e_code: "The abundance I receive will allow me to help those in need",
  },
  {
    id: 242,
    n_code: " If I can make $__________, I'll be fine.",
    e_code: "I am enormously abundant",
  },
  {
    id: 243,
    n_code: " I can't make (or have never be- fore made) more than $ .",
    e_code: "I can attract limitless abundance",
  },
  {
    id: 244,
    n_code: " I never have enough money, so I never will.",
    e_code: "I am capable of making as much money as I wish for",
  },
  {
    id: 245,
    n_code:
      " I’m of a certain cultural heritage/race/gender/economic background, so there is only so far I can go",
    e_code: "My culture and race do not stop me from achieving my dreams",
  },
  {
    id: 246,
    n_code: " When I make more money, I spend more. That's just life.",
    e_code: "I live my life to the fullest.",
  },
  {
    id: 247,
    n_code: " I can never afford what I want.",
    e_code: "I buy everything I want and love",
  },
  {
    id: 248,
    n_code: " I just need enough to pay my bills.",
    e_code: "I have more than enough for all the luxuries the world has to offer",
  },
  {
    id: 249,
    n_code: " I could never make more than $ .",
    e_code: "I am capable of making enormous amounts of money",
  },
  {
    id: 250,
    n_code:
      " Being rich is all about fancy cars and big houses, and I don't want any of that.",
    e_code: "I want a comfortable life…with all the best that life has to offer",
  },
  {
    id: 251,
    n_code:
      " I don't have a college or advanced degree, so there's only so far I can go.",
    e_code: "I can achieve anything I want.",
  },
  {
    id: 252,
    n_code:
      " Hard work pays off, is rewarding; Work hard and you deserve the best.",
    e_code: " Working SMART is better than working hard…and working SMART brings success",
  },
  { id: 253, n_code: " Work before play", e_code: " I work and play in equal measure" },
  {
    id: 254,
    n_code: " Women's work is never done",
    e_code: "Women are continuously achieving greater and greater heights",
  },
  {
    id: 255,
    n_code: " Don't be so lazy",
    e_code: "Follow your passion",
  },
  {
    id: 256,
    n_code: " Hard work never hurt anyone",
    e_code: "Hard work and SMART work leads to success",
  },
  {
    id: 257,
    n_code: " No one owes you a living",
    e_code: "I am financially independent and successful",
  },
  {
    id: 258,
    n_code: " Girls can't do that.. Or be that...or good girls don't",
    e_code: "Girls can do anything and achieve anything",
  },
  {
    id: 259,
    n_code: " Big boys done cry",
    e_code: " Being emotional is healthy sometimes",
  },
  {
    id: 260,
    n_code: " Boys should never hurt girls",
    e_code: "Men need to respect women",
  },
  {
    id: 261,
    n_code: " Women are just second class citizens",
    e_code: "Women are invincible.",
  },
  {
    id: 262,
    n_code: " Don't talk back to elders",
    e_code: "Respect elders but never shy from putting your point across",
  },
  {
    id: 263,
    n_code: " Always wear clean underwear",
    e_code: "Clean underwear indicates you care about details",
  },
  {
    id: 264,
    n_code:
      " Girls will grow up, get married and have babies. And no education",
    e_code: " Educate a girl and educate the entire country.",
  },
  {
    id: 265,
    n_code: " Girls are just sissies",
    e_code: "Girls are intelligent, valuable and caring members of society.",
  },
];

// first baseline

const renderBaselinesFirst = (words, id, step) => {
  const myapp = document.getElementById(id);
  let n = 1;
  words.forEach((data) => {
    const divEl = document.createElement("li");
    divEl.innerHTML = `
    <span class="fs-3">${n}</span>.
          <label title="${data.e_code}" class="codes_sentance fs-3" for="${data.n_code}${step}">  ${data.n_code}</label>
          <input type="checkbox" name="${data.n_code}" id="${data.n_code}${step}" hidden>
          `;
    n++;
    myapp.append(divEl);
  });
};

renderBaselinesFirst(baselines, "codes-first", "");

const selectBaseline = (step) => {
  let wordBtn = document.querySelectorAll(`#codes-${step} label`);
  wordBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("select");
    });
  });
};
selectBaseline("first");

const countBaselineFirst = (step) => {
  const inputs = document.querySelectorAll(`#codes-${step} input`);

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
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-secound`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 3
      if (step === "third" && count >= 6) {
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-third`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 4
      if (step === "fourth" && count >= 5) {
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-fourth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 5
      if (step === "fifth" && count >= 4) {
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-fifth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 6
      if (step === "sixth" && count >= 3) {
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-sixth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 7
      if (step === "seventh" && count >= 2) {
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-seventh`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
            inputs.forEach((l) => (l.disabled = true));
          });
        });
      }

      //   step = 8
      if (step === "eighth" && count >= 1) {
        let wordBtn = document.querySelectorAll(`#codes-${step} label`);
        let subBtn = document.querySelector(`#baseline-sub-eighth`);
        subBtn.disabled = false;
        wordBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.style.backgroundColor = "#fff";
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
    document.getElementById("codes-first-container").style.display = "none";
    document.getElementById("codes-secound-container").style.display = "block";
    document.querySelectorAll("#codes-first input:checked").forEach((d) => {
      const s = d.previousElementSibling;
      console.log(s);
      let obj = {
        // id:n,
        n_code: s.textContent,
        e_code: s.title,
      };
      baselinesSecount.push(obj);
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesSecount, "codes-secound", "secound");
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
    document.getElementById("codes-secound-container").style.display = "none";
    document.getElementById("codes-third-container").style.display = "block";
    document.querySelectorAll("#codes-secound input:checked").forEach((d) => {
      const s = d.previousElementSibling;
      let obj = {
        // id:n,
        n_code: s.textContent,
        e_code: s.title,
      };
      baselinesThird.push(obj);
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesThird, "codes-third", "third");
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
    document.getElementById("codes-third-container").style.display = "none";
    document.getElementById("codes-fourth-container").style.display = "block";
    document.querySelectorAll("#codes-third input:checked").forEach((d) => {
      const s = d.previousElementSibling;
      let obj = {
        // id:n,
        n_code: s.textContent,
        e_code: s.title,
      };
      baselinesFourth.push(obj);
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesFourth, "codes-fourth", "fourth");
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
    document.getElementById("codes-fourth-container").style.display = "none";
    document.getElementById("codes-fifth-container").style.display = "block";
    document.querySelectorAll("#codes-fourth input").forEach((d) => {
      if (d.checked) {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baselinesFifth.push(obj);
      } else {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baseline.push(obj);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesFifth, "codes-fifth", "fifth");
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
    document.getElementById("codes-fifth-container").style.display = "none";
    document.getElementById("codes-sixth-container").style.display = "block";
    document.querySelectorAll("#codes-fifth input").forEach((d) => {
      if (d.checked) {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baselinesSixth.push(obj);
      } else {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baseline.push(obj);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesSixth, "codes-sixth", "sixth");
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
    document.getElementById("codes-sixth-container").style.display = "none";
    document.getElementById("codes-seventh-container").style.display = "block";
    document.querySelectorAll("#codes-sixth input").forEach((d) => {
      if (d.checked) {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baselinesSeventh.push(obj);
      } else {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baseline.push(obj);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesSeventh, "codes-seventh", "seventh");
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
    document.getElementById("codes-seventh-container").style.display = "none";
    document.getElementById("codes-eighth-container").style.display = "block";
    document.querySelectorAll("#codes-seventh input").forEach((d) => {
      if (d.checked) {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baselinesEighth.push(obj);
        baseline.push(obj);
      } else {
        const s = d.previousElementSibling;
        let obj = {
          // id:n,
          n_code: s.textContent,
          e_code: s.title,
        };
        baseline.push(obj);
      }
      submitBtn.disabled = true;
    });
    renderBaselinesFirst(baselinesEighth, "codes-eighth", "eighth");
    selectBaseline("eighth");
    countBaselineFirst("eighth");
  });
};
submitBaselineSeventh();

// submit to the api
const uuid = document.getElementById("uuid").value;
const postNecodes = async (necodes) => {
  const responce = await fetch("/tools-url/necodes/" + uuid, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(necodes),
  });
  const data = await responce.json();
  return data;
};

const showResult = () => {
  const submitBtn = document.querySelector(".submit-eighth");
  submitBtn.addEventListener("click", () => {
    document.getElementById("codes-eighth-container").style.display = "none";
    document.getElementById("codes-ningth-container").style.display = "block";
    postNecodes(baseline.reverse()).then((d) => {
      const myapp = document.getElementById("codes-ningth");
      document.querySelector(".message").innerText = d.message;
      let n = 1;
      baseline.forEach((data) => {
        const divEl = document.createElement("tbody");
        divEl.innerHTML = `
    <tr>
      <th scope="row">${n}</th>
      <td>${data.n_code}</td>
      <td>${data.e_code}</td>
    </tr>
          `;
        n++;
        myapp.append(divEl);
      });
    });
  });
};
showResult();

