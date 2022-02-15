import styled from "styled-components";

export const Span = styled.div`
  position: absolute;
  top: 68px;
  left: 43px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }
`;

export const SearchButton = styled.div`
  color: #ffffff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;

  position: relative;
  display: block;
  width: 84px;
  height: 96px;
  cursor: pointer;

  ${Span}&:before, ${Span}&:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }
`;

export const Circle = styled.div`
  position: relative;
  top: 1px;
  left: 0;
  width: 75px;
  height: 75px;
  margin-top: 0;
  border-width: 15px;
  border: 15px solid #ffffff;
  background-color: transparent;
  border-radius: 50%;
  -webkit-transition: 0.5s ease all;
  transition: 0.5s ease all;
`;

export const Cover = styled.div`
  padding-left: 35px;
  &:hover ${Circle} {
    top: 39px;
    width: 67px;
    height: 15px;
    border-width: 0;
    background-color: #ffffff;
    border-radius: 20px;
  }

  &:hover ${Span} {
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -9px;
    transform: rotateZ(0);
  }

  &:hover ${SearchButton} ${Span}:before {
    bottom: 11px;
    transform: rotateZ(52deg);
  }

  &:hover ${SearchButton} ${Span}:after {
    bottom: -11px;
    transform: rotateZ(-52deg);
  }
  &:hover
    ${SearchButton}
    ${Span}:before,
    &:hover
    ${SearchButton}
    ${Span}:after {
    right: -6px;
    width: 40px;
    background-color: #ffffff;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  max-width: 650px;
  padding: 10px;
  margin: -83px auto 0 auto;
  background-color: #ff7575;
  border-radius: 20px;
  box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
  transform: scale(0.6);
`;

export const Form = styled.form`
  height: 96px;
`;

export const TB = styled.div`
  display: table;
  width: 100%;
`;

export const TD = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const Input = styled.input`
  color: #ffffff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;

  width: 100%;
  height: 96px;
  font-size: 60px;
  line-height: 1;

  &::placeholder {
    color: #e16868;
  }
`;
