import { Package } from "@/types/package";

const MerchantTable = ({
  fieldNames,
  tableValues,
}: {
  fieldNames: string[];
  tableValues: Package[] | any[];
}) => {
  return (
    <div className=" m-5 rounded border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {fieldNames.map((fieldName, index) => (
                <th
                  className="px-4 py-4 font-medium text-black dark:text-white"
                  key={index}
                >
                  {fieldName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableValues.map((packageItem, key) => (
              <tr key={key}>
                <td className=" border-b border-[#eee]  px-4 py-5 dark:border-strokedark xl:pl-8">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.id}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.name}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.amount}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.payoutProvider}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.requestTime}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.requester}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.daysDue}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <button className="btn btn-primary">Accent</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantTable;

//https://www.figma.com/design/dqvgrI1rWrFxS8LNItKK35/Payout-Module-(Copy)?node-id=8-72&t=MhRldZqWydkA5I4e-4
