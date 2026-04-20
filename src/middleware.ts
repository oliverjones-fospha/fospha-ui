import { NextRequest, NextResponse } from "next/server"

const PASSWORD = process.env.SITE_PASSWORD ?? "fospha2026"
const COOKIE   = "fospha-ds-auth"

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get(COOKIE)

  // Already authenticated
  if (cookie?.value === PASSWORD) return NextResponse.next()

  // Check submitted password
  const url = req.nextUrl
  if (url.searchParams.get("password") === PASSWORD) {
    const res = NextResponse.redirect(new URL(url.pathname, req.url))
    res.cookies.set(COOKIE, PASSWORD, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return res
  }

  // Show password form
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>Fospha Design System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Manrope', sans-serif;
            background: #F6F2EF;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card {
            background: #FFFFFF;
            border: 1px solid #E6DCD6;
            border-radius: 12px;
            padding: 48px;
            width: 100%;
            max-width: 400px;
            text-align: center;
          }
          .mark {
            margin-bottom: 32px;
          }
          h1 {
            font-family: 'Bricolage Grotesque', sans-serif;
            font-size: 24px;
            font-weight: 600;
            color: #0C1946;
            margin-bottom: 8px;
          }
          p {
            font-size: 14px;
            color: #525776;
            margin-bottom: 32px;
          }
          input {
            width: 100%;
            padding: 10px 14px;
            font-size: 14px;
            font-family: 'Manrope', sans-serif;
            border: 1px solid #E6DCD6;
            border-radius: 6px;
            outline: none;
            margin-bottom: 12px;
            color: #0C1946;
          }
          input:focus { border-color: #2253FF; }
          button {
            width: 100%;
            padding: 10px;
            background: #2253FF;
            color: #FFFFFF;
            font-family: 'Manrope', sans-serif;
            font-size: 14px;
            font-weight: 600;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
          button:hover { background: #1a42e0; }
          .error {
            font-size: 13px;
            color: #8E1F0B;
            margin-top: 8px;
          }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&family=Manrope:wght@400;600&display=swap" rel="stylesheet">
      </head>
      <body>
        <div class="card">
          <div class="mark">
            <svg width="32" height="32" viewBox="0 0 137 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#3751F9" d="M136.999 35.7993L107.095 148.495H59.292L64.1585 129.637L87.0486 129.552L106.354 54.7057H83.379L88.1961 35.7993H136.999Z"/>
              <path fill="#3751F9" d="M76.7073 0L71.8408 18.8581L48.9503 18.9428L29.6453 93.7895H52.6203L47.8032 112.696H0L28.9041 0H76.7073Z"/>
            </svg>
          </div>
          <h1>Fospha Design System</h1>
          <p>Enter the password to access the design system.</p>
          <form method="GET">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autofocus
            />
            ${url.searchParams.get("password") ? '<p class="error">Incorrect password — please try again.</p>' : ""}
            <button type="submit">Continue</button>
          </form>
        </div>
      </body>
    </html>`,
    {
      status: 401,
      headers: { "Content-Type": "text/html" },
    }
  )
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
}
