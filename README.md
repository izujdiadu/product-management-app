# Product Management App

Cette application permet de gérer les produits avec des fonctionnalités CRUD (Create, Read, Update, Delete).

## Structure du Projet

product-management-app
├── /api # Dossier pour le backend (Express + MongoDB)
│ ├── /models
│ │ └── Product.js
│ ├── /routes
│ │ └── productRoutes.js
│ ├── server.js
│ ├── package.json
│ └── .gitignore
├── /react-app # Dossier pour le frontend (React)
│ ├── /src
│ │ ├── /components
│ │ │ ├── ProductForm.js
│ │ │ └── ProductList.js
│ │ ├── /redux
│ │ │ └── store.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── reportWebVitals.js
│ ├── package.json
│ └── .gitignore
└── README.md
