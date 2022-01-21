import { required } from 'vuelidate'

export default {
  data() {
    return {
      submitStatus: null,
      notSendSMS: false,
      mainAttributes: [
        { name: 'Фамилия', value: '', type: 'text' },//*
        { name: 'Имя', value: '', type: 'text' },//*
        { name: 'Отчество', value: '', type: 'text' },//*
        { name: 'Группа клиентов', value: '', type: 'select', options: ['VIP', 'Проблемные', 'ОМС']},//*
        { name: 'Дата рождения', value: '', type: 'date' },//*
        { name: 'Номер телефона', value: '(+7)', type: 'text' },//* (11 цифр. Начинается с 7)
        { name: 'Пол', value: '', type: 'text' },
        { name: 'Лечащий врач', value: '', type: 'select', options: [ 'Иванов', 'Захаров', 'Чернышева' ]},
      ],
      addressAttributes: [
        { name: 'Страна', value: '' },
        { name: 'Область', value: '' },
        { name: 'Город', value: '' },//*
        { name: 'Индекс', value: null },
        { name: 'Улица', value: '' },
        { name: 'Дом', value: '' }
      ],
      passportAttributes: [
        { name: 'Тип документа', value: null, type: 'select', options: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'] },//*
        { name: 'Серия', value: null, type: 'text' },
        { name: 'Номер', value: null, type: 'text' },
        { name: 'Кем выдан', value: '', type: 'text' },
        { name: 'Дата выдачи', value: null, type: 'date' }//*
      ]
    };
  },
  validations: {
    mainAttributes: {
      [0]: {
        value: {
          required
        }
      },
      [1]: {
        value: {
          required
        }
      },
      [2]: {
        value: {
          required
        }
      },
      [3]: {
        value: {
          required
        }
      },
      [4]: {
        value: {
          required
        }
      },
      [5]: {
        value: {
          required,
        }
      }
    },
  },
  methods: {
    getPassportAttributes() {
      return this.passportAttributes.filter(item => Object.keys(item).length < 4)
    },
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  mounted: function() {
  
  },
  computed: {

  },
};
