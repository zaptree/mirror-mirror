import React, { Component } from 'react';
import appConfig from 'config'; // eslint-disable-line

import Panel from './Panel';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPanel: appConfig.defaultPanel || 0,
    };

    this.slidePanel = this.slidePanel.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
          this.slidePanel(-1);
          break;
        case 'ArrowRight':
          this.slidePanel(1);
          break;
        default:
      }
    });
  }

  slidePanel(direction) {
    const { currentPanel } = this.state;
    let newPanel = currentPanel + direction;

    if (newPanel < 0) {
      newPanel = appConfig.panels.length - 1;
    } else if (newPanel >= appConfig.panels.length) {
      newPanel = 0;
    }

    this.setState({ currentPanel: newPanel });
  }

  render() {
    const { currentPanel } = this.state;

    return (
      <div className="app-container">
        {appConfig.panels.map((p, index) => (
          <Panel
            key={index}
            left={index < currentPanel}
            right={index > currentPanel}
            components={p.components}
          />
        ))}
      </div>
    );
  }
}

export default App;
