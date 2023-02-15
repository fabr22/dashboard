import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
  width: 100%;
  height: calc(100vh - 90px);
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  height: 25px;
`;
