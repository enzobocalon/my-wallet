import React, { useState } from "react";
import * as S from "./style";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import AddTransaction from "../AddTransaction/AddTransaction";

const TransactionsHeader = () => {
  const [option, setOption] = useState("All");
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleChange = (e: SelectChangeEvent) => {
    setOption(e.target.value as string);
  };

  const handleModal = () => {
    setOpenModal(prev => !prev)
  }

  return (
    <S.Container>
      {
        openModal ? <AddTransaction handleModal = {handleModal}/> : ''
      }
      <S.LeftContainer>
        <span>Show</span>
        <Select
          value={option}
          sx={{
            color: "#525399",
            fontWeight: "bold",
            backgroundColor: "white",
            height: "40px",
          }}
          onChange={handleChange}
        >
          <MenuItem value="All" sx={{ color: "#525399", fontWeight: "bold" }}>
            All
          </MenuItem>
          <MenuItem
            value="Incoming"
            sx={{ color: "#525399", fontWeight: "bold" }}
          >
            Incomings
          </MenuItem>
          <MenuItem value="Bills" sx={{ color: "#525399", fontWeight: "bold" }}>
            Bills
          </MenuItem>
          <MenuItem value="Food" sx={{ color: "#525399", fontWeight: "bold" }}>
            Food
          </MenuItem>
          <MenuItem
            value="Travel"
            sx={{ color: "#525399", fontWeight: "bold" }}
          >
            Travel
          </MenuItem>
        </Select>
        <span>from your transactions.</span>
      </S.LeftContainer>
      <S.RightContainer>
        <S.NewTransaction onClick={handleModal}>Add New Transaction</S.NewTransaction>
      </S.RightContainer>
    </S.Container>
  );
};

export default TransactionsHeader;
