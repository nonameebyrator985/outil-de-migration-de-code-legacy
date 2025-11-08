function generateMigrationPlan(dependencies) {
    // Générer un plan de migration basé sur les dépendances
dependencies.forEach(dep => {
        console.log(`Création d'un plan de migration pour : ${dep}`);
    });
}

module.exports = generateMigrationPlan;