import React from "react";
import { Circle, Lightbulb, ShieldCheck, LayoutGrid, ChartNoAxesColumn, Bell, Wallet } from "lucide-react";
import Footer from "../components/Footer";
import Seo, { faqSchema } from "../components/b2b/Seo";
import Faq from "../components/site/Faq";
import { CtaBand, AltRows } from "../components/site/PageParts";
import {
  At, BLUE, TEAL, c, Stage, HeroTitle, HeroImage, Orbit, ORBIT_SPENDING, ORBIT_INSIGHTS,
  RevealText, RowsHead, Split, FeatureTabs, FloatingCta, TrioCards,
} from "../components/site/Feature";

/* Figma "Mobile App" (4 frames) and "Employee Dashboard" (3 frames). The frames share one layout:
   gradient hero with product imagery, scroll-reveal paragraph, rows / split / cards, closing CTA, FAQ.
   Template copy in the frames (coach-recruiting rows, "growth audit", duplicate FAQ questions) is
   replaced with copy about the feature each page covers. */
const Blue = ({ children }) => <span className="text-[#3b3fbc]">{children}</span>;

const APP_FAQ = [
  { q: "What is inside the Koshpal app?", a: "Everything an employee needs in one place: 1:1 financial sessions, spending insights, budgets and goals, and dues and reminders, plus learning and their progress over time." },
  { q: "Does the app cost employees anything?", a: "Nothing, if your employer sponsors it. Koshpal is offered as an employee benefit." },
  { q: "Can my employer see what I do in the app?", a: "No. Your financial information belongs to you. Your employer sees only aggregated, anonymised insights about the group." },
  { q: "Who can use the app?", a: "Employees of organisations that partner with Koshpal. Your organisation invites you, then you sign in and either open the app or book a first session with an expert." },
];

const PEOPLE_BRING = {
  tag: "What People Bring",
  title: "Any money question, every stage of life",
  lead: "A first salary and the first tax return. Clearing a card or a loan. Planning for a home, a wedding, a child, retirement. There’s no question too small and no judgement, just trusted guidance when it matters.",
  points: ["1:1 sessions with certified CFPs and CAs, as often as the plan needs", "Salaried coaches with no commissions", "Fully private, never shared with the employer"],
};

function Shell({ path, title, description, crumb, children, cta, faqTitle = "Questions about the app" }) {
  return (
    <div className="min-h-screen bg-white font-figtree text-[#0b0b0c]">
      <Seo path={path} title={title} description={description} crumbs={[["Platform", "/platform/mobile-app"], [crumb, path]]} schema={faqSchema(APP_FAQ)} />
      <main id="main">
        {children}
        {cta}
        <Faq narrow tag="questions leaders ask" title={faqTitle} items={APP_FAQ} />
      </main>
      <Footer />
    </div>
  );
}

const Insight = (
  <CtaBand wide py={130}>
    Insight people <span className="text-[#c8f169]">can act on</span>
  </CtaBand>
);
const OnePlace = (
  <CtaBand wide py={130}>
    <span className="block [text-wrap:wrap]">One place to see it all,</span>
    <span className="block text-[#c8f169] [text-wrap:wrap]">and stay in control.</span>
  </CtaBand>
);

const fade = "[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]";

/* ---------------- Mobile app ---------------- */
export function SpendingInsights() {
  return (
    <Shell path="/platform/spending-insights" title="Spending Insights App for Employees | Koshpal" crumb="Spending insights" description="See where the month went: income against expenses and spending by category, across UPI, cards and cash, in the Koshpal app." cta={Insight} faqTitle="Questions about insights">
      <Stage bg={BLUE} h={1384}>
        <Orbit pos={ORBIT_SPENDING} h={1384} />
        <HeroTitle y={476} tag="Spending Insights" lines={["See where your money", "actually goes"]} />
        <HeroImage src="/img/pages/app/phone-spending.png" alt="The Koshpal budgets screen" x={506} y={775} w={428} h={608} className="!max-w-[300px] md:!max-w-none" />
      </Stage>
      <RevealText>Koshpal turns everyday activity into clear, personal insight. Employees see income against expenses, spending broken down by category, and the patterns they would otherwise miss, so they can decide with confidence.</RevealText>
      <section className="bg-white px-5 pb-12 md:px-10 md:pb-[100px]">
        <RowsHead tag="Spending insights"><Blue>Spending clarity</Blue>, the way it should be.</RowsHead>
        <AltRows className="mt-12 md:mt-[128px]" rows={[
          { t: "Income against expenses", d: "See what comes in and what goes out, month by month, in one clear view." },
          { t: "Spending by category", d: "Every transaction sorted into categories, so the patterns you would otherwise miss become obvious." },
        ]} />
      </section>
    </Shell>
  );
}

