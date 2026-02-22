import React from "react";
import styled from "styled-components";

const Button = ({ className, text, onClick, theme = "dark" }) => {
  return (
    <StyledWrapper onClick={onClick} $theme={theme}>
      <button className={`codepen-button ${className}`}>
        <span>{text}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .codepen-button {
    display: block;
    cursor: pointer;
    color: ${({ $theme }) => ($theme === "dark" ? "#ffffff" : "#111827")};
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    overflow: hidden;
    padding: 3px;
    isolation: isolate;
  }

  .codepen-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    background: linear-gradient(
      115deg,
      #4fcf70,
      #fad648,
      #a767e5,
      #12bcfe,
      #44ce7b
    );
    background-size: 25% 100%;
    animation: borderAnim 0.75s linear infinite;
    animation-play-state: paused;
    translate: -5% 0%;
    transition: translate 0.25s ease-out;
  }

  .codepen-button:hover::before {
    animation-play-state: running;
    transition-duration: 0.75s;
    translate: 0% 0%;
  }

  @keyframes borderAnim {
    to {
      transform: translateX(-25%);
    }
  }

  .codepen-button span {
    position: relative;
    display: block;
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    background: ${({ $theme }) =>
      $theme === "dark"
        ? "rgba(3, 7, 18, 0.95)"
        : "rgba(255, 255, 255, 0.92)"};
    color: ${({ $theme }) => ($theme === "dark" ? "#f8fafc" : "#111827")};
    box-shadow: ${({ $theme }) =>
      $theme === "dark"
        ? "inset 0 1px 0 rgba(255,255,255,0.06)"
        : "inset 0 1px 0 rgba(255,255,255,0.9)"};
    backdrop-filter: blur(8px);
    border-radius: 3px;
    height: 100%;
  }

  /* 🔹 Responsive styles */
  @media (max-width: 768px) {
    .codepen-button span {
      padding: 0.7rem 1rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .codepen-button span {
      padding: 0.55rem 0.85rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 360px) {
    .codepen-button span {
      padding: 0.45rem 0.7rem;
      font-size: 0.78rem;
    }
  }
`;

export default Button;
