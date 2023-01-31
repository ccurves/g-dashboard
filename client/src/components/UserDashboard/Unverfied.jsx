import React from "react";
import svg1 from "../../media/illustrations/ouch/cherry-done-1.png";

const Unverfied = ({ setSection }) => {
  return (
    <div class="w-100 text-center">
      <div class="text-center px-4 py-6">
        <img src={svg1} alt="" class=" mh-200px" />
      </div>
      <h1 class="fw-bolder text-dark mb-3">Account Unverified!</h1>

      <div class="text-muted fw-bold fs-3">
        Hola! Seems your account isn't verified yet.
      </div>
      <button
        type="button"
        class="btn btn-primary fw-bolder my-9 "
        onClick={(e) => {
          setSection("KYC", "Quickview");
        }}
        data-bs-dismiss="modal"
      >
        Complete KYC
      </button>
    </div>
  );
};

export default Unverfied;
