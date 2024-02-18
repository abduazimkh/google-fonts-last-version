
import React from "react";

export type Children = {
  children: React.ReactNode;
};

export type InitialStateType = {
  fonts_data: [] | any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: null | string,
  input_value?: string,
  search_select?: string,
};

export type FontsTypes = {
  category: string,
  family: string,
  files: object | any,
  kind: string,
  lastModified: string | number,
  menu: string,
  subsets: string[],
  variants: string[],
  version: string
}


