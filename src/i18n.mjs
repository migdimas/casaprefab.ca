// Contenu bilingue de casaprefab.ca. Les deux langues doivent porter EXACTEMENT les mêmes clés :
// build.mjs refuse de générer si une clé manque ou est en trop.
// Faits verrouillés : aucun prix de maison n’est publié tant que le §6 « INCONNU » du dossier
// n’est pas tranché (terrain inclus ou non, taxes, zones desservies).

export const langs = {
  fr: { code: 'fr-CA', locale: 'fr_CA', file: 'index.html', privacy: 'confidentialite.html', label: 'FR' },
  en: { code: 'en-CA', locale: 'en_CA', file: 'en.html', privacy: 'privacy.html', label: 'EN' },
};

export const t = {
  fr: {
    title: 'Casaprefab · Quartiers de maisons préfabriquées sous 350 000 $ | Québec',
    meta_desc: 'Casaprefab monte des quartiers de maisons préfabriquées pour les municipalités du Québec et leurs promoteurs, calés sur les critères du programme FIERH : au moins deux chambres, sous la barre des 350 000 $.',
    og_title: 'Casaprefab · Des quartiers qui passent sous 350 000 $',
    og_desc: 'Maisons préfabriquées certifiées CAN/CSA-A277 pour les projets municipaux d’habitation au Québec. Étude de faisabilité livrée en dix jours ouvrables.',
    ld_desc: 'Fournisseur de maisons préfabriquées et modulaires pour les projets résidentiels municipaux au Québec.',
    ld_area: 'Québec, Canada',

    nav_program: 'Le programme',
    nav_models: 'Les modèles',
    nav_process: 'Le déroulement',
    nav_study: 'Étude de faisabilité',
    nav_cta: 'Faire évaluer mon projet',
    skip: 'Aller au contenu',

    h_eyebrow: 'Habitation municipale · Québec',
    h_title: 'Des quartiers complets, livrés sous la barre des 350 000 $.',
    h_sub: 'Le Québec a mis près d’un milliard de dollars sur la table pour brancher en eau les terrains qui accueilleront des maisons abordables. Il manque les maisons. Casaprefab les fournit, certifiées en usine, à un prix qui tient dans la fenêtre du programme.',
    h_cta1: 'Faire évaluer mon projet',
    h_cta2: 'Voir les modèles',
    h_note: 'Réponse à toute demande municipale en un jour ouvrable.',

    s1_n: '1 G$',
    s1_l: 'enveloppe FIERH pour les infrastructures en eau',
    s2_n: '350 000 $',
    s2_l: 'le plafond de prix qui donne droit au taux d’aide bonifié',
    s3_n: '75 %',
    s3_l: 'des unités doivent compter au moins deux chambres',
    s4_n: '≈ 75 jours',
    s4_l: 'environ 45 jours d’usine et 30 jours de montage',

    pr_eyebrow: 'La fenêtre',
    pr_title: 'Le FIERH paie les tuyaux. Pas les maisons.',
    pr_lead: 'Le programme de Financement d’infrastructures en eau pour la réalisation d’habitations finance l’aqueduc et l’égout des secteurs à développer. L’appel de projets s’est tenu du 2 juillet au 18 septembre 2026. Les municipalités retenues auront des terrains desservis, un échéancier serré, et un engagement sur le prix des maisons qui s’y construiront. C’est exactement là que le préfabriqué devient la seule réponse crédible.',
    pr_c1_t: 'Le prix est une condition, pas un objectif',
    pr_c1_d: 'Le taux d’aide bonifié, qui peut atteindre 80 % des infrastructures en eau, tient si au moins 75 % des unités comptent deux chambres ou plus et se vendent sous 350 000 $. Une maison construite sur place au coût du marché actuel fait sauter ce plafond. Une maison d’usine le respecte par construction.',
    pr_c2_t: 'L’échéancier ne se négocie pas',
    pr_c2_d: 'Des travaux d’infrastructure financés arrivent avec une date de fin. Un chantier conventionnel dépend de la météo et de la main-d’œuvre disponible. Une usine produit pendant qu’on creuse : les deux calendriers avancent en parallèle au lieu de se suivre.',
    pr_c3_t: 'La municipalité ne construit pas les maisons',
    pr_c3_d: 'Elle dessert le terrain, puis un promoteur ou un constructeur bâtit. Ce sont deux décisions distinctes, prises par deux acteurs différents, à quelques mois d’écart. Nous travaillons avec les deux.',
    pr_c4_t: 'Le programme nomme le préfabriqué',
    pr_c4_d: 'Les documents gouvernementaux parlent explicitement de quartiers de maisons préfabriquées. Ce n’est pas une tolérance, c’est le moyen retenu pour tenir le prix annoncé aux familles.',
    pr_source: 'Source : Gouvernement du Québec, annonce du programme FIERH et paramètres de l’appel de projets 2026.',

    m_eyebrow: 'Les modèles',
    m_title: 'Trois maisons et un multiplex, tous certifiés en usine.',
    m_lead: 'Chaque unité sort d’une usine certifiée CAN/CSA-A277, avec des plans scellés par un ingénieur. Les modèles à deux chambres et plus comptent dans le 75 % exigé par le programme.',
    m_badge_qualify: 'Compte dans le 75 %',
    m_badge_no: 'Hors du calcul des deux chambres',
    m_label_area: 'Superficie',
    m_label_bed: 'Chambres',

    m1_name: 'Éco',
    m1_area: '937 pi²',
    m1_bed: '1 chambre',
    m1_f1: 'Aire ouverte, pensée pour la densité',
    m1_f2: 'Électroménagers écoénergétiques',
    m1_f3: 'Idéale en unité d’appoint ou en logement accessoire',

    m2_name: 'Famille',
    m2_area: '1 179 pi²',
    m2_bed: '2 chambres',
    m2_f1: 'Cuisine et salle à manger complètes',
    m2_f2: 'Prête pour un espace extérieur privé',
    m2_f3: 'Le format qui vise le premier acheteur',

    m3_name: 'Exécutif',
    m3_area: '1 360 pi²',
    m3_bed: '3 chambres',
    m3_f1: 'Chambre principale avec salle de bain attenante',
    m3_f2: 'Préparée pour la domotique',
    m3_f3: 'Finitions haut de gamme en option',

    m4_name: '6-plex',
    m4_area: '6 logements · environ 1 100 pi² chacun',
    m4_bed: '2 chambres et 2 salles de bain par logement',
    m4_f1: 'Empilé sur trois étages, pour un terrain urbain standard',
    m4_f2: 'Conçu pour le logement locatif abordable',
    m4_f3: 'Se répète à l’identique sur de grands lots',

    m_plan_label: 'Voir le plan',
    credit: 'Rendus et photographies fournis par le manufacturier partenaire.',

    g_eyebrow: 'En images',
    g_title: 'À quoi ressemble un quartier livré.',
    g_lead: 'Des maisons finies, posées sur leur terrain, raccordées. Ce n’est pas un chantier qui traîne trois saisons : c’est ce que la municipalité voit à la fin de l’été.',
    g_prev: 'Image précédente',
    g_next: 'Image suivante',
    g_zoom: 'Image agrandie',
    g_close: 'Fermer',
    g_a1: 'Maison éclairée en soirée, rue résidentielle',
    g_a2: 'Maison avec abri d’auto et aménagement paysager',
    g_a3: 'Terrasse et espace extérieur privé',
    g_a4: 'Maison à pignon sur un terrain arboré',
    g_a5: 'Façade éclairée à la tombée du jour',
    g_a6: 'Maison de plain-pied sous un ciel étoilé, façade et terrain éclairés',
    g_credit: 'Rendus du manufacturier partenaire. Le modèle retenu pour votre projet est confirmé à l’étude de faisabilité.',

    b_eyebrow: 'En usine',
    b_title: 'Pendant qu’on creuse chez vous, la maison se bâtit déjà.',
    b_lead: 'C’est tout l’intérêt du préfabriqué sur un projet financé : la production avance en parallèle des travaux d’aqueduc, au lieu d’attendre qu’ils finissent. Environ 45 jours en usine, sous inspection indépendante, à l’abri de la météo.',

    b2_eyebrow: 'Sur le terrain',
    b2_title: 'Un seul répondant, du plan à la prise de possession.',
    b2_lead: 'Usine, transport, grutage, montage, finition et garantie : un contrat, un interlocuteur. La municipalité garde le contrôle de son dossier, sans avoir à arbitrer entre quatre fournisseurs.',

    m_price_t: 'Et le prix ?',
    m_price_d: 'Il dépend du terrain, des services déjà en place, du transport jusqu’au site et du volume commandé. Nous ne publions pas de prix de vitrine : nous chiffrons votre projet, avec les inclusions écrites noir sur blanc, dans l’étude de faisabilité. C’est la seule façon honnête de promettre un plafond de 350 000 $ à un conseil municipal.',

    p_eyebrow: 'Le déroulement',
    p_title: 'De la résolution du conseil aux clés, en cinq étapes.',
    p1_t: 'Étude de faisabilité',
    p1_d: 'Nous validons le zonage, l’implantation, l’accès pour le transport et le grutage, puis nous chiffrons le coût par unité livrée. Dix jours ouvrables.',
    p2_t: 'Terrain et services',
    p2_d: 'Nous arrimons le plan d’implantation aux travaux d’aqueduc et d’égout financés, pour que les modules arrivent sur un site prêt à les recevoir.',
    p3_t: 'Dossier et permis',
    p3_d: 'Plans scellés, conformité à la réglementation municipale, pièces exigées par le programme et par le prêteur. Nous fournissons le dossier, la municipalité garde le contrôle.',
    p4_t: 'Production en usine',
    p4_d: 'Environ 45 jours. La production avance pendant que les fondations et les services se terminent sur le terrain.',
    p5_t: 'Livraison et montage',
    p5_d: 'Environ 30 jours de montage. Raccordements, finitions et inspection, jusqu’à la prise de possession.',

    n_eyebrow: 'Une fois posée',
    n_title: 'Le soir, une maison d’usine ne se distingue pas d’une maison bâtie sur place.',
    n_lead: 'C’est l’objection qu’on entend le plus souvent autour d’une table de conseil. Les rendus du manufacturier montrent les modèles tels qu’ils sortent de la chaîne : mêmes revêtements, mêmes fenêtres, mêmes toitures que le reste de la rue.',

    fa_eyebrow: 'Le point d’entrée',
    fa_title: 'L’étude de faisabilité préfabriqué',
    fa_lead: 'Avant qu’un conseil municipal ou un promoteur engage un dollar, il a besoin d’un document qui dit si ça tient. C’est ce que nous livrons, en dix jours ouvrables, sur un secteur précis.',
    fa_li1: 'Verdict de zonage et d’implantation, point par point, pour le secteur visé',
    fa_li2: 'Nombre d’unités réalisable et répartition des modèles, calibrée sur le seuil des 75 % à deux chambres',
    fa_li3: 'Coût par unité livrée, avec la liste écrite de ce qui est inclus et de ce qui ne l’est pas',
    fa_li4: 'Accès physique : chemin de transport, rayon de grutage, contraintes de livraison',
    fa_li5: 'Calendrier réaliste, aligné sur la fin des travaux d’infrastructure',
    fa_out: 'Livrable : un document signé, utilisable tel quel en séance de conseil ou devant un prêteur.',
    fa_cta: 'Demander une étude',
    fa_note: 'Le montant de l’étude est crédité en entier si le projet se réalise avec nous.',

    au_eyebrow: 'Pour qui',
    au_title: 'Trois interlocuteurs, trois questions différentes.',
    au1_t: 'Municipalités et MRC',
    au1_d: 'L’appel de projets du FIERH s’est fermé le 18 septembre. Vous avez déposé, ou vous préparez le prochain. Votre question est : est-ce que des maisons sous 350 000 $ sont réellement livrables sur ce secteur, et dans quel délai ?',
    au2_t: 'Promoteurs',
    au2_d: 'Vous regardez un terrain qui va être desservi. Votre question est : quel est mon coût par porte, et combien de portes ce lot peut absorber sans faire exploser le calendrier ?',
    au3_t: 'Entrepreneurs généraux',
    au3_d: 'Vous avez la capacité d’exécution mais pas la file d’usine. Votre question est : qui livre les modules, à quelle date ferme, et qui répond de la garantie ?',

    co_eyebrow: 'Ce qui est vérifiable',
    co_title: 'Conformité et garanties',
    co1_t: 'CAN/CSA-A277',
    co1_d: 'Certification d’usine des bâtiments préfabriqués : la conformité est vérifiée en usine, par un organisme indépendant, avant le départ du module.',
    co2_t: 'Plans scellés',
    co2_d: 'Plans d’ingénieur scellés, conformes au Code de construction du Québec.',
    co3_t: 'Licences vérifiables',
    co3_d: 'Chaque entreprise qui exécute des travaux sur le projet est nommée dans l’étude de faisabilité, avec son numéro de licence de la Régie du bâtiment du Québec. Le registre public de la Régie permet de le vérifier avant de signer.',
    co4_t: 'Garantie encadrée par la loi',
    co4_d: 'Plan de la Garantie de construction résidentielle lorsque le bâtiment y est admissible, et la responsabilité de cinq ans prévue à l’article 2118 du Code civil. L’admissibilité et le répondant sont écrits dans l’étude de faisabilité.',
    co5_t: 'Dossier optimisé SCHL',
    co5_d: 'Le dossier est monté pour répondre aux exigences des programmes de la SCHL. Optimisé ne veut pas dire approuvé : l’approbation appartient au prêteur.',
    co6_t: 'Un seul répondant',
    co6_d: 'Usine, transport, montage et garantie : un seul contrat, un seul interlocuteur, une seule signature.',

    faq_title: 'Les questions qu’on nous pose',
    q1: 'Est-ce que vous fabriquez les maisons vous-mêmes ?',
    a1: 'Nous ne sommes pas une usine. Nous montons le projet et nous répondons du résultat : sélection du manufacturier certifié, contrat, calendrier de production, transport, montage et garantie. Le nom du manufacturier retenu pour votre projet apparaît dans l’étude de faisabilité.',
    q2: 'Le terrain est-il inclus dans vos prix ?',
    a2: 'Cela dépend du montage. Sur un projet municipal, le terrain appartient généralement à la municipalité ou au promoteur, et notre prix porte sur la maison livrée et montée. Chaque inclusion est écrite dans l’étude de faisabilité, ligne par ligne. Nous ne disons jamais « tout compris » sans la liste à côté.',
    q3: 'Qu’arrive-t-il si notre demande FIERH est refusée ?',
    a3: 'Le besoin de logements abordables ne disparaît pas avec un refus. L’étude de faisabilité reste valide : elle sert au prochain appel de projets, à un montage privé, ou à un programme fédéral. C’est un actif pour la municipalité, pas une dépense liée à une seule demande.',
    q4: 'Desservez-vous toutes les régions du Québec ?',
    a4: 'Le transport d’un module a un coût et des limites physiques réelles. La distance et le chemin d’accès sont validés à l’étude de faisabilité, avant tout engagement de prix. Nous refusons un projet plutôt que d’annoncer un chiffre qui ne tiendra pas.',
    q5: 'En combien de temps peut-on commencer ?',
    a5: 'L’étude de faisabilité démarre dans la semaine. La production, elle, dépend de la file d’usine au moment de la signature : c’est la première chose que nous vérifions avant d’écrire une date dans un contrat.',

    f_eyebrow: 'Parlons de votre secteur',
    f_title: 'Faire évaluer un projet',
    f_lead: 'Quatre questions. Vous avez une réponse d’un humain en un jour ouvrable, et rien n’est engagé.',
    f_step: 'Étape',
    f_of: 'sur',
    f_q1: 'Vous êtes...',
    f_o_muni: 'Une municipalité ou une MRC',
    f_o_promo: 'Un promoteur',
    f_o_eg: 'Un entrepreneur général',
    f_o_autre: 'Autre',
    f_q2: 'Où en est le projet ?',
    f_o_fierh: 'Demande déposée au FIERH',
    f_o_prep: 'On prépare un prochain appel de projets',
    f_o_terrain: 'Terrain identifié, financement à monter',
    f_o_explore: 'On explore, rien n’est arrêté',
    f_q3: 'Combien d’unités visez-vous ?',
    f_o_u1: 'Moins de 10',
    f_o_u2: '10 à 49',
    f_o_u3: '50 à 199',
    f_o_u4: '200 et plus',
    f_q4: 'Vos coordonnées',
    f_name: 'Nom complet',
    f_org: 'Organisation',
    f_email: 'Courriel',
    f_phone: 'Téléphone',
    f_msg: 'Le secteur visé, et ce que vous voulez savoir en premier',
    f_consent: 'J’accepte que Casaprefab m’écrive au sujet de ce projet. Je peux retirer mon consentement en tout temps.',
    f_back: 'Retour',
    f_next: 'Suivant',
    f_submit: 'Envoyer la demande',
    f_ok: 'Reçu. Vous avez une réponse en un jour ouvrable.',
    f_ko: 'L’envoi a échoué. Écrivez directement à miguel.dimas@casaprefab.ca, la demande se rend tout de suite.',
    f_required: 'Ce champ est obligatoire.',

    foot_tag: 'Maisons préfabriquées pour les projets résidentiels au Québec.',
    foot_contact: 'Nous joindre',
    foot_legal: 'Mentions',
    foot_privacy: 'Politique de confidentialité',
    foot_rights: 'Tous droits réservés.',
    foot_addr_label: 'Adresse postale',

    privacy_title: 'Politique de confidentialité',
    privacy_body: `
<p class="lead">Casaprefab recueille des renseignements personnels par le formulaire de ce site. Cette politique dit lesquels, pourquoi, pendant combien de temps, et ce que vous pouvez exiger. Elle est rédigée conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec, telle que modifiée par la Loi 25.</p>

<h2>Le responsable de la protection des renseignements personnels</h2>
<p>Miguel Dimas, Casaprefab. Toute question, toute demande d’accès, de rectification ou de retrait s’adresse à <a href="mailto:miguel.dimas@casaprefab.ca">miguel.dimas@casaprefab.ca</a>. Vous avez une réponse dans les trente jours.</p>

<h2>Ce qui est recueilli</h2>
<p>Uniquement ce que vous inscrivez vous-même dans le formulaire : votre nom, le nom de votre organisation, votre courriel, votre téléphone si vous le donnez, votre message, ainsi que les trois réponses de qualification (votre rôle, l’état du projet, le nombre d’unités visé) et l’adresse de la page d’où la demande a été envoyée.</p>

<h2>Pourquoi</h2>
<p>Pour vous répondre et pour évaluer votre projet. Rien d’autre. Vos renseignements ne sont ni vendus, ni loués, ni échangés, et ne servent à aucune publicité.</p>

<h2>Sur quelle base</h2>
<p>Sur votre consentement, donné par la case à cocher du formulaire. Ce consentement se retire en tout temps, par un simple courriel, et le retrait prend effet sans délai.</p>

<h2>Qui d’autre y a accès</h2>
<p>L’acheminement du formulaire passe par le service FormSubmit, qui transmet le contenu à notre boîte courriel. Ce service est exploité à l’extérieur du Québec : vos renseignements peuvent donc transiter hors de la province le temps de cette transmission. Aucun autre tiers n’y a accès.</p>

<h2>Témoins et mesure d’audience</h2>
<p>Ce site ne dépose aucun témoin, n’utilise aucun outil de mesure d’audience et ne suit personne d’une page à l’autre.</p>

<h2>Conservation</h2>
<p>Une demande restée sans suite est détruite après vingt-quatre mois. Les dossiers liés à un mandat sont conservés le temps prévu par les obligations légales et contractuelles applicables.</p>

<h2>Vos droits</h2>
<p>Vous pouvez demander l’accès à vos renseignements, leur rectification, leur suppression, ou le retrait de votre consentement. Si notre réponse ne vous satisfait pas, vous pouvez porter plainte auprès de la Commission d’accès à l’information du Québec.</p>

<h2>Incidents</h2>
<p>En cas d’incident de confidentialité présentant un risque de préjudice sérieux, les personnes concernées et la Commission d’accès à l’information sont avisées, et l’incident est consigné au registre prévu par la loi.</p>
`,
    privacy_back: 'Retour à l’accueil',
    privacy_updated: 'Dernière mise à jour :',
  },

  en: {
    title: 'Casaprefab · Prefabricated home neighbourhoods under $350,000 | Quebec',
    meta_desc: 'Casaprefab delivers prefabricated home neighbourhoods for Quebec municipalities and their developers, built to the FIERH program thresholds: two bedrooms or more, under $350,000.',
    og_title: 'Casaprefab · Neighbourhoods that come in under $350,000',
    og_desc: 'CAN/CSA-A277 certified prefabricated homes for municipal housing projects in Quebec. Feasibility study delivered in ten business days.',
    ld_desc: 'Supplier of prefabricated and modular homes for municipal residential projects in Quebec.',
    ld_area: 'Quebec, Canada',

    nav_program: 'The program',
    nav_models: 'The models',
    nav_process: 'How it runs',
    nav_study: 'Feasibility study',
    nav_cta: 'Get my project assessed',
    skip: 'Skip to content',

    h_eyebrow: 'Municipal housing · Quebec',
    h_title: 'Complete neighbourhoods, delivered under $350,000.',
    h_sub: 'Quebec has put close to a billion dollars on the table to bring water and sewer service to the land that will carry affordable homes. What is missing is the homes. Casaprefab supplies them, factory certified, at a price that fits inside the program window.',
    h_cta1: 'Get my project assessed',
    h_cta2: 'See the models',
    h_note: 'Every municipal enquiry answered within one business day.',

    s1_n: '$1B',
    s1_l: 'FIERH envelope for water infrastructure',
    s2_n: '$350,000',
    s2_l: 'the price ceiling that unlocks the enhanced assistance rate',
    s3_n: '75%',
    s3_l: 'of units must have two bedrooms or more',
    s4_n: '≈ 75 days',
    s4_l: 'roughly 45 days in the factory, 30 days on site',

    pr_eyebrow: 'The window',
    pr_title: 'FIERH pays for the pipes. Not for the homes.',
    pr_lead: 'The Financement d’infrastructures en eau pour la réalisation d’habitations program funds water and sewer service for land slated for development. The call for projects ran from July 2 to September 18, 2026. Selected municipalities will have serviced land, a tight schedule, and a commitment on the price of the homes built there. That is exactly where prefabrication stops being an option and becomes the only credible answer.',
    pr_c1_t: 'Price is a condition, not a target',
    pr_c1_d: 'The enhanced assistance rate, which can reach 80% of the water infrastructure, holds if at least 75% of units have two bedrooms or more and sell under $350,000. A home built on site at today’s cost breaks that ceiling. A factory home respects it by design.',
    pr_c2_t: 'The schedule is not negotiable',
    pr_c2_d: 'Funded infrastructure work comes with an end date. A conventional site depends on weather and available trades. A factory produces while the ground is being dug: both calendars advance in parallel instead of in sequence.',
    pr_c3_t: 'The municipality does not build the homes',
    pr_c3_d: 'It services the land, then a developer or a builder puts up the houses. Two separate decisions, made by two different parties, months apart. We work with both.',
    pr_c4_t: 'The program names prefabrication',
    pr_c4_d: 'Government documents speak explicitly of prefabricated home neighbourhoods. It is not a tolerance, it is the chosen means of holding the price promised to families.',
    pr_source: 'Source: Government of Quebec, FIERH program announcement and 2026 call for projects parameters.',

    m_eyebrow: 'The models',
    m_title: 'Three homes and one multiplex, all factory certified.',
    m_lead: 'Every unit leaves a CAN/CSA-A277 certified plant, with engineer sealed drawings. Models with two bedrooms or more count toward the 75% the program requires.',
    m_badge_qualify: 'Counts toward the 75%',
    m_badge_no: 'Outside the two bedroom count',
    m_label_area: 'Floor area',
    m_label_bed: 'Bedrooms',

    m1_name: 'Econo',
    m1_area: '937 sq ft',
    m1_bed: '1 bedroom',
    m1_f1: 'Open concept, engineered for density',
    m1_f2: 'Energy efficient appliances',
    m1_f3: 'Fits as an infill or accessory dwelling unit',

    m2_name: 'Family',
    m2_area: '1,179 sq ft',
    m2_bed: '2 bedrooms',
    m2_f1: 'Full kitchen and dining',
    m2_f2: 'Ready for private outdoor space',
    m2_f3: 'The format aimed at the first time buyer',

    m3_name: 'Executive',
    m3_area: '1,360 sq ft',
    m3_bed: '3 bedrooms',
    m3_f1: 'Primary bedroom with ensuite',
    m3_f2: 'Smart home ready',
    m3_f3: 'Premium finishes available',

    m4_name: '6-plex',
    m4_area: '6 units · about 1,100 sq ft each',
    m4_bed: '2 bedrooms and 2 bathrooms per unit',
    m4_f1: 'Stacked over three storeys, for a standard urban lot',
    m4_f2: 'Built for affordable rental housing',
    m4_f3: 'Repeats identically across large parcels',

    m_plan_label: 'See the plan',
    credit: 'Renderings and photographs supplied by the partner manufacturer.',

    g_eyebrow: 'In pictures',
    g_title: 'What a finished neighbourhood looks like.',
    g_lead: 'Completed homes, set on their lots, connected. Not a site that drags on for three seasons: this is what the municipality sees by the end of summer.',
    g_prev: 'Previous image',
    g_next: 'Next image',
    g_zoom: 'Enlarged image',
    g_close: 'Close',
    g_a1: 'Home lit at dusk on a residential street',
    g_a2: 'Home with carport and landscaping',
    g_a3: 'Terrace and private outdoor space',
    g_a4: 'Gabled home on a wooded lot',
    g_a5: 'Lit façade at nightfall',
    g_a6: 'Single storey home under a starry sky, facade and grounds lit',
    g_credit: 'Renderings from the partner manufacturer. The model retained for your project is confirmed in the feasibility study.',

    b_eyebrow: 'In the factory',
    b_title: 'While the ground is being dug, the home is already going up.',
    b_lead: 'That is the whole point of prefabrication on a funded project: production runs in parallel with the water works instead of waiting for them to finish. About 45 days in the plant, under independent inspection, out of the weather.',

    b2_eyebrow: 'On site',
    b2_title: 'One party answers, from drawing to occupancy.',
    b2_lead: 'Factory, transport, crane, assembly, finishing and warranty: one contract, one contact. The municipality keeps control of its file without refereeing between four suppliers.',

    m_price_t: 'What about price?',
    m_price_d: 'It depends on the land, the services already in place, transport to the site and the volume ordered. We publish no showroom price: we cost your project, with the inclusions written down in black and white, inside the feasibility study. It is the only honest way to promise a $350,000 ceiling to a municipal council.',

    p_eyebrow: 'How it runs',
    p_title: 'From the council resolution to the keys, in five steps.',
    p1_t: 'Feasibility study',
    p1_d: 'We validate zoning, siting, transport access and crane reach, then we cost the delivered unit. Ten business days.',
    p2_t: 'Land and services',
    p2_d: 'We line the siting plan up with the funded water and sewer work, so the modules arrive on a site ready to receive them.',
    p3_t: 'File and permits',
    p3_d: 'Sealed drawings, municipal code compliance, and the documents the program and the lender require. We supply the file, the municipality keeps control.',
    p4_t: 'Factory production',
    p4_d: 'About 45 days. Production advances while foundations and services are being finished on site.',
    p5_t: 'Delivery and assembly',
    p5_d: 'About 30 days on site. Connections, finishes and inspection, through to occupancy.',

    n_eyebrow: 'Once it is set down',
    n_title: 'After dark, a factory built home looks like every other home on the street.',
    n_lead: 'That is the objection that comes up most often around a council table. The manufacturer’s renderings show the models as they come off the line: the same cladding, the same windows, the same roofs as the rest of the street.',

    fa_eyebrow: 'The way in',
    fa_title: 'The prefabrication feasibility study',
    fa_lead: 'Before a council or a developer commits a dollar, they need a document that says whether it holds up. That is what we deliver, in ten business days, on one specific site.',
    fa_li1: 'Zoning and siting verdict, point by point, for the target area',
    fa_li2: 'Achievable unit count and model mix, calibrated on the 75% two bedroom threshold',
    fa_li3: 'Cost per delivered unit, with a written list of what is included and what is not',
    fa_li4: 'Physical access: haul route, crane radius, delivery constraints',
    fa_li5: 'A realistic schedule, aligned with the end of the infrastructure work',
    fa_out: 'Deliverable: a signed document, usable as is in a council meeting or in front of a lender.',
    fa_cta: 'Request a study',
    fa_note: 'The cost of the study is credited in full if the project proceeds with us.',

    au_eyebrow: 'Who this is for',
    au_title: 'Three audiences, three different questions.',
    au1_t: 'Municipalities and RCMs',
    au1_d: 'The FIERH call for projects closed on 18 September. You filed, or you are preparing for the next one. Your question is whether homes under $350,000 can actually be delivered on this site, and how fast.',
    au2_t: 'Developers',
    au2_d: 'You are looking at land that is about to be serviced. Your question is your cost per door, and how many doors the parcel can absorb without blowing up the schedule.',
    au3_t: 'General contractors',
    au3_d: 'You have the execution capacity but not the factory queue. Your question is who delivers the modules, on what firm date, and who stands behind the warranty.',

    co_eyebrow: 'What can be verified',
    co_title: 'Compliance and warranties',
    co1_t: 'CAN/CSA-A277',
    co1_d: 'Factory certification for prefabricated buildings: compliance is verified in the plant, by an independent body, before the module ships.',
    co2_t: 'Sealed drawings',
    co2_d: 'Engineer sealed drawings, compliant with the Quebec Construction Code.',
    co3_t: 'Verifiable licences',
    co3_d: 'Every company carrying out work on the project is named in the feasibility study, with its Régie du bâtiment du Québec licence number. The Régie public register lets you check it before you sign.',
    co4_t: 'Warranty set by law',
    co4_d: 'Garantie de construction résidentielle plan coverage where the building qualifies, and the five year liability set out in article 2118 of the Civil Code. Eligibility and the party answering for it are written into the feasibility study.',
    co5_t: 'CMHC ready file',
    co5_d: 'The file is assembled to meet CMHC program requirements. Ready does not mean approved: approval belongs to the lender.',
    co6_t: 'One party answers',
    co6_d: 'Factory, transport, assembly and warranty: one contract, one contact, one signature.',

    faq_title: 'What people ask us',
    q1: 'Do you manufacture the homes yourselves?',
    a1: 'We are not a plant. We assemble the project and we answer for the result: selection of the certified manufacturer, contract, production schedule, transport, assembly and warranty. The manufacturer retained for your project is named in the feasibility study.',
    q2: 'Is the land included in your prices?',
    a2: 'It depends on the structure of the deal. On a municipal project the land usually belongs to the municipality or the developer, and our price covers the home delivered and assembled. Every inclusion is written into the feasibility study, line by line. We never say all inclusive without the list beside it.',
    q3: 'What happens if our FIERH application is turned down?',
    a3: 'A refusal does not make the need for affordable housing go away. The feasibility study stays valid: it serves the next call for projects, a private structure, or a federal program. It is an asset for the municipality, not an expense tied to one application.',
    q4: 'Do you serve every region of Quebec?',
    a4: 'Moving a module has a real cost and real physical limits. Distance and haul route are validated during the feasibility study, before any price commitment. We would rather decline a project than announce a number that will not hold.',
    q5: 'How soon can we start?',
    a5: 'The feasibility study starts within the week. Production depends on the factory queue at the time of signing: that is the first thing we verify before a date is written into a contract.',

    f_eyebrow: 'Tell us about your site',
    f_title: 'Get a project assessed',
    f_lead: 'Four questions. You get an answer from a human within one business day, and nothing is committed.',
    f_step: 'Step',
    f_of: 'of',
    f_q1: 'You are...',
    f_o_muni: 'A municipality or an RCM',
    f_o_promo: 'A developer',
    f_o_eg: 'A general contractor',
    f_o_autre: 'Other',
    f_q2: 'Where is the project at?',
    f_o_fierh: 'Application filed under FIERH',
    f_o_prep: 'Preparing for a coming call for projects',
    f_o_terrain: 'Land identified, financing to be arranged',
    f_o_explore: 'Exploring, nothing decided',
    f_q3: 'How many units are you aiming for?',
    f_o_u1: 'Fewer than 10',
    f_o_u2: '10 to 49',
    f_o_u3: '50 to 199',
    f_o_u4: '200 and up',
    f_q4: 'Your contact details',
    f_name: 'Full name',
    f_org: 'Organization',
    f_email: 'Email',
    f_phone: 'Phone',
    f_msg: 'The site you have in mind, and what you want to know first',
    f_consent: 'I agree that Casaprefab may write to me about this project. I can withdraw my consent at any time.',
    f_back: 'Back',
    f_next: 'Next',
    f_submit: 'Send the request',
    f_ok: 'Received. You will have an answer within one business day.',
    f_ko: 'The send failed. Write straight to miguel.dimas@casaprefab.ca and it reaches us right away.',
    f_required: 'This field is required.',

    foot_tag: 'Prefabricated homes for residential projects in Quebec.',
    foot_contact: 'Contact',
    foot_legal: 'Legal',
    foot_privacy: 'Privacy policy',
    foot_rights: 'All rights reserved.',
    foot_addr_label: 'Mailing address',

    privacy_title: 'Privacy policy',
    privacy_body: `
<p class="lead">Casaprefab collects personal information through the form on this site. This policy states what is collected, why, for how long, and what you can require of us. It is written to comply with Quebec’s Act respecting the protection of personal information in the private sector, as amended by Law 25.</p>

<h2>Person in charge of the protection of personal information</h2>
<p>Miguel Dimas, Casaprefab. Any question, and any request for access, correction or withdrawal, goes to <a href="mailto:miguel.dimas@casaprefab.ca">miguel.dimas@casaprefab.ca</a>. You get an answer within thirty days.</p>

<h2>What is collected</h2>
<p>Only what you enter yourself in the form: your name, the name of your organization, your email, your phone number if you provide one, your message, the three qualification answers (your role, the stage of the project, the number of units you are aiming for), and the address of the page the request was sent from.</p>

<h2>Why</h2>
<p>To answer you and to assess your project. Nothing else. Your information is never sold, rented or traded, and is never used for advertising.</p>

<h2>On what basis</h2>
<p>On your consent, given through the checkbox in the form. That consent can be withdrawn at any time by a simple email, and the withdrawal takes effect immediately.</p>

<h2>Who else has access</h2>
<p>Form delivery runs through the FormSubmit service, which forwards the content to our mailbox. That service operates outside Quebec, so your information may transit outside the province during that transmission. No other third party has access to it.</p>

<h2>Cookies and analytics</h2>
<p>This site sets no cookies, uses no analytics tool and does not track anyone from page to page.</p>

<h2>Retention</h2>
<p>A request that leads nowhere is destroyed after twenty-four months. Files tied to a mandate are kept for the period required by the applicable legal and contractual obligations.</p>

<h2>Your rights</h2>
<p>You may request access to your information, its correction, its deletion, or the withdrawal of your consent. If our answer does not satisfy you, you may file a complaint with the Commission d’accès à l’information du Québec.</p>

<h2>Incidents</h2>
<p>In the event of a confidentiality incident presenting a risk of serious injury, the persons concerned and the Commission d’accès à l’information are notified, and the incident is entered in the register required by law.</p>
`,
    privacy_back: 'Back to home',
    privacy_updated: 'Last updated:',
  },
};
