import React, { useEffect, useState } from "react";
import BubbleChart from "@mui/icons-material/BubbleChart";
import bg from "../../media/svg/illustrations/bg-1.svg";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import axios from "axios";
import { toast } from "react-toastify";
import { updateWallet } from "../../helpers/wallet";
import { getCookie } from "../../helpers/auth";

const ShareHoldings = ({ setSection, section, userWallet, user }) => {
  const previous = localStorage.getItem("previousSection");
  const [stateUnits, setStateUints] = useState(userWallet.shareUint);

  useEffect(() => {
    const authToken = getCookie("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/wallet/${user._id}`, {
        headers: {
          token: authToken,
        },
      })
      .then((res) => {
        updateWallet(res);
        setStateUints(res.data.shareUint);
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.errors);
      });
  }, [user]);

  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="card-header align-items-center border-0 mt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="fw-bolder text-dark fs-3">Share Units</span>
              {userWallet.shareUint < 10 ? (
                <span className="text-muted mt-2 fw-bold fs-6">
                  0{stateUnits} Owned Shares
                </span>
              ) : (
                <span className="text-muted mt-2 fw-bold fs-6">
                  {stateUnits} Owned Shares
                </span>
              )}
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <span
                  className="svg-icon svg-icon-1"
                  onClick={(e) => {
                    setSection(previous, section);
                  }}
                >
                  <ArrowBackTwoToneIcon />
                </span>
              </button>
            </div>
          </div>

          <div className="card-body pt-12">
            <div
              className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
              style={{
                backgroundImage: `url( ${bg} )`,
              }}
            >
              {userWallet.shareUint < 10 ? (
                <div className="fw-bolder fs-1 text-gray-800 position-absolute">
                  0{stateUnits} Units
                </div>
              ) : (
                <div className="fw-bolder fs-1 text-gray-800 position-absolute">
                  {stateUnits} Units
                </div>
              )}

              <canvas id="kt_stats_widget_1_chart"></canvas>
            </div>

            <div className="d-flex justify-content-around pt-18">
              <div className="">
                <span className="fw-bolder text-gray-800">
                  NGN50,000.00 Share Price
                </span>
                <span className="bg-primary w-25px h-5px d-block rounded mt-1"></span>
              </div>
            </div>
            <div className="card-body bg-light px-12 py-10 mt-10">
              <h3 className="fw-bolder fs-1 mb-1">
                <span className="text-gray-800 fs-3"> Shares Value</span>
              </h3>
              <div className="text-primary fs-3 mb-9">
                &#8358; {(stateUnits * 50000).toLocaleString()}.00
              </div>
              <div className="d-flex fs-7 flex-wrap">
                <button
                  type="button"
                  className="btn btn-primary fw-bolder fs-7  ms-sm-auto my-1 px-6"
                >
                  Dividend Tracker <BubbleChart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareHoldings;
