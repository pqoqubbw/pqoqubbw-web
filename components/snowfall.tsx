"use client";

import Snowfall from "react-snowfall";

const SnowfallComponent = () => {
  return (
    <Snowfall
      snowflakeCount={100}
      changeFrequency={400}
      opacity={[0.3, 0.8]}
      wind={[-2, 5]}
    />
  );
};

export { SnowfallComponent };
