import React, { useEffect, useState } from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import boysvg from "../../media/svg/avatars/001-boy.svg";
import girlsvg from "../../media/svg/avatars/047-girl-25.svg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AffilateModal from "./AffilateModal";
import Unverfied from "./Unverfied";
import axios from "axios";
import { toast } from "react-toastify";
import { getCookie, updateUser } from "../../helpers/auth";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DateTime } from "luxon";
import svg1 from "../../media/illustrations/ouch/affilate.png";
import Modal from "./Modal";

const Afffilate = ({ setSection, section, previous, user, userWallet }) => {
  const [referrals, setReferrals] = useState([]);
  const [affilate, setAffilate] = useState("");
  const [stateUser, setStateUser] = useState(user);
  const [stateWallet, setStateWallet] = useState(userWallet);

  var host = window.location.protocol + "//" + window.location.host;

  useEffect(() => {
    const authToken = getCookie("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${user._id}`, {
        headers: {
          token: authToken,
        },
      })
      .then((res) => {
        updateUser(res);
        setStateUser(res.data);
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.errors);
      });
  }, [user]);

  useEffect(() => {
    const authToken = getCookie("token");
    if (stateUser.refStatus === "verified") {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/stats/${stateUser._id}`, {
          headers: {
            token: authToken,
          },
        })
        .then((res) => {
          setReferrals(res.data.referrals);
          setAffilate(res.data.affilate);
          localStorage.setItem("userWallet", JSON.stringify(res.data.wallet));
          setStateWallet(res.data.wallet);
        })
        .catch((err) => {
          console.log(err);

          toast.error(err.response.data.errors);
        });
    }
  }, [stateWallet, stateUser]);

  const handleCopy = () => {
    toast.success("Unique link copied!");
  };

  return (
    <div className="col-xl-8">
      <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body">
          <div className="card-header align-items-center border-0 mt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="fw-bolder text-dark fs-3">GG Affilate</span>
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
          {stateUser.verified ? (
            stateUser.refStatus === "verified" ? (
              <div className="card-body ">
                <div className="d-flex bg-light-primary card-rounded flex-grow-1">
                  <div className="py-10 ps-7">
                    <div className="">
                      <span className="text-primary d-block mb-n1">
                        Referral Bonus
                      </span>
                      <span className="font-weight-light fs-1 text-gray-800">
                        NGN
                        <span className="fw-bolder fs-1 text-gray-800">
                          {stateWallet.refBouns.toLocaleString()}.00
                        </span>
                      </span>
                    </div>

                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_withdraw"
                      className="btn btn-primary btn-sm fw-bolder fs-6 ps-4 mt-6"
                    >
                      Make Withdrawal
                    </a>
                  </div>

                  <div
                    className="position-relative bgi-no-repeat bgi-size-contain bgi-position-y-bottom bgi-position-x-end mt-6 flex-grow-1"
                    style={{
                      backgroundImage: `url(${svg1} )`,
                    }}
                  ></div>
                </div>

                <div className="">
                  <div class="card-header align-items-center border-0 mt-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="fw-bolder text-dark fs-3">Unique Link</span>
                    </h3>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-group input-group-lg input-group-solid">
                      <input
                        type="text"
                        class="form-control form-control-lg form-control-solid"
                        value={`${host}/login?refCode=${affilate.refLink}`}
                        readOnly
                        placeholder="Refferal link"
                      />
                      <CopyToClipboard
                        text={`${host}/login?refCode=${affilate.refLink}`}
                        onCopy={handleCopy}
                      >
                        <span
                          class="input-group-text pe-3"
                          style={{ cursor: "pointer" }}
                        >
                          <ContentCopyIcon />
                        </span>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div class="card-header align-items-center border-0 mt-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="fw-bolder text-dark fs-3">Refferals</span>
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
                  <div class="col-lg-12">
                    <div class="table-responsive">
                      <table class="table table-borderless align-middle">
                        <thead>
                          <tr>
                            <th class="p-0 w-50px"></th>
                            <th class="p-0 min-w-150px"></th>
                            <th class="p-0 min-w-120px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {referrals.map((referral) => (
                            <tr>
                              <td class="px-0 py-3">
                                <div class="symbol symbol-55px mt-1 me-5">
                                  <span class="symbol-label bg-light-primary align-items-end">
                                    {referral.gender === "male" && (
                                      <img
                                        alt="Logo"
                                        src={boysvg}
                                        class="mh-40px"
                                      />
                                    )}
                                    {referral.gender === "female" && (
                                      <img
                                        alt="Logo"
                                        src={girlsvg}
                                        class="mh-40px"
                                      />
                                    )}
                                  </span>
                                </div>
                              </td>
                              <td class="px-0">
                                <span
                                  href="#"
                                  class="text-gray-800 fw-bolder text-hover-primary fs-6"
                                >
                                  {referral.firstname + " " + referral.lastname}
                                </span>
                                <span class="text-muted fw-bold d-block mt-1">
                                  Joined:{" "}
                                  {DateTime.fromISO(
                                    referral.createdAt
                                  ).toLocaleString(DateTime.DATETIME_MED)}
                                </span>
                              </td>
                              <td></td>
                              <td class="text-end">
                                <span class="text-gray-800 fw-bolder d-block fs-6">
                                  NGN{" "}
                                  {(
                                    (10 / 100) *
                                    (referral.wallet.shareUint *
                                      process.env.REACT_APP_SHARE_PRICE)
                                  ).toLocaleString()}
                                  .00
                                </span>
                                <span class="text-muted fw-bold d-block mt-1 fs-7">
                                  Commission
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <Modal
                  setSection={setSection}
                  section={section}
                  content="Withdraw"
                  source="refBouns"
                />
              </div>
            ) : (
              <div>
                <div class="w-100 text-center">
                  <div class="text-center px-4 py-6">
                    <img src={svg1} alt="" class=" mh-200px" />
                  </div>
                  <h1 class="fw-bolder text-dark mb-3">G-Affilate Program</h1>

                  <div class="text-muted fw-bold fs-3">
                    To qualify to be an affiliate, you must be able to refer at
                    least 10 people to project G1000, each referral attracts a
                    10% commission each time they buy a share.
                  </div>
                  <div>
                    {stateUser.refStatus === "failed" && (
                      <div class="d-flex justify-content-around pt-18">
                        <div class="">
                          <span class="fw-bolder text-danger">
                            {stateUser.rejectCause}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* {user.refStatus === "pending" && (
                    <button
                      type="button"
                      class="btn bg-light-warning hoverable fw-bolder my-9 "
                    >
                      Pending Approval...
                    </button>
                  )} */}
                  {stateUser.refStatus === "failed" ? (
                    <button
                      type="button"
                      class="btn bg-light-danger hoverable fw-bolder my-9 "
                    >
                      Request Rejected
                    </button>
                  ) : stateUser.refStatus !== "pending" ? (
                    <button
                      type="button"
                      class="btn btn-primary fw-bolder my-9 "
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_affilate"
                    >
                      Become An Affilate
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="btn bg-light-warning hoverable fw-bolder my-9 "
                    >
                      Pending Approval...
                    </button>
                  )}
                </div>
                <AffilateModal user={stateUser} />
              </div>
            )
          ) : (
            <Unverfied setSection={setSection} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Afffilate;
