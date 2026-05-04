const demoData = {
  october: {
    scores: { russian: 78, math: 58, informatics: 80 },
    currentTotal: 216,
    forecast: 243,
  },
  afterRecommendation: {
    forecast: 219,
  },
  december: {
    scores: { russian: 79, math: 71, informatics: 82 },
    forecast: 257,
  },
  april: {
    scores: { russian: 92, math: 96, informatics: 100 },
    currentTotal: 288,
    forecast: 290,
  },
  universities: [
    { id: "hse", name: "ВШЭ", program: "ПМИ", benchmark: 288, role: "polarStar" },
    { id: "mirea", name: "МИРЭА", program: "ИИ", benchmark: 263, role: "backup" },
    { id: "misis", name: "МИСИС", program: "Data Science", benchmark: 267, role: "backup" },
    { id: "mai", name: "МАИ", program: "ПМИ", benchmark: 248, role: "backup" },
    { id: "mipt", name: "МФТИ", program: "ПМИ", benchmark: 301, role: "stretch" },
  ],
};

const acts = [
  { short: "Платформа", title: "Обычная платформа", from: 0, to: 7 },
  { short: "Ари", title: "Знакомство с Ари", from: 8, to: 15 },
  { short: "Цель", title: "Саша ставит цель", from: 16, to: 25 },
  { short: "Обучение", title: "Процесс обучения", from: 26, to: 35 },
  { short: "Аналитика", title: "Предиктивная аналитика", from: 36, to: 45 },
  { short: "Вузы", title: "Навигация по вузам", from: 46, to: 55 },
  { short: "Итог", title: "Путь Саши", from: 56, to: 65 },
];

const januaryState = {
  currentTotal: 248,
  forecast: 268,
  scores: { russian: 82, math: 78, informatics: 88 },
};

const steps = [
  { act: 0, date: "Октябрь", title: "Обычный личный кабинет", label: "ЛК", note: "Саша заходит на платформу. Уроки есть. Цели — нет.", cta: "Открыть математику", status: "LMS" },
  { act: 0, date: "Октябрь", title: "Карточка предмета", label: "Предмет", note: "Темы, задачи, дедлайны. Но при чём тут поступление?", cta: "Написать пробник", status: "Тема 3" },
  { act: 0, date: "Октябрь", title: "Результат пробника", label: "Пробник", note: "58 баллов. И что? Хорошо это или плохо для поступления?", cta: "Посмотреть ошибки", status: "58 б." },
  { act: 0, date: "Октябрь", title: "Список ошибок", label: "Ошибки", note: "5 ошибок. Все выглядят одинаково. С какой начать?", cta: "Посмотреть рекомендации", status: "5 ошибок" },
  { act: 0, date: "Октябрь", title: "Рекомендации платформы", label: "Советы", note: "«Подтяни планиметрию». Окей, но зачем? И что это даст?", cta: "Посмотреть расписание", status: "Общие" },
  { act: 0, date: "Октябрь", title: "Неделя без приоритетов", label: "Неделя", note: "4 дедлайна. Все срочные. Все одинаковые. Выбирай сам.", cta: "А что с вузами?", status: "Перегруз" },
  { act: 0, date: "Октябрь", title: "Калькулятор вузов", label: "Калькулятор", note: "Отдельный сайт. Ввёл баллы → получил список → закрыл.", cta: "И что теперь?", status: "Статика" },
  { act: 0, date: "Октябрь", title: "Учусь, но не вижу зачем", label: "Итог", note: "Контент есть. Аналитика есть. Маршрута — нет.", cta: "Показать решение", status: "Боль" },
  { act: 1, date: "Октябрь", title: "Ари появляется", label: "Новый слой", note: "В личном кабинете появляется AI-наставник.", cta: "Познакомиться", status: "Ари рядом" },
  { act: 1, date: "Октябрь", title: "Знакомство с Ари", label: "Знакомство", note: "Ари — не репетитор. Она — навигатор по поступлению.", cta: "Как это работает", status: "Онлайн" },
  { act: 1, date: "Октябрь", title: "Три возможности", label: "Обзор", note: "Три вещи, которые обычная платформа не умеет.", cta: "Предиктивный прогноз", status: "3 фичи" },
  { act: 1, date: "Октябрь", title: "Предиктивный прогноз", label: "Прогноз", note: "Не снимок, а вектор. Не точка, а траектория.", cta: "Умный маршрут", status: "Прогноз" },
  { act: 1, date: "Октябрь", title: "Умный маршрут", label: "ROI", note: "Не все задания одинаково полезны. Ари знает, какие выгоднее.", cta: "Живая карта вузов", status: "Маршрут" },
  { act: 1, date: "Октябрь", title: "Живая карта вузов", label: "Карта", note: "Вузы зажигаются в реальном времени. Каждое усилие — видимо.", cta: "Как это работает вместе", status: "Карта" },
  { act: 1, date: "Октябрь", title: "Петля обратной связи", label: "Петля", note: "Решил → сдвиг → карта → следующий шаг. Дофаминовая петля с реальным смыслом.", cta: "Как Ари общается", status: "Мотивация" },
  { act: 1, date: "Октябрь", title: "Давай начнём", label: "Старт", note: "Ари готова. Саша готов. Маршрут начинается.", cta: "Рассказать о себе", status: "Готовность" },
  { act: 2, date: "Октябрь", title: "Саша пишет о себе", label: "Чат", note: "Свободный текст вместо анкеты. Ари понимает естественный язык.", cta: "Отправить", status: "Черновик" },
  { act: 2, date: "Октябрь", title: "Ари структурирует запрос", label: "Профиль", note: "Свободный текст превращается в параметры маршрута.", cta: "Подтвердить", status: "Анализ" },
  { act: 2, date: "Октябрь", title: "Ари просит баллы", label: "Запрос", note: "Не для оценки — для построения реалистичного маршрута.", cta: "Ввести баллы", status: "Ввод" },
  { act: 2, date: "Октябрь", title: "Ввод баллов", label: "Диагностика", note: "Русский 78, математика 58, информатика 80. Сумма: 216.", cta: "Показать карту", status: "216" },
  { act: 2, date: "Октябрь", title: "Карта вузов — день 1", label: "Карта", note: "Первый раз Саша видит свою позицию. Почти всё красное. Но это старт.", cta: "Выбрать цель", status: "Карта" },
  { act: 2, date: "Октябрь", title: "Полярная звезда", label: "Стратегия", note: "Один амбициозный ориентир + запасные варианты.", cta: "Выбрать цель", status: "Выбор" },
  { act: 2, date: "Октябрь", title: "Выбор вуза", label: "Выбор", note: "Саша выбирает ВШЭ — амбициозная цель. 288 баллов.", cta: "Выбрать ВШЭ", status: "ВШЭ" },
  { act: 2, date: "Октябрь", title: "Цель зафиксирована", label: "Маршрут", note: "ВШЭ — полярная звезда. 216 → 288. Разрыв: 72 балла.", cta: "Построить маршрут", status: "Цель" },
  { act: 2, date: "Октябрь", title: "Ари строит маршрут", label: "Расчёт", note: "Баллы, пороги, вузы, план — всё учтено. Прогноз: 243.", cta: "Открыть дашборд", status: "Расчёт" },
  { act: 2, date: "Октябрь", title: "Первый дашборд", label: "Дашборд", note: "Прогноз 243. Рекомендация: планиметрия. Карта: МАИ ближе всего.", cta: "Начать заниматься", status: "Маршрут" },
  { act: 3, date: "Октябрь", title: "Диагностика по предметам", label: "Баллы", note: "Русский 78, математика 58, информатика 80. Главный рычаг — математика.", cta: "Почему математика?", status: "Диагностика" },
  { act: 3, date: "Октябрь", title: "Как устроен ЕГЭ", label: "Структура", note: "Не все задания одинаково ценны. Ари знает, какие выгоднее.", cta: "Показать рекомендацию", status: "ROI" },
  { act: 3, date: "Октябрь", title: "Рекомендация: планиметрия", label: "1/3", note: "Задание 7. 3 часа → +3 балла → МАИ ближе. Выгоднее, чем стереометрия.", cta: "Остальные предметы", status: "Фокус" },
  { act: 3, date: "Октябрь", title: "План на неделю", label: "3 предмета", note: "6.5 часов → +9 баллов. Математика, русский, информатика.", cta: "Начать с планиметрии", status: "План" },
  { act: 3, date: "Октябрь", title: "Задание выполнено", label: "Готово", note: "Планиметрия: точность выросла с 50% до 82% за 2 ч 45 мин", cta: "Что изменилось?", status: "✓" },
  { act: 3, date: "Октябрь", title: "Балл сдвинулся", label: "Сдвиг", note: "216 → 219. Одно задание — и прогноз изменился. Петля замкнулась.", cta: "Посмотреть карту", status: "+3" },
  { act: 3, date: "Октябрь", title: "Карта обновилась", label: "Карта", note: "МАИ ближе на 3 балла. Карта пересчитана в реальном времени.", cta: "Зачем всё это", status: "Карта" },
  { act: 3, date: "Октябрь", title: "Что ждёт в ВШЭ", label: "Мотивация", note: "Кампус, стипендия, стажировки. Конкретная картинка будущего.", cta: "Показать прогресс", status: "ВШЭ" },
  { act: 3, date: "Октябрь", title: "Прогресс · октябрь", label: "Прогресс", note: "Прогноз вырос до 219. Все вузы на 3 балла ближе.", cta: "Что дальше?", status: "219" },
  { act: 3, date: "Ноябрь", title: "Ари предлагает пробник", label: "Пробник", note: "Время проверить знания и обновить прогноз.", cta: "Пройти пробник", status: "Пробник" },
  { act: 4, date: "Декабрь", title: "Результаты пробника", label: "Пробник", note: "Русский 79, математика 71, информатика 82. Сумма: 232 (+16).", cta: "Подробнее о математике", status: "232" },
  { act: 4, date: "Декабрь", title: "Математика: +13", label: "ROI", note: "Планиметрия, вероятности, текстовые — самые выгодные. Стратегия Ари сработала.", cta: "Новый прогноз", status: "+13" },
  { act: 4, date: "Декабрь", title: "Новый прогноз", label: "Прогноз", note: "Прогноз вырос с 243 до 257. На 14 пунктов ближе к ВШЭ.", cta: "Показать карту", status: "257" },
  { act: 4, date: "Декабрь", title: "МАИ — зелёный!", label: "Открыт!", note: "Первый вуз перешёл в зелёную зону. Прогноз 257 > порог 248.", cta: "Вся карта", status: "🟢 МАИ" },
  { act: 4, date: "Декабрь", title: "Обновлённая карта", label: "Карта", note: "МАИ зелёный, МИРЭА и МИСИС жёлтые. Карта ожила.", cta: "Три сценария", status: "Карта" },
  { act: 4, date: "Декабрь", title: "Три сценария", label: "Сценарии", note: "248 / 257 / 272 — три варианта будущего. Саша выбирает свой путь.", cta: "Сценарии и вузы", status: "3 пути" },
  { act: 4, date: "Декабрь", title: "Сценарии и вузы", label: "Привязка", note: "+1 занятие/нед = МИРЭА и МИСИС зелёные, ВШЭ жёлтая. Конкретика.", cta: "Паттерны обучения", status: "Выбор" },
  { act: 4, date: "Декабрь", title: "Паттерны обучения", label: "Паттерны", note: "Ари видит когда, как и где ты ошибаешься. И адаптирует маршрут.", cta: "Калькулятор vs наставник", status: "Инсайты" },
  { act: 4, date: "Декабрь", title: "Калькулятор vs Наставник", label: "Контраст", note: "Калькулятор: «не проходишь». Ари: «МАИ открыт, МИРЭА рядом, вот план».", cta: "Итог декабря", status: "Разница" },
  { act: 4, date: "Декабрь", title: "Итог декабря", label: "Итог", note: "216→232, прогноз 257, МАИ зелёный, МИРЭА/МИСИС жёлтые.", cta: "Знакомство с вузами", status: "Прогресс" },
  { act: 5, date: "Январь", title: "Пуш от Ари", label: "Вузы", note: "Ари предлагает познакомиться с вузами. Проактивно, заранее.", cta: "Показать вузы", status: "Пуш" },
  { act: 5, date: "Январь", title: "Карта · январь", label: "Карта", note: "МАИ зелёный, МИСИС почти зелёный, ВШЭ ближе.", cta: "ВШЭ изнутри", status: "Карта" },
  { act: 5, date: "Январь", title: "ВШЭ · изнутри", label: "ВШЭ", note: "Кампус, стипендия, стажировки. Ещё 20 баллов — но Саша знает, ради чего.", cta: "Показать МИСИС", status: "ВШЭ" },
  { act: 5, date: "Январь", title: "МИСИС · изнутри", label: "МИСИС", note: "Data Science, 1 балл до зелёной. Сильный надёжный вариант.", cta: "Новости вузов", status: "МИСИС" },
  { act: 5, date: "Январь", title: "Новости вузов", label: "Новости", note: "Релевантные обновления от вузов. Автоматически, по профилю.", cta: "Как подавать", status: "Новости" },
  { act: 5, date: "Январь", title: "Как устроена подача", label: "Подача", note: "5 вузов, приоритеты, волны зачисления. Саша знает заранее.", cta: "Чеклист документов", status: "Процесс" },
  { act: 5, date: "Январь", title: "Чеклист документов", label: "Документы", note: "6 документов, 6 дат. Всё собрано заранее.", cta: "Стратегия подачи", status: "Чеклист" },
  { act: 5, date: "Январь", title: "Стратегия подачи", label: "5 вузов", note: "1 амбициозная + 3 досягаемые + 1 надёжная. Предварительный план.", cta: "Вернуться к обучению", status: "Стратегия" },
  { act: 5, date: "Январь", title: "Обратно к обучению", label: "Мотивация", note: "Вузы увидел — теперь учиться осмысленнее.", cta: "Показать рекомендации", status: "Фокус" },
  { act: 5, date: "Январь", title: "Рекомендация · январь", label: "Рекомендация", note: "Стереометрия: 8ч → +6 → МИСИС и МИРЭА зелёные, ВШЭ ближе.", cta: "Итог: путь Саши", status: "Маршрут" },
  { act: 6, date: "Июнь", title: "8 месяцев с Ари", label: "Путь", note: "Октябрь → Июнь. 216 → 288. Полный таймлайн.", cta: "ВШЭ — зелёная!", status: "Июнь" },
  { act: 6, date: "Июнь", title: "ВШЭ — зелёная!", label: "★ Цель!", note: "Полярная звезда достигнута. 290 > 288.", cta: "Вся карта", status: "🟢 ВШЭ" },
  { act: 6, date: "Июнь", title: "Карта · июнь", label: "Карта", note: "4 зелёных, 1 жёлтый, 0 красных.", cta: "Было / стало", status: "4 🟢" },
  { act: 6, date: "Июнь", title: "Было / стало", label: "Контраст", note: "216 → 288. 0 зелёных → 4. Полная трансформация.", cta: "Что Саша знает", status: "Трансформация" },
  { act: 6, date: "Июнь", title: "Что Саша знает", label: "Знания", note: "Структура ЕГЭ, ROI, вузы изнутри, стратегия подачи, запасной план.", cta: "Финальный дашборд", status: "Beyond" },
  { act: 6, date: "Июнь", title: "Финальный дашборд", label: "Дашборд", note: "288/290, всё зелёное. Тот же интерфейс — другая реальность.", cta: "Ценность для ученика", status: "Финал" },
  { act: 6, date: "Июнь", title: "Ценность для ученика", label: "Ценность", note: "Три боли → три решения. Цель, маршрут, прогресс.", cta: "Ценность для платформы", status: "Ученик" },
  { act: 6, date: "Июнь", title: "Ценность для платформы", label: "B2B", note: "Retention, вовлечённость, upsell, churn prediction, конкурентное преимущество.", cta: "Миссия", status: "Бизнес" },
  { act: 6, date: "Июнь", title: "Миссия", label: "Миссия", note: "Ари подводит итог и формулирует суть продукта.", cta: "Финал", status: "Миссия" },
  { act: 6, date: "Июнь", title: "Саша готов", label: "Финал", note: "288 баллов. 4 зелёных вуза. ВШЭ — полярная звезда.", cta: null, status: "Готов" },
];

