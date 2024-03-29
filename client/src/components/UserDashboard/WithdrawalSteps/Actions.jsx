import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Actions = ({ acctName, verifyNum, loading }) => {
  return (
    <div className="d-flex flex-stack pt-10">
      <div className="me-2">
        <button
          type="button"
          className="btn btn-lg btn-light-primary me-3"
          data-kt-stepper-action="previous"
        >
          <span className="svg-icon svg-icon-3 me-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                opacity="0.5"
                x="6"
                y="11"
                width="13"
                height="2"
                rx="1"
                fill="black"
              />
              <path
                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                fill="black"
              />
            </svg>
          </span>
          Back
        </button>
      </div>

      <div>
        {acctName === "" ? (
          loading ? (
            <button
              type="button"
              className="btn btn-lg btn-muted"
              data-kt-stepper-action="submit"
              disabled
            >
              <span class="indicator-label ">
                <CircularProgress size={24} />
              </span>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-lg btn-primary"
              data-kt-stepper-action="submit"
              onClick={verifyNum}
            >
              <span class="indicator-label">
                Verify Acct No.
                <span class="svg-icon svg-icon-3 ms-2 me-0">
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
              </span>
            </button>
          )
        ) : (
          <button
            type="submit"
            className="btn btn-lg btn-primary"
            data-kt-stepper-action="submit"
          >
            <span class="indicator-label">
              Submit
              <span class="svg-icon svg-icon-3 ms-2 me-0">
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
            </span>
            <span className="indicator-progress">
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          </button>
        )}

        <button
          type="button"
          className="btn btn-lg btn-primary"
          data-kt-stepper-action="next"
        >
          Continue
          <span className="svg-icon svg-icon-3 ms-1 me-0">
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
        </button>
      </div>
    </div>
  );
};

export default Actions;
