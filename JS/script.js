const demandes = [
  {
    id: "HD-001",
    titre: "Connexion Wi-Fi instable",
    description: "Le réseau se déconnecte régulièrement.",
    categorie: "Réseau",
    priorite: "Haute"
  },
  {
    id: "HD-002",
    titre: "Clavier défectueux",
    description: "Certaines touches du clavier ne fonctionnent plus.",
    categorie: "Matériel",
    priorite: "Normale"
  },
  {
    id: "HD-003",
    titre: "Mise à jour du logiciel",
    description: "Le logiciel doit être mis à jour.",
    categorie: "Logiciel",
    priorite: "Basse"
  }
];



const contenier = document.getElementsByClassName("articls");
for (let i = 0; i < demandes.length; i++) {
  const forma = document.createElement("article");
  forma.setAttribute("class", "forma-articl");
  const flech = document.createElement("div");
  flech.setAttribute("class", "flech-articl");
  forma.append(flech);
  const flix  = document.createElement("i");
    flix.setAttribute("class", "fa-solid fa-bolt bg-flech");
    flech.append(flix);








}