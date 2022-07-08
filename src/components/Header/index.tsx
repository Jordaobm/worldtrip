import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  goBack?: boolean
}

export const Header = ({ goBack }: HeaderProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      height="6.25rem"
      position="relative"
      w="100%"
    >
      {
        goBack && (

          <Box position="absolute" w="100%" maxWidth="72.5rem" margin="0 auto">
            <Link href="/">
              <Image cursor="pointer" src="/arrowLeft.svg" />
            </Link>
          </Box>
        )
      }

      <Link href="/">
        <Image
          cursor="pointer"
          src="/logo.svg"
          width="12.5rem"
          height="6.25rem"
          alt="worldTrip logo"
        />
      </Link>
    </Flex>
  );
};
