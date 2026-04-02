import ko from "../content/settings/site.ko.json";
import en from "../content/settings/site.en.json";
import { featuredActivitiesKo } from "../content/activities/ko/featured";
import { featuredActivitiesEn } from "../content/activities/en/featured";
import { sponsorshipProjectsKo } from "../content/sponsorship/projects/ko/projects";
import { sponsorshipProjectsEn } from "../content/sponsorship/projects/en/projects";
import { popupItemsKo } from "../content/popups/ko/items";
import { popupItemsEn } from "../content/popups/en/items";
import { newsItemsKo } from "../content/news/ko/items";
import { newsItemsEn } from "../content/news/en/items";
import { partnerItemsKo } from "../content/partners/ko/items";
import { partnerItemsEn } from "../content/partners/en/items";
import { useState } from "react";

type Locale = "ko" | "en";
type Page =
  | "home"
  | "partners"
  | "news"
  | "sponsorship"
  | "sponsorshipProject"
  | "oneTime"
  | "contact";

type SponsorshipProject = {
  slug: string;
  title: string;
  period: string;
  status: string;
  progress: string;
  purpose: string;
  usage: string;
};

function detectLocale(): Locale {
  return window.location.pathname.startsWith("/en") ? "en" : "ko";
}

function getLocalPath(locale: Locale): string {
  const path = window.location.pathname;
  return locale === "en" ? path.replace(/^\/en/, "") || "/" : path || "/";
}

function detectPage(locale: Locale): Page {
  const path = getLocalPath(locale);
  if (/^\/sponsorship\/projects\/[^/]+/.test(path)) return "sponsorshipProject";
  if (path.startsWith("/sponsorship/one-time")) return "oneTime";
  if (path.startsWith("/sponsorship")) return "sponsorship";
  if (path.startsWith("/partners")) return "partners";
  if (path.startsWith("/news")) return "news";
  if (path.startsWith("/contact")) return "contact";
  return "home";
}

function getProjectSlug(locale: Locale): string | null {
  const match = getLocalPath(locale).match(/^\/sponsorship\/projects\/([^/]+)/);
  return match?.[1] ?? null;
}

function href(locale: Locale, path: string): string {
  return locale === "ko" ? path : `/en${path === "/" ? "" : path}`;
}

function labels(locale: Locale) {
  if (locale === "ko") {
    return {
      about: "소개",
      partners: "협력기관",
      news: "공지/소식",
      sponsorship: "후원",
      contact: "문의",
      viewSponsorship: "후원 보기",
      contactUs: "문의하기",
      featuredActivities: "대표 활동 후보",
      partnerCandidates: "협력기관 후보",
      latestNews: "최근 공지/소식",
      sponsorshipHub: "후원",
      projectSponsorship: "프로젝트 후원",
      oneTimeSponsorship: "일시 후원",
      viewProject: "프로젝트 보기",
      openOneTime: "일시 후원 보기",
      backToSponsorship: "후원 목록으로 돌아가기",
      sponsorInfo: "후원 정보 입력",
      transferGuide: "입금 안내 보기",
      sendInquiry: "문의 보내기",
      projectNotFound: "프로젝트를 찾을 수 없습니다.",
      goToSponsorship: "후원 목록으로 이동",
    };
  }

  return {
    about: "About",
    partners: "Partners",
    news: "News",
    sponsorship: "Sponsorship",
    contact: "Contact",
    viewSponsorship: "View Sponsorship",
    contactUs: "Contact Us",
    featuredActivities: "Featured Activity Candidates",
    partnerCandidates: "Partner Candidates",
    latestNews: "Latest News",
    sponsorshipHub: "Sponsorship",
    projectSponsorship: "Project Sponsorship",
    oneTimeSponsorship: "One-Time Sponsorship",
    viewProject: "View Project",
    openOneTime: "Open One-Time Support",
    backToSponsorship: "Back to Sponsorship",
    sponsorInfo: "Sponsor Information",
    transferGuide: "View Transfer Guide",
    sendInquiry: "Send Inquiry",
    projectNotFound: "Project Not Found",
    goToSponsorship: "Go to Sponsorship",
  };
}

