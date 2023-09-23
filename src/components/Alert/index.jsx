import {
  Alert, Collapse, Fade
} from "@mui/material";
import { forwardRef, useState } from "react";

export const AlertComponent = (props) => {
  const myProps = { ...props };

  return (
    <Fade in={myProps.isOpen}>
      <Alert variant="filled" severity={myProps.severity} sx={{ position: "absolute", bottom:0}}>
        {myProps.msg}
      </Alert>
    </Fade>
  );
};
