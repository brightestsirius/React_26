import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function useQueryParams(paramName) {
  const params = useParams();
  const paramValue = params[paramName];

  const [searchParams] = useSearchParams();
  const searchParamsValue = searchParams.get(paramName);

  return paramValue ? paramValue : searchParamsValue;
}