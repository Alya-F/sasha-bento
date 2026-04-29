const demoData = {
  student: {
    name: "Саша",
    age: 16,
    grade: "10 класс",
    school: "региональная школа",
    exams: ["Русский", "Профильная математика", "Информатика"],
  },
  mentor: {
    name: "Ари",
  },
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
    currentTotal: 288,
    forecast: 290,
  },
  universities: [
    { id: "hse",   name: "ВШЭ",   program: "ПМИ",                       benchmark: 288, role: "polarStar" },
    { id: "mirea", name: "МИРЭА", program: "Искусственный интеллект",    benchmark: 263, role: "backup"    },
    { id: "misis", name: "МИСИС", program: "Data Science",               benchmark: 267, role: "backup"    },
    { id: "mai",   name: "МАИ",   program: "ПМИ",                       benchmark: 248, role: "backup"    },
    { id: "mipt",  name: "МФТИ",  program: "ПМИ",                       benchmark: 301, role: "stretch"   },
  ],
};

const acts = [
  { short: "Один",     title: "Я один с этим",          from: 0,  to: 3  },
  { short: "Ари",      title: "Привет, я Ари",          from: 4,  to: 14 },
  { short: "Маршрут",  title: "Мой маршрут",            from: 15, to: 26 },
  { short: "Прогресс", title: "Я вижу, как двигаюсь",   from: 27, to: 33 },
  { short: "Финиш",    title: "Цель достигнута",        from: 34, to: 37 },
];

const steps = [
  // Акт 0 — Я один с этим (0–3)
  { act: 0, date: "Октябрь", title: "Обычный личный кабинет",           label: "ЛК",          note: "Саша заходит на платформу. Видит уроки, но не видит цель.",    cta: "Открыть математику",    status: "LMS"        },
  { act: 0, date: "Октябрь", title: "Математика отдельно",              label: "Предмет",     note: "Нет связи с поступлением.",                                   cta: "Смотреть дедлайны",     status: "Тема 3"     },
  { act: 0, date: "Октябрь", title: "Дедлайны и шум",                   label: "Неделя",      note: "4 дедлайна. С какого начать? И зачем — непонятно.",           cta: "Показать Ари",          status: "Перегруз"   },
  { act: 0, date: "Октябрь", title: "Появляется Ари",                   label: "Новый слой",  note: "В личном кабинете появляется слой наставника.",                cta: "Открыть Ари",           status: "Ари рядом"  },
  // Акт 1 — Привет, я Ари (4–14)
  { act: 1, date: "Октябрь", title: "Ари раскрывается",                 label: "Знакомство",  note: "Ари объясняет роль наставника и предлагает познакомиться.",    cta: "Начать чат",            status: "Онлайн"     },
  { act: 1, date: "Октябрь", title: "Саша пишет о себе",                label: "Сообщение",   note: "Саша формулирует цель обычным языком.",                       cta: "Отправить",             status: "Черновик"   },
  { act: 1, date: "Октябрь", title: "Ари уточняет баллы",               label: "Анализ",      note: "Запрос превращается в параметры маршрута.",                   cta: "Ввести баллы",          status: "Анализ"     },
  { act: 1, date: "Октябрь", title: "Ввод баллов",                      label: "Диагностика", note: "Ари нужны текущие баллы для реалистичного прогноза.",          cta: "Показать карту",        status: "Ввод"       },
  { act: 1, date: "Октябрь", title: "Карта вузов по зонам",             label: "Зоны",        note: "5 вузов. 3 зоны. Саша видит, где он сейчас.",                 cta: "Выбрать цель",          status: "Карта"      },
  { act: 1, date: "Октябрь", title: "Ари предлагает полярную звезду",   label: "Цель",        note: "Один амбициозный ориентир и запасные варианты.",              cta: "Выбрать цель",          status: "Стратегия"  },
  { act: 1, date: "Октябрь", title: "Карточки вузов",                   label: "Выбор",       note: "Какой вуз станет твоей целью?",                               cta: "Выбрать ВШЭ",           status: "Подборка"   },
  { act: 1, date: "Октябрь", title: "Ари подтверждает выбор",           label: "Стратегия",   note: "ВШЭ выбрана как полярная звезда.",                            cta: "Сформировать карту",    status: "Цель"       },
  { act: 1, date: "Октябрь", title: "Полярная звезда зафиксирована",    label: "Маршрут",     note: "ВШЭ · запасные · МФТИ вне зоны.",                             cta: "Сформировать маршрут",  status: "Маршрут"    },
  { act: 1, date: "Октябрь", title: "Ари строит маршрут",               label: "Расчёт",      note: "Прогноз превращается в персональный дашборд.",                cta: "Открыть дашборд",       status: "Расчёт"     },
  { act: 1, date: "Октябрь", title: "Новый дашборд",                    label: "Forecast",    note: "Впервые Саша видит не только оценку, но и прогноз: 243.",      cta: "Открыть диагностику",   status: "Маршрут"    },
  // Акт 2 — Мой маршрут (15–26)
  { act: 2, date: "Октябрь", title: "Диагностика по предметам",         label: "Баллы",       note: "Главный рычаг: математика.",                                  cta: "Показать структуру ЕГЭ",status: "Диагностика"},
  { act: 2, date: "Октябрь", title: "Как устроен ЕГЭ",                  label: "Структура",   note: "В ЕГЭ не все баллы равны. Ари знает, какие задания «дешевле».", cta: "Показать рекомендацию", status: "ROI"        },
  { act: 2, date: "Октябрь", title: "Рекомендация: математика",         label: "1/3",         note: "Планиметрия. 3 часа → +3 балла. МАИ становится ближе.",        cta: "Русский →",            status: "Фокус"      },
  { act: 2, date: "Октябрь", title: "Рекомендация: русский",            label: "2/3",         note: "Сочинение. 2 часа → +4 балла. Самый дешёвый прирост.",        cta: "Информатика →",         status: "Фокус"      },
  { act: 2, date: "Октябрь", title: "Рекомендация: информатика",        label: "3/3",         note: "Массивы + итог: 6.5 часов → +9 баллов за неделю.",            cta: "Начать с планиметрии",  status: "План"       },
  { act: 2, date: "Октябрь", title: "Задание выполнено",                label: "Готово",      note: "2 часа 45 минут. Планиметрия: 50% → 82%. Задание 7 закрыто.",  cta: "Что изменилось?",       status: "✓"          },
  { act: 2, date: "Октябрь", title: "Эффект действия",                  label: "Сдвиг",       note: "Одно задание — и балл Саши изменился. Это петля обратной связи.", cta: "Увидеть результат",   status: "Готово"     },
  { act: 2, date: "Октябрь", title: "Ари комментирует новый балл",      label: "Ари",         note: "Одно задание — и новый балл уже 219.",                         cta: "Посмотреть карту",      status: "Ари"        },
  { act: 2, date: "Октябрь", title: "Живая карта вузов",                label: "Карта",       note: "После задания карта пересчиталась от нового балла 219.",       cta: "Что ждёт в ВШЭ",        status: "Карта"      },
  { act: 2, date: "Октябрь", title: "Что ждёт в ВШЭ",                   label: "Мотивация",   note: "Ари показывает, ради чего Саша двигается.",                    cta: "Показать прогресс",     status: "ВШЭ"        },
  { act: 2, date: "Октябрь", title: "Твой прогресс: октябрь",           label: "Прогресс",    note: "После первого действия новый балл вырос до 219.",              cta: "Ждать пробник",         status: "219"        },
  { act: 2, date: "Ноябрь",  title: "Ари предлагает пробник",           label: "Пробник",     note: "Самое время проверить знания и обновить прогноз.",            cta: "Пройти пробник",        status: "Пробник"    },
  // Акт 3 — Я вижу, как двигаюсь (27–33)
  { act: 3, date: "Декабрь", title: "Пробник проверен",                 label: "Событие",     note: "Пробник проверен. Математика: 58→71. Прогноз пересчитан.",     cta: "Открыть изменения",     status: "Пуш"        },
  { act: 3, date: "Декабрь", title: "За счёт чего +13",                 label: "Разбор",      note: "Планиметрия дала +3. Стереометрия — +1. Ари была права.",     cta: "Сравнить было/стало",   status: "Разбор"     },
  { act: 3, date: "Декабрь", title: "До и после",                       label: "Сравнение",   note: "МАИ открыт. МИРЭА ближе.",                                    cta: "Показать новую карту",  status: "До/после"   },
  { act: 3, date: "Декабрь", title: "Вузы зажигаются",                  label: "Прогресс",    note: "Прогресс виден на карте.",                                    cta: "Показать прогресс",     status: "257"        },
  { act: 3, date: "Декабрь", title: "Твой прогресс: декабрь",           label: "Прогресс",    note: "МАИ открыт, МИРЭА и МИСИС близко.",                           cta: "К итогу",               status: "257"        },
  { act: 3, date: "Декабрь", title: "Ари: мы на пути",                  label: "Итог",        note: "Октябрь: 216. Декабрь: 257. Саша видит движение.",            cta: "Дальше",                status: "Итог"       },
  { act: 3, date: "Январь",  title: "Ари напоминает",                   label: "Push",        note: "Наставник не ждёт — приходит сам.",                           cta: "Дальше",                status: "Push"       },
  // Акт 4 — Цель достигнута (34–37)
  { act: 4, date: "Апрель",  title: "В чём разница",                    label: "Контраст",    note: "Один и тот же ученик. Два подхода.",                          cta: "К финалу",              status: "Дизрап"     },
  { act: 4, date: "Апрель",  title: "Мотивация перед финалом",          label: "Финиш",       note: "Перед финишем Саша видит весь пройденный путь.",              cta: "Показать результат",    status: "Маршрут"    },
  { act: 4, date: "Июнь",    title: "Финиш · Саша достиг цели",         label: "Результат",   note: "4 вуза открыты. ВШЭ достигнута.",                             cta: "Итог",                  status: "290"        },
  { act: 4, date: "Июнь",    title: "Путь Саши: от 216 до 288",         label: "Итог",        note: "Не оценка за пробник, а дорога к мечте.",                     cta: "Начать сначала ↺",      status: "Финиш"      },
];

const state = {
  currentStep: -1,
  selectedUniversity: "hse",
  focusedUniversity: "hse",
  prevForecast: null,
  navDirection: "forward",
};

// ─── utils ────────────────────────────────────────────────────────────────────

