import styled from '@emotion/styled';

export const Card = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: 0.5px solid #dee2e6;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Description = styled.div`
  color: #6c757d;
  padding-top: 40px;
`;

export const Avatar = styled.img`
  display: block;
  margin: auto;
  margin-bottom: 40px;
  width: 100px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: auto;
  height: 80px;

  border-radius: 0px 0px 4px 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(350px / 3);
  background-color: #e9ecef;
  border: 1px solid #dee2e6;
`

export const Label = styled.span`
  color: #6c757d;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: #000000;
`;

