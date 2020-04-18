
//  fonctions afficher() cacher()
afficher = (elem) => {
  elem.style.display = 'block';
//  elem.style.transition = "all 2s";
}
cacher = (elem) => {
  elem.style.display = 'none';
}

//  affichage de la page
afficher(debut);
for(chx of choix) {
  cacher(chx);
}
for(niv of niveaux) {
  cacher(niv);
}

//  Clic #debut : afficher les 2 choix
debut.addEventListener('click', () => {
  choix01.className = "col-3 offset-2 choix transitions";
  choix02.className = "col-3 offset-2 choix nivViolets transitions";
  
  afficher(debut);

  for(chx of choix) {
    chx.style.display = 'inline-block';
  }

  for(niv of niveaux) {
    cacher(niv);
  }
})

//  choix01 capter CO2
choix01.addEventListener('click', () => {
  choix01.classList.add('branche');
  niv111.className = "col-6 niveaux";
  niv112.className = "col-6 niveaux";
  
  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv111);
  afficher(niv112);
})
//  niv111  un peu
niv111.addEventListener('click', () => {
  niv111.className = "col-12 niveaux";

  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv111);
  afficher(niv113);
})
niv113.addEventListener('click', () => {
  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv111);
  afficher(niv113);
  afficher(niv114);
})
niv114.addEventListener('click', () => {
  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv115);
  afficher(niv111);
  afficher(niv113);
  afficher(niv114);
})
//  niv112  massvement
niv112.addEventListener('click', () => {
  niv112.className = "col-12 niveaux";

  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv112);
  afficher(niv121);
})
niv121.addEventListener('click', () => {
  niv121.classList.add('branche');
  niv122.className = 'col-6 niveaux';
  niv123.className = 'col-6 niveaux';

  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv112);
  afficher(niv121);
  afficher(niv122)
  afficher(niv123);
})
//  niv122 personne
niv122.addEventListener('click', () => {
  niv122.className = "col-12 niveaux";

  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv112);
  afficher(niv121);
  afficher(niv122)
  afficher(niv124);
})
//  niv124 à toi de trouver
niv123.addEventListener('click', () => {
  niv123.className = "col-12 niveaux";
  
  cacher(choix02);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv112);
  afficher(niv121);
  afficher(niv123);
  afficher(niv125);
})

//  choix02 baisserPet
choix02.addEventListener('click', () => {
  choix02.className = 'col-3 offset-7 choix nivViolets  branche';
  niv211.className = 'col-6 niveaux nivViolets';
  niv212.className = 'col-6 niveaux nivViolets';
  niv213.className = 'col-6 niveaux nivViolets';
  niv214.className = 'col-6 niveaux nivViolets';

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv211);
  afficher(niv212);
  afficher(niv213);
  afficher(niv214);
})
//  choix niv211 baisserPet
niv211.addEventListener('click', () => {
  niv211.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv211);
  afficher(niv215);
})
niv215.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv211);
  afficher(niv215);
  afficher(niv216);
})

