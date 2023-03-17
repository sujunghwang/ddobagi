import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LanguageIcon from "@mui/icons-material/Language";
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
        <InputLabel id="select-label" className={styles.SelectLabel}>
          <LanguageIcon />
          Language
        </InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={"KR"}>한국어</MenuItem>
          <MenuItem value={"CN"}>中文</MenuItem>
          <MenuItem value={"VI"}>Tiếng Việt</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLanguage;
