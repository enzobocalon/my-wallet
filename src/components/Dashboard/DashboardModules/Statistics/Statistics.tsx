import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import * as S from "./style";
import { DBContext } from "../../../../context/DBContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const { values, balance } = useContext(DBContext);

  const data = {
    labels: ["Expenses", "Income", "Balance"],
    datasets: [
      {
        label: "# of Votes",
        data: [values.expenses, values.incoming, balance?.balance],
        backgroundColor: ["#FE4267", "#226FEE", "#DDE3F4"],
        borderColor: ["#FE4267", "#226FEE", "#DDE3F4"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <S.Container>
      <h1>Statistics</h1>
      <Doughnut
        data={data}
        options={{ maintainAspectRatio: false, responsive: true }}
        style={{ minHeight: "450px", maxHeight: "450px" }}
      />
    </S.Container>
  );
};

export default Statistics;
