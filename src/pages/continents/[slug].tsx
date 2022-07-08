import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  Tooltip,
  useMediaQuery
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { CardCity } from "../../components/CardCity";
import { Header } from "../../components/Header";
import { City } from "../api/allDataContinent";
const Continents = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const { data: continent } = useQuery(
    ["continent"],
    () =>
      axios
        .get(
          `/api/allDataContinent?${new URLSearchParams({
            id: props?.slug
          })}`
        )
        ?.then((res) => res?.data),
    {
      enabled: !!props?.slug
    }
  );

  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

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
        <Skeleton isLoaded={!isLoading} width="100%" height="31.25rem">
          <Image
            src={continent?.pathImage}
            width="100%"
            height="31.25rem"
            objectFit="cover"
            alt={continent?.name}
            filter="auto"
            brightness="40%"
            onLoad={() => setIsLoading(false)}
          />
        </Skeleton>

        <Box
          position="absolute"
          bottom={isLargerThan900 ? "3.75rem" : "auto"}
          textAlign={isLargerThan900 ? "left" : "center"}
          w="100%"
          maxWidth="72.5rem"
          paddingX="1rem"
        >
          <Heading
            color="gray.100"
            fontSize={isLargerThan900 ? "3rem" : "2rem"}
          >
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
        flexDir={isLargerThan900 ? "row" : "column"}
      >
        <Box
          w={isLargerThan900 ? "50%" : "100%"}
          color="gray.600"
          fontSize={isLargerThan900 ? "1.5rem" : "1rem"}
          lineHeight={isLargerThan900 ? "2.5rem" : "1.5rem"}
          textAlign="justify"
        >
          {continent?.page?.description}
        </Box>

        <Flex
          w={isLargerThan900 ? "50%" : "100%"}
          align="center"
          justify="space-between"
          ml={isLargerThan900 ? "4.37rem" : "0rem"}
          mt={isLargerThan900 ? "0rem" : "4.37rem"}
        >
          <Flex flexDir="column" justify="center" align="center">
            <Heading
              fontSize={isLargerThan500 ? "3rem" : "2rem"}
              color="yellow"
            >
              {continent?.page?.contries}
            </Heading>
            <Text
              fontSize={isLargerThan500 ? "1.5rem" : "1rem"}
              color="gray.600"
              fontWeight="bold"
            >
              países
            </Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Heading
              fontSize={isLargerThan500 ? "3rem" : "2rem"}
              color="yellow"
            >
              {continent?.page?.languages}
            </Heading>
            <HStack spacing="0.2rem">
              <Text
                fontSize={isLargerThan500 ? "1.5rem" : "1rem"}
                color="gray.600"
                fontWeight="bold"
              >
                línguas
              </Text>

              <Tooltip label="Línguas mais faladas">
                <Image src="/info.svg" />
              </Tooltip>
            </HStack>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Heading
              fontSize={isLargerThan500 ? "3rem" : "2rem"}
              color="yellow"
            >
              {continent?.page?.cities?.length}
            </Heading>
            <HStack spacing="0.2rem">
              <Text
                fontSize={isLargerThan500 ? "1.5rem" : "1rem"}
                color="gray.600"
                fontWeight="bold"
              >
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
        templateColumns={
          isLargerThan1200
            ? "repeat(4, 1fr)"
            : isLargerThan900
            ? "repeat(3, 1fr)"
            : isLargerThan500
            ? "repeat(2, 1fr)"
            : "repeat(1, 1fr)"
        }
        gap={6}
        my="2.5rem"
        marginX="auto"
        w="100%"
        maxWidth="72.5rem"
        paddingX="1rem"
      >
        {continent?.page?.cities?.map((city: City) => {
          return (
            <GridItem
              key={city?.cityName}
              w="100%"
              minH="17.4rem"
              border="1px"
              borderColor="yellow"
            >
              <CardCity city={city} />
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

  return {
    props: {
      slug
    }
  };
}
