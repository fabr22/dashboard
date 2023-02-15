import Title from "../../components/title/title";
import Button from "../../components/button/button";

import {
  SettingsWrapper,
  FormWrapper,
  LabelGroup,
  Label,
  Input,
} from "./styles";
import { getItem, setItem } from "../../utils/localStorage";
import { useEffect, useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState();

  useEffect(() => {
    const settings = getItem("user-settings");
    if (settings) {
      setSettings(settings);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDate = new FormData(event.target);
    const userSettings = {};
    for (const pair of formDate.entries()) {
      if (pair[0] === "image") {
      }
      userSettings[pair[0]] = pair[1];
    }
    setItem("user-settings", userSettings);
  };

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <FormWrapper onSubmit={handleSubmit} id="settings">
        <LabelGroup>
          <Label>Birthday</Label>
          <Input
            type="date"
            name="birthday"
            defaultValue={settings?.birthday}
          />
        </LabelGroup>

        <LabelGroup>
          <Label>Company name</Label>
          <Input name="company_name" defaultValue={settings?.company_name} />
        </LabelGroup>

        <LabelGroup>
          <Label>Add image</Label>
          <input type="file" name="image" />
        </LabelGroup>

        <Button type="submit"> Save </Button>
      </FormWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
