import React from "react";

const Step3 = () => {
  return (
    <div data-kt-stepper-element="content">
      <div className="w-100" id="kt_chat_messenger_body">
        <h2 className="text-dark fw-bolder fs-1 mb-5">Terms & Policy</h2>
        <div
          className="scroll-y me-n5 pe-5 h-300px h-lg-auto"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_content, #kt_chat_messenger_body"
          data-kt-scroll-offset="-2px"
        >
          <div className="d-flex justify-content-start mb-10">
            <div className="d-flex flex-column align-items-start">
              <div
                id="kt_accordion_1_item_1"
                className="fs-6 collapse show ps-10"
                data-bs-parent="#kt_accordion_1"
              >
                <div className="mb-5">
                  The management of G1000 does not guarantee that investing in
                  G1000 is free from all or any investment risk or speculations
                  that are usual of similar investment schemes. There are
                  substantial risks in investing in G1000. Persons investing in
                  G1000 should carefully note the following:
                </div>
                <div className="mb-3">
                  1. The investments and services offered by us may not be
                  suitable for all investors. Before investing in G1000, ensure
                  you have spoken to and sought the advice of an independent
                  financial advisor who is not connected to the G1000 management
                  in any way.
                </div>
                <div className="mb-3">
                  2. There is no guarantee or warrantee given for the capital
                  value of units in fund. The price or monetary value of units
                  is subject to fluctuation (upward and downwards) from time to
                  time as determined by prevailing market realities.
                </div>
                <div className="mb-3">
                  3. The G1000 investment may not allow investors to get their
                  capital back at the expiration of every investment period
                  (which is 30 months). The monthly Return on Investment is what
                  is to be expected. Where there is damage to the investment
                  period the expiration of the investment period, an investor
                  may get back less than the amount invested.
                </div>
                <div className="mb-3">
                  4. In situation where information on past performance is given
                  on any service or investment, it should not be taken as a
                  guide to future performance. IT is only a statement of
                  experience that can be used to predict future occurrences.
                </div>
                <div className="mb-3">
                  5. G1000 represents a speculative investment and involves a
                  high/low degree of risk. An investor could lose all or a
                  substantial portion of his/her investment. Investors must have
                  the financial ability, sophistication/experience and
                  willingness to bear the risks of an investment in G1000.
                </div>
                <div className="mb-3">
                  6. An investment in G1000 should be discretionary capital set
                  aside strictly for speculative purposes.
                </div>
                <div className="mb-3">
                  7. G1000 may employ leverage and other investment techniques,
                  and such leverage and other investment techniques may result
                  in increased volatility of the fund’s performance and
                  increased risk of loss.
                </div>
                <div className="mb-3">
                  8. These policies are subject to change from time to time at
                  company's discretion without permission from investors.
                </div>
                <div className="mb-7">
                  9. Proceeding to invest in G1000 will be taken as a proof that
                  you have read, understood these policies and are interested in
                  taking the risks.
                </div>
                <div className="mb-3 mt-3">
                  Lastly before purchasing the shares, kindly be informed that,
                  your investments starts after the completion of two things:
                </div>
                <div className="mb-3">
                  1. After 1000 share units are sold out.
                </div>
                <div className="mb-3">
                  2. After we have set the investments in Real estates,
                  Agriculture and Mining.
                </div>
                <div className="mb-5">
                  These process would take 2 weeks at least. There after you get
                  a mail that your shares has been alloted to you and your
                  investments starts reading.
                </div>
                <div className="">Welcome to the era of wealth transfer.</div>
              </div>
            </div>
          </div>

          <label className="d-flex flex-stack cursor-pointer mb-5">
            <span className="d-flex align-items-center me-2">
              <span className="d-flex flex-column">
                <span className="fw-bolder fs-6"> I Accept</span>
                <span className="fs-7 text-muted">
                  {" "}
                  By checking, you agree to the above terms and conditions
                </span>
              </span>
            </span>
            <span className="form-check form-check-custom form-check-solid">
              <input
                className="form-check-input"
                type="checkbox"
                name="dbengine"
                checked="checked"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3;