//  choix niv212 baisserPet
niv212.addEventListener('click', () => {
  niv212.className = "col-12 niveaux nivViolets branche";
  niv221.className = "col-6 niveaux nivRoses";
  niv222.className = "col-6 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv222);
})
//  choix niv221 baisserPet
niv221.addEventListener('click', () => {
  niv221.className = "col-12 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
})
niv223.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }
  
  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
})
niv224.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
})
//  niv225 baisserPet
niv225.addEventListener('click', () => {
  niv225.classList.add('branche');
  niv231.className = "col-6 niveaux nivRoses";
  niv232.className = "col-6 niveaux nivRoses";
  niv233.className = "col-6 niveaux nivRoses";
  niv234.className = "col-6 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);

  afficher(niv231);
  afficher(niv232);
  afficher(niv233);
  afficher(niv234);
})
//  choix niv231 baisserPet
niv231.addEventListener('click', () => {
  niv231.className = "col-12 niveaux nivRoses";
  
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv231);
  afficher(niv235);
})
niv235.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv231);
  afficher(niv235);
  afficher(niv236);
})
//  choix niv232 baisserPet
niv232.addEventListener('click', () => {
  niv232.className = "col-12 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv232);
  afficher(niv241);
})
niv241.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv232);
  afficher(niv241);
  afficher(niv242);
})
//  choix niv233 baisserPet
niv233.addEventListener('click', () => {
  niv233.className = "col-12 niveaux nivRoses";
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv233);
  afficher(niv243);
})
niv243.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv233);
  afficher(niv243);
  afficher(niv244);
})
//  choix niv234 baisserPet
niv234.addEventListener('click', () => {
  niv234.className = "col-12 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv234);
  afficher(niv251);
})
niv251.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv221);
  afficher(niv223);
  afficher(niv224);
  afficher(niv225);
  
  afficher(niv234);
  afficher(niv251);
  afficher(niv252);
})
//  choix niv222 baisserPet
niv222.addEventListener('click', () => {
  niv222.className = "col-12 niveaux nivViolets branche";

  niv253.className = "col-6 niveaux nivViolets";
  niv254.className = "col-6 niveaux nivViolets";
  niv255.className = "col-6 niveaux nivViolets";
  niv256.className = "col-6 niveaux nivViolets";
  niv257.className = "col-6 offset-3 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv253);
  afficher(niv254);
  afficher(niv255);
  afficher(niv256);
  afficher(niv257);
})
//  choix niv253 baisserPet
niv253.addEventListener('click', () => {
  niv253.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv253);
  afficher(niv261);  
})
niv261.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv253);
  afficher(niv261);
  afficher(niv262);
})
//  choix niv254 baisserPet
niv254.addEventListener('click', () => {
  niv254.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv254);
  afficher(niv263);  
})
niv263.addEventListener('click', () => {

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv254);
  afficher(niv263);
  afficher(niv264);
})
//  choix niv255 baisserPet
niv255.addEventListener('click', () => {
  niv255.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv255);
  afficher(niv271);
})
niv271.addEventListener('click', () => {

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv255);
  afficher(niv271);
  afficher(niv272);
})
//  choix niv256 baisserPet
niv256.addEventListener('click', () => {
  niv256.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv256);
  afficher(niv273);
})
niv273.addEventListener('click', () => {

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv256);
  afficher(niv273);
  afficher(niv274);
})
//  choix niv257 baisserPet
niv257.addEventListener('click', () => {
  niv257.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv257);
  afficher(niv275);
})
niv275.addEventListener('click', () => {

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv212);
  afficher(niv222);

  afficher(niv257);
  afficher(niv275);
  afficher(niv276);
})
//  choix niv213 baisserPet
niv213.addEventListener('click', () => {
  niv213.className = "col-12 niveaux nivRoses branche";
  niv281.className = "col-4 niveaux nivRoses";
  niv282.className = "col-4 niveaux nivRoses";
  niv283.className = "col-4 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv213);
  afficher(niv281);
  afficher(niv282);
  afficher(niv283);
})
//  choix niv281 niv282 niv283
niv281.addEventListener('click', () => {
  niv281.className = "col-12 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv213);
  afficher(niv281);
  afficher(niv284);
})
niv282.addEventListener('click', () => {
  niv282.className = "col-12 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv213);
  afficher(niv282);
  afficher(niv284);
})
niv283.addEventListener('click', () => {
  niv283.className = "col-12 niveaux nivRoses";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv213);
  afficher(niv283);
  afficher(niv284);
})
//  choix niv214 baisserPet
niv214.addEventListener('click', () => {
  niv214.className = "col-12 niveaux nivViolets branche";
  niv291.className = "col-6 niveaux nivViolets";
  niv292.className = "col-6 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv214);
  afficher(niv291);
  afficher(niv292);
})
//  choix niv291 baisserPet
niv291.addEventListener('click', () => {
  niv291.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv214);
  afficher(niv291);
  afficher(niv293);
})
niv293.addEventListener('click', () => {
  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv214);
  afficher(niv291);
  afficher(niv293);
  afficher(niv294);
})
//  choix niv292 baisserPet
niv292.addEventListener('click', () => {
  niv292.className = "col-12 niveaux nivViolets";

  cacher(choix01);
  for(niv of niveaux) {
    cacher(niv);
  }

  afficher(debut);
  afficher(niv214);
  afficher(niv292);
  afficher(niv2020);
})






