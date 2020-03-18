import igor from "./images/IgorFacebook1.jpg";
import jonas from "./images/JonasFacebook1.jpg";
import matt from "./images/MattFacebook1.jpeg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Igor Samoilenko",
      slug: "igor-samoilenko",
      heritage: "Russian",
      musicalTalentRating: 6,
      age: 31,
      instrument: "Guitar",
      university: false,
      goodlooking: false,
      onHome: true,
      description:
        "Originally from Russia, Samoilenko immigrated to New Zealand with his family many years ago in an attempt to escape the wrath of communism. Samoilenko joined the Royal New Zealand Navy after graduating from high school, and has been working there for at least a few years. He currently lives with his parents on the North Shore, and his passion for music is so strong that he chooses writing music in their basement over having a girlfriend or anything else that would probably improve his life.",
      additionaltalents: [
        "Nice big beard",
        "Deep historical knowledge",
        "Exceptional victim mentality",
        "Understasted vocal talent",
        "Able to write and perform to high level whilst under influence",
        "Good ear for quality guitar licks"
      ],
      images: [
        {
          fields: {
            file: {
              url: igor
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Jonas Cole",
      slug: "jonas-cole",
      heritage: "NZ",
      musicalTalentRating: 8,
      age: 25,
      instrument: "Drums",
      university: true,
      goodlooking: false,
      onHome: true,
      description:
        "Originally from Whangarei, Cole moved to Auckland from small-town New Zealand as a teenager in an attempt to escape racism and homophobia. He originally pursued a career in the Royal New Zealand Navy, where he met his musical mentor in Igor Samoilenko. Eventually proving too pathetic to stay in the military, he decided to go to university to study computer science and pursue a career in programming. He has only just moved out from his parents house and is still with the one girlfriend he has only ever had.",
      additionaltalents: [
        "Unusual time signatures",
        "Venturing out of his lane in social or political arguments",
        "Good sense of rhythm",
        "Resident FIFA Champion",
        "Straight-edge",
        "Supportive of the most vulnerable and weak in society, eg: Manchester United"
      ],
      images: [
        {
          fields: {
            file: {
              url: jonas
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Matthew Armstrong",
      slug: "matthew-armstrong",
      heritage: "Deutsch",
      musicalTalentRating: 10,
      age: 27,
      instrument: "Bass",
      university: true,
      goodlooking: true,
      onHome: true,
      description:
        "Born and raised in Ponsonby, Auckland, to parents of NZ and Deutsch descent, Armstrong knows a thing or two about succeeding against the odds. He first picked up a guitar at age 7 and his teacher told him he was the most talented 7 year old she had 'ever seen play the wonderful instrument - and I've seen Jimi Hendrix live!'. His flair for the guitar was so good that he was chosen to play 'Mary had a Little Lamb' at his primary school talent show, for which he received a standing ovation. In and out of bands because they could not match his talents over the years, he eventually settled with Poltava because he thought they had a bit of an X factor. He mastered the bass in the space of two weeks simply to join the band, and now writes the quality bass lines and sings the melodies along with Samoilenko. He has had one long term relationship and many casual partners over the years.",
      additionaltalents: [
        "Resident Table Tennis Champion",
        "Unparalleled bass lines",
        "Very attractive",
        "Humble to a fault",
        "Master of multiple instruments",
        "Vegan",
        "Rarely (if ever) loses arguments"
      ],
      images: [
        {
          fields: {
            file: {
              url: matt
            }
          }
        }
      ]
    }
  }
];

