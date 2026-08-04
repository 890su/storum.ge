import type { Locale } from "../lib/locales";

type Item = { title: string; text: string };
type Service = { name: string; detail: string; price: string };
type Faq = { question: string; answer: string };

export type SiteContent = {
  localeName: string;
  meta: { title: string; description: string };
  nav: { services: string; pricing: string; process: string; faq: string; cta: string };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    diagramLabel: string;
    perDay: string;
    standardPallet: string;
  };
  proofs: string[];
  audience: { eyebrow: string; title: string; text: string; items: Item[] };
  services: { eyebrow: string; title: string; text: string; items: Service[] };
  calculator: {
    eyebrow: string;
    title: string;
    text: string;
    pallets: string;
    days: string;
    inbound: string;
    outbound: string;
    stretch: string;
    boxes: string;
    result: string;
    note: string;
    cta: string;
  };
  process: { eyebrow: string; title: string; items: Item[] };
  privateClients: { label: string; title: string; text: string; cta: string };
  faq: { eyebrow: string; title: string; items: Faq[] };
  lead: {
    eyebrow: string;
    title: string;
    text: string;
    name: string;
    company: string;
    contact: string;
    product: string;
    pallets: string;
    comment: string;
    consentPrefix: string;
    consentLink: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    required: string;
  };
  footer: { text: string; location: string; privacy: string };
};

