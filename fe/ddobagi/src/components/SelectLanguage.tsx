import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./NavBar.module.scss";

type SelectLanguageProps = {
  language: string;
  changeLanguageBy: (language: string) => void;
};

function SelectLanguage({ language, changeLanguageBy }: SelectLanguageProps) {
  const handleChange = (event: SelectChangeEvent) => {
    changeLanguageBy(event.target.value as string);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 130 }} size="small">
        <InputLabel
          id="select-label"
          className={styles.SelectLabel}
          sx={{ fontFamily: "CookieRun-Regular" }}
        >
          Language
        </InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
          sx={{ fontFamily: "CookieRun-Regular" }}
        >
          <MenuItem value={"KR"} sx={{ fontFamily: "CookieRun-Regular" }}>
            한국어
          </MenuItem>
          <MenuItem value={"CN"} sx={{ fontFamily: "CookieRun-Regular" }}>
            中文
          </MenuItem>
          <MenuItem value={"VI"} sx={{ fontFamily: "CookieRun-Regular" }}>
            Tiếng Việt
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLanguage;