const state = {
  currentStep: -1,
  navDirection: "forward",
  selectedUniversity: "hse",
  focusedUniversity: "hse",
};

function initialStepFromUrl() {
  const rawStep = new URLSearchParams(window.location.search).get("step");
  if (rawStep === null) return -1;
  const parsed = Number(rawStep);
  if (Number.isNaN(parsed)) return -1;
  return Math.max(-1, Math.min(steps.length - 1, parsed));
}

function currentActIndex() {
  if (state.currentStep < 0) return -1;
  return steps[state.currentStep].act;
}

function goToStep(nextStep) {
  const clamped = Math.max(-1, Math.min(steps.length - 1, nextStep));
  if (clamped === state.currentStep) {
    state.navDirection = "stationary";
    render();
    return;
  }

  state.navDirection = clamped > state.currentStep ? "forward" : "back";

  const screen = document.getElementById("screen");
  screen.style.opacity = "0";
  screen.style.transform = "scale(0.96) translateY(-8px)";

  setTimeout(() => {
    state.currentStep = clamped;
    render();

    screen.style.transition = "none";
    screen.style.opacity = "0";
    screen.style.transform = "scale(0.96) translateY(16px)";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        screen.style.transition = "";
        screen.style.opacity = "1";
        screen.style.transform = "scale(1) translateY(0)";
      });
    });
  }, 480);
}

function primaryTarget() {
  if (state.currentStep < 0) return 0;
  if (steps[state.currentStep]?.cta === null) return -1;
  if (state.currentStep === steps.length - 1) return steps.length;
  return state.currentStep + 1;
}

function renderActNav() {
  const nav = document.getElementById("actNav");
  const activeAct = currentActIndex();
  const intro = `
    <button class="act-button ${state.currentStep < 0 ? "active" : ""}" type="button" data-step="-1">
      <div class="act-num">0</div>
      <div>
        <div class="act-name">Саша</div>
        <div class="act-steps">портрет</div>
      </div>
    </button>
  `;
  nav.innerHTML = intro + acts.map((act, index) => `
    <button class="act-button ${activeAct === index ? "active" : ""}" type="button" data-step="${act.from}">
      <div class="act-num">${index + 1}</div>
      <div>
        <div class="act-name">${act.short}</div>
        <div class="act-steps">${act.from + 1}–${act.to + 1}</div>
      </div>
    </button>
  `).join("");
}

function renderHeader() {
  const address = document.querySelector(".address");
  if (state.currentStep < 0) {
    document.querySelector(".app-topbar").innerHTML = `
      <div>
        <div class="top-kicker">Портрет пользователя · экран 0</div>
        <h1 class="step-title">Саша</h1>
      </div>
      <div class="top-actions">
        <div class="date-pill">До старта</div>
        <div class="step-count">0 / ${steps.length}</div>
      </div>
    `;
    if (address) address.textContent = "ordinary-platform/sasha";
    document.getElementById("syncStatus").textContent = "Портрет";
    return;
  }

  const step = steps[state.currentStep];
  const act = acts[step.act];
  const headerTitle = state.currentStep >= 5 ? "AI-наставник поступления" : act.title;
  if (address) {
    address.textContent = state.currentStep >= 5 ? "ari-admission-mentor/sasha" : "ordinary-platform/sasha";
  }
  document.querySelector(".app-topbar").innerHTML = `
    <div>
      <div class="top-kicker">${headerTitle} · экран ${state.currentStep + 1}</div>
      <h1 class="step-title">Личный кабинет Саши</h1>
    </div>
    <div class="top-actions">
      ${state.currentStep >= 8 ? `
        <div class="ari-status">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <span>Ари рядом</span>
        </div>
      ` : ""}
      <div class="date-pill">${step.date}</div>
      <div class="step-count">${state.currentStep + 1} / ${steps.length}</div>
    </div>
  `;
  document.getElementById("syncStatus").textContent = step.status;
}

function renderStepper() {
  const stepper = document.getElementById("stepper");
  const dots = [{ title: "Портрет пользователя", index: -1 }, ...steps.map((step, index) => ({ title: step.title, index }))];
  stepper.style.gridTemplateColumns = `repeat(${dots.length}, minmax(0,1fr))`;
  stepper.innerHTML = dots.map((dot) => `
    <button
      class="step-dot ${dot.index < state.currentStep ? "done" : ""} ${dot.index === state.currentStep ? "active" : ""}"
      type="button"
      data-step="${dot.index}"
      aria-label="Экран ${dot.index < 0 ? 0 : dot.index + 1}"
      title="${dot.title}"
    ></button>
  `).join("");
}

function renderFlowControls() {
  document.getElementById("prevBtn").disabled = state.currentStep < 0;
  document.getElementById("nextBtn").disabled = state.currentStep === steps.length - 1;
  document.getElementById("primaryAction").textContent = state.currentStep < 0 ? "Перейти в кабинет" : (steps[state.currentStep].cta ?? "← В начало");
}

function screenShell(label, title, note, body, actions = "") {
  return `
    <div class="screen-view from-${state.navDirection}">
      <div class="screen-head">
        <div class="screen-heading">
          <div class="screen-label">${label}</div>
          <h2>${title}</h2>
          <div class="screen-note">${note}</div>
        </div>
        <div class="head-actions">${actions}</div>
      </div>
      ${body}
    </div>
  `;
}

function subjectCards(active = "") {
  const subjects = [
    { id: "russian", name: "Русский язык", meta: "вебинар 18:00", progress: 68 },
    { id: "math", name: "Профильная математика", meta: "тема 3", progress: 42 },
    { id: "informatics", name: "Информатика", meta: "практика", progress: 61 },
  ];
  return `
    <div class="subject-row">
      ${subjects.map((item) => `
        <button class="subject-card ${active === item.id ? "active" : ""} ${active && active !== item.id ? "dim" : ""}" type="button" data-step="${item.id === "math" ? 1 : 0}">
          <div class="subject-top">
            <div class="subject-name">${item.name}</div>
            <div class="subject-meta">${item.meta}</div>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${item.progress}%"></div></div>
          <div class="card-meta">прогресс ${item.progress}%</div>
        </button>
      `).join("")}
    </div>
  `;
}

function gapNote(text, extraClass = "") {
  return `<div class="gap-note ${extraClass}">${text}</div>`;
}

function scoreBar(label, value, weak = false) {
  return `
    <div class="score-row ${weak ? "weak" : ""}">
      <div class="score-row-top"><span>${label}</span><strong>${value}</strong></div>
      <div class="progress-track"><div class="progress-fill" style="width:${parseInt(value, 10)}%"></div></div>
    </div>
  `;
}

function university(id) {
  return demoData.universities.find((item) => item.id === id);
}

function scoreInputCard(name, value, highlight = false) {
  return `
    <div class="score-input-card ${highlight ? "highlight" : ""}">
      <div>
        <strong>${name}</strong>
        <span>из 100</span>
      </div>
      <div class="score-input-value">${value}</div>
      <div class="progress-track"><div class="progress-fill" style="width:${value}%"></div></div>
    </div>
  `;
}

function renderForecast() {
  const current = demoData.october.currentTotal;
  const forecast = demoData.october.forecast;
  const target = university("hse").benchmark;
  const progress = Math.round((current / target) * 100);
  return `
    <div class="forecast-card">
      <div class="forecast-ring" style="--progress:${progress * 3.6}deg">
        <div>
          <strong>${current}</strong>
          <span>сейчас</span>
        </div>
      </div>
      <div class="forecast-metrics">
        <div><span>Прогноз к июню</span><strong>${forecast}</strong></div>
        <div><span>Цель ВШЭ</span><strong>${target}</strong></div>
        <div><span>До цели от прогноза</span><strong>${target - forecast}</strong></div>
      </div>
    </div>
  `;
}

function renderForecastProgress(current = demoData.october.currentTotal) {
  const target = university("hse").benchmark;
  const progress = Math.round((current / target) * 100);
  return `
    <div class="forecast-card ${current > demoData.october.currentTotal ? "updated" : ""}">
      <div class="forecast-ring" style="--progress:${progress * 3.6}deg">
        <div>
          <strong>${current}</strong>
          <span>${current > demoData.october.currentTotal ? "новый" : "сейчас"}</span>
        </div>
      </div>
      <div class="forecast-metrics">
        <div><span>Цель ВШЭ</span><strong>${target}</strong></div>
        <div><span>До цели</span><strong>${target - current}</strong></div>
        <div><span>Сдвиг</span><strong>${current > demoData.october.currentTotal ? "+3" : "0"}</strong></div>
      </div>
    </div>
  `;
}

function diagnosticsScoreRow(name, value, highlight = false) {
  return `
    <div class="diagnostics-row ${highlight ? "highlight" : ""}">
      <div><strong>${name}</strong><span>${value}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${value}%"></div></div>
    </div>
  `;
}

function decemberTotal() {
  const scores = demoData.december.scores;
  return scores.russian + scores.math + scores.informatics;
}

function probnikResultCard(subject, before, after, highlight = false) {
  const delta = after - before;
  return `
    <div class="probnik-result-card ${highlight ? "highlight-growth" : ""}">
      <div>
        <strong>${subject}</strong>
        <span>было <s>${before}</s></span>
      </div>
      <div class="probnik-score">${after}<em>+${delta}</em></div>
      <div class="progress-track"><div class="progress-fill" style="width:${after}%"></div></div>
    </div>
  `;
}

function renderDecemberForecastCard() {
  const current = decemberTotal();
  const forecast = demoData.december.forecast;
  const target = university("hse").benchmark;
  return `
    <div class="forecast-card updated">
      <div class="forecast-ring" style="--progress:${Math.round(current / target * 360)}deg">
        <div><strong>${current}</strong><span>сейчас</span></div>
      </div>
      <div class="forecast-metrics">
        <div><span>Прогноз к июню</span><strong>${forecast}</strong></div>
        <div><span>Цель ВШЭ</span><strong>${target}</strong></div>
        <div><span>До цели от прогноза</span><strong>${target - forecast}</strong></div>
      </div>
    </div>
  `;
}

function decemberZoneCard(id, tone, detail) {
  const item = university(id);
  return `<div class="december-zone-card ${tone}"><strong>${item.name}</strong><span>${item.program} · ${item.benchmark}</span><em>${detail}</em></div>`;
}

