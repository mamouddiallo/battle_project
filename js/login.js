document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne le formulaire de connexion
    const loginForm = document.getElementById('login-form');
    console.log("mamoud")
    // Écoute l'événement de soumission du formulaire de connexion
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupére les valeurs des champs du formulaire de connexion
        const loginEmail = document.getElementById('email').value;
        const loginPassword = document.getElementById('password').value;

        // Vérifie d'abord si le formulaire de connexion est vide
        if (!loginEmail || !loginPassword) {
            // Affiche un message d'erreur si le formulaire est vide
            alert('Please fill in all fields.');
            return; // Sortez de la fonction pour éviter la vérification des données d'inscription
        }

        // Récupére les données d'inscription stockées dans le Local Storage
        const storedFormDataJSON = localStorage.getItem('users');

        if (storedFormDataJSON) {
            // Convertis les données JSON stockées en un objet JavaScript
            const storedFormData = JSON.parse(storedFormDataJSON);
            let isUser=storedFormData.find(users=>users.email === loginEmail && users.password === loginPassword)
            console.log(isUser)
            // Vérifie si l'e-mail et le mot de passe correspondent aux données d'inscription
            if (isUser) {
                // Authentification réussie, vous pouvez rediriger l'utilisateur vers la page d'accueil ou une autre page sécurisée
                alert('Login successful!');
                localStorage.setItem("session",JSON.stringify(isUser))
                window.location.href = '../html/todo.html'; 
            } else {
                // Affiche un message d'erreur en cas d'authentification échouée
                alert('Login failed. Please check your email and password.');
            }
        } else {
            // Aucune donnée d'inscription trouvée dans le Local Storage
            alert('No registration data found. Please register first.');
        }
    });
});
