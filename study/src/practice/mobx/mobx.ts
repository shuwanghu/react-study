import { observable, action, autorun } from "mobx";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

const appState = observable({
  time: 0,
  resetTime: action(() => {
    appState.time = 0;
  }),
});

// // define action
setInterval(
  action(() => {
    appState.time += 1;
  }),
  1000
);

autorun(()=>{
  console.log('auto run',appState.time);
})

export default appState;