function zoneUniCard(id, tone = "") {
  const item = university(id);
  const gap = item.benchmark - demoData.october.currentTotal;
  const suffix = id === "mipt" ? "вне зоны" : `осталось ${gap}`;
  return `
    <button class="zone-uni-card ${tone} ${state.focusedUniversity === id ? "active" : ""}" type="button" data-focus-uni="${id}">
      <strong>${item.name}</strong>
      <span>${item.program} · ${item.benchmark} · ${suffix}</span>
      <em>${item.role === "polarStar" ? "амбициозная цель" : item.role === "stretch" ? "вне зоны" : "подходит под профиль"}</em>
    </button>
  `;
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function typewriterText(text) {
  return `<span class="typewriter" data-typewriter="${escapeAttr(text)}"></span><span class="typewriter-cursor"></span>`;
}

function runTypewriters() {
  document.querySelectorAll("[data-typewriter]").forEach((element) => {
    const text = element.dataset.typewriter || "";
    element.textContent = "";
    let index = 0;
    const tick = () => {
      element.textContent = text.slice(0, index);
      index += 1;
      if (index <= text.length) window.setTimeout(tick, 28);
    };
    tick();
  });
}

function msg(who, text) {
  return { who, text };
}

function chatShell(messages, composerText, actionLabel, actionStep) {
  return `
    <div class="chat-shell">
      <div class="chat-top">
        <div class="chat-agent">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div>
            <div class="chat-agent-name">Ари</div>
            <div class="chat-agent-meta">AI-наставник по поступлению</div>
          </div>
        </div>
        <div class="tag">онлайн</div>
      </div>
      <div class="chat-messages">
        ${messages.map((item) => `
          <div class="chat-message ${item.who}">
            <div>${item.text}</div>
          </div>
        `).join("")}
      </div>
      <div class="composer">
        <div class="composer-field">${composerText}</div>
        <button type="button" data-step="${actionStep}">${actionLabel}</button>
      </div>
    </div>
  `;
}

function renderIntroProfile() {
  return `
    <div class="zero-profile">
      <div class="zero-profile-top">
        <div class="product-name">AI-Наставник поступления</div>
        <div class="badge">Портрет пользователя</div>
      </div>

      <div class="zero-profile-stage">
        <div class="zero-facts">
          <div class="zero-fact fact-teal">
            <div class="zero-fact-label">Откуда</div>
            <div class="zero-fact-text"><b>Регион.</b> Вузы лично посмотреть не может.</div>
          </div>
          <div class="zero-fact fact-coral">
            <div class="zero-fact-label">Мечта</div>
            <div class="zero-fact-text"><b>AI и ML</b> в сильном московском техвузе.</div>
          </div>
          <div class="zero-fact fact-blue">
            <div class="zero-fact-label">ЕГЭ</div>
            <div class="zero-fact-text"><b>Покупает блок предметов:</b> Русский, Математика, Информатика.</div>
          </div>
        </div>

        <div class="zero-core">
          <div class="zero-avatar">
            <img src="./assets/sasha-face.png" alt="Саша">
          </div>
          <div class="zero-name">Саша</div>
          <div class="zero-sub">Саше 17 лет · 11 класс · обычная школа в регионе</div>
        </div>

        <div class="zero-facts">
          <div class="zero-fact fact-rose">
            <div class="zero-fact-label">Ограничение</div>
            <div class="zero-fact-text"><b>Физику не сдаёт.</b> Нужен путь в IT без неё.</div>
          </div>
          <div class="zero-fact fact-sun">
            <div class="zero-fact-label">Баллы</div>
            <div class="zero-fact-text"><b>Пробники средние.</b> Чёткой точки старта нет.</div>
          </div>
          <div class="zero-fact fact-violet">
            <div class="zero-fact-label">Проблема</div>
            <div class="zero-fact-text"><b>Нет наставника.</b> В школе с выбором не помогают.</div>
          </div>
        </div>
      </div>

      <div class="zero-bottom">
        <article class="zero-insight jtbd">
          <div class="zero-insight-label">JTBD</div>
          <div class="zero-jtbd-text">Когда я в 11 классе в региональной школе понимаю, что <em>хочу поступить на IT в Москву</em>, но не знаю, куда идти, какие баллы нужны и как всё спланировать, я хочу, чтобы <em>кто-то собрал для меня понятный маршрут</em>, чтобы <em>не тратить время впустую</em>.</div>
        </article>
        <article class="zero-insight punchline">
          <div class="zero-insight-label">Ключевой инсайт</div>
          <div class="zero-punch-text">Саша не нанимает курс по математике. Он нанимает <strong>наставника по поступлению</strong> — того, кого у него нет ни в школе, ни рядом.</div>
        </article>
      </div>
    </div>
  `;
}

function renderLmsHome() {
  return `
    <div class="main-grid one-col">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Привет, Саша! Сегодня 3 занятия</div>
            <div class="panel-subtitle">Обычная платформа подготовки к ЕГЭ</div>
          </div>
          <div class="tag">11 класс</div>
        </div>
        ${subjectCards()}
        <div class="schedule-list">
          <div class="mini-card"><div class="lesson-title">Русский</div><div class="lesson-meta">18:00 · сочинение</div></div>
          <div class="mini-card"><div class="lesson-title">Математика</div><div class="lesson-meta">19:30 · тригонометрия</div></div>
          <div class="mini-card"><div class="lesson-title">Информатика</div><div class="lesson-meta">21:00 · код</div></div>
        </div>
        ${gapNote("Уроки есть. Расписание есть. Но не видно, куда всё это ведёт.")}
      </div>
    </div>
  `;
}

function renderMathSubject() {
  return `
    <div class="main-grid one-col">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Профильная математика</div>
            <div class="panel-subtitle">Курс · 6 тем · 48 заданий</div>
          </div>
          <div class="tag">активен</div>
        </div>
        ${subjectCards("math")}
        <div class="lesson-list">
          <div class="lesson-card open">
            <div class="lesson-title">Тема 3. Тригонометрия</div>
            <div class="lesson-meta">12 задач · дедлайн воскресенье</div>
            <div class="tag small-tag">открыта</div>
          </div>
          <div class="lesson-card">
            <div class="lesson-title">Формулы и графики</div>
            <div class="lesson-meta">4 видео · 2 теста</div>
          </div>
          <div class="lesson-card">
            <div class="lesson-title">Домашняя работа</div>
            <div class="lesson-meta">Вариант 12 + 14</div>
          </div>
        </div>
        ${gapNote("— нет связи с поступлением. Не понятно, зачем именно эта тема —")}
      </div>
    </div>
  `;
}

function renderProbnikResult() {
  return `
    <div class="main-grid two-col result-grid">
      <div class="panel result-panel">
        <div>
          <div class="panel-title">Результат пробника</div>
          <div class="panel-subtitle">Профильная математика · 15 октября</div>
        </div>
        <div class="result-score">
          <div class="forecast-value">58</div>
          <div class="score-caption">из 100 тестовых баллов</div>
        </div>
        <div class="mini-card muted-card">Средний по платформе — 62</div>
        <div class="mini-card">Результат зафиксирован. Продолжай заниматься!</div>
      </div>
      <div class="panel">
        <div class="panel-title">Детали</div>
        <div class="score-bars">
          ${scoreBar("Часть 1", "72%")}
          ${scoreBar("Часть 2", "31%", true)}
          <div class="mini-card"><strong>Время</strong><br><span class="lesson-meta">3 ч 12 мин</span></div>
        </div>
        ${gapNote("Что с этим делать? Платформа не говорит.")}
      </div>
    </div>
  `;
}

function renderErrorList() {
  const rows = [
    ["1", "Целые числа", "✓ верно"],
    ["5", "Теория вероятности", "✗ неверно"],
    ["7", "Планиметрия", "✗ неверно"],
    ["9", "Текстовая задача", "✓ верно"],
    ["13", "Стереометрия", "✗ неверно"],
    ["15", "Неравенства", "✗ неверно"],
    ["18", "Параметры", "✗ не приступал"],
  ];
  return `
    <div class="main-grid error-grid">
      <div class="panel">
        <div>
          <div class="panel-title">Ошибки в пробнике</div>
          <div class="panel-subtitle">Математика · 15 октября</div>
        </div>
        <div class="error-table">
          <div class="error-row head"><span>№</span><span>Задание</span><span>Результат</span></div>
          ${rows.map(([num, task, result]) => `<div class="error-row"><span>${num}</span><span>${task}</span><span>${result}</span></div>`).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Рекомендация платформы</div>
        <div class="mini-card">У тебя ошибки в заданиях 5, 7, 13, 15, 18. Повтори эти темы.</div>
        ${gapNote("Все ошибки выглядят одинаково. Но задание 7 стоит 1 первичный балл и решается за 3 часа, а задание 18 — за 20 часов. Платформа этого не знает.")}
      </div>
    </div>
  `;
}

function renderGenericRecommendations() {
  const recs = [
    ["📐", "Подтяни планиметрию", "У тебя ошибки в задании 7", "математика"],
    ["📝", "Повтори орфографию", "Часть 1, задание 9", "русский"],
    ["💻", "Разбери массивы", "Задание 25, крайние случаи", "информатика"],
    ["📊", "Пройди ещё пробник", "Через 2 недели", "все предметы"],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel">
        <div>
          <div class="panel-title">Рекомендации для тебя</div>
          <div class="panel-subtitle">На основе результатов пробника</div>
        </div>
        <div class="generic-rec-grid">
          ${recs.map(([icon, title, copy, tag]) => `
            <div class="generic-rec-card">
              <div class="rec-icon">${icon}</div>
              <div>
                <div class="lesson-title">${title}</div>
                <div class="lesson-meta">${copy}</div>
              </div>
              <div class="tag">${tag}</div>
            </div>
          `).join("")}
        </div>
        <div class="question-strip">С какой рекомендации начать? Какая даст максимум баллов? Сколько это займёт? Как это повлияет на поступление?</div>
        ${gapNote("Платформа не отвечает на эти вопросы. Ученик должен решать сам.")}
      </div>
    </div>
  `;
}

function renderDeadlineNoise() {
  return `
    <div class="main-grid one-col">
      <div class="panel">
        <div class="panel-title">Неделя Саши</div>
        <div class="deadline-list">
          <div class="deadline-card noisy"><div><div class="deadline-title">Вариант 12</div><div class="deadline-meta">математика</div></div><div class="tag">пт</div></div>
          <div class="deadline-card noisy"><div><div class="deadline-title">Конспект по Бунину</div><div class="deadline-meta">русский</div></div><div class="tag">вс</div></div>
          <div class="deadline-card noisy"><div><div class="deadline-title">Пробник</div><div class="deadline-meta">через 9 дней</div></div><div class="tag">ЕГЭ</div></div>
          <div class="deadline-card noisy"><div><div class="deadline-title">Алгоритмы сортировки</div><div class="deadline-meta">информатика</div></div><div class="tag">ср</div></div>
        </div>
        <div class="question-marker">С чего начать? Что из этого важнее? И как это связано с поступлением?</div>
        <div class="deadline-soft-note">Все задания кажутся одинаково важными. Саша выбирает наугад.</div>
      </div>
    </div>
  `;
}

function renderCalculatorScreen() {
  const universities = [
    ["НИУ ВШЭ", "ПМИ", "288"],
    ["МИСИС", "Data Science", "267"],
    ["МИРЭА", "ИИ", "263"],
    ["МАИ", "ПМИ", "248"],
  ];
  return `
    <div class="main-grid two-col calc-grid">
      <div class="panel">
        <div>
          <div class="panel-title">Калькулятор вузов</div>
          <div class="panel-subtitle">Сторонний сайт · ввод вручную</div>
        </div>
        <div class="calculator-form">
          <label><span>Русский язык</span><strong>78</strong></label>
          <label><span>Профильная математика</span><strong>58</strong></label>
          <label><span>Информатика</span><strong>80</strong></label>
          <label class="sum"><span>Сумма</span><strong>216</strong></label>
          <button type="button">Подобрать вузы</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Результат</div>
        <div class="calculator-result-list">
          ${universities.map(([name, program, score]) => `
            <div class="calc-result-item">
              <span class="fail-mark">✗</span>
              <div><strong>${name}</strong> · ${program} · проходной ${score}</div>
              <span>не проходит</span>
            </div>
          `).join("")}
        </div>
        ${gapNote("Статичный снимок. Не обновляется. Не связан с обучением. Не говорит, что делать, чтобы пройти.")}
      </div>
    </div>
  `;
}

function renderBlock1Summary() {
  return `
    <div class="main-grid one-col">
      <div class="panel summary-panel">
        <img class="summary-avatar" src="./assets/sasha-face.png" alt="Саша">
        <div>
          <div class="summary-name">Саша</div>
          <div class="summary-meta">Саше 17 лет · 11 класс · регион</div>
        </div>
        <div class="summary-quote">Я занимаюсь каждый день, но не понимаю, как мои усилия приближают меня к конкретному вузу. Вижу оценки, ошибки, темы — но не вижу маршрута. Просто "надо заниматься" — это не план.</div>
        <div class="chip-row pain-row">
          <div class="pain-chip">❌ Нет связи усилий с результатом</div>
          <div class="pain-chip">❌ Нет ощущения прогресса</div>
          <div class="pain-chip">❌ Нет понятного следующего шага</div>
        </div>
        <div class="summary-conclusion">Это не проблема контента. Контент хороший. Это проблема навигации: подготовка не складывается в маршрут до поступления.</div>
        <div class="summary-soft">А что если бы рядом был наставник, который видит всю картину?</div>
      </div>
    </div>
  `;
}

function renderAriAppears() {
  return `
    <div class="main-grid ari-appear-grid">
      <div class="panel lms-muted">
        <div class="panel-title">Личный кабинет</div>
        ${subjectCards()}
        <div class="schedule-list">
          <div class="mini-card"><div class="lesson-title">Русский</div><div class="lesson-meta">18:00 · сочинение</div></div>
          <div class="mini-card"><div class="lesson-title">Математика</div><div class="lesson-meta">19:30 · тригонометрия</div></div>
          <div class="mini-card"><div class="lesson-title">Информатика</div><div class="lesson-meta">21:00 · код</div></div>
        </div>
      </div>
      <div class="panel ari-panel enter-glow">
        <div class="ari-nudge large">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div>
            <div class="nudge-title">Ари</div>
            <div class="nudge-copy">Привет! Я — AI-наставник по поступлению. Помогу тебе не просто готовиться, а видеть путь к конкретному вузу.</div>
          </div>
          <button class="small-button" type="button" data-step="9">Познакомиться</button>
        </div>
        <div class="mini-card"><strong>Новый слой в платформе</strong><br><span class="panel-subtitle">Не дополнительный контент, а навигация.</span></div>
      </div>
    </div>
  `;
}

function renderAriRevealed() {
  return `
    <div class="main-grid one-col">
      <div class="panel ari-reveal-panel">
        <img class="ari-hero-avatar" src="./assets/ari-secondary.png" alt="Ари">
        <div class="ari-hero-title">${typewriterText("Привет, я Ари — твой AI-наставник по поступлению.")}</div>
        <div class="ari-hero-copy">Я не заменяю преподавателя и не даю новые уроки. Я делаю другое: превращаю твою подготовку в понятный маршрут до конкретного вуза.</div>
        <div class="ari-hero-copy">Я вижу всю картину целиком: твои баллы, структуру экзамена, проходные вузов. И каждый день показываю тебе самый короткий путь к цели.</div>
        <div class="ari-hero-soft">Сейчас покажу, как именно я работаю. А потом мы начнём.</div>
        <button class="hero-action" type="button" data-step="10">Как это работает</button>
      </div>
    </div>
  `;
}

function renderThreeCapabilities() {
  const cards = [
    ["📈", "Предиктивный прогноз", "Не средний балл за пробник, а прогноз на дату экзамена — с учётом динамики, темпа и оставшегося времени.", "58 сейчас → прогноз 76 к июню", "teal"],
    ["🧭", "Умный маршрут", "Не «подтяни тему», а конкретный план: какое задание, сколько часов, сколько баллов даст, и какой вуз станет ближе.", "3 часа → +3 балла → МАИ ближе", "amber"],
    ["🗺️", "Живая карта вузов", "Не одноразовый калькулятор, а карта, которая обновляется после каждого решённого задания.", "Решил задание → МАИ перешёл в зелёную зону", "green"],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel capability-overview">
        <div class="center-head">
          <div class="panel-title">Три вещи, которые обычная платформа не делает</div>
          <div class="panel-subtitle">А Ари — делает</div>
        </div>
        <div class="capability-grid stagger-in">
          ${cards.map(([icon, title, text, example, tone], index) => `
            <article class="capability-card ${tone}" style="--delay:${index * 0.15}s">
              <div class="capability-icon">${icon}</div>
              <div class="capability-title">${title}</div>
              <div class="capability-copy">${text}</div>
              <div class="capability-example">${example}</div>
            </article>
          `).join("")}
        </div>
        <div class="center-note">Дальше покажу каждую возможность подробнее.</div>
      </div>
    </div>
  `;
}

function renderCapabilityForecast() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div>
          <div class="panel-title">Предиктивный прогноз</div>
          <div class="panel-subtitle">Не «где ты сейчас», а «куда ты придёшь»</div>
        </div>
        <div class="contrast-pair">
          <div class="contrast-card contrast-dim">
            <div class="contrast-label">Обычная платформа</div>
            <div class="contrast-number">58</div>
            <div class="lesson-meta">Твой результат пробника. Всё.</div>
          </div>
          <div class="contrast-arrow">→</div>
          <div class="contrast-card contrast-bright">
            <div class="contrast-label">С AI-наставником</div>
            <div class="forecast-vector"><span>58</span><strong>→ 76</strong></div>
            <div class="lesson-meta">Прогноз к июню с учётом темпа, регулярности и динамики ошибок.</div>
          </div>
        </div>
        <div class="mini-card">"58 баллов" — это всё, что скажет обычная платформа. Ари идёт дальше: при твоём темпе к июню будет 76. Добавишь час в неделю на планиметрию — будет 83. Конкретно, измеримо, понятно.</div>
      </div>
      <div class="panel">
        <div class="panel-title">Что учитывает прогноз</div>
        <div class="feature-list">
          <div class="feature-card">📊 <strong>Динамика обучения</strong><span>скорость прогресса за последние недели</span></div>
          <div class="feature-card">⏱️ <strong>Регулярность занятий</strong><span>как часто и как долго</span></div>
          <div class="feature-card">🎯 <strong>Паттерны ошибок</strong><span>какие типы задач западают</span></div>
          <div class="feature-card">📅 <strong>Оставшееся время</strong><span>сколько дней до экзамена</span></div>
        </div>
        <div class="ari-note">Прогноз обновляется после каждого действия — задания, пробника, даже пропущенного занятия.</div>
      </div>
    </div>
  `;
}

function renderCapabilityRoute() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div>
          <div class="panel-title">Умный маршрут</div>
          <div class="panel-subtitle">Не «учись больше», а «учись точнее»</div>
        </div>
        <div class="contrast-pair route-pair">
          <div class="contrast-card contrast-dim">
            <div class="contrast-label">Обычная платформа</div>
            <div class="lesson-meta">У тебя ошибки в заданиях 5, 7, 13, 15, 18. Повтори эти темы.</div>
          </div>
          <div class="contrast-arrow">→</div>
          <div class="contrast-card contrast-bright">
            <div class="contrast-label">С AI-наставником</div>
            <div class="roi-table">
              <div class="roi-row head"><span>Задание</span><span>Время</span><span>Прирост</span><span>ROI</span></div>
              <div class="roi-row best"><span>7 · Планиметрия</span><span>3 ч</span><span>+3</span><span>1.0 ★</span></div>
              <div class="roi-row"><span>13 · Стереометрия</span><span>8 ч</span><span>+6</span><span>0.75</span></div>
              <div class="roi-row"><span>18 · Параметры</span><span>20 ч</span><span>+8</span><span>0.4</span></div>
            </div>
            <div class="teal-callout">Начни с задания 7. Максимум баллов за минимум времени.</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Каждое действие привязано к результату</div>
        <div class="roi-chain">
          <div>📐 Планиметрия <span>3 часа</span></div>
          <div class="chain-arrow">↓</div>
          <div>+3 балла к прогнозу</div>
          <div class="chain-arrow">↓</div>
          <div>МАИ на 3 балла ближе</div>
          <div class="chain-arrow">↓</div>
          <div>2 новых вуза в зоне досягаемости</div>
        </div>
        <div class="ari-note">Ари пересчитывает маршрут каждую неделю. Новые данные — новый план.</div>
      </div>
    </div>
  `;
}

function renderMiniOrbitMap(current = demoData.october.currentTotal, shifted = false) {
  const universities = [
    ["МАИ", "yellow", "42%", shifted ? "60%" : "64%", shifted ? "just-entered" : ""],
    ["МИРЭА", "red", shifted ? "76%" : "78%", "62%", ""],
    ["МИСИС", "red", shifted ? "70%" : "72%", "47%", ""],
    ["ВШЭ", "red", shifted ? "71%" : "73%", "24%", "starred"],
    ["МФТИ", "red", "24%", "35%"],
  ];
  return `
    <div class="mini-orbit">
      <div class="zone-fill zone-red"><span>далеко</span></div>
      <div class="zone-fill zone-yellow"><span>близко</span></div>
      <div class="zone-fill zone-green"><span>открыт</span></div>
      <div class="orbit-core">${current}<span>баллов</span></div>
      ${universities.map(([name, zone, left, top, extra = ""]) => `<div class="orbit-uni ${zone} ${extra}" style="left:${left};top:${top}">${name}</div>`).join("")}
    </div>
  `;
}

function renderCapabilityMap() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div>
          <div class="panel-title">Живая карта вузов</div>
          <div class="panel-subtitle">Не одноразовый калькулятор, а постоянный спутник</div>
        </div>
        <div class="map-contrast-stack">
          <div class="contrast-card contrast-dim">
            <div class="map-icon">📊</div>
            <div class="contrast-label">Калькулятор вузов</div>
            <div class="lesson-meta">Зашёл → ввёл баллы → получил список → закрыл. Через месяц — повторил.</div>
            <div class="tag">1–2 раза в сезон</div>
          </div>
          <div class="contrast-card contrast-bright live-map-card">
            <div class="map-icon pulse">🗺️</div>
            <div class="contrast-label">Живая карта</div>
            <div class="lesson-meta">Обновляется после каждого действия. Вузы переходят из красной зоны в жёлтую, из жёлтой — в зелёную.</div>
            <div class="tag">После каждого задания</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Мини-демо карты</div>
        ${renderMiniOrbitMap()}
        <div class="map-legend">
          <span>🟢 открыт</span>
          <span>🟡 близко</span>
          <span>🔴 далеко</span>
        </div>
        <div class="ari-note">Сейчас Саша в начале пути. Скоро ты увидишь, как вузы начнут «зажигаться».</div>
      </div>
    </div>
  `;
}

function renderFeedbackLoop() {
  const stepsLoop = [
    ["📐", "Решил задание", "планиметрия · 3 часа", "действие"],
    ["📈", "Прогноз сдвинулся", "216 → 219", "+3 балла"],
    ["🗺️", "Карта обновилась", "МАИ ближе", "на 3 балла"],
    ["💡", "Понятен след. шаг", "русский +4", "за 2 часа"],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel feedback-panel">
        <div class="center-head">
          <div class="panel-title">Петля обратной связи — главное отличие</div>
          <div class="panel-subtitle">Три возможности работают вместе и создают ощущение движения</div>
        </div>
        <div class="loop-chain">
          ${stepsLoop.map(([icon, title, meta, example], index) => `
            <div class="loop-step" style="--delay:${index * 0.2}s">
              <div class="loop-icon">${icon}</div>
              <strong>${title}</strong>
              <span>${meta}</span>
              <em>${example}</em>
            </div>
            ${index < stepsLoop.length - 1 ? `<div class="loop-arrow" style="--delay:${0.85 + index * 0.12}s">→</div>` : ""}
          `).join("")}
          <div class="loop-cycle-arrow">цикл повторяется</div>
        </div>
        <div class="effect-grid">
          <div class="effect-card teal"><strong>Видимый прогресс</strong><span>Не «ты молодец», а «ты только что приблизился к МФТИ на 2 балла, осталось 7».</span></div>
          <div class="effect-card amber"><strong>Осмысленность действий</strong><span>Не «решай тригонометрию», а «закрой 3 балла, которые откроют 4 новых вуза».</span></div>
          <div class="effect-card rose"><strong>Цена бездействия</strong><span>Пропустил неделю? Прогноз снизился, вуз отдалился. Не наказание — прозрачная связь.</span></div>
        </div>
        <div class="summary-conclusion">Именно эта петля создаёт мотивацию. Ученик не просто "занимается" — он видит, как каждое действие двигает его к цели.</div>
      </div>
    </div>
  `;
}

