import LoginRegistro from '@/components/LoginRegistro'
import Perfiles from '@/components/Perfiles'
import Inicio from '@/components/Inicio'
import { EventBus } from '../../Events/events_bus';

export default {
  name: 'principal',
  components: {
    "loginreg": LoginRegistro,
    "perfiles": Perfiles,
    "inicio": Inicio,

  },
  props: [],
  data () {
    return {
      blLoggedUser:this.props_blIsLoggedIn,
      blMostrarInicio:this.props_blInicioVisible
    }
  },

  computed: {

  },
  mounted () {
    EventBus.$on('loginregister_userstatechanged', blestado =>{
    this.blLoggedUser=blestado
    });

    EventBus.$on('mostraInicio', blestado =>{
    this.blMostrarInicio=blestado
    this.blLoggedUser=false

    });
  },
  methods: {

  }
}
