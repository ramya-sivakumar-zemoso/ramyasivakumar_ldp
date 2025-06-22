import React, { useState } from 'react';
import './index.css';
import { Table, TableBody, TableHead, TableRow, Checkbox } from '@mui/material';
import { StyledTableCell, StyledTableContainer } from '../../atoms/Table';

interface Contract {
  name: string;
  perPayment: number;
  term: number;
  fee: number;
  selected?: boolean;
}

const contracts: Contract[] = [
  {
    name: 'Contract 1',
    perPayment: 12000.25,
    term: 12,
    fee: 0.12,
  },
  { name: 'Contract 6', perPayment: 6000.0, term: 12, fee: 0.12 },
  {
    name: 'Contract 5',
    perPayment: 6000.0,
    term: 12,
    fee: 0.12,
  },
  { name: 'Contract 4', perPayment: 6000.0, term: 12, fee: 0.12 },
  { name: 'Contract 3', perPayment: 6000.0, term: 12, fee: 0.12 },
  { name: 'Contract 2', perPayment: 6000.0, term: 12, fee: 0.12 },
];

const getTotal = (amount: number, term: number, fee: number): string => {
  const total = amount * term * (1 + fee);
  return `$${total.toFixed(2)}`;
};

const ContractTable: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(
    contracts.filter((c) => c.selected).map((c) => c.name)
  );

  const handleSelect = (name: string): void => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <section id="container-table">
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Per payment</StyledTableCell>
              <StyledTableCell>Term length</StyledTableCell>
              <StyledTableCell>Payment total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract) => {
              const isSelected = selected.includes(contract.name);
              return (
                <TableRow
                  sx={{
                    '&:hover': {
                      backgroundColor: isSelected ? '#5c4874' : '#2c2c2c',
                    },
                    '& td, & th': {
                      borderBottom: 'none',
                    },
                  }}
                  key={contract.name}
                >
                  <StyledTableCell isSelected={isSelected}>
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleSelect(contract.name)}
                      sx={{
                        color: '#bbb',
                        '&.Mui-checked': { color: '#a78bfa' },
                      }}
                    />
                    {contract.name}
                  </StyledTableCell>
                  <StyledTableCell isSelected={isSelected}>
                    Monthly
                  </StyledTableCell>
                  <StyledTableCell isSelected={isSelected}>
                    ${contract.perPayment.toFixed(2)}
                  </StyledTableCell>
                  <StyledTableCell isSelected={isSelected}>
                    {contract.term} months
                    <br />
                    {(contract.fee * 100).toFixed(1)}% fee
                  </StyledTableCell>
                  <StyledTableCell isSelected={isSelected}>
                    {getTotal(contract.perPayment, contract.term, contract.fee)}
                  </StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </section>
  );
};

export default ContractTable;
