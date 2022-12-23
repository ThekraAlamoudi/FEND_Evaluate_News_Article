// scss files
import './styles/base.scss'
import './styles/header.scss'
import './styles/resets.scss'
import './styles/footer.scss'
import './styles/form.scss'

// js file
import { handleSubmit } from './js/formHandler'
import { checkUrl } from './js/checkURL'

//console.log('in client index.js');

export {
    handleSubmit, checkUrl
}