export const content: Record<Locale, SiteContent> = {
  ka: {
    localeName: "ქართული",
    meta: {
      title: "პალეტების შენახვა ბათუმში | Storum",
      description:
        "პალეტური შენახვა და სასაწყობე მომსახურება ბათუმში. გადაიხადეთ მხოლოდ დაკავებული ადგილისა და საჭირო ოპერაციებისთვის.",
    },
    nav: {
      services: "სერვისები",
      pricing: "ტარიფები",
      process: "როგორ ვმუშაობთ",
      faq: "კითხვები",
      cta: "ღირებულების გამოთვლა",
    },
    hero: {
      eyebrow: "პალეტური შენახვა · ბათუმი",
      title: "საწყობი ბათუმში ზედმეტი ფართის ქირის გარეშე",
      text:
        "გადაიხადეთ მხოლოდ დაკავებული პალეტ-ადგილისთვის. მიღება, გაცემა, დახარისხება და შეფუთვა — მხოლოდ საჭიროების მიხედვით.",
      primaryCta: "ღირებულების გამოთვლა",
      secondaryCta: "საწყობის ნახვა",
      diagramLabel: "თქვენი ადგილი საწყობში",
      perDay: "დღეში",
      standardPallet: "ევროპალეტი · მაქს. სიმაღლე 1.4 მ",
    },
    proofs: [
      "მშრალი სივრცე",
      "დაცვა და ვიდეომონიტორინგი",
      "სატვირთო ტრანსპორტის მისასვლელი",
      "გამჭვირვალე ტარიფები",
    ],
    audience: {
      eyebrow: "ბიზნესისთვის",
      title: "როცა საკუთარი საწყობი ჯერ არ გჭირდებათ — ან უკვე აღარ გყოფნით",
      text: "Storum გამოდგება მცირე, სეზონური და რეგულარული პარტიებისთვის.",
      items: [
        {
          title: "იმპორტიორები და დისტრიბუტორები",
          text: "განათავსეთ ახალი პარტია ბათუმში და მოემსახურეთ აჭარის კლიენტებს ადგილობრივი მარაგიდან.",
        },
        {
          title: "ონლაინ მაღაზიები",
          text: "გაიტანეთ მარაგი სახლიდან ან სავაჭრო სივრციდან და შეუკვეთეთ ყუთების კომპლექტაცია.",
        },
        {
          title: "HoReCa-ს მომწოდებლები",
          text: "შეინახეთ სეზონური მარაგი სასტუმროებთან და რესტორნებთან ახლოს.",
        },
        {
          title: "ადგილობრივი ბრენდები",
          text: "შეინახეთ მზა პროდუქცია, შეფუთვა და მასალები მუდმივი საწყობის დაქირავების გარეშე.",
        },
      ],
    },
    services: {
      eyebrow: "სერვისები და ფასები",
      title: "ერთი ადგილი შენახვისა და დამუშავებისთვის",
      text: "საბაზო ტარიფები საჯაროა. არასტანდარტულ ტვირთს წინასწარ ვათანხმებთ.",
      items: [
        { name: "პალეტური შენახვა", detail: "0.8 × 1.2 მ, სიმაღლე 1.4 მ-მდე", price: "0.86 ₾ / დღე" },
        { name: "მექანიზებული მიღება ან გაცემა", detail: "ავტოდამტვირთველი ან რიჩტრაკი", price: "3.97 ₾ / პალეტი" },
        { name: "კონსოლიდაცია", detail: "ტვირთის პალეტზე მომზადება", price: "6.62 ₾ / პალეტი" },
        { name: "დახარისხება", detail: "პარტიების, შეკვეთების ან არტიკულების მიხედვით", price: "7.95 ₾ / პალეტი" },
        { name: "სტრეჩ-ფირით შეფუთვა", detail: "ტრანსპორტირებისთვის მომზადება", price: "2.32 ₾ / პალეტი" },
        { name: "ყუთების კომპლექტაცია", detail: "შეკვეთის მიხედვით შერჩევა", price: "0.26 ₾ / ყუთი" },
      ],
    },
    calculator: {
      eyebrow: "სწრაფი გაანგარიშება",
      title: "ნახეთ სავარაუდო ღირებულება",
      text: "შეავსეთ მოცულობა და ვადა. საბოლოო ფასი დადასტურდება ტვირთის მონაცემების შემოწმების შემდეგ.",
      pallets: "პალეტების რაოდენობა",
      days: "შენახვის დღეები",
      inbound: "მიღება",
      outbound: "გაცემა",
      stretch: "შესაფუთი პალეტები",
      boxes: "შესაკრები ყუთები",
      result: "სავარაუდო ჯამი",
      note: "გაანგარიშება არ მოიცავს არასტანდარტულ და ინდივიდუალურად შეფასებულ სამუშაოებს.",
      cta: "ზუსტი გაანგარიშების მიღება",
    },
    process: {
      eyebrow: "პროცესი",
      title: "ტვირთიდან გაცემამდე — ოთხი ნაბიჯი",
      items: [
        { title: "მოგვწერეთ მონაცემები", text: "ტვირთის ტიპი, პალეტების რაოდენობა, ზომა, წონა და ჩამოსვლის თარიღი." },
        { title: "ვადასტურებთ პირობებს", text: "ვამოწმებთ განთავსების შესაძლებლობას და ვითვლით ღირებულებას." },
        { title: "ვიღებთ და ვათავსებთ", text: "ტვირთს ვითვლით, ვანიჭებთ ადგილს და ვაფიქსირებთ მოძრაობას." },
        { title: "ვამზადებთ გასაცემად", text: "თქვენი მოთხოვნით ვახარისხებთ, ვფუთავთ ან ვაკომპლექტებთ." },
      ],
    },
    privateClients: {
      label: "კერძო პირებისთვის",
      title: "გჭირდებათ ნივთების ან მცირე პარტიის დროებით შენახვა?",
      text: "შესაძლებელია პალეტზე უსაფრთხოდ შეფუთული ნივთების განთავსება. პირობები დამოკიდებულია შემადგენლობაზე, ზომასა და ვადაზე.",
      cta: "შენახვის შესაძლებლობის დაზუსტება",
    },
    faq: {
      eyebrow: "ხშირი კითხვები",
      title: "რაც უნდა იცოდეთ განთავსებამდე",
      items: [
        { question: "რა ზომის პალეტს იღებთ?", answer: "საბაზო ტარიფი ვრცელდება 0.8 × 1.2 მ ევროპალეტზე, მაქსიმალური სიმაღლით 1.4 მ. სხვა ზომები წინასწარ თანხმდება." },
        { question: "შეიძლება რამდენიმე პალეტის შენახვა?", answer: "დიახ. მომსახურება განკუთვნილია მცირე და მზარდი პარტიებისთვისაც. საბოლოო პირობები დამოკიდებულია ხელმისაწვდომ ადგილსა და ტვირთზე." },
        { question: "რომელ საქონელს არ იღებთ?", answer: "საშიში, აალებადი, აკრძალული, მალფუჭებადი და სპეციალურ ტემპერატურას საჭირო საქონელი მიიღება მხოლოდ ცალკე დადასტურების შემთხვევაში ან საერთოდ არ მიიღება." },
        { question: "როგორ ითვლება ფასი?", answer: "შენახვა ითვლება პალეტ-ადგილისა და დღეების მიხედვით. მიღება, გაცემა, დახარისხება, შეფუთვა და კომპლექტაცია ცალკე ემატება." },
        { question: "შეიძლება საწყობის ნახვა?", answer: "დიახ. ფორმაში მიუთითეთ, რომ გსურთ დათვალიერება, და ვიზიტის დროს წინასწარ შევათანხმებთ." },
      ],
    },
    lead: {
      eyebrow: "თქვენი პარტია",
      title: "მიიღეთ ზუსტი გაანგარიშება",
      text: "მიუთითეთ მინიმალური ინფორმაცია. შევამოწმებთ განთავსების შესაძლებლობას და დაგიკავშირდებით.",
      name: "სახელი",
      company: "კომპანია (არასავალდებულო)",
      contact: "ტელეფონი ან მესენჯერი",
      product: "რა ტვირთია?",
      pallets: "პალეტების რაოდენობა",
      comment: "თარიღი, ვადა ან დამატებითი ინფორმაცია",
      consentPrefix: "ვეთანხმები მონაცემების გამოყენებას განაცხადზე პასუხისთვის და წავიკითხე",
      consentLink: "კონფიდენციალურობის პირობები",
      submit: "გაანგარიშების მოთხოვნა",
      submitting: "იგზავნება…",
      success: "განაცხადი მიღებულია. დაგიკავშირდებით მითითებულ კონტაქტზე.",
      error: "განაცხადი ვერ გაიგზავნა. შეამოწმეთ კავშირი და სცადეთ ხელახლა.",
      required: "შეავსეთ სავალდებულო ველები.",
    },
    footer: {
      text: "პალეტური შენახვა და სასაწყობე მომსახურება ბიზნესისთვის.",
      location: "ბათუმი, საქართველო",
      privacy: "კონფიდენციალურობა",
    },
  },
  en: {
    localeName: "English",
    meta: {
      title: "Pallet storage in Batumi | Storum",
      description:
        "Flexible pallet storage and warehouse services in Batumi. Pay for occupied pallet spaces and the handling operations you use.",
    },
    nav: { services: "Services", pricing: "Pricing", process: "How it works", faq: "FAQ", cta: "Get a quote" },
    hero: {
      eyebrow: "Pallet storage · Batumi",
      title: "Warehouse space in Batumi without renting more than you need",
      text: "Pay only for occupied pallet spaces. Add receiving, dispatch, sorting and packing when your shipment needs them.",
      primaryCta: "Calculate the cost",
      secondaryCta: "Arrange a warehouse visit",
      diagramLabel: "Your space in the warehouse",
      perDay: "per day",
      standardPallet: "Euro pallet · max. height 1.4 m",
    },
    proofs: ["Dry premises", "Security and CCTV", "Truck access", "Transparent rates"],
    audience: {
      eyebrow: "Built for business",
      title: "When you do not need your own warehouse — or have already outgrown it",
      text: "Storum works for small, seasonal and recurring shipments.",
      items: [
        { title: "Importers and distributors", text: "Place incoming stock in Batumi and serve customers across Adjara from a local inventory." },
        { title: "Online retailers", text: "Move stock out of your home or shop and add box picking when orders arrive." },
        { title: "HoReCa suppliers", text: "Keep seasonal supplies close to hotels and restaurants in Batumi." },
        { title: "Local brands", text: "Store finished goods, packaging and materials without committing to a full warehouse." },
      ],
    },
    services: {
      eyebrow: "Services and rates",
      title: "Storage and handling in one place",
      text: "Core rates are public. Non-standard cargo is confirmed before arrival.",
      items: [
        { name: "Pallet storage", detail: "0.8 × 1.2 m, height up to 1.4 m", price: "0.86 GEL / day" },
        { name: "Mechanical receiving or dispatch", detail: "Forklift or reach truck", price: "3.97 GEL / pallet" },
        { name: "Consolidation", detail: "Preparing goods on a pallet", price: "6.62 GEL / pallet" },
        { name: "Sorting", detail: "By batch, order or SKU", price: "7.95 GEL / pallet" },
        { name: "Stretch wrapping", detail: "Preparing a pallet for transport", price: "2.32 GEL / pallet" },
        { name: "Box picking", detail: "Picking boxes to your order", price: "0.26 GEL / box" },
      ],
    },
    calculator: {
      eyebrow: "Quick estimate",
      title: "See an indicative cost",
      text: "Enter the volume and storage period. We confirm the final price after checking the cargo details.",
      pallets: "Number of pallets",
      days: "Storage days",
      inbound: "Receiving",
      outbound: "Dispatch",
      stretch: "Pallets to wrap",
      boxes: "Boxes to pick",
      result: "Estimated total",
      note: "The estimate excludes non-standard cargo and individually quoted work.",
      cta: "Get an exact quote",
    },
    process: {
      eyebrow: "Process",
      title: "From arrival to dispatch in four steps",
      items: [
        { title: "Send the shipment details", text: "Cargo type, pallet count, dimensions, weight and expected arrival date." },
        { title: "We confirm the terms", text: "We check available capacity and provide a clear calculation." },
        { title: "We receive and place it", text: "The shipment is counted, assigned a location and recorded." },
        { title: "We prepare it for dispatch", text: "On request, we sort, wrap or pick the required goods." },
      ],
    },
    privateClients: {
      label: "For private customers",
      title: "Need temporary storage for belongings or a small shipment?",
      text: "We may accept securely palletised items. Availability depends on the contents, size and storage period.",
      cta: "Check storage availability",
    },
    faq: {
      eyebrow: "FAQ",
      title: "What to know before arrival",
      items: [
        { question: "What pallet size do you accept?", answer: "The standard rate covers a 0.8 × 1.2 m Euro pallet up to 1.4 m high. Other dimensions require prior confirmation." },
        { question: "Can I store only a few pallets?", answer: "Yes. The service is designed for small and growing shipments too. Final availability depends on the cargo and free capacity." },
        { question: "Which goods are not accepted?", answer: "Dangerous, flammable, prohibited, perishable and temperature-controlled goods are not accepted without specific prior approval." },
        { question: "How is the price calculated?", answer: "Storage is based on pallet spaces and days. Receiving, dispatch, sorting, wrapping and picking are added as required." },
        { question: "Can I visit the warehouse?", answer: "Yes. Mention the visit in the form and we will agree a suitable time in advance." },
      ],
    },
    lead: {
      eyebrow: "Your shipment",
      title: "Get an exact quote",
      text: "Share the essentials. We will check the cargo and available capacity, then contact you.",
      name: "Name",
      company: "Company (optional)",
      contact: "Phone or messenger",
      product: "What is the cargo?",
      pallets: "Number of pallets",
      comment: "Arrival date, period or other details",
      consentPrefix: "I agree to the use of my data to answer this request and have read the",
      consentLink: "privacy notice",
      submit: "Request a quote",
      submitting: "Sending…",
      success: "Request received. We will contact you using the details provided.",
      error: "The request could not be sent. Check your connection and try again.",
      required: "Complete the required fields.",
    },
    footer: { text: "Pallet storage and warehouse services for business.", location: "Batumi, Georgia", privacy: "Privacy" },
  },
  ru: {
    localeName: "Русский",
    meta: {
      title: "Паллетное хранение в Батуми | Storum",
      description:
        "Гибкое паллетное хранение и складская обработка в Батуми. Оплачивайте занятые места и только необходимые операции.",
    },
    nav: { services: "Услуги", pricing: "Тарифы", process: "Как работаем", faq: "Вопросы", cta: "Получить расчет" },
    hero: {
      eyebrow: "Паллетное хранение · Батуми",
      title: "Склад в Батуми без аренды лишних метров",
      text: "Платите только за занятые паллето-места. Приемка, отгрузка, сортировка и упаковка подключаются по необходимости.",
      primaryCta: "Рассчитать стоимость",
      secondaryCta: "Записаться на осмотр",
      diagramLabel: "Ваше место на складе",
      perDay: "в сутки",
      standardPallet: "Европаллета · высота до 1,4 м",
    },
    proofs: ["Сухое помещение", "Охрана и видеонаблюдение", "Грузовой подъезд", "Прозрачные тарифы"],
    audience: {
      eyebrow: "Для бизнеса",
      title: "Когда свой склад еще не нужен — или его уже не хватает",
      text: "Storum подходит для небольших, сезонных и регулярных партий.",
      items: [
        { title: "Импортеры и дистрибьюторы", text: "Размещайте новые партии в Батуми и обслуживайте клиентов Аджарии из локального запаса." },
        { title: "Интернет-магазины", text: "Освободите квартиру или торговую площадь и подключайте коробочную комплектацию заказов." },
        { title: "Поставщики HoReCa", text: "Храните сезонный запас рядом с гостиницами и ресторанами Батуми." },
        { title: "Локальные бренды", text: "Размещайте готовую продукцию, упаковку и материалы без постоянной аренды склада." },
      ],
    },
    services: {
      eyebrow: "Услуги и цены",
      title: "Хранение и обработка в одном месте",
      text: "Базовые тарифы открыты. Нестандартный груз согласуем до прибытия.",
      items: [
        { name: "Паллетное хранение", detail: "0,8 × 1,2 м, высота до 1,4 м", price: "0,86 GEL / сутки" },
        { name: "Механизированная приемка или отгрузка", detail: "Погрузчик или ричтрак", price: "3,97 GEL / паллета" },
        { name: "Консолидация", detail: "Подготовка товара на паллете", price: "6,62 GEL / паллета" },
        { name: "Сортировка", detail: "По партиям, заказам или артикулам", price: "7,95 GEL / паллета" },
        { name: "Стрейч-обмотка", detail: "Подготовка паллеты к перевозке", price: "2,32 GEL / паллета" },
        { name: "Комплектация коробов", detail: "Отбор по вашей заявке", price: "0,26 GEL / короб" },
      ],
    },
    calculator: {
      eyebrow: "Быстрый расчет",
      title: "Узнайте ориентировочную стоимость",
      text: "Укажите объем и срок. Окончательную цену подтвердим после проверки характеристик груза.",
      pallets: "Количество паллет",
      days: "Дней хранения",
      inbound: "Приемка",
      outbound: "Отгрузка",
      stretch: "Паллет для обмотки",
      boxes: "Коробов для отбора",
      result: "Ориентировочная сумма",
      note: "Расчет не включает нестандартные грузы и работы с индивидуальной оценкой.",
      cta: "Получить точный расчет",
    },
    process: {
      eyebrow: "Процесс",
      title: "От поставки до отгрузки — четыре шага",
      items: [
        { title: "Отправьте параметры", text: "Вид товара, число паллет, размеры, вес и ожидаемую дату прибытия." },
        { title: "Подтвердим условия", text: "Проверим свободное место и предоставим понятный расчет." },
        { title: "Примем и разместим", text: "Пересчитаем груз, назначим место и зафиксируем движение." },
        { title: "Подготовим к выдаче", text: "По заявке отсортируем, упакуем или соберем нужный товар." },
      ],
    },
    privateClients: {
      label: "Для частных клиентов",
      title: "Нужно временно хранить вещи или небольшую партию?",
      text: "Можем принять надежно упакованные на паллете вещи. Возможность зависит от состава, размера и срока хранения.",
      cta: "Уточнить возможность хранения",
    },
    faq: {
      eyebrow: "Частые вопросы",
      title: "Что важно знать до размещения",
      items: [
        { question: "Паллеты какого размера вы принимаете?", answer: "Базовый тариф действует для европаллеты 0,8 × 1,2 м высотой до 1,4 м. Другие размеры необходимо согласовать заранее." },
        { question: "Можно хранить всего несколько паллет?", answer: "Да. Сервис рассчитан в том числе на небольшие и растущие партии. Возможность зависит от свободного места и характеристик груза." },
        { question: "Какие товары вы не принимаете?", answer: "Опасные, легковоспламеняющиеся, запрещенные, скоропортящиеся и температурные товары не принимаются без отдельного предварительного согласования." },
        { question: "Как рассчитывается цена?", answer: "Хранение считается по паллето-местам и дням. Приемка, отгрузка, сортировка, упаковка и комплектация добавляются по необходимости." },
        { question: "Можно посмотреть склад?", answer: "Да. Укажите это в форме, и мы заранее согласуем подходящее время визита." },
      ],
    },
    lead: {
      eyebrow: "Ваша партия",
      title: "Получите точный расчет",
      text: "Укажите основное. Мы проверим груз и свободное место, затем свяжемся с вами.",
      name: "Имя",
      company: "Компания (необязательно)",
      contact: "Телефон или мессенджер",
      product: "Что за товар?",
      pallets: "Количество паллет",
      comment: "Дата, срок или другие детали",
      consentPrefix: "Согласен на использование данных для ответа на заявку и прочитал",
      consentLink: "условия конфиденциальности",
      submit: "Запросить расчет",
      submitting: "Отправляем…",
      success: "Заявка получена. Свяжемся по указанному контакту.",
      error: "Не удалось отправить заявку. Проверьте соединение и попробуйте еще раз.",
      required: "Заполните обязательные поля.",
    },
    footer: { text: "Паллетное хранение и складские услуги для бизнеса.", location: "Батуми, Грузия", privacy: "Конфиденциальность" },
  },
};
