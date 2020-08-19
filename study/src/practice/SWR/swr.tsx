import React, { useState, useEffect } from "react";
import _ from "lodash";
import useSWR from "swr";

export default function SWRTest() {
  const [key, setKey] = useState<{ name?: string }>({});
  // const { data, error, revalidate } = useSWR(
  //   `尊敬的 ${key.name ? key.name : "访客"}`,
  //   (param) => {
  //     console.log("param", param);
  //     return param;
  //   }
  // );
  useEffect(() => {
    if (_.isEmpty(key)) {
      setTimeout(() => {
        setKey({ name: "胡晓峰" });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    const keyOld = key;
    setTimeout(() => {
      console.log(key, key == keyOld);
    }, 6000);
  }, []);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // render data
  return (
    <div>
      123
      {/* hello {data}!<div onClick={revalidate}>click</div> */}
    </div>
  );
}
