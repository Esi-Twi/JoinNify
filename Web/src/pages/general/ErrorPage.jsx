import React from "react";

export default function ErrorPage() {


  return (
    <>
      <style>{`
        :root {
          --join-indigo: #c11cea;
          --bg-1: #0b0b14;
          --bg-2: #121225;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Inter, system-ui, Arial, sans-serif;
        }

        body {
          background: radial-gradient(
            circle at top,
            var(--bg-2),
            var(--bg-1)
          );
          color: white;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          text-align: center;
          padding: 40px;
        }

        .code {
          font-size: 120px;
          font-weight: 800;
          letter-spacing: 2px;
          background: linear-gradient(
            135deg,
            var(--join-indigo),
            #6a5cff
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title {
          font-size: 28px;
          margin-top: 10px;
          font-weight: 600;
        }

        .subtitle {
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.7;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        .buttons {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        button {
          padding: 10px 18px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .primary {
          background: var(--join-indigo);
          color: white;
          box-shadow: 0 0 20px rgba(193, 28, 234, 0.35);
        }

        .primary:hover {
          transform: translateY(-2px);
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .secondary:hover {
          border-color: var(--join-indigo);
          color: var(--join-indigo);
        }

        .glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--join-indigo);
          filter: blur(140px);
          opacity: 0.25;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
        }
      `}</style>

      <div className="glow" />

      <div className="container">
        <div className="code">404</div>
        <div className="title">Page Not Found</div>
        <div className="subtitle">
          Oops! The page you’re looking for doesn’t exist or has been moved.
          Please check the URL or go back to safety.
        </div>

        <div className="buttons">
          <button className="primary" >
            <a className="text-decoration-none text-white" href="/">Go Home</a>
          </button>
        </div>
      </div>
    </>
  );
}