export function DuesReminders() {
  return (
    <Shell path="/platform/dues-reminders" title="Bill, EMI and Due Reminders App | Koshpal" crumb="Dues & reminders" description="Never miss a due date: bills, EMIs and card payments in one place, with timely reminders in the Koshpal app." cta={Insight}>
      <Stage bg={BLUE} h={876}>
        <HeroTitle y={182} tag="Dues & Reminder" lines={["Never misses a", "due date again!"]} lh={88} />
        <HeroImage src="/img/pages/app/bills.png" alt="A bill payment reminder card" x={205} y={494} w={1030} h={381} className={fade} />
      </Stage>
      <RevealText>Late fees and missed payments are stress nobody needs. Koshpal keeps every due date in one place and sends timely reminders, so employees stay ahead of bills, EMIs and investments without thinking about it.</RevealText>
      <Split {...PEOPLE_BRING} />
    </Shell>
  );
}

/* arc of goal bubbles with labels that run along the radius */
const GOALS = [
  ["Camera", 237, 800, "camera"], ["Education", 276, 590, "education"], ["Mobile", 381, 435, "mobile"], ["Motorcycle", 565, 335, "motorcycle"],
  ["House", 719, 302, "house"], ["Watch", 880, 325, "watch"], ["Laptop", 1056, 435, "laptop"], ["Gaming PC", 1166, 592, "gaming"], ["Travel", 1199, 800, "travel"],
];
const CX = 720;
const CY = 785;

