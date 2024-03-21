"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../config/api";
import { Line } from "react-chartjs-2";
import SelectButton from "./SelectButton";
import { chartDays } from "../../config/data";
import { CryptoState } from "../../CryptoContext";

const CoinInfo = ({ coin }) => {
 const [historicData, setHistoricData] = useState([]);
 const [days, setDays] = useState(1);
 const { currency } = CryptoState();
 const [flag, setFlag] = useState(false);

 const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setFlag(true);
    setHistoricData(data.prices);
 };

 useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [days]);

 if (!historicData || !flag) {
    return <div className="h-2 w-full bg-yellow-500"></div>;
 }

 return (
    <div className="w-3/4 md:w-full mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-center">
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                 ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                 : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        <div className="flex justify-around mt-6">
          {chartDays.map((day) => (
            <button
              key={day.value}
              onClick={() => {
                setDays(day.value);
                setFlag(false);
              }}
              className={`px-4 py-2 ${
                day.value === days ? "bg-yellow-500 text-white" : "bg-transparent text-black"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>
    </div>
 );
};

export default CoinInfo;