function createStars() {
  const root = document.getElementById("stars");
  root.innerHTML = "";
  for (let i = 0; i < 72; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top  = `${Math.random() * 100}%`;
    const size = Math.random() * 2.2 + 1;
    star.style.width  = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 3.8}s`;
    root.appendChild(star);
  }
}

function currentActIndex() {
  if (state.currentStep < 0) return -1;
  return steps[state.currentStep].act;
}

function university(id) { return demoData.universities.find(u => u.id === id); }

function getUniversityZone(forecast, benchmark) {
  const gap = benchmark - forecast;
  if (gap <= 0)  return "green";
  if (gap <= 10) return "yellow";
  return "red";
}

function zoneText(zone) {
  if (zone === "green")  return "открыт";
  if (zone === "yellow") return "близко";
  return "далеко";
}

function gapText(forecast, item) {
  const gap = item.benchmark - forecast;
  if (gap <= 0) return `+${Math.abs(gap)} в запасе`;
  return `осталось ${gap}`;
}

function forecastProgress(forecast, target = 288) {
  return `${Math.min(96, Math.round((forecast / target) * 100))}%`;
}

function roleText(role) {
  if (role === "polarStar") return "цель";
  if (role === "stretch")   return "вне зоны";
  return "запасной";
}

function animateCounter(element, from, to, duration = 800) {
  element.classList.add("is-counting");
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(from + (to - from) * eased);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.classList.remove("is-counting");
    }
  }
  requestAnimationFrame(step);
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

// ─── navigation ───────────────────────────────────────────────────────────────

function goToStep(stepIndex) {
  if (stepIndex < -1 || stepIndex >= steps.length) return;

  const prevFore = getForecastForStep(state.currentStep);

  if (stepIndex === state.currentStep) {
    state.navDirection = "stationary";
    render();
    runPostRenderAnimations(stepIndex, prevFore);
    return;
  }

  state.navDirection = stepIndex >= state.currentStep ? "forward" : "back";

  // ── единый двухфазный переход для всех экранов ──
  const screen = document.getElementById("screen");

  // фаза 1: выход — тает и чуть уходит вверх
  screen.style.opacity   = "0";
  screen.style.transform = "scale(0.96) translateY(-8px)";

  setTimeout(() => {
    state.prevForecast = prevFore;
    state.currentStep  = stepIndex;
    render();

    // мгновенный сброс в нижнюю позицию (без анимации)
    screen.style.transition = "none";
    screen.style.opacity    = "0";
    screen.style.transform  = "scale(0.96) translateY(16px)";

    // фаза 2: вход — поднимается и проявляется
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        screen.style.transition = "";
        screen.style.opacity    = "1";
        screen.style.transform  = "scale(1) translateY(0)";
      });
    });

    runPostRenderAnimations(stepIndex, prevFore);
  }, 480);
}

function getForecastForStep(stepIndex) {
  if (stepIndex < 0) return demoData.october.forecast;
  if (stepIndex >= 34)                    return demoData.april.forecast;
  if (stepIndex >= 27 && stepIndex <= 33) return demoData.december.forecast;
  if (stepIndex >= 20 && stepIndex <= 26) return demoData.afterRecommendation.forecast;
  return demoData.october.forecast;
}

function tryAnimateCounter(stepIndex, prevFore) {
  const forecastSteps = [14, 15, 21, 22, 23, 25, 31, 36, 37];
  if (!forecastSteps.includes(stepIndex)) return;
  setTimeout(() => {
    const el = document.querySelector("[data-forecast-value]");
    if (!el) return;
    const to   = Number(el.dataset.forecastValue);
    const from = prevFore || to;
    if (from !== to) animateCounter(el, from, to);
  }, 50);
}

function runTypewriters() {
  document.querySelectorAll("[data-typewriter]").forEach((element) => {
    const text = element.dataset.typewriter || "";
    element.textContent = "";
    let index = 0;
    const tick = () => {
      element.textContent = text.slice(0, index);
      index += 1;
      if (index <= text.length) {
        window.setTimeout(tick, 34);
      }
    };
    tick();
  });
}

function runPostRenderAnimations(stepIndex = state.currentStep, prevFore = state.prevForecast) {
  tryAnimateCounter(stepIndex, prevFore);
  runTypewriters();
  if (stepIndex === 36) {
    setTimeout(() => {
      const container = document.querySelector('.celebration');
      if (!container) return;
      const colors = ['var(--teal)', 'var(--sky)', 'var(--amber)', 'var(--green)'];
      for (let i = 0; i < 24; i++) {
        const dot = document.createElement('div');
        dot.className = 'confetti';
        dot.style.left = `${45 + Math.random() * 10}%`;
        dot.style.top = '50%';
        dot.style.background = colors[i % colors.length];
        dot.style.setProperty('--tx', `${(Math.random() - 0.5) * 300}px`);
        dot.style.setProperty('--ty', `${-100 - Math.random() * 200}px`);
        dot.style.setProperty('--rot', `${Math.random() * 720 - 360}deg`);
        dot.style.width = `${4 + Math.random() * 7}px`;
        dot.style.height = `${4 + Math.random() * 7}px`;
        dot.style.animationDelay = `${Math.random() * 0.4}s`;
        container.appendChild(dot);
      }
      setTimeout(() => container.innerHTML = '', 2200);
    }, 200);
  }
}

function primaryTarget() {
  if (state.currentStep < 0) return 0;
  if (state.currentStep === steps.length - 1) return -1;
  return state.currentStep + 1;
}

// ─── chrome ───────────────────────────────────────────────────────────────────

function renderActNav() {
  const nav       = document.getElementById("actNav");
  const activeAct = currentActIndex();
  const intro = `
    <button class="act-button ${state.currentStep < 0 ? "active" : ""}" type="button" data-step="-1">
      <div class="act-num">0</div>
      <div>
        <div class="act-name">Портрет</div>
        <div class="act-steps">0</div>
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
    document.getElementById("syncStatus").textContent = "Портрет";
    return;
  }

  const step    = steps[state.currentStep];
  const act     = acts[step.act];
  const showAri = state.currentStep >= 4;

  document.querySelector(".app-topbar").innerHTML = `
    <div>
      <div class="top-kicker">${act.title} · экран ${state.currentStep + 1}</div>
      <h1 class="step-title">Личный кабинет Саши</h1>
    </div>
    <div class="top-actions">
      ${showAri ? `
        <div style="display:flex;align-items:center;gap:8px;padding:6px 12px;border:1px solid rgba(104,231,210,.2);border-radius:12px;background:rgba(104,231,210,.05)">
          <img src="./assets/ari-primary.png" alt="Ари" style="width:28px;height:28px;border-radius:8px;object-fit:cover">
          <span style="font-size:12px;color:var(--teal);font-weight:700">Ари рядом</span>
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
  const previous = document.getElementById("prevBtn");
  const next     = document.getElementById("nextBtn");
  const primary  = document.getElementById("primaryAction");
  previous.disabled = state.currentStep < 0;
  next.disabled     = state.currentStep === steps.length - 1;
  primary.textContent = state.currentStep < 0 ? "Перейти в кабинет" : steps[state.currentStep].cta;
}

// ─── shared components ────────────────────────────────────────────────────────

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
    { id: "russian",    name: "Русский",     meta: "вебинар 18:00", progress: 68 },
    { id: "math",       name: "Математика",  meta: "тема 3",        progress: 42 },
    { id: "informatics",name: "Информатика", meta: "практика",      progress: 61 },
  ];
  return `
    <div class="subject-row">
      ${subjects.map(item => `
        <button class="subject-card ${active === item.id ? "active" : ""} ${active && active !== item.id ? "dim" : ""}"
          type="button" data-step="${item.id === "math" ? 1 : 0}">
          <div class="subject-top">
            <div class="subject-name">${item.name}</div>
            <div class="subject-meta">${item.meta}</div>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${item.progress}%"></div></div>
          <div class="card-meta">курс активен</div>
        </button>
      `).join("")}
    </div>
  `;
}

function chatShell(messages, composerText, actionLabel, actionStep, extra = "") {
  return `
    <div class="chat-shell">
      <div class="chat-top">
        <div class="chat-agent">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div>
            <div class="agent-title">Ари</div>
            <div class="agent-status">онлайн</div>
          </div>
        </div>
        <div class="tag">AI-наставник</div>
      </div>
      <div class="messages">
        ${messages.join("")}
        ${extra}
      </div>
      <div class="composer">
        <div class="input-fake">${composerText}</div>
        <button class="small-button" type="button" data-step="${actionStep}">${actionLabel}</button>
      </div>
    </div>
  `;
}

function msg(type, text, highlight = false) {
  const extra = highlight
    ? ";box-shadow:0 0 0 1px rgba(104,231,210,.35),0 0 20px rgba(104,231,210,.12)"
    : "";
  return `<div class="message ${type}" style="font-size:17px${extra}">${text}</div>`;
}

function typeMsg(type, text) {
  return `<div class="message ${type}" style="font-size:17px">${typewriterText(text)}</div>`;
}

function scoreRow(label, value, highlight = false) {
  return `
    <div class="score-row ${highlight ? "highlight" : ""}">
      <div>${label}</div>
      <div class="score-bar"><div class="score-fill" style="width:${value}%"></div></div>
      <strong>${value}</strong>
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
            <div class="zero-fact-text"><b>Покупает блок предметов:</b> Русский, Математика (профиль), Информатика.</div>
          </div>
        </div>

        <div class="zero-core">
          <div class="zero-avatar">
            <img src="./assets/sasha-face.png" alt="Саша">
          </div>
          <div class="zero-name">Саша</div>
          <div class="zero-sub">16 лет · 10 класс · обычная школа в регионе</div>
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
          <div class="zero-jtbd-text">Когда я в 10 классе в региональной школе понимаю, что <em>хочу поступить на IT в Москву</em>, но не знаю, куда идти, какие баллы нужны и как всё спланировать, я хочу, чтобы <em>кто-то собрал для меня понятный маршрут</em>, чтобы <em>не тратить время впустую</em>.</div>
        </article>
        <article class="zero-insight punchline">
          <div class="zero-insight-label">Ключевой инсайт</div>
          <div class="zero-punch-text">Саша не нанимает курс по математике. Он нанимает <strong>наставника по поступлению</strong> — того, кого у него нет ни в школе, ни рядом.</div>
        </article>
      </div>
    </div>
  `;
}

function renderForecast(forecast, current = demoData.october.currentTotal, target = 288, options = {}) {
  const displayValue = options.displayValue ?? forecast;
  const displayLabel = options.displayLabel ?? "к июню";
  const progressBase = options.progressBase ?? displayValue;
  const gapBase = options.gapBase ?? forecast;
  const forecastLabel = options.forecastLabel ?? "Прогноз";
  const forecastValue = options.forecastValue ?? forecast;
  const valueData = options.animateValue === false ? "" : ` data-forecast-value="${displayValue}"`;
  const gap = target - gapBase;
  return `
    <div class="forecast-panel">
      <div class="forecast-ring" style="--p:${forecastProgress(progressBase, target)}">
        <div>
          <div class="forecast-value"${valueData}>${displayValue}</div>
          ${displayLabel ? `<div class="forecast-label">${displayLabel}</div>` : ""}
        </div>
      </div>
      <div class="forecast-list">
        <div class="forecast-item"><span>Сейчас</span><strong>${current}</strong></div>
        <div class="forecast-item ${options.highlightForecast ? "forecast-emphasis" : ""}"><span>${forecastLabel}</span><strong>${forecastValue}</strong></div>
        <div class="forecast-item"><span>Цель ВШЭ</span><strong>${target}</strong></div>
        <div class="forecast-item"><span>До цели</span><strong>${gap <= 0 ? "достигнута" : gap}</strong></div>
      </div>
    </div>
  `;
}

