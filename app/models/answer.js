import DS from 'ember-data';

const Answer = DS.Model.extend({
  title: DS.attr('string'),
  question: DS.belongsTo('question'),
  correct: DS.attr('boolean'),
  selected: DS.attr('boolean', {defaultValue: false}),
  selection_count: DS.attr('number', {defaultValue: 0}),
  selection_percentage: DS.attr('number', {defaultValue: 0}),

  reset() {
    this.set('selection_count', 0);
    this.set('selection_percentage', 0);
    this.set('selected', false);
  }
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
    { id: 17, question_id: 5, title: 'MAC address filter', correct: false },
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
    { id: 42, question_id: 11, title: 'Computers that are all linked together in a physical network', correct: false },
    { id: 43, question_id: 11, title: 'A global network of networks', correct: true },
    { id: 44, question_id: 11, title: 'All of the other answers', correct: false },

    // { id: 12, quiz_id: 2, title: 'Who is Inventor of the WWW, the World Wide Web?', answers: [45, 46, 47, 48] },
    { id: 45, question_id: 12, title: 'Bill Gates and Steve Ballmer', correct: false },
    { id: 46, question_id: 12, title: 'Steve Jobs, Steve Wozniak and Tim Cook', correct: false },
    { id: 47, question_id: 12, title: 'Tim Berners-Lee, Larry Roberts, Bob Kahn and Vint Cerf', correct: true },
    { id: 48, question_id: 12, title: 'Larry Page, Sergey Brin and Eric Schmidt', correct: false },

    // { id: 13, quiz_id: 2, title: 'What is a Browser?', answers: [49, 50, 51, 52] },
    { id: 49, question_id: 13, title: 'An HTLM system', correct: false },
    { id: 50, question_id: 13, title: 'A server', correct: false },
    { id: 51, question_id: 13, title: 'A program that enables you to view WWW documents', correct: true },
    { id: 52, question_id: 13, title: 'All of the other answers', correct: false },

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

    { id: 111, question_id: 21, title: 'HTML-Programmier-Internat', correct: false },
    { id: 112, question_id: 21, title: 'Hasso-Plattner-Institut', correct: true },
    { id: 113, question_id: 21, title: 'Hans Peters Imkerschule', correct: false },
    { id: 114, question_id: 21, title: 'Hasso Plattner International', correct: false },

    // { id: 22, relativeId: 2, quiz_id: 3, title: 'Welchen Studiengang kann man am HPI studieren?', answers: [141, 142, 143, 144] },
    { id: 141, question_id: 22, title: 'Medieninformatik', correct: false },
    { id: 142, question_id: 22, title: 'IT Special Force Engineering', correct: false },
    { id: 143, question_id: 22, title: 'Wirtschaftsinformatik', correct: false },
    { id: 144, question_id: 22, title: 'IT Systems Engineering', correct: true },

    { id: 101, question_id: 23, title: 'Modular Online Organization Cloud', correct: false },
    { id: 102, question_id: 23, title: 'Massive Open Online Course', correct: true },
    { id: 103, question_id: 23, title: 'Multi Organic Oyster Club', correct: false },
    { id: 104, question_id: 23, title: 'My Own Operating Class', correct: false },

    { id: 121, question_id: 24, title: 'Knowledge Engineering with Semantic Web Technologies (Prof. Sack)', correct: false },
    { id: 122, question_id: 24, title: 'Web Technologies (Prof. Meinel)', correct: false },
    { id: 123, question_id: 24, title: 'Parallel Programming Concepts (Prof. Naumann)', correct: false },
    { id: 124, question_id: 24, title: 'In-Memory Data Management (Prof. Plattner)', correct: true },

    { id: 131, question_id: 25, title: 'Tropfende Wasserhähne', correct: false },
    { id: 132, question_id: 25, title: 'Im Netz kursierende Identitätsdaten', correct: true },
    { id: 133, question_id: 25, title: 'Festplatten mit Datenverlust', correct: false },
    { id: 134, question_id: 25, title: 'Verblassende Personalausweise', correct: false },

    // { id: 26, relativeId: 6, quiz_id: 3, title: 'Wfür steht Design Thinking?', answers: [151, 152, 153, 154] },
    { id: 151, question_id: 26, title: 'Einen Studentenklub am HPI, der sich stets neue Designs ausdenkt', correct: false },
    { id: 152, question_id: 26, title: 'Ein Konzept zum intensiveren Nachdenken', correct: false },
    { id: 153, question_id: 26, title: 'Eine Methode für systematische Innovation', correct: true },
    { id: 154, question_id: 26, title: 'Ein neues Forschungsgebiet über Designer, die zu viel denken', correct: false },

    { id: 161, question_id: 27, title: '10', correct: false },
    { id: 162, question_id: 27, title: '9', correct: false },
    { id: 163, question_id: 27, title: '12', correct: true },
    { id: 164, question_id: 27, title: '11', correct: false },

    { id: 171, question_id: 28, title: 'IBM', correct: false },
    { id: 172, question_id: 28, title: 'SAP', correct: true },
    { id: 173, question_id: 28, title: 'SEP', correct: false },
    { id: 174, question_id: 28, title: 'Oracle', correct: false },



    // 2017 - Quiz 1
    { id: 1011, question_id: 101, title: 'Milliarden', correct: true },
    { id: 1012, question_id: 101, title: 'Hunderttausende', correct: false },
    { id: 1013, question_id: 101, title: 'Hunderte Millionen', correct: false },
    { id: 1014, question_id: 101, title: 'Millionen', correct: false },

    { id: 1021, question_id: 102, title: 'besteht aus technologisch gleichen Geräten.', correct: false },
    { id: 1022, question_id: 102, title: 'ist ein einziges großes Computernetzwerk.', correct: false },
    { id: 1023, question_id: 102, title: 'ist ein Zusammenschluss vieler Computernetze.', correct: true },
    { id: 1024, question_id: 102, title: 'ist ein anderes Wort für World Wide Web.', correct: false },

    { id: 1031, question_id: 103, title: 'geschlossenes Netz', correct: false },
    { id: 1032, question_id: 103, title: 'homogenes Netz', correct: false },
    { id: 1033, question_id: 103, title: 'von Google gegründeter Netzverbund', correct: false },
    { id: 1034, question_id: 103, title: 'offenes Netz', correct: true },

    { id: 1041, question_id: 104, title: 'Der Server ist die aktive Komponente.', correct: false },
    { id: 1042, question_id: 104, title: 'Der Client ist die aktive Komponente.', correct: true },
    { id: 1043, question_id: 104, title: 'Ein Server arbeitet immer nur für einen Client.', correct: false },
    { id: 1044, question_id: 104, title: 'Eine Client-Server-Interaktion geht vom Server aus.', correct: false },

    { id: 1051, question_id: 105, title: 'Gleiche Kabellänge zwischen allen Teilnehmern', correct: false },
    { id: 1052, question_id: 105, title: 'Paketvermittlung', correct: true },
    { id: 1053, question_id: 105, title: 'Zentrale Instanz teilt Senderecht zu', correct: false },
    { id: 1054, question_id: 105, title: 'Grundeinstellung der Rechner muss auf "Nachrichten akzeptieren" gesetzt sein', correct: false },

    { id: 1061, question_id: 106, title: 'wird bei einem Ausfall des Systems die Funktion durch ein anderes System übernommen.', correct: true },
    { id: 1062, question_id: 106, title: 'findet ein Lastenausgleich zwischen den verbundenen Rechnern statt.', correct: false },
    { id: 1063, question_id: 106, title: 'gibt es eine Firewall, die für alle verbunden Rechner arbeitet.', correct: false },
    { id: 1064, question_id: 106, title: 'befinden sich die Systeme in speziell abgesicherten Räumen.', correct: false },

    { id: 1071, question_id: 107, title: 'Ein persönliches Geheimnis, z.B. den Vornamen Ihres besten Freundes', correct: false },
    { id: 1072, question_id: 107, title: 'Ein geheimes Wort aus dem englischen Wörterbuch', correct: false },
    { id: 1073, question_id: 107, title: 'Straße im Wohnort mit Hausnummer', correct: false },
    { id: 1074, question_id: 107, title: 'Eine mind. 12 Zeichen lange Aneinanderreihung unterschiedlicher Zeichen', correct: true },

    { id: 1081, question_id: 108, title: '26march1989', correct: false },
    { id: 1082, question_id: 108, title: 'x1@56hjKli§a', correct: true },
    { id: 1083, question_id: 108, title: 'PotsdamerPlatz22b', correct: false },
    { id: 1084, question_id: 108, title: 'Martin', correct: false },

    { id: 1091, question_id: 109, title: 'In sozialen Medien Ersteller und Konsumenten von Inhalten streng getrennt.', correct: false },
    { id: 1092, question_id: 109, title: 'Soziale Medien sind global verfügbar und leicht zugänglich.', correct: true },
    { id: 1093, question_id: 109, title: 'Social Media bietet keine Möglichkeit der Kollaboration zwischen Nutzern.', correct: false },
    { id: 1094, question_id: 109, title: 'Aktualität von Inhalten ist ein großes Problem von sozialen Medien.', correct: false },

    { id: 1101, question_id: 110, title: 'Amazon', correct: false },
    { id: 1102, question_id: 110, title: 'LinkedIn', correct: true },
    { id: 1103, question_id: 110, title: 'Gmail', correct: false },
    { id: 1104, question_id: 110, title: 'Netflix', correct: false },

    // 2017 - Quiz 2
    { id: 2011, question_id: 201, title: 'Baum-Topologie', correct: false },
    { id: 2012, question_id: 201, title: 'Stern-Topologie', correct: true },
    { id: 2013, question_id: 201, title: 'Ring-Topologie', correct: false },
    { id: 2014, question_id: 201, title: 'Punkt-zu-Punkt-Topologie', correct: false },

    { id: 2021, question_id: 202, title: 'HTTP', correct: false },
    { id: 2022, question_id: 202, title: 'POP3', correct: true },
    { id: 2023, question_id: 202, title: 'XMPP', correct: false },
    { id: 2024, question_id: 202, title: 'TECHNO', correct: false },

    { id: 2031, question_id: 203, title: 'Nachrichtenkopf', correct: true },
    { id: 2032, question_id: 203, title: 'Nachrichtenpaket', correct: false },
    { id: 2033, question_id: 203, title: 'IP-Adresse des WWW-Servers', correct: false },
    { id: 2034, question_id: 203, title: 'Grußzeile', correct: false },

    { id: 2041, question_id: 204, title: 'Installation von Schadsoftware auf dem Opfers-System', correct: false },
    { id: 2042, question_id: 204, title: 'Übernahme des Opfersystems über das Internet', correct: false },
    { id: 2043, question_id: 204, title: 'Verschlüsselung der Festplatte zur Erpressung von Lösegeld', correct: false },
    { id: 2044, question_id: 204, title: 'Ein Angriff unter vorgetäuschter Identität', correct: true },

    { id: 2051, question_id: 205, title: 'Festplattendaten werden übertragen, wenn der Server diese anfordert', correct: false },
    { id: 2052, question_id: 205, title: 'Nutzer-Präferenzen speichern', correct: true },
    { id: 2053, question_id: 205, title: 'Um den Krümelmonster-Virus zu entfernen', correct: false },
    { id: 2054, question_id: 205, title: 'Umgehung der Same Origin-Policy bei JavaScript', correct: false },

    { id: 2061, question_id: 206, title: 'Durch eine E-Mail an die gewünschte URL', correct: false },
    { id: 2062, question_id: 206, title: 'Klick auf einen Hyperlink', correct: true },
    { id: 2063, question_id: 206, title: 'Heute nur noch über die Google-Suche', correct: false },
    { id: 2064, question_id: 206, title: 'Eingabe des Firmennamens in die Adresszeile des Browsers', correct: false },

    { id: 2071, question_id: 207, title: 'Responsive Website reagiert auf Anforderungen verschiedener Endgeräte', correct: true },
    { id: 2072, question_id: 207, title: 'Responsive Webdesign setzt JavaScript voraus.', correct: false },
    { id: 2073, question_id: 207, title: 'Auf kleinen Screens wird der Inhalt gleichmäßig verkleinert.', correct: false },
    { id: 2074, question_id: 207, title: 'Es gibt immer ein Antwort-Feld für Nutzer-Feedback auf der Startseite.', correct: false },

    { id: 2081, question_id: 208, title: 'Strukturierung von Big Data', correct: false },
    { id: 2082, question_id: 208, title: 'Basis für Webservice-Infrastrukturen', correct: false },
    { id: 2083, question_id: 208, title: 'Bildergalerie für Urlaubsfotos', correct: false },
    { id: 2084, question_id: 208, title: 'Kollaborationsplattform', correct: true },

    { id: 2091, question_id: 209, title: 'HTML kommt bei dynamischen Webseiten nicht mehr zum Einsatz', correct: false },
    { id: 2092, question_id: 209, title: 'Webseite wird erst auf Anfrage des Nutzers hin generiert', correct: true },
    { id: 2093, question_id: 209, title: 'Es gibt Elemente auf der Webseite, die sich bewegen', correct: false },
    { id: 2094, question_id: 209, title: 'Die Webseite liegt fertig auf dem Server zum Abruf bereit', correct: false },

    { id: 2101, question_id: 210, title: 'Angreifer täuscht Identität eines (vom Opfer genutztem) Dienstanbieters vor', correct: true },
    { id: 2102, question_id: 210, title: 'Es gibt kaum Gegenmaßnahmen, da Angriff ohne Mitwirkung des Opfers stattfindet.', correct: false },
    { id: 2103, question_id: 210, title: 'Beim Spear Phishing wird nur noch mit Instant Messenger-Diensten gearbeitet.', correct: false },
    { id: 2104, question_id: 210, title: 'Phishing sehr schwierig, da Email-Absender-Adressen kaum zu fälschen sind.', correct: false },

    // Schul-Cloud-Quiz
    { id: 3011, question_id: 301, title: 'Digitale Bildungsinhalte auf persönlichen Endgeräten speichern', correct: false },
    { id: 3012, question_id: 301, title: 'Analoge Lernmaterialien durch digitale ersetzen', correct: false },
    { id: 3013, question_id: 301, title: 'Die digitale Entwicklung an Schulen erleichtern', correct: true },
    { id: 3014, question_id: 301, title: 'Schulen die Aktualisierung der Software überlassen', correct: false },

    { id: 3021, question_id: 302, title: 'Bundesministerium für Wirtschaft und Technologie', correct: false },
    { id: 3022, question_id: 302, title: 'MINT Zukunft schaffen', correct: false },
    { id: 3023, question_id: 302, title: 'Ministerium für Bildung, Jugend und Sport', correct: false },
    { id: 3024, question_id: 302, title: 'Hasso-Plattner-Institut', correct: true },

    { id: 3031, question_id: 303, title: 'Privacy by Design', correct: true },
    { id: 3032, question_id: 303, title: 'Mündliche Vertrauensbekundung (informed consent)', correct: false },
    { id: 3033, question_id: 303, title: 'Restriktive Zweckbindung', correct: false },
    { id: 3034, question_id: 303, title: 'Repressives Verbot mit Befreiungsvorbehalt', correct: false },

    { id: 3041, question_id: 304, title: 'Digitale Bildungsinhalte, die ausschließlich lokal ausgeführt werden', correct: false },
    { id: 3042, question_id: 304, title: 'Digitale Bildungsinhalte, die in verteilten Silos gespeichert sind', correct: false },
    { id: 3043, question_id: 304, title: 'Webbasierte Bildungsinhalte', correct: true },
    { id: 3044, question_id: 304, title: 'Nicht-webbasierte digitale Bildungsinhalte', correct: false },

    { id: 3051, question_id: 305, title: 'Eine leicht bedienbare Schulverwaltungssoftware', correct: false },
    { id: 3052, question_id: 305, title: 'Eine Social-Media-Plattform', correct: false },
    { id: 3053, question_id: 305, title: 'Ein Unterrichtsorganisationssystem inkl. Inhaltedienst', correct: true },
    { id: 3054, question_id: 305, title: 'Ein Messengerdienst', correct: false },

    { id: 3061, question_id: 306, title: 'Ausschließlich für MINT-Fächer', correct: false },
    { id: 3062, question_id: 306, title: 'Für alle Fächer', correct: true },
    { id: 3063, question_id: 306, title: 'Lediglich für Geschichte', correct: false },
    { id: 3064, question_id: 306, title: 'Nur für Fremdsprachen', correct: false },

    { id: 3071, question_id: 307, title: 'Beschränkt sich auf einen intuitiven Umgang mit digitalen Medien', correct: false },
    { id: 3072, question_id: 307, title: 'Ein Set von Kompetenzen für die umfassende Teilhabe in der Wissensgesellschaft', correct: true },
    { id: 3073, question_id: 307, title: 'Beschränkt sich auf Programmierkenntnisse', correct: false },
    { id: 3074, question_id: 307, title: 'Beschränkt sich auf die tägliche Anwendung digitaler Systeme', correct: false },

    { id: 3081, question_id: 308, title: 'Konfrontation', correct: false },
    { id: 3082, question_id: 308, title: 'Anbieterneutralität', correct: true },
    { id: 3083, question_id: 308, title: 'Geschlossenheit', correct: false },
    { id: 3084, question_id: 308, title: 'Proprietarität', correct: false },

    { id: 3091, question_id: 309, title: 'MINT-EC-Schulen', correct: true },
    { id: 3092, question_id: 309, title: 'MINT-freundliche Schulen', correct: false },
    { id: 3093, question_id: 309, title: 'Mitgliedsschulen von "Komm, mach MINT"', correct: false },
    { id: 3094, question_id: 309, title: 'Alle Schulen im In- und Ausland', correct: false },

    { id: 3101, question_id: 310, title: 'Die Benutzeroberfläche ist als Webanwendung umgesetzt', correct: true },
    { id: 3102, question_id: 310, title: 'Die Schul-Cloud basiert auf einem monolithischen Kern', correct: false },
    { id: 3103, question_id: 310, title: 'Es werden proprietäre Browser-Plugins (bspw. Flash-Technologie) eingesetzt', correct: false },
    { id: 3104, question_id: 310, title: 'Alle Schüler/innen erhalten einen virtuellen Desktop', correct: false },

    { id: 3111, question_id: 311, title: 'Bayern', correct: false },
    { id: 3112, question_id: 311, title: 'Hamburg', correct: false },
    { id: 3113, question_id: 311, title: 'Niedersachsen', correct: true },
    { id: 3114, question_id: 311, title: 'Saarland', correct: false },

    // 2017 - SAPPHIRE Quiz 1
    { id: 4011, question_id: 401, title: 'By saving consecutive occurrences of the same value only once', correct: false },
    { id: 4012, question_id: 401, title: 'By converting everything into full text values, which allows for better compression techniques', correct: false },
    { id: 4013, question_id: 401, title: 'By mapping values to integers using as few bits as possible to represent all possible values', correct: true },
    { id: 4014, question_id: 401, title: 'By saving only every second value', correct: false },

    { id: 4021, question_id: 402, title: 'increases memory consumption.', correct: true },
    { id: 4022, question_id: 402, title: 'slows down look-ups.', correct: false },
    { id: 4023, question_id: 402, title: 'decreases memory consumption.', correct: false },
    { id: 4024, question_id: 402, title: 'speeds up inserts.', correct: false },

    { id: 4031, question_id: 403, title: 'A structure that contains the distinct values of the dictionary in reverse order', correct: false },
    { id: 4032, question_id: 403, title: 'A list of text entries that have to be decrypted, which is used for enhanced security', correct: false },
    { id: 4033, question_id: 403, title: 'A structure that contains the delta of each entry in comparison to the largest value', correct: false },
    { id: 4034, question_id: 403, title: 'A structure mapping each value to a list of positions of that value within the column', correct: true },

    { id: 4041, question_id: 404, title: 'A specific set of functions that summarize multiple rows from an input data set', correct: true },
    { id: 4042, question_id: 404, title: 'A set of functions that transform data types from one to another data type', correct: false },
    { id: 4043, question_id: 404, title: 'A set of tuples that are grouped together according to specific requirements', correct: false },
    { id: 4044, question_id: 404, title: 'A set of indexes that speed up processing a specific report', correct: false },

    { id: 4051, question_id: 405, title: 'GROUP BY', correct: false },
    { id: 4052, question_id: 405, title: 'MINIMUM', correct: true },
    { id: 4053, question_id: 405, title: 'HAVING', correct: false },
    { id: 4054, question_id: 405, title: 'SORT', correct: false },

    { id: 4061, question_id: 406, title: 'Main memory, disk and tape drive sizes', correct: false },
    { id: 4062, question_id: 406, title: 'CPU processing power, main memory size, network bandwidth', correct: true },
    { id: 4063, question_id: 406, title: 'CPU processing power, graphics card performance, monitor resolution', correct: false },
    { id: 4064, question_id: 406, title: 'Network bandwidth, power supply unit, main memory', correct: false },

    { id: 4071, question_id: 407, title: 'short running with strict time constraints.', correct: false },
    { id: 4072, question_id: 407, title: 'long running with soft time constraints.', correct: true },
    { id: 4073, question_id: 407, title: 'short running with soft time constraints.', correct: false },
    { id: 4074, question_id: 407, title: 'long running with strict time constraints.', correct: false },

    { id: 4081, question_id: 408, title: 'should never be decreased as users are unfamiliar with such behavior, thus becoming frustrated.', correct: false },
    { id: 4082, question_id: 408, title: 'have no impact on a user\'s work behavior.', correct: false },
    { id: 4083, question_id: 408, title: 'can be increased so users can do many things in parallel. (Context switches are cheap.)', correct: false },
    { id: 4084, question_id: 408, title: 'have to be as short as possible, so the user stays focused at the task at hand.', correct: true },

    { id: 4091, question_id: 409, title: 'Aggregate query results computed on the main storage', correct: true },
    { id: 4092, question_id: 409, title: 'Aggregate query results computed on the differential buffer', correct: false },
    { id: 4093, question_id: 409, title: 'Any type of query result', correct: false },
    { id: 4094, question_id: 409, title: 'Aggregate query results computed on the main storage and the differential buffer', correct: false },

    { id: 4101, question_id: 410, title: 'has no impact on queries that request all possible attributes from the table.', correct: false },
    { id: 4102, question_id: 410, title: 'speeds up the response time of queries that request all attributes from the database.', correct: false },
    { id: 4103, question_id: 410, title: 'slows down the response time of queries that only request needed attributes from the DB.', correct: false },
    { id: 4104, question_id: 410, title: 'has no impact on existing queries if they only request needed attributes from the database.', correct: true },

    { id: 4111, question_id: 411, title: 'There will be no impact on enterprise applications.', correct: false },
    { id: 4112, question_id: 411, title: 'The data organization will not change, but the source code of the applications has to be adapted.', correct: false },
    { id: 4113, question_id: 411, title: 'Data organization and processing will change radically, enterprise applications need to adapt.', correct: true },
    { id: 4114, question_id: 411, title: 'All enterprise applications are significantly sped up without incurring any adaptions.', correct: false },

    // 2017 - SAPPHIRE Quiz 2
    { id: 5011, question_id: 501, title: 'Electrical Engineering', correct: false },
    { id: 5012, question_id: 501, title: 'IT Systems Engineering', correct: true },
    { id: 5013, question_id: 501, title: 'Applied Geosciences', correct: false },
    { id: 5014, question_id: 501, title: 'Rocket Technology', correct: false },

    { id: 5021, question_id: 502, title: 'Yale University', correct: false },
    { id: 5022, question_id: 502, title: 'Cambridge, UK', correct: false },
    { id: 5023, question_id: 502, title: 'Stanford', correct: true },
    { id: 5024, question_id: 502, title: 'Harvard', correct: false },

    { id: 5031, question_id: 503, title: 'onlineHPI', correct: false },
    { id: 5032, question_id: 503, title: 'HPI.open', correct: false },
    { id: 5033, question_id: 503, title: 'FreeCourseWare', correct: false },
    { id: 5034, question_id: 503, title: 'openHPI', correct: true },

    { id: 5041, question_id: 504, title: 'In-Memory Data Management (Prof. Plattner)', correct: true },
    { id: 5042, question_id: 504, title: 'Parallel Programming Concepts (Prof. Naumann)', correct: false },
    { id: 5043, question_id: 504, title: 'Web Technologies (Prof. Meinel)', correct: false },
    { id: 5044, question_id: 504, title: 'Knowledge Engineering with Semantic Web Technologies (Prof. Sack)', correct: false },

    { id: 5051, question_id: 505, title: 'Big Data Analytics', correct: false },
    { id: 5052, question_id: 505, title: 'Fundamentals of Project Planning', correct: true },
    { id: 5053, question_id: 505, title: 'Business Process Modelling and Analysis', correct: false },
    { id: 5054, question_id: 505, title: 'Social Media - What no one has told you about privacy', correct: false },

    { id: 5061, question_id: 506, title: 'A branch of HPI in Munich', correct: false },
    { id: 5062, question_id: 506, title: 'A place for makers where they can test their prototypes', correct: false },
    { id: 5063, question_id: 506, title: 'A creative corner for brainstorming on future developments', correct: false },
    { id: 5064, question_id: 506, title: 'A cooperation of HPI and several partners enabling exchange between research and industry', correct: true },

    { id: 5071, question_id: 507, title: '2004', correct: false },
    { id: 5072, question_id: 507, title: '2016', correct: false },
    { id: 5073, question_id: 507, title: '1998', correct: false },
    { id: 5074, question_id: 507, title: '2006', correct: true },

    { id: 5081, question_id: 508, title: 'Seoul', correct: true },
    { id: 5082, question_id: 508, title: 'Haifa', correct: false },
    { id: 5083, question_id: 508, title: 'Nanjing', correct: false },
    { id: 5084, question_id: 508, title: 'Cape Town', correct: false },

    { id: 5091, question_id: 509, title: 'He is the scientific director of HPI.', correct: false },
    { id: 5092, question_id: 509, title: 'Once a year, he organizes a festive ball in the Berlin concert hall.', correct: false },
    { id: 5093, question_id: 509, title: 'He is head of the chair for "Enterprise Platform and Integration Concepts".', correct: true },
    { id: 5094, question_id: 509, title: 'He attends every graduation ceremony and presents the masters certificate to the students.', correct: false },

    { id: 5101, question_id: 510, title: 'Security and Trust Engineering', correct: false },
    { id: 5102, question_id: 510, title: 'Learning and Knowledge Engineering', correct: false },
    { id: 5103, question_id: 510, title: 'Innovation and Design Thinking Research', correct: false },
    { id: 5104, question_id: 510, title: '3D printing', correct: true },

    // Didacta 2019 - Digitale Identitäten
    { id: 191011, question_id: 19101, title: '... wiederverwendet wird', correct: false },
    { id: 191012, question_id: 19101, title: '... Buchstaben, Zahlen und Sonderzeichen enthält', correct: true },
    { id: 191013, question_id: 19101, title: '... maximal 8 Zeichen lang ist', correct: false },
    { id: 191014, question_id: 19101, title: '... im Wörterbuch zu finden ist', correct: false },

    { id: 191021, question_id: 19102, title: 'Computer Provider', correct: false },
    { id: 191022, question_id: 19102, title: 'Service Provider', correct: false },
    { id: 191023, question_id: 19102, title: 'ID-Provider', correct: true },
    { id: 191024, question_id: 19102, title: 'Client', correct: false },

    { id: 191031, question_id: 19103, title: 'Anschreiben des Supports genutzter Dienste, ob Daten von Kriminellen erbeutet wurden', correct: false },
    { id: 191032, question_id: 19103, title: 'Nutzung von Dienst, der Identitätsdaten im Internet sucht, wie HPI Identity Leak Checker', correct: true },
    { id: 191033, question_id: 19103, title: 'Googlen des eigenen Passworts und Evaluierung der Ergebnisse', correct: false },
    { id: 191034, question_id: 19103, title: 'Schreiben einer E-Mail an NIASC@nsa.gov, ob diesbezüglich etwas bekannt ist', correct: false },

    { id: 191041, question_id: 19104, title: 'Analyse & Beeinflussen der Gesellschaft mittels Ingenieurswissenschafts-Methoden', correct: true },
    { id: 191042, question_id: 19104, title: 'Gezielte Manipulation von Personen zum Erreichen eines bestimmten Ziels', correct: true },
    { id: 191043, question_id: 19104, title: 'Initiative für mehr Menschlichkeit in Ingenieursberufen', correct: false },
    { id: 191044, question_id: 19104, title: 'Manipulation der Bevölkerungs-, Sozial- und Altersstruktur einer Gesellschaft', correct: true },

    { id: 191051, question_id: 19105, title: '... eine digitale Identität an eine andere digitale Identität', correct: false },
    { id: 191052, question_id: 19105, title: '... eine physische Identität an eine andere physische Identität', correct: false },
    { id: 191053, question_id: 19105, title: '... eine physische Identität an mehrere digitale Identitäten', correct: false },
    { id: 191054, question_id: 19105, title: '... eine digitale Identität an eine physische Identität', correct: true },

    { id: 191061, question_id: 19106, title: 'Public Key Infrastruktur ', correct: true },
    { id: 191062, question_id: 19106, title: 'Videoidentitfikation', correct: false },
    { id: 191063, question_id: 19106, title: 'Kerberos', correct: false },
    { id: 191064, question_id: 19106, title: 'OpenID Connect', correct: false },

    { id: 191071, question_id: 19107, title: 'Keine spezielle Hardware notwendig', correct: false },
    { id: 191072, question_id: 19107, title: 'Weit verbreitet', correct: false },
    { id: 191073, question_id: 19107, title: 'Leicht änderbar', correct: false },
    { id: 191074, question_id: 19107, title: 'Schwer merkbar ', correct: true },


    // Didacta 2019 - Mikrocontroller
    { id: 192011, question_id: 19201, title: 'setup() und loop()', correct: true },
    { id: 192012, question_id: 19201, title: 'init() und main()', correct: false },
    { id: 192013, question_id: 19201, title: 'setup() und main()', correct: false },
    { id: 192014, question_id: 19201, title: 'init() und loop()', correct: false },

    { id: 192021, question_id: 19202, title: 'an der Farbe', correct: false },
    { id: 192022, question_id: 19202, title: 'an der rauen Seite', correct: false },
    { id: 192023, question_id: 19202, title: 'am längeren Beinchen', correct: true },
    { id: 192024, question_id: 19202, title: 'an den Kerben', correct: false },

    { id: 192031, question_id: 19203, title: 'Bluetooth', correct: false },
    { id: 192032, question_id: 19203, title: 'SD-Kartenleser', correct: true },
    { id: 192033, question_id: 19203, title: 'Touchsensor', correct: false },
    { id: 192034, question_id: 19203, title: 'WLAN-Modul', correct: false },

    { id: 192041, question_id: 19204, title: 'A', correct: true },
    { id: 192042, question_id: 19204, title: 'E', correct: false },
    { id: 192043, question_id: 19204, title: 'I', correct: false },
    { id: 192044, question_id: 19204, title: 'O', correct: false },

    { id: 192051, question_id: 19205, title: 'Pi', correct: false },
    { id: 192052, question_id: 19205, title: 'Epsilon', correct: false },
    { id: 192053, question_id: 19205, title: 'Omega', correct: true },
    { id: 192054, question_id: 19205, title: 'W', correct: false },

    { id: 192061, question_id: 19206, title: 'Die Variable magic soll den Wert 1 annehmen', correct: false },
    { id: 192062, question_id: 19206, title: 'Die Variable magic ist größer als 1', correct: false },
    { id: 192063, question_id: 19206, title: 'Die 1 wird hinten an die Variable magic angehangen', correct: false },
    { id: 192064, question_id: 19206, title: 'Die Bits werden um 1 nach rechts geschoben', correct: true },

    { id: 192071, question_id: 19207, title: 'Plus wenn Minus', correct: false },
    { id: 192072, question_id: 19207, title: 'Pulsweitenmodulation', correct: true },
    { id: 192073, question_id: 19207, title: 'Pinweitenmaß', correct: false },
    { id: 192074, question_id: 19207, title: 'Preiswerter Mikrocontroller', correct: false },

    // Didacta 2019 - Blockchain
    { id: 193011, question_id: 19301, title: 'Konsistenz', correct: false },
    { id: 193012, question_id: 19301, title: 'Ausfallsicherheit', correct: true },
    { id: 193013, question_id: 19301, title: 'Skalierbarkeit', correct: true },
    { id: 193014, question_id: 19301, title: 'Vertrauen', correct: false },

    { id: 193021, question_id: 19302, title: 'Vertikal', correct: false },
    { id: 193022, question_id: 19302, title: 'Diagonal', correct: false },
    { id: 193023, question_id: 19302, title: 'Horizontal', correct: true },
    { id: 193024, question_id: 19302, title: 'Senkrecht', correct: false },

    { id: 193031, question_id: 19303, title: 'Eventuell lange Antwortzeiten', correct: true },
    { id: 193032, question_id: 19303, title: 'Eventuell alte Daten als Antwort', correct: false },
    { id: 193033, question_id: 19303, title: 'Streng schnelle Antwortzeitvorgaben', correct: false },
    { id: 193034, question_id: 19303, title: 'Koordinationsaufwand', correct: true },

    { id: 193041, question_id: 19304, title: 'Strong Consistency', correct: false },
    { id: 193042, question_id: 19304, title: 'Eventual Consistency', correct: true },
    { id: 193043, question_id: 19304, title: 'Keine Consistency', correct: false },
    { id: 193044, question_id: 19304, title: 'Super Strong Consistency', correct: false },

    { id: 193051, question_id: 19305, title: 'Crash Fehler', correct: false },
    { id: 193052, question_id: 19305, title: 'Byzantinischer Fehler', correct: true },
    { id: 193053, question_id: 19305, title: 'Griechischer Fehler', correct: false },
    { id: 193054, question_id: 19305, title: 'Türkischer Fehler', correct: false },

    { id: 193061, question_id: 19306, title: 'Identitätsmanagement', correct: true },
    { id: 193062, question_id: 19306, title: 'Netzwerkkommunikation', correct: false },
    { id: 193063, question_id: 19306, title: 'Verschlüsselungstechnik', correct: false },
    { id: 193064, question_id: 19306, title: 'Energieversorgung', correct: false },

    { id: 193071, question_id: 19307, title: 'Eine digitale auf Kryptographie basierte Währung anbietet', correct: true },
    { id: 193072, question_id: 19307, title: 'Kryptographische Beweise statt Vertrauen', correct: true },
    { id: 193073, question_id: 19307, title: 'Die Blockchain-Technologie für die digitale Zahlungsabwicklung nutzt', correct: true },
    { id: 193074, question_id: 19307, title: 'Strom sparen', correct: false },

    { id: 193081, question_id: 19308, title: 'Die Daten werden an jeden Teilnehmer verbreitet', correct: true },
    { id: 193082, question_id: 19308, title: 'Der BTC Absender berechnet die kürzeste Route zum BTC Empfänger', correct: false },
    { id: 193083, question_id: 19308, title: 'Der BTC Absender sendet die Daten an zufällige Nachbarn', correct: false },
    { id: 193084, question_id: 19308, title: 'Per Flaschenpost', correct: false },

    { id: 193091, question_id: 19309, title: 'Private', correct: false },
    { id: 193092, question_id: 19309, title: 'Permissioned', correct: false },
    { id: 193093, question_id: 19309, title: 'Konsortium', correct: false },
    { id: 193094, question_id: 19309, title: 'Public', correct: true },

    // Didacta 2019 - Schul-Cloud Allgemeines zum Projekt
    { id: 195011, question_id: 19501, title: 'Digitale Bildungsinhalte auf persönlichen Endgeräten speichern', correct: false },
    { id: 195012, question_id: 19501, title: 'Analoge Lernmaterialien durch digitale ersetzen', correct: false },
    { id: 195013, question_id: 19501, title: 'Nutzung digitaler Lernhinhalte im Unterricht ermöglichen', correct: true },
    { id: 195014, question_id: 19501, title: 'Schulen die Aktualisierung der Software überlassen', correct: false },

    { id: 195021, question_id: 19502, title: 'Bundesministerium für Wirtschaft und Technologie', correct: false },
    { id: 195022, question_id: 19502, title: 'MINT Zukunft schaffen', correct: false },
    { id: 195023, question_id: 19502, title: 'Ministerium für Bildung, Jugend und Sport', correct: false },
    { id: 195024, question_id: 19502, title: 'Hasso-Plattner-Institut und MINT EC', correct: true },

    { id: 195031, question_id: 19503, title: 'Privacy by Design', correct: true },
    { id: 195032, question_id: 19503, title: 'Mündliche Vertrauensbekundung (informed consent)', correct: false },
    { id: 195033, question_id: 19503, title: 'Restriktive Zweckbindung', correct: false },
    { id: 195034, question_id: 19503, title: 'Repressives Verbot mit Befreiungsvorbehalt', correct: false },

    { id: 195041, question_id: 19504, title: 'Digitale Bildungsinhalte, die ausschließlich lokal ausgeführt werden', correct: false },
    { id: 195042, question_id: 19504, title: 'Digitale Bildungsinhalte, die in verteilten Silos gespeichert sind', correct: false },
    { id: 195043, question_id: 19504, title: 'Webbasierte Bildungsinhalte mit Web-Schnittstelle', correct: true },
    { id: 195044, question_id: 19504, title: 'Nicht-webbasierte digitale Bildungsinhalte', correct: false },

    { id: 195051, question_id: 19505, title: 'Ausschließlich für MINT-Fächer', correct: false },
    { id: 195052, question_id: 19505, title: 'Für alle Fächer', correct: true },
    { id: 195053, question_id: 19505, title: 'Lediglich für Geschichte', correct: false },
    { id: 195054, question_id: 19505, title: 'Nur für Fremdsprachen', correct: false },

    { id: 195061, question_id: 19506, title: 'Beschränkt sich auf einen intuitiven Umgang mit digitalen Medien', correct: false },
    { id: 195062, question_id: 19506, title: 'Ein Set von Kompetenzen für die umfassende Teilhabe in der Wissensgesellschaft', correct: true },
    { id: 195063, question_id: 19506, title: 'Beschränkt sich auf Programmierkenntnisse', correct: false },
    { id: 195064, question_id: 19506, title: 'Beschränkt sich auf die tägliche Anwendung digitaler Systeme', correct: false },

    { id: 195071, question_id: 19507, title: 'Konfrontation', correct: false },
    { id: 195072, question_id: 19507, title: 'Anbieterneutralität', correct: true },
    { id: 195073, question_id: 19507, title: 'Geschlossenheit', correct: false },
    { id: 195074, question_id: 19507, title: 'Proprietarität', correct: false },

    { id: 195081, question_id: 19508, title: 'MINT-EC-Schulen', correct: true },
    { id: 195082, question_id: 19508, title: 'MINT-freundliche Schulen', correct: false },
    { id: 195083, question_id: 19508, title: 'Mitgliedsschulen von "Komm, mach MINT"', correct: false },
    { id: 195084, question_id: 19508, title: 'Alle Schulen im In- und Ausland', correct: false },

    { id: 195091, question_id: 19509, title: 'Die Benutzeroberfläche ist als Webanwendung umgesetzt', correct: true },
    { id: 195092, question_id: 19509, title: 'Die HPI Schul-Cloud basiert auf einem monolithischen Kern', correct: false },
    { id: 195093, question_id: 19509, title: 'Es werden proprietäre Browser-Plugins (bspw. Flash-Technologie) eingesetzt', correct: false },
    { id: 195094, question_id: 19509, title: 'Alle Schüler/innen erhalten einen virtuellen Desktop', correct: false },

    { id: 195101, question_id: 19510, title: 'Bayern', correct: false },
    { id: 195102, question_id: 19510, title: 'Hamburg', correct: false },
    { id: 195103, question_id: 19510, title: 'Niedersachsen', correct: true },
    { id: 195104, question_id: 19510, title: 'Saarland', correct: false },

    { id: 195111, question_id: 19511, title: '25', correct: false },
    { id: 195112, question_id: 19511, title: '50', correct: false },
    { id: 195113, question_id: 19511, title: '75', correct: false },
    { id: 195114, question_id: 19511, title: '100', correct: true },

    { id: 195121, question_id: 19512, title: 'Dreihunderttausend', correct: false },
    { id: 195122, question_id: 19512, title: 'Achttausend', correct: false },
    { id: 195123, question_id: 19512, title: 'eine Million ', correct: true },
    { id: 195124, question_id: 19512, title: 'Fünfhundert', correct: false },

    // Schul-Cloud Praxis
    { id: 196011, question_id: 19601, title: 'Kollaboratives Arbeiten', correct: true },
    { id: 196012, question_id: 19601, title: 'Auswertung von Messwerten', correct: false },
    { id: 196013, question_id: 19601, title: 'Dokumentation von Audioaufnahmen', correct: false },
    { id: 196014, question_id: 19601, title: 'Vokabeltraining', correct: false },

    { id: 196021, question_id: 19602, title: 'Per AirDrop', correct: false },
    { id: 196022, question_id: 19602, title: 'Per QR-Code', correct: true },
    { id: 196023, question_id: 19602, title: 'Wunsch-Link generieren', correct: false },
    { id: 196024, question_id: 19602, title: 'Link diktieren', correct: false },

    { id: 196031, question_id: 19603, title: 'Alle Schüler/innen erstellen sich selbst einen Account', correct: false },
    { id: 196032, question_id: 19603, title: 'Lehrkraft registriert alle Schüler/innen', correct: false },
    { id: 196033, question_id: 19603, title: 'Registrierung wird ausschließlich von den Eltern vorgenommen', correct: false },
    { id: 196034, question_id: 19603, title: 'Digitale Einverständniserklärung der Schüler/innen und Eltern', correct: true },

    { id: 196041, question_id: 19604, title: 'Nein, das ist nicht möglich.', correct: false },
    { id: 196042, question_id: 19604, title: 'Ja, dies wird in einer Übersicht der Aufgabe angezeigt', correct: true },
    { id: 196043, question_id: 19604, title: 'Ja, dies wird im Profil des Schülers angezeigt', correct: false },
    { id: 196044, question_id: 19604, title: 'Ja, aber dazu muss ich erst zu einem speziellen Programm wechseln', correct: false },

    { id: 196051, question_id: 19605, title: 'Nein, das Entwickler-Team kann nicht kontaktiert werden  ', correct: false },
    { id: 196052, question_id: 19605, title: 'Ja, nachdem ich mich durch unterschiedliche Fragen geklickt habe', correct: false },
    { id: 196053, question_id: 19605, title: 'Ja, Probleme & Wünsche können in der Plattform an die Entwickler gemeldet werden', correct: true },
    { id: 196054, question_id: 19605, title: 'Ja, allerdings nur über eine Telefon-Hotline', correct: false },

    { id: 196061, question_id: 19606, title: 'Bei Verwendung muss ich immer den Urheber angeben', correct: false },
    { id: 196062, question_id: 19606, title: 'Ich muss sicherstellen, dass ich das Recht habe, die Materialien zu nutzen', correct: false },
    { id: 196063, question_id: 19606, title: 'Eigentlich nichts, da die Materialien bereits geprüft wurden', correct: false },
    { id: 196064, question_id: 19606, title: 'Ich muss meinen Schuladministrator fragen, ob ich den Lernstore verwenden darf', correct: false },


    // openHPI Onboarding
    { id: 194011, question_id: 19401, title: 'Modular Online Organization Cloud', correct: false },
    { id: 194012, question_id: 19401, title: 'Mastering Organization Online Certificate', correct: false },
    { id: 194013, question_id: 19401, title: 'Minimal Objects Operation Chip', correct: false },
    { id: 194014, question_id: 19401, title: 'Massive Open Online Course', correct: true },

    { id: 194021, question_id: 19402, title: 'Nur Studierende des Hasso-Plattner-Instituts', correct: false },
    { id: 194022, question_id: 19402, title: 'Unternehmensmitarbeiter/innen, die einen persönlichern Einladungslink erhalten haben', correct: false },
    { id: 194023, question_id: 19402, title: 'Alle, unabhängig von Bildungsabschluss, Alter, Unternehmenszugehörigkeit etc.', correct: true },
    { id: 194024, question_id: 19402, title: 'Alle, die mindestens einen Bachelorabschluss haben', correct: false },

    { id: 194031, question_id: 19403, title: 'Lediglich Internetverbindung und ein Gerät mit aktuellem Internet-Browser sind nötig', correct: true },
    { id: 194032, question_id: 19403, title: 'Zeit für die Teilnahme vor Ort am HPI', correct: false },
    { id: 194033, question_id: 19403, title: 'Herunterladen der Lern-Software', correct: false },
    { id: 194034, question_id: 19403, title: 'Mindestens Informatik als Schulfach belegt', correct: false },

    { id: 194041, question_id: 19404, title: 'Nein, da die Kurse kostenlos sind', correct: false },
    { id: 194042, question_id: 19404, title: 'Ja, eine Teilnahmebescheinigung; wenn min. 50% der Kursmaterialien angeschaut wurden', correct: true },
    { id: 194043, question_id: 19404, title: 'Ja, ein Zeugnis; wenn ich mindestens 50% der möglichen Punkte erreicht habe', correct: true },
    { id: 194044, question_id: 19404, title: 'Ja. Ich kann ein qualifiziertes Zertifikat buchen, mit dem ich ECTS erhalten kann', correct: true },

    { id: 194051, question_id: 19405, title: 'Alle Lernmaterialien werden mir per Mail zugeschickt', correct: false },
    { id: 194052, question_id: 19405, title: 'Online auf der Kursseite unter dem Reiter \"Lernmaterial\"', correct: true },
    { id: 194053, question_id: 19405, title: 'Online auf Facebook und Twitter', correct: false },
    { id: 194054, question_id: 19405, title: 'Lernmaterialien werden mit postalisch zugesandt', correct: false },

    { id: 194061, question_id: 19406, title: '(Kurze) Videos', correct: false },
    { id: 194062, question_id: 19406, title: 'Selbsttests', correct: false },
    { id: 194063, question_id: 19406, title: 'Online-Lesematerial', correct: false },
    { id: 194064, question_id: 19406, title: 'Käuflich zu erwerbendes obligatorisches Buch', correct: true },

    { id: 194071, question_id: 19407, title: 'Wenn mir eine Antwort geholfen hat, kann ich diese als \"korrekt\" markieren', correct: false },
    { id: 194072, question_id: 19407, title: 'Aktiver Austausch mit anderen Teilnehmer/innen hilft beim Reflektieren und Verstehen', correct: false },
    { id: 194073, question_id: 19407, title: 'Ich darf inhaltlichen Fragen nicht diskutieren, da dies als Schummeln gewertet wird', correct: true },
    { id: 194074, question_id: 19407, title: 'Das Kursteam beantwortet Fragen und freut sich über Feedback', correct: false },

    { id: 194081, question_id: 19408, title: 'Hausaufgaben können einmalig wiederholt werden, um mehr Punkte zu erreichen', correct: true },
    { id: 194082, question_id: 19408, title: 'Selbsttests zählen nicht zu den für das Zertifikat erreichbaren Punkten', correct: false },
    { id: 194083, question_id: 19408, title: 'Selbsttests können beliebig oft wiederholt werden', correct: false },
    { id: 194084, question_id: 19408, title: 'Hausaufgaben müssen bis zu einer meist wöchentlichen Abgabefrist bearbeitet werden', correct: false },

    { id: 194091, question_id: 19409, title: 'Beim PA bewerten sich Teilnehmer/innen gegenseitig', correct: false },
    { id: 194092, question_id: 19409, title: 'PA wird genutzt, wenn eine automatische Auswertung didaktisch nicht sinnvoll ist', correct: false },
    { id: 194093, question_id: 19409, title: 'Beim PA kann ich beliebig viele Beiträge anderer Teilnehmer/innen bewerten', correct: true },
    { id: 194094, question_id: 19409, title: 'Für gutes PA-Feedback können Zertifikat-Bonuspunkte gesammelt werden', correct: false },

    { id: 194101, question_id: 19410, title: 'In-Memory Data Management (Prof. Plattner)', correct: true },
    { id: 194102, question_id: 19410, title: 'Parallel Programming Concepts (Prof. Naumann)', correct: false },
    { id: 194103, question_id: 19410, title: 'Web Technologies (Prof. Meinel)', correct: false },
    { id: 194104, question_id: 19410, title: 'Knowledge Engineering with Semantic Web Technologies (Prof. Sack)', correct: false },

  ]
});

export default Answer;
