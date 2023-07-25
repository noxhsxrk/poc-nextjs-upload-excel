import { Button } from "@mui/material";
import UploadFile from "pages/api/UploadExcel";
import { useState } from "react";

import { DropzoneArea } from "react-mui-dropzone";

const DropZone = () => {
  const [file, setFile] = useState();
  const handleOnChange = (newFile: any) => {
    setFile(newFile);
  };

  const handleUpload = () => {
    UploadFile(file)
      .then((data) => {
        console.log("Upload response:", data);
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
  };

  return (
    <div>
      <DropzoneArea
        onChange={handleOnChange}
        filesLimit={1}
        showFileNames
      ></DropzoneArea>
      <Button variant="contained" onClick={handleUpload}>
        Upload File
      </Button>
    </div>
  );
};

export default DropZone;
