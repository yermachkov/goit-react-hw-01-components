import styled from "@emotion/styled";

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  padding: 15px;
  width: 300px;
  height: 60px;
`

const setBgColor = (props) => {
 return props.isOnline ? '#02c39a' : '#fe5f55'
};

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${setBgColor}
`;

export const Avatar = styled.img`
display: block;
width: 48px;
object-fit: contain;
`;

export const Name = styled.p`
font-size: 30px;
font-weight: 600;
margin: 0;
padding: 10px;
`;