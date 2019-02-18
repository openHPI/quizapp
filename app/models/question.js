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
    { id: 24, relativeId: 4, quiz_id: 3, title: 'Welcher war der erste Massive Open Online Courses der auf openHPI angeboten wurde?', answers: [121, 122, 123, 124] },
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

    // Schul-Cloud-Quiz
    { id: 301, relativeId: 1, quiz_id: 300, title: 'Was soll die Schul-Cloud leisten?', answers: [3011, 3012, 3013, 3014] },
    { id: 302, relativeId: 2, quiz_id: 300, title: 'Wer entwickelt die Schul-Cloud?', answers: [3021, 3022, 3023, 3024] },
    { id: 303, relativeId: 3, quiz_id: 300, title: 'Nach welchem Datenschutz-Prinzip soll die Schul-Cloud entwickelt werden?', answers: [3031, 3032, 3033, 3034] },
    { id: 304, relativeId: 4, quiz_id: 300, title: 'Welche digitalen Bildungsinhalte können an die Schul-Cloud angebunden werden?', answers: [3041, 3042, 3043, 3044] },
    { id: 305, relativeId: 5, quiz_id: 300, title: 'Was baut das HPI in der aktuellen Phase des Schul-Cloud-Projekts?', answers: [3051, 3052, 3053, 3054] },
    { id: 306, relativeId: 6, quiz_id: 300, title: 'Für welche Fächer kann die Schul-Cloud einen Mehrwert leisten?', answers: [3061, 3062, 3063, 3064] },
    { id: 307, relativeId: 7, quiz_id: 300, title: 'Was umfasst der Begriff "Digital Literacy"?', answers: [3071, 3072, 3073, 3074] },
    { id: 308, relativeId: 8, quiz_id: 300, title: 'Was unterscheidet die Schul-Cloud von bereits bestehenden Lösungen?', answers: [3081, 3082, 3083, 3084] },
    { id: 309, relativeId: 9, quiz_id: 300, title: 'Wer kann die Schul-Cloud im Rahmen der Pilotphase testen?', answers: [3091, 3092, 3093, 3094] },
    { id: 310, relativeId: 10, quiz_id: 300, title: 'Welche Technologie wird in der Schul-Cloud verwendet?', answers: [3101, 3102, 3103, 3104] },
    { id: 311, relativeId: 11, quiz_id: 300, title: 'Aus welchem Bundesland stammt die Landesinitiative, mit der die Schul-Cloud aktuell eine Kooperation schließt?', answers: [3111, 3112, 3113, 3114] },

    // 2017 - SAPPHIRE Quiz 1
    { id: 401, relativeId: 1, quiz_id: 400, timer: 40, title: 'For a column with few distinct values, how can dictionary encoding significantly reduce the required amount of memory without any loss of information?', answers: [4011, 4012, 4013, 4014] },
    { id: 402, relativeId: 2, quiz_id: 400, title: 'Introducing an index...', answers: [4021, 4022, 4023, 4024] },
    { id: 403, relativeId: 3, quiz_id: 400, timer: 30, title: 'What is an inverted index?', answers: [4031, 4032, 4033, 4034] },
    { id: 404, relativeId: 4, quiz_id: 400, timer: 30, title: 'What are aggregate functions?', answers: [4041, 4042, 4043, 4044] },
    { id: 405, relativeId: 5, quiz_id: 400, title: 'Which of the following is an aggregate function?', answers: [4051, 4052, 4053, 4054] },
    { id: 406, relativeId: 6, quiz_id: 400, timer: 30, title: 'Which three hardware resources are usually taken into account by the scheduler in a distributed in-memory database setup?', answers: [4061, 4062, 4063, 4064] },
    { id: 407, relativeId: 7, quiz_id: 400, title: 'Analytical queries typically are...', answers: [4071, 4072, 4073, 4074] },
    { id: 408, relativeId: 8, quiz_id: 400, timer: 30, title: 'Query response times...', answers: [4081, 4082, 4083, 4084] },
    { id: 409, relativeId: 9, quiz_id: 400, timer: 25, title: 'What does the aggregate cache store in the aggregate entries?', answers: [4091, 4092, 4093, 4094] },
    { id: 410, relativeId: 10, quiz_id: 400, timer: 30, title: 'The addition of an attribute in the column store...', answers: [4101, 4102, 4103, 4104] },
    { id: 411, relativeId: 11, quiz_id: 400, timer: 25, title: 'What does the transition to in-memory database technology mean for enterprise applications?', answers: [4111, 4112, 4113, 4114] },

    // 2017 - SAPPHIRE Quiz 2
    { id: 501, relativeId: 1, quiz_id: 500, title: 'At the Hasso Plattner Institute (HPI), Potsdam, you can study...', answers: [5011, 5012, 5013, 5014] },
    { id: 502, relativeId: 2, quiz_id: 500, title: 'The HPI, Potsdam, is known for its School of Design Thinking. Where is the second d.school located?', answers: [5021, 5022, 5023, 5024] },
    { id: 503, relativeId: 3, quiz_id: 500, title: 'Five years ago, HPI started a educational Internet platform which offers free courses for everyone. How is it called?', answers: [5031, 5032, 5033, 5034] },
    { id: 504, relativeId: 4, quiz_id: 500, title: 'What was the first Massive Open Online Course offered on openHPI?', answers: [5041, 5042, 5043, 5044] },
    { id: 505, relativeId: 5, quiz_id: 500, title: 'Which of these courses is NO openHPI course?', answers: [5051, 5052, 5053, 5054] },
    { id: 506, relativeId: 6, quiz_id: 500, title: 'What is the HPI Future SOC Lab?', answers: [5061, 5062, 5063, 5064] },
    { id: 507, relativeId: 7, quiz_id: 500, title: 'The German federal government held its first national IT summit at the HPI in...', answers: [5071, 5072, 5073, 5074] },
    { id: 508, relativeId: 8, quiz_id: 500, title: 'In which of these cities you will NOT find a research school of the HPI?', answers: [5081, 5082, 5083, 5084] },
    { id: 509, relativeId: 9, quiz_id: 500, timer: 30, title: 'Hasso Plattner is not only the founder of the HPI, but he has also made a personal commitment. Which answer is true?', answers: [5091, 5092, 5093, 5094] },
    { id: 510, relativeId: 10, quiz_id: 500, timer: 30, title: 'Prof. Meinel heads the chair for Internet Technologies and Systems. Which of these topics is NOT in the focus of the chair\'s research?', answers: [5101, 5102, 5103, 5104] },

    // 2019 - Didacta
    // Digitale Identitäten
    { id: 19101, relativeId: 1, quiz_id: 201901, title: 'Ein starkes Passwort zeichnet sich u.a. dadurch aus, dass es ...', answers: [191011, 191012, 191013, 191014] },
    { id: 19102, relativeId: 2, quiz_id: 201901, title: 'Wer speichert im zentralen Modell die digitalen Identitäten?', answers: [191021, 191022, 191023, 191024] },
    { id: 19103, relativeId: 3, quiz_id: 201901, title: 'Welcher ist der effizienteste Weg zu überprüfen, ob ihre Identitätsdaten gehackt wurden und im Internet kursieren?',
      answers: [191031, 191032, 191033, 191034] },
    { id: 19104, relativeId: 4, quiz_id: 201901, title: 'Worum geht es beim "Social Engineering"?', answers: [191041, 191042, 191043, 191044] },
    { id: 19105, relativeId: 5, quiz_id: 201901, title: 'Die Authentifizierung mittels Passwort bindet ...', answers: [191051, 191052, 191053, 191054] },
    { id: 19106, relativeId: 6, quiz_id: 201901, title: 'Worauf basiert die Online-Ausweisfunktion des neuen Personalausweises?', answers: [191061, 191062, 191063, 191064] },
    { id: 19107, relativeId: 7, quiz_id: 201901, title: 'Was ist der Nachteil von Authentisierung durch Wissen?', answers: [191071, 191072, 191073, 191074] },

    // Mikrocontroller
    { id: 19201, relativeId: 1, quiz_id: 201902, title: 'Aus welchen zwei Teilen besteht ein Arduino-Programm immer?', answers: [192011, 192012, 192013, 192014] },
    { id: 19202, relativeId: 2, quiz_id: 201902, title: 'Woran erkennt man den Plus-Pol einer LED?', answers: [192021, 192022, 192023, 192024] },
    { id: 19203, relativeId: 3, quiz_id: 201902, title: 'Über welche Funktionalität verfügt der esp32-Mikrocontroller nicht?', answers: [192031, 192032, 192033, 192034] },
    { id: 19204, relativeId: 4, quiz_id: 201902, title: 'Womit werden Analogpins vom Microcontrollern meist gekennzeichnet?', answers: [192041, 192042, 192043, 192044] },
    { id: 19205, relativeId: 5, quiz_id: 201902, title: 'Mit welchem Buchstaben wird der Widerstand gekennzeichnet?', answers: [192051, 192052, 192053, 192054] },
    { id: 19206, relativeId: 6, quiz_id: 201902, title: 'Was bewirkt die Codezeile \"magic >> 1;\"?', answers: [192061, 192062, 192063, 192064] },
    { id: 19207, relativeId: 7, quiz_id: 201902, title: 'Wofür steht PWM?', answers: [192071, 192072, 192073, 192074] },

    // Blockchain
    { id: 19301, relativeId: 1, quiz_id: 201903, title: 'Welche dieser Charakteristiken können Probleme zentralisierter Anwendungen sein?', answers: [193011, 193012, 193013, 193014] },
    { id: 19302, relativeId: 1, quiz_id: 201903, title: 'Welche Art von Skalierung wird durch verteilte Systeme ermöglicht?', answers: [193021, 193022, 193023, 193024] },
    { id: 19303, relativeId: 1, quiz_id: 201903, title: 'Welche dieser Eigenschaften sind Nachteile von strenger Konsistenz?', answers: [193031, 193032, 193033, 193034] },
    { id: 19304, relativeId: 1, quiz_id: 201903, title: 'Ein verteiltes Backupsystem zur Sicherung ihrer Handy-Fotos wird designed, welches Konsistenz Modell sollte verwendet werden?', answers: [193041, 193042, 193043, 193044] },
    { id: 19305, relativeId: 1, quiz_id: 201903, title: 'Welche Art von Fehler ist am schwersten zu tolerieren?', answers: [193051, 193052, 193053, 193054] },
    { id: 19306, relativeId: 1, quiz_id: 201903, title: 'Bei einem Sybil Angriff wird eine Schwachstelle in welchem Teil des Systems ausgenutzt?', answers: [193061, 193062, 193063, 193064] },
    { id: 19307, relativeId: 1, quiz_id: 201903, title: 'Was sind Kernideen des Bitcoin-Systems?', answers: [193071, 193072, 193073, 193074] },
    { id: 19308, relativeId: 1, quiz_id: 201903, title: 'Wie werden Daten im Bitcoin-System verbreitet?', answers: [193081, 193082, 193083, 193084] },
    { id: 19309, relativeId: 1, quiz_id: 201903, title: 'Welcher Blockchain-Typ liegt vor, wenn jeder Nutzer eine Blockchain fortschreiben kann?', answers: [193091, 193092, 193093, 193094] },

    // Schul-Cloud Allgemeines zum Projekt
    { id: 19501, relativeId: 1, quiz_id: 201905, title: 'Was soll die HPI Schul-Cloud leisten?', answers: [195011, 195012, 195013, 195014] },
    { id: 19502, relativeId: 2, quiz_id: 201905, title: 'Wer entwickelt die HPI Schul-Cloud?', answers: [195021, 195022, 195023, 195024] },
    { id: 19503, relativeId: 3, quiz_id: 201905, title: 'Nach welchem Datenschutz-Prinzip soll die HPI Schul-Cloud entwickelt werden?', answers: [195031, 195032, 195033, 195034] },
    { id: 19504, relativeId: 4, quiz_id: 201905, title: 'Welche digitalen Bildungsinhalte können an die HPI Schul-Cloud angebunden werden?', answers: [195041, 195042, 195043, 195044] },
    { id: 19505, relativeId: 5, quiz_id: 201905, title: 'Für welche Fächer kann die HPI Schul-Cloud einen Mehrwert leisten?', answers: [195051, 195052, 195053, 195054] },
    { id: 19506, relativeId: 6, quiz_id: 201905, title: 'Was umfasst der Begriff "Digital Literacy"?', answers: [195061, 195062, 195063, 195064] },
    { id: 19507, relativeId: 7, quiz_id: 201905, title: 'Was unterscheidet die HPI Schul-Cloud von bereits bestehenden Lösungen?', answers: [195071, 195072, 195073, 195074] },
    { id: 19508, relativeId: 8, quiz_id: 201905, title: 'Wer kann die HPI Schul-Cloud im Rahmen des BMBF geförderten Pilotprojekts testen?', answers: [195081, 195082, 195083, 195084] },
    { id: 19509, relativeId: 9, quiz_id: 201905, title: 'Welche Technologie wird in der HPI Schul-Cloud verwendet?', answers: [195091, 195092, 195093, 195094] },
    { id: 19510, relativeId: 10, quiz_id: 201905, title: 'Aus welchem Bundesland stammt die Landesinitiative, mit der die HPI Schul-Cloud aktuell eine kooperiert?', answers: [195101, 195102, 195103, 195104] },
    { id: 19511, relativeId: 11, quiz_id: 201905, title: 'Wie viele MINT-EC-Schulen nutzen aktuell die HPI Schul-Cloud?', answers: [195111, 195112, 195113, 195114] },
    { id: 19512, relativeId: 12, quiz_id: 201905, title: 'Wie viele Bildungsinhalte sind im Lernstore der HPI Schul-Cloud zu finden?', answers: [195121, 195122, 195123, 195124] },

    // Schul-Cloud Praxiseinsatz
    { id: 19601, relativeId: 1, quiz_id: 201906, title: 'Was ermöglichen die Tools neXboard und Etherpad in der HPI Schul-Cloud?', answers: [196011, 196012, 196013, 196014] },
    { id: 19602, relativeId: 2, quiz_id: 201906, title: 'Wie kann ich als Lehrkraft einfach gewährleisten, dass alle Schüler/innen auf die korrekte Seite in der HPI Schul-Cloud gelangen?', answers: [196021, 196022, 196023, 196024] },
    { id: 19603, relativeId: 3, quiz_id: 201906, title: 'Wie funktioniert die datenschutzkonforme Registrierung nach EU-DSGVO in der HPI Schul-Cloud?', answers: [196031, 196032, 196033, 196034] },
    { id: 19604, relativeId: 4, quiz_id: 201906, title: 'Kann ich als Lehrkraft einsehen, welche Schüler bereits eine Hausaufgabe digital abgegeben haben?', answers: [196041, 196042, 196043, 196044] },
    { id: 19605, relativeId: 5, quiz_id: 201906, title: 'Ist es möglich direkten Kontakt zu den Entwicklern des HPI aufzunehmen?', answers: [196051, 196052, 196053, 196054] },
    { id: 19606, relativeId: 6, quiz_id: 201906, title: 'Was muss ich beim Verwenden von Inhalten aus dem Lernstore der HPI Schul-Cloud beachten?', answers: [196061, 196062, 196063, 196064] },

    // openHPI Onboarding
    { id: 19401, relativeId: 1, quiz_id: 201904, title: 'Was bedeutet \"MOOC\"?', answers: [194011, 194012, 194013, 194014] },
    { id: 19402, relativeId: 2, quiz_id: 201904, title: 'Wer kann sich bei openHPI anmelden?', answers: [194021, 194022, 194023, 194024] },
    { id: 19403, relativeId: 3, quiz_id: 201904, title: 'Welche technischen Voraussetzungen benötige ich für die Nutzung von openHPI?', answers: [194031, 194032, 194033, 194034] },
    { id: 19404, relativeId: 4, quiz_id: 201904, title: 'Kann ich bei openHPI ein Zeugnis erwerben?', answers: [194041, 194042, 194043, 194044] },
    { id: 19405, relativeId: 5, quiz_id: 201904, title: 'Wo finde ich die Kursmaterialien?', answers: [194051, 194052, 194053, 194054] },
    { id: 19406, relativeId: 6, quiz_id: 201904, title: 'Welche Lernmaterialien gibt es?', answers: [194061, 194062, 194063, 194064] },
    { id: 19407, relativeId: 7, quiz_id: 201904, title: 'Wie nutze ich das Diskussionsforum?', answers: [194071, 194072, 194073, 194074] },
    { id: 19408, relativeId: 8, quiz_id: 201904, title: 'Was sind Selbsttests und Hausaufgaben und worin unterscheiden sich diese?', answers: [194081, 194082, 194083, 194084] },
    { id: 19409, relativeId: 9, quiz_id: 201904, title: 'Was ist und wie funktioniert ein Peer-Assessment?', answers: [194091, 194092, 194093, 194094] },
    { id: 19410, relativeId: 10, quiz_id: 201904, title: 'Welcher war der erste MOOC, der auf openHPI angeboten wurde?', answers: [194101, 194102, 194103, 194104] },






  ]
});

export default Question;
