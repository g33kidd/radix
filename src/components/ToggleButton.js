import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  height: ${theme.SPACING_500};
  min-width: ${theme.SPACING_500};
  position: relative;
  vertical-align: middle;

  ${p => p.left && css`
    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.middle && css`
    margin-left: -1px;
    z-index: 1;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.right && css`
    margin-left: -1px;
    z-index: 0;

    &:hover {
      z-index: 3;
    }
  `}
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${theme.BLUE_100};
    box-shadow: inset 0 0 0 1px ${theme.BLUE_300};
    color: ${theme.BLUE_600};
    cursor: default;
    z-index: 3;
  }
`;

const Dummy = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  display: inline-flex;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_300};
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  appearance: none;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  color: ${theme.GRAY_600};
  cursor: pointer;
  flex-shrink: 0;
  justify-content: center;
  outline: none;
  user-select: none;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  ${p => p.left && css`
    border-radius: ${theme.BORDERRADIUS_100} 0 0 ${theme.BORDERRADIUS_100};
  `}

  ${p => p.right && css`
    border-radius: 0 ${theme.BORDERRADIUS_100} ${theme.BORDERRADIUS_100} 0;
  `}
`;

const ToggleButton = ({ children, group, onClick, onChange, ...otherProps }) => (
  <Wrapper
    {...otherProps}
  >
    <Radio
      {...otherProps}
      type="radio"
      name={group}
      onClick={onClick}
      onChange={onChange}
    />
    <Dummy
      {...otherProps}
    >
      {children}
    </Dummy>
  </Wrapper>
);

export default ToggleButton;
