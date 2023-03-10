const nodesData = {
  design: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  analysis: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  testing: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  fabrication: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  inspection: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  "quality control": {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  "process optimization": {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  troubleshooting: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  "material selection": {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  },
  finishing: {
    neiGraph: {
      nodes: [
        { id: "design" },
        { id: "analysis" },
        { id: "testing" },
        { id: "fabrication" },
        { id: "inspection" },
        { id: "quality control" },
        { id: "process optimization" },
        { id: "troubleshooting" },
        { id: "material selection" },
        { id: "finishing" }
      ],
      links: [
        {
          source: "design",
          target: "analysis",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "testing",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "fabrication",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "inspection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "quality control",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "process optimization",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "troubleshooting",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "material selection",
          weight: Math.floor(Math.random() * 10) + 1
        },
        {
          source: "design",
          target: "finishing",
          weight: Math.floor(Math.random() * 10) + 1
        }
        // You can add more links between the other skills here if desired
      ]
    },
    stats: {
      exp: {
        "years 5 to 10 experience": 7,
        "years 3 to 5 experience": 8,
        beginner: 1,
        "years 10 to 20 experience": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: {
        "Bachlors +5  plus": 14,
        "Bachlors +4": 3,
        "Bachlors +3": 1
      },
      count_job: 18
    },
    priority: 8,
    twins: {
      fabricating: 0.6011327579667316,
      finishing: 0.08135447206223377,
      "Process optimization": 0.029928637719052277
      // You can add more properties to the twins object here if desired
    }
  }
};

/*const nodesData = {
  transformation: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "google cloud" },
        { id: "analytics" },
        { id: "java" },
        { id: "big data" },
        { id: "sql" },
        { id: "sonar" },
        { id: "bitbucket" },
        { id: "jira" },
        { id: "jenkins" },
        { id: "postman" },
        { id: "git" },
        { id: "jest" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "transformation" }
      ],
      links: [
        { source: "transformation", target: "scrum", weight: 2.0 },
        { source: "transformation", target: "devops", weight: 3.0 },
        { source: "transformation", target: "mise en place", weight: 2.0 },
        { source: "transformation", target: "google cloud", weight: 1.0 },
        { source: "transformation", target: "analytics", weight: 1.0 },
        { source: "transformation", target: "java", weight: 1.0 },
        { source: "transformation", target: "big data", weight: 1.0 },
        { source: "transformation", target: "sql", weight: 1.0 },
        { source: "transformation", target: "sonar", weight: 1.0 },
        { source: "transformation", target: "bitbucket", weight: 1.0 },
        { source: "transformation", target: "jira", weight: 1.0 },
        { source: "transformation", target: "jenkins", weight: 1.0 },
        { source: "transformation", target: "postman", weight: 1.0 },
        { source: "transformation", target: "git", weight: 1.0 },
        { source: "transformation", target: "jest", weight: 1.0 },
        { source: "transformation", target: "typescript", weight: 1.0 },
        { source: "transformation", target: "javascript", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 3, "De 3 ?? 5 ans": 2, "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 6 },
      study_lvl: { "Bac +5 et plus": 6 },
      count_job: 6
    },
    priority: 33,
    twins: {
      devops: 0.2754477311682474,
      "mise en place": 0.10133155741411654,
      scrum: 0.10133155741411654,
      javascript: 0.03727779671453711,
      typescript: 0.03727779671453711
    }
  },
  scrum: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "angular" },
        { id: "java 8" },
        { id: "java" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "mongodb" },
        { id: "machine learning" },
        { id: "scala" },
        { id: "deep learning" },
        { id: "sql" },
        { id: "nosql" },
        { id: "azure blob storage" },
        { id: "powerapps" },
        { id: "jira" },
        { id: "c" },
        { id: "unix" },
        { id: "source" },
        { id: "flux" },
        { id: "c++" },
        { id: "python" },
        { id: "javascript" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "gitlab" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "flask" },
        { id: "devops" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "linux" },
        { id: "sonar" },
        { id: "bitbucket" },
        { id: "postman" },
        { id: "jest" },
        { id: "typescript" },
        { id: "jquery" },
        { id: "ajax" },
        { id: "hibernate" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "mysql" },
        { id: "scrum" }
      ],
      links: [
        { source: "scrum", target: "transformation", weight: 2.0 },
        { source: "scrum", target: "docker", weight: 5.0 },
        { source: "scrum", target: "kubernetes", weight: 3.0 },
        { source: "scrum", target: "ansible", weight: 2.0 },
        { source: "scrum", target: "jenkins", weight: 4.0 },
        { source: "scrum", target: "nagios", weight: 1.0 },
        { source: "scrum", target: "puppet", weight: 1.0 },
        { source: "scrum", target: "nginx", weight: 2.0 },
        { source: "scrum", target: "git", weight: 7.0 },
        { source: "scrum", target: "gradle", weight: 1.0 },
        { source: "scrum", target: "angular", weight: 2.0 },
        { source: "scrum", target: "java 8", weight: 1.0 },
        { source: "scrum", target: "java", weight: 4.0 },
        { source: "scrum", target: "html5", weight: 2.0 },
        { source: "scrum", target: "bootstrap", weight: 2.0 },
        { source: "scrum", target: "kotlin", weight: 1.0 },
        { source: "scrum", target: "mongodb", weight: 1.0 },
        { source: "scrum", target: "machine learning", weight: 2.0 },
        { source: "scrum", target: "scala", weight: 2.0 },
        { source: "scrum", target: "deep learning", weight: 2.0 },
        { source: "scrum", target: "sql", weight: 4.0 },
        { source: "scrum", target: "nosql", weight: 1.0 },
        { source: "scrum", target: "azure blob storage", weight: 1.0 },
        { source: "scrum", target: "powerapps", weight: 1.0 },
        { source: "scrum", target: "jira", weight: 4.0 },
        { source: "scrum", target: "c", weight: 1.0 },
        { source: "scrum", target: "unix", weight: 1.0 },
        { source: "scrum", target: "source", weight: 1.0 },
        { source: "scrum", target: "flux", weight: 1.0 },
        { source: "scrum", target: "c++", weight: 1.0 },
        { source: "scrum", target: "python", weight: 2.0 },
        { source: "scrum", target: "javascript", weight: 4.0 },
        { source: "scrum", target: "user story", weight: 2.0 },
        { source: "scrum", target: "chef", weight: 2.0 },
        { source: "scrum", target: "postgresql", weight: 1.0 },
        { source: "scrum", target: "gitlab", weight: 2.0 },
        { source: "scrum", target: "xgboost", weight: 1.0 },
        { source: "scrum", target: "syslog", weight: 1.0 },
        { source: "scrum", target: "front end", weight: 1.0 },
        { source: "scrum", target: "data science", weight: 1.0 },
        { source: "scrum", target: "ip routing", weight: 1.0 },
        { source: "scrum", target: "public cloud", weight: 1.0 },
        { source: "scrum", target: "traefik", weight: 1.0 },
        { source: "scrum", target: "yaml", weight: 1.0 },
        { source: "scrum", target: "flask", weight: 1.0 },
        { source: "scrum", target: "devops", weight: 3.0 },
        { source: "scrum", target: "prometheus", weight: 1.0 },
        { source: "scrum", target: "cloud infrastructure", weight: 1.0 },
        { source: "scrum", target: "time series", weight: 1.0 },
        { source: "scrum", target: "mise en place", weight: 2.0 },
        { source: "scrum", target: "object storage", weight: 1.0 },
        { source: "scrum", target: "docker container", weight: 1.0 },
        { source: "scrum", target: "pytorch", weight: 1.0 },
        { source: "scrum", target: "routing protocols", weight: 1.0 },
        { source: "scrum", target: "terraform", weight: 1.0 },
        { source: "scrum", target: "api gateway", weight: 1.0 },
        { source: "scrum", target: "vm", weight: 2.0 },
        { source: "scrum", target: "jupyter", weight: 1.0 },
        { source: "scrum", target: "telemetry", weight: 1.0 },
        { source: "scrum", target: "json", weight: 1.0 },
        { source: "scrum", target: "linux", weight: 2.0 },
        { source: "scrum", target: "sonar", weight: 1.0 },
        { source: "scrum", target: "bitbucket", weight: 1.0 },
        { source: "scrum", target: "postman", weight: 1.0 },
        { source: "scrum", target: "jest", weight: 1.0 },
        { source: "scrum", target: "typescript", weight: 1.0 },
        { source: "scrum", target: "jquery", weight: 1.0 },
        { source: "scrum", target: "ajax", weight: 1.0 },
        { source: "scrum", target: "hibernate", weight: 3.0 },
        { source: "scrum", target: "jhipster", weight: 1.0 },
        { source: "scrum", target: "eclipse", weight: 1.0 },
        { source: "scrum", target: "sonarqube", weight: 1.0 },
        { source: "scrum", target: "mysql", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 7,
        "De 3 ?? 5 ans": 8,
        D??butant: 1,
        "De 10 ?? 20 ans": 2
      },
      contract_type: { CDI: 15, Freelance: 3 },
      study_lvl: { "Bac +5 et plus": 14, "Bac +4": 3, "Bac +3": 1 },
      count_job: 18
    },
    priority: 8,
    twins: {
      git: 0.6011327579667316,
      docker: 0.08135447206223377,
      javascript: 0.029928637719052277,
      jira: 0.029928637719052277,
      sql: 0.029928637719052277
    }
  },
  android: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "sonar" },
        { id: "jenkins" },
        { id: "git" },
        { id: "appium" },
        { id: "c" },
        { id: "c#" },
        { id: "c++" },
        { id: "sql" },
        { id: "php" },
        { id: "mysql" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "html5" },
        { id: "nice" },
        { id: "scripting" },
        { id: "back end" },
        { id: "docker" },
        { id: "linux" },
        { id: "hibernate" },
        { id: "ansible" },
        { id: "devops" },
        { id: "angular" },
        { id: "xamarin" },
        { id: "typescript" },
        { id: "json" },
        { id: "spring boot" },
        { id: "front end" },
        { id: "bootstrap" },
        { id: "android" }
      ],
      links: [
        { source: "android", target: "java", weight: 2.0 },
        { source: "android", target: "sonar", weight: 4.0 },
        { source: "android", target: "jenkins", weight: 4.0 },
        { source: "android", target: "git", weight: 3.0 },
        { source: "android", target: "appium", weight: 3.0 },
        { source: "android", target: "c", weight: 2.0 },
        { source: "android", target: "c#", weight: 2.0 },
        { source: "android", target: "c++", weight: 2.0 },
        { source: "android", target: "sql", weight: 4.0 },
        { source: "android", target: "php", weight: 1.0 },
        { source: "android", target: "mysql", weight: 2.0 },
        { source: "android", target: "design flow", weight: 1.0 },
        { source: "android", target: "surfaceflinger", weight: 1.0 },
        { source: "android", target: "sqlite", weight: 1.0 },
        { source: "android", target: "android studio", weight: 1.0 },
        { source: "android", target: "android sdk", weight: 1.0 },
        { source: "android", target: "html5", weight: 1.0 },
        { source: "android", target: "nice", weight: 1.0 },
        { source: "android", target: "scripting", weight: 1.0 },
        { source: "android", target: "back end", weight: 1.0 },
        { source: "android", target: "docker", weight: 1.0 },
        { source: "android", target: "linux", weight: 1.0 },
        { source: "android", target: "hibernate", weight: 1.0 },
        { source: "android", target: "ansible", weight: 1.0 },
        { source: "android", target: "devops", weight: 1.0 },
        { source: "android", target: "angular", weight: 1.0 },
        { source: "android", target: "xamarin", weight: 1.0 },
        { source: "android", target: "typescript", weight: 1.0 },
        { source: "android", target: "json", weight: 1.0 },
        { source: "android", target: "spring boot", weight: 1.0 },
        { source: "android", target: "front end", weight: 1.0 },
        { source: "android", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 7 },
      contract_type: { CDI: 8 },
      study_lvl: { "Bac +5 et plus": 6, "Bac +3": 1, "Bac +4": 1 },
      count_job: 8
    },
    priority: 27,
    twins: {
      sql: 0.18156231751162316,
      jenkins: 0.18156231751162316,
      sonar: 0.18156231751162316,
      appium: 0.06679304390396791,
      git: 0.06679304390396791
    }
  },
  java: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "sybase" },
        { id: "asp.net" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "angular" },
        { id: "sql" },
        { id: "hibernate" },
        { id: "git" },
        { id: "linux" },
        { id: "mysql" },
        { id: "splunk" },
        { id: "talend" },
        { id: "jira" },
        { id: "jenkins" },
        { id: "gitlab" },
        { id: "devops" },
        { id: "google cloud" },
        { id: "analytics" },
        { id: "big data" },
        { id: "pl/sql" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "pilotage" },
        { id: "windev" },
        { id: "back end" },
        { id: "spring webflux" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "front end" },
        { id: "javascript" },
        { id: "sonar" },
        { id: "jquery" },
        { id: "junit" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "php" },
        { id: "postgresql" },
        { id: "mulesoft" },
        { id: "eclipse" },
        { id: "source" },
        { id: "flux" },
        { id: "middleware" },
        { id: "unix" },
        { id: "c" },
        { id: "c++" },
        { id: "python" },
        { id: "user story" },
        { id: "chef" },
        { id: "mariadb" },
        { id: "continuous delivery" },
        { id: "computer science" },
        { id: "remuneration" },
        { id: "nosql" },
        { id: "api management" },
        { id: "webdev" },
        { id: "spring framework" },
        { id: "scripting" },
        { id: "agile methodology" },
        { id: "spring mvc" },
        { id: "mockito" },
        { id: "json" },
        { id: "nice" },
        { id: "jhipster" },
        { id: "ansible" },
        { id: "sonarqube" },
        { id: "xamarin" },
        { id: "typescript" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "vue.js" },
        { id: "redis" },
        { id: "java" }
      ],
      links: [
        { source: "java", target: "transformation", weight: 1.0 },
        { source: "java", target: "scrum", weight: 4.0 },
        { source: "java", target: "android", weight: 2.0 },
        { source: "java", target: "sybase", weight: 1.0 },
        { source: "java", target: "asp.net", weight: 1.0 },
        { source: "java", target: "docker", weight: 8.0 },
        { source: "java", target: "kubernetes", weight: 7.0 },
        { source: "java", target: "angular", weight: 20.0 },
        { source: "java", target: "sql", weight: 17.0 },
        { source: "java", target: "hibernate", weight: 13.0 },
        { source: "java", target: "git", weight: 11.0 },
        { source: "java", target: "linux", weight: 9.0 },
        { source: "java", target: "mysql", weight: 6.0 },
        { source: "java", target: "splunk", weight: 2.0 },
        { source: "java", target: "talend", weight: 3.0 },
        { source: "java", target: "jira", weight: 2.0 },
        { source: "java", target: "jenkins", weight: 11.0 },
        { source: "java", target: "gitlab", weight: 4.0 },
        { source: "java", target: "devops", weight: 6.0 },
        { source: "java", target: "google cloud", weight: 1.0 },
        { source: "java", target: "analytics", weight: 1.0 },
        { source: "java", target: "big data", weight: 1.0 },
        { source: "java", target: "pl/sql", weight: 3.0 },
        { source: "java", target: "spring cloud", weight: 1.0 },
        { source: "java", target: "apache hadoop", weight: 1.0 },
        { source: "java", target: "airflow", weight: 1.0 },
        { source: "java", target: "scala", weight: 1.0 },
        { source: "java", target: "sqoop", weight: 1.0 },
        { source: "java", target: "microservices", weight: 1.0 },
        { source: "java", target: "pilotage", weight: 1.0 },
        { source: "java", target: "windev", weight: 2.0 },
        { source: "java", target: "back end", weight: 5.0 },
        { source: "java", target: "spring webflux", weight: 3.0 },
        { source: "java", target: "mongodb", weight: 6.0 },
        { source: "java", target: "java 8", weight: 7.0 },
        { source: "java", target: "front end", weight: 6.0 },
        { source: "java", target: "javascript", weight: 8.0 },
        { source: "java", target: "sonar", weight: 6.0 },
        { source: "java", target: "jquery", weight: 1.0 },
        { source: "java", target: "junit", weight: 2.0 },
        { source: "java", target: "spring security", weight: 2.0 },
        { source: "java", target: "bitbucket", weight: 1.0 },
        { source: "java", target: "keycloak", weight: 1.0 },
        { source: "java", target: "spring boot", weight: 4.0 },
        { source: "java", target: "jest", weight: 1.0 },
        { source: "java", target: "html5", weight: 2.0 },
        { source: "java", target: "bootstrap", weight: 3.0 },
        { source: "java", target: "kotlin", weight: 1.0 },
        { source: "java", target: "php", weight: 4.0 },
        { source: "java", target: "postgresql", weight: 3.0 },
        { source: "java", target: "mulesoft", weight: 1.0 },
        { source: "java", target: "eclipse", weight: 2.0 },
        { source: "java", target: "source", weight: 2.0 },
        { source: "java", target: "flux", weight: 3.0 },
        { source: "java", target: "middleware", weight: 1.0 },
        { source: "java", target: "unix", weight: 7.0 },
        { source: "java", target: "c", weight: 1.0 },
        { source: "java", target: "c++", weight: 1.0 },
        { source: "java", target: "python", weight: 1.0 },
        { source: "java", target: "user story", weight: 1.0 },
        { source: "java", target: "chef", weight: 1.0 },
        { source: "java", target: "mariadb", weight: 1.0 },
        { source: "java", target: "continuous delivery", weight: 1.0 },
        { source: "java", target: "computer science", weight: 1.0 },
        { source: "java", target: "remuneration", weight: 1.0 },
        { source: "java", target: "nosql", weight: 1.0 },
        { source: "java", target: "api management", weight: 1.0 },
        { source: "java", target: "webdev", weight: 1.0 },
        { source: "java", target: "spring framework", weight: 1.0 },
        { source: "java", target: "scripting", weight: 1.0 },
        { source: "java", target: "agile methodology", weight: 1.0 },
        { source: "java", target: "spring mvc", weight: 1.0 },
        { source: "java", target: "mockito", weight: 1.0 },
        { source: "java", target: "json", weight: 2.0 },
        { source: "java", target: "nice", weight: 1.0 },
        { source: "java", target: "jhipster", weight: 1.0 },
        { source: "java", target: "ansible", weight: 3.0 },
        { source: "java", target: "sonarqube", weight: 2.0 },
        { source: "java", target: "xamarin", weight: 1.0 },
        { source: "java", target: "typescript", weight: 1.0 },
        { source: "java", target: "cloudfoundry", weight: 1.0 },
        { source: "java", target: "camunda", weight: 1.0 },
        { source: "java", target: "cucumber", weight: 1.0 },
        { source: "java", target: "vue.js", weight: 1.0 },
        { source: "java", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 3 ?? 5 ans": 16,
        "De 5 ?? 10 ans": 21,
        "De 1 ?? 3 ans": 9,
        "De 10 ?? 20 ans": 3,
        D??butant: 2
      },
      contract_type: { CDI: 49, Freelance: 2 },
      study_lvl: { "Bac +5 et plus": 41, "Bac +3": 7, "Bac +4": 3 },
      count_job: 51
    },
    priority: 2,
    twins: {
      angular: 0.9514864012984329,
      sql: 0.04737171851253791,
      hibernate: 0.0008676432898144081,
      jenkins: 0.00011742275037537936,
      git: 0.00011742275037537936
    }
  },
  docker: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "sass" },
        { id: "less" },
        { id: "mysql" },
        { id: "linux" },
        { id: "magento" },
        { id: "angular" },
        { id: "sql" },
        { id: "hibernate" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "python" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "scripting" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "openapi" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "gitlab" },
        { id: "markdown" },
        { id: "java 8" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "openshift" },
        { id: "flux" },
        { id: "devsecops" },
        { id: "microservices" },
        { id: "vertica" },
        { id: "flask" },
        { id: "mongodb" },
        { id: "postman" },
        { id: "javascript" },
        { id: "soapui" },
        { id: "jira" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "jonas" },
        { id: "unix" },
        { id: "c" },
        { id: "source" },
        { id: "c++" },
        { id: "user story" },
        { id: "chef" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "sonar" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "typescript" },
        { id: "spring boot" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "docker" }
      ],
      links: [
        { source: "docker", target: "scrum", weight: 5.0 },
        { source: "docker", target: "android", weight: 1.0 },
        { source: "docker", target: "java", weight: 8.0 },
        { source: "docker", target: "kubernetes", weight: 8.0 },
        { source: "docker", target: "ansible", weight: 6.0 },
        { source: "docker", target: "jenkins", weight: 7.0 },
        { source: "docker", target: "nagios", weight: 2.0 },
        { source: "docker", target: "puppet", weight: 1.0 },
        { source: "docker", target: "nginx", weight: 4.0 },
        { source: "docker", target: "git", weight: 12.0 },
        { source: "docker", target: "gradle", weight: 1.0 },
        { source: "docker", target: "sass", weight: 1.0 },
        { source: "docker", target: "less", weight: 1.0 },
        { source: "docker", target: "mysql", weight: 8.0 },
        { source: "docker", target: "linux", weight: 9.0 },
        { source: "docker", target: "magento", weight: 1.0 },
        { source: "docker", target: "angular", weight: 7.0 },
        { source: "docker", target: "sql", weight: 7.0 },
        { source: "docker", target: "hibernate", weight: 6.0 },
        { source: "docker", target: "kapacitor", weight: 1.0 },
        { source: "docker", target: "influxdb", weight: 1.0 },
        { source: "docker", target: "telegraf", weight: 1.0 },
        { source: "docker", target: "python", weight: 3.0 },
        { source: "docker", target: "traefik", weight: 2.0 },
        { source: "docker", target: "docker swarm", weight: 1.0 },
        { source: "docker", target: "yaml", weight: 2.0 },
        { source: "docker", target: "scripting", weight: 1.0 },
        { source: "docker", target: "pilotage", weight: 1.0 },
        { source: "docker", target: "prometheus", weight: 2.0 },
        { source: "docker", target: "go", weight: 1.0 },
        { source: "docker", target: "openapi", weight: 1.0 },
        { source: "docker", target: "postgresql", weight: 3.0 },
        { source: "docker", target: "grafana", weight: 1.0 },
        { source: "docker", target: "templates", weight: 1.0 },
        { source: "docker", target: "gitlab", weight: 4.0 },
        { source: "docker", target: "markdown", weight: 1.0 },
        { source: "docker", target: "java 8", weight: 1.0 },
        { source: "docker", target: "html5", weight: 3.0 },
        { source: "docker", target: "bootstrap", weight: 4.0 },
        { source: "docker", target: "kotlin", weight: 1.0 },
        { source: "docker", target: "openshift", weight: 1.0 },
        { source: "docker", target: "flux", weight: 2.0 },
        { source: "docker", target: "devsecops", weight: 1.0 },
        { source: "docker", target: "microservices", weight: 1.0 },
        { source: "docker", target: "vertica", weight: 1.0 },
        { source: "docker", target: "flask", weight: 2.0 },
        { source: "docker", target: "mongodb", weight: 1.0 },
        { source: "docker", target: "postman", weight: 1.0 },
        { source: "docker", target: "javascript", weight: 3.0 },
        { source: "docker", target: "soapui", weight: 1.0 },
        { source: "docker", target: "jira", weight: 1.0 },
        { source: "docker", target: "visual basic", weight: 1.0 },
        { source: "docker", target: "mariadb", weight: 1.0 },
        { source: "docker", target: "solaris", weight: 1.0 },
        { source: "docker", target: "devops", weight: 6.0 },
        { source: "docker", target: "jonas", weight: 1.0 },
        { source: "docker", target: "unix", weight: 2.0 },
        { source: "docker", target: "c", weight: 1.0 },
        { source: "docker", target: "source", weight: 1.0 },
        { source: "docker", target: "c++", weight: 1.0 },
        { source: "docker", target: "user story", weight: 2.0 },
        { source: "docker", target: "chef", weight: 1.0 },
        { source: "docker", target: "xgboost", weight: 1.0 },
        { source: "docker", target: "syslog", weight: 1.0 },
        { source: "docker", target: "scala", weight: 1.0 },
        { source: "docker", target: "front end", weight: 2.0 },
        { source: "docker", target: "data science", weight: 1.0 },
        { source: "docker", target: "ip routing", weight: 1.0 },
        { source: "docker", target: "public cloud", weight: 1.0 },
        { source: "docker", target: "machine learning", weight: 1.0 },
        { source: "docker", target: "cloud infrastructure", weight: 1.0 },
        { source: "docker", target: "time series", weight: 1.0 },
        { source: "docker", target: "mise en place", weight: 1.0 },
        { source: "docker", target: "object storage", weight: 1.0 },
        { source: "docker", target: "docker container", weight: 1.0 },
        { source: "docker", target: "pytorch", weight: 1.0 },
        { source: "docker", target: "routing protocols", weight: 1.0 },
        { source: "docker", target: "terraform", weight: 1.0 },
        { source: "docker", target: "api gateway", weight: 1.0 },
        { source: "docker", target: "vm", weight: 1.0 },
        { source: "docker", target: "deep learning", weight: 1.0 },
        { source: "docker", target: "jupyter", weight: 1.0 },
        { source: "docker", target: "telemetry", weight: 1.0 },
        { source: "docker", target: "json", weight: 2.0 },
        { source: "docker", target: "jhipster", weight: 1.0 },
        { source: "docker", target: "eclipse", weight: 1.0 },
        { source: "docker", target: "sonarqube", weight: 2.0 },
        { source: "docker", target: "sonar", weight: 1.0 },
        { source: "docker", target: "back end", weight: 1.0 },
        { source: "docker", target: "xamarin", weight: 1.0 },
        { source: "docker", target: "typescript", weight: 1.0 },
        { source: "docker", target: "spring boot", weight: 1.0 },
        { source: "docker", target: "cloudfoundry", weight: 1.0 },
        { source: "docker", target: "camunda", weight: 1.0 },
        { source: "docker", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 3 ?? 5 ans": 6,
        "De 5 ?? 10 ans": 8,
        "De 10 ?? 20 ans": 1,
        "De 1 ?? 3 ans": 1
      },
      contract_type: { Freelance: 1, CDI: 15 },
      study_lvl: {
        "Bac +4": 3,
        "Bac +3": 2,
        "Bac +5 et plus": 10,
        "Bac +2": 1
      },
      count_job: 16
    },
    priority: 6,
    twins: {
      git: 0.8799865527169299,
      linux: 0.0438119506629187,
      mysql: 0.016117515926505333,
      kubernetes: 0.016117515926505333,
      java: 0.016117515926505333
    }
  },
  kubernetes: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "git" },
        { id: "gradle" },
        { id: "angular" },
        { id: "sql" },
        { id: "hibernate" },
        { id: "linux" },
        { id: "mysql" },
        { id: "splunk" },
        { id: "talend" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "unix" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "devops" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "python" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "scripting" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "openapi" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "openshift" },
        { id: "flux" },
        { id: "devsecops" },
        { id: "c" },
        { id: "source" },
        { id: "c++" },
        { id: "javascript" },
        { id: "user story" },
        { id: "chef" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "flask" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "nginx" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "asp.net" },
        { id: "c#" },
        { id: "kubernetes" }
      ],
      links: [
        { source: "kubernetes", target: "scrum", weight: 3.0 },
        { source: "kubernetes", target: "java", weight: 7.0 },
        { source: "kubernetes", target: "docker", weight: 8.0 },
        { source: "kubernetes", target: "ansible", weight: 1.0 },
        { source: "kubernetes", target: "jenkins", weight: 4.0 },
        { source: "kubernetes", target: "nagios", weight: 1.0 },
        { source: "kubernetes", target: "puppet", weight: 1.0 },
        { source: "kubernetes", target: "git", weight: 7.0 },
        { source: "kubernetes", target: "gradle", weight: 1.0 },
        { source: "kubernetes", target: "angular", weight: 6.0 },
        { source: "kubernetes", target: "sql", weight: 5.0 },
        { source: "kubernetes", target: "hibernate", weight: 3.0 },
        { source: "kubernetes", target: "linux", weight: 6.0 },
        { source: "kubernetes", target: "mysql", weight: 4.0 },
        { source: "kubernetes", target: "splunk", weight: 2.0 },
        { source: "kubernetes", target: "talend", weight: 2.0 },
        { source: "kubernetes", target: "jira", weight: 2.0 },
        { source: "kubernetes", target: "gitlab", weight: 5.0 },
        { source: "kubernetes", target: "unix", weight: 3.0 },
        { source: "kubernetes", target: "spring cloud", weight: 1.0 },
        { source: "kubernetes", target: "apache hadoop", weight: 1.0 },
        { source: "kubernetes", target: "airflow", weight: 1.0 },
        { source: "kubernetes", target: "devops", weight: 2.0 },
        { source: "kubernetes", target: "scala", weight: 2.0 },
        { source: "kubernetes", target: "sqoop", weight: 1.0 },
        { source: "kubernetes", target: "microservices", weight: 2.0 },
        { source: "kubernetes", target: "kapacitor", weight: 1.0 },
        { source: "kubernetes", target: "influxdb", weight: 1.0 },
        { source: "kubernetes", target: "telegraf", weight: 1.0 },
        { source: "kubernetes", target: "python", weight: 3.0 },
        { source: "kubernetes", target: "traefik", weight: 2.0 },
        { source: "kubernetes", target: "docker swarm", weight: 1.0 },
        { source: "kubernetes", target: "yaml", weight: 2.0 },
        { source: "kubernetes", target: "scripting", weight: 1.0 },
        { source: "kubernetes", target: "pilotage", weight: 1.0 },
        { source: "kubernetes", target: "prometheus", weight: 2.0 },
        { source: "kubernetes", target: "go", weight: 1.0 },
        { source: "kubernetes", target: "openapi", weight: 1.0 },
        { source: "kubernetes", target: "postgresql", weight: 2.0 },
        { source: "kubernetes", target: "grafana", weight: 1.0 },
        { source: "kubernetes", target: "templates", weight: 1.0 },
        { source: "kubernetes", target: "markdown", weight: 1.0 },
        { source: "kubernetes", target: "openshift", weight: 1.0 },
        { source: "kubernetes", target: "flux", weight: 2.0 },
        { source: "kubernetes", target: "devsecops", weight: 1.0 },
        { source: "kubernetes", target: "c", weight: 2.0 },
        { source: "kubernetes", target: "source", weight: 2.0 },
        { source: "kubernetes", target: "c++", weight: 1.0 },
        { source: "kubernetes", target: "javascript", weight: 1.0 },
        { source: "kubernetes", target: "user story", weight: 2.0 },
        { source: "kubernetes", target: "chef", weight: 1.0 },
        { source: "kubernetes", target: "xgboost", weight: 1.0 },
        { source: "kubernetes", target: "syslog", weight: 1.0 },
        { source: "kubernetes", target: "front end", weight: 1.0 },
        { source: "kubernetes", target: "data science", weight: 1.0 },
        { source: "kubernetes", target: "ip routing", weight: 1.0 },
        { source: "kubernetes", target: "public cloud", weight: 1.0 },
        { source: "kubernetes", target: "flask", weight: 1.0 },
        { source: "kubernetes", target: "machine learning", weight: 1.0 },
        { source: "kubernetes", target: "cloud infrastructure", weight: 1.0 },
        { source: "kubernetes", target: "time series", weight: 1.0 },
        { source: "kubernetes", target: "mise en place", weight: 1.0 },
        { source: "kubernetes", target: "object storage", weight: 1.0 },
        { source: "kubernetes", target: "nginx", weight: 3.0 },
        { source: "kubernetes", target: "docker container", weight: 1.0 },
        { source: "kubernetes", target: "pytorch", weight: 1.0 },
        { source: "kubernetes", target: "routing protocols", weight: 1.0 },
        { source: "kubernetes", target: "terraform", weight: 2.0 },
        { source: "kubernetes", target: "api gateway", weight: 1.0 },
        { source: "kubernetes", target: "vm", weight: 1.0 },
        { source: "kubernetes", target: "deep learning", weight: 1.0 },
        { source: "kubernetes", target: "jupyter", weight: 1.0 },
        { source: "kubernetes", target: "telemetry", weight: 1.0 },
        { source: "kubernetes", target: "json", weight: 1.0 },
        { source: "kubernetes", target: "asp.net", weight: 1.0 },
        { source: "kubernetes", target: "c#", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 3 ?? 5 ans": 2,
        "De 5 ?? 10 ans": 6,
        "De 1 ?? 3 ans": 3,
        "De 10 ?? 20 ans": 2
      },
      contract_type: { Freelance: 2, CDI: 11 },
      study_lvl: { "Bac +4": 1, "Bac +5 et plus": 12 },
      count_job: 13
    },
    priority: 24,
    twins: {
      docker: 0.44319083811821464,
      git: 0.16304079785923195,
      java: 0.16304079785923195,
      linux: 0.05997935760460034,
      angular: 0.05997935760460034
    }
  },
  ansible: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "jira" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "sql" },
        { id: "gitlab" },
        { id: "mysql" },
        { id: "jonas" },
        { id: "linux" },
        { id: "unix" },
        { id: "bootstrap" },
        { id: "hibernate" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "html5" },
        { id: "javascript" },
        { id: "sonar" },
        { id: "back end" },
        { id: "angular" },
        { id: "xamarin" },
        { id: "typescript" },
        { id: "json" },
        { id: "spring boot" },
        { id: "front end" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "ansible" }
      ],
      links: [
        { source: "ansible", target: "scrum", weight: 2.0 },
        { source: "ansible", target: "android", weight: 1.0 },
        { source: "ansible", target: "java", weight: 3.0 },
        { source: "ansible", target: "docker", weight: 6.0 },
        { source: "ansible", target: "kubernetes", weight: 1.0 },
        { source: "ansible", target: "jenkins", weight: 6.0 },
        { source: "ansible", target: "nagios", weight: 2.0 },
        { source: "ansible", target: "puppet", weight: 1.0 },
        { source: "ansible", target: "nginx", weight: 1.0 },
        { source: "ansible", target: "git", weight: 5.0 },
        { source: "ansible", target: "gradle", weight: 1.0 },
        { source: "ansible", target: "jira", weight: 1.0 },
        { source: "ansible", target: "visual basic", weight: 1.0 },
        { source: "ansible", target: "mariadb", weight: 1.0 },
        { source: "ansible", target: "solaris", weight: 1.0 },
        { source: "ansible", target: "devops", weight: 5.0 },
        { source: "ansible", target: "sql", weight: 2.0 },
        { source: "ansible", target: "gitlab", weight: 1.0 },
        { source: "ansible", target: "mysql", weight: 3.0 },
        { source: "ansible", target: "jonas", weight: 1.0 },
        { source: "ansible", target: "linux", weight: 3.0 },
        { source: "ansible", target: "unix", weight: 1.0 },
        { source: "ansible", target: "bootstrap", weight: 2.0 },
        { source: "ansible", target: "hibernate", weight: 2.0 },
        { source: "ansible", target: "jhipster", weight: 1.0 },
        { source: "ansible", target: "eclipse", weight: 1.0 },
        { source: "ansible", target: "sonarqube", weight: 2.0 },
        { source: "ansible", target: "html5", weight: 1.0 },
        { source: "ansible", target: "javascript", weight: 1.0 },
        { source: "ansible", target: "sonar", weight: 1.0 },
        { source: "ansible", target: "back end", weight: 1.0 },
        { source: "ansible", target: "angular", weight: 2.0 },
        { source: "ansible", target: "xamarin", weight: 1.0 },
        { source: "ansible", target: "typescript", weight: 1.0 },
        { source: "ansible", target: "json", weight: 1.0 },
        { source: "ansible", target: "spring boot", weight: 1.0 },
        { source: "ansible", target: "front end", weight: 1.0 },
        { source: "ansible", target: "cloudfoundry", weight: 1.0 },
        { source: "ansible", target: "camunda", weight: 1.0 },
        { source: "ansible", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 4, "De 5 ?? 10 ans": 2 },
      contract_type: { Freelance: 1, CDI: 5 },
      study_lvl: { "Bac +4": 3, "Bac +5 et plus": 2, "Bac +3": 1 },
      count_job: 6
    },
    priority: 233,
    twins: {
      jenkins: 0.3136255057311487,
      docker: 0.3136255057311487,
      devops: 0.11537637578548597,
      git: 0.11537637578548597,
      linux: 0.015614494495742606
    }
  },
  jenkins: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "json" },
        { id: "nosql" },
        { id: "openapi" },
        { id: "sonar" },
        { id: "appium" },
        { id: "splunk" },
        { id: "talend" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "linux" },
        { id: "unix" },
        { id: "jquery" },
        { id: "sql" },
        { id: "hibernate" },
        { id: "robot framework" },
        { id: "testlink" },
        { id: "python" },
        { id: "selenium" },
        { id: "javascript" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "mysql" },
        { id: "jonas" },
        { id: "angular" },
        { id: "c" },
        { id: "source" },
        { id: "flux" },
        { id: "c++" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "bitbucket" },
        { id: "postman" },
        { id: "jest" },
        { id: "typescript" },
        { id: "agile methodology" },
        { id: "junit" },
        { id: "spring mvc" },
        { id: "spring security" },
        { id: "mockito" },
        { id: "spring boot" },
        { id: "nice" },
        { id: "bootstrap" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "html5" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "front end" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "jenkins" }
      ],
      links: [
        { source: "jenkins", target: "transformation", weight: 1.0 },
        { source: "jenkins", target: "scrum", weight: 4.0 },
        { source: "jenkins", target: "android", weight: 4.0 },
        { source: "jenkins", target: "java", weight: 11.0 },
        { source: "jenkins", target: "docker", weight: 7.0 },
        { source: "jenkins", target: "kubernetes", weight: 4.0 },
        { source: "jenkins", target: "ansible", weight: 6.0 },
        { source: "jenkins", target: "nagios", weight: 2.0 },
        { source: "jenkins", target: "puppet", weight: 1.0 },
        { source: "jenkins", target: "nginx", weight: 1.0 },
        { source: "jenkins", target: "git", weight: 12.0 },
        { source: "jenkins", target: "gradle", weight: 2.0 },
        { source: "jenkins", target: "json", weight: 3.0 },
        { source: "jenkins", target: "nosql", weight: 2.0 },
        { source: "jenkins", target: "openapi", weight: 1.0 },
        { source: "jenkins", target: "sonar", weight: 9.0 },
        { source: "jenkins", target: "appium", weight: 3.0 },
        { source: "jenkins", target: "splunk", weight: 2.0 },
        { source: "jenkins", target: "talend", weight: 2.0 },
        { source: "jenkins", target: "jira", weight: 5.0 },
        { source: "jenkins", target: "gitlab", weight: 4.0 },
        { source: "jenkins", target: "linux", weight: 5.0 },
        { source: "jenkins", target: "unix", weight: 6.0 },
        { source: "jenkins", target: "jquery", weight: 1.0 },
        { source: "jenkins", target: "sql", weight: 7.0 },
        { source: "jenkins", target: "hibernate", weight: 6.0 },
        { source: "jenkins", target: "robot framework", weight: 1.0 },
        { source: "jenkins", target: "testlink", weight: 1.0 },
        { source: "jenkins", target: "python", weight: 2.0 },
        { source: "jenkins", target: "selenium", weight: 1.0 },
        { source: "jenkins", target: "javascript", weight: 5.0 },
        { source: "jenkins", target: "visual basic", weight: 1.0 },
        { source: "jenkins", target: "mariadb", weight: 1.0 },
        { source: "jenkins", target: "solaris", weight: 1.0 },
        { source: "jenkins", target: "devops", weight: 5.0 },
        { source: "jenkins", target: "mysql", weight: 4.0 },
        { source: "jenkins", target: "jonas", weight: 1.0 },
        { source: "jenkins", target: "angular", weight: 9.0 },
        { source: "jenkins", target: "c", weight: 1.0 },
        { source: "jenkins", target: "source", weight: 1.0 },
        { source: "jenkins", target: "flux", weight: 1.0 },
        { source: "jenkins", target: "c++", weight: 1.0 },
        { source: "jenkins", target: "user story", weight: 1.0 },
        { source: "jenkins", target: "chef", weight: 1.0 },
        { source: "jenkins", target: "postgresql", weight: 1.0 },
        { source: "jenkins", target: "bitbucket", weight: 1.0 },
        { source: "jenkins", target: "postman", weight: 1.0 },
        { source: "jenkins", target: "jest", weight: 1.0 },
        { source: "jenkins", target: "typescript", weight: 2.0 },
        { source: "jenkins", target: "agile methodology", weight: 1.0 },
        { source: "jenkins", target: "junit", weight: 1.0 },
        { source: "jenkins", target: "spring mvc", weight: 1.0 },
        { source: "jenkins", target: "spring security", weight: 1.0 },
        { source: "jenkins", target: "mockito", weight: 1.0 },
        { source: "jenkins", target: "spring boot", weight: 2.0 },
        { source: "jenkins", target: "nice", weight: 1.0 },
        { source: "jenkins", target: "bootstrap", weight: 2.0 },
        { source: "jenkins", target: "jhipster", weight: 1.0 },
        { source: "jenkins", target: "eclipse", weight: 1.0 },
        { source: "jenkins", target: "sonarqube", weight: 2.0 },
        { source: "jenkins", target: "html5", weight: 1.0 },
        { source: "jenkins", target: "back end", weight: 1.0 },
        { source: "jenkins", target: "xamarin", weight: 1.0 },
        { source: "jenkins", target: "front end", weight: 1.0 },
        { source: "jenkins", target: "cloudfoundry", weight: 1.0 },
        { source: "jenkins", target: "camunda", weight: 1.0 },
        { source: "jenkins", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 11, "De 1 ?? 3 ans": 4, "De 5 ?? 10 ans": 5 },
      contract_type: { Freelance: 2, CDI: 18 },
      study_lvl: {
        "Bac +4": 3,
        "Bac +2": 1,
        "Bac +5 et plus": 14,
        "Bac +3": 2
      },
      count_job: 20
    },
    priority: 15,
    twins: {
      git: 0.6688921371288393,
      java: 0.2460716656109292,
      angular: 0.033302178561960154,
      sonar: 0.033302178561960154,
      sql: 0.004506959768079128
    }
  },
  nagios: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "jira" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "sql" },
        { id: "gitlab" },
        { id: "mysql" },
        { id: "jonas" },
        { id: "linux" },
        { id: "unix" },
        { id: "veeam" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "scripting" },
        { id: "lunix" },
        { id: "squid" },
        { id: "clonezilla" },
        { id: "exim" },
        { id: "nagios" }
      ],
      links: [
        { source: "nagios", target: "scrum", weight: 1.0 },
        { source: "nagios", target: "docker", weight: 2.0 },
        { source: "nagios", target: "kubernetes", weight: 1.0 },
        { source: "nagios", target: "ansible", weight: 2.0 },
        { source: "nagios", target: "jenkins", weight: 2.0 },
        { source: "nagios", target: "puppet", weight: 1.0 },
        { source: "nagios", target: "nginx", weight: 1.0 },
        { source: "nagios", target: "git", weight: 2.0 },
        { source: "nagios", target: "gradle", weight: 1.0 },
        { source: "nagios", target: "jira", weight: 1.0 },
        { source: "nagios", target: "visual basic", weight: 1.0 },
        { source: "nagios", target: "mariadb", weight: 1.0 },
        { source: "nagios", target: "solaris", weight: 1.0 },
        { source: "nagios", target: "devops", weight: 1.0 },
        { source: "nagios", target: "sql", weight: 1.0 },
        { source: "nagios", target: "gitlab", weight: 1.0 },
        { source: "nagios", target: "mysql", weight: 1.0 },
        { source: "nagios", target: "jonas", weight: 1.0 },
        { source: "nagios", target: "linux", weight: 1.0 },
        { source: "nagios", target: "unix", weight: 2.0 },
        { source: "nagios", target: "veeam", weight: 1.0 },
        { source: "nagios", target: "wireshark", weight: 1.0 },
        { source: "nagios", target: "qmail", weight: 1.0 },
        { source: "nagios", target: "hyper-v", weight: 1.0 },
        { source: "nagios", target: "smtp", weight: 1.0 },
        { source: "nagios", target: "cacti", weight: 1.0 },
        { source: "nagios", target: "ghost", weight: 1.0 },
        { source: "nagios", target: "postfix", weight: 1.0 },
        { source: "nagios", target: "scripting", weight: 1.0 },
        { source: "nagios", target: "lunix", weight: 1.0 },
        { source: "nagios", target: "squid", weight: 1.0 },
        { source: "nagios", target: "clonezilla", weight: 1.0 },
        { source: "nagios", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1, CDI: 2 },
      study_lvl: { "Bac +4": 1, "Bac +5 et plus": 2 },
      count_job: 3
    },
    priority: 16,
    twins: {
      unix: 0.06535681008448364,
      git: 0.06535681008448364,
      jenkins: 0.06535681008448364,
      ansible: 0.06535681008448364,
      docker: 0.06535681008448364
    }
  },
  puppet: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "puppet" }
      ],
      links: [
        { source: "puppet", target: "scrum", weight: 1.0 },
        { source: "puppet", target: "docker", weight: 1.0 },
        { source: "puppet", target: "kubernetes", weight: 1.0 },
        { source: "puppet", target: "ansible", weight: 1.0 },
        { source: "puppet", target: "jenkins", weight: 1.0 },
        { source: "puppet", target: "nagios", weight: 1.0 },
        { source: "puppet", target: "nginx", weight: 1.0 },
        { source: "puppet", target: "git", weight: 1.0 },
        { source: "puppet", target: "gradle", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 232,
    twins: {
      gradle: 0.11111111111111112,
      git: 0.11111111111111112,
      nginx: 0.11111111111111112,
      nagios: 0.11111111111111112,
      jenkins: 0.11111111111111112
    }
  },
  nginx: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "git" },
        { id: "gradle" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "python" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "scripting" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "openapi" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "gitlab" },
        { id: "markdown" },
        { id: "vertica" },
        { id: "flask" },
        { id: "mongodb" },
        { id: "sql" },
        { id: "postman" },
        { id: "javascript" },
        { id: "html5" },
        { id: "mysql" },
        { id: "soapui" },
        { id: "linux" },
        { id: "bootstrap" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "devops" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "nginx" }
      ],
      links: [
        { source: "nginx", target: "scrum", weight: 2.0 },
        { source: "nginx", target: "docker", weight: 4.0 },
        { source: "nginx", target: "kubernetes", weight: 3.0 },
        { source: "nginx", target: "ansible", weight: 1.0 },
        { source: "nginx", target: "jenkins", weight: 1.0 },
        { source: "nginx", target: "nagios", weight: 1.0 },
        { source: "nginx", target: "puppet", weight: 1.0 },
        { source: "nginx", target: "git", weight: 3.0 },
        { source: "nginx", target: "gradle", weight: 1.0 },
        { source: "nginx", target: "kapacitor", weight: 1.0 },
        { source: "nginx", target: "influxdb", weight: 1.0 },
        { source: "nginx", target: "telegraf", weight: 1.0 },
        { source: "nginx", target: "python", weight: 2.0 },
        { source: "nginx", target: "traefik", weight: 2.0 },
        { source: "nginx", target: "docker swarm", weight: 1.0 },
        { source: "nginx", target: "yaml", weight: 2.0 },
        { source: "nginx", target: "scripting", weight: 1.0 },
        { source: "nginx", target: "pilotage", weight: 1.0 },
        { source: "nginx", target: "prometheus", weight: 2.0 },
        { source: "nginx", target: "go", weight: 1.0 },
        { source: "nginx", target: "openapi", weight: 1.0 },
        { source: "nginx", target: "postgresql", weight: 2.0 },
        { source: "nginx", target: "grafana", weight: 1.0 },
        { source: "nginx", target: "templates", weight: 1.0 },
        { source: "nginx", target: "gitlab", weight: 2.0 },
        { source: "nginx", target: "markdown", weight: 1.0 },
        { source: "nginx", target: "vertica", weight: 1.0 },
        { source: "nginx", target: "flask", weight: 2.0 },
        { source: "nginx", target: "mongodb", weight: 1.0 },
        { source: "nginx", target: "sql", weight: 1.0 },
        { source: "nginx", target: "postman", weight: 1.0 },
        { source: "nginx", target: "javascript", weight: 1.0 },
        { source: "nginx", target: "html5", weight: 1.0 },
        { source: "nginx", target: "mysql", weight: 1.0 },
        { source: "nginx", target: "soapui", weight: 1.0 },
        { source: "nginx", target: "linux", weight: 2.0 },
        { source: "nginx", target: "bootstrap", weight: 1.0 },
        { source: "nginx", target: "xgboost", weight: 1.0 },
        { source: "nginx", target: "syslog", weight: 1.0 },
        { source: "nginx", target: "scala", weight: 1.0 },
        { source: "nginx", target: "front end", weight: 1.0 },
        { source: "nginx", target: "data science", weight: 1.0 },
        { source: "nginx", target: "ip routing", weight: 1.0 },
        { source: "nginx", target: "public cloud", weight: 1.0 },
        { source: "nginx", target: "user story", weight: 1.0 },
        { source: "nginx", target: "devops", weight: 1.0 },
        { source: "nginx", target: "machine learning", weight: 1.0 },
        { source: "nginx", target: "cloud infrastructure", weight: 1.0 },
        { source: "nginx", target: "time series", weight: 1.0 },
        { source: "nginx", target: "mise en place", weight: 1.0 },
        { source: "nginx", target: "object storage", weight: 1.0 },
        { source: "nginx", target: "docker container", weight: 1.0 },
        { source: "nginx", target: "pytorch", weight: 1.0 },
        { source: "nginx", target: "routing protocols", weight: 1.0 },
        { source: "nginx", target: "terraform", weight: 1.0 },
        { source: "nginx", target: "api gateway", weight: 1.0 },
        { source: "nginx", target: "vm", weight: 1.0 },
        { source: "nginx", target: "deep learning", weight: 1.0 },
        { source: "nginx", target: "jupyter", weight: 1.0 },
        { source: "nginx", target: "telemetry", weight: 1.0 },
        { source: "nginx", target: "json", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2, "De 5 ?? 10 ans": 1, "De 1 ?? 3 ans": 1 },
      contract_type: { Freelance: 1, CDI: 3 },
      study_lvl: { "Bac +4": 1, "Bac +5 et plus": 2, "Bac +2": 1 },
      count_job: 4
    },
    priority: 231,
    twins: {
      docker: 0.1854137666588845,
      git: 0.06820991286396265,
      kubernetes: 0.06820991286396265,
      linux: 0.025093024626747354,
      flask: 0.025093024626747354
    }
  },
  git: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "gradle" },
        { id: "angular" },
        { id: "sql" },
        { id: "hibernate" },
        { id: "linux" },
        { id: "sonar" },
        { id: "appium" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "devops" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "robot framework" },
        { id: "jira" },
        { id: "testlink" },
        { id: "python" },
        { id: "selenium" },
        { id: "junit" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "java 8" },
        { id: "kotlin" },
        { id: "vertica" },
        { id: "flask" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "soapui" },
        { id: "perl" },
        { id: "jquery" },
        { id: "php" },
        { id: "gitlab" },
        { id: "mysql" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "jonas" },
        { id: "unix" },
        { id: "c" },
        { id: "source" },
        { id: "flux" },
        { id: "c++" },
        { id: "javascript" },
        { id: "user story" },
        { id: "chef" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "typescript" },
        { id: "ajax" },
        { id: "agile methodology" },
        { id: "spring mvc" },
        { id: "mockito" },
        { id: "nice" },
        { id: "lamp" },
        { id: "bootstrap" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "html5" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "vue.js" },
        { id: "git" }
      ],
      links: [
        { source: "git", target: "transformation", weight: 1.0 },
        { source: "git", target: "scrum", weight: 7.0 },
        { source: "git", target: "android", weight: 3.0 },
        { source: "git", target: "java", weight: 11.0 },
        { source: "git", target: "docker", weight: 12.0 },
        { source: "git", target: "kubernetes", weight: 7.0 },
        { source: "git", target: "ansible", weight: 5.0 },
        { source: "git", target: "jenkins", weight: 12.0 },
        { source: "git", target: "nagios", weight: 2.0 },
        { source: "git", target: "puppet", weight: 1.0 },
        { source: "git", target: "nginx", weight: 3.0 },
        { source: "git", target: "gradle", weight: 1.0 },
        { source: "git", target: "angular", weight: 8.0 },
        { source: "git", target: "sql", weight: 9.0 },
        { source: "git", target: "hibernate", weight: 6.0 },
        { source: "git", target: "linux", weight: 10.0 },
        { source: "git", target: "sonar", weight: 5.0 },
        { source: "git", target: "appium", weight: 3.0 },
        { source: "git", target: "spring cloud", weight: 1.0 },
        { source: "git", target: "apache hadoop", weight: 1.0 },
        { source: "git", target: "airflow", weight: 1.0 },
        { source: "git", target: "devops", weight: 6.0 },
        { source: "git", target: "scala", weight: 2.0 },
        { source: "git", target: "sqoop", weight: 1.0 },
        { source: "git", target: "microservices", weight: 1.0 },
        { source: "git", target: "robot framework", weight: 1.0 },
        { source: "git", target: "jira", weight: 3.0 },
        { source: "git", target: "testlink", weight: 1.0 },
        { source: "git", target: "python", weight: 3.0 },
        { source: "git", target: "selenium", weight: 1.0 },
        { source: "git", target: "junit", weight: 2.0 },
        { source: "git", target: "spring security", weight: 2.0 },
        { source: "git", target: "bitbucket", weight: 2.0 },
        { source: "git", target: "keycloak", weight: 1.0 },
        { source: "git", target: "spring boot", weight: 2.0 },
        { source: "git", target: "jest", weight: 2.0 },
        { source: "git", target: "java 8", weight: 1.0 },
        { source: "git", target: "kotlin", weight: 1.0 },
        { source: "git", target: "vertica", weight: 1.0 },
        { source: "git", target: "flask", weight: 2.0 },
        { source: "git", target: "mongodb", weight: 1.0 },
        { source: "git", target: "postgresql", weight: 3.0 },
        { source: "git", target: "postman", weight: 2.0 },
        { source: "git", target: "soapui", weight: 1.0 },
        { source: "git", target: "perl", weight: 1.0 },
        { source: "git", target: "jquery", weight: 2.0 },
        { source: "git", target: "php", weight: 2.0 },
        { source: "git", target: "gitlab", weight: 5.0 },
        { source: "git", target: "mysql", weight: 11.0 },
        { source: "git", target: "visual basic", weight: 1.0 },
        { source: "git", target: "mariadb", weight: 1.0 },
        { source: "git", target: "solaris", weight: 1.0 },
        { source: "git", target: "jonas", weight: 1.0 },
        { source: "git", target: "unix", weight: 2.0 },
        { source: "git", target: "c", weight: 1.0 },
        { source: "git", target: "source", weight: 1.0 },
        { source: "git", target: "flux", weight: 2.0 },
        { source: "git", target: "c++", weight: 1.0 },
        { source: "git", target: "javascript", weight: 8.0 },
        { source: "git", target: "user story", weight: 2.0 },
        { source: "git", target: "chef", weight: 1.0 },
        { source: "git", target: "xgboost", weight: 1.0 },
        { source: "git", target: "syslog", weight: 1.0 },
        { source: "git", target: "front end", weight: 1.0 },
        { source: "git", target: "data science", weight: 1.0 },
        { source: "git", target: "ip routing", weight: 1.0 },
        { source: "git", target: "public cloud", weight: 1.0 },
        { source: "git", target: "traefik", weight: 1.0 },
        { source: "git", target: "yaml", weight: 1.0 },
        { source: "git", target: "machine learning", weight: 1.0 },
        { source: "git", target: "prometheus", weight: 1.0 },
        { source: "git", target: "cloud infrastructure", weight: 1.0 },
        { source: "git", target: "time series", weight: 1.0 },
        { source: "git", target: "mise en place", weight: 1.0 },
        { source: "git", target: "object storage", weight: 1.0 },
        { source: "git", target: "docker container", weight: 1.0 },
        { source: "git", target: "pytorch", weight: 1.0 },
        { source: "git", target: "routing protocols", weight: 1.0 },
        { source: "git", target: "terraform", weight: 1.0 },
        { source: "git", target: "api gateway", weight: 1.0 },
        { source: "git", target: "vm", weight: 1.0 },
        { source: "git", target: "deep learning", weight: 1.0 },
        { source: "git", target: "jupyter", weight: 1.0 },
        { source: "git", target: "telemetry", weight: 1.0 },
        { source: "git", target: "json", weight: 2.0 },
        { source: "git", target: "typescript", weight: 1.0 },
        { source: "git", target: "ajax", weight: 1.0 },
        { source: "git", target: "agile methodology", weight: 1.0 },
        { source: "git", target: "spring mvc", weight: 1.0 },
        { source: "git", target: "mockito", weight: 1.0 },
        { source: "git", target: "nice", weight: 1.0 },
        { source: "git", target: "lamp", weight: 1.0 },
        { source: "git", target: "bootstrap", weight: 3.0 },
        { source: "git", target: "jhipster", weight: 1.0 },
        { source: "git", target: "eclipse", weight: 1.0 },
        { source: "git", target: "sonarqube", weight: 2.0 },
        { source: "git", target: "html5", weight: 3.0 },
        { source: "git", target: "cloudfoundry", weight: 1.0 },
        { source: "git", target: "camunda", weight: 1.0 },
        { source: "git", target: "cucumber", weight: 1.0 },
        { source: "git", target: "vue.js", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 3 ?? 5 ans": 13,
        "De 5 ?? 10 ans": 8,
        "De 10 ?? 20 ans": 1,
        "De 1 ?? 3 ans": 2
      },
      contract_type: { Freelance: 1, CDI: 23 },
      study_lvl: {
        "Bac +4": 4,
        "Bac +5 et plus": 17,
        "Bac +2": 1,
        "Bac +3": 2
      },
      count_job: 24
    },
    priority: 7,
    twins: {
      jenkins: 0.33540943514444116,
      docker: 0.33540943514444116,
      mysql: 0.12339023556456614,
      java: 0.12339023556456614,
      linux: 0.045392730905505226
    }
  },
  gradle: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "puppet" },
        { id: "nginx" },
        { id: "git" },
        { id: "json" },
        { id: "nosql" },
        { id: "openapi" },
        { id: "gradle" }
      ],
      links: [
        { source: "gradle", target: "scrum", weight: 1.0 },
        { source: "gradle", target: "docker", weight: 1.0 },
        { source: "gradle", target: "kubernetes", weight: 1.0 },
        { source: "gradle", target: "ansible", weight: 1.0 },
        { source: "gradle", target: "jenkins", weight: 2.0 },
        { source: "gradle", target: "nagios", weight: 1.0 },
        { source: "gradle", target: "puppet", weight: 1.0 },
        { source: "gradle", target: "nginx", weight: 1.0 },
        { source: "gradle", target: "git", weight: 1.0 },
        { source: "gradle", target: "json", weight: 1.0 },
        { source: "gradle", target: "nosql", weight: 1.0 },
        { source: "gradle", target: "openapi", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { Freelance: 1, CDI: 1 },
      study_lvl: { "Bac +4": 1, "Bac +2": 1 },
      count_job: 2
    },
    priority: 230,
    twins: {
      jenkins: 0.19815031229493157,
      openapi: 0.0728954261550062,
      nosql: 0.0728954261550062,
      json: 0.0728954261550062,
      git: 0.0728954261550062
    }
  },
  sass: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "less" },
        { id: "mysql" },
        { id: "linux" },
        { id: "magento" },
        { id: "sass" }
      ],
      links: [
        { source: "sass", target: "docker", weight: 1.0 },
        { source: "sass", target: "less", weight: 1.0 },
        { source: "sass", target: "mysql", weight: 1.0 },
        { source: "sass", target: "linux", weight: 1.0 },
        { source: "sass", target: "magento", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 229,
    twins: { magento: 0.2, linux: 0.2, mysql: 0.2, less: 0.2, docker: 0.2 }
  },
  less: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "sass" },
        { id: "mysql" },
        { id: "linux" },
        { id: "magento" },
        { id: "less" }
      ],
      links: [
        { source: "less", target: "docker", weight: 1.0 },
        { source: "less", target: "sass", weight: 1.0 },
        { source: "less", target: "mysql", weight: 1.0 },
        { source: "less", target: "linux", weight: 1.0 },
        { source: "less", target: "magento", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 228,
    twins: { magento: 0.2, linux: 0.2, mysql: 0.2, sass: 0.2, docker: 0.2 }
  },
  mysql: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "git" },
        { id: "sass" },
        { id: "less" },
        { id: "linux" },
        { id: "magento" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "sql" },
        { id: "python" },
        { id: "data mining" },
        { id: "automation" },
        { id: "angular" },
        { id: "hibernate" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "devops" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "vertica" },
        { id: "flask" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "html5" },
        { id: "soapui" },
        { id: "bootstrap" },
        { id: "perl" },
        { id: "jquery" },
        { id: "php" },
        { id: "gitlab" },
        { id: "jira" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "jonas" },
        { id: "unix" },
        { id: "c" },
        { id: "c#" },
        { id: "c++" },
        { id: "agile methodology" },
        { id: "junit" },
        { id: "spring mvc" },
        { id: "spring security" },
        { id: "mockito" },
        { id: "json" },
        { id: "spring boot" },
        { id: "nice" },
        { id: "lamp" },
        { id: "active directory" },
        { id: "scripting" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "javascript" },
        { id: "mysql" }
      ],
      links: [
        { source: "mysql", target: "scrum", weight: 1.0 },
        { source: "mysql", target: "android", weight: 2.0 },
        { source: "mysql", target: "java", weight: 6.0 },
        { source: "mysql", target: "docker", weight: 8.0 },
        { source: "mysql", target: "kubernetes", weight: 4.0 },
        { source: "mysql", target: "ansible", weight: 3.0 },
        { source: "mysql", target: "jenkins", weight: 4.0 },
        { source: "mysql", target: "nagios", weight: 1.0 },
        { source: "mysql", target: "nginx", weight: 1.0 },
        { source: "mysql", target: "git", weight: 11.0 },
        { source: "mysql", target: "sass", weight: 1.0 },
        { source: "mysql", target: "less", weight: 1.0 },
        { source: "mysql", target: "linux", weight: 9.0 },
        { source: "mysql", target: "magento", weight: 1.0 },
        { source: "mysql", target: "data warehousing", weight: 1.0 },
        { source: "mysql", target: "business intelligence", weight: 1.0 },
        { source: "mysql", target: "r", weight: 1.0 },
        { source: "mysql", target: "robotic process automation", weight: 1.0 },
        { source: "mysql", target: "microsoft access", weight: 1.0 },
        { source: "mysql", target: "power bi", weight: 1.0 },
        { source: "mysql", target: "warehousing", weight: 1.0 },
        { source: "mysql", target: "sql", weight: 10.0 },
        { source: "mysql", target: "python", weight: 1.0 },
        { source: "mysql", target: "data mining", weight: 1.0 },
        { source: "mysql", target: "automation", weight: 1.0 },
        { source: "mysql", target: "angular", weight: 5.0 },
        { source: "mysql", target: "hibernate", weight: 4.0 },
        { source: "mysql", target: "spring cloud", weight: 1.0 },
        { source: "mysql", target: "apache hadoop", weight: 1.0 },
        { source: "mysql", target: "airflow", weight: 1.0 },
        { source: "mysql", target: "devops", weight: 4.0 },
        { source: "mysql", target: "scala", weight: 1.0 },
        { source: "mysql", target: "sqoop", weight: 1.0 },
        { source: "mysql", target: "microservices", weight: 1.0 },
        { source: "mysql", target: "vertica", weight: 1.0 },
        { source: "mysql", target: "flask", weight: 1.0 },
        { source: "mysql", target: "mongodb", weight: 1.0 },
        { source: "mysql", target: "postgresql", weight: 1.0 },
        { source: "mysql", target: "postman", weight: 1.0 },
        { source: "mysql", target: "html5", weight: 2.0 },
        { source: "mysql", target: "soapui", weight: 1.0 },
        { source: "mysql", target: "bootstrap", weight: 2.0 },
        { source: "mysql", target: "perl", weight: 1.0 },
        { source: "mysql", target: "jquery", weight: 1.0 },
        { source: "mysql", target: "php", weight: 3.0 },
        { source: "mysql", target: "gitlab", weight: 2.0 },
        { source: "mysql", target: "jira", weight: 1.0 },
        { source: "mysql", target: "visual basic", weight: 1.0 },
        { source: "mysql", target: "mariadb", weight: 1.0 },
        { source: "mysql", target: "solaris", weight: 1.0 },
        { source: "mysql", target: "jonas", weight: 1.0 },
        { source: "mysql", target: "unix", weight: 1.0 },
        { source: "mysql", target: "c", weight: 2.0 },
        { source: "mysql", target: "c#", weight: 2.0 },
        { source: "mysql", target: "c++", weight: 2.0 },
        { source: "mysql", target: "agile methodology", weight: 1.0 },
        { source: "mysql", target: "junit", weight: 1.0 },
        { source: "mysql", target: "spring mvc", weight: 1.0 },
        { source: "mysql", target: "spring security", weight: 1.0 },
        { source: "mysql", target: "mockito", weight: 1.0 },
        { source: "mysql", target: "json", weight: 1.0 },
        { source: "mysql", target: "spring boot", weight: 1.0 },
        { source: "mysql", target: "nice", weight: 1.0 },
        { source: "mysql", target: "lamp", weight: 1.0 },
        { source: "mysql", target: "active directory", weight: 1.0 },
        { source: "mysql", target: "scripting", weight: 1.0 },
        { source: "mysql", target: "jhipster", weight: 1.0 },
        { source: "mysql", target: "eclipse", weight: 1.0 },
        { source: "mysql", target: "sonarqube", weight: 1.0 },
        { source: "mysql", target: "javascript", weight: 3.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 5,
        "De 3 ?? 5 ans": 9,
        "De 10 ?? 20 ans": 1,
        "De 1 ?? 3 ans": 1
      },
      contract_type: { CDI: 16 },
      study_lvl: { "Bac +3": 4, "Bac +5 et plus": 8, "Bac +2": 1, "Bac +4": 3 },
      count_job: 16
    },
    priority: 29,
    twins: {
      git: 0.6369401303139011,
      sql: 0.23431717919954362,
      linux: 0.0862004729407968,
      docker: 0.031711381814174364,
      java: 0.004291668839645656
    }
  },
  linux: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "git" },
        { id: "sass" },
        { id: "less" },
        { id: "mysql" },
        { id: "magento" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "sql" },
        { id: "python" },
        { id: "data mining" },
        { id: "automation" },
        { id: "angular" },
        { id: "hibernate" },
        { id: "splunk" },
        { id: "talend" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "unix" },
        { id: "active directory" },
        { id: "veeam" },
        { id: "centos" },
        { id: "vertica" },
        { id: "flask" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "html5" },
        { id: "soapui" },
        { id: "bootstrap" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "jonas" },
        { id: "tcp/ip" },
        { id: "installation" },
        { id: "sendmail" },
        { id: "hp-ux" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "jquery" },
        { id: "ajax" },
        { id: "pl/sql" },
        { id: "scripting" },
        { id: "autodesk" },
        { id: "firewall" },
        { id: "linux kernel" },
        { id: "ethernet" },
        { id: "c" },
        { id: "c++" },
        { id: "nice" },
        { id: "lamp" },
        { id: "php" },
        { id: "sonar" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "typescript" },
        { id: "spring boot" },
        { id: "cloudfoundry" },
        { id: "sonarqube" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "flux" },
        { id: "vue.js" },
        { id: "javascript" },
        { id: "linux" }
      ],
      links: [
        { source: "linux", target: "scrum", weight: 2.0 },
        { source: "linux", target: "android", weight: 1.0 },
        { source: "linux", target: "java", weight: 9.0 },
        { source: "linux", target: "docker", weight: 9.0 },
        { source: "linux", target: "kubernetes", weight: 6.0 },
        { source: "linux", target: "ansible", weight: 3.0 },
        { source: "linux", target: "jenkins", weight: 5.0 },
        { source: "linux", target: "nagios", weight: 1.0 },
        { source: "linux", target: "nginx", weight: 2.0 },
        { source: "linux", target: "git", weight: 10.0 },
        { source: "linux", target: "sass", weight: 1.0 },
        { source: "linux", target: "less", weight: 1.0 },
        { source: "linux", target: "mysql", weight: 9.0 },
        { source: "linux", target: "magento", weight: 1.0 },
        { source: "linux", target: "data warehousing", weight: 1.0 },
        { source: "linux", target: "business intelligence", weight: 1.0 },
        { source: "linux", target: "r", weight: 1.0 },
        { source: "linux", target: "robotic process automation", weight: 1.0 },
        { source: "linux", target: "microsoft access", weight: 1.0 },
        { source: "linux", target: "power bi", weight: 1.0 },
        { source: "linux", target: "warehousing", weight: 1.0 },
        { source: "linux", target: "sql", weight: 11.0 },
        { source: "linux", target: "python", weight: 2.0 },
        { source: "linux", target: "data mining", weight: 1.0 },
        { source: "linux", target: "automation", weight: 1.0 },
        { source: "linux", target: "angular", weight: 7.0 },
        { source: "linux", target: "hibernate", weight: 5.0 },
        { source: "linux", target: "splunk", weight: 2.0 },
        { source: "linux", target: "talend", weight: 2.0 },
        { source: "linux", target: "jira", weight: 3.0 },
        { source: "linux", target: "gitlab", weight: 5.0 },
        { source: "linux", target: "unix", weight: 5.0 },
        { source: "linux", target: "active directory", weight: 2.0 },
        { source: "linux", target: "veeam", weight: 1.0 },
        { source: "linux", target: "centos", weight: 1.0 },
        { source: "linux", target: "vertica", weight: 1.0 },
        { source: "linux", target: "flask", weight: 2.0 },
        { source: "linux", target: "mongodb", weight: 1.0 },
        { source: "linux", target: "postgresql", weight: 2.0 },
        { source: "linux", target: "postman", weight: 1.0 },
        { source: "linux", target: "html5", weight: 1.0 },
        { source: "linux", target: "soapui", weight: 1.0 },
        { source: "linux", target: "bootstrap", weight: 2.0 },
        { source: "linux", target: "visual basic", weight: 1.0 },
        { source: "linux", target: "mariadb", weight: 1.0 },
        { source: "linux", target: "solaris", weight: 2.0 },
        { source: "linux", target: "devops", weight: 4.0 },
        { source: "linux", target: "jonas", weight: 1.0 },
        { source: "linux", target: "tcp/ip", weight: 2.0 },
        { source: "linux", target: "installation", weight: 1.0 },
        { source: "linux", target: "sendmail", weight: 1.0 },
        { source: "linux", target: "hp-ux", weight: 1.0 },
        { source: "linux", target: "xgboost", weight: 1.0 },
        { source: "linux", target: "syslog", weight: 1.0 },
        { source: "linux", target: "scala", weight: 1.0 },
        { source: "linux", target: "front end", weight: 2.0 },
        { source: "linux", target: "data science", weight: 1.0 },
        { source: "linux", target: "ip routing", weight: 1.0 },
        { source: "linux", target: "public cloud", weight: 1.0 },
        { source: "linux", target: "traefik", weight: 1.0 },
        { source: "linux", target: "yaml", weight: 1.0 },
        { source: "linux", target: "user story", weight: 1.0 },
        { source: "linux", target: "machine learning", weight: 1.0 },
        { source: "linux", target: "prometheus", weight: 1.0 },
        { source: "linux", target: "cloud infrastructure", weight: 1.0 },
        { source: "linux", target: "time series", weight: 1.0 },
        { source: "linux", target: "mise en place", weight: 1.0 },
        { source: "linux", target: "object storage", weight: 1.0 },
        { source: "linux", target: "docker container", weight: 1.0 },
        { source: "linux", target: "pytorch", weight: 1.0 },
        { source: "linux", target: "routing protocols", weight: 1.0 },
        { source: "linux", target: "terraform", weight: 1.0 },
        { source: "linux", target: "api gateway", weight: 1.0 },
        { source: "linux", target: "vm", weight: 1.0 },
        { source: "linux", target: "deep learning", weight: 1.0 },
        { source: "linux", target: "jupyter", weight: 1.0 },
        { source: "linux", target: "telemetry", weight: 1.0 },
        { source: "linux", target: "json", weight: 2.0 },
        { source: "linux", target: "jquery", weight: 1.0 },
        { source: "linux", target: "ajax", weight: 1.0 },
        { source: "linux", target: "pl/sql", weight: 1.0 },
        { source: "linux", target: "scripting", weight: 2.0 },
        { source: "linux", target: "autodesk", weight: 1.0 },
        { source: "linux", target: "firewall", weight: 1.0 },
        { source: "linux", target: "linux kernel", weight: 1.0 },
        { source: "linux", target: "ethernet", weight: 1.0 },
        { source: "linux", target: "c", weight: 1.0 },
        { source: "linux", target: "c++", weight: 1.0 },
        { source: "linux", target: "nice", weight: 1.0 },
        { source: "linux", target: "lamp", weight: 1.0 },
        { source: "linux", target: "php", weight: 1.0 },
        { source: "linux", target: "sonar", weight: 1.0 },
        { source: "linux", target: "back end", weight: 1.0 },
        { source: "linux", target: "xamarin", weight: 1.0 },
        { source: "linux", target: "typescript", weight: 1.0 },
        { source: "linux", target: "spring boot", weight: 1.0 },
        { source: "linux", target: "cloudfoundry", weight: 1.0 },
        { source: "linux", target: "sonarqube", weight: 1.0 },
        { source: "linux", target: "camunda", weight: 1.0 },
        { source: "linux", target: "cucumber", weight: 1.0 },
        { source: "linux", target: "flux", weight: 1.0 },
        { source: "linux", target: "vue.js", weight: 1.0 },
        { source: "linux", target: "javascript", weight: 3.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 9, "De 3 ?? 5 ans": 9, "De 1 ?? 3 ans": 4 },
      contract_type: { CDI: 22 },
      study_lvl: {
        "Bac +3": 3,
        "Bac +5 et plus": 14,
        "Bac +2": 2,
        "Bac +4": 3
      },
      count_job: 22
    },
    priority: 22,
    twins: {
      sql: 0.5507034035107384,
      git: 0.2025924603347418,
      mysql: 0.0745296010934924,
      docker: 0.0745296010934924,
      java: 0.0745296010934924
    }
  },
  magento: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "sass" },
        { id: "less" },
        { id: "mysql" },
        { id: "linux" },
        { id: "magento" }
      ],
      links: [
        { source: "magento", target: "docker", weight: 1.0 },
        { source: "magento", target: "sass", weight: 1.0 },
        { source: "magento", target: "less", weight: 1.0 },
        { source: "magento", target: "mysql", weight: 1.0 },
        { source: "magento", target: "linux", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 227,
    twins: { linux: 0.2, mysql: 0.2, less: 0.2, sass: 0.2, docker: 0.2 }
  },
  sql: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "unix" },
        { id: "angular" },
        { id: "c" },
        { id: "c#" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "python" },
        { id: "data mining" },
        { id: "automation" },
        { id: "rstudio" },
        { id: "flux" },
        { id: "hibernate" },
        { id: "pl/sql" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "php" },
        { id: "web design" },
        { id: "m" },
        { id: "scripting" },
        { id: "jira" },
        { id: "back end" },
        { id: "asp.net" },
        { id: "webforms" },
        { id: "front end" },
        { id: "pilotage" },
        { id: "windev" },
        { id: "sonar" },
        { id: "jquery" },
        { id: "mongodb" },
        { id: "machine learning" },
        { id: "scala" },
        { id: "deep learning" },
        { id: "nosql" },
        { id: "azure blob storage" },
        { id: "powerapps" },
        { id: "vertica" },
        { id: "flask" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "soapui" },
        { id: "bootstrap" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "gitlab" },
        { id: "jonas" },
        { id: "mulesoft" },
        { id: "talend" },
        { id: "eclipse" },
        { id: "source" },
        { id: "middleware" },
        { id: "user story" },
        { id: "chef" },
        { id: "drupal" },
        { id: "agile methodology" },
        { id: "junit" },
        { id: "spring mvc" },
        { id: "spring security" },
        { id: "mockito" },
        { id: "json" },
        { id: "spring boot" },
        { id: "nice" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "active directory" },
        { id: "xamarin" },
        { id: "mapr" },
        { id: "vue.js" },
        { id: "java 8" },
        { id: "redis" },
        { id: "sql" }
      ],
      links: [
        { source: "sql", target: "transformation", weight: 1.0 },
        { source: "sql", target: "scrum", weight: 4.0 },
        { source: "sql", target: "android", weight: 4.0 },
        { source: "sql", target: "java", weight: 17.0 },
        { source: "sql", target: "docker", weight: 7.0 },
        { source: "sql", target: "kubernetes", weight: 5.0 },
        { source: "sql", target: "ansible", weight: 2.0 },
        { source: "sql", target: "jenkins", weight: 7.0 },
        { source: "sql", target: "nagios", weight: 1.0 },
        { source: "sql", target: "nginx", weight: 1.0 },
        { source: "sql", target: "git", weight: 9.0 },
        { source: "sql", target: "mysql", weight: 10.0 },
        { source: "sql", target: "linux", weight: 11.0 },
        { source: "sql", target: "unix", weight: 7.0 },
        { source: "sql", target: "angular", weight: 13.0 },
        { source: "sql", target: "c", weight: 9.0 },
        { source: "sql", target: "c#", weight: 6.0 },
        { source: "sql", target: "typescript", weight: 2.0 },
        { source: "sql", target: "javascript", weight: 13.0 },
        { source: "sql", target: "data warehousing", weight: 1.0 },
        { source: "sql", target: "business intelligence", weight: 1.0 },
        { source: "sql", target: "r", weight: 1.0 },
        { source: "sql", target: "robotic process automation", weight: 1.0 },
        { source: "sql", target: "microsoft access", weight: 1.0 },
        { source: "sql", target: "power bi", weight: 2.0 },
        { source: "sql", target: "warehousing", weight: 1.0 },
        { source: "sql", target: "python", weight: 2.0 },
        { source: "sql", target: "data mining", weight: 1.0 },
        { source: "sql", target: "automation", weight: 1.0 },
        { source: "sql", target: "rstudio", weight: 1.0 },
        { source: "sql", target: "flux", weight: 4.0 },
        { source: "sql", target: "hibernate", weight: 9.0 },
        { source: "sql", target: "pl/sql", weight: 6.0 },
        { source: "sql", target: "responsive web design", weight: 2.0 },
        { source: "sql", target: "web services", weight: 2.0 },
        { source: "sql", target: "c++", weight: 5.0 },
        { source: "sql", target: "html5", weight: 8.0 },
        { source: "sql", target: "ajax", weight: 3.0 },
        { source: "sql", target: "php", weight: 6.0 },
        { source: "sql", target: "web design", weight: 2.0 },
        { source: "sql", target: "m", weight: 1.0 },
        { source: "sql", target: "scripting", weight: 5.0 },
        { source: "sql", target: "jira", weight: 5.0 },
        { source: "sql", target: "back end", weight: 6.0 },
        { source: "sql", target: "asp.net", weight: 6.0 },
        { source: "sql", target: "webforms", weight: 4.0 },
        { source: "sql", target: "front end", weight: 6.0 },
        { source: "sql", target: "pilotage", weight: 1.0 },
        { source: "sql", target: "windev", weight: 1.0 },
        { source: "sql", target: "sonar", weight: 4.0 },
        { source: "sql", target: "jquery", weight: 8.0 },
        { source: "sql", target: "mongodb", weight: 3.0 },
        { source: "sql", target: "machine learning", weight: 1.0 },
        { source: "sql", target: "scala", weight: 1.0 },
        { source: "sql", target: "deep learning", weight: 1.0 },
        { source: "sql", target: "nosql", weight: 1.0 },
        { source: "sql", target: "azure blob storage", weight: 1.0 },
        { source: "sql", target: "powerapps", weight: 1.0 },
        { source: "sql", target: "vertica", weight: 1.0 },
        { source: "sql", target: "flask", weight: 1.0 },
        { source: "sql", target: "postgresql", weight: 3.0 },
        { source: "sql", target: "postman", weight: 1.0 },
        { source: "sql", target: "soapui", weight: 1.0 },
        { source: "sql", target: "bootstrap", weight: 2.0 },
        { source: "sql", target: "visual basic", weight: 1.0 },
        { source: "sql", target: "mariadb", weight: 1.0 },
        { source: "sql", target: "solaris", weight: 1.0 },
        { source: "sql", target: "devops", weight: 2.0 },
        { source: "sql", target: "gitlab", weight: 3.0 },
        { source: "sql", target: "jonas", weight: 1.0 },
        { source: "sql", target: "mulesoft", weight: 1.0 },
        { source: "sql", target: "talend", weight: 2.0 },
        { source: "sql", target: "eclipse", weight: 1.0 },
        { source: "sql", target: "source", weight: 3.0 },
        { source: "sql", target: "middleware", weight: 1.0 },
        { source: "sql", target: "user story", weight: 1.0 },
        { source: "sql", target: "chef", weight: 1.0 },
        { source: "sql", target: "drupal", weight: 1.0 },
        { source: "sql", target: "agile methodology", weight: 1.0 },
        { source: "sql", target: "junit", weight: 1.0 },
        { source: "sql", target: "spring mvc", weight: 1.0 },
        { source: "sql", target: "spring security", weight: 1.0 },
        { source: "sql", target: "mockito", weight: 1.0 },
        { source: "sql", target: "json", weight: 2.0 },
        { source: "sql", target: "spring boot", weight: 2.0 },
        { source: "sql", target: "nice", weight: 2.0 },
        { source: "sql", target: "design flow", weight: 1.0 },
        { source: "sql", target: "surfaceflinger", weight: 1.0 },
        { source: "sql", target: "sqlite", weight: 1.0 },
        { source: "sql", target: "android studio", weight: 1.0 },
        { source: "sql", target: "android sdk", weight: 1.0 },
        { source: "sql", target: "active directory", weight: 1.0 },
        { source: "sql", target: "xamarin", weight: 1.0 },
        { source: "sql", target: "mapr", weight: 1.0 },
        { source: "sql", target: "vue.js", weight: 1.0 },
        { source: "sql", target: "java 8", weight: 1.0 },
        { source: "sql", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        D??butant: 2,
        "De 5 ?? 10 ans": 17,
        "De 10 ?? 20 ans": 1,
        "De 3 ?? 5 ans": 23,
        "De 1 ?? 3 ans": 8
      },
      contract_type: { CDI: 42, Freelance: 9 },
      study_lvl: {
        "Bac +5 et plus": 39,
        "Bac +2": 2,
        "Bac +3": 6,
        "Bac +4": 4
      },
      count_job: 51
    },
    priority: 3,
    twins: {
      java: 0.960097132732235,
      javascript: 0.017584792381232704,
      angular: 0.017584792381232704,
      linux: 0.002379842857571157,
      mysql: 0.0008754952605191257
    }
  },
  unix: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "sybase" },
        { id: "asp.net" },
        { id: "pl/sql" },
        { id: "splunk" },
        { id: "talend" },
        { id: "jira" },
        { id: "angular" },
        { id: "gitlab" },
        { id: "perl" },
        { id: "scripting" },
        { id: "mise en place" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "devops" },
        { id: "jonas" },
        { id: "sonar" },
        { id: "hibernate" },
        { id: "c" },
        { id: "source" },
        { id: "flux" },
        { id: "c++" },
        { id: "python" },
        { id: "javascript" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "veeam" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "clonezilla" },
        { id: "exim" },
        { id: "autodesk" },
        { id: "tcp/ip" },
        { id: "firewall" },
        { id: "unix" }
      ],
      links: [
        { source: "unix", target: "scrum", weight: 1.0 },
        { source: "unix", target: "java", weight: 7.0 },
        { source: "unix", target: "docker", weight: 2.0 },
        { source: "unix", target: "kubernetes", weight: 3.0 },
        { source: "unix", target: "ansible", weight: 1.0 },
        { source: "unix", target: "jenkins", weight: 6.0 },
        { source: "unix", target: "nagios", weight: 2.0 },
        { source: "unix", target: "git", weight: 2.0 },
        { source: "unix", target: "mysql", weight: 1.0 },
        { source: "unix", target: "linux", weight: 5.0 },
        { source: "unix", target: "sql", weight: 7.0 },
        { source: "unix", target: "sybase", weight: 1.0 },
        { source: "unix", target: "asp.net", weight: 1.0 },
        { source: "unix", target: "pl/sql", weight: 2.0 },
        { source: "unix", target: "splunk", weight: 2.0 },
        { source: "unix", target: "talend", weight: 2.0 },
        { source: "unix", target: "jira", weight: 3.0 },
        { source: "unix", target: "angular", weight: 5.0 },
        { source: "unix", target: "gitlab", weight: 4.0 },
        { source: "unix", target: "perl", weight: 3.0 },
        { source: "unix", target: "scripting", weight: 5.0 },
        { source: "unix", target: "mise en place", weight: 1.0 },
        { source: "unix", target: "visual basic", weight: 1.0 },
        { source: "unix", target: "mariadb", weight: 1.0 },
        { source: "unix", target: "solaris", weight: 1.0 },
        { source: "unix", target: "devops", weight: 1.0 },
        { source: "unix", target: "jonas", weight: 1.0 },
        { source: "unix", target: "sonar", weight: 2.0 },
        { source: "unix", target: "hibernate", weight: 2.0 },
        { source: "unix", target: "c", weight: 1.0 },
        { source: "unix", target: "source", weight: 1.0 },
        { source: "unix", target: "flux", weight: 1.0 },
        { source: "unix", target: "c++", weight: 1.0 },
        { source: "unix", target: "python", weight: 1.0 },
        { source: "unix", target: "javascript", weight: 1.0 },
        { source: "unix", target: "user story", weight: 1.0 },
        { source: "unix", target: "chef", weight: 1.0 },
        { source: "unix", target: "postgresql", weight: 1.0 },
        { source: "unix", target: "veeam", weight: 1.0 },
        { source: "unix", target: "wireshark", weight: 1.0 },
        { source: "unix", target: "qmail", weight: 1.0 },
        { source: "unix", target: "hyper-v", weight: 1.0 },
        { source: "unix", target: "smtp", weight: 1.0 },
        { source: "unix", target: "cacti", weight: 1.0 },
        { source: "unix", target: "ghost", weight: 1.0 },
        { source: "unix", target: "postfix", weight: 1.0 },
        { source: "unix", target: "lunix", weight: 1.0 },
        { source: "unix", target: "squid", weight: 1.0 },
        { source: "unix", target: "clonezilla", weight: 1.0 },
        { source: "unix", target: "exim", weight: 1.0 },
        { source: "unix", target: "autodesk", weight: 1.0 },
        { source: "unix", target: "tcp/ip", weight: 1.0 },
        { source: "unix", target: "firewall", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        D??butant: 2,
        "De 5 ?? 10 ans": 7,
        "De 1 ?? 3 ans": 3,
        "De 3 ?? 5 ans": 4
      },
      contract_type: { CDI: 12, Freelance: 3, Stage: 1 },
      study_lvl: { "Bac +5 et plus": 15, "Bac +4": 1 },
      count_job: 16
    },
    priority: 226,
    twins: {
      sql: 0.3312048807067099,
      java: 0.3312048807067099,
      jenkins: 0.12184346642763866,
      scripting: 0.0448237063397911,
      angular: 0.0448237063397911
    }
  },
  django: {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "django" }
      ],
      links: [
        { source: "django", target: "python", weight: 1.0 },
        { source: "django", target: "angular", weight: 1.0 },
        { source: "django", target: "flask", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +2": 1 },
      count_job: 1
    },
    priority: 225,
    twins: {
      flask: 0.3333333333333333,
      angular: 0.3333333333333333,
      python: 0.3333333333333333
    }
  },
  python: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "django" },
        { id: "angular" },
        { id: "flask" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "eyes" },
        { id: "aruba" },
        { id: "firewall" },
        { id: "incident management" },
        { id: "nice" },
        { id: "resource management" },
        { id: "big data" },
        { id: "sas" },
        { id: "robot framework" },
        { id: "jira" },
        { id: "testlink" },
        { id: "selenium" },
        { id: "javascript" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "scripting" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "openapi" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "gitlab" },
        { id: "markdown" },
        { id: "web services" },
        { id: "hosting" },
        { id: "installation" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "perl" },
        { id: "c" },
        { id: "source" },
        { id: "flux" },
        { id: "c++" },
        { id: "user story" },
        { id: "chef" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "devops" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "python" }
      ],
      links: [
        { source: "python", target: "scrum", weight: 2.0 },
        { source: "python", target: "java", weight: 1.0 },
        { source: "python", target: "docker", weight: 3.0 },
        { source: "python", target: "kubernetes", weight: 3.0 },
        { source: "python", target: "jenkins", weight: 2.0 },
        { source: "python", target: "nginx", weight: 2.0 },
        { source: "python", target: "git", weight: 3.0 },
        { source: "python", target: "mysql", weight: 1.0 },
        { source: "python", target: "linux", weight: 2.0 },
        { source: "python", target: "sql", weight: 2.0 },
        { source: "python", target: "unix", weight: 1.0 },
        { source: "python", target: "django", weight: 1.0 },
        { source: "python", target: "angular", weight: 2.0 },
        { source: "python", target: "flask", weight: 2.0 },
        { source: "python", target: "data warehousing", weight: 1.0 },
        { source: "python", target: "business intelligence", weight: 1.0 },
        { source: "python", target: "r", weight: 3.0 },
        { source: "python", target: "robotic process automation", weight: 1.0 },
        { source: "python", target: "microsoft access", weight: 1.0 },
        { source: "python", target: "power bi", weight: 1.0 },
        { source: "python", target: "warehousing", weight: 1.0 },
        { source: "python", target: "data mining", weight: 1.0 },
        { source: "python", target: "automation", weight: 2.0 },
        { source: "python", target: "eyes", weight: 1.0 },
        { source: "python", target: "aruba", weight: 1.0 },
        { source: "python", target: "firewall", weight: 1.0 },
        { source: "python", target: "incident management", weight: 1.0 },
        { source: "python", target: "nice", weight: 2.0 },
        { source: "python", target: "resource management", weight: 1.0 },
        { source: "python", target: "big data", weight: 1.0 },
        { source: "python", target: "sas", weight: 2.0 },
        { source: "python", target: "robot framework", weight: 1.0 },
        { source: "python", target: "jira", weight: 1.0 },
        { source: "python", target: "testlink", weight: 1.0 },
        { source: "python", target: "selenium", weight: 1.0 },
        { source: "python", target: "javascript", weight: 2.0 },
        { source: "python", target: "kapacitor", weight: 1.0 },
        { source: "python", target: "influxdb", weight: 1.0 },
        { source: "python", target: "telegraf", weight: 1.0 },
        { source: "python", target: "traefik", weight: 2.0 },
        { source: "python", target: "docker swarm", weight: 1.0 },
        { source: "python", target: "yaml", weight: 2.0 },
        { source: "python", target: "scripting", weight: 2.0 },
        { source: "python", target: "pilotage", weight: 1.0 },
        { source: "python", target: "prometheus", weight: 2.0 },
        { source: "python", target: "go", weight: 1.0 },
        { source: "python", target: "openapi", weight: 1.0 },
        { source: "python", target: "postgresql", weight: 2.0 },
        { source: "python", target: "grafana", weight: 1.0 },
        { source: "python", target: "templates", weight: 1.0 },
        { source: "python", target: "gitlab", weight: 3.0 },
        { source: "python", target: "markdown", weight: 1.0 },
        { source: "python", target: "web services", weight: 1.0 },
        { source: "python", target: "hosting", weight: 1.0 },
        { source: "python", target: "installation", weight: 1.0 },
        { source: "python", target: "sap hana", weight: 1.0 },
        { source: "python", target: "qlik sense", weight: 1.0 },
        { source: "python", target: "perl", weight: 1.0 },
        { source: "python", target: "c", weight: 1.0 },
        { source: "python", target: "source", weight: 1.0 },
        { source: "python", target: "flux", weight: 1.0 },
        { source: "python", target: "c++", weight: 1.0 },
        { source: "python", target: "user story", weight: 2.0 },
        { source: "python", target: "chef", weight: 1.0 },
        { source: "python", target: "xgboost", weight: 1.0 },
        { source: "python", target: "syslog", weight: 1.0 },
        { source: "python", target: "scala", weight: 1.0 },
        { source: "python", target: "front end", weight: 1.0 },
        { source: "python", target: "data science", weight: 1.0 },
        { source: "python", target: "ip routing", weight: 1.0 },
        { source: "python", target: "public cloud", weight: 1.0 },
        { source: "python", target: "devops", weight: 1.0 },
        { source: "python", target: "machine learning", weight: 1.0 },
        { source: "python", target: "cloud infrastructure", weight: 1.0 },
        { source: "python", target: "time series", weight: 1.0 },
        { source: "python", target: "mise en place", weight: 1.0 },
        { source: "python", target: "object storage", weight: 1.0 },
        { source: "python", target: "docker container", weight: 1.0 },
        { source: "python", target: "pytorch", weight: 1.0 },
        { source: "python", target: "routing protocols", weight: 1.0 },
        { source: "python", target: "terraform", weight: 1.0 },
        { source: "python", target: "api gateway", weight: 1.0 },
        { source: "python", target: "vm", weight: 1.0 },
        { source: "python", target: "deep learning", weight: 1.0 },
        { source: "python", target: "jupyter", weight: 1.0 },
        { source: "python", target: "telemetry", weight: 1.0 },
        { source: "python", target: "json", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 5, "De 3 ?? 5 ans": 4 },
      contract_type: { CDI: 8, Freelance: 1 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 8 },
      count_job: 9
    },
    priority: 9,
    twins: {
      gitlab: 0.04987346127774267,
      r: 0.04987346127774267,
      git: 0.04987346127774267,
      kubernetes: 0.04987346127774267,
      docker: 0.04987346127774267
    }
  },
  angular: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "django" },
        { id: "python" },
        { id: "flask" },
        { id: "c" },
        { id: "c#" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "hibernate" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "php" },
        { id: "web design" },
        { id: "splunk" },
        { id: "talend" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "java 8" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "perl" },
        { id: "sonar" },
        { id: "source" },
        { id: "flux" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "mariadb" },
        { id: "spring boot" },
        { id: "continuous delivery" },
        { id: "nosql" },
        { id: "pl/sql" },
        { id: "agile methodology" },
        { id: "junit" },
        { id: "spring mvc" },
        { id: "spring security" },
        { id: "mockito" },
        { id: "json" },
        { id: "nice" },
        { id: "entity framework" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "front end" },
        { id: "cloudfoundry" },
        { id: "devops" },
        { id: "sonarqube" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "mongodb" },
        { id: "redis" },
        { id: "angular" }
      ],
      links: [
        { source: "angular", target: "scrum", weight: 2.0 },
        { source: "angular", target: "android", weight: 1.0 },
        { source: "angular", target: "java", weight: 20.0 },
        { source: "angular", target: "docker", weight: 7.0 },
        { source: "angular", target: "kubernetes", weight: 6.0 },
        { source: "angular", target: "ansible", weight: 2.0 },
        { source: "angular", target: "jenkins", weight: 9.0 },
        { source: "angular", target: "git", weight: 8.0 },
        { source: "angular", target: "mysql", weight: 5.0 },
        { source: "angular", target: "linux", weight: 7.0 },
        { source: "angular", target: "sql", weight: 13.0 },
        { source: "angular", target: "unix", weight: 5.0 },
        { source: "angular", target: "django", weight: 1.0 },
        { source: "angular", target: "python", weight: 2.0 },
        { source: "angular", target: "flask", weight: 1.0 },
        { source: "angular", target: "c", weight: 5.0 },
        { source: "angular", target: "c#", weight: 2.0 },
        { source: "angular", target: "typescript", weight: 3.0 },
        { source: "angular", target: "javascript", weight: 8.0 },
        { source: "angular", target: "hibernate", weight: 10.0 },
        { source: "angular", target: "responsive web design", weight: 2.0 },
        { source: "angular", target: "web services", weight: 2.0 },
        { source: "angular", target: "jquery", weight: 3.0 },
        { source: "angular", target: "c++", weight: 3.0 },
        { source: "angular", target: "html5", weight: 5.0 },
        { source: "angular", target: "ajax", weight: 2.0 },
        { source: "angular", target: "php", weight: 4.0 },
        { source: "angular", target: "web design", weight: 2.0 },
        { source: "angular", target: "splunk", weight: 2.0 },
        { source: "angular", target: "talend", weight: 2.0 },
        { source: "angular", target: "jira", weight: 2.0 },
        { source: "angular", target: "gitlab", weight: 4.0 },
        { source: "angular", target: "java 8", weight: 2.0 },
        { source: "angular", target: "bootstrap", weight: 2.0 },
        { source: "angular", target: "kotlin", weight: 1.0 },
        { source: "angular", target: "perl", weight: 1.0 },
        { source: "angular", target: "sonar", weight: 4.0 },
        { source: "angular", target: "source", weight: 1.0 },
        { source: "angular", target: "flux", weight: 1.0 },
        { source: "angular", target: "user story", weight: 1.0 },
        { source: "angular", target: "chef", weight: 1.0 },
        { source: "angular", target: "postgresql", weight: 1.0 },
        { source: "angular", target: "mariadb", weight: 1.0 },
        { source: "angular", target: "spring boot", weight: 3.0 },
        { source: "angular", target: "continuous delivery", weight: 1.0 },
        { source: "angular", target: "nosql", weight: 1.0 },
        { source: "angular", target: "pl/sql", weight: 1.0 },
        { source: "angular", target: "agile methodology", weight: 1.0 },
        { source: "angular", target: "junit", weight: 1.0 },
        { source: "angular", target: "spring mvc", weight: 1.0 },
        { source: "angular", target: "spring security", weight: 1.0 },
        { source: "angular", target: "mockito", weight: 1.0 },
        { source: "angular", target: "json", weight: 2.0 },
        { source: "angular", target: "nice", weight: 1.0 },
        { source: "angular", target: "entity framework", weight: 1.0 },
        { source: "angular", target: "back end", weight: 2.0 },
        { source: "angular", target: "xamarin", weight: 1.0 },
        { source: "angular", target: "front end", weight: 2.0 },
        { source: "angular", target: "cloudfoundry", weight: 1.0 },
        { source: "angular", target: "devops", weight: 3.0 },
        { source: "angular", target: "sonarqube", weight: 1.0 },
        { source: "angular", target: "camunda", weight: 1.0 },
        { source: "angular", target: "cucumber", weight: 1.0 },
        { source: "angular", target: "mongodb", weight: 1.0 },
        { source: "angular", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 11,
        "De 3 ?? 5 ans": 9,
        "De 1 ?? 3 ans": 8,
        D??butant: 1
      },
      contract_type: { CDI: 27, Freelance: 2 },
      study_lvl: { "Bac +2": 2, "Bac +5 et plus": 23, "Bac +4": 4 },
      count_job: 29
    },
    priority: 20,
    twins: {
      java: 0.9990071936659484,
      sql: 0.0009109766433632062,
      hibernate: 4.535485642465116e-5,
      jenkins: 1.668511923591167e-5,
      javascript: 6.1381123403860675e-6
    }
  },
  flask: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "django" },
        { id: "python" },
        { id: "angular" },
        { id: "vertica" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "javascript" },
        { id: "html5" },
        { id: "soapui" },
        { id: "bootstrap" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "devops" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "json" },
        { id: "gitlab" },
        { id: "flask" }
      ],
      links: [
        { source: "flask", target: "scrum", weight: 1.0 },
        { source: "flask", target: "docker", weight: 2.0 },
        { source: "flask", target: "kubernetes", weight: 1.0 },
        { source: "flask", target: "nginx", weight: 2.0 },
        { source: "flask", target: "git", weight: 2.0 },
        { source: "flask", target: "mysql", weight: 1.0 },
        { source: "flask", target: "linux", weight: 2.0 },
        { source: "flask", target: "sql", weight: 1.0 },
        { source: "flask", target: "django", weight: 1.0 },
        { source: "flask", target: "python", weight: 2.0 },
        { source: "flask", target: "angular", weight: 1.0 },
        { source: "flask", target: "vertica", weight: 1.0 },
        { source: "flask", target: "mongodb", weight: 1.0 },
        { source: "flask", target: "postgresql", weight: 1.0 },
        { source: "flask", target: "postman", weight: 1.0 },
        { source: "flask", target: "javascript", weight: 1.0 },
        { source: "flask", target: "html5", weight: 1.0 },
        { source: "flask", target: "soapui", weight: 1.0 },
        { source: "flask", target: "bootstrap", weight: 1.0 },
        { source: "flask", target: "xgboost", weight: 1.0 },
        { source: "flask", target: "syslog", weight: 1.0 },
        { source: "flask", target: "scala", weight: 1.0 },
        { source: "flask", target: "front end", weight: 1.0 },
        { source: "flask", target: "data science", weight: 1.0 },
        { source: "flask", target: "ip routing", weight: 1.0 },
        { source: "flask", target: "public cloud", weight: 1.0 },
        { source: "flask", target: "traefik", weight: 1.0 },
        { source: "flask", target: "yaml", weight: 1.0 },
        { source: "flask", target: "user story", weight: 1.0 },
        { source: "flask", target: "devops", weight: 1.0 },
        { source: "flask", target: "machine learning", weight: 1.0 },
        { source: "flask", target: "prometheus", weight: 1.0 },
        { source: "flask", target: "cloud infrastructure", weight: 1.0 },
        { source: "flask", target: "time series", weight: 1.0 },
        { source: "flask", target: "mise en place", weight: 1.0 },
        { source: "flask", target: "object storage", weight: 1.0 },
        { source: "flask", target: "docker container", weight: 1.0 },
        { source: "flask", target: "pytorch", weight: 1.0 },
        { source: "flask", target: "routing protocols", weight: 1.0 },
        { source: "flask", target: "terraform", weight: 1.0 },
        { source: "flask", target: "api gateway", weight: 1.0 },
        { source: "flask", target: "vm", weight: 1.0 },
        { source: "flask", target: "deep learning", weight: 1.0 },
        { source: "flask", target: "jupyter", weight: 1.0 },
        { source: "flask", target: "telemetry", weight: 1.0 },
        { source: "flask", target: "json", weight: 1.0 },
        { source: "flask", target: "gitlab", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 1 ?? 3 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +2": 2, "Bac +5 et plus": 1 },
      count_job: 3
    },
    priority: 224,
    twins: {
      python: 0.04889751618817867,
      linux: 0.04889751618817867,
      git: 0.04889751618817867,
      nginx: 0.04889751618817867,
      docker: 0.04889751618817867
    }
  },
  c: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "c#" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "php" },
        { id: "web design" },
        { id: "azure blob storage" },
        { id: "asp.net" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "microservices" },
        { id: "flux" },
        { id: "source" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "gitlab" },
        { id: "linux kernel" },
        { id: "ethernet" },
        { id: "nice" },
        { id: "c" }
      ],
      links: [
        { source: "c", target: "scrum", weight: 1.0 },
        { source: "c", target: "android", weight: 2.0 },
        { source: "c", target: "java", weight: 1.0 },
        { source: "c", target: "docker", weight: 1.0 },
        { source: "c", target: "kubernetes", weight: 2.0 },
        { source: "c", target: "jenkins", weight: 1.0 },
        { source: "c", target: "git", weight: 1.0 },
        { source: "c", target: "mysql", weight: 2.0 },
        { source: "c", target: "linux", weight: 1.0 },
        { source: "c", target: "sql", weight: 9.0 },
        { source: "c", target: "unix", weight: 1.0 },
        { source: "c", target: "python", weight: 1.0 },
        { source: "c", target: "angular", weight: 5.0 },
        { source: "c", target: "c#", weight: 8.0 },
        { source: "c", target: "typescript", weight: 1.0 },
        { source: "c", target: "javascript", weight: 5.0 },
        { source: "c", target: "responsive web design", weight: 2.0 },
        { source: "c", target: "web services", weight: 2.0 },
        { source: "c", target: "jquery", weight: 2.0 },
        { source: "c", target: "c++", weight: 6.0 },
        { source: "c", target: "html5", weight: 4.0 },
        { source: "c", target: "ajax", weight: 2.0 },
        { source: "c", target: "php", weight: 3.0 },
        { source: "c", target: "web design", weight: 2.0 },
        { source: "c", target: "azure blob storage", weight: 1.0 },
        { source: "c", target: "asp.net", weight: 3.0 },
        { source: "c", target: "entity framework", weight: 2.0 },
        { source: "c", target: "sitecore", weight: 1.0 },
        { source: "c", target: "azure data factory", weight: 1.0 },
        { source: "c", target: "microservices", weight: 1.0 },
        { source: "c", target: "flux", weight: 2.0 },
        { source: "c", target: "source", weight: 2.0 },
        { source: "c", target: "user story", weight: 1.0 },
        { source: "c", target: "chef", weight: 1.0 },
        { source: "c", target: "postgresql", weight: 1.0 },
        { source: "c", target: "gitlab", weight: 1.0 },
        { source: "c", target: "linux kernel", weight: 1.0 },
        { source: "c", target: "ethernet", weight: 1.0 },
        { source: "c", target: "nice", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 5,
        "De 10 ?? 20 ans": 1,
        "De 1 ?? 3 ans": 4,
        "De 3 ?? 5 ans": 4
      },
      contract_type: { CDI: 11, Freelance: 3 },
      study_lvl: {
        "Bac +2": 1,
        "Bac +5 et plus": 11,
        "Bac +3": 1,
        "Bac +4": 1
      },
      count_job: 14
    },
    priority: 13,
    twins: {
      sql: 0.6744301704603998,
      "c#": 0.24810899421813246,
      "c++": 0.033577901006062054,
      javascript: 0.012352619457820119,
      angular: 0.012352619457820119
    }
  },
  "c#": {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "kubernetes" },
        { id: "mysql" },
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "azure blob storage" },
        { id: "asp.net" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "html5" },
        { id: "microservices" },
        { id: "c++" },
        { id: "php" },
        { id: "source" },
        { id: "c#" }
      ],
      links: [
        { source: "c#", target: "android", weight: 2.0 },
        { source: "c#", target: "kubernetes", weight: 1.0 },
        { source: "c#", target: "mysql", weight: 2.0 },
        { source: "c#", target: "sql", weight: 6.0 },
        { source: "c#", target: "angular", weight: 2.0 },
        { source: "c#", target: "c", weight: 8.0 },
        { source: "c#", target: "typescript", weight: 1.0 },
        { source: "c#", target: "javascript", weight: 2.0 },
        { source: "c#", target: "azure blob storage", weight: 1.0 },
        { source: "c#", target: "asp.net", weight: 3.0 },
        { source: "c#", target: "entity framework", weight: 2.0 },
        { source: "c#", target: "sitecore", weight: 1.0 },
        { source: "c#", target: "azure data factory", weight: 1.0 },
        { source: "c#", target: "html5", weight: 2.0 },
        { source: "c#", target: "microservices", weight: 1.0 },
        { source: "c#", target: "c++", weight: 2.0 },
        { source: "c#", target: "php", weight: 1.0 },
        { source: "c#", target: "source", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 2,
        "De 10 ?? 20 ans": 1,
        "De 3 ?? 5 ans": 3,
        "De 1 ?? 3 ans": 2
      },
      contract_type: { CDI: 5, Freelance: 3 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 5, "Bac +3": 1, "Bac +4": 1 },
      count_job: 8
    },
    priority: 223,
    twins: {
      c: 0.8571040049635055,
      sql: 0.11599641327497111,
      "asp.net": 0.005775121358147987,
      "c++": 0.0021245484179327426,
      html5: 0.0021245484179327426
    }
  },
  typescript: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "c#" },
        { id: "javascript" },
        { id: "protractor" },
        { id: "sonar" },
        { id: "bitbucket" },
        { id: "jira" },
        { id: "postman" },
        { id: "jest" },
        { id: "back end" },
        { id: "hibernate" },
        { id: "devops" },
        { id: "xamarin" },
        { id: "json" },
        { id: "spring boot" },
        { id: "front end" },
        { id: "bootstrap" },
        { id: "typescript" }
      ],
      links: [
        { source: "typescript", target: "transformation", weight: 1.0 },
        { source: "typescript", target: "scrum", weight: 1.0 },
        { source: "typescript", target: "android", weight: 1.0 },
        { source: "typescript", target: "java", weight: 1.0 },
        { source: "typescript", target: "docker", weight: 1.0 },
        { source: "typescript", target: "ansible", weight: 1.0 },
        { source: "typescript", target: "jenkins", weight: 2.0 },
        { source: "typescript", target: "git", weight: 1.0 },
        { source: "typescript", target: "linux", weight: 1.0 },
        { source: "typescript", target: "sql", weight: 2.0 },
        { source: "typescript", target: "angular", weight: 3.0 },
        { source: "typescript", target: "c", weight: 1.0 },
        { source: "typescript", target: "c#", weight: 1.0 },
        { source: "typescript", target: "javascript", weight: 3.0 },
        { source: "typescript", target: "protractor", weight: 1.0 },
        { source: "typescript", target: "sonar", weight: 2.0 },
        { source: "typescript", target: "bitbucket", weight: 1.0 },
        { source: "typescript", target: "jira", weight: 1.0 },
        { source: "typescript", target: "postman", weight: 1.0 },
        { source: "typescript", target: "jest", weight: 1.0 },
        { source: "typescript", target: "back end", weight: 1.0 },
        { source: "typescript", target: "hibernate", weight: 1.0 },
        { source: "typescript", target: "devops", weight: 1.0 },
        { source: "typescript", target: "xamarin", weight: 1.0 },
        { source: "typescript", target: "json", weight: 1.0 },
        { source: "typescript", target: "spring boot", weight: 1.0 },
        { source: "typescript", target: "front end", weight: 1.0 },
        { source: "typescript", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2, "De 3 ?? 5 ans": 3 },
      contract_type: { CDI: 4, Freelance: 1 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 3, "Bac +4": 1 },
      count_job: 5
    },
    priority: 39,
    twins: {
      javascript: 0.1608661072924337,
      angular: 0.1608661072924337,
      sonar: 0.05917933365416579,
      sql: 0.05917933365416579,
      jenkins: 0.05917933365416579
    }
  },
  javascript: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "c" },
        { id: "c#" },
        { id: "typescript" },
        { id: "symfony" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" },
        { id: "back end" },
        { id: "asp.net" },
        { id: "webforms" },
        { id: "front end" },
        { id: "spring webflux" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "robot framework" },
        { id: "jira" },
        { id: "testlink" },
        { id: "selenium" },
        { id: "vertica" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "soapui" },
        { id: "bootstrap" },
        { id: "php" },
        { id: "perl" },
        { id: "gitlab" },
        { id: "protractor" },
        { id: "source" },
        { id: "flux" },
        { id: "user story" },
        { id: "chef" },
        { id: "servicenow" },
        { id: "sonar" },
        { id: "hibernate" },
        { id: "nosql" },
        { id: "bitbucket" },
        { id: "jest" },
        { id: "xamarin" },
        { id: "blazor" },
        { id: "devops" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "vue.js" },
        { id: "redis" },
        { id: "javascript" }
      ],
      links: [
        { source: "javascript", target: "transformation", weight: 1.0 },
        { source: "javascript", target: "scrum", weight: 4.0 },
        { source: "javascript", target: "java", weight: 8.0 },
        { source: "javascript", target: "docker", weight: 3.0 },
        { source: "javascript", target: "kubernetes", weight: 1.0 },
        { source: "javascript", target: "ansible", weight: 1.0 },
        { source: "javascript", target: "jenkins", weight: 5.0 },
        { source: "javascript", target: "nginx", weight: 1.0 },
        { source: "javascript", target: "git", weight: 8.0 },
        { source: "javascript", target: "mysql", weight: 3.0 },
        { source: "javascript", target: "linux", weight: 3.0 },
        { source: "javascript", target: "sql", weight: 13.0 },
        { source: "javascript", target: "unix", weight: 1.0 },
        { source: "javascript", target: "python", weight: 2.0 },
        { source: "javascript", target: "angular", weight: 8.0 },
        { source: "javascript", target: "flask", weight: 1.0 },
        { source: "javascript", target: "c", weight: 5.0 },
        { source: "javascript", target: "c#", weight: 2.0 },
        { source: "javascript", target: "typescript", weight: 3.0 },
        { source: "javascript", target: "symfony", weight: 1.0 },
        { source: "javascript", target: "responsive web design", weight: 2.0 },
        { source: "javascript", target: "web services", weight: 2.0 },
        { source: "javascript", target: "jquery", weight: 8.0 },
        { source: "javascript", target: "c++", weight: 3.0 },
        { source: "javascript", target: "html5", weight: 9.0 },
        { source: "javascript", target: "ajax", weight: 3.0 },
        { source: "javascript", target: "web design", weight: 2.0 },
        { source: "javascript", target: "back end", weight: 9.0 },
        { source: "javascript", target: "asp.net", weight: 5.0 },
        { source: "javascript", target: "webforms", weight: 4.0 },
        { source: "javascript", target: "front end", weight: 8.0 },
        { source: "javascript", target: "spring webflux", weight: 3.0 },
        { source: "javascript", target: "mongodb", weight: 5.0 },
        { source: "javascript", target: "java 8", weight: 4.0 },
        { source: "javascript", target: "robot framework", weight: 1.0 },
        { source: "javascript", target: "jira", weight: 2.0 },
        { source: "javascript", target: "testlink", weight: 1.0 },
        { source: "javascript", target: "selenium", weight: 1.0 },
        { source: "javascript", target: "vertica", weight: 1.0 },
        { source: "javascript", target: "postgresql", weight: 3.0 },
        { source: "javascript", target: "postman", weight: 2.0 },
        { source: "javascript", target: "soapui", weight: 1.0 },
        { source: "javascript", target: "bootstrap", weight: 2.0 },
        { source: "javascript", target: "php", weight: 4.0 },
        { source: "javascript", target: "perl", weight: 1.0 },
        { source: "javascript", target: "gitlab", weight: 3.0 },
        { source: "javascript", target: "protractor", weight: 1.0 },
        { source: "javascript", target: "source", weight: 1.0 },
        { source: "javascript", target: "flux", weight: 2.0 },
        { source: "javascript", target: "user story", weight: 1.0 },
        { source: "javascript", target: "chef", weight: 1.0 },
        { source: "javascript", target: "servicenow", weight: 1.0 },
        { source: "javascript", target: "sonar", weight: 2.0 },
        { source: "javascript", target: "hibernate", weight: 4.0 },
        { source: "javascript", target: "nosql", weight: 1.0 },
        { source: "javascript", target: "bitbucket", weight: 1.0 },
        { source: "javascript", target: "jest", weight: 1.0 },
        { source: "javascript", target: "xamarin", weight: 1.0 },
        { source: "javascript", target: "blazor", weight: 1.0 },
        { source: "javascript", target: "devops", weight: 2.0 },
        { source: "javascript", target: "jhipster", weight: 1.0 },
        { source: "javascript", target: "eclipse", weight: 1.0 },
        { source: "javascript", target: "sonarqube", weight: 1.0 },
        { source: "javascript", target: "vue.js", weight: 1.0 },
        { source: "javascript", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 1 ?? 3 ans": 6,
        "De 5 ?? 10 ans": 5,
        "De 10 ?? 20 ans": 1,
        "De 3 ?? 5 ans": 16
      },
      contract_type: { CDI: 24, Freelance: 4 },
      study_lvl: {
        "Bac +3": 4,
        "Bac +2": 2,
        "Bac +5 et plus": 21,
        "Bac +4": 1
      },
      count_job: 28
    },
    priority: 14,
    twins: {
      sql: 0.9319280010308937,
      "back end": 0.017068856737181743,
      html5: 0.017068856737181743,
      "front end": 0.006279281477909828,
      jquery: 0.006279281477909828
    }
  },
  sybase: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "unix" },
        { id: "asp.net" },
        { id: "sybase" }
      ],
      links: [
        { source: "sybase", target: "java", weight: 1.0 },
        { source: "sybase", target: "unix", weight: 1.0 },
        { source: "sybase", target: "asp.net", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 222,
    twins: {
      "asp.net": 0.3333333333333333,
      unix: 0.3333333333333333,
      java: 0.3333333333333333
    }
  },
  "asp.net": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "sql" },
        { id: "unix" },
        { id: "c" },
        { id: "c#" },
        { id: "javascript" },
        { id: "sybase" },
        { id: "back end" },
        { id: "webforms" },
        { id: "jquery" },
        { id: "html5" },
        { id: "front end" },
        { id: "azure blob storage" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "microservices" },
        { id: "source" },
        { id: "xamarin" },
        { id: "blazor" },
        { id: "devops" },
        { id: "asp.net" }
      ],
      links: [
        { source: "asp.net", target: "java", weight: 1.0 },
        { source: "asp.net", target: "kubernetes", weight: 1.0 },
        { source: "asp.net", target: "sql", weight: 6.0 },
        { source: "asp.net", target: "unix", weight: 1.0 },
        { source: "asp.net", target: "c", weight: 3.0 },
        { source: "asp.net", target: "c#", weight: 3.0 },
        { source: "asp.net", target: "javascript", weight: 5.0 },
        { source: "asp.net", target: "sybase", weight: 1.0 },
        { source: "asp.net", target: "back end", weight: 5.0 },
        { source: "asp.net", target: "webforms", weight: 4.0 },
        { source: "asp.net", target: "jquery", weight: 4.0 },
        { source: "asp.net", target: "html5", weight: 5.0 },
        { source: "asp.net", target: "front end", weight: 4.0 },
        { source: "asp.net", target: "azure blob storage", weight: 1.0 },
        { source: "asp.net", target: "entity framework", weight: 1.0 },
        { source: "asp.net", target: "sitecore", weight: 1.0 },
        { source: "asp.net", target: "azure data factory", weight: 1.0 },
        { source: "asp.net", target: "microservices", weight: 1.0 },
        { source: "asp.net", target: "source", weight: 1.0 },
        { source: "asp.net", target: "xamarin", weight: 1.0 },
        { source: "asp.net", target: "blazor", weight: 1.0 },
        { source: "asp.net", target: "devops", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2, "De 3 ?? 5 ans": 6, "De 1 ?? 3 ans": 1 },
      contract_type: { Freelance: 3, CDI: 6 },
      study_lvl: { "Bac +5 et plus": 9 },
      count_job: 9
    },
    priority: 221,
    twins: {
      sql: 0.37080825083676844,
      html5: 0.1364127320995904,
      "back end": 0.1364127320995904,
      javascript: 0.1364127320995904,
      "front end": 0.050183439653466985
    }
  },
  json: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "gradle" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "typescript" },
        { id: "nosql" },
        { id: "openapi" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "devops" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "mise en place" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "gitlab" },
        { id: "agile methodology" },
        { id: "junit" },
        { id: "spring mvc" },
        { id: "spring security" },
        { id: "mockito" },
        { id: "spring boot" },
        { id: "nice" },
        { id: "sonar" },
        { id: "back end" },
        { id: "hibernate" },
        { id: "xamarin" },
        { id: "bootstrap" },
        { id: "json" }
      ],
      links: [
        { source: "json", target: "scrum", weight: 1.0 },
        { source: "json", target: "android", weight: 1.0 },
        { source: "json", target: "java", weight: 2.0 },
        { source: "json", target: "docker", weight: 2.0 },
        { source: "json", target: "kubernetes", weight: 1.0 },
        { source: "json", target: "ansible", weight: 1.0 },
        { source: "json", target: "jenkins", weight: 3.0 },
        { source: "json", target: "nginx", weight: 1.0 },
        { source: "json", target: "git", weight: 2.0 },
        { source: "json", target: "gradle", weight: 1.0 },
        { source: "json", target: "mysql", weight: 1.0 },
        { source: "json", target: "linux", weight: 2.0 },
        { source: "json", target: "sql", weight: 2.0 },
        { source: "json", target: "python", weight: 1.0 },
        { source: "json", target: "angular", weight: 2.0 },
        { source: "json", target: "flask", weight: 1.0 },
        { source: "json", target: "typescript", weight: 1.0 },
        { source: "json", target: "nosql", weight: 1.0 },
        { source: "json", target: "openapi", weight: 1.0 },
        { source: "json", target: "xgboost", weight: 1.0 },
        { source: "json", target: "syslog", weight: 1.0 },
        { source: "json", target: "scala", weight: 1.0 },
        { source: "json", target: "front end", weight: 2.0 },
        { source: "json", target: "data science", weight: 1.0 },
        { source: "json", target: "ip routing", weight: 1.0 },
        { source: "json", target: "public cloud", weight: 1.0 },
        { source: "json", target: "traefik", weight: 1.0 },
        { source: "json", target: "yaml", weight: 1.0 },
        { source: "json", target: "user story", weight: 1.0 },
        { source: "json", target: "devops", weight: 2.0 },
        { source: "json", target: "machine learning", weight: 1.0 },
        { source: "json", target: "prometheus", weight: 1.0 },
        { source: "json", target: "cloud infrastructure", weight: 1.0 },
        { source: "json", target: "time series", weight: 1.0 },
        { source: "json", target: "mise en place", weight: 1.0 },
        { source: "json", target: "object storage", weight: 1.0 },
        { source: "json", target: "docker container", weight: 1.0 },
        { source: "json", target: "pytorch", weight: 1.0 },
        { source: "json", target: "routing protocols", weight: 1.0 },
        { source: "json", target: "terraform", weight: 1.0 },
        { source: "json", target: "api gateway", weight: 1.0 },
        { source: "json", target: "vm", weight: 1.0 },
        { source: "json", target: "deep learning", weight: 1.0 },
        { source: "json", target: "jupyter", weight: 1.0 },
        { source: "json", target: "telemetry", weight: 1.0 },
        { source: "json", target: "gitlab", weight: 1.0 },
        { source: "json", target: "agile methodology", weight: 1.0 },
        { source: "json", target: "junit", weight: 1.0 },
        { source: "json", target: "spring mvc", weight: 1.0 },
        { source: "json", target: "spring security", weight: 1.0 },
        { source: "json", target: "mockito", weight: 1.0 },
        { source: "json", target: "spring boot", weight: 2.0 },
        { source: "json", target: "nice", weight: 1.0 },
        { source: "json", target: "sonar", weight: 1.0 },
        { source: "json", target: "back end", weight: 1.0 },
        { source: "json", target: "hibernate", weight: 1.0 },
        { source: "json", target: "xamarin", weight: 1.0 },
        { source: "json", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 4 },
      contract_type: { CDI: 4 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 2, "Bac +4": 1 },
      count_job: 4
    },
    priority: 220,
    twins: {
      jenkins: 0.0925325444041308,
      "spring boot": 0.03404082072556332,
      devops: 0.03404082072556332,
      "front end": 0.03404082072556332,
      angular: 0.03404082072556332
    }
  },
  nosql: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "jenkins" },
        { id: "gradle" },
        { id: "sql" },
        { id: "angular" },
        { id: "javascript" },
        { id: "json" },
        { id: "openapi" },
        { id: "mongodb" },
        { id: "machine learning" },
        { id: "scala" },
        { id: "deep learning" },
        { id: "sonar" },
        { id: "hibernate" },
        { id: "nosql" }
      ],
      links: [
        { source: "nosql", target: "scrum", weight: 1.0 },
        { source: "nosql", target: "java", weight: 1.0 },
        { source: "nosql", target: "jenkins", weight: 2.0 },
        { source: "nosql", target: "gradle", weight: 1.0 },
        { source: "nosql", target: "sql", weight: 1.0 },
        { source: "nosql", target: "angular", weight: 1.0 },
        { source: "nosql", target: "javascript", weight: 1.0 },
        { source: "nosql", target: "json", weight: 1.0 },
        { source: "nosql", target: "openapi", weight: 1.0 },
        { source: "nosql", target: "mongodb", weight: 1.0 },
        { source: "nosql", target: "machine learning", weight: 1.0 },
        { source: "nosql", target: "scala", weight: 1.0 },
        { source: "nosql", target: "deep learning", weight: 1.0 },
        { source: "nosql", target: "sonar", weight: 1.0 },
        { source: "nosql", target: "hibernate", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 2 },
      count_job: 3
    },
    priority: 219,
    twins: {
      jenkins: 0.16259337271320504,
      hibernate: 0.0598147590919139,
      sonar: 0.0598147590919139,
      "deep learning": 0.0598147590919139,
      scala: 0.0598147590919139
    }
  },
  openapi: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "gradle" },
        { id: "python" },
        { id: "json" },
        { id: "nosql" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "scripting" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "gitlab" },
        { id: "markdown" },
        { id: "openapi" }
      ],
      links: [
        { source: "openapi", target: "docker", weight: 1.0 },
        { source: "openapi", target: "kubernetes", weight: 1.0 },
        { source: "openapi", target: "jenkins", weight: 1.0 },
        { source: "openapi", target: "nginx", weight: 1.0 },
        { source: "openapi", target: "gradle", weight: 1.0 },
        { source: "openapi", target: "python", weight: 1.0 },
        { source: "openapi", target: "json", weight: 1.0 },
        { source: "openapi", target: "nosql", weight: 1.0 },
        { source: "openapi", target: "kapacitor", weight: 1.0 },
        { source: "openapi", target: "influxdb", weight: 1.0 },
        { source: "openapi", target: "telegraf", weight: 1.0 },
        { source: "openapi", target: "traefik", weight: 1.0 },
        { source: "openapi", target: "docker swarm", weight: 1.0 },
        { source: "openapi", target: "yaml", weight: 1.0 },
        { source: "openapi", target: "scripting", weight: 1.0 },
        { source: "openapi", target: "pilotage", weight: 1.0 },
        { source: "openapi", target: "prometheus", weight: 1.0 },
        { source: "openapi", target: "go", weight: 1.0 },
        { source: "openapi", target: "postgresql", weight: 1.0 },
        { source: "openapi", target: "grafana", weight: 1.0 },
        { source: "openapi", target: "templates", weight: 1.0 },
        { source: "openapi", target: "gitlab", weight: 1.0 },
        { source: "openapi", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 1 },
      count_job: 2
    },
    priority: 218,
    twins: {
      markdown: 0.0434782608695652,
      gitlab: 0.0434782608695652,
      templates: 0.0434782608695652,
      grafana: 0.0434782608695652,
      postgresql: 0.0434782608695652
    }
  },
  symfony: {
    neiGraph: {
      nodes: [{ id: "javascript" }, { id: "php" }, { id: "symfony" }],
      links: [
        { source: "symfony", target: "javascript", weight: 1.0 },
        { source: "symfony", target: "php", weight: 4.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 4 },
      contract_type: { Freelance: 1, CDI: 3 },
      study_lvl: { "Bac +5 et plus": 4 },
      count_job: 4
    },
    priority: 217,
    twins: { php: 0.9525741268224331, javascript: 0.04742587317756678 }
  },
  php: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "java" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "c#" },
        { id: "javascript" },
        { id: "symfony" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" },
        { id: "pilotage" },
        { id: "windev" },
        { id: "perl" },
        { id: "gitlab" },
        { id: "drupal" },
        { id: "lamp" },
        { id: "php" }
      ],
      links: [
        { source: "php", target: "android", weight: 1.0 },
        { source: "php", target: "java", weight: 4.0 },
        { source: "php", target: "git", weight: 2.0 },
        { source: "php", target: "mysql", weight: 3.0 },
        { source: "php", target: "linux", weight: 1.0 },
        { source: "php", target: "sql", weight: 6.0 },
        { source: "php", target: "angular", weight: 4.0 },
        { source: "php", target: "c", weight: 3.0 },
        { source: "php", target: "c#", weight: 1.0 },
        { source: "php", target: "javascript", weight: 4.0 },
        { source: "php", target: "symfony", weight: 4.0 },
        { source: "php", target: "responsive web design", weight: 2.0 },
        { source: "php", target: "web services", weight: 2.0 },
        { source: "php", target: "jquery", weight: 3.0 },
        { source: "php", target: "c++", weight: 3.0 },
        { source: "php", target: "html5", weight: 2.0 },
        { source: "php", target: "ajax", weight: 2.0 },
        { source: "php", target: "web design", weight: 2.0 },
        { source: "php", target: "pilotage", weight: 1.0 },
        { source: "php", target: "windev", weight: 1.0 },
        { source: "php", target: "perl", weight: 1.0 },
        { source: "php", target: "gitlab", weight: 1.0 },
        { source: "php", target: "drupal", weight: 1.0 },
        { source: "php", target: "lamp", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 8, "De 3 ?? 5 ans": 8, "De 1 ?? 3 ans": 2 },
      contract_type: { Freelance: 1, CDI: 17 },
      study_lvl: { "Bac +5 et plus": 14, "Bac +3": 2, "Bac +4": 2 },
      count_job: 18
    },
    priority: 32,
    twins: {
      sql: 0.5232794569156317,
      symfony: 0.07081817351357789,
      javascript: 0.07081817351357789,
      angular: 0.07081817351357789,
      java: 0.07081817351357789
    }
  },
  devops: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "json" },
        { id: "mise en place" },
        { id: "google cloud" },
        { id: "analytics" },
        { id: "big data" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "jira" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "gitlab" },
        { id: "jonas" },
        { id: "spring boot" },
        { id: "continuous delivery" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "blazor" },
        { id: "bootstrap" },
        { id: "hibernate" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "html5" },
        { id: "sonar" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "devops" }
      ],
      links: [
        { source: "devops", target: "transformation", weight: 3.0 },
        { source: "devops", target: "scrum", weight: 3.0 },
        { source: "devops", target: "android", weight: 1.0 },
        { source: "devops", target: "java", weight: 6.0 },
        { source: "devops", target: "docker", weight: 6.0 },
        { source: "devops", target: "kubernetes", weight: 2.0 },
        { source: "devops", target: "ansible", weight: 5.0 },
        { source: "devops", target: "jenkins", weight: 5.0 },
        { source: "devops", target: "nagios", weight: 1.0 },
        { source: "devops", target: "nginx", weight: 1.0 },
        { source: "devops", target: "git", weight: 6.0 },
        { source: "devops", target: "mysql", weight: 4.0 },
        { source: "devops", target: "linux", weight: 4.0 },
        { source: "devops", target: "sql", weight: 2.0 },
        { source: "devops", target: "unix", weight: 1.0 },
        { source: "devops", target: "python", weight: 1.0 },
        { source: "devops", target: "angular", weight: 3.0 },
        { source: "devops", target: "flask", weight: 1.0 },
        { source: "devops", target: "typescript", weight: 1.0 },
        { source: "devops", target: "javascript", weight: 2.0 },
        { source: "devops", target: "asp.net", weight: 1.0 },
        { source: "devops", target: "json", weight: 2.0 },
        { source: "devops", target: "mise en place", weight: 4.0 },
        { source: "devops", target: "google cloud", weight: 1.0 },
        { source: "devops", target: "analytics", weight: 1.0 },
        { source: "devops", target: "big data", weight: 1.0 },
        { source: "devops", target: "spring cloud", weight: 1.0 },
        { source: "devops", target: "apache hadoop", weight: 1.0 },
        { source: "devops", target: "airflow", weight: 1.0 },
        { source: "devops", target: "scala", weight: 2.0 },
        { source: "devops", target: "sqoop", weight: 1.0 },
        { source: "devops", target: "microservices", weight: 1.0 },
        { source: "devops", target: "jira", weight: 1.0 },
        { source: "devops", target: "visual basic", weight: 1.0 },
        { source: "devops", target: "mariadb", weight: 2.0 },
        { source: "devops", target: "solaris", weight: 1.0 },
        { source: "devops", target: "gitlab", weight: 2.0 },
        { source: "devops", target: "jonas", weight: 1.0 },
        { source: "devops", target: "spring boot", weight: 2.0 },
        { source: "devops", target: "continuous delivery", weight: 1.0 },
        { source: "devops", target: "xgboost", weight: 1.0 },
        { source: "devops", target: "syslog", weight: 1.0 },
        { source: "devops", target: "front end", weight: 2.0 },
        { source: "devops", target: "data science", weight: 1.0 },
        { source: "devops", target: "ip routing", weight: 1.0 },
        { source: "devops", target: "public cloud", weight: 1.0 },
        { source: "devops", target: "traefik", weight: 1.0 },
        { source: "devops", target: "yaml", weight: 1.0 },
        { source: "devops", target: "user story", weight: 1.0 },
        { source: "devops", target: "machine learning", weight: 1.0 },
        { source: "devops", target: "prometheus", weight: 1.0 },
        { source: "devops", target: "cloud infrastructure", weight: 1.0 },
        { source: "devops", target: "time series", weight: 1.0 },
        { source: "devops", target: "object storage", weight: 1.0 },
        { source: "devops", target: "docker container", weight: 1.0 },
        { source: "devops", target: "pytorch", weight: 1.0 },
        { source: "devops", target: "routing protocols", weight: 1.0 },
        { source: "devops", target: "terraform", weight: 1.0 },
        { source: "devops", target: "api gateway", weight: 1.0 },
        { source: "devops", target: "vm", weight: 2.0 },
        { source: "devops", target: "deep learning", weight: 1.0 },
        { source: "devops", target: "jupyter", weight: 1.0 },
        { source: "devops", target: "telemetry", weight: 1.0 },
        { source: "devops", target: "back end", weight: 2.0 },
        { source: "devops", target: "xamarin", weight: 2.0 },
        { source: "devops", target: "blazor", weight: 1.0 },
        { source: "devops", target: "bootstrap", weight: 2.0 },
        { source: "devops", target: "hibernate", weight: 2.0 },
        { source: "devops", target: "jhipster", weight: 1.0 },
        { source: "devops", target: "eclipse", weight: 1.0 },
        { source: "devops", target: "sonarqube", weight: 2.0 },
        { source: "devops", target: "html5", weight: 1.0 },
        { source: "devops", target: "sonar", weight: 1.0 },
        { source: "devops", target: "cloudfoundry", weight: 1.0 },
        { source: "devops", target: "camunda", weight: 1.0 },
        { source: "devops", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 10, "De 5 ?? 10 ans": 4, "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 15 },
      study_lvl: { "Bac +5 et plus": 12, "Bac +4": 2, "Bac +3": 1 },
      count_job: 15
    },
    priority: 23,
    twins: {
      git: 0.20396683385670195,
      docker: 0.20396683385670195,
      java: 0.20396683385670195,
      jenkins: 0.07503520485671193,
      ansible: 0.07503520485671193
    }
  },
  "mise en place": {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "unix" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "front end" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "gitlab" },
        { id: "mise en place" }
      ],
      links: [
        { source: "mise en place", target: "transformation", weight: 2.0 },
        { source: "mise en place", target: "scrum", weight: 2.0 },
        { source: "mise en place", target: "docker", weight: 1.0 },
        { source: "mise en place", target: "kubernetes", weight: 1.0 },
        { source: "mise en place", target: "nginx", weight: 1.0 },
        { source: "mise en place", target: "git", weight: 1.0 },
        { source: "mise en place", target: "linux", weight: 1.0 },
        { source: "mise en place", target: "unix", weight: 1.0 },
        { source: "mise en place", target: "python", weight: 1.0 },
        { source: "mise en place", target: "flask", weight: 1.0 },
        { source: "mise en place", target: "json", weight: 1.0 },
        { source: "mise en place", target: "devops", weight: 4.0 },
        { source: "mise en place", target: "xgboost", weight: 1.0 },
        { source: "mise en place", target: "syslog", weight: 1.0 },
        { source: "mise en place", target: "scala", weight: 1.0 },
        { source: "mise en place", target: "front end", weight: 1.0 },
        { source: "mise en place", target: "data science", weight: 1.0 },
        { source: "mise en place", target: "ip routing", weight: 1.0 },
        { source: "mise en place", target: "public cloud", weight: 1.0 },
        { source: "mise en place", target: "traefik", weight: 1.0 },
        { source: "mise en place", target: "yaml", weight: 1.0 },
        { source: "mise en place", target: "user story", weight: 1.0 },
        { source: "mise en place", target: "machine learning", weight: 1.0 },
        { source: "mise en place", target: "prometheus", weight: 1.0 },
        {
          source: "mise en place",
          target: "cloud infrastructure",
          weight: 1.0
        },
        { source: "mise en place", target: "time series", weight: 1.0 },
        { source: "mise en place", target: "object storage", weight: 1.0 },
        { source: "mise en place", target: "docker container", weight: 1.0 },
        { source: "mise en place", target: "pytorch", weight: 1.0 },
        { source: "mise en place", target: "routing protocols", weight: 1.0 },
        { source: "mise en place", target: "terraform", weight: 1.0 },
        { source: "mise en place", target: "api gateway", weight: 1.0 },
        { source: "mise en place", target: "vm", weight: 2.0 },
        { source: "mise en place", target: "deep learning", weight: 1.0 },
        { source: "mise en place", target: "jupyter", weight: 1.0 },
        { source: "mise en place", target: "telemetry", weight: 1.0 },
        { source: "mise en place", target: "gitlab", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 4, "De 5 ?? 10 ans": 3 },
      contract_type: { CDI: 7 },
      study_lvl: { "Bac +5 et plus": 7 },
      count_job: 7
    },
    priority: 216,
    twins: {
      devops: 0.3279786332682761,
      vm: 0.04438708122891927,
      scrum: 0.04438708122891927,
      transformation: 0.04438708122891927,
      gitlab: 0.01632909463772624
    }
  },
  "data warehousing": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "data warehousing" }
      ],
      links: [
        { source: "data warehousing", target: "mysql", weight: 1.0 },
        { source: "data warehousing", target: "linux", weight: 1.0 },
        { source: "data warehousing", target: "sql", weight: 1.0 },
        { source: "data warehousing", target: "python", weight: 1.0 },
        {
          source: "data warehousing",
          target: "business intelligence",
          weight: 1.0
        },
        { source: "data warehousing", target: "r", weight: 1.0 },
        {
          source: "data warehousing",
          target: "robotic process automation",
          weight: 1.0
        },
        { source: "data warehousing", target: "microsoft access", weight: 1.0 },
        { source: "data warehousing", target: "power bi", weight: 1.0 },
        { source: "data warehousing", target: "warehousing", weight: 1.0 },
        { source: "data warehousing", target: "data mining", weight: 1.0 },
        { source: "data warehousing", target: "automation", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 215,
    twins: {
      automation: 0.08333333333333333,
      "data mining": 0.08333333333333333,
      warehousing: 0.08333333333333333,
      "power bi": 0.08333333333333333,
      "microsoft access": 0.08333333333333333
    }
  },
  "business intelligence": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "data science" },
        { id: "flux" },
        { id: "business intelligence" }
      ],
      links: [
        { source: "business intelligence", target: "mysql", weight: 1.0 },
        { source: "business intelligence", target: "linux", weight: 1.0 },
        { source: "business intelligence", target: "sql", weight: 1.0 },
        { source: "business intelligence", target: "python", weight: 1.0 },
        {
          source: "business intelligence",
          target: "data warehousing",
          weight: 1.0
        },
        { source: "business intelligence", target: "r", weight: 1.0 },
        {
          source: "business intelligence",
          target: "robotic process automation",
          weight: 1.0
        },
        {
          source: "business intelligence",
          target: "microsoft access",
          weight: 1.0
        },
        { source: "business intelligence", target: "power bi", weight: 2.0 },
        { source: "business intelligence", target: "warehousing", weight: 1.0 },
        { source: "business intelligence", target: "data mining", weight: 1.0 },
        { source: "business intelligence", target: "automation", weight: 1.0 },
        {
          source: "business intelligence",
          target: "data science",
          weight: 1.0
        },
        { source: "business intelligence", target: "flux", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 214,
    twins: {
      "power bi": 0.1729375931876604,
      flux: 0.06362018513941073,
      "data science": 0.06362018513941073,
      automation: 0.06362018513941073,
      "data mining": 0.06362018513941073
    }
  },
  r: {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "big data" },
        { id: "sas" },
        { id: "web services" },
        { id: "hosting" },
        { id: "installation" },
        { id: "scripting" },
        { id: "sap hana" },
        { id: "nice" },
        { id: "qlik sense" },
        { id: "perl" },
        { id: "r" }
      ],
      links: [
        { source: "r", target: "mysql", weight: 1.0 },
        { source: "r", target: "linux", weight: 1.0 },
        { source: "r", target: "sql", weight: 1.0 },
        { source: "r", target: "python", weight: 3.0 },
        { source: "r", target: "data warehousing", weight: 1.0 },
        { source: "r", target: "business intelligence", weight: 1.0 },
        { source: "r", target: "robotic process automation", weight: 1.0 },
        { source: "r", target: "microsoft access", weight: 1.0 },
        { source: "r", target: "power bi", weight: 1.0 },
        { source: "r", target: "warehousing", weight: 1.0 },
        { source: "r", target: "data mining", weight: 1.0 },
        { source: "r", target: "automation", weight: 2.0 },
        { source: "r", target: "big data", weight: 1.0 },
        { source: "r", target: "sas", weight: 2.0 },
        { source: "r", target: "web services", weight: 1.0 },
        { source: "r", target: "hosting", weight: 1.0 },
        { source: "r", target: "installation", weight: 1.0 },
        { source: "r", target: "scripting", weight: 1.0 },
        { source: "r", target: "sap hana", weight: 1.0 },
        { source: "r", target: "nice", weight: 1.0 },
        { source: "r", target: "qlik sense", weight: 1.0 },
        { source: "r", target: "perl", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 213,
    twins: {
      python: 0.23217320371499542,
      sas: 0.08541174843765595,
      automation: 0.08541174843765595,
      perl: 0.03142122628472068,
      "qlik sense": 0.03142122628472068
    }
  },
  "robotic process automation": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "robotic process automation" }
      ],
      links: [
        { source: "robotic process automation", target: "mysql", weight: 1.0 },
        { source: "robotic process automation", target: "linux", weight: 1.0 },
        { source: "robotic process automation", target: "sql", weight: 1.0 },
        { source: "robotic process automation", target: "python", weight: 1.0 },
        {
          source: "robotic process automation",
          target: "data warehousing",
          weight: 1.0
        },
        {
          source: "robotic process automation",
          target: "business intelligence",
          weight: 1.0
        },
        { source: "robotic process automation", target: "r", weight: 1.0 },
        {
          source: "robotic process automation",
          target: "microsoft access",
          weight: 1.0
        },
        {
          source: "robotic process automation",
          target: "power bi",
          weight: 1.0
        },
        {
          source: "robotic process automation",
          target: "warehousing",
          weight: 1.0
        },
        {
          source: "robotic process automation",
          target: "data mining",
          weight: 1.0
        },
        {
          source: "robotic process automation",
          target: "automation",
          weight: 1.0
        }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 212,
    twins: {
      automation: 0.08333333333333333,
      "data mining": 0.08333333333333333,
      warehousing: 0.08333333333333333,
      "power bi": 0.08333333333333333,
      "microsoft access": 0.08333333333333333
    }
  },
  "microsoft access": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "microsoft access" }
      ],
      links: [
        { source: "microsoft access", target: "mysql", weight: 1.0 },
        { source: "microsoft access", target: "linux", weight: 1.0 },
        { source: "microsoft access", target: "sql", weight: 1.0 },
        { source: "microsoft access", target: "python", weight: 1.0 },
        { source: "microsoft access", target: "data warehousing", weight: 1.0 },
        {
          source: "microsoft access",
          target: "business intelligence",
          weight: 1.0
        },
        { source: "microsoft access", target: "r", weight: 1.0 },
        {
          source: "microsoft access",
          target: "robotic process automation",
          weight: 1.0
        },
        { source: "microsoft access", target: "power bi", weight: 1.0 },
        { source: "microsoft access", target: "warehousing", weight: 1.0 },
        { source: "microsoft access", target: "data mining", weight: 1.0 },
        { source: "microsoft access", target: "automation", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 211,
    twins: {
      automation: 0.08333333333333333,
      "data mining": 0.08333333333333333,
      warehousing: 0.08333333333333333,
      "power bi": 0.08333333333333333,
      "robotic process automation": 0.08333333333333333
    }
  },
  "power bi": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "automation" },
        { id: "rstudio" },
        { id: "flux" },
        { id: "data science" },
        { id: "power bi" }
      ],
      links: [
        { source: "power bi", target: "mysql", weight: 1.0 },
        { source: "power bi", target: "linux", weight: 1.0 },
        { source: "power bi", target: "sql", weight: 2.0 },
        { source: "power bi", target: "python", weight: 1.0 },
        { source: "power bi", target: "data warehousing", weight: 1.0 },
        { source: "power bi", target: "business intelligence", weight: 2.0 },
        { source: "power bi", target: "r", weight: 1.0 },
        {
          source: "power bi",
          target: "robotic process automation",
          weight: 1.0
        },
        { source: "power bi", target: "microsoft access", weight: 1.0 },
        { source: "power bi", target: "warehousing", weight: 1.0 },
        { source: "power bi", target: "data mining", weight: 1.0 },
        { source: "power bi", target: "automation", weight: 1.0 },
        { source: "power bi", target: "rstudio", weight: 1.0 },
        { source: "power bi", target: "flux", weight: 2.0 },
        { source: "power bi", target: "data science", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 30,
    twins: {
      flux: 0.13486989173056319,
      "business intelligence": 0.13486989173056319,
      sql: 0.13486989173056319,
      "data science": 0.049615860400692505,
      rstudio: 0.049615860400692505
    }
  },
  warehousing: {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "data mining" },
        { id: "automation" },
        { id: "warehousing" }
      ],
      links: [
        { source: "warehousing", target: "mysql", weight: 1.0 },
        { source: "warehousing", target: "linux", weight: 1.0 },
        { source: "warehousing", target: "sql", weight: 1.0 },
        { source: "warehousing", target: "python", weight: 1.0 },
        { source: "warehousing", target: "data warehousing", weight: 1.0 },
        { source: "warehousing", target: "business intelligence", weight: 1.0 },
        { source: "warehousing", target: "r", weight: 1.0 },
        {
          source: "warehousing",
          target: "robotic process automation",
          weight: 1.0
        },
        { source: "warehousing", target: "microsoft access", weight: 1.0 },
        { source: "warehousing", target: "power bi", weight: 1.0 },
        { source: "warehousing", target: "data mining", weight: 1.0 },
        { source: "warehousing", target: "automation", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 210,
    twins: {
      automation: 0.08333333333333333,
      "data mining": 0.08333333333333333,
      "power bi": 0.08333333333333333,
      "microsoft access": 0.08333333333333333,
      "robotic process automation": 0.08333333333333333
    }
  },
  "data mining": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "automation" },
        { id: "data mining" }
      ],
      links: [
        { source: "data mining", target: "mysql", weight: 1.0 },
        { source: "data mining", target: "linux", weight: 1.0 },
        { source: "data mining", target: "sql", weight: 1.0 },
        { source: "data mining", target: "python", weight: 1.0 },
        { source: "data mining", target: "data warehousing", weight: 1.0 },
        { source: "data mining", target: "business intelligence", weight: 1.0 },
        { source: "data mining", target: "r", weight: 1.0 },
        {
          source: "data mining",
          target: "robotic process automation",
          weight: 1.0
        },
        { source: "data mining", target: "microsoft access", weight: 1.0 },
        { source: "data mining", target: "power bi", weight: 1.0 },
        { source: "data mining", target: "warehousing", weight: 1.0 },
        { source: "data mining", target: "automation", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 209,
    twins: {
      automation: 0.08333333333333333,
      warehousing: 0.08333333333333333,
      "power bi": 0.08333333333333333,
      "microsoft access": 0.08333333333333333,
      "robotic process automation": 0.08333333333333333
    }
  },
  automation: {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "data warehousing" },
        { id: "business intelligence" },
        { id: "r" },
        { id: "robotic process automation" },
        { id: "microsoft access" },
        { id: "power bi" },
        { id: "warehousing" },
        { id: "data mining" },
        { id: "web services" },
        { id: "sas" },
        { id: "hosting" },
        { id: "installation" },
        { id: "scripting" },
        { id: "sap hana" },
        { id: "nice" },
        { id: "qlik sense" },
        { id: "perl" },
        { id: "automation" }
      ],
      links: [
        { source: "automation", target: "mysql", weight: 1.0 },
        { source: "automation", target: "linux", weight: 1.0 },
        { source: "automation", target: "sql", weight: 1.0 },
        { source: "automation", target: "python", weight: 2.0 },
        { source: "automation", target: "data warehousing", weight: 1.0 },
        { source: "automation", target: "business intelligence", weight: 1.0 },
        { source: "automation", target: "r", weight: 2.0 },
        {
          source: "automation",
          target: "robotic process automation",
          weight: 1.0
        },
        { source: "automation", target: "microsoft access", weight: 1.0 },
        { source: "automation", target: "power bi", weight: 1.0 },
        { source: "automation", target: "warehousing", weight: 1.0 },
        { source: "automation", target: "data mining", weight: 1.0 },
        { source: "automation", target: "web services", weight: 1.0 },
        { source: "automation", target: "sas", weight: 1.0 },
        { source: "automation", target: "hosting", weight: 1.0 },
        { source: "automation", target: "installation", weight: 1.0 },
        { source: "automation", target: "scripting", weight: 1.0 },
        { source: "automation", target: "sap hana", weight: 1.0 },
        { source: "automation", target: "nice", weight: 1.0 },
        { source: "automation", target: "qlik sense", weight: 1.0 },
        { source: "automation", target: "perl", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 208,
    twins: {
      r: 0.1112383012040029,
      python: 0.1112383012040029,
      perl: 0.04092228408378916,
      "qlik sense": 0.04092228408378916,
      nice: 0.04092228408378916
    }
  },
  eyes: {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "aruba" },
        { id: "firewall" },
        { id: "incident management" },
        { id: "nice" },
        { id: "resource management" },
        { id: "eyes" }
      ],
      links: [
        { source: "eyes", target: "python", weight: 1.0 },
        { source: "eyes", target: "aruba", weight: 1.0 },
        { source: "eyes", target: "firewall", weight: 1.0 },
        { source: "eyes", target: "incident management", weight: 1.0 },
        { source: "eyes", target: "nice", weight: 1.0 },
        { source: "eyes", target: "resource management", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 207,
    twins: {
      "resource management": 0.16666666666666666,
      nice: 0.16666666666666666,
      "incident management": 0.16666666666666666,
      firewall: 0.16666666666666666,
      aruba: 0.16666666666666666
    }
  },
  aruba: {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "eyes" },
        { id: "firewall" },
        { id: "incident management" },
        { id: "nice" },
        { id: "resource management" },
        { id: "aruba" }
      ],
      links: [
        { source: "aruba", target: "python", weight: 1.0 },
        { source: "aruba", target: "eyes", weight: 1.0 },
        { source: "aruba", target: "firewall", weight: 1.0 },
        { source: "aruba", target: "incident management", weight: 1.0 },
        { source: "aruba", target: "nice", weight: 1.0 },
        { source: "aruba", target: "resource management", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 1, "Bac +4": 1 },
      count_job: 2
    },
    priority: 206,
    twins: {
      "resource management": 0.16666666666666666,
      nice: 0.16666666666666666,
      "incident management": 0.16666666666666666,
      firewall: 0.16666666666666666,
      eyes: 0.16666666666666666
    }
  },
  firewall: {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "unix" },
        { id: "python" },
        { id: "eyes" },
        { id: "aruba" },
        { id: "incident management" },
        { id: "nice" },
        { id: "resource management" },
        { id: "load balancing" },
        { id: "flux" },
        { id: "radware" },
        { id: "balancing" },
        { id: "avaya" },
        { id: "iptables" },
        { id: "switch" },
        { id: "autodesk" },
        { id: "tcp/ip" },
        { id: "firewall" }
      ],
      links: [
        { source: "firewall", target: "linux", weight: 1.0 },
        { source: "firewall", target: "unix", weight: 1.0 },
        { source: "firewall", target: "python", weight: 1.0 },
        { source: "firewall", target: "eyes", weight: 1.0 },
        { source: "firewall", target: "aruba", weight: 1.0 },
        { source: "firewall", target: "incident management", weight: 1.0 },
        { source: "firewall", target: "nice", weight: 1.0 },
        { source: "firewall", target: "resource management", weight: 1.0 },
        { source: "firewall", target: "load balancing", weight: 1.0 },
        { source: "firewall", target: "flux", weight: 1.0 },
        { source: "firewall", target: "radware", weight: 1.0 },
        { source: "firewall", target: "balancing", weight: 1.0 },
        { source: "firewall", target: "avaya", weight: 1.0 },
        { source: "firewall", target: "iptables", weight: 1.0 },
        { source: "firewall", target: "switch", weight: 1.0 },
        { source: "firewall", target: "autodesk", weight: 1.0 },
        { source: "firewall", target: "tcp/ip", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 5 },
      contract_type: { CDI: 5 },
      study_lvl: { "Bac +5 et plus": 3, "Bac +4": 2 },
      count_job: 5
    },
    priority: 12,
    twins: {
      "tcp/ip": 0.058823529411764705,
      autodesk: 0.058823529411764705,
      switch: 0.058823529411764705,
      iptables: 0.058823529411764705,
      avaya: 0.058823529411764705
    }
  },
  "incident management": {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "eyes" },
        { id: "aruba" },
        { id: "firewall" },
        { id: "nice" },
        { id: "resource management" },
        { id: "incident management" }
      ],
      links: [
        { source: "incident management", target: "python", weight: 1.0 },
        { source: "incident management", target: "eyes", weight: 1.0 },
        { source: "incident management", target: "aruba", weight: 1.0 },
        { source: "incident management", target: "firewall", weight: 1.0 },
        { source: "incident management", target: "nice", weight: 1.0 },
        {
          source: "incident management",
          target: "resource management",
          weight: 1.0
        }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 205,
    twins: {
      "resource management": 0.16666666666666666,
      nice: 0.16666666666666666,
      firewall: 0.16666666666666666,
      aruba: 0.16666666666666666,
      eyes: 0.16666666666666666
    }
  },
  nice: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "angular" },
        { id: "c" },
        { id: "json" },
        { id: "r" },
        { id: "automation" },
        { id: "eyes" },
        { id: "aruba" },
        { id: "firewall" },
        { id: "incident management" },
        { id: "resource management" },
        { id: "web services" },
        { id: "sas" },
        { id: "hosting" },
        { id: "installation" },
        { id: "scripting" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "perl" },
        { id: "project management" },
        { id: "jira" },
        { id: "selenium" },
        { id: "agile methodology" },
        { id: "junit" },
        { id: "spring mvc" },
        { id: "spring security" },
        { id: "mockito" },
        { id: "spring boot" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "html5" },
        { id: "linux kernel" },
        { id: "ethernet" },
        { id: "c++" },
        { id: "nice" }
      ],
      links: [
        { source: "nice", target: "android", weight: 1.0 },
        { source: "nice", target: "java", weight: 1.0 },
        { source: "nice", target: "jenkins", weight: 1.0 },
        { source: "nice", target: "git", weight: 1.0 },
        { source: "nice", target: "mysql", weight: 1.0 },
        { source: "nice", target: "linux", weight: 1.0 },
        { source: "nice", target: "sql", weight: 2.0 },
        { source: "nice", target: "python", weight: 2.0 },
        { source: "nice", target: "angular", weight: 1.0 },
        { source: "nice", target: "c", weight: 1.0 },
        { source: "nice", target: "json", weight: 1.0 },
        { source: "nice", target: "r", weight: 1.0 },
        { source: "nice", target: "automation", weight: 1.0 },
        { source: "nice", target: "eyes", weight: 1.0 },
        { source: "nice", target: "aruba", weight: 1.0 },
        { source: "nice", target: "firewall", weight: 1.0 },
        { source: "nice", target: "incident management", weight: 1.0 },
        { source: "nice", target: "resource management", weight: 1.0 },
        { source: "nice", target: "web services", weight: 1.0 },
        { source: "nice", target: "sas", weight: 1.0 },
        { source: "nice", target: "hosting", weight: 1.0 },
        { source: "nice", target: "installation", weight: 1.0 },
        { source: "nice", target: "scripting", weight: 2.0 },
        { source: "nice", target: "sap hana", weight: 1.0 },
        { source: "nice", target: "qlik sense", weight: 1.0 },
        { source: "nice", target: "perl", weight: 1.0 },
        { source: "nice", target: "project management", weight: 1.0 },
        { source: "nice", target: "jira", weight: 1.0 },
        { source: "nice", target: "selenium", weight: 1.0 },
        { source: "nice", target: "agile methodology", weight: 1.0 },
        { source: "nice", target: "junit", weight: 1.0 },
        { source: "nice", target: "spring mvc", weight: 1.0 },
        { source: "nice", target: "spring security", weight: 1.0 },
        { source: "nice", target: "mockito", weight: 1.0 },
        { source: "nice", target: "spring boot", weight: 1.0 },
        { source: "nice", target: "design flow", weight: 1.0 },
        { source: "nice", target: "surfaceflinger", weight: 1.0 },
        { source: "nice", target: "sqlite", weight: 1.0 },
        { source: "nice", target: "android studio", weight: 1.0 },
        { source: "nice", target: "android sdk", weight: 1.0 },
        { source: "nice", target: "html5", weight: 1.0 },
        { source: "nice", target: "linux kernel", weight: 1.0 },
        { source: "nice", target: "ethernet", weight: 1.0 },
        { source: "nice", target: "c++", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 5, "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 5, Freelance: 2 },
      study_lvl: { "Bac +5 et plus": 7 },
      count_job: 7
    },
    priority: 36,
    twins: {
      scripting: 0.055300383952334775,
      python: 0.055300383952334775,
      sql: 0.055300383952334775,
      "c++": 0.02034387434495111,
      ethernet: 0.02034387434495111
    }
  },
  "resource management": {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "eyes" },
        { id: "aruba" },
        { id: "firewall" },
        { id: "incident management" },
        { id: "nice" },
        { id: "resource management" }
      ],
      links: [
        { source: "resource management", target: "python", weight: 1.0 },
        { source: "resource management", target: "eyes", weight: 1.0 },
        { source: "resource management", target: "aruba", weight: 1.0 },
        { source: "resource management", target: "firewall", weight: 1.0 },
        {
          source: "resource management",
          target: "incident management",
          weight: 1.0
        },
        { source: "resource management", target: "nice", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 204,
    twins: {
      nice: 0.16666666666666666,
      "incident management": 0.16666666666666666,
      firewall: 0.16666666666666666,
      aruba: 0.16666666666666666,
      eyes: 0.16666666666666666
    }
  },
  rstudio: {
    neiGraph: {
      nodes: [
        { id: "sql" },
        { id: "power bi" },
        { id: "flux" },
        { id: "rstudio" }
      ],
      links: [
        { source: "rstudio", target: "sql", weight: 1.0 },
        { source: "rstudio", target: "power bi", weight: 1.0 },
        { source: "rstudio", target: "flux", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 203,
    twins: {
      flux: 0.3333333333333333,
      "power bi": 0.3333333333333333,
      sql: 0.3333333333333333
    }
  },
  flux: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "business intelligence" },
        { id: "power bi" },
        { id: "firewall" },
        { id: "rstudio" },
        { id: "openshift" },
        { id: "devsecops" },
        { id: "microservices" },
        { id: "data science" },
        { id: "load balancing" },
        { id: "radware" },
        { id: "balancing" },
        { id: "mulesoft" },
        { id: "talend" },
        { id: "eclipse" },
        { id: "source" },
        { id: "middleware" },
        { id: "c++" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "gitlab" },
        { id: "vue.js" },
        { id: "flux" }
      ],
      links: [
        { source: "flux", target: "scrum", weight: 1.0 },
        { source: "flux", target: "java", weight: 3.0 },
        { source: "flux", target: "docker", weight: 2.0 },
        { source: "flux", target: "kubernetes", weight: 2.0 },
        { source: "flux", target: "jenkins", weight: 1.0 },
        { source: "flux", target: "git", weight: 2.0 },
        { source: "flux", target: "linux", weight: 1.0 },
        { source: "flux", target: "sql", weight: 4.0 },
        { source: "flux", target: "unix", weight: 1.0 },
        { source: "flux", target: "python", weight: 1.0 },
        { source: "flux", target: "angular", weight: 1.0 },
        { source: "flux", target: "c", weight: 2.0 },
        { source: "flux", target: "javascript", weight: 2.0 },
        { source: "flux", target: "business intelligence", weight: 1.0 },
        { source: "flux", target: "power bi", weight: 2.0 },
        { source: "flux", target: "firewall", weight: 1.0 },
        { source: "flux", target: "rstudio", weight: 1.0 },
        { source: "flux", target: "openshift", weight: 1.0 },
        { source: "flux", target: "devsecops", weight: 1.0 },
        { source: "flux", target: "microservices", weight: 1.0 },
        { source: "flux", target: "data science", weight: 1.0 },
        { source: "flux", target: "load balancing", weight: 1.0 },
        { source: "flux", target: "radware", weight: 1.0 },
        { source: "flux", target: "balancing", weight: 1.0 },
        { source: "flux", target: "mulesoft", weight: 1.0 },
        { source: "flux", target: "talend", weight: 1.0 },
        { source: "flux", target: "eclipse", weight: 1.0 },
        { source: "flux", target: "source", weight: 2.0 },
        { source: "flux", target: "middleware", weight: 1.0 },
        { source: "flux", target: "c++", weight: 1.0 },
        { source: "flux", target: "user story", weight: 1.0 },
        { source: "flux", target: "chef", weight: 1.0 },
        { source: "flux", target: "postgresql", weight: 2.0 },
        { source: "flux", target: "gitlab", weight: 2.0 },
        { source: "flux", target: "vue.js", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 4,
        "De 10 ?? 20 ans": 1,
        "De 3 ?? 5 ans": 2,
        "De 1 ?? 3 ans": 1
      },
      contract_type: { Freelance: 1, CDI: 7 },
      study_lvl: { "Bac +5 et plus": 5, "Bac +4": 2, "Bac +3": 1 },
      count_job: 8
    },
    priority: 202,
    twins: {
      sql: 0.26449522217581534,
      java: 0.09730235452655543,
      gitlab: 0.035795535807894775,
      postgresql: 0.035795535807894775,
      source: 0.035795535807894775
    }
  },
  hibernate: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "angular" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "json" },
        { id: "nosql" },
        { id: "devops" },
        { id: "sonar" },
        { id: "jquery" },
        { id: "java 8" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "postgresql" },
        { id: "ajax" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "spring boot" },
        { id: "front end" },
        { id: "mongodb" },
        { id: "redis" },
        { id: "hibernate" }
      ],
      links: [
        { source: "hibernate", target: "scrum", weight: 3.0 },
        { source: "hibernate", target: "android", weight: 1.0 },
        { source: "hibernate", target: "java", weight: 13.0 },
        { source: "hibernate", target: "docker", weight: 6.0 },
        { source: "hibernate", target: "kubernetes", weight: 3.0 },
        { source: "hibernate", target: "ansible", weight: 2.0 },
        { source: "hibernate", target: "jenkins", weight: 6.0 },
        { source: "hibernate", target: "git", weight: 6.0 },
        { source: "hibernate", target: "mysql", weight: 4.0 },
        { source: "hibernate", target: "linux", weight: 5.0 },
        { source: "hibernate", target: "sql", weight: 9.0 },
        { source: "hibernate", target: "unix", weight: 2.0 },
        { source: "hibernate", target: "angular", weight: 10.0 },
        { source: "hibernate", target: "typescript", weight: 1.0 },
        { source: "hibernate", target: "javascript", weight: 4.0 },
        { source: "hibernate", target: "json", weight: 1.0 },
        { source: "hibernate", target: "nosql", weight: 1.0 },
        { source: "hibernate", target: "devops", weight: 2.0 },
        { source: "hibernate", target: "sonar", weight: 5.0 },
        { source: "hibernate", target: "jquery", weight: 2.0 },
        { source: "hibernate", target: "java 8", weight: 2.0 },
        { source: "hibernate", target: "html5", weight: 2.0 },
        { source: "hibernate", target: "bootstrap", weight: 3.0 },
        { source: "hibernate", target: "kotlin", weight: 1.0 },
        { source: "hibernate", target: "postgresql", weight: 1.0 },
        { source: "hibernate", target: "ajax", weight: 1.0 },
        { source: "hibernate", target: "jhipster", weight: 1.0 },
        { source: "hibernate", target: "eclipse", weight: 1.0 },
        { source: "hibernate", target: "sonarqube", weight: 1.0 },
        { source: "hibernate", target: "back end", weight: 2.0 },
        { source: "hibernate", target: "xamarin", weight: 1.0 },
        { source: "hibernate", target: "spring boot", weight: 1.0 },
        { source: "hibernate", target: "front end", weight: 2.0 },
        { source: "hibernate", target: "mongodb", weight: 1.0 },
        { source: "hibernate", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 5 ?? 10 ans": 4,
        "De 1 ?? 3 ans": 3,
        "De 3 ?? 5 ans": 6,
        D??butant: 1
      },
      contract_type: { CDI: 13, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 10, "Bac +3": 3, "Bac +4": 1 },
      count_job: 14
    },
    priority: 201,
    twins: {
      java: 0.932738431182417,
      angular: 0.04643831204261316,
      sql: 0.017083700283181586,
      git: 0.0008505473539748582,
      jenkins: 0.0008505473539748582
    }
  },
  "pl/sql": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "angular" },
        { id: "scripting" },
        { id: "pl/sql" }
      ],
      links: [
        { source: "pl/sql", target: "java", weight: 3.0 },
        { source: "pl/sql", target: "linux", weight: 1.0 },
        { source: "pl/sql", target: "sql", weight: 6.0 },
        { source: "pl/sql", target: "unix", weight: 2.0 },
        { source: "pl/sql", target: "angular", weight: 1.0 },
        { source: "pl/sql", target: "scripting", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 3, D??butant: 1, "De 3 ?? 5 ans": 2 },
      contract_type: { Freelance: 2, CDI: 4 },
      study_lvl: { "Bac +5 et plus": 5, "Bac +4": 1 },
      count_job: 6
    },
    priority: 200,
    twins: {
      sql: 0.9188503120755136,
      java: 0.04574686330713672,
      unix: 0.016829330508775813,
      scripting: 0.006191164702857951,
      angular: 0.006191164702857951
    }
  },
  "active directory": {
    neiGraph: {
      nodes: [
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "technical support" },
        { id: "servicenow" },
        { id: "veeam" },
        { id: "centos" },
        { id: "scripting" },
        { id: "active directory" }
      ],
      links: [
        { source: "active directory", target: "mysql", weight: 1.0 },
        { source: "active directory", target: "linux", weight: 2.0 },
        { source: "active directory", target: "sql", weight: 1.0 },
        {
          source: "active directory",
          target: "technical support",
          weight: 1.0
        },
        { source: "active directory", target: "servicenow", weight: 1.0 },
        { source: "active directory", target: "veeam", weight: 1.0 },
        { source: "active directory", target: "centos", weight: 1.0 },
        { source: "active directory", target: "scripting", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1, CDI: 2 },
      study_lvl: { "Bac +3": 2, "Bac +5 et plus": 1 },
      count_job: 3
    },
    priority: 38,
    twins: {
      linux: 0.27970806737656245,
      scripting: 0.10289884751763392,
      centos: 0.10289884751763392,
      veeam: 0.10289884751763392,
      servicenow: 0.10289884751763392
    }
  },
  "technical support": {
    neiGraph: {
      nodes: [
        { id: "active directory" },
        { id: "servicenow" },
        { id: "technical support" }
      ],
      links: [
        {
          source: "technical support",
          target: "active directory",
          weight: 1.0
        },
        { source: "technical support", target: "servicenow", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 199,
    twins: { servicenow: 0.5, "active directory": 0.5 }
  },
  servicenow: {
    neiGraph: {
      nodes: [
        { id: "javascript" },
        { id: "active directory" },
        { id: "technical support" },
        { id: "servicenow" }
      ],
      links: [
        { source: "servicenow", target: "javascript", weight: 1.0 },
        { source: "servicenow", target: "active directory", weight: 1.0 },
        { source: "servicenow", target: "technical support", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { Freelance: 1, CDI: 1 },
      study_lvl: { "Bac +3": 1, "Bac +5 et plus": 1 },
      count_job: 2
    },
    priority: 198,
    twins: {
      "technical support": 0.3333333333333333,
      "active directory": 0.3333333333333333,
      javascript: 0.3333333333333333
    }
  },
  sonar: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "angular" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "json" },
        { id: "nosql" },
        { id: "devops" },
        { id: "hibernate" },
        { id: "appium" },
        { id: "jquery" },
        { id: "junit" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "jira" },
        { id: "postman" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "front end" },
        { id: "bootstrap" },
        { id: "sonar" }
      ],
      links: [
        { source: "sonar", target: "transformation", weight: 1.0 },
        { source: "sonar", target: "scrum", weight: 1.0 },
        { source: "sonar", target: "android", weight: 4.0 },
        { source: "sonar", target: "java", weight: 6.0 },
        { source: "sonar", target: "docker", weight: 1.0 },
        { source: "sonar", target: "ansible", weight: 1.0 },
        { source: "sonar", target: "jenkins", weight: 9.0 },
        { source: "sonar", target: "git", weight: 5.0 },
        { source: "sonar", target: "linux", weight: 1.0 },
        { source: "sonar", target: "sql", weight: 4.0 },
        { source: "sonar", target: "unix", weight: 2.0 },
        { source: "sonar", target: "angular", weight: 4.0 },
        { source: "sonar", target: "typescript", weight: 2.0 },
        { source: "sonar", target: "javascript", weight: 2.0 },
        { source: "sonar", target: "json", weight: 1.0 },
        { source: "sonar", target: "nosql", weight: 1.0 },
        { source: "sonar", target: "devops", weight: 1.0 },
        { source: "sonar", target: "hibernate", weight: 5.0 },
        { source: "sonar", target: "appium", weight: 3.0 },
        { source: "sonar", target: "jquery", weight: 1.0 },
        { source: "sonar", target: "junit", weight: 1.0 },
        { source: "sonar", target: "spring security", weight: 1.0 },
        { source: "sonar", target: "bitbucket", weight: 2.0 },
        { source: "sonar", target: "keycloak", weight: 1.0 },
        { source: "sonar", target: "spring boot", weight: 2.0 },
        { source: "sonar", target: "jest", weight: 2.0 },
        { source: "sonar", target: "jira", weight: 1.0 },
        { source: "sonar", target: "postman", weight: 1.0 },
        { source: "sonar", target: "back end", weight: 1.0 },
        { source: "sonar", target: "xamarin", weight: 1.0 },
        { source: "sonar", target: "front end", weight: 1.0 },
        { source: "sonar", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 5, "De 1 ?? 3 ans": 2, "De 5 ?? 10 ans": 3 },
      contract_type: { CDI: 9, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 8, "Bac +3": 1, "Bac +4": 1 },
      count_job: 10
    },
    priority: 34,
    twins: {
      jenkins: 0.8923627114378028,
      java: 0.04442812332328633,
      hibernate: 0.016344193180466496,
      git: 0.016344193180466496,
      angular: 0.0060126926536281135
    }
  },
  appium: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "jenkins" },
        { id: "git" },
        { id: "sonar" },
        { id: "tracking" },
        { id: "jira" },
        { id: "testcomplete" },
        { id: "soapui" },
        { id: "appium" }
      ],
      links: [
        { source: "appium", target: "android", weight: 3.0 },
        { source: "appium", target: "jenkins", weight: 3.0 },
        { source: "appium", target: "git", weight: 3.0 },
        { source: "appium", target: "sonar", weight: 3.0 },
        { source: "appium", target: "tracking", weight: 2.0 },
        { source: "appium", target: "jira", weight: 2.0 },
        { source: "appium", target: "testcomplete", weight: 1.0 },
        { source: "appium", target: "soapui", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 4, "Moins de 1 an": 1 },
      contract_type: { CDI: 5 },
      study_lvl: { "Bac +5 et plus": 5 },
      count_job: 5
    },
    priority: 28,
    twins: {
      sonar: 0.1997431523251514,
      git: 0.1997431523251514,
      jenkins: 0.1997431523251514,
      android: 0.1997431523251514,
      jira: 0.07348139925519898
    }
  },
  tracking: {
    neiGraph: {
      nodes: [
        { id: "appium" },
        { id: "jira" },
        { id: "testcomplete" },
        { id: "soapui" },
        { id: "tracking" }
      ],
      links: [
        { source: "tracking", target: "appium", weight: 2.0 },
        { source: "tracking", target: "jira", weight: 2.0 },
        { source: "tracking", target: "testcomplete", weight: 1.0 },
        { source: "tracking", target: "soapui", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "Moins de 1 an": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 197,
    twins: {
      jira: 0.36552928931500245,
      appium: 0.36552928931500245,
      soapui: 0.13447071068499755,
      testcomplete: 0.13447071068499755
    }
  },
  jira: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "devops" },
        { id: "nice" },
        { id: "sonar" },
        { id: "appium" },
        { id: "tracking" },
        { id: "testcomplete" },
        { id: "soapui" },
        { id: "splunk" },
        { id: "talend" },
        { id: "gitlab" },
        { id: "robot framework" },
        { id: "testlink" },
        { id: "selenium" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "jonas" },
        { id: "bitbucket" },
        { id: "postman" },
        { id: "jest" },
        { id: "jira" }
      ],
      links: [
        { source: "jira", target: "transformation", weight: 1.0 },
        { source: "jira", target: "scrum", weight: 4.0 },
        { source: "jira", target: "java", weight: 2.0 },
        { source: "jira", target: "docker", weight: 1.0 },
        { source: "jira", target: "kubernetes", weight: 2.0 },
        { source: "jira", target: "ansible", weight: 1.0 },
        { source: "jira", target: "jenkins", weight: 5.0 },
        { source: "jira", target: "nagios", weight: 1.0 },
        { source: "jira", target: "git", weight: 3.0 },
        { source: "jira", target: "mysql", weight: 1.0 },
        { source: "jira", target: "linux", weight: 3.0 },
        { source: "jira", target: "sql", weight: 5.0 },
        { source: "jira", target: "unix", weight: 3.0 },
        { source: "jira", target: "python", weight: 1.0 },
        { source: "jira", target: "angular", weight: 2.0 },
        { source: "jira", target: "typescript", weight: 1.0 },
        { source: "jira", target: "javascript", weight: 2.0 },
        { source: "jira", target: "devops", weight: 1.0 },
        { source: "jira", target: "nice", weight: 1.0 },
        { source: "jira", target: "sonar", weight: 1.0 },
        { source: "jira", target: "appium", weight: 2.0 },
        { source: "jira", target: "tracking", weight: 2.0 },
        { source: "jira", target: "testcomplete", weight: 1.0 },
        { source: "jira", target: "soapui", weight: 1.0 },
        { source: "jira", target: "splunk", weight: 2.0 },
        { source: "jira", target: "talend", weight: 2.0 },
        { source: "jira", target: "gitlab", weight: 3.0 },
        { source: "jira", target: "robot framework", weight: 1.0 },
        { source: "jira", target: "testlink", weight: 1.0 },
        { source: "jira", target: "selenium", weight: 2.0 },
        { source: "jira", target: "visual basic", weight: 1.0 },
        { source: "jira", target: "mariadb", weight: 1.0 },
        { source: "jira", target: "solaris", weight: 1.0 },
        { source: "jira", target: "jonas", weight: 1.0 },
        { source: "jira", target: "bitbucket", weight: 1.0 },
        { source: "jira", target: "postman", weight: 1.0 },
        { source: "jira", target: "jest", weight: 1.0 }
      ]
    },
    stats: {
      exp: {
        "De 3 ?? 5 ans": 9,
        "De 1 ?? 3 ans": 2,
        "De 5 ?? 10 ans": 3,
        "De 10 ?? 20 ans": 1,
        "Moins de 1 an": 1
      },
      contract_type: { CDI: 14, Freelance: 2 },
      study_lvl: { "Bac +5 et plus": 14, "Bac +4": 2 },
      count_job: 16
    },
    priority: 37,
    twins: {
      sql: 0.2672415848355851,
      jenkins: 0.2672415848355851,
      scrum: 0.09831268488708564,
      gitlab: 0.03616721557632517,
      unix: 0.03616721557632517
    }
  },
  testcomplete: {
    neiGraph: {
      nodes: [
        { id: "appium" },
        { id: "tracking" },
        { id: "jira" },
        { id: "soapui" },
        { id: "testcomplete" }
      ],
      links: [
        { source: "testcomplete", target: "appium", weight: 1.0 },
        { source: "testcomplete", target: "tracking", weight: 1.0 },
        { source: "testcomplete", target: "jira", weight: 1.0 },
        { source: "testcomplete", target: "soapui", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 196,
    twins: { soapui: 0.25, jira: 0.25, tracking: 0.25, appium: 0.25 }
  },
  soapui: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "flask" },
        { id: "javascript" },
        { id: "appium" },
        { id: "tracking" },
        { id: "jira" },
        { id: "testcomplete" },
        { id: "vertica" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "soapui" }
      ],
      links: [
        { source: "soapui", target: "docker", weight: 1.0 },
        { source: "soapui", target: "nginx", weight: 1.0 },
        { source: "soapui", target: "git", weight: 1.0 },
        { source: "soapui", target: "mysql", weight: 1.0 },
        { source: "soapui", target: "linux", weight: 1.0 },
        { source: "soapui", target: "sql", weight: 1.0 },
        { source: "soapui", target: "flask", weight: 1.0 },
        { source: "soapui", target: "javascript", weight: 1.0 },
        { source: "soapui", target: "appium", weight: 1.0 },
        { source: "soapui", target: "tracking", weight: 1.0 },
        { source: "soapui", target: "jira", weight: 1.0 },
        { source: "soapui", target: "testcomplete", weight: 1.0 },
        { source: "soapui", target: "vertica", weight: 1.0 },
        { source: "soapui", target: "mongodb", weight: 1.0 },
        { source: "soapui", target: "postgresql", weight: 1.0 },
        { source: "soapui", target: "postman", weight: 1.0 },
        { source: "soapui", target: "html5", weight: 1.0 },
        { source: "soapui", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 1, "Bac +2": 1 },
      count_job: 2
    },
    priority: 195,
    twins: {
      bootstrap: 0.055555555555555546,
      html5: 0.055555555555555546,
      postman: 0.055555555555555546,
      postgresql: 0.055555555555555546,
      mongodb: 0.055555555555555546
    }
  },
  "responsive web design": {
    neiGraph: {
      nodes: [
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "php" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" },
        { id: "responsive web design" }
      ],
      links: [
        { source: "responsive web design", target: "sql", weight: 2.0 },
        { source: "responsive web design", target: "angular", weight: 2.0 },
        { source: "responsive web design", target: "c", weight: 2.0 },
        { source: "responsive web design", target: "javascript", weight: 2.0 },
        { source: "responsive web design", target: "php", weight: 2.0 },
        {
          source: "responsive web design",
          target: "web services",
          weight: 2.0
        },
        { source: "responsive web design", target: "jquery", weight: 2.0 },
        { source: "responsive web design", target: "c++", weight: 2.0 },
        { source: "responsive web design", target: "html5", weight: 2.0 },
        { source: "responsive web design", target: "ajax", weight: 2.0 },
        { source: "responsive web design", target: "web design", weight: 2.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 194,
    twins: {
      "web design": 0.0909090909090909,
      ajax: 0.0909090909090909,
      html5: 0.0909090909090909,
      "c++": 0.0909090909090909,
      jquery: 0.0909090909090909
    }
  },
  "web services": {
    neiGraph: {
      nodes: [
        { id: "sql" },
        { id: "python" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "php" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "responsive web design" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" },
        { id: "sas" },
        { id: "hosting" },
        { id: "installation" },
        { id: "scripting" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "perl" },
        { id: "web services" }
      ],
      links: [
        { source: "web services", target: "sql", weight: 2.0 },
        { source: "web services", target: "python", weight: 1.0 },
        { source: "web services", target: "angular", weight: 2.0 },
        { source: "web services", target: "c", weight: 2.0 },
        { source: "web services", target: "javascript", weight: 2.0 },
        { source: "web services", target: "php", weight: 2.0 },
        { source: "web services", target: "r", weight: 1.0 },
        { source: "web services", target: "automation", weight: 1.0 },
        { source: "web services", target: "nice", weight: 1.0 },
        {
          source: "web services",
          target: "responsive web design",
          weight: 2.0
        },
        { source: "web services", target: "jquery", weight: 2.0 },
        { source: "web services", target: "c++", weight: 2.0 },
        { source: "web services", target: "html5", weight: 2.0 },
        { source: "web services", target: "ajax", weight: 2.0 },
        { source: "web services", target: "web design", weight: 2.0 },
        { source: "web services", target: "sas", weight: 1.0 },
        { source: "web services", target: "hosting", weight: 1.0 },
        { source: "web services", target: "installation", weight: 1.0 },
        { source: "web services", target: "scripting", weight: 1.0 },
        { source: "web services", target: "sap hana", weight: 1.0 },
        { source: "web services", target: "qlik sense", weight: 1.0 },
        { source: "web services", target: "perl", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 193,
    twins: {
      "web design": 0.06645987078454592,
      ajax: 0.06645987078454592,
      html5: 0.06645987078454592,
      "c++": 0.06645987078454592,
      jquery: 0.06645987078454592
    }
  },
  jquery: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "php" },
        { id: "hibernate" },
        { id: "sonar" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" },
        { id: "node.js" },
        { id: "wordpress" },
        { id: "react native" },
        { id: "back end" },
        { id: "webforms" },
        { id: "front end" },
        { id: "perl" },
        { id: "gitlab" },
        { id: "jquery" }
      ],
      links: [
        { source: "jquery", target: "scrum", weight: 1.0 },
        { source: "jquery", target: "java", weight: 1.0 },
        { source: "jquery", target: "jenkins", weight: 1.0 },
        { source: "jquery", target: "git", weight: 2.0 },
        { source: "jquery", target: "mysql", weight: 1.0 },
        { source: "jquery", target: "linux", weight: 1.0 },
        { source: "jquery", target: "sql", weight: 8.0 },
        { source: "jquery", target: "angular", weight: 3.0 },
        { source: "jquery", target: "c", weight: 2.0 },
        { source: "jquery", target: "javascript", weight: 8.0 },
        { source: "jquery", target: "asp.net", weight: 4.0 },
        { source: "jquery", target: "php", weight: 3.0 },
        { source: "jquery", target: "hibernate", weight: 2.0 },
        { source: "jquery", target: "sonar", weight: 1.0 },
        { source: "jquery", target: "responsive web design", weight: 2.0 },
        { source: "jquery", target: "web services", weight: 2.0 },
        { source: "jquery", target: "c++", weight: 2.0 },
        { source: "jquery", target: "html5", weight: 6.0 },
        { source: "jquery", target: "ajax", weight: 3.0 },
        { source: "jquery", target: "web design", weight: 2.0 },
        { source: "jquery", target: "node.js", weight: 1.0 },
        { source: "jquery", target: "wordpress", weight: 1.0 },
        { source: "jquery", target: "react native", weight: 1.0 },
        { source: "jquery", target: "back end", weight: 4.0 },
        { source: "jquery", target: "webforms", weight: 4.0 },
        { source: "jquery", target: "front end", weight: 4.0 },
        { source: "jquery", target: "perl", weight: 1.0 },
        { source: "jquery", target: "gitlab", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 4, "De 3 ?? 5 ans": 6 },
      contract_type: { CDI: 10 },
      study_lvl: { "Bac +5 et plus": 7, "Bac +2": 1, "Bac +3": 1, "Bac +4": 1 },
      count_job: 10
    },
    priority: 31,
    twins: {
      javascript: 0.4432243666169,
      sql: 0.4432243666169,
      html5: 0.05998389519346642,
      "front end": 0.008117937445643068,
      webforms: 0.008117937445643068
    }
  },
  "c++": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "c" },
        { id: "c#" },
        { id: "javascript" },
        { id: "php" },
        { id: "nice" },
        { id: "flux" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" },
        { id: "source" },
        { id: "user story" },
        { id: "chef" },
        { id: "postgresql" },
        { id: "gitlab" },
        { id: "linux kernel" },
        { id: "ethernet" },
        { id: "c++" }
      ],
      links: [
        { source: "c++", target: "scrum", weight: 1.0 },
        { source: "c++", target: "android", weight: 2.0 },
        { source: "c++", target: "java", weight: 1.0 },
        { source: "c++", target: "docker", weight: 1.0 },
        { source: "c++", target: "kubernetes", weight: 1.0 },
        { source: "c++", target: "jenkins", weight: 1.0 },
        { source: "c++", target: "git", weight: 1.0 },
        { source: "c++", target: "mysql", weight: 2.0 },
        { source: "c++", target: "linux", weight: 1.0 },
        { source: "c++", target: "sql", weight: 5.0 },
        { source: "c++", target: "unix", weight: 1.0 },
        { source: "c++", target: "python", weight: 1.0 },
        { source: "c++", target: "angular", weight: 3.0 },
        { source: "c++", target: "c", weight: 6.0 },
        { source: "c++", target: "c#", weight: 2.0 },
        { source: "c++", target: "javascript", weight: 3.0 },
        { source: "c++", target: "php", weight: 3.0 },
        { source: "c++", target: "nice", weight: 1.0 },
        { source: "c++", target: "flux", weight: 1.0 },
        { source: "c++", target: "responsive web design", weight: 2.0 },
        { source: "c++", target: "web services", weight: 2.0 },
        { source: "c++", target: "jquery", weight: 2.0 },
        { source: "c++", target: "html5", weight: 2.0 },
        { source: "c++", target: "ajax", weight: 2.0 },
        { source: "c++", target: "web design", weight: 2.0 },
        { source: "c++", target: "source", weight: 1.0 },
        { source: "c++", target: "user story", weight: 1.0 },
        { source: "c++", target: "chef", weight: 1.0 },
        { source: "c++", target: "postgresql", weight: 1.0 },
        { source: "c++", target: "gitlab", weight: 1.0 },
        { source: "c++", target: "linux kernel", weight: 1.0 },
        { source: "c++", target: "ethernet", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2, "De 3 ?? 5 ans": 3, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 6 },
      study_lvl: { "Bac +5 et plus": 5, "Bac +3": 1 },
      count_job: 6
    },
    priority: 192,
    twins: {
      c: 0.5545190847549097,
      sql: 0.20399617101853587,
      php: 0.027607879583978034,
      javascript: 0.027607879583978034,
      angular: 0.027607879583978034
    }
  },
  html5: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "flask" },
        { id: "c" },
        { id: "c#" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "php" },
        { id: "devops" },
        { id: "nice" },
        { id: "hibernate" },
        { id: "soapui" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "ajax" },
        { id: "web design" },
        { id: "back end" },
        { id: "webforms" },
        { id: "front end" },
        { id: "azure blob storage" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "microservices" },
        { id: "java 8" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "vertica" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "scripting" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "html5" }
      ],
      links: [
        { source: "html5", target: "scrum", weight: 2.0 },
        { source: "html5", target: "android", weight: 1.0 },
        { source: "html5", target: "java", weight: 2.0 },
        { source: "html5", target: "docker", weight: 3.0 },
        { source: "html5", target: "ansible", weight: 1.0 },
        { source: "html5", target: "jenkins", weight: 1.0 },
        { source: "html5", target: "nginx", weight: 1.0 },
        { source: "html5", target: "git", weight: 3.0 },
        { source: "html5", target: "mysql", weight: 2.0 },
        { source: "html5", target: "linux", weight: 1.0 },
        { source: "html5", target: "sql", weight: 8.0 },
        { source: "html5", target: "angular", weight: 5.0 },
        { source: "html5", target: "flask", weight: 1.0 },
        { source: "html5", target: "c", weight: 4.0 },
        { source: "html5", target: "c#", weight: 2.0 },
        { source: "html5", target: "javascript", weight: 9.0 },
        { source: "html5", target: "asp.net", weight: 5.0 },
        { source: "html5", target: "php", weight: 2.0 },
        { source: "html5", target: "devops", weight: 1.0 },
        { source: "html5", target: "nice", weight: 1.0 },
        { source: "html5", target: "hibernate", weight: 2.0 },
        { source: "html5", target: "soapui", weight: 1.0 },
        { source: "html5", target: "responsive web design", weight: 2.0 },
        { source: "html5", target: "web services", weight: 2.0 },
        { source: "html5", target: "jquery", weight: 6.0 },
        { source: "html5", target: "c++", weight: 2.0 },
        { source: "html5", target: "ajax", weight: 2.0 },
        { source: "html5", target: "web design", weight: 2.0 },
        { source: "html5", target: "back end", weight: 4.0 },
        { source: "html5", target: "webforms", weight: 4.0 },
        { source: "html5", target: "front end", weight: 4.0 },
        { source: "html5", target: "azure blob storage", weight: 1.0 },
        { source: "html5", target: "entity framework", weight: 2.0 },
        { source: "html5", target: "sitecore", weight: 1.0 },
        { source: "html5", target: "azure data factory", weight: 1.0 },
        { source: "html5", target: "microservices", weight: 1.0 },
        { source: "html5", target: "java 8", weight: 1.0 },
        { source: "html5", target: "bootstrap", weight: 3.0 },
        { source: "html5", target: "kotlin", weight: 1.0 },
        { source: "html5", target: "vertica", weight: 1.0 },
        { source: "html5", target: "mongodb", weight: 1.0 },
        { source: "html5", target: "postgresql", weight: 1.0 },
        { source: "html5", target: "postman", weight: 1.0 },
        { source: "html5", target: "design flow", weight: 1.0 },
        { source: "html5", target: "surfaceflinger", weight: 1.0 },
        { source: "html5", target: "sqlite", weight: 1.0 },
        { source: "html5", target: "android studio", weight: 1.0 },
        { source: "html5", target: "android sdk", weight: 1.0 },
        { source: "html5", target: "scripting", weight: 1.0 },
        { source: "html5", target: "jhipster", weight: 1.0 },
        { source: "html5", target: "eclipse", weight: 1.0 },
        { source: "html5", target: "sonarqube", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 4, "De 3 ?? 5 ans": 7, "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 11, Freelance: 2 },
      study_lvl: {
        "Bac +5 et plus": 10,
        "Bac +2": 1,
        "Bac +4": 1,
        "Bac +3": 1
      },
      count_job: 13
    },
    priority: 191,
    twins: {
      javascript: 0.6626811392706554,
      sql: 0.24378676718974343,
      jquery: 0.032992951186962084,
      "asp.net": 0.012137428445256287,
      angular: 0.012137428445256287
    }
  },
  ajax: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "php" },
        { id: "hibernate" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "web design" },
        { id: "ajax" }
      ],
      links: [
        { source: "ajax", target: "scrum", weight: 1.0 },
        { source: "ajax", target: "git", weight: 1.0 },
        { source: "ajax", target: "linux", weight: 1.0 },
        { source: "ajax", target: "sql", weight: 3.0 },
        { source: "ajax", target: "angular", weight: 2.0 },
        { source: "ajax", target: "c", weight: 2.0 },
        { source: "ajax", target: "javascript", weight: 3.0 },
        { source: "ajax", target: "php", weight: 2.0 },
        { source: "ajax", target: "hibernate", weight: 1.0 },
        { source: "ajax", target: "responsive web design", weight: 2.0 },
        { source: "ajax", target: "web services", weight: 2.0 },
        { source: "ajax", target: "jquery", weight: 3.0 },
        { source: "ajax", target: "c++", weight: 2.0 },
        { source: "ajax", target: "html5", weight: 2.0 },
        { source: "ajax", target: "web design", weight: 2.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 190,
    twins: {
      jquery: 0.15421682793524322,
      javascript: 0.15421682793524322,
      sql: 0.15421682793524322,
      "web design": 0.05673320048004975,
      html5: 0.05673320048004975
    }
  },
  "web design": {
    neiGraph: {
      nodes: [
        { id: "sql" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "php" },
        { id: "responsive web design" },
        { id: "web services" },
        { id: "jquery" },
        { id: "c++" },
        { id: "html5" },
        { id: "ajax" },
        { id: "web design" }
      ],
      links: [
        { source: "web design", target: "sql", weight: 2.0 },
        { source: "web design", target: "angular", weight: 2.0 },
        { source: "web design", target: "c", weight: 2.0 },
        { source: "web design", target: "javascript", weight: 2.0 },
        { source: "web design", target: "php", weight: 2.0 },
        { source: "web design", target: "responsive web design", weight: 2.0 },
        { source: "web design", target: "web services", weight: 2.0 },
        { source: "web design", target: "jquery", weight: 2.0 },
        { source: "web design", target: "c++", weight: 2.0 },
        { source: "web design", target: "html5", weight: 2.0 },
        { source: "web design", target: "ajax", weight: 2.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 189,
    twins: {
      ajax: 0.0909090909090909,
      html5: 0.0909090909090909,
      "c++": 0.0909090909090909,
      jquery: 0.0909090909090909,
      "web services": 0.0909090909090909
    }
  },
  "node.js": {
    neiGraph: {
      nodes: [
        { id: "jquery" },
        { id: "wordpress" },
        { id: "react native" },
        { id: "node.js" }
      ],
      links: [
        { source: "node.js", target: "jquery", weight: 1.0 },
        { source: "node.js", target: "wordpress", weight: 1.0 },
        { source: "node.js", target: "react native", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +2": 1 },
      count_job: 1
    },
    priority: 188,
    twins: {
      "react native": 0.3333333333333333,
      wordpress: 0.3333333333333333,
      jquery: 0.3333333333333333
    }
  },
  wordpress: {
    neiGraph: {
      nodes: [
        { id: "jquery" },
        { id: "node.js" },
        { id: "react native" },
        { id: "wordpress" }
      ],
      links: [
        { source: "wordpress", target: "jquery", weight: 1.0 },
        { source: "wordpress", target: "node.js", weight: 1.0 },
        { source: "wordpress", target: "react native", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +2": 1 },
      count_job: 1
    },
    priority: 187,
    twins: {
      "react native": 0.3333333333333333,
      "node.js": 0.3333333333333333,
      jquery: 0.3333333333333333
    }
  },
  "react native": {
    neiGraph: {
      nodes: [
        { id: "jquery" },
        { id: "node.js" },
        { id: "wordpress" },
        { id: "react native" }
      ],
      links: [
        { source: "react native", target: "jquery", weight: 1.0 },
        { source: "react native", target: "node.js", weight: 1.0 },
        { source: "react native", target: "wordpress", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +2": 1 },
      count_job: 1
    },
    priority: 186,
    twins: {
      wordpress: 0.3333333333333333,
      "node.js": 0.3333333333333333,
      jquery: 0.3333333333333333
    }
  },
  m: {
    neiGraph: {
      nodes: [{ id: "sql" }, { id: "scripting" }, { id: "m" }],
      links: [
        { source: "m", target: "sql", weight: 1.0 },
        { source: "m", target: "scripting", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 185,
    twins: { scripting: 0.5, sql: 0.5 }
  },
  scripting: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "openapi" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "pl/sql" },
        { id: "active directory" },
        { id: "web services" },
        { id: "html5" },
        { id: "m" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "gitlab" },
        { id: "markdown" },
        { id: "perl" },
        { id: "sas" },
        { id: "hosting" },
        { id: "installation" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "veeam" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "clonezilla" },
        { id: "exim" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "talend" },
        { id: "mapr" },
        { id: "scripting" }
      ],
      links: [
        { source: "scripting", target: "android", weight: 1.0 },
        { source: "scripting", target: "java", weight: 1.0 },
        { source: "scripting", target: "docker", weight: 1.0 },
        { source: "scripting", target: "kubernetes", weight: 1.0 },
        { source: "scripting", target: "nagios", weight: 1.0 },
        { source: "scripting", target: "nginx", weight: 1.0 },
        { source: "scripting", target: "mysql", weight: 1.0 },
        { source: "scripting", target: "linux", weight: 2.0 },
        { source: "scripting", target: "sql", weight: 5.0 },
        { source: "scripting", target: "unix", weight: 5.0 },
        { source: "scripting", target: "python", weight: 2.0 },
        { source: "scripting", target: "openapi", weight: 1.0 },
        { source: "scripting", target: "r", weight: 1.0 },
        { source: "scripting", target: "automation", weight: 1.0 },
        { source: "scripting", target: "nice", weight: 2.0 },
        { source: "scripting", target: "pl/sql", weight: 1.0 },
        { source: "scripting", target: "active directory", weight: 1.0 },
        { source: "scripting", target: "web services", weight: 1.0 },
        { source: "scripting", target: "html5", weight: 1.0 },
        { source: "scripting", target: "m", weight: 1.0 },
        { source: "scripting", target: "kapacitor", weight: 1.0 },
        { source: "scripting", target: "influxdb", weight: 1.0 },
        { source: "scripting", target: "telegraf", weight: 1.0 },
        { source: "scripting", target: "traefik", weight: 1.0 },
        { source: "scripting", target: "docker swarm", weight: 1.0 },
        { source: "scripting", target: "yaml", weight: 1.0 },
        { source: "scripting", target: "pilotage", weight: 1.0 },
        { source: "scripting", target: "prometheus", weight: 1.0 },
        { source: "scripting", target: "go", weight: 1.0 },
        { source: "scripting", target: "postgresql", weight: 1.0 },
        { source: "scripting", target: "grafana", weight: 1.0 },
        { source: "scripting", target: "templates", weight: 1.0 },
        { source: "scripting", target: "gitlab", weight: 1.0 },
        { source: "scripting", target: "markdown", weight: 1.0 },
        { source: "scripting", target: "perl", weight: 4.0 },
        { source: "scripting", target: "sas", weight: 1.0 },
        { source: "scripting", target: "hosting", weight: 1.0 },
        { source: "scripting", target: "installation", weight: 1.0 },
        { source: "scripting", target: "sap hana", weight: 1.0 },
        { source: "scripting", target: "qlik sense", weight: 1.0 },
        { source: "scripting", target: "veeam", weight: 1.0 },
        { source: "scripting", target: "wireshark", weight: 1.0 },
        { source: "scripting", target: "qmail", weight: 1.0 },
        { source: "scripting", target: "hyper-v", weight: 1.0 },
        { source: "scripting", target: "smtp", weight: 1.0 },
        { source: "scripting", target: "cacti", weight: 1.0 },
        { source: "scripting", target: "ghost", weight: 1.0 },
        { source: "scripting", target: "postfix", weight: 1.0 },
        { source: "scripting", target: "lunix", weight: 1.0 },
        { source: "scripting", target: "squid", weight: 1.0 },
        { source: "scripting", target: "clonezilla", weight: 1.0 },
        { source: "scripting", target: "exim", weight: 1.0 },
        { source: "scripting", target: "design flow", weight: 1.0 },
        { source: "scripting", target: "surfaceflinger", weight: 1.0 },
        { source: "scripting", target: "sqlite", weight: 1.0 },
        { source: "scripting", target: "android studio", weight: 1.0 },
        { source: "scripting", target: "android sdk", weight: 1.0 },
        { source: "scripting", target: "talend", weight: 1.0 },
        { source: "scripting", target: "mapr", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 7, "De 5 ?? 10 ans": 3, D??butant: 1 },
      contract_type: { CDI: 8, Freelance: 2, Stage: 1 },
      study_lvl: { "Bac +5 et plus": 9, "Bac +3": 1, "Bac +4": 1 },
      count_job: 11
    },
    priority: 26,
    twins: {
      unix: 0.28669975407891174,
      sql: 0.28669975407891174,
      perl: 0.10547094531453999,
      nice: 0.014273940257376558,
      python: 0.014273940257376558
    }
  },
  "back end": {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "json" },
        { id: "devops" },
        { id: "hibernate" },
        { id: "sonar" },
        { id: "jquery" },
        { id: "html5" },
        { id: "webforms" },
        { id: "front end" },
        { id: "spring webflux" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "xamarin" },
        { id: "blazor" },
        { id: "spring boot" },
        { id: "bootstrap" },
        { id: "redis" },
        { id: "back end" }
      ],
      links: [
        { source: "back end", target: "android", weight: 1.0 },
        { source: "back end", target: "java", weight: 5.0 },
        { source: "back end", target: "docker", weight: 1.0 },
        { source: "back end", target: "ansible", weight: 1.0 },
        { source: "back end", target: "jenkins", weight: 1.0 },
        { source: "back end", target: "linux", weight: 1.0 },
        { source: "back end", target: "sql", weight: 6.0 },
        { source: "back end", target: "angular", weight: 2.0 },
        { source: "back end", target: "typescript", weight: 1.0 },
        { source: "back end", target: "javascript", weight: 9.0 },
        { source: "back end", target: "asp.net", weight: 5.0 },
        { source: "back end", target: "json", weight: 1.0 },
        { source: "back end", target: "devops", weight: 2.0 },
        { source: "back end", target: "hibernate", weight: 2.0 },
        { source: "back end", target: "sonar", weight: 1.0 },
        { source: "back end", target: "jquery", weight: 4.0 },
        { source: "back end", target: "html5", weight: 4.0 },
        { source: "back end", target: "webforms", weight: 4.0 },
        { source: "back end", target: "front end", weight: 9.0 },
        { source: "back end", target: "spring webflux", weight: 3.0 },
        { source: "back end", target: "mongodb", weight: 4.0 },
        { source: "back end", target: "java 8", weight: 4.0 },
        { source: "back end", target: "xamarin", weight: 2.0 },
        { source: "back end", target: "blazor", weight: 1.0 },
        { source: "back end", target: "spring boot", weight: 1.0 },
        { source: "back end", target: "bootstrap", weight: 1.0 },
        { source: "back end", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 10 },
      contract_type: { CDI: 10 },
      study_lvl: { "Bac +5 et plus": 9, "Bac +4": 1 },
      count_job: 10
    },
    priority: 25,
    twins: {
      "front end": 0.46942628645053663,
      javascript: 0.46942628645053663,
      sql: 0.02337135861718535,
      "asp.net": 0.008597842347507519,
      java: 0.008597842347507519
    }
  },
  webforms: {
    neiGraph: {
      nodes: [
        { id: "sql" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "jquery" },
        { id: "html5" },
        { id: "back end" },
        { id: "front end" },
        { id: "webforms" }
      ],
      links: [
        { source: "webforms", target: "sql", weight: 4.0 },
        { source: "webforms", target: "javascript", weight: 4.0 },
        { source: "webforms", target: "asp.net", weight: 4.0 },
        { source: "webforms", target: "jquery", weight: 4.0 },
        { source: "webforms", target: "html5", weight: 4.0 },
        { source: "webforms", target: "back end", weight: 4.0 },
        { source: "webforms", target: "front end", weight: 4.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 4 },
      contract_type: { CDI: 4 },
      study_lvl: { "Bac +5 et plus": 4 },
      count_job: 4
    },
    priority: 184,
    twins: {
      "front end": 0.14285714285714285,
      "back end": 0.14285714285714285,
      html5: 0.14285714285714285,
      jquery: 0.14285714285714285,
      "asp.net": 0.14285714285714285
    }
  },
  "front end": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "hibernate" },
        { id: "sonar" },
        { id: "jquery" },
        { id: "html5" },
        { id: "back end" },
        { id: "webforms" },
        { id: "spring webflux" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "gitlab" },
        { id: "xamarin" },
        { id: "spring boot" },
        { id: "bootstrap" },
        { id: "redis" },
        { id: "front end" }
      ],
      links: [
        { source: "front end", target: "scrum", weight: 1.0 },
        { source: "front end", target: "android", weight: 1.0 },
        { source: "front end", target: "java", weight: 6.0 },
        { source: "front end", target: "docker", weight: 2.0 },
        { source: "front end", target: "kubernetes", weight: 1.0 },
        { source: "front end", target: "ansible", weight: 1.0 },
        { source: "front end", target: "jenkins", weight: 1.0 },
        { source: "front end", target: "nginx", weight: 1.0 },
        { source: "front end", target: "git", weight: 1.0 },
        { source: "front end", target: "linux", weight: 2.0 },
        { source: "front end", target: "sql", weight: 6.0 },
        { source: "front end", target: "python", weight: 1.0 },
        { source: "front end", target: "angular", weight: 2.0 },
        { source: "front end", target: "flask", weight: 1.0 },
        { source: "front end", target: "typescript", weight: 1.0 },
        { source: "front end", target: "javascript", weight: 8.0 },
        { source: "front end", target: "asp.net", weight: 4.0 },
        { source: "front end", target: "json", weight: 2.0 },
        { source: "front end", target: "devops", weight: 2.0 },
        { source: "front end", target: "mise en place", weight: 1.0 },
        { source: "front end", target: "hibernate", weight: 2.0 },
        { source: "front end", target: "sonar", weight: 1.0 },
        { source: "front end", target: "jquery", weight: 4.0 },
        { source: "front end", target: "html5", weight: 4.0 },
        { source: "front end", target: "back end", weight: 9.0 },
        { source: "front end", target: "webforms", weight: 4.0 },
        { source: "front end", target: "spring webflux", weight: 3.0 },
        { source: "front end", target: "mongodb", weight: 4.0 },
        { source: "front end", target: "java 8", weight: 4.0 },
        { source: "front end", target: "xgboost", weight: 1.0 },
        { source: "front end", target: "syslog", weight: 1.0 },
        { source: "front end", target: "scala", weight: 1.0 },
        { source: "front end", target: "data science", weight: 1.0 },
        { source: "front end", target: "ip routing", weight: 1.0 },
        { source: "front end", target: "public cloud", weight: 1.0 },
        { source: "front end", target: "traefik", weight: 1.0 },
        { source: "front end", target: "yaml", weight: 1.0 },
        { source: "front end", target: "user story", weight: 1.0 },
        { source: "front end", target: "machine learning", weight: 1.0 },
        { source: "front end", target: "prometheus", weight: 1.0 },
        { source: "front end", target: "cloud infrastructure", weight: 1.0 },
        { source: "front end", target: "time series", weight: 1.0 },
        { source: "front end", target: "object storage", weight: 1.0 },
        { source: "front end", target: "docker container", weight: 1.0 },
        { source: "front end", target: "pytorch", weight: 1.0 },
        { source: "front end", target: "routing protocols", weight: 1.0 },
        { source: "front end", target: "terraform", weight: 1.0 },
        { source: "front end", target: "api gateway", weight: 1.0 },
        { source: "front end", target: "vm", weight: 1.0 },
        { source: "front end", target: "deep learning", weight: 1.0 },
        { source: "front end", target: "jupyter", weight: 1.0 },
        { source: "front end", target: "telemetry", weight: 1.0 },
        { source: "front end", target: "gitlab", weight: 1.0 },
        { source: "front end", target: "xamarin", weight: 1.0 },
        { source: "front end", target: "spring boot", weight: 1.0 },
        { source: "front end", target: "bootstrap", weight: 1.0 },
        { source: "front end", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 11 },
      contract_type: { CDI: 11 },
      study_lvl: { "Bac +5 et plus": 10, "Bac +4": 1 },
      count_job: 11
    },
    priority: 183,
    twins: {
      "back end": 0.6539153996441617,
      javascript: 0.24056203179449454,
      sql: 0.032556530708882946,
      java: 0.032556530708882946,
      "java 8": 0.004406047304688152
    }
  },
  splunk: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "linux" },
        { id: "unix" },
        { id: "angular" },
        { id: "jira" },
        { id: "talend" },
        { id: "gitlab" },
        { id: "splunk" }
      ],
      links: [
        { source: "splunk", target: "java", weight: 2.0 },
        { source: "splunk", target: "kubernetes", weight: 2.0 },
        { source: "splunk", target: "jenkins", weight: 2.0 },
        { source: "splunk", target: "linux", weight: 2.0 },
        { source: "splunk", target: "unix", weight: 2.0 },
        { source: "splunk", target: "angular", weight: 2.0 },
        { source: "splunk", target: "jira", weight: 2.0 },
        { source: "splunk", target: "talend", weight: 2.0 },
        { source: "splunk", target: "gitlab", weight: 2.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 182,
    twins: {
      gitlab: 0.1111111111111111,
      talend: 0.1111111111111111,
      jira: 0.1111111111111111,
      angular: 0.1111111111111111,
      unix: 0.1111111111111111
    }
  },
  talend: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "angular" },
        { id: "flux" },
        { id: "jira" },
        { id: "scripting" },
        { id: "splunk" },
        { id: "gitlab" },
        { id: "tableau" },
        { id: "informatica" },
        { id: "qlikview" },
        { id: "mulesoft" },
        { id: "eclipse" },
        { id: "source" },
        { id: "middleware" },
        { id: "mapr" },
        { id: "talend" }
      ],
      links: [
        { source: "talend", target: "java", weight: 3.0 },
        { source: "talend", target: "kubernetes", weight: 2.0 },
        { source: "talend", target: "jenkins", weight: 2.0 },
        { source: "talend", target: "linux", weight: 2.0 },
        { source: "talend", target: "sql", weight: 2.0 },
        { source: "talend", target: "unix", weight: 2.0 },
        { source: "talend", target: "angular", weight: 2.0 },
        { source: "talend", target: "flux", weight: 1.0 },
        { source: "talend", target: "jira", weight: 2.0 },
        { source: "talend", target: "scripting", weight: 1.0 },
        { source: "talend", target: "splunk", weight: 2.0 },
        { source: "talend", target: "gitlab", weight: 2.0 },
        { source: "talend", target: "tableau", weight: 1.0 },
        { source: "talend", target: "informatica", weight: 1.0 },
        { source: "talend", target: "qlikview", weight: 1.0 },
        { source: "talend", target: "mulesoft", weight: 1.0 },
        { source: "talend", target: "eclipse", weight: 1.0 },
        { source: "talend", target: "source", weight: 1.0 },
        { source: "talend", target: "middleware", weight: 1.0 },
        { source: "talend", target: "mapr", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 2, "De 3 ?? 5 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 4, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 3, "Bac +4": 2 },
      count_job: 5
    },
    priority: 35,
    twins: {
      java: 0.17654532497323144,
      gitlab: 0.06494739549258306,
      splunk: 0.06494739549258306,
      jira: 0.06494739549258306,
      angular: 0.06494739549258306
    }
  },
  gitlab: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "c" },
        { id: "javascript" },
        { id: "json" },
        { id: "openapi" },
        { id: "php" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "flux" },
        { id: "jira" },
        { id: "jquery" },
        { id: "c++" },
        { id: "scripting" },
        { id: "front end" },
        { id: "splunk" },
        { id: "talend" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "pilotage" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "perl" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "jonas" },
        { id: "source" },
        { id: "user story" },
        { id: "chef" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "scala" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "vue.js" },
        { id: "gitlab" }
      ],
      links: [
        { source: "gitlab", target: "scrum", weight: 2.0 },
        { source: "gitlab", target: "java", weight: 4.0 },
        { source: "gitlab", target: "docker", weight: 4.0 },
        { source: "gitlab", target: "kubernetes", weight: 5.0 },
        { source: "gitlab", target: "ansible", weight: 1.0 },
        { source: "gitlab", target: "jenkins", weight: 4.0 },
        { source: "gitlab", target: "nagios", weight: 1.0 },
        { source: "gitlab", target: "nginx", weight: 2.0 },
        { source: "gitlab", target: "git", weight: 5.0 },
        { source: "gitlab", target: "mysql", weight: 2.0 },
        { source: "gitlab", target: "linux", weight: 5.0 },
        { source: "gitlab", target: "sql", weight: 3.0 },
        { source: "gitlab", target: "unix", weight: 4.0 },
        { source: "gitlab", target: "python", weight: 3.0 },
        { source: "gitlab", target: "angular", weight: 4.0 },
        { source: "gitlab", target: "flask", weight: 1.0 },
        { source: "gitlab", target: "c", weight: 1.0 },
        { source: "gitlab", target: "javascript", weight: 3.0 },
        { source: "gitlab", target: "json", weight: 1.0 },
        { source: "gitlab", target: "openapi", weight: 1.0 },
        { source: "gitlab", target: "php", weight: 1.0 },
        { source: "gitlab", target: "devops", weight: 2.0 },
        { source: "gitlab", target: "mise en place", weight: 1.0 },
        { source: "gitlab", target: "flux", weight: 2.0 },
        { source: "gitlab", target: "jira", weight: 3.0 },
        { source: "gitlab", target: "jquery", weight: 1.0 },
        { source: "gitlab", target: "c++", weight: 1.0 },
        { source: "gitlab", target: "scripting", weight: 1.0 },
        { source: "gitlab", target: "front end", weight: 1.0 },
        { source: "gitlab", target: "splunk", weight: 2.0 },
        { source: "gitlab", target: "talend", weight: 2.0 },
        { source: "gitlab", target: "kapacitor", weight: 1.0 },
        { source: "gitlab", target: "influxdb", weight: 1.0 },
        { source: "gitlab", target: "telegraf", weight: 1.0 },
        { source: "gitlab", target: "traefik", weight: 2.0 },
        { source: "gitlab", target: "docker swarm", weight: 1.0 },
        { source: "gitlab", target: "yaml", weight: 2.0 },
        { source: "gitlab", target: "pilotage", weight: 1.0 },
        { source: "gitlab", target: "prometheus", weight: 2.0 },
        { source: "gitlab", target: "go", weight: 1.0 },
        { source: "gitlab", target: "postgresql", weight: 3.0 },
        { source: "gitlab", target: "grafana", weight: 1.0 },
        { source: "gitlab", target: "templates", weight: 1.0 },
        { source: "gitlab", target: "markdown", weight: 1.0 },
        { source: "gitlab", target: "perl", weight: 1.0 },
        { source: "gitlab", target: "visual basic", weight: 1.0 },
        { source: "gitlab", target: "mariadb", weight: 1.0 },
        { source: "gitlab", target: "solaris", weight: 1.0 },
        { source: "gitlab", target: "jonas", weight: 1.0 },
        { source: "gitlab", target: "source", weight: 1.0 },
        { source: "gitlab", target: "user story", weight: 2.0 },
        { source: "gitlab", target: "chef", weight: 1.0 },
        { source: "gitlab", target: "xgboost", weight: 1.0 },
        { source: "gitlab", target: "syslog", weight: 1.0 },
        { source: "gitlab", target: "scala", weight: 1.0 },
        { source: "gitlab", target: "data science", weight: 1.0 },
        { source: "gitlab", target: "ip routing", weight: 1.0 },
        { source: "gitlab", target: "public cloud", weight: 1.0 },
        { source: "gitlab", target: "machine learning", weight: 1.0 },
        { source: "gitlab", target: "cloud infrastructure", weight: 1.0 },
        { source: "gitlab", target: "time series", weight: 1.0 },
        { source: "gitlab", target: "object storage", weight: 1.0 },
        { source: "gitlab", target: "docker container", weight: 1.0 },
        { source: "gitlab", target: "pytorch", weight: 1.0 },
        { source: "gitlab", target: "routing protocols", weight: 1.0 },
        { source: "gitlab", target: "terraform", weight: 1.0 },
        { source: "gitlab", target: "api gateway", weight: 1.0 },
        { source: "gitlab", target: "vm", weight: 1.0 },
        { source: "gitlab", target: "deep learning", weight: 1.0 },
        { source: "gitlab", target: "jupyter", weight: 1.0 },
        { source: "gitlab", target: "telemetry", weight: 1.0 },
        { source: "gitlab", target: "vue.js", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 3, "De 5 ?? 10 ans": 3, "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 8 },
      study_lvl: { "Bac +5 et plus": 6, "Bac +4": 1, "Bac +3": 1 },
      count_job: 8
    },
    priority: 181,
    twins: {
      linux: 0.1440324052938323,
      git: 0.1440324052938323,
      kubernetes: 0.1440324052938323,
      angular: 0.05298656077007371,
      unix: 0.05298656077007371
    }
  },
  "google cloud": {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "java" },
        { id: "devops" },
        { id: "analytics" },
        { id: "big data" },
        { id: "google cloud" }
      ],
      links: [
        { source: "google cloud", target: "transformation", weight: 1.0 },
        { source: "google cloud", target: "java", weight: 1.0 },
        { source: "google cloud", target: "devops", weight: 1.0 },
        { source: "google cloud", target: "analytics", weight: 1.0 },
        { source: "google cloud", target: "big data", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 180,
    twins: {
      "big data": 0.2,
      analytics: 0.2,
      devops: 0.2,
      java: 0.2,
      transformation: 0.2
    }
  },
  analytics: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "java" },
        { id: "devops" },
        { id: "google cloud" },
        { id: "big data" },
        { id: "analytics" }
      ],
      links: [
        { source: "analytics", target: "transformation", weight: 1.0 },
        { source: "analytics", target: "java", weight: 1.0 },
        { source: "analytics", target: "devops", weight: 1.0 },
        { source: "analytics", target: "google cloud", weight: 1.0 },
        { source: "analytics", target: "big data", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 179,
    twins: {
      "big data": 0.2,
      "google cloud": 0.2,
      devops: 0.2,
      java: 0.2,
      transformation: 0.2
    }
  },
  "big data": {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "java" },
        { id: "python" },
        { id: "devops" },
        { id: "r" },
        { id: "google cloud" },
        { id: "analytics" },
        { id: "sas" },
        { id: "big data" }
      ],
      links: [
        { source: "big data", target: "transformation", weight: 1.0 },
        { source: "big data", target: "java", weight: 1.0 },
        { source: "big data", target: "python", weight: 1.0 },
        { source: "big data", target: "devops", weight: 1.0 },
        { source: "big data", target: "r", weight: 1.0 },
        { source: "big data", target: "google cloud", weight: 1.0 },
        { source: "big data", target: "analytics", weight: 1.0 },
        { source: "big data", target: "sas", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 178,
    twins: {
      sas: 0.125,
      analytics: 0.125,
      "google cloud": 0.125,
      r: 0.125,
      devops: 0.125
    }
  },
  sas: {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "web services" },
        { id: "scripting" },
        { id: "big data" },
        { id: "hosting" },
        { id: "installation" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "perl" },
        { id: "sas" }
      ],
      links: [
        { source: "sas", target: "python", weight: 2.0 },
        { source: "sas", target: "r", weight: 2.0 },
        { source: "sas", target: "automation", weight: 1.0 },
        { source: "sas", target: "nice", weight: 1.0 },
        { source: "sas", target: "web services", weight: 1.0 },
        { source: "sas", target: "scripting", weight: 1.0 },
        { source: "sas", target: "big data", weight: 1.0 },
        { source: "sas", target: "hosting", weight: 1.0 },
        { source: "sas", target: "installation", weight: 1.0 },
        { source: "sas", target: "sap hana", weight: 1.0 },
        { source: "sas", target: "qlik sense", weight: 1.0 },
        { source: "sas", target: "perl", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 1, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 177,
    twins: {
      r: 0.1760937141758757,
      python: 0.1760937141758757,
      perl: 0.06478125716482483,
      "qlik sense": 0.06478125716482483,
      "sap hana": 0.06478125716482483
    }
  },
  "spring cloud": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "git" },
        { id: "mysql" },
        { id: "devops" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "spring cloud" }
      ],
      links: [
        { source: "spring cloud", target: "java", weight: 1.0 },
        { source: "spring cloud", target: "kubernetes", weight: 1.0 },
        { source: "spring cloud", target: "git", weight: 1.0 },
        { source: "spring cloud", target: "mysql", weight: 1.0 },
        { source: "spring cloud", target: "devops", weight: 1.0 },
        { source: "spring cloud", target: "apache hadoop", weight: 1.0 },
        { source: "spring cloud", target: "airflow", weight: 1.0 },
        { source: "spring cloud", target: "scala", weight: 1.0 },
        { source: "spring cloud", target: "sqoop", weight: 1.0 },
        { source: "spring cloud", target: "microservices", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 176,
    twins: {
      microservices: 0.1,
      sqoop: 0.1,
      scala: 0.1,
      airflow: 0.1,
      "apache hadoop": 0.1
    }
  },
  "apache hadoop": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "git" },
        { id: "mysql" },
        { id: "devops" },
        { id: "spring cloud" },
        { id: "airflow" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "apache hadoop" }
      ],
      links: [
        { source: "apache hadoop", target: "java", weight: 1.0 },
        { source: "apache hadoop", target: "kubernetes", weight: 1.0 },
        { source: "apache hadoop", target: "git", weight: 1.0 },
        { source: "apache hadoop", target: "mysql", weight: 1.0 },
        { source: "apache hadoop", target: "devops", weight: 1.0 },
        { source: "apache hadoop", target: "spring cloud", weight: 1.0 },
        { source: "apache hadoop", target: "airflow", weight: 1.0 },
        { source: "apache hadoop", target: "scala", weight: 1.0 },
        { source: "apache hadoop", target: "sqoop", weight: 1.0 },
        { source: "apache hadoop", target: "microservices", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 175,
    twins: {
      microservices: 0.1,
      sqoop: 0.1,
      scala: 0.1,
      airflow: 0.1,
      "spring cloud": 0.1
    }
  },
  airflow: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "git" },
        { id: "mysql" },
        { id: "devops" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "airflow" }
      ],
      links: [
        { source: "airflow", target: "java", weight: 1.0 },
        { source: "airflow", target: "kubernetes", weight: 1.0 },
        { source: "airflow", target: "git", weight: 1.0 },
        { source: "airflow", target: "mysql", weight: 1.0 },
        { source: "airflow", target: "devops", weight: 1.0 },
        { source: "airflow", target: "spring cloud", weight: 1.0 },
        { source: "airflow", target: "apache hadoop", weight: 1.0 },
        { source: "airflow", target: "scala", weight: 1.0 },
        { source: "airflow", target: "sqoop", weight: 1.0 },
        { source: "airflow", target: "microservices", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 174,
    twins: {
      microservices: 0.1,
      sqoop: 0.1,
      scala: 0.1,
      "apache hadoop": 0.1,
      "spring cloud": 0.1
    }
  },
  scala: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "nosql" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "sqoop" },
        { id: "microservices" },
        { id: "mongodb" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "user story" },
        { id: "prometheus" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "scala" }
      ],
      links: [
        { source: "scala", target: "scrum", weight: 2.0 },
        { source: "scala", target: "java", weight: 1.0 },
        { source: "scala", target: "docker", weight: 1.0 },
        { source: "scala", target: "kubernetes", weight: 2.0 },
        { source: "scala", target: "nginx", weight: 1.0 },
        { source: "scala", target: "git", weight: 2.0 },
        { source: "scala", target: "mysql", weight: 1.0 },
        { source: "scala", target: "linux", weight: 1.0 },
        { source: "scala", target: "sql", weight: 1.0 },
        { source: "scala", target: "python", weight: 1.0 },
        { source: "scala", target: "flask", weight: 1.0 },
        { source: "scala", target: "json", weight: 1.0 },
        { source: "scala", target: "nosql", weight: 1.0 },
        { source: "scala", target: "devops", weight: 2.0 },
        { source: "scala", target: "mise en place", weight: 1.0 },
        { source: "scala", target: "front end", weight: 1.0 },
        { source: "scala", target: "gitlab", weight: 1.0 },
        { source: "scala", target: "spring cloud", weight: 1.0 },
        { source: "scala", target: "apache hadoop", weight: 1.0 },
        { source: "scala", target: "airflow", weight: 1.0 },
        { source: "scala", target: "sqoop", weight: 1.0 },
        { source: "scala", target: "microservices", weight: 1.0 },
        { source: "scala", target: "mongodb", weight: 1.0 },
        { source: "scala", target: "machine learning", weight: 2.0 },
        { source: "scala", target: "deep learning", weight: 2.0 },
        { source: "scala", target: "xgboost", weight: 1.0 },
        { source: "scala", target: "syslog", weight: 1.0 },
        { source: "scala", target: "data science", weight: 1.0 },
        { source: "scala", target: "ip routing", weight: 1.0 },
        { source: "scala", target: "public cloud", weight: 1.0 },
        { source: "scala", target: "traefik", weight: 1.0 },
        { source: "scala", target: "yaml", weight: 1.0 },
        { source: "scala", target: "user story", weight: 1.0 },
        { source: "scala", target: "prometheus", weight: 1.0 },
        { source: "scala", target: "cloud infrastructure", weight: 1.0 },
        { source: "scala", target: "time series", weight: 1.0 },
        { source: "scala", target: "object storage", weight: 1.0 },
        { source: "scala", target: "docker container", weight: 1.0 },
        { source: "scala", target: "pytorch", weight: 1.0 },
        { source: "scala", target: "routing protocols", weight: 1.0 },
        { source: "scala", target: "terraform", weight: 1.0 },
        { source: "scala", target: "api gateway", weight: 1.0 },
        { source: "scala", target: "vm", weight: 1.0 },
        { source: "scala", target: "jupyter", weight: 1.0 },
        { source: "scala", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1, "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 173,
    twins: {
      "deep learning": 0.04914657414911922,
      "machine learning": 0.04914657414911922,
      devops: 0.04914657414911922,
      git: 0.04914657414911922,
      kubernetes: 0.04914657414911922
    }
  },
  sqoop: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "kubernetes" },
        { id: "git" },
        { id: "mysql" },
        { id: "devops" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "scala" },
        { id: "microservices" },
        { id: "sqoop" }
      ],
      links: [
        { source: "sqoop", target: "java", weight: 1.0 },
        { source: "sqoop", target: "kubernetes", weight: 1.0 },
        { source: "sqoop", target: "git", weight: 1.0 },
        { source: "sqoop", target: "mysql", weight: 1.0 },
        { source: "sqoop", target: "devops", weight: 1.0 },
        { source: "sqoop", target: "spring cloud", weight: 1.0 },
        { source: "sqoop", target: "apache hadoop", weight: 1.0 },
        { source: "sqoop", target: "airflow", weight: 1.0 },
        { source: "sqoop", target: "scala", weight: 1.0 },
        { source: "sqoop", target: "microservices", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 172,
    twins: {
      microservices: 0.1,
      scala: 0.1,
      airflow: 0.1,
      "apache hadoop": 0.1,
      "spring cloud": 0.1
    }
  },
  microservices: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "git" },
        { id: "mysql" },
        { id: "c" },
        { id: "c#" },
        { id: "asp.net" },
        { id: "devops" },
        { id: "flux" },
        { id: "html5" },
        { id: "spring cloud" },
        { id: "apache hadoop" },
        { id: "airflow" },
        { id: "scala" },
        { id: "sqoop" },
        { id: "azure blob storage" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "openshift" },
        { id: "devsecops" },
        { id: "microservices" }
      ],
      links: [
        { source: "microservices", target: "java", weight: 1.0 },
        { source: "microservices", target: "docker", weight: 1.0 },
        { source: "microservices", target: "kubernetes", weight: 2.0 },
        { source: "microservices", target: "git", weight: 1.0 },
        { source: "microservices", target: "mysql", weight: 1.0 },
        { source: "microservices", target: "c", weight: 1.0 },
        { source: "microservices", target: "c#", weight: 1.0 },
        { source: "microservices", target: "asp.net", weight: 1.0 },
        { source: "microservices", target: "devops", weight: 1.0 },
        { source: "microservices", target: "flux", weight: 1.0 },
        { source: "microservices", target: "html5", weight: 1.0 },
        { source: "microservices", target: "spring cloud", weight: 1.0 },
        { source: "microservices", target: "apache hadoop", weight: 1.0 },
        { source: "microservices", target: "airflow", weight: 1.0 },
        { source: "microservices", target: "scala", weight: 1.0 },
        { source: "microservices", target: "sqoop", weight: 1.0 },
        { source: "microservices", target: "azure blob storage", weight: 1.0 },
        { source: "microservices", target: "entity framework", weight: 1.0 },
        { source: "microservices", target: "sitecore", weight: 1.0 },
        { source: "microservices", target: "azure data factory", weight: 1.0 },
        { source: "microservices", target: "openshift", weight: 1.0 },
        { source: "microservices", target: "devsecops", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 2, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 171,
    twins: {
      kubernetes: 0.11460702963725804,
      devsecops: 0.042161570017273414,
      openshift: 0.042161570017273414,
      "azure data factory": 0.042161570017273414,
      sitecore: 0.042161570017273414
    }
  },
  pilotage: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "sql" },
        { id: "python" },
        { id: "openapi" },
        { id: "php" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "windev" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "pilotage" }
      ],
      links: [
        { source: "pilotage", target: "java", weight: 1.0 },
        { source: "pilotage", target: "docker", weight: 1.0 },
        { source: "pilotage", target: "kubernetes", weight: 1.0 },
        { source: "pilotage", target: "nginx", weight: 1.0 },
        { source: "pilotage", target: "sql", weight: 1.0 },
        { source: "pilotage", target: "python", weight: 1.0 },
        { source: "pilotage", target: "openapi", weight: 1.0 },
        { source: "pilotage", target: "php", weight: 1.0 },
        { source: "pilotage", target: "scripting", weight: 1.0 },
        { source: "pilotage", target: "gitlab", weight: 1.0 },
        { source: "pilotage", target: "windev", weight: 1.0 },
        { source: "pilotage", target: "kapacitor", weight: 1.0 },
        { source: "pilotage", target: "influxdb", weight: 1.0 },
        { source: "pilotage", target: "telegraf", weight: 1.0 },
        { source: "pilotage", target: "traefik", weight: 1.0 },
        { source: "pilotage", target: "docker swarm", weight: 1.0 },
        { source: "pilotage", target: "yaml", weight: 1.0 },
        { source: "pilotage", target: "prometheus", weight: 1.0 },
        { source: "pilotage", target: "go", weight: 1.0 },
        { source: "pilotage", target: "postgresql", weight: 1.0 },
        { source: "pilotage", target: "grafana", weight: 1.0 },
        { source: "pilotage", target: "templates", weight: 1.0 },
        { source: "pilotage", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 4, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 5 },
      study_lvl: { "Bac +3": 1, "Bac +5 et plus": 4 },
      count_job: 5
    },
    priority: 170,
    twins: {
      markdown: 0.0434782608695652,
      templates: 0.0434782608695652,
      grafana: 0.0434782608695652,
      postgresql: 0.0434782608695652,
      go: 0.0434782608695652
    }
  },
  windev: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "sql" },
        { id: "php" },
        { id: "pilotage" },
        { id: "webdev" },
        { id: "windev" }
      ],
      links: [
        { source: "windev", target: "java", weight: 2.0 },
        { source: "windev", target: "sql", weight: 1.0 },
        { source: "windev", target: "php", weight: 1.0 },
        { source: "windev", target: "pilotage", weight: 1.0 },
        { source: "windev", target: "webdev", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +3": 1, "Bac +5 et plus": 1 },
      count_job: 2
    },
    priority: 169,
    twins: {
      java: 0.40460967519168967,
      webdev: 0.14884758120207758,
      pilotage: 0.14884758120207758,
      php: 0.14884758120207758,
      sql: 0.14884758120207758
    }
  },
  "spring webflux": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "javascript" },
        { id: "back end" },
        { id: "front end" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "spring webflux" }
      ],
      links: [
        { source: "spring webflux", target: "java", weight: 3.0 },
        { source: "spring webflux", target: "javascript", weight: 3.0 },
        { source: "spring webflux", target: "back end", weight: 3.0 },
        { source: "spring webflux", target: "front end", weight: 3.0 },
        { source: "spring webflux", target: "mongodb", weight: 3.0 },
        { source: "spring webflux", target: "java 8", weight: 3.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 168,
    twins: {
      "java 8": 0.16666666666666666,
      mongodb: 0.16666666666666666,
      "front end": 0.16666666666666666,
      "back end": 0.16666666666666666,
      javascript: 0.16666666666666666
    }
  },
  mongodb: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "flask" },
        { id: "javascript" },
        { id: "nosql" },
        { id: "hibernate" },
        { id: "soapui" },
        { id: "html5" },
        { id: "back end" },
        { id: "front end" },
        { id: "scala" },
        { id: "spring webflux" },
        { id: "java 8" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "vertica" },
        { id: "postgresql" },
        { id: "postman" },
        { id: "bootstrap" },
        { id: "redis" },
        { id: "mongodb" }
      ],
      links: [
        { source: "mongodb", target: "scrum", weight: 1.0 },
        { source: "mongodb", target: "java", weight: 6.0 },
        { source: "mongodb", target: "docker", weight: 1.0 },
        { source: "mongodb", target: "nginx", weight: 1.0 },
        { source: "mongodb", target: "git", weight: 1.0 },
        { source: "mongodb", target: "mysql", weight: 1.0 },
        { source: "mongodb", target: "linux", weight: 1.0 },
        { source: "mongodb", target: "sql", weight: 3.0 },
        { source: "mongodb", target: "angular", weight: 1.0 },
        { source: "mongodb", target: "flask", weight: 1.0 },
        { source: "mongodb", target: "javascript", weight: 5.0 },
        { source: "mongodb", target: "nosql", weight: 1.0 },
        { source: "mongodb", target: "hibernate", weight: 1.0 },
        { source: "mongodb", target: "soapui", weight: 1.0 },
        { source: "mongodb", target: "html5", weight: 1.0 },
        { source: "mongodb", target: "back end", weight: 4.0 },
        { source: "mongodb", target: "front end", weight: 4.0 },
        { source: "mongodb", target: "scala", weight: 1.0 },
        { source: "mongodb", target: "spring webflux", weight: 3.0 },
        { source: "mongodb", target: "java 8", weight: 6.0 },
        { source: "mongodb", target: "machine learning", weight: 1.0 },
        { source: "mongodb", target: "deep learning", weight: 1.0 },
        { source: "mongodb", target: "vertica", weight: 1.0 },
        { source: "mongodb", target: "postgresql", weight: 1.0 },
        { source: "mongodb", target: "postman", weight: 1.0 },
        { source: "mongodb", target: "bootstrap", weight: 1.0 },
        { source: "mongodb", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 4, "De 5 ?? 10 ans": 1, "De 1 ?? 3 ans": 3 },
      contract_type: { CDI: 7, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 7, "Bac +2": 1 },
      count_job: 8
    },
    priority: 167,
    twins: {
      "java 8": 0.34808238645118406,
      java: 0.34808238645118406,
      javascript: 0.12805235380928362,
      "front end": 0.04710782836004707,
      "back end": 0.04710782836004707
    }
  },
  "java 8": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "git" },
        { id: "sql" },
        { id: "angular" },
        { id: "javascript" },
        { id: "hibernate" },
        { id: "html5" },
        { id: "back end" },
        { id: "front end" },
        { id: "spring webflux" },
        { id: "mongodb" },
        { id: "bootstrap" },
        { id: "kotlin" },
        { id: "redis" },
        { id: "java 8" }
      ],
      links: [
        { source: "java 8", target: "scrum", weight: 1.0 },
        { source: "java 8", target: "java", weight: 7.0 },
        { source: "java 8", target: "docker", weight: 1.0 },
        { source: "java 8", target: "git", weight: 1.0 },
        { source: "java 8", target: "sql", weight: 1.0 },
        { source: "java 8", target: "angular", weight: 2.0 },
        { source: "java 8", target: "javascript", weight: 4.0 },
        { source: "java 8", target: "hibernate", weight: 2.0 },
        { source: "java 8", target: "html5", weight: 1.0 },
        { source: "java 8", target: "back end", weight: 4.0 },
        { source: "java 8", target: "front end", weight: 4.0 },
        { source: "java 8", target: "spring webflux", weight: 3.0 },
        { source: "java 8", target: "mongodb", weight: 6.0 },
        { source: "java 8", target: "bootstrap", weight: 1.0 },
        { source: "java 8", target: "kotlin", weight: 1.0 },
        { source: "java 8", target: "redis", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 5, "De 1 ?? 3 ans": 2 },
      contract_type: { CDI: 7 },
      study_lvl: { "Bac +5 et plus": 7 },
      count_job: 7
    },
    priority: 166,
    twins: {
      java: 0.6374046121978965,
      mongodb: 0.23448805253546207,
      "front end": 0.03173450700548847,
      "back end": 0.03173450700548847,
      javascript: 0.03173450700548847
    }
  },
  "azure blob storage": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "sql" },
        { id: "c" },
        { id: "c#" },
        { id: "asp.net" },
        { id: "html5" },
        { id: "microservices" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "powerapps" },
        { id: "azure blob storage" }
      ],
      links: [
        { source: "azure blob storage", target: "scrum", weight: 1.0 },
        { source: "azure blob storage", target: "sql", weight: 1.0 },
        { source: "azure blob storage", target: "c", weight: 1.0 },
        { source: "azure blob storage", target: "c#", weight: 1.0 },
        { source: "azure blob storage", target: "asp.net", weight: 1.0 },
        { source: "azure blob storage", target: "html5", weight: 1.0 },
        { source: "azure blob storage", target: "microservices", weight: 1.0 },
        {
          source: "azure blob storage",
          target: "entity framework",
          weight: 1.0
        },
        { source: "azure blob storage", target: "sitecore", weight: 1.0 },
        {
          source: "azure blob storage",
          target: "azure data factory",
          weight: 1.0
        },
        { source: "azure blob storage", target: "powerapps", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { Freelance: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 165,
    twins: {
      powerapps: 0.09090909090909091,
      "azure data factory": 0.09090909090909091,
      sitecore: 0.09090909090909091,
      "entity framework": 0.09090909090909091,
      microservices: 0.09090909090909091
    }
  },
  "entity framework": {
    neiGraph: {
      nodes: [
        { id: "angular" },
        { id: "c" },
        { id: "c#" },
        { id: "asp.net" },
        { id: "html5" },
        { id: "microservices" },
        { id: "azure blob storage" },
        { id: "sitecore" },
        { id: "azure data factory" },
        { id: "entity framework" }
      ],
      links: [
        { source: "entity framework", target: "angular", weight: 1.0 },
        { source: "entity framework", target: "c", weight: 2.0 },
        { source: "entity framework", target: "c#", weight: 2.0 },
        { source: "entity framework", target: "asp.net", weight: 1.0 },
        { source: "entity framework", target: "html5", weight: 2.0 },
        { source: "entity framework", target: "microservices", weight: 1.0 },
        {
          source: "entity framework",
          target: "azure blob storage",
          weight: 1.0
        },
        { source: "entity framework", target: "sitecore", weight: 1.0 },
        {
          source: "entity framework",
          target: "azure data factory",
          weight: 1.0
        }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 1 ?? 3 ans": 1 },
      contract_type: { Freelance: 1, CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1, "Bac +4": 1 },
      count_job: 2
    },
    priority: 164,
    twins: {
      html5: 0.1920389615886097,
      "c#": 0.1920389615886097,
      c: 0.1920389615886097,
      "azure data factory": 0.07064718587236181,
      sitecore: 0.07064718587236181
    }
  },
  sitecore: {
    neiGraph: {
      nodes: [
        { id: "c" },
        { id: "c#" },
        { id: "asp.net" },
        { id: "html5" },
        { id: "microservices" },
        { id: "azure blob storage" },
        { id: "entity framework" },
        { id: "azure data factory" },
        { id: "sitecore" }
      ],
      links: [
        { source: "sitecore", target: "c", weight: 1.0 },
        { source: "sitecore", target: "c#", weight: 1.0 },
        { source: "sitecore", target: "asp.net", weight: 1.0 },
        { source: "sitecore", target: "html5", weight: 1.0 },
        { source: "sitecore", target: "microservices", weight: 1.0 },
        { source: "sitecore", target: "azure blob storage", weight: 1.0 },
        { source: "sitecore", target: "entity framework", weight: 1.0 },
        { source: "sitecore", target: "azure data factory", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 163,
    twins: {
      "azure data factory": 0.125,
      "entity framework": 0.125,
      "azure blob storage": 0.125,
      microservices: 0.125,
      html5: 0.125
    }
  },
  "azure data factory": {
    neiGraph: {
      nodes: [
        { id: "c" },
        { id: "c#" },
        { id: "asp.net" },
        { id: "html5" },
        { id: "microservices" },
        { id: "azure blob storage" },
        { id: "entity framework" },
        { id: "sitecore" },
        { id: "azure data factory" }
      ],
      links: [
        { source: "azure data factory", target: "c", weight: 1.0 },
        { source: "azure data factory", target: "c#", weight: 1.0 },
        { source: "azure data factory", target: "asp.net", weight: 1.0 },
        { source: "azure data factory", target: "html5", weight: 1.0 },
        { source: "azure data factory", target: "microservices", weight: 1.0 },
        {
          source: "azure data factory",
          target: "azure blob storage",
          weight: 1.0
        },
        {
          source: "azure data factory",
          target: "entity framework",
          weight: 1.0
        },
        { source: "azure data factory", target: "sitecore", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 162,
    twins: {
      sitecore: 0.125,
      "entity framework": 0.125,
      "azure blob storage": 0.125,
      microservices: 0.125,
      html5: 0.125
    }
  },
  "robot framework": {
    neiGraph: {
      nodes: [
        { id: "jenkins" },
        { id: "git" },
        { id: "python" },
        { id: "javascript" },
        { id: "jira" },
        { id: "testlink" },
        { id: "selenium" },
        { id: "robot framework" }
      ],
      links: [
        { source: "robot framework", target: "jenkins", weight: 1.0 },
        { source: "robot framework", target: "git", weight: 1.0 },
        { source: "robot framework", target: "python", weight: 1.0 },
        { source: "robot framework", target: "javascript", weight: 1.0 },
        { source: "robot framework", target: "jira", weight: 1.0 },
        { source: "robot framework", target: "testlink", weight: 1.0 },
        { source: "robot framework", target: "selenium", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 161,
    twins: {
      selenium: 0.14285714285714285,
      testlink: 0.14285714285714285,
      jira: 0.14285714285714285,
      javascript: 0.14285714285714285,
      python: 0.14285714285714285
    }
  },
  testlink: {
    neiGraph: {
      nodes: [
        { id: "jenkins" },
        { id: "git" },
        { id: "python" },
        { id: "javascript" },
        { id: "jira" },
        { id: "robot framework" },
        { id: "selenium" },
        { id: "testlink" }
      ],
      links: [
        { source: "testlink", target: "jenkins", weight: 1.0 },
        { source: "testlink", target: "git", weight: 1.0 },
        { source: "testlink", target: "python", weight: 1.0 },
        { source: "testlink", target: "javascript", weight: 1.0 },
        { source: "testlink", target: "jira", weight: 1.0 },
        { source: "testlink", target: "robot framework", weight: 1.0 },
        { source: "testlink", target: "selenium", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 160,
    twins: {
      selenium: 0.14285714285714285,
      "robot framework": 0.14285714285714285,
      jira: 0.14285714285714285,
      javascript: 0.14285714285714285,
      python: 0.14285714285714285
    }
  },
  selenium: {
    neiGraph: {
      nodes: [
        { id: "jenkins" },
        { id: "git" },
        { id: "python" },
        { id: "javascript" },
        { id: "nice" },
        { id: "jira" },
        { id: "robot framework" },
        { id: "testlink" },
        { id: "selenium" }
      ],
      links: [
        { source: "selenium", target: "jenkins", weight: 1.0 },
        { source: "selenium", target: "git", weight: 1.0 },
        { source: "selenium", target: "python", weight: 1.0 },
        { source: "selenium", target: "javascript", weight: 1.0 },
        { source: "selenium", target: "nice", weight: 1.0 },
        { source: "selenium", target: "jira", weight: 2.0 },
        { source: "selenium", target: "robot framework", weight: 1.0 },
        { source: "selenium", target: "testlink", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 1, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 159,
    twins: {
      jira: 0.27970806737656245,
      testlink: 0.10289884751763392,
      "robot framework": 0.10289884751763392,
      nice: 0.10289884751763392,
      javascript: 0.10289884751763392
    }
  },
  junit: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "sql" },
        { id: "angular" },
        { id: "json" },
        { id: "nice" },
        { id: "sonar" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "agile methodology" },
        { id: "spring mvc" },
        { id: "mockito" },
        { id: "junit" }
      ],
      links: [
        { source: "junit", target: "java", weight: 2.0 },
        { source: "junit", target: "jenkins", weight: 1.0 },
        { source: "junit", target: "git", weight: 2.0 },
        { source: "junit", target: "mysql", weight: 1.0 },
        { source: "junit", target: "sql", weight: 1.0 },
        { source: "junit", target: "angular", weight: 1.0 },
        { source: "junit", target: "json", weight: 1.0 },
        { source: "junit", target: "nice", weight: 1.0 },
        { source: "junit", target: "sonar", weight: 1.0 },
        { source: "junit", target: "spring security", weight: 2.0 },
        { source: "junit", target: "bitbucket", weight: 1.0 },
        { source: "junit", target: "keycloak", weight: 1.0 },
        { source: "junit", target: "spring boot", weight: 2.0 },
        { source: "junit", target: "jest", weight: 1.0 },
        { source: "junit", target: "agile methodology", weight: 1.0 },
        { source: "junit", target: "spring mvc", weight: 1.0 },
        { source: "junit", target: "mockito", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 158,
    twins: {
      "spring boot": 0.11386366740831676,
      "spring security": 0.11386366740831676,
      git: 0.11386366740831676,
      java: 0.11386366740831676,
      mockito: 0.04188810233590254
    }
  },
  "spring security": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "sql" },
        { id: "angular" },
        { id: "json" },
        { id: "nice" },
        { id: "sonar" },
        { id: "junit" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "agile methodology" },
        { id: "spring mvc" },
        { id: "mockito" },
        { id: "spring security" }
      ],
      links: [
        { source: "spring security", target: "java", weight: 2.0 },
        { source: "spring security", target: "jenkins", weight: 1.0 },
        { source: "spring security", target: "git", weight: 2.0 },
        { source: "spring security", target: "mysql", weight: 1.0 },
        { source: "spring security", target: "sql", weight: 1.0 },
        { source: "spring security", target: "angular", weight: 1.0 },
        { source: "spring security", target: "json", weight: 1.0 },
        { source: "spring security", target: "nice", weight: 1.0 },
        { source: "spring security", target: "sonar", weight: 1.0 },
        { source: "spring security", target: "junit", weight: 2.0 },
        { source: "spring security", target: "bitbucket", weight: 1.0 },
        { source: "spring security", target: "keycloak", weight: 1.0 },
        { source: "spring security", target: "spring boot", weight: 2.0 },
        { source: "spring security", target: "jest", weight: 1.0 },
        { source: "spring security", target: "agile methodology", weight: 1.0 },
        { source: "spring security", target: "spring mvc", weight: 1.0 },
        { source: "spring security", target: "mockito", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 157,
    twins: {
      "spring boot": 0.11386366740831676,
      junit: 0.11386366740831676,
      git: 0.11386366740831676,
      java: 0.11386366740831676,
      mockito: 0.04188810233590254
    }
  },
  bitbucket: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "sonar" },
        { id: "jira" },
        { id: "junit" },
        { id: "spring security" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "postman" },
        { id: "bitbucket" }
      ],
      links: [
        { source: "bitbucket", target: "transformation", weight: 1.0 },
        { source: "bitbucket", target: "scrum", weight: 1.0 },
        { source: "bitbucket", target: "java", weight: 1.0 },
        { source: "bitbucket", target: "jenkins", weight: 1.0 },
        { source: "bitbucket", target: "git", weight: 2.0 },
        { source: "bitbucket", target: "typescript", weight: 1.0 },
        { source: "bitbucket", target: "javascript", weight: 1.0 },
        { source: "bitbucket", target: "sonar", weight: 2.0 },
        { source: "bitbucket", target: "jira", weight: 1.0 },
        { source: "bitbucket", target: "junit", weight: 1.0 },
        { source: "bitbucket", target: "spring security", weight: 1.0 },
        { source: "bitbucket", target: "keycloak", weight: 1.0 },
        { source: "bitbucket", target: "spring boot", weight: 1.0 },
        { source: "bitbucket", target: "jest", weight: 2.0 },
        { source: "bitbucket", target: "postman", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 156,
    twins: {
      jest: 0.13486989173056319,
      sonar: 0.13486989173056319,
      git: 0.13486989173056319,
      postman: 0.049615860400692505,
      "spring boot": 0.049615860400692505
    }
  },
  keycloak: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "git" },
        { id: "sonar" },
        { id: "junit" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "spring boot" },
        { id: "jest" },
        { id: "keycloak" }
      ],
      links: [
        { source: "keycloak", target: "java", weight: 1.0 },
        { source: "keycloak", target: "git", weight: 1.0 },
        { source: "keycloak", target: "sonar", weight: 1.0 },
        { source: "keycloak", target: "junit", weight: 1.0 },
        { source: "keycloak", target: "spring security", weight: 1.0 },
        { source: "keycloak", target: "bitbucket", weight: 1.0 },
        { source: "keycloak", target: "spring boot", weight: 1.0 },
        { source: "keycloak", target: "jest", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 155,
    twins: {
      jest: 0.125,
      "spring boot": 0.125,
      bitbucket: 0.125,
      "spring security": 0.125,
      junit: 0.125
    }
  },
  "spring boot": {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "typescript" },
        { id: "json" },
        { id: "devops" },
        { id: "nice" },
        { id: "hibernate" },
        { id: "sonar" },
        { id: "back end" },
        { id: "front end" },
        { id: "junit" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "jest" },
        { id: "mariadb" },
        { id: "continuous delivery" },
        { id: "agile methodology" },
        { id: "spring mvc" },
        { id: "mockito" },
        { id: "xamarin" },
        { id: "bootstrap" },
        { id: "spring boot" }
      ],
      links: [
        { source: "spring boot", target: "android", weight: 1.0 },
        { source: "spring boot", target: "java", weight: 4.0 },
        { source: "spring boot", target: "docker", weight: 1.0 },
        { source: "spring boot", target: "ansible", weight: 1.0 },
        { source: "spring boot", target: "jenkins", weight: 2.0 },
        { source: "spring boot", target: "git", weight: 2.0 },
        { source: "spring boot", target: "mysql", weight: 1.0 },
        { source: "spring boot", target: "linux", weight: 1.0 },
        { source: "spring boot", target: "sql", weight: 2.0 },
        { source: "spring boot", target: "angular", weight: 3.0 },
        { source: "spring boot", target: "typescript", weight: 1.0 },
        { source: "spring boot", target: "json", weight: 2.0 },
        { source: "spring boot", target: "devops", weight: 2.0 },
        { source: "spring boot", target: "nice", weight: 1.0 },
        { source: "spring boot", target: "hibernate", weight: 1.0 },
        { source: "spring boot", target: "sonar", weight: 2.0 },
        { source: "spring boot", target: "back end", weight: 1.0 },
        { source: "spring boot", target: "front end", weight: 1.0 },
        { source: "spring boot", target: "junit", weight: 2.0 },
        { source: "spring boot", target: "spring security", weight: 2.0 },
        { source: "spring boot", target: "bitbucket", weight: 1.0 },
        { source: "spring boot", target: "keycloak", weight: 1.0 },
        { source: "spring boot", target: "jest", weight: 1.0 },
        { source: "spring boot", target: "mariadb", weight: 1.0 },
        { source: "spring boot", target: "continuous delivery", weight: 1.0 },
        { source: "spring boot", target: "agile methodology", weight: 1.0 },
        { source: "spring boot", target: "spring mvc", weight: 1.0 },
        { source: "spring boot", target: "mockito", weight: 1.0 },
        { source: "spring boot", target: "xamarin", weight: 1.0 },
        { source: "spring boot", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2, "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 4 },
      study_lvl: { "Bac +5 et plus": 3, "Bac +4": 1 },
      count_job: 4
    },
    priority: 154,
    twins: {
      java: 0.2901660064148087,
      angular: 0.106746108286829,
      "spring security": 0.03926969866378492,
      junit: 0.03926969866378492,
      sonar: 0.03926969866378492
    }
  },
  jest: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "sonar" },
        { id: "jira" },
        { id: "junit" },
        { id: "spring security" },
        { id: "bitbucket" },
        { id: "keycloak" },
        { id: "spring boot" },
        { id: "postman" },
        { id: "jest" }
      ],
      links: [
        { source: "jest", target: "transformation", weight: 1.0 },
        { source: "jest", target: "scrum", weight: 1.0 },
        { source: "jest", target: "java", weight: 1.0 },
        { source: "jest", target: "jenkins", weight: 1.0 },
        { source: "jest", target: "git", weight: 2.0 },
        { source: "jest", target: "typescript", weight: 1.0 },
        { source: "jest", target: "javascript", weight: 1.0 },
        { source: "jest", target: "sonar", weight: 2.0 },
        { source: "jest", target: "jira", weight: 1.0 },
        { source: "jest", target: "junit", weight: 1.0 },
        { source: "jest", target: "spring security", weight: 1.0 },
        { source: "jest", target: "bitbucket", weight: 2.0 },
        { source: "jest", target: "keycloak", weight: 1.0 },
        { source: "jest", target: "spring boot", weight: 1.0 },
        { source: "jest", target: "postman", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 153,
    twins: {
      bitbucket: 0.13486989173056319,
      sonar: 0.13486989173056319,
      git: 0.13486989173056319,
      postman: 0.049615860400692505,
      "spring boot": 0.049615860400692505
    }
  },
  kapacitor: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "kapacitor" }
      ],
      links: [
        { source: "kapacitor", target: "docker", weight: 1.0 },
        { source: "kapacitor", target: "kubernetes", weight: 1.0 },
        { source: "kapacitor", target: "nginx", weight: 1.0 },
        { source: "kapacitor", target: "python", weight: 1.0 },
        { source: "kapacitor", target: "openapi", weight: 1.0 },
        { source: "kapacitor", target: "scripting", weight: 1.0 },
        { source: "kapacitor", target: "gitlab", weight: 1.0 },
        { source: "kapacitor", target: "pilotage", weight: 1.0 },
        { source: "kapacitor", target: "influxdb", weight: 1.0 },
        { source: "kapacitor", target: "telegraf", weight: 1.0 },
        { source: "kapacitor", target: "traefik", weight: 1.0 },
        { source: "kapacitor", target: "docker swarm", weight: 1.0 },
        { source: "kapacitor", target: "yaml", weight: 1.0 },
        { source: "kapacitor", target: "prometheus", weight: 1.0 },
        { source: "kapacitor", target: "go", weight: 1.0 },
        { source: "kapacitor", target: "postgresql", weight: 1.0 },
        { source: "kapacitor", target: "grafana", weight: 1.0 },
        { source: "kapacitor", target: "templates", weight: 1.0 },
        { source: "kapacitor", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 152,
    twins: {
      markdown: 0.05263157894736841,
      templates: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841
    }
  },
  influxdb: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "influxdb" }
      ],
      links: [
        { source: "influxdb", target: "docker", weight: 1.0 },
        { source: "influxdb", target: "kubernetes", weight: 1.0 },
        { source: "influxdb", target: "nginx", weight: 1.0 },
        { source: "influxdb", target: "python", weight: 1.0 },
        { source: "influxdb", target: "openapi", weight: 1.0 },
        { source: "influxdb", target: "scripting", weight: 1.0 },
        { source: "influxdb", target: "gitlab", weight: 1.0 },
        { source: "influxdb", target: "pilotage", weight: 1.0 },
        { source: "influxdb", target: "kapacitor", weight: 1.0 },
        { source: "influxdb", target: "telegraf", weight: 1.0 },
        { source: "influxdb", target: "traefik", weight: 1.0 },
        { source: "influxdb", target: "docker swarm", weight: 1.0 },
        { source: "influxdb", target: "yaml", weight: 1.0 },
        { source: "influxdb", target: "prometheus", weight: 1.0 },
        { source: "influxdb", target: "go", weight: 1.0 },
        { source: "influxdb", target: "postgresql", weight: 1.0 },
        { source: "influxdb", target: "grafana", weight: 1.0 },
        { source: "influxdb", target: "templates", weight: 1.0 },
        { source: "influxdb", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 151,
    twins: {
      markdown: 0.05263157894736841,
      templates: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841
    }
  },
  telegraf: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "telegraf" }
      ],
      links: [
        { source: "telegraf", target: "docker", weight: 1.0 },
        { source: "telegraf", target: "kubernetes", weight: 1.0 },
        { source: "telegraf", target: "nginx", weight: 1.0 },
        { source: "telegraf", target: "python", weight: 1.0 },
        { source: "telegraf", target: "openapi", weight: 1.0 },
        { source: "telegraf", target: "scripting", weight: 1.0 },
        { source: "telegraf", target: "gitlab", weight: 1.0 },
        { source: "telegraf", target: "pilotage", weight: 1.0 },
        { source: "telegraf", target: "kapacitor", weight: 1.0 },
        { source: "telegraf", target: "influxdb", weight: 1.0 },
        { source: "telegraf", target: "traefik", weight: 1.0 },
        { source: "telegraf", target: "docker swarm", weight: 1.0 },
        { source: "telegraf", target: "yaml", weight: 1.0 },
        { source: "telegraf", target: "prometheus", weight: 1.0 },
        { source: "telegraf", target: "go", weight: 1.0 },
        { source: "telegraf", target: "postgresql", weight: 1.0 },
        { source: "telegraf", target: "grafana", weight: 1.0 },
        { source: "telegraf", target: "templates", weight: 1.0 },
        { source: "telegraf", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 150,
    twins: {
      markdown: 0.05263157894736841,
      templates: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841
    }
  },
  traefik: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "openapi" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "scripting" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "traefik" }
      ],
      links: [
        { source: "traefik", target: "scrum", weight: 1.0 },
        { source: "traefik", target: "docker", weight: 2.0 },
        { source: "traefik", target: "kubernetes", weight: 2.0 },
        { source: "traefik", target: "nginx", weight: 2.0 },
        { source: "traefik", target: "git", weight: 1.0 },
        { source: "traefik", target: "linux", weight: 1.0 },
        { source: "traefik", target: "python", weight: 2.0 },
        { source: "traefik", target: "flask", weight: 1.0 },
        { source: "traefik", target: "json", weight: 1.0 },
        { source: "traefik", target: "openapi", weight: 1.0 },
        { source: "traefik", target: "devops", weight: 1.0 },
        { source: "traefik", target: "mise en place", weight: 1.0 },
        { source: "traefik", target: "scripting", weight: 1.0 },
        { source: "traefik", target: "front end", weight: 1.0 },
        { source: "traefik", target: "gitlab", weight: 2.0 },
        { source: "traefik", target: "scala", weight: 1.0 },
        { source: "traefik", target: "pilotage", weight: 1.0 },
        { source: "traefik", target: "kapacitor", weight: 1.0 },
        { source: "traefik", target: "influxdb", weight: 1.0 },
        { source: "traefik", target: "telegraf", weight: 1.0 },
        { source: "traefik", target: "docker swarm", weight: 1.0 },
        { source: "traefik", target: "yaml", weight: 2.0 },
        { source: "traefik", target: "prometheus", weight: 2.0 },
        { source: "traefik", target: "go", weight: 1.0 },
        { source: "traefik", target: "postgresql", weight: 1.0 },
        { source: "traefik", target: "grafana", weight: 1.0 },
        { source: "traefik", target: "templates", weight: 1.0 },
        { source: "traefik", target: "markdown", weight: 1.0 },
        { source: "traefik", target: "xgboost", weight: 1.0 },
        { source: "traefik", target: "syslog", weight: 1.0 },
        { source: "traefik", target: "data science", weight: 1.0 },
        { source: "traefik", target: "ip routing", weight: 1.0 },
        { source: "traefik", target: "public cloud", weight: 1.0 },
        { source: "traefik", target: "user story", weight: 1.0 },
        { source: "traefik", target: "machine learning", weight: 1.0 },
        { source: "traefik", target: "cloud infrastructure", weight: 1.0 },
        { source: "traefik", target: "time series", weight: 1.0 },
        { source: "traefik", target: "object storage", weight: 1.0 },
        { source: "traefik", target: "docker container", weight: 1.0 },
        { source: "traefik", target: "pytorch", weight: 1.0 },
        { source: "traefik", target: "routing protocols", weight: 1.0 },
        { source: "traefik", target: "terraform", weight: 1.0 },
        { source: "traefik", target: "api gateway", weight: 1.0 },
        { source: "traefik", target: "vm", weight: 1.0 },
        { source: "traefik", target: "deep learning", weight: 1.0 },
        { source: "traefik", target: "jupyter", weight: 1.0 },
        { source: "traefik", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 149,
    twins: {
      prometheus: 0.04605074000602087,
      yaml: 0.04605074000602087,
      gitlab: 0.04605074000602087,
      python: 0.04605074000602087,
      nginx: 0.04605074000602087
    }
  },
  "docker swarm": {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "docker swarm" }
      ],
      links: [
        { source: "docker swarm", target: "docker", weight: 1.0 },
        { source: "docker swarm", target: "kubernetes", weight: 1.0 },
        { source: "docker swarm", target: "nginx", weight: 1.0 },
        { source: "docker swarm", target: "python", weight: 1.0 },
        { source: "docker swarm", target: "openapi", weight: 1.0 },
        { source: "docker swarm", target: "scripting", weight: 1.0 },
        { source: "docker swarm", target: "gitlab", weight: 1.0 },
        { source: "docker swarm", target: "pilotage", weight: 1.0 },
        { source: "docker swarm", target: "kapacitor", weight: 1.0 },
        { source: "docker swarm", target: "influxdb", weight: 1.0 },
        { source: "docker swarm", target: "telegraf", weight: 1.0 },
        { source: "docker swarm", target: "traefik", weight: 1.0 },
        { source: "docker swarm", target: "yaml", weight: 1.0 },
        { source: "docker swarm", target: "prometheus", weight: 1.0 },
        { source: "docker swarm", target: "go", weight: 1.0 },
        { source: "docker swarm", target: "postgresql", weight: 1.0 },
        { source: "docker swarm", target: "grafana", weight: 1.0 },
        { source: "docker swarm", target: "templates", weight: 1.0 },
        { source: "docker swarm", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 148,
    twins: {
      markdown: 0.05263157894736841,
      templates: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841
    }
  },
  yaml: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "openapi" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "scripting" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "yaml" }
      ],
      links: [
        { source: "yaml", target: "scrum", weight: 1.0 },
        { source: "yaml", target: "docker", weight: 2.0 },
        { source: "yaml", target: "kubernetes", weight: 2.0 },
        { source: "yaml", target: "nginx", weight: 2.0 },
        { source: "yaml", target: "git", weight: 1.0 },
        { source: "yaml", target: "linux", weight: 1.0 },
        { source: "yaml", target: "python", weight: 2.0 },
        { source: "yaml", target: "flask", weight: 1.0 },
        { source: "yaml", target: "json", weight: 1.0 },
        { source: "yaml", target: "openapi", weight: 1.0 },
        { source: "yaml", target: "devops", weight: 1.0 },
        { source: "yaml", target: "mise en place", weight: 1.0 },
        { source: "yaml", target: "scripting", weight: 1.0 },
        { source: "yaml", target: "front end", weight: 1.0 },
        { source: "yaml", target: "gitlab", weight: 2.0 },
        { source: "yaml", target: "scala", weight: 1.0 },
        { source: "yaml", target: "pilotage", weight: 1.0 },
        { source: "yaml", target: "kapacitor", weight: 1.0 },
        { source: "yaml", target: "influxdb", weight: 1.0 },
        { source: "yaml", target: "telegraf", weight: 1.0 },
        { source: "yaml", target: "traefik", weight: 2.0 },
        { source: "yaml", target: "docker swarm", weight: 1.0 },
        { source: "yaml", target: "prometheus", weight: 2.0 },
        { source: "yaml", target: "go", weight: 1.0 },
        { source: "yaml", target: "postgresql", weight: 1.0 },
        { source: "yaml", target: "grafana", weight: 1.0 },
        { source: "yaml", target: "templates", weight: 1.0 },
        { source: "yaml", target: "markdown", weight: 1.0 },
        { source: "yaml", target: "xgboost", weight: 1.0 },
        { source: "yaml", target: "syslog", weight: 1.0 },
        { source: "yaml", target: "data science", weight: 1.0 },
        { source: "yaml", target: "ip routing", weight: 1.0 },
        { source: "yaml", target: "public cloud", weight: 1.0 },
        { source: "yaml", target: "user story", weight: 1.0 },
        { source: "yaml", target: "machine learning", weight: 1.0 },
        { source: "yaml", target: "cloud infrastructure", weight: 1.0 },
        { source: "yaml", target: "time series", weight: 1.0 },
        { source: "yaml", target: "object storage", weight: 1.0 },
        { source: "yaml", target: "docker container", weight: 1.0 },
        { source: "yaml", target: "pytorch", weight: 1.0 },
        { source: "yaml", target: "routing protocols", weight: 1.0 },
        { source: "yaml", target: "terraform", weight: 1.0 },
        { source: "yaml", target: "api gateway", weight: 1.0 },
        { source: "yaml", target: "vm", weight: 1.0 },
        { source: "yaml", target: "deep learning", weight: 1.0 },
        { source: "yaml", target: "jupyter", weight: 1.0 },
        { source: "yaml", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 147,
    twins: {
      prometheus: 0.04605074000602087,
      traefik: 0.04605074000602087,
      gitlab: 0.04605074000602087,
      python: 0.04605074000602087,
      nginx: 0.04605074000602087
    }
  },
  prometheus: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "openapi" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "scripting" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "machine learning" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "deep learning" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "prometheus" }
      ],
      links: [
        { source: "prometheus", target: "scrum", weight: 1.0 },
        { source: "prometheus", target: "docker", weight: 2.0 },
        { source: "prometheus", target: "kubernetes", weight: 2.0 },
        { source: "prometheus", target: "nginx", weight: 2.0 },
        { source: "prometheus", target: "git", weight: 1.0 },
        { source: "prometheus", target: "linux", weight: 1.0 },
        { source: "prometheus", target: "python", weight: 2.0 },
        { source: "prometheus", target: "flask", weight: 1.0 },
        { source: "prometheus", target: "json", weight: 1.0 },
        { source: "prometheus", target: "openapi", weight: 1.0 },
        { source: "prometheus", target: "devops", weight: 1.0 },
        { source: "prometheus", target: "mise en place", weight: 1.0 },
        { source: "prometheus", target: "scripting", weight: 1.0 },
        { source: "prometheus", target: "front end", weight: 1.0 },
        { source: "prometheus", target: "gitlab", weight: 2.0 },
        { source: "prometheus", target: "scala", weight: 1.0 },
        { source: "prometheus", target: "pilotage", weight: 1.0 },
        { source: "prometheus", target: "kapacitor", weight: 1.0 },
        { source: "prometheus", target: "influxdb", weight: 1.0 },
        { source: "prometheus", target: "telegraf", weight: 1.0 },
        { source: "prometheus", target: "traefik", weight: 2.0 },
        { source: "prometheus", target: "docker swarm", weight: 1.0 },
        { source: "prometheus", target: "yaml", weight: 2.0 },
        { source: "prometheus", target: "go", weight: 1.0 },
        { source: "prometheus", target: "postgresql", weight: 1.0 },
        { source: "prometheus", target: "grafana", weight: 1.0 },
        { source: "prometheus", target: "templates", weight: 1.0 },
        { source: "prometheus", target: "markdown", weight: 1.0 },
        { source: "prometheus", target: "xgboost", weight: 1.0 },
        { source: "prometheus", target: "syslog", weight: 1.0 },
        { source: "prometheus", target: "data science", weight: 1.0 },
        { source: "prometheus", target: "ip routing", weight: 1.0 },
        { source: "prometheus", target: "public cloud", weight: 1.0 },
        { source: "prometheus", target: "user story", weight: 1.0 },
        { source: "prometheus", target: "machine learning", weight: 1.0 },
        { source: "prometheus", target: "cloud infrastructure", weight: 1.0 },
        { source: "prometheus", target: "time series", weight: 1.0 },
        { source: "prometheus", target: "object storage", weight: 1.0 },
        { source: "prometheus", target: "docker container", weight: 1.0 },
        { source: "prometheus", target: "pytorch", weight: 1.0 },
        { source: "prometheus", target: "routing protocols", weight: 1.0 },
        { source: "prometheus", target: "terraform", weight: 1.0 },
        { source: "prometheus", target: "api gateway", weight: 1.0 },
        { source: "prometheus", target: "vm", weight: 1.0 },
        { source: "prometheus", target: "deep learning", weight: 1.0 },
        { source: "prometheus", target: "jupyter", weight: 1.0 },
        { source: "prometheus", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 146,
    twins: {
      yaml: 0.04605074000602087,
      traefik: 0.04605074000602087,
      gitlab: 0.04605074000602087,
      python: 0.04605074000602087,
      nginx: 0.04605074000602087
    }
  },
  go: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "go" }
      ],
      links: [
        { source: "go", target: "docker", weight: 1.0 },
        { source: "go", target: "kubernetes", weight: 1.0 },
        { source: "go", target: "nginx", weight: 1.0 },
        { source: "go", target: "python", weight: 1.0 },
        { source: "go", target: "openapi", weight: 1.0 },
        { source: "go", target: "scripting", weight: 1.0 },
        { source: "go", target: "gitlab", weight: 1.0 },
        { source: "go", target: "pilotage", weight: 1.0 },
        { source: "go", target: "kapacitor", weight: 1.0 },
        { source: "go", target: "influxdb", weight: 1.0 },
        { source: "go", target: "telegraf", weight: 1.0 },
        { source: "go", target: "traefik", weight: 1.0 },
        { source: "go", target: "docker swarm", weight: 1.0 },
        { source: "go", target: "yaml", weight: 1.0 },
        { source: "go", target: "prometheus", weight: 1.0 },
        { source: "go", target: "postgresql", weight: 1.0 },
        { source: "go", target: "grafana", weight: 1.0 },
        { source: "go", target: "templates", weight: 1.0 },
        { source: "go", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 145,
    twins: {
      markdown: 0.05263157894736841,
      templates: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      prometheus: 0.05263157894736841
    }
  },
  postgresql: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "c" },
        { id: "javascript" },
        { id: "openapi" },
        { id: "flux" },
        { id: "hibernate" },
        { id: "soapui" },
        { id: "c++" },
        { id: "html5" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "mongodb" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" },
        { id: "vertica" },
        { id: "postman" },
        { id: "bootstrap" },
        { id: "source" },
        { id: "user story" },
        { id: "chef" },
        { id: "vue.js" },
        { id: "postgresql" }
      ],
      links: [
        { source: "postgresql", target: "scrum", weight: 1.0 },
        { source: "postgresql", target: "java", weight: 3.0 },
        { source: "postgresql", target: "docker", weight: 3.0 },
        { source: "postgresql", target: "kubernetes", weight: 2.0 },
        { source: "postgresql", target: "jenkins", weight: 1.0 },
        { source: "postgresql", target: "nginx", weight: 2.0 },
        { source: "postgresql", target: "git", weight: 3.0 },
        { source: "postgresql", target: "mysql", weight: 1.0 },
        { source: "postgresql", target: "linux", weight: 2.0 },
        { source: "postgresql", target: "sql", weight: 3.0 },
        { source: "postgresql", target: "unix", weight: 1.0 },
        { source: "postgresql", target: "python", weight: 2.0 },
        { source: "postgresql", target: "angular", weight: 1.0 },
        { source: "postgresql", target: "flask", weight: 1.0 },
        { source: "postgresql", target: "c", weight: 1.0 },
        { source: "postgresql", target: "javascript", weight: 3.0 },
        { source: "postgresql", target: "openapi", weight: 1.0 },
        { source: "postgresql", target: "flux", weight: 2.0 },
        { source: "postgresql", target: "hibernate", weight: 1.0 },
        { source: "postgresql", target: "soapui", weight: 1.0 },
        { source: "postgresql", target: "c++", weight: 1.0 },
        { source: "postgresql", target: "html5", weight: 1.0 },
        { source: "postgresql", target: "scripting", weight: 1.0 },
        { source: "postgresql", target: "gitlab", weight: 3.0 },
        { source: "postgresql", target: "pilotage", weight: 1.0 },
        { source: "postgresql", target: "mongodb", weight: 1.0 },
        { source: "postgresql", target: "kapacitor", weight: 1.0 },
        { source: "postgresql", target: "influxdb", weight: 1.0 },
        { source: "postgresql", target: "telegraf", weight: 1.0 },
        { source: "postgresql", target: "traefik", weight: 1.0 },
        { source: "postgresql", target: "docker swarm", weight: 1.0 },
        { source: "postgresql", target: "yaml", weight: 1.0 },
        { source: "postgresql", target: "prometheus", weight: 1.0 },
        { source: "postgresql", target: "go", weight: 1.0 },
        { source: "postgresql", target: "grafana", weight: 1.0 },
        { source: "postgresql", target: "templates", weight: 1.0 },
        { source: "postgresql", target: "markdown", weight: 1.0 },
        { source: "postgresql", target: "vertica", weight: 1.0 },
        { source: "postgresql", target: "postman", weight: 1.0 },
        { source: "postgresql", target: "bootstrap", weight: 1.0 },
        { source: "postgresql", target: "source", weight: 1.0 },
        { source: "postgresql", target: "user story", weight: 1.0 },
        { source: "postgresql", target: "chef", weight: 1.0 },
        { source: "postgresql", target: "vue.js", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2, "De 1 ?? 3 ans": 2, D??butant: 1 },
      contract_type: { CDI: 5 },
      study_lvl: { "Bac +5 et plus": 2, "Bac +2": 1, "Bac +3": 2 },
      count_job: 5
    },
    priority: 144,
    twins: {
      gitlab: 0.08126472913837143,
      javascript: 0.08126472913837143,
      sql: 0.08126472913837143,
      git: 0.08126472913837143,
      docker: 0.08126472913837143
    }
  },
  grafana: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "templates" },
        { id: "markdown" },
        { id: "grafana" }
      ],
      links: [
        { source: "grafana", target: "docker", weight: 1.0 },
        { source: "grafana", target: "kubernetes", weight: 1.0 },
        { source: "grafana", target: "nginx", weight: 1.0 },
        { source: "grafana", target: "python", weight: 1.0 },
        { source: "grafana", target: "openapi", weight: 1.0 },
        { source: "grafana", target: "scripting", weight: 1.0 },
        { source: "grafana", target: "gitlab", weight: 1.0 },
        { source: "grafana", target: "pilotage", weight: 1.0 },
        { source: "grafana", target: "kapacitor", weight: 1.0 },
        { source: "grafana", target: "influxdb", weight: 1.0 },
        { source: "grafana", target: "telegraf", weight: 1.0 },
        { source: "grafana", target: "traefik", weight: 1.0 },
        { source: "grafana", target: "docker swarm", weight: 1.0 },
        { source: "grafana", target: "yaml", weight: 1.0 },
        { source: "grafana", target: "prometheus", weight: 1.0 },
        { source: "grafana", target: "go", weight: 1.0 },
        { source: "grafana", target: "postgresql", weight: 1.0 },
        { source: "grafana", target: "templates", weight: 1.0 },
        { source: "grafana", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 143,
    twins: {
      markdown: 0.05263157894736841,
      templates: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841,
      prometheus: 0.05263157894736841
    }
  },
  templates: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "markdown" },
        { id: "templates" }
      ],
      links: [
        { source: "templates", target: "docker", weight: 1.0 },
        { source: "templates", target: "kubernetes", weight: 1.0 },
        { source: "templates", target: "nginx", weight: 1.0 },
        { source: "templates", target: "python", weight: 1.0 },
        { source: "templates", target: "openapi", weight: 1.0 },
        { source: "templates", target: "scripting", weight: 1.0 },
        { source: "templates", target: "gitlab", weight: 1.0 },
        { source: "templates", target: "pilotage", weight: 1.0 },
        { source: "templates", target: "kapacitor", weight: 1.0 },
        { source: "templates", target: "influxdb", weight: 1.0 },
        { source: "templates", target: "telegraf", weight: 1.0 },
        { source: "templates", target: "traefik", weight: 1.0 },
        { source: "templates", target: "docker swarm", weight: 1.0 },
        { source: "templates", target: "yaml", weight: 1.0 },
        { source: "templates", target: "prometheus", weight: 1.0 },
        { source: "templates", target: "go", weight: 1.0 },
        { source: "templates", target: "postgresql", weight: 1.0 },
        { source: "templates", target: "grafana", weight: 1.0 },
        { source: "templates", target: "markdown", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 142,
    twins: {
      markdown: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841,
      prometheus: 0.05263157894736841
    }
  },
  markdown: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "python" },
        { id: "openapi" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "pilotage" },
        { id: "kapacitor" },
        { id: "influxdb" },
        { id: "telegraf" },
        { id: "traefik" },
        { id: "docker swarm" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "go" },
        { id: "postgresql" },
        { id: "grafana" },
        { id: "templates" },
        { id: "markdown" }
      ],
      links: [
        { source: "markdown", target: "docker", weight: 1.0 },
        { source: "markdown", target: "kubernetes", weight: 1.0 },
        { source: "markdown", target: "nginx", weight: 1.0 },
        { source: "markdown", target: "python", weight: 1.0 },
        { source: "markdown", target: "openapi", weight: 1.0 },
        { source: "markdown", target: "scripting", weight: 1.0 },
        { source: "markdown", target: "gitlab", weight: 1.0 },
        { source: "markdown", target: "pilotage", weight: 1.0 },
        { source: "markdown", target: "kapacitor", weight: 1.0 },
        { source: "markdown", target: "influxdb", weight: 1.0 },
        { source: "markdown", target: "telegraf", weight: 1.0 },
        { source: "markdown", target: "traefik", weight: 1.0 },
        { source: "markdown", target: "docker swarm", weight: 1.0 },
        { source: "markdown", target: "yaml", weight: 1.0 },
        { source: "markdown", target: "prometheus", weight: 1.0 },
        { source: "markdown", target: "go", weight: 1.0 },
        { source: "markdown", target: "postgresql", weight: 1.0 },
        { source: "markdown", target: "grafana", weight: 1.0 },
        { source: "markdown", target: "templates", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 141,
    twins: {
      templates: 0.05263157894736841,
      grafana: 0.05263157894736841,
      postgresql: 0.05263157894736841,
      go: 0.05263157894736841,
      prometheus: 0.05263157894736841
    }
  },
  bootstrap: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "flask" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "json" },
        { id: "devops" },
        { id: "hibernate" },
        { id: "sonar" },
        { id: "soapui" },
        { id: "html5" },
        { id: "back end" },
        { id: "front end" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "spring boot" },
        { id: "postgresql" },
        { id: "kotlin" },
        { id: "vertica" },
        { id: "postman" },
        { id: "jhipster" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "xamarin" },
        { id: "bootstrap" }
      ],
      links: [
        { source: "bootstrap", target: "scrum", weight: 2.0 },
        { source: "bootstrap", target: "android", weight: 1.0 },
        { source: "bootstrap", target: "java", weight: 3.0 },
        { source: "bootstrap", target: "docker", weight: 4.0 },
        { source: "bootstrap", target: "ansible", weight: 2.0 },
        { source: "bootstrap", target: "jenkins", weight: 2.0 },
        { source: "bootstrap", target: "nginx", weight: 1.0 },
        { source: "bootstrap", target: "git", weight: 3.0 },
        { source: "bootstrap", target: "mysql", weight: 2.0 },
        { source: "bootstrap", target: "linux", weight: 2.0 },
        { source: "bootstrap", target: "sql", weight: 2.0 },
        { source: "bootstrap", target: "angular", weight: 2.0 },
        { source: "bootstrap", target: "flask", weight: 1.0 },
        { source: "bootstrap", target: "typescript", weight: 1.0 },
        { source: "bootstrap", target: "javascript", weight: 2.0 },
        { source: "bootstrap", target: "json", weight: 1.0 },
        { source: "bootstrap", target: "devops", weight: 2.0 },
        { source: "bootstrap", target: "hibernate", weight: 3.0 },
        { source: "bootstrap", target: "sonar", weight: 1.0 },
        { source: "bootstrap", target: "soapui", weight: 1.0 },
        { source: "bootstrap", target: "html5", weight: 3.0 },
        { source: "bootstrap", target: "back end", weight: 1.0 },
        { source: "bootstrap", target: "front end", weight: 1.0 },
        { source: "bootstrap", target: "mongodb", weight: 1.0 },
        { source: "bootstrap", target: "java 8", weight: 1.0 },
        { source: "bootstrap", target: "spring boot", weight: 1.0 },
        { source: "bootstrap", target: "postgresql", weight: 1.0 },
        { source: "bootstrap", target: "kotlin", weight: 1.0 },
        { source: "bootstrap", target: "vertica", weight: 1.0 },
        { source: "bootstrap", target: "postman", weight: 1.0 },
        { source: "bootstrap", target: "jhipster", weight: 1.0 },
        { source: "bootstrap", target: "eclipse", weight: 1.0 },
        { source: "bootstrap", target: "sonarqube", weight: 1.0 },
        { source: "bootstrap", target: "xamarin", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3, "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 4 },
      study_lvl: { "Bac +5 et plus": 1, "Bac +2": 1, "Bac +3": 1, "Bac +4": 1 },
      count_job: 4
    },
    priority: 140,
    twins: {
      docker: 0.2134345670594921,
      html5: 0.07851818925651469,
      hibernate: 0.07851818925651469,
      git: 0.07851818925651469,
      java: 0.07851818925651469
    }
  },
  kotlin: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "git" },
        { id: "angular" },
        { id: "hibernate" },
        { id: "html5" },
        { id: "java 8" },
        { id: "bootstrap" },
        { id: "kotlin" }
      ],
      links: [
        { source: "kotlin", target: "scrum", weight: 1.0 },
        { source: "kotlin", target: "java", weight: 1.0 },
        { source: "kotlin", target: "docker", weight: 1.0 },
        { source: "kotlin", target: "git", weight: 1.0 },
        { source: "kotlin", target: "angular", weight: 1.0 },
        { source: "kotlin", target: "hibernate", weight: 1.0 },
        { source: "kotlin", target: "html5", weight: 1.0 },
        { source: "kotlin", target: "java 8", weight: 1.0 },
        { source: "kotlin", target: "bootstrap", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 139,
    twins: {
      bootstrap: 0.11111111111111112,
      "java 8": 0.11111111111111112,
      html5: 0.11111111111111112,
      hibernate: 0.11111111111111112,
      angular: 0.11111111111111112
    }
  },
  veeam: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "linux" },
        { id: "unix" },
        { id: "active directory" },
        { id: "scripting" },
        { id: "centos" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "clonezilla" },
        { id: "exim" },
        { id: "veeam" }
      ],
      links: [
        { source: "veeam", target: "nagios", weight: 1.0 },
        { source: "veeam", target: "linux", weight: 1.0 },
        { source: "veeam", target: "unix", weight: 1.0 },
        { source: "veeam", target: "active directory", weight: 1.0 },
        { source: "veeam", target: "scripting", weight: 1.0 },
        { source: "veeam", target: "centos", weight: 1.0 },
        { source: "veeam", target: "wireshark", weight: 1.0 },
        { source: "veeam", target: "qmail", weight: 1.0 },
        { source: "veeam", target: "hyper-v", weight: 1.0 },
        { source: "veeam", target: "smtp", weight: 1.0 },
        { source: "veeam", target: "cacti", weight: 1.0 },
        { source: "veeam", target: "ghost", weight: 1.0 },
        { source: "veeam", target: "postfix", weight: 1.0 },
        { source: "veeam", target: "lunix", weight: 1.0 },
        { source: "veeam", target: "squid", weight: 1.0 },
        { source: "veeam", target: "clonezilla", weight: 1.0 },
        { source: "veeam", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 138,
    twins: {
      exim: 0.058823529411764705,
      clonezilla: 0.058823529411764705,
      squid: 0.058823529411764705,
      lunix: 0.058823529411764705,
      postfix: 0.058823529411764705
    }
  },
  centos: {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "active directory" },
        { id: "veeam" },
        { id: "centos" }
      ],
      links: [
        { source: "centos", target: "linux", weight: 1.0 },
        { source: "centos", target: "active directory", weight: 1.0 },
        { source: "centos", target: "veeam", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 137,
    twins: {
      veeam: 0.3333333333333333,
      "active directory": 0.3333333333333333,
      linux: 0.3333333333333333
    }
  },
  perl: {
    neiGraph: {
      nodes: [
        { id: "git" },
        { id: "mysql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "javascript" },
        { id: "php" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "web services" },
        { id: "jquery" },
        { id: "scripting" },
        { id: "gitlab" },
        { id: "sas" },
        { id: "hosting" },
        { id: "installation" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "perl" }
      ],
      links: [
        { source: "perl", target: "git", weight: 1.0 },
        { source: "perl", target: "mysql", weight: 1.0 },
        { source: "perl", target: "unix", weight: 3.0 },
        { source: "perl", target: "python", weight: 1.0 },
        { source: "perl", target: "angular", weight: 1.0 },
        { source: "perl", target: "javascript", weight: 1.0 },
        { source: "perl", target: "php", weight: 1.0 },
        { source: "perl", target: "r", weight: 1.0 },
        { source: "perl", target: "automation", weight: 1.0 },
        { source: "perl", target: "nice", weight: 1.0 },
        { source: "perl", target: "web services", weight: 1.0 },
        { source: "perl", target: "jquery", weight: 1.0 },
        { source: "perl", target: "scripting", weight: 4.0 },
        { source: "perl", target: "gitlab", weight: 1.0 },
        { source: "perl", target: "sas", weight: 1.0 },
        { source: "perl", target: "hosting", weight: 1.0 },
        { source: "perl", target: "installation", weight: 1.0 },
        { source: "perl", target: "sap hana", weight: 1.0 },
        { source: "perl", target: "qlik sense", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3, "De 5 ?? 10 ans": 1, D??butant: 1 },
      contract_type: { CDI: 3, Freelance: 1, Stage: 1 },
      study_lvl: { "Bac +5 et plus": 4, "Bac +4": 1 },
      count_job: 5
    },
    priority: 136,
    twins: {
      scripting: 0.4516182287086614,
      unix: 0.166141061600179,
      "qlik sense": 0.02248474762889174,
      "sap hana": 0.02248474762889174,
      installation: 0.02248474762889174
    }
  },
  openshift: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "flux" },
        { id: "microservices" },
        { id: "devsecops" },
        { id: "openshift" }
      ],
      links: [
        { source: "openshift", target: "docker", weight: 1.0 },
        { source: "openshift", target: "kubernetes", weight: 1.0 },
        { source: "openshift", target: "flux", weight: 1.0 },
        { source: "openshift", target: "microservices", weight: 1.0 },
        { source: "openshift", target: "devsecops", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 135,
    twins: {
      devsecops: 0.2,
      microservices: 0.2,
      flux: 0.2,
      kubernetes: 0.2,
      docker: 0.2
    }
  },
  devsecops: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "kubernetes" },
        { id: "flux" },
        { id: "microservices" },
        { id: "openshift" },
        { id: "devsecops" }
      ],
      links: [
        { source: "devsecops", target: "docker", weight: 1.0 },
        { source: "devsecops", target: "kubernetes", weight: 1.0 },
        { source: "devsecops", target: "flux", weight: 1.0 },
        { source: "devsecops", target: "microservices", weight: 1.0 },
        { source: "devsecops", target: "openshift", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 134,
    twins: {
      openshift: 0.2,
      microservices: 0.2,
      flux: 0.2,
      kubernetes: 0.2,
      docker: 0.2
    }
  },
  "machine learning": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "nosql" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "mongodb" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "deep learning" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "machine learning" }
      ],
      links: [
        { source: "machine learning", target: "scrum", weight: 2.0 },
        { source: "machine learning", target: "docker", weight: 1.0 },
        { source: "machine learning", target: "kubernetes", weight: 1.0 },
        { source: "machine learning", target: "nginx", weight: 1.0 },
        { source: "machine learning", target: "git", weight: 1.0 },
        { source: "machine learning", target: "linux", weight: 1.0 },
        { source: "machine learning", target: "sql", weight: 1.0 },
        { source: "machine learning", target: "python", weight: 1.0 },
        { source: "machine learning", target: "flask", weight: 1.0 },
        { source: "machine learning", target: "json", weight: 1.0 },
        { source: "machine learning", target: "nosql", weight: 1.0 },
        { source: "machine learning", target: "devops", weight: 1.0 },
        { source: "machine learning", target: "mise en place", weight: 1.0 },
        { source: "machine learning", target: "front end", weight: 1.0 },
        { source: "machine learning", target: "gitlab", weight: 1.0 },
        { source: "machine learning", target: "scala", weight: 2.0 },
        { source: "machine learning", target: "mongodb", weight: 1.0 },
        { source: "machine learning", target: "traefik", weight: 1.0 },
        { source: "machine learning", target: "yaml", weight: 1.0 },
        { source: "machine learning", target: "prometheus", weight: 1.0 },
        { source: "machine learning", target: "deep learning", weight: 2.0 },
        { source: "machine learning", target: "xgboost", weight: 1.0 },
        { source: "machine learning", target: "syslog", weight: 1.0 },
        { source: "machine learning", target: "data science", weight: 1.0 },
        { source: "machine learning", target: "ip routing", weight: 1.0 },
        { source: "machine learning", target: "public cloud", weight: 1.0 },
        { source: "machine learning", target: "user story", weight: 1.0 },
        {
          source: "machine learning",
          target: "cloud infrastructure",
          weight: 1.0
        },
        { source: "machine learning", target: "time series", weight: 1.0 },
        { source: "machine learning", target: "object storage", weight: 1.0 },
        { source: "machine learning", target: "docker container", weight: 1.0 },
        { source: "machine learning", target: "pytorch", weight: 1.0 },
        {
          source: "machine learning",
          target: "routing protocols",
          weight: 1.0
        },
        { source: "machine learning", target: "terraform", weight: 1.0 },
        { source: "machine learning", target: "api gateway", weight: 1.0 },
        { source: "machine learning", target: "vm", weight: 1.0 },
        { source: "machine learning", target: "jupyter", weight: 1.0 },
        { source: "machine learning", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1, CDI: 1 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 133,
    twins: {
      "deep learning": 0.06298902934040457,
      scala: 0.06298902934040457,
      scrum: 0.06298902934040457,
      telemetry: 0.023172368913679613,
      jupyter: 0.023172368913679613
    }
  },
  "deep learning": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "nosql" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "mongodb" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "data science" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "deep learning" }
      ],
      links: [
        { source: "deep learning", target: "scrum", weight: 2.0 },
        { source: "deep learning", target: "docker", weight: 1.0 },
        { source: "deep learning", target: "kubernetes", weight: 1.0 },
        { source: "deep learning", target: "nginx", weight: 1.0 },
        { source: "deep learning", target: "git", weight: 1.0 },
        { source: "deep learning", target: "linux", weight: 1.0 },
        { source: "deep learning", target: "sql", weight: 1.0 },
        { source: "deep learning", target: "python", weight: 1.0 },
        { source: "deep learning", target: "flask", weight: 1.0 },
        { source: "deep learning", target: "json", weight: 1.0 },
        { source: "deep learning", target: "nosql", weight: 1.0 },
        { source: "deep learning", target: "devops", weight: 1.0 },
        { source: "deep learning", target: "mise en place", weight: 1.0 },
        { source: "deep learning", target: "front end", weight: 1.0 },
        { source: "deep learning", target: "gitlab", weight: 1.0 },
        { source: "deep learning", target: "scala", weight: 2.0 },
        { source: "deep learning", target: "mongodb", weight: 1.0 },
        { source: "deep learning", target: "traefik", weight: 1.0 },
        { source: "deep learning", target: "yaml", weight: 1.0 },
        { source: "deep learning", target: "prometheus", weight: 1.0 },
        { source: "deep learning", target: "machine learning", weight: 2.0 },
        { source: "deep learning", target: "xgboost", weight: 1.0 },
        { source: "deep learning", target: "syslog", weight: 1.0 },
        { source: "deep learning", target: "data science", weight: 1.0 },
        { source: "deep learning", target: "ip routing", weight: 1.0 },
        { source: "deep learning", target: "public cloud", weight: 1.0 },
        { source: "deep learning", target: "user story", weight: 1.0 },
        {
          source: "deep learning",
          target: "cloud infrastructure",
          weight: 1.0
        },
        { source: "deep learning", target: "time series", weight: 1.0 },
        { source: "deep learning", target: "object storage", weight: 1.0 },
        { source: "deep learning", target: "docker container", weight: 1.0 },
        { source: "deep learning", target: "pytorch", weight: 1.0 },
        { source: "deep learning", target: "routing protocols", weight: 1.0 },
        { source: "deep learning", target: "terraform", weight: 1.0 },
        { source: "deep learning", target: "api gateway", weight: 1.0 },
        { source: "deep learning", target: "vm", weight: 1.0 },
        { source: "deep learning", target: "jupyter", weight: 1.0 },
        { source: "deep learning", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1, CDI: 1 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 132,
    twins: {
      "machine learning": 0.06298902934040457,
      scala: 0.06298902934040457,
      scrum: 0.06298902934040457,
      telemetry: 0.023172368913679613,
      jupyter: 0.023172368913679613
    }
  },
  powerapps: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "sql" },
        { id: "azure blob storage" },
        { id: "powerapps" }
      ],
      links: [
        { source: "powerapps", target: "scrum", weight: 1.0 },
        { source: "powerapps", target: "sql", weight: 1.0 },
        { source: "powerapps", target: "azure blob storage", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 131,
    twins: {
      "azure blob storage": 0.3333333333333333,
      sql: 0.3333333333333333,
      scrum: 0.3333333333333333
    }
  },
  "data science": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "business intelligence" },
        { id: "power bi" },
        { id: "flux" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "user story" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "data science" }
      ],
      links: [
        { source: "data science", target: "scrum", weight: 1.0 },
        { source: "data science", target: "docker", weight: 1.0 },
        { source: "data science", target: "kubernetes", weight: 1.0 },
        { source: "data science", target: "nginx", weight: 1.0 },
        { source: "data science", target: "git", weight: 1.0 },
        { source: "data science", target: "linux", weight: 1.0 },
        { source: "data science", target: "python", weight: 1.0 },
        { source: "data science", target: "flask", weight: 1.0 },
        { source: "data science", target: "json", weight: 1.0 },
        { source: "data science", target: "devops", weight: 1.0 },
        { source: "data science", target: "mise en place", weight: 1.0 },
        {
          source: "data science",
          target: "business intelligence",
          weight: 1.0
        },
        { source: "data science", target: "power bi", weight: 1.0 },
        { source: "data science", target: "flux", weight: 1.0 },
        { source: "data science", target: "front end", weight: 1.0 },
        { source: "data science", target: "gitlab", weight: 1.0 },
        { source: "data science", target: "scala", weight: 1.0 },
        { source: "data science", target: "traefik", weight: 1.0 },
        { source: "data science", target: "yaml", weight: 1.0 },
        { source: "data science", target: "prometheus", weight: 1.0 },
        { source: "data science", target: "machine learning", weight: 1.0 },
        { source: "data science", target: "deep learning", weight: 1.0 },
        { source: "data science", target: "xgboost", weight: 1.0 },
        { source: "data science", target: "syslog", weight: 1.0 },
        { source: "data science", target: "ip routing", weight: 1.0 },
        { source: "data science", target: "public cloud", weight: 1.0 },
        { source: "data science", target: "user story", weight: 1.0 },
        { source: "data science", target: "cloud infrastructure", weight: 1.0 },
        { source: "data science", target: "time series", weight: 1.0 },
        { source: "data science", target: "object storage", weight: 1.0 },
        { source: "data science", target: "docker container", weight: 1.0 },
        { source: "data science", target: "pytorch", weight: 1.0 },
        { source: "data science", target: "routing protocols", weight: 1.0 },
        { source: "data science", target: "terraform", weight: 1.0 },
        { source: "data science", target: "api gateway", weight: 1.0 },
        { source: "data science", target: "vm", weight: 1.0 },
        { source: "data science", target: "jupyter", weight: 1.0 },
        { source: "data science", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 3 },
      count_job: 3
    },
    priority: 130,
    twins: {
      telemetry: 0.026315789473684216,
      jupyter: 0.026315789473684216,
      vm: 0.026315789473684216,
      "api gateway": 0.026315789473684216,
      terraform: 0.026315789473684216
    }
  },
  vertica: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "flask" },
        { id: "javascript" },
        { id: "soapui" },
        { id: "html5" },
        { id: "mongodb" },
        { id: "postgresql" },
        { id: "bootstrap" },
        { id: "postman" },
        { id: "vertica" }
      ],
      links: [
        { source: "vertica", target: "docker", weight: 1.0 },
        { source: "vertica", target: "nginx", weight: 1.0 },
        { source: "vertica", target: "git", weight: 1.0 },
        { source: "vertica", target: "mysql", weight: 1.0 },
        { source: "vertica", target: "linux", weight: 1.0 },
        { source: "vertica", target: "sql", weight: 1.0 },
        { source: "vertica", target: "flask", weight: 1.0 },
        { source: "vertica", target: "javascript", weight: 1.0 },
        { source: "vertica", target: "soapui", weight: 1.0 },
        { source: "vertica", target: "html5", weight: 1.0 },
        { source: "vertica", target: "mongodb", weight: 1.0 },
        { source: "vertica", target: "postgresql", weight: 1.0 },
        { source: "vertica", target: "bootstrap", weight: 1.0 },
        { source: "vertica", target: "postman", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +2": 1 },
      count_job: 1
    },
    priority: 129,
    twins: {
      postman: 0.07142857142857141,
      bootstrap: 0.07142857142857141,
      postgresql: 0.07142857142857141,
      mongodb: 0.07142857142857141,
      html5: 0.07142857142857141
    }
  },
  postman: {
    neiGraph: {
      nodes: [
        { id: "transformation" },
        { id: "scrum" },
        { id: "docker" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "flask" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "sonar" },
        { id: "jira" },
        { id: "soapui" },
        { id: "html5" },
        { id: "mongodb" },
        { id: "bitbucket" },
        { id: "jest" },
        { id: "postgresql" },
        { id: "bootstrap" },
        { id: "vertica" },
        { id: "postman" }
      ],
      links: [
        { source: "postman", target: "transformation", weight: 1.0 },
        { source: "postman", target: "scrum", weight: 1.0 },
        { source: "postman", target: "docker", weight: 1.0 },
        { source: "postman", target: "jenkins", weight: 1.0 },
        { source: "postman", target: "nginx", weight: 1.0 },
        { source: "postman", target: "git", weight: 2.0 },
        { source: "postman", target: "mysql", weight: 1.0 },
        { source: "postman", target: "linux", weight: 1.0 },
        { source: "postman", target: "sql", weight: 1.0 },
        { source: "postman", target: "flask", weight: 1.0 },
        { source: "postman", target: "typescript", weight: 1.0 },
        { source: "postman", target: "javascript", weight: 2.0 },
        { source: "postman", target: "sonar", weight: 1.0 },
        { source: "postman", target: "jira", weight: 1.0 },
        { source: "postman", target: "soapui", weight: 1.0 },
        { source: "postman", target: "html5", weight: 1.0 },
        { source: "postman", target: "mongodb", weight: 1.0 },
        { source: "postman", target: "bitbucket", weight: 1.0 },
        { source: "postman", target: "jest", weight: 1.0 },
        { source: "postman", target: "postgresql", weight: 1.0 },
        { source: "postman", target: "bootstrap", weight: 1.0 },
        { source: "postman", target: "vertica", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 1, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 1 },
      count_job: 2
    },
    priority: 128,
    twins: {
      javascript: 0.10686513575978815,
      git: 0.10686513575978815,
      vertica: 0.03931348642402118,
      bootstrap: 0.03931348642402118,
      postgresql: 0.03931348642402118
    }
  },
  hosting: {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "web services" },
        { id: "scripting" },
        { id: "sas" },
        { id: "perl" },
        { id: "installation" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "hosting" }
      ],
      links: [
        { source: "hosting", target: "python", weight: 1.0 },
        { source: "hosting", target: "r", weight: 1.0 },
        { source: "hosting", target: "automation", weight: 1.0 },
        { source: "hosting", target: "nice", weight: 1.0 },
        { source: "hosting", target: "web services", weight: 1.0 },
        { source: "hosting", target: "scripting", weight: 1.0 },
        { source: "hosting", target: "sas", weight: 1.0 },
        { source: "hosting", target: "perl", weight: 1.0 },
        { source: "hosting", target: "installation", weight: 1.0 },
        { source: "hosting", target: "sap hana", weight: 1.0 },
        { source: "hosting", target: "qlik sense", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 127,
    twins: {
      "qlik sense": 0.09090909090909091,
      "sap hana": 0.09090909090909091,
      installation: 0.09090909090909091,
      perl: 0.09090909090909091,
      sas: 0.09090909090909091
    }
  },
  installation: {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "python" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "web services" },
        { id: "scripting" },
        { id: "sas" },
        { id: "perl" },
        { id: "hosting" },
        { id: "sap hana" },
        { id: "qlik sense" },
        { id: "tcp/ip" },
        { id: "avaya" },
        { id: "session" },
        { id: "signaling" },
        { id: "trunking" },
        { id: "installation" }
      ],
      links: [
        { source: "installation", target: "linux", weight: 1.0 },
        { source: "installation", target: "python", weight: 1.0 },
        { source: "installation", target: "r", weight: 1.0 },
        { source: "installation", target: "automation", weight: 1.0 },
        { source: "installation", target: "nice", weight: 1.0 },
        { source: "installation", target: "web services", weight: 1.0 },
        { source: "installation", target: "scripting", weight: 1.0 },
        { source: "installation", target: "sas", weight: 1.0 },
        { source: "installation", target: "perl", weight: 1.0 },
        { source: "installation", target: "hosting", weight: 1.0 },
        { source: "installation", target: "sap hana", weight: 1.0 },
        { source: "installation", target: "qlik sense", weight: 1.0 },
        { source: "installation", target: "tcp/ip", weight: 1.0 },
        { source: "installation", target: "avaya", weight: 1.0 },
        { source: "installation", target: "session", weight: 1.0 },
        { source: "installation", target: "signaling", weight: 1.0 },
        { source: "installation", target: "trunking", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2, "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1, CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2, "Bac +2": 1 },
      count_job: 3
    },
    priority: 10,
    twins: {
      trunking: 0.058823529411764705,
      signaling: 0.058823529411764705,
      session: 0.058823529411764705,
      avaya: 0.058823529411764705,
      "tcp/ip": 0.058823529411764705
    }
  },
  "sap hana": {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "web services" },
        { id: "scripting" },
        { id: "sas" },
        { id: "perl" },
        { id: "hosting" },
        { id: "installation" },
        { id: "qlik sense" },
        { id: "sap hana" }
      ],
      links: [
        { source: "sap hana", target: "python", weight: 1.0 },
        { source: "sap hana", target: "r", weight: 1.0 },
        { source: "sap hana", target: "automation", weight: 1.0 },
        { source: "sap hana", target: "nice", weight: 1.0 },
        { source: "sap hana", target: "web services", weight: 1.0 },
        { source: "sap hana", target: "scripting", weight: 1.0 },
        { source: "sap hana", target: "sas", weight: 1.0 },
        { source: "sap hana", target: "perl", weight: 1.0 },
        { source: "sap hana", target: "hosting", weight: 1.0 },
        { source: "sap hana", target: "installation", weight: 1.0 },
        { source: "sap hana", target: "qlik sense", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 126,
    twins: {
      "qlik sense": 0.09090909090909091,
      installation: 0.09090909090909091,
      hosting: 0.09090909090909091,
      perl: 0.09090909090909091,
      sas: 0.09090909090909091
    }
  },
  "qlik sense": {
    neiGraph: {
      nodes: [
        { id: "python" },
        { id: "r" },
        { id: "automation" },
        { id: "nice" },
        { id: "web services" },
        { id: "scripting" },
        { id: "sas" },
        { id: "perl" },
        { id: "hosting" },
        { id: "installation" },
        { id: "sap hana" },
        { id: "qlik sense" }
      ],
      links: [
        { source: "qlik sense", target: "python", weight: 1.0 },
        { source: "qlik sense", target: "r", weight: 1.0 },
        { source: "qlik sense", target: "automation", weight: 1.0 },
        { source: "qlik sense", target: "nice", weight: 1.0 },
        { source: "qlik sense", target: "web services", weight: 1.0 },
        { source: "qlik sense", target: "scripting", weight: 1.0 },
        { source: "qlik sense", target: "sas", weight: 1.0 },
        { source: "qlik sense", target: "perl", weight: 1.0 },
        { source: "qlik sense", target: "hosting", weight: 1.0 },
        { source: "qlik sense", target: "installation", weight: 1.0 },
        { source: "qlik sense", target: "sap hana", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 125,
    twins: {
      "sap hana": 0.09090909090909091,
      installation: 0.09090909090909091,
      hosting: 0.09090909090909091,
      perl: 0.09090909090909091,
      sas: 0.09090909090909091
    }
  },
  tableau: {
    neiGraph: {
      nodes: [
        { id: "talend" },
        { id: "informatica" },
        { id: "qlikview" },
        { id: "tableau" }
      ],
      links: [
        { source: "tableau", target: "talend", weight: 1.0 },
        { source: "tableau", target: "informatica", weight: 1.0 },
        { source: "tableau", target: "qlikview", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 124,
    twins: {
      qlikview: 0.3333333333333333,
      informatica: 0.3333333333333333,
      talend: 0.3333333333333333
    }
  },
  informatica: {
    neiGraph: {
      nodes: [
        { id: "talend" },
        { id: "tableau" },
        { id: "qlikview" },
        { id: "informatica" }
      ],
      links: [
        { source: "informatica", target: "talend", weight: 1.0 },
        { source: "informatica", target: "tableau", weight: 1.0 },
        { source: "informatica", target: "qlikview", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 123,
    twins: {
      qlikview: 0.3333333333333333,
      tableau: 0.3333333333333333,
      talend: 0.3333333333333333
    }
  },
  qlikview: {
    neiGraph: {
      nodes: [
        { id: "talend" },
        { id: "tableau" },
        { id: "informatica" },
        { id: "qlikview" }
      ],
      links: [
        { source: "qlikview", target: "talend", weight: 1.0 },
        { source: "qlikview", target: "tableau", weight: 1.0 },
        { source: "qlikview", target: "informatica", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 122,
    twins: {
      informatica: 0.3333333333333333,
      tableau: 0.3333333333333333,
      talend: 0.3333333333333333
    }
  },
  protractor: {
    neiGraph: {
      nodes: [{ id: "typescript" }, { id: "javascript" }, { id: "protractor" }],
      links: [
        { source: "protractor", target: "typescript", weight: 1.0 },
        { source: "protractor", target: "javascript", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 121,
    twins: { javascript: 0.5, typescript: 0.5 }
  },
  "tcp/ip": {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "unix" },
        { id: "firewall" },
        { id: "installation" },
        { id: "load balancing" },
        { id: "balancing" },
        { id: "radware" },
        { id: "avaya" },
        { id: "autodesk" },
        { id: "tcp/ip" }
      ],
      links: [
        { source: "tcp/ip", target: "linux", weight: 2.0 },
        { source: "tcp/ip", target: "unix", weight: 1.0 },
        { source: "tcp/ip", target: "firewall", weight: 1.0 },
        { source: "tcp/ip", target: "installation", weight: 1.0 },
        { source: "tcp/ip", target: "load balancing", weight: 2.0 },
        { source: "tcp/ip", target: "balancing", weight: 2.0 },
        { source: "tcp/ip", target: "radware", weight: 2.0 },
        { source: "tcp/ip", target: "avaya", weight: 1.0 },
        { source: "tcp/ip", target: "autodesk", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "Moins de 1 an": 1, "De 3 ?? 5 ans": 5 },
      contract_type: { CDI: 6 },
      study_lvl: { "Bac +2": 2, "Bac +5 et plus": 2, "Bac +3": 1, "Bac +4": 1 },
      count_job: 6
    },
    priority: 120,
    twins: {
      radware: 0.17125055288188806,
      balancing: 0.17125055288188806,
      "load balancing": 0.17125055288188806,
      linux: 0.17125055288188806,
      autodesk: 0.0629995576944895
    }
  },
  "load balancing": {
    neiGraph: {
      nodes: [
        { id: "firewall" },
        { id: "flux" },
        { id: "tcp/ip" },
        { id: "balancing" },
        { id: "radware" },
        { id: "load balancing" }
      ],
      links: [
        { source: "load balancing", target: "firewall", weight: 1.0 },
        { source: "load balancing", target: "flux", weight: 1.0 },
        { source: "load balancing", target: "tcp/ip", weight: 2.0 },
        { source: "load balancing", target: "balancing", weight: 3.0 },
        { source: "load balancing", target: "radware", weight: 3.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 2, "Bac +4": 1 },
      count_job: 3
    },
    priority: 4,
    twins: {
      radware: 0.3789960383933226,
      balancing: 0.3789960383933226,
      "tcp/ip": 0.139424850810326,
      flux: 0.05129153620151444,
      firewall: 0.05129153620151444
    }
  },
  balancing: {
    neiGraph: {
      nodes: [
        { id: "firewall" },
        { id: "flux" },
        { id: "tcp/ip" },
        { id: "load balancing" },
        { id: "radware" },
        { id: "balancing" }
      ],
      links: [
        { source: "balancing", target: "firewall", weight: 1.0 },
        { source: "balancing", target: "flux", weight: 1.0 },
        { source: "balancing", target: "tcp/ip", weight: 2.0 },
        { source: "balancing", target: "load balancing", weight: 3.0 },
        { source: "balancing", target: "radware", weight: 3.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 2, "Bac +4": 1 },
      count_job: 3
    },
    priority: 11,
    twins: {
      radware: 0.3789960383933226,
      "load balancing": 0.3789960383933226,
      "tcp/ip": 0.139424850810326,
      flux: 0.05129153620151444,
      firewall: 0.05129153620151444
    }
  },
  radware: {
    neiGraph: {
      nodes: [
        { id: "firewall" },
        { id: "flux" },
        { id: "tcp/ip" },
        { id: "load balancing" },
        { id: "balancing" },
        { id: "radware" }
      ],
      links: [
        { source: "radware", target: "firewall", weight: 1.0 },
        { source: "radware", target: "flux", weight: 1.0 },
        { source: "radware", target: "tcp/ip", weight: 2.0 },
        { source: "radware", target: "load balancing", weight: 3.0 },
        { source: "radware", target: "balancing", weight: 3.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 3 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 2, "Bac +4": 1 },
      count_job: 3
    },
    priority: 119,
    twins: {
      balancing: 0.3789960383933226,
      "load balancing": 0.3789960383933226,
      "tcp/ip": 0.139424850810326,
      flux: 0.05129153620151444,
      firewall: 0.05129153620151444
    }
  },
  "visual basic": {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "devops" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "jonas" },
        { id: "visual basic" }
      ],
      links: [
        { source: "visual basic", target: "docker", weight: 1.0 },
        { source: "visual basic", target: "ansible", weight: 1.0 },
        { source: "visual basic", target: "jenkins", weight: 1.0 },
        { source: "visual basic", target: "nagios", weight: 1.0 },
        { source: "visual basic", target: "git", weight: 1.0 },
        { source: "visual basic", target: "mysql", weight: 1.0 },
        { source: "visual basic", target: "linux", weight: 1.0 },
        { source: "visual basic", target: "sql", weight: 1.0 },
        { source: "visual basic", target: "unix", weight: 1.0 },
        { source: "visual basic", target: "devops", weight: 1.0 },
        { source: "visual basic", target: "jira", weight: 1.0 },
        { source: "visual basic", target: "gitlab", weight: 1.0 },
        { source: "visual basic", target: "mariadb", weight: 1.0 },
        { source: "visual basic", target: "solaris", weight: 1.0 },
        { source: "visual basic", target: "jonas", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 118,
    twins: {
      jonas: 0.06666666666666665,
      solaris: 0.06666666666666665,
      mariadb: 0.06666666666666665,
      gitlab: 0.06666666666666665,
      jira: 0.06666666666666665
    }
  },
  mariadb: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "angular" },
        { id: "devops" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "spring boot" },
        { id: "visual basic" },
        { id: "solaris" },
        { id: "jonas" },
        { id: "continuous delivery" },
        { id: "mariadb" }
      ],
      links: [
        { source: "mariadb", target: "java", weight: 1.0 },
        { source: "mariadb", target: "docker", weight: 1.0 },
        { source: "mariadb", target: "ansible", weight: 1.0 },
        { source: "mariadb", target: "jenkins", weight: 1.0 },
        { source: "mariadb", target: "nagios", weight: 1.0 },
        { source: "mariadb", target: "git", weight: 1.0 },
        { source: "mariadb", target: "mysql", weight: 1.0 },
        { source: "mariadb", target: "linux", weight: 1.0 },
        { source: "mariadb", target: "sql", weight: 1.0 },
        { source: "mariadb", target: "unix", weight: 1.0 },
        { source: "mariadb", target: "angular", weight: 1.0 },
        { source: "mariadb", target: "devops", weight: 2.0 },
        { source: "mariadb", target: "jira", weight: 1.0 },
        { source: "mariadb", target: "gitlab", weight: 1.0 },
        { source: "mariadb", target: "spring boot", weight: 1.0 },
        { source: "mariadb", target: "visual basic", weight: 1.0 },
        { source: "mariadb", target: "solaris", weight: 1.0 },
        { source: "mariadb", target: "jonas", weight: 1.0 },
        { source: "mariadb", target: "continuous delivery", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 117,
    twins: {
      devops: 0.1312020876521314,
      "continuous delivery": 0.04826655068599269,
      jonas: 0.04826655068599269,
      solaris: 0.04826655068599269,
      "visual basic": 0.04826655068599269
    }
  },
  solaris: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "devops" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "jonas" },
        { id: "sendmail" },
        { id: "hp-ux" },
        { id: "solaris" }
      ],
      links: [
        { source: "solaris", target: "docker", weight: 1.0 },
        { source: "solaris", target: "ansible", weight: 1.0 },
        { source: "solaris", target: "jenkins", weight: 1.0 },
        { source: "solaris", target: "nagios", weight: 1.0 },
        { source: "solaris", target: "git", weight: 1.0 },
        { source: "solaris", target: "mysql", weight: 1.0 },
        { source: "solaris", target: "linux", weight: 2.0 },
        { source: "solaris", target: "sql", weight: 1.0 },
        { source: "solaris", target: "unix", weight: 1.0 },
        { source: "solaris", target: "devops", weight: 1.0 },
        { source: "solaris", target: "jira", weight: 1.0 },
        { source: "solaris", target: "gitlab", weight: 1.0 },
        { source: "solaris", target: "visual basic", weight: 1.0 },
        { source: "solaris", target: "mariadb", weight: 1.0 },
        { source: "solaris", target: "jonas", weight: 1.0 },
        { source: "solaris", target: "sendmail", weight: 1.0 },
        { source: "solaris", target: "hp-ux", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 116,
    twins: {
      linux: 0.14522069137383128,
      "hp-ux": 0.05342370678913554,
      sendmail: 0.05342370678913554,
      jonas: 0.05342370678913554,
      mariadb: 0.05342370678913554
    }
  },
  jonas: {
    neiGraph: {
      nodes: [
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "nagios" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "devops" },
        { id: "jira" },
        { id: "gitlab" },
        { id: "visual basic" },
        { id: "mariadb" },
        { id: "solaris" },
        { id: "jonas" }
      ],
      links: [
        { source: "jonas", target: "docker", weight: 1.0 },
        { source: "jonas", target: "ansible", weight: 1.0 },
        { source: "jonas", target: "jenkins", weight: 1.0 },
        { source: "jonas", target: "nagios", weight: 1.0 },
        { source: "jonas", target: "git", weight: 1.0 },
        { source: "jonas", target: "mysql", weight: 1.0 },
        { source: "jonas", target: "linux", weight: 1.0 },
        { source: "jonas", target: "sql", weight: 1.0 },
        { source: "jonas", target: "unix", weight: 1.0 },
        { source: "jonas", target: "devops", weight: 1.0 },
        { source: "jonas", target: "jira", weight: 1.0 },
        { source: "jonas", target: "gitlab", weight: 1.0 },
        { source: "jonas", target: "visual basic", weight: 1.0 },
        { source: "jonas", target: "mariadb", weight: 1.0 },
        { source: "jonas", target: "solaris", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 115,
    twins: {
      solaris: 0.06666666666666665,
      mariadb: 0.06666666666666665,
      "visual basic": 0.06666666666666665,
      gitlab: 0.06666666666666665,
      jira: 0.06666666666666665
    }
  },
  mulesoft: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "sql" },
        { id: "flux" },
        { id: "talend" },
        { id: "eclipse" },
        { id: "source" },
        { id: "middleware" },
        { id: "mulesoft" }
      ],
      links: [
        { source: "mulesoft", target: "java", weight: 1.0 },
        { source: "mulesoft", target: "sql", weight: 1.0 },
        { source: "mulesoft", target: "flux", weight: 1.0 },
        { source: "mulesoft", target: "talend", weight: 1.0 },
        { source: "mulesoft", target: "eclipse", weight: 1.0 },
        { source: "mulesoft", target: "source", weight: 1.0 },
        { source: "mulesoft", target: "middleware", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 114,
    twins: {
      middleware: 0.14285714285714285,
      source: 0.14285714285714285,
      eclipse: 0.14285714285714285,
      talend: 0.14285714285714285,
      flux: 0.14285714285714285
    }
  },
  eclipse: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "sql" },
        { id: "javascript" },
        { id: "devops" },
        { id: "flux" },
        { id: "hibernate" },
        { id: "html5" },
        { id: "talend" },
        { id: "bootstrap" },
        { id: "mulesoft" },
        { id: "source" },
        { id: "middleware" },
        { id: "jhipster" },
        { id: "sonarqube" },
        { id: "eclipse" }
      ],
      links: [
        { source: "eclipse", target: "scrum", weight: 1.0 },
        { source: "eclipse", target: "java", weight: 2.0 },
        { source: "eclipse", target: "docker", weight: 1.0 },
        { source: "eclipse", target: "ansible", weight: 1.0 },
        { source: "eclipse", target: "jenkins", weight: 1.0 },
        { source: "eclipse", target: "git", weight: 1.0 },
        { source: "eclipse", target: "mysql", weight: 1.0 },
        { source: "eclipse", target: "sql", weight: 1.0 },
        { source: "eclipse", target: "javascript", weight: 1.0 },
        { source: "eclipse", target: "devops", weight: 1.0 },
        { source: "eclipse", target: "flux", weight: 1.0 },
        { source: "eclipse", target: "hibernate", weight: 1.0 },
        { source: "eclipse", target: "html5", weight: 1.0 },
        { source: "eclipse", target: "talend", weight: 1.0 },
        { source: "eclipse", target: "bootstrap", weight: 1.0 },
        { source: "eclipse", target: "mulesoft", weight: 1.0 },
        { source: "eclipse", target: "source", weight: 1.0 },
        { source: "eclipse", target: "middleware", weight: 1.0 },
        { source: "eclipse", target: "jhipster", weight: 1.0 },
        { source: "eclipse", target: "sonarqube", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +4": 1, "Bac +3": 1 },
      count_job: 2
    },
    priority: 113,
    twins: {
      java: 0.12516099799833533,
      sonarqube: 0.046044158000087605,
      jhipster: 0.046044158000087605,
      middleware: 0.046044158000087605,
      source: 0.046044158000087605
    }
  },
  source: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "git" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "c" },
        { id: "c#" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "flux" },
        { id: "c++" },
        { id: "talend" },
        { id: "gitlab" },
        { id: "postgresql" },
        { id: "mulesoft" },
        { id: "eclipse" },
        { id: "middleware" },
        { id: "user story" },
        { id: "chef" },
        { id: "source" }
      ],
      links: [
        { source: "source", target: "scrum", weight: 1.0 },
        { source: "source", target: "java", weight: 2.0 },
        { source: "source", target: "docker", weight: 1.0 },
        { source: "source", target: "kubernetes", weight: 2.0 },
        { source: "source", target: "jenkins", weight: 1.0 },
        { source: "source", target: "git", weight: 1.0 },
        { source: "source", target: "sql", weight: 3.0 },
        { source: "source", target: "unix", weight: 1.0 },
        { source: "source", target: "python", weight: 1.0 },
        { source: "source", target: "angular", weight: 1.0 },
        { source: "source", target: "c", weight: 2.0 },
        { source: "source", target: "c#", weight: 1.0 },
        { source: "source", target: "javascript", weight: 1.0 },
        { source: "source", target: "asp.net", weight: 1.0 },
        { source: "source", target: "flux", weight: 2.0 },
        { source: "source", target: "c++", weight: 1.0 },
        { source: "source", target: "talend", weight: 1.0 },
        { source: "source", target: "gitlab", weight: 1.0 },
        { source: "source", target: "postgresql", weight: 1.0 },
        { source: "source", target: "mulesoft", weight: 1.0 },
        { source: "source", target: "eclipse", weight: 1.0 },
        { source: "source", target: "middleware", weight: 1.0 },
        { source: "source", target: "user story", weight: 1.0 },
        { source: "source", target: "chef", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 2, "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 2, Freelance: 1 },
      study_lvl: { "Bac +4": 1, "Bac +5 et plus": 2 },
      count_job: 3
    },
    priority: 112,
    twins: {
      sql: 0.19829906414982112,
      flux: 0.07295014890425619,
      c: 0.07295014890425619,
      kubernetes: 0.07295014890425619,
      java: 0.07295014890425619
    }
  },
  middleware: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "sql" },
        { id: "flux" },
        { id: "talend" },
        { id: "mulesoft" },
        { id: "eclipse" },
        { id: "source" },
        { id: "middleware" }
      ],
      links: [
        { source: "middleware", target: "java", weight: 1.0 },
        { source: "middleware", target: "sql", weight: 1.0 },
        { source: "middleware", target: "flux", weight: 1.0 },
        { source: "middleware", target: "talend", weight: 1.0 },
        { source: "middleware", target: "mulesoft", weight: 1.0 },
        { source: "middleware", target: "eclipse", weight: 1.0 },
        { source: "middleware", target: "source", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 111,
    twins: {
      source: 0.14285714285714285,
      eclipse: 0.14285714285714285,
      mulesoft: 0.14285714285714285,
      talend: 0.14285714285714285,
      flux: 0.14285714285714285
    }
  },
  "project management": {
    neiGraph: {
      nodes: [{ id: "nice" }, { id: "project management" }],
      links: [{ source: "project management", target: "nice", weight: 1.0 }]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 110,
    twins: { nice: 1.0 }
  },
  sendmail: {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "solaris" },
        { id: "hp-ux" },
        { id: "sendmail" }
      ],
      links: [
        { source: "sendmail", target: "linux", weight: 1.0 },
        { source: "sendmail", target: "solaris", weight: 1.0 },
        { source: "sendmail", target: "hp-ux", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 109,
    twins: {
      "hp-ux": 0.3333333333333333,
      solaris: 0.3333333333333333,
      linux: 0.3333333333333333
    }
  },
  "hp-ux": {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "solaris" },
        { id: "sendmail" },
        { id: "hp-ux" }
      ],
      links: [
        { source: "hp-ux", target: "linux", weight: 1.0 },
        { source: "hp-ux", target: "solaris", weight: 1.0 },
        { source: "hp-ux", target: "sendmail", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 108,
    twins: {
      sendmail: 0.3333333333333333,
      solaris: 0.3333333333333333,
      linux: 0.3333333333333333
    }
  },
  "user story": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "flask" },
        { id: "c" },
        { id: "javascript" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "flux" },
        { id: "c++" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "postgresql" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "source" },
        { id: "chef" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "user story" }
      ],
      links: [
        { source: "user story", target: "scrum", weight: 2.0 },
        { source: "user story", target: "java", weight: 1.0 },
        { source: "user story", target: "docker", weight: 2.0 },
        { source: "user story", target: "kubernetes", weight: 2.0 },
        { source: "user story", target: "jenkins", weight: 1.0 },
        { source: "user story", target: "nginx", weight: 1.0 },
        { source: "user story", target: "git", weight: 2.0 },
        { source: "user story", target: "linux", weight: 1.0 },
        { source: "user story", target: "sql", weight: 1.0 },
        { source: "user story", target: "unix", weight: 1.0 },
        { source: "user story", target: "python", weight: 2.0 },
        { source: "user story", target: "angular", weight: 1.0 },
        { source: "user story", target: "flask", weight: 1.0 },
        { source: "user story", target: "c", weight: 1.0 },
        { source: "user story", target: "javascript", weight: 1.0 },
        { source: "user story", target: "json", weight: 1.0 },
        { source: "user story", target: "devops", weight: 1.0 },
        { source: "user story", target: "mise en place", weight: 1.0 },
        { source: "user story", target: "flux", weight: 1.0 },
        { source: "user story", target: "c++", weight: 1.0 },
        { source: "user story", target: "front end", weight: 1.0 },
        { source: "user story", target: "gitlab", weight: 2.0 },
        { source: "user story", target: "scala", weight: 1.0 },
        { source: "user story", target: "traefik", weight: 1.0 },
        { source: "user story", target: "yaml", weight: 1.0 },
        { source: "user story", target: "prometheus", weight: 1.0 },
        { source: "user story", target: "postgresql", weight: 1.0 },
        { source: "user story", target: "machine learning", weight: 1.0 },
        { source: "user story", target: "deep learning", weight: 1.0 },
        { source: "user story", target: "data science", weight: 1.0 },
        { source: "user story", target: "source", weight: 1.0 },
        { source: "user story", target: "chef", weight: 1.0 },
        { source: "user story", target: "xgboost", weight: 1.0 },
        { source: "user story", target: "syslog", weight: 1.0 },
        { source: "user story", target: "ip routing", weight: 1.0 },
        { source: "user story", target: "public cloud", weight: 1.0 },
        { source: "user story", target: "cloud infrastructure", weight: 1.0 },
        { source: "user story", target: "time series", weight: 1.0 },
        { source: "user story", target: "object storage", weight: 1.0 },
        { source: "user story", target: "docker container", weight: 1.0 },
        { source: "user story", target: "pytorch", weight: 1.0 },
        { source: "user story", target: "routing protocols", weight: 1.0 },
        { source: "user story", target: "terraform", weight: 1.0 },
        { source: "user story", target: "api gateway", weight: 1.0 },
        { source: "user story", target: "vm", weight: 1.0 },
        { source: "user story", target: "jupyter", weight: 1.0 },
        { source: "user story", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 107,
    twins: {
      gitlab: 0.047431451512209545,
      python: 0.047431451512209545,
      git: 0.047431451512209545,
      kubernetes: 0.047431451512209545,
      docker: 0.047431451512209545
    }
  },
  chef: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "jenkins" },
        { id: "git" },
        { id: "sql" },
        { id: "unix" },
        { id: "python" },
        { id: "angular" },
        { id: "c" },
        { id: "javascript" },
        { id: "flux" },
        { id: "c++" },
        { id: "gitlab" },
        { id: "postgresql" },
        { id: "source" },
        { id: "user story" },
        { id: "chef" }
      ],
      links: [
        { source: "chef", target: "scrum", weight: 2.0 },
        { source: "chef", target: "java", weight: 1.0 },
        { source: "chef", target: "docker", weight: 1.0 },
        { source: "chef", target: "kubernetes", weight: 1.0 },
        { source: "chef", target: "jenkins", weight: 1.0 },
        { source: "chef", target: "git", weight: 1.0 },
        { source: "chef", target: "sql", weight: 1.0 },
        { source: "chef", target: "unix", weight: 1.0 },
        { source: "chef", target: "python", weight: 1.0 },
        { source: "chef", target: "angular", weight: 1.0 },
        { source: "chef", target: "c", weight: 1.0 },
        { source: "chef", target: "javascript", weight: 1.0 },
        { source: "chef", target: "flux", weight: 1.0 },
        { source: "chef", target: "c++", weight: 1.0 },
        { source: "chef", target: "gitlab", weight: 1.0 },
        { source: "chef", target: "postgresql", weight: 1.0 },
        { source: "chef", target: "source", weight: 1.0 },
        { source: "chef", target: "user story", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 3, "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 4 },
      study_lvl: { "Bac +5 et plus": 4 },
      count_job: 4
    },
    priority: 106,
    twins: {
      scrum: 0.13785591727042856,
      "user story": 0.050714357807621846,
      source: 0.050714357807621846,
      postgresql: 0.050714357807621846,
      gitlab: 0.050714357807621846
    }
  },
  "continuous delivery": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "angular" },
        { id: "devops" },
        { id: "spring boot" },
        { id: "mariadb" },
        { id: "continuous delivery" }
      ],
      links: [
        { source: "continuous delivery", target: "java", weight: 1.0 },
        { source: "continuous delivery", target: "angular", weight: 1.0 },
        { source: "continuous delivery", target: "devops", weight: 1.0 },
        { source: "continuous delivery", target: "spring boot", weight: 1.0 },
        { source: "continuous delivery", target: "mariadb", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 105,
    twins: {
      mariadb: 0.2,
      "spring boot": 0.2,
      devops: 0.2,
      angular: 0.2,
      java: 0.2
    }
  },
  "computer science": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "remuneration" },
        { id: "computer science" }
      ],
      links: [
        { source: "computer science", target: "java", weight: 1.0 },
        { source: "computer science", target: "remuneration", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 104,
    twins: { remuneration: 0.5, java: 0.5 }
  },
  remuneration: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "computer science" },
        { id: "remuneration" }
      ],
      links: [
        { source: "remuneration", target: "java", weight: 1.0 },
        { source: "remuneration", target: "computer science", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 103,
    twins: { "computer science": 0.5, java: 0.5 }
  },
  clonezilla: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "acronis true image" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "clonezilla" }
      ],
      links: [
        { source: "clonezilla", target: "nagios", weight: 1.0 },
        { source: "clonezilla", target: "unix", weight: 1.0 },
        { source: "clonezilla", target: "scripting", weight: 1.0 },
        { source: "clonezilla", target: "veeam", weight: 1.0 },
        { source: "clonezilla", target: "acronis true image", weight: 1.0 },
        { source: "clonezilla", target: "wireshark", weight: 1.0 },
        { source: "clonezilla", target: "qmail", weight: 1.0 },
        { source: "clonezilla", target: "hyper-v", weight: 1.0 },
        { source: "clonezilla", target: "smtp", weight: 1.0 },
        { source: "clonezilla", target: "cacti", weight: 1.0 },
        { source: "clonezilla", target: "ghost", weight: 1.0 },
        { source: "clonezilla", target: "postfix", weight: 1.0 },
        { source: "clonezilla", target: "lunix", weight: 1.0 },
        { source: "clonezilla", target: "squid", weight: 1.0 },
        { source: "clonezilla", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { D??butant: 1, "De 3 ?? 5 ans": 1 },
      contract_type: { Stage: 1, CDI: 1 },
      study_lvl: { "Bac +2": 1, "Bac +5 et plus": 1 },
      count_job: 2
    },
    priority: 19,
    twins: {
      exim: 0.06666666666666665,
      squid: 0.06666666666666665,
      lunix: 0.06666666666666665,
      postfix: 0.06666666666666665,
      ghost: 0.06666666666666665
    }
  },
  "acronis true image": {
    neiGraph: {
      nodes: [{ id: "clonezilla" }, { id: "acronis true image" }],
      links: [
        { source: "acronis true image", target: "clonezilla", weight: 1.0 }
      ]
    },
    stats: {
      exp: { D??butant: 1 },
      contract_type: { Stage: 1 },
      study_lvl: { "Bac +2": 1 },
      count_job: 1
    },
    priority: 102,
    twins: { clonezilla: 1.0 }
  },
  xgboost: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "xgboost" }
      ],
      links: [
        { source: "xgboost", target: "scrum", weight: 1.0 },
        { source: "xgboost", target: "docker", weight: 1.0 },
        { source: "xgboost", target: "kubernetes", weight: 1.0 },
        { source: "xgboost", target: "nginx", weight: 1.0 },
        { source: "xgboost", target: "git", weight: 1.0 },
        { source: "xgboost", target: "linux", weight: 1.0 },
        { source: "xgboost", target: "python", weight: 1.0 },
        { source: "xgboost", target: "flask", weight: 1.0 },
        { source: "xgboost", target: "json", weight: 1.0 },
        { source: "xgboost", target: "devops", weight: 1.0 },
        { source: "xgboost", target: "mise en place", weight: 1.0 },
        { source: "xgboost", target: "front end", weight: 1.0 },
        { source: "xgboost", target: "gitlab", weight: 1.0 },
        { source: "xgboost", target: "scala", weight: 1.0 },
        { source: "xgboost", target: "traefik", weight: 1.0 },
        { source: "xgboost", target: "yaml", weight: 1.0 },
        { source: "xgboost", target: "prometheus", weight: 1.0 },
        { source: "xgboost", target: "machine learning", weight: 1.0 },
        { source: "xgboost", target: "deep learning", weight: 1.0 },
        { source: "xgboost", target: "data science", weight: 1.0 },
        { source: "xgboost", target: "user story", weight: 1.0 },
        { source: "xgboost", target: "syslog", weight: 1.0 },
        { source: "xgboost", target: "ip routing", weight: 1.0 },
        { source: "xgboost", target: "public cloud", weight: 1.0 },
        { source: "xgboost", target: "cloud infrastructure", weight: 1.0 },
        { source: "xgboost", target: "time series", weight: 1.0 },
        { source: "xgboost", target: "object storage", weight: 1.0 },
        { source: "xgboost", target: "docker container", weight: 1.0 },
        { source: "xgboost", target: "pytorch", weight: 1.0 },
        { source: "xgboost", target: "routing protocols", weight: 1.0 },
        { source: "xgboost", target: "terraform", weight: 1.0 },
        { source: "xgboost", target: "api gateway", weight: 1.0 },
        { source: "xgboost", target: "vm", weight: 1.0 },
        { source: "xgboost", target: "jupyter", weight: 1.0 },
        { source: "xgboost", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 101,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  syslog: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "syslog" }
      ],
      links: [
        { source: "syslog", target: "scrum", weight: 1.0 },
        { source: "syslog", target: "docker", weight: 1.0 },
        { source: "syslog", target: "kubernetes", weight: 1.0 },
        { source: "syslog", target: "nginx", weight: 1.0 },
        { source: "syslog", target: "git", weight: 1.0 },
        { source: "syslog", target: "linux", weight: 1.0 },
        { source: "syslog", target: "python", weight: 1.0 },
        { source: "syslog", target: "flask", weight: 1.0 },
        { source: "syslog", target: "json", weight: 1.0 },
        { source: "syslog", target: "devops", weight: 1.0 },
        { source: "syslog", target: "mise en place", weight: 1.0 },
        { source: "syslog", target: "front end", weight: 1.0 },
        { source: "syslog", target: "gitlab", weight: 1.0 },
        { source: "syslog", target: "scala", weight: 1.0 },
        { source: "syslog", target: "traefik", weight: 1.0 },
        { source: "syslog", target: "yaml", weight: 1.0 },
        { source: "syslog", target: "prometheus", weight: 1.0 },
        { source: "syslog", target: "machine learning", weight: 1.0 },
        { source: "syslog", target: "deep learning", weight: 1.0 },
        { source: "syslog", target: "data science", weight: 1.0 },
        { source: "syslog", target: "user story", weight: 1.0 },
        { source: "syslog", target: "xgboost", weight: 1.0 },
        { source: "syslog", target: "ip routing", weight: 1.0 },
        { source: "syslog", target: "public cloud", weight: 1.0 },
        { source: "syslog", target: "cloud infrastructure", weight: 1.0 },
        { source: "syslog", target: "time series", weight: 1.0 },
        { source: "syslog", target: "object storage", weight: 1.0 },
        { source: "syslog", target: "docker container", weight: 1.0 },
        { source: "syslog", target: "pytorch", weight: 1.0 },
        { source: "syslog", target: "routing protocols", weight: 1.0 },
        { source: "syslog", target: "terraform", weight: 1.0 },
        { source: "syslog", target: "api gateway", weight: 1.0 },
        { source: "syslog", target: "vm", weight: 1.0 },
        { source: "syslog", target: "jupyter", weight: 1.0 },
        { source: "syslog", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 100,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "ip routing": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "ip routing" }
      ],
      links: [
        { source: "ip routing", target: "scrum", weight: 1.0 },
        { source: "ip routing", target: "docker", weight: 1.0 },
        { source: "ip routing", target: "kubernetes", weight: 1.0 },
        { source: "ip routing", target: "nginx", weight: 1.0 },
        { source: "ip routing", target: "git", weight: 1.0 },
        { source: "ip routing", target: "linux", weight: 1.0 },
        { source: "ip routing", target: "python", weight: 1.0 },
        { source: "ip routing", target: "flask", weight: 1.0 },
        { source: "ip routing", target: "json", weight: 1.0 },
        { source: "ip routing", target: "devops", weight: 1.0 },
        { source: "ip routing", target: "mise en place", weight: 1.0 },
        { source: "ip routing", target: "front end", weight: 1.0 },
        { source: "ip routing", target: "gitlab", weight: 1.0 },
        { source: "ip routing", target: "scala", weight: 1.0 },
        { source: "ip routing", target: "traefik", weight: 1.0 },
        { source: "ip routing", target: "yaml", weight: 1.0 },
        { source: "ip routing", target: "prometheus", weight: 1.0 },
        { source: "ip routing", target: "machine learning", weight: 1.0 },
        { source: "ip routing", target: "deep learning", weight: 1.0 },
        { source: "ip routing", target: "data science", weight: 1.0 },
        { source: "ip routing", target: "user story", weight: 1.0 },
        { source: "ip routing", target: "xgboost", weight: 1.0 },
        { source: "ip routing", target: "syslog", weight: 1.0 },
        { source: "ip routing", target: "public cloud", weight: 1.0 },
        { source: "ip routing", target: "cloud infrastructure", weight: 1.0 },
        { source: "ip routing", target: "time series", weight: 1.0 },
        { source: "ip routing", target: "object storage", weight: 1.0 },
        { source: "ip routing", target: "docker container", weight: 1.0 },
        { source: "ip routing", target: "pytorch", weight: 1.0 },
        { source: "ip routing", target: "routing protocols", weight: 1.0 },
        { source: "ip routing", target: "terraform", weight: 1.0 },
        { source: "ip routing", target: "api gateway", weight: 1.0 },
        { source: "ip routing", target: "vm", weight: 1.0 },
        { source: "ip routing", target: "jupyter", weight: 1.0 },
        { source: "ip routing", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 99,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "public cloud": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "public cloud" }
      ],
      links: [
        { source: "public cloud", target: "scrum", weight: 1.0 },
        { source: "public cloud", target: "docker", weight: 1.0 },
        { source: "public cloud", target: "kubernetes", weight: 1.0 },
        { source: "public cloud", target: "nginx", weight: 1.0 },
        { source: "public cloud", target: "git", weight: 1.0 },
        { source: "public cloud", target: "linux", weight: 1.0 },
        { source: "public cloud", target: "python", weight: 1.0 },
        { source: "public cloud", target: "flask", weight: 1.0 },
        { source: "public cloud", target: "json", weight: 1.0 },
        { source: "public cloud", target: "devops", weight: 1.0 },
        { source: "public cloud", target: "mise en place", weight: 1.0 },
        { source: "public cloud", target: "front end", weight: 1.0 },
        { source: "public cloud", target: "gitlab", weight: 1.0 },
        { source: "public cloud", target: "scala", weight: 1.0 },
        { source: "public cloud", target: "traefik", weight: 1.0 },
        { source: "public cloud", target: "yaml", weight: 1.0 },
        { source: "public cloud", target: "prometheus", weight: 1.0 },
        { source: "public cloud", target: "machine learning", weight: 1.0 },
        { source: "public cloud", target: "deep learning", weight: 1.0 },
        { source: "public cloud", target: "data science", weight: 1.0 },
        { source: "public cloud", target: "user story", weight: 1.0 },
        { source: "public cloud", target: "xgboost", weight: 1.0 },
        { source: "public cloud", target: "syslog", weight: 1.0 },
        { source: "public cloud", target: "ip routing", weight: 1.0 },
        { source: "public cloud", target: "cloud infrastructure", weight: 1.0 },
        { source: "public cloud", target: "time series", weight: 1.0 },
        { source: "public cloud", target: "object storage", weight: 1.0 },
        { source: "public cloud", target: "docker container", weight: 1.0 },
        { source: "public cloud", target: "pytorch", weight: 1.0 },
        { source: "public cloud", target: "routing protocols", weight: 1.0 },
        { source: "public cloud", target: "terraform", weight: 1.0 },
        { source: "public cloud", target: "api gateway", weight: 1.0 },
        { source: "public cloud", target: "vm", weight: 1.0 },
        { source: "public cloud", target: "jupyter", weight: 1.0 },
        { source: "public cloud", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 98,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "cloud infrastructure": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "cloud infrastructure" }
      ],
      links: [
        { source: "cloud infrastructure", target: "scrum", weight: 1.0 },
        { source: "cloud infrastructure", target: "docker", weight: 1.0 },
        { source: "cloud infrastructure", target: "kubernetes", weight: 1.0 },
        { source: "cloud infrastructure", target: "nginx", weight: 1.0 },
        { source: "cloud infrastructure", target: "git", weight: 1.0 },
        { source: "cloud infrastructure", target: "linux", weight: 1.0 },
        { source: "cloud infrastructure", target: "python", weight: 1.0 },
        { source: "cloud infrastructure", target: "flask", weight: 1.0 },
        { source: "cloud infrastructure", target: "json", weight: 1.0 },
        { source: "cloud infrastructure", target: "devops", weight: 1.0 },
        {
          source: "cloud infrastructure",
          target: "mise en place",
          weight: 1.0
        },
        { source: "cloud infrastructure", target: "front end", weight: 1.0 },
        { source: "cloud infrastructure", target: "gitlab", weight: 1.0 },
        { source: "cloud infrastructure", target: "scala", weight: 1.0 },
        { source: "cloud infrastructure", target: "traefik", weight: 1.0 },
        { source: "cloud infrastructure", target: "yaml", weight: 1.0 },
        { source: "cloud infrastructure", target: "prometheus", weight: 1.0 },
        {
          source: "cloud infrastructure",
          target: "machine learning",
          weight: 1.0
        },
        {
          source: "cloud infrastructure",
          target: "deep learning",
          weight: 1.0
        },
        { source: "cloud infrastructure", target: "data science", weight: 1.0 },
        { source: "cloud infrastructure", target: "user story", weight: 1.0 },
        { source: "cloud infrastructure", target: "xgboost", weight: 1.0 },
        { source: "cloud infrastructure", target: "syslog", weight: 1.0 },
        { source: "cloud infrastructure", target: "ip routing", weight: 1.0 },
        { source: "cloud infrastructure", target: "public cloud", weight: 1.0 },
        { source: "cloud infrastructure", target: "time series", weight: 1.0 },
        {
          source: "cloud infrastructure",
          target: "object storage",
          weight: 1.0
        },
        {
          source: "cloud infrastructure",
          target: "docker container",
          weight: 1.0
        },
        { source: "cloud infrastructure", target: "pytorch", weight: 1.0 },
        {
          source: "cloud infrastructure",
          target: "routing protocols",
          weight: 1.0
        },
        { source: "cloud infrastructure", target: "terraform", weight: 1.0 },
        { source: "cloud infrastructure", target: "api gateway", weight: 1.0 },
        { source: "cloud infrastructure", target: "vm", weight: 1.0 },
        { source: "cloud infrastructure", target: "jupyter", weight: 1.0 },
        { source: "cloud infrastructure", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 97,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "time series": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "time series" }
      ],
      links: [
        { source: "time series", target: "scrum", weight: 1.0 },
        { source: "time series", target: "docker", weight: 1.0 },
        { source: "time series", target: "kubernetes", weight: 1.0 },
        { source: "time series", target: "nginx", weight: 1.0 },
        { source: "time series", target: "git", weight: 1.0 },
        { source: "time series", target: "linux", weight: 1.0 },
        { source: "time series", target: "python", weight: 1.0 },
        { source: "time series", target: "flask", weight: 1.0 },
        { source: "time series", target: "json", weight: 1.0 },
        { source: "time series", target: "devops", weight: 1.0 },
        { source: "time series", target: "mise en place", weight: 1.0 },
        { source: "time series", target: "front end", weight: 1.0 },
        { source: "time series", target: "gitlab", weight: 1.0 },
        { source: "time series", target: "scala", weight: 1.0 },
        { source: "time series", target: "traefik", weight: 1.0 },
        { source: "time series", target: "yaml", weight: 1.0 },
        { source: "time series", target: "prometheus", weight: 1.0 },
        { source: "time series", target: "machine learning", weight: 1.0 },
        { source: "time series", target: "deep learning", weight: 1.0 },
        { source: "time series", target: "data science", weight: 1.0 },
        { source: "time series", target: "user story", weight: 1.0 },
        { source: "time series", target: "xgboost", weight: 1.0 },
        { source: "time series", target: "syslog", weight: 1.0 },
        { source: "time series", target: "ip routing", weight: 1.0 },
        { source: "time series", target: "public cloud", weight: 1.0 },
        { source: "time series", target: "cloud infrastructure", weight: 1.0 },
        { source: "time series", target: "object storage", weight: 1.0 },
        { source: "time series", target: "docker container", weight: 1.0 },
        { source: "time series", target: "pytorch", weight: 1.0 },
        { source: "time series", target: "routing protocols", weight: 1.0 },
        { source: "time series", target: "terraform", weight: 1.0 },
        { source: "time series", target: "api gateway", weight: 1.0 },
        { source: "time series", target: "vm", weight: 1.0 },
        { source: "time series", target: "jupyter", weight: 1.0 },
        { source: "time series", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 96,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "object storage": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "object storage" }
      ],
      links: [
        { source: "object storage", target: "scrum", weight: 1.0 },
        { source: "object storage", target: "docker", weight: 1.0 },
        { source: "object storage", target: "kubernetes", weight: 1.0 },
        { source: "object storage", target: "nginx", weight: 1.0 },
        { source: "object storage", target: "git", weight: 1.0 },
        { source: "object storage", target: "linux", weight: 1.0 },
        { source: "object storage", target: "python", weight: 1.0 },
        { source: "object storage", target: "flask", weight: 1.0 },
        { source: "object storage", target: "json", weight: 1.0 },
        { source: "object storage", target: "devops", weight: 1.0 },
        { source: "object storage", target: "mise en place", weight: 1.0 },
        { source: "object storage", target: "front end", weight: 1.0 },
        { source: "object storage", target: "gitlab", weight: 1.0 },
        { source: "object storage", target: "scala", weight: 1.0 },
        { source: "object storage", target: "traefik", weight: 1.0 },
        { source: "object storage", target: "yaml", weight: 1.0 },
        { source: "object storage", target: "prometheus", weight: 1.0 },
        { source: "object storage", target: "machine learning", weight: 1.0 },
        { source: "object storage", target: "deep learning", weight: 1.0 },
        { source: "object storage", target: "data science", weight: 1.0 },
        { source: "object storage", target: "user story", weight: 1.0 },
        { source: "object storage", target: "xgboost", weight: 1.0 },
        { source: "object storage", target: "syslog", weight: 1.0 },
        { source: "object storage", target: "ip routing", weight: 1.0 },
        { source: "object storage", target: "public cloud", weight: 1.0 },
        {
          source: "object storage",
          target: "cloud infrastructure",
          weight: 1.0
        },
        { source: "object storage", target: "time series", weight: 1.0 },
        { source: "object storage", target: "docker container", weight: 1.0 },
        { source: "object storage", target: "pytorch", weight: 1.0 },
        { source: "object storage", target: "routing protocols", weight: 1.0 },
        { source: "object storage", target: "terraform", weight: 1.0 },
        { source: "object storage", target: "api gateway", weight: 1.0 },
        { source: "object storage", target: "vm", weight: 1.0 },
        { source: "object storage", target: "jupyter", weight: 1.0 },
        { source: "object storage", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 95,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "docker container": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "docker container" }
      ],
      links: [
        { source: "docker container", target: "scrum", weight: 1.0 },
        { source: "docker container", target: "docker", weight: 1.0 },
        { source: "docker container", target: "kubernetes", weight: 1.0 },
        { source: "docker container", target: "nginx", weight: 1.0 },
        { source: "docker container", target: "git", weight: 1.0 },
        { source: "docker container", target: "linux", weight: 1.0 },
        { source: "docker container", target: "python", weight: 1.0 },
        { source: "docker container", target: "flask", weight: 1.0 },
        { source: "docker container", target: "json", weight: 1.0 },
        { source: "docker container", target: "devops", weight: 1.0 },
        { source: "docker container", target: "mise en place", weight: 1.0 },
        { source: "docker container", target: "front end", weight: 1.0 },
        { source: "docker container", target: "gitlab", weight: 1.0 },
        { source: "docker container", target: "scala", weight: 1.0 },
        { source: "docker container", target: "traefik", weight: 1.0 },
        { source: "docker container", target: "yaml", weight: 1.0 },
        { source: "docker container", target: "prometheus", weight: 1.0 },
        { source: "docker container", target: "machine learning", weight: 1.0 },
        { source: "docker container", target: "deep learning", weight: 1.0 },
        { source: "docker container", target: "data science", weight: 1.0 },
        { source: "docker container", target: "user story", weight: 1.0 },
        { source: "docker container", target: "xgboost", weight: 1.0 },
        { source: "docker container", target: "syslog", weight: 1.0 },
        { source: "docker container", target: "ip routing", weight: 1.0 },
        { source: "docker container", target: "public cloud", weight: 1.0 },
        {
          source: "docker container",
          target: "cloud infrastructure",
          weight: 1.0
        },
        { source: "docker container", target: "time series", weight: 1.0 },
        { source: "docker container", target: "object storage", weight: 1.0 },
        { source: "docker container", target: "pytorch", weight: 1.0 },
        {
          source: "docker container",
          target: "routing protocols",
          weight: 1.0
        },
        { source: "docker container", target: "terraform", weight: 1.0 },
        { source: "docker container", target: "api gateway", weight: 1.0 },
        { source: "docker container", target: "vm", weight: 1.0 },
        { source: "docker container", target: "jupyter", weight: 1.0 },
        { source: "docker container", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 94,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  pytorch: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "pytorch" }
      ],
      links: [
        { source: "pytorch", target: "scrum", weight: 1.0 },
        { source: "pytorch", target: "docker", weight: 1.0 },
        { source: "pytorch", target: "kubernetes", weight: 1.0 },
        { source: "pytorch", target: "nginx", weight: 1.0 },
        { source: "pytorch", target: "git", weight: 1.0 },
        { source: "pytorch", target: "linux", weight: 1.0 },
        { source: "pytorch", target: "python", weight: 1.0 },
        { source: "pytorch", target: "flask", weight: 1.0 },
        { source: "pytorch", target: "json", weight: 1.0 },
        { source: "pytorch", target: "devops", weight: 1.0 },
        { source: "pytorch", target: "mise en place", weight: 1.0 },
        { source: "pytorch", target: "front end", weight: 1.0 },
        { source: "pytorch", target: "gitlab", weight: 1.0 },
        { source: "pytorch", target: "scala", weight: 1.0 },
        { source: "pytorch", target: "traefik", weight: 1.0 },
        { source: "pytorch", target: "yaml", weight: 1.0 },
        { source: "pytorch", target: "prometheus", weight: 1.0 },
        { source: "pytorch", target: "machine learning", weight: 1.0 },
        { source: "pytorch", target: "deep learning", weight: 1.0 },
        { source: "pytorch", target: "data science", weight: 1.0 },
        { source: "pytorch", target: "user story", weight: 1.0 },
        { source: "pytorch", target: "xgboost", weight: 1.0 },
        { source: "pytorch", target: "syslog", weight: 1.0 },
        { source: "pytorch", target: "ip routing", weight: 1.0 },
        { source: "pytorch", target: "public cloud", weight: 1.0 },
        { source: "pytorch", target: "cloud infrastructure", weight: 1.0 },
        { source: "pytorch", target: "time series", weight: 1.0 },
        { source: "pytorch", target: "object storage", weight: 1.0 },
        { source: "pytorch", target: "docker container", weight: 1.0 },
        { source: "pytorch", target: "routing protocols", weight: 1.0 },
        { source: "pytorch", target: "terraform", weight: 1.0 },
        { source: "pytorch", target: "api gateway", weight: 1.0 },
        { source: "pytorch", target: "vm", weight: 1.0 },
        { source: "pytorch", target: "jupyter", weight: 1.0 },
        { source: "pytorch", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 93,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  "routing protocols": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "routing protocols" }
      ],
      links: [
        { source: "routing protocols", target: "scrum", weight: 1.0 },
        { source: "routing protocols", target: "docker", weight: 1.0 },
        { source: "routing protocols", target: "kubernetes", weight: 1.0 },
        { source: "routing protocols", target: "nginx", weight: 1.0 },
        { source: "routing protocols", target: "git", weight: 1.0 },
        { source: "routing protocols", target: "linux", weight: 1.0 },
        { source: "routing protocols", target: "python", weight: 1.0 },
        { source: "routing protocols", target: "flask", weight: 1.0 },
        { source: "routing protocols", target: "json", weight: 1.0 },
        { source: "routing protocols", target: "devops", weight: 1.0 },
        { source: "routing protocols", target: "mise en place", weight: 1.0 },
        { source: "routing protocols", target: "front end", weight: 1.0 },
        { source: "routing protocols", target: "gitlab", weight: 1.0 },
        { source: "routing protocols", target: "scala", weight: 1.0 },
        { source: "routing protocols", target: "traefik", weight: 1.0 },
        { source: "routing protocols", target: "yaml", weight: 1.0 },
        { source: "routing protocols", target: "prometheus", weight: 1.0 },
        {
          source: "routing protocols",
          target: "machine learning",
          weight: 1.0
        },
        { source: "routing protocols", target: "deep learning", weight: 1.0 },
        { source: "routing protocols", target: "data science", weight: 1.0 },
        { source: "routing protocols", target: "user story", weight: 1.0 },
        { source: "routing protocols", target: "xgboost", weight: 1.0 },
        { source: "routing protocols", target: "syslog", weight: 1.0 },
        { source: "routing protocols", target: "ip routing", weight: 1.0 },
        { source: "routing protocols", target: "public cloud", weight: 1.0 },
        {
          source: "routing protocols",
          target: "cloud infrastructure",
          weight: 1.0
        },
        { source: "routing protocols", target: "time series", weight: 1.0 },
        { source: "routing protocols", target: "object storage", weight: 1.0 },
        {
          source: "routing protocols",
          target: "docker container",
          weight: 1.0
        },
        { source: "routing protocols", target: "pytorch", weight: 1.0 },
        { source: "routing protocols", target: "terraform", weight: 1.0 },
        { source: "routing protocols", target: "api gateway", weight: 1.0 },
        { source: "routing protocols", target: "vm", weight: 1.0 },
        { source: "routing protocols", target: "jupyter", weight: 1.0 },
        { source: "routing protocols", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 92,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574
    }
  },
  terraform: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "terraform" }
      ],
      links: [
        { source: "terraform", target: "scrum", weight: 1.0 },
        { source: "terraform", target: "docker", weight: 1.0 },
        { source: "terraform", target: "kubernetes", weight: 2.0 },
        { source: "terraform", target: "nginx", weight: 1.0 },
        { source: "terraform", target: "git", weight: 1.0 },
        { source: "terraform", target: "linux", weight: 1.0 },
        { source: "terraform", target: "python", weight: 1.0 },
        { source: "terraform", target: "flask", weight: 1.0 },
        { source: "terraform", target: "json", weight: 1.0 },
        { source: "terraform", target: "devops", weight: 1.0 },
        { source: "terraform", target: "mise en place", weight: 1.0 },
        { source: "terraform", target: "front end", weight: 1.0 },
        { source: "terraform", target: "gitlab", weight: 1.0 },
        { source: "terraform", target: "scala", weight: 1.0 },
        { source: "terraform", target: "traefik", weight: 1.0 },
        { source: "terraform", target: "yaml", weight: 1.0 },
        { source: "terraform", target: "prometheus", weight: 1.0 },
        { source: "terraform", target: "machine learning", weight: 1.0 },
        { source: "terraform", target: "deep learning", weight: 1.0 },
        { source: "terraform", target: "data science", weight: 1.0 },
        { source: "terraform", target: "user story", weight: 1.0 },
        { source: "terraform", target: "xgboost", weight: 1.0 },
        { source: "terraform", target: "syslog", weight: 1.0 },
        { source: "terraform", target: "ip routing", weight: 1.0 },
        { source: "terraform", target: "public cloud", weight: 1.0 },
        { source: "terraform", target: "cloud infrastructure", weight: 1.0 },
        { source: "terraform", target: "time series", weight: 1.0 },
        { source: "terraform", target: "object storage", weight: 1.0 },
        { source: "terraform", target: "docker container", weight: 1.0 },
        { source: "terraform", target: "pytorch", weight: 1.0 },
        { source: "terraform", target: "routing protocols", weight: 1.0 },
        { source: "terraform", target: "api gateway", weight: 1.0 },
        { source: "terraform", target: "vm", weight: 1.0 },
        { source: "terraform", target: "jupyter", weight: 1.0 },
        { source: "terraform", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 91,
    twins: {
      kubernetes: 0.07403074689492148,
      telemetry: 0.027234389797208196,
      jupyter: 0.027234389797208196,
      vm: 0.027234389797208196,
      "api gateway": 0.027234389797208196
    }
  },
  "api gateway": {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "api gateway" }
      ],
      links: [
        { source: "api gateway", target: "scrum", weight: 1.0 },
        { source: "api gateway", target: "docker", weight: 1.0 },
        { source: "api gateway", target: "kubernetes", weight: 1.0 },
        { source: "api gateway", target: "nginx", weight: 1.0 },
        { source: "api gateway", target: "git", weight: 1.0 },
        { source: "api gateway", target: "linux", weight: 1.0 },
        { source: "api gateway", target: "python", weight: 1.0 },
        { source: "api gateway", target: "flask", weight: 1.0 },
        { source: "api gateway", target: "json", weight: 1.0 },
        { source: "api gateway", target: "devops", weight: 1.0 },
        { source: "api gateway", target: "mise en place", weight: 1.0 },
        { source: "api gateway", target: "front end", weight: 1.0 },
        { source: "api gateway", target: "gitlab", weight: 1.0 },
        { source: "api gateway", target: "scala", weight: 1.0 },
        { source: "api gateway", target: "traefik", weight: 1.0 },
        { source: "api gateway", target: "yaml", weight: 1.0 },
        { source: "api gateway", target: "prometheus", weight: 1.0 },
        { source: "api gateway", target: "machine learning", weight: 1.0 },
        { source: "api gateway", target: "deep learning", weight: 1.0 },
        { source: "api gateway", target: "data science", weight: 1.0 },
        { source: "api gateway", target: "user story", weight: 1.0 },
        { source: "api gateway", target: "xgboost", weight: 1.0 },
        { source: "api gateway", target: "syslog", weight: 1.0 },
        { source: "api gateway", target: "ip routing", weight: 1.0 },
        { source: "api gateway", target: "public cloud", weight: 1.0 },
        { source: "api gateway", target: "cloud infrastructure", weight: 1.0 },
        { source: "api gateway", target: "time series", weight: 1.0 },
        { source: "api gateway", target: "object storage", weight: 1.0 },
        { source: "api gateway", target: "docker container", weight: 1.0 },
        { source: "api gateway", target: "pytorch", weight: 1.0 },
        { source: "api gateway", target: "routing protocols", weight: 1.0 },
        { source: "api gateway", target: "terraform", weight: 1.0 },
        { source: "api gateway", target: "vm", weight: 1.0 },
        { source: "api gateway", target: "jupyter", weight: 1.0 },
        { source: "api gateway", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 90,
    twins: {
      telemetry: 0.028571428571428574,
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      terraform: 0.028571428571428574,
      "routing protocols": 0.028571428571428574
    }
  },
  vm: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "jupyter" },
        { id: "telemetry" },
        { id: "vm" }
      ],
      links: [
        { source: "vm", target: "scrum", weight: 2.0 },
        { source: "vm", target: "docker", weight: 1.0 },
        { source: "vm", target: "kubernetes", weight: 1.0 },
        { source: "vm", target: "nginx", weight: 1.0 },
        { source: "vm", target: "git", weight: 1.0 },
        { source: "vm", target: "linux", weight: 1.0 },
        { source: "vm", target: "python", weight: 1.0 },
        { source: "vm", target: "flask", weight: 1.0 },
        { source: "vm", target: "json", weight: 1.0 },
        { source: "vm", target: "devops", weight: 2.0 },
        { source: "vm", target: "mise en place", weight: 2.0 },
        { source: "vm", target: "front end", weight: 1.0 },
        { source: "vm", target: "gitlab", weight: 1.0 },
        { source: "vm", target: "scala", weight: 1.0 },
        { source: "vm", target: "traefik", weight: 1.0 },
        { source: "vm", target: "yaml", weight: 1.0 },
        { source: "vm", target: "prometheus", weight: 1.0 },
        { source: "vm", target: "machine learning", weight: 1.0 },
        { source: "vm", target: "deep learning", weight: 1.0 },
        { source: "vm", target: "data science", weight: 1.0 },
        { source: "vm", target: "user story", weight: 1.0 },
        { source: "vm", target: "xgboost", weight: 1.0 },
        { source: "vm", target: "syslog", weight: 1.0 },
        { source: "vm", target: "ip routing", weight: 1.0 },
        { source: "vm", target: "public cloud", weight: 1.0 },
        { source: "vm", target: "cloud infrastructure", weight: 1.0 },
        { source: "vm", target: "time series", weight: 1.0 },
        { source: "vm", target: "object storage", weight: 1.0 },
        { source: "vm", target: "docker container", weight: 1.0 },
        { source: "vm", target: "pytorch", weight: 1.0 },
        { source: "vm", target: "routing protocols", weight: 1.0 },
        { source: "vm", target: "terraform", weight: 1.0 },
        { source: "vm", target: "api gateway", weight: 1.0 },
        { source: "vm", target: "jupyter", weight: 1.0 },
        { source: "vm", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 2 },
      count_job: 2
    },
    priority: 89,
    twins: {
      "mise en place": 0.06769498912525862,
      devops: 0.06769498912525862,
      scrum: 0.06769498912525862,
      telemetry: 0.024903594769507008,
      jupyter: 0.024903594769507008
    }
  },
  jupyter: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "telemetry" },
        { id: "jupyter" }
      ],
      links: [
        { source: "jupyter", target: "scrum", weight: 1.0 },
        { source: "jupyter", target: "docker", weight: 1.0 },
        { source: "jupyter", target: "kubernetes", weight: 1.0 },
        { source: "jupyter", target: "nginx", weight: 1.0 },
        { source: "jupyter", target: "git", weight: 1.0 },
        { source: "jupyter", target: "linux", weight: 1.0 },
        { source: "jupyter", target: "python", weight: 1.0 },
        { source: "jupyter", target: "flask", weight: 1.0 },
        { source: "jupyter", target: "json", weight: 1.0 },
        { source: "jupyter", target: "devops", weight: 1.0 },
        { source: "jupyter", target: "mise en place", weight: 1.0 },
        { source: "jupyter", target: "front end", weight: 1.0 },
        { source: "jupyter", target: "gitlab", weight: 1.0 },
        { source: "jupyter", target: "scala", weight: 1.0 },
        { source: "jupyter", target: "traefik", weight: 1.0 },
        { source: "jupyter", target: "yaml", weight: 1.0 },
        { source: "jupyter", target: "prometheus", weight: 1.0 },
        { source: "jupyter", target: "machine learning", weight: 1.0 },
        { source: "jupyter", target: "deep learning", weight: 1.0 },
        { source: "jupyter", target: "data science", weight: 1.0 },
        { source: "jupyter", target: "user story", weight: 1.0 },
        { source: "jupyter", target: "xgboost", weight: 1.0 },
        { source: "jupyter", target: "syslog", weight: 1.0 },
        { source: "jupyter", target: "ip routing", weight: 1.0 },
        { source: "jupyter", target: "public cloud", weight: 1.0 },
        { source: "jupyter", target: "cloud infrastructure", weight: 1.0 },
        { source: "jupyter", target: "time series", weight: 1.0 },
        { source: "jupyter", target: "object storage", weight: 1.0 },
        { source: "jupyter", target: "docker container", weight: 1.0 },
        { source: "jupyter", target: "pytorch", weight: 1.0 },
        { source: "jupyter", target: "routing protocols", weight: 1.0 },
        { source: "jupyter", target: "terraform", weight: 1.0 },
        { source: "jupyter", target: "api gateway", weight: 1.0 },
        { source: "jupyter", target: "vm", weight: 1.0 },
        { source: "jupyter", target: "telemetry", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 88,
    twins: {
      telemetry: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574,
      "routing protocols": 0.028571428571428574
    }
  },
  telemetry: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "docker" },
        { id: "kubernetes" },
        { id: "nginx" },
        { id: "git" },
        { id: "linux" },
        { id: "python" },
        { id: "flask" },
        { id: "json" },
        { id: "devops" },
        { id: "mise en place" },
        { id: "front end" },
        { id: "gitlab" },
        { id: "scala" },
        { id: "traefik" },
        { id: "yaml" },
        { id: "prometheus" },
        { id: "machine learning" },
        { id: "deep learning" },
        { id: "data science" },
        { id: "user story" },
        { id: "xgboost" },
        { id: "syslog" },
        { id: "ip routing" },
        { id: "public cloud" },
        { id: "cloud infrastructure" },
        { id: "time series" },
        { id: "object storage" },
        { id: "docker container" },
        { id: "pytorch" },
        { id: "routing protocols" },
        { id: "terraform" },
        { id: "api gateway" },
        { id: "vm" },
        { id: "jupyter" },
        { id: "telemetry" }
      ],
      links: [
        { source: "telemetry", target: "scrum", weight: 1.0 },
        { source: "telemetry", target: "docker", weight: 1.0 },
        { source: "telemetry", target: "kubernetes", weight: 1.0 },
        { source: "telemetry", target: "nginx", weight: 1.0 },
        { source: "telemetry", target: "git", weight: 1.0 },
        { source: "telemetry", target: "linux", weight: 1.0 },
        { source: "telemetry", target: "python", weight: 1.0 },
        { source: "telemetry", target: "flask", weight: 1.0 },
        { source: "telemetry", target: "json", weight: 1.0 },
        { source: "telemetry", target: "devops", weight: 1.0 },
        { source: "telemetry", target: "mise en place", weight: 1.0 },
        { source: "telemetry", target: "front end", weight: 1.0 },
        { source: "telemetry", target: "gitlab", weight: 1.0 },
        { source: "telemetry", target: "scala", weight: 1.0 },
        { source: "telemetry", target: "traefik", weight: 1.0 },
        { source: "telemetry", target: "yaml", weight: 1.0 },
        { source: "telemetry", target: "prometheus", weight: 1.0 },
        { source: "telemetry", target: "machine learning", weight: 1.0 },
        { source: "telemetry", target: "deep learning", weight: 1.0 },
        { source: "telemetry", target: "data science", weight: 1.0 },
        { source: "telemetry", target: "user story", weight: 1.0 },
        { source: "telemetry", target: "xgboost", weight: 1.0 },
        { source: "telemetry", target: "syslog", weight: 1.0 },
        { source: "telemetry", target: "ip routing", weight: 1.0 },
        { source: "telemetry", target: "public cloud", weight: 1.0 },
        { source: "telemetry", target: "cloud infrastructure", weight: 1.0 },
        { source: "telemetry", target: "time series", weight: 1.0 },
        { source: "telemetry", target: "object storage", weight: 1.0 },
        { source: "telemetry", target: "docker container", weight: 1.0 },
        { source: "telemetry", target: "pytorch", weight: 1.0 },
        { source: "telemetry", target: "routing protocols", weight: 1.0 },
        { source: "telemetry", target: "terraform", weight: 1.0 },
        { source: "telemetry", target: "api gateway", weight: 1.0 },
        { source: "telemetry", target: "vm", weight: 1.0 },
        { source: "telemetry", target: "jupyter", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 87,
    twins: {
      jupyter: 0.028571428571428574,
      vm: 0.028571428571428574,
      "api gateway": 0.028571428571428574,
      terraform: 0.028571428571428574,
      "routing protocols": 0.028571428571428574
    }
  },
  drupal: {
    neiGraph: {
      nodes: [{ id: "sql" }, { id: "php" }, { id: "drupal" }],
      links: [
        { source: "drupal", target: "sql", weight: 1.0 },
        { source: "drupal", target: "php", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 86,
    twins: { php: 0.5, sql: 0.5 }
  },
  avaya: {
    neiGraph: {
      nodes: [
        { id: "firewall" },
        { id: "installation" },
        { id: "tcp/ip" },
        { id: "session" },
        { id: "signaling" },
        { id: "trunking" },
        { id: "iptables" },
        { id: "avaya" }
      ],
      links: [
        { source: "avaya", target: "firewall", weight: 1.0 },
        { source: "avaya", target: "installation", weight: 1.0 },
        { source: "avaya", target: "tcp/ip", weight: 1.0 },
        { source: "avaya", target: "session", weight: 1.0 },
        { source: "avaya", target: "signaling", weight: 1.0 },
        { source: "avaya", target: "trunking", weight: 1.0 },
        { source: "avaya", target: "iptables", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1, "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 3 },
      study_lvl: { "Bac +5 et plus": 2, "Bac +3": 1 },
      count_job: 3
    },
    priority: 85,
    twins: {
      iptables: 0.14285714285714285,
      trunking: 0.14285714285714285,
      signaling: 0.14285714285714285,
      session: 0.14285714285714285,
      "tcp/ip": 0.14285714285714285
    }
  },
  session: {
    neiGraph: {
      nodes: [
        { id: "installation" },
        { id: "avaya" },
        { id: "signaling" },
        { id: "trunking" },
        { id: "session" }
      ],
      links: [
        { source: "session", target: "installation", weight: 1.0 },
        { source: "session", target: "avaya", weight: 1.0 },
        { source: "session", target: "signaling", weight: 1.0 },
        { source: "session", target: "trunking", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 84,
    twins: { trunking: 0.25, signaling: 0.25, avaya: 0.25, installation: 0.25 }
  },
  signaling: {
    neiGraph: {
      nodes: [
        { id: "installation" },
        { id: "avaya" },
        { id: "session" },
        { id: "trunking" },
        { id: "signaling" }
      ],
      links: [
        { source: "signaling", target: "installation", weight: 1.0 },
        { source: "signaling", target: "avaya", weight: 1.0 },
        { source: "signaling", target: "session", weight: 1.0 },
        { source: "signaling", target: "trunking", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 83,
    twins: { trunking: 0.25, session: 0.25, avaya: 0.25, installation: 0.25 }
  },
  trunking: {
    neiGraph: {
      nodes: [
        { id: "installation" },
        { id: "avaya" },
        { id: "session" },
        { id: "signaling" },
        { id: "trunking" }
      ],
      links: [
        { source: "trunking", target: "installation", weight: 1.0 },
        { source: "trunking", target: "avaya", weight: 1.0 },
        { source: "trunking", target: "session", weight: 1.0 },
        { source: "trunking", target: "signaling", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 82,
    twins: { signaling: 0.25, session: 0.25, avaya: 0.25, installation: 0.25 }
  },
  "api management": {
    neiGraph: {
      nodes: [{ id: "java" }, { id: "api management" }],
      links: [{ source: "api management", target: "java", weight: 1.0 }]
    },
    stats: {
      exp: { "De 10 ?? 20 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 81,
    twins: { java: 1.0 }
  },
  "insurance products": {
    neiGraph: {
      nodes: [
        { id: "portfolio management" },
        { id: "e" },
        { id: "customer support" },
        { id: "insurance products" }
      ],
      links: [
        {
          source: "insurance products",
          target: "portfolio management",
          weight: 1.0
        },
        { source: "insurance products", target: "e", weight: 1.0 },
        {
          source: "insurance products",
          target: "customer support",
          weight: 1.0
        }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 5,
    twins: {
      "customer support": 0.3333333333333333,
      e: 0.3333333333333333,
      "portfolio management": 0.3333333333333333
    }
  },
  "portfolio management": {
    neiGraph: {
      nodes: [
        { id: "insurance products" },
        { id: "e" },
        { id: "customer support" },
        { id: "portfolio management" }
      ],
      links: [
        {
          source: "portfolio management",
          target: "insurance products",
          weight: 1.0
        },
        { source: "portfolio management", target: "e", weight: 1.0 },
        {
          source: "portfolio management",
          target: "customer support",
          weight: 1.0
        }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 21,
    twins: {
      "customer support": 0.3333333333333333,
      e: 0.3333333333333333,
      "insurance products": 0.3333333333333333
    }
  },
  e: {
    neiGraph: {
      nodes: [
        { id: "insurance products" },
        { id: "portfolio management" },
        { id: "customer support" },
        { id: "e-commerce" },
        { id: "e" }
      ],
      links: [
        { source: "e", target: "insurance products", weight: 1.0 },
        { source: "e", target: "portfolio management", weight: 1.0 },
        { source: "e", target: "customer support", weight: 1.0 },
        { source: "e", target: "e-commerce", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 3, D??butant: 1, "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 4, Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 4, "Bac +4": 1 },
      count_job: 5
    },
    priority: 18,
    twins: {
      "e-commerce": 0.25,
      "customer support": 0.25,
      "portfolio management": 0.25,
      "insurance products": 0.25
    }
  },
  "customer support": {
    neiGraph: {
      nodes: [
        { id: "insurance products" },
        { id: "portfolio management" },
        { id: "e" },
        { id: "customer support" }
      ],
      links: [
        {
          source: "customer support",
          target: "insurance products",
          weight: 1.0
        },
        {
          source: "customer support",
          target: "portfolio management",
          weight: 1.0
        },
        { source: "customer support", target: "e", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 80,
    twins: {
      e: 0.3333333333333333,
      "portfolio management": 0.3333333333333333,
      "insurance products": 0.3333333333333333
    }
  },
  webdev: {
    neiGraph: {
      nodes: [{ id: "java" }, { id: "windev" }, { id: "webdev" }],
      links: [
        { source: "webdev", target: "java", weight: 1.0 },
        { source: "webdev", target: "windev", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 79,
    twins: { windev: 0.5, java: 0.5 }
  },
  "spring framework": {
    neiGraph: {
      nodes: [{ id: "java" }, { id: "spring framework" }],
      links: [{ source: "spring framework", target: "java", weight: 1.0 }]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 78,
    twins: { java: 1.0 }
  },
  iptables: {
    neiGraph: {
      nodes: [{ id: "firewall" }, { id: "avaya" }, { id: "iptables" }],
      links: [
        { source: "iptables", target: "firewall", weight: 1.0 },
        { source: "iptables", target: "avaya", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 77,
    twins: { avaya: 0.5, firewall: 0.5 }
  },
  procurement: {
    neiGraph: {
      nodes: [
        { id: "process improvements" },
        { id: "collaboration tools" },
        { id: "bilingual" },
        { id: "licensing" },
        { id: "procurement" }
      ],
      links: [
        { source: "procurement", target: "process improvements", weight: 1.0 },
        { source: "procurement", target: "collaboration tools", weight: 1.0 },
        { source: "procurement", target: "bilingual", weight: 1.0 },
        { source: "procurement", target: "licensing", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 1,
    twins: {
      licensing: 0.25,
      bilingual: 0.25,
      "collaboration tools": 0.25,
      "process improvements": 0.25
    }
  },
  "process improvements": {
    neiGraph: {
      nodes: [
        { id: "procurement" },
        { id: "collaboration tools" },
        { id: "bilingual" },
        { id: "licensing" },
        { id: "process improvements" }
      ],
      links: [
        { source: "process improvements", target: "procurement", weight: 1.0 },
        {
          source: "process improvements",
          target: "collaboration tools",
          weight: 1.0
        },
        { source: "process improvements", target: "bilingual", weight: 1.0 },
        { source: "process improvements", target: "licensing", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 17,
    twins: {
      licensing: 0.25,
      bilingual: 0.25,
      "collaboration tools": 0.25,
      procurement: 0.25
    }
  },
  "collaboration tools": {
    neiGraph: {
      nodes: [
        { id: "procurement" },
        { id: "process improvements" },
        { id: "bilingual" },
        { id: "licensing" },
        { id: "collaboration tools" }
      ],
      links: [
        { source: "collaboration tools", target: "procurement", weight: 1.0 },
        {
          source: "collaboration tools",
          target: "process improvements",
          weight: 1.0
        },
        { source: "collaboration tools", target: "bilingual", weight: 1.0 },
        { source: "collaboration tools", target: "licensing", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 76,
    twins: {
      licensing: 0.25,
      bilingual: 0.25,
      "process improvements": 0.25,
      procurement: 0.25
    }
  },
  bilingual: {
    neiGraph: {
      nodes: [
        { id: "procurement" },
        { id: "process improvements" },
        { id: "collaboration tools" },
        { id: "licensing" },
        { id: "bilingual" }
      ],
      links: [
        { source: "bilingual", target: "procurement", weight: 1.0 },
        { source: "bilingual", target: "process improvements", weight: 1.0 },
        { source: "bilingual", target: "collaboration tools", weight: 1.0 },
        { source: "bilingual", target: "licensing", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 75,
    twins: {
      licensing: 0.25,
      "collaboration tools": 0.25,
      "process improvements": 0.25,
      procurement: 0.25
    }
  },
  licensing: {
    neiGraph: {
      nodes: [
        { id: "procurement" },
        { id: "process improvements" },
        { id: "collaboration tools" },
        { id: "bilingual" },
        { id: "licensing" }
      ],
      links: [
        { source: "licensing", target: "procurement", weight: 1.0 },
        { source: "licensing", target: "process improvements", weight: 1.0 },
        { source: "licensing", target: "collaboration tools", weight: 1.0 },
        { source: "licensing", target: "bilingual", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 74,
    twins: {
      bilingual: 0.25,
      "collaboration tools": 0.25,
      "process improvements": 0.25,
      procurement: 0.25
    }
  },
  wireshark: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "wireshark" }
      ],
      links: [
        { source: "wireshark", target: "nagios", weight: 1.0 },
        { source: "wireshark", target: "unix", weight: 1.0 },
        { source: "wireshark", target: "scripting", weight: 1.0 },
        { source: "wireshark", target: "veeam", weight: 1.0 },
        { source: "wireshark", target: "clonezilla", weight: 1.0 },
        { source: "wireshark", target: "qmail", weight: 1.0 },
        { source: "wireshark", target: "hyper-v", weight: 1.0 },
        { source: "wireshark", target: "smtp", weight: 1.0 },
        { source: "wireshark", target: "cacti", weight: 1.0 },
        { source: "wireshark", target: "ghost", weight: 1.0 },
        { source: "wireshark", target: "postfix", weight: 1.0 },
        { source: "wireshark", target: "lunix", weight: 1.0 },
        { source: "wireshark", target: "squid", weight: 1.0 },
        { source: "wireshark", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 73,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141
    }
  },
  qmail: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "qmail" }
      ],
      links: [
        { source: "qmail", target: "nagios", weight: 1.0 },
        { source: "qmail", target: "unix", weight: 1.0 },
        { source: "qmail", target: "scripting", weight: 1.0 },
        { source: "qmail", target: "veeam", weight: 1.0 },
        { source: "qmail", target: "clonezilla", weight: 1.0 },
        { source: "qmail", target: "wireshark", weight: 1.0 },
        { source: "qmail", target: "hyper-v", weight: 1.0 },
        { source: "qmail", target: "smtp", weight: 1.0 },
        { source: "qmail", target: "cacti", weight: 1.0 },
        { source: "qmail", target: "ghost", weight: 1.0 },
        { source: "qmail", target: "postfix", weight: 1.0 },
        { source: "qmail", target: "lunix", weight: 1.0 },
        { source: "qmail", target: "squid", weight: 1.0 },
        { source: "qmail", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 72,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141
    }
  },
  "hyper-v": {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "hyper-v" }
      ],
      links: [
        { source: "hyper-v", target: "nagios", weight: 1.0 },
        { source: "hyper-v", target: "unix", weight: 1.0 },
        { source: "hyper-v", target: "scripting", weight: 1.0 },
        { source: "hyper-v", target: "veeam", weight: 1.0 },
        { source: "hyper-v", target: "clonezilla", weight: 1.0 },
        { source: "hyper-v", target: "wireshark", weight: 1.0 },
        { source: "hyper-v", target: "qmail", weight: 1.0 },
        { source: "hyper-v", target: "smtp", weight: 1.0 },
        { source: "hyper-v", target: "cacti", weight: 1.0 },
        { source: "hyper-v", target: "ghost", weight: 1.0 },
        { source: "hyper-v", target: "postfix", weight: 1.0 },
        { source: "hyper-v", target: "lunix", weight: 1.0 },
        { source: "hyper-v", target: "squid", weight: 1.0 },
        { source: "hyper-v", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 71,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141
    }
  },
  smtp: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "smtp" }
      ],
      links: [
        { source: "smtp", target: "nagios", weight: 1.0 },
        { source: "smtp", target: "unix", weight: 1.0 },
        { source: "smtp", target: "scripting", weight: 1.0 },
        { source: "smtp", target: "veeam", weight: 1.0 },
        { source: "smtp", target: "clonezilla", weight: 1.0 },
        { source: "smtp", target: "wireshark", weight: 1.0 },
        { source: "smtp", target: "qmail", weight: 1.0 },
        { source: "smtp", target: "hyper-v", weight: 1.0 },
        { source: "smtp", target: "cacti", weight: 1.0 },
        { source: "smtp", target: "ghost", weight: 1.0 },
        { source: "smtp", target: "postfix", weight: 1.0 },
        { source: "smtp", target: "lunix", weight: 1.0 },
        { source: "smtp", target: "squid", weight: 1.0 },
        { source: "smtp", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 70,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141
    }
  },
  cacti: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "cacti" }
      ],
      links: [
        { source: "cacti", target: "nagios", weight: 1.0 },
        { source: "cacti", target: "unix", weight: 1.0 },
        { source: "cacti", target: "scripting", weight: 1.0 },
        { source: "cacti", target: "veeam", weight: 1.0 },
        { source: "cacti", target: "clonezilla", weight: 1.0 },
        { source: "cacti", target: "wireshark", weight: 1.0 },
        { source: "cacti", target: "qmail", weight: 1.0 },
        { source: "cacti", target: "hyper-v", weight: 1.0 },
        { source: "cacti", target: "smtp", weight: 1.0 },
        { source: "cacti", target: "ghost", weight: 1.0 },
        { source: "cacti", target: "postfix", weight: 1.0 },
        { source: "cacti", target: "lunix", weight: 1.0 },
        { source: "cacti", target: "squid", weight: 1.0 },
        { source: "cacti", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 69,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141
    }
  },
  ghost: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "ghost" }
      ],
      links: [
        { source: "ghost", target: "nagios", weight: 1.0 },
        { source: "ghost", target: "unix", weight: 1.0 },
        { source: "ghost", target: "scripting", weight: 1.0 },
        { source: "ghost", target: "veeam", weight: 1.0 },
        { source: "ghost", target: "clonezilla", weight: 1.0 },
        { source: "ghost", target: "wireshark", weight: 1.0 },
        { source: "ghost", target: "qmail", weight: 1.0 },
        { source: "ghost", target: "hyper-v", weight: 1.0 },
        { source: "ghost", target: "smtp", weight: 1.0 },
        { source: "ghost", target: "cacti", weight: 1.0 },
        { source: "ghost", target: "postfix", weight: 1.0 },
        { source: "ghost", target: "lunix", weight: 1.0 },
        { source: "ghost", target: "squid", weight: 1.0 },
        { source: "ghost", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 68,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      cacti: 0.07142857142857141
    }
  },
  postfix: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" },
        { id: "postfix" }
      ],
      links: [
        { source: "postfix", target: "nagios", weight: 1.0 },
        { source: "postfix", target: "unix", weight: 1.0 },
        { source: "postfix", target: "scripting", weight: 1.0 },
        { source: "postfix", target: "veeam", weight: 1.0 },
        { source: "postfix", target: "clonezilla", weight: 1.0 },
        { source: "postfix", target: "wireshark", weight: 1.0 },
        { source: "postfix", target: "qmail", weight: 1.0 },
        { source: "postfix", target: "hyper-v", weight: 1.0 },
        { source: "postfix", target: "smtp", weight: 1.0 },
        { source: "postfix", target: "cacti", weight: 1.0 },
        { source: "postfix", target: "ghost", weight: 1.0 },
        { source: "postfix", target: "lunix", weight: 1.0 },
        { source: "postfix", target: "squid", weight: 1.0 },
        { source: "postfix", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 67,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      ghost: 0.07142857142857141,
      cacti: 0.07142857142857141
    }
  },
  lunix: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "squid" },
        { id: "exim" },
        { id: "lunix" }
      ],
      links: [
        { source: "lunix", target: "nagios", weight: 1.0 },
        { source: "lunix", target: "unix", weight: 1.0 },
        { source: "lunix", target: "scripting", weight: 1.0 },
        { source: "lunix", target: "veeam", weight: 1.0 },
        { source: "lunix", target: "clonezilla", weight: 1.0 },
        { source: "lunix", target: "wireshark", weight: 1.0 },
        { source: "lunix", target: "qmail", weight: 1.0 },
        { source: "lunix", target: "hyper-v", weight: 1.0 },
        { source: "lunix", target: "smtp", weight: 1.0 },
        { source: "lunix", target: "cacti", weight: 1.0 },
        { source: "lunix", target: "ghost", weight: 1.0 },
        { source: "lunix", target: "postfix", weight: 1.0 },
        { source: "lunix", target: "squid", weight: 1.0 },
        { source: "lunix", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 66,
    twins: {
      exim: 0.07142857142857141,
      squid: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141,
      cacti: 0.07142857142857141
    }
  },
  squid: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "exim" },
        { id: "squid" }
      ],
      links: [
        { source: "squid", target: "nagios", weight: 1.0 },
        { source: "squid", target: "unix", weight: 1.0 },
        { source: "squid", target: "scripting", weight: 1.0 },
        { source: "squid", target: "veeam", weight: 1.0 },
        { source: "squid", target: "clonezilla", weight: 1.0 },
        { source: "squid", target: "wireshark", weight: 1.0 },
        { source: "squid", target: "qmail", weight: 1.0 },
        { source: "squid", target: "hyper-v", weight: 1.0 },
        { source: "squid", target: "smtp", weight: 1.0 },
        { source: "squid", target: "cacti", weight: 1.0 },
        { source: "squid", target: "ghost", weight: 1.0 },
        { source: "squid", target: "postfix", weight: 1.0 },
        { source: "squid", target: "lunix", weight: 1.0 },
        { source: "squid", target: "exim", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 65,
    twins: {
      exim: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141,
      cacti: 0.07142857142857141
    }
  },
  exim: {
    neiGraph: {
      nodes: [
        { id: "nagios" },
        { id: "unix" },
        { id: "scripting" },
        { id: "veeam" },
        { id: "clonezilla" },
        { id: "wireshark" },
        { id: "qmail" },
        { id: "hyper-v" },
        { id: "smtp" },
        { id: "cacti" },
        { id: "ghost" },
        { id: "postfix" },
        { id: "lunix" },
        { id: "squid" },
        { id: "exim" }
      ],
      links: [
        { source: "exim", target: "nagios", weight: 1.0 },
        { source: "exim", target: "unix", weight: 1.0 },
        { source: "exim", target: "scripting", weight: 1.0 },
        { source: "exim", target: "veeam", weight: 1.0 },
        { source: "exim", target: "clonezilla", weight: 1.0 },
        { source: "exim", target: "wireshark", weight: 1.0 },
        { source: "exim", target: "qmail", weight: 1.0 },
        { source: "exim", target: "hyper-v", weight: 1.0 },
        { source: "exim", target: "smtp", weight: 1.0 },
        { source: "exim", target: "cacti", weight: 1.0 },
        { source: "exim", target: "ghost", weight: 1.0 },
        { source: "exim", target: "postfix", weight: 1.0 },
        { source: "exim", target: "lunix", weight: 1.0 },
        { source: "exim", target: "squid", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 64,
    twins: {
      squid: 0.07142857142857141,
      lunix: 0.07142857142857141,
      postfix: 0.07142857142857141,
      ghost: 0.07142857142857141,
      cacti: 0.07142857142857141
    }
  },
  switch: {
    neiGraph: {
      nodes: [{ id: "firewall" }, { id: "switch" }],
      links: [{ source: "switch", target: "firewall", weight: 1.0 }]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 63,
    twins: { firewall: 1.0 }
  },
  xamarin: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "linux" },
        { id: "sql" },
        { id: "angular" },
        { id: "typescript" },
        { id: "javascript" },
        { id: "asp.net" },
        { id: "json" },
        { id: "devops" },
        { id: "hibernate" },
        { id: "sonar" },
        { id: "back end" },
        { id: "front end" },
        { id: "spring boot" },
        { id: "bootstrap" },
        { id: "blazor" },
        { id: "xamarin" }
      ],
      links: [
        { source: "xamarin", target: "android", weight: 1.0 },
        { source: "xamarin", target: "java", weight: 1.0 },
        { source: "xamarin", target: "docker", weight: 1.0 },
        { source: "xamarin", target: "ansible", weight: 1.0 },
        { source: "xamarin", target: "jenkins", weight: 1.0 },
        { source: "xamarin", target: "linux", weight: 1.0 },
        { source: "xamarin", target: "sql", weight: 1.0 },
        { source: "xamarin", target: "angular", weight: 1.0 },
        { source: "xamarin", target: "typescript", weight: 1.0 },
        { source: "xamarin", target: "javascript", weight: 1.0 },
        { source: "xamarin", target: "asp.net", weight: 1.0 },
        { source: "xamarin", target: "json", weight: 1.0 },
        { source: "xamarin", target: "devops", weight: 2.0 },
        { source: "xamarin", target: "hibernate", weight: 1.0 },
        { source: "xamarin", target: "sonar", weight: 1.0 },
        { source: "xamarin", target: "back end", weight: 2.0 },
        { source: "xamarin", target: "front end", weight: 1.0 },
        { source: "xamarin", target: "spring boot", weight: 1.0 },
        { source: "xamarin", target: "bootstrap", weight: 1.0 },
        { source: "xamarin", target: "blazor", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 2 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +5 et plus": 1, "Bac +4": 1 },
      count_job: 2
    },
    priority: 62,
    twins: {
      "back end": 0.11598465834203694,
      devops: 0.11598465834203694,
      blazor: 0.042668371295329216,
      bootstrap: 0.042668371295329216,
      "spring boot": 0.042668371295329216
    }
  },
  blazor: {
    neiGraph: {
      nodes: [
        { id: "javascript" },
        { id: "asp.net" },
        { id: "devops" },
        { id: "back end" },
        { id: "xamarin" },
        { id: "blazor" }
      ],
      links: [
        { source: "blazor", target: "javascript", weight: 1.0 },
        { source: "blazor", target: "asp.net", weight: 1.0 },
        { source: "blazor", target: "devops", weight: 1.0 },
        { source: "blazor", target: "back end", weight: 1.0 },
        { source: "blazor", target: "xamarin", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 61,
    twins: {
      xamarin: 0.2,
      "back end": 0.2,
      devops: 0.2,
      "asp.net": 0.2,
      javascript: 0.2
    }
  },
  autodesk: {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "unix" },
        { id: "firewall" },
        { id: "tcp/ip" },
        { id: "autodesk" }
      ],
      links: [
        { source: "autodesk", target: "linux", weight: 1.0 },
        { source: "autodesk", target: "unix", weight: 1.0 },
        { source: "autodesk", target: "firewall", weight: 1.0 },
        { source: "autodesk", target: "tcp/ip", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 60,
    twins: { "tcp/ip": 0.25, firewall: 0.25, unix: 0.25, linux: 0.25 }
  },
  "agile methodology": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "sql" },
        { id: "angular" },
        { id: "json" },
        { id: "nice" },
        { id: "junit" },
        { id: "spring security" },
        { id: "spring boot" },
        { id: "spring mvc" },
        { id: "mockito" },
        { id: "agile methodology" }
      ],
      links: [
        { source: "agile methodology", target: "java", weight: 1.0 },
        { source: "agile methodology", target: "jenkins", weight: 1.0 },
        { source: "agile methodology", target: "git", weight: 1.0 },
        { source: "agile methodology", target: "mysql", weight: 1.0 },
        { source: "agile methodology", target: "sql", weight: 1.0 },
        { source: "agile methodology", target: "angular", weight: 1.0 },
        { source: "agile methodology", target: "json", weight: 1.0 },
        { source: "agile methodology", target: "nice", weight: 1.0 },
        { source: "agile methodology", target: "junit", weight: 1.0 },
        { source: "agile methodology", target: "spring security", weight: 1.0 },
        { source: "agile methodology", target: "spring boot", weight: 1.0 },
        { source: "agile methodology", target: "spring mvc", weight: 1.0 },
        { source: "agile methodology", target: "mockito", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 59,
    twins: {
      mockito: 0.07692307692307691,
      "spring mvc": 0.07692307692307691,
      "spring boot": 0.07692307692307691,
      "spring security": 0.07692307692307691,
      junit: 0.07692307692307691
    }
  },
  "spring mvc": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "sql" },
        { id: "angular" },
        { id: "json" },
        { id: "nice" },
        { id: "junit" },
        { id: "spring security" },
        { id: "spring boot" },
        { id: "agile methodology" },
        { id: "mockito" },
        { id: "spring mvc" }
      ],
      links: [
        { source: "spring mvc", target: "java", weight: 1.0 },
        { source: "spring mvc", target: "jenkins", weight: 1.0 },
        { source: "spring mvc", target: "git", weight: 1.0 },
        { source: "spring mvc", target: "mysql", weight: 1.0 },
        { source: "spring mvc", target: "sql", weight: 1.0 },
        { source: "spring mvc", target: "angular", weight: 1.0 },
        { source: "spring mvc", target: "json", weight: 1.0 },
        { source: "spring mvc", target: "nice", weight: 1.0 },
        { source: "spring mvc", target: "junit", weight: 1.0 },
        { source: "spring mvc", target: "spring security", weight: 1.0 },
        { source: "spring mvc", target: "spring boot", weight: 1.0 },
        { source: "spring mvc", target: "agile methodology", weight: 1.0 },
        { source: "spring mvc", target: "mockito", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 58,
    twins: {
      mockito: 0.07692307692307691,
      "agile methodology": 0.07692307692307691,
      "spring boot": 0.07692307692307691,
      "spring security": 0.07692307692307691,
      junit: 0.07692307692307691
    }
  },
  mockito: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "sql" },
        { id: "angular" },
        { id: "json" },
        { id: "nice" },
        { id: "junit" },
        { id: "spring security" },
        { id: "spring boot" },
        { id: "agile methodology" },
        { id: "spring mvc" },
        { id: "mockito" }
      ],
      links: [
        { source: "mockito", target: "java", weight: 1.0 },
        { source: "mockito", target: "jenkins", weight: 1.0 },
        { source: "mockito", target: "git", weight: 1.0 },
        { source: "mockito", target: "mysql", weight: 1.0 },
        { source: "mockito", target: "sql", weight: 1.0 },
        { source: "mockito", target: "angular", weight: 1.0 },
        { source: "mockito", target: "json", weight: 1.0 },
        { source: "mockito", target: "nice", weight: 1.0 },
        { source: "mockito", target: "junit", weight: 1.0 },
        { source: "mockito", target: "spring security", weight: 1.0 },
        { source: "mockito", target: "spring boot", weight: 1.0 },
        { source: "mockito", target: "agile methodology", weight: 1.0 },
        { source: "mockito", target: "spring mvc", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 57,
    twins: {
      "spring mvc": 0.07692307692307691,
      "agile methodology": 0.07692307692307691,
      "spring boot": 0.07692307692307691,
      "spring security": 0.07692307692307691,
      junit: 0.07692307692307691
    }
  },
  "design flow": {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "sql" },
        { id: "nice" },
        { id: "html5" },
        { id: "scripting" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "design flow" }
      ],
      links: [
        { source: "design flow", target: "android", weight: 1.0 },
        { source: "design flow", target: "sql", weight: 1.0 },
        { source: "design flow", target: "nice", weight: 1.0 },
        { source: "design flow", target: "html5", weight: 1.0 },
        { source: "design flow", target: "scripting", weight: 1.0 },
        { source: "design flow", target: "surfaceflinger", weight: 1.0 },
        { source: "design flow", target: "sqlite", weight: 1.0 },
        { source: "design flow", target: "android studio", weight: 1.0 },
        { source: "design flow", target: "android sdk", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 56,
    twins: {
      "android sdk": 0.11111111111111112,
      "android studio": 0.11111111111111112,
      sqlite: 0.11111111111111112,
      surfaceflinger: 0.11111111111111112,
      scripting: 0.11111111111111112
    }
  },
  surfaceflinger: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "sql" },
        { id: "nice" },
        { id: "html5" },
        { id: "scripting" },
        { id: "design flow" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "surfaceflinger" }
      ],
      links: [
        { source: "surfaceflinger", target: "android", weight: 1.0 },
        { source: "surfaceflinger", target: "sql", weight: 1.0 },
        { source: "surfaceflinger", target: "nice", weight: 1.0 },
        { source: "surfaceflinger", target: "html5", weight: 1.0 },
        { source: "surfaceflinger", target: "scripting", weight: 1.0 },
        { source: "surfaceflinger", target: "design flow", weight: 1.0 },
        { source: "surfaceflinger", target: "sqlite", weight: 1.0 },
        { source: "surfaceflinger", target: "android studio", weight: 1.0 },
        { source: "surfaceflinger", target: "android sdk", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 55,
    twins: {
      "android sdk": 0.11111111111111112,
      "android studio": 0.11111111111111112,
      sqlite: 0.11111111111111112,
      "design flow": 0.11111111111111112,
      scripting: 0.11111111111111112
    }
  },
  sqlite: {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "sql" },
        { id: "nice" },
        { id: "html5" },
        { id: "scripting" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "android studio" },
        { id: "android sdk" },
        { id: "sqlite" }
      ],
      links: [
        { source: "sqlite", target: "android", weight: 1.0 },
        { source: "sqlite", target: "sql", weight: 1.0 },
        { source: "sqlite", target: "nice", weight: 1.0 },
        { source: "sqlite", target: "html5", weight: 1.0 },
        { source: "sqlite", target: "scripting", weight: 1.0 },
        { source: "sqlite", target: "design flow", weight: 1.0 },
        { source: "sqlite", target: "surfaceflinger", weight: 1.0 },
        { source: "sqlite", target: "android studio", weight: 1.0 },
        { source: "sqlite", target: "android sdk", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 54,
    twins: {
      "android sdk": 0.11111111111111112,
      "android studio": 0.11111111111111112,
      surfaceflinger: 0.11111111111111112,
      "design flow": 0.11111111111111112,
      scripting: 0.11111111111111112
    }
  },
  "android studio": {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "sql" },
        { id: "nice" },
        { id: "html5" },
        { id: "scripting" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android sdk" },
        { id: "android studio" }
      ],
      links: [
        { source: "android studio", target: "android", weight: 1.0 },
        { source: "android studio", target: "sql", weight: 1.0 },
        { source: "android studio", target: "nice", weight: 1.0 },
        { source: "android studio", target: "html5", weight: 1.0 },
        { source: "android studio", target: "scripting", weight: 1.0 },
        { source: "android studio", target: "design flow", weight: 1.0 },
        { source: "android studio", target: "surfaceflinger", weight: 1.0 },
        { source: "android studio", target: "sqlite", weight: 1.0 },
        { source: "android studio", target: "android sdk", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 53,
    twins: {
      "android sdk": 0.11111111111111112,
      sqlite: 0.11111111111111112,
      surfaceflinger: 0.11111111111111112,
      "design flow": 0.11111111111111112,
      scripting: 0.11111111111111112
    }
  },
  "android sdk": {
    neiGraph: {
      nodes: [
        { id: "android" },
        { id: "sql" },
        { id: "nice" },
        { id: "html5" },
        { id: "scripting" },
        { id: "design flow" },
        { id: "surfaceflinger" },
        { id: "sqlite" },
        { id: "android studio" },
        { id: "android sdk" }
      ],
      links: [
        { source: "android sdk", target: "android", weight: 1.0 },
        { source: "android sdk", target: "sql", weight: 1.0 },
        { source: "android sdk", target: "nice", weight: 1.0 },
        { source: "android sdk", target: "html5", weight: 1.0 },
        { source: "android sdk", target: "scripting", weight: 1.0 },
        { source: "android sdk", target: "design flow", weight: 1.0 },
        { source: "android sdk", target: "surfaceflinger", weight: 1.0 },
        { source: "android sdk", target: "sqlite", weight: 1.0 },
        { source: "android sdk", target: "android studio", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 52,
    twins: {
      "android studio": 0.11111111111111112,
      sqlite: 0.11111111111111112,
      surfaceflinger: 0.11111111111111112,
      "design flow": 0.11111111111111112,
      scripting: 0.11111111111111112
    }
  },
  "linux kernel": {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "c" },
        { id: "nice" },
        { id: "c++" },
        { id: "ethernet" },
        { id: "linux kernel" }
      ],
      links: [
        { source: "linux kernel", target: "linux", weight: 1.0 },
        { source: "linux kernel", target: "c", weight: 1.0 },
        { source: "linux kernel", target: "nice", weight: 1.0 },
        { source: "linux kernel", target: "c++", weight: 1.0 },
        { source: "linux kernel", target: "ethernet", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 51,
    twins: { ethernet: 0.2, "c++": 0.2, nice: 0.2, c: 0.2, linux: 0.2 }
  },
  ethernet: {
    neiGraph: {
      nodes: [
        { id: "linux" },
        { id: "c" },
        { id: "nice" },
        { id: "c++" },
        { id: "linux kernel" },
        { id: "ethernet" }
      ],
      links: [
        { source: "ethernet", target: "linux", weight: 1.0 },
        { source: "ethernet", target: "c", weight: 1.0 },
        { source: "ethernet", target: "nice", weight: 1.0 },
        { source: "ethernet", target: "c++", weight: 1.0 },
        { source: "ethernet", target: "linux kernel", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 50,
    twins: { "linux kernel": 0.2, "c++": 0.2, nice: 0.2, c: 0.2, linux: 0.2 }
  },
  lamp: {
    neiGraph: {
      nodes: [
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "php" },
        { id: "lamp" }
      ],
      links: [
        { source: "lamp", target: "git", weight: 1.0 },
        { source: "lamp", target: "mysql", weight: 1.0 },
        { source: "lamp", target: "linux", weight: 1.0 },
        { source: "lamp", target: "php", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 49,
    twins: { php: 0.25, linux: 0.25, mysql: 0.25, git: 0.25 }
  },
  jhipster: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "javascript" },
        { id: "devops" },
        { id: "hibernate" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "eclipse" },
        { id: "sonarqube" },
        { id: "jhipster" }
      ],
      links: [
        { source: "jhipster", target: "scrum", weight: 1.0 },
        { source: "jhipster", target: "java", weight: 1.0 },
        { source: "jhipster", target: "docker", weight: 1.0 },
        { source: "jhipster", target: "ansible", weight: 1.0 },
        { source: "jhipster", target: "jenkins", weight: 1.0 },
        { source: "jhipster", target: "git", weight: 1.0 },
        { source: "jhipster", target: "mysql", weight: 1.0 },
        { source: "jhipster", target: "javascript", weight: 1.0 },
        { source: "jhipster", target: "devops", weight: 1.0 },
        { source: "jhipster", target: "hibernate", weight: 1.0 },
        { source: "jhipster", target: "html5", weight: 1.0 },
        { source: "jhipster", target: "bootstrap", weight: 1.0 },
        { source: "jhipster", target: "eclipse", weight: 1.0 },
        { source: "jhipster", target: "sonarqube", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 48,
    twins: {
      sonarqube: 0.07142857142857141,
      eclipse: 0.07142857142857141,
      bootstrap: 0.07142857142857141,
      html5: 0.07142857142857141,
      hibernate: 0.07142857142857141
    }
  },
  sonarqube: {
    neiGraph: {
      nodes: [
        { id: "scrum" },
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "mysql" },
        { id: "linux" },
        { id: "angular" },
        { id: "javascript" },
        { id: "devops" },
        { id: "hibernate" },
        { id: "html5" },
        { id: "bootstrap" },
        { id: "eclipse" },
        { id: "jhipster" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "sonarqube" }
      ],
      links: [
        { source: "sonarqube", target: "scrum", weight: 1.0 },
        { source: "sonarqube", target: "java", weight: 2.0 },
        { source: "sonarqube", target: "docker", weight: 2.0 },
        { source: "sonarqube", target: "ansible", weight: 2.0 },
        { source: "sonarqube", target: "jenkins", weight: 2.0 },
        { source: "sonarqube", target: "git", weight: 2.0 },
        { source: "sonarqube", target: "mysql", weight: 1.0 },
        { source: "sonarqube", target: "linux", weight: 1.0 },
        { source: "sonarqube", target: "angular", weight: 1.0 },
        { source: "sonarqube", target: "javascript", weight: 1.0 },
        { source: "sonarqube", target: "devops", weight: 2.0 },
        { source: "sonarqube", target: "hibernate", weight: 1.0 },
        { source: "sonarqube", target: "html5", weight: 1.0 },
        { source: "sonarqube", target: "bootstrap", weight: 1.0 },
        { source: "sonarqube", target: "eclipse", weight: 1.0 },
        { source: "sonarqube", target: "jhipster", weight: 1.0 },
        { source: "sonarqube", target: "cloudfoundry", weight: 1.0 },
        { source: "sonarqube", target: "camunda", weight: 1.0 },
        { source: "sonarqube", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1, "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 2 },
      study_lvl: { "Bac +3": 1, "Bac +5 et plus": 1 },
      count_job: 2
    },
    priority: 47,
    twins: {
      devops: 0.09274344895588955,
      git: 0.09274344895588955,
      jenkins: 0.09274344895588955,
      ansible: 0.09274344895588955,
      docker: 0.09274344895588955
    }
  },
  cloudfoundry: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "linux" },
        { id: "angular" },
        { id: "devops" },
        { id: "sonarqube" },
        { id: "camunda" },
        { id: "cucumber" },
        { id: "cloudfoundry" }
      ],
      links: [
        { source: "cloudfoundry", target: "java", weight: 1.0 },
        { source: "cloudfoundry", target: "docker", weight: 1.0 },
        { source: "cloudfoundry", target: "ansible", weight: 1.0 },
        { source: "cloudfoundry", target: "jenkins", weight: 1.0 },
        { source: "cloudfoundry", target: "git", weight: 1.0 },
        { source: "cloudfoundry", target: "linux", weight: 1.0 },
        { source: "cloudfoundry", target: "angular", weight: 1.0 },
        { source: "cloudfoundry", target: "devops", weight: 1.0 },
        { source: "cloudfoundry", target: "sonarqube", weight: 1.0 },
        { source: "cloudfoundry", target: "camunda", weight: 1.0 },
        { source: "cloudfoundry", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 46,
    twins: {
      cucumber: 0.09090909090909091,
      camunda: 0.09090909090909091,
      sonarqube: 0.09090909090909091,
      devops: 0.09090909090909091,
      angular: 0.09090909090909091
    }
  },
  camunda: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "linux" },
        { id: "angular" },
        { id: "devops" },
        { id: "sonarqube" },
        { id: "cloudfoundry" },
        { id: "cucumber" },
        { id: "camunda" }
      ],
      links: [
        { source: "camunda", target: "java", weight: 1.0 },
        { source: "camunda", target: "docker", weight: 1.0 },
        { source: "camunda", target: "ansible", weight: 1.0 },
        { source: "camunda", target: "jenkins", weight: 1.0 },
        { source: "camunda", target: "git", weight: 1.0 },
        { source: "camunda", target: "linux", weight: 1.0 },
        { source: "camunda", target: "angular", weight: 1.0 },
        { source: "camunda", target: "devops", weight: 1.0 },
        { source: "camunda", target: "sonarqube", weight: 1.0 },
        { source: "camunda", target: "cloudfoundry", weight: 1.0 },
        { source: "camunda", target: "cucumber", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 45,
    twins: {
      cucumber: 0.09090909090909091,
      cloudfoundry: 0.09090909090909091,
      sonarqube: 0.09090909090909091,
      devops: 0.09090909090909091,
      angular: 0.09090909090909091
    }
  },
  cucumber: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "docker" },
        { id: "ansible" },
        { id: "jenkins" },
        { id: "git" },
        { id: "linux" },
        { id: "angular" },
        { id: "devops" },
        { id: "sonarqube" },
        { id: "cloudfoundry" },
        { id: "camunda" },
        { id: "cucumber" }
      ],
      links: [
        { source: "cucumber", target: "java", weight: 1.0 },
        { source: "cucumber", target: "docker", weight: 1.0 },
        { source: "cucumber", target: "ansible", weight: 1.0 },
        { source: "cucumber", target: "jenkins", weight: 1.0 },
        { source: "cucumber", target: "git", weight: 1.0 },
        { source: "cucumber", target: "linux", weight: 1.0 },
        { source: "cucumber", target: "angular", weight: 1.0 },
        { source: "cucumber", target: "devops", weight: 1.0 },
        { source: "cucumber", target: "sonarqube", weight: 1.0 },
        { source: "cucumber", target: "cloudfoundry", weight: 1.0 },
        { source: "cucumber", target: "camunda", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 5 ?? 10 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 44,
    twins: {
      camunda: 0.09090909090909091,
      cloudfoundry: 0.09090909090909091,
      sonarqube: 0.09090909090909091,
      devops: 0.09090909090909091,
      angular: 0.09090909090909091
    }
  },
  mapr: {
    neiGraph: {
      nodes: [
        { id: "sql" },
        { id: "scripting" },
        { id: "talend" },
        { id: "mapr" }
      ],
      links: [
        { source: "mapr", target: "sql", weight: 1.0 },
        { source: "mapr", target: "scripting", weight: 1.0 },
        { source: "mapr", target: "talend", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +4": 1 },
      count_job: 1
    },
    priority: 43,
    twins: {
      talend: 0.3333333333333333,
      scripting: 0.3333333333333333,
      sql: 0.3333333333333333
    }
  },
  "e-commerce": {
    neiGraph: {
      nodes: [{ id: "e" }, { id: "e-commerce" }],
      links: [{ source: "e-commerce", target: "e", weight: 1.0 }]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { Freelance: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 42,
    twins: { e: 1.0 }
  },
  "vue.js": {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "git" },
        { id: "linux" },
        { id: "sql" },
        { id: "javascript" },
        { id: "flux" },
        { id: "gitlab" },
        { id: "postgresql" },
        { id: "vue.js" }
      ],
      links: [
        { source: "vue.js", target: "java", weight: 1.0 },
        { source: "vue.js", target: "git", weight: 1.0 },
        { source: "vue.js", target: "linux", weight: 1.0 },
        { source: "vue.js", target: "sql", weight: 1.0 },
        { source: "vue.js", target: "javascript", weight: 1.0 },
        { source: "vue.js", target: "flux", weight: 1.0 },
        { source: "vue.js", target: "gitlab", weight: 1.0 },
        { source: "vue.js", target: "postgresql", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 1 ?? 3 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +3": 1 },
      count_job: 1
    },
    priority: 41,
    twins: {
      postgresql: 0.125,
      gitlab: 0.125,
      flux: 0.125,
      javascript: 0.125,
      sql: 0.125
    }
  },
  redis: {
    neiGraph: {
      nodes: [
        { id: "java" },
        { id: "sql" },
        { id: "angular" },
        { id: "javascript" },
        { id: "hibernate" },
        { id: "back end" },
        { id: "front end" },
        { id: "mongodb" },
        { id: "java 8" },
        { id: "redis" }
      ],
      links: [
        { source: "redis", target: "java", weight: 1.0 },
        { source: "redis", target: "sql", weight: 1.0 },
        { source: "redis", target: "angular", weight: 1.0 },
        { source: "redis", target: "javascript", weight: 1.0 },
        { source: "redis", target: "hibernate", weight: 1.0 },
        { source: "redis", target: "back end", weight: 1.0 },
        { source: "redis", target: "front end", weight: 1.0 },
        { source: "redis", target: "mongodb", weight: 1.0 },
        { source: "redis", target: "java 8", weight: 1.0 }
      ]
    },
    stats: {
      exp: { "De 3 ?? 5 ans": 1 },
      contract_type: { CDI: 1 },
      study_lvl: { "Bac +5 et plus": 1 },
      count_job: 1
    },
    priority: 40,
    twins: {
      "java 8": 0.11111111111111112,
      mongodb: 0.11111111111111112,
      "front end": 0.11111111111111112,
      "back end": 0.11111111111111112,
      hibernate: 0.11111111111111112
    }
  }
};*/
export default nodesData;
