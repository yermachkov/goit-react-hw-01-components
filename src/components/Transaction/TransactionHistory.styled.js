import styled from "@emotion/styled";

export const TransactionTable = styled.table`
font-family: inherit;
width: 50vw;
margin: 100px auto;
border:none;
border-collapse: collapse;
text-align: center;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

      background-color: #fff;
`

export const TableHead = styled.thead`
height: 40px;
background-color: #00a6fb;
color: #fff;
padding: 10px;
`;

export const TableRow = styled.tr`
height: 40px;
color: #6c757d;

&:nth-of-type(even) {background-color: #f2f2f2;}
`;

export const Th = styled.th`
border-left: 1px solid #fff;
&:first-of-type {
 border-left: none;
}
`;

export const Td = styled.td`
border-left: 1px solid #ced4da;
&:first-of-type {
 border-left: none;
}
`
