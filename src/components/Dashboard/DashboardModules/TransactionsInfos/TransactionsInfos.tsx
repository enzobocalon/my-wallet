import React, { useState, useContext, useEffect } from "react";
import * as S from "./style";

import { LinearProgress } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { MdMoreVert } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Transactions from "../Transactions/Transactions";
import ChangeLimitModal from "../ChangeLimitModal/ChangeLimitModal";
import { DBContext } from "../../../../context/DBContext";
import { useNavigate } from "react-router-dom";


const TransactionsInfos = () => {
  const [ccMenu, setCCMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { userTransactions, getLimit, usage } = useContext(DBContext);
  const navigate = useNavigate();

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    getLimit();
  }, [userTransactions]);
  return (
    <>
      <S.Container>
        {showModal ? <ChangeLimitModal handleModal={handleModal} /> : ""}
        <S.FirstRow>
          <S.CCLimit>
            <S.CCLimitHeader>
              <h1>Monthly credit card limit</h1>
              <MdMoreVert
                size={20}
                id="more"
                onClick={() => {
                  setCCMenu((prev) => !prev);
                }}
              />
              <S.LimitMenu showing={ccMenu}>
                <div
                  onClick={() => {
                    handleModal();
                    setCCMenu(false);
                  }}
                >
                  <FiEdit />
                  <span>Change Limit</span>
                </div>
              </S.LimitMenu>
            </S.CCLimitHeader>
            <Tooltip title={usage <= 100 ? `${usage}%` : 'Limit exceeded.'} placement="bottom">
              <LinearProgress
                variant="determinate"
                value={usage <= 100 ? usage : 100}
                color={"inherit"}
                sx={{
                  background: "#7A4CB3",
                  padding: "0.3rem 0",
                  borderRadius: "10px",
                }}
              />
            </Tooltip>
            <div>
              <span>0%</span>
              <span>100%</span>
            </div>
          </S.CCLimit>
        </S.FirstRow>
      </S.Container>
      <S.Container style={{ marginTop: "1rem" }}>
        <S.TransactionsHeader>
          <h1>Latest Transactions</h1>
        </S.TransactionsHeader>
        <Transactions />
        <span id="viewTransactions" onClick={() => navigate('/transactions')}>View transactions</span>
      </S.Container>
    </>
  );
};

export default TransactionsInfos;
