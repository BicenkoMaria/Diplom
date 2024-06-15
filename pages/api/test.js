export default function handler(req, res) {
    //res.status(200).send("it work?" );
    res.json({
        message: "Successful",
        data: { name: "A new JSON API reponse data" },
      });
  }