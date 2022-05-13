import React from "react";
import Dialog from "@mui/material/Dialog";

const DialogBox = ({ open, handleClose, video, dialogSize }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={dialogSize}
      fullWidth={dialogSize}
    >
      <iframe
        width="100%"
        title="trailers"
        frameBorder="0"
        height="400"
        src={video}
      ></iframe>
    </Dialog>
  );
};

export default DialogBox;
