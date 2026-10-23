const titreP = document.getElementById("Titre");
const Description = document.getElementById("description");
const categorie = document.getElementById("Réseaux");
const Priorité = document.getElementById("Priorité");

//button D'Ajouter 
const Ajoutbtn = document.getElementById("Ajout");

//Button carte et tableaux
const carte = document.getElementById("cart");
const table = document.getElementById("tabl");

let checker = 0;
let demande;
let NmberCart = 4;


let demandes = [
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

//Afichage
Affichage(demandes);


// nomber de demandes 
function nombreD(demandes) {
  const Ncarte = document.getElementById("Ncartes");
  Ncarte.textContent = demandes.length + " demandes";
  
}

function Affichage(demandes) {
  const contenier = document.querySelector(".articls");
  contenier.textContent = "";
  for (let i = 0; i < demandes.length; i++) {
  
    nombreD(demandes);

    // article de tout les div .
    const forma = document.createElement("article");
    forma.classList.add("forma-articl");

    const flech = document.createElement("div");
    flech.classList.add("flech-articl");


    // icon de la carte avec la condition
    const flix = document.createElement("i");
    if (demandes[i].priorite === "Haute") {
      flix.classList.add("fa-solid");
      flix.classList.add("fa-bolt");
      flix.classList.add("bg-flech");
      flech.append(flix);
    }
    if (demandes[i].priorite === "Normale") {
      flix.classList.add("fa-solid");
      flix.classList.add("fa-square-caret-down");
      flix.classList.add("bg-flech");
      flech.append(flix);
    }
    if (demandes[i].priorite === "Basse") {
      flix.classList.add("fa-solid");
      flix.classList.add("fa-spa");
      flix.classList.add("bg-flech");
      flech.append(flix);
    }


    // id de la carte
    const nmber_art = document.createElement("p");
    nmber_art.textContent = "HD-00" + demandes[i].id;
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




    // les deux cas de sinification categorie et priorite.
    const deuxcas = document.createElement("div");
    deuxcas.classList.add("deux-sinification");

    const category = document.createElement("p");
    category.textContent = demandes[i].categorie;
    deuxcas.append(category);
    category.style.fontWeight = "bold";

    const priorité = document.createElement("span");
    priorité.textContent = demandes[i].priorite;
    deuxcas.append(priorité);
    forma.append(deuxcas);

    if (demandes[i].priorite === "Haute") {
      priorité.style.backgroundColor = " rgba(255, 240, 232, 1)";
      priorité.style.color = "rgba(186, 100, 68, 1)";
      priorité.style.fontWeight = "bold";
    }
    if (demandes[i].priorite === "Normale") {
      priorité.style.backgroundColor = "rgba(255, 245, 223, 1)";
      priorité.style.color = "rgba(166, 122, 43, 1)";
      priorité.style.fontWeight = "bold";
    }
    if (demandes[i].priorite === "Basse") {
      priorité.style.backgroundColor = "rgba(232, 246, 238, 1)";
      priorité.style.color = "rgba(56, 136, 103, 1)";
      priorité.style.fontWeight = "bold";
    }




    // la ligne siparer .
    const hr = document.createElement("hr");
    forma.append(hr);



    //les deux button de modifier et suprimer .
    const modsup = document.createElement("div");
    modsup.classList.add("modifier-supprimer");

    const mod = document.createElement("button");
    mod.classList.add("btn-modifier");
    mod.setAttribute("onclick", `Modifier('${demandes[i].id}')`);

    const modicon = document.createElement("i");
    modicon.classList.add("fa-solid", "fa-pencil");
    modsup.append(modicon);
    mod.textContent = "Modifier";
    modsup.append(mod);


    const sup = document.createElement("button");
    sup.classList.add("btn-supprimer");
    sup.setAttribute("onclick", `Supprimer('${demandes[i].id}')`)


    const supicon = document.createElement("i");
    supicon.classList.add("fa-solid", "fa-trash-can");
    modsup.append(supicon);
    sup.textContent = "supprimer";
    modsup.append(sup);


    forma.append(modsup);
    contenier.append(forma);

  }
}



//fonction suprimer 
function Supprimer(id) {
  const delet = confirm("cofirmer la supprission");
  if (delet) {
    demandes = demandes.filter(dema => dema.id !== Number(id));
    Affichage(demandes);
  }
  else if (!delet) {
    return;
  }

}


//fonction Modifier 
function Modifier(id) {
  checker = id
  demande = demandes.find(demand => demand.id === Number(id));
  titreP.value = demande.titre
  categorie.value = demande.categorie;
  Priorité.value = demande.priorite;
  Description.value = demande.description;
  Ajoutbtn.textContent = " + Cofirmer La Modification";

}



//fonction Ajouter
function AjouterDemmande() {
  let obj = {};
  obj.id = NmberCart++;
  obj.titre = titreP.value;
  obj.description = Description.value;
  obj.categorie = categorie.value;
  obj.priorite = Priorité.value;
  if (titreP.value === "" || Description.value === "" || categorie.value === "" || Priorité.value === "") {
    return alert("veulliez entrer touts les donner");
  }
  else {
    demandes.push(obj);
    titreP.value = "";
    Description.value = "";
    categorie.value = "";
    Priorité.value = "";

  }
}
Ajoutbtn.addEventListener("click", (i) => {
  i.preventDefault();
  if (checker === 0) {
    AjouterDemmande();
  }
  else if (checker !== 0) {
    demande.titre = titreP.value;
    demande.description = Description.value;
    demande.categorie = categorie.value;
    demande.priorite = Priorité.value;
    if (titreP.value === "" || Description.value === "" || categorie.value === "" || Priorité.value === "") {
      return alert("veulliez entrer touts les donner");
    }
    console.log(checker);
    checker = 0;
    Ajoutbtn.textContent = "+ Ajouter la demandes ";
    titreP.value = "";
    Description.value = "";
    categorie.value = "";
    Priorité.value = "";
  }
  Affichage(demandes);



});



//les deux button carte et tableaux pour afficher tableaux .
table.addEventListener("click", (i) => {
  i.preventDefault();
  carte.style.backgroundColor = "rgb(136, 136, 135)";
  table.style.backgroundColor = "rgb(250, 250, 246)";
});
carte.addEventListener("click", (i) => {
  i.preventDefault();
  table.style.backgroundColor = "rgb(136, 136, 135)";
  carte.style.backgroundColor = "rgb(250, 250, 246)";
})
