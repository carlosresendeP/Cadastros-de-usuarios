import { Button1} from "./styles"
import PropTypes from 'prop-types'; 

function Defaulbutton({children,theme, ...props}) {
    //spread operator -> todo resto
    
    

    return (
        <Button1 {...props} theme={theme}>{children}</Button1>
        //é criado uma variavel theme, poder até outro nome
    )
}

Defaulbutton.prototype ={
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default Defaulbutton