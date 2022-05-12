import React from "react";
import { Box } from "@material-ui/core";

// @ts-ignore
export default function TraitBackgroundImage({ src, children }) {
  return (
    <Box
      className="flex justify-center w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <Box className="text-center w-full md:w-4/5">{children}</Box>
    </Box>
  );
}
