import React from "react";
import { useState } from "react";

const Card = () => {
  return (
    <>
      <div className="card card-compact mb-3 rounded-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2
            style={{
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              lineHeight: "1.75rem",
              fontWeight: "600",
            }}
          >
            Merchant AAA LLC
          </h2>
          <p>123456789 EG</p>
          <div className="card-actions justify-end">
            <input type="checkbox" className="checkbox" />
            {/*// it takes a checked={checked}*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
