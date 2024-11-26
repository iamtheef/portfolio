export const content = {
  GR: {
    HEADER: "Καλώς ήρθατε! Χαίρομαι που θέλετε να με γνωρίσετε.",

    INTRO:
      "Ονομάζομαι Θεργιάκης Ευτύχιος, είμαι full-stack developer, έχω γενηθεί, μεγαλώσει και ζω στο Ηράκλειο Κρήτης. Είμαι εφευρετικός, αυτοδίδακτος, εργατικός και μαθαίνω γρήγορα. Ευέλικτος και ομαδικός. Ψάχνω μία θέση στον τομέα ανάπτυξης εφαρμογών όπου οι δεξιότητες μου θα προσφέρουν στο τελικό αποτέλεσμα, καθώς θα μου επιτρέπει να επεκτείνω τις γνώσεις μου στον τομέα του software και να εμβαθύνω περισσότερο στον τομέα του ΑΙ. Περισσότερα στην σελίδα",

    ABOUT_ME_TAG: "/about.",

    PROFILE:
      "Software engineer, AI enthusiast, μερικές φορές geek. Μου αρέσουν οι άνθρωποι που χαμογελούν και έχουν χιούμορ, τα παζλς και οι γρίφοι και πιστεύω ότι ο προγραμματισμός ειναι ένας πιό κομψός τρόπος να λύνεις προβλήματα. Με γοητεύει το πως μια γραμμή κώδικα μπορεί να αλλάξει την καθημερινότητα κάποιου. Στον ελεύθερο μου χρόνο μου αρέσει να γράφω ηλεκτρονική μουσική.",

    WORK_EXP: [
      {
        title: "Squaredev",
        period: {
          text: "Mάρτιος 2022 - Σήμερα",
          date: {
            start: "03/22",
            end:
              new Date().getMonth() +
              "/" +
              new Date().getYear().toString().slice(-2),
          },
        },
        description:
          "Ανάπτυξη της πλατφόρμας του Ευρωπαϊκού οργανισμού BOIP για κατοχύρωση δικαιωμάτων άλλων οργανισμών και εταιρειών ως εξωτερικός σύμβουλος στην Ιntrasoft και σημαντικός παράγοντας στο frontend κομμάτι. Ανάπτυξη του recommendation system Anty, ένα από τα κύρια προϊόντα της Squaredev στου οποίου η συμμετοχή ήταν καθοριστική καθώς ενεπλάκει σε όλα τα επίπεδα ανάπτυξής του. Επιπλέον συμμετείχα στο έργο Sunrise EU για την πρόβλεψη της ζήτησης πόρων σε διάφορους δημόσιους τομείς, όπως το νερό και η υγειονομική περίθαλψη. Εξερεύνησα τα πάντα, από την ανάπτυξη βιβλιοθηκών μέχρι τα deployments, το k8s, τα releases του τελικού εργαλείου κλπ. Τέλος ανέπτυξα μία πλατφόρμα για penetration testing σε LLMs σε συνεργασία με την AIandMe η οποία περιλαμβάνει διάφορες τεχνολογίες όπως multithreading, web-sockets, relational βάσεις δεδομένων και διάφορα deployments στο Azure καθώς και αρκετές συνεισφορές στο FE κομμάτι με Next.js",
      },
      {
        title: "Resitech LTD",
        period: {
          text: "Απρίλιος 2021 - Μάρτιος 2022",
          date: { start: "04/21", end: "03/22" },
        },
        description:
          "Ανάπτυξη της πλατφόρμας της Resitech LTD για παρουσίαση NLP και Real Estate δεδομένων σε μορφή γραφημάτων με χρήση τεχνολογιών όπως React.js, Node.js, και Mongo DB σε βάση δεδομένων, καθώς και συλλογή δεδομένων από σελίδες real estate (web scraping). Επιπλέον η ανάπτυξη ενός μικρού ισχυρού interactive εργαλείου για συλογή feedback πελατών καθώς και αναφοράς προβλημάτων μέσα από αυτό.",
      },
    ],

    EDUCATION:
      "Έχω παρακολουθήσει πάνω από 400 ωρες μαθημάτων στο Udemy και κατέχω τα παρακάτω πιστοποιητικά: ",

    LANG_ARRAY: ["Ελληνικά", "Αγγλικά", "Λίγα Γαλλικά και Ιταλικά"],

    CONTACT_PROMPT:
      "Εάν έχω ξεχάσει να αναφέρω κάτι μπορείτε πάντα να επικοινωνήσετε μαζί μου με τους εξής τρόπους:",

    DOWNLOAD_CV: "Kατεβάστε το βιογραφικό μου",

    PINNED: {
      iamAI: {
        TITLE: "iamAI",
        DESCRIPTION:
          "Ένα έξυπνο chatbot που απαντάει παντός τύπου ερωτήσεις, καθώς είναι και διαθέσιμο μέσω API.",
      },
    },

    AND: " και ",
    PROJECTS: [
      {
        "name": "AlandMe Platform",
        "duration": "Σεπ 2024 - Παρόν",
        "company": "Squaredev",
        "description": "Ανάπτυξη από το μηδέν ενός backend για αξιολόγηση LLM πρακτόρων, χρησιμοποιώντας SQL Server/CosmosDB, Durable Functions, Azure Storage, Multithreading και γρήγορο middleware για ζωντανή αξιολόγηση των αιτημάτων χρηστών πριν φτάσουν στον πράκτορα.",
        "skills": [
          "Python (Programming Language)",
          "Microsoft SQL Server",
          "Microsoft Azure",
          "Multithreading",
          "Storage Management",
          "Azure Cosmos DB"
        ]
      },
      {
        "name": "AI Prognosis",
        "duration": "Σεπ 2024 - Σεπ 2024",
        "company": "Squaredev",
        "description": "Ένας αποδοτικός προγραμματιστής ειδοποιήσεων για το έργο AI Prognosis.",
        "skills": [
          "Python (Programming Language)",
          "Celery"
        ]
      },
      {
        "name": "Sunrise EU",
        "duration": "Νοε 2023 - Σεπ 2024",
        "company": "Squaredev",
        "description": "Ένα εργαλείο πρόβλεψης ζήτησης πολλαπλών τομέων για το κοινό. Αναπτύχθηκε και αυτοματοποιήθηκε η ανάπτυξη διάφορων μοντέλων μηχανικής μάθησης που χρησιμοποιούνται για να βοηθήσουν δημόσιους οργανισμούς στις αποφάσεις τους για τη διαχείριση πόρων.",
        "skills": [
          "Python (Programming Language)",
          "Elasticsearch",
          "Keycloak",
          "MinIO Object Storage Suite",
          "Bash",
          "GitHub Actions",
          "Kubernetes",
          "Docker Products",
          "Continuous Integration and Continuous Delivery (CI/CD)"
        ],
        "additional_info": "timepulse: Μια μικρή βιβλιοθήκη που φτιάξαμε για την ενσωμάτωση διαφορετικών μοντέλων στο έργο Sunrise"
      },
      {
        "name": "UpHellas",
        "duration": "Ιουλ 2023 - Ιουλ 2023",
        "company": "Squaredev",
        "description": "Βελτιστοποίηση του MLTool για αποδοτική επίλυση προβλημάτων συνδέσεων εγγραφών χρησιμοποιώντας παράλληλη επεξεργασία στην Python.",
        "skills": [
          "Parallel Processing",
          "Multithreading",
          "Python (Programming Language)"
        ]
      },
      {
        "name": "Anty",
        "duration": "Μαϊ 2022 - Ιαν 2023",
        "company": "Squaredev",
        "description": "Ένα σύστημα συστάσεων μεγάλης κλίμακας υψηλών επιδόσεων. Το σύστημα αυτό αναπτύχθηκε και αναπτύχθηκε για να υποστηρίζει διάφορες e-pharmacies, διαχειριζόμενο υψηλά φορτία ταυτόχρονα από διάφορα καταστήματα. Παρέχει αποδοτικές εξατομικευμένες συστάσεις σε όλους τους πελάτες, διασφαλίζοντας αδιάλειπτη ενσωμάτωση σε διάφορες πλατφόρμες.",
        "skills": [
          "Python (Programming Language)",
          "Neo4j",
          "PostgreSQL",
          "Kubernetes",
          "Continuous Integration and Continuous Delivery (CI/CD)"
        ],
        "related_article": "Graphs (should be) everywhere"
      },
      {
        "name": "BOIP Platform (Intrasoft)",
        "duration": "Μαρ 2022 - Αυγ 2022",
        "company": "Squaredev",
        "description": "Ευρωπαϊκό έργο για το BOIP, έναν οργανισμό για την προστασία δικαιωμάτων άλλων πλατφορμών/οργανισμών.",
        "skills": [
          "React.js",
          "JavaScript",
          "TypeScript"
        ]
      },
      {
        "name": "Chatbot Gadget",
        "duration": "Ιουλ 2021 - Αυγ 2021",
        "company": "Tychetech Ltd",
        "description": "Ένα μικρό εργαλείο που λειτουργεί σε όλους τους browsers για έρευνες χρηστών.",
        "skills": [
          "JavaScript",
          "Node.js"
        ]
      },
      {
        "name": "Web scraping",
        "duration": "Μαϊ 2021 - Ιουν 2021",
        "company": "Tychetech Ltd",
        "description": "Web scraping μεγάλων ιστότοπων με δεδομένα ακινήτων για τη δημιουργία μιας βάσης δεδομένων για ανάλυση ML.",
        "skills": ["JavaScript", "Python (Programming Language)", "Node.js"]
      },
      {
        "name": "Resitech real estate platform",
        "duration": "Μαρ 2021 - Μαϊ 2021",
        "company": "Tychetech Ltd",
        "description": "Πλατφόρμα ακινήτων της Resitech για την παρουσίαση δεδομένων της ΕΛΣΤΑΤ σε γραφήματα.",
        "skills": ["React.js", "JavaScript"]
      }
    ]
    
  },

  EN: {
    HEADER: "Welcome! I am glad you want to know me.",

    INTRO:
      "My name is Thergiakis Eftichios, I am a software engineer born and raised in the capital city Heraklion of Crete island where I also live. I consider myself a resourceful, self-motivated software engineer who is hard working and a quick learner. I am flexible as well as team orientated. I am currently seeking for a software engineer role where my existing qualifications will add value to the outset, whilst I continue to further develop my knowledge in the field as well as to expand further on the AI sector. More on",

    ABOUT_ME_TAG: "/about.",

    PROFILE:
      " I am a fullstack software engineer, ΑΙ enthusiast, sometimes a geek. I am quite humorous and I like people who smile and are open. Generally I love solving puzzles etc and I think programming is just that in a more elegant and professional level. Often get charmed by how a single line of code can affect someone's reality. Ι also like electronic music and I try to produce on my spare time.",

    WORK_EXP: [
      {
        title: "Squaredev",
        period: {
          text: "March 2022 - Today",
          date: {
            start: "03/22",
            end:
              new Date().getMonth() +
              "/" +
              new Date().getYear().toString().slice(-2),
          },
        },
        description:
          "Involved in the development of EU organization BOIP platform for rights registration of other organizations as an external consultant in Intrasoft and an important contributor in the frontend part of the project. Also possessed a key role in all phases from the development to the release and maintenance of the recommendation system Anty, one of the main products of Squaredev. Additionally involved in the Sunrise EU project for resource demand prediction in various public sectors such as water and health care. Explored everything from library development to deployments, k8s, releases of the final tool etc. Lastly developed an LLM penetration testing platform in cooperation with AIandMe which includes various technologies such as multithreading, web-sockets, relational databases and Azure various deployments as well as several contributions to the FE using Next.js.",
      },
      {
        title: "Resitech LTD",
        period: {
          text: "Arpil 2021 - March 2022",
          date: { start: "04/21", end: "03/22" },
        },
        description:
          "Involved in the development of Resitech platform for presenting NLP and real estate analytics data with technologies like React.js, Node.js, and Mongo DB as well as collecting data from Real Estate pages (web scraping). Additionally developed a small powerful interactive gadget used to collect client feedback as well as problem reporting integrated in various platforms like e-shops.",
      },
    ],

    EDUCATION:
      "Total time spent on lectures on Udemy is over 400 hours and I have successfully obtained the certificates below: ",

    LANG_ARRAY: ["Greek", "English", "Basic French and Italian"],

    CONTACT_PROMPT:
      "If I left anything out or you have further questions feel free to contact me.",

    DOWNLOAD_CV: "Download my CV",

    PINNED: {
      iamAI: {
        TITLE: "iamAI",
        DESCRIPTION:
          "A smart chatbot that can answer all sorts of questions, also available through an API.",
      },
    },
    AND: " and ",
    PROJECTS: [
      {
        "name": "AlandMe ",
        "duration": "Sep 2024 - Present",
        "company": "Squaredev",
        "description": "Custom LLM agent evaluation backend from scratch using SQL Server/CosmosDB, Durable functions, Azure Storage, Multithreading and a fast middleware for live evaluation of user prompts before they reach the agent.",
        "skills": [
          "Python (Programming Language)",
          "Microsoft SQL Server",
          "Microsoft Azure",
          "Multithreading",
          "Storage Management",
          "Azure Cosmos DB"
        ]
      },
      {
        "name": "AI Prognosis",
        "duration": "Sep 2024 - Sep 2024",
        "company": "Squaredev",
        "description": "A well performant scheduler to send notifications to users for the AI Prognosis project.",
        "skills": [
          "Python (Programming Language)",
          "Celery"
        ]
      },
      {
        "name": "Sunrise EU",
        "duration": "Nov 2023 - Sep 2024",
        "company": "Squaredev",
        "description": "A multi-sector demand prediction tool for the public. Developed and automated deployment of various ML models used to assist public entities in their desisions to support resource management.",
        "skills": [
          "Python (Programming Language)",
          "Elasticsearch",
          "Keycloak",
          "MinIO Object Storage Suite",
          "Bash",
          "GitHub Actions",
          "Kubernetes",
          "Docker Products",
          "Continuous Integration and Continuous Delivery (CI/CD)"
        ],
        "additional_info": "timepulse: A small library we made to integrate different models in the Sunrise project"
      },
      {
        "name": "UpHellas",
        "duration": "Jul 2023 - Jul 2023",
        "company": "Squaredev",
        "description": "Optimization of MLTool to solve a record linkage problem efficiently using parallel processing in Python.",
        "skills": [
            "Parallel Processing",
            "Multithreading",
            "Python (Programming Language)"
        ]
    },
    {
        "name": "Anty",
        "duration": "May 2022 - Jan 2023",
        "company": "Squaredev",
        "description": "A high-performance large-scale recommender system. This system was developed and deployed to support multiple e-pharmacies, handling high concurrent loads from various shops. It efficiently serves personalized recommendations to all clients, ensuring seamless integration across different platforms.",
        "skills": [
            "Python (Programming Language)",
            "Neo4j",
            "PostgreSQL",
            "Kubernetes",
            "Continuous Integration and Continuous Delivery (CI/CD)"
        ],
        "related_article": "Graphs (should be) everywhere"
    },
    {
        "name": "BOIP Platform (Intrasoft)",
        "duration": "Mar 2022 - Aug 2022",
        "company": "Squaredev",
        "description": "EU project for BOIP, an organization for right protection of other platforms/organizations.",
        "skills": [
            "React.js",
            "JavaScript",
            "TypeScript"
        ]
    },
    {
        "name": "Chatbot Gadget",
        "duration": "Jul 2021 - Aug 2021",
        "company": "Tychetech Ltd",
        "description": "A small gadget working in all browsers for user surveys.",
        "skills": [
            "JavaScript",
            "Node.js"
        ]
    },
    {
      "name": "Web scraping",
      "duration": "May 2021 - Jun 2021",
      "company": "Tychetech Ltd",
      "description": "Web scraping large scale sites with real estate data for building a database for ML analysis",
      "skills": ["JavaScript", "Python (Programming Language)", "Node.js"]
    },
    {
      "name": "Resitech real estate platform",
      "duration": "Mar 2021 - May 2021",
      "company": "Tychetech Ltd",
      "description": "Resitech's real estate platform for presenting data of Elstat in charts",
      "skills": ["React.js", "JavaScript"]
    }
    ]
    
  },
};

