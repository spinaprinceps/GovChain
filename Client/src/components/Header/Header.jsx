import React, { useState, useEffect } from "react";
import logo from "../../logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ethers } from "ethers";

const Header = () => {
  const [icon, setIcon] = useState(faBars);
  const [navOpen, setNavOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleNav = () => {
    setIcon((prevIcon) => (prevIcon === faBars ? faX : faBars));
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed!");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWalletAddress(address);
      console.log("Wallet connected:", address);

      const authenticated = await authenticate(address);
      setIsAuthenticated(authenticated);

      if (authenticated) {
        console.log("User successfully authenticated!");
      } else {
        console.warn("Authentication failed.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error.message);
    }
  };

  const authenticate = async (wallet) => {
    try {
      console.log("Starting authentication for wallet:", wallet);

      // Get nonce from the server
      const nonceResponse = await axios.get(
        `http://localhost:3002/auth/nonce/${wallet}`
      );
      const nonce = nonceResponse.data.nonce;

      // Sign the nonce with the wallet
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(`Nonce: ${nonce}`);

      // Verify the signature with the server
      const response = await axios.post("http://localhost:3002/auth/verify", {
        walletAddress: wallet,
        signature,
      });

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error(
        "Authentication error:",
        error.message,
        error.response?.data
      );
      return false;
    }
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[12vh]" />
          </NavLink>
        </div>
        <div>
          <div
            className={`lg:static absolute lg:w-auto w-full lg:min-h-fit min-h-[60vh] left-0 transition-all duration-500 ease-in-out ${
              navOpen ? "top-[10%] bg-[#03045E]" : "top-[-100%]"
            }`}
          >
            <ul className="flex lg:flex-row flex-col items-center lg:gap-8 gap-6 text-lg font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#CAF0F8]" : ""
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-[#CAF0F8]" : ""
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#CAF0F8]" : ""
                  }
                >
                  CONTACT
                </NavLink>
              </li>
              <li>
                <button
                  onClick={connectWallet}
                  className="px-6 py-3 text-xl bg-gradient-to-r from-[#00b6c1] to-[#00a1a0] text-white rounded-md"
                >
                  {isAuthenticated
                    ? `Authenticated: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : walletAddress
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                </button>
              </li>
            </ul>
          </div>
          <div onClick={toggleNav} className="cursor-pointer lg:hidden">
            <FontAwesomeIcon
              icon={icon}
              style={{ color: "#CAF0F8" }}
              className="h-6"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
