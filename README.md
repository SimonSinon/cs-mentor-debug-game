# 🐛 Code Quest: The Buggy Quiz

Welcome, mentee! This tiny website is **broken on purpose**. Your mission, in the next few minutes, is to:

1. **Fix the bugs** so the quiz actually works.
2. **Make it pretty** — the styling is intentionally hideous. Use GitHub Copilot, Claude, ChatGPT, or any AI tool to give it a proper glow-up.
3. **Use GitHub like a real engineer** — branch, commit, push, open a Pull Request.

---

## 🚀 Setup (2 minutes)

```bash
# 1. Clone the repo
git clone <repo-url>
cd BuggyStuff

# 2. Open index.html in your browser
#    (double-click the file, or use VS Code's Live Server extension)

# 3. Create your own branch so you don't fight your teammates
git checkout -b fix/<your-name>
```

---

## 🐞 The Game

### Round 1 — Find & Fix the Bugs

Open the site. You'll notice things are... not working. There are bugs hiding in:

- `index.html` (typos, malformed tags, broken references)
- `styles.css` (syntax mistakes, wrong selectors, stuff that shouldn't be there)
- `script.js` (logic bugs, off-by-one errors, classic `=` vs `===` mistakes, DOM-timing bugs)

> 💡 **Tip:** Open your browser's **DevTools → Console** (`Cmd+Option+I` on Mac, `F12` on Windows). The errors will tell you a *lot*.

> 💡 **Copilot tip:** Highlight a buggy block of code, press `Cmd+I` (Inline Chat), and ask *"What's wrong with this code?"* Don't just accept the fix blindly — read it and learn from it.

There are **at least 8 bugs**. First mentee to a fully working quiz wins Round 1.

### Round 2 — Make It Pretty

The current design looks like a 1998 GeoCities page. Use AI tools to redesign it:

Try prompts like:
- *"Restyle this CSS to look modern and minimal, like a Claude or Linear app."*
- *"Add smooth transitions when answers are selected."*
- *"Make this responsive on mobile."*

Round 2 winner = whoever's site looks the best when we do show-and-tell at the end.

---

## 🌳 GitHub Workflow Cheatsheet

This is the workflow real teams use every day. Practice it now!

```bash
# See what you changed
git status
git diff

# Stage and commit your work
git add .
git commit -m "fix: closing tag in leaderboard list"

# Push your branch to GitHub
git push -u origin fix/<your-name>
```

Then on GitHub:

1. Click **"Compare & pull request"**.
2. Write a short description of what you fixed/changed.
3. Request your mentor as a reviewer.
4. Once approved → **Merge**! 🎉

### Useful Git commands

| Command | What it does |
|---|---|
| `git status` | Shows changed/untracked files |
| `git checkout -b <name>` | Creates and switches to a new branch |
| `git switch <name>` | Switches to an existing branch |
| `git log --oneline` | Shows commit history compactly |
| `git pull` | Grabs the latest changes from GitHub |
| `git restore <file>` | Undoes uncommitted changes to a file |

---

## ✅ Submission Checklist

- [ ] Quiz loads without console errors
- [ ] You can select an answer and click "Next"
- [ ] Score is correct at the end
- [ ] "Play Again" button works
- [ ] Site looks noticeably nicer than the original
- [ ] Branch pushed to GitHub
- [ ] Pull Request opened with a clear description

Have fun, and remember: **every senior engineer was once a mentee staring at a broken page wondering why nothing works.** 💪
