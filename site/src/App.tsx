import ko from "../content/settings/site.ko.json";
import en from "../content/settings/site.en.json";
import { featuredActivitiesKo } from "../content/activities/ko/featured";
import { featuredActivitiesEn } from "../content/activities/en/featured";
import { sponsorshipProjectsKo } from "../content/sponsorship/projects/ko/projects";
import { sponsorshipProjectsEn } from "../content/sponsorship/projects/en/projects";
import { popupItemsKo } from "../content/popups/ko/items";
import { popupItemsEn } from "../content/popups/en/items";

type Locale = "ko" | "en";
type Page = "home" | "sponsorship" | "contact";

function detectLocale(): Locale {
  return window.location.pathname.startsWith("/en") ? "en" : "ko";
}

function detectPage(locale: Locale): Page {
  const path = window.location.pathname.replace(locale === "en" ? "/en" : "", "") || "/";
  if (path.startsWith("/sponsorship")) return "sponsorship";
  if (path.startsWith("/contact")) return "contact";
  return "home";
}

export function App() {
  const locale = detectLocale();
  const page = detectPage(locale);
  const copy = locale === "ko" ? ko : en;
  const popup = locale === "ko" ? popupItemsKo[0] : popupItemsEn[0];

  return (
    <div className="shell">
      <aside className="notice-bar">
        <strong>{popup.title}</strong>
        <span>{popup.body}</span>
      </aside>
      <header className="topbar">
        <a className="brand" href={locale === "ko" ? "/" : "/en"}>
          <img src="/branding/logo.png" alt="KBFA logo" />
          <div>
            <strong>{copy.siteName}</strong>
            <span>{copy.abbr}</span>
          </div>
        </a>
        <nav className="nav">
          <a href={locale === "ko" ? "/" : "/en"}>{locale === "ko" ? "소개" : "About"}</a>
          <a href={locale === "ko" ? "/sponsorship" : "/en/sponsorship"}>
            {locale === "ko" ? "후원" : "Sponsorship"}
          </a>
          <a href={locale === "ko" ? "/contact" : "/en/contact"}>
            {locale === "ko" ? "문의" : "Contact"}
          </a>
        </nav>
      </header>

      <main className="page">
        {page === "home" && <Home locale={locale} />}
        {page === "sponsorship" && <Sponsorship locale={locale} />}
        {page === "contact" && <Contact locale={locale} />}
      </main>
    </div>
  );
}

