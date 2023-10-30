import { ExternalLinkIcon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import type { FC } from "react";

type ExternalLinkProps = {
  text: string;
  href: string;
};

export const ExternalLink: FC<ExternalLinkProps> = ({ text, href }) => (
  <LinkBox pt={2} role="group" w="fit-content">
    <LinkOverlay
      href={href}
      target="_blank"
      fontSize="sm"
      me={0.5}
      _groupHover={{ textDecor: "underline", color: "blue" }}
    >
      {text}
    </LinkOverlay>
    <ExternalLinkIcon my="auto" />
  </LinkBox>
);
