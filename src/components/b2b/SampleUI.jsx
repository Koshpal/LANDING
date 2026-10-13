import React from "react";

/* Coded "app" panels used where a real screenshot isn't available yet.
   Every panel carries a visible "Sample data" badge and Indian-context
   figures (₹, EMI, rent). Replace with real screenshots via DeviceFrame
   when approved assets arrive (CONTENT_NEEDED.md #20). */

function Panel({ title, children, className = "" }) {
  return (
    <div className={`rounded-[22px] border border-[#e9ecf7] bg-[#fff] shadow-[0_24px_60px_-28px_rgba(11,21,51,0.35)] overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e9ecf7] bg-[#f7f8fd]">
        <span className="font-outfit font-bold text-[13px] text-[#0b1533]">{title}</span>
        <span className="font-outfit font-bold text-[10.5px] tracking-[0.08em] uppercase px-2 py-[3px] rounded-full bg-[#fff4d6] text-[#7a5200] border border-[#f0d58a]">
          Sample data
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

const rupee = (n) => "₹" + n.toLocaleString("en-IN");

function Bar({ label, spent, cap }) {
  const pct = Math.min(100, Math.round((spent / cap) * 100));
  const over = spent > cap;
  return (
    <div>
      <div className="flex justify-between font-jakarta text-[13.5px] text-[#3a4468]">
        <span>{label}</span>
        <span className="tabular-nums">
          {rupee(spent)} <span className="text-[#6b7597]">of {rupee(cap)}</span>
        </span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-[#e9ecf7] overflow-hidden" aria-hidden="true">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: over ? "#d9534f" : "linear-gradient(90deg,#334eac,#3a86b0)" }}
        />
      </div>
    </div>
  );
}

export function SessionCard() {
  return (
    <Panel title="After your session">
      <p className="font-jakarta text-[13px] text-[#6b7597]">1:1 with a certified financial expert</p>
      <p className="font-outfit font-semibold text-[15px] text-[#0b1533] mt-3">Your plan</p>
      <ul className="mt-2 grid gap-2.5 font-jakarta text-[14px] text-[#3a4468]">
        {[
          "Build an emergency fund of three months' expenses",
          "Bring the credit-card balance to zero by March",
          "Decide: prepay the loan, or keep the EMI",
        ].map((t) => (
          <li key={t} className="flex gap-2.5">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary flex-none" />
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 pt-3 border-t border-[#e9ecf7] font-jakarta text-[12.5px] text-[#6b7597]">
        These move into your app as budgets, goals and reminders.
      </p>
    </Panel>
  );
}

export function BudgetCard() {
  return (
    <Panel title="Budgets · this month">
      <div className="grid gap-4">
        <Bar label="Food & dining" spent={8200} cap={10000} />
        <Bar label="Transport" spent={2100} cap={3000} />
        <Bar label="Shopping" spent={6400} cap={5000} />
      </div>
      <p className="mt-4 font-jakarta text-[12.5px] text-[#6b7597]">Shopping is over budget by ₹1,400.</p>
    </Panel>
  );
}

export function GoalsCard() {
  return (
    <Panel title="Goals">
      <div className="grid gap-4">
        <Bar label="Emergency fund" spent={60000} cap={150000} />
        <Bar label="New laptop" spent={18000} cap={45000} />
      </div>
    </Panel>
  );
}

export function RemindersCard() {
  const rows = [
    ["Rent", "Due 1 Nov", 18000],
    ["Home loan EMI", "Due 5 Nov", 22400],
    ["Credit card", "Due 14 Nov", 6250],
  ];
  return (
    <Panel title="Dues & reminders">
      <ul className="grid gap-3">
        {rows.map(([n, d, a]) => (
          <li key={n} className="flex items-center justify-between rounded-xl border border-[#e9ecf7] bg-[#f7f8fd] px-4 py-3">
            <div>
              <div className="font-outfit font-semibold text-[14px] text-[#0b1533]">{n}</div>
              <div className="font-jakarta text-[12.5px] text-[#6b7597]">{d}</div>
            </div>
            <div className="font-outfit font-bold text-[15px] tabular-nums text-[#0b1533]">{rupee(a)}</div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function CashFlowCard() {
  const rows = [
    ["In", 62000, "#334eac"],
    ["Out", 48300, "#3a86b0"],
  ];
  return (
    <Panel title="Cash flow · this month">
      <div className="grid gap-3.5">
        {rows.map(([l, v, c]) => (
          <div key={l}>
            <div className="flex justify-between font-jakarta text-[13.5px] text-[#3a4468]">
              <span>{l}</span>
              <span className="tabular-nums">{rupee(v)}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-[#e9ecf7]" aria-hidden="true">
              <div className="h-full rounded-full" style={{ width: `${Math.round((v / 62000) * 100)}%`, background: c }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-[#e9ecf7] flex items-baseline justify-between">
        <span className="font-jakarta text-[13.5px] text-[#6b7597]">Left this month</span>
        <span className="font-outfit font-extrabold text-[24px] tabular-nums text-[#0b1533]">{rupee(13700)}</span>
      </div>
    </Panel>
  );
}

export function TagsCard() {
  const tags = [
    ["#family", 12400],
    ["#travel", 9800],
    ["#festival", 6500],
    ["#health", 3200],
  ];
  return (
    <Panel title="Tags · this quarter">
      <ul className="grid gap-3">
        {tags.map(([t, v]) => (
          <li key={t} className="flex items-center justify-between">
            <span className="font-outfit font-semibold text-[13.5px] px-3 py-1 rounded-full bg-primary-lightest text-primary">{t}</span>
            <span className="font-outfit font-bold text-[15px] tabular-nums text-[#0b1533]">{rupee(v)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-jakarta text-[12.5px] text-[#6b7597]">Tags group spending across categories.</p>
    </Panel>
  );
}

export function CashOnHandCard() {
  return (
    <Panel title="Cash on hand">
      <div className="font-outfit font-extrabold text-[32px] tabular-nums text-[#0b1533]">{rupee(4200)}</div>
      <p className="font-jakarta text-[13.5px] text-[#6b7597] mt-1">In your wallet right now</p>
      <ul className="mt-4 grid gap-2 font-jakarta text-[13.5px] text-[#3a4468]">
        <li className="flex justify-between"><span>Auto fare</span><span className="tabular-nums">−{rupee(120)}</span></li>
        <li className="flex justify-between"><span>Chai and snacks</span><span className="tabular-nums">−{rupee(80)}</span></li>
        <li className="flex justify-between"><span>ATM withdrawal</span><span className="tabular-nums">+{rupee(2000)}</span></li>
      </ul>
    </Panel>
  );
}
