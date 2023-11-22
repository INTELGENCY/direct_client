import { FormLabel, Grid, styled } from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const LabelForInput = styled(FormLabel)(({ theme }) => ({
  color: "black",
  fontSize: "1.1rem",
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
}));
function Editor({
  quillRef,
  checkImageExists,
  value,
  setValue,
  required,
  label,
}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["code"],
      ["clean"],
    ],
    clipboard: { matchVisual: true },
    // handlers: {
    //   image: checkImageExists,
    // },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code",
  ];
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <LabelForInput
            color="error"
            required={required ? true : false}
            // className="emailInputLabel"
          >
            {label}
          </LabelForInput>
        </Grid>
        <Grid item xs={12}>
          <ReactQuill
            style={{ marginTop: "1rem" }}
            theme="snow"
            ref={quillRef}
            value={value}
            defaultValue={value}
            className="editor-input"
            onChange={(e) => {
              setValue(e);
            }}
            modules={modules}
            formats={formats}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Editor;