function renderAriInvite() {
  return `
    <div class="main-grid invite-grid">
      ${chatShell([
        msg("ari", "Теперь ты видишь, как я работаю. Не просто аналитика — а маршрут. 🗺️"),
        msg("ari", "Давай начнём! Расскажи мне: куда хочешь поступить, какие предметы сдаёшь и что тебя волнует."),
        msg("ari", "Можешь написать своими словами — я разберусь. 😊"),
      ], "Расскажи о своей цели...", "Начать", 16)}
      <div class="panel">
        <div class="panel-title">Что будет дальше</div>
        <div class="next-steps-list">
          <div class="next-step-item"><div>1</div><strong>Ты расскажешь о себе</strong><span>Своими словами: куда хочешь, что сдаёшь, какие баллы</span></div>
          <div class="next-step-item"><div>2</div><strong>Я построю карту вузов</strong><span>Покажу, куда ты проходишь сейчас и что нужно для цели</span></div>
          <div class="next-step-item"><div>3</div><strong>Мы выберем полярную звезду</strong><span>Один амбициозный вуз-ориентир + запасные варианты</span></div>
        </div>
        <div class="ari-note">Весь процесс — 5 минут. Потом у тебя будет личный маршрут.</div>
      </div>
    </div>
  `;
}

function renderChatIntro() {
  return `
    <div class="main-grid onboarding-grid">
      ${chatShell([
        msg("ari", "Привет! Расскажи мне о себе: куда хочешь поступить, что сдаёшь и что тебя волнует. Пиши своими словами — я разберусь. 😊"),
        msg("sasha highlight", "Я в 11 классе, из региона. Хочу в Москву на AI или ML. Технический вуз, но без физики — сдаю русский, математику профиль и информатику. Пробники писал на средние баллы, не знаю, хватит ли для нормального вуза."),
      ], "Сообщение отправлено", "Отправить", 17)}
      <div class="panel">
        <div class="panel-title">Ари читает запрос</div>
        <div class="shimmer-stack">
          <div class="shimmer-box"></div>
          <div class="shimmer-box short"></div>
          <div class="shimmer-box"></div>
        </div>
        <div class="mini-card"><strong>Свободный ввод вместо анкеты</strong><br><span class="panel-subtitle">Саша пишет как человек — Ари разбирает сама.</span></div>
      </div>
    </div>
  `;
}

function renderAriStructures() {
  const chips = ["📍 Москва", "🤖 AI / ML", "❌ Без физики", "📚 Р + М + И", "🎓 11 класс"];
  return `
    <div class="main-grid onboarding-grid">
      ${chatShell([
        msg("sasha", "Я в 11 классе, из региона. Хочу в Москву на AI или ML. Технический вуз, но без физики..."),
        msg("ari", "Поняла! Вот что я выделила из твоего запроса: 👇"),
        msg("ari", "Москва, AI/ML, технический вуз, без физики, предметы — русский + математика + информатика. Всё верно?"),
      ], "Да, всё верно", "Подтвердить", 18)}
      <div class="panel">
        <div>
          <div class="panel-title">Параметры маршрута</div>
          <div class="structure-flow">хаос → структура</div>
        </div>
        <div class="profile-chip-grid">
          ${chips.map((chip, index) => `<div class="profile-chip" style="--delay:${index * 0.12}s">${chip}</div>`).join("")}
        </div>
        <div class="mini-card"><strong>Из текста — в профиль за секунды</strong><br><span class="panel-subtitle">Следующий шаг — стартовые баллы. Без них карта вузов будет фантазией.</span></div>
      </div>
    </div>
  `;
}

function renderAriAsksScores() {
  return `
    <div class="main-grid onboarding-grid">
      ${chatShell([
        msg("ari", "Отлично, профиль готов! 👍"),
        msg("ari", "Теперь мне нужны твои примерные результаты пробников по трём предметам."),
        msg("ari", "Не переживай — это не экзамен. Мне нужна точка старта, чтобы построить реалистичный маршрут, а не фантазию."),
        msg("ari", "Введи баллы — даже примерные подойдут."),
      ], "Ввести баллы", "Ввести баллы", 19)}
      <div class="panel">
        <div class="panel-title">Зачем нужны баллы</div>
        <div class="why-scores-list">
          <div class="why-scores-card">📊 <strong>Точка старта</strong><span>Чтобы прогноз был реалистичным, а не абстрактным</span></div>
          <div class="why-scores-card">🗺️ <strong>Карта вузов</strong><span>Чтобы показать, какие вузы уже доступны</span></div>
          <div class="why-scores-card">🧭 <strong>Маршрут</strong><span>Чтобы рассчитать, сколько баллов нужно набрать и за какое время</span></div>
        </div>
        <div class="ari-note">Даже примерные баллы дадут точную картину. Потом уточним после первого пробника.</div>
      </div>
    </div>
  `;
}

function renderScoreInput() {
  const scores = demoData.october.scores;
  return `
    <div class="main-grid score-input-grid">
      ${chatShell([
        msg("ari", "Отлично, введи баллы по каждому предмету:"),
        msg("sasha highlight", "Русский — примерно 78, математика — где-то 58, информатика — 80."),
        msg("ari", "Принято! Сумма — 216. Строю карту вузов..."),
      ], "Баллы отправлены", "Показать карту", 20)}
      <div class="panel">
        <div class="panel-title">Стартовые баллы</div>
        <div class="score-input-list">
          ${scoreInputCard("Русский язык", scores.russian)}
          ${scoreInputCard("Профильная математика", scores.math, true)}
          ${scoreInputCard("Информатика", scores.informatics)}
        </div>
        <div class="score-total">Сумма: <strong>${demoData.october.currentTotal}</strong></div>
      </div>
    </div>
  `;
}

function renderFirstMap() {
  return `
    <div class="main-grid one-col">
      <div class="panel first-map-panel">
        <div class="map-context">Сумма сейчас: 216 · прогноз к июню: 243 · без физики · Москва</div>
        <div class="zone-map-grid">
          <section class="zone-column green">
            <div><strong>Уже проходишь</strong><span>Баллов достаточно</span></div>
            <div class="empty-zone">Зелёная зона появится после первых точных действий.</div>
          </section>
          <section class="zone-column yellow">
            <div><strong>Близко</strong><span>До прохождения ≤ 10 баллов</span></div>
            ${zoneUniCard("mai", "yellow")}
            <div class="zone-caption">МАИ — первый вуз, который можно открыть быстрым рычагом.</div>
          </section>
          <section class="zone-column red">
            <div><strong>Нужно расти</strong><span>Пока далеко от ориентира</span></div>
            ${zoneUniCard("mirea", "red")}
            ${zoneUniCard("misis", "red")}
            ${zoneUniCard("hse", "red")}
            ${zoneUniCard("mipt", "red dim")}
          </section>
        </div>
        <div class="first-map-ari-note">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div>${typewriterText("Не пугайся красного. Это не приговор — это точка старта. У нас 8 месяцев и чёткий план. Давай выберем твою цель.")}</div>
        </div>
      </div>
    </div>
  `;
}

function renderAriSuggestsStar() {
  const choices = [
    ["МАИ", "жёлтая зона", "ближе всего"],
    ["МИРЭА", "красная зона", "запасной вариант"],
    ["МИСИС", "красная зона", "запасной вариант"],
    ["ВШЭ", "красная зона", "амбициозная цель"],
  ];
  return `
    <div class="main-grid star-grid">
      ${chatShell([
        msg("ari", "Саша, давай выберем полярную звезду — один вуз, который станет твоей главной целью. 🌟"),
        msg("ari", "Маршрут я буду строить к нему. Но не переживай — мы обязательно сформируем запасные надёжные варианты."),
        msg("ari", "Вот подборка вузов, которые подходят под твой профиль. Какой из них тебе ближе?"),
      ], "Выбрать цель", "Выбрать цель", 22)}
      <div class="panel">
        <div class="panel-title">Карта выбора</div>
        <div class="star-choice-grid">
          ${choices.map(([name, zone, meta], index) => `<div class="star-choice-card" style="--delay:${index * 0.12}s"><strong>${name}</strong><span>${zone}</span><em>${meta}</em></div>`).join("")}
        </div>
        <div class="mini-card"><strong>Полярная звезда — не гарантия</strong><br><span class="panel-subtitle">Это ориентир, под который Ари строит стратегию. Запасные варианты всегда рядом.</span></div>
      </div>
    </div>
  `;
}

