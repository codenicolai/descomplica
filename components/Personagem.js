import React from "react";

import { Flex } from "../components/Flex";
import { Text } from "../components/Text";

import { GrTrash } from "react-icons/gr";

export const Personagem = ({ name, color, onDelete, ...props }) => {
  return (
    <Flex flex={1} justifyContent="space-between">
      <Text fontWeight="bold" color={color}>
        {name}
      </Text>
      <Flex onClick={onDelete}>
        <GrTrash />
      </Flex>
    </Flex>
  );
};
