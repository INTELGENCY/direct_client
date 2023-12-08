import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Autocomplete, Checkbox, Chip, TextField } from "@mui/material";
import { useState } from "react";
const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;
function AutocompleteMui({
  dataSearch,
  Content,
  placeholder,
  label,
  filterSelect,
}) {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleAutocompleteChange = (event, newValue) => {
      setSelectedValues(newValue);
    };
  return (
    <div>
      <Autocomplete
        multiple
        options={dataSearch}
        disableCloseOnSelect
        fullWidth
        value={selectedValues}
        onChange={handleAutocompleteChange}
        getOptionLabel={(option) =>
          filterSelect === "byName" ? option?.name : option?.institute
        }
        renderOption={(props, option, { selected }) =>
          Content ? (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 2 }}
                checked={selected}
              />
              <Content dataUsers={option} />
            </li>
          ) : (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option?.name}
            </li>
          )
        }
        renderInput={(params) => (
          <>
            {console.log(params, "params")}
            <TextField {...params} label={label} placeholder={placeholder} />
          </>
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option.name}
              {...getTagProps({ index })}
              onDelete={() => {
                const newValue = [...value];
                newValue?.splice(index, 1);
                setSelectedValues(newValue);
              }}
            />
          ))
        }
      />
    </div>
  );
}

export default AutocompleteMui;
