# Полная инструкция для обновления сайта

**Проект:** ekrayneva.space  
**Версия:** 1.0  
**Дата:** 2 августа 2026  
**Язык интерфейса сайта:** English

## 1. Общая задача

Обновить существующий профессиональный сайт без полного редизайна. Сохранить текущую визуальную систему, типографику, цветовую палитру и общий характер интерфейса, если они не мешают выполнению требований ниже.

Главная цель обновления — сделать позиционирование понятным, сократить перегруженность главной страницы, создать правильную архитектуру проектов, уточнить профессиональный опыт, добавить подтверждение навыков через проекты и улучшить основные действия пользователя.

Не добавлять новые достижения, навыки, метрики, клиентов, инструменты или результаты, которых нет в этой инструкции.

---

## 2. Карта сайта и навигация

### Обязательные маршруты

- `/` — homepage.
- `/projects` — страница всех проектов.
- `/projects/ai-startup-strategy` — отдельная страница AI startup project.
- `/projects/digify-active` — отдельная страница Digify Active.
- `/projects/oblicuo-customer-strategy` — отдельная страница Oblicuo.

### Верхняя навигация

Сохранить текущую навигационную систему, но привести ссылки к следующей логике:

- Projects → `/projects`
- Experience → `/#experience`
- Skills → `/#skills`
- Education → `/#education`
- Contact → `/#contact`

Не добавлять крупную отдельную кнопку AI-бота в меню. Бот доступен через постоянный фиксированный элемент в правом нижнем углу.

---

## 3. Homepage: Hero

### Главный заголовок

Использовать без изменений:

`Marketing & Business Analytics | Strategy`

### Подзаголовок

Использовать без изменений:

`I combine professional experience in people analytics and process improvement with applied projects in marketing analytics, customer research, and market strategy. I turn data and research into clear recommendations, dashboards, and action plans.`

### Что не должно присутствовать в hero

- Barcelona или другое местоположение.
- Формулировки о поиске internship.
- Формулировки о шестимесячной стажировке.
- Формулировки о поиске junior role.
- Open to Opportunities.
- Open to Internships.

### CTA-кнопки

Порядок и приоритет:

1. **Contact Me** — primary CTA.
2. **View Projects** — secondary CTA.
3. **Download CV** — tertiary CTA.

#### Contact Me

- По клику плавно прокручивает homepage к `#contact`.
- Не открывает email-клиент напрямую.
- После прокрутки контактный блок должен получать логический focus для keyboard users без визуального скачка страницы.

#### View Projects

- Ведёт на `/projects`.

#### Download CV

- Не скачивает файл сразу.
- Открывает компактный modal/dropdown выбора языка.
- Заголовок: `Choose CV language`.
- Варианты:
  - `English`
  - `Español`
  - `Русский`
- После выбора запускается скачивание соответствующего файла:
  - English → `/assets/cv/Elena_Krayneva_CV_EN.pdf`
  - Español → `/assets/cv/Elena_Krayneva_CV_ES.pdf`
  - Русский → `/assets/cv/Elena_Krayneva_CV_RU.pdf`
- Использовать download filenames:
  - `Elena_Krayneva_CV_EN.pdf`
  - `Elena_Krayneva_CV_ES.pdf`
  - `Elena_Krayneva_CV_RU.pdf`
- Modal закрывается по Escape, клику вне окна и кнопке close.
- Все варианты доступны с клавиатуры.

---

## 4. Homepage: Featured Projects

На homepage показывать только два featured projects:

1. AI Startup — Strategic Market Consulting.
2. Digify Active — B2B Growth & Marketing Analytics.

Не показывать здесь Oblicuo и другие проекты.

Карточки должны быть короткими. Не использовать accordion или длинные раскрывающиеся описания на homepage.

### Карточка 1: AI Startup

**Title:**  
`AI Startup — Strategic Market Consulting`

**Project type:**  
`Academic consulting project`

**Description:**  
`Academic consulting project completed for an early-stage AI company developing automated image-processing and synthetic-data solutions. The task was to compare potential industry verticals and recommend the strongest direction for differentiation and scalable growth.`

