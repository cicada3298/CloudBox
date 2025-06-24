import React from "react";

const Footer = () => {
  return (
    <footer class="iq-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="../backend/privacy-policy.html">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="../backend/terms-of-service.html">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 text-right">
            <span class="mr-1">@CloudBox</span>
            <a href="#" class="">
              By Vaibhav Chaudhary
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
