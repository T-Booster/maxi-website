"use client";

import { useEffect, useState } from "react";

/* Public anon key — the same one shipped in the app; safe in client code.
   get_shared_plan is SECURITY DEFINER and granted to anon on purpose: the
   token IS the capability, and the row carries no owner_id. */
const SUPABASE_URL = "https://jqvbgtmiqsgpwmosogwi.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxdmJndG1pcXNncHdtb3NvZ3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMDgzNjEsImV4cCI6MjA3NjY4NDM2MX0.7Kd5uZGVA5W5mrR0Z6CW4XMCd1OtEV0YCXkitQHveoo";
const APP_STORE = "https://apps.apple.com/app/id6754610107";
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.influogen.tboost.ai";

type Shared = {
  success?: boolean;
  error?: string;
  plan_type?: string;
  title?: string;
  summary?: string;
  plan_data?: string;
  owner_name?: string;
  owner_avatar?: string;
};

type Exercise = { name?: string; sets?: number | string; reps?: number | string };
type Workout = {
  dayName?: string;
  title?: string;
  restDay?: boolean;
  estimatedDuration?: number | string;
  exercises?: Exercise[];
};
type Week = { weekNumber?: number; workouts?: Workout[] };
type Meal = { mealType?: string; name?: string; calories?: number | string };
type Day = { dayNumber?: number; meals?: Meal[] };
type PlanData = {
  title?: string;
  summary?: string;
  durationWeeks?: number;
  focusArea?: string;
  difficulty?: string;
  durationDays?: number;
  calorieTarget?: number | string;
  weeks?: Week[];
  days?: Day[];
};

