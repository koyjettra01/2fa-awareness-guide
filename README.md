# 2FA Awareness Guide

A beginner-friendly cybersecurity guide about two-factor authentication (2FA), created for the Cybersecurity Impact Project.

## Project goal

Help adults who are unfamiliar with account security understand 2FA and follow clear instructions to enable it on an online account.

## Website pages

- `index.html` — understand 2FA and why it matters.
- `setup.html` — set up 2-Step Verification on a Google Account and prepare backup codes.
- `stay-safe.html` — protect codes, recognize unexpected requests, and compare methods.
- `sources.html` — official research links and image credits.

## Starting point

This is a separate project from my CS1030 portfolio. The first local website draft is implemented; audience testing and feedback-based revisions are still to come. Nothing in this draft collects account details or changes account settings.

## Run the website

Open this folder in VS Code. Open `index.html`, then use **Open with Live Server** (or **Go Live**) to preview it through a local HTTP address. Opening the HTML directly as a file can prevent the shared menu from loading, although fallback links are included.

Bootstrap 5.3.3 and jQuery 3.7.1 load from the same public CDNs as the portfolio, so a connection is needed for the full layout. There is no build step, package installation, or backend.

## What was reused

- The portfolio's HTML document structure, dark Bootstrap theme, and `container p-4` wrapper.
- The same `row align-items-center g-4` layout with `col-md-8` and `col-md-4` columns.
- Responsive `img-fluid rounded` images with alt text and figure captions.
- `navbar.html` and jQuery's `.load()` shared-menu pattern. The short script now lives in `navigation.js` so it is easier to find; it also identifies the current page. Each page includes fallback links.
- The original `styles.css` is copied at the top of this project's stylesheet. New guide-specific styles are clearly separated below it.

The original portfolio is unchanged. This project has no framework migration and no application login form.

## Images

Two original AI-generated illustrations are stored in `images/`. They are illustrative, not Google screenshots, and contain no real passwords, QR codes, or verification codes. Prompts, generation method, and web-export details are recorded in `images/README.md`.

## Research sources

- [NIST — Multi-Factor Authentication](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/multi-factor-authentication)
- [FTC — Use Two-Factor Authentication To Protect Your Accounts](https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts)
- [Google — Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839?hl=en)
- Additional recovery reference: [Google — Sign in with backup codes](https://support.google.com/accounts/answer/1187538?hl=en)

Setup labels and research links were checked October 19, 2026. Recheck the official pages if the service's menus change.

## Before class submission

Developer checks completed for this draft: all local pages/assets returned HTTP 200, internal file/fragment references resolved, both images loaded, the shared menu/current-page indicator worked, the skip link moved focus to main content, and the practice answer opened with Enter. Layout checks at 320px, 390px, and the default desktop viewport found no whole-page horizontal overflow. The method table can scroll separately with the keyboard. No browser warning/error logs appeared during these checks. The original portfolio files still match their pre-build hashes. These checks do not replace audience feedback or a full accessibility audit.

- Review all four pages on desktop and a narrow phone-sized screen.
- Check the menu, source links, keyboard focus, and practice-answer reveal.
- Ask at least two intended readers to try the draft; do not collect their account details.
- Record their actual feedback and make at least one feedback-based revision.
- Commit and push the reviewed files, then verify the hosted website if publishing it.

## Privacy

Do not commit passwords, verification codes, backup codes, account recovery details, or screenshots containing personal information. Any demonstration should use clearly labeled examples with sensitive details removed.
