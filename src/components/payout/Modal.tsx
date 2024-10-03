import React, { useState } from "react";
import CountrySelect from "@/components/payout/CountrySelect";

const Modal = () => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_6"
        className="btn btn-outline btn-primary  ms-auto "
      >
        Add Account
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box ms-50 max-w-3xl ">
          <h3 className="text-lg font-bold">Add Bank Account</h3>

          <div className=" m-auto  mt-3 p-3">
            <p>Bank Account Details</p>
            <div className=" mt-3 flex justify-between">
              <p>Default</p>
              <input
                type="checkbox"
                className="toggle toggle-error "
                defaultChecked
              />
            </div>

            <div className="mt-3 flex justify-between ">
              <p>Account Name</p>
              <input
                type="text"
                placeholder="Account Name..."
                className="input input-sm input-bordered w-70 max-w-xs"
              />
            </div>

            <div className="mt-3 flex justify-between ">
              <p>IBAN</p>
              <input
                type="text"
                placeholder="IBAN..."
                className="input input-sm input-bordered w-70 max-w-xs"
              />
            </div>
            <div className="mt-3 flex justify-between ">
              <p>Swift code</p>
              <input
                type="text"
                placeholder="Swift code..."
                className="input input-sm input-bordered w-70 max-w-xs"
              />
            </div>
            <div className=" mt-3 flex justify-between ">
              <p>Select payout country</p>
              <div className="w-70">
                <CountrySelect />
              </div>
            </div>
            <div className=" mt-3 flex  justify-between ">
              <p>Currency</p>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn  w-70">
                  Currency
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
