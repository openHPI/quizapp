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
    { id: 1052, question_id: 105, title: 'Netzwerkadressen', correct: true },
    { id: 1053, question_id: 105, title: 'Ringtopologie', correct: false },
    { id: 1054, question_id: 105, title: 'Grundeinstellung der Rechner muss auf "Nachrichten akzeptieren" gesetzt sein.', correct: false },
    { id: 1061, question_id: 106, title: 'wird bei einem Ausfall des Systems die Funktion durch ein anderes System übernommen.', correct: true },
    { id: 1062, question_id: 106, title: 'findet ein Lastenausgleich zwischen den verbundenen Rechnern statt.', correct: false },
    { id: 1063, question_id: 106, title: 'gibt es eine Firewall, die für alle verbunden Rechner gilt.', correct: false },
    { id: 1064, question_id: 106, title: 'befinden sich die Systeme in speziell abgesicherten Räumen.', correct: false },
    { id: 1071, question_id: 107, title: 'Ein persönliches Geheimnis, z.B. den Vornamen Ihres besten Freundes', correct: false },
    { id: 1072, question_id: 107, title: 'Ein geheimes Wort aus dem englischen Wörterbuch', correct: false },
    { id: 1073, question_id: 107, title: 'Name einer Stadt', correct: false },
    { id: 1074, question_id: 107, title: 'Eine mind. 8-Zeichen lange Aneinanderreihung unterschiedlicher Zeichen', correct: true },
    { id: 1081, question_id: 108, title: '26march1989', correct: false },
    { id: 1082, question_id: 108, title: 'x1@56hjKl', correct: true },
    { id: 1083, question_id: 108, title: 'PotsdamerPlatz', correct: false },
    { id: 1084, question_id: 108, title: 'Martin', correct: false },
    { id: 1091, question_id: 109, title: 'In sozialen Medien gibt es eine feste Rollenverteilung in Ersteller und Konsument von Inhalten.', correct: false },
    { id: 1092, question_id: 109, title: 'Soziale Medien sind global verfügbar und leicht zugänglich.', correct: true },
    { id: 1093, question_id: 109, title: 'Social Media bietet keine Möglichkeit der Kollaboration oder Interaktion zwischen den verschiedenen Nutzern.', correct: false },
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
    { id: 2023, question_id: 202, title: 'HTTPS', correct: false },
    { id: 2024, question_id: 202, title: 'Techno', correct: false },
    { id: 2031, question_id: 203, title: 'Nachrichtenkopf', correct: true },
    { id: 2032, question_id: 203, title: 'Nachrichtenpaket', correct: false },
    { id: 2033, question_id: 203, title: 'IP-Adresse des WWW-Servers', correct: false },
    { id: 2034, question_id: 203, title: 'Grußzeile', correct: false },
    { id: 2041, question_id: 204, title: 'Ein Angriff, bei dem der Angreifer Schadsoftware auf dem System des Nutzers installiert, während er das Antivirus-Programm Norton installiert.', correct: false },
    { id: 2042, question_id: 204, title: 'Bei einem Spoofing-Angriff unterscheidet sich die Email-Adresse von der richtigen E-Mail-Adresse des genannten Absenders.', correct: false },
    { id: 2043, question_id: 204, title: 'Bei einem Spoofing-Angriff werden alle Rechnerdaten verschlüsselt und gegen Geldzahlung wieder freigegeben.', correct: false },
    { id: 2044, question_id: 204, title: 'Ein Angriff, bei dem sich der Angreifer als ein berechtigter Nutzer maskiert, den das Angriffsopfer kennt.', correct: true },
    { id: 2051, question_id: 205, title: 'Festplattendaten werden übertragen, wenn der Server diese anfordert.', correct: false },
    { id: 2052, question_id: 205, title: 'Nutzer-Präferenz speichern', correct: true },
    { id: 2053, question_id: 205, title: 'Um Kekse-Werbung zu schalten.', correct: false },
    { id: 2054, question_id: 205, title: 'Ausspähen persönlicher Daten', correct: false },
    { id: 2061, question_id: 206, title: 'Durch eine E-Mail, die man an die gewünschte URL richtet', correct: false },
    { id: 2062, question_id: 206, title: 'Klick auf einen Hyperlink', correct: true },
    { id: 2063, question_id: 206, title: 'Man muss immer zuerst die Google-Suche öffnen, um eine beliebige Seite zu öffnen', correct: false },
    { id: 2064, question_id: 206, title: 'Durch Eingabe des Firmennamens in die Adresszeile des Browsers.', correct: false },
    { id: 2071, question_id: 207, title: 'Websites, die dem Responsive Webdesign-Paradigma folgen, sollen auf Anforderungen verschiedener Endgeräte reagieren können.', correct: true },
    { id: 2072, question_id: 207, title: 'Responsive Webdesign setzt JavaScript voraus.', correct: false },
    { id: 2073, question_id: 207, title: 'Beim Responsive Webdesign sollte auf kleineren Bildschirmen ein Teil der Informationen weggelassen werden, um die wichtigen Teile besser darstellen zu können.', correct: false },
    { id: 2074, question_id: 207, title: 'Beim Responsive Webdesign gibt es immer ein Antwort-Feld auf der Startseite, in der die Nutzer Feedback zur Seite eintragen und abschicken können.', correct: false },
    { id: 2081, question_id: 208, title: 'Strukturierung von Unternehmensdaten', correct: false },
    { id: 2082, question_id: 208, title: 'Basis für Webservice-Infrastrukturen', correct: false },
    { id: 2083, question_id: 208, title: 'Bildergalerie für Urlaubsfotos', correct: false },
    { id: 2084, question_id: 208, title: 'Kollaborationsplatform', correct: true },
    { id: 2091, question_id: 209, title: 'HTML kommt bei dynamischen Webseiten nicht mehr zum Einsatz.', correct: false },
    { id: 2092, question_id: 209, title: 'Die Webseite wird erst auf die Anfrage des Nutzers hin generiert.', correct: true },
    { id: 2093, question_id: 209, title: 'Es gibt Elemente auf der Webseite, die sich bewegen.', correct: false },
    { id: 2094, question_id: 209, title: 'Die Webseite liegt fertig auf dem Server zum Abruf bereit.', correct: false },
    { id: 2101, question_id: 210, title: 'Angreifer täuscht Identität eines (vom Opfer genutzten) Dienstanbieters vor.', correct: true },
    { id: 2102, question_id: 210, title: 'Gegen Phishing gibt es kaum Gegenmaßnahmen, da der Angriff komplett ohne Mitwirkung des Opfers stattfindet.', correct: false },
    { id: 2103, question_id: 210, title: 'Beim Spear Phishing wird nicht mehr mit E-Mails gearbeitet, sondern stattdessen mit Instant Messenger-Diensten.', correct: false },
    { id: 2104, question_id: 210, title: 'Phishing ist eine sehr schwierige Angriffsmethode, da Email-Absender-Adressen kaum zu fälschen sind.', correct: false },
  ]
});

export default Answer;
