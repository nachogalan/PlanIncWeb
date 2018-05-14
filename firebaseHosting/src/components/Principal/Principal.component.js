import LoginRegistro from '@/components/LoginRegistro'
import Perfiles from '@/components/Perfiles'

import { EventBus } from '../../Events/events_bus';

export default {
  name: 'principal',
  components: {
    "loginreg": LoginRegistro,
    "perfiles": Perfiles,
    
  },
  props: [],
  data () {
    return {
      blLoggedUser:this.props_blIsLoggedIn
    }
  },

  computed: {

  },
  mounted () {
    EventBus.$on('loginregister_userstatechanged', blestado =>{
    this.blLoggedUser=blestado
    });
  },
  methods: {

  }
}
