import DS from 'ember-data';

var Answer = DS.Model.extend({
  title: DS.attr('string'),
  question: DS.belongsTo('question'),
  correct: DS.attr('boolean'),
  selected: DS.attr('boolean', {defaultValue: false}),
  selection_count: DS.attr('number', {defaultValue: 0}),
  selection_percentage: DS.attr('number', {defaultValue: 0}),

  reset: function() {
    this.set('selection_count', 0);
    this.set('selection_percentage', 0);
    this.set('selected', false);
  },
});

Answer.reopenClass({
  FIXTURES: [
    // Question: Which order of magnitude fits best for describing how many Internet users there are today?
    { id: 1, question_id: 1, title: 'millions', correct: false },
    { id: 2, question_id: 1, title: 'hundred of millions', correct: false },
    { id: 3, question_id: 1, title: 'billions', correct: true },
    { id: 4, question_id: 1, title: 'hundred of billions', correct: false },

    // Question: Which layer of the TCP/IP stack performs this task: Providing logical addresses for communication peers
    { id: 5, question_id: 2, title: 'Hardware layer', correct: false },
    { id: 6, question_id: 2, title: 'Internet layer', correct: true },
    { id: 7, question_id: 2, title: 'Link layer', correct: false },
    { id: 8, question_id: 2, title: 'Transport layer', correct: false },

    // Question: Which of the following measure increases the security of a web browser?
    { id: 9, question_id: 3, title: 'Sandboxing', correct: true },
    { id: 10, question_id: 3, title: 'Skydiving', correct: false },
    { id: 11, question_id: 3, title: 'Web Surfing', correct: false },
    { id: 12, question_id: 3, title: 'Cross-Site Scripting', correct: false },

    // Question: Order the following network classifications in increasing size.
    { id: 13, question_id: 4, title: 'LAN, PAN, WAN, MAN, Internet', correct: false },
    { id: 14, question_id: 4, title: 'MAN, PAN, LAN, Internet, WAN', correct: false },
    { id: 15, question_id: 4, title: 'LAN, MAN, PAN, WAN, Internet', correct: false },
    { id: 16, question_id: 4, title: 'PAN, LAN, MAN, WAN, Internet', correct: true },

    // Question: Which of the following configuration options  for WLANs make them (adequately) secure?
    { id: 17, question_id: 5, title: 'MAC addressfilter', correct: false },
    { id: 18, question_id: 5, title: 'WEP encryption', correct: false },
    { id: 19, question_id: 5, title: 'Hiding ESSID', correct: false },
    { id: 20, question_id: 5, title: 'WPA2 encryption ', correct: true },

    // What is the output of the method "range(10)" in the programming language python?
    { id: 21, question_id: 6, title: '1,2,3,4,5,6,6,7,9', correct: false },
    { id: 22, question_id: 6, title: '0,1,2,3,4,5,6,7,8,9', correct: true },
    { id: 23, question_id: 6, title: '1,2,3,4,5,6,7,8,9,10', correct: false },
    { id: 24, question_id: 6, title: '0,1,2,3,4,5,6,7,8,9,10 ', correct: false },

    // Punchcards were the early predecessors of enterprise data management systems. What basic operations were already supported by punchcards?
    { id: 25, question_id: 7, title: 'open, solve, close', correct: false },
    { id: 26, question_id: 7, title: 'extract, transform, load', correct: false },
    { id: 27, question_id: 7, title: 'delete, update, drop', correct: false },
    { id: 28, question_id: 7, title: 'sort, filter, merge, aggregate', correct: true },

    // Translate the information "John likes football." into RDF and match the parts to subject, property, and object.
    { id: 29, question_id: 8, title: 'Subject = football, Property = likes, Object = John', correct: false },
    { id: 30, question_id: 8, title: 'Subject = John, Property = likes, Object = football', correct: true },
    { id: 31, question_id: 8, title: 'Subject = John, Property = football, Object = likes', correct: false },
    { id: 32, question_id: 8, title: 'Subject = likes, Property = football, Object = John', correct: false },

    // In semantic web technologies a formula is satisfiable if ...
    { id: 33, question_id: 9, title: 'all interpretations are true.', correct: false },
    { id: 34, question_id: 9, title: 'no interpretation is true.', correct: false },
    { id: 35, question_id: 9, title: 'some interpretations are true.', correct: true },
    { id: 36, question_id: 9, title: 'not all interpretations are true.', correct: false },

    // What describes a problem of the traditional WWW?
    { id: 37, question_id: 10, title: 'unclear syntax', correct: false },
    { id: 38, question_id: 10, title: 'adjustable context', correct: false },
    { id: 39, question_id: 10, title: 'authoritative semantics', correct: false },
    { id: 40, question_id: 10, title: 'lacking personalization', correct: true },

    // { id: 11, quiz_id: 2, title: 'What is the internet?', answers: [41, 42, 43, 44] },
    { id: 41, question_id: 11, title: 'World Wide Web', correct: false },
    { id: 42, question_id: 11, title: 'Computers that are all linked together in a network', correct: true },
    { id: 43, question_id: 11, title: 'Facebook and WhatsApp', correct: false },
    { id: 44, question_id: 11, title: 'All of the above', correct: false },

    // { id: 12, quiz_id: 2, title: 'Who is Inventor of the WWW, the World Wide Web?', answers: [45, 46, 47, 48] },
    { id: 45, question_id: 12, title: 'Bill Gates and Steve Ballmer', correct: false },
    { id: 46, question_id: 12, title: 'Steve Jobs, Steve Wozniak and Tim Cook', correct: false },
    { id: 47, question_id: 12, title: 'Tim Berners-Lee, Larry Roberts and Vint Cerf', correct: true },
    { id: 48, question_id: 12, title: 'Larry Page, Sergey Brin and Eric Schmidt', correct: false },

    // { id: 13, quiz_id: 2, title: 'What is a Browser?', answers: [49, 50, 51, 52] },
    { id: 49, question_id: 13, title: 'An HTLM system', correct: false },
    { id: 50, question_id: 13, title: 'A Server', correct: false },
    { id: 51, question_id: 13, title: 'A software program that enables you to view www documents', correct: true },
    { id: 52, question_id: 13, title: 'All', correct: false },

    // { id: 14, quiz_id: 2, title: 'Which of the following is NOT a browser?', answers: [53, 54, 55, 56] },
    { id: 53, question_id: 14, title: 'Chrome', correct: false },
    { id: 54, question_id: 14, title: 'Internet Experiencer', correct: true },
    { id: 55, question_id: 14, title: 'Firefox', correct: false },
    { id: 56, question_id: 14, title: 'Opera', correct: false },

    // { id: 15, quiz_id: 2, title: 'Which of the following is the oldest computer company?', answers: [57, 58, 59, 60] },
    { id: 57, question_id: 15, title: 'Google', correct: false },
    { id: 58, question_id: 15, title: 'Yahoo', correct: false },
    { id: 59, question_id: 15, title: 'Facebook', correct: false },
    { id: 60, question_id: 15, title: 'Microsoft', correct: true },

    // { id: 16, quiz_id: 2, title: 'What is an URL?', answers: [61, 62, 63, 64] },
    { id: 61, question_id: 16, title: 'Uniform Resource Locator', correct: true },
    { id: 62, question_id: 16, title: 'Universal Resource Language', correct: false },
    { id: 63, question_id: 16, title: 'Universe Restful Location', correct: false },
    { id: 64, question_id: 16, title: 'University Related Langauge ', correct: false },

    { id: 111, question_id: 21, title: 'HTML Programmier Internat', correct: false },
    { id: 112, question_id: 21, title: 'Hasso Plattner Institut', correct: true },
    { id: 113, question_id: 21, title: 'Hans Peters Imkerschule', correct: false },
    { id: 114, question_id: 21, title: 'Hasso Plattner International', correct: false },

    // { id: 22, relativeId: 2, quiz_id: 3, title: 'Welchen Studiengang kann man am HPI studieren?', answers: [141, 142, 143, 144] },
    { id: 141, question_id: 22, title: 'Medieninformatik', correct: false },
    { id: 142, question_id: 22, title: 'IT Special Force Engineering', correct: false },
    { id: 143, question_id: 22, title: 'Wirtschaftsinformatik', correct: false },
    { id: 144, question_id: 22, title: 'IT-Systems Engineering', correct: true },

    { id: 101, question_id: 23, title: 'Der Ausruf einer Kuh', correct: false },
    { id: 102, question_id: 23, title: 'Kostenlose Online Kurse', correct: true },
    { id: 103, question_id: 23, title: 'Ein Berliner Fussballverein', correct: false },
    { id: 104, question_id: 23, title: 'Eine Hauptspeicherdatenbank', correct: false },

    { id: 121, question_id: 24, title: 'Billiard', correct: false },
    { id: 122, question_id: 24, title: 'Pogo Stab Hüpfen', correct: false },
    { id: 123, question_id: 24, title: 'Dart', correct: false },
    { id: 124, question_id: 24, title: 'Fussball', correct: true },

    { id: 131, question_id: 25, title: 'Tropfende Wasserhähne', correct: false },
    { id: 132, question_id: 25, title: 'Im Netz kursierende Identitätsdaten', correct: true },
    { id: 133, question_id: 25, title: 'Festplatten mit Datenverlust', correct: false },
    { id: 134, question_id: 25, title: 'Verblassende Personalausweise', correct: false },

    // { id: 26, relativeId: 6, quiz_id: 3, title: 'Wfür steht Design Thinking?', answers: [151, 152, 153, 154] },
    { id: 151, question_id: 26, title: 'Einen Studentenklub am HPI, der sich stets neue Designs ausdenkt', correct: false },
    { id: 152, question_id: 26, title: 'Ein Konzept zum intensiveren Nachdenken', correct: false },
    { id: 153, question_id: 26, title: 'Eine Methode die kollaborative Kreativität fördert und Probleme nutzerzentriert löst', correct: true },
    { id: 154, question_id: 26, title: 'Ein neues Forschungsgebiet über Designer die zu viel denken', correct: false },

    { id: 161, question_id: 27, title: '8', correct: false },
    { id: 162, question_id: 27, title: '9', correct: false },
    { id: 163, question_id: 27, title: '10', correct: true },
    { id: 164, question_id: 27, title: '11', correct: false },

    { id: 171, question_id: 28, title: 'IBM', correct: false },
    { id: 172, question_id: 28, title: 'SAP', correct: true },
    { id: 173, question_id: 28, title: 'SEP', correct: false },
    { id: 174, question_id: 28, title: 'Google', correct: false },
  ]
});

export default Answer;
