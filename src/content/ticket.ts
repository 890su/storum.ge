import type { Locale } from "../lib/locales";

export const ticketPaths: Record<Locale, string> = {
  ka: "/design-4/",
  en: "/en/design-4/",
  ru: "/ru/design-4/",
};

type TicketCopy = {
  title: string; subtitle: string; rateUnit: string; estimate: string; diagram: string; illustrative: string; imageAlt: string;
  handling: string; perPallet: string; storage: string; dimensions: string; meter: string;
  decrease: string; increase: string; exactQuote: string; menu: string; navigation: string; languages: string;
  quoteSummary: string; edit: string; more: string; invalid: string; skip: string;
};

export const ticketCopy: Record<Locale, TicketCopy> = {
  ka: {
    title: "საწყობი ბათუმში", subtitle: "ზედმეტი ფართის ქირის გარეშე", rateUnit: "პალეტ-ადგილი / დღე", estimate: "შენახვის გაანგარიშება",
    diagram: "პალეტ-ადგილის ზომები", illustrative: "პირობითი ილუსტრაცია — არა საწყობის გეგმა",
    imageAlt: "საწყობის ჭრილის ილუსტრაცია ოქროსფრად მონიშნული ერთი პალეტით.",
    handling: "სასაწყობე ოპერაციები", perPallet: "ერთ პალეტზე თითო ოპერაციისთვის",
    storage: "შენახვა", dimensions: "ევროპალეტი: 0,8 × 1,2 მ. ტვირთის მაქსიმალური სიმაღლე — 1,4 მ.", meter: "მ",
    decrease: "შემცირება", increase: "გაზრდა", exactQuote: "ზუსტი გაანგარიშების მიღება",
    menu: "მენიუ", navigation: "მთავარი მენიუ", languages: "გვერდის ენა", quoteSummary: "თქვენი გაანგარიშება",
    edit: "გაანგარიშების შეცვლა", more: "კომპანია და სხვა დეტალები", invalid: "შეამოწმეთ გაანგარიშების ველები.",
    skip: "შინაარსზე გადასვლა",
  },
  en: {
    title: "Pallet storage in Batumi", subtitle: "Only the space you need", rateUnit: "per pallet space / day", estimate: "Storage estimate",
    diagram: "One pallet space, measured", illustrative: "Illustration, not a plan of the warehouse",
    imageAlt: "Warehouse cutaway illustration with one pallet highlighted in gold.",
    handling: "Handling options", perPallet: "per pallet for each operation",
    storage: "Storage", dimensions: "Euro pallet: 0.8 × 1.2 m. Maximum loaded height: 1.4 m.", meter: "m",
    decrease: "Decrease", increase: "Increase", exactQuote: "Get an exact quote",
    menu: "Menu", navigation: "Main navigation", languages: "Page language", quoteSummary: "Your estimate",
    edit: "Edit estimate", more: "Company and other details", invalid: "Check the fields in your estimate.",
    skip: "Skip to content",
  },
  ru: {
    title: "Склад в Батуми", subtitle: "Без аренды лишних метров", rateUnit: "за паллето-место в сутки", estimate: "Расчёт хранения",
    diagram: "Одно паллето-место: размеры", illustrative: "Условная иллюстрация, не план склада",
    imageAlt: "Иллюстрация склада в разрезе: одна паллета выделена золотым цветом.",
    handling: "Складские операции", perPallet: "за паллету для каждой операции",
    storage: "Хранение", dimensions: "Европаллета: 0,8 × 1,2 м. Максимальная высота с грузом — 1,4 м.", meter: "м",
    decrease: "Уменьшить", increase: "Увеличить", exactQuote: "Получить точный расчёт",
    menu: "Меню", navigation: "Основное меню", languages: "Язык страницы", quoteSummary: "Ваш расчёт",
    edit: "Изменить расчёт", more: "Компания и другие детали", invalid: "Проверьте поля калькулятора.",
    skip: "Перейти к содержанию",
  },
};
