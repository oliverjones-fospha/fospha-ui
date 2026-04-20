// ─────────────────────────────────────────────────────────────────────────────
// Analytics · Click Performance — page data
//
// HOW TO UPDATE THIS DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
// 1. PAGE HEADER — change the title, subtitle, and date range shown at the top
// 2. KPI CARDS   — update value/change for each metric
//                  changeDirection: "up" = good (green), "down" = bad (red)
// 3. CHART DATA  — replace the clickTrend array with your own daily figures
//                  Each row needs a { date: string, clicks: number }
// ─────────────────────────────────────────────────────────────────────────────

import type { KPICardProps } from "@/components/fospha/kpi-card";

// ── 1. Page header ────────────────────────────────────────────────────────────

export const PAGE_META = {
  eyebrow:   "Analytics",
  title:     "Click Performance",
  subtitle:  "Last 90 days · 1 Jan – 31 Mar 2025",
};

// ── 2. KPI cards ──────────────────────────────────────────────────────────────

export const KPI_CARDS: KPICardProps[] = [
  {
    label:           "Impressions",
    value:           "84.2M",
    change:          "+18.3%",
    changeDirection: "up",
    description:     "vs prev 90 days",
  },
  {
    label:           "Clicks",
    value:           "1.93M",
    change:          "+11.7%",
    changeDirection: "up",
    description:     "vs prev 90 days",
  },
  {
    label:           "CTR",
    value:           "2.29%",
    change:          "+0.4pp",
    changeDirection: "up",
    description:     "vs prev 90 days",
  },
  {
    label:           "CPC",
    value:           "£0.38",
    change:          "+£0.04",
    changeDirection: "down",   // cost increase = bad
    description:     "vs prev 90 days",
  },
];

// ── 3. Chart data ─────────────────────────────────────────────────────────────
// Replace these rows with real figures. Date format is flexible — whatever
// string you put here is shown as-is on the X axis.

export const CLICK_TREND: { date: string; clicks: number }[] = [
  { date: "1 Jan",  clicks: 18420 },
  { date: "2 Jan",  clicks: 19105 },
  { date: "3 Jan",  clicks: 21340 },
  { date: "4 Jan",  clicks: 20870 },
  { date: "5 Jan",  clicks: 17650 },
  { date: "6 Jan",  clicks: 16200 },
  { date: "7 Jan",  clicks: 15980 },
  { date: "8 Jan",  clicks: 19850 },
  { date: "9 Jan",  clicks: 20430 },
  { date: "10 Jan", clicks: 22100 },
  { date: "11 Jan", clicks: 21760 },
  { date: "12 Jan", clicks: 20540 },
  { date: "13 Jan", clicks: 17320 },
  { date: "14 Jan", clicks: 16750 },
  { date: "15 Jan", clicks: 21200 },
  { date: "16 Jan", clicks: 22580 },
  { date: "17 Jan", clicks: 23910 },
  { date: "18 Jan", clicks: 23450 },
  { date: "19 Jan", clicks: 22180 },
  { date: "20 Jan", clicks: 18640 },
  { date: "21 Jan", clicks: 17900 },
  { date: "22 Jan", clicks: 22760 },
  { date: "23 Jan", clicks: 24100 },
  { date: "24 Jan", clicks: 25340 },
  { date: "25 Jan", clicks: 24870 },
  { date: "26 Jan", clicks: 23590 },
  { date: "27 Jan", clicks: 19230 },
  { date: "28 Jan", clicks: 18760 },
  { date: "29 Jan", clicks: 23450 },
  { date: "30 Jan", clicks: 24780 },
  { date: "31 Jan", clicks: 26120 },
  { date: "1 Feb",  clicks: 25640 },
  { date: "2 Feb",  clicks: 24380 },
  { date: "3 Feb",  clicks: 20150 },
  { date: "4 Feb",  clicks: 19620 },
  { date: "5 Feb",  clicks: 24890 },
  { date: "6 Feb",  clicks: 26230 },
  { date: "7 Feb",  clicks: 27560 },
  { date: "8 Feb",  clicks: 27090 },
  { date: "9 Feb",  clicks: 25810 },
  { date: "10 Feb", clicks: 21480 },
  { date: "11 Feb", clicks: 20940 },
  { date: "12 Feb", clicks: 26100 },
  { date: "13 Feb", clicks: 27540 },
  { date: "14 Feb", clicks: 28870 },
  { date: "15 Feb", clicks: 28400 },
  { date: "16 Feb", clicks: 27120 },
  { date: "17 Feb", clicks: 22790 },
  { date: "18 Feb", clicks: 22250 },
  { date: "19 Feb", clicks: 27460 },
  { date: "20 Feb", clicks: 28900 },
  { date: "21 Feb", clicks: 30230 },
  { date: "22 Feb", clicks: 29760 },
  { date: "23 Feb", clicks: 28480 },
  { date: "24 Feb", clicks: 24050 },
  { date: "25 Feb", clicks: 23510 },
  { date: "26 Feb", clicks: 28720 },
  { date: "27 Feb", clicks: 30160 },
  { date: "28 Feb", clicks: 31490 },
  { date: "1 Mar",  clicks: 31020 },
  { date: "2 Mar",  clicks: 29740 },
  { date: "3 Mar",  clicks: 25310 },
  { date: "4 Mar",  clicks: 24770 },
  { date: "5 Mar",  clicks: 29980 },
  { date: "6 Mar",  clicks: 31420 },
  { date: "7 Mar",  clicks: 32750 },
  { date: "8 Mar",  clicks: 32280 },
  { date: "9 Mar",  clicks: 31000 },
  { date: "10 Mar", clicks: 26570 },
  { date: "11 Mar", clicks: 26030 },
  { date: "12 Mar", clicks: 31240 },
  { date: "13 Mar", clicks: 32680 },
  { date: "14 Mar", clicks: 34010 },
  { date: "15 Mar", clicks: 33540 },
  { date: "16 Mar", clicks: 32260 },
  { date: "17 Mar", clicks: 27830 },
  { date: "18 Mar", clicks: 27290 },
  { date: "19 Mar", clicks: 32500 },
  { date: "20 Mar", clicks: 33940 },
  { date: "21 Mar", clicks: 35270 },
  { date: "22 Mar", clicks: 34800 },
  { date: "23 Mar", clicks: 33520 },
  { date: "24 Mar", clicks: 29090 },
  { date: "25 Mar", clicks: 28550 },
  { date: "26 Mar", clicks: 33760 },
  { date: "27 Mar", clicks: 35200 },
  { date: "28 Mar", clicks: 36530 },
  { date: "29 Mar", clicks: 36060 },
  { date: "30 Mar", clicks: 34780 },
  { date: "31 Mar", clicks: 30350 },
];
