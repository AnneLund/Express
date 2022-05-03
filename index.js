import express from 'express';

//Jeg deklarerer en variabel der påkalder serveren fra express
const app = express();

//Der skal lyttes efter port 4242, så mine undersider kan vises herpå i browseren
app.listen(4242, () => {
    console.log("Express server kører....");
});

//Jeg opretter nogle undersider der kan køres i broseren via http://localhost:4242/
app.get("/", (req, res) => {
    res.send('Her er forsiden...');
});

// http://localhost:4242/om
app.get('/om', (req, res) => {
      res.send('Dette er "om" siden...');
})

// http://localhost:4242/kontakt
app.get('/kontakt', (req, res) => {
      res.send('Dette er "kontakt" siden...');
});

// http://localhost:4242/produkter
app.get('/produkter', (req, res) => {
    res.send('Dette er "produkter" siden...');
});

//Hvis der søges efter en side der ikke indgår i min router, vises en besked herom
app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})