
const demandes = [
  {
    id: 1,
    titre: "Connexion Wi-Fi instable",
    description: "Le réseau se déconnecte régulièrement.",
    categorie: "Réseau",
    priorite: "Haute"
  },
  {
    id: 2,
    titre: "Clavier défectueux",
    description: "Certaines touches du clavier ne fonctionnent plus.",
    categorie: "Matériel",
    priorite: "Normale"
  },
  {
    id: 3,
    titre: "Mise à jour du logiciel",
    description: "Le logiciel doit être mis à jour.",
    categorie: "Logiciel",
    priorite: "Basse"
  }
];
let NmberCart = 4; 

Affichage(demandes);
const Ajout = document.getElementById("Ajout");
function Affichage(demandes) {
  const contenier = document.querySelector(".articls");
  contenier.textContent = "";
  console.log(demandes);
  for (let i = 0; i < demandes.length; i++) {




    // article de tout les div .
    const forma = document.createElement("article");
    forma.classList.add("forma-articl");

    const flech = document.createElement("div");
    flech.classList.add("flech-articl");

    const flix = document.createElement("i");
    flix.classList.add("fa-solid");
    flix.classList.add("fa-bolt");
    flix.classList.add("bg-flech");
    flech.append(flix);

    const nmber_art = document.createElement("p");
    nmber_art.textContent = "HD-00"+ demandes[i].id;
    flech.append(nmber_art);

    forma.append(flech);




    // titre avec discription .
    const titre = document.createElement("div");
    titre.classList.add("titre-articl");

    const titre_art = document.createElement("h3");
    titre_art.textContent = demandes[i].titre;
    titre.append(titre_art);

    const discrip = document.createElement("p");
    discrip.textContent = demandes[i].description;
    titre.append(discrip);

    forma.append(titre);




    // les deux cas de sinification logiciele et Normal .
    const deuxcas = document.createElement("div");
    deuxcas.classList.add("deux-sinification");

    const category = document.createElement("p");
    category.textContent = demandes[i].categorie;
    deuxcas.append(category);

    const priorité = document.createElement("span");
    priorité.textContent = demandes[i].priorite;
    deuxcas.append(priorité);
    forma.append(deuxcas);






    // la ligne siparer .
    const hr = document.createElement("hr");
    forma.append(hr);






    //les deux button de modifier et suprimer .
    const modsup = document.createElement("div");
    modsup.classList.add("modifier-supprimer");

    const mod = document.createElement("button");
    mod.classList.add("btn-modifier");

    const modicon = document.createElement("i");
    modicon.classList.add("fa-solid", "fa-pencil");
    modsup.append(modicon);
    mod.textContent = "Modifier";
    modsup.append(mod);

    const sup = document.createElement("button");
    sup.classList.add("btn-supprimer");

    const supicon = document.createElement("i");
    supicon.classList.add("fa-solid", "fa-trash-can");
    modsup.append(supicon);
    sup.textContent = "supprimer";
    modsup.append(sup);


    forma.append(modsup);
    contenier.append(forma);

  }

}


function AjouterDemmande() {
  let obj = {};
  obj.id = NmberCart++;
  const titreP = document.getElementById("Titre");
  obj.titre = titreP.value;
  const Description = document.getElementById("description");
  obj.description = Description.value;
  const categorie = document.getElementById("Réseaux");
  obj.categorie = categorie.value;
  const Priorité = document.getElementById("Priorité");
  obj.priorite = Priorité.value;
  demandes.push(obj); 
  


}
Ajout.addEventListener("click", (i) => {
  i.preventDefault();
  AjouterDemmande();
  console.log(demandes);
  
  Affichage(demandes);

})


