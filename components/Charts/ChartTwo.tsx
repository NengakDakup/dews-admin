"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSensorDataContext } from "@/context/data-provider";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });



interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const {data} = useSensorDataContext();
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Temperature",
        data: data.temperature,
      },
      {
        name: "Precipitation",
        data: data.precipitation,
      },
      {
        name: "Humidity",
        data: data.humidity,
      },
      {
        name: "Soil Moisture",
        data: data.soil_moisture,
      },

    ],
  });

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      width: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        // endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: data.dates.map((date: any) => {
        let _date = new Date(date)
        return(`${_date.getHours()}:${_date.getMinutes()} `)
      }),
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}`
        }
      }
    },
};

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
    
      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ApexCharts
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
