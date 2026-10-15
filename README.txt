5th Year Maths - website guide
==============================

This is a simple website you edit by changing plain text files. There is no code to write.

WHAT IS IN THIS FOLDER
index.html, style.css, app.js   The website itself. Please leave these alone.
config.js                       The site title and main colour. Safe to edit.
lessons.txt                     Your lessons. This is the file you edit every day.
tests.txt                       Your tests (Tests tab).
sites.txt, pastquestions.txt, hints.txt   Your Revision tab: useful sites, past questions and study hints.
photos/                         Your board photos go in this folder.
notes/                          Guided notes PDFs that you link from a lesson go in this folder.
README.txt                      This guide.

PART 1 - Put it online (once, about 20 minutes)
1. Go to github.com and create a free account.
2. Click the + at the top right, then New repository. Give it a short name such as maths, choose Public, and click Create repository.
3. On the next page, click the link that says "uploading an existing file".
4. Open this folder on your computer. Select everything inside it, including the photos folder, and drag it onto the page. Wait for the upload to finish, then click Commit changes.
5. Click Settings, then Pages in the left-hand menu. Under "Build and deployment", set Source to "Deploy from a branch". Choose the branch main and the folder / (root), then click Save.
6. Wait a minute or two, then refresh the Pages screen. The address of your site appears at the top. It will look like https://yourusername.github.io/maths/
7. Open that address on your phone to check it, then give it to your students.

Note: free GitHub sites are public. Anyone with the address can see them. That is fine for class notes, but never put student names or marks on the site.

PART 2 - Where your files go
Photos and guided notes live on GitHub, in this site. Homework and solutions stay on Google Drive, so you decide when students can see them.

A. Board photos (on GitHub, from your Mac)
1. Select the photos in Finder. Right-click, choose Quick Actions, then Convert Image.
2. Set Format to JPEG and Image Size to Medium (or Small if you want them even lighter), then click Convert. This also fixes iPhone photos, which are HEIC files. You now have lighter copies next to the originals.
3. Rename them with the date and no spaces, for example 2026-10-08-1.jpg and 2026-10-08-2.jpg.
4. On GitHub, open the photos folder, click Add file, then Upload files, drag the photos in and click Commit changes.
5. On the lesson, write the names on the photos line: photos: 2026-10-08-1.jpg, 2026-10-08-2.jpg
Aim for under 1 MB per photo. A few hundred KB is plenty for a board.

B. Guided notes (on GitHub)
1. Give the PDF a short name with no spaces, such as chapter-7.pdf.
2. Open the notes folder, click Add file, then Upload files, drag the PDF in and click Commit changes.
3. In the lesson in lessons.txt, add: notes: Guided notes, chapter 7 | chapter-7.pdf
The lesson then shows a Guided notes button.

C. Homework, solutions, tests (on Google Drive)
Set up once:
1. In Drive, make a folder such as Maths Homework.
2. Right-click it, choose Share, and under General access choose Anyone with the link, with the role Viewer. Click Done. Files inside should then be viewable by anyone with their link.
Each time:
1. Upload the file to that folder.
2. Right-click the file, choose Share, then Copy link.
3. Paste the whole link on the homework or solutions line of lessons.txt. Paste a solutions link only when you are ready for students to see it.

Things to check:
- Names must match exactly, including capital letters and the ending. 2026-10-08-1.JPG is not the same as 2026-10-08-1.jpg.
- Everything in the photos and notes folders is public, and so is its history on GitHub. Only put things there that you are happy for anyone to see, and never solutions you want to hold back.
- GitHub sites work best under about 1 GB. At roughly 0.4 MB a photo, three photos a lesson for 180 lessons is about 220 MB, which is fine.
- Photos can also be Google Drive links, if you ever want that. Each photo needs its own link, and its sharing must be Anyone with the link.
- Do not put student names or marks in anything you share this way.

PART 3 - Add a lesson (every day, 3 to 5 minutes)
1. Upload any photos or notes (Part 2), and copy the Drive links for homework and solutions.
2. On the main page of your repository, click lessons.txt, then the pencil icon to edit it.
3. Copy a whole lesson, from its date line to its last line, and paste it underneath. Change the date, title, links and photo names.
4. Click Commit changes, then Commit again. The site updates within about a minute.


LESSON LINES (lessons.txt)
date        Required. Written 2026-10-08.
title       Required. The name of the lesson.
topic       Optional. A short tag shown under the lesson title, such as Algebra.
summary     Optional. A sentence or two on what you did in class. Repeat the line for a second paragraph.
homework    Today's homework (shown last on the lesson). Write: what to do | Drive link
photos      Board photo file names, separated by commas, like 2026-10-08-1.jpg
solutions   Drive link to last night's homework solutions. Students see last night's homework (taken from the previous lesson's homework line) with a Solutions button.
video       Write: title | YouTube link. It plays on the page. Use up to 3 video lines per lesson.
exitquiz    Optional. Write: label | isaacscience.org link (or just the link). Shows an Exit quiz button. Leave it out and nothing shows.
notes       Optional. Write: description | chapter-7.pdf. Adds a Guided notes button.

USEFUL EXTRAS
- Send a student straight to one entry by adding its date to the address, for example
  https://yourusername.github.io/maths/#lessons/2026-10-08
- The newest lesson is marked "new" automatically.
- Only the latest 8 entries show at first. Students tap "Show earlier" to see more, so the page stays short.
- To change the site title, intro or main blue, open config.js and edit the words.

IF SOMETHING LOOKS WRONG
- A red note at the bottom of a page means an entry was skipped. Check it has a title and a date written like 2026-10-08.
- A photo that shows "Photo not uploaded yet" means the file name does not match, or the photo is not in the photos folder yet.
- A video that shows only a link needs a full YouTube address, such as https://www.youtube.com/watch?v=XXXXXXXXXXX or https://youtu.be/XXXXXXXXXXX
- If the site does not change after you commit, wait a minute and refresh. If it still has not changed, check the Actions tab on GitHub for a green tick.
- Made a mistake? On the file, click History, then pick an earlier version to copy back.

TEST LINES (tests.txt)
date        Required. The day of the test, written 2026-10-14. Newest shows first.
title       Required. The name of the test or quiz.
topic       Optional. A small tag, such as Algebra.
test        Drive link to the test. You can name the button: Paper 1 | link
solutions   Drive link to the solutions. Leave it out until you want students to see them. The page says "Solutions coming soon."
about       Optional. One line describing the test.


REVISION TAB (sites.txt, pastquestions.txt, hints.txt)
The Revision tab has three sections. Each has its own text file, and each works the same way as lessons.txt: copy an entry, paste it underneath and change the words.
sites.txt           Useful websites. Lines: date, title, topic (the heading), about, link: Visit site | web address
pastquestions.txt   Past questions. Lines: date, title, topic, about, link: Questions | Drive link, link: Solutions | Drive link, video
hints.txt           Study hints. Lines: date, title, topic (the heading), about, explain (repeat for more paragraphs), example
date only sets the order within a topic. It is not shown.


CLASS COLOURS
Each class site can have its own colour, so you can tell them apart at a glance.
Open config.js and change the theme line, for example:   theme: "green",
Choices: blue, green, crimson, purple, teal, orange.
The graph paper, headings, dates, buttons and the stripe across the top all change. Dark mode matches too.
To make a new class site, copy a whole site folder, make a new GitHub repository for it, change the title, intro and theme in config.js, and empty lessons.txt.