**Link label:**  
`View more`

**Destination:**  
`/projects/ai-startup-strategy`

### Карточка 2: Digify Active

**Title:**  
`Digify Active — B2B Growth & Marketing Analytics`

**Project type:**  
`Applied academic project`

**Description:**  
`Applied academic project focused on developing a B2B marketing concept for SME fitness businesses. The task was to build and test an acquisition funnel connecting positioning, landing pages, paid campaigns, and conversion analysis.`

**Link label:**  
`View more`

**Destination:**  
`/projects/digify-active`

### Общая ссылка

После двух карточек разместить:

**Label:** `View All Projects`  
**Destination:** `/projects`

### Удалить с homepage projects section

- длинные project descriptions;
- accordion/expand details;
- этапы проекта;
- полный список tools;
- подробные results;
- большое количество KPI;
- Oblicuo и другие не-featured проекты;
- формулировку `Client: SME fitness businesses`.

---

## 5. Страница `/projects`

### Заголовок

`Projects`

### Подзаголовок

`Selected projects in marketing analytics, strategy, customer research, and business analysis.`

### Проекты

Показывать только три карточки:

1. AI Startup — Strategic Market Consulting.
2. Digify Active — B2B Growth & Marketing Analytics.
3. Oblicuo Hi-Fi Bar — Customer Research & Social Strategy.

Не добавлять R, Python, Airbnb, TripAdvisor, Orange Juice или другие проекты на этом этапе.

### AI Startup card

- **Project type:** `Academic consulting project`
- **Description:** `Compared potential industry verticals for an early-stage AI company and developed a strategic recommendation based on market attractiveness, competitive differentiation, adoption barriers, and implementation feasibility.`
- **Tags:** Market Research; Competitive Analysis; Market Prioritisation; Strategic Positioning; Go-to-Market Strategy.
- **CTA:** `View Case`
- **Route:** `/projects/ai-startup-strategy`

### Digify Active card

- **Project type:** `Applied academic project`
- **Description:** `Developed and tested a B2B acquisition funnel for SME fitness businesses, connecting positioning, HubSpot landing pages, Google Ads, and conversion performance analysis.`
- **Context line:** `Target market: SME fitness businesses`
- **Tags:** Funnel Analysis; Google Ads; HubSpot; Marketing Analytics; B2B Strategy.
- **CTA:** `View Case`
- **Route:** `/projects/digify-active`

Не использовать `Client: SME fitness businesses`.

### Oblicuo card

- **Project type:** `Applied academic project`
- **Description:** `Conducted customer research for a Barcelona hi-fi bar to understand barriers to weekday visits and translate customer insights into a measurable growth and communication strategy.`
- **Tags:** Customer Research; Qualitative Interviews; Segmentation; Customer Journey; KPI Framework.
- **CTA:** `View Case`
- **Route:** `/projects/oblicuo-customer-strategy`

Barcelona допустима здесь только как контекст проекта Oblicuo. Не переносить её в homepage hero.

---

## 6. Отдельные project pages

На этом этапе создать маршруты и страницы-болванки, а не придумывать полные кейсы.

### Общие правила для всех трёх страниц

Публично показать только:

- Back to All Projects;
- title;
- project type;
- approved short summary;
- approved business question;
- section headings;
- один нейтральный статус `Case study in development`, если без него страница выглядит сломанной.

Внутри кода создать пустые section containers и developer comments `TODO: content to be supplied by Elena`.

Не использовать Lorem ipsum. Не генерировать недостающие результаты, графики, метрики или тексты.

Если пустые секции визуально портят страницу, скрыть их до наполнения, но сохранить готовую компонентную структуру в коде.

Полная структура каждой страницы приведена в `project_specs/`.

---

## 7. Professional Experience

Обновить только два основных блока опыта по точному тексту ниже. Другие записи опыта не переписывать и не расширять без отдельного задания.

### X5 Digital

**Role title:**  
`HRBP Assistant — People Analytics & Reporting`

**Company context:**  
`Digital division of X5 Group, Russia’s largest food retailer.`

**Dates:**  
`Feb 2025 – Jul 2025`

