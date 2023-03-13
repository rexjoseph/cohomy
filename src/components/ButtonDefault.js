import React from "react";
import styled from "styled-components";

const Action = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 24px 0;
  width: 100%;
  z-index: 2;
`;

const LinkA = styled.a`
  border: 1px solid var(--color-primary);
  cursor: pointer;
  font-size: 16px;
  padding: 0 24px;
  position: relative;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  white-space: nowrap;
  border-radius: 24px;
  height: 40px;
  background: #fff;
  color: var(--color-primary);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 40px;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const ButtonDefault = () => {
  return (
    <Action>
      <LinkA href="/sign-up">Get the experience</LinkA>
    </Action>
  );
};

export default ButtonDefault;