function renderUniversityCards() {
  const hse = university("hse");
  const backups = ["mai", "mirea", "misis", "mipt"].map(university);
  return `
    <div class="main-grid one-col">
      <div class="panel university-choice-panel">
        <div class="center-head">
          <div class="panel-title">Какой вуз станет твоей целью?</div>
          <div class="panel-subtitle">Это будет твоя полярная звезда — ориентир для маршрута</div>
          <div class="tag">без физики</div>
        </div>
        <button class="university-hero-card selected" type="button" data-university="hse" data-step="23">
          <div class="role-pill">рекомендация</div>
          <strong>${hse.name}</strong>
          <span>${hse.program}</span>
          <em>ориентир ${hse.benchmark}</em>
        </button>
        <div class="university-backup-grid">
          ${backups.map((item) => `
            <button class="university-small-card ${item.id === "mipt" ? "dim" : ""}" type="button" data-university="${item.id}" data-step="${item.id === "hse" ? 23 : 22}">
              <strong>${item.name}</strong>
              <span>${item.program} · ${item.benchmark}</span>
              <em>${item.id === "mipt" ? "вне зоны" : "запасной"}</em>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderRouteLocked() {
  const current = demoData.october.currentTotal;
  const target = university("hse").benchmark;
  const progress = Math.round((current / target) * 100);
  return `
    <div class="main-grid one-col">
      <div class="panel route-locked-panel">
        <div class="polar-label">ПОЛЯРНАЯ ЗВЕЗДА</div>
        <div class="polar-title">ВШЭ <span>★</span></div>
        <div class="panel-subtitle">ПМИ · ориентир ${target}</div>
        <div class="goal-progress">
          <div><span>Сейчас: ${current}</span><span>Цель: ${target}</span></div>
          <div class="goal-bar"><div style="width:${progress}%"></div><i style="left:${progress}%"></i></div>
          <strong>Осталось набрать ${target - current} балла</strong>
        </div>
        <div class="backup-row">
          <div>МАИ <span>248 · запасной</span></div>
          <div>МИРЭА <span>263 · запасной</span></div>
          <div>МИСИС <span>267 · запасной</span></div>
        </div>
        <div class="first-map-ari-note">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div>${typewriterText("ВШЭ — твоя полярная звезда. Я буду строить маршрут к ней. 72 балла за 8 месяцев — это реально, если работать по плану. Поехали!")}</div>
        </div>
      </div>
    </div>
  `;
}

function renderAriBuildsRoute() {
  const buildSteps = ["Баллы ЕГЭ", "Порог ВШЭ", "Запасные вузы", "План на неделю"];
  return `
    <div class="main-grid build-route-grid">
      ${chatShell([
        msg("ari", "Отлично! ВШЭ — достойная цель. Сейчас построю твой маршрут. 🧭"),
        msg("ari", "Я учитываю: твои стартовые баллы, структуру каждого экзамена, проходные всех вузов, и рассчитываю оптимальный путь."),
        msg("ari", "Готово! Открывай свой первый дашборд."),
      ], "Маршрут готов", "Открыть дашборд", 25)}
      <div class="panel">
        <div class="panel-title">Расчёт маршрута</div>
        <div class="route-build-steps">
          ${buildSteps.map((item) => `<div><strong>${item}</strong><span>✓ готово</span></div>`).join("")}
        </div>
        <div class="forecast-start">
          <span>Стартовый прогноз</span>
          <strong>${demoData.october.forecast}</strong>
          <em>к июню</em>
        </div>
      </div>
    </div>
  `;
}

function renderFirstDashboard() {
  return `
    <div class="main-grid dashboard-grid">
      <div class="panel">
        <div class="panel-title">Твой маршрут до ВШЭ</div>
        ${renderForecast()}
        <div class="recommendation-card">
          <strong>Сегодня: планиметрия</strong>
          <div class="rec-chip-row"><span>Задание 7</span><span>3 часа</span><span>+3 к прогнозу</span></div>
          <em>Это самый эффективный первый шаг — максимум баллов за минимум времени</em>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Карта маршрута</div>
        ${renderMiniOrbitMap()}
        <div class="mini-card"><strong>Это твой новый личный кабинет</strong><br><span class="panel-subtitle">Прогноз, рекомендация, карта — обновляются после каждого действия.</span></div>
        <div class="dashboard-contrast-note">Помнишь, как выглядел обычный ЛК? Список уроков и дедлайны. Теперь у тебя маршрут.</div>
      </div>
    </div>
  `;
}

function renderDiagnostics() {
  const scores = demoData.october.scores;
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Диагностика</div><div class="panel-subtitle">Стартовые баллы по предметам</div></div>
        <div class="diagnostics-list">
          ${diagnosticsScoreRow("Русский", scores.russian)}
          ${diagnosticsScoreRow("Математика", scores.math, true)}
          ${diagnosticsScoreRow("Информатика", scores.informatics)}
        </div>
        <div class="mini-card"><strong>Математика — главный рычаг</strong><br><span class="panel-subtitle">Не потому что самая слабая, а потому что даёт максимальный прирост суммы. Ари сейчас покажет почему.</span></div>
      </div>
      <div class="panel">
        <div class="panel-title">Что это значит для маршрута</div>
        ${renderForecast()}
        <div class="mini-card"><strong>Математика 58 — здесь спрятаны самые быстрые баллы</strong><br><span class="panel-subtitle">Ари знает структуру ЕГЭ и видит, где рычаг.</span></div>
      </div>
    </div>
  `;
}

function renderExamStructure() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Как устроены баллы ЕГЭ по математике</div><div class="panel-subtitle">Не все задания одинаково полезны</div></div>
        <div class="exam-structure">
          <div class="exam-row head"><span>№</span><span>Тема</span><span>Перв.</span><span>Саша</span><span>ROI</span></div>
          <div class="exam-row best-roi"><span>7</span><span>Планиметрия</span><span>1</span><span>50%</span><span>★ 1.0</span></div>
          <div class="exam-row good-roi"><span>5</span><span>Вероятность</span><span>1</span><span>40%</span><span>0.7</span></div>
          <div class="exam-row"><span>13</span><span>Стереометрия</span><span>3</span><span>20%</span><span>0.4</span></div>
          <div class="exam-row"><span>18</span><span>Параметры</span><span>4</span><span>0%</span><span>0.2</span></div>
        </div>
        <div class="exam-insight">💡 <span>Задание 7 даёт 1 первичный балл ≈ 3 тестовых за 3 часа. Задание 13 даёт 3 первичных, но за 8 часов. Ари выбирает то, что выгоднее.</span></div>
      </div>
      <div class="panel">
        <div><div class="panel-title">Нелинейная шкала</div><div class="panel-subtitle">1 первичный балл ≠ 1 тестовый</div></div>
        <div class="scale-bar">
          <div class="easy"><strong>0–12 перв.</strong><span>0–56 тест.</span><b>1 перв. ≈ 5 тест.</b></div>
          <div class="mid"><strong>12–20 перв.</strong><span>56–78 тест.</span><b>1 перв. ≈ 3 тест.</b></div>
          <div class="hard"><strong>20–32 перв.</strong><span>78–100 тест.</span><b>1 перв. ≈ 2 тест.</b></div>
          <i>Саша: 17 перв. → 58 тест. · каждый следующий первичный ≈ 3 тестовых</i>
        </div>
        <div class="mini-card"><strong>Саша в средней зоне</strong><br><span class="panel-subtitle">Каждый первичный балл даёт ~3 тестовых. Это хорошая отдача — но в лёгкой зоне было бы ~5. Чем выше балл, тем дороже каждый следующий.</span></div>
        <div class="mini-card"><strong>Ари знает эту шкалу</strong><br><span class="panel-subtitle">И строит маршрут с учётом нелинейности.</span></div>
      </div>
    </div>
  `;
}

function renderRecommendationMath() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div class="series-head"><span>1 / 3</span><strong>Рекомендации на эту неделю</strong></div>
        <div class="recommendation-card">
          <strong>📐 Математика · Задание 7: Планиметрия</strong>
          <p>Планиметрия — твой главный рычаг прямо сейчас. Этот блок даст +3 тестовых балла за 3 часа работы: прогноз вырастет с 216 до 219, а МАИ станет ближе.</p>
          <div class="roi-mini-chain"><span>📐 Планиметрия<br><em>3 часа</em></span><b>→</b><span>+3 балла<br><em>к прогнозу</em></span><b>→</b><span>🎯 МАИ ближе</span></div>
        </div>
        <div class="mini-plan">
          <div>1. Разбор теории <span>40 мин</span></div>
          <div>2. 10 задач с решениями <span>1.5 ч</span></div>
          <div>3. Мини-тест <span>30 мин</span></div>
        </div>
        <div class="ari-note">МАИ: на 3 балла ближе (осталось 29)</div>
      </div>
      <div class="panel">
        <div class="panel-title">Почему именно планиметрия</div>
        <div class="roi-comparison current"><strong>Планиметрия (зад. 7)</strong><span>3 часа → +3 балла</span><em>1.0 балл/час</em></div>
        <div class="roi-comparison alternative"><strong>Стереометрия (зад. 13)</strong><span>8 часов → +6 баллов</span><em>0.75 балла/час</em></div>
        <div class="mini-card"><strong>Ари выбирает не самое сложное, а самое выгодное.</strong><br><span class="panel-subtitle">ROI-подход: максимум баллов за минимум времени.</span></div>
      </div>
    </div>
  `;
}

function renderWeeklyPlan() {
  const cards = [
    ["amber", "📐 Задание 7: Планиметрия", "3 часа → +3 балла", "Главный рычаг · самый высокий ROI"],
    ["sky", "📝 Задание 27: Сочинение", "2 часа → +4 балла", "Аргументация 3/5 → 5/5"],
    ["teal", "💻 Задание 25: Массивы", "1.5 часа → +2 балла", "Крайние случаи · шаблон ответа"],
  ];
  return `
    <div class="main-grid weekly-grid">
      <div class="panel">
        <div class="panel-title">План на неделю: 3 предмета</div>
        <div class="weekly-plan-list">
          ${cards.map(([tone, title, result, meta]) => `<div class="weekly-plan-card ${tone}"><strong>${title}</strong><b>${result}</b><span>${meta}</span></div>`).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Итого за неделю</div>
        <div class="weekly-summary"><strong>6.5 часов</strong><span>+9 баллов к прогнозу</span></div>
        <div class="weekly-breakdown">
          <div>📐 Математика <span>3ч → +3</span></div>
          <div>📝 Русский <span>2ч → +4</span></div>
          <div>💻 Информатика <span>1.5ч → +2</span></div>
        </div>
        <div class="mini-card"><strong>Не «учись больше»</strong><br><span class="panel-subtitle">А конкретно: что, сколько часов, какой эффект.</span></div>
        <div class="mini-card"><strong>Каждую неделю — новый план</strong><br><span class="panel-subtitle">На основе свежих данных и нового прогноза.</span></div>
      </div>
    </div>
  `;
}

function renderTaskCompleted() {
  return `
    <div class="main-grid one-col">
      <div class="panel task-complete-panel">
        <div class="polar-label">САША ВЫПОЛНИЛ ЗАДАНИЕ</div>
        <div class="task-title">📐 Планиметрия · Задание 7</div>
        <div class="task-checklist"><div>✓ Разбор теории</div><div>✓ Задачи 1–5</div><div>✓ Задачи 6–10</div><div>✓ Мини-тест</div></div>
        <div class="accuracy-shift"><span>50%<em>до</em></span><b>→</b><span class="after">82%<em>после</em></span></div>
        <div class="task-time"><strong>⏱ Затрачено: 2 ч 45 мин</strong><span>Ари рассчитывал: ~3 часа</span></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("Отлично! Задание 7 закрыто. Точность выросла с 50% до 82%. Давай посмотрим, как это повлияло на прогноз.")}</div></div>
      </div>
    </div>
  `;
}

function renderScoreShift() {
  return `
    <div class="main-grid two-col">
      <div class="panel shift-main-panel">
        <div class="panel-header"><div><div class="panel-title">Балл обновлён</div><div class="panel-subtitle">Одно задание — и прогноз сдвинулся</div></div><div class="delta-badge">+3</div></div>
        ${renderForecastProgress(demoData.afterRecommendation.forecast)}
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("Было 216. Одно задание — стало 219. Три балла ближе к цели. А это только планиметрия — впереди ещё русский и информатика.")}</div></div>
        <div class="motivation-strip">🎯 Ты решил задание — и стал ближе к ВШЭ!<span>Каждое следующее задание сдвигает прогноз дальше.</span></div>
      </div>
      <div class="panel">
        <div class="panel-title">Карта пересчитывается...</div>
        ${renderMiniOrbitMap(demoData.october.currentTotal)}
      </div>
    </div>
  `;
}

function renderMapShift() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div class="panel-title">Карта обновилась</div>
        ${renderMiniOrbitMap(demoData.afterRecommendation.forecast, true)}
      </div>
      <div class="panel">
        <div class="panel-title">Что изменилось</div>
        <div class="shift-card yellow"><strong>МАИ</strong><span>было 32 → стало 29</span><em>на 3 балла ближе</em></div>
        <div class="shift-card red"><strong>МИРЭА</strong><span>было 47 → стало 44</span></div>
        <div class="shift-card red"><strong>ВШЭ</strong><span>было 72 → стало 69</span><em>путь начался</em></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>Видишь? Одно задание — и карта сдвинулась. МАИ теперь на 3 балла ближе. За эту неделю план — ещё +6 баллов.</div></div>
      </div>
    </div>
  `;
}

function renderMotivationScreen() {
  const items = [
    ["🏢", "Кампус на Покровке", "Учёба в центре Москвы"],
    ["💰", "Стипендия до 25 000 ₽/мес", "За хорошие результаты"],
    ["🚀", "Стажировки с 3 курса", "Яндекс, Сбер, VK"],
    ["🌍", "Программы обмена", "Университеты Европы и Азии"],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel motivation-panel">
        <div class="motivation-head"><img src="./assets/ari-secondary.png" alt="Ари"><div><strong>Саша, а вот что ждёт тебя в ВШЭ:</strong><span>Не абстрактная цель — а понятная картинка будущего.</span></div></div>
        <div class="motivation-grid">${items.map(([icon, title, text], index) => `<div class="motivation-card" style="--delay:${index * 0.12}s"><div>${icon}</div><strong>${title}</strong><span>${text}</span></div>`).join("")}</div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("Каждое решённое задание — шаг к этому. Не к абстрактной цифре, а к этому кампусу, этой стипендии, этим стажировкам. Продолжай!")}</div></div>
      </div>
    </div>
  `;
}

function renderOctoberProgress() {
  const current = demoData.afterRecommendation.forecast;
  return `
    <div class="main-grid progress-grid">
      <div class="panel">
        <div class="panel-title">Твой прогресс · Октябрь</div>
        <div class="panel-subtitle">На основании проделанной работы твой прогноз вырос до 219.</div>
        <div class="month-score"><strong>${current}</strong><span>/ 288</span></div>
        <div class="goal-progress"><div><span>Старт: 216</span><span>Цель: 288</span></div><div class="goal-bar"><div style="width:${Math.round(current / 288 * 100)}%"></div><i style="left:${Math.round(current / 288 * 100)}%"></i></div><strong>Октябрь: +3 балла после первого задания</strong></div>
      </div>
      <div class="panel">
        <div class="panel-title">Сколько ещё нужно</div>
        <div class="progress-gap-card"><strong>До МАИ</strong><span>29 баллов</span><em>на 3 ближе</em></div>
        <div class="progress-gap-card"><strong>До МИРЭА</strong><span>44 балла</span><em>на 3 ближе</em></div>
        <div class="progress-gap-card"><strong>До МИСИС</strong><span>48 баллов</span><em>на 3 ближе</em></div>
        <div class="progress-gap-card"><strong>До ВШЭ</strong><span>69 баллов</span><em>путь начался</em></div>
      </div>
    </div>
  `;
}

function renderProbnikInvite() {
  return `
    <div class="main-grid invite-grid">
      ${chatShell([
        msg("ari", "Саша, ты хорошо поработал эти недели! 💪"),
        msg("ari", "Самое время написать пробник и обновить прогноз."),
        msg("ari", "Пробник покажет реальный прирост по всем предметам. Я пересчитаю прогноз и обновлю карту вузов."),
        msg("ari", "Готов?"),
      ], "Готов к пробнику", "Пройти пробник", 36)}
      <div class="panel probnik-card">
        <div class="probnik-icon">📝</div>
        <div class="panel-title">Время пробника</div>
        <div class="panel-subtitle">Пробник обновит прогноз и пересчитает карту вузов</div>
        <div class="probnik-list"><div>✓ Русский язык — 90 мин</div><div>✓ Профильная математика — 235 мин</div><div>✓ Информатика — 235 мин</div></div>
      </div>
    </div>
  `;
}

function renderProbnikResults() {
  const oct = demoData.october.scores;
  const dec = demoData.december.scores;
  return `
    <div class="main-grid probnik-results-grid">
      <div class="panel">
        <div><div class="panel-title">Результаты пробника</div><div class="panel-subtitle">Декабрь · через 2 месяца работы с Ари</div></div>
        <div class="probnik-result-list">
          ${probnikResultCard("Русский", oct.russian, dec.russian)}
          ${probnikResultCard("Математика", oct.math, dec.math, true)}
          ${probnikResultCard("Информатика", oct.informatics, dec.informatics)}
        </div>
        <div class="score-total">Сумма: <strong>${decemberTotal()}</strong> <span>было 216 · +16</span></div>
      </div>
      <div class="panel probnik-context">
        <div class="panel-title">Два месяца с Ари</div>
        <div class="big-delta">+16<span>баллов за 2 месяца</span></div>
        <div class="mini-card"><strong>Математика: +13 из +16</strong><br><span class="panel-subtitle">Основной рост там, где Ари сфокусировала усилия.</span></div>
      </div>
    </div>
  `;
}

function renderMathGrowth() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Математика: +13 баллов</div><div class="panel-subtitle">Стратегия ROI в действии</div></div>
        <div class="math-growth-hero"><span>58</span><b>→</b><strong>71</strong></div>
        <div class="roi-results">
          <div class="roi-results-row head"><span>Задание</span><span>Было</span><span>Стало</span><span>Эффект</span></div>
          <div class="roi-results-row best"><span>7 · Планиметрия</span><span>50%</span><span>82%</span><span>+3 ★</span></div>
          <div class="roi-results-row"><span>5 · Вероятности</span><span>40%</span><span>75%</span><span>+3</span></div>
          <div class="roi-results-row"><span>9 · Текстовые</span><span>60%</span><span>85%</span><span>+2</span></div>
          <div class="roi-results-row"><span>Часть 1</span><span>72%</span><span>88%</span><span>+5</span></div>
        </div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>Помнишь, я говорила: начни с планиметрии, потом вероятности? Вот результат — +13 баллов за два месяца.</div></div>
      </div>
      <div class="panel">
        <div class="panel-title">Почему именно эти задания</div>
        <div class="roi-comparison current"><strong>Планиметрия</strong><span>3 часа → +3 балла</span><em>1.0 б/ч ★</em></div>
        <div class="roi-comparison"><strong>Вероятности</strong><span>4 часа → +3 балла</span><em>0.75 б/ч</em></div>
        <div class="roi-comparison"><strong>Текстовые</strong><span>3 часа → +2 балла</span><em>0.67 б/ч</em></div>
        <div class="mini-card"><strong>~10 часов целенаправленной работы = +8 баллов</strong><br><span class="panel-subtitle">Остальные +5 — от регулярной практики по части 1.</span></div>
      </div>
    </div>
  `;
}