export default function PlanClient({ token }: { token: string | null }) {
  const [state, setState] = useState<"loading" | "error" | "ok">(
    token ? "loading" : "error"
  );
  const [data, setData] = useState<Shared | null>(null);
  // Set after mount, never during render: the server has no user agent, so
  // sniffing it while rendering would cause a hydration mismatch.
  const [android, setAndroid] = useState(false);

  useEffect(() => {
    setAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  const store = android ? PLAY_STORE : APP_STORE;
  // Chrome opens the app if installed, else goes to browser_fallback_url itself,
  // so Android needs no timer. Still not a same-origin https link.
  const androidIntent = token
    ? `intent://plan/${token}#Intent;scheme=maxiai;package=com.influogen.tboost.ai;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE)};end`
    : PLAY_STORE;

  useEffect(() => {
    if (!token) return;
    let alive = true;
    fetch(`${SUPABASE_URL}/rest/v1/rpc/get_shared_plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
      },
      body: JSON.stringify({ p_token: token }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: Shared) => {
        if (!alive) return;
        if (!d || d.success !== true) return setState("error");
        setData(d);
        setState("ok");
      })
      .catch(() => alive && setState("error"));
    return () => {
      alive = false;
    };
  }, [token]);

  let plan: PlanData = {};
  if (data?.plan_data) {
    try {
      plan = (JSON.parse(data.plan_data) as PlanData) || {};
    } catch {
      plan = {};
    }
  }

  const ownerName = (data?.owner_name || "").trim() || "Someone";
  // Only load an avatar from our own storage bucket — the field is
  // user-controlled and would otherwise be an arbitrary outbound request.
  const avatar = String(data?.owner_avatar || "");
  const avatarTrusted = avatar.startsWith(
    `${SUPABASE_URL}/storage/v1/object/public/`
  );

  // NOT a same-origin https link: iOS suppresses universal links for
  // same-domain navigation, so that button would only ever reload this page.
  // The maxiai:// scheme is registered by the app; if nothing handles it we
  // fall through to the App Store.
  function openInApp(e: React.MouseEvent) {
    e.preventDefault();
    if (!token) return;
    if (android) {
      window.location.href = androidIntent;
      return;
    }
    let left = false;
    const bail = () => {
      if (document.hidden) left = true;
    };
    document.addEventListener("visibilitychange", bail);
    window.location.href = `maxiai://plan/${token}`;
    setTimeout(() => {
      document.removeEventListener("visibilitychange", bail);
      if (!left && !document.hidden) window.location.href = store;
    }, 1500);
  }

  const isWorkout = data?.plan_type === "workout";
  const chips: string[] = [];
  if (isWorkout) {
    if (plan.durationWeeks)
      chips.push(`${plan.durationWeeks} week${plan.durationWeeks > 1 ? "s" : ""}`);
    if (plan.focusArea) chips.push(plan.focusArea);
    if (plan.difficulty) chips.push(plan.difficulty);
  } else {
    if (plan.durationDays) chips.push(`${plan.durationDays} days`);
    if (plan.calorieTarget) chips.push(`${plan.calorieTarget} kcal/day`);
  }

  return (
    <div className="fx">
      <style>{CSS}</style>
      <div className="wrap">
        <div className="brand">
          <div className="logo">FF</div>
          <b>FunFit</b>
        </div>

        {state === "loading" && (
          <div className="state">
            <div className="spin" />
            Loading plan…
          </div>
        )}

        {state === "error" && (
          <div className="state">
            <h2>This link isn&apos;t available</h2>
            <p>
              It may have expired or been removed by the person who shared it.
            </p>
            <a className="cta" style={{ marginTop: 18 }} href={store}>
              Get FunFit
            </a>
          </div>
        )}

        {state === "ok" && data && (
          <main>
            <div className="from">
              {avatarTrusted ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="avatar"
                  referrerPolicy="no-referrer"
                  src={avatar}
                  alt=""
                />
              ) : (
                <div className="avatar-i">
                  {ownerName.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="from-t">
                <b>{ownerName}</b> shared a plan with you
              </div>
            </div>

            <h1>{data.title || plan.title || "Training plan"}</h1>
            {(data.summary || plan.summary) && (
              <p className="summary">{data.summary || plan.summary}</p>
            )}

            {chips.length > 0 && (
              <div className="chips">
                {chips.map((c, i) => (
                  <span key={c + i} className={i ? "chip alt" : "chip"}>
                    {c}
                  </span>
                ))}
              </div>
            )}

            <a
              className="cta"
              href={android ? androidIntent : `maxiai://plan/${token}`}
              onClick={openInApp}
            >
              Add this plan to my app
            </a>
            <p className="cta-sub">Opens in FunFit — free to download</p>
            <a className="cta-ghost" href={store}>
              Don&apos;t have the app? Get it free
            </a>

            {isWorkout ? <WorkoutBody plan={plan} /> : <MealBody plan={plan} />}

            <div className="sticky">
              <a className="cta" href={store}>
                Add this plan — Get FunFit
              </a>
              <p className="cta-sub">
                Track workouts, scan meals, and train with an AI coach.
              </p>
            </div>

            <p className="foot">
              Shared via <b>FunFit</b> · <a href="/privacy">Privacy</a> ·{" "}
              <a href="/terms">Terms</a>
            </p>
          </main>
        )}
      </div>
    </div>
  );
}

/** Preview the first week only — enough to judge, short enough to scan. */
function WorkoutBody({ plan }: { plan: PlanData }) {
  const weeks = [...(plan.weeks || [])].sort(
    (a, b) => (a.weekNumber || 0) - (b.weekNumber || 0)
  );
  if (!weeks.length) return null;
  const w = weeks[0];
  return (
    <>
      <div className="sec">
        Week {w.weekNumber || 1}
        {weeks.length > 1 ? ` of ${weeks.length}` : ""}
      </div>
      {(w.workouts || []).map((d, i) => (
        <div className="card" key={i}>
          <div className="day">
            <h3>{d.dayName || ""}</h3>
            {!d.restDay && d.estimatedDuration ? (
              <span>{d.estimatedDuration} min</span>
            ) : null}
          </div>
          {d.restDay ? (
            <div className="rest">Rest day</div>
          ) : (
            <>
              {d.title && <div className="day-t">{d.title}</div>}
              <ul>
                {(d.exercises || []).map((ex, j) => (
                  <li key={j}>
                    <span>{ex.name}</span>
                    <em>
                      {ex.sets} x {ex.reps}
                    </em>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
      {weeks.length > 1 && (
        <p className="cta-sub more">
          + {weeks.length - 1} more week{weeks.length > 2 ? "s" : ""} in the app
        </p>
      )}
    </>
  );
}

function MealBody({ plan }: { plan: PlanData }) {
  const days = [...(plan.days || [])].sort(
    (a, b) => (a.dayNumber || 0) - (b.dayNumber || 0)
  );
  if (!days.length) return null;
  const d = days[0];
  return (
    <>
      <div className="sec">
        Day 1{days.length > 1 ? ` of ${days.length}` : ""}
      </div>
      <div className="card">
        <ul>
          {(d.meals || []).map((m, i) => {
            const slot = m.mealType || "";
            const nm = m.name || "";
            const label = slot && nm ? `${slot} · ${nm}` : slot || nm;
            const kcal =
              m.calories == null || m.calories === "" ? "" : `${m.calories} kcal`;
            return (
              <li key={i}>
                <span>{label}</span>
                <em>{kcal}</em>
              </li>
            );
          })}
        </ul>
      </div>
      {days.length > 1 && (
        <p className="cta-sub more">+ {days.length - 1} more days in the app</p>
      )}
    </>
  );
}

/* Scoped under .fx so the element selectors below cannot leak into the
   legal pages, which share this app's globals.css. */
const CSS = `
.fx{
  --brand:#F05A1A; --accent:#3B82F6;
  --ink:#141A21; --ink-2:#5A6672; --ink-3:#8B96A2;
  --bg:#F6F7F9; --card:#FFFFFF; --line:#E6EAEF;
  --shadow:0 1px 2px rgba(20,26,33,.04), 0 12px 32px -14px rgba(20,26,33,.18);
  background:var(--bg); color:var(--ink); min-height:100vh;
  font-family:-apple-system,BlinkMacSystemFont,system-ui,"Segoe UI",sans-serif;
  line-height:1.5; -webkit-font-smoothing:antialiased;
}
@media (prefers-color-scheme: dark){
  .fx{
    --ink:#EDF1F6; --ink-2:#A3AEBB; --ink-3:#77828F;
    --bg:#0E1216; --card:#161C22; --line:#242C34;
    --shadow:0 1px 2px rgba(0,0,0,.4), 0 14px 36px -16px rgba(0,0,0,.7);
  }
}
.fx *{box-sizing:border-box}
.fx .wrap{max-width:620px;margin:0 auto;padding:20px 18px 40px}
.fx .brand{display:flex;align-items:center;gap:10px;padding:6px 0 20px}
.fx .logo{
  width:34px;height:34px;border-radius:9px;flex:none;
  background:linear-gradient(135deg,var(--brand),#FF8A3D);
  display:grid;place-items:center;color:#fff;font-weight:800;font-size:17px;
  box-shadow:0 4px 12px rgba(240,90,26,.35);
}
.fx .brand b{font-weight:800;font-size:16px;letter-spacing:-.01em}
.fx .from{display:flex;align-items:center;gap:11px;margin-bottom:14px}
.fx .avatar{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:none;background:var(--line)}
.fx .avatar-i{
  width:40px;height:40px;border-radius:50%;flex:none;display:grid;place-items:center;
  background:rgba(240,90,26,.12);color:var(--brand);font-weight:700;font-size:16px;
}
.fx .from-t{font-size:13px;color:var(--ink-2)}
.fx .from-t b{color:var(--ink);font-weight:600}
.fx h1{
  font-weight:800;font-size:clamp(25px,6vw,33px);line-height:1.15;
  letter-spacing:-.02em;margin:0 0 8px;text-wrap:balance;
}
.fx .summary{color:var(--ink-2);font-size:15px;margin:0 0 16px}
.fx .chips{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:22px}
.fx .chip{font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px;
  background:rgba(240,90,26,.10);color:var(--brand);}
.fx .chip.alt{background:rgba(59,130,246,.10);color:var(--accent)}
.fx .cta{
  display:block;width:100%;text-align:center;text-decoration:none;
  font-weight:700;font-size:16.5px;padding:16px 20px;border-radius:15px;
  border:0;cursor:pointer;background:linear-gradient(135deg,var(--brand),#FF7A34);
  color:#fff;box-shadow:0 8px 22px -8px rgba(240,90,26,.6);
}
.fx .cta:active{transform:translateY(1px)}
.fx .cta-sub{text-align:center;font-size:12.5px;color:var(--ink-3);margin:9px 0 0}
.fx .cta-sub.more{margin:14px 0 0}
.fx .cta-ghost{
  display:block;width:100%;text-align:center;text-decoration:none;margin-top:9px;
  font-weight:600;font-size:14.5px;padding:12px;border-radius:13px;
  color:var(--ink);background:transparent;border:1px solid var(--line);
}
.fx .sticky{
  position:sticky;bottom:0;padding:14px 0 max(14px,env(safe-area-inset-bottom));
  background:linear-gradient(to top,var(--bg) 72%,transparent);
}
.fx .sec{font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;
  color:var(--ink-3);margin:26px 0 10px;}
.fx .card{background:var(--card);border:1px solid var(--line);border-radius:15px;
  padding:15px 16px;margin-bottom:10px;box-shadow:var(--shadow);}
.fx .day{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:9px}
.fx .day h3{font-weight:700;font-size:15.5px;margin:0}
.fx .day span{font-size:12px;color:var(--ink-3);white-space:nowrap}
.fx .day-t{font-size:13.5px;color:var(--ink-2);margin-bottom:8px}
.fx ul{list-style:none;margin:0;padding:0}
.fx li{display:flex;justify-content:space-between;gap:12px;
  padding:8px 0;border-top:1px solid var(--line);font-size:14.5px;}
.fx li:first-child{border-top:0}
.fx li em{font-style:normal;color:var(--ink-3);font-variant-numeric:tabular-nums;white-space:nowrap}
.fx .rest{color:var(--ink-3);font-size:14px;font-style:italic}
.fx .state{text-align:center;padding:56px 20px;color:var(--ink-2)}
.fx .state h2{font-size:19px;margin:0 0 6px;color:var(--ink)}
.fx .spin{
  width:26px;height:26px;border-radius:50%;margin:0 auto 14px;
  border:2.5px solid var(--line);border-top-color:var(--brand);
  animation:fxspin .7s linear infinite;
}
@keyframes fxspin{to{transform:rotate(360deg)}}
.fx .foot{text-align:center;font-size:11.5px;color:var(--ink-3);margin-top:26px}
.fx .foot a{color:var(--ink-3)}
`;
