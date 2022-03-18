# L'extention .sh, contient du code pour différents types de script qui
# peuvent être utilisés pour le bash du shell Unix. Ces scripts sont écrits
# à l'aide du langage de commande Bash.

#! /bin/sh

# Cpier le fichier electron.js dans public
echo "Copy file electron build on ./public !!"

# On copie les fichiers que l'on va avoir besoin pour le build avec electron
cp ./src-electron/electron.js ./public
cp ./src-electron/preload.js ./public

# log
echo "Copy file success !!"