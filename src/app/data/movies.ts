export interface Movie {
  id: number;
  title: string;
  image: string;
  synopsis: string;
  director: string;
  classification: string;
  duration: string;
  rating: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Avatar",
    image: "https://raw.githubusercontent.com/JazminAnaya/IAM-Trabajo-Final-Figma-Cinepolis-Valtierra-0716/refs/heads/main/avatar.jfif",
    synopsis: "En el exuberante mundo alienígena de Pandora viven los Na'vi, seres que parecen primitivos pero que en realidad son muy evolucionados. Jake Sully, un ex-Marine confinado a una silla de ruedas, es enviado a Pandora donde aprenderá sobre su cultura y se enamorará de Neytiri.",
    director: "James Cameron",
    classification: "PG-13",
    duration: "162 min",
    rating: 4.5
  },
  {
    id: 2,
    title: "Sonic 3",
    image: "https://raw.githubusercontent.com/JazminAnaya/IAM-Trabajo-Final-Figma-Cinepolis-Valtierra-0716/refs/heads/main/sonic%203.jfif",
    synopsis: "Sonic se une a sus amigos en una nueva aventura épica para detener una amenaza misteriosa que podría destruir el mundo. Con la ayuda de Tails y Knuckles, Sonic deberá correr más rápido que nunca para salvar el día.",
    director: "Jeff Fowler",
    classification: "PG",
    duration: "110 min",
    rating: 4.2
  },
  {
    id: 3,
    title: "Avengers",
    image: "https://raw.githubusercontent.com/JazminAnaya/IAM-Trabajo-Final-Figma-Cinepolis-Valtierra-0716/refs/heads/main/avengers.jfif",
    synopsis: "Los héroes más poderosos de la Tierra deben unirse para defender al planeta de una amenaza sin precedentes. Iron Man, Capitán América, Thor, Hulk y sus aliados luchan juntos contra fuerzas que ningún héroe podría enfrentar solo.",
    director: "Joss Whedon",
    classification: "PG-13",
    duration: "143 min",
    rating: 4.8
  },
  {
    id: 4,
    title: "Star Wars",
    image: "https://raw.githubusercontent.com/JazminAnaya/IAM-Trabajo-Final-Figma-Cinepolis-Valtierra-0716/refs/heads/main/star%20wars.jfif",
    synopsis: "Una saga épica de bien contra mal en una galaxia muy, muy lejana. Luke Skywalker se une a un Caballero Jedi, un piloto arrogante, una princesa valiente y dos droides para salvar la galaxia del Imperio Galáctico, mientras intenta rescatar a la Princesa Leia del malvado Darth Vader.",
    director: "George Lucas",
    classification: "PG",
    duration: "121 min",
    rating: 5.0
  }
];
