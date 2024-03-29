import { ExternalLinkIcon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import type { FC } from "react";

type ExternalLinkProps = {
  text: string;
  href: string;
};

export const ExternalLink: FC<ExternalLinkProps> = ({ text, href }) => (
  <LinkBox role="group" w="fit-content">
    <LinkOverlay
      href={href}
      target="_blank"
      fontSize="sm"
      mr={1}
      _groupHover={{ textDecor: "underline", color: "blue" }}
    >
      {text}
    </LinkOverlay>
    <ExternalLinkIcon my="auto" />
  </LinkBox>
);
