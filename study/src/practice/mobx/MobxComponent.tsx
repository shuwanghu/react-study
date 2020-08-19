import React from "react";
import { observer } from "mobx-react";

const MobxComponent = observer(
  ({ appState }: { appState: { time: number; resetTime: () => void } }) => {
    return (
      <>
        <div>{appState.time}</div>
        <div onClick={appState.resetTime}>clear</div>
      </>
    );
  }
);
export default MobxComponent;
