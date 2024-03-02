const user_ids = [
  "a973Ie1gH4O8s2odDGGNeJD8tv62",
  "nowvPm58tbWAqZQQESxQ9N6J8Qx2",
  "yZy6PxsRHGPrtBjBPE1mSYwEdwi1",
  "AwUUNtdUETVuQ4arwl1ZF1UoUew2",
  "gZOrA2b4DkV8bGkoi4V34Cq2fOD3",
  "jSeCgZhtLLb1T6isNt5m1hsaNB82",
  "CPpnfWUz3za6KiPwcl8Cy7v0ZaJ2",
  "kRnoPSFefVY77UWWwNclzW8JU4o2",
  "q3Ok0gw8UbeptJu3cKq9GnGjtuD2",
  "1P1go8lxq9NI16C8SgLQEZAfMKO2",
];

const userRecords = [
  {
    name: "Emma",
    user_id: "a973Ie1gH4O8s2odDGGNeJD8tv62",
    features: [
      {
        name: "hobbies",
        data: ["Reading", "Writing"],
      },
      {
        name: "academic_year",
        data: "First Year",
      },
      {
        name: "average_score",
        data: 85,
      },
      {
        name: "schedule",
        data: {
          Monday: ["09:00", "10:00"],
          Tuesday: ["13:00", "14:00"],
          Friday: ["21:00"],
        },
      },
    ],
  },
  {
    name: "James",
    user_id: "nowvPm58tbWAqZQQESxQ9N6J8Qx2",
    features: [
      {
        name: "hobbies",
        data: ["Reading", "Playing Music", "Gaming"],
      },
      {
        name: "academic_year",
        data: "Second Year",
      },
      {
        name: "average_score",
        data: 90,
      },
      {
        name: "schedule",
        data: {
          Monday: ["10:00", "11:00"],
          Wednesday: ["12:00", "13:00"],
          Friday: ["20:00"],
        },
      },
    ],
  },
  {
    name: "Sophia",
    user_id: "yZy6PxsRHGPrtBjBPE1mSYwEdwi1",
    features: [
      {
        name: "hobbies",
        data: ["Drawing", "Painting", "Photography"],
      },
      {
        name: "academic_year",
        data: "Third Year",
      },
      {
        name: "average_score",
        data: 88,
      },
      {
        name: "schedule",
        data: {
          Tuesday: ["10:00", "11:00"],
          Wednesday: ["13:00", "14:00"],
          Thursday: ["09:00", "10:00"],
        },
      },
    ],
  },
  {
    name: "William",
    user_id: "AwUUNtdUETVuQ4arwl1ZF1UoUew2",
    features: [
      {
        name: "hobbies",
        data: ["Reading", "Gardening"],
      },
      {
        name: "academic_year",
        data: "Fourth Year",
      },
      {
        name: "average_score",
        data: 92,
      },
      {
        name: "schedule",
        data: {
          Monday: ["12:00", "13:00"],
          Wednesday: ["09:00", "10:00"],
          Friday: ["19:00"],
        },
      },
    ],
  },
  {
    name: "Olivia",
    user_id: "gZOrA2b4DkV8bGkoi4V34Cq2fOD3",
    features: [
      {
        name: "hobbies",
        data: ["Reading", "Traveling"],
      },
      {
        name: "academic_year",
        data: "First Year",
      },
      {
        name: "average_score",
        data: 87,
      },
      {
        name: "schedule",
        data: {
          Tuesday: ["09:00", "10:00"],
          Thursday: ["13:00", "14:00"],
          Friday: ["18:00"],
        },
      },
    ],
  },
  {
    name: "Benjamin",
    user_id: "jSeCgZhtLLb1T6isNt5m1hsaNB82",
    features: [
      {
        name: "hobbies",
        data: ["Drawing", "Playing Music"],
      },
      {
        name: "academic_year",
        data: "Third Year",
      },
      {
        name: "average_score",
        data: 89,
      },
      {
        name: "schedule",
        data: {
          Monday: ["13:00", "14:00"],
          Wednesday: ["10:00", "11:00"],
          Thursday: ["09:00", "10:00"],
        },
      },
    ],
  },
  {
    name: "Sophie",
    user_id: "CPpnfWUz3za6KiPwcl8Cy7v0ZaJ2",
    features: [
      {
        name: "hobbies",
        data: ["Drawing", "Photography", "Cooking"],
      },
      {
        name: "academic_year",
        data: "Second Year",
      },
      {
        name: "average_score",
        data: 86,
      },
      {
        name: "schedule",
        data: {
          Monday: ["09:00", "10:00"],
          Wednesday: ["11:00", "12:00"],
          Thursday: ["13:00", "14:00"],
        },
      },
    ],
  },
  {
    name: "Lucas",
    user_id: "kRnoPSFefVY77UWWwNclzW8JU4o2",
    features: [
      {
        name: "hobbies",
        data: ["Reading", "Gaming"],
      },
      {
        name: "academic_year",
        data: "First Year",
      },
      {
        name: "average_score",
        data: 90,
      },
      {
        name: "schedule",
        data: {
          Tuesday: ["09:00", "10:00"],
          Wednesday: ["14:00", "15:00"],
          Friday: ["19:00"],
        },
      },
    ],
  },
  {
    name: "Ethan",
    user_id: "q3Ok0gw8UbeptJu3cKq9GnGjtuD2",
    features: [
      {
        name: "hobbies",
        data: ["Drawing", "Cooking"],
      },
      {
        name: "academic_year",
        data: "Third Year",
      },
      {
        name: "average_score",
        data: 88,
      },
      {
        name: "schedule",
        data: {
          Monday: ["11:00", "12:00"],
          Thursday: ["10:00", "11:00"],
          Friday: ["20:00"],
        },
      },
    ],
  },
  {
    name: "Charlotte",
    user_id: "1P1go8lxq9NI16C8SgLQEZAfMKO2",
    features: [
      {
        name: "hobbies",
        data: ["Painting", "Cooking", "Traveling"],
      },
      {
        name: "academic_year",
        data: "Fourth Year",
      },
      {
        name: "average_score",
        data: 92,
      },
      {
        name: "schedule",
        data: {
          Monday: ["13:00", "14:00"],
          Wednesday: ["10:00", "11:00"],
          Thursday: ["09:00", "10:00"],
        },
      },
    ],
  },
];
