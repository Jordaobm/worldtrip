import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Tag,
  Text
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Continent } from "../api/allDataContinent";
import { Tooltip } from "@chakra-ui/react";
const Continents = (continent: Continent) => {
  return (
    <Box>
      <Header goBack />

      <Flex
        align="center"
        justify="center"
        position="relative"
        width="100%"
        height="31.25rem"
      >
        <Image
          src={continent?.pathImage}
          width="100%"
          height="31.25rem"
          objectFit="cover"
          alt={continent?.name}
          filter="auto"
          brightness="40%"
        />
        <Box
          position="absolute"
          bottom="3.75rem"
          w="100%"
          maxWidth="72.5rem"
          paddingX="1rem"
        >
          <Heading color="gray.100" fontSize="3rem">
            {continent?.name}
          </Heading>
        </Box>
      </Flex>

      <Flex
        mt="5rem"
        marginX="auto"
        w="100%"
        maxWidth="72.5rem"
        paddingX="1rem"
      >
        <Box
          w="50%"
          color="gray.600"
          fontSize="1.5rem"
          lineHeight="2.5rem"
          textAlign="justify"
        >
          {continent?.page?.description}
        </Box>

        <Flex w="50%" align="center" justify="space-between" ml="4.37rem">
          <Flex flexDir="column" justify="center" align="center">
            <Heading fontSize="3rem" color="yellow">
              {continent?.page?.contries}
            </Heading>
            <Text fontSize="1.5rem" color="gray.600" fontWeight="bold">
              países
            </Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Heading fontSize="3rem" color="yellow">
              {continent?.page?.languages}
            </Heading>
            <HStack spacing="0.2rem">
              <Text fontSize="1.5rem" color="gray.600" fontWeight="bold">
                línguas
              </Text>

              <Tooltip label="Línguas mais faladas">
                <Image src="/info.svg" />
              </Tooltip>
            </HStack>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Heading fontSize="3rem" color="yellow">
              {continent?.page?.cities?.length}
            </Heading>
            <HStack spacing="0.2rem">
              <Text fontSize="1.5rem" color="gray.600" fontWeight="bold">
                cidades
              </Text>

              <Tooltip label="Cidades cadastradas para visitar">
                <Image src="/info.svg" />
              </Tooltip>
            </HStack>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mt="5rem"
        marginX="auto"
        w="100%"
        maxWidth="72.5rem"
        paddingX="1rem"
      >
        <Heading color="gray.600" fontSize="2.25rem" fontWeight="medium">
          Cidades
        </Heading>
      </Flex>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        my="2.5rem"
        marginX="auto"
        w="100%"
        maxWidth="72.5rem"
        paddingX="1rem"
      >
        {continent?.page?.cities?.map((city) => {
          return (
            <GridItem
              key={city?.cityName}
              w="16rem"
              minH="17.4rem"
              border="1px"
              borderColor="yellow"
            >
              <Image
                src={city?.pathImage}
                w="16rem"
                h="10rem"
                alt={city?.cityName}
              />

              <Flex padding="1.5rem" align="center" justify="space-between">
                <Box>
                  <Heading fontSize="1.25rem" color="gray.600">
                    {city?.cityName}
                  </Heading>
                  <Text mt="0.75rem" fontSize="1rem" color="gray.700">
                    {city?.contryName}
                  </Text>
                </Box>

                <Box minW="1.9rem">
                  <Image
                    src={city?.contryFlag}
                    boxSize="1.9rem"
                    borderRadius="full"
                    alt={city?.cityName}
                    objectFit="cover"
                  />
                </Box>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Continents;

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "america-do-norte" } }],
    fallback: true
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL
    }/api/allDataContinent?${new URLSearchParams({
      id: slug
    })}`
  );

  const continent = await response.json();

  return {
    props: continent
  };
}
