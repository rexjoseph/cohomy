import React, { useEffect } from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CartEmptyContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  padding: 0 1.5rem;
  margin: 8rem auto;
`

const CartEmpty = styled.div`
`

const CartEmptyFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2.5%;
  padding-top: 2.5%;
`

const CartHeaderOne = styled.h1`
  margin-bottom: 48px;
  font-weight: 400;
  text-align: center;
  font-size: 35px;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const CartHeaderTwo = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  font-size: 21px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CartEmptyLinksDiv = styled.div`
  width: 70%;
  margin: 0px auto;

  @media (min-width: 769px) {
    width: 30%;
  }
`

const CartEmptyA = styled.a`
  margin-bottom: 12px;
  text-transform: uppercase;
  width: 100%;
  display: block;
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 14px;
  padding: 13px 18px;
  cursor: pointer;
  transition: all 100ms ease 0s;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  position: relative;
  border-radius: 2px;
  font-weight: 400;

  &:hover {
    background: var(--brand-blue);
    border: 2px solid var(--brand-blue);
    color: var(--color-secondary);
  }
`

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Reignite your happy place`
  }, [])

  return (
    <>
      <Announcement />
      <Navbar />
      <CartEmptyContainer>
        <CartEmpty>
          <CartEmptyFlex>
            <CartHeaderOne>Oops! This page seems to have run away.</CartHeaderOne>
          </CartEmptyFlex>
        </CartEmpty>
      </CartEmptyContainer>
    </>
  )
}

export default NotFound;