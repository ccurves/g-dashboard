import React, { useEffect, useState } from "react";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { getCookie } from "../../helpers/auth";
import axios from "axios";
// import VisibilityTwoTone from "@mui/icons-material/VisibilityTwoTone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TransactionModal from "./TransactionModal";

const WithdrawalReq = ({ setSection, section, previous }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const authToken = getCookie("token");
    const getReqs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/transaction/all`,
          {
            headers: {
              token: authToken,
            },
          }
        );
        let reqs = res.data.filter(function (e) {
          return e.status === "pending";
        });
        setRequests(reqs);
      } catch (err) {
        console.log(err);
      }
    };
    getReqs();
  }, []);

  return (
    <div className="container-xxl">
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-4 mb-8">
          <div className="card card-stretch mb-5 mb-xxl-8">
            <div className="card-body pb-0">
              <div class="table-responsive">
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Codes</th>
                      <th>Bank Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>044</td>
                      <td>Access Bank</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>035A</td>
                      <td>ALAT by WEMA</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>023</td>
                      <td>Citibank Nigeria</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>063</td>
                      <td>Access Diamond Bank</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>050</td>
                      <td>Ecobank Nigeria</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>084</td>
                      <td>Enterprise Bank</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>070</td>
                      <td>Fidelity Bank</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>011</td>
                      <td>First Bank of Nigeria</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>214</td>
                      <td>First City Monument Bank</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>058</td>
                      <td>Guaranty Trust Bank</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>030</td>
                      <td>Heritage Bank</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>301</td>
                      <td>Jaiz Bank</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>082</td>
                      <td>Keystone Bank</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>014</td>
                      <td>MainStreet Bank</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>526</td>
                      <td>Parallex Bank</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>101</td>
                      <td>Providus Bank</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>076</td>
                      <td>Polaris Bank</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>221</td>
                      <td>Stanbic IBTC Bank</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>068</td>
                      <td>Standard Chartered Bank</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>232</td>
                      <td>Sterling Bank</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>100</td>
                      <td>Suntrust Bank</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>032</td>
                      <td>Union Bank of Nigeria</td>
                    </tr>

                    <tr>
                      <td>23</td>
                      <td>033</td>
                      <td>United Bank For Africa</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>215</td>
                      <td>Unity Bank</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>035</td>
                      <td>Wema Bank</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>057</td>
                      <td>Zenith Bank</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card card-stretch mb-5 mb-xxl-8">
            <div class="card-header border-0 pt-5">
              <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bolder text-dark fs-3">
                  Withdrawal Requests
                </span>
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
            <div className="card-body d-flex">
              <div class="table-responsive">
                <table class="table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th class="p-0 min-w-30px"></th>
                      <th class="p-0 min-w-150px">Full Name</th>
                      <th class="p-0 min-w-100px">Amount</th>
                      <th class="p-0 min-w-50px">Bank</th>
                      <th class="p-0 min-w-100px">Acct Number</th>
                      <th class="p-0 min-w-40px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request) => (
                      <tr key={request._id}>
                        <th class="px-0 py-3">
                          <div class="symbol symbol-20px me-5">
                            <span class="symbol-label bg-light-primary">
                              <span class="svg-icon svg-icon-1 svg-icon-primary"></span>
                            </span>
                          </div>
                        </th>
                        <td class="ps-0">
                          <a
                            href="/"
                            class="text-gray-800 fw-bolder text-hover-primary fs-6"
                          >
                            {request.fullname}
                          </a>
                        </td>
                        <td class="ps-0">
                          <a
                            href="/"
                            class="text-gray-800 fw-bolder text-hover-primary fs-6"
                          >
                            {request.amount}
                          </a>
                        </td>
                        <td class="ps-0">
                          <a
                            href="/"
                            class="text-gray-800 fw-bolder text-hover-primary fs-6"
                          >
                            {request.bank}
                          </a>
                        </td>
                        <td class="ps-0">
                          <a
                            href="/"
                            class="text-gray-800 fw-bolder text-hover-primary fs-6"
                          >
                            {request.acctNum}
                          </a>
                        </td>

                        <td class="text-end ps-0">
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
                              data-bs-toggle="modal"
                              data-bs-target={`#kt_modal_trans_${request._id}`}
                            >
                              <span className="svg-icon svg-icon-1 svg-icon-dark">
                                <VisibilityIcon />
                              </span>
                            </button>
                          </div>
                        </td>
                        <TransactionModal request={request} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalReq;
