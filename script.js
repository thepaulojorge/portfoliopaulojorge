// =====================
// TEMA (dark/light)
// =====================
const btnTema = document.getElementById("btnTema");
const body = document.body;

// Carrega tema salvo
if (localStorage.getItem("tema") === "dark") {
  body.classList.add("dark");
  btnTema.textContent = "☀️";
}

btnTema.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  btnTema.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("tema", isDark ? "dark" : "light");
});

// =====================
// BOTÃO VOLTAR AO TOPO
// =====================
const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.innerHTML = "↑";
btnTopo.setAttribute("aria-label", "Voltar ao topo");
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
  btnTopo.classList.toggle("show", window.scrollY > 400);
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================
// MENU MOBILE
// =====================
const menuToggle = document.getElementById("menuToggle");
const navLinks   = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

// Fecha menu ao clicar num link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Fecha menu ao clicar fora
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("open") &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  }
});

// Fecha menu ao redimensionar para desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  }
});

// =====================
// ROLAGEM SUAVE
// =====================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =====================
// LINK ATIVO NO MENU
// =====================
const sections  = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const height = section.clientHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute("id");
    }
  });
  menuLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}, { passive: true });

// =====================
// ANIMAÇÕES DE ENTRADA
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  ".skill-card, .projeto-card, .contato-card, .detalhe-item, .hero-inner, .hero-foto-wrap, .sobre-grid"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// =====================
// EFEITO DE DIGITAÇÃO
// =====================
const heroNome = document.getElementById("hero-nome");
if (heroNome) {
  const textoOriginal = heroNome.textContent;
  heroNome.textContent = "";
  let i = 0;

  function digitar() {
    if (i < textoOriginal.length) {
      heroNome.textContent += textoOriginal.charAt(i);
      i++;
      setTimeout(digitar, 80);
    }
  }

  window.addEventListener("load", () => setTimeout(digitar, 300));
}

