var _ = require('lodash');

var Country = {
  info: function(country, type) {
    var _returnData;
    switch (type) {
      case 'name':
        _returnData = _.find(_countryList, {
          name: country
        })[0];
        break;
      case 'ISO3':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[3] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'numeric':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.numeric == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'code':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.code == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      default:
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[2] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
    }
    if (_.isUndefined(_returnData)) {
      return false;
    }
    _returnData = _.omit(_returnData, 'provinces');
    return _returnData;
  },
  states: function(country, type) {
    var _returnData;
    switch (type) {
      case 'name':
        _returnData = _.find(_countryList, {
          name: country
        })[0];
        break;
      case 'ISO3':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[3] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'numeric':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.numeric == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'code':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.code == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      default:
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[2] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
    }
    if (_.isUndefined(_returnData)) {
      return false;
    }
    _returnData = _returnData.provinces;
    return _returnData;

  },
  all: function() {
    var _returnData = _.pluck(_countryList, 'name');
    return _returnData;
  }
}

module.exports = Country;

var _countryList = [{
  name: "Afghanistan",
  ISO: {
    2: "AF",
    3: "AFG",
    numeric: 004,
    code: "ISO 3166-2:AF"
  },
  provinces: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian",
    "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan",
    "Kabol", "Kandahar", "Kapisa", "Konar", "Kondoz", "Laghman", "Lowgar",
    "Nangarhar", "Nimruz", "Oruzgan", "Paktia", "Paktika", "Parvan",
    "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"
  ]
}, {
  name: "Albania",
  ISO: {
    2: "AL",
    3: "ALB",
    numeric: 008,
    code: "ISO 3166-2:AL"
  },
  provinces: ["Berat", "Bulqize", "Delvine", "Devoll (Bilisht)",
    "Diber (Peshkopi)", "Durres", "Elbasan", "Fier", "Gjirokaster",
    "Gramsh", "Has (Krume)", "Kavaje", "Kolonje (Erseke)", "Korce", "Kruje",
    "Kucove", "Kukes", "Kurbin", "Lezhe", "Librazhd", "Lushnje",
    "Malesi e Madhe (Koplik)", "Mallakaster (Ballsh)", "Mat (Burrel)",
    "Mirdite (Rreshen)", "Peqin", "Permet", "Pogradec", "Puke", "Sarande",
    "Shkoder", "Skrapar (Corovode)", "Tepelene", "Tirane (Tirana)",
    "Tirane (Tirana)", "Tropoje (Bajram Curri)", "Vlore"
  ]
}, {
  name: "Algeria",
  ISO: {
    2: "DZ",
    3: "DZA",
    numeric: 012,
    code: "ISO 3166-2:DZ"
  },
  provinces: ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba",
    "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj",
    "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh",
    "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel",
    "Khenchela", "Laghouat", "M'Sila", "Mascara", "Medea", "Mila",
    "Mostaganem", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane",
    "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras",
    "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt",
    "Tizi Ouzou", "Tlemcen"
  ]
}, {
  name: "American Samoa",
  ISO: {
    2: "AS",
    3: "ASM",
    numeric: 016,
    code: "ISO 3166-2:AS"
  },
  provinces: ["Eastern", "Manu'a", "Rose Island", "Swains Island",
    "Western"
  ]
}, {
  name: "Angola",
  ISO: {
    2: "AO",
    3: "AGO",
    numeric: 024,
    code: "ISO 3166-2:AO"
  },
  provinces: ["Andorra la Vella", "Bengo", "Benguela", "Bie", "Cabinda",
    "Canillo", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene",
    "Encamp", "Escaldes-Engordany", "Huambo", "Huila", "La Massana",
    "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe",
    "Ordino", "Sant Julia de Loria", "Uige", "Zaire"
  ]
}, {
  name: "Anguilla",
  ISO: {
    2: "AI",
    3: "AIA",
    numeric: 660,
    code: "ISO 3166-2:AI"
  },
  provinces: ["Anguilla"]
}, {
  name: "Antartica",
  ISO: {
    2: "AQ",
    3: "ATA",
    numeric: 010,
    code: "ISO 3166-2:AQ"
  },
  provinces: ["Antartica"]
}, {
  name: "Antigua and Barbuda",
  ISO: {
    2: "AG",
    3: "ATG",
    numeric: 028,
    code: "ISO 3166-2:AG"
  },
  provinces: ["Barbuda", "Redonda", "Saint George", "Saint John",
    "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"
  ]
}, {
  name: "Argentina",
  ISO: {
    2: "AR",
    3: "ARG",
    numeric: 032,
    code: "ISO 3166-2:AR"
  },
  provinces: ["Antartica e Islas del Atlantico Sur", "Buenos Aires",
    "Buenos Aires Capital Federal", "Catamarca", "Chaco", "Chubut",
    "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa",
    "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta",
    "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
    "Tierra del Fuego", "Tucuman"
  ]
}, {
  name: "Armenia",
  ISO: {
    2: "AM",
    3: "ARM",
    numeric: 051,
    code: "ISO 3166-2:AM"
  },
  provinces: ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'",
    "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"
  ]
}, {
  name: "Aruba",
  ISO: {
    2: "AW",
    3: "ABW",
    numeric: 533,
    code: "ISO 3166-2:AW"
  },
  provinces: ["Aruba"]
}, {
  name: "Ashmore and Cartier Island",
  ISO: {},
  provinces: ["Ashmore and Cartier Island"]
}, {
  name: "Australia",
  ISO: {
    2: "AU",
    3: "AUS",
    numeric: 036,
    code: "ISO 3166-2:AU"
  },
  provinces: ["Australian Capital Territory", "New South Wales",
    "Northern Territory", "Queensland", "South Australia", "Tasmania",
    "Victoria", "Western Australia"
  ]
}, {
  name: "Austria",
  ISO: {
    2: "AT",
    3: "AUT",
    numeric: 040,
    code: "ISO 3166-2:AT"
  },
  provinces: ["Burgenland", "Kaernten", "Niederoesterreich",
    "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg",
    "Wien"
  ]
}, {
  name: "Azerbaijan",
  ISO: {
    2: "AZ",
    3: "AZE",
    numeric: 031,
    code: "ISO 3166-2:AZ"
  },
  provinces: ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu",
    "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Ali Bayramli Sahari",
    "Astara Rayonu", "Baki Sahari", "Balakan Rayonu", "Barda Rayonu",
    "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu",
    "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu",
    "Gadabay Rayonu", "Ganca Sahari", "Goranboy Rayonu", "Goycay Rayonu",
    "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu",
    "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu",
    "Lankaran Sahari", "Lerik Rayonu", "Masalli Rayonu",
    "Mingacevir Sahari", "Naftalan Sahari", "Naxcivan Muxtar Respublikasi",
    "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu",
    "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu",
    "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu",
    "Saki Sahari", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu",
    "Samux Rayonu", "Siyazan Rayonu", "Sumqayit Sahari", "Susa Rayonu",
    "Susa Sahari", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu",
    "Xacmaz Rayonu", "Xankandi Sahari", "Xanlar Rayonu", "Xizi Rayonu",
    "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu",
    "Yevlax Sahari", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu"
  ]
}, {
  name: "Bahamas",
  ISO: {
    2: "BS",
    3: "BHS",
    numeric: 044,
    code: "ISO 3166-2:BS"
  },
  provinces: ["Acklins and Crooked Islands", "Bimini", "Cat Island",
    "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour",
    "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua",
    "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana",
    "New Providence", "Nicholls Town and Berry Islands", "Ragged Island",
    "Rock Sound", "San Salvador and Rum Cay", "Sandy Point"
  ]
}, {
  name: "Bahrain",
  ISO: {
    2: "BH",
    3: "BHR",
    numeric: 048,
    code: "ISO 3166-2:BH"
  },
  provinces: ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah",
    "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq",
    "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Juzur Hawar",
    "Madinat 'Isa", "Madinat Hamad", "Sitrah"
  ]
}, {
  name: "Bangladesh",
  ISO: {
    2: "BD",
    3: "BGD",
    numeric: 050,
    code: "ISO 3166-2:BD"
  },
  provinces: ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali",
    "Pirojpur", "Bandarban", "Brahmanbaria", "Chandpur", "Chittagong",
    "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur",
    "Noakhali", "Rangamati", "Dhaka", "Faridpur", "Gazipur", "Gopalganj",
    "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj",
    "Mymensingh", "Narayanganj", "Narsingdi", "Netrokona", "Rajbari",
    "Shariatpur", "Sherpur", "Tangail", "Bagerhat", "Chuadanga", "Jessore",
    "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail",
    "Satkhira", "Bogra", "Dinajpur", "Gaibandha", "Jaipurhat", "Kurigram",
    "Lalmonirhat", "Naogaon", "Natore", "Nawabganj", "Nilphamari", "Pabna",
    "Panchagarh", "Rajshahi", "Rangpur", "Sirajganj", "Thakurgaon",
    "Habiganj", "Maulvi bazar", "Sunamganj", "Sylhet"
  ]
}, {
  name: "Barbados",
  ISO: {
    2: "BB",
    3: "BRB",
    numeric: 052,
    code: "ISO 3166-2:BB"
  },
  provinces: ["Bridgetown", "Christ Church", "Saint Andrew", "Saint George",
    "Saint James", "Saint John", "Saint Joseph", "Saint Lucy",
    "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"
  ]
}, {
  name: "Belarus",
  ISO: {
    2: "BY",
    3: "BLR",
    numeric: 112,
    code: "ISO 3166-2:BY"
  },
  provinces: ["Brestskaya (Brest)", "Homyel'skaya (Homyel')", "Horad Minsk",
    "Hrodzyenskaya (Hrodna)", "Mahilyowskaya (Mahilyow)", "Minskaya",
    "Vitsyebskaya (Vitsyebsk)"
  ]
}, {
  name: "Belgium",
  ISO: {
    2: "BE",
    3: "BEL",
    numeric: 056,
    code: "ISO 3166-2:BE"
  },
  provinces: ["Antwerpen", "Brabant Wallon", "Brussels Capitol Region",
    "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen",
    "Vlaams Brabant", "West-Vlaanderen"
  ]
}, {
  name: "Belize",
  ISO: {
    2: "BZ",
    3: "BLZ",
    numeric: 084,
    code: "ISO 3166-2:BZ"
  },
  provinces: ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek",
    "Toledo"
  ]
}, {
  name: "Benin",
  ISO: {
    2: "BJ",
    3: "BEN",
    numeric: 204,
    code: "ISO 3166-2:BJ"
  },
  provinces: ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines",
    "Couffo", "Donga", "Littoral", "Mono", "Oueme", "Plateau", "Zou"
  ]
}, {
  name: "Bermuda",
  ISO: {
    2: "BM",
    3: "BMU",
    numeric: 060,
    code: "ISO 3166-2:BM"
  },
  provinces: ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke",
    "Saint George", "Saint Georges", "Sandys", "Smiths", "Southampton",
    "Warwick"
  ]
}, {
  name: "Bhutan",
  ISO: {
    2: "BT",
    3: "BTN",
    numeric: 064,
    code: "ISO 3166-2:BT"
  },
  provinces: ["Bumthang", "Chhukha", "Chirang", "Daga", "Geylegphug", "Ha",
    "Lhuntshi", "Mongar", "Paro", "Pemagatsel", "Punakha", "Samchi",
    "Samdrup Jongkhar", "Shemgang", "Tashigang", "Thimphu", "Tongsa",
    "Wangdi Phodrang"
  ]
}, {
  name: "Bolivia",
  ISO: {
    2: "BO",
    3: "BOL",
    numeric: 068,
    code: "ISO 3166-2:BO"
  },
  provinces: ["Beni", "Chuquisaca", "Cochabamba", "La Paz", "Oruro",
    "Pando", "Potosi", "Santa Cruz", "Tarija"
  ]
}, {
  name: "Bosnia and Herzegovina",
  ISO: {
    2: "BA",
    3: "BIH",
    numeric: 070,
    code: "ISO 3166-2:BA"
  },
  provinces: ["Federation of Bosnia and Herzegovina", "Republika Srpska"]
}, {
  name: "Botswana",
  ISO: {
    2: "BW",
    3: "BWA",
    numeric: 072,
    code: "ISO 3166-2:BW"
  },
  provinces: ["Central", "Chobe", "Francistown", "Gaborone", "Ghanzi",
    "Kgalagadi", "Kgatleng", "Kweneng", "Lobatse", "Ngamiland",
    "North-East", "Selebi-Pikwe", "South-East", "Southern"
  ]
}, {
  name: "Brazil",
  ISO: {
    2: "BR",
    3: "BRA",
    numeric: 076,
    code: "ISO 3166-2:BR"
  },
  provinces: ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara",
    "Distrito Federal", "Espirito Santo", "Goias", "Maranhao",
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba",
    "Parana", "Pernambuco", "Piaui", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima",
    "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"
  ]
}, {
  name: "British Virgin Islands",
  ISO: {
    2: "IO",
    3: "IOT",
    numeric: 086,
    code: "ISO 3166-2:IO"
  },
  provinces: ["Anegada", "Jost Van Dyke", "Tortola", "Virgin Gorda"]
}, {
  name: "Brunei",
  ISO: {
    2: "BN",
    3: "BRN",
    numeric: 096,
    code: "ISO 3166-2:BN"
  },
  provinces: ["Belait", "Brunei and Muara", "Temburong", "Tutong"]
}, {
  name: "Bulgaria",
  ISO: {
    2: "BG",
    3: "BGR",
    numeric: 100,
    code: "ISO 3166-2:BG"
  },
  provinces: ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo",
    "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik",
    "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven",
    "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte",
    "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"
  ]
}, {
  name: "Burkina Faso",
  ISO: {
    2: "BF",
    3: "BFA",
    numeric: 854,
    code: "ISO 3166-2:BF"
  },
  provinces: ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou",
    "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet",
    "Ioba", "Kadiogo", "Kenedougou", "Komandjari", "Kompienga", "Kossi",
    "Koupelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun",
    "Nahouri", "Namentenga", "Naumbiel", "Nayala", "Oubritenga", "Oudalan",
    "Passore", "Poni", "Samentenga", "Sanguie", "Seno", "Sissili", "Soum",
    "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondomo",
    "Zoundweogo"
  ]
}, {
  name: "Burma",
  ISO: {},
  provinces: ["Ayeyarwady", "Bago", "Chin State", "Kachin State",
    "Kayah State", "Kayin State", "Magway", "Mandalay", "Mon State",
    "Rakhine State", "Sagaing", "Shan State", "Tanintharyi", "Yangon"
  ]
}, {
  name: "Burundi",
  ISO: {
    2: "BI",
    3: "BDI",
    numeric: 108,
    code: "ISO 3166-2:BI"
  },
  provinces: ["Bubanza", "Bujumbura", "Bururi", "Cankuzo", "Cibitoke",
    "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya",
    "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"
  ]
}, {
  name: "Cambodia",
  ISO: {
    2: "KH",
    3: "KHM",
    numeric: 116,
    code: "ISO 3166-2:KH"
  },
  provinces: ["Banteay Mean Cheay", "Batdambang", "Kampong Cham",
    "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal",
    "Kaoh Kong", "Keb", "Kracheh", "Mondol Kiri", "Otdar Mean Cheay",
    "Pailin", "Phnum Penh", "Pouthisat", "Preah Seihanu (Sihanoukville)",
    "Preah Vihear", "Prey Veng", "Rotanah Kiri", "Siem Reab",
    "Stoeng Treng", "Svay Rieng", "Takev"
  ]
}, {
  name: "Cameroon",
  ISO: {
    2: "CM",
    3: "CMR",
    numeric: 120,
    code: "ISO 3166-2:CM"
  },
  provinces: ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral",
    "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"
  ]
}, {
  name: "Canada",
  ISO: {
    2: "CA",
    3: "CAN",
    numeric: 124,
    code: "ISO 3166-2:CA"
  },
  provinces: ["Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland", "Northwest Territories", "Nova Scotia", "Nunavut",
    "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
    "Yukon Territory"
  ]
}, {
  name: "Cape Verde",
  ISO: {
    2: "CV",
    3: "CPV",
    numeric: 132,
    code: "ISO 3166-2:CV"
  },
  provinces: ["Boa Vista", "Brava", "Maio", "Mosteiros", "Paul",
    "Porto Novo", "Praia", "Ribeira Grande", "Sal", "Santa Catarina",
    "Santa Cruz", "Sao Domingos", "Sao Filipe", "Sao Nicolau",
    "Sao Vicente", "Tarrafal"
  ]
}, {
  name: "Cayman Islands",
  ISO: {
    2: "KY",
    3: "CYM",
    numeric: 136,
    code: "ISO 3166-2:KY"
  },
  provinces: ["Creek", "Eastern", "Midland", "South Town", "Spot Bay",
    "Stake Bay", "West End", "Western"
  ]
}, {
  name: "Central African Republic",
  ISO: {
    2: "CF",
    3: "CAF",
    numeric: 140,
    code: "ISO 3166-2:CF"
  },
  provinces: ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Gribingui",
    "Haut-Mbomou", "Haute-Kotto", "Haute-Sangha", "Kemo-Gribingui",
    "Lobaye", "Mbomou", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham",
    "Ouham-Pende", "Sangha", "Vakaga"
  ]
}, {
  name: "Chad",
  ISO: {
    2: "TD",
    3: "TCD",
    numeric: 148,
    code: "ISO 3166-2:TD"
  },
  provinces: ["Batha", "Biltine", "Borkou-Ennedi-Tibesti", "Chari-Baguirmi",
    "Guera", "Kanem", "Lac", "Logone Occidental", "Logone Oriental",
    "Mayo-Kebbi", "Moyen-Chari", "Ouaddai", "Salamat", "Tandjile"
  ]
}, {
  name: "Chile",
  ISO: {
    2: "CL",
    3: "CHL",
    numeric: 152,
    code: "ISO 3166-2:CL"
  },
  provinces: ["Aisen del General Carlos Ibanez del Campo", "Antofagasta",
    "Araucania", "Atacama", "Bio-Bio", "Coquimbo",
    "Libertador General Bernardo O'Higgins", "Los Lagos",
    "Magallanes y de la Antartica Chilena", "Maule",
    "Region Metropolitana (Santiago)", "Tarapaca", "Valparaiso"
  ]
}, {
  name: "China",
  ISO: {
    2: "CN",
    3: "CHN",
    numeric: 156,
    code: "ISO 3166-2:CN"
  },
  provinces: ["Anhui", "Beijing", "Chongqing", "Fujian", "Gansu",
    "Guangdong", "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang",
    "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning",
    "Nei Mongol", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai",
    "Shanxi", "Sichuan", "Tianjin", "Xinjiang", "Xizang (Tibet)", "Yunnan",
    "Zhejiang"
  ]
}, {
  name: "Christmas Island",
  ISO: {
    2: "CX",
    3: "CXR",
    numeric: 162,
    code: "ISO 3166-2:CX"
  },
  provinces: ["Christmas Island"]
}, {
  name: "Clipperton Island",
  ISO: {},
  provinces: ["Clipperton Island"]
}, {
  name: "Cocos (Keeling) Islands",
  ISO: {
    2: "CC",
    3: "CCK",
    numeric: 166,
    code: "ISO 3166-2:CC"
  },
  provinces: ["Direction Island", "Home Island", "Horsburgh Island",
    "North Keeling Island", "South Island", "West Island"
  ]
}, {
  name: "Colombia",
  ISO: {
    2: "CO",
    3: "COL",
    numeric: 170,
    code: "ISO 3166-2:CO"
  },
  provinces: ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bolivar",
    "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco",
    "Cordoba", "Cundinamarca", "Distrito Capital de Santa Fe de Bogota",
    "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
    "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda",
    "San Andres y Providencia", "Santander", "Sucre", "Tolima",
    "Valle del Cauca", "Vaupes", "Vichada"
  ]
}, {
  name: "Comoros",
  ISO: {
    2: "KM",
    3: "COM",
    numeric: 174,
    code: "ISO 3166-2:KM"
  },
  provinces: ["Anjouan (Nzwani)", "Domoni", "Fomboni",
    "Grande Comore (Njazidja)", "Moheli (Mwali)", "Moroni", "Moutsamoudou"
  ]
}, {
  name: "Congo, Democratic Republic of the",
  ISO: {
    2: "CG",
    3: "COG",
    numeric: 178,
    code: "ISO 3166-2:CG"
  },
  provinces: ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental",
    "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu",
    "Orientale", "Sud-Kivu"
  ]
}, {
  name: "Congo, Republic of the",
  ISO: {
    2: "CD",
    3: "COD",
    numeric: 180,
    code: "ISO 3166-2:CD"
  },
  provinces: ["Bouenza", "Brazzaville", "Cuvette", "Kouilou", "Lekoumou",
    "Likouala", "Niari", "Plateaux", "Pool", "Sangha"
  ]
}, {
  name: "Cook Islands",
  ISO: {
    2: "CK",
    3: "COK",
    numeric: 184,
    code: "ISO 3166-2:CK"
  },
  provinces: ["Aitutaki", "Atiu", "Avarua", "Mangaia", "Manihiki", "Manuae",
    "Mauke", "Mitiaro", "Nassau Island", "Palmerston", "Penrhyn",
    "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"
  ]
}, {
  name: "Costa Rica",
  ISO: {
    2: "CR",
    3: "CRI",
    numeric: 188,
    code: "ISO 3166-2:CR"
  },
  provinces: ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon",
    "Puntarenas", "San Jose"
  ]
}, {
  name: "Cote d'Ivoire",
  ISO: {
    2: "CI",
    3: "CIV",
    numeric: 384,
    code: "ISO 3166-2:CI"
  },
  provinces: ["Abengourou", "Abidjan", "Aboisso", "Adiake'", "Adzope",
    "Agboville", "Agnibilekrou", "Ale'pe'", "Bangolo", "Beoumi",
    "Biankouma", "Bocanda", "Bondoukou", "Bongouanou", "Bouafle", "Bouake",
    "Bouna", "Boundiali", "Dabakala", "Dabon", "Daloa", "Danane", "Daoukro",
    "Dimbokro", "Divo", "Duekoue", "Ferkessedougou", "Gagnoa",
    "Grand Bassam", "Grand-Lahou", "Guiglo", "Issia", "Jacqueville",
    "Katiola", "Korhogo", "Lakota", "Man", "Mankono", "Mbahiakro",
    "Odienne", "Oume", "Sakassou", "San-Pedro", "Sassandra", "Seguela",
    "Sinfra", "Soubre", "Tabou", "Tanda", "Tiassale", "Tiebissou",
    "Tingrela", "Touba", "Toulepleu", "Toumodi", "Vavoua", "Yamoussoukro",
    "Zuenoula"
  ]
}, {
  name: "Croatia",
  ISO: {
    2: "HR",
    3: "HRV",
    numeric: 191,
    code: "ISO 3166-2:HR"
  },
  provinces: ["Bjelovarsko-Bilogorska Zupanija",
    "Brodsko-Posavska Zupanija", "Dubrovacko-Neretvanska Zupanija",
    "Istarska Zupanija", "Karlovacka Zupanija",
    "Koprivnicko-Krizevacka Zupanija", "Krapinsko-Zagorska Zupanija",
    "Licko-Senjska Zupanija", "Medimurska Zupanija",
    "Osjecko-Baranjska Zupanija", "Pozesko-Slavonska Zupanija",
    "Primorsko-Goranska Zupanija", "Sibensko-Kninska Zupanija",
    "Sisacko-Moslavacka Zupanija", "Splitsko-Dalmatinska Zupanija",
    "Varazdinska Zupanija", "Viroviticko-Podravska Zupanija",
    "Vukovarsko-Srijemska Zupanija", "Zadarska Zupanija", "Zagreb",
    "Zagrebacka Zupanija"
  ]
}, {
  name: "Cuba",
  ISO: {
    2: "CU",
    3: "CUB",
    numeric: 192,
    code: "ISO 3166-2:CU"
  },
  provinces: ["Camaguey", "Ciego de Avila", "Cienfuegos",
    "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin",
    "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas",
    "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"
  ]
}, {
  name: "Cyprus",
  ISO: {
    2: "CY",
    3: "CYP",
    numeric: 196,
    code: "ISO 3166-2:CY"
  },
  provinces: ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia",
    "Paphos"
  ]
}, {
  name: "Czeck Republic",
  ISO: {
    2: "CZ",
    3: "CZE",
    numeric: 203,
    code: "ISO 3166-2:CZ"
  },
  provinces: ["Brnensky", "Budejovicky", "Jihlavsky", "Karlovarsky",
    "Kralovehradecky", "Liberecky", "Olomoucky", "Ostravsky", "Pardubicky",
    "Plzensky", "Praha", "Stredocesky", "Ustecky", "Zlinsky"
  ]
}, {
  name: "Denmark",
  ISO: {
    2: "DK",
    3: "DNK",
    numeric: 208,
    code: "ISO 3166-2:DK"
  },
  provinces: ["Arhus", "Bornholm", "Fredericksberg", "Frederiksborg", "Fyn",
    "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing",
    "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland",
    "Viborg"
  ]
}, {
  name: "Djibouti",
  ISO: {
    2: "DJ",
    3: "DJI",
    numeric: 262,
    code: "ISO 3166-2:DJ"
  },
  provinces: ["'Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"]
}, {
  name: "Dominica",
  ISO: {
    2: "DM",
    3: "DMA",
    numeric: 212,
    code: "ISO 3166-2:DM"
  },
  provinces: ["Saint Andrew", "Saint David", "Saint George", "Saint John",
    "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick",
    "Saint Paul", "Saint Peter"
  ]
}, {
  name: "Dominican Republic",
  ISO: {
    2: "DO",
    3: "DOM",
    numeric: 214,
    code: "ISO 3166-2:DO"
  },
  provinces: ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional",
    "Duarte", "El Seibo", "Elias Pina", "Espaillat", "Hato Mayor",
    "Independencia", "La Altagracia", "La Romana", "La Vega",
    "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi",
    "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo",
    "Samana", "San Cristobal", "San Juan", "San Pedro de Macoris",
    "Sanchez Ramirez", "Santiago", "Santiago Rodriguez", "Valverde"
  ]
}, {
  name: "Ecuador",
  ISO: {
    2: "EC",
    3: "ECU",
    numeric: 218,
    code: "ISO 3166-2:EC"
  },
  provinces: ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo",
    "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura",
    "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana",
    "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"
  ]
}, {
  name: "Egypt",
  ISO: {
    2: "EG",
    3: "EGY",
    numeric: 818,
    code: "ISO 3166-2:EG"
  },
  provinces: ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah",
    "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah",
    "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah",
    "Al Wadi al Jadid", "As Suways", "Ash Sharqiyah", "Aswan", "Asyut",
    "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh",
    "Matruh", "Qina", "Shamal Sina'", "Suhaj"
  ]
}, {
  name: "El Salvador",
  ISO: {
    2: "SV",
    3: "SLV",
    numeric: 222,
    code: "ISO 3166-2:SV"
  },
  provinces: ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan",
    "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel",
    "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulutan"
  ]
}, {
  name: "Equatorial Guinea",
  ISO: {
    2: "GQ",
    3: "GNQ",
    numeric: 226,
    code: "ISO 3166-2:GQ"
  },
  provinces: ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur",
    "Kie-Ntem", "Litoral", "Wele-Nzas"
  ]
}, {
  name: "Eritrea",
  ISO: {
    2: "ER",
    3: "ERI",
    numeric: 232,
    code: "ISO 3166-2:ER"
  },
  provinces: ["Akale Guzay", "Barka", "Denkel", "Hamasen", "Sahil",
    "Semhar", "Senhit", "Seraye"
  ]
}, {
  name: "Estonia",
  ISO: {
    2: "EE",
    3: "EST",
    numeric: 233,
    code: "ISO 3166-2:EE"
  },
  provinces: ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)",
    "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)",
    "Laane-Virumaa (Rakvere)", "Laanemaa (Haapsalu)", "Parnumaa (Parnu)",
    "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuessaare)",
    "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)",
    "Vorumaa (Voru)"
  ]
}, {
  name: "Ethiopia",
  ISO: {
    2: "ET",
    3: "ETH",
    numeric: 231,
    code: "ISO 3166-2:ET"
  },
  provinces: ["Adis Abeba (Addis Ababa)", "Afar", "Amara", "Dire Dawa",
    "Gambela Hizboch", "Hareri Hizb", "Oromiya", "Sumale", "Tigray",
    "YeDebub Biheroch Bihereseboch na Hizboch"
  ]
}, {
  name: "Europa Island",
  ISO: {},
  provinces: ["Europa Island"]
}, {
  name: "Falkland Islands (Islas Malvinas)",
  ISO: {
    2: "FK",
    3: "FLK",
    numeric: 238,
    code: "ISO 3166-2:FK"
  },
  provinces: ["Falkland Islands (Islas Malvinas)"]
}, {
  name: "Faroe Islands",
  ISO: {
    2: "FO",
    3: "FRO",
    numeric: 234,
    code: "ISO 3166-2:FO"
  },
  provinces: ["Bordoy", "Eysturoy", "Mykines", "Sandoy", "Skuvoy",
    "Streymoy", "Suduroy", "Tvoroyri", "Vagar"
  ]
}, {
  name: "Fiji",
  ISO: {
    2: "FJ",
    3: "FJI",
    numeric: 242,
    code: "ISO 3166-2:FJ"
  },
  provinces: ["Central", "Eastern", "Northern", "Rotuma", "Western"]
}, {
  name: "Finland",
  ISO: {
    2: "FI",
    3: "FIN",
    numeric: 246,
    code: "ISO 3166-2:FI"
  },
  provinces: ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani",
    "Lansi-Suomen Laani", "Lappi", "Oulun Laani"
  ]
}, {
  name: "France",
  ISO: {
    2: "FR",
    3: "FRA",
    numeric: 250,
    code: "ISO 3166-2:FR"
  },
  provinces: ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie",
    "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse",
    "Franche-Comte", "Haute-Normandie", "Ile-de-France",
    "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees",
    "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie",
    "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"
  ]
}, {
  name: "French Guiana",
  ISO: {
    2: "GF",
    3: "GUF",
    numeric: 254,
    code: "ISO 3166-2:GF"
  },
  provinces: ["French Guiana"]
}, {
  name: "French Polynesia",
  ISO: {
    2: "PF",
    3: "PYF",
    numeric: 258,
    code: "ISO 3166-2:PF"
  },
  provinces: ["Archipel des Marquises", "Archipel des Tuamotu",
    "Archipel des Tubuai", "Iles du Vent", "Iles Sous-le-Vent"
  ]
}, {
  name: "French Southern and Antarctic Lands",
  ISO: {
    2: "TF",
    3: "ATF",
    numeric: 260,
    code: "ISO 3166-2:TF"
  },
  provinces: ["Adelie Land", "Ile Crozet", "Iles Kerguelen",
    "Iles Saint-Paul et Amsterdam"
  ]
}, {
  name: "Gabon",
  ISO: {
    2: "GA",
    3: "GAB",
    numeric: 266,
    code: "ISO 3166-2:GA"
  },
  provinces: ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie",
    "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime",
    "Woleu-Ntem"
  ]
}, {
  name: "Gambia, The",
  ISO: {
    2: "GM",
    3: "GMB",
    numeric: 270,
    code: "ISO 3166-2:GM"
  },
  provinces: ["Banjul", "Central River", "Lower River", "North Bank",
    "Upper River", "Western"
  ]
}, {
  name: "Gaza Strip",
  ISO: {},
  provinces: ["Gaza Strip"]
}, {
  name: "Georgia",
  ISO: {
    2: "GE",
    3: "GEO",
    numeric: 268,
    code: "ISO 3166-2:GE"
  },
  provinces: ["Abashis",
    "Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)", "Adigenis",
    "Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)", "Akhalgoris",
    "Akhalk'alak'is", "Akhalts'ikhis", "Akhmetis", "Ambrolauris",
    "Aspindzis", "Baghdat'is", "Bolnisis", "Borjomis", "Ch'khorotsqus",
    "Ch'okhatauris", "Chiat'ura", "Dedop'listsqaros", "Dmanisis",
    "Dushet'is", "Gardabanis", "Gori", "Goris", "Gurjaanis", "Javis",
    "K'arelis", "K'ut'aisi", "Kaspis", "Kharagaulis", "Khashuris", "Khobis",
    "Khonis", "Lagodekhis", "Lanch'khut'is", "Lentekhis", "Marneulis",
    "Martvilis", "Mestiis", "Mts'khet'is", "Ninotsmindis", "Onis",
    "Ozurget'is", "P'ot'i", "Qazbegis", "Qvarlis", "Rust'avi",
    "Sach'kheris", "Sagarejos", "Samtrediis", "Senakis", "Sighnaghis",
    "T'bilisi", "T'elavis", "T'erjolis", "T'et'ritsqaros", "T'ianet'is",
    "Tqibuli", "Ts'ageris", "Tsalenjikhis", "Tsalkis", "Tsqaltubo", "Vanis",
    "Zestap'onis", "Zugdidi", "Zugdidis"
  ]
}, {
  name: "Germany",
  ISO: {
    2: "DE",
    3: "DEU",
    numeric: 276,
    code: "ISO 3166-2:DE"
  },
  provinces: ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg",
    "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern",
    "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland",
    "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"
  ]
}, {
  name: "Ghana",
  ISO: {
    2: "GH",
    3: "GHA",
    numeric: 288,
    code: "ISO 3166-2:GH"
  },
  provinces: ["Ashanti", "Brong-Ahafo", "Central", "Eastern",
    "Greater Accra", "Northern", "Upper East", "Upper West", "Volta",
    "Western"
  ]
}, {
  name: "Gibraltar",
  ISO: {
    2: "GI",
    3: "GIB",
    numeric: 292,
    code: "ISO 3166-2:GI"
  },
  provinces: ["Gibraltar"]
}, {
  name: "Glorioso Islands",
  ISO: {},
  provinces: ["Ile du Lys", "Ile Glorieuse"]
}, {
  name: "Greece",
  ISO: {
    2: "GR",
    3: "GRC",
    numeric: 300,
    code: "ISO 3166-2:GR"
  },
  provinces: ["Aitolia kai Akarnania", "Akhaia", "Argolis", "Arkadhia",
    "Arta", "Attiki", "Ayion Oros (Mt. Athos)", "Dhodhekanisos", "Drama",
    "Evritania", "Evros", "Evvoia", "Florina", "Fokis", "Fthiotis",
    "Grevena", "Ilia", "Imathia", "Ioannina", "Irakleion", "Kardhitsa",
    "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Khalkidhiki", "Khania",
    "Khios", "Kikladhes", "Kilkis", "Korinthia", "Kozani", "Lakonia",
    "Larisa", "Lasithi", "Lesvos", "Levkas", "Magnisia", "Messinia",
    "Pella", "Pieria", "Preveza", "Rethimni", "Rodhopi", "Samos", "Serrai",
    "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi",
    "Zakinthos"
  ]
}, {
  name: "Greenland",
  ISO: {
    2: "GL",
    3: "GRL",
    numeric: 304,
    code: "ISO 3166-2:GL"
  },
  provinces: ["Avannaa (Nordgronland)", "Kitaa (Vestgronland)",
    "Tunu (Ostgronland)"
  ]
}, {
  name: "Grenada",
  ISO: {
    2: "GD",
    3: "GRD",
    numeric: 308,
    code: "ISO 3166-2:GD"
  },
  provinces: ["Carriacou and Petit Martinique", "Saint Andrew",
    "Saint David", "Saint George", "Saint John", "Saint Mark",
    "Saint Patrick"
  ]
}, {
  name: "Guadeloupe",
  ISO: {
    2: "GP",
    3: "GLP",
    numeric: 312,
    code: "ISO 3166-2:GP"
  },
  provinces: ["Basse-Terre", "Grande-Terre", "Iles de la Petite Terre",
    "Iles des Saintes", "Marie-Galante"
  ]
}, {
  name: "Guam",
  ISO: {
    2: "GU",
    3: "GUM",
    numeric: 316,
    code: "ISO 3166-2:GU"
  },
  provinces: ["Guam"]
}, {
  name: "Guatemala",
  ISO: {
    2: "GT",
    3: "GTM",
    numeric: 320,
    code: "ISO 3166-2:GT"
  },
  provinces: ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula",
    "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal",
    "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu",
    "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez",
    "Totonicapan", "Zacapa"
  ]
}, {
  name: "Guernsey",
  ISO: {
    2: "GG",
    3: "GGY",
    numeric: 831,
    code: "ISO 3166-2:GG"
  },
  provinces: ["Castel", "Forest", "St. Andrew", "St. Martin",
    "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour",
    "Torteval", "Vale"
  ]
}, {
  name: "Guinea",
  ISO: {
    2: "GN",
    3: "GIN",
    numeric: 324,
    code: "ISO 3166-2:GN"
  },
  provinces: ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola",
    "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria",
    "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou",
    "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta",
    "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele",
    "Tougue", "Yomou"
  ]
}, {
  name: "Guinea-Bissau",
  ISO: {
    2: "GW",
    3: "GNB",
    numeric: 624,
    code: "ISO 3166-2:GW"
  },
  provinces: ["Bafata", "Biombo", "Bissau", "Bolama-Bijagos", "Cacheu",
    "Gabu", "Oio", "Quinara", "Tombali"
  ]
}, {
  name: "Guyana",
  ISO: {
    2: "GY",
    3: "GUY",
    numeric: 328,
    code: "ISO 3166-2:GY"
  },
  provinces: ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica",
    "East Berbice-Corentyne", "Essequibo Islands-West Demerara",
    "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni",
    "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"
  ]
}, {
  name: "Haiti",
  ISO: {
    2: "HT",
    3: "HTI",
    numeric: 332,
    code: "ISO 3166-2:HT"
  },
  provinces: ["Artibonite", "Centre", "Grand'Anse", "Nord", "Nord-Est",
    "Nord-Ouest", "Ouest", "Sud", "Sud-Est"
  ]
}, {
  name: "Heard Island and McDonald Islands",
  ISO: {
    2: "HM",
    3: "HMD",
    numeric: 334,
    code: "ISO 3166-2:HM"
  },
  provinces: ["Heard Island and McDonald Islands"]
}, {
  name: "Holy See (Vatican City)",
  ISO: {
    2: "VA",
    3: "VAT",
    numeric: 336,
    code: "ISO 3166-2:VA"
  },
  provinces: ["Holy See (Vatican City)"]
}, {
  name: "Honduras",
  ISO: {
    2: "HN",
    3: "HND",
    numeric: 340,
    code: "ISO 3166-2:HN"
  },
  provinces: ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan",
    "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios",
    "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque",
    "Olancho", "Santa Barbara", "Valle", "Yoro"
  ]
}, {
  name: "Hong Kong",
  ISO: {
    2: "HK",
    3: "HKG",
    numeric: 344,
    code: "ISO 3166-2:HK"
  },
  provinces: ["Hong Kong"]
}, {
  name: "Howland Island",
  ISO: {
    2: "HU",
    3: "HUN",
    numeric: 348,
    code: "ISO 3166-2:HU"
  },
  provinces: ["Howland Island"]
}, {
  name: "Hungary",
  ISO: {},
  provinces: ["Bacs-Kiskun", "Baranya", "Bekes", "Bekescsaba",
    "Borsod-Abauj-Zemplen", "Budapest", "Csongrad", "Debrecen",
    "Dunaujvaros", "Eger", "Fejer", "Gyor", "Gyor-Moson-Sopron",
    "Hajdu-Bihar", "Heves", "Hodmezovasarhely", "Jasz-Nagykun-Szolnok",
    "Kaposvar", "Kecskemet", "Komarom-Esztergom", "Miskolc", "Nagykanizsa",
    "Nograd", "Nyiregyhaza", "Pecs", "Pest", "Somogy", "Sopron",
    "Szabolcs-Szatmar-Bereg", "Szeged", "Szekesfehervar", "Szolnok",
    "Szombathely", "Tatabanya", "Tolna", "Vas", "Veszprem", "Veszprem",
    "Zala", "Zalaegerszeg"
  ]
}, {
  name: "Iceland",
  ISO: {
    2: "IS",
    3: "ISL",
    numeric: 352,
    code: "ISO 3166-2:IS"
  },
  provinces: ["Akranes", "Akureyri", "Arnessysla",
    "Austur-Bardhastrandarsysla", "Austur-Hunavatnssysla",
    "Austur-Skaftafellssysla", "Borgarfjardharsysla", "Dalasysla",
    "Eyjafjardharsysla", "Gullbringusysla", "Hafnarfjordhur", "Husavik",
    "Isafjordhur", "Keflavik", "Kjosarsysla", "Kopavogur", "Myrasysla",
    "Neskaupstadhur", "Nordhur-Isafjardharsysla", "Nordhur-Mulasys-la",
    "Nordhur-Thingeyjarsysla", "Olafsfjordhur", "Rangarvallasysla",
    "Reykjavik", "Saudharkrokur", "Seydhisfjordhur", "Siglufjordhur",
    "Skagafjardharsysla", "Snaefellsnes-og Hnappadalssysla", "Strandasysla",
    "Sudhur-Mulasysla", "Sudhur-Thingeyjarsysla", "Vesttmannaeyjar",
    "Vestur-Bardhastrandarsysla", "Vestur-Hunavatnssysla",
    "Vestur-Isafjardharsysla", "Vestur-Skaftafellssysla"
  ]
}, {
  name: "India",
  ISO: {
    2: "IN",
    3: "IND",
    numeric: 356,
    code: "ISO 3166-2:IN"
  },
  provinces: ["Andaman and Nicobar Islands", "Andhra Pradesh",
    "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh",
    "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand",
    "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry",
    "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura",
    "Uttar Pradesh", "Uttaranchal", "West Bengal"
  ]
}, {
  name: "Indonesia",
  ISO: {
    2: "ID",
    3: "IDN",
    numeric: 360,
    code: "ISO 3166-2:ID"
  },
  provinces: ["Aceh", "Bali", "Banten", "Bengkulu", "East Timor",
    "Gorontalo", "Irian Jaya", "Jakarta Raya", "Jambi", "Jawa Barat",
    "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan",
    "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung",
    "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat",
    "Nusa Tenggara Timur", "Riau", "Sulawesi Selatan", "Sulawesi Tengah",
    "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat",
    "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"
  ]
}, {
  name: "Iran",
  ISO: {
    2: "IR",
    3: "IRN",
    numeric: 364,
    code: "ISO 3166-2:IR"
  },
  provinces: ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi",
    "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan",
    "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah",
    "Khorasan", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan",
    "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan",
    "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"
  ]
}, {
  name: "Iraq",
  ISO: {
    2: "IQ",
    3: "IRQ",
    numeric: 368,
    code: "ISO 3166-2:IQ"
  },
  provinces: ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah",
    "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad",
    "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa",
    "Salah ad Din", "Wasit"
  ]
}, {
  name: "Ireland",
  ISO: {
    2: "IE",
    3: "IRL",
    numeric: 372,
    code: "ISO 3166-2:IE"
  },
  provinces: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin",
    "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim",
    "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly",
    "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford",
    "Wicklow"
  ]
}, {
  name: "Ireland, Northern",
  ISO: {},
  provinces: ["Antrim", "Ards", "Armagh", "Ballymena", "Ballymoney",
    "Banbridge", "Belfast", "Carrickfergus", "Castlereagh", "Coleraine",
    "Cookstown", "Craigavon", "Derry", "Down", "Dungannon", "Fermanagh",
    "Larne", "Limavady", "Lisburn", "Magherafelt", "Moyle",
    "Newry and Mourne", "Newtownabbey", "North Down", "Omagh", "Strabane"
  ]
}, {
  name: "Israel",
  ISO: {
    2: "IL",
    3: "ISR",
    numeric: 376,
    code: "ISO 3166-2:IL"
  },
  provinces: ["Central", "Haifa", "Jerusalem", "Northern", "Southern",
    "Tel Aviv"
  ]
}, {
  name: "Italy",
  ISO: {
    2: "IT",
    3: "ITA",
    numeric: 380,
    code: "ISO 3166-2:IT"
  },
  provinces: ["Abruzzo", "Basilicata", "Calabria", "Campania",
    "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria",
    "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna",
    "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta",
    "Veneto"
  ]
}, {
  name: "Jamaica",
  ISO: {
    2: "JM",
    3: "JAM",
    numeric: 388,
    code: "ISO 3166-2:JM"
  },
  provinces: ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland",
    "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth",
    "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"
  ]
}, {
  name: "Jan Mayen",
  ISO: {},
  provinces: ["Jan Mayen"]
}, {
  name: "Japan",
  ISO: {
    2: "JP",
    3: "JPN",
    numeric: 392,
    code: "ISO 3166-2:JP"
  },
  provinces: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui",
    "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido",
    "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima",
    "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki",
    "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa",
    "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi",
    "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata",
    "Yamaguchi", "Yamanashi"
  ]
}, {
  name: "Jarvis Island",
  ISO: {},
  provinces: ["Jarvis Island"]
}, {
  name: "Jersey",
  ISO: {
    2: "JE",
    3: "JEY",
    numeric: 832,
    code: "ISO 3166-2:JE"
  },
  provinces: ["Jersey"]
}, {
  name: "Johnston Atoll",
  ISO: {},
  provinces: ["Johnston Atoll"]
}, {
  name: "Jordan",
  ISO: {
    2: "JO",
    3: "JOR",
    numeric: 400,
    code: "ISO 3166-2:JO"
  },
  provinces: ["'Amman", "Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak",
    "Al Mafraq", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an",
    "Madaba"
  ]
}, {
  name: "Juan de Nova Island",
  ISO: {},
  provinces: ["Juan de Nova Island"]
}, {
  name: "Kazakhstan",
  ISO: {
    2: "KZ",
    3: "KAZ",
    numeric: 398,
    code: "ISO 3166-2:KZ"
  },
  provinces: ["Almaty", "Aqmola", "Aqtobe", "Astana", "Atyrau",
    "Batys Qazaqstan", "Bayqongyr", "Mangghystau", "Ongtustik Qazaqstan",
    "Pavlodar", "Qaraghandy", "Qostanay", "Qyzylorda", "Shyghys Qazaqstan",
    "Soltustik Qazaqstan", "Zhambyl"
  ]
}, {
  name: "Kenya",
  ISO: {
    2: "KE",
    3: "KEN",
    numeric: 404,
    code: "ISO 3166-2:KE"
  },
  provinces: ["Central", "Coast", "Eastern", "Nairobi Area",
    "North Eastern", "Nyanza", "Rift Valley", "Western"
  ]
}, {
  name: "Kiribati",
  ISO: {
    2: "KI",
    3: "KIR",
    numeric: 296,
    code: "ISO 3166-2:KI"
  },
  provinces: ["Abaiang", "Abemama", "Aranuka", "Arorae", "Banaba", "Banaba",
    "Beru", "Butaritari", "Central Gilberts", "Gilbert Islands", "Kanton",
    "Kiritimati", "Kuria", "Line Islands", "Line Islands", "Maiana",
    "Makin", "Marakei", "Nikunau", "Nonouti", "Northern Gilberts", "Onotoa",
    "Phoenix Islands", "Southern Gilberts", "Tabiteuea", "Tabuaeran",
    "Tamana", "Tarawa", "Tarawa", "Teraina"
  ]
}, {
  name: "Korea, North",
  ISO: {
    2: "KP",
    3: "PRK",
    numeric: 408,
    code: "ISO 3166-2:KP"
  },
  provinces: ["Chagang-do (Chagang Province)",
    "Hamgyong-bukto (North Hamgyong Province)",
    "Hamgyong-namdo (South Hamgyong Province)",
    "Hwanghae-bukto (North Hwanghae Province)",
    "Hwanghae-namdo (South Hwanghae Province)", "Kaesong-si (Kaesong City)",
    "Kangwon-do (Kangwon Province)", "Namp'o-si (Namp'o City)",
    "P'yongan-bukto (North P'yongan Province)",
    "P'yongan-namdo (South P'yongan Province)",
    "P'yongyang-si (P'yongyang City)", "Yanggang-do (Yanggang Province)"
  ]
}, {
  name: "Korea, South",
  ISO: {
    2: "KR",
    3: "KOR",
    numeric: 410,
    code: "ISO 3166-2:KR"
  },
  provinces: ["Ch'ungch'ong-bukto", "Ch'ungch'ong-namdo", "Cheju-do",
    "Cholla-bukto", "Cholla-namdo", "Inch'on-gwangyoksi", "Kangwon-do",
    "Kwangju-gwangyoksi", "Kyonggi-do", "Kyongsang-bukto",
    "Kyongsang-namdo", "Pusan-gwangyoksi", "Soul-t'ukpyolsi",
    "Taegu-gwangyoksi", "Taejon-gwangyoksi", "Ulsan-gwangyoksi"
  ]
}, {
  name: "Kuwait",
  ISO: {
    2: "KW",
    3: "KWT",
    numeric: 414,
    code: "ISO 3166-2:KW"
  },
  provinces: ["Al 'Asimah", "Al Ahmadi", "Al Farwaniyah", "Al Jahra'",
    "Hawalli"
  ]
}, {
  name: "Kyrgyzstan",
  ISO: {
    2: "KG",
    3: "KGZ",
    numeric: 417,
    code: "ISO 3166-2:KG"
  },
  provinces: ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty (Bishkek)",
    "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty",
    "Ysyk-Kol Oblasty (Karakol)"
  ]
}, {
  name: "Laos",
  ISO: {
    2: "LA",
    3: "LAO",
    numeric: 418,
    code: "ISO 3166-2:LA"
  },
  provinces: ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan",
    "Khammouan", "Louangnamtha", "Louangphabang", "Oudomxai", "Phongsali",
    "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli",
    "Xaisomboun", "Xekong", "Xiangkhoang"
  ]
}, {
  name: "Latvia",
  ISO: {
    2: "LV",
    3: "LVA",
    numeric: 428,
    code: "ISO 3166-2:LV"
  },
  provinces: ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons",
    "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons",
    "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava",
    "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons",
    "Leipaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons",
    "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne",
    "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons",
    "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons",
    "Ventspils", "Ventspils Rajons"
  ]
}, {
  name: "Lebanon",
  ISO: {
    2: "LB",
    3: "LBN",
    numeric: 422,
    code: "ISO 3166-2:LB"
  },
  provinces: ["Beyrouth", "Ech Chimal", "Ej Jnoub", "El Bekaa",
    "Jabal Loubnane"
  ]
}, {
  name: "Lesotho",
  ISO: {
    2: "LS",
    3: "LSO",
    numeric: 426,
    code: "ISO 3166-2:LS"
  },
  provinces: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru",
    "Mohales Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"
  ]
}, {
  name: "Liberia",
  ISO: {
    2: "LR",
    3: "LBR",
    numeric: 430,
    code: "ISO 3166-2:LR"
  },
  provinces: ["Bomi", "Bong", "Grand Bassa", "Grand Cape Mount",
    "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland",
    "Montserrado", "Nimba", "River Cess", "Sinoe"
  ]
}, {
  name: "Libya",
  ISO: {
    2: "LY",
    3: "LBY",
    numeric: 434,
    code: "ISO 3166-2:LY"
  },
  provinces: ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar",
    "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'",
    "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan",
    "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus",
    "Tarhunah", "Tubruq", "Yafran", "Zlitan"
  ]
}, {
  name: "Liechtenstein",
  ISO: {
    2: "LI",
    3: "LIE",
    numeric: 438,
    code: "ISO 3166-2:LI"
  },
  provinces: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken",
    "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"
  ]
}, {
  name: "Lithuania",
  ISO: {
    2: "LT",
    3: "LTU",
    numeric: 440,
    code: "ISO 3166-2:LT"
  },
  provinces: ["Akmenes Rajonas", "Alytaus Rajonas", "Alytus",
    "Anyksciu Rajonas", "Birstonas", "Birzu Rajonas", "Druskininkai",
    "Ignalinos Rajonas", "Jonavos Rajonas", "Joniskio Rajonas",
    "Jurbarko Rajonas", "Kaisiadoriu Rajonas", "Kaunas", "Kauno Rajonas",
    "Kedainiu Rajonas", "Kelmes Rajonas", "Klaipeda", "Klaipedos Rajonas",
    "Kretingos Rajonas", "Kupiskio Rajonas", "Lazdiju Rajonas",
    "Marijampole", "Marijampoles Rajonas", "Mazeikiu Rajonas",
    "Moletu Rajonas", "Neringa Pakruojo Rajonas", "Palanga",
    "Panevezio Rajonas", "Panevezys", "Pasvalio Rajonas", "Plunges Rajonas",
    "Prienu Rajonas", "Radviliskio Rajonas", "Raseiniu Rajonas",
    "Rokiskio Rajonas", "Sakiu Rajonas", "Salcininku Rajonas", "Siauliai",
    "Siauliu Rajonas", "Silales Rajonas", "Silutes Rajonas",
    "Sirvintu Rajonas", "Skuodo Rajonas", "Svencioniu Rajonas",
    "Taurages Rajonas", "Telsiu Rajonas", "Traku Rajonas",
    "Ukmerges Rajonas", "Utenos Rajonas", "Varenos Rajonas",
    "Vilkaviskio Rajonas", "Vilniaus Rajonas", "Vilnius", "Zarasu Rajonas"
  ]
}, {
  name: "Luxembourg",
  ISO: {
    2: "LU",
    3: "LUX",
    numeric: 442,
    code: "ISO 3166-2:LU"
  },
  provinces: ["Diekirch", "Grevenmacher", "Luxembourg"]
}, {
  name: "Macau",
  ISO: {
    2: "MO",
    3: "MAC",
    numeric: 446,
    code: "ISO 3166-2:MO"
  },
  provinces: ["Macau"]
}, {
  name: "Macedonia, Former Yugoslav Republic of",
  ISO: {
    2: "MK",
    3: "MKD",
    numeric: 807,
    code: "ISO 3166-2:MK"
  },
  provinces: ["Aracinovo", "Bac", "Belcista", "Berovo", "Bistrica",
    "Bitola", "Blatec", "Bogdanci", "Bogomila", "Bogovinje", "Bosilovo",
    "Brvenica", "Cair (Skopje)", "Capari", "Caska", "Cegrane",
    "Centar (Skopje)", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar",
    "Delcevo", "Delogozdi", "Demir Hisar", "Demir Kapija", "Dobrusevo",
    "Dolna Banjica", "Dolneni", "Dorce Petrov (Skopje)", "Drugovo",
    "Dzepciste", "Gazi Baba (Skopje)", "Gevgelija", "Gostivar", "Gradsko",
    "Ilinden", "Izvor", "Jegunovce", "Kamenjane", "Karbinci",
    "Karpos (Skopje)", "Kavadarci", "Kicevo", "Kisela Voda (Skopje)",
    "Klecevce", "Kocani", "Konce", "Kondovo", "Konopiste", "Kosel",
    "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kuklis",
    "Kukurecani", "Kumanovo", "Labunista", "Lipkovo", "Lozovo", "Lukovo",
    "Makedonska Kamenica", "Makedonski Brod", "Mavrovi Anovi", "Meseista",
    "Miravci", "Mogila", "Murtino", "Negotino", "Negotino-Poloska",
    "Novaci", "Novo Selo", "Oblesevo", "Ohrid", "Orasac", "Orizari",
    "Oslomej", "Pehcevo", "Petrovec", "Plasnia", "Podares", "Prilep",
    "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Rostusa",
    "Samokov", "Saraj", "Sipkovica", "Sopiste", "Sopotnika", "Srbinovo",
    "Star Dojran", "Staravina", "Staro Nagoricane", "Stip", "Struga",
    "Strumica", "Studenicani", "Suto Orizari (Skopje)", "Sveti Nikole",
    "Tearce", "Tetovo", "Topolcani", "Valandovo", "Vasilevo", "Veles",
    "Velesta", "Vevcani", "Vinica", "Vitoliste", "Vranestica", "Vrapciste",
    "Vratnica", "Vrutok", "Zajas", "Zelenikovo", "Zileno", "Zitose",
    "Zletovo", "Zrnovci"
  ]
}, {
  name: "Madagascar",
  ISO: {
    2: "MG",
    3: "MDG",
    numeric: 450,
    code: "ISO 3166-2:MG"
  },
  provinces: ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga",
    "Toamasina", "Toliara"
  ]
}, {
  name: "Malawi",
  ISO: {
    2: "MW",
    3: "MWI",
    numeric: 454,
    code: "ISO 3166-2:MW"
  },
  provinces: ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa",
    "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe",
    "Machinga (Kasupe)", "Mangochi", "Mchinji", "Mulanje", "Mwanza",
    "Mzimba", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi",
    "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"
  ]
}, {
  name: "Malaysia",
  ISO: {
    2: "MY",
    3: "MYS",
    numeric: 458,
    code: "ISO 3166-2:MY"
  },
  provinces: ["Johor", "Kedah", "Kelantan", "Labuan", "Melaka",
    "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah",
    "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan"
  ]
}, {
  name: "Maldives",
  ISO: {
    2: "MV",
    3: "MDV",
    numeric: 462,
    code: "ISO 3166-2:MV"
  },
  provinces: ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu",
    "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu",
    "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu",
    "Shaviyani", "Thaa", "Vaavu"
  ]
}, {
  name: "Mali",
  ISO: {
    2: "ML",
    3: "MLI",
    numeric: 466,
    code: "ISO 3166-2:ML"
  },
  provinces: ["Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou",
    "Sikasso", "Tombouctou"
  ]
}, {
  name: "Malta",
  ISO: {
    2: "MT",
    3: "MLT",
    numeric: 470,
    code: "ISO 3166-2:MT"
  },
  provinces: ["Valletta"]
}, {
  name: "Man, Isle of",
  ISO: {
    2: "IM",
    3: "IMN",
    numeric: 833,
    code: "ISO 3166-2:IM"
  },
  provinces: ["Man,Isle of"]
}, {
  name: "Marshall Islands",
  ISO: {
    2: "MH",
    3: "MHL",
    numeric: 584,
    code: "ISO 3166-2:MH"
  },
  provinces: ["Ailinginae", "Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikar",
    "Bikini", "Bokak", "Ebon", "Enewetak", "Erikub", "Jabat", "Jaluit",
    "Jemo", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro",
    "Maloelap", "Mejit", "Mili", "Namorik", "Namu", "Rongelap", "Rongrik",
    "Toke", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"
  ]
}, {
  name: "Martinique",
  ISO: {
    2: "MQ",
    3: "MTQ",
    numeric: 474,
    code: "ISO 3166-2:MQ"
  },
  provinces: ["Martinique"]
}, {
  name: "Mauritania",
  ISO: {
    2: "MR",
    3: "MRT",
    numeric: 478,
    code: "ISO 3166-2:MR"
  },
  provinces: ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol",
    "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri",
    "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"
  ]
}, {
  name: "Mauritius",
  ISO: {
    2: "MU",
    3: "MUS",
    numeric: 480,
    code: "ISO 3166-2:MU"
  },
  provinces: ["Agalega Islands", "Black River", "Cargados Carajos Shoals",
    "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems",
    "Port Louis", "Riviere du Rempart", "Rodrigues", "Savanne"
  ]
}, {
  name: "Mayotte",
  ISO: {
    2: "YT",
    3: "MYT",
    numeric: 175,
    code: "ISO 3166-2:YT"
  },
  provinces: ["Mayotte"]
}, {
  name: "Mexico",
  ISO: {
    2: "MX",
    3: "MEX",
    numeric: 484,
    code: "ISO 3166-2:MX"
  },
  provinces: ["Aguascalientes", "Baja California", "Baja California Sur",
    "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima",
    "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo",
    "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit",
    "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga",
    "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco",
    "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"
  ]
}, {
  name: "Micronesia, Federated States of",
  ISO: {
    2: "FM",
    3: "FSM",
    numeric: 583,
    code: "ISO 3166-2:FM"
  },
  provinces: ["Chuuk (Truk)", "Kosrae", "Pohnpei", "Yap"]
}, {
  name: "Midway Islands",
  ISO: {},
  provinces: ["Midway Islands"]
}, {
  name: "Moldova",
  ISO: {
    2: "MD",
    3: "MDA",
    numeric: 498,
    code: "ISO 3166-2:MD"
  },
  provinces: ["Balti", "Cahul", "Chisinau", "Chisinau", "Dubasari",
    "Edinet", "Gagauzia", "Lapusna", "Orhei", "Soroca", "Tighina",
    "Ungheni"
  ]
}, {
  name: "Monaco",
  ISO: {
    2: "MC",
    3: "MCO",
    numeric: 492,
    code: "ISO 3166-2:MC"
  },
  provinces: ["Fontvieille", "La Condamine", "Monaco-Ville", "Monte-Carlo"]
}, {
  name: "Mongolia",
  ISO: {
    2: "MN",
    3: "MNG",
    numeric: 496,
    code: "ISO 3166-2:MN"
  },
  provinces: ["Arhangay", "Bayan-Olgiy", "Bayanhongor", "Bulgan", "Darhan",
    "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Erdenet", "Govi-Altay",
    "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Ovorhangay", "Selenge",
    "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"
  ]
}, {
  name: "Montserrat",
  ISO: {
    2: "MS",
    3: "MSR",
    numeric: 500,
    code: "ISO 3166-2:MS"
  },
  provinces: ["Saint Anthony", "Saint Georges", "Saint Peter's"]
}, {
  name: "Morocco",
  ISO: {
    2: "MA",
    3: "MAR",
    numeric: 504,
    code: "ISO 3166-2:MA"
  },
  provinces: ["Agadir", "Al Hoceima", "Azilal", "Ben Slimane",
    "Beni Mellal", "Boulemane", "Casablanca", "Chaouen", "El Jadida",
    "El Kelaa des Srarhna", "Er Rachidia", "Essaouira", "Fes", "Figuig",
    "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga",
    "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate",
    "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tan-Tan",
    "Tanger", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"
  ]
}, {
  name: "Mozambique",
  ISO: {
    2: "MZ",
    3: "MOZ",
    numeric: 508,
    code: "ISO 3166-2:MZ"
  },
  provinces: ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo",
    "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"
  ]
}, {
  name: "Namibia",
  ISO: {
    2: "NA",
    3: "NAM",
    numeric: 516,
    code: "ISO 3166-2:NA"
  },
  provinces: ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene",
    "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto",
    "Otjozondjupa"
  ]
}, {
  name: "Nauru",
  ISO: {
    2: "NR",
    3: "NRU",
    numeric: 520,
    code: "ISO 3166-2:NR"
  },
  provinces: ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe",
    "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe",
    "Yaren"
  ]
}, {
  name: "Nepal",
  ISO: {
    2: "NP",
    3: "NPL",
    numeric: 524,
    code: "ISO 3166-2:NP"
  },
  provinces: ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur",
    "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti",
    "Sagarmatha", "Seti"
  ]
}, {
  name: "Netherlands",
  ISO: {
    2: "NL",
    3: "NLD",
    numeric: 528,
    code: "ISO 3166-2:NL"
  },
  provinces: ["Drenthe", "Flevoland", "Friesland", "Gelderland",
    "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel",
    "Utrecht", "Zeeland", "Zuid-Holland"
  ]
}, {
  name: "Netherlands Antilles",
  ISO: {},
  provinces: ["Netherlands Antilles"]
}, {
  name: "New Caledonia",
  ISO: {
    2: "NC",
    3: "NCL",
    numeric: 540,
    code: "ISO 3166-2:NC"
  },
  provinces: ["Iles Loyaute", "Nord", "Sud"]
}, {
  name: "New Zealand",
  ISO: {
    2: "NZ",
    3: "NZL",
    numeric: 554,
    code: "ISO 3166-2:NZ"
  },
  provinces: ["Akaroa", "Amuri", "Ashburton", "Bay of Islands", "Bruce",
    "Buller", "Chatham Islands", "Cheviot", "Clifton", "Clutha", "Cook",
    "Dannevirke", "Egmont", "Eketahuna", "Ellesmere", "Eltham", "Eyre",
    "Featherston", "Franklin", "Golden Bay", "Great Barrier Island", "Grey",
    "Hauraki Plains", "Hawera", "Hawke's Bay", "Heathcote", "Hikurangi",
    "Hobson", "Hokianga", "Horowhenua", "Hurunui", "Hutt", "Inangahua",
    "Inglewood", "Kaikoura", "Kairanga", "Kiwitea", "Lake", "Mackenzie",
    "Malvern", "Manaia", "Manawatu", "Mangonui", "Maniototo", "Marlborough",
    "Masterton", "Matamata", "Mount Herbert", "Ohinemuri", "Opotiki",
    "Oroua", "Otamatea", "Otorohanga", "Oxford", "Pahiatua", "Paparua",
    "Patea", "Piako", "Pohangina", "Raglan", "Rangiora", "Rangitikei",
    "Rodney", "Rotorua", "Runanga", "Saint Kilda", "Silverpeaks",
    "Southland", "Stewart Island", "Stratford", "Strathallan", "Taranaki",
    "Taumarunui", "Taupo", "Tauranga", "Thames-Coromandel", "Tuapeka",
    "Vincent", "Waiapu", "Waiheke", "Waihemo", "Waikato", "Waikohu",
    "Waimairi", "Waimarino", "Waimate", "Waimate West", "Waimea", "Waipa",
    "Waipawa", "Waipukurau", "Wairarapa South", "Wairewa", "Wairoa",
    "Waitaki", "Waitomo", "Waitotara", "Wallace", "Wanganui", "Waverley",
    "Westland", "Whakatane", "Whangarei", "Whangaroa", "Woodville"
  ]
}, {
  name: "Nicaragua",
  ISO: {
    2: "NI",
    3: "NIC",
    numeric: 558,
    code: "ISO 3166-2:NI"
  },
  provinces: ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo",
    "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon",
    "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia",
    "Rio San Juan", "Rivas"
  ]
}, {
  name: "Niger",
  ISO: {
    2: "NE",
    3: "NER",
    numeric: 562,
    code: "ISO 3166-2:NE"
  },
  provinces: ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua",
    "Tillaberi", "Zinder"
  ]
}, {
  name: "Nigeria",
  ISO: {
    2: "NG",
    3: "NGA",
    numeric: 566,
    code: "ISO 3166-2:NG"
  },
  provinces: ["Abia", "Abuja Federal Capital Territory", "Adamawa",
    "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
    "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ]
}, {
  name: "Niue",
  ISO: {
    2: "NU",
    3: "NIU",
    numeric: 570,
    code: "ISO 3166-2:NU"
  },
  provinces: ["Niue"]
}, {
  name: "Norfolk Island",
  ISO: {
    2: "NF",
    3: "NFK",
    numeric: 574,
    code: "ISO 3166-2:NF"
  },
  provinces: ["Norfolk Island"]
}, {
  name: "Northern Mariana Islands",
  ISO: {
    2: "MP",
    3: "MNP",
    numeric: 580,
    code: "ISO 3166-2:MP"
  },
  provinces: ["Northern Islands", "Rota", "Saipan", "Tinian"]
}, {
  name: "Norway",
  ISO: {
    2: "NO",
    3: "NOR",
    numeric: 578,
    code: "ISO 3166-2:NO"
  },
  provinces: ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark",
    "Hordaland", "More og Romsdal", "Nord-Trondelag", "Nordland", "Oppland",
    "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag",
    "Telemark", "Troms", "Vest-Agder", "Vestfold"
  ]
}, {
  name: "Oman",
  ISO: {
    2: "OM",
    3: "OMN",
    numeric: 512,
    code: "ISO 3166-2:OM"
  },
  provinces: ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah",
    "Az Zahirah", "Masqat", "Musandam", "Zufar"
  ]
}, {
  name: "Pakistan",
  ISO: {
    2: "PK",
    3: "PAK",
    numeric: 586,
    code: "ISO 3166-2:PK"
  },
  provinces: ["Balochistan", "Federally Administered Tribal Areas",
    "Islamabad Capital Territory", "North-West Frontier Province", "Punjab",
    "Sindh"
  ]
}, {
  name: "Palau",
  ISO: {
    2: "PW",
    3: "PLW",
    numeric: 585,
    code: "ISO 3166-2:PW"
  },
  provinces: ["Aimeliik", "Airai", "Angaur", "Hatobohei", "Kayangel",
    "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang",
    "Ngchesar", "Ngeremlengui", "Ngiwal", "Palau Island", "Peleliu",
    "Sonsoral", "Tobi"
  ]
}, {
  name: "Panama",
  ISO: {
    2: "PA",
    3: "PAN",
    numeric: 591,
    code: "ISO 3166-2:PA"
  },
  provinces: ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien",
    "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"
  ]
}, {
  name: "Papua New Guinea",
  ISO: {
    2: "PG",
    3: "PNG",
    numeric: 598,
    code: "ISO 3166-2:PG"
  },
  provinces: ["Bougainville", "Central", "Chimbu", "East New Britain",
    "East Sepik", "Eastern Highlands", "Enga", "Gulf", "Madang", "Manus",
    "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern",
    "Sandaun", "Southern Highlands", "West New Britain", "Western",
    "Western Highlands"
  ]
}, {
  name: "Paraguay",
  ISO: {
    2: "PY",
    3: "PRY",
    numeric: 600,
    code: "ISO 3166-2:PY"
  },
  provinces: ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion (city)",
    "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion",
    "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari",
    "Presidente Hayes", "San Pedro"
  ]
}, {
  name: "Peru",
  ISO: {
    2: "PE",
    3: "PER",
    numeric: 604,
    code: "ISO 3166-2:PE"
  },
  provinces: ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho",
    "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica",
    "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios",
    "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes",
    "Ucayali"
  ]
}, {
  name: "Philippines",
  ISO: {
    2: "PH",
    3: "PHL",
    numeric: 608,
    code: "ISO 3166-2:PH"
  },
  provinces: ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan",
    "Albay", "Angeles", "Antique", "Aurora", "Bacolod", "Bago", "Baguio",
    "Bais", "Basilan", "Basilan City", "Bataan", "Batanes", "Batangas",
    "Batangas City", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Butuan",
    "Cabanatuan", "Cadiz", "Cagayan", "Cagayan de Oro", "Calbayog",
    "Caloocan", "Camarines Norte", "Camarines Sur", "Camiguin", "Canlaon",
    "Capiz", "Catanduanes", "Cavite", "Cavite City", "Cebu", "Cebu City",
    "Cotabato", "Dagupan", "Danao", "Dapitan", "Davao City Davao",
    "Davao del Sur", "Davao Oriental", "Dipolog", "Dumaguete",
    "Eastern Samar", "General Santos", "Gingoog", "Ifugao", "Iligan",
    "Ilocos Norte", "Ilocos Sur", "Iloilo", "Iloilo City", "Iriga",
    "Isabela", "Kalinga-Apayao", "La Carlota", "La Union", "Laguna",
    "Lanao del Norte", "Lanao del Sur", "Laoag", "Lapu-Lapu", "Legaspi",
    "Leyte", "Lipa", "Lucena", "Maguindanao", "Mandaue", "Manila", "Marawi",
    "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental",
    "Misamis Occidental", "Misamis Oriental", "Mountain", "Naga",
    "Negros Occidental", "Negros Oriental", "North Cotabato",
    "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Olongapo", "Ormoc",
    "Oroquieta", "Ozamis", "Pagadian", "Palawan", "Palayan", "Pampanga",
    "Pangasinan", "Pasay", "Puerto Princesa", "Quezon", "Quezon City",
    "Quirino", "Rizal", "Romblon", "Roxas", "Samar",
    "San Carlos (in Negros Occidental)", "San Carlos (in Pangasinan)",
    "San Jose", "San Pablo", "Silay", "Siquijor", "Sorsogon",
    "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao",
    "Surigao del Norte", "Surigao del Sur", "Tacloban", "Tagaytay",
    "Tagbilaran", "Tangub", "Tarlac", "Tawitawi", "Toledo",
    "Trece Martires", "Zambales", "Zamboanga", "Zamboanga del Norte",
    "Zamboanga del Sur"
  ]
}, {
  name: "Pitcaim Islands",
  ISO: {
    2: "PN",
    3: "PCN",
    numeric: 612,
    code: "ISO 3166-2:PN"
  },
  provinces: ["Pitcaim Islands"]
}, {
  name: "Poland",
  ISO: {
    2: "PL",
    3: "POL",
    numeric: 616,
    code: "ISO 3166-2:PL"
  },
  provinces: ["Dolnoslaskie", "Kujawsko-Pomorskie", "Lodzkie", "Lubelskie",
    "Lubuskie", "Malopolskie", "Mazowieckie", "Opolskie", "Podkarpackie",
    "Podlaskie", "Pomorskie", "Slaskie", "Swietokrzyskie",
    "Warminsko-Mazurskie", "Wielkopolskie", "Zachodniopomorskie"
  ]
}, {
  name: "Portugal",
  ISO: {
    2: "PT",
    3: "PRT",
    numeric: 620,
    code: "ISO 3166-2:PT"
  },
  provinces: ["Acores (Azores)", "Aveiro", "Beja", "Braga", "Braganca",
    "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria",
    "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal",
    "Viana do Castelo", "Vila Real", "Viseu"
  ]
}, {
  name: "Puerto Rico",
  ISO: {
    2: "PR",
    3: "PRI",
    numeric: 630,
    code: "ISO 3166-2:PR"
  },
  provinces: ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito",
    "Anasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamon",
    "Cabo Rojo", "Caguas", "Camuy", "Canovanas", "Carolina", "Catano",
    "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerio", "Corozal",
    "Culebra", "Dorado", "Fajardo", "Florida", "Guanica", "Guayama",
    "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao",
    "Isabela", "Jayuya", "Juana Diaz", "Juncos", "Lajas", "Lares",
    "Las Marias", "Las Piedras", "Loiza", "Luquillo", "Manati", "Maricao",
    "Maunabo", "Mayaguez", "Moca", "Morovis", "Naguabo", "Naranjito",
    "Orocovis", "Patillas", "Penuelas", "Ponce", "Quebradillas", "Rincon",
    "Rio Grande", "Sabana Grande", "Salinas", "San German", "San Juan",
    "San Lorenzo", "San Sebastian", "Santa Isabel", "Toa Alta", "Toa Baja",
    "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques",
    "Villalba", "Yabucoa", "Yauco"
  ]
}, {
  name: "Qatar",
  ISO: {
    2: "QA",
    3: "QAT",
    numeric: 634,
    code: "ISO 3166-2:QA"
  },
  provinces: ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr",
    "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal",
    "Umm Salal"
  ]
}, {
  name: "Reunion",
  ISO: {
    2: "RE",
    3: "REU",
    numeric: 638,
    code: "ISO 3166-2:RE"
  },
  provinces: ["Reunion"]
}, {
  name: "Romainia",
  ISO: {
    2: "RO",
    3: "ROU",
    numeric: 642,
    code: "ISO 3166-2:RO"
  },
  provinces: ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud",
    "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi",
    "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj",
    "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomita",
    "Iasi", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova",
    "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis",
    "Tulcea", "Vaslui", "Vilcea", "Vrancea"
  ]
}, {
  name: "Russia",
  ISO: {
    2: "RU",
    3: "RUS",
    numeric: 643,
    code: "ISO 3166-2:RU"
  },
  provinces: ["Adygeya (Maykop)", "Aginskiy Buryatskiy (Aginskoye)",
    "Altay (Gorno-Altaysk)", "Altayskiy (Barnaul)",
    "Amurskaya (Blagoveshchensk)", "Arkhangel'skaya", "Astrakhanskaya",
    "Bashkortostan (Ufa)", "Belgorodskaya", "Bryanskaya",
    "Buryatiya (Ulan-Ude)", "Chechnya (Groznyy)", "Chelyabinskaya",
    "Chitinskaya", "Chukotskiy (Anadyr')", "Chuvashiya (Cheboksary)",
    "Dagestan (Makhachkala)", "Evenkiyskiy (Tura)", "Ingushetiya (Nazran')",
    "Irkutskaya", "Ivanovskaya", "Kabardino-Balkariya (Nal'chik)",
    "Kaliningradskaya", "Kalmykiya (Elista)", "Kaluzhskaya",
    "Kamchatskaya (Petropavlovsk-Kamchatskiy)",
    "Karachayevo-Cherkesiya (Cherkessk)", "Kareliya (Petrozavodsk)",
    "Kemerovskaya", "Khabarovskiy", "Khakasiya (Abakan)",
    "Khanty-Mansiyskiy (Khanty-Mansiysk)", "Kirovskaya", "Komi (Syktyvkar)",
    "Komi-Permyatskiy (Kudymkar)", "Koryakskiy (Palana)", "Kostromskaya",
    "Krasnodarskiy", "Krasnoyarskiy", "Kurganskaya", "Kurskaya",
    "Leningradskaya", "Lipetskaya", "Magadanskaya",
    "Mariy-El (Yoshkar-Ola)", "Mordoviya (Saransk)", "Moskovskaya",
    "Moskva (Moscow)", "Murmanskaya", "Nenetskiy (Nar'yan-Mar)",
    "Nizhegorodskaya", "Novgorodskaya", "Novosibirskaya", "Omskaya",
    "Orenburgskaya", "Orlovskaya (Orel)", "Penzenskaya", "Permskaya",
    "Primorskiy (Vladivostok)", "Pskovskaya", "Rostovskaya", "Ryazanskaya",
    "Sakha (Yakutsk)", "Sakhalinskaya (Yuzhno-Sakhalinsk)", "Samarskaya",
    "Sankt-Peterburg (Saint Petersburg)", "Saratovskaya",
    "Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)",
    "Smolenskaya", "Stavropol'skiy", "Sverdlovskaya (Yekaterinburg)",
    "Tambovskaya", "Tatarstan (Kazan')", "Taymyrskiy (Dudinka)", "Tomskaya",
    "Tul'skaya", "Tverskaya", "Tyumenskaya", "Tyva (Kyzyl)",
    "Udmurtiya (Izhevsk)", "Ul'yanovskaya",
    "Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)", "Vladimirskaya",
    "Volgogradskaya", "Vologodskaya", "Voronezhskaya",
    "Yamalo-Nenetskiy (Salekhard)", "Yaroslavskaya", "Yevreyskaya"
  ]
}, {
  name: "Rwanda",
  ISO: {
    2: "RW",
    3: "RWA",
    numeric: 646,
    code: "ISO 3166-2:RW"
  },
  provinces: ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi",
    "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville",
    "Ruhengeri", "Umutara"
  ]
}, {
  name: "Saint Helena",
  ISO: {
    2: "SH",
    3: "SHN",
    numeric: 654,
    code: "ISO 3166-2:SH"
  },
  provinces: ["Ascension", "Saint Helena", "Tristan da Cunha"]
}, {
  name: "Saint Kitts and Nevis",
  ISO: {
    2: "KN",
    3: "KNA",
    numeric: 659,
    code: "ISO 3166-2:KN"
  },
  provinces: ["Christ Church Nichola Town", "Saint Anne Sandy Point",
    "Saint George Basseterre", "Saint George Gingerland",
    "Saint James Windward", "Saint John Capisterre", "Saint John Figtree",
    "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Paul Charlestown",
    "Saint Peter Basseterre", "Saint Thomas Lowland",
    "Saint Thomas Middle Island", "Trinity Palmetto Point"
  ]
}, {
  name: "Saint Lucia",
  ISO: {
    2: "LC",
    3: "LCA",
    numeric: 662,
    code: "ISO 3166-2:LC"
  },
  provinces: ["Anse-la-Raye", "Castries", "Choiseul", "Dauphin", "Dennery",
    "Gros Islet", "Laborie", "Micoud", "Praslin", "Soufriere", "Vieux Fort"
  ]
}, {
  name: "Saint Pierre and Miquelon",
  ISO: {
    2: "PM",
    3: "SPM",
    numeric: 666,
    code: "ISO 3166-2:PM"
  },
  provinces: ["Miquelon", "Saint Pierre"]
}, {
  name: "Saint Vincent and the Grenadines",
  ISO: {
    2: "VC",
    3: "VCT",
    numeric: 670,
    code: "ISO 3166-2:VC"
  },
  provinces: ["Charlotte", "Grenadines", "Saint Andrew", "Saint David",
    "Saint George", "Saint Patrick"
  ]
}, {
  name: "Samoa",
  ISO: {
    2: "WS",
    3: "WSM",
    numeric: 882,
    code: "ISO 3166-2:WS"
  },
  provinces: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga",
    "Gaga'emauga", "Gagaifomauga", "Palauli", "Satupa'itea", "Tuamasaga",
    "Va'a-o-Fonoti", "Vaisigano"
  ]
}, {
  name: "San Marino",
  ISO: {
    2: "SM",
    3: "SMR",
    numeric: 674,
    code: "ISO 3166-2:SM"
  },
  provinces: ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano",
    "Faetano", "Fiorentino", "Monte Giardino", "San Marino", "Serravalle"
  ]
}, {
  name: "Sao Tome and Principe",
  ISO: {
    2: "ST",
    3: "STP",
    numeric: 678,
    code: "ISO 3166-2:ST"
  },
  provinces: ["Principe", "Sao Tome"]
}, {
  name: "Saudi Arabia",
  ISO: {
    2: "SA",
    3: "SAU",
    numeric: 682,
    code: "ISO 3166-2:SA"
  },
  provinces: ["'Asir", "Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf",
    "Al Madinah", "Al Qasim", "Ar Riyad",
    "Ash Sharqiyah (Eastern Province)", "Ha'il", "Jizan", "Makkah",
    "Najran", "Tabuk"
  ]
}, {
  name: "Scotland",
  ISO: {},
  provinces: ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute",
    "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway",
    "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian",
    "East Renfrewshire", "Eilean Siar (Western Isles)", "Falkirk", "Fife",
    "Glasgow City", "Highland", "Inverclyde", "Midlothian", "Moray",
    "North Ayrshire", "North Lanarkshire", "Orkney Islands",
    "Perth and Kinross", "Renfrewshire", "Shetland Islands",
    "South Ayrshire", "South Lanarkshire", "Stirling",
    "The Scottish Borders", "West Dunbartonshire", "West Lothian"
  ]
}, {
  name: "Senegal",
  ISO: {
    2: "SN",
    3: "SEN",
    numeric: 686,
    code: "ISO 3166-2:SN"
  },
  provinces: ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga",
    "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"
  ]
}, {
  name: "Seychelles",
  ISO: {
    2: "SC",
    3: "SYC",
    numeric: 690,
    code: "ISO 3166-2:SC"
  },
  provinces: ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis",
    "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon",
    "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse (on Mahe)",
    "Grand' Anse (on Praslin)", "La Digue", "La Riviere Anglaise",
    "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue",
    "Port Glaud", "Saint Louis", "Takamaka"
  ]
}, {
  name: "Sierra Leone",
  ISO: {
    2: "SL",
    3: "SLE",
    numeric: 694,
    code: "ISO 3166-2:SL"
  },
  provinces: ["Eastern", "Northern", "Southern", "Western"]
}, {
  name: "Singapore",
  ISO: {
    2: "SG",
    3: "SGP",
    numeric: 702,
    code: "ISO 3166-2:SG"
  },
  provinces: ["Singapore"]
}, {
  name: "Slovakia",
  ISO: {
    2: "SK",
    3: "SVK",
    numeric: 703,
    code: "ISO 3166-2:SK"
  },
  provinces: ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky",
    "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"
  ]
}, {
  name: "Slovenia",
  ISO: {
    2: "SI",
    3: "SVN",
    numeric: 705,
    code: "ISO 3166-2:SI"
  },
  provinces: ["Ajdovscina", "Beltinci", "Bled", "Bohinj", "Borovnica",
    "Bovec", "Brda", "Brezice", "Brezovica", "Cankova-Tisina", "Celje",
    "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Crensovci",
    "Crna na Koroskem", "Crnomelj", "Destrnik-Trnovska Vas", "Divaca",
    "Dobrepolje", "Dobrova-Horjul-Polhov Gradec", "Dol pri Ljubljani",
    "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane",
    "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci",
    "Grosuplje", "Hodos Salovci", "Hrastnik", "Hrpelje-Kozina", "Idrija",
    "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola", "Jesenice",
    "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje",
    "Kocevje", "Komen", "Koper", "Kozje", "Kranj", "Kranjska Gora", "Krsko",
    "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava", "Litija", "Ljubljana",
    "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Luce",
    "Lukovica", "Majsperk", "Maribor", "Medvode", "Menges", "Metlika",
    "Mezica", "Miren-Kostanjevica", "Mislinja", "Moravce",
    "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo",
    "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Ormoz", "Osilnica",
    "Pesnica", "Piran", "Pivka", "Podcetrtek", "Podvelka-Ribnica",
    "Postojna", "Preddvor", "Ptuj", "Puconci", "Race-Fram", "Radece",
    "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne-Prevalje", "Ribnica",
    "Rogasevci", "Rogaska Slatina", "Rogatec", "Ruse", "Semic", "Sencur",
    "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana",
    "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec",
    "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah",
    "Smartno ob Paki", "Sostanj", "Starse", "Store", "Sveti Jurij",
    "Tolmin", "Trbovlje", "Trebnje", "Trzic", "Turnisce", "Velenje",
    "Velike Lasce", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik",
    "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki",
    "Ziri", "Zrece"
  ]
}, {
  name: "Solomon Islands",
  ISO: {
    2: "SB",
    3: "SLB",
    numeric: 090,
    code: "ISO 3166-2:SB"
  },
  provinces: ["Bellona", "Central", "Choiseul (Lauru)", "Guadalcanal",
    "Honiara", "Isabel", "Makira", "Malaita", "Rennell", "Temotu",
    "Western"
  ]
}, {
  name: "Somalia",
  ISO: {
    2: "SO",
    3: "SOM",
    numeric: 706,
    code: "ISO 3166-2:SO"
  },
  provinces: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud",
    "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal",
    "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer",
    "Woqooyi Galbeed"
  ]
}, {
  name: "South Africa",
  ISO: {
    2: "ZA",
    3: "ZAF",
    numeric: 710,
    code: "ISO 3166-2:ZA"
  },
  provinces: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal",
    "Mpumalanga", "North-West", "Northern Cape", "Northern Province",
    "Western Cape"
  ]
}, {
  name: "South Georgia and South Sandwich Islands",
  ISO: {
    2: "GS",
    3: "SGS",
    numeric: 239,
    code: "ISO 3166-2:GS"
  },
  provinces: ["Bird Island", "Bristol Island", "Clerke Rocks",
    "Montagu Island", "Saunders Island", "South Georgia", "Southern Thule",
    "Traversay Islands"
  ]
}, {
  name: "Spain",
  ISO: {
    2: "SS",
    3: "SSD",
    numeric: 728,
    code: "ISO 3166-2:SS"
  },
  provinces: ["Andalucia", "Aragon", "Asturias",
    "Baleares (Balearic Islands)", "Canarias (Canary Islands)", "Cantabria",
    "Castilla y Leon", "Castilla-La Mancha", "Cataluna", "Ceuta",
    "Communidad Valencian", "Extremadura", "Galicia", "Islas Chafarinas",
    "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra",
    "Pais Vasco (Basque Country)", "Penon de Alhucemas",
    "Penon de Velez de la Gomera"
  ]
}, {
  name: "Spratly Islands",
  ISO: {
    2: "ES",
    3: "ESP",
    numeric: 724,
    code: "ISO 3166-2:ES"
  },
  provinces: ["Spratly Islands"]
}, {
  name: "Sri Lanka",
  ISO: {
    2: "LK",
    3: "LKA",
    numeric: 144,
    code: "ISO 3166-2:LK"
  },
  provinces: ["Central", "Eastern", "North Central", "North Eastern",
    "North Western", "Northern", "Sabaragamuwa", "Southern", "Uva",
    "Western"
  ]
}, {
  name: "Sudan",
  ISO: {
    2: "SD",
    3: "SDN",
    numeric: 729,
    code: "ISO 3166-2:SD"
  },
  provinces: ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat",
    "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah",
    "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal",
    "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur",
    "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali",
    "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur",
    "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"
  ]
}, {
  name: "Suriname",
  ISO: {
    2: "SR",
    3: "SUR",
    numeric: 740,
    code: "ISO 3166-2:SR"
  },
  provinces: ["Brokopondo", "Commewijne", "Coronie", "Marowijne",
    "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"
  ]
}, {
  name: "Svalbard",
  ISO: {
    2: "SJ",
    3: "SJM",
    numeric: 744,
    code: "ISO 3166-2:SJ"
  },
  provinces: ["Barentsoya", "Bjornoya", "Edgeoya", "Hopen", "Kvitoya",
    "Nordaustandet", "Prins Karls Forland", "Spitsbergen"
  ]
}, {
  name: "Swaziland",
  ISO: {
    2: "SZ",
    3: "SWZ",
    numeric: 748,
    code: "ISO 3166-2:SZ"
  },
  provinces: ["Hhohho", "Lubombo", "Manzini", "Shiselweni"]
}, {
  name: "Sweden",
  ISO: {
    2: "SE",
    3: "SWE",
    numeric: 752,
    code: "ISO 3166-2:SE"
  },
  provinces: ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands",
    "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens",
    "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms",
    "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands",
    "Vastmanlands", "Vastra Gotalands"
  ]
}, {
  name: "Switzerland",
  ISO: {
    2: "CH",
    3: "CHE",
    numeric: 756,
    code: "ISO 3166-2:CH"
  },
  provinces: ["Aargau", "Ausser-Rhoden", "Basel-Landschaft", "Basel-Stadt",
    "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Inner-Rhoden",
    "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen",
    "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri",
    "Valais", "Vaud", "Zug", "Zurich"
  ]
}, {
  name: "Syria",
  ISO: {
    2: "SY",
    3: "SYR",
    numeric: 760,
    code: "ISO 3166-2:SY"
  },
  provinces: ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah",
    "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah",
    "Hims", "Idlib", "Rif Dimashq", "Tartus"
  ]
}, {
  name: "Taiwan",
  ISO: {
    2: "TW",
    3: "TWN",
    numeric: 158,
    code: "ISO 3166-2:TW"
  },
  provinces: ["Chang-hua", "Chi-lung", "Chia-i", "Chia-i",
    "Chung-hsing-hsin-ts'un", "Hsin-chu", "Hsin-chu", "Hua-lien", "I-lan",
    "Kao-hsiung", "Kao-hsiung", "Miao-li", "Nan-t'ou", "P'eng-hu",
    "P'ing-tung", "T'ai-chung", "T'ai-chung", "T'ai-nan", "T'ai-nan",
    "T'ai-pei", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin"
  ]
}, {
  name: "Tajikistan",
  ISO: {
    2: "TJ",
    3: "TJK",
    numeric: 762,
    code: "ISO 3166-2:TJ"
  },
  provinces: ["Viloyati Khatlon", "Viloyati Leninobod",
    "Viloyati Mukhtori Kuhistoni Badakhshon"
  ]
}, {
  name: "Tanzania",
  ISO: {
    2: "TZ",
    3: "TZA",
    numeric: 834,
    code: "ISO 3166-2:TZ"
  },
  provinces: ["Arusha", "Dar es Salaam", "Dodoma", "Iringa", "Kagera",
    "Kigoma", "Kilimanjaro", "Lindi", "Mara", "Mbeya", "Morogoro", "Mtwara",
    "Mwanza", "Pemba North", "Pemba South", "Pwani", "Rukwa", "Ruvuma",
    "Shinyanga", "Singida", "Tabora", "Tanga", "Zanzibar Central/South",
    "Zanzibar North", "Zanzibar Urban/West"
  ]
}, {
  name: "Thailand",
  ISO: {
    2: "TH",
    3: "THA",
    numeric: 764,
    code: "ISO 3166-2:TH"
  },
  provinces: ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao",
    "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai",
    "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi",
    "Khon Kaen", "Krabi", "Krung Thep Mahanakhon (Bangkok)", "Lampang",
    "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham",
    "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom",
    "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan",
    "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi",
    "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao",
    "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok",
    "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri",
    "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et",
    "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon",
    "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket",
    "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak",
    "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani",
    "Uttaradit", "Yala", "Yasothon"
  ]
}, {
  name: "Tobago",
  ISO: {
    2: "TL",
    3: "TLS",
    numeric: 626,
    code: "ISO 3166-2:TL"
  },
  provinces: ["Tobago"]
}, {
  name: "Toga",
  ISO: {
    2: "TG",
    3: "TGO",
    numeric: 768,
    code: "ISO 3166-2:TG"
  },
  provinces: ["De La Kara", "Des Plateaux", "Des Savanes", "Du Centre",
    "Maritime"
  ]
}, {
  name: "Tokelau",
  ISO: {
    2: "TK",
    3: "TKL",
    numeric: 772,
    code: "ISO 3166-2:TK"
  },
  provinces: ["Atafu", "Fakaofo", "Nukunonu"]
}, {
  name: "Tonga",
  ISO: {
    2: "TO",
    3: "TON",
    numeric: 776,
    code: "ISO 3166-2:TO"
  },
  provinces: ["Ha'apai", "Tongatapu", "Vava'u"]
}, {
  name: "Trinidad",
  ISO: {
    2: "TT",
    3: "TTO",
    numeric: 780,
    code: "ISO 3166-2:TT"
  },
  provinces: ["Arima", "Caroni", "Mayaro", "Nariva", "Port-of-Spain",
    "Saint Andrew", "Saint David", "Saint George", "Saint Patrick",
    "San Fernando", "Victoria"
  ]
}, {
  name: "Tunisia",
  ISO: {
    2: "TN",
    3: "TUN",
    numeric: 788,
    code: "ISO 3166-2:TN"
  },
  provinces: ["Ariana", "Beja", "Ben Arous", "Bizerte", "El Kef", "Gabes",
    "Gafsa", "Jendouba", "Kairouan", "Kasserine", "Kebili", "Mahdia",
    "Medenine", "Monastir", "Nabeul", "Sfax", "Sidi Bou Zid", "Siliana",
    "Sousse", "Tataouine", "Tozeur", "Tunis", "Zaghouan"
  ]
}, {
  name: "Turkey",
  ISO: {
    2: "TR",
    3: "TUR",
    numeric: 792,
    code: "ISO 3166-2:TR"
  },
  provinces: ["Adana", "Adiyaman", "Afyon", "Agri", "Aksaray", "Amasya",
    "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir",
    "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu",
    "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli",
    "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum",
    "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay",
    "Icel", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras",
    "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis",
    "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya",
    "Malatya", "Manisa", "Mardin", "Mugla", "Mus", "Nevsehir", "Nigde",
    "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt",
    "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli",
    "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"
  ]
}, {
  name: "Turkmenistan",
  ISO: {
    2: "TM",
    3: "TKM",
    numeric: 795,
    code: "ISO 3166-2:TM"
  },
  provinces: ["Ahal Welayaty", "Balkan Welayaty", "Dashhowuz Welayaty",
    "Lebap Welayaty", "Mary Welayaty"
  ]
}, {
  name: "Tuvalu",
  ISO: {
    2: "TV",
    3: "TUV",
    numeric: 798,
    code: "ISO 3166-2:TV"
  },
  provinces: ["Tuvalu"]
}, {
  name: "Uganda",
  ISO: {
    2: "UG",
    3: "UGA",
    numeric: 800,
    code: "ISO 3166-2:UG"
  },
  provinces: ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo",
    "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale",
    "Kabarole", "Kalangala", "Kampala", "Kamuli", "Kapchorwa", "Kasese",
    "Katakwi", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi",
    "Lira", "Luwero", "Masaka", "Masindi", "Mbale", "Mbarara", "Moroto",
    "Moyo", "Mpigi", "Mubende", "Mukono", "Nakasongola", "Nebbi",
    "Ntungamo", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Soroti",
    "Tororo"
  ]
}, {
  name: "Ukraine",
  ISO: {
    2: "UA",
    3: "UKR",
    numeric: 804,
    code: "ISO 3166-2:UA"
  },
  provinces: ["Avtonomna Respublika Krym (Simferopol')",
    "Cherkas'ka (Cherkasy)", "Chernihivs'ka (Chernihiv)",
    "Chernivets'ka (Chernivtsi)", "Dnipropetrovs'ka (Dnipropetrovs'k)",
    "Donets'ka (Donets'k)", "Ivano-Frankivs'ka (Ivano-Frankivs'k)",
    "Kharkivs'ka (Kharkiv)", "Khersons'ka (Kherson)",
    "Khmel'nyts'ka (Khmel'nyts'kyy)", "Kirovohrads'ka (Kirovohrad)",
    "Kyyiv", "Kyyivs'ka (Kiev)", "L'vivs'ka (L'viv)",
    "Luhans'ka (Luhans'k)", "Mykolayivs'ka (Mykolayiv)", "Odes'ka (Odesa)",
    "Poltavs'ka (Poltava)", "Rivnens'ka (Rivne)", "Sevastopol'",
    "Sums'ka (Sumy)", "Ternopil's'ka (Ternopil')", "Vinnyts'ka (Vinnytsya)",
    "Volyns'ka (Luts'k)", "Zakarpats'ka (Uzhhorod)",
    "Zaporiz'ka (Zaporizhzhya)", "Zhytomyrs'ka (Zhytomyr)"
  ]
}, {
  name: "United Arab Emirates",
  ISO: {
    2: "AE",
    3: "ARE",
    numeric: 784,
    code: "ISO 3166-2:AE"
  },
  provinces: ["'Ajman", "Abu Zaby (Abu Dhabi)", "Al Fujayrah",
    "Ash Shariqah (Sharjah)", "Dubayy (Dubai)", "Ra's al Khaymah",
    "Umm al Qaywayn"
  ]
}, {
  name: "United Kingdom",
  ISO: {
    2: "GB",
    3: "GBR",
    numeric: 826,
    code: "ISO 3166-2:GB"
  },
  provinces: ["Barking and Dagenham", "Barnet", "Barnsley",
    "Bath and North East Somerset", "Bedfordshire", "Bexley", "Birmingham",
    "Blackburn with Darwen", "Blackpool", "Bolton", "Bournemouth",
    "Bracknell Forest", "Bradford", "Brent", "Brighton and Hove", "Bromley",
    "Buckinghamshire", "Bury", "Calderdale", "Cambridgeshire", "Camden",
    "Cheshire", "City of Bristol", "City of Kingston upon Hull",
    "City of London", "Cornwall", "Coventry", "Croydon", "Cumbria",
    "Darlington", "Derby", "Derbyshire", "Devon", "Doncaster", "Dorset",
    "Dudley", "Durham", "Ealing", "East Riding of Yorkshire", "East Sussex",
    "Enfield", "Essex", "Gateshead", "Gloucestershire", "Greenwich",
    "Hackney", "Halton", "Hammersmith and Fulham", "Hampshire", "Haringey",
    "Harrow", "Hartlepool", "Havering", "Herefordshire", "Hertfordshire",
    "Hillingdon", "Hounslow", "Isle of Wight", "Islington",
    "Kensington and Chelsea", "Kent", "Kingston upon Thames", "Kirklees",
    "Knowsley", "Lambeth", "Lancashire", "Leeds", "Leicester",
    "Leicestershire", "Lewisham", "Lincolnshire", "Liverpool", "Luton",
    "Manchester", "Medway", "Merton", "Middlesbrough", "Milton Keynes",
    "Newcastle upon Tyne", "Newham", "Norfolk", "North East Lincolnshire",
    "North Lincolnshire", "North Somerset", "North Tyneside",
    "North Yorkshire", "Northamptonshire", "Northumberland", "Nottingham",
    "Nottinghamshire", "Oldham", "Oxfordshire", "Peterborough", "Plymouth",
    "Poole", "Portsmouth", "Reading", "Redbridge", "Redcar and Cleveland",
    "Richmond upon Thames", "Rochdale", "Rotherham", "Rutland", "Salford",
    "Sandwell", "Sefton", "Sheffield", "Shropshire", "Slough", "Solihull",
    "Somerset", "South Gloucestershire", "South Tyneside", "Southampton",
    "Southend-on-Sea", "Southwark", "St. Helens", "Staffordshire",
    "Stockport", "Stockton-on-Tees", "Stoke-on-Trent", "Suffolk",
    "Sunderland", "Surrey", "Sutton", "Swindon", "Tameside",
    "Telford and Wrekin", "Thurrock", "Torbay", "Tower Hamlets", "Trafford",
    "Wakefield", "Walsall", "Waltham Forest", "Wandsworth", "Warrington",
    "Warwickshire", "West Berkshire", "West Sussex", "Westminster", "Wigan",
    "Wiltshire", "Windsor and Maidenhead", "Wirral", "Wokingham",
    "Wolverhampton", "Worcestershire", "York"
  ]
}, {
  name: "Uruguay",
  ISO: {
    2: "UY",
    3: "URY",
    numeric: 858,
    code: "ISO 3166-2:UY"
  },
  provinces: ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno",
    "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu",
    "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano",
    "Tacuarembo", "Treinta y Tres"
  ]
}, {
  name: "United States of America",
  ISO: {
    2: "US",
    3: "USA",
    numeric: 840,
    code: "ISO 3166-2:US"
  },
  provinces: ["Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "District of Columbia",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
    "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ]
}, {
  name: "Uzbekistan",
  ISO: {
    2: "UZ",
    3: "UZB",
    numeric: 860,
    code: "ISO 3166-2:UZ"
  },
  provinces: ["Andijon Wiloyati", "Bukhoro Wiloyati", "Farghona Wiloyati",
    "Jizzakh Wiloyati", "Khorazm Wiloyati (Urganch)", "Namangan Wiloyati",
    "Nawoiy Wiloyati", "Qashqadaryo Wiloyati (Qarshi)",
    "Qoraqalpoghiston (Nukus)", "Samarqand Wiloyati",
    "Sirdaryo Wiloyati (Guliston)", "Surkhondaryo Wiloyati (Termiz)",
    "Toshkent Shahri", "Toshkent Wiloyati"
  ]
}, {
  name: "Vanuatu",
  ISO: {
    2: "VU",
    3: "VUT",
    numeric: 548,
    code: "ISO 3166-2:VU"
  },
  provinces: ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]
}, {
  name: "Venezuela",
  ISO: {
    2: "VE",
    3: "VEN",
    numeric: 862,
    code: "ISO 3166-2:VE"
  },
  provinces: ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas",
    "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro",
    "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico",
    "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa",
    "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"
  ]
}, {
  name: "Vietnam",
  ISO: {
    2: "VN",
    3: "VNM",
    numeric: 704,
    code: "ISO 3166-2:VN"
  },
  provinces: ["An Giang", "Ba Ria-Vung Tau", "Bac Giang", "Bac Kan",
    "Bac Lieu", "Bac Ninh", "Ben Tre", "Binh Dinh", "Binh Duong",
    "Binh Phuoc", "Binh Thuan", "Ca Mau", "Can Tho", "Cao Bang", "Da Nang",
    "Dac Lak", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Ha Nam",
    "Ha Noi", "Ha Tay", "Ha Tinh", "Hai Duong", "Hai Phong", "Ho Chi Minh",
    "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum",
    "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh",
    "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen",
    "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri",
    "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen",
    "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang",
    "Vinh Long", "Vinh Phuc", "Yen Bai"
  ]
}, {
  name: "Virgin Islands",
  ISO: {
    2: "VI",
    3: "VIR",
    numeric: 850,
    code: "ISO 3166-2:VI"
  },
  provinces: ["Saint Croix", "Saint John", "Saint Thomas"]
}, {
  name: "Wales",
  ISO: {},
  provinces: ["Blaenau Gwent", "Bridgend", "Caerphilly", "Cardiff",
    "Carmarthenshire", "Ceredigion", "Conwy", "Denbighshire", "Flintshire",
    "Gwynedd", "Isle of Anglesey", "Merthyr Tydfil", "Monmouthshire",
    "Neath Port Talbot", "Newport", "Pembrokeshire", "Powys",
    "Rhondda Cynon Taff", "Swansea", "The Vale of Glamorgan", "Torfaen",
    "Wrexham"
  ]
}, {
  name: "Wallis and Futuna",
  I2: "SO",
  {
    3: "WLF",
    numeric: 876,
    code: "ISO 3166-2:WF"
  },
  provinces: ["Alo", "Sigave", "Wallis"]
}, {
  name: "West Bank",
  ISO: {},
  provinces: ["West Bank"]
}, {
  name: "Western Sahara",
  ISO: {
    2: "EH",
    3: "ESH",
    numeric: 732,
    code: "ISO 3166-2:EH"
  },
  provinces: ["Western Sahara"]
}, {
  name: "Yemen",
  ISO: {
    2: "YE",
    3: "YEM",
    numeric: 887,
    code: "ISO 3166-2:YE"
  },
  provinces: ["'Adan", "'Ataq", "Abyan", "Al Bayda'", "Al Hudaydah",
    "Al Jawf", "Al Mahrah", "Al Mahwit", "Dhamar", "Hadhramawt", "Hajjah",
    "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Ta'izz"
  ]
}, {
  name: "Yugoslavia",
  ISO: {},
  provinces: ["Kosovo", "Montenegro", "Serbia", "Vojvodina"]
}, {
  name: "Zambia",
  ISO: {
    2: "ZM",
    3: "ZMB",
    numeric: 894,
    code: "ISO 3166-2:ZM"
  },
  provinces: ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka",
    "North-Western", "Northern", "Southern", "Western"
  ]
}, {
  name: "Zimbabwe",
  ISO: {
    2: "ZW",
    3: "ZWE",
    numeric: 716,
    code: "ISO 3166-2:ZW"
  },
  provinces: ["Bulawayo", "Harare", "ManicalandMashonaland Central",
    "Mashonaland East", "Mashonaland"
  ]
}, ]