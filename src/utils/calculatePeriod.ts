import { ILanguage } from "../Context/LanguageContext";

export interface IPeriod {
  start: string;
  end: string;
}

const LITERALS = {
  EN: {
    years: (y: number) => (y > 1 ? "years and" : "year and"),
    months: (m: number) => (m > 1 ? "months" : "month"),
  },
  GR: {
    years: (y: number) => (y > 1 ? "χρόνια και" : "χρόνος και"),
    months: (m: number) => (m > 1 ? "μήνες" : "μήνας"),
  },
};

export const calculateMonths = (date: IPeriod, language: ILanguage) => {
  let start = date.start.split("/");
  let end = date.end.split("/");
  let years = 0;
  let months = 1;
  let startYear = Number(start[1]);
  let endYear = Number(end[1]);
  let startMonth = Number(start[0]);
  let endMonth = Number(end[0]);

  if (startYear !== endYear) {
    if (endYear - startYear > 1) {
      years += Math.abs(endYear - startYear);
    } else {
      months += Math.abs(startMonth - 12) + endMonth;
    }
  } else {
    months += Math.abs(endMonth - startMonth);
  }

  if (months >= 12 || years > 0) {
    years += Math.floor(months / 12);
    months = months % 12;
    return `(${years} ${LITERALS[language].years(years)} ${months} ${LITERALS[
      language
    ].months(months)})`;
  } else {
    return `(${months} ${LITERALS[language].months(months)})`;
  }
};
