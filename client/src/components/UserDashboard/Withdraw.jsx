import React, { useEffect, useState } from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import Transactions from "./Transactions";
import Modal from "./Modal";
import { toast } from "react-toastify";
import axios from "axios";

const Withdraw = ({ setSection, section }) => {
  const previous = localStorage.getItem("previousSection");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      if (currentUser) {
        try {
          const trans = await axios.get(
            `${process.env.REACT_APP_API_URL}/transaction/${currentUser._id}`
          );
          // transactions.reduce();
          setTransactions(trans.data.splice(0, 4));
        } catch (err) {
          console.log(err);
        }
      } else {
        toast.err("No user, Login");
        window.location.replace("/");
      }
    };
    getTransactions();
  }, [currentUser]);

  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="card-header align-items-center border-0 mt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="fw-bolder text-dark fs-3">Your Wallet</span>
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                onClick={(e) => {
                  setSection(previous, section);
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

          <div>
            <div className="pt-10">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_withdraw"
                class="card bg-light-info hoverable min-h-125px 
                shadow-none mb-5"
              >
                <div class="card-body d-flex flex-column flex-center text-center">
                  <h3 class="fs-3 mb-2 text-dark fw-bolder">
                    Request Withdrawal
                  </h3>
                  <p class="mb-0 text-gray-600">
                    Withdrawal request can take up to
                    <br />
                    2-3 days to be processed
                  </p>
                </div>
              </a>
            </div>
            <Modal
              setSection={setSection}
              section={section}
              content="Withdraw"
              source="dividends"
            />
            <div className="pt-10">
              <div className="card-header align-items-center border-0 mt-5">
                <h3 className="card-title align-items-start flex-column">
                  <span className="fw-bolder text-dark fs-3">
                    {" "}
                    Transaction History
                  </span>
                </h3>
                <div className="card-toolbar">
                  <a
                    href="/"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      setSection("Transactions", section);
                    }}
                  >
                    <span class="svg-icon svg-icon-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          opacity="0.5"
                          x="18"
                          y="13"
                          width="13"
                          height="2"
                          rx="1"
                          transform="rotate(-180 18 13)"
                          fill="black"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <Transactions transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
