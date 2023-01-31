import React from "react";
import RequestWithdrawal from "./RequestWithdrawal";
import PurchaseShares from "./PurchaseShares";

const Modal = ({ section, setSection, content, user, userWallet, source }) => {
  return (
    <div
      class={section === "Modal" ? "modal fade show" : "modal fade"}
      id={content === "Purchase" ? "kt_modal_create_app" : "kt_modal_withdraw"}
      tabindex="-1"
      aria-hidden="true"
      role="dialog"
      style={section === "Modal" ? { display: "block" } : {}}
    >
      {content === "Purchase" && (
        <PurchaseShares
          section={section}
          setSection={setSection}
          user={user}
          userWallet={userWallet}
        />
      )}
      {content === "Withdraw" && (
        <RequestWithdrawal
          section={section}
          setSection={setSection}
          user={user}
          userWallet={userWallet}
          source={source}
        />
      )}
    </div>
  );
};

export default Modal;
