import React, { useEffect, useState } from "react";
import Header from "../components/UserDashboard/Header";

import "../styles/plugins.bundle.css";
import "../styles/style.bundle.css";
import ProfileSidebar from "../components/UserDashboard/ProfileSidebar";
import QuickView from "../components/UserDashboard/QuickView";
import ShareHoldings from "../components/UserDashboard/ShareHoldings";
import Account from "../components/UserDashboard/Account";
import Settings from "../components/UserDashboard/Settings";
import Withdraw from "../components/UserDashboard/Withdraw";
import TransactionHistory from "../components/UserDashboard/TransactionHistory";
import { ToastContainer } from "react-toastify";
import KYC from "../components/UserDashboard/KYC";
import { isAuth } from "../helpers/auth";
import { Navigate } from "react-router-dom";
import Afffilate from "../components/UserDashboard/Afffilate";
import Progress from "../components/UserDashboard/Progress";
import ChatRoom from "../components/UserDashboard/chatApp/ChatRoom";
import NoAccess from "../components/UserDashboard/Modals/NoAccess";

const UserDashboard = () => {
  const section = localStorage.getItem("currentSection");
  const user = JSON.parse(localStorage.getItem("user"));
  const userWallet = JSON.parse(localStorage.getItem("userWallet"));
  const previous = localStorage.getItem("previousSection");
  const [stateSection, setStateSection] = useState(section);

  const setSection = (value, value2) => {
    localStorage.setItem("currentSection", value);
    localStorage.setItem("previousSection", value2);
    setStateSection(value);
  };

  useEffect((section) => {
    if (!stateSection) {
      localStorage.setItem("currentSection", "Quickview");
      window.location.reload();
    }
  });

  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <Header
              setSection={setSection}
              section={stateSection}
              previous={previous}
              user={user}
              userWallet={userWallet}
            />
            {isAuth().isAdmin ? <Navigate to="/admin-panel" /> : null}
            <ToastContainer />
            {stateSection === "Chatroom" ? (
              <ChatRoom
                setSection={setSection}
                section={stateSection}
                previous={previous}
                user={user}
              />
            ) : (
              <div className="d-flex flex-column flex-column-fluid">
                <div
                  className="content fs-6 d-flex flex-column-fluid"
                  id="kt_content"
                >
                  <div className="container-xxl">
                    <div className="row g-0 g-xl-5 g-xxl-8">
                      <ProfileSidebar
                        user={user}
                        section={stateSection}
                        setSection={setSection}
                      />
                      {stateSection === "Quickview" && (
                        <QuickView
                          setSection={setSection}
                          section={stateSection}
                          user={user}
                          userWallet={userWallet}
                        />
                      )}

                      {stateSection === "Shareholdings" && (
                        <ShareHoldings
                          setSection={setSection}
                          section={stateSection}
                          user={user}
                          userWallet={userWallet}
                        />
                      )}
                      {stateSection === "Account" && (
                        <Account
                          setSection={setSection}
                          section={stateSection}
                          user={user}
                        />
                      )}
                      {stateSection === "Affilate" && (
                        <Afffilate
                          setSection={setSection}
                          section={stateSection}
                          previous={previous}
                          user={user}
                          userWallet={userWallet}
                        />
                      )}
                      {stateSection === "Settings" && (
                        <Settings
                          setSection={setSection}
                          section={stateSection}
                          user={user}
                        />
                      )}
                      {stateSection === "Withdraw" && (
                        <Withdraw
                          setSection={setSection}
                          section={stateSection}
                          previous={previous}
                          userWallet={userWallet}
                        />
                      )}
                      {stateSection === "Transactions" && (
                        <TransactionHistory
                          setSection={setSection}
                          section={stateSection}
                          previous={previous}
                        />
                      )}
                      {stateSection === "KYC" && (
                        <KYC
                          setSection={setSection}
                          section={stateSection}
                          previous={previous}
                          user={user}
                        />
                      )}
                      {stateSection === "Reports" && (
                        <Progress
                          setSection={setSection}
                          section={stateSection}
                          previous={previous}
                          user={user}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <NoAccess setSection={setSection} section={section} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
