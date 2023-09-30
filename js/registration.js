document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez= le formulaire et ajoutez un écouteur d'événements pour la soumission
    const registrationForm = document.querySelector("#login-form");
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire

        // Récupére les valeurs du formulaire
        const name = document.querySelector("#name").value;
        const Surname = document.querySelector("#Surname").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const ConfPassword = document.querySelector("#ConfPassword").value;

        // Vérifie si les mots de passe correspondent
        if (password !== ConfPassword) {
            alert("Passwords not matching");
            return;
        }

        // Créez un objet utilisateur avec les données du formulaire
        const utilisateur = {
            name: name,
            Surname: Surname,
            email: email,
            password: password,
        };

        // Stocke l'objet utilisateur dans le stockage local
        const maBd = JSON.parse(localStorage.getItem("maBd")) || [];
        maBd.push(utilisateur);
        localStorage.setItem("maBd", JSON.stringify(maBd));

        // Réinitialise le formulaire
        registrationForm.reset();

        // Affiche un message de confirmation
        alert("successful registration!");

        // Redirige l'utilisateur vers une autre page (par exemple, la page de profil)
         window.location.href = "../html/login.html"; 
    });
});
