import styled, { css } from "styled-components";
import {
  space,
  color,
  border,
  fontSize,
  width,
  height,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  maxWidth,
  flex,
  borderBottom,
  padding
} from "styled-system";

export const Flex = styled.div`
  display: flex;
  ${padding}
  ${space}
  ${flex}
  ${color}
  ${border}
  ${borderBottom}
  ${fontSize}
  ${width}
  ${height}
  ${display}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${maxWidth}
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
`;
