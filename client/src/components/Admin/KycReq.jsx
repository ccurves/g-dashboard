import axios from "axios";
import React, { useEffect, useState } from "react";
import VerifyModal from "./VerifyModal";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { getCookie } from "../../helpers/auth";

const KycReq = ({ setSection, section, previous }) => {
  const [kycReqs, setKycReqs] = useState([]);
  const authToken = getCookie("token");
  useEffect(() => {
    const getRequests = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/admin/users`,
          {
            headers: {
              token: authToken,
            },
          }
        );
        let requests = res.data.filter(function (e) {
          return e.kycStatus === "pending";
        });

        setKycReqs(requests);
      } catch (err) {
        console.log(err);
      }
    };
    getRequests();
  });
  return (
    <div>
      <div className="col-xl-12">
        <div className="card card-stretch mb-5 mb-xxl-8">
          <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bolder text-dark fs-3">
                KYC Requests
              </span>
              <span class="text-muted mt-2 fw-bold fs-6">
                {kycReqs.length} Request(s)
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
          <div className="card-body">
            <div class="table-responsive">
              <table class="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th class="p-0 w-50px"></th>
                    <th class="p-0 min-w-200px"></th>
                    <th class="p-0 min-w-100px"></th>
                    <th class="p-0 min-w-40px"></th>
                  </tr>
                </thead>
                <tbody>
                  {kycReqs.map((kycReqs) => (
                    <tr key={kycReqs._id}>
                      <th class="px-0 py-3">
                        <div class="symbol symbol-25px me-5">
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
                          {kycReqs.firstname + " " + kycReqs.lastname}
                        </a>
                      </td>
                      <td class="ps-0">
                        <a
                          href="/"
                          class="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >
                          {kycReqs.gender.charAt(0).toUpperCase() +
                            kycReqs.gender.slice(1)}
                        </a>
                      </td>
                      <td class="ps-0">
                        <a
                          href="/"
                          class="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >
                          {kycReqs.email}
                        </a>
                      </td>

                      <td class="text-end pe-0">
                        <button
                          type="button"
                          class="btn btn-primary fw-bolder my-9 btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target={`#kt_modal_${kycReqs._id}`}
                        >
                          View Uploaded Doc
                        </button>
                        <VerifyModal kycReqs={kycReqs} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycReq;
