import { observable, action } from "mobx";

const appState = observable({
  time: 0,
  resetTime: action(() => {
    appState.time = 0;
  }),
});

// define action
setInterval(
  action(() => {
    appState.time += 1;
  }),
  1000
);

export default appState;