function renderNewForecast() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Прогноз обновлён</div><div class="panel-subtitle">На основе пробника от декабря</div></div>
        <div class="forecast-compare">
          <div class="contrast-card contrast-dim"><div class="contrast-label">Октябрь</div><span>Текущий: 216</span><strong>Прогноз 243</strong></div>
          <div class="contrast-arrow">→</div>
          <div class="contrast-card contrast-bright"><div class="contrast-label">Декабрь</div><span>Текущий: 232</span><strong>Прогноз 257</strong></div>
        </div>
        <div class="delta-row"><span>Текущий: +16</span><span>Прогноз: +14</span></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>Прогноз вырос на 14 пунктов. Ты прогрессируешь быстрее, чем средний ученик на платформе.</div></div>
      </div>
      <div class="panel">
        <div class="panel-title">Что изменилось</div>
        ${renderDecemberForecastCard()}
        <div class="mini-card"><strong>До ВШЭ: 31 балл</strong><br><span class="panel-subtitle">Было 45 → стало 31. На 14 ближе.</span></div>
        <div class="mini-card"><strong>Прогноз — это вектор</strong><br><span class="panel-subtitle">Не фиксированная точка, а траектория после каждого пробника.</span></div>
      </div>
    </div>
  `;
}

function renderFirstGreen() {
  return `
    <div class="main-grid one-col">
      <div class="panel first-green-panel">
        <div class="unlocked-title">Первый вуз открыт!</div>
        <div class="university-unlocked">
          <div class="green-badge">ЗЕЛЁНАЯ ЗОНА</div>
          <strong>МАИ</strong><span>ПМИ · ориентир 248</span><em>✓ Прогноз 257 > порог 248</em>
        </div>
        <div class="unlock-timeline"><div>Октябрь<span>🔴 далеко<br>gap: 32</span></div><div>Ноябрь<span>🟡 близко<br>gap: 29</span></div><div>Декабрь<span>🟢 открыт<br>прогноз > порог</span></div></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("МАИ — твой первый открытый вуз! Два месяца назад до него было 32 балла. Теперь по прогнозу ты проходишь. Это не случайность — это результат стратегии.")}</div></div>
        <div class="summary-soft">А теперь посмотрим, что произошло с остальными вузами.</div>
      </div>
    </div>
  `;
}

function renderUpdatedMap() {
  return `
    <div class="main-grid two-col updated-map-screen">
      <div class="panel">
        <div class="zone-map-grid updated-map-grid">
          <section class="zone-column green"><div><strong>Уже проходишь</strong><span>Прогноз 257</span></div>${decemberZoneCard("mai", "green", "+9 запас")}</section>
          <section class="zone-column yellow"><div><strong>Близко</strong><span>До прохождения ≤ 10</span></div>${decemberZoneCard("mirea", "yellow", "осталось 6")}${decemberZoneCard("misis", "yellow", "осталось 10")}</section>
          <section class="zone-column red"><div><strong>Нужно расти</strong><span>Цель ещё впереди</span></div>${decemberZoneCard("hse", "red", "осталось 31")}</section>
        </div>
      </div>
      <div class="panel updated-map-change-panel">
        <div class="panel-title">Как изменилась карта</div>
        <div class="shift-card green"><strong>МАИ</strong><span>🔴 → 🟢</span><em>был далеко, теперь открыт</em></div>
        <div class="shift-card yellow"><strong>МИРЭА</strong><span>🔴 → 🟡</span><em>был далеко, теперь близко</em></div>
        <div class="shift-card yellow"><strong>МИСИС</strong><span>🔴 → 🟡</span><em>был далеко, теперь близко</em></div>
        <div class="shift-card red"><strong>ВШЭ</strong><span>🔴 → 🔴</span><em>ещё далеко, но на 14 баллов ближе</em></div>
        <div class="ari-note">В октябре всё было красное. Через два месяца — один зелёный, два жёлтых.</div>
      </div>
    </div>
  `;
}

function renderThreeScenarios() {
  return `
    <div class="main-grid scenario-grid">
      <div class="panel">
        <div><div class="panel-title">Три сценария к июню</div><div class="panel-subtitle">Твой результат зависит от твоих действий</div></div>
        <div class="scenario-chart">
          <div class="scale-edge left">230</div>
          <div class="scale-edge right">290</div>
          <div class="threshold-marker mai" style="--pos:33.2%"><span>МАИ 248</span></div>
          <div class="threshold-marker mirea" style="--pos:54.2%"><span>МИРЭА 263</span></div>
          <div class="threshold-marker misis" style="--pos:59.9%"><span>МИСИС 267</span></div>
          <div class="threshold-marker hse" style="--pos:89.2%"><span>ВШЭ 288</span></div>
          <div class="score-scale">
            <div class="score-fill"></div>
            <div class="current-score-marker">сейчас: 232</div>
          </div>
          <div class="scenario-marker pessimistic" style="--pos:33.2%"><i></i><span>замедлиться · ~248</span></div>
          <div class="scenario-marker realistic" style="--pos:45.8%"><i></i><span>текущий темп · ~257</span></div>
          <div class="scenario-marker optimistic" style="--pos:66.8%"><i></i><span>+1 занятие/нед · ~272</span></div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Что значит каждый сценарий</div>
        <div class="scenario-card pessimistic"><strong>~248 к июню</strong><span>Замедлиться — МАИ на грани, остальные далеко</span></div>
        <div class="scenario-card realistic"><strong>~257 к июню</strong><span>Текущий темп — МАИ уверенно, МИРЭА и МИСИС рядом</span></div>
        <div class="scenario-card optimistic"><strong>~272 к июню</strong><span>+1 занятие/нед — МИРЭА и МИСИС открыты, ВШЭ на горизонте</span></div>
      </div>
    </div>
  `;
}

function renderScenariosToUnis() {
  const rows = [
    ["pessimistic", "Замедлиться", "248", ["МАИ: 🟢 на грани", "МИРЭА: 🔴 далеко", "МИСИС: 🔴 далеко", "ВШЭ: 🔴 далеко"]],
    ["realistic", "Текущий темп", "257", ["МАИ: 🟢 уверенно", "МИРЭА: 🟡 близко", "МИСИС: 🟡 близко", "ВШЭ: 🔴 далеко"]],
    ["optimistic", "+1 занятие в неделю", "272", ["МАИ: 🟢 уверенно", "МИРЭА: 🟢 открыт", "МИСИС: 🟢 открыт", "ВШЭ: 🟡 близко!"]],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel scenario-unis-panel">
        <div class="panel-title">Каждый сценарий — это конкретные вузы</div>
        ${rows.map(([tone, label, score, unis]) => `<div class="scenario-university-row ${tone}"><div><span>${label}</span><strong>${score}</strong></div><div>${unis.map((u) => `<em>${u}</em>`).join("")}</div></div>`).join("")}
        <div class="amber-callout">При оптимистичном сценарии ВШЭ переходит в жёлтую зону — впервые!</div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>Одно дополнительное занятие в неделю — и вместо «МАИ на грани» ты получаешь «МИСИС открыт, ВШЭ в зоне досягаемости».</div></div>
      </div>
    </div>
  `;
}

function renderPatterns() {
  const insights = [
    ["⏰", "Пиковая эффективность — утро", "Задания до 12:00: точность на 15% выше"],
    ["📐", "Геометрия → после теории", "Планиметрия лучше идёт после разбора формул"],
    ["🔄", "Ошибка — знак модуля", "В 4 из 6 задач забываешь раскрытие модуля"],
    ["📅", "Регулярность: 5 из 7 дней", "Выше среднего по платформе: 3.2 дня"],
  ];
  return `
    <div class="main-grid two-col">
      <div class="panel"><div><div class="panel-title">Ари видит, как ты учишься</div><div class="panel-subtitle">Не только баллы — но и паттерны</div></div><div class="insight-list">${insights.map(([icon,title,text]) => `<div class="insight-card"><div>${icon}</div><strong>${title}</strong><span>${text}</span></div>`).join("")}</div></div>
      <div class="panel"><div class="panel-title">Как это влияет на рекомендации</div><div class="mini-card"><strong>Планирование по времени</strong><br><span class="panel-subtitle">Сложные задания — на утро, повторение — на вечер</span></div><div class="mini-card"><strong>Теория перед практикой</strong><br><span class="panel-subtitle">Для геометрии: сначала разбор, потом задачи</span></div><div class="mini-card"><strong>Мини-блоки на ошибки</strong><br><span class="panel-subtitle">Подборки на повторяющиеся слабые места</span></div><div class="ari-note">Обычная платформа знает твои баллы. Ари знает, как ты учишься.</div></div>
    </div>
  `;
}

function renderCalcVsMentor() {
  return `
    <div class="main-grid calc-mentor-grid">
      <div class="panel calc-side">
        <div><div class="panel-title">Калькулятор вузов</div><div class="panel-subtitle">Статичный снимок</div></div>
        <div class="calculator-result-list"><div>✗ ВШЭ · 288 · не проходит</div><div>✗ МИСИС · 267 · не проходит</div><div>✗ МИРЭА · 263 · не проходит</div><div>✗ МАИ · 248 · не проходит</div></div>
        <div class="panel-subtitle">Ввёл 232 → увидел «не проходишь» → закрыл. Всё.</div>
        <div class="chip-row calc-chips"><span>❌ Не знает прогноз</span><span>❌ Не видит динамику</span><span>❌ Не даёт план</span><span>❌ Одноразовый</span></div>
      </div>
      <div class="panel mentor-side">
        <div><div class="panel-title">AI-наставник</div><div class="panel-subtitle">Живая система</div></div>
        <div class="calculator-result-list"><div>✓ МАИ · зелёная зона</div><div>◐ МИРЭА · жёлтая зона</div><div>◐ МИСИС · жёлтая зона</div><div>→ ВШЭ · цель, 31 балл</div></div>
        <div class="panel-subtitle">232 сейчас, но прогноз 257. МАИ уже открыт. План есть.</div>
        <div class="chip-row mentor-chips"><span>✓ Прогноз к июню</span><span>✓ Три сценария</span><span>✓ Конкретный план</span><span>✓ Обновляется</span></div>
      </div>
    </div>
  `;
}

