import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import CountrySelect from "@/components/payout/CountrySelect";
import MerchantTable from "@/components/payout/MerchantTable";
import { Package } from "@/types/package";

const packageData: Package[] = [
  {
    id: 1,
    name: "Free package",
    amount: 0.0,
    requestTime: `Jan 13,2023`,
    requester: "Paid",
    payoutProvider: "Paymob",
    daysDue: "3 days",
  },
  {
    id: 2,
    name: "Standard Package",
    amount: 59.0,
    requestTime: `Jan 13,2023`,
    requester: "Paid",
    payoutProvider: "Paymob",
    daysDue: "3 days",
  },
  {
    id: 3,
    name: "Business Package",
    amount: 99.0,
    requestTime: `Jan 13,2023`,
    requester: "Unpaid",
    payoutProvider: "Paymob",
    daysDue: "3 days",
  },
  {
    id: 4,
    name: "Standard Package",
    amount: 59.0,
    requestTime: `Jan 13,2023`,
    requester: "Pending",
    payoutProvider: "Paymob",
    daysDue: "3 days",
  },
];

const tableFields = [
  "ID",
  "Merchant name",
  "Amount",
  "Payout provider",
  "Request time",
  "Requester",
  " Days due",
  "Actions",
];

const Page = () => {
  return (
    <DefaultLayout>
      <div className="drawer drawer-open font-semibold text-bodydark2  dark:bg-boxdark">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <MerchantTable fieldNames={tableFields} tableValues={packageData} />
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
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
