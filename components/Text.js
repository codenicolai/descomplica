import styled, { css } from "styled-components";
import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  display
} from "styled-system";

export const Text = styled.span`
  ${display}
  ${fontSize};
  ${space};
  ${color};
  ${fontFamily};
  ${fontWeight};
  ${props =>
    props.textTransform &&
    css`
      text-transform: ${props.textTransform};
    `};

  ${props =>
    props.truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
`;