// =====================
// TRADUÇÕES MULTILÍNGUES
// =====================
const traducoes = {
  pt: {
    heroBadge:     "Disponível para oportunidades",
    heroNome:      "Paulo Jorge",
    heroRole:      "Dev Front-End",
    heroDesc:      "Apaixonado por tecnologia e interfaces bonitas. Buscando minha primeira vaga na área para criar soluções criativas e crescer junto com um time incrível.",
    heroBtnProj:   "Ver projetos",
    btnCv:         "📄 Baixar CV",
    sobreLabel:    "// sobre mim",
    sobreTitulo:   "Quem sou eu",
    sobreTexto:    "Sou desenvolvedor front-end em início de carreira, apaixonado por tecnologia e com muita vontade de aprender. Construo interfaces pensando tanto em estética quanto em experiência do usuário. Busco minha primeira oportunidade para crescer na área e contribuir com soluções criativas.",
    sobreLocal:    "Brasil",
    sobreObjetivo: "Vaga de Dev Front-End Jr.",
    sobreEstudo:   "Sempre aprendendo",
    skillsLabel:   "// tecnologias",
    skillsTitulo:  "Skills",
    skillHtml:     "Semântico, acessível e bem estruturado",
    skillCss:      "Flexbox, Grid, animações e responsividade",
    skillJs:       "DOM, eventos, fetch e lógica de aplicação",
    skillGit:      "Controle de versão e colaboração",
    skillResp:     "Mobile first e design adaptável",
    skillDev:      "VS Code, Chrome DevTools e terminal",
    projetosLabel: "// portfólio",
    projetosTitulo:"Projetos",
    proj1Titulo:   "Controle de Compras",
    proj1Desc:     "App para cadastrar compras e controlar o limite permitido na alfândega. Gerenciamento de gastos em viagens internacionais.",
    proj1Ver:      "↗ Ver app",
    proj2Titulo:   "To-Do List",
    proj2Desc:     "Aplicação para gerenciar tarefas com adição, remoção e marcação de conclusão. Simples, funcional e responsivo.",
    proj2Ver:      "↗ Ver código",
    proj3Titulo:   "Este Portfólio",
    proj3Desc:     "Portfólio multilíngue com modo escuro, efeito de digitação e navegação suave. Desenvolvido do zero com HTML, CSS e JS puro.",
    proj3Ver:      "↗ GitHub",
    contatoLabel:  "// vamos conversar",
    contatoTitulo: "Contato",
    contatoDesc:   "Estou aberto a oportunidades, freelas e networking. Me manda uma mensagem!",
    contatoEmail:  "Email",
    contatoLi:     "LinkedIn",
    contatoGh:     "GitHub",
    linkSobre:     "Sobre",
    linkSkills:    "Skills",
    linkProjetos:  "Projetos",
    linkContato:   "Contato",
    footerTexto:   "© 2026 Paulo Jorge — Feito com ❤️ e muito café",
  },
  en: {
    heroBadge:     "Open to opportunities",
    heroNome:      "Paulo Jorge",
    heroRole:      "Front-End Dev",
    heroDesc:      "Passionate about technology and beautiful interfaces. Looking for my first job to create creative solutions and grow alongside an amazing team.",
    heroBtnProj:   "See projects",
    btnCv:         "📄 Download CV",
    sobreLabel:    "// about me",
    sobreTitulo:   "Who I am",
    sobreTexto:    "I am a junior front-end developer, passionate about technology and eager to learn. I build interfaces with both aesthetics and user experience in mind. I'm looking for my first opportunity to grow in the field and contribute with creative solutions.",
    sobreLocal:    "Brazil",
    sobreObjetivo: "Jr. Front-End Dev position",
    sobreEstudo:   "Always learning",
    skillsLabel:   "// technologies",
    skillsTitulo:  "Skills",
    skillHtml:     "Semantic, accessible and well-structured",
    skillCss:      "Flexbox, Grid, animations and responsiveness",
    skillJs:       "DOM, events, fetch and application logic",
    skillGit:      "Version control and collaboration",
    skillResp:     "Mobile first and adaptive design",
    skillDev:      "VS Code, Chrome DevTools and terminal",
    projetosLabel: "// portfolio",
    projetosTitulo:"Projects",
    proj1Titulo:   "Shopping Controller",
    proj1Desc:     "App to register purchases and control the customs duty limit for international travel.",
    proj1Ver:      "↗ View app",
    proj2Titulo:   "To-Do List",
    proj2Desc:     "Task management app with add, remove and complete features. Simple, functional and responsive.",
    proj2Ver:      "↗ View code",
    proj3Titulo:   "This Portfolio",
    proj3Desc:     "Multilingual portfolio with dark mode, typing effect and smooth navigation. Built from scratch with pure HTML, CSS and JS.",
    proj3Ver:      "↗ GitHub",
    contatoLabel:  "// let's talk",
    contatoTitulo: "Contact",
    contatoDesc:   "I'm open to opportunities, freelance and networking. Send me a message!",
    contatoEmail:  "Email",
    contatoLi:     "LinkedIn",
    contatoGh:     "GitHub",
    linkSobre:     "About",
    linkSkills:    "Skills",
    linkProjetos:  "Projects",
    linkContato:   "Contact",
    footerTexto:   "© 2026 Paulo Jorge — Made with ❤️ and lots of coffee",
  },
  fr: {
    heroBadge:     "Disponible pour des opportunités",
    heroNome:      "Paulo Jorge",
    heroRole:      "Dev Front-End",
    heroDesc:      "Passionné par la technologie et les belles interfaces. Je cherche mon premier emploi pour créer des solutions créatives et grandir au sein d'une équipe formidable.",
    heroBtnProj:   "Voir les projets",
    btnCv:         "📄 Télécharger CV",
    sobreLabel:    "// à propos",
    sobreTitulo:   "Qui suis-je",
    sobreTexto:    "Je suis développeur front-end débutant, passionné par la technologie. Je crée des interfaces en pensant à l'esthétique et à l'expérience utilisateur. Je cherche ma première opportunité pour évoluer dans le domaine.",
    sobreLocal:    "Brésil",
    sobreObjetivo: "Poste Dev Front-End Jr.",
    sobreEstudo:   "Toujours en apprentissage",
    skillsLabel:   "// technologies",
    skillsTitulo:  "Compétences",
    skillHtml:     "Sémantique, accessible et bien structuré",
    skillCss:      "Flexbox, Grid, animations et responsivité",
    skillJs:       "DOM, événements, fetch et logique applicative",
    skillGit:      "Contrôle de version et collaboration",
    skillResp:     "Mobile first et design adaptatif",
    skillDev:      "VS Code, Chrome DevTools et terminal",
    projetosLabel: "// portfolio",
    projetosTitulo:"Projets",
    proj1Titulo:   "Contrôle des achats",
    proj1Desc:     "Application pour enregistrer les achats et contrôler la limite des droits de douane lors de voyages internationaux.",
    proj1Ver:      "↗ Voir l'app",
    proj2Titulo:   "Liste de tâches",
    proj2Desc:     "Application de gestion des tâches avec ajout, suppression et validation. Simple, fonctionnelle et responsive.",
    proj2Ver:      "↗ Voir le code",
    proj3Titulo:   "Ce Portfolio",
    proj3Desc:     "Portfolio multilingue avec mode sombre, effet de frappe et navigation fluide. Développé de zéro avec HTML, CSS et JS pur.",
    proj3Ver:      "↗ GitHub",
    contatoLabel:  "// parlons-en",
    contatoTitulo: "Contact",
    contatoDesc:   "Je suis ouvert aux opportunités, au freelance et au networking. Envoyez-moi un message !",
    contatoEmail:  "E-mail",
    contatoLi:     "LinkedIn",
    contatoGh:     "GitHub",
    linkSobre:     "À propos",
    linkSkills:    "Compétences",
    linkProjetos:  "Projets",
    linkContato:   "Contact",
    footerTexto:   "© 2026 Paulo Jorge — Fait avec ❤️ et beaucoup de café",
  },
  jp: {
    heroBadge:     "採用機会を探しています",
    heroNome:      "Paulo Jorge",
    heroRole:      "フロントエンド開発者",
    heroDesc:      "テクノロジーと美しいインターフェースに情熱を持っています。創造的なソリューションを作り、素晴らしいチームで成長するための最初の機会を探しています。",
    heroBtnProj:   "プロジェクトを見る",
    btnCv:         "📄 履歴書をダウンロード",
    sobreLabel:    "// 自己紹介",
    sobreTitulo:   "私について",
    sobreTexto:    "私は初心者のフロントエンド開発者で、技術に情熱を持ちながら美学とユーザー体験を重視してインターフェースを構築しています。分野で成長し、創造的なソリューションに貢献する最初の機会を探しています。",
    sobreLocal:    "ブラジル",
    sobreObjetivo: "フロントエンドJr.職を希望",
    sobreEstudo:   "常に学習中",
    skillsLabel:   "// 技術スタック",
    skillsTitulo:  "スキル",
    skillHtml:     "セマンティック、アクセシブル、構造的",
    skillCss:      "Flexbox、Grid、アニメーション、レスポンシブ",
    skillJs:       "DOM、イベント、fetch、アプリロジック",
    skillGit:      "バージョン管理とコラボレーション",
    skillResp:     "モバイルファーストとアダプティブデザイン",
    skillDev:      "VS Code、Chrome DevTools、ターミナル",
    projetosLabel: "// ポートフォリオ",
    projetosTitulo:"プロジェクト",
    proj1Titulo:   "購入管理アプリ",
    proj1Desc:     "購入を記録し、国際旅行の免税限度額を管理するアプリ。",
    proj1Ver:      "↗ アプリを見る",
    proj2Titulo:   "ToDoリスト",
    proj2Desc:     "タスクの追加、削除、完了マークができるシンプルなタスク管理アプリ。",
    proj2Ver:      "↗ コードを見る",
    proj3Titulo:   "このポートフォリオ",
    proj3Desc:     "ダークモード、タイピングエフェクト、スムーズナビゲーション搭載の多言語対応ポートフォリオ。",
    proj3Ver:      "↗ GitHub",
    contatoLabel:  "// お話しましょう",
    contatoTitulo: "連絡先",
    contatoDesc:   "機会、フリーランス、ネットワーキングについて開かれています。メッセージをどうぞ！",
    contatoEmail:  "メール",
    contatoLi:     "LinkedIn",
    contatoGh:     "GitHub",
    linkSobre:     "紹介",
    linkSkills:    "スキル",
    linkProjetos:  "プロジェクト",
    linkContato:   "連絡先",
    footerTexto:   "© 2026 Paulo Jorge — ❤️とコーヒーで作られました",
  }
};

