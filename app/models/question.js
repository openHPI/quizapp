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

    { id: 1, relativeId: 1, quiz_id: 1, title: 'What\'s the magnitude for the number of Internet users today?', answers: [1, 2, 3, 4] },
    { id: 2, relativeId: 2, quiz_id: 1, title: 'Which layer of the TCP/IP stack provides logical addresses for communication peers?', answers: [5, 6, 7, 8] },
    { id: 3, relativeId: 3, quiz_id: 1, title: 'How do you increase the security of a web browser?', answers: [9, 10, 11, 12] },
    { id: 4, relativeId: 4, quiz_id: 1, title: 'Order the following networks by increasing size.', answers: [13, 14, 15, 16] },
    { id: 5, relativeId: 5, quiz_id: 1, title: 'What makes a WiFi adequately secure?', answers: [17, 18, 19, 20] },
    { id: 6, relativeId: 6, quiz_id: 1, title: 'What is the output of the method "range(10)" in Python?', answers: [21, 22, 23, 24] },
    { id: 7, relativeId: 7, quiz_id: 1, title: 'What basic operations were already supported by punchcards?', answers: [25, 26, 27, 28] },
    { id: 8, relativeId: 8, quiz_id: 1, title: 'How do you express "John likes football." in RDF?', answers: [29, 30, 31, 32] },
    { id: 9, relativeId: 9, quiz_id: 1, title: 'In Semantic Web technologies a formula is satisfiable if ...', answers: [33, 34, 35, 36] },
    { id: 10, relativeId: 10, quiz_id: 1, title: 'What describes a problem of the traditional WWW?', answers: [37, 38, 39, 40] },

    // Beginner Quiz
    { id: 11, relativeId: 1, quiz_id: 2, title: 'What is the Internet?', answers: [41, 42, 43, 44] },
    { id: 12, relativeId: 2, quiz_id: 2, title: 'Who are the inventors of the Internet?', answers: [45, 46, 47, 48] },
    { id: 13, relativeId: 3, quiz_id: 2, title: 'What is a browser?', answers: [49, 50, 51, 52] },
    { id: 14, relativeId: 4, quiz_id: 2, title: 'Which one is NOT a browser?', answers: [53, 54, 55, 56] },
    { id: 15, relativeId: 5, quiz_id: 2, title: 'Which of these is the oldest computer company?', answers: [57, 58, 59, 60] },
    { id: 16, relativeId: 6, quiz_id: 2, title: 'URL stands for ...', answers: [61, 62, 63, 64] },

    // HPI Cebit Quiz
    { id: 21, relativeId: 1, quiz_id: 3, title: 'HPI steht für ...', answers: [111, 112, 113, 114] },
    { id: 22, relativeId: 2, quiz_id: 3, title: 'Was kann man am HPI studieren?', answers: [141, 142, 143, 144] },
    { id: 23, relativeId: 3, quiz_id: 3, title: 'Was bedeutet MOOC?', answers: [101, 102, 103, 104] },
    //{ id: 24, relativeId: 4, quiz_id: 3, title: 'Welche Sportart analysiert das Team am HPI Stand?', answers: [121, 122, 123, 124] },
    { id: 24, relativeId: 4, quiz_id: 3, title: 'Was ist das Motto des HPI-Cebit-Auftritts?', answers: [121, 122, 123, 124] },
    { id: 25, relativeId: 5, quiz_id: 3, title: 'Was findet der Identity Leak Checker?', answers: [131, 132, 133, 134] },
    { id: 26, relativeId: 6, quiz_id: 3, title: 'Wofür steht Design Thinking?', answers: [151, 152, 153, 154] },
    { id: 27, relativeId: 7, quiz_id: 3, title: 'Wieviele Fachgebiete gibt es aktuell am HPI?', answers: [161, 162, 163, 164] },
    { id: 28, relativeId: 8, quiz_id: 3, title: 'Welche große Firma hat Hasso Plattner gegründet?', answers: [171, 172, 173, 174] },

    // 2017 - Quiz 1
    { id: 101, relativeId: 1, quiz_id: 100, title: 'In welcher Größenordnung liegt die Zahl der Internetnutzer?', answers: [1011, 1012, 1013, 1014] },
    { id: 102, relativeId: 2, quiz_id: 100, title: 'Das Internet ...', answers: [1021, 1022, 1023, 1024] },
    { id: 103, relativeId: 3, quiz_id: 100, title: 'Das Internet ist ein ...', answers: [1031, 1032, 1033, 1034] }, // TODO Ersetzen
    { id: 104, relativeId: 4, quiz_id: 100, title: 'Was stimmt zum Client-Server-Prinzip?', answers: [1041, 1042, 1043, 1044] },
    { id: 105, relativeId: 5, quiz_id: 100, title: 'Wie können Nachrichten in einem Rechnernetz möglichst fair ausgetauscht werden?', answers: [1051, 1052, 1053, 1054] },
    { id: 106, relativeId: 6, quiz_id: 100, title: 'Bei einem Failover-Cluster ...', answers: [1061, 1062, 1063, 1064] },
    { id: 107, relativeId: 7, quiz_id: 100, title: 'Was wäre ein gutes Passwort?', answers: [1071, 1072, 1073, 1074] },
    { id: 108, relativeId: 8, quiz_id: 100, title: 'Welches der folgenden Passwörter ist ein Beispiel für ein starkes Passwort?', answers: [1081, 1082, 1083, 1084] },
    { id: 109, relativeId: 9, quiz_id: 100, title: 'Welche der folgenden Aussagen über Social Media ist korrekt?', answers: [1091, 1092, 1093, 1094] },
    { id: 110, relativeId: 10, quiz_id: 100, title: 'Welche der folgenden Internetanwendungen ist eine Social Media-Plattform?', answers: [1101, 1102, 1103, 1104] },

    // 2017 - Quiz 2
    { id: 201, relativeId: 1, quiz_id: 200, title: 'Welche Netzwerk-Topologie besitzen WLANs?', answers: [2011, 2012, 2013, 2014] },
    { id: 202, relativeId: 2, quiz_id: 200, title: 'Wobei handelt es sich um ein Email-Protokoll?', answers: [2021, 2022, 2023, 2024] },
    { id: 203, relativeId: 3, quiz_id: 200, title: 'Was ist ein Bestandteil einer HTTP-Nachricht?', answers: [2031, 2032, 2033, 2034] },
    { id: 204, relativeId: 4, quiz_id: 200, title: 'Was ist ein Spoofing-Angriff?', answers: [2041, 2042, 2043, 2044] },
    { id: 205, relativeId: 5, quiz_id: 200, title: 'Wozu werden Cookies verwendet?', answers: [2051, 2052, 2053, 2054] },
    { id: 206, relativeId: 6, quiz_id: 200, title: 'Wie kann eine Website angefordert werden?', answers: [2061, 2062, 2063, 2064] },
    { id: 207, relativeId: 7, quiz_id: 200, title: 'Was stimmt zu Responsive Webdesign?', answers: [2071, 2072, 2073, 2074] },
    { id: 208, relativeId: 8, quiz_id: 200, title: 'Wozu benutzt man Wikis (neben einer Online-Enzyklopädie)?', answers: [2081, 2082, 2083, 2084] },
    { id: 209, relativeId: 9, quiz_id: 200, title: 'Was bedeutet es, dass eine Webseite dynamisch ist?', answers: [2091, 2092, 2093, 2094] },
    { id: 210, relativeId: 10, quiz_id: 200, title: 'Welche Aussage zu Phishing ist korrekt?', answers: [2101, 2102, 2103, 2104] },

    // 2017 - SAPPHIRE Quiz 1
    { id: 401, relativeId: 1, quiz_id: 400, title: 'For a column with few distinct values, how can dictionary encoding significantly reduce the required amount of memory without any loss of information?', answers: [4011, 4012, 4013, 4014] },
    { id: 402, relativeId: 2, quiz_id: 400, title: 'Introducing an index...', answers: [4021, 4022, 4023, 4024] },
    { id: 403, relativeId: 3, quiz_id: 400, title: 'What is an inverted index?', answers: [4031, 4032, 4033, 4034] },
    { id: 404, relativeId: 4, quiz_id: 400, title: 'What are aggregate functions?', answers: [4041, 4042, 4043, 4044] },
    { id: 405, relativeId: 5, quiz_id: 400, title: 'Which of the following is an aggregate function?', answers: [4051, 4052, 4053, 4054] },
    { id: 406, relativeId: 6, quiz_id: 400, title: 'Which three hardware resources are usually taken into account by the scheduler in a distributed in-memory database setup?', answers: [4061, 4062, 4063, 4064] },
    { id: 407, relativeId: 7, quiz_id: 400, title: 'Analytical queries typically are...', answers: [4071, 4072, 4073, 4074] },
    { id: 408, relativeId: 8, quiz_id: 400, title: 'Query response times...', answers: [4081, 4082, 4083, 4084] },
    { id: 409, relativeId: 9, quiz_id: 400, title: 'What does the aggregate cache store in the aggregate entries?', answers: [4091, 4092, 4093, 4094] },
    { id: 410, relativeId: 10, quiz_id: 400, title: 'The addition of an attribute in the column store...', answers: [4101, 4102, 4103, 4104] },
    { id: 411, relativeId: 11, quiz_id: 400, title: 'What does the transition to in-memory database technology mean for enterprise applications?', answers: [4111, 4112, 4113, 4114] },

    // 2017 - SAPPHIRE Quiz 2
    { id: 501, relativeId: 1, quiz_id: 500, title: 'At the Hasso Plattner Institute (HPI), Potsdam, you can study...', answers: [5011, 5012, 5013, 5014] },
    { id: 502, relativeId: 2, quiz_id: 500, title: 'The HPI, Potsdam, is known for its School of Design Thinking. Where is the second d.school located?', answers: [5021, 5022, 5023, 5024] },
    { id: 503, relativeId: 3, quiz_id: 500, title: 'Five years ago, HPI started a educational Internet platform which offers free courses for everyone. How is it called?', answers: [5031, 5032, 5033, 5034] },
    { id: 504, relativeId: 4, quiz_id: 500, title: 'What was the first Massive Open Online Course offered on openHPI?', answers: [5041, 5042, 5043, 5044] },
    { id: 505, relativeId: 5, quiz_id: 500, title: 'Which of these courses is NO openHPI course?', answers: [5051, 5052, 5053, 5054] },
    { id: 506, relativeId: 6, quiz_id: 500, title: 'What is the HPI Future SOC Lab?', answers: [5061, 5062, 5063, 5064] },
    { id: 507, relativeId: 7, quiz_id: 500, title: 'The German federal government held its first national IT summit at the HPI in...', answers: [5071, 5072, 5073, 5074] },
    { id: 508, relativeId: 8, quiz_id: 500, title: 'In which of these cities you will NOT find a research school of the HPI?', answers: [5081, 5082, 5083, 5084] },
    { id: 509, relativeId: 9, quiz_id: 500, title: 'Hasso Plattner is not only the founder of the HPI, but he has also made a personal commitment. Which answer is true?', answers: [5091, 5092, 5093, 5094] },
    { id: 510, relativeId: 10, quiz_id: 500, title: 'Prof. Meinel heads the chair for Internet Technologies and Systems. Which of these topics is NOT in the focus of the chair\'s research?', answers: [5101, 5102, 5103, 5104] },
  ]
});

export default Question;
