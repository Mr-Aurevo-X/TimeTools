/**
 * Copyright (c) 2026 Mr-Aurevo-X. All rights reserved.
 * SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
 * Author: Mr-Aurevo-X · https://github.com/Mr-Aurevo-X
 */
/**
 * TimeTools — UI (proprietary)
 * © 2026 Mr-Aurevo-X · TimeTools · 100% local · free · updates not guaranteed
 * All rights reserved. Do not strip copyright notices.
 */
(() => {
  "use strict";
  // © 2026 Mr-Aurevo-X · TimeTools · 100% local · free · updates not guaranteed

  const TAB_KEYS = {
    horodatage: "tabHorodatage",
    stopwatch: "tabStopwatch",
    timers: "tabTimers",
    pomodoro: "tabPomodoro",
  };

  const SUITE_I18N = {
    fr: {
      tagline: "Horodatage · chrono · minuteries · Pomodoro",
      copyright: "Copyright © 2026 Mr-Aurevo-X — tous droits réservés",
      title: "TimeTools",
      subtitle: "Horodatage · chrono · minuteries · Pomodoro",
      featuresTitle: "Fonctions",
      features:
        "Unix s/ms ↔ date, chrono + tours, 1–3 minuteries/alarmes (son optionnel), Pomodoro 25/5. 100 % local.",
      privacy:
        "Mr-Aurevo-X ne collecte aucune donnée. 100 % local. Seul appel réseau optionnel : vérif. de version GitHub Releases (désactivable dans À propos).",
      badgeFree: "100 % gratuit",
      soundLabel: "Son système (alarmes)",
      legalFree: "100 % gratuit",
      legalLocal: "100 % local — aucun cloud, aucune télémétrie",
      legalUpdates: "100 % local sauf vérif. optionnelle GitHub Releases (désactivable)",
      aboutTitle: "À propos — TimeTools",
      aboutBody:
        "Suite temps Mr-Aurevo-X : horodatage Unix, chronomètre, minuteries et Pomodoro. 100 % gratuit, 100 % local. Son système optionnel. Mise à jour non garantie.",
      aboutRights:
        "Redistribution, reverse engineering ou suppression du copyright interdits sans accord écrit.",
      btnAbout: "À propos",
      aboutRepoLabel: "Repo GitHub (releases)",
      btnCopyRepo: "Copier",
      aboutCopied: "Lien copié.",
      btnDisableUpdateCheck: "Désactiver la vérif. GitHub",
      btnEnableUpdateCheck: "Réactiver la vérif. GitHub",
      aboutNetNote: "100 % local — seule connexion hors machine optionnelle : vérif. de version GitHub Releases.",
      btnClose: "Fermer",
      updateTitle: "Nouvelle version disponible",
      updateDetail: "v{local} → v{remote}",
      btnUpdate: "Mettre à jour",
      btnLater: "Plus tard",
      updateApplying: "Mise à jour des sources…",
      updateDone: "Sources à jour — relancez Lancer.bat",
      updateFail: "Mise à jour impossible",
      ready: "Prêt",
      tabHorodatage: "Horodatage",
      tabStopwatch: "Chronomètre",
      tabTimers: "Minuteries",
      tabPomodoro: "Pomodoro",
      nowUnix: "Unix maintenant",
      nowLocal: "Heure locale",
      tz: "Fuseau",
      inputLabel: "Timestamp Unix ou date ISO",
      unitLabel: "Unité",
      unitAuto: "Auto",
      pickLabel: "Choisir date/heure (local)",
      btnNow: "Maintenant",
      copied: "Copié",
      copyFail: "Copie impossible",
      invalid: "Entrée invalide",
      detectedS: "Interprété comme secondes",
      detectedMs: "Interprété comme millisecondes",
      detectedIso: "Date ISO reconnue",
      rUnixS: "Unix (secondes)",
      rUnixMs: "Unix (millisecondes)",
      rIsoUtc: "ISO 8601 (UTC)",
      rIsoLocal: "ISO 8601 (local)",
      rHumanLocal: "Date locale",
      rHumanUtc: "Date UTC",
      rRelative: "Relatif",
      rWeekday: "Jour / semaine",
      copy: "Copier",
      btnStart: "Démarrer",
      btnPause: "Pause",
      btnReset: "Réinitialiser",
      btnLap: "Tour",
      btnSkip: "Passer",
      lap: "Tour",
      timerTitle: "Minuterie",
      minutes: "min",
      seconds: "s",
      timerDone: "Minuterie terminée !",
      pomoWork: "Travail",
      pomoBreak: "Pause",
      pomoWorkMin: "Travail (min)",
      pomoBreakMin: "Pause (min)",
      pomoRound: "Cycle",
      pomoDone: "Fin de phase !",
    },
    en: {
      tagline: "Timestamp · stopwatch · timers · Pomodoro",
      copyright: "Copyright © 2026 Mr-Aurevo-X — all rights reserved",
      title: "TimeTools",
      subtitle: "Timestamp · stopwatch · timers · Pomodoro",
      featuresTitle: "Features",
      features:
        "Unix s/ms ↔ date, stopwatch + laps, 1–3 timers/alarms (optional sound), Pomodoro 25/5. 100% local.",
      privacy:
        "Mr-Aurevo-X does not collect your data. 100% local. Only optional network call: GitHub Releases version check (disable in About).",
      badgeFree: "100% free",
      soundLabel: "System sound (alarms)",
      legalFree: "100% free",
      legalLocal: "100% local — no cloud, no telemetry",
      legalUpdates: "100% local except optional GitHub Releases check (can disable)",
      aboutTitle: "About — TimeTools",
      aboutBody:
        "Mr-Aurevo-X time suite: Unix timestamps, stopwatch, timers and Pomodoro. 100% free, 100% local. Optional system sound. Updates not guaranteed.",
      aboutRights:
        "Redistribution, reverse engineering, or stripping copyright is forbidden without written consent.",
      btnAbout: "About",
      aboutRepoLabel: "GitHub repo (releases)",
      btnCopyRepo: "Copy",
      aboutCopied: "Link copied.",
      btnDisableUpdateCheck: "Disable GitHub update check",
      btnEnableUpdateCheck: "Enable GitHub update check",
      aboutNetNote: "100% local — only optional off-machine call: GitHub Releases version check.",
      btnClose: "Close",
      updateTitle: "New version available",
      updateDetail: "v{local} → v{remote}",
      btnUpdate: "Update",
      btnLater: "Later",
      updateApplying: "Updating sources…",
      updateDone: "Sources updated — relaunch Lancer.bat",
      updateFail: "Update failed",
      ready: "Ready",
      tabHorodatage: "Timestamp",
      tabStopwatch: "Stopwatch",
      tabTimers: "Timers",
      tabPomodoro: "Pomodoro",
      nowUnix: "Unix now",
      nowLocal: "Local time",
      tz: "Timezone",
      inputLabel: "Unix timestamp or ISO date",
      unitLabel: "Unit",
      unitAuto: "Auto",
      pickLabel: "Pick date/time (local)",
      btnNow: "Now",
      copied: "Copied",
      copyFail: "Copy failed",
      invalid: "Invalid input",
      detectedS: "Interpreted as seconds",
      detectedMs: "Interpreted as milliseconds",
      detectedIso: "ISO date recognized",
      rUnixS: "Unix (seconds)",
      rUnixMs: "Unix (milliseconds)",
      rIsoUtc: "ISO 8601 (UTC)",
      rIsoLocal: "ISO 8601 (local)",
      rHumanLocal: "Local date",
      rHumanUtc: "UTC date",
      rRelative: "Relative",
      rWeekday: "Weekday / week",
      copy: "Copy",
      btnStart: "Start",
      btnPause: "Pause",
      btnReset: "Reset",
      btnLap: "Lap",
      btnSkip: "Skip",
      lap: "Lap",
      timerTitle: "Timer",
      minutes: "min",
      seconds: "s",
      timerDone: "Timer finished!",
      pomoWork: "Focus",
      pomoBreak: "Break",
      pomoWorkMin: "Focus (min)",
      pomoBreakMin: "Break (min)",
      pomoRound: "Round",
      pomoDone: "Phase ended!",
    },
  };

  let suiteLang = "fr";
  const t = (key) => (SUITE_I18N[suiteLang] && SUITE_I18N[suiteLang][key]) || SUITE_I18N.fr[key] || key;

  const $ = (id) => document.getElementById(id);
  const setStatus = (msg) => { $("status").textContent = msg || ""; };

  function apiReady() {
    return new Promise((resolve) => {
      if (window.pywebview && window.pywebview.api) return resolve(window.pywebview.api);
      window.addEventListener("pywebviewready", () => resolve(window.pywebview.api), { once: true });
      setTimeout(() => resolve(window.pywebview && window.pywebview.api), 2500);
    });
  }

  let audioCtx = null;
  async function playBeep(kind) {
    const toggle = $("soundToggle");
    if (toggle && !toggle.checked) return;
    const api = window.pywebview && window.pywebview.api;
    if (api && api.beep) { try { api.beep(kind || "alarm"); } catch (_) {} }
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.frequency.value = kind === "tick" ? 880 : 660;
      g.gain.setValueAtTime(0.001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      o.start();
      o.stop(audioCtx.currentTime + 0.5);
    } catch (_) {}
  }

  const pad = (n, w = 2) => String(Math.abs(n)).padStart(w, "0");

  /* ---------- Horodatage (EpochClock) ---------- */
  const epochEl = {
    tsInput: $("tsInput"),
    unitSel: $("unitSel"),
    pick: $("pick"),
    btnNow: $("btnNow"),
    parseNote: $("parseNote"),
    resultGrid: $("resultGrid"),
    liveUnix: $("liveUnix"),
    liveLocal: $("liveLocal"),
    liveTz: $("liveTz"),
  };

  function tzOffsetStr(d) {
    const off = -d.getTimezoneOffset();
    const sign = off >= 0 ? "+" : "-";
    const h = Math.floor(Math.abs(off) / 60);
    const m = Math.abs(off) % 60;
    return `${sign}${pad(h)}:${pad(m)}`;
  }

  function isoLocal(d) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
      `T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${tzOffsetStr(d)}`;
  }

  function relative(d) {
    const diffMs = d.getTime() - Date.now();
    const abs = Math.abs(diffMs);
    const units = [
      ["year", 31557600000], ["month", 2629800000], ["day", 86400000],
      ["hour", 3600000], ["minute", 60000], ["second", 1000],
    ];
    let unit = "second";
    let val = Math.round(diffMs / 1000);
    for (const [u, ms] of units) {
      if (abs >= ms || u === "second") {
        unit = u;
        val = Math.round(diffMs / ms);
        break;
      }
    }
    try {
      const rtf = new Intl.RelativeTimeFormat(suiteLang === "en" ? "en" : "fr", { numeric: "auto" });
      return rtf.format(val, unit);
    } catch (_) {
      return `${val} ${unit}`;
    }
  }

  function weekInfo(d) {
    const day = d.toLocaleDateString(suiteLang === "en" ? "en-US" : "fr-FR", { weekday: "long" });
    const tmp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = (tmp.getUTCDay() + 6) % 7;
    tmp.setUTCDate(tmp.getUTCDate() - dayNum + 3);
    const firstThursday = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 4));
    const week = 1 + Math.round(
      ((tmp - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7
    );
    const doy = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) -
      Date.UTC(d.getFullYear(), 0, 0)) / 86400000);
    return `${day} · ${suiteLang === "en" ? "week" : "sem."} ${week} · ${suiteLang === "en" ? "day" : "jour"} ${doy}`;
  }

  function parseInput() {
    const raw = String(epochEl.tsInput.value || "").trim();
    if (!raw) return null;
    const unit = epochEl.unitSel.value;
    if (/^-?\d+(\.\d+)?$/.test(raw)) {
      const num = Number(raw);
      let ms;
      let note;
      if (unit === "s") { ms = num * 1000; note = t("detectedS"); }
      else if (unit === "ms") { ms = num; note = t("detectedMs"); }
      else {
        const digits = raw.replace(/^-/, "").split(".")[0].length;
        if (digits >= 13) { ms = num; note = t("detectedMs"); }
        else { ms = num * 1000; note = t("detectedS"); }
      }
      return { date: new Date(ms), note };
    }
    const parsed = Date.parse(raw);
    if (!isNaN(parsed)) return { date: new Date(parsed), note: t("detectedIso") };
    return null;
  }

  const ROWS = [
    ["rUnixS", (d) => String(Math.round(d.getTime() / 1000))],
    ["rUnixMs", (d) => String(d.getTime())],
    ["rIsoUtc", (d) => d.toISOString()],
    ["rIsoLocal", (d) => isoLocal(d)],
    ["rHumanLocal", (d) => d.toLocaleString(suiteLang === "en" ? "en-US" : "fr-FR", { dateStyle: "full", timeStyle: "medium" })],
    ["rHumanUtc", (d) => d.toLocaleString(suiteLang === "en" ? "en-US" : "fr-FR", { dateStyle: "full", timeStyle: "medium", timeZone: "UTC" }) + " UTC"],
    ["rRelative", (d) => relative(d)],
    ["rWeekday", (d) => weekInfo(d)],
  ];

  function renderEpoch() {
    const parsed = parseInput();
    epochEl.resultGrid.innerHTML = "";
    if (!parsed || isNaN(parsed.date.getTime())) {
      epochEl.parseNote.textContent = epochEl.tsInput.value.trim() ? t("invalid") : "";
      return;
    }
    epochEl.parseNote.textContent = parsed.note || "";
    const d = parsed.date;
    ROWS.forEach(([key, fn]) => {
      let value;
      try { value = fn(d); } catch (_) { value = "—"; }
      const row = document.createElement("div");
      row.className = "result-row";
      const lab = document.createElement("span");
      lab.className = "result-label";
      lab.textContent = t(key);
      const val = document.createElement("span");
      val.className = "result-value";
      val.textContent = value;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn copy-btn";
      btn.textContent = t("copy");
      btn.addEventListener("click", () => copyText(value));
      row.appendChild(lab);
      row.appendChild(val);
      row.appendChild(btn);
      epochEl.resultGrid.appendChild(row);
    });
  }

  function setNow() {
    epochEl.tsInput.value = String(Math.round(Date.now() / 1000));
    epochEl.unitSel.value = "s";
    renderEpoch();
  }

  function onPick() {
    const v = epochEl.pick.value;
    if (!v) return;
    const d = new Date(v);
    if (!isNaN(d.getTime())) {
      epochEl.tsInput.value = String(Math.round(d.getTime() / 1000));
      epochEl.unitSel.value = "s";
      renderEpoch();
    }
  }

  async function copyText(text) {
    const api = await apiReady();
    if (!text) return;
    try {
      if (api && api.copy_text) {
        const res = await api.copy_text(String(text));
        if (res && res.ok) { setStatus(t("copied")); return; }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(String(text));
        setStatus(t("copied"));
        return;
      }
      setStatus(t("copyFail"));
    } catch (_) {
      setStatus(t("copyFail"));
    }
  }

  function tickLive() {
    const now = new Date();
    epochEl.liveUnix.textContent = String(Math.round(now.getTime() / 1000));
    epochEl.liveLocal.textContent = now.toLocaleTimeString(suiteLang === "en" ? "en-US" : "fr-FR");
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      epochEl.liveTz.textContent = `${tz} (UTC${tzOffsetStr(now)})`;
    } catch (_) {
      epochEl.liveTz.textContent = `UTC${tzOffsetStr(now)}`;
    }
  }

  /* ---------- Stopwatch ---------- */
  function fmtStopwatch(ms) {
    const total = Math.floor(ms);
    const cs = Math.floor((total % 1000) / 10);
    const s = Math.floor(total / 1000) % 60;
    const m = Math.floor(total / 60000) % 60;
    const h = Math.floor(total / 3600000);
    if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}.${pad(cs)}`;
    return `${pad(m)}:${pad(s)}.${pad(cs)}`;
  }

  function fmtCountdown(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const s = total % 60;
    const m = Math.floor(total / 60) % 60;
    const h = Math.floor(total / 3600);
    if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
    return `${pad(m)}:${pad(s)}`;
  }

  const sw = { running: false, base: 0, start: 0, laps: [] };
  function swElapsed() { return sw.running ? sw.base + (performance.now() - sw.start) : sw.base; }
  function swRender() { $("swDisplay").textContent = fmtStopwatch(swElapsed()); }
  function swToggle() {
    if (sw.running) { sw.base = swElapsed(); sw.running = false; $("swStart").textContent = t("btnStart"); $("swStart").classList.add("accent"); }
    else { sw.start = performance.now(); sw.running = true; $("swStart").textContent = t("btnPause"); $("swStart").classList.remove("accent"); }
  }
  function swReset() {
    sw.running = false; sw.base = 0; sw.laps = [];
    $("swStart").textContent = t("btnStart"); $("swStart").classList.add("accent");
    $("lapList").innerHTML = ""; swRender();
  }
  function swLap() {
    const e = swElapsed();
    const prev = sw.laps.length ? sw.laps[sw.laps.length - 1].total : 0;
    sw.laps.push({ total: e, delta: e - prev });
    renderLaps();
  }
  function renderLaps() {
    const ol = $("lapList");
    ol.innerHTML = "";
    sw.laps.forEach((l, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="lap-n">${t("lap")} ${i + 1}</span>` +
        `<span class="lap-delta">+${fmtStopwatch(l.delta)}</span>` +
        `<span class="lap-total">${fmtStopwatch(l.total)}</span>`;
      ol.appendChild(li);
    });
    ol.scrollTop = ol.scrollHeight;
  }

  /* ---------- Timers ---------- */
  const timers = [
    { id: 0, min: 5, sec: 0, remaining: 300000, running: false, endTs: 0, done: false },
    { id: 1, min: 10, sec: 0, remaining: 600000, running: false, endTs: 0, done: false },
    { id: 2, min: 1, sec: 0, remaining: 60000, running: false, endTs: 0, done: false },
  ];
  function timerRemaining(tm) { return tm.running ? Math.max(0, tm.endTs - performance.now()) : tm.remaining; }
  function clampInt(v, lo, hi) { let n = parseInt(v, 10); if (isNaN(n)) n = lo; return Math.max(lo, Math.min(hi, n)); }
  function renderTimers() {
    const grid = $("timersGrid");
    grid.innerHTML = "";
    timers.forEach((tm) => {
      const card = document.createElement("div");
      card.className = "panel timer-card" + (tm.done ? " done" : "");
      card.innerHTML =
        `<div class="timer-head">${t("timerTitle")} ${tm.id + 1}</div>` +
        `<div class="timer-display" id="td-${tm.id}">${fmtCountdown(timerRemaining(tm))}</div>` +
        `<div class="timer-inputs">` +
          `<label><input type="number" min="0" max="99" value="${tm.min}" id="tm-min-${tm.id}" /> <span>${t("minutes")}</span></label>` +
          `<label><input type="number" min="0" max="59" value="${tm.sec}" id="tm-sec-${tm.id}" /> <span>${t("seconds")}</span></label>` +
        `</div>` +
        `<div class="toolbar">` +
          `<button type="button" class="btn accent" id="tm-start-${tm.id}">${tm.running ? t("btnPause") : t("btnStart")}</button>` +
          `<button type="button" class="btn" id="tm-reset-${tm.id}">${t("btnReset")}</button>` +
        `</div>`;
      grid.appendChild(card);
      $(`tm-start-${tm.id}`).addEventListener("click", () => toggleTimer(tm.id));
      $(`tm-reset-${tm.id}`).addEventListener("click", () => resetTimer(tm.id));
      $(`tm-min-${tm.id}`).addEventListener("change", (e) => { tm.min = clampInt(e.target.value, 0, 99); if (!tm.running) resetTimer(tm.id, true); });
      $(`tm-sec-${tm.id}`).addEventListener("change", (e) => { tm.sec = clampInt(e.target.value, 0, 59); if (!tm.running) resetTimer(tm.id, true); });
    });
  }
  function toggleTimer(id) {
    const tm = timers[id];
    if (tm.running) { tm.remaining = timerRemaining(tm); tm.running = false; }
    else {
      if (tm.done || tm.remaining <= 0) tm.remaining = (tm.min * 60 + tm.sec) * 1000;
      if (tm.remaining <= 0) return;
      tm.done = false; tm.endTs = performance.now() + tm.remaining; tm.running = true;
    }
    renderTimers();
  }
  function resetTimer(id, silent) {
    const tm = timers[id];
    tm.running = false; tm.done = false; tm.remaining = (tm.min * 60 + tm.sec) * 1000;
    if (!silent) renderTimers(); else { const d = $(`td-${id}`); if (d) d.textContent = fmtCountdown(tm.remaining); }
  }

  /* ---------- Pomodoro ---------- */
  const pomo = { workMin: 25, breakMin: 5, phase: "work", remaining: 25 * 60000, running: false, endTs: 0, round: 1 };
  function pomoRemaining() { return pomo.running ? Math.max(0, pomo.endTs - performance.now()) : pomo.remaining; }
  function pomoRender() {
    $("pomoDisplay").textContent = fmtCountdown(pomoRemaining());
    $("pomoPhase").textContent = pomo.phase === "work" ? t("pomoWork") : t("pomoBreak");
    $("pomoPhase").className = "pomo-phase " + pomo.phase;
    $("pomoMeta").textContent = `${t("pomoRound")} ${pomo.round}`;
    $("pomoStart").textContent = pomo.running ? t("btnPause") : t("btnStart");
  }
  function pomoToggle() {
    if (pomo.running) { pomo.remaining = pomoRemaining(); pomo.running = false; }
    else {
      if (pomo.remaining <= 0) pomo.remaining = (pomo.phase === "work" ? pomo.workMin : pomo.breakMin) * 60000;
      pomo.endTs = performance.now() + pomo.remaining; pomo.running = true;
    }
    pomoRender();
  }
  function pomoReset() {
    pomo.running = false; pomo.phase = "work"; pomo.round = 1;
    pomo.workMin = clampInt($("pomoWorkMin").value, 1, 120);
    pomo.breakMin = clampInt($("pomoBreakMin").value, 1, 60);
    pomo.remaining = pomo.workMin * 60000;
    pomoRender();
  }
  function pomoSwitch() {
    if (pomo.phase === "work") { pomo.phase = "break"; pomo.remaining = pomo.breakMin * 60000; }
    else { pomo.phase = "work"; pomo.round += 1; pomo.remaining = pomo.workMin * 60000; }
    if (pomo.running) pomo.endTs = performance.now() + pomo.remaining;
    pomoRender();
  }

  /* ---------- Tabs ---------- */
  const TAB_NAMES = ["horodatage", "stopwatch", "timers", "pomodoro"];

  function switchTab(name) {
    document.querySelectorAll(".mode-tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
    TAB_NAMES.forEach((n) => { $(`panel-${n}`).hidden = n !== name; });
  }
  document.querySelectorAll(".mode-tab").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));

  /* ---------- Global ticker ---------- */
  function tick() {
    if (!$("panel-stopwatch").hidden) swRender();
    if (!$("panel-timers").hidden) {
      timers.forEach((tm) => {
        const d = $(`td-${tm.id}`);
        if (d) d.textContent = fmtCountdown(timerRemaining(tm));
      });
    }
    if (!$("panel-pomodoro").hidden) $("pomoDisplay").textContent = fmtCountdown(pomoRemaining());

    timers.forEach((tm) => {
      if (tm.running && timerRemaining(tm) <= 0) {
        tm.running = false; tm.done = true; tm.remaining = 0;
        playBeep("alarm"); setStatus(`${t("timerTitle")} ${tm.id + 1} — ${t("timerDone")}`);
        renderTimers();
      }
    });
    if (pomo.running && pomoRemaining() <= 0) {
      playBeep("alarm"); setStatus(t("pomoDone"));
      pomoSwitch();
    }
  }
  setInterval(tick, 50);

  /* ---------- Suite / chrome ---------- */
  let pendingRemoteVersion = null;

  function applyAccent(hex) {
    const accent = String(hex || "#5c7cfa").trim();
    if (!(accent.startsWith("#") && (accent.length === 4 || accent.length === 7))) return;
    let h = accent.slice(1);
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const root = document.documentElement;
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--accent-dim", `rgba(${r}, ${g}, ${b}, 0.2)`);
    root.style.setProperty("--accent-glow", `rgba(${r}, ${g}, ${b}, 0.4)`);
  }

  async function bootSuite(api) {
    const suite = window.MrAurevoXSuite;
    if (suite) {
      const settings = await suite.loadSuiteSettings(api);
      suiteLang = settings.language === "en" ? "en" : "fr";
      suite.applyAccent(settings.accent);
      suite.applyI18n(suiteLang, SUITE_I18N);
      return;
    }
    if (api && api.get_suite_settings) {
      try {
        const s = await api.get_suite_settings();
        if (s && s.accent) applyAccent(s.accent);
        if (s && s.language === "en") suiteLang = "en";
      } catch (_) {}
    }
  }

  function refreshLabels() {
    document.querySelectorAll(".mode-tab").forEach((b) => {
      const key = TAB_KEYS[b.dataset.tab];
      if (key) b.textContent = t(key);
    });
    $("btnAbout").textContent = t("btnAbout");
    epochEl.btnNow.textContent = t("btnNow");
    $("swStart").textContent = sw.running ? t("btnPause") : t("btnStart");
    $("swLap").textContent = t("btnLap");
    $("swReset").textContent = t("btnReset");
    $("pomoStart").textContent = pomo.running ? t("btnPause") : t("btnStart");
    $("pomoReset").textContent = t("btnReset");
    $("pomoSkip").textContent = t("btnSkip");
    if ($("updateTitle")) $("updateTitle").textContent = t("updateTitle");
    if ($("btnUpdateNow")) $("btnUpdateNow").textContent = t("btnUpdate");
    if ($("btnUpdateLater")) $("btnUpdateLater").textContent = t("btnLater");
  }

  function showUpdateBanner(info) {
    if (!$("updateBanner") || !info) return;
    pendingRemoteVersion = info.remote || null;
    $("updateDetail").textContent = t("updateDetail")
      .replace("{local}", info.local || "?")
      .replace("{remote}", info.remote || "?");
    $("updateBanner").hidden = false;
  }

  function hideUpdateBanner() { if ($("updateBanner")) $("updateBanner").hidden = true; }

  
  let updateCheckEnabled = true;

  
  async function fillAboutRepo(api) {
    const input = document.getElementById("aboutRepoUrl");
    if (!input) return;
    try {
      let repo = null;
      if (api && api.get_update_prefs) {
        const prefs = await api.get_update_prefs();
        if (prefs && prefs.repoUrl) repo = prefs.repoUrl;
        else if (prefs && prefs.repo) repo = "https://github.com/" + prefs.repo;
      }
      if (!repo && api && api.get_version) {
        const ver = await api.get_version();
        if (ver && ver.repo) repo = "https://github.com/" + ver.repo;
      }
      if (repo) input.value = repo;
    } catch (_) {}
  }

  async function copyAboutRepo() {
    const input = document.getElementById("aboutRepoUrl");
    const hint = document.getElementById("aboutCopyHint");
    const url = (input && input.value || "").trim();
    if (!url) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        input.focus();
        input.select();
        document.execCommand("copy");
      }
      if (hint) {
        hint.hidden = false;
        hint.textContent = typeof t === "function" ? t("aboutCopied") : "Lien copié.";
        setTimeout(() => { hint.hidden = true; }, 1600);
      }
    } catch (_) {}
  }

  async function refreshUpdateCheckButton(api) {
    const btn = document.getElementById("btnToggleUpdateCheck");
    const note = document.querySelector(".about-net");
    if (!btn) return;
    try {
      if (api && api.get_update_prefs) {
        const prefs = await api.get_update_prefs();
        if (prefs && prefs.ok) updateCheckEnabled = prefs.checkUpdates !== false;
      }
    } catch (_) {}
    btn.textContent = updateCheckEnabled
      ? (typeof t === "function" ? t("btnDisableUpdateCheck") : "Désactiver la vérif. GitHub")
      : (typeof t === "function" ? t("btnEnableUpdateCheck") : "Réactiver la vérif. GitHub");
    if (note && typeof t === "function") note.textContent = t("aboutNetNote");
    const repoLbl = document.querySelector('label[for="aboutRepoUrl"]');
    const btnCopy = document.getElementById("btnCopyRepo");
    if (repoLbl && typeof t === "function") repoLbl.textContent = t("aboutRepoLabel");
    if (btnCopy && typeof t === "function") btnCopy.textContent = t("btnCopyRepo");
  }

  async function toggleUpdateCheck() {
    const api = typeof apiReady === "function" ? await apiReady() : (window.pywebview && window.pywebview.api);
    if (!api || !api.set_check_updates) return;
    const next = !updateCheckEnabled;
    try {
      const res = await api.set_check_updates(next);
      if (res && res.ok) updateCheckEnabled = res.checkUpdates !== false;
    } catch (_) {}
    await refreshUpdateCheckButton(api);
    await fillAboutRepo(api);
  }

  async function runUpdateCheck(api) {
    if (!api || !api.check_for_update) return;
    try {
      if (api.get_update_prefs) {
        const prefs = await api.get_update_prefs();
        if (prefs && prefs.ok && prefs.checkUpdates === false) return;
      }
    } catch (_) {}

    try {
      const info = await api.check_for_update();
      if (!info || !info.ok || !info.updateAvailable) return;
      if (info.autoUpdate && api.apply_update) {
        setStatus(t("updateApplying"));
        const res = await api.apply_update();
        if (res && res.ok && res.applied) { setStatus(t("updateDone")); return; }
      }
      showUpdateBanner(info);
    } catch (_) {}
  }

  async function applyUpdateNow() {
    const api = await apiReady();
    if (!api || !api.apply_update) return;
    $("btnUpdateNow").disabled = true;
    setStatus(t("updateApplying"));
    try {
      const res = await api.apply_update();
      if (res && res.ok && res.applied) { setStatus(t("updateDone")); hideUpdateBanner(); return; }
      setStatus((res && res.error) || t("updateFail"));
    } catch (e) {
      setStatus(String((e && e.message) || e) || t("updateFail"));
    } finally {
      $("btnUpdateNow").disabled = false;
    }
  }

  async function dismissUpdateLater() {
    const api = await apiReady();
    hideUpdateBanner();
    try {
      if (api && api.dismiss_update) await api.dismiss_update(pendingRemoteVersion || "");
    } catch (_) {}
  }

  epochEl.tsInput.addEventListener("input", renderEpoch);
  epochEl.unitSel.addEventListener("change", renderEpoch);
  epochEl.pick.addEventListener("change", onPick);
  epochEl.btnNow.addEventListener("click", setNow);
  $("swStart").addEventListener("click", swToggle);
  $("swLap").addEventListener("click", swLap);
  $("swReset").addEventListener("click", swReset);
  $("pomoStart").addEventListener("click", pomoToggle);
  $("pomoReset").addEventListener("click", pomoReset);
  $("pomoSkip").addEventListener("click", () => { pomo.remaining = 0; if (pomo.running) pomo.endTs = performance.now(); pomoSwitch(); });
  $("pomoWorkMin").addEventListener("change", () => { if (!pomo.running && pomo.phase === "work") pomoReset(); });
  $("pomoBreakMin").addEventListener("change", () => { pomo.breakMin = clampInt($("pomoBreakMin").value, 1, 60); });
  $("btnAbout").addEventListener("click", async () => {
    try {
      const api = window.pywebview && window.pywebview.api;
      await refreshUpdateCheckButton(api);
    await fillAboutRepo(api);
    } catch (_) {}
    const d = $("aboutDialog"); if (d && d.showModal) d.showModal();
  });
  $("btnToggleUpdateCheck")?.addEventListener("click", (ev) => { ev.preventDefault(); toggleUpdateCheck(); });
  $("btnCopyRepo")?.addEventListener("click", (ev) => { ev.preventDefault(); copyAboutRepo(); });
  $("aboutRepoUrl")?.addEventListener("focus", (ev) => { try { ev.target.select(); } catch (_) {} });
  if ($("btnUpdateNow")) $("btnUpdateNow").addEventListener("click", applyUpdateNow);
  if ($("btnUpdateLater")) $("btnUpdateLater").addEventListener("click", dismissUpdateLater);

  (async () => {
    const api = await apiReady();
    await bootSuite(api);
    refreshLabels();
    tickLive();
    setInterval(tickLive, 1000);
    setNow();
    swReset();
    renderTimers();
    pomoRender();
    setTimeout(() => runUpdateCheck(api), 900);
  })();
})();
