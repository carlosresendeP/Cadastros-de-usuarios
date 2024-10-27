
import UsersImg from "../../assets/users.png"

import { Background  } from "./style"

function TopBackground () {

    return (
        <Background >
            <img src={UsersImg} alt="imagem-usuarios" />
        </Background >
    )
}

export default TopBackground