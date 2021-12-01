import React from "react";
import imgErreur404 from '../../../asset/image/error404.png';

const Erreur404=(props)=>(
<div>
    <img src={imgErreur404} alt={"erreur 404"} width={"300px"}/>
    <div>   La page demandée n'existe pas  </div>
</div>
);

export default Erreur404;