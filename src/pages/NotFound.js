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

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Co-habit your happy place`
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