import axios from "axios";

const UploadFile = async (file: any) => {
  try {
    console.log(file);
    const formData = new FormData();
    formData.append("excelFile", file[0]);

    const response = await axios.post(
      "http://localhost:8443/api/upload-excel",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("File uploaded successfully!");
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading the file:", error);
    throw error;
  }
};

export default UploadFile;
