import React from "react";

const Apropos = () => {
  return (
    <div className="AproposArea">
      {/* Les images importe avec balises img sont accessible depuis public */}
      <img src="./images/isolated-g01e498436_1920.png" alt="devops-circle" />
      <div className="Apropos" id="Apropos">
        <h4>A propos de moi</h4>
        <p>
          Récemment diplomé d'un titre pro Développeur Web et Web Mobile obtenu
          au prêt de M2I Formation, je recherche actuellement un emploi en tant
          que développeur junior ou testeur.
        </p>
        <p>
          En effet, je dispose actuellement d'une petite expérience en
          développement sur des technologies tels que le SCSS, PHP et MySQL que
          j'ai eux l'occasion d'étudier lors de ma formation et de mettre en
          pratique lors de la réalisation complète d'un projet que j'ai réalisé
          en autonomie pendant mon stage. Ou encore React, NodeJS et MongoDB que
          j'apprends actuellement au cours du développement de mon portfolio que
          vous visitez actuellement.
        </p>
        <p>
          En parallèle je travail sur mes compétences en déploiement et en
          administration, sur des outils comme Proxmox, Truenas et NextCloud que
          j'ai mis en place sur mon serveur personnel pour stocker et partager
          des données. Ainsi que sur Nginx et Docker que j'aimerais utiliser
          pour déployer mon site sur ce même serveur.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
