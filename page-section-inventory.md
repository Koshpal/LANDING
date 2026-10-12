# Page and Section Inventory

## Scope

This inventory covers the public application in `LANDING`. Its routes are defined in [`src/main.jsx`](src/main.jsx). `ADMIN`, `COACH`, `EMPLOYEE`, and `HR` are separate role applications with their own route trees and are not merged into this public-site inventory.

## Overall Structure

The application is a React/Vite marketing and resource website with:

- A shared fixed navbar and responsive mobile menu.
- Marketing, solution, resource, company, and educational pages.
- Contact and demo request forms using EmailJS.
- Authentication screens for employee, HR, and coach roles.
- Blog listing and dynamic blog-post routes.
- Shared CTA bands, responsive card grids, animated backgrounds, and placeholder product mockups.
- Shared footer on most pages.
- No verified data tables or modal components were found.
- Several product visuals, customer details, legal pages, and security claims are explicitly placeholders or unverified.

## Shared Navigation

Implemented in [`src/components/Navbar.jsx`](src/components/Navbar.jsx).

| Navigation group | Links |
|---|---|
| Platform | `/platform`, `/employee-financial-wellness`, `/financial-education`, `/financial-coaching` |
| Solutions | `/for-hr`, `/business-impact`, `/security`, `/financial-wellness` |
| Resources | `/resources`, `/resources/reports`, `/resources/guides`, `/blog`, `/calculator` |
| Direct links | `/customers`, `/about` |
| Header actions | `Login` -> `/login`; `Book a demo` -> `/demo` |
| Mobile behavior | Collapsible menu below the `lg` breakpoint with the same grouped links and CTA buttons |

## Shared Footer

Implemented in [`src/components/Footer.jsx`](src/components/Footer.jsx).

- Optional "Support your people beyond the payslip" CTA on non-home pages.
- Platform links.
- Resource links.
- Company links: About, Customers, Contact, Book a demo, Privacy Policy, Terms of Service.
- Phone, email, and LinkedIn links.
- App Store and Google Play elements are visual placeholders, not verified download links.
- Animated canvas grid background.
- The homepage omits the footer CTA because it already ends with `FinalCta`.

## Page Inventory

