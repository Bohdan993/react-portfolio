import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Button, useTheme } from "@material-ui/core";

import './LanguageSelect.scss';

const languageMap = {
  en: { label: "EN", dir: "ltr", active: true },
  uk: { label: "УКР", dir: "ltr", active: false },
};



const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();
  const theme = useTheme();

  console.log(theme);

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

  return (

      <div className="d-flex justify-content-end align-items-center language-select-root">
        <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)} disableRipple>
          {languageMap[selected].label}
          <ArrowDropDown fontSize="small" />
        </Button>
        <Popover
          open={!!menuAnchor}
          anchorEl={menuAnchor}
          onClose={() => setMenuAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <div>
            <List>
              <ListSubheader>{t("select_language")}</ListSubheader>
              {Object.keys(languageMap)?.map(item => (
                <ListItem
                  className="language-list-item"
                  button
                  key={item}
                  onClick={() => {
                    console.log(item);
                    i18next.changeLanguage(item);
                    setMenuAnchor(null);
                  }}
                  disableRipple
                >
                  <span>
                    {languageMap[item].label}
                  </span>
                </ListItem>
              ))}
            </List>
          </div>
        </Popover>
      </div>
  );
};

export default LanguageSelect;
