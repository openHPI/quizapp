import DS from 'ember-data';

const Question = DS.Model.extend({
  title: DS.attr('string'),
  quiz: DS.belongsTo('quiz'),
  answers: DS.hasMany('answer', {async: true}),
  timer: DS.attr('number', {defaultValue: 20}),
  relativeId: DS.attr('number'),

  reset() {
    this.get('answers').then(answers => {
      answers.forEach(answer => answer.reset());
    });
  },

  updateSelectionCount(questionAnswers) {
    if (questionAnswers === null) {
      return;
    }

    const numParticipants = this.get('quiz.participants.length');
    this.get('answers').then(answers => {
      answers.forEach(answer => {
        answer.set('selectionCount', questionAnswers[answer.id]);
        answer.set('selectionPercentage', (questionAnswers[answer.id] / numParticipants) * 100);
      });
    });
  }
});

Question.reopenClass({
  FIXTURES: [
    // Advanced Quiz

    { id: 1, relativeId: 1, quiz_id: 1, title: 'Which order of magnitude fits best for describing how many Internet users there are today?', answers: [1, 2, 3, 4] },
    { id: 2, relativeId: 2, quiz_id: 1, title: 'Which layer of the TCP/IP stack performs this task: Providing logical addresses for communication peers', answers: [5, 6, 7, 8] },
    { id: 3, relativeId: 3, quiz_id: 1, title: 'Which of the following measure increases the security of a web browser?', answers: [9, 10, 11, 12] },
    { id: 4, relativeId: 4, quiz_id: 1, title: 'Order the following network classifications in increasing size.', answers: [13, 14, 15, 16] },
    { id: 5, relativeId: 5, quiz_id: 1, title: 'Which of the following configuration options for WLANs make them (adequately) secure?', answers: [17, 18, 19, 20] },
    { id: 6, relativeId: 6, quiz_id: 1, title: 'What is the output of the method "range(10)" in the programming language python?', answers: [21, 22, 23, 24] },
    { id: 7, relativeId: 7, quiz_id: 1, title: 'Punchcards were the early predecessors of enterprise data management systems. What basic operations were already supported by punchcards?', answers: [25, 26, 27, 28] },
    { id: 8, relativeId: 8, quiz_id: 1, title: 'Translate the information "John likes football." into RDF and match the parts to subject, property, and object.', answers: [29, 30, 31, 32] },
    { id: 9, relativeId: 9, quiz_id: 1, title: 'In semantic web technologies a formula is satisfiable if ...', answers: [33, 34, 35, 36] },
    { id: 10, relativeId: 10, quiz_id: 1, title: 'What describes a problem of the traditional WWW?', answers: [37, 38, 39, 40] },

    // Beginner Quiz
    { id: 11, relativeId: 1, quiz_id: 2, title: 'What is the internet?', answers: [41, 42, 43, 44],  },
    { id: 12, relativeId: 2, quiz_id: 2, title: 'Who are the inventors of the internet?', answers: [45, 46, 47, 48] },
    { id: 13, relativeId: 3, quiz_id: 2, title: 'What is a browser?', answers: [49, 50, 51, 52] },
    { id: 14, relativeId: 4, quiz_id: 2, title: 'Which of the following is NOT a browser?', answers: [53, 54, 55, 56] },
    { id: 15, relativeId: 5, quiz_id: 2, title: 'Which of the following is the oldest computer company?', answers: [57, 58, 59, 60] },
    { id: 16, relativeId: 6, quiz_id: 2, title: 'What is an URL?', answers: [61, 62, 63, 64] },

    // HPI Cebit Quiz
    { id: 21, relativeId: 1, quiz_id: 3, title: 'HPI steht für?', answers: [111, 112, 113, 114] },
    { id: 22, relativeId: 2, quiz_id: 3, title: 'Welchen Studiengang kann man am HPI studieren?', answers: [141, 142, 143, 144] },
    { id: 23, relativeId: 3, quiz_id: 3, title: 'Was ist ein MOOC?', answers: [101, 102, 103, 104] },
    { id: 24, relativeId: 4, quiz_id: 3, title: 'Welche Sportart analysiert das Team am HPI Stand?', answers: [121, 122, 123, 124] },
    { id: 25, relativeId: 5, quiz_id: 3, title: 'Was findet der Identity Leak Checker?', answers: [131, 132, 133, 134] },
    { id: 26, relativeId: 6, quiz_id: 3, title: 'Wofür steht Design Thinking?', answers: [151, 152, 153, 154] },
    { id: 27, relativeId: 7, quiz_id: 3, title: 'Wieviele Fachgebiete gibt es aktuell am HPI?', answers: [161, 162, 163, 164] },
    { id: 28, relativeId: 8, quiz_id: 3, title: 'Welche bekannte Firma hat Hasso Plattner 1972 gegründet?', answers: [171, 172, 173, 174] },

    // 2017 - Quiz 1
    { id: 101, relativeId: 1, quiz_id: 100, title: 'In welcher Größenordnung liegt die Zahl der Internetnutzer?', answers: [1011, 1012, 1013, 1014] },
    { id: 102, relativeId: 2, quiz_id: 100, title: 'Das Internet...', answers: [1021, 1022, 1023, 1024] },
    { id: 103, relativeId: 3, quiz_id: 100, title: 'Das Internet ist ein', answers: [1031, 1032, 1033, 1034] },
    { id: 104, relativeId: 4, quiz_id: 100, title: 'Welche Aussage zum grundlegenden Client-Server-Prinzip ist richtig?', answers: [1041, 1042, 1043, 1044] },
    { id: 105, relativeId: 5, quiz_id: 100, title: 'Was ist notwendig, damit in einem Rechnernetz Nachrichten möglichst fair zwischen den beteiligten Rechnern ausgetauscht werden können?', answers: [1051, 1052, 1053, 1054] },
    { id: 106, relativeId: 6, quiz_id: 100, title: 'Bei einem Sicherheitsverbund von Rechnernetzen', answers: [1061, 1062, 1063, 1064] },
    { id: 107, relativeId: 7, quiz_id: 100, title: 'Was wäre ein gutes Passwort?', answers: [1071, 1072, 1073, 1074] },
    { id: 108, relativeId: 8, quiz_id: 100, title: 'Welches der folgenden Passwörter ist ein Beispiel für ein starkes Passwort?', answers: [1081, 1082, 1083, 1084] },
    { id: 109, relativeId: 9, quiz_id: 100, title: 'Welche der folgenden Aussagen über Social Media ist korrekt?', answers: [1091, 1092, 1093, 1094] },
    { id: 110, relativeId: 10, quiz_id: 100, title: 'Welche der folgenden Internetanwendungen ist eine Social Media-Plattform?', answers: [1101, 1102, 1103, 1104] },

    // 2017 - Quiz 2
    { id: 201, relativeId: 1, quiz_id: 200, title: 'Welche Netzwerk-Topologie besitzen WLANs?', answers: [2011, 2012, 2013, 2014] },
    { id: 202, relativeId: 2, quiz_id: 200, title: 'Welches der folgenden Protokolle ist ein Email-Protokoll?', answers: [2021, 2022, 2023, 2024] },
    { id: 203, relativeId: 3, quiz_id: 200, title: 'Was ist Bestandteile einer HTTP-Nachricht?', answers: [2031, 2032, 2033, 2034] },
    { id: 204, relativeId: 4, quiz_id: 200, title: 'Was ist ein Spoofing-Angriff?', answers: [2041, 2042, 2043, 2044] },
    { id: 205, relativeId: 5, quiz_id: 200, title: 'Wozu werden Cookies verwendet?', answers: [2051, 2052, 2053, 2054] },
    { id: 206, relativeId: 6, quiz_id: 200, title: 'Eine Webseite kann auf vielfältige Weise angefordert werden. Welche Möglichkeit gibt es?', answers: [2061, 2062, 2063, 2064] },
    { id: 207, relativeId: 7, quiz_id: 200, title: 'Welche der folgenden Aussagen über Responsive Webdesign stimmt?', answers: [2071, 2072, 2073, 2074] },
    { id: 208, relativeId: 8, quiz_id: 200, title: 'Was ist ein typischer Anwendungsfall für Wikis neben einer Online-Enzyklopädie (z.B. Wikipedia)?', answers: [2081, 2082, 2083, 2084] },
    { id: 209, relativeId: 9, quiz_id: 200, title: 'Was bedeutet es, dass eine Webseite dynamisch ist?', answers: [2091, 2092, 2093, 2094] },
    { id: 210, relativeId: 10, quiz_id: 200, title: 'Welche Aussage zum Phishing ist korrekt?', answers: [2101, 2102, 2103, 2104] },
  ]
});

export default Question;
