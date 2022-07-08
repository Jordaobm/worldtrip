import { Box, Flex, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { City } from "../../pages/api/allDataContinent";

interface CityProps {
  city: City;
}

export function CardCity({ city }: CityProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box w="100%">
      <Skeleton isLoaded={!isLoading} w="100%" h="10rem">
        <Image
          src={city?.pathImage}
          w="100%"
          h="10rem"
          alt={city?.cityName}
          objectFit="cover"
          onLoad={() => setIsLoading(false)}
        />
      </Skeleton>

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
    </Box>
  );
}
