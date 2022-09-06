import React, { useContext, useEffect } from "react";
import * as S from "./style";
import icon from "../../../../assets/icon.svg";
import { DBContext } from "../../../../context/DBContext";
import { AuthContext } from "../../../../context/UserContext";

const MyBalance = () => {
  const { getMyBalance, balance } = useContext(DBContext);
  const { user } = useContext(AuthContext);

  const valueFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    getMyBalance();
  }, [user]);

  return (
    <S.Container>
      <div>
        <span>Available Balance</span>
        <h1>
          {!balance?.balance ? (
            <h1>$0</h1>
          ) : (
            valueFormatter.format(balance?.balance)
          )}
        </h1>
      </div>
      <S.CCFooter>
        <div>
          <span>****</span>
          <span>2022</span>
        </div>
        <img src={icon} />
      </S.CCFooter>
    </S.Container>
  );
};

export default MyBalance;
