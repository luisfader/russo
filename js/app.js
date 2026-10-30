(function () {
'use strict';

/* ======================= textos de la interfaz ======================= */
const I18N = {
  es: {
    tag: 'Ruso con los personajes de Роберт Фадер',
    welcomeLead: 'Учебник русского языка для начинающих',
    chooseLang: '¿En qué idioma quieres estudiar ruso?',
    heroTitle: 'Tu viaje por el ruso',
    heroText: 'Diez estaciones, cuarenta billetes. Cada billete es una lección corta con las palabras, frases y casos del manual «Резонанс».',
    cont: 'Continuar', startJourney: 'Empezar el viaje', allDone: 'Repasar',
    progress: 'billetes sellados',
    route: 'La ruta', routeSub: '10 lecciones del manual',
    lessons: ['Palabras I', 'Palabras II', 'Frases y casos', 'La tabla'],
    lessonSub: ['6 palabras', '6 palabras', 'frases útiles', 'declinación'],
    guide: 'Guía de la unidad', locked: 'Completa la estación anterior',
    cast: 'Los personajes', castSub: 'Los héroes del manual vienen de las novelas de Роберт Фадер.',
    about: 'Manual «Резонанс» de <b>Роберт Фадер</b>, profesor de idiomas nacido en Mendoza (Argentina) que vive y trabaja en Moscú.',
    unlockAll: 'Abrir todas las estaciones', lockAgain: 'Volver al orden normal', reset: 'Borrar mi progreso', resetAsk: '¿Seguro? Pulsa otra vez para borrar.',
    tips: 'Lo esencial', vocab: 'Vocabulario', phrases: 'Frases útiles', table: 'Declinación', word: 'Ruso', meaning: 'Significado',
    k: { learn: 'Palabra nueva', pickTr: '¿Qué significa?', pickRu: '¿Cómo se dice en ruso?', listen: 'Escucha y elige',
         match: 'Une las parejas', build: 'Ordena la frase en ruso', cloze: 'Completa la frase', kase: 'Elige la forma correcta',
         gender: '¿De qué género es?', type: 'Escríbelo en ruso', phrase: '¿Qué significa la frase?' },
    tapHear: 'Toca para escucharla', check: 'Comprobar', next: 'Continuar', gotIt: 'Entendido',
    good: ['Верно!', 'Отлично!', 'Молодец!', 'Так держать!'], bad: 'Не совсем…', answer: 'Respuesta correcta:',
    typeHint: 'Usa tu teclado o el teclado cirílico de abajo', del: 'Borrar', space: 'espacio', noVoice: 'Tu navegador no tiene voz rusa.',
    endTitle: '¡Estación alcanzada!', endText: 'Billete sellado. Sigue el viaje.', correct: 'aciertos', kmWon: 'km recorridos', back: 'Volver a la ruta', again: 'Siguiente billete',
    stamp: 'ПРОЙДЕНО', streak: 'días seguidos', km: 'km recorridos', stamps: 'billetes sellados',
    g: { 'м.': ['masculino', 'м.'], 'ж.': ['femenino', 'ж.'], 'ср.': ['neutro', 'ср.'], 'мн.': ['solo plural', 'мн.'] },
    cases: ['Nominativo', 'Genitivo', 'Dativo', 'Acusativo', 'Instrumental', 'Preposicional'],
    caseQ: 'Forma de «{w}» en {c}', with: 'con',
    ticket: 'Billete', board: 'Al tren', plates: 'Láminas del manual', zoom: 'Ampliar',
    shelf: 'La estantería', shelfSub: 'Las novelas de Роберт Фадер de donde salen los personajes.', shelfNote: 'Todas estas novelas se pueden leer en ruso en «Литературный мир».'
  },
  en: {
    tag: 'Russian with Роберт Фадер’s characters',
    welcomeLead: 'Учебник русского языка для начинающих',
    chooseLang: 'Which language do you want to learn Russian in?',
    heroTitle: 'Your journey through Russian',
    heroText: 'Ten stations, forty tickets. Each ticket is a short lesson with the words, phrases and cases of the «Резонанс» textbook.',
    cont: 'Continue', startJourney: 'Start the journey', allDone: 'Review',
    progress: 'tickets stamped',
    route: 'The route', routeSub: '10 lessons from the textbook',
    lessons: ['Words I', 'Words II', 'Phrases & cases', 'The table'],
    lessonSub: ['6 words', '6 words', 'useful phrases', 'declension'],
    guide: 'Unit guide', locked: 'Finish the previous station first',
    cast: 'The characters', castSub: 'The textbook’s heroes come from Роберт Фадер’s novels.',
    about: 'The «Резонанс» textbook by <b>Роберт Фадер</b>, a language teacher born in Mendoza (Argentina) who lives and works in Moscow.',
    unlockAll: 'Open all stations', lockAgain: 'Back to normal order', reset: 'Erase my progress', resetAsk: 'Sure? Tap again to erase.',
    tips: 'Key points', vocab: 'Vocabulary', phrases: 'Useful phrases', table: 'Declension', word: 'Russian', meaning: 'Meaning',
    k: { learn: 'New word', pickTr: 'What does it mean?', pickRu: 'How do you say it in Russian?', listen: 'Listen and choose',
         match: 'Match the pairs', build: 'Put the Russian sentence in order', cloze: 'Complete the sentence', kase: 'Choose the correct form',
         gender: 'What gender is it?', type: 'Type it in Russian', phrase: 'What does the sentence mean?' },
    tapHear: 'Tap to hear it', check: 'Check', next: 'Continue', gotIt: 'Got it',
    good: ['Верно!', 'Отлично!', 'Молодец!', 'Так держать!'], bad: 'Не совсем…', answer: 'Correct answer:',
    typeHint: 'Use your keyboard or the Cyrillic keyboard below', del: 'Delete', space: 'space', noVoice: 'Your browser has no Russian voice.',
    endTitle: 'Station reached!', endText: 'Ticket stamped. Keep travelling.', correct: 'correct', kmWon: 'km travelled', back: 'Back to the route', again: 'Next ticket',
    stamp: 'ПРОЙДЕНО', streak: 'day streak', km: 'km travelled', stamps: 'tickets stamped',
    g: { 'м.': ['masculine', 'м.'], 'ж.': ['feminine', 'ж.'], 'ср.': ['neuter', 'ср.'], 'мн.': ['plural only', 'мн.'] },
    cases: ['Nominative', 'Genitive', 'Dative', 'Accusative', 'Instrumental', 'Prepositional'],
    caseQ: '«{w}» in the {c}', with: 'with',
    ticket: 'Ticket', board: 'All aboard', plates: 'Plates from the textbook', zoom: 'Enlarge',
    shelf: 'The bookshelf', shelfSub: 'Роберт Фадер’s novels, where the characters come from.', shelfNote: 'All these novels can be read in Russian on «Литературный мир».'
  },
  pt: {
    tag: 'Russo com as personagens de Роберт Фадер',
    welcomeLead: 'Учебник русского языка для начинающих',
    chooseLang: 'Em que língua queres estudar russo?',
    heroTitle: 'A tua viagem pelo russo',
    heroText: 'Dez estações, quarenta bilhetes. Cada bilhete é uma lição curta com as palavras, frases e casos do manual «Резонанс».',
    cont: 'Continuar', startJourney: 'Começar a viagem', allDone: 'Rever',
    progress: 'bilhetes carimbados',
    route: 'A rota', routeSub: '10 lições do manual',
    lessons: ['Palavras I', 'Palavras II', 'Frases e casos', 'A tabela'],
    lessonSub: ['6 palavras', '6 palavras', 'frases úteis', 'declinação'],
    guide: 'Guia da unidade', locked: 'Termina a estação anterior',
    cast: 'As personagens', castSub: 'Os heróis do manual vêm dos romances de Роберт Фадер.',
    about: 'Manual «Резонанс» de <b>Роберт Фадер</b>, professor de línguas nascido em Mendoza (Argentina) que vive e trabalha em Moscovo.',
    unlockAll: 'Abrir todas as estações', lockAgain: 'Voltar à ordem normal', reset: 'Apagar o meu progresso', resetAsk: 'Tens a certeza? Toca outra vez para apagar.',
    tips: 'O essencial', vocab: 'Vocabulário', phrases: 'Frases úteis', table: 'Declinação', word: 'Russo', meaning: 'Significado',
    k: { learn: 'Palavra nova', pickTr: 'O que significa?', pickRu: 'Como se diz em russo?', listen: 'Ouve e escolhe',
         match: 'Liga os pares', build: 'Ordena a frase em russo', cloze: 'Completa a frase', kase: 'Escolhe a forma correta',
         gender: 'Qual é o género?', type: 'Escreve em russo', phrase: 'O que significa a frase?' },
    tapHear: 'Toca para ouvir', check: 'Verificar', next: 'Continuar', gotIt: 'Percebi',
    good: ['Верно!', 'Отлично!', 'Молодец!', 'Так держать!'], bad: 'Не совсем…', answer: 'Resposta correta:',
    typeHint: 'Usa o teu teclado ou o teclado cirílico abaixo', del: 'Apagar', space: 'espaço', noVoice: 'O teu navegador não tem voz russa.',
    endTitle: 'Estação alcançada!', endText: 'Bilhete carimbado. Continua a viagem.', correct: 'certas', kmWon: 'km percorridos', back: 'Voltar à rota', again: 'Próximo bilhete',
    stamp: 'ПРОЙДЕНО', streak: 'dias seguidos', km: 'km percorridos', stamps: 'bilhetes carimbados',
    g: { 'м.': ['masculino', 'м.'], 'ж.': ['feminino', 'ж.'], 'ср.': ['neutro', 'ср.'], 'мн.': ['só plural', 'мн.'] },
    cases: ['Nominativo', 'Genitivo', 'Dativo', 'Acusativo', 'Instrumental', 'Preposicional'],
    caseQ: '«{w}» no {c}', with: 'com',
    ticket: 'Bilhete', board: 'Embarcar', plates: 'Ilustrações do manual', zoom: 'Ampliar',
    shelf: 'A estante', shelfSub: 'Os romances de Роберт Фадер de onde vêm as personagens.', shelfNote: 'Todos estes romances podem ler-se em russo em «Литературный мир».'
  }
};
const CASE_RU = ['И.п. · кто? что?', 'Р.п. · кого? чего?', 'Д.п. · кому? чему?', 'В.п. · кого? что?', 'Т.п. · кем? чем?', 'П.п. · о ком? о чём?'];
const LANG_IX = { en: 2, es: 3, pt: 4 };          // índice en vocab
const PH_IX = { en: 1, es: 2, pt: 3 };            // índice en frases
const CL_IX = { en: 4, es: 5, pt: 6 };            // índice en cloze

/* ======================= estado ======================= */
const KEY = 'rezonans.v1';
let S = { lang: null, done: {}, km: 0, days: [], unlockAll: false };
try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) S = Object.assign(S, s); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const T = () => I18N[S.lang || 'es'];

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const today = () => new Date().toISOString().slice(0, 10);
const norm = s => s.toLowerCase().replace(/ё/g, 'е').replace(/[.,!?;:«»"—–-]/g, ' ').replace(/\s+/g, ' ').trim();

/* ======================= voz rusa ======================= */
let ruVoice = null;
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const v = speechSynthesis.getVoices();
  ruVoice = v.find(x => /^ru(-|_|$)/i.test(x.lang)) || null;
}
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function say(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/___/g, '…'));
  u.lang = 'ru-RU'; if (ruVoice) u.voice = ruVoice; u.rate = .9;
  speechSynthesis.speak(u);
}
const ICON_SOUND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
const LOCO = '<svg class="loco" viewBox="0 0 34 30" aria-hidden="true"><path d="M3 22h26v3H3z" fill="#14244a"/><rect x="5" y="9" width="17" height="13" rx="2" fill="#14244a"/><rect x="20" y="4" width="9" height="18" rx="2" fill="#8c2a2a"/><rect x="22" y="7" width="5" height="5" rx="1" fill="#e2c47f"/><rect x="8" y="3" width="4" height="7" fill="#14244a"/><circle cx="9" cy="26" r="3" fill="#c39a4e"/><circle cx="18" cy="26" r="3" fill="#c39a4e"/><circle cx="26" cy="26" r="3" fill="#c39a4e"/></svg>';