function renderDecemberSummary() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Два месяца с Ари</div><div class="panel-subtitle">Октябрь → Декабрь</div></div>
        <div class="summary-row"><span>Сумма баллов</span><strong>216 → 232</strong><em>+16</em></div>
        <div class="summary-row"><span>Прогноз к июню</span><strong>243 → 257</strong><em>+14</em></div>
        <div class="summary-row"><span>Вузы в зелёной зоне</span><strong>0 → 1</strong><em>МАИ</em></div>
        <div class="summary-row"><span>Вузы в жёлтой зоне</span><strong>1 → 2</strong><em>МИРЭА, МИСИС</em></div>
        <div class="goal-progress"><div><span>Текущий: 232</span><span>ВШЭ 288</span></div><div class="goal-bar"><div style="width:80%"></div><i style="left:80%"></i></div><strong>Прогноз: 257</strong></div>
      </div>
      <div class="panel">
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("Саша, ты здорово продвинулся! МАИ открыт, МИРЭА и МИСИС совсем рядом. Давай теперь разберёмся с вузами подробнее.")}</div></div>
        <div class="next-steps-list"><div class="next-step-item"><div>1</div><strong>Знакомство с вузами</strong><span>Подробно про ВШЭ и МИСИС</span></div><div class="next-step-item"><div>2</div><strong>Рекомендации по подаче</strong><span>Документы, сроки, стратегия</span></div><div class="next-step-item"><div>3</div><strong>Продолжение маршрута</strong><span>Новые рекомендации на январь</span></div></div>
      </div>
    </div>
  `;
}

function januaryZoneCard(id, tone, detail, extra = "") {
  const uni = university(id);
  return `
    <div class="december-zone-card ${tone} ${extra}">
      <strong>${uni.name}${id === "hse" ? " ★" : ""}</strong>
      <span>${uni.program} · ${uni.benchmark}</span>
      <em>${detail}</em>
    </div>
  `;
}

function renderAriUniversityPush() {
  const messages = [
    msg("ari", "Саша, у меня для тебя кое-что новое!"),
    msg("ari", "Ты занимаешься уже 3 месяца, и карта вузов серьёзно изменилась. Пора познакомиться с вузами поближе — не как с цифрами на карте, а как с реальными местами."),
    msg("ari", "Покажу, что внутри ВШЭ и МИСИС, расскажу про подачу документов и сроки. Чтобы к лету ты был готов не только к ЕГЭ, но и к поступлению."),
    msg("ari", "Начнём?"),
  ];
  return `
    <div class="main-grid university-push-grid">
      <div class="panel">${chatShell(messages, "Да, покажи вузы", "Показать вузы", 47)}</div>
      <div class="panel">
        <div class="panel-title">Что покажу</div>
        <div class="research-plan">
          <div><b>1</b><strong>Где ты сейчас</strong><span>Обновлённая карта</span></div>
          <div><b>2</b><strong>ВШЭ изнутри</strong><span>Программа, кампус, стажировки</span></div>
          <div><b>3</b><strong>МИСИС изнутри</strong><span>Надёжный вариант</span></div>
          <div><b>4</b><strong>Новости вузов</strong><span>Обновления и события</span></div>
          <div><b>5</b><strong>Как подавать</strong><span>Процедура, документы, сроки</span></div>
        </div>
        <div class="mini-card"><strong>Ари готовит не только к ЕГЭ, но и к поступлению. Заранее.</strong></div>
      </div>
    </div>
  `;
}

function renderJanuaryMap() {
  return `
    <div class="main-grid two-col january-map-screen">
      <div class="panel">
        <div class="zone-map-grid updated-map-grid">
          <section class="zone-column green"><div><strong>Уже проходишь</strong><span>Прогноз 268</span></div>${januaryZoneCard("mai", "green", "запас +20")}</section>
          <section class="zone-column yellow"><div><strong>Близко</strong><span>На границе</span></div>${januaryZoneCard("mirea", "yellow", "осталось 5")}${januaryZoneCard("misis", "yellow", "осталось 1", "almost-open")}</section>
          <section class="zone-column red"><div><strong>Нужно расти</strong><span>Цель ещё впереди</span></div>${januaryZoneCard("hse", "red", "осталось 20 · полярная звезда")}${januaryZoneCard("mipt", "red", "осталось 33")}</section>
        </div>
      </div>
      <div class="panel january-progress-panel">
        <div class="panel-title">Прогресс за месяц</div>
        <div class="summary-row"><span>Сумма</span><strong>232 → 248</strong><em>+16</em></div>
        <div class="summary-row"><span>Прогноз</span><strong>257 → 268</strong><em>+11</em></div>
        <div class="summary-row"><span>МИСИС</span><strong>осталось 10 → 1</strong><em>почти!</em></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>МИСИС на границе зелёной зоны — ещё чуть-чуть и он откроется. А теперь давай посмотрим, что внутри этих вузов.</div></div>
      </div>
    </div>
  `;
}

function universityDetailHeader(kind, status, name, program, benchmark, distance, distanceLabel = "Осталось") {
  return `
    <div class="university-detail-head">
      <div class="chip-row"><span>${kind}</span><span>${status}</span></div>
      <strong>${name}</strong>
      <em>${program}</em>
      <div>Ориентир: <b>${benchmark}</b> · Прогноз Саши: <b>${januaryState.forecast}</b> · ${distanceLabel}: <b>${distance}</b></div>
    </div>
  `;
}

function renderHSECard() {
  return `
    <div class="main-grid two-col">
      <div class="panel university-detail-card">
        ${universityDetailHeader("ПОЛЯРНАЯ ЗВЕЗДА ★", "🔴 ещё нужно расти", "НИУ ВШЭ", "Прикладная математика и информатика (ПМИ)", 288, "20")}
        <div class="program-detail-grid">
          <div>📍 <strong>Москва, Покровка</strong><span>Кампус в центре города</span></div>
          <div>📚 <strong>4 года бакалавриат</strong><span>Очная форма, бюджет</span></div>
          <div>💰 <strong>Стипендия до 25 000 ₽/мес</strong><span>За академические результаты</span></div>
          <div>🚀 <strong>Стажировки с 3 курса</strong><span>Яндекс, Сбер, VK, Тинькофф</span></div>
        </div>
        <div class="study-block"><strong>Что изучают</strong><span>Математический анализ, линейная алгебра, алгоритмы, ML, статистика, программирование: Python, C++.</span></div>
      </div>
      <div class="panel">
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>ВШЭ ПМИ — одна из сильнейших программ в России. До неё ещё 20 баллов, но ты двигаешься в правильном направлении. Каждое решённое задание — шаг к этому кампусу и этим возможностям.</div></div>
        <div class="mini-card"><strong>Сильные стороны</strong><br><span class="panel-subtitle">Сильный бренд, международные связи, выпускники в топ-компаниях</span></div>
        <div class="mini-card"><strong>Что нужно знать</strong><br><span class="panel-subtitle">Высокая нагрузка в первые 2 года, сильная математическая база</span></div>
        <div class="amber-callout">Через 5 месяцев ты узнаешь, откроется ли ВШЭ. А пока — занимайся и наблюдай за картой.</div>
        <a class="visual-link" href="https://www.hse.ru/" target="_blank" rel="noreferrer">Сайт программы ВШЭ ПМИ →</a>
      </div>
    </div>
  `;
}

function renderMISISCard() {
  return `
    <div class="main-grid two-col">
      <div class="panel university-detail-card reliable">
        ${universityDetailHeader("НАДЁЖНЫЙ ВАРИАНТ", "🟡 почти зелёный!", "МИСИС", "Data Science", 267, "1")}
        <div class="program-detail-grid">
          <div>📍 <strong>Москва, Ленинский</strong><span>Кампус на юго-западе</span></div>
          <div>📚 <strong>4 года бакалавриат</strong><span>Очная форма, бюджет</span></div>
          <div>🔬 <strong>Фокус на Data Science</strong><span>Прикладной AI, анализ данных</span></div>
          <div>🏢 <strong>Партнёры: Сбер, МТС</strong><span>Проектная работа с компаниями</span></div>
        </div>
        <div class="study-block"><strong>Что изучают</strong><span>Машинное обучение, нейросети, статистика, Python, SQL, обработка данных, визуализация.</span></div>
      </div>
      <div class="panel">
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>МИСИС Data Science — сильная прикладная программа. И ты буквально в одном балле от зелёной зоны. Одно хорошее занятие — и МИСИС станет доступным.</div></div>
        <div class="mini-card"><strong>Сильные стороны</strong><br><span class="panel-subtitle">Практический фокус, проекты с компаниями, современная программа</span></div>
        <div class="mini-card"><strong>Отличие от ВШЭ</strong><br><span class="panel-subtitle">Меньше фундаментальной математики, больше прикладного AI</span></div>
        <a class="visual-link" href="https://misis.ru/" target="_blank" rel="noreferrer">Сайт программы МИСИС →</a>
      </div>
    </div>
  `;
}

function renderUniversityNews() {
  const news = [
    ["🎓", "ВШЭ: новое направление — AI Engineering", "Проходной ниже, чем на ПМИ (ориентир ~275). Запасной вариант внутри ВШЭ!", "ВШЭ"],
    ["📅", "МИСИС: день открытых дверей 18 февраля", "Онлайн-формат. Можно задать вопросы приёмной комиссии.", "МИСИС"],
    ["💼", "МИРЭА: новая стипендия для регионов", "Дополнительная стипендия 15 000 ₽ для иногородних. Саша подходит!", "МИРЭА"],
    ["📢", "МАИ: обновлённая программа ПМИ с 2026 года", "Добавлен блок по ML и компьютерному зрению.", "МАИ"],
  ];
  return `
    <div class="main-grid news-grid">
      <div class="panel">
        <div><div class="panel-title">Новости от вузов</div><div class="panel-subtitle">Ари собирает обновления из вузов, которые тебе подходят</div></div>
        <div class="news-list">${news.map(([icon, title, text, tag]) => `<div class="news-card"><div>${icon}</div><strong>${title}</strong><span>${text}</span><em>${tag}</em></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-title">Почему именно эти новости</div>
        <div class="mini-card"><strong>Подобраны по профилю</strong><br><span class="panel-subtitle">Мат + инф + русский, AI/ML, Москва — только релевантные.</span></div>
        <div class="mini-card"><strong>Обновляются автоматически</strong><br><span class="panel-subtitle">Ари мониторит сайты вузов и фильтрует шум.</span></div>
        <div class="mini-card"><strong>Могут изменить стратегию</strong><br><span class="panel-subtitle">AI Engineering в ВШЭ с порогом 275 — новый вариант!</span></div>
        <div class="b2b-value-card"><strong>Для платформы</strong><span>Вузы могут интегрировать свои программы и события напрямую. Таргетированный канал к целевой аудитории — не спам, а релевантная информация.</span></div>
      </div>
    </div>
  `;
}

function renderApplicationProcess() {
  const steps = [
    ["Сдать ЕГЭ", "Конец мая — начало июня. Результаты через 2 недели."],
    ["Подать документы", "Можно в 5 вузов одновременно. Онлайн или лично."],
    ["Выбрать приоритеты", "В каждом вузе до 5 направлений. Указать порядок."],
    ["Дождаться волн зачисления", "Приоритетная → основная. Следить за списками."],
    ["Подать оригинал аттестата", "В тот вуз, куда решишь поступать."],
  ];
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Как устроена подача документов</div><div class="panel-subtitle">Чтобы в июле не было паники</div></div>
        <div class="process-steps">${steps.map(([title, text], index) => `<div><b>${index + 1}</b><strong>${title}</strong><span>${text}</span></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-title">Важные цифры</div>
        <div class="number-grid">
          <div><strong>5</strong><span>вузов можно подать одновременно</span></div>
          <div><strong>5</strong><span>направлений в каждом вузе</span></div>
          <div><strong>~2 недели</strong><span>от ЕГЭ до результатов</span></div>
          <div><strong>~5 недель</strong><span>от результатов до зачисления</span></div>
        </div>
        <div class="ari-note">Персональный план подачи составлю ближе к лету. Сейчас главное — знать процедуру и продолжать готовиться.</div>
      </div>
    </div>
  `;
}

function renderApplicationStrategy() {
  const cards = [
    ["ambitious", "Амбициозная цель", "ВШЭ ★", "ПМИ · 288 · осталось 20", "Полярная звезда. Пока красная, но приближается."],
    ["almost-green", "Скоро откроется", "МИРЭА", "ИИ · 263 · осталось 5", "Через 1–2 месяца может стать зелёной."],
    ["almost-green", "Почти зелёный", "МИСИС", "Data Science · 267 · осталось 1", "Одно хорошее занятие — и откроется."],
    ["reliable", "Надёжный", "МАИ", "ПМИ · 248 · запас +20", "Зелёная зона с запасом. Бюджет гарантирован."],
    ["new-option", "Новый вариант", "ВШЭ", "AI Engineering · ~275 · осталось 7", "Из новостей: проходной ниже ПМИ. Запасной внутри ВШЭ."],
  ];
  return `
    <div class="main-grid application-grid">
      <div class="panel">
        <div><div class="panel-title">Предварительная стратегия: 5 вузов</div><div class="panel-subtitle">Уточним к лету, но ориентир уже есть</div></div>
        <div class="strategy-list">${cards.map(([tone, role, name, meta, text]) => `<div class="strategy-card"><div class="role-label ${tone}">${role}</div><strong>${name}</strong><em>${meta}</em><span>${text}</span></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-title">Логика Ари</div>
        <div class="mini-card"><strong>1 амбициозная цель</strong><br><span class="panel-subtitle">ВШЭ ПМИ — ради неё работаем.</span></div>
        <div class="mini-card"><strong>2–3 в зоне досягаемости</strong><br><span class="panel-subtitle">МИРЭА, МИСИС, ВШЭ AI Eng — скоро откроются.</span></div>
        <div class="mini-card"><strong>1 надёжный</strong><br><span class="panel-subtitle">МАИ — бюджет гарантирован.</span></div>
        <div class="ari-note">Это предварительный план. К лету обновлю с финальными баллами. Но уже сейчас видно: у тебя сильная позиция.</div>
      </div>
    </div>
  `;
}

function renderDocChecklist() {
  const docs = [
    ["☐", "Аттестат", "оригинал + копии"],
    ["☐", "Паспорт", "копия"],
    ["☐", "Фото 3×4", "4–6 штук"],
    ["☐", "Результаты ЕГЭ", "загружаются автоматически"],
    ["☐", "Портфолио / достижения", "если есть"],
    ["☐", "Заявление", "на сайте вуза или Госуслуги"],
  ];
  const dates = [
    ["Конец мая", "ЕГЭ: основной период"],
    ["Середина июня", "Результаты ЕГЭ"],
    ["20 июня", "Начало приёма документов"],
    ["25 июля", "Дедлайн подачи"],
    ["28–30 июля", "Приоритетное зачисление"],
    ["3–5 августа", "Приказы: основная волна"],
  ];
  return `
    <div class="main-grid two-col doc-checklist-screen">
      <div class="panel">
        <div><div class="panel-title">Документы для подачи</div><div class="panel-subtitle">Что подготовить к лету</div></div>
        <div class="checklist">${docs.map(([mark, title, text]) => `<div><b>${mark}</b><strong>${title}</strong><span>${text}</span></div>`).join("")}</div>
        <div class="summary-soft">Ари напомнит о каждом пункте, когда придёт время.</div>
      </div>
      <div class="panel">
        <div class="panel-title">Ключевые даты</div>
        <div class="date-timeline">${dates.map(([date, text]) => `<div><strong>${date}</strong><span>${text}</span></div>`).join("")}</div>
        <div class="mini-card"><strong>До подачи ещё 5 месяцев.</strong><br><span class="panel-subtitle">Знать сроки сейчас — значит не паниковать потом.</span></div>
      </div>
    </div>
  `;
}

function renderBackToLearning() {
  const messages = [
    msg("ari", "Теперь ты знаешь свои вузы не как цифры, а как реальные места. Кампусы, программы, стажировки — это твоё будущее."),
    msg("ari", "Но до поступления ещё 5 месяцев работы. Хорошая новость: ты на правильном пути. МИСИС — в одном балле от зелёной. МИРЭА — рядом. ВШЭ — ещё далеко, но движение есть."),
    msg("ari", "Давай вернёмся к маршруту. Я обновила рекомендации — покажу, что даст максимальный прирост прямо сейчас."),
  ];
  return `
    <div class="main-grid university-push-grid">
      <div class="panel">${chatShell(messages, "Готов вернуться к плану", "Показать рекомендации", 55)}</div>
      <div class="panel">
        <div class="panel-title">Зачем ты учишься</div>
        <div class="motivation-link">📍 <strong>Кампус на Покровке</strong><span>ВШЭ · 20 баллов</span></div>
        <div class="motivation-link">🔬 <strong>Data Science проекты</strong><span>МИСИС · 1 балл</span></div>
        <div class="motivation-link">🚀 <strong>Стажировки в Яндексе</strong><span>ВШЭ · с 3 курса</span></div>
        <div class="ari-note">Каждое занятие — шаг к конкретному месту, а не к абстрактной цифре.</div>
      </div>
    </div>
  `;
}

function renderJanuaryRecommendation() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Рекомендация на эту неделю</div><div class="panel-subtitle">Обновлена с учётом карты вузов</div></div>
        <div class="recommendation-card january-rec-card">
          <strong>📐 Математика · Задание 13: Стереометрия</strong>
          <p>В октябре стереометрия была невыгодной — ROI 0.75 б/ч. Но ты уже закрыл лёгкие задания. Теперь стереометрия — следующий рычаг.</p>
          <div class="roi-chain compact-chain"><div>📐 Стереометрия <span>8 часов</span></div><div class="chain-arrow">→</div><div>+6 баллов <span>к прогнозу</span></div><div class="chain-arrow">→</div><div>ВШЭ ближе <span>осталось 14 вместо 20</span></div></div>
        </div>
        <div class="mini-plan january-plan"><div>1 ч · разбор теории</div><div>2 ч · базовые задачи</div><div>3 ч · средние задачи</div><div>2 ч · сложные + тест</div></div>
      </div>
      <div class="panel">
        <div class="panel-title">Что даст стереометрия</div>
        <div class="shift-card red"><strong>ВШЭ</strong><span>осталось 20 → 14</span><em>на 6 ближе</em></div>
        <div class="shift-card green"><strong>МИСИС</strong><span>🟡 → 🟢</span><em>откроется!</em></div>
        <div class="shift-card green"><strong>МИРЭА</strong><span>🟡 → 🟢</span><em>откроется!</em></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>Одна тема — и два вуза станут зелёными, а ВШЭ приблизится на 6 баллов. Это стоит 8 часов. Поехали!</div></div>
      </div>
    </div>
  `;
}

function finalScoreRow(label, before, after, highlight = false) {
  return `
    <div class="april-score-row ${highlight ? "highlight" : ""}">
      <div class="score-row-top"><span>${label}</span><strong>${after} <em>+${after - before}</em></strong></div>
      <div class="progress-track"><div class="progress-fill" style="width:${after}%"></div></div>
      <div class="lesson-meta">было ${before}</div>
    </div>
  `;
}

function renderFinalForecast() {
  const current = demoData.april.currentTotal;
  const forecast = demoData.april.forecast;
  const target = university("hse").benchmark;
  const progress = Math.min(100, Math.round((current / target) * 100));
  return `
    <div class="forecast-card april-forecast-card">
      <div class="forecast-ring" style="--progress:${progress * 3.6}deg">
        <div>
          <strong>${current}</strong>
          <span>сейчас</span>
        </div>
      </div>
      <div class="forecast-metrics">
        <div><span>Прогноз к июню</span><strong>${forecast}</strong></div>
        <div><span>Цель ВШЭ</span><strong>${target}</strong></div>
        <div><span>Статус</span><strong class="goal-reached">✓ достигнута</strong></div>
      </div>
    </div>
  `;
}

function finalZoneCard(id, tone, detail, extra = "") {
  const uni = university(id);
  return `
    <div class="december-zone-card ${tone} ${extra}">
      <strong>${uni.name}${id === "hse" ? " ★" : ""}</strong>
      <span>${uni.program} · ${uni.benchmark}</span>
      <em>${detail}</em>
    </div>
  `;
}

function renderFinalOrbitMap() {
  const universities = [
    ["МАИ", "green", "36%", "64%", ""],
    ["МИРЭА", "green", "69%", "57%", ""],
    ["МИСИС", "green", "66%", "42%", ""],
    ["ВШЭ", "green", "58%", "25%", "starred just-entered"],
    ["МФТИ", "yellow", "26%", "34%", ""],
  ];
  return `
    <div class="mini-orbit final-orbit">
      <div class="zone-fill zone-red"><span>далеко</span></div>
      <div class="zone-fill zone-yellow"><span>близко</span></div>
      <div class="zone-fill zone-green"><span>открыт</span></div>
      <div class="orbit-core">${demoData.april.currentTotal}<span>баллов</span></div>
      ${universities.map(([name, zone, left, top, extra = ""]) => `<div class="orbit-uni ${zone} ${extra}" style="left:${left};top:${top}">${name}</div>`).join("")}
    </div>
  `;
}

function renderTimeJump() {
  const timeline = [
    { month: "Окт", total: 216, forecast: 243, event: "Старт. Всё красное." },
    { month: "Ноя", total: 219, forecast: 245, event: "Первые задания по ROI." },
    { month: "Дек", total: 232, forecast: 257, event: "Пробник. МАИ — зелёный!" },
    { month: "Янв", total: 248, forecast: 268, event: "Знакомство с вузами. МИСИС рядом." },
    { month: "Фев", total: 261, forecast: 276, event: "МИРЭА и МИСИС — зелёные." },
    { month: "Мар", total: 275, forecast: 284, event: "ВШЭ в жёлтой зоне!" },
    { month: "Апр", total: 282, forecast: 288, event: "ВШЭ на границе. Финишная прямая." },
    { month: "Июн", total: 288, forecast: 290, event: "ЕГЭ сдан. ВШЭ — зелёная. ★" },
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel time-jump-panel final-time-jump">
        <div class="center-head">
          <div class="time-jump-title">8 месяцев с Ари</div>
          <div class="panel-subtitle">Октябрь → Июнь. Полный путь.</div>
        </div>
        <div class="timeline-wrap">
          <div class="timeline-progress"><i></i></div>
          <div class="timeline-compact">
            ${timeline.map((item, index) => `
              <div class="timeline-row ${index === timeline.length - 1 ? "april" : ""}" style="--delay:${index * 0.12}s">
                <strong>${item.month}</strong>
                <span>${item.total}</span>
                <span>${item.forecast}</span>
                <em>${item.event}</em>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="time-jump-summary">+72 балла. 0 → 4 зелёных вуза. 8 месяцев стратегической работы.</div>
      </div>
    </div>
  `;
}

function renderHSEGreen() {
  return `
    <div class="main-grid one-col">
      <div class="panel hse-green-panel">
        <div class="unlocked-title polar-title">Полярная звезда достигнута</div>
        <div class="university-unlocked polar-star">
          <div class="green-badge">ПОЛЯРНАЯ ЗВЕЗДА · ЗЕЛЁНАЯ ЗОНА</div>
          <strong>ВШЭ <span class="twinkle-star">★</span></strong>
          <span>ПМИ · ориентир 288</span>
          <em>✓ Прогноз 290 > порог 288</em>
        </div>
        <div class="hse-path">
          <div>Октябрь<span>🔴 далеко<br>gap: 72</span></div>
          <div>Декабрь<span>🔴 ближе<br>gap: 31</span></div>
          <div>Март<span>🟡 близко!<br>gap: 4</span></div>
          <div>Июнь<span>🟢 ДОСТИГНУТА<br>прогноз > порог</span></div>
        </div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("Саша, ВШЭ — зелёная. В октябре до неё было 72 балла. Ты прошёл этот путь за 8 месяцев. Каждое задание, каждый пробник, каждый выбор — всё привело сюда.")}</div></div>
      </div>
    </div>
  `;
}

function renderFinalMap() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div class="zone-map-grid april-zone-map">
          <section class="zone-column green"><div><strong>Уже проходишь</strong><span>Прогноз 290</span></div>${finalZoneCard("mai", "green", "запас +42")}${finalZoneCard("mirea", "green", "запас +27")}${finalZoneCard("misis", "green", "запас +23")}${finalZoneCard("hse", "green", "запас +2", "hse-glow")}</section>
          <section class="zone-column yellow"><div><strong>Близко</strong><span>Бонусная цель</span></div>${finalZoneCard("mipt", "yellow", "осталось 11")}</section>
          <section class="zone-column red"><div><strong>Нужно расти</strong><span>Цель ещё впереди</span></div><div class="empty-red-zone">Красная зона пуста.</div></section>
        </div>
      </div>
      <div class="panel final-map-side">
        <div class="panel-title">Как менялась карта</div>
        <div class="mini-map-comparison"><strong>Октябрь</strong><span>🟢 0 · 🟡 1 · 🔴 4</span><em>Почти всё красное</em></div>
        <div class="mini-map-comparison"><strong>Декабрь</strong><span>🟢 1 · 🟡 2 · 🔴 2</span><em>МАИ открылся</em></div>
        <div class="mini-map-comparison"><strong>Январь</strong><span>🟢 1 · 🟡 2 · 🔴 2</span><em>МИСИС почти зелёный</em></div>
        <div class="mini-map-comparison april"><strong>Июнь</strong><span>🟢 4 · 🟡 1 · 🔴 0</span><em>Красных не осталось</em></div>
        <div class="ari-note">Живая карта менялась 8 месяцев вместе с Сашей. Каждое действие двигало вузы из красного в зелёное.</div>
      </div>
    </div>
  `;
}

function renderBeforeAfter() {
  return `
    <div class="main-grid before-after-grid">
      <div class="panel before-after-column dim">
        <div class="panel-title">Октябрь</div>
        <div class="before-after-score"><span>Русский</span><strong>78</strong></div>
        <div class="before-after-score"><span>Математика</span><strong>58</strong></div>
        <div class="before-after-score"><span>Информатика</span><strong>80</strong></div>
        <div class="summary-row"><span>Сумма</span><strong>216</strong><em>старт</em></div>
        <div class="summary-row"><span>Прогноз</span><strong>243</strong><em>к июню</em></div>
        <div class="mini-map-comparison"><strong>Карта</strong><span>🟢 0 · 🟡 1 · 🔴 4</span></div>
        <div class="chip-row pain-chips"><span>Нет маршрута</span><span>Нет понимания вузов</span><span>Нет ощущения прогресса</span></div>
      </div>
      <div class="panel before-after-column bright">
        <div class="panel-title">Июнь</div>
        ${finalScoreRow("Русский", 78, 92)}
        ${finalScoreRow("Математика", 58, 96, true)}
        ${finalScoreRow("Информатика", 80, 100)}
        <div class="summary-row"><span>Сумма</span><strong>288</strong><em>+72</em></div>
        <div class="summary-row"><span>Прогноз</span><strong>290</strong><em>+47</em></div>
        <div class="mini-map-comparison april"><strong>Карта</strong><span>🟢 4 · 🟡 1 · 🔴 0</span></div>
        <div class="chip-row success-chips"><span>✓ Маршрут пройден</span><span>✓ Стратегия готова</span><span>✓ Каждый шаг осмыслен</span></div>
      </div>
    </div>
  `;
}

function renderSashaKnows() {
  const cards = [
    ["📊", "Структура ЕГЭ", "Какие задания дают больше баллов, какие — меньше. Нелинейная шкала."],
    ["🧭", "ROI каждого задания", "Куда вкладывать время, чтобы получить максимум. Не учись больше, а учись точнее."],
    ["📈", "Свою динамику обучения", "Когда он эффективнее, какие паттерны ошибок, как растёт прогноз."],
    ["🗺️", "Свои вузы изнутри", "Не абстрактные названия, а программы, кампусы, стипендии, стажировки."],
    ["📋", "Стратегию подачи", "5 вузов с ролями: амбициозная, уверенные, надёжная. Документы и сроки."],
    ["🎯", "Свой запасной план", "Если ВШЭ не сложится — МИСИС, МИРЭА, МАИ. Не паника, а стратегия."],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel knowledge-panel">
        <div class="center-head"><div class="panel-title">Саша не просто сдал ЕГЭ</div><div class="panel-subtitle">Он знает то, чего не знает большинство учеников</div></div>
        <div class="knowledge-grid">${cards.map(([icon, title, text], index) => `<div class="knowledge-card" style="--delay:${index * 0.08}s"><div>${icon}</div><strong>${title}</strong><span>${text}</span></div>`).join("")}</div>
        <div class="first-map-ari-note center-note-card"><img src="./assets/ari-secondary.png" alt="Ари"><div>${typewriterText("Обычный ученик сдаёт ЕГЭ и потом разбирается, куда подавать. Саша уже знает: куда, зачем и как. Это и есть разница.")}</div></div>
      </div>
    </div>
  `;
}

function renderFinalDashboard() {
  return `
    <div class="main-grid two-col">
      <div class="panel">
        <div><div class="panel-title">Финальный дашборд · Июнь</div><div class="panel-subtitle">Тот же интерфейс. Другая реальность.</div></div>
        ${renderFinalForecast()}
        <div class="score-bars">
          ${finalScoreRow("Русский", 78, 92)}
          ${finalScoreRow("Математика", 58, 96, true)}
          ${finalScoreRow("Информатика", 80, 100)}
        </div>
        <div class="recommendation-card"><strong>Финальная шлифовка завершена</strong><em>Все ключевые блоки закрыты. Ты готов.</em></div>
      </div>
      <div class="panel">
        <div class="panel-title">Карта вузов · июнь</div>
        ${renderFinalOrbitMap()}
        <div class="forecast-compare final-compare">
          <div class="contrast-card contrast-dim"><div class="contrast-label">Октябрь</div><strong>216 · прогноз 243</strong><span>0 зелёных</span></div>
          <div class="contrast-card contrast-bright"><div class="contrast-label">Июнь</div><strong>288 · прогноз 290</strong><span>4 зелёных</span></div>
        </div>
        <div class="ari-note">Тот же дашборд. Те же три элемента. Совершенно другая картина.</div>
      </div>
    </div>
  `;
}

function renderStudentValue() {
  const cards = [
    ["Не вижу цели", "Живая карта вузов", "Ученик видит конкретные вузы, которые доступны сейчас и станут доступны по мере подготовки."],
    ["Не знаю, что делать дальше", "Умный маршрут с ROI", "Конкретная рекомендация: какое задание, сколько часов, сколько баллов даст, какой вуз приблизит."],
    ["Не чувствую прогресса", "Мгновенная обратная связь", "После каждого действия — сдвиг прогноза, обновление карты. Прогресс виден в реальном времени."],
  ];
  return `
    <div class="main-grid one-col">
      <div class="panel student-value-panel">
        <div class="center-head"><div class="panel-title">Три проблемы ученика — решены</div></div>
        <div class="student-value-grid">${cards.map(([before, after, text]) => `<div class="student-value-card"><div><span>${before}</span><strong>${after}</strong></div><p>${text}</p></div>`).join("")}</div>
      </div>
    </div>
  `;
}

function renderPlatformValue() {
  const metrics = [
    ["📈", "Retention и удержание", "Ученик, который видит прогресс и цель, уходит реже. Живая карта — постоянная причина вернуться."],
    ["🎯", "Вовлечённость и доходимость", "Осмысленность каждого задания повышает готовность выполнять ДЗ и проходить пробники."],
    ["💰", "Upsell", "Персонализированные рекомендации воспринимаются как помощь, а не реклама."],
    ["⚠️", "Churn prediction", "Снижение регулярности + падение прогноза = сигнал оттока и повод вмешаться."],
    ["🏆", "Конкурентное преимущество", "Ни одна платформа пока не связала подготовку с поступлением в реальном времени. Кто запустит первым — получит преимущество."],
  ];
  return `
    <div class="main-grid platform-value-grid">
      <div class="panel">
        <div><div class="panel-title">Ценность для онлайн-школы</div><div class="panel-subtitle">AI-наставник — стратегический рычаг роста</div></div>
        <div class="metric-list">${metrics.map(([icon, title, text]) => `<div class="metric-card"><div>${icon}</div><strong>${title}</strong><span>${text}</span></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-title">Формула роста</div>
        <div class="growth-chain"><div>Осмысленное обучение</div><span>↓</span><div>Ученик чаще заходит</div><span>↓</span><div>Дольше остаётся</div><span>↓</span><div>Больше покупает</div><span>↓</span><div>LTV растёт</div></div>
        <div class="ari-note">Всё, что является ценностью для ученика, напрямую конвертируется в ценность для бизнеса.</div>
      </div>
    </div>
  `;
}

function renderMission() {
  const missionMessages = [
    msg("ari", "Саша прошёл путь от 216 до 288. От «учусь, но не знаю зачем» — до конкретного вуза, конкретного плана и уверенности в результате."),
    msg("ari", "Но наша миссия — не про баллы. Она про другое:"),
    msg("ari highlight", typewriterText("Сделать так, чтобы каждый ученик видел и чувствовал, как каждое его усилие приближает его к цели. Не «учись, и когда-нибудь будет результат». А «ты только что сделал шаг — вот что изменилось».")),
  ];
  return `
    <div class="main-grid mission-grid">
      <div class="panel mission-chat-panel">
        <div class="mission-ari-head">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div><strong>Ари</strong><span>подводит итог</span></div>
        </div>
        <div class="chat-messages mission-messages">
          ${missionMessages.map((item) => `
            <div class="chat-message ${item.who}">
              <div>${item.text}</div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel mission-panel">
        <div class="mission-text">«Ты видишь не оценку за пробник, а свою дорогу к мечте — и с каждым занятием она становится короче.»</div>
        <div class="mission-subtitle">AI-наставник поступления для онлайн-школ ОГЭ/ЕГЭ</div>
      </div>
    </div>
  `;
}

function renderFinal() {
  return `
    <div class="main-grid final-screen">
      <div class="panel final-sasha-panel">
        <div class="final-avatar"><img src="./assets/sasha-face.png" alt="Саша"></div>
        <strong>Саша</strong>
        <span>Саше 17 лет · 11 класс · регион → Москва</span>
      </div>
      <div class="panel final-copy-panel">
        <div class="panel-title">Саша не просто сдал ЕГЭ.</div>
        <p>Он знал, зачем учится. Видел каждый шаг. Понимал, как каждое усилие приближает его к цели. И пришёл туда, куда хотел.</p>
        <div class="final-chip-row"><span><strong>288</strong> баллов</span><span><strong>4</strong> зелёных вуза</span><span><strong>ВШЭ ★</strong> полярная звезда</span></div>
        <div class="first-map-ari-note"><img src="./assets/ari-secondary.png" alt="Ари"><div>Удачи в ВШЭ, Саша. Ты заслужил.</div></div>
      </div>
    </div>
  `;
}

function renderScreen() {
  if (state.currentStep < 0) {
    document.getElementById("screen").innerHTML = `
      <div class="screen-view zero-screen from-${state.navDirection}">
        ${renderIntroProfile()}
      </div>
    `;
    return;
  }

  const step = steps[state.currentStep];
  const renderers = [
    renderLmsHome,
    renderMathSubject,
    renderProbnikResult,
    renderErrorList,
    renderGenericRecommendations,
    renderDeadlineNoise,
    renderCalculatorScreen,
    renderBlock1Summary,
    renderAriAppears,
    renderAriRevealed,
    renderThreeCapabilities,
    renderCapabilityForecast,
    renderCapabilityRoute,
    renderCapabilityMap,
    renderFeedbackLoop,
    renderAriInvite,
    renderChatIntro,
    renderAriStructures,
    renderAriAsksScores,
    renderScoreInput,
    renderFirstMap,
    renderAriSuggestsStar,
    renderUniversityCards,
    renderRouteLocked,
    renderAriBuildsRoute,
    renderFirstDashboard,
    renderDiagnostics,
    renderExamStructure,
    renderRecommendationMath,
    renderWeeklyPlan,
    renderTaskCompleted,
    renderScoreShift,
    renderMapShift,
    renderMotivationScreen,
    renderOctoberProgress,
    renderProbnikInvite,
    renderProbnikResults,
    renderMathGrowth,
    renderNewForecast,
    renderFirstGreen,
    renderUpdatedMap,
    renderThreeScenarios,
    renderScenariosToUnis,
    renderPatterns,
    renderCalcVsMentor,
    renderDecemberSummary,
    renderAriUniversityPush,
    renderJanuaryMap,
    renderHSECard,
    renderMISISCard,
    renderUniversityNews,
    renderApplicationProcess,
    renderDocChecklist,
    renderApplicationStrategy,
    renderBackToLearning,
    renderJanuaryRecommendation,
    renderTimeJump,
    renderHSEGreen,
    renderFinalMap,
    renderBeforeAfter,
    renderSashaKnows,
    renderFinalDashboard,
    renderStudentValue,
    renderPlatformValue,
    renderMission,
    renderFinal,
  ];

  document.getElementById("screen").innerHTML = screenShell(
    step.label,
    step.title,
    step.note,
    renderers[state.currentStep](),
    `<div class="tag">Блок ${step.act + 1}</div>`,
  );
}

function render() {
  document.body.classList.add("stars-demo-active");
  renderActNav();
  renderHeader();
  renderStepper();
  renderScreen();
  renderFlowControls();
  runTypewriters();
}

function handleClick(event) {
  const universityTrigger = event.target.closest("[data-university]");
  if (universityTrigger) {
    state.selectedUniversity = universityTrigger.dataset.university;
    state.focusedUniversity = universityTrigger.dataset.university;
  }

  const focusTrigger = event.target.closest("[data-focus-uni]");
  if (focusTrigger) {
    state.focusedUniversity = focusTrigger.dataset.focusUni;
    render();
    return;
  }

  const stepTrigger = event.target.closest("[data-step]");
  if (stepTrigger) {
    const target = Number(stepTrigger.dataset.step);
    if (!Number.isNaN(target)) goToStep(target);
  }
}

document.getElementById("prevBtn").addEventListener("click", () => goToStep(state.currentStep - 1));
document.getElementById("nextBtn").addEventListener("click", () => goToStep(state.currentStep + 1));
document.getElementById("primaryAction").addEventListener("click", () => goToStep(primaryTarget()));
document.addEventListener("click", handleClick);

state.currentStep = initialStepFromUrl();
render();

// ── Звёзды ──────────────────────────────────────────────
(function () {
  const canvas = document.getElementById("stars");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W;
  let H;
  let stars = [];

  const colors = [
    [255, 255, 255],
    [220, 235, 255],
    [200, 220, 255],
    [255, 248, 235],
  ];

  function mkStar() {
    const rnd = Math.random();
    const tier = rnd < 0.80 ? 0 : rnd < 0.95 ? 1 : 2;
    const r = tier === 0 ? (0.4 + Math.random() * 0.5)
      : tier === 1 ? (0.8 + Math.random() * 0.7)
        : (1.3 + Math.random() * 0.8);
    const col = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r,
      col,
      tier,
      baseAlpha: tier === 0 ? (0.18 + Math.random() * 0.22)
        : tier === 1 ? (0.38 + Math.random() * 0.25)
          : (0.62 + Math.random() * 0.20),
      alpha: 0,
      twinkleSpeed: 0.3 + Math.random() * 0.9,
      twinkleOffset: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.05,
      vy: -(0.01 + Math.random() * 0.03),
    };
  }

  function init() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    stars = Array.from({ length: 550 }, mkStar);
    stars.forEach((s) => { s.alpha = s.baseAlpha; });
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.014;
    for (const s of stars) {
      s.alpha = s.baseAlpha * (0.75 + 0.25 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset));
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) {
        s.y = H;
        s.x = Math.random() * W;
      }

      const [r, g, b] = s.col;
      const a = s.alpha;

      if (s.tier === 2) {
        const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
        gr.addColorStop(0, `rgba(${r},${g},${b},${(a * 0.4).toFixed(3)})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = gr;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", init);
  init();
  draw();
})();
