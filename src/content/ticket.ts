import type { Locale } from "../lib/locales";

export const ticketPaths: Record<Locale, string> = {
  ka: "/design-4/",
  en: "/en/design-4/",
  ru: "/ru/design-4/",
};

type TicketCopy = {
  title: string; rateUnit: string; ticket: string; diagram: string; illustrative: string;
  volume: string; handling: string; perPallet: string; extras: string; storage: string;
  exactQuote: string; terms: string; menu: string; navigation: string; languages: string;
  quoteSummary: string; edit: string; more: string; invalid: string; skip: string;
};

export const ticketCopy: Record<Locale, TicketCopy> = {
  ka: {
    title: "პალეტების შენახვა ბათუმში", rateUnit: "პალეტ-ადგილი / დღე", ticket: "შენახვის გაანგარიშება",
    diagram: "ერთი პალეტ-ადგილი", illustrative: "პალეტ-ადგილის სქემა", volume: "მოცულობა და ვადა",
    handling: "დამატებითი ოპერაციები", perPallet: "ერთ პალეტზე", extras: "შეფუთვა და კომპლექტაცია",
    storage: "შენახვა", exactQuote: "ზუსტი გაანგარიშების მიღება", terms: "შენახვის პირობები",
    menu: "მენიუ", navigation: "მთავარი მენიუ", languages: "გვერდის ენა", quoteSummary: "თქვენი გაანგარიშება",
    edit: "გაანგარიშების შეცვლა", more: "კომპანია და სხვა დეტალები", invalid: "შეამოწმეთ გაანგარიშების ველები.",
    skip: "შინაარსზე გადასვლა",
  },
  en: {
    title: "Pallet storage in Batumi", rateUnit: "per pallet space / day", ticket: "Storage estimate",
    diagram: "One pallet space", illustrative: "Illustrative pallet layout", volume: "Volume and duration",
    handling: "Add handling if needed", perPallet: "per pallet", extras: "Wrapping and box picking",
    storage: "Storage", exactQuote: "Get an exact quote", terms: "Storage terms",
    menu: "Menu", navigation: "Main navigation", languages: "Page language", quoteSummary: "Your estimate",
    edit: "Edit estimate", more: "Company and other details", invalid: "Check the fields in your estimate.",
    skip: "Skip to content",
  },
  ru: {
    title: "Паллетное хранение в Батуми", rateUnit: "за паллето-место в сутки", ticket: "Расчёт хранения",
    diagram: "Одно паллето-место", illustrative: "Условная схема паллето-мест", volume: "Объём и срок",
    handling: "Операции по необходимости", perPallet: "за паллету", extras: "Обмотка и отбор коробов",
    storage: "Хранение", exactQuote: "Получить точный расчёт", terms: "Условия хранения",
    menu: "Меню", navigation: "Основное меню", languages: "Язык страницы", quoteSummary: "Ваш расчёт",
    edit: "Изменить расчёт", more: "Компания и другие детали", invalid: "Проверьте поля калькулятора.",
    skip: "Перейти к содержанию",
  },
};
