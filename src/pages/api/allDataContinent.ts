// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface City {
  cityName: string;
  contryName: string;
  contryFlag: string;
  pathImage: string;
}

export interface Continent {
  id: string;
  name: string;
  description: string;
  pathImage: string;
  page: {
    description: string;
    contries: number;
    languages: number;
    cities: City[];
  };
}

const continents: Continent[] = [
  {
    id: "america-do-norte",
    name: "América do Norte",
    description: "Grandes metrópoles e atrações",
    pathImage: "/continents/northAmerica.jpg",
    page: {
      description:
        "Há opções de cidades urbanas e cosmopolitas, desérticas, nevadas, outras para quem gosta de sossego, de baladas, de parques de diversão, de turismo de aventura.",
      contries: 4,
      languages: 4,
      cities: [
        {
          cityName: "Nova York",
          contryName: "Estados Unidos",
          contryFlag: "/contries/estadosUnidos.png",
          pathImage: "/cities/novaYork.jpg"
        },
        {
          cityName: "Los Angeles",
          contryName: "Estados Unidos",
          contryFlag: "/contries/estadosUnidos.png",
          pathImage: "/cities/losAngeles.jpg"
        },
        {
          cityName: "Chicago",
          contryName: "Estados Unidos",
          contryFlag: "/contries/estadosUnidos.png",
          pathImage: "/cities/chicago.jpg"
        },
        {
          cityName: "Houston",
          contryName: "Estados Unidos",
          contryFlag: "/contries/estadosUnidos.png",
          pathImage: "/cities/houston.jpg"
        },
        {
          cityName: "Toronto",
          contryName: "Canadá",
          contryFlag: "/contries/canada.jpg",
          pathImage: "/cities/toronto.jpg"
        },
        {
          cityName: "Montreal",
          contryName: "Canadá",
          contryFlag: "/contries/canada.jpg",
          pathImage: "/cities/montreal.jpg"
        },
        {
          cityName: "Quebec City",
          contryName: "Canadá",
          contryFlag: "/contries/canada.jpg",
          pathImage: "/cities/quebecCity.jpg"
        }
      ]
    }
  },
  {
    id: "america-do-sul",
    name: "América do Sul",
    description: "O clima perfeito para praia",
    pathImage: "/continents/southAmerica.jpg",
    page: {
      description:
        "A América do Sul possui muitos destinos turísticos que valem a pena conhecer em qualquer tipo de viagem, seja romântica, em família, com amigos. É também escolhida por muitos brasileiros que desejam fazer um mochilão e visitar vários países gastando pouco. ",
      contries: 13,
      languages: 10,
      cities: [
        {
          cityName: "Rio de Janeiro",
          contryName: "Brasil",
          contryFlag: "/contries/brasil.jpg",
          pathImage: "/cities/rioDeJaneiro.jpg"
        },
        {
          cityName: "Fernando de Noronha",
          contryName: "Brasil",
          contryFlag: "/contries/brasil.jpg",
          pathImage: "/cities/fernandoDeNoronha.jpg"
        }
      ]
    }
  },
  {
    id: "asia",
    name: "Ásia",
    description: "O maior continente",
    pathImage: "/continents/asia.jpg",
    page: {
      description:
        "A Ásia tem 50 países de culturas e gastronomias diferentes. Então, se você está em busca de aventuras e de conhecer algo novo, lá é o lugar ideal.",
      contries: 50,
      languages: 13,
      cities: [
        {
          cityName: "Bali",
          contryName: "Indonésia",
          contryFlag: "/contries/indonesia.jpg",
          pathImage: "/cities/bali.jpg"
        }
      ]
    }
  },
  {
    id: "africa",
    name: "África",
    description: "Uma das maiores diversidades culturais do planeta",
    pathImage: "/continents/africa.jpg",
    page: {
      description:
        "Com uma área enorme e uma biodiversidade digna de seu tamanho, viagens para a África são muito procuradas pelos safáris — especialmente nos desertos e savanas, os biomas mais lembrados usualmente. ",
      contries: 54,
      languages: 500,
      cities: [
        {
          cityName: "Marrakech",
          contryName: "Marrocos",
          contryFlag: "/contries/marrocos.jpg",
          pathImage: "/cities/marrakech.jpg"
        }
      ]
    }
  },
  {
    id: "europa",
    name: "Europa",
    description: "O continente mais antigo",
    pathImage: "/continents/europa.jpg",
    page: {
      description:
        "A Europa é o principal destino turístico a nível mundial. O turismo desempenha um importante papel no desenvolvimento de várias regiões europeias, particularmente nas regiões menos desenvolvidas, devido ao seu considerável efeito de contágio e potencial de criação de emprego, principalmente entre os jovens. O turismo tem, também, demonstrado significativa resiliência e persistente crescimento, mesmo durante a recente crise. ",
      contries: 50,
      languages: 24,
      cities: [
        {
          cityName: "Londres",
          contryName: "Inglaterra",
          contryFlag: "/contries/inglaterra.jpg",
          pathImage: "/cities/londres.jpg"
        }
      ]
    }
  },
  {
    id: "oceania",
    name: "Oceania",
    description: "Um continente moderno",
    pathImage: "/continents/oceania.jpg",
    page: {
      description:
        "O menor dos continentes é, também, um dos mais versáteis destinos a ser desbravado, de braços abertos tanto para quem não abre mão de uma boa estrutura e muito conforto para curtir sol e mar nas viagens, quanto para os exploradores mais ativos, que curtem mochila nas costas.",
      contries: 14,
      languages: 4,
      cities: [
        {
          cityName: "Sidney",
          contryName: "Austrália",
          contryFlag: "/contries/australia.png",
          pathImage: "/cities/sidney.jpg"
        }
      ]
    }
  }
];

export default function allDataContinent(
  req: NextApiRequest,
  res: NextApiResponse<Continent | any>
) {
  const { query } = req;

  const response = continents?.find((continent) => continent?.id === query?.id);

  if (response) {
    return res.status(200).json(response);
  }

  return res.status(404).json({ error: "Continente não encontrado" });
}
