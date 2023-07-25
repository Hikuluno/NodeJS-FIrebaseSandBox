import db from "../utils/firebase.js";

export default async function books(req, res) {
  try {
    const querySnapshot = await db.collection("Books").get();
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des livres :", error);
    return res
      .status(500)
      .json({ error: "Something went wrong, please try again" });
  }
}