function mapPosition(forecast, id, benchmark) {
  const gap           = benchmark - forecast;
  const maxGap        = 80;
  const normalizedGap = Math.min(Math.max(gap, 0), maxGap) / maxGap;
  const angles        = { hse: -90, mirea: -30, misis: 150, mai: 30, mipt: 210 };
  const angle         = (angles[id] || 0) * (Math.PI / 180);
  let radius          = 28 + normalizedGap * 17;
  if (id === "mipt") radius = Math.max(radius, 42);
  const x = Math.min(78, Math.max(26, 50 + radius * Math.cos(angle)));
  const y = Math.min(84, Math.max(16, 50 + radius * Math.sin(angle)));
  return [`${x}%`, `${y}%`];
}

function renderOrbitMap(forecast, mode = "") {
  const activeId = forecast === demoData.afterRecommendation.forecast && state.focusedUniversity === "hse"
    ? "mai"
    : state.focusedUniversity;
  return `
    <div class="map-panel ${mode === "compact" ? "compact" : ""}">
      <div class="orbit red"></div>
      <div class="orbit yellow"></div>
      <div class="orbit green"></div>
      <div class="map-core">
        <div>
          <strong>${forecast}</strong>
        </div>
      </div>
      ${demoData.universities.map(item => {
        const zone = getUniversityZone(forecast, item.benchmark);
        const [x, y] = mapPosition(forecast, item.id, item.benchmark);
        const justEntered = (
          (forecast === demoData.december.forecast && item.id === "mai") ||
          (forecast === demoData.april.forecast && ["mai", "mirea", "misis"].includes(item.id))
        );
        return `
          <button class="uni-token ${zone} ${justEntered ? "just-entered" : ""} ${activeId === item.id ? "active" : ""}"
            style="--x:${x};--y:${y}" type="button" data-focus-uni="${item.id}">
            <div class="uni-token-name">${item.name}</div>
            <div class="uni-token-gap">${item.role === "stretch" ? "вне зоны ·" : ""}${zoneText(zone)} · ${gapText(forecast, item)}</div>
          </button>
        `;
      }).join("")}
      <div class="map-caption">
        <div class="legend-dot" style="--c:var(--green)">открыт</div>
        <div class="legend-dot" style="--c:var(--amber)">близко</div>
        <div class="legend-dot" style="--c:var(--rose)">далеко</div>
      </div>
    </div>
  `;
}

// ─── screen renderers ─────────────────────────────────────────────────────────

// Экран 0 — обычный ЛК
function renderLmsHome() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr;position:relative">
      <div class="panel">
        <div class="comet-particle" style="left:58%;top:46%"></div>
        <div class="panel-header">
          <div>
            <div class="panel-title">Саша, сегодня 3 занятия</div>
            <div class="panel-subtitle">Обычная платформа подготовки</div>
          </div>
          <div class="tag">Р · М · И</div>
        </div>
        ${subjectCards()}
        <div class="schedule-list">
          <div class="mini-card"><div class="lesson-title">Русский</div><div class="lesson-meta">18:00 · сочинение</div></div>
          <div class="mini-card"><div class="lesson-title">Математика</div><div class="lesson-meta">19:30 · тригонометрия</div></div>
          <div class="mini-card"><div class="lesson-title">Информатика</div><div class="lesson-meta">21:00 · код</div></div>
        </div>
      </div>
    </div>
  `;
}

// Экран 1 — математика отдельно
function renderMathSubject() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Профильная математика</div>
            <div class="panel-subtitle">Открыта карточка темы</div>
          </div>
          <div class="tag">6 уроков</div>
        </div>
        ${subjectCards("math")}
        <div class="lesson-list">
          <div class="lesson-card open">
            <div class="lesson-title">Тема 3. Тригонометрия</div>
            <div class="lesson-meta">12 задач · дедлайн воскресенье</div>
          </div>
          <div class="lesson-card">
            <div class="lesson-title">Формулы и графики</div>
            <div class="lesson-meta">4 видео · 2 теста</div>
          </div>
          <div class="lesson-card">
            <div class="lesson-title">Домашняя работа</div>
            <div class="lesson-meta">Вариант 12 + 14</div>
          </div>
          <div class="status-empty" style="border-style:dashed;font-style:italic;color:var(--soft)">— нет связи с вузом —</div>
        </div>
      </div>
    </div>
  `;
}

// Экран 2 — дедлайны и шум
function renderDeadlineNoise() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel">
        <div class="panel-title">Неделя Саши</div>
        <div class="deadline-list">
          <div class="deadline-card noisy"><div><div class="deadline-title">Вариант 12</div><div class="deadline-meta">математика</div></div><div class="tag">пт</div></div>
          <div class="deadline-card noisy"><div><div class="deadline-title">Конспект</div><div class="deadline-meta">русский</div></div><div class="tag">вс</div></div>
          <div class="deadline-card noisy"><div><div class="deadline-title">Пробник</div><div class="deadline-meta">через 9 дней</div></div><div class="tag">ЕГЭ</div></div>
          <div class="deadline-card noisy"><div><div class="deadline-title">Алгоритмы</div><div class="deadline-meta">информатика</div></div><div class="tag">ср</div></div>
        </div>
        <div class="question-marker" style="min-height:auto;max-height:80px">С чего начать? И зачем мне это?</div>
        <div class="deadline-soft-note">Саша не понимает, к чему приведут его усилия</div>
      </div>
    </div>
  `;
}

// Экран 3 — появляется Ари
function renderAriAppears() {
  return `
    <div class="main-grid grid-lms">
      <div class="panel" style="opacity:.58">
        <div class="panel-title">Личный кабинет</div>
        ${subjectCards()}
        <div class="schedule-list">
          <div class="mini-card">Русский</div>
          <div class="mini-card">Математика</div>
          <div class="mini-card">Информатика</div>
        </div>
      </div>
      <div class="panel">
        <div class="ari-nudge large">
          <img src="./assets/ari-secondary.png" alt="Ари">
          <div>
            <div class="nudge-title">Ари</div>
            <div class="nudge-copy">Привет! Помогу разобраться с тем, как нужно готовиться, чтобы поступить в вуз мечты!</div>
          </div>
          <button class="small-button" type="button" data-step="4">Открыть</button>
        </div>
        <div class="mini-card"><strong>Новый слой.</strong><br><span class="panel-subtitle">Не уроки, а маршрут.</span></div>
      </div>
    </div>
  `;
}

// Экран 4 — Ари раскрывается (НОВЫЙ)
function renderAriRevealed() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel" style="display:flex;flex-direction:column;align-items:center;gap:28px;padding:36px;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 40%, rgba(104,231,210,.07), transparent);pointer-events:none"></div>
        <div style="width:120px;height:120px;border-radius:28px;overflow:hidden;border:2px solid rgba(104,231,210,.4);box-shadow:0 0 60px rgba(104,231,210,.2);flex-shrink:0">
          <img src="./assets/ari-secondary.png" alt="Ари" style="width:100%;height:100%;object-fit:cover">
        </div>
        <div style="text-align:center;max-width:520px">
          <div style="font-size:28px;font-weight:800;margin-bottom:14px">${typewriterText("Привет, я Ари — твой AI-наставник по поступлению.")}</div>
          <div style="color:var(--muted);font-size:17px;line-height:1.55;margin-bottom:10px">Моя задача — помочь тебе выстроить оптимальную стратегию подготовки, чтобы ты смог достичь наилучшего результата и поступить в вуз мечты.</div>
          <div style="color:var(--muted);font-size:16px;line-height:1.55;margin-bottom:10px">Самое главное — регулярность занятий. Ты не будешь тратить силы впустую, а будешь идти по умному пути, где каждый шаг приближает тебя к цели.</div>
          <div style="color:var(--soft);font-size:15px">Давай познакомимся! Расскажи о себе: куда хочешь поступить, что тебе интересно и что тебя волнует. Можешь написать текстом или записать голосовое.</div>
        </div>
        <button class="text-button" type="button" data-step="5" style="min-width:200px;font-size:16px">Начать чат</button>
      </div>
    </div>
  `;
}

