import React from "react";
import { observer } from "mobx-react";

const MobxObserver = observer(
  ({ appState }: { appState: { time: number; resetTime: () => void } }) => {
    return (
      <>
        <div>MobxObserver {appState.time}</div>
      </>
    );
  }
);
export default MobxObserver;
