import React from "react";
import CountrySelect from "@/components/payout/CountrySelect";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BankAccountTable from "@/components/payout/BankAccountTable";

const tableFields = [
  "Account Name",
  "Added By",
  "IBAN",
  "Priority",
  "Last Updated",
  "Action",
];

const Page = () => {
  return (
    <DefaultLayout>
      <div className="drawer drawer-open font-semibold text-bodydark2  dark:bg-boxdark">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <BankAccountTable
            fieldNames={tableFields}
            tableValues={[
              {
                accountName: "Fab Accout",
                addedBy: "Fawzy",
                iban: "AE345678",
                priority: "high",
                lastUpdated: "2024-09-29",
              },
            ]}
          />
        </div>
        <div className="drawer-side">
          <div className="menu min-h-full w-60 bg-black p-4 ">
            <div>
              <label className="= mb-3 block text-sm font-medium dark:text-white">
                Find Merchant
              </label>
              <input
                type="text"
                placeholder="Merchant"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent bg-white px-5 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <CountrySelect />
            </div>
            <label className="  mt-3 block text-sm font-medium dark:text-white">
              Select Merchant
            </label>
            <div className="">
              <div className="relative z-20 mt-3 rounded-lg border-[1.5px] border-stroke bg-white p-2 dark:bg-form-input">
                card
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