function GoalArc() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 1440 887" fill="none">
        <circle cx={CX} cy={CY} r="483" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" />
      </svg>
      {GOALS.map(([label, x, y, g]) => {
        const d = Math.hypot(x - CX, y - CY);
        const ux = (x - CX) / d;
        const uy = (y - CY) / d;
        const q = d + 28 + 14;
        const deg = (Math.atan2(-uy, -ux) * 180) / Math.PI;
        return (
          <React.Fragment key={label}>
            <span className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[#c5f45a]" style={{ left: c(x), top: c(y), width: c(57), height: c(57) }}>
              <img src={`/img/pages/app/glyph-${g}.png`} alt="" style={{ width: c(30), height: c(30) }} />
            </span>
            <span className="absolute" style={{ left: c(CX + ux * q), top: c(CY + uy * q), width: 0, height: 0, transform: `rotate(${deg.toFixed(1)}deg)` }}>
              <span className="absolute right-0 top-0 -translate-y-1/2 whitespace-nowrap font-figtree font-normal text-white" style={{ fontSize: c(24) }}>{label}</span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function BudgetsGoals() {
  return (
    <Shell path="/platform/budgets-goals" title="Budgets and Savings Goals App | Koshpal" crumb="Budgets & goals" description="Set a budget, reach the goal: budgets by category, savings goals and gentle nudges in the Koshpal app." cta={Insight} faqTitle="Questions about insights">
      <Stage bg={BLUE} h={887}>
        <GoalArc />
        <HeroTitle y={457} tag="Budgets & Goals" lines={["Set a Budget", "Reach the Goal"]} lh={85} buttons={[{ label: "Book a demo", to: "/demo" }]} />
      </Stage>
      <RevealText>Budgets and goals turn good intentions into progress. Employees set budgets by category, track savings toward the goals that matter, and watch goal completion climb, with gentle nudges along the way.</RevealText>
      <section className="bg-white px-5 pb-12 md:px-10 md:pb-[40px]">
        <RowsHead tag="Budgets & goals"><Blue>Budgets and goals</Blue>, the way it should be.</RowsHead>
        <AltRows className="mt-12 md:mt-[128px]" rows={[
          { t: "Budgets by category", d: "Set a monthly limit for each category and watch it fill, so overspending never comes as a surprise." },
          { t: "Goals that stay on track", d: "Save toward the things that matter and watch goal completion climb, with gentle nudges along the way." },
        ]} />
      </section>
      <Split dark {...PEOPLE_BRING} />
    </Shell>
  );
}

const TABS = [
  { t: "Unified Wallet View", d: "See all your cards, accounts, and transactions in one place.", Icon: Wallet },
  { t: "Smart Categorization", d: "Every transaction sorted into clear categories, automatically.", Icon: LayoutGrid },
  { t: "Real-Time Insights", d: "See income against expenses as it happens, not at month end.", Icon: ChartNoAxesColumn },
  { t: "Custom Alerts", d: "Get a nudge before a due date or when a budget is close to its limit.", Icon: Bell },
];

export function MobileApp() {
  return (
    <Shell
      path="/platform/mobile-app"
      title="Financial Wellness Platform: Coach, App, Insights | Koshpal"
      crumb="Mobile app"
      description="One platform: certified coaches, an app for budgets, goals and dues, and an anonymised HR dashboard. Built for Indian workplaces."
      faqTitle="Questions about the app"
      cta={(
        <CtaBand wide py={150}>
          <span className="block [text-wrap:wrap]">Put a financial expert in every</span>
          <span className="block text-[#c8f169] [text-wrap:wrap]">employee’s pocket.</span>
        </CtaBand>
      )}
    >
      <Stage bg={BLUE} h={1350}>
        <HeroTitle
          y={201}
          tag="Mobile app"
          lines={["Financial Wellbeing"]}
          pill={{ prefix: "in your", text: "Pocket" }}
          fs={100}
          lh={122}
          buttons={[{ label: "Book a demo", to: "/demo" }, { label: "See the dashboard", to: "/platform/dashboard" }]}
        />
        <HeroImage src="/img/pages/app/pocket.png" alt="The Koshpal app on a phone" x={165} y={665} w={1110} h={684} className={fade} />
      </Stage>
      <RevealText>The Koshpal app is where employees see their whole money picture and act on it, book 1:1 financial sessions, track spending and budgets, set goals, grow savings, and stay on top of dues, all in one calm place.</RevealText>
      <section className="bg-white px-5 pb-12 md:px-10 md:pb-[40px]">
        <h2 className="mx-auto mb-10 max-w-[900px] text-balance text-center font-figtree text-[clamp(26px,3vw,44px)] font-medium leading-[1.15] tracking-[-0.02em] md:mb-16">The coach builds the plan. The app keeps it alive every day.</h2>
        <RowsHead tag="Mobile app"><Blue>Everything in one app</Blue>, the way it should be.</RowsHead>
        <AltRows className="mt-12 md:mt-[128px]" rows={[
          { t: "Everything in one place", d: "Spending, budgets, goals, sessions and reminders live together, so the whole picture is one tap away." },
          { t: "Built for how people live", d: "Clear, simple screens that make everyday money tasks quick, on the phone people already carry." },
          { t: "A coach in the app", d: "Book a 1:1 session with a certified CFP or CA right from the app, whenever a question comes up." },
          { t: "Private by design", d: "Everything in the app stays with the employee. Employers only ever see anonymised trends." },
        ]} />
      </section>
      <FeatureTabs
        kicker="Spend management"
        title="Track your spending effortlessly."
        lead="Gain total visibility into where your money goes, and make smarter choices with every transaction."
        tabs={TABS}
        image="/img/pages/app/wallet.png"
      />
      <FloatingCta title={<>Everything in the app<br />stays <span className="text-[#c8f169]">the employee’s own</span></>} lead="Spending, budgets, goals, sessions and reminders are private to each person. Employers only ever see anonymised, aggregated trends, never an individual’s data." cta={{ label: "Read about privacy", to: "/privacy-trust" }} />
    </Shell>
  );
}

/* ---------------- Employee dashboard ---------------- */
export function DashboardOverview() {
  return (
    <Shell path="/platform/dashboard" title="Employee Money Dashboard | Koshpal" crumb="Employee dashboard" description="Your whole money life on one screen: spending, budgets, sessions and savings in the Koshpal employee dashboard." cta={OnePlace}>
      <Stage bg={TEAL} h={1255}>
        <HeroTitle
          y={201}
          tag="Employee dashboard"
          lines={["Your whole money life,"]}
          pill={{ prefix: "on one", text: "screen" }}
          fs={100}
          lh={122}
          buttons={[{ label: "Book a demo", to: "/demo" }, { label: "See the platform", to: "/platform/mobile-app" }]}
        />
        <HeroImage src="/img/pages/app/dashboard-ui.png" alt="The Koshpal employee dashboard overview" x={100} y={655} w={1240} h={598} className={fade} />
      </Stage>
      <RevealText>Book a session, set budgets and goals, track your spending, and watch your progress. The Koshpal dashboard gives every employee one calm place to stay on top of money, on a screen big enough to see it all.</RevealText>
      <section className="bg-white px-5 pb-12 md:px-10 md:pb-[100px]">
        <AltRows className="mt-0" rows={[
          { tag: "Book a session", t: "A 1:1 with a certified expert, in a few clicks.", d: "Browse available CFPs and CAs, pick a time that works, and join the session right from your dashboard." },
          { tag: "Spending & budgets", t: "Only guidance, never sales", d: "See income against expenses, spending by category, and your savings trend over time. Clear enough to act on, every month." },
          { tag: "Private by design", t: "Private by design", d: "Everything you track stays private to you. Your employer only ever sees anonymised, company-wide trends, never your individual numbers." },
        ]} />
      </section>
      <FloatingCta title={<>Everything in the app<br />stays <span className="text-[#c8f169]">the employee’s own</span></>} lead="Spending, budgets, goals, sessions and reminders are private to each person. Employers only ever see anonymised, aggregated trends, never an individual’s data." cta={{ label: "Read about privacy", to: "/privacy-trust" }} />
    </Shell>
  );
}

const TRIO = [
  { t: "Simplicity", s: "First", d: "We turn complex financial processes into effortless experiences. Because managing your money shouldn’t feel like a chore.", Icon: Circle },
  { t: "Trust", s: "Through transparency", d: "We put your privacy and security above everything else. Data is encrypted in transit and at rest, and we are clear about how it is used.", Icon: ShieldCheck },
  { t: "Innovation", s: "With purpose", d: "We don’t innovate for the sake of it, we innovate to make your life easier. Every feature is built to help you make smarter financial decisions.", Icon: Lightbulb },
];

export function DashboardSessions() {
  return (
    <Shell path="/platform/book-a-session" title="Book a Session with a CFP or CA | Koshpal" crumb="Book a session" description="Book a certified CFP or CA in a few clicks and talk it through privately. Paid for by your employer." cta={OnePlace} faqTitle="Questions about insights">
      <Stage bg={TEAL} h={1060}>
        <HeroTitle
          y={182}
          tag="Financial Session"
          lines={["Book a certified", <>expert. <span className="text-[#c8f169]">Talk it through.</span></>]}
          accent={9}
          fs={80}
          lh={88}
        />
        <HeroImage src="/img/pages/app/sessions-band.png" alt="A smiling expert on a laptop with available session dates" x={0} y={405} w={1440} h={655} className="[mask-image:linear-gradient(to_bottom,transparent,#000_30px)]" />
      </Stage>
      <RevealText>Money questions deserve a real conversation. Employees book a 1:1 session with a certified expert in a few clicks, pick a time that works, and talk it through, privately.</RevealText>
      <TrioCards tag="why use koshpal" title={<>Three taps from<br />a worry to a plan</>} cards={TRIO} />
      <Split {...PEOPLE_BRING} />
    </Shell>
  );
}

export function DashboardInsights() {
  return (
    <Shell path="/platform/dashboard-insights" title="Spending Insights Dashboard | Koshpal" crumb="Spending insights dashboard" description="See where your money actually goes, on a screen big enough to see it all, in the Koshpal employee dashboard." cta={Insight} faqTitle="Questions about insights">
      <Stage bg={TEAL} h={1303}>
        <Orbit pos={ORBIT_INSIGHTS} h={1303} />
        <HeroTitle y={566} tag="Spending Insights" lines={["See where your money", "actually goes"]} />
        <HeroImage src="/img/pages/app/phones-insights.png" alt="Koshpal progress and spending views" x={150} y={940} w={1140} h={363} className="[mask-image:linear-gradient(to_bottom,transparent,#000_30px)]" />
      </Stage>
      <RevealText>See where your money actually goes. The Koshpal dashboard breaks spending into categories and shows income against expenses and savings over time, on a screen big enough to see it all.</RevealText>
      <section className="bg-white px-5 pb-12 md:px-10 md:pb-[100px]">
        <RowsHead tag="Spending insights"><Blue>Spending clarity</Blue>, the way it should be.</RowsHead>
        <AltRows className="mt-12 md:mt-[128px]" rows={[
          { t: "Income against expenses", d: "See what comes in and what goes out, month by month, in one clear view." },
          { t: "Spending by category", d: "Every transaction sorted into categories, so the patterns you would otherwise miss become obvious." },
        ]} />
      </section>
    </Shell>
  );
}

export { At };
