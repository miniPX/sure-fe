import React, { useState } from "react";
import {
  TradeTableContainer,
  TradeTableDropdownContainer,
  TradeTableHeader,
  TradeTableSelectLabel,
} from "./style";
import { CustomSelect } from "../select";

const TYPE_OPTIONS = ["all", "books", "ceramics", "paint", "print"];
const SORT_BY_OPTIONS = ["alphabetical", "chronological", "popular"];

export const TradeTable = () => {
  const setTypeOption = useState<string>(TYPE_OPTIONS[0])[1];
  const setSortByOption = useState<string>(SORT_BY_OPTIONS[0])[1];

  const updateTypeOption = (opt: string) => {
    setTypeOption(opt);
  };

  const updateSortOption = (sortOpt: string) => {
    setSortByOption(sortOpt);
  };

  return (
    <TradeTableContainer>
      <TradeTableHeader>
        <TradeTableDropdownContainer>
          <TradeTableSelectLabel>type</TradeTableSelectLabel>
          <CustomSelect
            selectOptions={TYPE_OPTIONS}
            updateOption={updateTypeOption}
          />
          <TradeTableSelectLabel>sort by</TradeTableSelectLabel>
          <CustomSelect
            selectOptions={SORT_BY_OPTIONS}
            updateOption={updateSortOption}
          />
        </TradeTableDropdownContainer>
      </TradeTableHeader>
    </TradeTableContainer>
  );
};
