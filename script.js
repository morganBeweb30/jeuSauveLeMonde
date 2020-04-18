
const main = document.querySelector('main');
const capterCO2 = document.querySelector('#choix01capterCO2');
const baisserPet = document.querySelector('#choix02baisserPetrole');

const choix01 = main.querySelector('#choix01');
const choix02 = main.querySelector('#choix02');
const choix = main.querySelectorAll('.choix');
const debut = main.querySelector('#debut');
let niveaux = document.querySelectorAll('.niveaux');
//  choix01capterCO2
const niv111 = capterCO2.querySelector('#niv111');
const niv112 = capterCO2.querySelector('#niv112');
const niv113 = capterCO2.querySelector('#niv113');
const niv114 = capterCO2.querySelector('#niv114');
const niv115 = capterCO2.querySelector('#niv115');
const niv121 = capterCO2.querySelector('#niv121');
const niv122 = capterCO2.querySelector('#niv122');
const niv123 = capterCO2.querySelector('#niv123');
const niv124 = capterCO2.querySelector('#niv124');
const niv125 = capterCO2.querySelector('#niv125');
//  choix02baisserPetrole
const niv211 = baisserPet.querySelector('#niv211');
const niv212 = baisserPet.querySelector('#niv212');
const niv213 = baisserPet.querySelector('#niv213');
const niv214 = baisserPet.querySelector('#niv214');
const niv215 = baisserPet.querySelector('#niv215');
const niv216 = baisserPet.querySelector('#niv216');

const niv221 = baisserPet.querySelector('#niv221');
const niv222 = baisserPet.querySelector('#niv222');
const niv223 = baisserPet.querySelector('#niv223');
const niv224 = baisserPet.querySelector('#niv224');
const niv225 = baisserPet.querySelector('#niv225');

const niv231 = baisserPet.querySelector('#niv231');
const niv232 = baisserPet.querySelector('#niv232');
const niv233 = baisserPet.querySelector('#niv233');
const niv234 = baisserPet.querySelector('#niv234');
const niv235 = baisserPet.querySelector('#niv235');
const niv236 = baisserPet.querySelector('#niv236');

const niv241 = baisserPet.querySelector('#niv241');
const niv242 = baisserPet.querySelector('#niv242');
const niv243 = baisserPet.querySelector('#niv243');
const niv244 = baisserPet.querySelector('#niv244');

const niv251 = baisserPet.querySelector('#niv251');
const niv252 = baisserPet.querySelector('#niv252');
const niv253 = baisserPet.querySelector('#niv253');
const niv254 = baisserPet.querySelector('#niv254');
const niv255 = baisserPet.querySelector('#niv255');
const niv256 = baisserPet.querySelector('#niv256');
const niv257 = baisserPet.querySelector('#niv257');

const niv261 = baisserPet.querySelector('#niv261');
const niv262 = baisserPet.querySelector('#niv262');
const niv263 = baisserPet.querySelector('#niv263');
const niv264 = baisserPet.querySelector('#niv264');

const niv271 = baisserPet.querySelector('#niv271');
const niv272 = baisserPet.querySelector('#niv272');
const niv273 = baisserPet.querySelector('#niv273');
const niv274 = baisserPet.querySelector('#niv274');
const niv275 = baisserPet.querySelector('#niv275');
const niv276 = baisserPet.querySelector('#niv276');

const niv281 = baisserPet.querySelector('#niv281');
const niv282 = baisserPet.querySelector('#niv282');
const niv283 = baisserPet.querySelector('#niv283');
const niv284 = baisserPet.querySelector('#niv284');

const niv291 = baisserPet.querySelector('#niv291');
const niv292 = baisserPet.querySelector('#niv292');
const niv293 = baisserPet.querySelector('#niv293');
const niv294 = baisserPet.querySelector('#niv294');

const niv2020 = baisserPet.querySelector('#niv2020');

//  fonctions afficher() cacher()
afficher = (elem) => {
  elem.style.display = 'block';
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
  choix02.className = "col-3 offset-2 choix nivViolets";
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
  choix01.className = "col-6 niveaux branche";
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
  niv121.className = 'col-12 niveaux branche';
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
  choix02.className = 'col-3 offset-7 choix branche';
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
  niv225.className = "col-12 niveaux nivRose branche";
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
  niv222.className = "col-12 niveaux branche nivViolets";

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
  niv213.className = "col-12 niveaux nivViolets branche";
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






