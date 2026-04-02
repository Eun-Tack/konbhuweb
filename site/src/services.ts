export type InquiryPayload = {
  name: string;
  affiliation: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type SponsorshipPayload = {
  sponsorshipType: "project" | "one-time";
  projectSlug?: string;
  donorType: string;
  name: string;
  affiliation: string;
  email: string;
  phone: string;
  receiptRequested: string;
  amount: string;
};

export async function submitInquiry(payload: InquiryPayload) {
  console.info("Inquiry service stub", payload);
  return Promise.resolve({ ok: true });
}

export async function submitSponsorship(payload: SponsorshipPayload) {
  console.info("Sponsorship service stub", payload);
  return Promise.resolve({ ok: true });
}