/* ======================= progreso ======================= */
const lkey = (u, l) => `u${u}l${l}`;
const sceneList = u => Array.from({ length: u.scenes || 0 }, (_, i) => `img/scenes/u${u.n}-${i + 1}.webp`);
const unitDone = n => [1, 2, 3, 4].every(l => S.done[lkey(n, l)]);
const unitOpen = n => S.unlockAll || n === 1 || unitDone(n - 1);
const lessonOpen = (n, l) => unitOpen(n) && (S.unlockAll || l === 1 || S.done[lkey(n, l - 1)]);
const stampCount = () => Object.keys(S.done).length;
function nextLesson() {
  for (const u of UNITS) for (let l = 1; l <= 4; l++) if (!S.done[lkey(u.n, l)] && lessonOpen(u.n, l)) return [u.n, l];
  return null;
}
function streak() {
  const d = new Set(S.days); let n = 0; const t = new Date();
  if (!d.has(today())) t.setDate(t.getDate() - 1);
  while (d.has(t.toISOString().slice(0, 10))) { n++; t.setDate(t.getDate() - 1); }
  return n;
}
function updateStats() {
  const t = T();
  const set = (id, v, title) => { const el = $(id); $('b', el).textContent = v; el.title = title; el.setAttribute('aria-label', v + ' ' + title); };
  set('#st-streak', streak(), t.streak); set('#st-km', S.km, t.km); set('#st-stamps', stampCount(), t.stamps);
  document.querySelectorAll('.langs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === S.lang));
  document.querySelectorAll('[data-i]').forEach(el => el.textContent = t[el.dataset.i]);
  document.documentElement.lang = S.lang || 'es';
}

/* ======================= pantallas ======================= */
const app = $('#app');

function renderWelcome() {
  app.innerHTML = `
  <section class="welcome">
    <img class="cover" src="img/cover.webp" alt="Резонанс — Роберт Фадер" width="637" height="900">
    <div>
      <p class="eyebrow">Роберт Фадер</p>
      <h1>Резонанс</h1>
      <p class="lead">${I18N.es.welcomeLead}</p>
      <div class="pick">
        <button data-pick="es"><span class="flag">Es</span><span><b>Estudiar en español</b><small>¿En qué idioma quieres estudiar ruso?</small></span></button>
        <button data-pick="en"><span class="flag">En</span><span><b>Study in English</b><small>Learn Russian with English explanations</small></span></button>
        <button data-pick="pt"><span class="flag">Pt</span><span><b>Estudar em português</b><small>Aprende russo com explicações em português</small></span></button>
      </div>
    </div>
  </section>`;
}

function renderHome() {
  const t = T(), L = S.lang;
  const nx = nextLesson();
  const total = UNITS.length * 4, sc = stampCount();
  const heroUnit = UNITS[nx ? nx[0] - 1 : UNITS.length - 1];
  let h = `
  <section class="hero">
    <div class="txt">
      <p class="eyebrow" style="color:var(--gold-2)">Урок ${heroUnit.n} · ${esc(heroUnit.ru)}</p>
      <h1>${t.heroTitle.replace(/(\S+)$/, '<em>$1</em>')}</h1>
      <p>${t.heroText}</p>
      <div class="progress-line"><span class="bar"><i style="width:${sc / total * 100}%"></i></span>${sc}/${total} ${t.progress}</div>
      <button class="btn gold next" data-go="${nx ? nx.join('-') : '1-1'}">${sc === 0 ? t.startJourney : nx ? t.cont + ' · ' + t.lessons[nx[1] - 1] : t.allDone} →</button>
    </div>
    <div class="img" style="background-image:url(${heroUnit.img});--fy:${heroUnit.fy || '0%'}" role="img" aria-label="Урок ${heroUnit.n}"></div>
  </section>
  <div class="section-head"><h2>${t.route}</h2><p>${t.routeSub}</p></div>
  <div class="route">`;
  for (const u of UNITS) {
    const open = unitOpen(u.n), done = unitDone(u.n);
    h += `<article class="station ${done ? 'done' : ''} ${open ? '' : 'locked'}" id="u${u.n}">
      <span class="dot">${done ? '✓' : u.n}</span>
      <div class="pic" style="background-image:url(${u.img});--fy:${u.fy || '0%'}" role="img" aria-label="Урок ${u.n}"></div>
      <div class="body">
        <p class="eyebrow">Урок ${u.n}</p>
        <h3 class="ru">${esc(u.ru)}</h3>
        <div class="tr">${esc(u.t[L])}</div>
        <div class="topics">${esc(u.topics)}</div>
        <div class="tickets">${[1, 2, 3, 4].map(l => {
          const d = S.done[lkey(u.n, l)], o = lessonOpen(u.n, l);
          const isNext = nx && nx[0] === u.n && nx[1] === l;
          return `<button class="ticket ${d ? 'done' : ''} ${isNext ? 'open' : ''}" data-go="${u.n}-${l}" ${o ? '' : `disabled title="${esc(t.locked)}"`}>
            <b>${t.lessons[l - 1]}</b><small>${t.lessonSub[l - 1]}</small></button>`;
        }).join('')}</div>
        <div class="thumbs">${sceneList(u).map((src, i) => `<button data-zoom="${src}" aria-label="${t.zoom} ${i + 1}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>
        <div class="links"><button class="link" data-guide="${u.n}">${t.guide}</button></div>
      </div>
    </article>`;
  }
  h += `</div>
  <section class="heroes">
    <div class="section-head"><h2>${t.cast}</h2><p>${t.castSub}</p></div>
    <div class="cast">${HEROES.map(p => `
      <article class="person">
        <div class="arch"><img src="img/heroes/${p.id}.webp" alt="${p.ru}" loading="lazy"></div>
        <h3 class="ru">${p.ru}</h3>
        <div class="role">${esc(p.role[L])}</div>
        <p>${esc(p.bio[L])}</p>
      </article>`).join('')}
    </div>
  </section>
  <section class="shelf">
    <div class="section-head"><h2>${t.shelf}</h2><p>${t.shelfSub}</p></div>
    <div class="books">${BOOKS.map(b => `<figure><button data-zoom="img/books/${b[0]}.webp" aria-label="${esc(b[1])}"><img src="img/books/${b[0]}.webp" alt="${esc(b[1])}" loading="lazy" width="255" height="382"></button><figcaption class="ru">${esc(b[1])}</figcaption></figure>`).join('')}</div>
    <p class="shelf-note">${t.shelfNote}</p>
  </section>
  <img class="skyline" src="img/skyline.webp" alt="" loading="lazy" width="760" height="156">
  <footer class="about">
    <div>${t.about}<br><span class="ru" style="font-style:italic">«Я очень люблю преподавать и учиться».</span></div>
    <div class="settings">
      <button class="link" data-act="unlock">${S.unlockAll ? t.lockAgain : t.unlockAll}</button>
      <button class="link" data-act="reset" style="color:var(--wine)">${t.reset}</button>
    </div>
  </footer>`;
  app.innerHTML = h;
}

function render() { updateStats(); S.lang ? renderHome() : renderWelcome(); }

/* ======================= guía ======================= */
const modal = $('#modal');
function openGuide(n) {
  const u = UNITS[n - 1], t = T(), L = S.lang;
  modal.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="gt">
    <header><div><p class="eyebrow" style="color:var(--gold-2)">Урок ${u.n} · ${t.guide}</p><h2 id="gt" class="ru">${esc(u.ru)}</h2></div>
      <button class="x" data-close aria-label="×">×</button></header>
    <div class="inner">
      <section><h3>${t.tips}</h3><ul class="tips">${u.tips[L].map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
      ${u.scenes ? `<section><h3>${t.plates}</h3><div class="plates">${sceneList(u).map(src => `<button data-zoom="${src}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div></section>` : ''}
      <section><h3>${t.phrases}</h3><div class="phr">${u.phrases.map(p => `<div><span class="ru">${esc(p[0])}</span><button class="say" data-say="${esc(p[0])}" aria-label="▶">${ICON_SOUND}</button><small>${esc(p[PH_IX[L]])}</small></div>`).join('')}</div></section>
      <section><h3>${t.vocab}</h3><div class="table-wrap"><table><thead><tr><th>${t.word}</th><th>${t.meaning}</th></tr></thead><tbody>
        ${u.vocab.map(v => `<tr><td class="ru">${esc(v[0])} <small>${v[1]}</small><button class="say" data-say="${esc(v[0])}" aria-label="▶">${ICON_SOUND}</button></td><td>${esc(v[LANG_IX[L]])}</td></tr>`).join('')}
      </tbody></table></div></section>
      <section><h3>${t.table}</h3><div class="table-wrap"><table><thead><tr><th></th>${u.nouns.map(nn => `<th class="ru" style="text-transform:none;font-size:15px;color:var(--navy)">${nn[0]}<br><small>${nn[1]}</small></th>`).join('')}</tr></thead><tbody>
        ${t.cases.map((c, i) => `<tr${u.cases.includes(i) ? ' style="background:#fbf1d9"' : ''}><td><b>${c}</b><br><small class="ru">${CASE_RU[i]}</small></td>${u.nouns.map(nn => `<td class="ru">${nn[2 + i]}</td>`).join('')}</tr>`).join('')}
      </tbody></table></div></section>
    </div></div>`;
  modal.hidden = false; document.body.style.overflow = 'hidden';
  $('.x', modal).focus();
}
const zoomBox = document.createElement('div'); zoomBox.className = 'zoom'; zoomBox.hidden = true; document.body.appendChild(zoomBox);
function openZoom(src) { zoomBox.innerHTML = `<img src="${src}" alt=""><button class="x" aria-label="×">×</button>`; zoomBox.hidden = false; }
function closeZoom() { zoomBox.hidden = true; zoomBox.innerHTML = ''; }
zoomBox.addEventListener('click', closeZoom);
function closeGuide() { modal.hidden = true; modal.innerHTML = ''; document.body.style.overflow = ''; }

/* ======================= generación de ejercicios ======================= */
function distractors(u, field, answer, n) {
  const pool = [...new Set(u.vocab.map(field).concat(UNITS.flatMap(x => x.vocab).map(field)))].filter(x => x !== answer);
  const near = shuffle([...new Set(u.vocab.map(field))].filter(x => x !== answer));
  const far = shuffle(pool.filter(x => !near.includes(x)));
  return near.concat(far).slice(0, n);
}
function wordSet(u, l) { return l === 1 ? u.vocab.slice(0, 6) : u.vocab.slice(6, 12); }

function buildLesson(n, l) {
  const u = UNITS[n - 1], L = S.lang, li = LANG_IX[L], q = [];
  const tr = v => v[li];
  if (l === 1 || l === 2) {
    const ws = wordSet(u, l);
    const pTr = w => ({ k: 'pickTr', w, ans: tr(w), opts: shuffle([tr(w), ...distractors(u, tr, tr(w), 3)]) });
    const pRu = w => ({ k: 'pickRu', w, ans: w[0], opts: shuffle([w[0], ...distractors(u, v => v[0], w[0], 3)]) });
    const listen = w => ({ k: 'listen', w, ans: w[0], opts: shuffle([w[0], ...distractors(u, v => v[0], w[0], 3)]) });
    const short = ws.filter(w => w[0].length <= 9 && !/[A-ZА-ЯЁ]/.test(w[0][0]));
    // 3 palabras nuevas → práctica → 3 más → práctica → repaso mixto
    for (const half of [ws.slice(0, 3), ws.slice(3, 6)]) {
      half.forEach(w => q.push({ k: 'learn', w }));
      const [a, b] = shuffle(half);
      q.push(pTr(a), pRu(b));
    }
    const mix = shuffle(ws);
    q.push(listen(mix[0]), pTr(mix[1]), { k: 'match', pairs: pick(ws, 5) }, { k: 'gender', w: mix[2] },
           pRu(mix[3]), { k: 'type', w: pick(short.length ? short : ws, 1)[0] });
    return q;
  }
  if (l === 3) {
    u.phrases.forEach((p, i) => {
      if (i === 1) {
        const others = UNITS.flatMap(x => x.phrases).filter(x => x !== p);
        q.push({ k: 'phrase', p, ans: p[PH_IX[L]], opts: shuffle([p[PH_IX[L]], ...pick(others, 3).map(x => x[PH_IX[L]])]) });
      }
      const words = p[0].split(' ');
      const extra = pick(u.vocab.map(v => v[0]).filter(w => !words.some(x => norm(x) === norm(w))), 2);
      q.push({ k: 'build', p, tiles: shuffle(words.concat(extra)) });
    });
    shuffle(u.cloze).forEach(c => q.push({ k: 'cloze', c, ans: c[2], opts: shuffle([c[2], ...c[3]]) }));
    return [q[0], q[4], q[1], q[5], q[6], q[2], q[3], q[7], q[8]].filter(Boolean);
  }
  // l === 4: la tabla
  const focus = u.cases.length ? u.cases : [0, 1, 2, 3, 4, 5];
  const used = new Set();
  for (let i = 0; i < 7; i++) {
    const nn = u.nouns[i % u.nouns.length];
    const ci = i < 4 ? focus[i % focus.length] : (Math.random() * 6 | 0);
    const key = nn[0] + ci; if (used.has(key)) continue; used.add(key);
    const ans = nn[2 + ci];
    let forms = [...new Set(nn.slice(2))].filter(f => f !== ans);
    q.push({ k: 'kase', nn, ci, ans, opts: shuffle([ans, ...pick(forms, 3)]) });
  }
  pick(u.vocab, 2).forEach(w => q.push({ k: 'gender', w }));
  const short = u.vocab.filter(w => w[0].length <= 9 && !/[А-Я]/.test(w[0][0]));
  pick(short, 2).forEach(w => q.push({ k: 'type', w }));
  const cl = pick(u.cloze, 2).map(c => ({ k: 'cloze', c, ans: c[2], opts: shuffle([c[2], ...c[3]]) }));
  const base = shuffle(q);
  return base.slice(0, 3).concat(cl[0], base.slice(3, 7), cl[1], base.slice(7));
}

/* ======================= motor de la lección ======================= */
const box = $('#lesson');
let LS = null; // estado de la lección

function startLesson(n, l) {
  if (!lessonOpen(n, l)) return;
  const items = buildLesson(n, l);
  items.unshift({ k: 'intro' });
  LS = { n, l, items, i: 0, total: items.filter(x => x.k !== 'learn').length, right: 0, wrong: 0, retried: new Set(), answered: false, sel: null };
  box.hidden = false; document.body.style.overflow = 'hidden';
  box.innerHTML = `<div class="bar-top"><button class="close" data-act="quit" aria-label="×">×</button>
    <div class="track" aria-hidden="true"><span class="done"></span>${LOCO}</div></div>
    <div class="stage"></div><div class="foot"><div class="in"><div class="msg"></div><button class="btn" data-act="primary"></button></div></div>`;
  showItem();
}
function quitLesson() { LS = null; box.hidden = true; box.innerHTML = ''; document.body.style.overflow = ''; if ('speechSynthesis' in window) speechSynthesis.cancel(); render(); }

function setTrack() {
  const pct = Math.min(100, LS.i / LS.items.length * 100);
  $('.track .done', box).style.width = pct + '%';
  $('.track .loco', box).style.left = pct + '%';
}
function foot(state, msg, label, enabled = true) {
  const f = $('.foot', box); f.className = 'foot ' + (state || '');
  $('.msg', f).innerHTML = msg || '';
  const b = $('[data-act=primary]', f); b.textContent = label; b.disabled = !enabled;
}

function showItem() {
  setTrack();
  const it = LS.items[LS.i]; if (!it) return finishLesson();
  const t = T(), L = S.lang, st = $('.stage', box);
  LS.answered = false; LS.sel = null;
  const optHtml = (opts, ru) => `<div class="opts">${opts.map((o, i) => `<button class="opt ${ru ? 'ru' : ''}" data-opt="${esc(o)}"><kbd>${i + 1}</kbd>${esc(o)}</button>`).join('')}</div>`;
  let h = '';
  switch (it.k) {
    case 'intro': {
      const u = UNITS[LS.n - 1], sc = sceneList(u);
      const src = LS.l <= 3 && sc.length ? sc[(LS.l - 1) % sc.length] : u.img;
      st.innerHTML = `<div class="q intro"><p class="kind">${t.ticket} ${LS.l} · Урок ${u.n}</p>
        <h2>${t.lessons[LS.l - 1]}</h2><p class="ru intro-ru">${esc(u.ru)}</p>
        <button class="intro-img" data-zoom="${src}" aria-label="${t.zoom}"><img src="${src}" alt=""></button></div>`;
      foot('', '', t.board + ' →', true); return;
    }
    case 'learn': {
      const g = t.g[it.w[1]];
      h = `<p class="kind">${t.k.learn}</p>
        <div class="learn"><button class="sound xl" data-say="${esc(it.w[0])}" aria-label="${t.tapHear}">${ICON_SOUND}</button>
        <div><div class="word">${esc(it.w[0])}<span class="g">${g[1]} ${g[0]}</span></div>
        <div class="mean">${esc(it.w[LANG_IX[L]])}</div><div class="hint">${t.tapHear}</div></div></div>`;
      st.innerHTML = `<div class="q">${h}</div>`; foot('', '', t.gotIt, true); say(it.w[0]); return;
    }
    case 'pickTr':
      h = `<p class="kind">${t.k.pickTr}</p><div class="prompt"><button class="sound" data-say="${esc(it.w[0])}" aria-label="▶">${ICON_SOUND}</button><div class="big">${esc(it.w[0])}</div></div>${optHtml(it.opts, false)}`; break;
    case 'pickRu':
      h = `<p class="kind">${t.k.pickRu}</p><div class="prompt l2"><div class="big">${esc(it.w[LANG_IX[L]])}</div></div>${optHtml(it.opts, true)}`; break;
    case 'listen':
      h = `<p class="kind">${t.k.listen}</p><button class="sound xl" data-say="${esc(it.w[0])}" aria-label="${t.tapHear}">${ICON_SOUND}</button>
        ${ruVoice ? '' : `<p style="text-align:center;color:var(--muted);font-size:14px;margin:0">${t.noVoice} → <b>${esc(it.w[LANG_IX[L]])}</b></p>`}${optHtml(it.opts, true)}`;
      setTimeout(() => say(it.w[0]), 250); break;
    case 'phrase':
      h = `<p class="kind">${t.k.phrase}</p><div class="prompt"><button class="sound" data-say="${esc(it.p[0])}" aria-label="▶">${ICON_SOUND}</button><div class="big" style="font-size:clamp(22px,4vw,28px)">${esc(it.p[0])}</div></div>${optHtml(it.opts, false)}`; break;
    case 'cloze': {
      const parts = it.c[0].split('___');
      h = `<p class="kind">${t.k.cloze}</p><div class="prompt" style="flex-direction:column;align-items:flex-start;gap:6px">
        <div class="cloze">${esc(parts[0])}<span class="gap">?</span>${esc(parts[1] || '')} <span class="base">(${esc(it.c[1])})</span></div>
        <div class="tr">${esc(it.c[CL_IX[L]])}</div></div>${optHtml(it.opts, true)}`; break;
    }
    case 'kase':
      h = `<p class="kind">${t.k.kase}</p><div class="prompt" style="flex-direction:column;align-items:flex-start;gap:4px">
        <div class="big">${esc(it.nn[0])} → ?</div><div class="tr"><b>${t.cases[it.ci]}</b> · <span class="ru">${CASE_RU[it.ci]}</span></div></div>${optHtml(it.opts, true)}`; break;
    case 'gender':
      h = `<p class="kind">${t.k.gender}</p><div class="prompt"><button class="sound" data-say="${esc(it.w[0])}" aria-label="▶">${ICON_SOUND}</button><div><div class="big">${esc(it.w[0])}</div><div class="tr">${esc(it.w[LANG_IX[L]])}</div></div></div>
        <div class="opts gender-opts">${['м.', 'ж.', 'ср.', 'мн.'].map((g, i) => `<button class="opt" data-opt="${g}"><kbd>${i + 1}</kbd><b>${g}</b><small>${t.g[g][0]}</small></button>`).join('')}</div>`;
      it.ans = it.w[1]; break;
    case 'match': {
      const left = shuffle(it.pairs), right = shuffle(it.pairs);
      h = `<p class="kind">${t.k.match}</p><div class="match"><div class="col">${left.map(w => `<button class="ru" data-m="ru" data-id="${esc(w[0])}">${esc(w[0])}</button>`).join('')}</div>
        <div class="col">${right.map(w => `<button data-m="tr" data-id="${esc(w[0])}">${esc(w[LANG_IX[L]])}</button>`).join('')}</div></div>`;
      LS.matchLeft = it.pairs.length; LS.matchSel = null; LS.matchMiss = 0; break;
    }
    case 'build':
      h = `<p class="kind">${t.k.build}</p><div class="prompt l2"><div class="big">${esc(it.p[PH_IX[L]])}</div></div>
        <div class="built" aria-live="polite"></div><div class="bank">${it.tiles.map((w, i) => `<button class="tile" data-tile="${i}">${esc(w)}</button>`).join('')}</div>`;
      it.ans = it.p[0]; LS.built = []; break;
    case 'type': {
      const rows = ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'];
      h = `<p class="kind">${t.k.type}</p><div class="prompt l2"><div><div class="big">${esc(it.w[LANG_IX[L]])}</div><div class="tr">${t.g[it.w[1]][0]}</div></div></div>
        <div class="typer"><input id="typein" autocomplete="off" autocapitalize="off" spellcheck="false" lang="ru" aria-label="${t.k.type}" placeholder="…">
        <div class="kbd" aria-hidden="true">${rows.map(r => `<div class="row">${[...r].map(c => `<button tabindex="-1" data-key="${c}">${c}</button>`).join('')}</div>`).join('')}
        <div class="row"><button tabindex="-1" class="wide" data-key=" ">${t.space}</button><button tabindex="-1" class="wide" data-key="⌫">⌫ ${t.del}</button></div></div>
        <p style="color:var(--muted);font-size:13px;margin:8px 0 0;text-align:center">${t.typeHint}</p></div>`;
      it.ans = it.w[0]; break;
    }
  }
  st.innerHTML = `<div class="q">${h}</div>`;
  st.scrollTop = 0;
  if (it.k === 'match') foot('', '', t.check, false), $('[data-act=primary]', box).hidden = true;
  else { $('[data-act=primary]', box).hidden = false; foot('', '', t.check, false); }
  if (it.k === 'type') { const inp = $('#typein', box); inp.addEventListener('input', () => foot('', '', t.check, inp.value.trim().length > 0)); if (matchMedia('(pointer:fine)').matches) inp.focus(); }
}

function grade(ok, correctText) {
  const t = T(), it = LS.items[LS.i];
  LS.answered = true;
  if (ok) { LS.right++; S.km += 1; }
  else {
    LS.wrong++;
    if (!LS.retried.has(it) && it.k !== 'match') { LS.retried.add(it); const copy = Object.assign({}, it, { opts: it.opts ? shuffle(it.opts) : it.opts, tiles: it.tiles ? shuffle(it.tiles) : it.tiles }); LS.retried.add(copy); LS.items.push(copy); }
  }
  const good = t.good[Math.random() * t.good.length | 0];
  const extra = it.k === 'cloze' ? `<span class="ru">${esc(it.c[0].replace('___', it.c[2]))}</span>`
             : it.k === 'build' ? '' : '';
  if (ok) foot('good', `<b>${good}</b>${extra ? `<span>${extra}</span>` : ''}`, t.next);
  else foot('bad', `<b>${t.bad}</b><span>${t.answer} <span class="ru" style="font-size:18px">${esc(correctText)}</span></span>`, t.next);
  const sayTxt = it.k === 'cloze' ? it.c[0].replace('___', it.c[2]) : it.k === 'build' || it.k === 'phrase' ? it.p[0] : it.w ? it.w[0] : it.nn ? it.ans : '';
  if (sayTxt) say(sayTxt);
  $('[data-act=primary]', box).focus({ preventScroll: true });
}

function check() {
  const it = LS.items[LS.i]; if (!it) return;
  if (['pickTr', 'pickRu', 'listen', 'phrase', 'cloze', 'kase', 'gender'].includes(it.k)) {
    if (LS.sel == null) return;
    const ok = LS.sel === it.ans;
    box.querySelectorAll('.opt').forEach(b => { b.disabled = true; if (b.dataset.opt === it.ans) b.classList.add('good'); else if (b.dataset.opt === LS.sel) b.classList.add('bad'); });
    grade(ok, it.k === 'gender' ? it.ans + ' · ' + T().g[it.ans][0] : it.ans);
  } else if (it.k === 'build') {
    const got = LS.built.map(i => it.tiles[i]).join(' ');
    box.querySelectorAll('.tile').forEach(b => b.disabled = true);
    grade(norm(got) === norm(it.ans), it.ans);
  } else if (it.k === 'type') {
    const inp = $('#typein', box); inp.disabled = true;
    grade(norm(inp.value) === norm(it.ans), it.ans);
  }
}

function primary() {
  const it = LS.items[LS.i];
  if (!it) return;
  if (it.k === 'learn' || it.k === 'intro' || LS.answered) { LS.i++; return showItem(); }
  check();
}

function finishLesson() {
  const t = T(), u = UNITS[LS.n - 1];
  const first = !S.done[lkey(LS.n, LS.l)];
  S.done[lkey(LS.n, LS.l)] = true;
  const bonus = first ? 10 : 3; S.km += bonus;
  if (!S.days.includes(today())) S.days.push(today());
  S.days = S.days.slice(-60); save();
  setTrack();
  const acc = Math.round(LS.right / Math.max(1, LS.right + LS.wrong) * 100);
  const nx = nextLesson();
  $('.stage', box).innerHTML = `<div class="end">
    <div class="postcard" style="background-image:url(${u.img});--fy:${u.fy || '0%'}"><div class="stamp">${t.stamp}<br>Урок ${u.n}<br>${'★'.repeat(LS.l)}</div></div>
    <h2>${t.endTitle}</h2><p style="margin:0;color:var(--muted)">${t.endText}</p>
    <div class="nums"><div><b>${acc}%</b><small>${t.correct}</small></div><div><b>+${LS.right + bonus}</b><small>${t.kmWon}</small></div></div>
  </div>`;
  const f = $('.foot', box); f.className = 'foot';
  $('.msg', f).innerHTML = `<button class="btn ghost" data-act="quit">${t.back}</button>`;
  const b = $('[data-act=primary]', f);
  if (nx) { b.hidden = false; b.disabled = false; b.textContent = t.again + ' →'; b.dataset.next = nx.join('-'); }
  else b.hidden = true;
  LS.finished = true;
  updateStats();
}

/* ======================= eventos ======================= */
document.addEventListener('click', e => {
  const el = e.target.closest('button, a'); if (!el) return;
  if (el.dataset.lang) { S.lang = el.dataset.lang; save(); if (LS) { updateStats(); return; } return render(); }
  if (el.dataset.pick) { S.lang = el.dataset.pick; save(); window.scrollTo(0, 0); return render(); }
  if (el.dataset.act === 'home') { e.preventDefault(); if (LS) quitLesson(); closeGuide(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  if (el.dataset.say) { say(el.dataset.say); return; }
  if (el.dataset.zoom) return openZoom(el.dataset.zoom);
  if (el.dataset.guide) return openGuide(+el.dataset.guide);
  if (el.hasAttribute('data-close')) return closeGuide();
  if (el.dataset.go && !LS) { const [n, l] = el.dataset.go.split('-').map(Number); return startLesson(n, l); }
  if (el.dataset.act === 'unlock') { S.unlockAll = !S.unlockAll; save(); return render(); }
  if (el.dataset.act === 'reset') {
    if (el.dataset.armed) { const lang = S.lang; S = { lang, done: {}, km: 0, days: [], unlockAll: false }; save(); return render(); }
    el.dataset.armed = 1; el.textContent = T().resetAsk; return;
  }
  if (!LS) return;
  if (el.dataset.act === 'quit') return quitLesson();
  if (el.dataset.act === 'primary') {
    if (LS.finished) { const [n, l] = el.dataset.next.split('-').map(Number); return startLesson(n, l); }
    return primary();
  }
  if (LS.answered) return;
  const it = LS.items[LS.i];
  if (el.dataset.opt != null) {
    box.querySelectorAll('.opt').forEach(b => b.classList.toggle('sel', b === el));
    LS.sel = el.dataset.opt; foot('', '', T().check, true);
    if (it.k === 'pickRu' || it.k === 'listen' || it.k === 'kase' || it.k === 'cloze') say(el.dataset.opt);
    return;
  }
  if (el.dataset.tile != null) {
    const i = +el.dataset.tile;
    if (el.closest('.bank')) { LS.built.push(i); el.classList.add('used'); }
    else { LS.built = LS.built.filter(x => x !== i); $(`.bank [data-tile="${i}"]`, box).classList.remove('used'); }
    $('.built', box).innerHTML = LS.built.map(x => `<button class="tile" data-tile="${x}">${esc(it.tiles[x])}</button>`).join('');
    foot('', '', T().check, LS.built.length > 0); return;
  }
  if (el.dataset.key) {
    const inp = $('#typein', box); if (!inp || inp.disabled) return;
    inp.value = el.dataset.key === '⌫' ? inp.value.slice(0, -1) : inp.value + el.dataset.key;
    inp.dispatchEvent(new Event('input')); return;
  }
  if (el.dataset.m) {
    if (el.dataset.m === 'ru') say(el.dataset.id);
    if (!LS.matchSel || LS.matchSel.dataset.m === el.dataset.m) {
      box.querySelectorAll('.match button').forEach(b => b.classList.remove('sel'));
      el.classList.add('sel'); LS.matchSel = el; return;
    }
    const a = LS.matchSel; LS.matchSel = null; a.classList.remove('sel');
    if (a.dataset.id === el.dataset.id) {
      a.classList.add('ok'); el.classList.add('ok');
      if (--LS.matchLeft === 0) { $('[data-act=primary]', box).hidden = false; grade(true, ''); }
    } else { LS.matchMiss++; [a, el].forEach(b => { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); }); }
  }
});

document.addEventListener('keydown', e => {
  if (!zoomBox.hidden && e.key === 'Escape') return closeZoom();
  if (!modal.hidden && e.key === 'Escape') return closeGuide();
  if (!LS) return;
  if (e.key === 'Escape') return quitLesson();
  const inInput = e.target.id === 'typein';
  if (e.key === 'Enter') {
    const b = $('[data-act=primary]', box);
    if (b && !b.disabled && !b.hidden) { e.preventDefault(); b.click(); }
    return;
  }
  if (!inInput && !LS.answered && /^[1-4]$/.test(e.key)) {
    const o = box.querySelectorAll('.opt')[+e.key - 1]; if (o) o.click();
  }
});

modal.addEventListener('click', e => { if (e.target === modal) closeGuide(); });

window.__rez = { get lesson() { return LS; } }; // para pruebas automáticas
render();
})();
