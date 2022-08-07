import styled from "@emotion/styled";

export const Section = styled.section`
background-color: #fff;
width: fit-content;
margin: 100px auto;
`;

export const Title = styled.h2`
padding: 30px 80px;
text-transform: uppercase;
text-align: center;
color: #6c757d;
margin: 0;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: ${getRandomHexColor()};
`;


export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #fff;

`

export const Label = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
};