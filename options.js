const choices = {
  get: (opt) => {
    switch (opt) {
      case "Restart game":
      case "Exit":
        return {
          continueTitle: "exit",
        };

      case "Masuk Siang":
        return {
          continueTitle: "10/12/2032 - Otaku War",
          continueText:
            "The world discovered the USA's plans and the third world war began!",
          continueImage: "images/04.png",
          cardImg: "images/05.png",
          cardTitle: "Followed the order to lead the project",
          cardTxt:
            "You accepted to lead the project and now Yamato is seen as a terrorist by the world. " +
            "However, you have the chance to sabotage the project and end the war.",
          opt1: "Gerbang ditutup",
        };
      case "Gerbang ditutup":
        return {
          continueTitle: "Yamato sabotaged the project",
          continueText:
            "Contrary to what the government wanted, Yamato programmed the robots to obey only him, and he used them to stop the war.",
          continueImage: "images/06.png",
          cardImg: "images/06.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, Yamato managed to stop the war " +
            "and was the only one capable of controlling the robots. Later, he was considered a genius for his contributions to the field of AI.",
          opt1: "Tetap masuk sekolah",
          opt2: "Bolos sekolah",
        };
      case "Tetap masuk sekolah":
        return {
          continueTitle: "Tetap masuk sekolah meskipun terlambat",
          continueText: "Menjalani hukuman dengan membersihkan toilet",
          continueImage: "images/07.png",
          cardImg: "images/08.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, Yamato was cold and followed orders " +
            "without question. As a consequence, the USA won the war and achieved world domination. Yamato lived the rest of his life without " +
            "friends and being ignored by everyone because of his decisions.",
        };
      case "Bolos sekolah":
        return {
          continueTitle: "Tetap masuk sekolah meskipun terlambat",
          continueText: "Menjalani hukuman dengan membersihkan toilet",
          continueImage: "images/07.png",
          cardImg: "images/08.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, Yamato was cold and followed orders " +
            "without question. As a consequence, the USA won the war and achieved world domination. Yamato lived the rest of his life without " +
            "friends and being ignored by everyone because of his decisions.",
          opt1: "Pergi ketaman",
          opt2: "Merasa lapar",
        };
      case "Masuk Pagi":
        return {
          continueTitle: "10/12/2032 - Somewhere in the USA",
          continueText:
            "Sampai di sekolah Mengikuti upacara bendera (fakta upacara hari senin)",
          continueImage: "images/09.png",
          cardImg: "images/10.png",
          cardTitle: "Captured!",
          cardTxt:
            "The USA no longer trusts Yamato, and now they want to sentence him to death. However, he manages " +
            "to slip past the guards and has a chance to escape.",
          opt1: "Escape",
          opt2: "Stay",
        };
      case "Escape":
        return {
          continueTitle: "10/12/2032 - Alien Spaceship",
          continueText:
            "After leaving the secret base, Yamato was abducted by aliens as a rescue attempt.",
          continueImage: "images/11.png",
          cardImg: "images/12.png",
          cardTitle: "Abducted by aliens!",
          cardTxt:
            "Admiring his intelligence and for preventing a war, they offer him the opportunity to travel through space and learn more about the culture of other beings.",
          opt1: "Travel through space",
          opt2: "Return to earth",
        };
      case "Travel through space":
        return {
          continueTitle: "Evolution of the species",
          continueText:
            "After accepting to travel with the aliens, Yamato spent years acquiring knowledge until at some point, he evolved " +
            "into a new type of human!",
          continueImage: "images/13.png",
          cardImg: "images/13.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, Yamato spent years acquiring knowledge " +
            "on his stellar travels and evolved into a new type of human! Now, he has eyes that see everything as a vast sequence of codes, " +
            "and with his mind, he can rewrite them if he wishes. With this power, he saved various planets and galaxies.",
          opt1: "Restart game",
          opt2: "Exit",
        };
      case "Return to earth":
        return {
          continueTitle: "Considered a hero!",
          continueText:
            "After deciding to return to earth, the aliens drop you in a safe place and spread proof that you were telling the truth.",
          continueImage: "images/14.png",
          cardImg: "images/15.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, Yamato was considered a hero for his " +
            "courage in revealing secrets that put his life at risk, and he founded his own cybersecurity company. With " +
            "his fame, he gained many clients and soon became one of the richest people on the planet!",
          opt1: "Restart game",
          opt2: "Exit",
        };
      case "Stay":
        return {
          continueTitle: "USA - Maximum security prison",
          continueText:
            "Yamato decided not to escape, and he was sent to a maximum-security prison.",
          continueImage: "images/16.png",
          cardImg: "images/16.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, you decided that Yamato should face his " +
            "sentence, and thus, he was sent to a maximum-security prison. Instead of the death penalty, he was sentenced to spend " +
            "the rest of his life in a small cell with no contact with other humans.",
          opt1: "Restart game",
          opt2: "Exit",
        };
      case "Reject job":
        return {
          continueTitle: "30/11/2032 - Coffee shop",
          continueText:
            "After rejecting the USA's proposal, Yamato knows he is on the world's most-wanted list.",
          continueImage: "images/17.png",
          cardImg: "images/18.png",
          cardTitle: "Rejected the job!",
          cardTxt:
            "Yamato found out he was denounced by another hacker, and the police are on their way to where he " +
            "is now. As he has a car and knows the streets well, he has a chance to try to escape!",
          opt1: "Wait for the police",
          opt2: "Escape from the police",
        };
      case "Wait for the police":
        return {
          continueTitle: "02/12/2032 - Prison in the USA",
          continueText:
            "After deciding to wait for the police, Yamato spent days being interrogated until he was finally " +
            "sent to a high-security prison.",
          continueImage: "images/19.png",
          cardImg: "images/19.png",
          cardTitle: "Game Over!",
          cardTxt:
            "Your story ends here...! But there are other endings to see xD! In this ending, Yamato was interrogated for days and finally " +
            "sent to a high-security prison. Instead of the death penalty, he was sentenced to spend the rest of his life in a small cell " +
            "with no contact with other humans.",
          opt1: "Restart game",
          opt2: "Exit",
        };
      case "Escape from the police":
        return {
          continueTitle: "02/12/2032 - Hidden in the USA",
          continueText:
            "Yamato managed to escape from the police, but now he is living in a very poorly maintained house.",
          continueImage: "images/20.png",
          cardImg: "images/21.png",
          cardTitle: "Living as a fugitive!",
          cardTxt:
            "In this ending, Yamato managed to escape from the police, but now he is forced to live in a poorly maintained house in a secluded place. " +
            "He can no longer trust anyone and lives isolated, constantly on the lookout to avoid being discovered.",
          opt1: "Restart game",
          opt2: "Exit",
        };
      default:
        return {
          continueTitle: "11/29/2032 - Somewhere in Japan...",
          continueText:"Yamato is in his room trying to hack secret information about aliens from Area 51.",
          continueImage: "images/01.png",
          cardImg: "images/27.png",
          cardTitle: "Yamato successfully hacked!",
          cardTxt:"The US government saw potential and spread the news that Yamato could work for them. If he refuses, he will be added to the world’s most wanted list!",
          opt1: "Masuk Pagi",
          opt2: "Masuk Siang",
        };
    }
  },
};
