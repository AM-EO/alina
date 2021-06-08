<template>
  <div id="app" class="column">
    <div class="box">
      <b-input placeholder="Запрос" size="is-large" v-model="query" />
    </div>
    <div class="box">
      <b-button type="is-primary is-light" size="is-large" @click="clicked()">Поиск</b-button>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import "js-levenshtein";

export default {
  name: "App",
  components: {},
  data() {
    return {
      CGIF: {
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
          },
        ],
        data: [
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
            data: [
              {
                name: ["Амельченко", "Евгений", "Олегович"],
                atr: [
                  {
                    name: ["зачетная", "книга"],
                    value: "739201",
                    description: ["какой", "номер"],
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
                data: 0,
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
                data: 0,
              },
            ],
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
            data: [
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
                data: 0,
              },
            ],
          },
        ],
      },
      newDB: [
        {
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
            },
          ],
        },
        {
          name: ["Группа", "7392"],
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
          parents: ["Поток", "ФКТИ"],
        },
        {
          name: ["Группа", "7391"],
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
          parents: ["Поток", "ФКТИ"],
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
          parents: ["Поток", "ФКТИ", "7392"],
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
              name: ["зачетная", "книга"],
              value: "739208",
              description: "номер",
            },
          ],
          parents: ["Поток", "ФКТИ", "7392"],
        },
        {
          name: ["Смирнов", "Руслан", "Игоревич"],
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
          parents: ["Поток", "ФКТИ", "7392"],
        },
      ],
      descriptions: [
        "сколько",
        "кто",
        "какая",
        "номер",
        "какой",
        "какое",
        "какая",
      ],
      query: "",
      finalResalt: "",
    };
  },
  methods: {
    clicked() {
      this.searchObj();
      var str = this.getStr();
      console.log(str);

      const options = {
        includeScore: false,
        minMatchCharLength: 2,
        location: 1,
        threshold: 0.3,
        distance: 10,
        keys: [
          {
            name: "name",
          },
        ],
      };
      const fuse = new Fuse(this.newDB, options);

      const result = fuse.search(str[str.length - 1]);
      console.log(result);
      var result_2 = [];
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].item.atr.length; j++) {
          var levenshtein = require("js-levenshtein");
          if (
            levenshtein(result[i].item.atr[j].description, str[0]) < 3 &&
            levenshtein(result[i].item.atr[j].name, str[1]) / str[1].length < 2
          )
            result_2.push(result[i].item.atr[j].value);
        }
      }

      console.log(result_2);
      this.final(str, result_2);
    },
    searchObj() {
      const levenshtein = require("js-levenshtein");
      console.log(levenshtein("1234567", "сколько"));
    },
    getStr() {
      var sssstr = [];
      var str = this.query.split(" ");
      for (let i = 0; i < str.length; i++) {
        if (str[i].length > 2) sssstr.push(str[i]);
      }
      str = sssstr;
      return str;
    },
    getData(obj) {
      if (obj.data == 0) return null;
      else return obj.data;
    },
    final(str, res) {
      this.finalResalt = str[1].toUpperCase() + ":";
      for (let i = 0; i < res.length; i++) {
        this.finalResalt += " " + res;
      }
      this.$buefy.dialog.alert(this.finalResalt);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
