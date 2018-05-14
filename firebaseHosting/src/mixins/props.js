class Perfil{
  constructor (id, datos){
    this.id = id
    this.name = datos.nombre
    this.email = datos.apellido
    this.fecha = datos.fecha
    console.log("NOMBRE PERFIL: " + this.name)
  }
}

export default{
  computed:{
setPerfil (id, datosPerfil){
  props_docperfil = new Perfil (id, datosPerfil)
}
  },
  data(){
    return{
      props_blIsLoggedIn: false,
      props_objuser:{},
      props_docperfil:{}
    }
  }
}