function Home({ locale }: { locale: Locale }) {
  const copy = locale === "ko" ? ko : en;
  const activities = locale === "ko" ? featuredActivitiesKo : featuredActivitiesEn;
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.tagline}</p>
          <h1>{copy.heroTitle}</h1>
          <p>{copy.heroDescription}</p>
          <div className="actions">
            <a href={locale === "ko" ? "/sponsorship" : "/en/sponsorship"} className="primary">
              {locale === "ko" ? "후원 보기" : "View Sponsorship"}
            </a>
            <a href={locale === "ko" ? "/contact" : "/en/contact"} className="secondary">
              {locale === "ko" ? "문의하기" : "Contact Us"}
            </a>
          </div>
        </div>
        <img src="/uploads/activities/hero-reference.png" alt="Bhutan reference" />
      </section>

      <section className="grid">
        <article className="card">
          <h2>{locale === "ko" ? "협회 소개" : "About KBFA"}</h2>
          <p>
            {locale === "ko"
              ? "KBFA는 한국과 부탄을 잇는 공식 교류 플랫폼으로서 문화, 관광, 협력, 후원 참여를 연결하는 웹 기반 거점을 준비하고 있습니다."
              : "KBFA is preparing an official web base that connects Korea and Bhutan across culture, tourism, partnership, and sponsorship participation."}
          </p>
        </article>
        <article className="card">
          <h2>{locale === "ko" ? "주요 활동" : "Major Activities"}</h2>
          <p>
            {locale === "ko"
              ? "연혁과 활동 하이라이트를 중심으로 협회의 실적과 신뢰를 보여주는 구조를 우선 구성합니다."
              : "The first release prioritizes a proof-rich structure that shows the association's history and activity highlights."}
          </p>
        </article>
        <article className="card">
          <h2>{locale === "ko" ? "운영 방식" : "Content Operations"}</h2>
          <p>
            {locale === "ko"
              ? "공지, 활동, 후원 프로젝트, 팝업은 추후 Markdown 기반으로 직접 관리할 수 있도록 설계합니다."
              : "News, activities, sponsorship projects, and popups are being structured for direct owner-managed content operations."}
          </p>
        </article>
      </section>

      <section className="stack section-gap">
        <h2>{locale === "ko" ? "대표 활동 후보" : "Featured Activity Candidates"}</h2>
        <div className="grid">
          {activities.map((activity) => (
            <article className="card" key={activity.slug}>
              <p className="eyebrow">{activity.year}</p>
              <h3>{activity.title}</h3>
              <p>{activity.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Sponsorship({ locale }: { locale: Locale }) {
  const projects = locale === "ko" ? sponsorshipProjectsKo : sponsorshipProjectsEn;
  return (
    <section className="stack">
      <h1>{locale === "ko" ? "후원" : "Sponsorship"}</h1>
      <div className="grid two">
        <article className="card">
          <p className="eyebrow">{locale === "ko" ? "프로젝트 후원" : "Project Sponsorship"}</p>
          <h2>{locale === "ko" ? "프로젝트별 후원 페이지 준비" : "Project-based sponsorship pages"}</h2>
          <p>
            {locale === "ko"
              ? "대표 사진, 프로젝트명, 모금 기간, 진행률, 목적, 사용처, 후원 흐름을 지원하는 구조로 설계 중입니다."
              : "The structure is being prepared for project cards, fundraising periods, progress, purpose, usage, and sponsorship flow."}
          </p>
        </article>
        <article className="card">
          <p className="eyebrow">{locale === "ko" ? "일시 후원" : "One-time Sponsorship"}</p>
          <h2>{locale === "ko" ? "간단 후원 흐름 준비" : "Simple one-time support flow"}</h2>
          <p>
            {locale === "ko"
              ? "프로젝트 선택 없이 후원 의사를 남기고 입금 안내를 확인하는 흐름을 별도로 둡니다."
              : "A separate path will allow supporters to leave sponsorship intent and view transfer guidance without choosing a project."}
          </p>
        </article>
      </div>

      <div className="grid">
        {projects.map((project) => (
          <article className="card" key={project.slug}>
            <p className="eyebrow">
              {project.status} · {project.progress}
            </p>
            <h2>{project.title}</h2>
            <p>{project.period}</p>
            <p>{project.purpose}</p>
            <p>
              <strong>{locale === "ko" ? "사용처" : "Usage"}</strong>: {project.usage}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ locale }: { locale: Locale }) {
  const copy = locale === "ko" ? ko : en;
  return (
    <section className="stack">
      <h1>{locale === "ko" ? "문의하기" : "Contact"}</h1>
      <div className="grid two">
        <article className="card">
          <h2>{locale === "ko" ? "공개 예정 연락처" : "Planned Contact Details"}</h2>
          <p>{locale === "ko" ? `이메일: ${copy.contactEmail || "추후 확정"}` : `Email: ${copy.contactEmail || "To be confirmed"}`}</p>
          <p>{locale === "ko" ? `전화: ${copy.contactPhone || "추후 확정"}` : `Phone: ${copy.contactPhone || "To be confirmed"}`}</p>
          <p>{locale === "ko" ? `주소: ${copy.address || "추후 확정"}` : `Address: ${copy.address || "To be confirmed"}`}</p>
        </article>
        <article className="card">
          <h2>{locale === "ko" ? "문의 폼 구조" : "Inquiry Form Structure"}</h2>
          <ul>
            <li>{locale === "ko" ? "성함 / 소속" : "Name / Affiliation"}</li>
            <li>{locale === "ko" ? "이메일 / 연락처" : "Email / Contact Number"}</li>
            <li>{locale === "ko" ? "문의 제목 / 내용" : "Subject / Message"}</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
