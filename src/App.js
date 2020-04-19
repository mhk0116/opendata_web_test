import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header>
          <div className="img">
            <div className="profile-title">
              <h1 className="h1">Persnal Mobility</h1>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-title">
                  <p className="p">Population</p>
                </div>
                <div className="stat-value">
                  <p className="p">131k</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">
                  <p className="p">Accident</p>
                </div>
                <div className="stat-value">
                  <p className="p">5659</p>
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">
                  <p className="p">Die</p>
                </div>
                <div className="stat-value">
                  <p className="p">125</p>
                </div>
              </div>
            </div>
            <div class="input-group">
              <input type="text" class="pt-input" placeholder="search" />
              <span class="input-group-btn">
                <button class="pt-btn" type="button">
                  <p className="p">Go</p>
                </button>
              </span>
            </div>
            <div className="img-cover"></div>
          </div>
        </header>
        <nav></nav>
        <article>
          <div>
            <h1>Hello</h1>
            <div className="left">
              <p>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </p>
              <iframe width="5000" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMy2W0dD2-zzEezUwgcYSosS9nCNZTmVZOQjF64BwTLU2RQF9EeTVLP7mf-a03Fg_RJVXXvNYNEnIJ/pubchart?oid=2102374876&amp;format=interactive"></iframe>
            </div>
          </div>
        </article>
        <footer></footer>
      </div>
    );
  }
}

export default App;
