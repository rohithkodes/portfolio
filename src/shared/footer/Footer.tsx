import { FC } from "react";

import { Box, Heading, Flex, Text } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { PageHeader } from "shared/page-header/PageHeader";
import { onMailTo } from "utils/Functions";
import { Socials } from "shared/socials/Socials";

const headerStyles = {
    // cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    isTruncated: true,
    fontSize: { base: "2xl", md: "3xl" },
    _hover: { color: "primary.500" },
    _active: { color: "primary.500" },
};

export const Footer: FC = () => {
    return (
        <>
            {/* <PageHeader label="SAY HI" /> */}
            <Flex pb="2" gap="3" overflow="hidden" alignItems="center">
                <Heading {...headerStyles} fontSize="2xl">
                    {configs.common.email}
                </Heading>
            </Flex>
            <Text>
                Just in case the button’s feeling lazy—here’s the email.
            </Text>
            <Box pt="16">
                <Socials />
            </Box>
            <Flex
            pt="4"
            pb="2"
            fontSize="sm"
            color="gray.500"
            justifyContent="center"
            alignItems="center"
            >
                {/* <Text>This site is hand-crafted, with care by me.</Text> */}
                <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
            </Flex>
        </>
    );
};
