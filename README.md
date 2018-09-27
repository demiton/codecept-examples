# codecept-examples
Exemples d'utilisation de Codeceptjs et Puppeteer
## Pré-requis

Codeceptjs et Puppeteer doivent etre installer en global :

```
npm install -g codecept puppeteer
```

On crée ensuite le projet CodeceptsJS :

```
codeceptjs init
```

Comme CodeceptsJS est compatible avec plusieurs framework d'automation comme Selenium Webdriver ou ou encore appium, on doit s'assurer que Puppeteer a bien été choisi lors de l'initialisation, pour cela on ouvre le json `codeceptjs.json` et avoir la configuration suivante :

```
{
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "Puppeteer":{
      "url": "http://localhost",
      "show": false
    }
  },
  "include": {
    "I": "./steps_file.js"
  },
  "bootstrap": false,
  "mocha": {},
  "name": "codecept-examples"
}

```

# Mon premier test
Rechercher les alternatives a Puppeteer

## Les actions que je souhaite réaliser

1. Aller sur Google
2. Entrer le mot `alternatives to Puppeteer` dans la barre de recherche
3. Clicker sur le Bouton recherche

# L'implémentation des actions via CodeceptsJS :

## Prealables
On doit créer un fichier de test à la racine du projet, dans notre cas, on tape :
```
codeceptjs gt
```
puis on renseigne le nom du script : `AlternativesToPuppeteer`, codeceptjs créera automatiquement les fichiers necessaires.


Voir : [https://codecept.io/puppeteer/](https://codecept.io/puppeteer/)