export function App() {
  const locale = detectLocale();
  const page = detectPage(locale);
  const copy = locale === "ko" ? ko : en;
  const text = labels(locale);
  const popup = locale === "ko" ? popupItemsKo[0] : popupItemsEn[0];
  const projects = locale === "ko" ? sponsorshipProjectsKo : sponsorshipProjectsEn;
  const news = locale === "ko" ? newsItemsKo : newsItemsEn;
  const partners = locale === "ko" ? partnerItemsKo : partnerItemsEn;
  const project = projects.find((item) => item.slug === getProjectSlug(locale)) ?? null;

  return (
    <div className="shell">
      <aside className="notice-bar">
        <strong>{popup.title}</strong>
        <span>{popup.body}</span>
      </aside>

      <header className="topbar">
        <a className="brand" href={href(locale, "/")}>
          <img src="/branding/logo.png" alt="KBFA logo" />
          <div>
            <strong>{copy.siteName}</strong>
            <span>{copy.abbr}</span>
          </div>
        </a>
        <nav className="nav">
          <a href={href(locale, "/")}>{text.about}</a>
          <a href={href(locale, "/partners")}>{text.partners}</a>
          <a href={href(locale, "/news")}>{text.news}</a>
          <a href={href(locale, "/sponsorship")}>{text.sponsorship}</a>
          <a href={href(locale, "/contact")}>{text.contact}</a>
        </nav>
      </header>

      <main className="page">
        {page === "home" && (
          <Home locale={locale} text={text} news={news} partners={partners} />
        )}
        {page === "partners" && <PartnersPage locale={locale} items={partners} />}
        {page === "news" && <NewsPage locale={locale} items={news} />}
        {page === "sponsorship" && (
          <SponsorshipHub locale={locale} text={text} projects={projects} />
        )}
        {page === "sponsorshipProject" && project && (
          <SponsorshipProjectPage locale={locale} text={text} project={project} />
        )}
        {page === "oneTime" && <OneTimeSupportPage locale={locale} text={text} />}
        {page === "contact" && <Contact locale={locale} text={text} />}
        {page === "sponsorshipProject" && !project && (
          <MissingProject locale={locale} text={text} />
        )}
      </main>
    </div>
  );
}

