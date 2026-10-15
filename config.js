/* Site settings. Safe to edit: change the words between the quote marks. */
window.SITE = {
  title: "5th Year Maths",
  intro: "Board photos, homework, solutions, tests and revision.",
  theme: "blue",   /* colour of this class: blue, green, crimson, purple, teal or orange */
  tabs: [
    { id: "lessons", label: "Lessons", file: "lessons.txt", type: "lesson", noun: "lessons" },
    { id: "tests",   label: "Tests",   file: "tests.txt",   type: "tests", what: "test", noun: "tests" },
    { id: "revision", label: "Revision", type: "study", sections: [
        { id: "sites", label: "Useful sites",   file: "sites.txt",         view: "cards", noun: "useful sites" },
        { id: "past",  label: "Past questions", file: "pastquestions.txt", linksHeading: "Questions and solutions", noun: "past questions" },
        { id: "hints", label: "Study hints",    file: "hints.txt",         ideaHeading: "The hint", noun: "study hints" }
    ] }
  ]
};
