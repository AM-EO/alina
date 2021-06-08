/*const options = {
        includeScore: false,
        minMatchCharLength: 2,
        location: 1,
        threshold: 0.1,
        distance: 10,
        // equivalent to `keys: [['author', 'tags', 'value']]`
        keys: [
          {
            name: "name",
            weight: 2,
          },
        ],
      };

      var list = [
        5,
        {
          name: "имя",
          value: "Алина",
          description: "какое",
        },
        {
          name: "пол",
          value: "женский",
          description: "какой",
        },
        {
          name: "фамилия",
          value: "Цуркан",
          description: "какая",
        },
        {
          name: "отчество",
          value: "Григорьевна",
          description: "какое",
        },
        {
          name: "зачетная книга",
          value: "739208",
          description: "номер",
        },
      ];
      const options = {
        includeScore: false,
        minMatchCharLength: 2,
        location: 1,
        threshold: 0.1,
        distance: 10,
        // equivalent to `keys: [['author', 'tags', 'value']]`
        keys: [
          {
            name: "name",
            weight: 2,
          },
        ],
      };
      const fuse = new Fuse(list, options);

      const result = fuse.search("имя");
      console.log(result);
      //this.$buefy.notification.open(result);

      /*var list = [
        {
          title: "Old Man's War",
          author: {
            name: "John Scalzi",
            tags: [
              {
                value: "American",
              },
            ],
          },
        },
        {
          title: "The Lock Artist",
          author: {
            name: "Steve Hamilton",
            tags: [
              {
                value: "English",
              },
            ],
          },
        },
      ];
      const options = {
        includeScore: true,
        // equivalent to `keys: [['author', 'tags', 'value']]`
        keys: ["author.tags.value"],
      };

      const fuse = new Fuse(list, options);

      const result = fuse.search("engsh");
      console.log(result);*/






var newDB = [{
  name: ["Поток", "ФКТИ"],
  atr: [
    {
      name: "групп",
      value: 40,
      description: "сколько",
    },
    {
      name: "декан",
      value: "Холод И.И.",
      description: "кто",
    },
    {
      name: "студентов",
      value: "500",
      description: "сколько",
    }
  ]
},
{
  name: "7392",
  atr: [
    {
      name: "студентов",
      value: "11",
      description: "сколько",
    },
    {
      name: "кафедра",
      value: "АПУ",
      description: "какая",
    },
    {
      name: "староста",
      value: "Амельченко Евгений Олегович",
      description: "кто",
    },
  ],
  parents: ["Поток", "ФКТИ"]
},
{
  name: "7391",
  atr: [
    {
      name: "студентов",
      value: "20",
      description: "сколько",
    },
    {
      name: "кафедра",
      value: "АПУ",
      description: "какая",
    },
    {
      name: "староста",
      value: "Смирнов Руслан Игоревич",
      description: "кто",
    },
  ],
  parents: ["Поток", "ФКТИ"]
},
{
  name: "Амельченко Евгений Олегович",
  atr: [
    {
      name: "зачетная книга",
      value: "739201",
      description: "номер",
    },
    {
      name: "",
      value: "староста",
      description: "кто",
    },
    {
      name: "",
      value: "профорг",
      description: "кто",
    },
    {
      name: "",
      value: "куратор",
      description: "кто",
    },
    {
      name: "",
      value: "эколог",
      description: "кто",
    },
    {
      name: "пол",
      value: "мужской",
      description: "какой",
    },
    {
      name: "имя",
      value: "Евгений",
      description: "какое",
    },
    {
      name: "фамилия",
      value: "Амельченко",
      description: "какая",
    },
    {
      name: "отчество",
      value: "Олегович",
      description: "какое",
    },
  ],
  parents: ["Поток", "ФКТИ", "7392"]
},
{
  name: "Цуркан Алина Григорьевна",
  atr: [
    {
      name: "имя",
      value: "Алина",
      description: "какое",
    },
    {
      name: "пол",
      value: "женский",
      description: "какой",
    },
    {
      name: "фамилия",
      value: "Цуркан",
      description: "какая",
    },
    {
      name: "отчество",
      value: "Григорьевна",
      description: "какое",
    },
    {
      name: "зачетная книга",
      value: "739208",
      description: "номер",
    },
  ],
  parents: ["Поток", "ФКТИ", "7392"]
},
{
  name: "Смирнов Руслан Игоревич",
  atr: [
    {
      name: ["зачетная", "книга"],
      value: "739101",
      description: "номер",
    },
    {
      name: "",
      value: "староста",
      description: "кто",
    },
    {
      name: "пол",
      value: "мужской",
      description: "какой",
    },
    {
      name: "имя",
      value: "Руслан",
      description: "какое",
    },
    {
      name: "фамилия",
      value: "Смирнов",
      description: "какая",
    },
    {
      name: "отчество",
      value: "Игоревич",
      description: "какое",
    },
  ],
  parents: ["Поток", "ФКТИ", "7392"]
}

]



var f = {
  data: [
    {
      data: [
        {

          data: 0,
        },
      ],
    },
  ],
}