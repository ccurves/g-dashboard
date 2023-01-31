import React from "react";
import { DateTime } from "luxon";

const Transactions = ({ transactions }) => {
  return (
    <div>
      <div class="card bg-transparent mb-5 shadow-none">
        <div class="card-body pt-2 px-0">
          <div class="table-responsive">
            <table class="table table-borderless align-middle">
              <tbody>
                {transactions.map((transactions) => (
                  <tr key={transactions._id}>
                    <th class="ps-0 w-55px">
                      <div class="symbol symbol-35px flex-shrink-0 me-4">
                        <span class="symbol-label bg-light-primary">
                          <img
                            src="assets/media/svg/avatars/009-boy-4.svg"
                            class="h-75 align-self-end"
                            alt=""
                          />
                        </span>
                      </div>
                    </th>
                    <td class="ps-0 flex-column min-w-300px">
                      <a
                        href="/"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                      >
                        {transactions.type}
                      </a>
                      <div class="text-muted fw-bold">
                        {DateTime.fromISO(
                          transactions.createdAt
                        ).toLocaleString(DateTime.DATETIME_MED)}
                        {/* {transactions.createdAt.toLocaleString()} */}
                      </div>
                    </td>
                    <td>
                      <div class="me-4 me-md-19 text-md-right">
                        <div class="text-gray-800 fw-bolder fs-6 mb-1">
                          &#8358;{transactions.amount.toLocaleString()}.00
                        </div>
                        {transactions.status === "Successful" && (
                          <span class="text-success fw-bold">success</span>
                        )}
                        {transactions.status === "paid" && (
                          <span class="text-primary fw-bold">paid</span>
                        )}
                        {transactions.status === "pending" && (
                          <span class="text-warning fw-bold">pending</span>
                        )}
                        {transactions.status === "failed" && (
                          <span class="text-danger fw-bold">failed</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* <tr>
                <th class="ps-0 w-55px">
                  <div class="symbol symbol-55px flex-shrink-0 me-4">
                    <span class="symbol-label bg-light-primary">
                      <img
                        src="assets/media/svg/avatars/009-boy-4.svg"
                        class="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                </th>
                <td class="ps-0 flex-column min-w-300px">
                  <a
                    href="/"
                    class="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1"
                  >
                    Withdarwal
                  </a>
                  <div class="text-muted fw-bold">Date: 12, March 2022</div>
                </td>
                <td>
                  <div class="me-4 me-md-19 text-md-right">
                    <div class="text-gray-800 fw-bolder fs-6 mb-1">
                      $2,000,000
                    </div>
                    <span class="text-primary fw-bold">Paid</span>
                  </div>
                </td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