export const tags = {
  GR: {
    aboutMe: {
      profile: "Προφίλ",
      experience: "Εργασιακή εμπειρία",
      skills: "Δεξιότητες και τεχνογνωσία",
      education: "Εκπαίδευση",
      books: "Βιβλία",
      languages: "Γλώσσες",
    },
    experience: {
      recent: "Πρόσφατα πρότζεκτς",
      buttons: {
        viewAPI: "API",
        viewRepo: "Github",
        viewClient: "Client",
        visitApp: "App",
      },
      pinned: "Επιφανή",
    },
    navbar: {
      home: "Αρχική",
      experience: "Εμπειρία",
      aboutMe: "Σχετικά με εμένα",
      contact: "Επικοινωνήστε",
    },
  },

  EN: {
    aboutMe: {
      profile: "Profile",
      experience: "Work Experience",
      skills: "Skills & Knowledge",
      education: "Education",
      books: "Βooks",
      languages: "Languages",
    },
    experience: {
      recent: "Recent projects",
      buttons: {
        viewAPI: "API",
        viewRepo: "Github",
        viewClient: "Client",
        visitApp: "App",
      },
      pinned: "Pinned",
    },
    navbar: {
      home: "Home",
      experience: "Experience",
      aboutMe: "About Me",
      contact: "Contact",
    },
  },
};
