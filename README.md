
# Projet

## Installation du projet

### Prérequis
- Node.js (version 16+)
- Symfony CLI
- Composer
- Base de données MySQL
- Serveur local (ex : MAMP, WAMP, ou Docker)

### Étapes d'installation

1. **Clonez le dépôt :**
   ```bash
   git clone https://github.com/YanisBra/Atomic_app.git
   cd Atomic_app
   ```

2. **Installation des dépendances côté front-end :**
   ```bash
   cd client
   npm install
   ```

3. **Installation des dépendances côté back-end :**
   ```bash
   cd app
   composer install
   ```

4. **Configuration des fichiers d'environnement :**
   - Copiez les fichiers `.env.example` en `.env` pour le front et le back.
   - Configurez les variables de connexion à la base de données dans le fichier `api/.env` :
     ```
     DATABASE_URL="mysql://username:password@127.0.0.1:3306/nom_de_la_base?charset=utf8mb4"
     ```

5. **Migration de la base de données :**
   ```bash
   cd app
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate
   php bin/console doctrine:fixtures:load
   ```

6. **Lancement des serveurs :**
   - Front-end :
     ```bash
     cd client
     npm run dev
     ```
   - Back-end :
     ```bash
     cd app
     symfony serve
     ```

## Présentation de l'application

### Brief
Cette application permet aux utilisateurs de se connecter via une authentification sécurisée (JWT) et de récupérer une liste de modules depuis un serveur backend Symfony. Ces modules sont affichés sous forme de cartes dans une interface utilisateur intuitive.

### Détails techniques et documentation des endpoints

#### **Endpoint 1 : Authentification**
- **URL** : `/api/login_check`
- **Méthode** : `POST`
- **Description** : Permet à l'utilisateur de se connecter et de recevoir un token JWT.
- **Payload attendu** :
  ```json
  {
    "username": "user@example.com",
    "password": "password"
  }
  ```
- **Réponse** :
  ```json
  {
    "token": "JWT_TOKEN"
  }
  ```

#### **Endpoint 2 : Récupération des modules**
- **URL** : `/api/modules`
- **Méthode** : `GET`
- **Description** : Retourne la liste des modules disponibles pour l'utilisateur connecté.
- **Headers requis** :
  ```
  Authorization: Bearer JWT_TOKEN
  ```
- **Réponse** :
  ```json
  {
    "modules": [
      {
        "title": "Module 1",
        "description": "Description du module 1"
      },
      {
        "title": "Module 2",
        "description": "Description du module 2"
      }
    ]
  }
  ```

## Stack techniques

- **Frontend** : React avec Vite et Tailwind CSS
- **Backend** : Symfony
- **Base de données** : MySQL
- **Authentification** : JWT


## Structure de la Base de Données et Entités

### Tables Générées

#### Table `user`
- Contient les informations des utilisateurs.

#### Table `module`
- Contient les détails des modules disponibles.

#### Table `user_module`
- Table intermédiaire pour la relation `ManyToMany` entre les utilisateurs et les modules.

### Schéma Relationnel Simplifié

```plaintext
User
+----+------------+-----------+---------+-----------+------------+---------+
| id | first_name | last_name | email   | token_api | roles      | password|
+----+------------+-----------+---------+-----------+------------+---------+

Module
+----+-------------------+---------------------------+---------------------+
| id | title             | description               | created_at          |
+----+-------------------+---------------------------+---------------------+

user_module
+----------+------------+
| user_id  | module_id  |
+----------+------------+
```

### Fixtures

#### Objectifs des Fixtures
- Créer des données initiales pour tester l'application.
- Générer des utilisateurs et des modules avec des relations aléatoires.

#### Exemple d'utilisateur généré :
```plaintext
User:
- Email: alan@alan.fr
- Password: pass_1234
- Modules assignés : Développement Web Frontend, Bases de Données et SQL
```

#### Exemple de module généré :
```plaintext
Module:
- Title: Programmation Orientée Objet (POO)
- Description: Concepts fondamentaux comme les classes, objets, héritage, polymorphisme.
- Created At: 2023-02-01
```

### Schéma Graphique

![Schéma de la base de données](/client/public/schema_database.png)


## Généralités sur la sécurité

### Sécurité générale

- **Authentification JWT** : Les utilisateurs doivent s'authentifier pour accéder aux endpoints sécurisés.
- **Headers sécurisés** : Le token JWT est transmis dans le header `Authorization`.
- **Protection contre les accès non autorisés** : Le backend vérifie systématiquement les tokens pour les requêtes protégées. Les cookies critiques sont marqués `HttpOnly` pour éviter tout accès par JavaScript malveillant.

## Features

### Wireframe
Les wireframes sont conçus pour offrir une navigation simple et intuitive. 

Ils ont été intégrés en respectant les bonnes pratiques de design UX/UI avec **Tailwind CSS**.

Voici une capture du wireframe :
![Wireframe](client/public/wireframe.png)

### Authentification JWT
- Les utilisateurs s'authentifient via `/api/login_check`.
- Le token JWT est stocké dans Redux côté client.

### Récupération des modules
L'application appelle `/api/modules` pour récupérer les modules. Ces données sont affichées dans une interface utilisateur sous forme de cartes.

### Diagramme de fonctionnement
Voici un diagramme simplifié des interactions entre le front-end et le back-end :


![Diagramme de Séquence : Gestion du Login/Mot de Passe avec JWT](/client/public/diagramme_de_séquence.png)