| Page and route | Top-to-bottom sections and components | Navigation, forms, dashboards, and major UI | Responsive behavior and verification |
|---|---|---|---|
| **Home** - `/` ([Home.jsx](src/pages/Home.jsx)) | Navbar -> Hero -> TrustStrip -> ProblemSection -> PlatformSection -> EmployeeJourney -> PlatformSplit -> PrivacySection -> ImpactSection -> TechAndHumans -> Proof -> FinalCta -> Footer | Hero and final CTA link to `/demo` and `/platform`. Privacy content links to `/privacy-policy`. Includes mock employee-app, HR-dashboard, metrics, logos, and testimonial areas. | Responsive grids and stacked layouts. Customer proof and dashboard values are illustrative placeholders. |
| **Employee Financial Wellness** - `/employee-financial-wellness` ([EmployeeFinancialWellness.jsx](src/pages/EmployeeFinancialWellness.jsx)) | PageHero -> employee feature grid -> employee app placeholder -> employer feature grid -> benefit-compounds cards -> PageCta | CTAs to `/demo`, `/platform`, and `/business-impact`. | Feature grids reduce from four columns to two and one. Product app visual is a placeholder. |
| **Platform** - `/platform` ([Platform.jsx](src/pages/Platform.jsx)) | PageHero -> three platform layers -> how-it-comes-together flow -> HR dashboard section -> six dashboard capability cards -> PageCta | CTAs to `/demo`, `/employee-financial-wellness`, and `/security`. Includes browser dashboard placeholder. | Layer and capability grids collapse at smaller breakpoints. Dashboard is not verified production UI. |
| **For HR** - `/for-hr` ([ForHr.jsx](src/pages/ForHr.jsx)) | PageHero -> HR problems list -> Deploy / Engage / Measure / Improve cards -> HR dashboard placeholder -> benefits-stack cards -> WhoItsFor -> PageCta | CTAs to `/demo`, `/business-impact`, and `/employee-financial-wellness`. | Four-column layouts collapse responsively. Dashboard is a placeholder. |
| **For HR alias** - `/solutions/hr` | Same component and content as `/for-hr`. | Same links and CTA actions as `/for-hr`. | Same responsive behavior. |
| **Business Impact** - `/business-impact` ([BusinessImpact.jsx](src/pages/BusinessImpact.jsx)) | PageHero -> stress/business-cost chain -> Focus / Productivity / Engagement / Retention cards -> budget-conversation cards -> PageCta | CTAs to `/demo`, `/for-hr`, and `/platform`. | Flow remains vertical; cards use four/two/one-column layouts. |
| **Financial Coaching** - `/financial-coaching` ([FinancialCoaching.jsx](src/pages/FinancialCoaching.jsx)) | PageHero -> coaching-session placeholder -> employee questions grid -> coaching model cards -> why-different cards -> PageCta | CTAs to `/demo`, `/platform`, and `/security`. No booking or scheduling form. | Question grid uses two columns on larger screens and one on mobile. Coaching visual is a placeholder. |
| **Financial Education** - `/financial-education` ([FinancialEducation.jsx](src/pages/FinancialEducation.jsx)) | PageHero -> six education tracks with lesson lists -> phone lesson placeholder -> PageCta | CTAs to `/demo`, `/platform`, and `/financial-coaching`. No interactive lesson controls. | Tracks use three columns desktop, two tablet, one mobile. |
| **Security** - `/security` ([Security.jsx](src/pages/Security.jsx)) | PageHero -> privacy principles -> employer-view browser placeholder -> HR-can-see / HR-cannot-see lists -> data architecture flow -> security practice cards -> PageCta | CTAs to `/demo`, `/platform`, and `/for-hr`. | Security cards use three/two/one-column layouts. Some security text is marked placeholder; certifications are unverified. |
| **About** - `/about` ([About.jsx](src/pages/About.jsx)) | PageHero -> why-we-exist section -> workplace/team image placeholder -> beliefs cards -> team/advisor slots -> PageCta | CTAs to `/demo`, `/platform`, and `/business-impact`. | Beliefs use two columns; team slots use four columns desktop and two smaller. Team names, roles, and photos are missing or placeholder content. |
| **Customers** - `/customers` ([Customers.jsx](src/pages/Customers.jsx)) | PageHero -> client-logo slots -> three case-study slots -> four testimonial slots -> PageCta | CTAs to `/demo`, `/business-impact`, and `/for-hr`. | Logo and testimonial grids wrap responsively. Customer evidence is placeholder content. |
| **Financial Wellness** - `/financial-wellness` ([FinancialWellness.jsx](src/pages/FinancialWellness.jsx)) | PageHero -> financial-wellness definition -> seven component cards -> workplace-benefit cards -> program flow -> related-reading cards -> PageCta | Related links to `/business-impact`, `/security`, and `/resources/guides`; CTA to `/for-hr`. | Component cards use three/two/one-column layouts; flow is vertical. |
| **Resources** - `/resources` ([Resources.jsx](src/pages/Resources.jsx)) | PageHero -> four resource-hub cards -> latest published blog cards -> PageCta | Links to `/resources/reports`, `/resources/guides`, `/blog`, `/calculator`, `/demo`, `/financial-wellness`, and `/platform`. | Resource hub uses two columns on larger screens; blog cards use three columns desktop and one mobile. |
| **Reports** - `/resources/reports` ([ResourcesReports.jsx](src/pages/ResourcesReports.jsx)) | PageHero -> flagship report description and list -> work-email capture -> report-cover placeholder -> pipeline cards -> PageCta | `EmailCapture` form; links to `/demo`, `/resources`, and `/business-impact`. Submission wiring is TODO/unverified. | Main content becomes one column below `lg`; email capture stacks below `sm`. Report is described as in production; download is unverified. |
| **Guides** - `/resources/guides` ([ResourcesGuides.jsx](src/pages/ResourcesGuides.jsx)) | PageHero -> flagship guide table of contents -> work-email capture -> guide-cover placeholder -> More Guides cards -> PageCta | `EmailCapture` form; Email me the PDF only displays local success state. Links to `/demo`, `/resources`, and `/for-hr`. | Main content is two columns at `lg`; guide cards use three columns desktop. |
| **Blog** - `/blog` ([Blog.jsx](src/pages/Blog.jsx)) | PageHero -> category filter buttons -> post cards -> PageCta | Category buttons update local state. Published posts link to `/blog/:slug`; links to `/demo`, `/resources`, and `/platform`. Unpublished posts are marked coming soon and are not links. | Cards use three/two/one-column layouts. Content comes from [`src/content/posts.js`](src/content/posts.js). |
| **Blog Post** - `/blog/:slug` ([BlogPost.jsx](src/pages/BlogPost.jsx)) | PageShell -> article header -> dynamic article body blocks -> demo CTA card -> two related posts -> PageCta | Links to `/blog`, `/demo`, `/platform`, and related `/blog/:slug` routes. Missing slugs redirect to `/blog`. | Article uses a constrained desktop width with reduced heading sizes and padding on smaller screens. |
| **Impact Calculator** - `/calculator` ([Calculator.jsx](src/pages/Calculator.jsx)) | PageHero -> workforce inputs -> adjustable model assumptions -> illustrative results card -> PageCta | Number inputs for employee count and salary. Range inputs for stress percentage, distracted hours, and working weeks. Calculates stressed employees, hours, and an INR productivity estimate. Links to `/demo`, `/business-impact`, and `/platform`. | Two-column layout at `lg`; results panel is sticky on larger screens and normal-flow on smaller screens. Results are explicitly illustrative. |
| **Login** - `/login` ([LoginPage.jsx](src/pages/LoginPage.jsx)) | Responsive two-panel authentication screen -> role selection -> error banner -> email/password fields -> remember-me control -> password visibility control -> forgot-password link -> submit action | Roles: Employee, HR Manager, Financial Coach. POST request to `/auth/login`. Link to `/forgot-password`. Successful authentication redirects to a role portal. | Branding panel is hidden on mobile; form fills the viewport. Backend and portal destinations depend on environment configuration or production/local URLs. |
| **Forgot Password** - `/forgot-password` ([ForgotPasswordPage.jsx](src/pages/ForgotPasswordPage.jsx)) | Centered auth card -> logo -> email form -> success state -> retry and back-to-login links | POST request to `/auth/forgot-password`. Link to `/login`. Success behavior intentionally avoids email enumeration. | Centered responsive card with full-screen background treatment. |
| **Contact** - `/contact` ([ContactPage.jsx](src/pages/ContactPage.jsx)) | Navbar -> contact header -> two-column contact form and contact-information layout -> decorative illustration -> Footer | Required first name, last name, email, subject, and message. Message limit is 500 characters. Email validation, status messages, submit button, phone/email/LinkedIn links. Uses EmailJS and localStorage rate limit of 10 submissions per day. | Two columns at `lg`, stacked below; name fields split into two columns from `sm`. EmailJS delivery is unverified. |
| **Demo Request** - `/demo` ([DemoPage.jsx](src/pages/DemoPage.jsx)) | Navbar -> demo header -> request-demo form and information panel -> decorative illustration -> Footer | Required first name, last name, work email, company, and role. Optional message with 500-character limit. Role select: HR, Finance, Admin, Other. Uses EmailJS and localStorage rate limit of 10 submissions per day. | Two columns at `lg`, stacked below; name fields split from `sm`. EmailJS delivery and response-time claims are unverified. |
| **Privacy Policy** - `/privacy-policy` ([PrivacyPolicy.jsx](src/pages/PrivacyPolicy.jsx)) | Spacer -> Navbar -> single placeholder heading -> Footer | No substantive policy content or form. | Basic responsive padding only. **Unimplemented placeholder.** |
| **Terms of Service** - `/terms-of-service` ([TermsOfService.jsx](src/pages/TermsOfService.jsx)) | Spacer -> Navbar -> single placeholder heading -> Footer | No substantive terms content or form. | Basic responsive padding only. **Unimplemented placeholder.** |
| **Video Watch** - `/video` ([VideoWatch.jsx](src/pages/VideoWatch.jsx)) | SEO metadata -> title -> native HTML video player -> description | Video controls, external video source, and external poster image. No navbar or footer. | Video width is `100%`; broader responsive layout behavior is unverified. External asset availability is unverified. |
| **404** - unmatched route ([NotFound.jsx](src/pages/NotFound.jsx)) | Centered 404 image -> Back to Home link | Link to `/`. Uses `/404.png`. | Fluid image with a maximum width and centered responsive layout. |

## Shared Supporting Components

Implemented under [`src/components/b2b`](src/components/b2b).

- `PageShell`: shared Navbar, main content wrapper, Footer, and SEO integration.
- `PageHero`: standard dark hero section with eyebrow, title, description, and primary/secondary CTAs.
- `PageCta`: reusable closing CTA band.
- `CardGrid`: responsive feature-card grid.
- `FlowChain`: vertical arrow-linked process flow.
- `Placeholder`: browser, phone, or image mockup frames.
- `EmailCapture`: work-email validation and local success state; actual delivery/CRM integration is unverified.
- `ScrollToTop`: resets scroll position between routes.
- `CustomCursor`: desktop pointer enhancement.
- `JellyGrid`: animated background grid.
- `Counter`: animated numeric display.
- `Seo`: page metadata helper.

## Unverified or Placeholder Areas

- Product dashboards and employee-app previews are mockups.
- Customer logos, case studies, testimonials, team details, and advisors are placeholders.
- Security certifications and some security copy are unverified.
- Privacy Policy and Terms of Service are not implemented.
- Resource report and guide downloads are not verified.
- EmailJS delivery depends on environment variables and external service configuration.
- Video assets are hosted externally and were not runtime-tested.
