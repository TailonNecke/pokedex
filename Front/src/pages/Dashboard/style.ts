import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 470px;
  line-height: 56px;

  margin-top: 80px;
  `;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 3;
    border-color: #000000;
    border-radius: 5px 0 0 5px;
    color: #33a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  circle {
    margin-left: 478px;
    margin-top: 24px;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border-radius: 50%;
    border: 3px solid black;
    border-color: #000000;
    position: absolute;
  }
  button {
    width: 210px;
    height: 70px;
    background: #C80000;
    border-radius: 0 5px 5px 0;
    border: 3;
    border-color: #000000;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#A00000')};
    }
  }
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      border: 2px solid black;
      border-color: #d9d9d9;
    }

    div {
      margin: 0 16px;
      margin-top: 7.5px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    span {
      float: right;
    }

  }
  `;