const seletor = document.getElementById("idioma");
seletor.addEventListener("change", () => {
  const t = traducoes[seletor.value];
  if (!t) return;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set("hero-badge",        t.heroBadge);
  set("hero-nome",         t.heroNome);
  set("hero-role",         t.heroRole);
  set("hero-desc",         t.heroDesc);
  set("hero-btn-projetos", t.heroBtnProj);
  set("btn-cv",            t.btnCv);
  set("sobre-label",       t.sobreLabel);
  set("sobre-titulo",      t.sobreTitulo);
  set("sobre-texto",       t.sobreTexto);
  set("sobre-local",       t.sobreLocal);
  set("sobre-objetivo",    t.sobreObjetivo);
  set("sobre-estudo",      t.sobreEstudo);
  set("skills-label",      t.skillsLabel);
  set("skills-titulo",     t.skillsTitulo);
  set("skill-html",        t.skillHtml);
  set("skill-css",         t.skillCss);
  set("skill-js",          t.skillJs);
  set("skill-git",         t.skillGit);
  set("skill-resp",        t.skillResp);
  set("skill-dev",         t.skillDev);
  set("projetos-label",    t.projetosLabel);
  set("projetos-titulo",   t.projetosTitulo);
  set("proj1-titulo",      t.proj1Titulo);
  set("proj1-desc",        t.proj1Desc);
  set("proj1-link-ver",    t.proj1Ver);
  set("proj2-titulo",      t.proj2Titulo);
  set("proj2-desc",        t.proj2Desc);
  set("proj2-link-ver",    t.proj2Ver);
  set("proj3-titulo",      t.proj3Titulo);
  set("proj3-desc",        t.proj3Desc);
  set("proj3-link-ver",    t.proj3Ver);
  set("contato-label",     t.contatoLabel);
  set("contato-titulo",    t.contatoTitulo);
  set("contato-desc",      t.contatoDesc);
  set("contato-email-label", t.contatoEmail);
  set("contato-li-label",  t.contatoLi);
  set("contato-gh-label",  t.contatoGh);
  set("link-sobre",        t.linkSobre);
  set("link-skills",       t.linkSkills);
  set("link-projetos",     t.linkProjetos);
  set("link-contato",      t.linkContato);
  set("footer-texto",      t.footerTexto);
});