function Home({
  locale,
  text,
  news,
  partners,
}: {
  locale: Locale;
  text: ReturnType<typeof labels>;
  news: { slug: string; title: string; date: string; summary: string }[];
  partners: { slug: string; name: string; type: string; summary: string }[];
}) {
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
            <a href={href(locale, "/sponsorship")} className="primary">
              {text.viewSponsorship}
            </a>
            <a href={href(locale, "/contact")} className="secondary">
              {text.contactUs}
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
              ? "공지, 활동, 후원 프로젝트, 팝업은 추후 템플릿 기반으로 직접 관리할 수 있도록 설계합니다."
              : "News, activities, sponsorship projects, and popups are being structured for direct owner-managed content operations."}
          </p>
        </article>
      </section>

      <section className="stack section-gap">
        <h2>{text.featuredActivities}</h2>
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

      <section className="stack section-gap">
        <h2>{text.partnerCandidates}</h2>
        <div className="grid two">
          {partners.map((partner) => (
            <article className="card" key={partner.slug}>
              <p className="eyebrow">{partner.type}</p>
              <h3>{partner.name}</h3>
              <p>{partner.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack section-gap">
        <h2>{text.latestNews}</h2>
        <div className="grid two">
          {news.map((item) => (
            <article className="card" key={item.slug}>
              <p className="eyebrow">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PartnersPage({
  locale,
  items,
}: {
  locale: Locale;
  items: { slug: string; name: string; type: string; summary: string }[];
}) {
  return (
    <section className="stack">
      <h1>{locale === "ko" ? "협력기관" : "Partners"}</h1>
      <div className="grid two">
        {items.map((item) => (
          <article className="card" key={item.slug}>
            <p className="eyebrow">{item.type}</p>
            <h2>{item.name}</h2>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsPage({
  locale,
  items,
}: {
  locale: Locale;
  items: { slug: string; title: string; date: string; summary: string }[];
}) {
  return (
    <section className="stack">
      <h1>{locale === "ko" ? "공지/소식" : "News"}</h1>
      <div className="grid two">
        {items.map((item) => (
          <article className="card" key={item.slug}>
            <p className="eyebrow">{item.date}</p>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SponsorshipHub({
  locale,
  text,
  projects,
}: {
  locale: Locale;
  text: ReturnType<typeof labels>;
  projects: SponsorshipProject[];
}) {
  return (
    <section className="stack">
      <h1>{text.sponsorshipHub}</h1>
      <div className="grid two">
        <article className="card">
          <p className="eyebrow">{text.projectSponsorship}</p>
          <h2>
            {locale === "ko"
              ? "프로젝트별 후원 페이지"
              : "Project-based sponsorship pages"}
          </h2>
          <p>
            {locale === "ko"
              ? "대표 사진, 프로젝트명, 모금 기간, 진행률, 목적, 사용처, 후원 흐름을 지원하는 구조입니다."
              : "The structure supports project cards, fundraising periods, progress, purpose, usage, and a sponsorship flow."}
          </p>
        </article>
        <article className="card">
          <p className="eyebrow">{text.oneTimeSponsorship}</p>
          <h2>{locale === "ko" ? "간단 후원 흐름" : "Simple support flow"}</h2>
          <p>
            {locale === "ko"
              ? "프로젝트 선택 없이 후원 의사를 남기고 입금 안내를 확인하는 흐름입니다."
              : "A separate path lets supporters leave intent and view transfer guidance without choosing a project."}
          </p>
          <a className="secondary inline-action" href={href(locale, "/sponsorship/one-time")}>
            {text.openOneTime}
          </a>
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
            <a
              className="primary inline-action"
              href={href(locale, `/sponsorship/projects/${project.slug}`)}
            >
              {text.viewProject}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function SponsorshipProjectPage({
  locale,
  text,
  project,
}: {
  locale: Locale;
  text: ReturnType<typeof labels>;
  project: SponsorshipProject;
}) {
  return (
    <section className="stack">
      <a className="back-link" href={href(locale, "/sponsorship")}>
        {text.backToSponsorship}
      </a>
      <div className="grid two">
        <article className="card">
          <p className="eyebrow">
            {project.status} · {project.progress}
          </p>
          <h1 className="detail-title">{project.title}</h1>
          <p>{project.period}</p>
          <p>{project.purpose}</p>
          <p>
            <strong>{locale === "ko" ? "후원 사용처" : "Fund Usage"}</strong>: {project.usage}
          </p>
        </article>
        <article className="card">
          <h2>{text.sponsorInfo}</h2>
          <FormLayout
            fields={[
              locale === "ko" ? "후원 구분: 개인 / 기관" : "Sponsor Type: Individual / Organization",
              locale === "ko" ? "성함" : "Name",
              locale === "ko" ? "소속" : "Affiliation",
              locale === "ko" ? "이메일" : "Email",
              locale === "ko" ? "연락처" : "Phone",
              locale === "ko" ? "기부금영수증 여부" : "Donation Receipt Required",
              locale === "ko" ? "후원 금액" : "Sponsorship Amount",
            ]}
            buttonLabel={locale === "ko" ? "후원하기" : "Proceed to Transfer Guide"}
            helperText={
              locale === "ko"
                ? "실제 입금과 신청 정보는 이후 이름과 금액 기준으로 검증됩니다."
                : "The submitted intent will later be verified against the actual transfer name and amount."
            }
            completionTitle={
              locale === "ko" ? "후원 신청이 접수되었습니다." : "Your sponsorship intent has been received."
            }
            completionLines={[
              locale === "ko"
                ? "입금 안내가 화면과 이메일로 함께 제공됩니다."
                : "Transfer guidance is provided on-screen and by email.",
              locale === "ko"
                ? "입금자명과 신청 정보는 이후 수동 검증됩니다."
                : "The transfer name and submitted information will be verified later.",
            ]}
          />
        </article>
      </div>

      <article className="card">
        <h2>{locale === "ko" ? "후원 후 안내 화면" : "Post-Submission Guidance"}</h2>
        <ul>
          <li>
            {locale === "ko"
              ? "계좌번호와 입금 방법을 보여줍니다."
              : "Show account number and transfer instructions."}
          </li>
          <li>
            {locale === "ko"
              ? "감사 메시지와 재확인 안내를 이메일로 보냅니다."
              : "Send a thank-you recap email with transfer guidance."}
          </li>
          <li>
            {locale === "ko"
              ? "완료 후 원래 프로젝트 후원 페이지로 돌아갑니다."
              : "Return to the same project sponsorship page after completion."}
          </li>
        </ul>
      </article>
    </section>
  );
}

function OneTimeSupportPage({
  locale,
  text,
}: {
  locale: Locale;
  text: ReturnType<typeof labels>;
}) {
  return (
    <section className="stack">
      <a className="back-link" href={href(locale, "/sponsorship")}>
        {text.backToSponsorship}
      </a>
      <h1>{text.oneTimeSponsorship}</h1>
      <div className="grid two">
        <article className="card">
          <p>
            {locale === "ko"
              ? "프로젝트를 선택하지 않고 협회 운영과 활동 전반을 후원하는 흐름입니다."
              : "This path supports KBFA in general without selecting a specific project."}
          </p>
          <p>
            {locale === "ko"
              ? "세부 UX는 추후 정리하되, 현재는 이름, 소속, 이메일, 연락처, 영수증 여부, 금액 입력과 입금 안내 흐름을 기준으로 둡니다."
              : "The detailed UX can be refined later, but the current flow covers identity, contact, receipt preference, amount, and transfer guidance."}
          </p>
        </article>
        <article className="card">
          <h2>{locale === "ko" ? "일시 후원 입력 구조" : "One-Time Support Form Structure"}</h2>
          <FormLayout
            fields={[
              locale === "ko" ? "성함" : "Name",
              locale === "ko" ? "소속" : "Affiliation",
              locale === "ko" ? "이메일" : "Email",
              locale === "ko" ? "연락처" : "Phone",
              locale === "ko" ? "기부금영수증 여부" : "Donation Receipt Required",
              locale === "ko" ? "후원 금액" : "Support Amount",
            ]}
            buttonLabel={text.transferGuide}
            helperText={
              locale === "ko"
                ? "일시 후원은 협회 운영 전반을 지원하는 흐름으로 유지됩니다."
                : "One-time support is intended for general KBFA operations and activities."
            }
            completionTitle={
              locale === "ko" ? "일시 후원 신청이 접수되었습니다." : "Your one-time support intent has been received."
            }
            completionLines={[
              locale === "ko"
                ? "입금 안내를 확인한 뒤 지정 계좌로 입금하실 수 있습니다."
                : "You can review the transfer guide and proceed with the designated account.",
            ]}
          />
        </article>
      </div>
    </section>
  );
}

function Contact({
  locale,
  text,
}: {
  locale: Locale;
  text: ReturnType<typeof labels>;
}) {
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
          <h2>{locale === "ko" ? "문의 폼" : "Inquiry Form"}</h2>
          <FormLayout
            fields={[
              locale === "ko" ? "성함" : "Name",
              locale === "ko" ? "소속" : "Affiliation",
              locale === "ko" ? "이메일" : "Email",
              locale === "ko" ? "연락처" : "Phone",
              locale === "ko" ? "문의 제목" : "Subject",
              locale === "ko" ? "문의 내용" : "Message",
            ]}
            buttonLabel={text.sendInquiry}
            helperText={
              locale === "ko"
                ? "문의 폼은 추후 실제 이메일 발송 서비스와 연결됩니다."
                : "This inquiry form will be connected to a real email delivery service later."
            }
            completionTitle={
              locale === "ko" ? "문의가 접수되었습니다." : "Your inquiry has been received."
            }
            completionLines={[
              locale === "ko"
                ? "현재는 데모 상태이며, 추후 실제 이메일 발송과 연결됩니다."
                : "This is a demo state for now and will later connect to real email delivery.",
            ]}
          />
        </article>
      </div>
    </section>
  );
}

function MissingProject({
  locale,
  text,
}: {
  locale: Locale;
  text: ReturnType<typeof labels>;
}) {
  return (
    <section className="stack">
      <h1>{text.projectNotFound}</h1>
      <a className="secondary inline-action" href={href(locale, "/sponsorship")}>
        {text.goToSponsorship}
      </a>
    </section>
  );
}

function FormLayout({
  fields,
  buttonLabel,
  helperText,
  completionTitle,
  completionLines,
}: {
  fields: string[];
  buttonLabel: string;
  helperText?: string;
  completionTitle: string;
  completionLines: string[];
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="completion-card">
        <p className="eyebrow">{completionTitle}</p>
        <ul>
          {completionLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="account-box">
          <strong>KBFA Account Guide</strong>
          <span>Bank account details will be finalized from approved settings.</span>
        </div>
        <button type="button" className="primary wide-button" onClick={() => setSubmitted(false)}>
          Edit Again
        </button>
      </div>
    );
  }

  return (
    <div className="form-layout">
      {fields.map((field) => (
        <label className="form-field" key={field}>
          <span>{field}</span>
          <input placeholder={field} />
        </label>
      ))}
      {helperText ? <p className="helper-text">{helperText}</p> : null}
      <button type="button" className="primary wide-button" onClick={() => setSubmitted(true)}>
        {buttonLabel}
      </button>
    </div>
  );
}
