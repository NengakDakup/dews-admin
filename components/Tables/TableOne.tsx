'use client'
import { useSensorDataContext } from "@/context/data-provider";
import { BRAND } from "@/types/brand";
import Image from "next/image";


const TableOne = () => {
  const {normData} = useSensorDataContext();
  const formatDate = (dateString: any) => {
    let _date = new Date(dateString);
    return(`${_date.getHours()}:${_date.getMinutes() < 10 }`)
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Contract: <a className="text-primary" href="https://mumbai.polygonscan.com/address/0xd63070fd3d777281911fe7c34fd6e5e5d2e36298" target="_blank">0xd63070Fd3d777281911FE7c34FD6E5E5d2E36298</a>
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Temperature
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Precipitation
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Humidity
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Soil Moisture
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Time
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Transaction ID
            </h5>
          </div>
        </div>

        {normData.map((data: any, key: any) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-7 ${
              key === normData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {data.temperature}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.precipitation}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.humidity}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.soil_moisture}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{formatDate(data.created)}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium "text-success bg-success`}
                  >
                    Synced
                  </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5"><a target="_blank" href={`https://mumbai.polygonscan.com/address/0xd63070Fd3d777281911FE7c34FD6E5E5d2E36298`}>Click to View</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
