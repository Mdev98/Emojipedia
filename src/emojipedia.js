const emojipedia = [
    {
        key: 1,
        emoji: '😀',
        name: ' Grinning Face',
        meaning:
            'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
    },
    {
        key: 2,
        emoji: '😃',
        name: ' Grinning Face with Big Eyes',
        meaning:
            'A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement.',
    },
    {
        key: 3,
        emoji: '😄',
        name: ' Grinning Face with Smiling Eyes',
        meaning:
            'A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement.',
    },
    {
        key: 4,
        emoji: '😁',
        name: ' Beaming Face with Smiling Eyes',
        meaning:
            'A yellow face with smiling eyes and full-toothed grin, as if saying Cheese! for the camera. Teeth may be smoothed-over or crosshatched. Often expresses a radiant, gratified happiness. Tone varies, including warm, silly, amused, or proud.',
    },
    {
        key: 5,
        emoji: '😆',
        name: ' Grinning Squinting Face',
        meaning:
            'A yellow face with a broad, open smile and scrunched, X-shaped eyes. Often conveys excitement or hearty laughter.',
    },
    {
        key: 6,
        emoji: '😅',
        name: ' Grinning Face with Sweat',
        meaning:
            'Has the same grin and eyes as 😄 Grinning Face With Smiling Eyes but with a single, blue bead of sweat, usually over its left eye. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. ',
    },
    {
        key: 7,
        emoji: '🤣',
        name: ' Rolling on the Floor Laughing',
        meaning:
            'A yellow face with a big grin and scrunched, X-shaped eyes, tilted on its side as if rolling on the floor laughing (the internet acronym ROFL). Sheds two tears and tilts right on most platforms. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy.',
    },
    {
        key: 8,
        emoji: '😂',
        name: ' Face with Tears of Joy',
        meaning:
            'A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. Named the Oxford Dictionaries 2015 Word of the Year, and the most used emoji on all platforms from 2011-2021.',
    },
    {
        key: 9,
        emoji: '🙂',
        name: ' Slightly Smiling Face',
        meaning:
            'A yellow face with simple, open eyes and a thin, closed smile. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not.',
    },
    {
        key: 10,
        emoji: '🙃',
        name: ' Upside-Down Face',
        meaning:
            'A classic smiley, turned upside down. Implemented as a flipped version of 🙂 Slightly Smiling Face on most platforms.',
    },
    {
        key: 11,
        emoji: '😉',
        name: ' Winking Face',
        meaning:
            'A yellow face with a slight smile shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.',
    },
    {
        key: 12,
        emoji: '😊',
        name: ' Smiling Face with Smiling Eyes',
        meaning:
            'A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and warm, positive feelings.',
    },
    {
        key: 13,
        emoji: '😇',
        name: ' Smiling Face with Halo',
        meaning:
            'A yellow face with smiling eyes, closed smile, and halo, usually blue, overhead. Often represents angels, prayers, and blessings. May also convey angelic behavior, e.g., doing good deeds. See also 👼 Baby Angel.',
    },
    {
        key: 14,
        emoji: '🥰',
        name: ' Smiling Face with Hearts',
        meaning:
            'A yellow face with smiling eyes, a closed smile, rosy cheeks, and several hearts floating around its head. Expresses a range of happy, affectionate feelings, especially being in love. The number of hearts (three or more) varies by platform.',
    },
    {
        key: 15,
        emoji: '😍',
        name: ' Smiling Face with Heart-Eyes',
        meaning:
            'A yellow face with an open smile, sometimes showing teeth, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love, infatuation, and adoration, e.g., I love/am in love with this person or thing.',
    },
    {
        key: 16,
        emoji: '🤩',
        name: ' Star-Struck',
        meaning:
            'A yellow face with a broad, open smile, showing upper teeth on most platforms, with stars for eyes, as if seeing a beloved celebrity. Color of stars widely varies by platform, though commonly gold or red. May express that someone or something is amazing, fascinating, impressive, or exciting.',
    },
    {
        key: 17,
        emoji: '😘',
        name: ' Face Blowing a Kiss',
        meaning:
            'A yellow face winking with puckered lips blowing a kiss, depicted as a small, red heart. May represent a kiss goodbye or good night and convey feelings of love and affection more generally. ',
    },
    {
        key: 18,
        emoji: '😗',
        name: ' Kissing Face',
        meaning:
            'A yellow face with simple, open eyes and puckered lips giving a kiss. Commonly conveys sentiments of love and affection.',
    },
    {
        key: 19,
        emoji: '☺️',
        name: '️ Smiling Face',
        meaning:
            'A classic smiley. A yellow face with a modest smile, rosy cheeks, and soft, closed eyes. Many platforms, including Apple, feature relaxed eyebrows. Conveys a wide range of warm, positive feelings, including love, happiness, and gratitude.',
    },
    {
        key: 20,
        emoji: '😚',
        name: ' Kissing Face with Closed Eyes',
        meaning:
            'A yellow face with smiling eyes, rosy cheeks, and puckered lips giving a kiss. Commonly conveys sentiments of romantic love and affection. Several platforms, including Apple, feature the same eyes and cheeks as their ☺️ Smiling Face.',
    },
    {
        key: 21,
        emoji: '😙',
        name: ' Kissing Face with Smiling Eyes',
        meaning:
            'A yellow face with smiling eyes and puckered lips giving a kiss. Commonly conveys sentiments of love and affection.',
    },
    {
        key: 22,
        emoji: '🥲',
        name: ' Smiling Face with Tear',
        meaning:
            'A yellow face with open eyes, a thin closed-mouth smile, and a single tear falling from one of its eyes. Can be used to express a wide range of emotions and expressions including gratitude, tender happiness, an attempt to look happy when actually sad, or smiling through pain. Can also be a response to something that is bittersweet.',
    },
    {
        key: 23,
        emoji: '😋',
        name: ' Face Savoring Food',
        meaning:
            'A yellow face with smiling eyes and a broad, closed smile with its tongue sticking out of one corner, as if licking its lips in appetite or contentment. Widely used to convey that a food item is delicious. May also express that a person is attractive.',
    },
    {
        key: 24,
        emoji: '😛',
        name: ' Face with Tongue',
        meaning:
            'A yellow face with small, open eyes and a big grin, playfully sticking out its tongue. Can variously convey a sense of fun, excitement, silliness, cuteness, happiness, or jesting, as if saying Just kidding!',
    },
    {
        key: 25,
        emoji: '😜',
        name: ' Winking Face with Tongue',
        meaning:
            'A yellow face sticking out its tongue and making a zany wink, usually shown with its right eye closed and left wide open. Often conveys a sense of fun, excitement, wackiness, buffoonery, or joking.',
    },
    {
        key: 26,
        emoji: '🤪',
        name: ' Zany Face',
        meaning:
            'A smiley making a silly face. A yellow face with a big grin and wide, white eyes, one larger than the other and in a wild, cockeyed expression. Many platforms, including Apple, depict its tongue stuck out and head tilted; others feature a full-toothed grin, giving it a more unhinged appearance.',
    },
    {
        key: 27,
        emoji: '😝',
        name: ' Squinting Face with Tongue',
        meaning:
            'A yellow face with scrunched, X-shaped eyes and a big grin, sticking out its tongue. Often conveys a sense of fun, excitement, playfulness, hilarity, and happiness, as if saying Squee! or Awesome! ',
    },
    {
        key: 28,
        emoji: '🤑',
        name: ' Money-Mouth Face',
        meaning:
            'A yellow face with raised eyebrows, dollar signs for eyes, and an open smile sticking out a tongue styled after a green, dollar banknote. Some platforms depict the dollar-sign eyes in green circles.',
    },
    {
        key: 29,
        emoji: '🤗',
        name: ' Hugging Face',
        meaning:
            'A yellow face smiling with open hands, as if giving a hug. May be used to offer thanks and support, show love and care, or express warm, positive feelings more generally.',
    },
    {
        key: 30,
        emoji: '🤭',
        name: ' Face with Hand Over Mouth',
        meaning:
            'A yellow face with a hand covering its mouth. Apple and Facebook feature simple, open eyes, suggesting someone gasping Oh my! in serious surprise, shock, concern, or apology. Other platforms depict a face with smiling eyes and/or blushing cheeks, suggesting coy laughter or embarrassment, as if cheekily saying Oops! ',
    },
    {
        key: 31,
        emoji: '🤫',
        name: ' Shushing Face',
        meaning:
            'A yellow face placing an index finger over pursed lips, as if issuing Shh! or Shush! for silence. Some platforms feature raised eyebrows. Apple’s design suggests the face is tilting back slightly. ',
    },
    {
        key: 32,
        emoji: '🤔',
        name: ' Thinking Face',
        meaning:
            "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking.",
    },
    {
        key: 33,
        emoji: '🤐',
        name: ' Zipper-Mouth Face',
        meaning:
            'A yellow face with simple, open eyes and a closed zipper for a mouth. Meaning widely varies, but commonly conveys a secret or that someone will keep one (e.g., My lips are sealed). May also be used to tell someone to stop talking (e.g., Zip it! or I’ll shut up now).',
    },
    {
        key: 34,
        emoji: '🤨',
        name: ' Face with Raised Eyebrow',
        meaning:
            'A yellow face with a flat, neutral mouth and furrowed eyebrows, its left raised higher than its right. Conveys a wide variety of sentiments, including suspicion, skepticism, concern, consideration, disbelief, and disapproval.',
    },
    {
        key: 35,
        emoji: '😐',
        name: ' Neutral Face',
        meaning:
            'A yellow face with simple, open eyes and a flat, closed mouth. Intended to depict a neutral sentiment but often used to convey mild irritation and concern or a deadpan sense of humor.',
    },
    {
        key: 36,
        emoji: '😑',
        name: ' Expressionless Face',
        meaning:
            'A yellow face with flat, closed eyes and mouth. May convey a sense of frustration or annoyance more intense than suggested by 😐 Neutral Face, as if taking a moment to collect itself.',
    },
    {
        key: 37,
        emoji: '😶',
        name: ' Face Without Mouth',
        meaning:
            'A yellow face with simple, open eyes and no mouth, as if at a loss for words. Meaning widely varies, but commonly conveys speechlessness, humility, and silence. May also convey moderately negative emotions, such as disappointment, frustration, or sadness. ',
    },
    {
        key: 38,
        emoji: '😶',
        name: ' Face in Clouds',
        meaning:
            'A face that appears surrounded by clouds or a haze of smoke. Ambiguous in appearance, this may represent a foggy state of mind, confusion, or even a sense of calm bliss.',
    },
    {
        key: 39,
        emoji: '😏',
        name: ' Smirking Face',
        meaning:
            'A yellow face with a sly, smug, mischievous, or suggestive facial expression. It features a half-smile, raised eyebrows, and eyes looking to the side. Often used to convey flirtation or sexual innuendo.',
    },
    {
        key: 40,
        emoji: '😒',
        name: ' Unamused Face',
        meaning:
            'A yellow face with slightly raised eyebrows, a frown, and eyes looking to the side. May convey a variety of negative emotions, including irritation, displeasure, grumpiness, and skepticism, as if giving the side-eye.',
    },
    {
        key: 41,
        emoji: '🙄',
        name: ' Face with Rolling Eyes',
        meaning:
            'A yellow face with a small, closed mouth, flat or frowning, rolling its large, white eyes upwards. As with the gesture of an eye-roll, commonly conveys moderate disdain, disapproval, frustration, or boredom. Tone varies, including playful, sassy, resentful, and sarcastic, as if saying Yeah, whatever.',
    },
    {
        key: 42,
        emoji: '😬',
        name: ' Grimacing Face',
        meaning:
            'A yellow face with simple open eyes showing clenched teeth. May represent a range of negative or tense emotions, especially nervousness, embarrassment, or awkwardness (e.g., Eek!).',
    },
    {
        key: 43,
        emoji: '😮',
        name: ' Face Exhaling',
        meaning:
            'A face showing a visible breath of air being dispelled. Used to represent relief, exhaustion, or as a sigh of disappointment or displeasure.',
    },
    {
        key: 44,
        emoji: '🤥',
        name: ' Lying Face',
        meaning:
            "A yellow face with raised eyebrows, enlarged eyes, slight frown, and long nose, indicating it’s telling a lie in the manner of Pinocchio. Like that character, Facebook's design features a wooden nose. ",
    },
    {
        key: 45,
        emoji: '😌',
        name: ' Relieved Face',
        meaning:
            'A yellow face with soft, closed eyes, raised eyebrows, and a slight smile. Facebook’s design features a slightly open mouth, as if sighing.',
    },
    {
        key: 46,
        emoji: '😔',
        name: ' Pensive Face',
        meaning:
            'A pensive, remorseful face. Saddened by life. Quietly considering where things all went wrong. Depicted as a yellow face with sad, closed eyes, furrowed eyebrows, and a slight, flat mouth.',
    },
    {
        key: 47,
        emoji: '😪',
        name: ' Sleepy Face',
        meaning:
            'A yellow face with closed eyes, mouth slightly open, and a blue snot bubble coming from its nose. Snot bubbles indicate a character is tired or sleeping in anime or manga. Not to be confused with 😴 Sleeping Face ',
    },
    {
        key: 48,
        emoji: '🤤',
        name: ' Drooling Face',
        meaning:
            'A yellow face, usually shown with closed eyes and raised eyebrows, with saliva drooling from one corner of its mouth. Often used to show desire for a person (sexy, attractive) or object (e.g., delicious food). May also represent someone is tired or sleeping.',
    },
    {
        key: 49,
        emoji: '😴',
        name: ' Sleeping Face',
        meaning:
            "A yellow face with eyes closed and mouth letting out three, cartoon-styled Zzz’s overhead to indicate it's sound asleep. The Zzz’s appear blue or purple across most platforms. May also represent boredom (slang, snooze).",
    },
    {
        key: 50,
        emoji: '😷',
        name: ' Face with Medical Mask',
        meaning:
            'A yellow face wearing a white surgical mask, as used by health workers in hospitals as well as the general public during a pandemic. May be worn to avoid sickness or spreading airborne diseases.',
    },
    {
        key: 51,
        emoji: '🤒',
        name: ' Face with Thermometer',
        meaning:
            'A yellow face with raised or furrowed eyebrows and a thermometer in its mouth. Often depicted with red cheeks, as if feverish. May be used to represent a hospital patient or person with a cold or flu.',
    },
    {
        key: 52,
        emoji: '🤕',
        name: ' Face with Head-Bandage',
        meaning:
            'A yellow face with a half-frown and white bandage wrapped around its head, often depicted partially over one eye. May represent physical injury or pain but also emotional hurting, sometimes for ironic effect.',
    },
    {
        key: 53,
        emoji: '🤢',
        name: ' Nauseated Face',
        meaning:
            'A sickly-green face with concerned eyes and puffed, often red cheeks, as if holding back vomit. May represent physical illness or general disgust. Not to be confused with 🤮 Face Vomiting.',
    },
    {
        key: 54,
        emoji: '🤮',
        name: ' Face Vomiting',
        meaning:
            'A yellow face with scrunched, X-shaped eyes spewing bright-green vomit. May represent physical illness or disgust, more intensely so than 🤢 Nauseated Face.',
    },
    {
        key: 55,
        emoji: '🤧',
        name: ' Sneezing Face',
        meaning:
            'A yellow face with scrunched, X-shaped eyes sneezing or blowing its nose into a white tissue, as if from a cold or allergies. Often depicted with a crumpled-looking mouth.',
    },
    {
        key: 56,
        emoji: '🥵',
        name: ' Hot Face',
        meaning:
            'A reddish-orange face with furrowed eyebrows, tongue stuck out, and beads of sweat, as if overheated from high temperatures. Number and position of sweat droplets vary by platforms. May also represent physical attractiveness (slang, hot).',
    },
    {
        key: 57,
        emoji: '🥶',
        name: ' Cold Face',
        meaning:
            'An icy-blue face with gritted teeth usually depicted with icicles clinging to its cheeks or jaw, as if frozen from extreme cold. May also represent unfriendliness (slang, cold) or excellence (slang, cool or chill).',
    },
    {
        key: 58,
        emoji: '🥴',
        name: ' Woozy Face',
        meaning:
            "A yellow face with a crumpled mouth and a cockeyed expression, as if tired and emotional from inebriation or smitten with love. Depicted with raised or furrowed eyebrows and at least one eye half-open. WhatsApp's design features a tongue hanging out. ",
    },
    {
        key: 59,
        emoji: '😵',
        name: ' Dizzy Face',
        meaning:
            'A yellow face with X’s for eyes and a round, open mouth. Often depicted with raised or furrowed eyebrows. Facebook’s design features a purple forehead. Previously displayed with spiral eyes on some platforms.',
    },
    {
        key: 60,
        emoji: '😵',
        name: ' Face with Spiral Eyes',
        meaning:
            'A face showing a spiral eyes, commonly used to indicate dizziness, but may also represent hypnosis or other forms of disorientation.',
    },
    {
        key: 61,
        emoji: '🤯',
        name: ' Exploding Head',
        meaning:
            'A yellow face with an open mouth, the top of its head exploding in the shape of a brain-like mushroom cloud. A visual form of the expression mind blown, it may represent such emotions as shock, awe, amazement, and disbelief.',
    },
    {
        key: 62,
        emoji: '🤠',
        name: ' Cowboy Hat Face',
        meaning:
            'Yee-haw! A yellow smiley wearing a wide-brimmed, brown-leather cowboy hat. Its smile varies across platforms. May convey a sense of exuberance, whimsy, confidence, adventure, or other sentiments.',
    },
    {
        key: 63,
        emoji: '🥳',
        name: ' Partying Face',
        meaning:
            "A yellow face with a party hat blowing a party horn as confetti floats around its head. Used for celebrating joyous occasions (such as New Year's Eve or World Emoji Day) and enjoying good times more generally.",
    },
    {
        key: 64,
        emoji: '🥸',
        name: ' Disguised Face',
        meaning:
            'A yellow face with big glasses, a large nose, thick eyebrows, and a mustache. Used to represent someone in disguise.',
    },
    {
        key: 65,
        emoji: '😎',
        name: ' Smiling Face with Sunglasses',
        meaning:
            'A yellow face with a broad, closed smile wearing black sunglasses, as if a pair of classic Wayfarers. Often used to convey the slang sense of cool. May also express a confident, carefree attitude or that something is excellent.',
    },
    {
        key: 66,
        emoji: '🤓',
        name: ' Nerd Face',
        meaning:
            'A smiling yellow face with glasses, often with teeth showing, originally buck teeth on most platforms.',
    },
    {
        key: 67,
        emoji: '🧐',
        name: ' Face with Monocle',
        meaning:
            'A yellow face with furrowed eyebrows wearing a monocle. Usually depicted with a small, intent frown and head slightly upturned, as if in careful inspection.',
    },
    {
        key: 68,
        emoji: '😕',
        name: ' Confused Face',
        meaning:
            'A yellow face with open eyes and a skewed frown, as if scrunching its cheeks or chewing its lips. A look of feeling unsure. Google’s design heightens its intended puzzlement by including contorted eyebrows.',
    },
    {
        key: 69,
        emoji: '😟',
        name: ' Worried Face',
        meaning:
            'A yellow face with open eyes, raised or furrowed eyebrows, and a broad frown. May convey a variety of moderately sad or tense emotions, including concern, anxiety, alarm, disappointment, and unhappiness. ',
    },
    {
        key: 70,
        emoji: '🙁',
        name: ' Slightly Frowning Face',
        meaning:
            'A yellow face with simple, open eyes and a slight frown. Often conveys a mild degree of concern, disappointment, or sadness, but usually less intensely than ☹️ Frowning Face.',
    },
    {
        key: 71,
        emoji: '☹️',
        name: '️ Frowning Face',
        meaning:
            'A classic sad face. A yellow face with simple, open eyes and wide, steep frown. May convey such feelings as moderate concern or disappointment and affectionate sadness, as when missing a loved one. Its sentiment is usually more intense than 🙁 Slightly Frowning Face, which has a smaller frown.',
    },
    {
        key: 72,
        emoji: '😮',
        name: ' Face with Open Mouth',
        meaning:
            'A yellow face with small, open eyes and a large, round mouth, slack with surprise or shock, as if saying Wow! or Oh my! May convey such feelings as awe or disbelief, often milder or more ironic in tone than 😱 Face Screaming in Fear.',
    },
    {
        key: 73,
        emoji: '😯',
        name: ' Hushed Face',
        meaning:
            'A yellow face with small, open eyes, raised eyebrows, and a small, open mouth, as if it has been hushed by concern or correction. Meaning widely varies, but its expression is commonly taken as surprise, embarrassment, or mild excitement.',
    },
    {
        key: 74,
        emoji: '😲',
        name: ' Astonished Face',
        meaning:
            'A yellow face with open eyes, raised eyebrows, and an open mouth, as if gasping in shock or surprise. Often depicted showing its upper teeth. May convey a wide range of emotions, including awe, amazement, admiration, disbelief, excitement, or concern.',
    },
    {
        key: 75,
        emoji: '😳',
        name: ' Flushed Face',
        meaning:
            'A yellow face with raised eyebrows, a small, closed mouth, wide, white eyes staring straight ahead, and blushing cheeks. Intended to depict such feelings as embarrassment, but meaning very widely varies. Other senses include flattery, surprise, disbelief, admiration, affection, and excitement.',
    },
    {
        key: 76,
        emoji: '🥺',
        name: ' Pleading Face',
        meaning:
            'A yellow face with furrowed eyebrows, a small frown, and large, “puppy dog” eyes, as if begging or pleading. May also represent adoration or feeling touched by a loving gesture.',
    },
    {
        key: 77,
        emoji: '😦',
        name: ' Frowning Face with Open Mouth',
        meaning:
            'A yellow face with small, open eyes and an open frown. Samsung’s design shows upper teeth and tongue. Meaning widely varies, but may convey mild sadness, disappointment, concern, and amazement.',
    },
    {
        key: 78,
        emoji: '😧',
        name: ' Anguished Face',
        meaning:
            'A yellow face with small, open eyes, open frown, and raised eyebrows. Samsung’s design shows upper teeth and tongue. Meaning widely varies, but may convey alarm, confusion, or sadness, as if gasping in shock or concern.',
    },
    {
        key: 79,
        emoji: '😨',
        name: ' Fearful Face',
        meaning:
            'A face with small, open eyes, open frown, raised eyebrows, and a pale blue forehead, as if experiencing a cold flash. Samsung’s design shows upper teeth and tongue.',
    },
    {
        key: 80,
        emoji: '😰',
        name: ' Anxious Face with Sweat',
        meaning:
            "A face with open eyes and a small, open frown. Its eyebrows are furrowed, with a single bead of cold sweat dripping down, and its forehead is pale blue, as if experiencing a cold flash. Samsung's design shows upper teeth and tongue.",
    },
    {
        key: 81,
        emoji: '😥',
        name: ' Sad but Relieved Face',
        meaning:
            'A yellow face with small, open eyes, a slight frown, and furrowed eyebrows, from which a single bead of sweat drips, as if from concern or anxiety. Also known as Disappointed but Relieved Face, suggesting the smiley is upset but is grateful things didn’t turn out worse.',
    },
    {
        key: 82,
        emoji: '😢',
        name: ' Crying Face',
        meaning:
            'A yellow face with raised eyebrows and a slight frown, shedding a single, blue tear from one eye down its cheek. May convey a moderate degree of sadness or pain, usually less intensely than 😭 Loudly Crying Face.',
    },
    {
        key: 83,
        emoji: '😭',
        name: ' Loudly Crying Face',
        meaning:
            'A yellow face with an open mouth wailing and streams of heavy tears flowing from closed eyes. May convey inconsolable grief but also other intense feelings, such as uncontrollable laughter, pride or overwhelming joy.',
    },
    {
        key: 84,
        emoji: '😱',
        name: ' Face Screaming in Fear',
        meaning:
            'A yellow face screaming in fear, depicted by wide, white eyes, a long, open mouth, hands pressed on cheeks, and a pale blue forehead, as if it has lost its color. Its expression evokes Edvard Munch’s iconic painting The Scream.',
    },
    {
        key: 85,
        emoji: '😖',
        name: ' Confounded Face',
        meaning:
            'A yellow face with scrunched, X-shaped eyes and a crumpled mouth, as if quivering in frustration or holding back tears. May be used to represent being overcome with various emotions, including irritation, frustration, disgust, and sadness, as if to the point of defeat.  ',
    },
    {
        key: 86,
        emoji: '😣',
        name: ' Persevering Face',
        meaning:
            'A yellow face with a slight frown, furrowed eyebrows, and scrunched eyes, as if holding back tears or exerting great effort. May convey various degrees and tones of frustration, sadness, helplessness, and struggle. Facebook’s design features a light-purple forehead.',
    },
    {
        key: 87,
        emoji: '😞',
        name: ' Disappointed Face',
        meaning:
            'A yellow face with a frown and closed, downcast eyes, as if aching with sorrow or pain. May convey a variety of unhappy emotions, including disappointment, grief, stress, regret, and remorse.',
    },
    {
        key: 88,
        emoji: '😓',
        name: ' Downcast Face with Sweat',
        meaning:
            'A yellow face with closed eyes, frown, and a bead of sweat dripping from its forehead. Usually depicted with a single sweat bead on its right side, though Microsoft includes two.',
    },
    {
        key: 89,
        emoji: '😩',
        name: ' Weary Face',
        meaning:
            'A yellow face with closed eyes, furrowed brows, and a broad, open frown, as if distraught to the point of giving up. Usually shown with upper teeth and sometimes tongue.',
    },
    {
        key: 90,
        emoji: '😫',
        name: ' Tired Face',
        meaning:
            'A yellow face with scrunched, X-shaped eyes, furrowed eyebrows, and a broad, open frown, as if yawning in exhaustion or groaning in exasperation. Usually shown with upper teeth and sometimes tongue.',
    },
    {
        key: 91,
        emoji: '🥱',
        name: ' Yawning Face',
        meaning:
            'A yellow face with eyes closed and mouth wide open covered by a hand. Captured mid-yawn, this may represent having insufficient sleep, or to imply boredom with a person or topic.',
    },
    {
        key: 92,
        emoji: '😤',
        name: ' Face with Steam From Nose',
        meaning:
            'A yellow face with closed eyes, furrowed eyebrows, broad frown, and two puffs of steam blowing out of its nose, as if in a huff or fuming. ',
    },
    {
        key: 93,
        emoji: '😡',
        name: ' Pouting Face',
        meaning:
            'A red face with an angry expression: frowning mouth with eyes and eyebrows scrunched downward. Bears the same expression as 😠 Angry Face on most platforms and may convey more intense degrees of anger, e.g., hate or rage.',
    },
    {
        key: 94,
        emoji: '😠',
        name: ' Angry Face',
        meaning:
            'A yellow face with a frowning mouth and eyes and eyebrows scrunched downward in anger. Google’s design features a reddish face and Facebook’s, clenched teeth.',
    },
    {
        key: 95,
        emoji: '🤬',
        name: ' Face with Symbols on Mouth',
        meaning:
            "An angry-red face with a black bar and white grawlixes covering its mouth, indicating it's swearing or being vulgar. Grawlixes are typographical symbols (e.g., @#$%&!) representing swear words or obscenities. Often used to convey an outburst of anger, frustration, or rage.",
    },
    {
        key: 96,
        emoji: '😈',
        name: ' Smiling Face with Horns',
        meaning:
            'A face, usually purple, with devil horns, a wide grin, and eyes and eyebrows scrunched downward in the same manner as 😠 Angry Face on most platforms. Google’s design is red and Facebook’s has black horns and green eyes.',
    },
    {
        key: 97,
        emoji: '👿',
        name: ' Angry Face with Horns',
        meaning:
            'A face, usually purple, with two devil horns, frowning mouth and eyes, and eyebrows scrunched downwards in anger. Bears the same expression as 😠 Angry Face and 😡 Pouting Face on most platforms. Google’s design is red and Facebook’s has black horns, green eyes, and clenched teeth.',
    },
    {
        key: 98,
        emoji: '💀',
        name: ' Skull',
        meaning:
            'A whitish-gray, cartoon-styled human skull with large, black eye sockets. Commonly expresses figurative death, e.g., dying from extreme laughter, frustration, or affection.',
    },
    {
        key: 99,
        emoji: '☠️',
        name: '️ Skull and Crossbones',
        meaning:
            'A cartoon human skull atop an X-shaped pair of bones, as on a pirate flag or poison symbol. Samsung’s design previously displayed a skull and crossbones on a yellow triangle, indicating a hazardous material.',
    },
    {
        key: 100,
        emoji: '💩',
        name: ' Pile of Poo',
        meaning:
            'A swirl of brown poop, shaped like soft-serve ice cream with large, excited eyes and a big, friendly smile.',
    },
]

export default emojipedia
