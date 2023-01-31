import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";

const Messenger = ({ setSection, section, previous }) => {
  return (
    <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
      <div class="card" id="kt_chat_messenger">
        <div class="card-header" id="kt_chat_messenger_header">
          <div class="card-title">
            <div class="symbol-group symbol-hover">
              <div class="symbol symbol-35px symbol-circle">
                <span class="symbol-label bg-light-warning text-warning 40px">
                  M
                </span>
              </div>

              <div class="symbol symbol-35px symbol-circle">
                <span class="symbol-label bg-light-danger text-danger 40px">
                  O
                </span>
              </div>

              <div class="symbol symbol-35px symbol-circle">
                <span class="symbol-label bg-light-primary text-primary 40px">
                  N
                </span>
              </div>

              <a
                href="/"
                class="symbol symbol-35px symbol-circle"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_view_users"
              >
                <span
                  class="symbol-label fs-8 fw-bolder"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  title="View more users"
                >
                  +42
                </span>
              </a>
            </div>
          </div>

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

        <div class="card-body" id="kt_chat_messenger_body">
          <div
            class="scroll-y me-n5 pe-5 h-300px h-lg-auto"
            data-kt-element="messages"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
            data-kt-scroll-wrappers="#kt_content, #kt_chat_messenger_body"
            data-kt-scroll-offset="-2px"
          >
            <div class="d-flex justify-content-start mb-10">
              <div class="d-flex flex-column align-items-start">
                <div class="d-flex align-items-center mb-2">
                  <div class="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="../../assets/media/avatars/150-15.jpg"
                    />
                  </div>

                  <div class="ms-3">
                    <a
                      href="/"
                      class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span class="text-muted fs-7 mb-1">2 mins</span>
                  </div>
                </div>

                <div
                  class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  How likely are you to recommend our company to your friends
                  and family ?
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end mb-10">
              <div class="d-flex flex-column align-items-end">
                <div class="d-flex align-items-center mb-2">
                  <div class="me-3">
                    <span class="text-muted fs-7 mb-1">5 mins</span>
                    <a
                      href="/"
                      class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                    >
                      You
                    </a>
                  </div>

                  <div class="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="../../assets/media/avatars/150-26.jpg"
                    />
                  </div>
                </div>

                <div
                  class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  Hey there, we’re just writing to let you know that you’ve been
                  subscribed to a repository on GitHub.
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-start mb-10">
              <div class="d-flex flex-column align-items-start">
                <div class="d-flex align-items-center mb-2">
                  <div class="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="../../assets/media/avatars/150-15.jpg"
                    />
                  </div>

                  <div class="ms-3">
                    <a
                      href="/"
                      class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                    >
                      Brian Cox
                    </a>
                    <span class="text-muted fs-7 mb-1">1 Hour</span>
                  </div>
                </div>

                <div
                  class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Ok, Understood!
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end mb-10">
              <div class="d-flex flex-column align-items-end">
                <div class="d-flex align-items-center mb-2">
                  <div class="me-3">
                    <span class="text-muted fs-7 mb-1">2 Hours</span>
                    <a
                      href="/"
                      class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                    >
                      You
                    </a>
                  </div>

                  <div class="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="../../assets/media/avatars/150-26.jpg"
                    />
                  </div>
                </div>

                <div
                  class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                  data-kt-element="message-text"
                >
                  You’ll receive notifications for all issues, pull requests!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer pt-4" id="kt_chat_messenger_footer">
          <textarea
            class="form-control form-control-flush mb-3"
            rows="1"
            data-kt-element="input"
            placeholder="Type a message"
          ></textarea>

          <div class="d-flex flex-stack">
            <div class="d-flex align-items-center me-2">
              <button
                class="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                title="Coming soon"
              >
                <i class="bi bi-paperclip fs-3"></i>
              </button>
              <button
                class="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                title="Coming soon"
              >
                <i class="bi bi-upload fs-3"></i>
              </button>
            </div>

            <button
              class="btn btn-primary"
              type="button"
              data-kt-element="send"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
