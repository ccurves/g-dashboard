import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { toast } from "react-toastify";
import axios from "axios";

const TransactionHistory = ({ setSection, section, previous }) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      if (currentUser) {
        try {
          const trans = await axios.get(
            `${process.env.REACT_APP_API_URL}/transaction/${currentUser._id}`
          );
          setTransactions(trans.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        toast.err("No user, Login");
        window.location.replace("/");
      }
    };
    getTransactions();
  });

  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="card-header align-items-center border-0 mt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="fw-bolder text-dark fs-3">
                {" "}
                Transaction History
              </span>
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                onClick={(e) => {
                  setSection(previous, "Account");
                }}
                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon svg-icon-1">
                  <ArrowBackTwoToneIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <Transactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
