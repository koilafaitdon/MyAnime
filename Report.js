
function submitFeedback(feedback) {
  // Remplacez 'NOM_UTILISATEUR' par votre nom d'utilisateur GitHub, et 'REPO' par le nom de votre référentiel GitHub
  const url = 'https://api.github.com/repos/koilafaitdon/MyAnime/issues';

  const issueData = {
    title: 'Feedback from player',
    body: feedback,
  };

  // Utilisez l'API Fetch pour envoyer la requête POST à l'API de GitHub
  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'token VOTRE_JETON_GITHUB', // Remplacez 'VOTRE_JETON_GITHUB' par votre jeton d'accès personnel GitHub
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issueData),
  })
  .then(response => {
    if (response.ok) {
      alert('Feedback envoyé avec succès !');
    } else {
      alert('Une erreur s\'est produite lors de l\'envoi du feedback.');
    }
  })
  .catch(error => {
    console.error('Erreur :', error);
    alert('Une erreur s\'est produite lors de l\'envoi du feedback.');
  });
}
