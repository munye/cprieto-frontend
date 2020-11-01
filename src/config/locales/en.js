import { defineMessages } from 'react-intl'

const messages = defineMessages({
  app_name: 'Cardio Prieto',
  sign_in: 'Entrar a Cardioprieto',
  sign_out: 'Salir',
  sign_up: 'Registrarse',
  email: 'Email',
  username: 'Usuario',
  password: 'Clave',
  about: 'Informacion',
  home: 'Home',
  page_not_found: 'Pagina no encontrada',
  settings: 'Configuracion',
  theme: 'Theme',
  default: 'Default',
  red: 'Red',
  green: 'Green',
  language: 'Lenguaje',
  en: 'English',
  de: 'German',
  ru: 'Russian',
  menu: 'Menu',
  menu_mini_mode: 'Mini menu',
  offline: 'Offline',
  demos:'Demos',
  dialog_demo:'Demo dialog',
  dialog_title:'Dialog title',
  dialog_action:'YES, Delete',
  dialog_message:`Dialog message. You can put as much text as you want here.
  Ask a question or show a warning befor deleting something.
  You can also set the action text to somerhing like "YES, Delete" and run that action by passing a "handleAction" prop.
  This receives a "handleClose" callback with wich you can close the dialog when your action is done.`,
  toast_demo:'Demo toast',
  filter_demo:'Demo filter',
  list_page_demo:'List Page demo with {count} rows',
  forgot_password:'Forgot password',
  password_reset:'Password reset',
  password_confirm:'Password confirm',
  registration:'Registration'
})

export default messages
