import { FormLabel, Grid, Stack, styled } from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TooltipMui from "../AnimationMui/TooltipMui";
import { Quiz } from "@mui/icons-material";

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
  tooltipText,
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
          <Stack gap={1} direction={"row"}>
            <LabelForInput
              color="error"
              required={required ? true : false}
              // className="emailInputLabel"
            >
              {label}
            </LabelForInput>
            {tooltipText && (
              <TooltipMui
                text={tooltipText}
                icon={<Quiz sx={{ color: "bg.darkBlue", cursor: "pointer" }} />}
              />
            )}
          </Stack>
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
