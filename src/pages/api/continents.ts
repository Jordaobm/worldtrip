// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface Continent {
  id: string;
  name: string;
  description: string;
  pathImage: string;
}

export default function getContinents(
  req: NextApiRequest,
  res: NextApiResponse<Continent[]>
) {
  const continents: Continent[] = [
    {
      id: "america-do-norte",
      name: "América do Norte",
      description: "Grandes metrópoles e atrações",
      pathImage: "continents/northAmerica.jpg"
    },
    {
      id: "america-do-sul",
      name: "América do Sul",
      description: "O clima perfeito para praia",
      pathImage: "continents/southAmerica.jpg"
    },
    {
      id: "asia",
      name: "Ásia",
      description: "O maior continente",
      pathImage: "continents/asia.jpg"
    },
    {
      id: "africa",
      name: "África",
      description: "Uma das maiores diversidades culturais do planeta",
      pathImage: "continents/africa.jpg"
    },
    {
      id: "europa",
      name: "Europa",
      description: "O continente mais antigo",
      pathImage: "continents/europa.jpg"
    },
    {
      id: "oceania",
      name: "Oceania",
      description: "Um continente moderno",
      pathImage: "continents/oceania.jpg"
    }
  ];

  res.status(200).json(continents);
}
