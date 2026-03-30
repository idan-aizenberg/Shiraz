export type Locale = "en" | "he";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  selectedProjects: {
    title: string;
    viewAll: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    text: string;
    cta: string;
  };
  contactCta: {
    title: string;
    text: string;
    cta: string;
  };
  projects: {
    title: string;
    allProjects: string;
    backToProjects: string;
    interestedTitle: string;
    interestedText: string;
    interestedCta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        serverError: string;
      };
    };
    info: {
      title: string;
      email: string;
      phone: string;
      instagram: string;
    };
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}
