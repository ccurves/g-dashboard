"use strict";
var KTWithdraw = (function () {
  var e,
    t,
    o,
    r,
    a,
    i,
    n = [];
  return {
    init: function () {
      (e = document.querySelector("#kt_modal_withdraw")) &&
        (new bootstrap.Modal(e),
        (t = document.querySelector("#kt_modal_withdraw_stepper")),
        (o = document.querySelector("#kt_modal_withdraw_form")),
        (r = t.querySelector('[data-kt-stepper-action="submit"]')),
        (a = t.querySelector('[data-kt-stepper-action="next"]')),
        (i = new KTStepper(t)).on("kt.stepper.changed", function (e) {
          4 === i.getCurrentStepIndex()
            ? (r.classList.remove("d-none"),
              r.classList.add("d-inline-block"),
              a.classList.add("d-none"))
            : 5 === i.getCurrentStepIndex()
            ? (r.classList.add("d-none"), a.classList.add("d-none"))
            : (r.classList.remove("d-inline-block"),
              r.classList.remove("d-none"),
              a.classList.remove("d-none"));
        }),
        i.on("kt.stepper.next", function (e) {
          console.log("stepper.next");
          var t = n[e.getCurrentStepIndex() - 1];
          t
            ? t.validate().then(function (t) {
                console.log("validated!"),
                  "Valid" == t
                    ? e.goNext()
                    : Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-light" },
                      }).then(function () {});
              })
            : (e.goNext(), KTUtil.scrollTop());
        }),
        i.on("kt.stepper.previous", function (e) {
          console.log("stepper.previous"), e.goPrevious(), KTUtil.scrollTop();
        }),
        r.addEventListener("click", function (e) {
          n[3].validate().then(function (t) {
            console.log("validated!"),
              "Valid" == t
                ? (e.preventDefault(),
                  (r.disabled = !0),
                  r.setAttribute("data-kt-indicator", "on"),
                  setTimeout(function () {
                    r.removeAttribute("data-kt-indicator"),
                      (r.disabled = !1),
                      i.goNext();
                  }, 2e3))
                : Swal.fire({
                    text: "Sorry, looks like there are some errors detected, please try again.",
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "Ok, got it!",
                    customClass: { confirmButton: "btn btn-light" },
                  }).then(function () {
                    KTUtil.scrollTop();
                  });
          });
        }),
        n.push(
          FormValidation.formValidation(o, {
            fields: {
              wamount: {
                validators: {
                  notEmpty: { message: "Amount is required" },
                },
              },
            },
            plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: ".fv-row",
                eleInvalidClass: "",
                eleValidClass: "",
              }),
            },
          })
        ),
        n.push(
          FormValidation.formValidation(o, {
            fields: {
              acct_name: {
                validators: {
                  notEmpty: { message: "Account name is required" },
                },
              },
              acct_number: {
                validators: {
                  notEmpty: { message: "Account number is required" },
                  acctNumber: { message: "Account number is not valid" },
                },
              },
              bank: {
                validators: { notEmpty: { message: "Please specify a bank" } },
              },
            },
            plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: ".fv-row",
                eleInvalidClass: "",
                eleValidClass: "",
              }),
            },
          })
        ));
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTWithdraw.init();
});
