import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useQuery } from "react-query";
import { Pagination } from "swiper";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../services/api";
import { Continent } from "./api/continents";

import { useRouter } from "next/router";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  const { data } = useQuery(["continents"], () =>
    api.get("continents").then((res) => res?.data)
  );

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  const router = useRouter();

  return (
    <>
      <Header />

      <Box w="100%" position="relative">
        <Image
          src="/banner.png"
          width="100%"
          height="20.9rem"
          alt="airplane"
          objectFit="cover"
        />

        <Flex
          align="center"
          justify="space-between"
          position="absolute"
          top="0"
          height="100%"
          w="100%"
          paddingX="1rem"
        >
          <Flex
            w="100%"
            maxWidth="72.5rem"
            align="center"
            justify="space-between"
            margin="0 auto"
          >
            <Stack spacing="1.25rem">
              <Heading color="gray.100" fontWeight="600" lineHeight="3.5rem">
                5 Continentes,
                <br />
                infinitas possibilidades.{" "}
              </Heading>

              <Text color="gray.500" fontSize="1.25rem">
                Chegou a hora de tirar do papel a viagem que você
                <br /> sempre sonhou.{" "}
              </Text>
            </Stack>

            <Box
              position="relative"
              top="3.75rem"
              display={isLargerThan768 ? "block" : "none"}
            >
              <Image
                src="/airplane.svg"
                width="31.25rem"
                height="18.74rem"
                alt="airplane"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box
        w="100%"
        maxWidth="72.5rem"
        margin="0 auto"
        mt="6rem"
        paddingX="1rem"
      >
        <Grid
          templateColumns={
            isLargerThan768 ? "repeat(5, 1fr)" : "repeat(2, 1fr)"
          }
          gap={5}
        >
          <GridItem
            w="100%"
            display="flex"
            flexDirection={isLargerThan500 ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            {isLargerThan500 ? (
              <Image
                src="/cocktail.svg"
                width="4rem"
                height="4rem"
                alt="cocktail"
              />
            ) : (
              <Box width="1rem" height="1rem" bg="yellow" borderRadius="100%" />
            )}
            <Text
              mt={isLargerThan500 ? "1.5rem" : "0"}
              ml={isLargerThan500 ? "0" : "1rem"}
              color="gray.600"
              fontSize="1.2rem"
              fontWeight="600"
            >
              vida noturna
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            display="flex"
            flexDirection={isLargerThan500 ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            {isLargerThan500 ? (
              <Image
                src="/surf.svg"
                width="4rem"
                height="4rem"
                alt="cocktail"
              />
            ) : (
              <Box width="1rem" height="1rem" bg="yellow" borderRadius="100%" />
            )}
            <Text
              mt={isLargerThan500 ? "1.5rem" : "0"}
              ml={isLargerThan500 ? "0" : "1rem"}
              color="gray.600"
              fontSize="1.2rem"
              fontWeight="600"
            >
              praia
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            display="flex"
            flexDirection={isLargerThan500 ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            {isLargerThan500 ? (
              <Image
                src="/building.svg"
                width="4rem"
                height="4rem"
                alt="cocktail"
              />
            ) : (
              <Box width="1rem" height="1rem" bg="yellow" borderRadius="100%" />
            )}
            <Text
              mt={isLargerThan500 ? "1.5rem" : "0"}
              ml={isLargerThan500 ? "0" : "1rem"}
              color="gray.600"
              fontSize="1.2rem"
              fontWeight="600"
            >
              moderno
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            display="flex"
            flexDirection={isLargerThan500 ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            {isLargerThan500 ? (
              <Image
                src="/museum.svg"
                width="4rem"
                height="4rem"
                alt="cocktail"
              />
            ) : (
              <Box width="1rem" height="1rem" bg="yellow" borderRadius="100%" />
            )}
            <Text
              mt={isLargerThan500 ? "1.5rem" : "0"}
              ml={isLargerThan500 ? "0" : "1rem"}
              color="gray.600"
              fontSize="1.2rem"
              fontWeight="600"
            >
              clássico
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            display="flex"
            flexDirection={isLargerThan500 ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
          >
            {isLargerThan500 ? (
              <Image
                src="/earth.svg"
                width="4rem"
                height="4rem"
                alt="cocktail"
              />
            ) : (
              <Box width="1rem" height="1rem" bg="yellow" borderRadius="100%" />
            )}
            <Text
              mt={isLargerThan500 ? "1.5rem" : "0"}
              ml={isLargerThan500 ? "0" : "1rem"}
              color="gray.600"
              fontSize="1.2rem"
              fontWeight="600"
            >
              e mais...
            </Text>
          </GridItem>
        </Grid>

        <Flex w="100%" mt="5rem" align="center" justify="center">
          <Box w="5.6rem" h="2px" bg="gray.600" />
        </Flex>

        <Flex w="100%" mt="3.25rem" align="center" justify="center">
          <Text
            m="1.5rem 0"
            color="gray.600"
            fontSize="2.25rem"
            fontWeight="500"
            align="center"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Flex>

        <Flex
          width="100%"
          height="28rem"
          my="3.25rem"
          align="center"
          justify="center"
        >
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {data?.map((continent: Continent) => (
              <SwiperSlide
                key={continent?.id}
                onClick={() => router.push(`/continents/${continent?.id}`)}
              >
                <Box position="relative" cursor="pointer">
                  <Image
                    src={continent?.pathImage}
                    width="100%"
                    height="28rem"
                    alt="europa"
                    objectFit="cover"
                    filter="auto"
                    brightness="40%"
                  />

                  <Stack
                    mt="1rem"
                    spacing="1rem"
                    position="absolute"
                    top="0"
                    width="100%"
                    height="100%"
                    flexDir="column"
                    justify="center"
                    align="center"
                  >
                    <Heading
                      color="gray.100"
                      fontSize={isLargerThan768 ? "3rem" : "2rem"}
                    >
                      {continent?.name}
                    </Heading>

                    <Text
                      color="gray.500"
                      fontSize={isLargerThan768 ? "1.5rem" : "1rem"}
                      fontWeight="bold"
                    >
                      {continent?.description}
                    </Text>
                  </Stack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
