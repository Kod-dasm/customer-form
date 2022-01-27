import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        surname: '',//*
        name: '',//*
        middleName: '',//*
        clientGroup: { value: '', options: ['VIP', 'Проблемные', 'ОМС'] },//*
        dateOfBirth: '',//*
        phone: '(+7)',//*
        gender: '',
        attendingDoctor: { value: '', options: [ 'Иванов', 'Захаров', 'Чернышева' ] },
        submitStatus: null,
        notSendSMS: false,
        country: '',
        region: '',
        city: '',//*
        index: '',
        street: '',
        house: '',
        TypeDocument: { value: '', options: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'] },//*
        series: '',
        number: '',
        whoIssued: '',
        dateIssued: '',//*
      }
    };
  },
  validations: {
    form: {
      surname: {
        required
      },
      name: {
        required
      },
      middleName: {
        required
      },
      clientGroup: {
        value: {
          required
        }
      },
      dateOfBirth: {
        required
      },
      phone: {
        required,
        minLength: minLength(14),
        maxLength: maxLength(14)
      },
      city: {
        required
      },
      TypeDocument: {
        value: {
          required
        }
      },
      dateIssued: {
        required
      }
    }
  },
  methods: {
    getPassportAttributes() {
      return this.passportAttributes.filter(item => Object.keys(item).length < 4)
    },
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.form.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.form.submitStatus = 'PENDING'
        setTimeout(() => {
          this.form.submitStatus = 'OK'
        }, 500)
      }
    },
    vDate() {
      if (this.form.phone.length < 5) {
        this.form.phone = '(+7)'
      }
    }
  },
  mounted: function() {
  
  },
  computed: {

  },
};