// Экран 6 — первый чат
function renderChatIntro() {
  const chat = chatShell(
    [
      msg("sasha", "Я в 10 классе. Хочу в Москву на AI или ML. Технический вуз, но без физики. Я из региона, пробники писал на средние баллы.", true),
    ],
    "Сообщение готово",
    "Отправить",
    6,
    ""
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.4fr .6fr">
      ${chat}
      <div class="panel analysis-panel">
        <div class="panel-title">Ари читает запрос</div>
        <div class="shimmer-box"></div>
        <div class="shimmer-box"></div>
        <div class="shimmer-box"></div>
        <div class="mini-card"><strong>Свободный ввод вместо анкеты.</strong><br><span class="panel-subtitle">Саша пишет как человек.</span></div>
      </div>
    </div>
  `;
}

// Экран 6 — Ари уточняет баллы
function renderAriAsksScores() {
  const chips = ["📍 Москва", "🤖 AI / ML", "❌ Без физики", "📚 10 класс"];
  const chat = chatShell(
    [
      msg("sasha", "Я в 10 классе. Хочу в Москву на AI или ML. Технический вуз, но без физики. Я из региона, пробники писал на средние баллы."),
      msg("ari", "Саша, хорошо, поняла! 👍"),
      msg("ari", "Расскажи, на какие баллы ты примерно писал пробники? Введи их — и мы подберём тебе подходящие вузы под твой запрос."),
    ],
    "Ввести баллы по ЕГЭ",
    "Ввести баллы",
    7
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.4fr .6fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Параметры маршрута</div>
        <div class="structure-flow">запрос → профиль</div>
        <div class="chip-row">
          ${chips.map((chip, i) => `<div class="chip" style="animation-delay:${i * 0.12}s">${chip}</div>`).join("")}
        </div>
        <div class="mini-card"><strong>Следующий шаг — стартовые баллы.</strong><br><span class="panel-subtitle">Без них карта вузов будет фантазией, а не маршрутом.</span></div>
      </div>
    </div>
  `;
}

// Экран 7 — хаотичный ввод
function renderHumanInput() {
  const chat = chatShell(
    [
      msg("ari", "Привет, я Ари! 👋"),
      msg("sasha", "Хочу в Москву на AI или ML. Технический вуз, но без физики. Я из региона, баллы пока средние, не знаю, с чего начать.", true),
    ],
    "Ари анализирует...",
    "Отправить",
    7
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.4fr .6fr">
      ${chat}
      <div class="panel analysis-panel">
        <div class="panel-title">Ари анализирует ввод</div>
        <div class="shimmer-box"></div>
        <div class="shimmer-box"></div>
        <div class="shimmer-box"></div>
      </div>
    </div>
  `;
}

// Экран 8 — Ари собирает профиль
function renderAriStructures() {
  const chips = ["📍 Москва", "🤖 AI / ML", "❌ Без физики", "📚 Р + М + И"];
  const chat = chatShell(
    [
      msg("ari", "Поняла цель."),
      msg("ari", "Собираю маршрут без физики."),
    ],
    "Готово к подбору вузов",
    "Подобрать",
    8
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.4fr .6fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Параметры маршрута</div>
        <div class="structure-flow">хаос → структура</div>
        <div class="chip-row">
          ${chips.map((chip, i) => `<div class="chip" style="animation-delay:${i * 0.2}s">${chip}</div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

// Экран 9 — Ари предлагает выбрать полярную звезду
function renderAriSuggestsStar() {
  const chat = chatShell(
    [
      msg("ari", "Саша, вот список вузов, которые тебе подходят! 🎯"),
      msg("ari", "Давай выберем нашу полярную звезду — вуз, который станет твоей амбициозной целью."),
      msg("ari", "Не переживай, я также сформирую запасные надёжные варианты, в которые ты сможешь целиться на бюджет."),
    ],
    "Выбрать цель",
    "Выбрать цель",
    10
  );
  const miniCards = [
    ["МАИ", "жёлтая зона", "yellow"],
    ["ВШЭ", "амбициозная цель", "red"],
    ["МИРЭА", "запасной вариант", "red"],
    ["МИСИС", "запасной вариант", "red"],
  ];
  return `
    <div class="main-grid" style="grid-template-columns:1.35fr .65fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Карта выбора</div>
        <div class="star-choice-grid stagger-in">
          ${miniCards.map(([name, meta, zone]) => `
            <div class="star-choice-card ${zone}">
              <strong>${name}</strong>
              <span>${meta}</span>
            </div>
          `).join("")}
        </div>
        <div class="mini-card"><strong>Полярная звезда — не гарантия.</strong><br><span class="panel-subtitle">Это ориентир, под который Ари строит стратегию.</span></div>
      </div>
    </div>
  `;
}

// Экран 10 — карточки вузов
function renderUniversityCards() {
  const hse    = demoData.universities.find(u => u.id === "hse");
  const others = demoData.universities.filter(u => u.id !== "hse");
  const hseSelected = state.selectedUniversity === "hse";

  return `
    <div class="main-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Какой вуз станет твоей целью?</div>
            <div class="panel-subtitle">Это будет твоя полярная звезда — ориентир для маршрута</div>
          </div>
          <div class="tag">без физики</div>
        </div>
        <div style="display:grid;gap:14px">
          <div style="display:flex;justify-content:center">
            <button class="university-card ${hseSelected ? "selected" : ""}"
              type="button" data-university="hse" data-step="11"
              style="width:42%;min-height:180px;${hseSelected ? "box-shadow:0 0 0 2px var(--teal),0 0 40px rgba(104,231,210,.2)" : ""}">
              <div style="display:flex;align-items:center;gap:6px">
                <div class="role-pill">рекомендация</div>
              </div>
              <div class="uni-name" style="font-size:28px">${hse.name}</div>
              <div class="uni-program">${hse.program}</div>
              <div class="uni-benchmark">${hse.benchmark}</div>
            </button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px">
            ${others.map(item => `
              <button class="university-card ${state.selectedUniversity === item.id ? "selected" : ""}"
                type="button" data-university="${item.id}" data-step="10"
                style="${item.id === "mipt" ? "opacity:0.65" : ""}">
                <div class="role-pill ${item.id === "mipt" ? "stretch" : ""}">${item.id === "mipt" ? "вне зоны" : roleText(item.role)}</div>
                <div class="uni-name">${item.name}</div>
                <div class="uni-program">${item.program}</div>
                <div class="uni-benchmark">${item.benchmark}</div>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Экран 11 — Ари подтверждает выбор
function renderAriConfirmsChoice() {
  const chat = chatShell(
    [
      msg("ari", "Класс! ВШЭ — отличная цель! ⭐"),
      msg("ari", "Теперь давай сформируем карту вузов и посмотрим, какая ситуация сейчас."),
    ],
    "Сформировать карту",
    "Сформировать карту",
    12
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.4fr .6fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Стратегия</div>
        <div class="route-stack">
          <div class="route-card route-card-star"><div><strong>ВШЭ ★</strong><br><span>полярная звезда · 288</span></div></div>
          <div class="route-card"><div><strong>МАИ · МИРЭА · МИСИС</strong><br><span>запасные варианты</span></div></div>
          <div class="route-card"><div><strong>МФТИ</strong><br><span style="color:var(--coral)">вне зоны · 301</span></div></div>
        </div>
      </div>
    </div>
  `;
}

// Экран 12 — полярная звезда зафиксирована (расширенный)
function renderRouteLocked() {
  const current = 216, target = 288;
  const pct = Math.round((current / target) * 100);
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel" style="display:flex;flex-direction:column;align-items:center;gap:28px;padding:32px">
        <div style="text-align:center">
          <div style="font-size:13px;color:var(--teal);font-weight:800;text-transform:uppercase;letter-spacing:2px">Полярная звезда</div>
          <div class="polar-star-name">ВШЭ <span style="color:var(--teal);animation:starGlow 2s ease-in-out infinite alternate">★</span></div>
          <div style="color:var(--soft);font-size:15px;margin-top:4px">ПМИ · ориентир 288</div>
        </div>
        <div class="polar-progress-wrap">
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--soft);margin-bottom:8px">
            <span>Сейчас: <strong style="color:var(--ink)">216</strong></span>
            <span>Цель: <strong style="color:var(--teal)">288</strong></span>
          </div>
          <div class="polar-progress-track">
            <div class="polar-progress-fill" style="width:${pct}%"></div>
            <div class="polar-progress-marker" style="left:${pct}%"></div>
          </div>
          <div style="text-align:center;margin-top:10px;font-size:14px;color:var(--muted)">Осталось набрать <strong style="color:var(--amber)">${target - current} баллов</strong></div>
        </div>
        <div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center">
          <div class="route-card" style="min-width:140px"><div><strong>МАИ</strong><br><span>248 · запасной</span></div></div>
          <div class="route-card" style="min-width:140px"><div><strong>МИРЭА</strong><br><span>263 · запасной</span></div></div>
          <div class="route-card" style="min-width:140px"><div><strong>МИСИС</strong><br><span>267 · запасной</span></div></div>
        </div>
        <div class="polar-ari-note">
          <img src="./assets/ari-primary.png" alt="Ари" style="width:36px;height:36px;border-radius:10px;object-fit:cover;flex-shrink:0">
          <div style="font-size:15px;color:var(--muted);line-height:1.5">${typewriterText("ВШЭ — твоя полярная звезда. Я буду строить маршрут к ней.")}</div>
        </div>
      </div>
    </div>
  `;
}

// Экран 13 — Ари строит маршрут
function renderAriBuildsRoute() {
  const chat = chatShell(
    [
      msg("ari", "Саша, а теперь мы сформируем твой маршрут до Вышки!"),
      msg("ari", "Вот прогноз прямо сейчас — посмотрим, где ты находишься и что нужно сделать."),
    ],
    "Открыть дашборд",
    "Открыть дашборд",
    14
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.25fr .75fr">
      ${chat}
      <div class="panel route-build-panel">
        <div class="panel-title">Расчёт маршрута</div>
        <div class="route-build-steps">
          <div class="route-build-step active">Баллы ЕГЭ</div>
          <div class="route-build-step active">Порог ВШЭ</div>
          <div class="route-build-step active">Запасные вузы</div>
          <div class="route-build-step">План недели</div>
        </div>
        <div class="route-build-forecast">
          <span>Стартовый прогноз</span>
          <strong data-forecast-value="${demoData.october.forecast}">${demoData.october.forecast}</strong>
          <em>к июню</em>
        </div>
      </div>
    </div>
  `;
}

// Экран 11 — новый дашборд
function renderDashboard() {
  const current = demoData.october.currentTotal;
  const forecast = demoData.october.forecast;
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        <div class="panel-title">Твой маршрут до ВШЭ</div>
        ${renderForecast(forecast, current, 288, {
          displayValue: current,
          displayLabel: "",
          progressBase: current,
          gapBase: current,
          animateValue: false,
        })}
      </div>
      <div class="panel">
        <div class="recommendation-card">
          <div class="recommendation-title">Сегодня: планиметрия</div>
          <div class="recommendation-meta">
            <div class="metric-chip">Задание 7</div>
            <div class="metric-chip">3 часа</div>
            <div class="metric-chip">+3 к прогнозу</div>
          </div>
        </div>
        ${renderOrbitMap(current, "compact")}
      </div>
    </div>
  `;
}

// Экран 12 — диагностика
function renderDiagnostics() {
  const scores = demoData.october.scores;
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        <div class="panel-title">Диагностика</div>
        <div class="score-bars">
          ${scoreRow("Русский",     scores.russian)}
          ${scoreRow("Математика",  scores.math, true)}
          ${scoreRow("Информатика", scores.informatics)}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Главный рычаг</div>
        <div class="mini-card"><strong>Математика 58</strong><br><span class="panel-subtitle">быстрее всего двигает карту</span></div>
        ${renderForecast(demoData.october.forecast, demoData.october.currentTotal, 288, {
          displayValue: demoData.october.currentTotal,
          displayLabel: "",
          progressBase: demoData.october.currentTotal,
          gapBase: demoData.october.currentTotal,
          animateValue: false,
        })}
      </div>
    </div>
  `;
}

// Экран 15 — рекомендация: математика
function renderRecommendationMath() {
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        <div class="rec-series-header">
          <div class="rec-series-badge">1 / 3</div>
          <div class="rec-series-title">Рекомендации на эту неделю</div>
        </div>
        <div class="recommendation-card">
          <div class="recommendation-subject">📐 Математика</div>
          <div class="recommendation-title">Задание 7: Планиметрия</div>
          <div class="recommendation-why">Планиметрия — твой главный рычаг сейчас. Этот блок тем даст тебе сразу +3 тестовых балла за 3 часа работы: текущий балл вырастет с 216 до 219, а все вузы станут чуть ближе.</div>
          <div class="roi-chain">
            <div class="roi-step">
              <div class="roi-icon">📐</div>
              <div class="roi-text">Планиметрия</div>
              <div class="roi-detail">3 часа</div>
            </div>
            <div class="roi-arrow">→</div>
            <div class="roi-step">
              <div class="roi-icon" style="color:var(--teal)">+3</div>
              <div class="roi-text">балла</div>
              <div class="roi-detail">к прогнозу</div>
            </div>
            <div class="roi-arrow">→</div>
            <div class="roi-step">
              <div class="roi-icon" style="color:var(--green)">🎯</div>
              <div class="roi-text">МАИ</div>
              <div class="roi-detail">на 3 балла ближе</div>
            </div>
          </div>
          <div class="mini-plan">
            <div class="plan-step">1. Разбор теории (40 мин)</div>
            <div class="plan-step">2. 10 задач с решениями (1.5ч)</div>
            <div class="plan-step">3. Мини-тест на закрепление (30 мин)</div>
          </div>
          <div class="zone-shift-preview">
            <div class="zone-shift-card yellow">МАИ<br><span>было: осталось 32</span></div>
            <div class="zone-shift-arrow">→</div>
            <div class="zone-shift-card yellow">МАИ<br><span>станет: осталось 29</span></div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Почему именно это</div>
        <div class="roi-comparison">
          <div class="roi-option current">
            <div class="roi-option-title">Планиметрия (зад. 7)</div>
            <div class="roi-option-stat">3 часа → <strong>+3 балла</strong></div>
            <div class="roi-option-rate">1 балл/час</div>
          </div>
          <div class="roi-option alternative">
            <div class="roi-option-title">Стереометрия (зад. 13)</div>
            <div class="roi-option-stat">8 часов → <strong>+6 баллов</strong></div>
            <div class="roi-option-rate">0.75 балла/час</div>
          </div>
        </div>
        <div class="mini-card"><strong>Ари выбирает не самое сложное, а самое выгодное.</strong><br><span class="panel-subtitle">ROI-подход к подготовке.</span></div>
      </div>
    </div>
  `;
}

// Экран 14 — эффект действия
function renderRecommendationDone() {
  const forecast = demoData.afterRecommendation.forecast;
  const current = demoData.october.currentTotal;
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Задание выполнено</div>
          <div class="panel-subtitle">Балл Саши изменился после задания</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <div class="done-stamp">Готово</div>
            <div class="delta-badge">+3</div>
          </div>
        </div>
        ${renderForecast(forecast, current, 288, {
          displayValue: current,
          displayLabel: "",
          progressBase: current,
          gapBase: forecast,
          forecastLabel: "Новый балл",
          forecastValue: forecast,
          highlightForecast: true,
          animateValue: false,
        })}
        <div class="ari-shift-note">${typewriterText("Было 216. После задания стало 219. Карта справа пока показывает старую точку старта.")}</div>
        <div class="motivation-strip">
          <strong>🎉 Ты решил задание — и стал ближе к ВШЭ!</strong>
          <span>🏢 Кампус на Покровке · 🚀 стажировки в Яндекс и Сбер · 💰 стипендия до 25 000 ₽/мес</span>
        </div>
      </div>
      <div class="panel">
        ${renderOrbitMap(current, "compact")}
      </div>
    </div>
  `;
}

// Экран 19 — Ари комментирует сдвиг
function renderAriCommentShift() {
  const chat = chatShell(
    [
      msg("ari", "Видишь? Одно задание — и балл уже изменился. 🎯"),
      msg("ari", "Задание 7 закрыто. Новый балл: 219."),
      msg("ari", "МАИ стал ближе. Давай посмотрим карту."),
    ],
    "Смотреть карту...",
    "Посмотреть карту",
    23
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.4fr .6fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Новый балл</div>
        ${renderForecast(demoData.afterRecommendation.forecast, demoData.october.currentTotal, 288, {
          displayValue: demoData.october.currentTotal,
          displayLabel: "",
          progressBase: demoData.october.currentTotal,
          gapBase: demoData.afterRecommendation.forecast,
          forecastLabel: "Новый балл",
          forecastValue: demoData.afterRecommendation.forecast,
          highlightForecast: true,
          animateValue: false,
        })}
      </div>
    </div>
  `;
}

// Экран 16 — живая карта вузов
function renderUniversityMap() {
  const focusId  = state.focusedUniversity === "hse" ? "mai" : state.focusedUniversity;
  const focus    = university(focusId);
  const forecast = demoData.afterRecommendation.forecast;
  const gap      = focus.benchmark - forecast;
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        ${renderOrbitMap(forecast)}
      </div>
      <div class="panel">
        <div class="panel-title">${focus.name}</div>
        <div class="mini-card"><strong>${focus.program}</strong><br><span class="panel-subtitle">ориентир ${focus.benchmark}</span></div>
        <div class="mini-card"><strong>${gapText(forecast, focus)}</strong><br><span class="panel-subtitle">${zoneText(getUniversityZone(forecast, focus.benchmark))}</span></div>
        ${focus.id === "mai" ? `
          <div class="mini-card live-shift-card">
            <strong>МАИ подсвечен после задания</strong><br>
            <span class="panel-subtitle">Новый балл Саши — ${forecast}. До МАИ осталось ${Math.max(gap, 0)} баллов.</span>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

// Экран 24 — мотивация: что ждёт в ВШЭ
function renderMotivationScreen() {
  const facts = [
    ["🏢", "Кампус на Покровке", "Учёба в центре Москвы"],
    ["💰", "Стипендия до 25 000 ₽/мес", "Для сильных результатов"],
    ["🚀", "Стажировки", "Яндекс, Сбер, VK с 3 курса"],
    ["🌍", "Обмены", "Университеты Европы и Азии"],
  ];
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel motivation-panel">
        <div class="motivation-hero">
          <img src="./assets/ari-primary.png" alt="Ари">
          <div>
            <div class="panel-title">Саша, а вот что ждёт тебя в ВШЭ:</div>
            <div class="panel-subtitle">Не абстрактная цель, а понятная картинка будущего.</div>
          </div>
        </div>
        <div class="motivation-card-grid stagger-in">
          ${facts.map(([icon, title, text]) => `
            <div class="motivation-card">
              <div class="motivation-icon">${icon}</div>
              <strong>${title}</strong>
              <span>${text}</span>
            </div>
          `).join("")}
        </div>
        <div class="ari-reaction" style="max-width:100%">
          <img src="./assets/ari-primary.png" alt="Ари">
          <div>${typewriterText("Каждое решённое задание — шаг к этому. Продолжай!")}</div>
        </div>
      </div>
    </div>
  `;
}

function renderProgressCards(items) {
  return `
    <div class="progress-gap-grid stagger-in">
      ${items.map(item => `
        <div class="progress-gap-card ${item.tone}">
          <span>${item.name}</span>
          <strong>${item.gap}</strong>
          <em>${item.note}</em>
        </div>
      `).join("")}
    </div>
  `;
}

// Экран 25 — прогресс за октябрь
function renderMonthlyProgress() {
  const forecast = demoData.afterRecommendation.forecast;
  return `
    <div class="main-grid" style="grid-template-columns:.58fr .42fr">
      <div class="panel monthly-progress-panel">
        <div class="panel-title">Твой прогресс · Октябрь</div>
        <div class="monthly-progress-caption">На основании проделанной работы твой прогноз по баллам вырос до <strong>${forecast}</strong>.</div>
        <div class="monthly-progress-value"><span data-forecast-value="${forecast}">${forecast}</span><em>/ 288</em></div>
        <div class="animated-progress">
          <div class="animated-progress-fill" style="width:${Math.round((forecast / 288) * 100)}%"></div>
          <div class="animated-progress-target" style="left:100%">цель</div>
        </div>
        <div class="progress-timeline-line">
          <span>Старт: 216</span>
          <strong>Октябрь: +3 балла после задания</strong>
          <span>Цель: 288</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Сколько ещё нужно</div>
        ${renderProgressCards([
          { name: "До МАИ", gap: "29 баллов", note: "на 3 ближе", tone: "red" },
          { name: "До МИРЭА", gap: "44 балла", note: "на 3 ближе", tone: "red" },
          { name: "До МИСИС", gap: "48 баллов", note: "на 3 ближе", tone: "red" },
          { name: "До ВШЭ", gap: "69 баллов", note: "путь начался", tone: "red" },
        ])}
      </div>
    </div>
  `;
}

// Экран 17 — пробник проверен
function renderProbnikNotification() {
  return `
    <div class="main-grid">
      <div class="panel">
        <div class="comet-particle" style="left:22%;top:52%"></div>
        <div class="notification enhanced">
          <img src="./assets/ari-primary.png" alt="Ари">
          <div>
            <div class="notice-title"><span style="color:var(--teal)">✦</span> Пробник проверен! 🎉</div>
            <div class="notice-row">
              <div class="metric-chip" style="font-size:18px;font-weight:800">Математика: 58 → 71</div>
              <div class="metric-chip" style="font-size:18px;font-weight:800">Прогноз: 243 → 257</div>
            </div>
          </div>
          <button class="small-button" type="button" data-step="28">Открыть</button>
        </div>
      </div>
      <div class="panel">
        <div class="score-bars">
          ${scoreRow("Русский",     demoData.december.scores.russian)}
          ${scoreRow("Математика",  demoData.december.scores.math, true)}
          ${scoreRow("Информатика", demoData.december.scores.informatics)}
        </div>
      </div>
    </div>
  `;
}

// Экран 18 — до и после
function renderBeforeAfter() {
  return `
    <div class="before-after">
      ${renderMiniMap("Было",  demoData.october.forecast)}
      ${renderMiniMap("Стало", demoData.december.forecast)}
    </div>
  `;
}

function renderMiniMap(title, forecast) {
  const groups = { green: [], yellow: [], red: [] };
  demoData.universities.forEach(item => {
    groups[getUniversityZone(forecast, item.benchmark)].push(item);
  });
  return `
    <div class="panel mini-map">
      <div class="mini-map-title"><span>${title}</span><strong>${forecast}</strong></div>
      <div class="zone-columns">
        ${["green", "yellow", "red"].map(zone => `
          <div class="zone ${zone}">
            <div class="zone-label">${zoneText(zone)}</div>
            ${groups[zone].map(item => {
              const justEntered = zone === "green" && title === "Стало" && item.id === "mai";
              return `<div class="zone-card ${zone} ${justEntered ? "just-entered" : ""}">${item.name}<span>${gapText(forecast, item)}</span></div>`;
            }).join("") || `<div class="zone-card">пусто</div>`}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// Экран 19 — вузы зажигаются
function renderUniversitiesLight() {
  const forecast = demoData.december.forecast;
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        ${renderOrbitMap(forecast)}
      </div>
      <div class="panel">
        <div class="panel-title">Что изменилось</div>
        <div class="route-stack">
          <div class="route-card"><div><strong>МАИ открыт</strong><br><span>есть запас</span></div><div class="tag">green</div></div>
          <div class="route-card"><div><strong>МИРЭА ближе</strong><br><span>осталось 6</span></div><div class="tag">yellow</div></div>
          <div class="route-card"><div><strong>МИСИС ближе</strong><br><span>осталось 10</span></div><div class="tag">yellow</div></div>
        </div>
      </div>
    </div>
  `;
}

// Экран 31 — прогресс за декабрь
function renderDecemberProgress() {
  const forecast = demoData.december.forecast;
  return `
    <div class="main-grid" style="grid-template-columns:.58fr .42fr">
      <div class="panel monthly-progress-panel december">
        <div class="panel-title">Твой прогресс · Декабрь</div>
        <div class="monthly-progress-value"><span data-forecast-value="${forecast}">${forecast}</span><em>/ 288</em></div>
        <div class="animated-progress">
          <div class="animated-progress-fill" style="width:${Math.round((forecast / 288) * 100)}%"></div>
          <div class="animated-progress-target" style="left:100%">ВШЭ</div>
        </div>
        <div class="progress-timeline-line">
          <span>Октябрь: 216</span>
          <strong>Декабрь: +41 балл от старта</strong>
          <span>МАИ открыт</span>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Зоны стали ближе</div>
        ${renderProgressCards([
          { name: "МАИ", gap: "+9 в запасе", note: "открыт!", tone: "green" },
          { name: "МИРЭА", gap: "6 баллов", note: "близко!", tone: "yellow" },
          { name: "МИСИС", gap: "10 баллов", note: "на границе", tone: "yellow" },
          { name: "ВШЭ", gap: "31 балл", note: "реально", tone: "red" },
        ])}
      </div>
    </div>
  `;
}

// Экран 18 — push-уведомление от Ари (новый)
function renderPushScreen() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel" style="display:flex;flex-direction:column;align-items:center;gap:24px;padding:32px">
        <div class="push-notification">
          <div class="push-header">
            <img src="./assets/ari-primary.png" alt="Ари">
            <div>
              <div class="push-app">AI-наставник · Ари</div>
              <div class="push-time">сегодня, 19:42</div>
            </div>
          </div>
          <div class="push-body">
            Саша, ты не заходил уже 1 неделю! Возвращайся — прокачай свой прогресс.
            Тебе нужно всего 6 баллов, и тебе откроется новый вуз! 🎯
          </div>
        </div>
        <div style="text-align:center;max-width:500px">
          <div style="font-size:22px;font-weight:800;margin-bottom:8px">Ари возвращает к маршруту</div>
          <div style="color:var(--muted);font-size:15px;line-height:1.5">
            Не абстрактное «продолжай учиться», а конкретная причина вернуться:
            ещё 6 баллов — и следующий вуз переходит в зелёную зону.
          </div>
        </div>
        <div class="motivation-return">
          <strong>Каждый пропущенный день = упущенные баллы.</strong>
          <span>Но 30 минут сегодня — и прогноз вернётся!</span>
        </div>
      </div>
    </div>
  `;
}

// Экран 21 — без Ари vs с Ари (новый)
function renderContrastScreen() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr 1fr">
      <div class="panel contrast-panel dim">
        <div class="contrast-label">Без AI-наставника</div>
        <div class="contrast-title">Саша видит оценку. Не видит путь.</div>
        <div class="contrast-list">
          <div class="contrast-item negative">Средний балл: 290. И что?</div>
          <div class="contrast-item negative">Не знает: планиметрия даст +3 за 3 часа</div>
          <div class="contrast-item negative">Не видит: МАИ только что стал доступен</div>
          <div class="contrast-item negative">Не чувствует прогресса между пробниками</div>
        </div>
        <div class="contrast-result">📊 Калькулятор вузов: 1 раз в сезон, вручную</div>
      </div>
      <div class="panel contrast-panel bright">
        <div class="contrast-label" style="color:var(--teal)">С AI-наставником</div>
        <div class="contrast-title">Саша видит маршрут. Чувствует движение.</div>
        <div class="contrast-list">
          <div class="contrast-item positive">Прогноз 290 к июню, обновляется после каждого задания</div>
          <div class="contrast-item positive">«Сегодня: планиметрия. 3 часа → +3 балла → МАИ открыт»</div>
          <div class="contrast-item positive">Вузы «зажигаются» на карте в реальном времени</div>
          <div class="contrast-item positive">Ари пишет: «ты не заходил неделю, до нового вуза 6 баллов»</div>
        </div>
        <div class="contrast-result" style="border-color:rgba(104,231,210,.3);background:rgba(104,231,210,.06)">
          🎯 Живой маршрут: после каждого действия
        </div>
      </div>
    </div>
  `;
}

// Экран 35 — мотивация перед финалом
function renderPreFinale() {
  const chat = chatShell(
    [
      msg("ari", "Саша, помнишь, ты написал «не знаю, с чего начать»?"),
      msg("ari", "Посмотри, какой путь ты прошёл. Каждое задание было шагом к цели."),
      msg("ari", "А теперь — финишная прямая. 🏁"),
    ],
    "Показать результат",
    "Показать результат",
    36
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.25fr .75fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Путь до цели</div>
        <div class="finish-timeline">
          <div class="finish-step"><span>Октябрь</span><strong>216</strong><em>старт</em></div>
          <div class="finish-arrow">→</div>
          <div class="finish-step"><span>Декабрь</span><strong>257</strong><em>МАИ открыт</em></div>
          <div class="finish-arrow">→</div>
          <div class="finish-step"><span>Сейчас</span><strong>290</strong><em>цель достигнута</em></div>
          <div class="finish-arrow">→</div>
          <div class="finish-step target"><span>ВШЭ</span><strong>288</strong><em>ориентир</em></div>
        </div>
      </div>
    </div>
  `;
}

// Экран 22 — апрельский маршрут (финал)
function renderAprilRoute() {
  const forecast = demoData.april.forecast;
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel final-panel achieved-final" style="position:relative;padding:28px 32px;display:flex;flex-direction:column;gap:24px;align-items:center;overflow:hidden">
        <div class="celebration"></div>

        <div style="text-align:center">
          <div style="font-size:13px;color:var(--teal);font-weight:800;text-transform:uppercase;letter-spacing:2px">Финиш · Саша достиг цели</div>
          <div class="forecast-value" data-forecast-value="${forecast}" style="font-size:72px;line-height:1;font-weight:800;margin-top:8px">${forecast}</div>
          <div style="color:var(--soft);font-size:15px;margin-top:8px">было 216 в октябре</div>
        </div>

        <div class="timeline">
          <div class="timeline-node">
            <div class="timeline-month">Октябрь</div>
            <div class="timeline-dot">216</div>
            <div class="timeline-milestone">0 вузов · «не знаю, с чего начать»</div>
          </div>
          <div class="timeline-connector"></div>
          <div class="timeline-node">
            <div class="timeline-month">Декабрь</div>
            <div class="timeline-dot">257</div>
            <div class="timeline-milestone">МАИ открыт · математика +13</div>
          </div>
          <div class="timeline-connector"></div>
          <div class="timeline-node">
            <div class="timeline-month">Финиш</div>
            <div class="timeline-dot active">${forecast}</div>
            <div class="timeline-milestone">4 вуза · ВШЭ достигнута</div>
          </div>
        </div>

        <div class="result-cards">
          <div class="result-card green">
            <div class="result-icon">✓</div>
            <div class="result-name">МАИ</div>
            <div class="result-program">ПМИ</div>
            <div class="result-status">открыт · +42 в запасе</div>
          </div>
          <div class="result-card green">
            <div class="result-icon">✓</div>
            <div class="result-name">МИРЭА</div>
            <div class="result-program">ИИ</div>
            <div class="result-status">открыт · +27 в запасе</div>
          </div>
          <div class="result-card green">
            <div class="result-icon">✓</div>
            <div class="result-name">МИСИС</div>
            <div class="result-program">Data Science</div>
            <div class="result-status">открыт · +23 в запасе</div>
          </div>
          <div class="result-card green achieved">
            <div class="result-icon">✓</div>
            <div class="result-name">ВШЭ</div>
            <div class="result-program">ПМИ · цель</div>
            <div class="result-status">достигнута · +2 в запасе</div>
          </div>
        </div>

        <div class="ari-final">
          <img src="./assets/ari-primary.png" alt="Ари">
          <div class="ari-final-text">
            ${typewriterText("Помнишь, ты написал «не знаю, с чего начать»? Теперь 4 вуза открыты. ВШЭ — достигнута. ★ Каждое занятие было шагом сюда. Ты сделал это!")}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Экран 37 — итоговый экран
function renderFinalSummary() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel final-summary-panel">
        <div class="final-summary-kicker">Путь Саши: от 216 до 288</div>
        <div class="final-summary-grid stagger-in">
          <div class="final-summary-card"><span>📈</span><strong>+72 балла</strong><em>за учебный год</em></div>
          <div class="final-summary-card"><span>🏫</span><strong>4 вуза открыты</strong><em>МАИ, МИРЭА, МИСИС, ВШЭ</em></div>
          <div class="final-summary-card"><span>⭐</span><strong>ВШЭ достигнута</strong><em>полярная звезда стала зелёной</em></div>
          <div class="final-summary-card"><span>⏱</span><strong>Каждый час осмыслен</strong><em>подготовка связана с целью</em></div>
        </div>
        <div class="final-message">
          <strong>AI-Наставник поступления</strong>
          <span>Не оценка за пробник, а дорога к мечте.</span>
        </div>
        <button class="text-button" type="button" data-step="-1">Начать сначала ↺</button>
      </div>
    </div>
  `;
}

// Экран 5 — ввод баллов (новый)
function renderScoreInput() {
  const chat = chatShell(
    [
      msg("ari", "Отлично, цель понятна: Москва, AI / ML, технический вуз и без физики."),
      msg("ari", "Введи примерные результаты последних пробников по трём предметам — так я построю реалистичную карту вузов."),
    ],
    "Баллы отправлены",
    "Отправить",
    8
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.3fr .7fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Твои баллы из пробников</div>
        <div class="score-input-list">
          <div class="score-input-card">
            <div class="score-input-subject">Русский язык</div>
            <div class="score-input-row">
              <div class="score-input-value filled">78</div>
              <div class="score-input-scale">из 100</div>
            </div>
            <div class="score-input-bar"><div class="score-input-fill" style="width:78%"></div></div>
          </div>
          <div class="score-input-card highlight">
            <div class="score-input-subject">Профильная математика</div>
            <div class="score-input-row">
              <div class="score-input-value filled low">58</div>
              <div class="score-input-scale">из 100</div>
            </div>
            <div class="score-input-bar"><div class="score-input-fill math" style="width:58%"></div></div>
          </div>
          <div class="score-input-card">
            <div class="score-input-subject">Информатика</div>
            <div class="score-input-row">
              <div class="score-input-value filled">80</div>
              <div class="score-input-scale">из 100</div>
            </div>
            <div class="score-input-bar"><div class="score-input-fill" style="width:80%"></div></div>
          </div>
        </div>
        <div class="score-input-total">
          <span>Сумма</span>
          <strong>216</strong>
        </div>
      </div>
    </div>
  `;
}

// Экран 9 — зонная карта вузов (новый)
function renderZoneMap() {
  const forecast = demoData.october.forecast;
  const info = {
    mai: "Сильный технический вуз. ПМИ и IT-направления, кампус в районе Сокола. Для Саши — ближайший реалистичный запасной вариант.",
    mirea: "РТУ МИРЭА — крупный технологический вуз с программами про искусственный интеллект и прикладную информатику.",
    misis: "МИСИС — Data Science и инженерная аналитика, кампус в центре Москвы, сильная связка с индустрией.",
    hse: "ВШЭ — амбициозная цель Саши: сильная компьютерная школа, ПМИ и высокий ориентир по баллам.",
    mipt: "МФТИ — очень сильный технический вуз, но для многих траекторий нужна физика. Для профиля Саши это не основной маршрут.",
  };
  const lanes = {
    green: demoData.universities.filter(item => getUniversityZone(forecast, item.benchmark) === "green"),
    yellow: demoData.universities.filter(item => getUniversityZone(forecast, item.benchmark) === "yellow"),
    red: demoData.universities.filter(item => getUniversityZone(forecast, item.benchmark) === "red"),
  };
  const laneMeta = {
    green: ["Уже проходишь", "Баллы уже достаточны"],
    yellow: ["Близко", "До прохождения не больше 10 баллов"],
    red: ["Нужно расти", "Пока далеко от ориентира"],
  };

  const card = (item) => {
    const zone = getUniversityZone(forecast, item.benchmark);
    return `
      <button class="zone-uni-card ${zone} ${state.focusedUniversity === item.id ? "active" : ""}" type="button" data-focus-uni="${item.id}">
        <div class="zone-uni-name">${item.name}</div>
        <div class="zone-uni-program">${item.program}</div>
        <div class="zone-uni-bench">${item.benchmark}</div>
        <div class="zone-uni-gap">${gapText(forecast, item)}</div>
        <div class="zone-uni-tooltip">${info[item.id]}</div>
      </button>
    `;
  };

  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel" style="padding:24px">
        <div style="font-size:13px;color:var(--soft);margin-bottom:12px">Сумма сейчас: 216 · прогноз к июню: ${forecast} · без физики · Москва</div>
        <div class="zone-map-grid">
          ${["green", "yellow", "red"].map(zone => `
            <div class="zone-lane ${zone}">
              <div class="zone-lane-header">
                <div class="zone-lane-dot ${zone}"></div>
                <div>
                  <div class="zone-lane-title">${laneMeta[zone][0]}</div>
                  <div class="zone-lane-desc">${laneMeta[zone][1]}</div>
                </div>
              </div>
              <div class="zone-lane-cards">
                ${lanes[zone].map(card).join("") || `<div class="zone-empty">пока пусто</div>`}
              </div>
              <div class="zone-lane-note">${zone === "yellow" ? "МАИ — первый вуз, который можно открыть быстрым рычагом." : zone === "red" ? "ВШЭ остаётся амбициозной целью, но пока требует роста." : "Зелёная зона появится после первых точных действий."}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

// Экран 16 — рекомендация: русский (новый)
function renderRecommendationRussian() {
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        <div class="rec-series-header">
          <div class="rec-series-badge">2 / 3</div>
          <div class="rec-series-title">Рекомендации на эту неделю</div>
        </div>
        <div class="recommendation-card" style="border-color:rgba(131,186,255,.25);background:linear-gradient(135deg,rgba(131,186,255,.12),rgba(104,231,210,.06))">
          <div class="recommendation-subject">📝 Русский язык</div>
          <div class="recommendation-title">Задание 27: Сочинение (часть 2)</div>
          <div class="recommendation-why">Ты получаешь 3/5 за аргументацию. Добить до 5/5 — это +4 тестовых балла.</div>
          <div class="roi-chain">
            <div class="roi-step">
              <div class="roi-icon">📝</div>
              <div class="roi-text">Сочинение</div>
              <div class="roi-detail">2 часа</div>
            </div>
            <div class="roi-arrow">→</div>
            <div class="roi-step">
              <div class="roi-icon" style="color:var(--teal)">+4</div>
              <div class="roi-text">балла</div>
              <div class="roi-detail">к прогнозу</div>
            </div>
            <div class="roi-arrow">→</div>
            <div class="roi-step">
              <div class="roi-icon" style="color:var(--green)">📊</div>
              <div class="roi-text">МИРЭА</div>
              <div class="roi-detail">ближе на 4</div>
            </div>
          </div>
          <div class="mini-plan">
            <div class="plan-step">1. Разбор критериев (30 мин)</div>
            <div class="plan-step">2. 2 сочинения с AI (1ч)</div>
            <div class="plan-step">3. Работа над ошибками (30 мин)</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Детали задания</div>
        <div class="mini-card"><strong>Сочинение — самый «дешёвый» способ поднять русский.</strong><br><span class="panel-subtitle">2 часа вместо 6 на орфографию.</span></div>
        <div class="score-bars">
          ${scoreRow("Орфография", 85)}
          ${scoreRow("Пунктуация", 72)}
          ${scoreRow("Сочинение",  60, true)}
        </div>
      </div>
    </div>
  `;
}

// Экран 17 — рекомендация: информатика + сводка (новый)
function renderRecommendationInformatics() {
  return `
    <div class="main-grid grid-dashboard">
      <div class="panel">
        <div class="rec-series-header">
          <div class="rec-series-badge">3 / 3</div>
          <div class="rec-series-title">Рекомендации на эту неделю</div>
        </div>
        <div class="recommendation-card" style="border-color:rgba(104,231,210,.25);background:linear-gradient(135deg,rgba(104,231,210,.1),rgba(131,186,255,.05))">
          <div class="recommendation-subject">💻 Информатика</div>
          <div class="recommendation-title">Задание 25: Обработка массивов</div>
          <div class="recommendation-why">Ты теряешь баллы на крайних случаях. Отработать шаблон — +2 балла.</div>
          <div class="roi-chain">
            <div class="roi-step">
              <div class="roi-icon">💻</div>
              <div class="roi-text">Массивы</div>
              <div class="roi-detail">1.5 часа</div>
            </div>
            <div class="roi-arrow">→</div>
            <div class="roi-step">
              <div class="roi-icon" style="color:var(--teal)">+2</div>
              <div class="roi-text">балла</div>
              <div class="roi-detail">к прогнозу</div>
            </div>
            <div class="roi-arrow">→</div>
            <div class="roi-step">
              <div class="roi-icon" style="color:var(--green)">🔒</div>
              <div class="roi-text">Закрепить</div>
              <div class="roi-detail">информатику</div>
            </div>
          </div>
        </div>
        <div class="week-summary">
          <div class="week-summary-title">План на неделю: итого</div>
          <div class="week-summary-grid">
            <div class="week-item"><div class="week-item-subject">📐 Математика</div><div class="week-item-stat">3ч → +3</div></div>
            <div class="week-item"><div class="week-item-subject">📝 Русский</div><div class="week-item-stat">2ч → +4</div></div>
            <div class="week-item"><div class="week-item-subject">💻 Информатика</div><div class="week-item-stat">1.5ч → +2</div></div>
          </div>
          <div class="week-summary-total">
            <span>6.5 часов за неделю</span>
            <strong style="color:var(--teal)">+9 баллов к прогнозу</strong>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Это и есть AI-наставник</div>
        <div class="mini-card"><strong>Не «учись больше».</strong><br><span class="panel-subtitle">А конкретно: что, сколько часов, какой эффект.</span></div>
        <div class="mini-card"><strong>Каждую неделю — новый план.</strong><br><span class="panel-subtitle">На основе свежих данных.</span></div>
      </div>
    </div>
  `;
}

// Экран 21 — Ари предлагает пробник (новый)
function renderProbnikInvite() {
  const chat = chatShell(
    [
      msg("ari", "Саша, ты хорошо поработал последние 2 недели! 💪"),
      msg("ari", "Самое время написать пробник и обновить прогноз."),
      msg("ari", "Пробник покажет, сколько баллов прибавилось и какие вузы стали ближе."),
      msg("ari", "Напишешь — и я пересчитаю всю карту. Готов?"),
    ],
    "Начать пробник...",
    "Пройти пробник",
    27
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.3fr .7fr">
      ${chat}
      <div class="panel" style="display:grid;gap:16px;align-content:center">
        <div style="text-align:center">
          <div style="font-size:48px;margin-bottom:8px">📝</div>
          <div style="font-size:22px;font-weight:800;margin-bottom:6px">Время пробника</div>
          <div style="font-size:14px;color:var(--muted);line-height:1.5">Пробник обновит прогноз<br>и пересчитает карту вузов</div>
        </div>
        <div class="probnik-checklist">
          <div class="probnik-item">
            <div class="probnik-check">✓</div>
            <div>Русский язык<br><span class="panel-subtitle">90 мин</span></div>
          </div>
          <div class="probnik-item">
            <div class="probnik-check">✓</div>
            <div>Профильная математика<br><span class="panel-subtitle">235 мин</span></div>
          </div>
          <div class="probnik-item">
            <div class="probnik-check">✓</div>
            <div>Информатика<br><span class="panel-subtitle">235 мин</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Экран 26 — Ари: мы на пути (новый)
function renderAriMidSummary() {
  const chat = chatShell(
    [
      msg("ari", "Саша, давай оглянемся назад. 🌟"),
      msg("ari", "В октябре ты написал: «не знаю, с чего начать». Сумма была 216."),
      msg("ari", "Сейчас прогноз — 257. МАИ уже открыт. МИРЭА и МИСИС — в зоне досягаемости."),
      msg("ari", "А так как ты в 10 классе, твой прогресс будет только расти! Продолжаем. 🚀"),
    ],
    "Продолжаем...",
    "Дальше",
    33
  );
  return `
    <div class="main-grid" style="grid-template-columns:1.3fr .7fr">
      ${chat}
      <div class="panel">
        <div class="panel-title">Прогресс</div>
        <div class="mid-progress">
          <div class="mid-stat">
            <div class="mid-stat-label">Октябрь</div>
            <div class="mid-stat-value">216</div>
          </div>
          <div class="mid-arrow">→</div>
          <div class="mid-stat">
            <div class="mid-stat-label">Декабрь</div>
            <div class="mid-stat-value" style="color:var(--teal)">257</div>
          </div>
        </div>
        <div class="mini-card"><strong>+41 балл</strong><br><span class="panel-subtitle">за 2 месяца</span></div>
        <div class="mini-card"><strong>1 вуз открыт</strong><br><span class="panel-subtitle">2 в зоне досягаемости</span></div>
      </div>
    </div>
  `;
}

// Экран 15 — структура ЕГЭ (новый)
function renderExamStructure() {
  return `
    <div class="main-grid" style="grid-template-columns:.55fr .45fr">
      <div class="panel">
        <div class="panel-title">Как устроены баллы ЕГЭ по математике</div>
        <div class="panel-subtitle" style="margin-bottom:8px">Не все задания одинаково полезны</div>
        <div class="exam-structure">
          <div class="exam-row header">
            <div>№</div><div>Тема</div><div>Перв.</div><div>Саша</div><div>ROI</div>
          </div>
          <div class="exam-row best-roi">
            <div>7</div><div>Планиметрия</div><div>1</div><div>50%</div><div class="roi-badge high">★ 1.0 б/ч</div>
          </div>
          <div class="exam-row good-roi">
            <div>5</div><div>Теор. вероятн.</div><div>1</div><div>40%</div><div class="roi-badge medium">0.7 б/ч</div>
          </div>
          <div class="exam-row">
            <div>13</div><div>Стереометрия</div><div>3</div><div>20%</div><div class="roi-badge low">0.4 б/ч</div>
          </div>
          <div class="exam-row">
            <div>18</div><div>Параметры</div><div>4</div><div>0%</div><div class="roi-badge low">0.2 б/ч</div>
          </div>
        </div>
        <div class="exam-insight">
          <div class="exam-insight-icon">💡</div>
          <div><strong>Задание 7: 1 перв. балл ≈ 3 тестовых, 3 часа работы.</strong> Задание 13: 3 перв. балла, но 8 часов. <em>Ари выбирает то, что выгоднее.</em></div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title">Нелинейная шкала</div>
        <div class="panel-subtitle">1 первичный балл ≠ 1 тестовый</div>
        <div class="scale-visual">
          <div class="scale-bar">
            <div class="scale-segment easy" style="width:35%"><span>0–12 перв.</span><strong>→ 0–56 тест.</strong><div class="scale-note">~4.7 тест/перв.</div></div>
            <div class="scale-segment medium" style="width:35%"><span>12–20 перв.</span><strong>→ 56–78 тест.</strong><div class="scale-note">~2.8 тест/перв.</div></div>
            <div class="scale-segment hard" style="width:30%"><span>20–32 перв.</span><strong>→ 78–100 тест.</strong><div class="scale-note">~1.8 тест/перв.</div></div>
          </div>
          <div class="scale-marker" style="left:56%"><div class="scale-marker-dot"></div><div class="scale-marker-label">Саша: 17 перв. → 58 тест.</div></div>
        </div>
        <div class="mini-card"><strong>Саша в зоне максимальной отдачи.</strong><br><span class="panel-subtitle">Каждый первичный = ~3 тестовых. Потом будет меньше.</span></div>
        <div class="mini-card"><strong>Ари знает эту шкалу</strong><br><span class="panel-subtitle">и строит маршрут с учётом нелинейности.</span></div>
      </div>
    </div>
  `;
}

// Экран 19 — задание выполнено (новый)
function renderTaskCompleted() {
  return `
    <div class="main-grid" style="grid-template-columns:1fr">
      <div class="panel" style="display:flex;flex-direction:column;align-items:center;gap:20px;padding:28px">
        <div style="font-size:13px;color:var(--teal);font-weight:800;text-transform:uppercase;letter-spacing:2px">Саша выполнил задание</div>
        <div style="font-size:28px;font-weight:800;text-align:center">📐 Планиметрия · Задание 7</div>
        <div class="task-progress-grid">
          <div class="task-item done"><div class="task-num">1</div><div class="task-label">Разбор теории</div><div class="task-check">✓</div></div>
          <div class="task-item done"><div class="task-num">2</div><div class="task-label">Задачи 1–5</div><div class="task-check">✓</div></div>
          <div class="task-item done"><div class="task-num">3</div><div class="task-label">Задачи 6–10</div><div class="task-check">✓</div></div>
          <div class="task-item done"><div class="task-num">4</div><div class="task-label">Мини-тест</div><div class="task-check">✓</div></div>
        </div>
        <div class="task-result">
          <div class="task-result-row"><span>Точность до</span><strong>50%</strong></div>
          <div class="task-result-arrow">→</div>
          <div class="task-result-row"><span>Точность после</span><strong style="color:var(--teal)">82%</strong></div>
        </div>
        <div class="task-time">
          <span>⏱ Затрачено: 2 ч 45 мин</span>
          <span style="color:var(--teal);font-weight:700">Ари рассчитывал: ~3 часа</span>
        </div>
        <div class="ari-reaction">
          <img src="./assets/ari-primary.png" alt="Ари">
          <div>${typewriterText("Отлично! Задание 7 закрыто. Точность выросла с 50% до 82%. Давай посмотрим, как это повлияло на прогноз.")}</div>
        </div>
      </div>
    </div>
  `;
}

// Экран 25 — разбор роста балла (новый)
function renderScoreBreakdown() {
  return `
    <div class="main-grid" style="grid-template-columns:.55fr .45fr">
      <div class="panel">
        <div class="panel-title">Математика: за счёт чего +13?</div>
        <div class="panel-subtitle">Разбор по заданиям · было 58 → стало 71</div>
        <div class="breakdown-list">
          <div class="breakdown-row improved">
            <div class="breakdown-task">Зад. 7 · Планиметрия</div>
            <div class="breakdown-change"><span class="breakdown-before">50%</span><span class="breakdown-arrow">→</span><span class="breakdown-after">85%</span></div>
            <div class="breakdown-delta">+3 тест.</div>
            <div class="breakdown-source">рекомендация Ари ✓</div>
          </div>
          <div class="breakdown-row improved">
            <div class="breakdown-task">Зад. 5 · Теор. вероятн.</div>
            <div class="breakdown-change"><span class="breakdown-before">40%</span><span class="breakdown-arrow">→</span><span class="breakdown-after">70%</span></div>
            <div class="breakdown-delta">+2 тест.</div>
            <div class="breakdown-source">самостоятельно</div>
          </div>
          <div class="breakdown-row improved">
            <div class="breakdown-task">Зад. 1–4 · Часть 1</div>
            <div class="breakdown-change"><span class="breakdown-before">75%</span><span class="breakdown-arrow">→</span><span class="breakdown-after">90%</span></div>
            <div class="breakdown-delta">+5 тест.</div>
            <div class="breakdown-source">практика на платформе</div>
          </div>
          <div class="breakdown-row stable">
            <div class="breakdown-task">Зад. 13 · Стереометрия</div>
            <div class="breakdown-change"><span class="breakdown-before">20%</span><span class="breakdown-arrow">→</span><span class="breakdown-after">25%</span></div>
            <div class="breakdown-delta">+1 тест.</div>
            <div class="breakdown-source">не в фокусе</div>
          </div>
          <div class="breakdown-row stable">
            <div class="breakdown-task">Зад. 18 · Параметры</div>
            <div class="breakdown-change"><span class="breakdown-before">0%</span><span class="breakdown-arrow">→</span><span class="breakdown-after">0%</span></div>
            <div class="breakdown-delta">—</div>
            <div class="breakdown-source">не в фокусе</div>
          </div>
        </div>
        <div class="breakdown-total"><span>Итого по математике</span><strong>58 → 71 (+13)</strong></div>
      </div>
      <div class="panel">
        <div class="panel-title">Почему это важно</div>
        <div class="mini-card"><strong>Ари рекомендовал планиметрию.</strong><br><span class="panel-subtitle">Результат: +3 тестовых за 3 часа. Точно как прогнозировал.</span></div>
        <div class="mini-card"><strong>Стереометрию оставили на потом.</strong><br><span class="panel-subtitle">Правильно: +1 балл за тот же период. Низкий ROI подтвердился.</span></div>
        <div class="exam-insight">
          <div class="exam-insight-icon">📊</div>
          <div><strong>Прогноз Ари оправдался.</strong> Рекомендованные задания дали максимальный прирост. <em>Это не случайность — это стратегия.</em></div>
        </div>
      </div>
    </div>
  `;
}

// ─── render orchestrator ──────────────────────────────────────────────────────

function renderScreen() {
  if (state.currentStep < 0) {
    document.getElementById("screen").innerHTML = `
      <div class="screen-view zero-screen from-${state.navDirection}">
        ${renderIntroProfile()}
      </div>
    `;
    return;
  }

  const step      = steps[state.currentStep];
  const renderers = [
    renderLmsHome,                  //  0
    renderMathSubject,              //  1
    renderDeadlineNoise,            //  2
    renderAriAppears,               //  3
    renderAriRevealed,              //  4
    renderChatIntro,                //  5
    renderAriAsksScores,            //  6
    renderScoreInput,               //  7
    renderZoneMap,                  //  8
    renderAriSuggestsStar,          //  9
    renderUniversityCards,          // 10
    renderAriConfirmsChoice,        // 11
    renderRouteLocked,              // 12
    renderAriBuildsRoute,           // 13
    renderDashboard,                // 14
    renderDiagnostics,              // 15
    renderExamStructure,            // 16
    renderRecommendationMath,       // 17
    renderRecommendationRussian,    // 18
    renderRecommendationInformatics,// 19
    renderTaskCompleted,            // 20
    renderRecommendationDone,       // 21
    renderAriCommentShift,          // 22
    renderUniversityMap,            // 23
    renderMotivationScreen,         // 24
    renderMonthlyProgress,          // 25
    renderProbnikInvite,            // 26
    renderProbnikNotification,      // 27
    renderScoreBreakdown,           // 28
    renderBeforeAfter,              // 29
    renderUniversitiesLight,        // 30
    renderDecemberProgress,         // 31
    renderAriMidSummary,            // 32
    renderPushScreen,               // 33
    renderContrastScreen,           // 34
    renderPreFinale,                // 35
    renderAprilRoute,               // 36
    renderFinalSummary,             // 37
  ];
  document.getElementById("screen").innerHTML = screenShell(
    step.label,
    step.title,
    step.note,
    renderers[state.currentStep](),
    `<div class="tag">Акт ${step.act + 1}</div>`
  );
}

function render() {
  renderActNav();
  renderHeader();
  renderStepper();
  renderScreen();
  renderFlowControls();
}

// ─── event handling ───────────────────────────────────────────────────────────

function handleClick(event) {
  const universityTrigger = event.target.closest("[data-university]");
  if (universityTrigger) {
    state.selectedUniversity = universityTrigger.dataset.university;
    state.focusedUniversity  = universityTrigger.dataset.university;
    if (universityTrigger.dataset.step) {
      const target = Number(universityTrigger.dataset.step);
      if (!Number.isNaN(target)) goToStep(target);
      return;
    }
    state.navDirection = "stationary";
    render();
    runPostRenderAnimations(state.currentStep, getForecastForStep(state.currentStep));
    return;
  }

  const stepTrigger = event.target.closest("[data-step]");
  if (stepTrigger) {
    const target = Number(stepTrigger.dataset.step);
    if (!Number.isNaN(target)) goToStep(target);
    return;
  }

  const focusTrigger = event.target.closest("[data-focus-uni]");
  if (focusTrigger) {
    state.focusedUniversity = focusTrigger.dataset.focusUni;
    state.navDirection = "stationary";
    render();
    runPostRenderAnimations(state.currentStep, getForecastForStep(state.currentStep));
  }
}

function init() {
  const stepParam = new URLSearchParams(window.location.search).get("step");
  const requestedStep = Number(stepParam);
  if (stepParam === "0") {
    state.currentStep = -1;
  } else if (requestedStep >= 1 && requestedStep <= steps.length) {
    state.currentStep = requestedStep - 1;
  }
  createStars();
  document.addEventListener("click", handleClick);
  document.getElementById("prevBtn").addEventListener("click", () => goToStep(state.currentStep - 1));
  document.getElementById("nextBtn").addEventListener("click", () => goToStep(state.currentStep + 1));
  document.getElementById("primaryAction").addEventListener("click", () => goToStep(primaryTarget()));
  render();
  runPostRenderAnimations(state.currentStep, getForecastForStep(state.currentStep));
}

window.addEventListener("DOMContentLoaded", init);
