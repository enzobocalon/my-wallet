import React from "react";
import DashboardSidebar from "../../Dashboard/DashboardSidebar/DashboardSidebar";
import * as S from "./style";

import DashboardHeader from "../../Dashboard/DashboardModules/DashboardHeader/DashboardHeader";
import TransactionsHeader from "../TransactionsHeader/TransactionsHeader";
import TransactionsList from "../TransactionsList/TransactionsList";

const MainContent = () => {
  return (
    <S.Container>
      <DashboardSidebar locations="transaction"/>
        <S.Wrapper>
          <S.Item>
            <DashboardHeader />
          </S.Item>
          <S.Item> 
            <TransactionsHeader />
          </S.Item>
          <S.Item >
            <TransactionsList />
          </S.Item>
        </S.Wrapper>
    </S.Container>
  );
};

export default MainContent;
