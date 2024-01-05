import { ILanguage } from "../Context/LanguageContext";

export interface IPeriod {
  start: string;
  end: string;
}

const LITERALS = {
  EN: {
    years: (y: number) => (y > 1 ? "years" : "year"),
    months: (m: number) => (m > 0 ? (m > 1 ? "months" : "month") : ""),
    and: " and ",
  },
  GR: {
    years: (y: number) => (y > 1 ? "χρόνια" : "χρόνος"),
    months: (m: number) => (m > 0 ? (m > 1 ? "μήνες" : "μήνα") : ""),
    and: " και ",
  },
};

export const calculateMonths = (date: IPeriod, language: ILanguage) => {
  let start = date.start.split("/");
  let end = date.end.split("/");
  let years = 0;
  let months = 0;
  let startYear = Number(start[1]);
  let endYear = Number(end[1]);
  let startMonth = Number(start[0]);
  let endMonth = Number(end[0]);

  if (endMonth < startMonth) {
    endYear -= 1;
    endMonth += 12;
  }

  years = endYear - startYear;
  months = endMonth - startMonth;

  if (years > 0) {
    return `(${years} ${LITERALS[language].years(years)}${
      years > 0 && months > 0 ? LITERALS[language].and : ""
    }${months > 0 ? ` ${months} ${LITERALS[language].months(months)}` : ""})`;
  } else {
    return `(${months} ${LITERALS[language].months(months)})`;
  }
};
