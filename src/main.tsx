import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.tsx';
import React from 'react';
import "@/locales/index.ts"
interface Props {
  children: React.ReactNode;
}

interface MyComponentState {
  error: any;
  errorInfo: any;
}

export default class ErrorBoundary extends React.Component<Props, MyComponentState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // use lifecycle to catch errors in any components below and re-render fallback UI
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <div className="error-wrapper">
            <div className="main">
              <div className="antenna">
                <div className="antenna_shadow"></div>
                <div className="a1"></div>
                <div className="a1d"></div>
                <div className="a2"></div>
                <div className="a2d"></div>
                <div className="a_base"></div>
              </div>
              <div className="tv">
                <div className="cruve">
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 189.929 189.929"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="curve_svg"
                  >
                    <path
                      d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                    ></path>
                  </svg>
                </div>
                <div className="display_div">
                  <div className="screen_out">
                    <div className="screen_out1">
                      <div className="screen">
                        <span className="notfound_text">Something went wrong.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lines">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
                <div className="buttons_div">
                  <div className="b1">
                    <div></div>
                  </div>
                  <div className="b2"></div>
                  <div className="speakers">
                    <div className="g1">
                      <div className="g11"></div>
                      <div className="g12"></div>
                      <div className="g13"></div>
                    </div>
                    <div className="g"></div>
                    <div className="g"></div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="base1"></div>
                <div className="base2"></div>
                <div className="base3"></div>
              </div>
            </div>
            <h3 style={{ marginTop: '3rem', textAlign: 'center' }}>
            Excuse me. Please wait for our team to fix it.
          </h3>
          </div>
         
        </>
      );
    }
    return this.props.children;
  }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>
);
