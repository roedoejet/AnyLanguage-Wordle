import { CONFIG } from './config'

export const VALIDGUESSES = [
  'arʉka',
  'atapu',
  'ekapa',
  'ekasa̱',
  'ekawi',
  'eʔree',
  'haaki',
  'haame',
  'hahka',
  'haitsi̠',
  'hakai',
  'haʔii',
  'heekwi',
  'hoikwa',
  'hooki̠',
  'huhku̠',
  'hunai',
  'huuba',
  'huuku',
  'huuna',
  'huupi',
  'huutsi',
  'hʉʉbi',
  'hʉʉti',
  'hʉʉtʉ',
  'ikʉ̠hu',
  'inakwʉ̠',
  'inapʉ̠',
  'inasʉ',
  'iniku',
  'isapʉ̠',
  'itsee',
  'itʉkwʉ̠',
  'kaarʉ',
  'kaatʉ̠',
  'kahni',
  'kahpe',
  'kaape',
  'kahuu',
  'kaiwa',
  'karoo',
  'katʉi',
  'kesua',
  'keyuu',
  'kiipʉ̠',
  'kohno',
  'kokaa',
  'koobe',
  'kootsa',
  'kootse',
  'kooʔi',
  'kuhma',
  'kuhna̠',
  'kuhtsu',
  'kuitsi̠',
  'kukaa',
  'kuuna̠',
  'kuutsu',
  'kʉarʉ,
  'kʉhwʉ',
  'kʉnua',
  'kʉtaa',
  'kʉʉka',
  'kwasia',
  'kweyai',
  'kwihne',
  'kwiipʉ̠',
  'kwiitʉ̠',
  'kwiʔta',
  'maabo',
  'maaka',
  'maakwe',
  'maatu',
  'mabʉa',
  'manoo',
  'marʉa',
  'marʉʉ',
  'masʉa',
  'mawai',
  'maʔai',
  'meeku',
  'miana̠',
  'mianʉ̠'',
  'miarʉ',
  'miitsi',
  'mooka',
  'mootso',
  'muhka',
  'muhpe',
  'muhyʉ',
  'murai',
  'mutsii',
  'muubi',
  'muura',
  'naaka',
  'naboo',
  'nahuu',
  'nahyu',
  'naibi',
  'naisa',
  'naiya',
  'nakia',
  'naroʔi',
  'natai',
  'natsaa',
  'natsuu',
  'naʔaa',
  'naʔru',
  'nehki̠',
  'nimai',
  'nitui',
  'nohko',
  'nokia',
  'noobi',
  'nooma',
  'noona',
  'noopʉ̠',
  'noorʉ',
  'nooyo',
  'nuarʉ̠',
  'nuraa',
  'nuuki',
  'nʉepi',
  'nʉetʉ',
  'nʉnʉʉ',
  'nʉʉmʉ',
  'obotu',
  'ohape',
  'onʔaa',
  'nʉʉmʉ̠',
  'ooʔri',
  'orʉkwʉ̠',
  'oyetʉ̠',
  'oyorʉ',
  'oʔoʔa',
  'paanʉ̠̱',
  'paapi',
  'pahmu',
  'paitsi',
  'paapi̠',
  'peeka',
  'peekwi',
  'pehka',
  'piabʉ̠',
  'piapʉ̠',
  'pihka̠',
  'piitsi',
  'pinai',
  'pohya',
  'poiya',
  'pokaa',
  'pokoo',
  'pooro',
  'poorʉ',
  'poosa',
  'potsu',
  'poʔko',
  'pusia',
  'puuku',
  'puʔtsi',
  'pʉarʉ',
  'pʉkai',
  'pʉʉka',
  'pʉʉpi',
  'pʉʉra',
  'pʉʉyʉ',
  'saabe',
  'saanʉ̠',
  'saapʉ',
  'saapʉ̠',
  'saatʉ',
  'sahki̠',
  'sarii',
  'seekwi',
  'setʉʉ',
  'siiko',
  'siipʉ̠',
  'sikoo',
  'sinai',
  'sitoo',
  'sitʉʉ',
  'soomo',
  'soona̠',
  'sooni',
  'sootʉ̠',
  'suabe',
  'suapʉ',
  'suapʉ̠',
  'surʉʉ',
  'sutai',
  'sʉatʉ',
  'taabe',
  'taaki',
  'taama',
  'taama̠',
  'taasi',
  'taatsa',
  'tahka',
  'tahkwi',
  'tahma',
  'tahwi',
  'taibo',
  'taina̠',
  'taitʉ',
  'taiʔi',
  'tanua',
  'tatoo',
  'tatsii',
  'tatua',
  'taʔoo',
  'toomo',
  'toorʉ',
  'tootsa',
  'topai',
  'tsaaku',
  'tsaatʉ',
  'tseena',
  'tsiapʉ̠',
  'tsiira',
  'tsiwai',
  'tsiyaa',
  'tsoapʉ̠',
  'tsohkwe',
  'tsoomo',
  'tsumai',
  'tsuuwi',
  'tuetsi̠',
  'tuhui',
  'turʉe',
  'turʉe',
  'tuuku',
  'tuupa',
  'tuupʉ̠',
  'tuurʉ',
  'tʉawe',
  'tʉboo',
  'tʉetʉ',
  'tʉhka',
  'tʉhtsʉ',
  'tʉkii',
  'tʉnoo',
  'tʉsaa',
  'tʉʉpe',
  'tʉʉpi',
  'tʉʔii',
  'ubutu',
  'unaru̠',
  'uniku',
  'urarʉ',
  'uruka',
  'urʉkwʉ̠',
  'usuni',
  'uwihi',
  'uʔaru',
  'ʉkitsi',
  'ʉkʉna',
  'ʉkʉ̠sʉ',
  'ʉmarʉ',
  'ʉnʉ̠ha',
  'ʉtsumi',
  'ʉʔbʉi',
  'waapi',
  'waapi̠',
  'waata̠',
  'waatsa̠',
  'waatsʉ',
  'wahta',
  'waʔoo',
  'weeki',
  'weesi',
  'wihna',
  'wihnu',
  'wiyaa',
  'wohya',
  'woobi',
  'woone',
  'woosa',
  'woʔne',
  'wʉtui',
  'yaarʉ',
  'yuʔai',
  'yʉhnʉ',
  'yʉʉkwi',
  'yʉʉnʉ',
  'yʉʉtsʉ',
  'yʉʔha',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
