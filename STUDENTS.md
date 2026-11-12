# Build your own country briefing with an AI agent

This repo is an interactive teaching kit for the course. It is also a **template**: you can hand it to your own AI assistant (Instinct, Claude Code, Codex, Cursor, or any agent that can edit files and use git) and have it build the same kind of briefing for your assignment country.

This file is written to be read by you AND pasted to your agent.

---

## 1. What you are adapting

| Path | What it is |
|---|---|
| `index.html` | Landing page: course intro, links to every briefing |
| `assets/style.css` | Shared design system (colors, cards, flip cards, scenario blocks) |
| `assets/engine.js` | Shared interactions (reveal-on-scroll, tabs, flip cards, scenario feedback) |
| `colombia/`, `czech-republic/`, `nigeria/`, `sri-lanka/` | One folder per country, each an `index.html` briefing |
| `ai-tools/` | The AI workflow session (how this kit was made) |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

Everything is plain HTML/CSS/JS. No build step, no framework, no dependencies. If it opens in a browser from disk, it works on GitHub Pages.

## 2. The workflow to give your agent

Copy this brief to your agent and fill in the brackets:

> Fork or copy https://github.com/SoundGuyAI/RuniLectures and build me a briefing for [COUNTRY] following STUDENTS.md. Work on a new branch, open a pull request, and stop there - I review before anything merges or publishes. Research the country's business culture from institutional sources first (trade.gov country commercial guide, my country's export agency, the destination's chambers of commerce, cross-cultural training firms). Every claim on a slide gets a numbered source marker and the sources listed on a Sources slide with URLs. Keep the site's design system and interactions. Show me screenshots on desktop and phone before you commit.

Then review what it produces. The loop that built this kit:

1. **Research before writing.** No page text before the sources exist.
2. **Draft one page, not five.** Approve the style on one, then batch.
3. **Inspect the actual pixels.** Ask your agent for screenshots at desktop AND phone width. A page that "should work" usually doesn't.
4. **Review the words.** Read the claims. Anything absolute about a whole nation ("Colombians are...") goes back for a rewrite.
5. **You own the merge.** Agents propose, humans merge and publish.

## 3. Content rules that keep you honest

- **Cite per claim.** `[1]` markers on the slide, full URLs on the Sources slide. "Sources: the internet" is not a source.
- **Tendencies, not verdicts.** Write "meetings often start with conversation" with a source, never "Colombians are indirect." Variation by region, sector, company and person is real; say so.
- **Scenarios are scenarios.** If a dialogue on a slide is invented to make a point, label it "illustrative scenario."
- **Ask, check, adapt** is the guardrail, not the lesson. The lesson is the country's specifics: how meetings run, how prices are negotiated, how follow-up actually happens there.
- **Gifts and officials:** describe what the relevant institutions publish about gift policy, and check with the teaching team. Do not state what is legal or provided as fact.
- **Disclose AI use.** This kit models it: every page carries a disclosure and marks AI-generated illustrations as generated, not documentary photos.

## 4. Media

- **Illustrations:** any image generator works. Ask for flat editorial illustration, name real places where it helps (a skyline, a market), keep people generic, and label the result as AI-generated in the page.
- **Narration:** write the script first, get it reviewed, then generate voice with any TTS your agent has. About 200 words reads as roughly 90 seconds. Keep the script practical: what to do, in what order, what to check.
- **Motion video:** a short explainer can be fully programmatic (slides/graphics animated with code and encoded with ffmpeg) or AI-generated. Either way: build one 30-second pilot, review the style, then make the rest. Never batch media before a pilot is approved.

## 5. Slide-style pages

If you want a deck instead of a scrolling page: one bounded slide at a time, next/back buttons, arrow keys, swipe on mobile, a slide counter, and animations that trigger when a slide appears. Respect `prefers-reduced-motion`. Test every slide on a phone: text that fits on your laptop overflows on a 390px screen.

## 6. Testing checklist before you call it done

- [ ] Every link and button clicked, on desktop and on a phone
- [ ] Every slide/screenshot inspected at both sizes
- [ ] Every claim has a source; every source URL opens
- [ ] Sources slide lists real URLs, and generated media is labeled
- [ ] AI-use disclosure present
- [ ] No absolute claims about whole nations
- [ ] Your agent opened a PR; a human reviewed and merged it

## 7. Provenance and privacy

This repo is public. Do not commit private notes, names of real counterparts, or your agent's internal logs. Cite the professor's assignment materials as course materials. What you generate for the assignment is yours to publish; what others generated is theirs - ask before copying classmates' work.

---

*Built as Course Assignment #1 material. Questions about the kit itself: open an issue on the repo.*
