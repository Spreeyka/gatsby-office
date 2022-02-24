import React, { useEffect, useState } from "react";
import { wrapper, bar, bar__progress, index } from "./progressBar.module.scss";

export default function ProgressBar({ activeIndex }) {
  const [shouldReset, setShouldReset] = useState(false);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (shouldReset) setClassName("progressBar-module--progressBar2--K7QxG");
    else {
      setClassName("progressBar-module--progressBar--opeyW");
    }
    setShouldReset((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className={wrapper}>
      <p className={index}>0{activeIndex + 1}</p>
      <div className={bar}>
        <div
          className={bar__progress}
          style={{
            WebkitAnimationName: className,
          }}
        ></div>
      </div>
      <p className={index}>03</p>
    </div>
  );
}
