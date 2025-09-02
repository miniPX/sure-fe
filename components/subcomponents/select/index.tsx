import React, { PropsWithChildren, useState } from "react";
import {
  SelectButton,
  SelectContainer,
  SelectedOptionIcon,
  SelectIcon,
  SelectList,
  SelectOption,
} from "./style";

type CustomSelectProps = {
  selectOptions: string[];
  updateOption: (opt: string) => void;
};

export const CustomSelect = ({
  selectOptions,
  updateOption,
}: PropsWithChildren<CustomSelectProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [o, setOption] = useState<string>(selectOptions[0]);

  const openSelection = () => setIsOpen(true);
  const closeSelection = () => setIsOpen(false);

  const onOptionChange = (option: string) => {
    setOption(option);
    updateOption(option);
    closeSelection();
  };

  return (
    <SelectContainer>
      {!isOpen ? (
        <SelectButton onClick={() => openSelection()}>
          {o}
          <SelectIcon />
        </SelectButton>
      ) : (
        <SelectList>
          {selectOptions.map((opt, i) => (
            <SelectOption onClick={() => onOptionChange(opt)} key={i}>
              {o === opt && <SelectedOptionIcon />}
              {opt}
            </SelectOption>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
};