**Bullets:**

- `Analysed workforce data across 500+ employee records, including headcount, onboarding, attrition, and leave.`
- `Built KPI-based reports, dashboards, and presentations for HR leadership and management decision-making.`
- `Processed 150+ manager inputs for talent review and succession planning, improving data completeness and supporting insight generation.`
- `Coordinated recurring reporting and data requests in collaboration with HRBP and cross-functional stakeholders.`

Не использовать `candidate profiles`, если речь идёт о talent review или succession planning.

### Technologies of Trust

**Role title:**  
`HR Specialist — Process & Data Support`

**Company context:**  
`Russian audit and consulting firm, successor to PwC Russia.`

**Dates:**  
`Dec 2023 – Feb 2025`

**Bullets:**

- `Managed the full cycle of administration and documentation for 30+ external contractors each month.`
- `Developed and maintained Excel trackers for contract approvals, renewals, payments, deadlines, and incoming requests.`
- `Coordinated approval processes across HR, legal, finance, and business teams.`
- `Supported calculations and payments by collecting data, validating accuracy, and monitoring deadlines.`
- `Trained a colleague on HR processes and corporate systems and prepared supporting training materials.`

Не использовать:

- `Contractor Operations Specialist`;
- 40+ contractors;
- анализ 100+ workflow cases;
- 10–20% closure speed;
- другие прежние формулировки, которых нет в согласованном тексте выше.

---

## 8. Skills & Tools

Не создавать новую taxonomy, новые категории или новый список skills. Не перестраивать этот раздел по собственной инициативе.

Сделать только следующее:

- сохранить существующие подтверждённые skills и их текущий порядок;
- удалить `Databricks`;
- удалить `Snowflake`;
- не показывать proficiency levels;
- не добавлять labels `Advanced`, `Basic`, `Developing`, `Working knowledge`;
- не добавлять новые skills без отдельного согласования;
- не добавлять SQL certification, пока курс не завершён.

### Hover/focus behaviour

Для существующих skills, у которых есть подтверждение, добавить интерактивность.

При hover или keyboard focus появляется popover:

**Title:** `See how I applied this skill`

Внутри показывается конкретное подтверждение и ссылка на соответствующий project page или experience anchor.

Примеры и обязательная карта evidence указаны в `technical/skill_evidence_map.json`.

### Click behaviour

- Project evidence ведёт прямо на dedicated project page.
- Professional evidence ведёт на homepage experience anchor.

### Mobile behaviour

- Первый tap открывает popover.
- Пользователь сначала видит evidence.
- Ссылка внутри popover выполняет переход.
- Не делать skill chip мгновенной ссылкой, которая не позволяет прочитать evidence.

### Skills без опубликованного evidence

Оставить обычными chips без фиктивных links и без выдуманного подтверждения.

---

## 9. Education & Certifications

Сохранить существующие education entries.

### HubSpot Marketing Hub Software

Link:
`https://app.hubspot.com/academy/achievements/400j3fn2/en/1/elena-krayneva/hubspot-marketing-hub-software`

### Google Ads Display Certification

Link:
`https://skillshop.credential.net/7b50cac1-6a37-4a5d-984d-af324c05ecc5#acc.WEAsRH32`

### Google Analytics Certification

Использовать тот же credential URL:
`https://skillshop.credential.net/7b50cac1-6a37-4a5d-984d-af324c05ecc5#acc.WEAsRH32`

### Остальные certifications

Оставить без внешних ссылок.

### Удалить / не добавлять

- Qwell — удалить полностью.
- McKinsey Forward — не добавлять.
- SQL certification — не добавлять до завершения курса.

---

## 10. AI Assistant

AI assistant всегда должен оставаться фиксированным в правом нижнем углу на всех страницах сайта.

### Persistent state

- Иконка/launcher видна постоянно.
- Не скрывать её при прокрутке.
- Не дублировать бот отдельными крупными CTA в hero, navigation, projects или contact.

### First-visit invitation

При первом заходе пользователя на сайт рядом с launcher автоматически появляется компактное приглашение.

**Title:** `Curious about my experience?`

