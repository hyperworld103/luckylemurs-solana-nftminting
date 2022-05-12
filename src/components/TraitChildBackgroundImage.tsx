import React from "react";
import { Box } from "@material-ui/core";

// @ts-ignore
export default function TraitChildBackgroundImage({ src, children }) {
  return (
    <Box
      className="flex justify-center items-center w-auto md:w-11/12 mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${src})` }}
    >
      <Box className="text-center w-4/5">{children}</Box>
    </Box>
  );
}
