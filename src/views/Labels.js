import styled from "styled-components";
import { Colors } from "./design/Colors";

// Title of all the pages like Home, Brofile, MyGroups etc.
export const PageTitle = styled.h1`
  color: #4F4F4F;
  font-size: 50px;
  margin-top: -10%;
  margin-bottom: 2%;
  margin-left: 1.3%;
  text-transform: uppercase;
`;

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  color: white;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding: 0px;     
`;

export const DateLabel = styled.label`
  margin-top: 10px;
  font-size: 12px;
  color: white;  
`;

export const DateLabelHome = styled.label`
  margin-top: 10px;
  font-size: 16px;
  text-transform: uppercase;
  color: white;  
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 2%;
  height: 35px;
  width: 90%;
  border: none;
  background: ${Colors.LIGHT_GREY};
  border-radius: 20px;
`;

export const InputArea = styled.textarea`
  resize:none;
  padding: 10px;
  height: 90px;
  margin-bottom: 10px;
  width: 90%;
  border: none;
  background: ${Colors.LIGHT_GREY};
  border-radius: 20px;
`;

export const InputFieldPopUp = styled.input`
  &::placeholder {
    color: ${Colors.COLOR13};
  }
  padding: 3%;
  height: 35px;
  margin-top: 30px;
  margin-left: 40px;
  width: 80%;
  border: none;
  background: ${Colors.LIGHT_GREY};
  border-radius: 20px;
`;

export const TextField1 = styled.label`
  color: black;
  text-transform: uppercase;
  float: left;
  height: 55px;
  margin-left: -50%;
  display: flex;
  align-items: center;
`;

export const BlueLabel = styled.label`
  margin-bottom: 2%;
  text-transform: uppercase;
  line-height:220%;
  color: ${Colors.COLOR14};
  font-size: 28px;
`;

export const SmallLabel = styled.label`
  place-self: center;
  text-transform: uppercase;
  color: orange;
  font-size: 20px;
`;