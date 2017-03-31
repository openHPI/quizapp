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

    { id: 111, question_id: 21, title: 'HTML Programmier Internat', correct: false },
    { id: 112, question_id: 21, title: 'Hasso Plattner Institut', correct: true },
    { id: 113, question_id: 21, title: 'Hans Peters Imkerschule', correct: false },
    { id: 114, question_id: 21, title: 'Hasso Plattner International', correct: false },

    // { id: 22, relativeId: 2, quiz_id: 3, title: 'Welchen Studiengang kann man am HPI studieren?', answers: [141, 142, 143, 144] },
    { id: 141, question_id: 22, title: 'Medieninformatik', correct: false },
    { id: 142, question_id: 22, title: 'IT Special Force Engineering', correct: false },
    { id: 143, question_id: 22, title: 'Wirtschaftsinformatik', correct: false },
    { id: 144, question_id: 22, title: 'IT Systems Engineering', correct: true },

    { id: 101, question_id: 23, title: 'Modular Online Organization Cloud', correct: false },
    { id: 102, question_id: 23, title: 'Massive Open Online Courses', correct: true },
    { id: 103, question_id: 23, title: 'Multi Organic Oyster Club', correct: false },
    { id: 104, question_id: 23, title: 'My Own Operating Class', correct: false },

    //{ id: 121, question_id: 24, title: 'Billard', correct: false },
    //{ id: 122, question_id: 24, title: 'Pogo Stab Hüpfen', correct: false },
    //{ id: 123, question_id: 24, title: 'Dart', correct: false },
    //{ id: 124, question_id: 24, title: 'Fussball', correct: true },

    { id: 121, question_id: 24, title: 'Big Data, big people.', correct: false },
    { id: 122, question_id: 24, title: 'Smart something!', correct: false },
    { id: 123, question_id: 24, title: 'Design IT, create knowledge.', correct: false },
    { id: 124, question_id: 24, title: 'Gemeinsam wachsen.', correct: true },

    { id: 131, question_id: 25, title: 'Tropfende Wasserhähne', correct: false },
    { id: 132, question_id: 25, title: 'Im Netz kursierende Identitätsdaten', correct: true },
    { id: 133, question_id: 25, title: 'Festplatten mit Datenverlust', correct: false },
    { id: 134, question_id: 25, title: 'Verblassende Personalausweise', correct: false },

    // { id: 26, relativeId: 6, quiz_id: 3, title: 'Wfür steht Design Thinking?', answers: [151, 152, 153, 154] },
    { id: 151, question_id: 26, title: 'Einen Studentenklub am HPI, der sich stets neue Designs ausdenkt', correct: false },
    { id: 152, question_id: 26, title: 'Ein Konzept zum intensiveren Nachdenken', correct: false },
    { id: 153, question_id: 26, title: 'Eine Methode für systematische Innovation', correct: true },
    { id: 154, question_id: 26, title: 'Ein neues Forschungsgebiet über Designer, die zu viel denken', correct: false },

    { id: 161, question_id: 27, title: '8', correct: false },
    { id: 162, question_id: 27, title: '9', correct: false },
    { id: 163, question_id: 27, title: '10', correct: true },
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
    { id: 1033, question_id: 103, title: 'von Google gegründete Netzverbund', correct: false },
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
    { id: 2073, question_id: 207, title: 'Auf kleine Screens werden Informationen weggelassen, um wichtige Teile besser darstellen zu können.', correct: false },
    { id: 2074, question_id: 207, title: 'Es gibt immer ein Antwort-Feld für Nutzer-Feedback auf der Startseite.', correct: false },

    { id: 2081, question_id: 208, title: 'Strukturierung von Big Data', correct: false },
    { id: 2082, question_id: 208, title: 'Basis für Webservice-Infrastrukturen', correct: false },
    { id: 2083, question_id: 208, title: 'Bildergalerie für Urlaubsfotos', correct: false },
    { id: 2084, question_id: 208, title: 'Kollaborationsplatform', correct: true },

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
    { id: 3032, question_id: 303, title: 'Informierte Einwilligung (informed consent)', correct: false },
    { id: 3033, question_id: 303, title: 'Restriktive Zweckbindung', correct: false },
    { id: 3034, question_id: 303, title: 'Repressives Verbot mit Befreiungsvorbehalt', correct: false },

    { id: 3041, question_id: 304, title: 'Digitale Bildungsinhalte, die ausschließlich lokal ausgeführt werden', correct: false },
    { id: 3042, question_id: 304, title: 'Digitale Bildungsinhalte, die in verteilten Silos gespeichert sind', correct: false },
    { id: 3043, question_id: 304, title: 'Webbasierte Bildungsinhalte', correct: true },
    { id: 3044, question_id: 304, title: 'Nicht-webbasierte digitale Bildungsinhalte', correct: false },

    { id: 3051, question_id: 305, title: 'Eine leicht bedienbare Schulverwaltungssoftware', correct: false },
    { id: 3052, question_id: 305, title: 'Eine Social Media-Plattform', correct: false },
    { id: 3053, question_id: 305, title: 'Einen Inhaltedienst', correct: true },
    { id: 3054, question_id: 305, title: 'Ein Lernmanagementsystem', correct: false },

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

    { id: 3091, question_id: 309, title: 'Ausgewählte MINT-EC-Pilotschulen', correct: true },
    { id: 3092, question_id: 309, title: 'MINT-freundliche Schulen', correct: false },
    { id: 3093, question_id: 309, title: 'Mitgliedsschulen von "Komm, mach MINT"', correct: false },
    { id: 3094, question_id: 309, title: 'Alle Schulen im In- und Ausland', correct: false },

    { id: 3101, question_id: 310, title: 'Die Benutzeroberfläche ist als Webanwendung umgesetzt', correct: true },
    { id: 3102, question_id: 310, title: 'Die Schul-Cloud basiert auf einem monolithischen Kern', correct: false },
    { id: 3103, question_id: 310, title: 'Es werden proprietäre Browser-Plugins (bspw. Flash-Technologie) eingesetzt', correct: false },
    { id: 3104, question_id: 310, title: 'Alle Schüler/innen erhalten einen virtuellen Desktop', correct: false },

    { id: 3111, question_id: 311, title: 'Poetry & Parade', correct: false },
    { id: 3112, question_id: 311, title: 'ZEIT Konferenz Schule & Bildung', correct: false },
    { id: 3113, question_id: 311, title: 'Re:publica 2017', correct: true },
    { id: 3114, question_id: 311, title: '108. MNU-Bundeskongress', correct: false },
  ]
});

export default Answer;
