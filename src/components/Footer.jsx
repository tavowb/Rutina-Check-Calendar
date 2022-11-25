import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" footer bg-black text-white">
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 offset-xl-1 col-lg-2 col-md-6">
            <div className="mt-3">
              <h4>Email</h4>
              <ul className="list-unstyled">
                <li>
                  <div className="mb-2  ps-4 d-flex align-items-start">
                    <MdMail className="me-2 mt-1"></MdMail>
                    gustavojimenezdm@unimagdalena.edu.co
                  </div>
                </li>
                <li>
                  <div className="mb-2  ps-4 d-flex align-items-start">
                    <SiGmail className="me-2 mt-1"></SiGmail>
                    gusjim71@gmail.com
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="mt-3">
              <h4>Social</h4>
              <ul className="list-unstyled">
                <li>
                  <div className="mb-2 ps-4 d-flex align-items-start">
                    <AiFillGithub className="me-2 mt-1"></AiFillGithub>
                    <a href="https://github.com/tavowb" className="text-white">
                      Gustavo Jimenez
                    </a>
                  </div>
                </li>
                <li>
                  <div className="mb-2 ps-4 d-flex align-items-start">
                    <AiFillInstagram className="me-2 mt-1"></AiFillInstagram>
                    <a
                      href="https://www.instagram.com/morasouya/"
                      className="text-white"
                    >
                      Gustavo Jimenez
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="mt-3">
              <h4>Phone</h4>
              <ul className="list-unstyled">
                <li>
                  <div className=" mb-2 ps-4 ">
                    <BsPhoneFill></BsPhoneFill>
                    +57 3053058528
                  </div>
                </li>
                <li>
                  <div className="mb-2 ps-4 ">
                    <BsPhoneFill></BsPhoneFill>
                    +57 3124341827
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>

        <div className="d-flex justify-content-center">
          <div className="copyright">
            <p>
              Developed and maintained by:{" "}
              <a
                className="text-white"
                href="https://www.instagram.com/morasouya/"
              >
                Gustavo Jimenez
              </a>{" "}
              &copy; {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
