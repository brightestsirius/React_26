import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function useParam(paramName) {
  const params = useParams();
  const paramValue = params[paramName];

  const [serachParams] = useSearchParams();
  const serachParamsValue = serachParams.get(paramName);

  return paramValue ? paramValue : serachParamsValue;
}