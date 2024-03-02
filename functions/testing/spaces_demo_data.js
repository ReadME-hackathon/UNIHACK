const spaces_demo_data = [
  {
    data: {
      space_data: {
        name: "Study Group Space",
        min_size: 2,
        max_size: 5,
        features: [
          {
            name: "hobbies",
            type: "SELECT",
            options: [
              "Reading",
              "Writing",
              "Drawing",
              "Painting",
              "Playing Music",
              "Cooking",
              "Gardening",
              "Photography",
              "Knitting",
              "Woodworking",
              "Dancing",
              "Sculpting",
              "Fishing",
              "Hiking",
              "Camping",
              "Traveling",
              "Gaming",
              "Watching Movies",
              "Playing Sports",
            ],
            multi_select: true,
            optional: false,
          },
          {
            name: "academic_year",
            type: "SELECT",
            options: ["First Year", "Second Year", "Third Year", "Fourth Year"],
            optional: false,
          },
          {
            name: "average_score",
            type: "NUMBER",
            optional: true,
          },
          {
            name: "schedule",
            type: "AVAILABILITY",
          },
        ],
      },
    },
  },
  {
    data: {
      space_data: {
        name: "Sports Enthusiasts Space",
        min_size: 3,
        max_size: 8,
        features: [
          {
            name: "sports_interest",
            type: "SELECT",
            options: [
              "Football",
              "Basketball",
              "Tennis",
              "Soccer",
              "Golf",
              "Swimming",
              "Running",
              "Cycling",
              "Volleyball",
              "Baseball",
              "Cricket",
              "Hockey",
              "Rugby",
              "Badminton",
              "Table Tennis",
            ],
            multi_select: false,
            optional: false,
          },
          {
            name: "years_of_experience",
            type: "NUMBER",
            optional: false,
          },
          {
            name: "schedule",
            type: "AVAILABILITY",
          },
        ],
      },
    },
  },
  {
    data: {
      space_data: {
        name: "Language Learning Space",
        min_size: 2,
        max_size: 4,
        features: [
          {
            name: "language_interest",
            type: "STRING",
            optional: false,
          },
          {
            name: "age",
            type: "NUMBER",
            optional: false,
          },
          {
            name: "native_language",
            type: "SELECT",
            options: [
              "English",
              "Spanish",
              "French",
              "Mandarin",
              "Arabic",
              "German",
              "Hindi",
              "Portuguese",
            ],
            optional: true,
          },
          {
            name: "language_proficiency",
            type: "SELECT",
            options: ["Beginner", "Intermediate", "Advanced"],
            optional: true,
          },
        ],
      },
    },
  },
  {
    data: {
      space_data: {
        name: "Science and Tech Enthusiasts Space",
        min_size: 3,
        max_size: 7,
        features: [
          {
            name: "tech_interest",
            type: "STRING",
            optional: false,
          },
          {
            name: "age",
            type: "NUMBER",
            optional: false,
          },
          {
            name: "average_score",
            type: "NUMBER",
            optional: false,
          },
          {
            name: "programming_languages",
            type: "SELECT",
            options: ["Java", "Python", "JavaScript", "C++", "C#", "Swift", "Ruby", "PHP"],
            optional: true,
          },
          {
            name: "tech_skills",
            type: "CHECKBOX",
            optional: true,
          },
        ],
      },
    },
  },
  {
    data: {
      space_data: {
        name: "Art and Music Lovers Space",
        min_size: 2,
        max_size: 6,
        features: [
          {
            name: "art_music_interest",
            type: "STRING",
            optional: false,
          },
          {
            name: "age",
            type: "NUMBER",
            optional: false,
          },
          {
            name: "favorite_artist",
            type: "STRING",
            optional: true,
          },
          {
            name: "musical_instrument",
            type: "SELECT",
            options: [
              "Guitar",
              "Piano",
              "Violin",
              "Drums",
              "Saxophone",
              "Flute",
              "Trumpet",
              "Cello",
            ],
            optional: true,
          },
        ],
      },
    },
  },
];