**Body:** `Ask about my projects, skills, or professional background.`

**Button:** `Ask a question`

- Кнопка открывает AI assistant.
- Pop-up можно закрыть.
- После закрытия launcher остаётся.
- В рамках одной browser session приглашение не должно всплывать повторно при переходах между страницами.
- В новой session приглашение может появиться снова.
- На mobile pop-up не должен перекрывать ключевые CTA или navigation.

---

## 11. Contact section

### Anchor

`#contact`

### Heading

`Contact`

### Copy

`For professional opportunities or conversations related to marketing analytics, business analysis, and strategy, contact me by email or LinkedIn.`

### Buttons

- `Email Me`
- `LinkedIn`

### Behaviour

- `Contact Me` в hero плавно прокручивает сюда.
- Email Me использует текущий email сайта.
- LinkedIn использует текущую LinkedIn-ссылку.

### Удалить phone number

Удалить телефон из:

- hero;
- contact section;
- footer;
- mobile menu;
- metadata;
- JSON-LD / structured data;
- schema.org Person;
- Open Graph descriptions;
- hidden accessibility text;
- analytics event labels, если он там присутствует.

---

## 12. Confidentiality: AI project

Конфиденциальное название проекта запрещено публиковать в любой форме.

Проверить и удалить его из:

- visible page copy;
- URLs;
- route names;
- page titles;
- meta descriptions;
- Open Graph;
- Twitter cards;
- JSON-LD;
- image filenames;
- image alt text;
- downloadable filenames;
- API payloads;
- client-side data objects;
- component names, если они попадают в source maps или rendered source;
- comments;
- analytics event labels;
- sitemap;
- robots-accessible content.

Использовать только нейтральные названия:

- `AI Startup — Strategic Market Consulting`
- route: `/projects/ai-startup-strategy`

---

## 13. SEO, accessibility and responsive requirements

### SEO

- У каждой страницы должны быть уникальные title и meta description.
- Не использовать confidential project name.
- `/projects` и три project routes должны попадать в sitemap, если страницы публичны.
- Не индексировать пустые hidden sections как наполненный кейс.

### Accessibility

- Все CTA доступны с клавиатуры.
- CV modal использует focus trap и возвращает focus на trigger после закрытия.
- Project links имеют понятные accessible names.
- Skill popovers открываются по hover, focus и tap.
- AI invitation и launcher доступны screen readers.
- Escape закрывает modal, popover и AI invitation.
- Не полагаться только на цвет для интерактивных состояний.

### Responsive

Проверить минимум:

- 360 px;
- 390 px;
- 768 px;
- 1024 px;
- 1440 px.

На mobile:

- CTA не перекрываются AI launcher;
- три hero buttons могут переходить в вертикальный стек;
- CV language selector не выходит за viewport;
- skill popovers помещаются на экран;
- project cards читаются без горизонтального скролла.

---

## 14. Что удалить

- Confidential AI project name во всех формах.
- Qwell.
- Databricks.
- Snowflake.
- McKinsey Forward.
- Незавершённый SQL certification.
- Phone number со всего сайта и metadata.
- Internship-seeking copy.
- Open to Opportunities copy.
- Barcelona из homepage hero.
- Повторяющиеся AI assistant CTAs.
- Длинные project details на homepage.
- Accordion project details на homepage.
- `Client: SME fitness businesses`.
- `Contractor Operations Specialist`.
- Старые Technologies of Trust bullets, отличающиеся от утверждённой версии.

---

## 15. Финальная передача результата

После реализации предоставить:

1. Список изменённых файлов.
2. Список созданных routes.
3. Подтверждение, что выполнен поиск confidential term по всему repository/build output.
4. Подтверждение, что phone number отсутствует в repository-rendered content и metadata.
5. Результаты проверки всех links.
6. Результаты responsive проверки.
7. Результаты keyboard/accessibility smoke test.
8. Скриншоты homepage desktop/mobile, `/projects`, каждого project skeleton, CV language selector и AI invitation.
9. Отдельный список любых пунктов, которые невозможно выполнить из-за ограничений текущего codebase. Не заменять их самовольными решениями.
