//tailwind -i ./Assets/tailwind/input.css -o ./Assets/tailwind/output.css --watch
function toggleMenu(hamMenu) {

  let state = hamMenu.getAttribute("data-state");
  //
  let hamMenuChildren = hamMenu.children;
  let hamMenuFirstDash = hamMenuChildren[0];
  let hamMenuSecondDash = hamMenuChildren[1];
  let hamMenuThirdDash = hamMenuChildren[2];
  let nav = document.querySelectorAll("nav")[0];


  //toggle hamMenu Classlists
  "-rotate-45 translate-y-4".split(" ").forEach(className => hamMenuFirstDash.classList.toggle(className));
  "opacity-0".split(" ").forEach(className => hamMenuSecondDash.classList.toggle(className));
  "rotate-45 -translate-y-1.25".split(" ").forEach(className => hamMenuThirdDash.classList.toggle(className));

  //toggle Nav menu classes
  if (state == "off") {
    //nav.classList.remove("max-h-[0px]");
    nav.classList.add("max-h-[9000px]");
  }
  else {
    nav.classList.remove("max-h-[9000px]");
    //nav.classList.add("max-h-[0px]");
  }

  //
  state == "off" ? hamMenu.setAttribute("data-state", "on") : hamMenu.setAttribute("data-state", "off");
}

let data = JSON.parse(`[
  {
    "ID": 1,
    "FIRM": "AG ANADOLU GRUBU HOLDİNG A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / HOLDING AND INVESTMENT COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.68,
    "Shareholders": 92.85,
    "Disclosure and Transparency": 98.1,
    "Stakeholders": 99.48,
    "Board of Directors": 94.36,
    "ESG SCORE": 81,
    "ENVIRONMENT": 97,
    "Emissions": 99,
    "Resource Use": 97,
    "Innovation": 89,
    "SOCIAL": 91,
    "Human Rights": 84,
    "Product Responsibility": 99,
    "Workforce": 99,
    "Community": 89,
    "GOVERNANCE": 56,
    "Management": 44,
    "Shareholders__1": 73,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 146843226,
    "TOTAL ASSETS": 391799428,
    "TOTAL CURRENT LIABILITIES": 140181632,
    "TOTAL LIABILITIES": 212218070,
    "TOTAL EQUITY": 179581358,
    "OPERATINF PROFIT": 17636339,
    "NET PROFIT": 49262597,
    "ROA": 12.5734223889679,
    "ROE": 27.4319102765667,
    "OPERATING MARGIN": 4.69571748493079,
    "NET PROFIT MARGIN": 13.1162843992735,
    "CURRENT RATIO": 1.04752116168829,
    "ASSET TURNOVER": 0.976157695076973,
    "INVENTORY TURNOVER": 5.56977674245698,
    "RECEIVABLE TURNOVER": 22.469975119211,
    "DEBT TO EQUITY": 1.18173775030702,
    "DEBT TO ASSET": 0.54164976984091
  },
  {
    "ID": 2,
    "FIRM": "AKENERJİ ELEKTRİK ÜRETİM A.Ş.",
    "INDUSTRY": "ELECTRICITY GAS AND WATER / ELECTRICITY GAS AND STEAM",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.58,
    "Shareholders": 95.28,
    "Disclosure and Transparency": 97.76,
    "Stakeholders": 97.43,
    "Board of Directors": 93.45,
    "ESG SCORE": 73,
    "ENVIRONMENT": 77,
    "Emissions": 82,
    "Resource Use": 88,
    "Innovation": 58,
    "SOCIAL": 76,
    "Human Rights": 88,
    "Product Responsibility": 75,
    "Workforce": 84,
    "Community": 57,
    "GOVERNANCE": 63,
    "Management": 55,
    "Shareholders__1": 88,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 2527008192,
    "TOTAL ASSETS": 31949666370,
    "TOTAL CURRENT LIABILITIES": 8223493397,
    "TOTAL LIABILITIES": 18168448472,
    "TOTAL EQUITY": 13781217898,
    "OPERATINF PROFIT": 1337761637,
    "NET PROFIT": 5039858378,
    "ROA": 15.7743693459419,
    "ROE": 36.5704861159725,
    "OPERATING MARGIN": 5.65116523351493,
    "NET PROFIT MARGIN": 21.2900950811109,
    "CURRENT RATIO": 0.307291326204734,
    "ASSET TURNOVER": 0.678737688654949,
    "INVENTORY TURNOVER": 137.500999399923,
    "RECEIVABLE TURNOVER": 10.476523587471,
    "DEBT TO EQUITY": 1.31834853831291,
    "DEBT TO ASSET": 0.568658472410834
  },
  {
    "ID": 3,
    "FIRM": "AKİŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / REAL ESTATE INVESTMENT TRUSTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.37,
    "Shareholders": 94.51,
    "Disclosure and Transparency": 98.27,
    "Stakeholders": 98.68,
    "Board of Directors": 95.35,
    "ESG SCORE": 93,
    "ENVIRONMENT": 94,
    "Emissions": 98,
    "Resource Use": 95,
    "Innovation": 77,
    "SOCIAL": 95,
    "Human Rights": 84,
    "Product Responsibility": 88,
    "Workforce": 99,
    "Community": 98,
    "GOVERNANCE": 89,
    "Management": 94,
    "Shareholders__1": 91,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 1618013143,
    "TOTAL ASSETS": 23931249060,
    "TOTAL CURRENT LIABILITIES": 1729148763,
    "TOTAL LIABILITIES": 3698581035,
    "TOTAL EQUITY": 20232668025,
    "OPERATINF PROFIT": 1567432128,
    "NET PROFIT": 3358458325,
    "ROA": 14.0337778298982,
    "ROE": 16.5991866265497,
    "OPERATING MARGIN": 60.8203108922571,
    "NET PROFIT MARGIN": 130.316634319486,
    "CURRENT RATIO": 0.93572813260602,
    "ASSET TURNOVER": 0.108499327003581,
    "INVENTORY TURNOVER": 1.35908025122089,
    "RECEIVABLE TURNOVER": "",
    "DEBT TO EQUITY": 0.182802437643416,
    "DEBT TO ASSET": 0.154550271309575
  },
  {
    "ID": 4,
    "FIRM": "AKSA AKRİLİK KİMYA SANAYİİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / CHEMICALS, PETROLEUM RUBBER AND PLASTIC PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 97.5,
    "Shareholders": 98.18,
    "Disclosure and Transparency": 98.72,
    "Stakeholders": 98.82,
    "Board of Directors": 95.58,
    "ESG SCORE": 81,
    "ENVIRONMENT": 79,
    "Emissions": 79,
    "Resource Use": 78,
    "Innovation": 80,
    "SOCIAL": 81,
    "Human Rights": 61,
    "Product Responsibility": 97,
    "Workforce": 89,
    "Community": 77,
    "GOVERNANCE": 81,
    "Management": 85,
    "Shareholders__1": 81,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 9773346,
    "TOTAL ASSETS": 25001684,
    "TOTAL CURRENT LIABILITIES": 6890251,
    "TOTAL LIABILITIES": 8267164,
    "TOTAL EQUITY": 16734520,
    "OPERATINF PROFIT": 2619318,
    "NET PROFIT": 1651981,
    "ROA": 6.60747892021993,
    "ROE": 9.87169634982061,
    "OPERATING MARGIN": 10.9445687496414,
    "NET PROFIT MARGIN": 6.90264398122008,
    "CURRENT RATIO": 1.41843105570465,
    "ASSET TURNOVER": 0.950187555434859,
    "INVENTORY TURNOVER": 5.31981687655995,
    "RECEIVABLE TURNOVER": 8.91372091853932,
    "DEBT TO EQUITY": 0.494018591510244,
    "DEBT TO ASSET": 0.330664286453664
  },
  {
    "ID": 5,
    "FIRM": "AKSA ENERJİ ÜRETİM A.Ş.",
    "INDUSTRY": "ELECTRICITY GAS AND WATER / ELECTRICITY GAS AND STEAM",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 91.3,
    "Shareholders": 91.7,
    "Disclosure and Transparency": 95.41,
    "Stakeholders": 96.04,
    "Board of Directors": 86.05,
    "ESG SCORE": 60,
    "ENVIRONMENT": 55,
    "Emissions": 37,
    "Resource Use": 54,
    "Innovation": 78,
    "SOCIAL": 57,
    "Human Rights": 88,
    "Product Responsibility": 75,
    "Workforce": 48,
    "Community": 36,
    "GOVERNANCE": 73,
    "Management": 88,
    "Shareholders__1": 46,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": 17090639573,
    "TOTAL ASSETS": 55806281421,
    "TOTAL CURRENT LIABILITIES": 13766133733,
    "TOTAL LIABILITIES": 21170640364,
    "TOTAL EQUITY": 34635641057,
    "OPERATINF PROFIT": 6779159815,
    "NET PROFIT": 6105843549,
    "ROA": 10.9411403045077,
    "ROE": 17.6287874647725,
    "OPERATING MARGIN": 19.274167511444,
    "NET PROFIT MARGIN": 17.3598284409372,
    "CURRENT RATIO": 1.24149887720693,
    "ASSET TURNOVER": 0.633677368773482,
    "INVENTORY TURNOVER": 45.960080119206,
    "RECEIVABLE TURNOVER": 2.4495216140613,
    "DEBT TO EQUITY": 0.61123858886167,
    "DEBT TO ASSET": 0.37935945246539
  },
  {
    "ID": 6,
    "FIRM": "ALBARAKA TÜRK KATILIM BANKASI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 9.25,
    "Shareholders": 9.29,
    "Disclosure and Transparency": 9.3,
    "Stakeholders": 9.2,
    "Board of Directors": 9.2,
    "ESG SCORE": 80,
    "ENVIRONMENT": 93,
    "Emissions": 99,
    "Resource Use": 95,
    "Innovation": 76,
    "SOCIAL": 80,
    "Human Rights": 74,
    "Product Responsibility": 96,
    "Workforce": 80,
    "Community": 72,
    "GOVERNANCE": 78,
    "Management": 88,
    "Shareholders__1": 57,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": "",
    "TOTAL ASSETS": 233236983,
    "TOTAL CURRENT LIABILITIES": "",
    "TOTAL LIABILITIES": 233236983,
    "TOTAL EQUITY": 14348404,
    "OPERATINF PROFIT": 5665704,
    "NET PROFIT": 4123451,
    "ROA": 1.76792331428845,
    "ROE": 28.7380464057187,
    "OPERATING MARGIN": 17.0673043613006,
    "NET PROFIT MARGIN": 12.4214384012842,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.142982797976969,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 0.317303482377255,
    "DEBT TO EQUITY": 16.2552561943475,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 7,
    "FIRM": "ANADOLU ANONİM TÜRK SİGORTA ŞİRKETİ",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / INSURANCE COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.86,
    "Shareholders": 95.54,
    "Disclosure and Transparency": 97.85,
    "Stakeholders": 96.7,
    "Board of Directors": 94.3,
    "ESG SCORE": 81,
    "ENVIRONMENT": 90,
    "Emissions": 96,
    "Resource Use": 92,
    "Innovation": 71,
    "SOCIAL": 89,
    "Human Rights": 83,
    "Product Responsibility": 97,
    "Workforce": 94,
    "Community": 83,
    "GOVERNANCE": 73,
    "Management": 80,
    "Shareholders__1": 36,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 53381069133,
    "TOTAL ASSETS": 56381517782,
    "TOTAL CURRENT LIABILITIES": 43327376032,
    "TOTAL LIABILITIES": 56381517782,
    "TOTAL EQUITY": 12217135544,
    "OPERATINF PROFIT": "",
    "NET PROFIT": 6380159747,
    "ROA": 11.3160482335169,
    "ROE": 52.2230413505839,
    "OPERATING MARGIN": "",
    "NET PROFIT MARGIN": 17.9630285594623,
    "CURRENT RATIO": 1.23204020233246,
    "ASSET TURNOVER": 0.827971480429764,
    "INVENTORY TURNOVER": 12994.3160371863,
    "RECEIVABLE TURNOVER": 4.19137034431032,
    "DEBT TO EQUITY": 4.61495393735643,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 8,
    "FIRM": "ANADOLU EFES BİRACILIK VE MALT SANAYİİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / FOOD, BEVERAGE AND TOBACCO",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.67,
    "Shareholders": 95.41,
    "Disclosure and Transparency": 98.79,
    "Stakeholders": 99.51,
    "Board of Directors": 94.84,
    "ESG SCORE": 81,
    "ENVIRONMENT": 73,
    "Emissions": 75,
    "Resource Use": 77,
    "Innovation": 52,
    "SOCIAL": 93,
    "Human Rights": 90,
    "Product Responsibility": 99,
    "Workforce": 90,
    "Community": 96,
    "GOVERNANCE": 68,
    "Management": 77,
    "Shareholders__1": 29,
    "CSR Strategy": 84,
    "TOTAL CURRENT ASSETS": 90128134,
    "TOTAL ASSETS": 265225686,
    "TOTAL CURRENT LIABILITIES": 78497398,
    "TOTAL LIABILITIES": 135347791,
    "TOTAL EQUITY": 129877895,
    "OPERATINF PROFIT": 19564617,
    "NET PROFIT": 33541789,
    "ROA": 12.6465085285895,
    "ROE": 25.825633376642,
    "OPERATING MARGIN": 12.2372771233283,
    "NET PROFIT MARGIN": 20.9797190103545,
    "CURRENT RATIO": 1.14816715326029,
    "ASSET TURNOVER": 0.599385649722147,
    "INVENTORY TURNOVER": 4.16641944344408,
    "RECEIVABLE TURNOVER": 11.2689201940279,
    "DEBT TO EQUITY": 1.04211568104026,
    "DEBT TO ASSET": 0.510311776514738
  },
  {
    "ID": 9,
    "FIRM": "ANADOLU ISUZU OTOMOTİV SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.52,
    "Shareholders": 89.54,
    "Disclosure and Transparency": 98.46,
    "Stakeholders": 99.48,
    "Board of Directors": 93.15,
    "ESG SCORE": 71,
    "ENVIRONMENT": 91,
    "Emissions": 96,
    "Resource Use": 69,
    "Innovation": 98,
    "SOCIAL": 76,
    "Human Rights": 63,
    "Product Responsibility": 96,
    "Workforce": 89,
    "Community": 63,
    "GOVERNANCE": 42,
    "Management": 28,
    "Shareholders__1": 64,
    "CSR Strategy": 77,
    "TOTAL CURRENT ASSETS": 11130397056,
    "TOTAL ASSETS": 19099501671,
    "TOTAL CURRENT LIABILITIES": 9245405729,
    "TOTAL LIABILITIES": 10845375573,
    "TOTAL EQUITY": 8254126098,
    "OPERATINF PROFIT": 815999594,
    "NET PROFIT": 1614217374,
    "ROA": 8.45162037107476,
    "ROE": 19.5564903520329,
    "OPERATING MARGIN": 5.37735396391547,
    "NET PROFIT MARGIN": 10.6375275901181,
    "CURRENT RATIO": 1.20388411090358,
    "ASSET TURNOVER": 0.794509842580908,
    "INVENTORY TURNOVER": 3.94427451024091,
    "RECEIVABLE TURNOVER": 6.38856758140777,
    "DEBT TO EQUITY": 1.31393383675443,
    "DEBT TO ASSET": 0.567835525754435
  },
  {
    "ID": 10,
    "FIRM": "ARÇELİK A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.86,
    "Shareholders": 95.77,
    "Disclosure and Transparency": 98.79,
    "Stakeholders": 99.48,
    "Board of Directors": 95.15,
    "ESG SCORE": 88,
    "ENVIRONMENT": 98,
    "Emissions": 96,
    "Resource Use": 99,
    "Innovation": 98,
    "SOCIAL": 94,
    "Human Rights": 92,
    "Product Responsibility": 84,
    "Workforce": 99,
    "Community": 99,
    "GOVERNANCE": 68,
    "Management": 79,
    "Shareholders__1": 34,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 171321937,
    "TOTAL ASSETS": 258137907,
    "TOTAL CURRENT LIABILITIES": 137801099,
    "TOTAL LIABILITIES": 198574568,
    "TOTAL EQUITY": 59563339,
    "OPERATINF PROFIT": 10157657,
    "NET PROFIT": 8395410,
    "ROA": 3.25229645563059,
    "ROE": 14.0949284256882,
    "OPERATING MARGIN": 3.95080096443094,
    "NET PROFIT MARGIN": 3.2653784159864,
    "CURRENT RATIO": 1.24325522977143,
    "ASSET TURNOVER": 1.04820467024203,
    "INVENTORY TURNOVER": 3.69664953619825,
    "RECEIVABLE TURNOVER": 4.19511215516559,
    "DEBT TO EQUITY": 3.33383875608451,
    "DEBT TO ASSET": 0.76925768209626
  },
  {
    "ID": 11,
    "FIRM": "ASELSAN ELEKTRONİK SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "TECHNOLOGY / DEFENSE",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.11,
    "Shareholders": 89.59,
    "Disclosure and Transparency": 98.72,
    "Stakeholders": 99.17,
    "Board of Directors": 94.37,
    "ESG SCORE": 88,
    "ENVIRONMENT": 96,
    "Emissions": 100,
    "Resource Use": 92,
    "Innovation": 96,
    "SOCIAL": 94,
    "Human Rights": 87,
    "Product Responsibility": 98,
    "Workforce": 97,
    "Community": 98,
    "GOVERNANCE": 72,
    "Management": 73,
    "Shareholders__1": 66,
    "CSR Strategy": 81,
    "TOTAL CURRENT ASSETS": 72883922,
    "TOTAL ASSETS": 150577885,
    "TOTAL CURRENT LIABILITIES": 50178593,
    "TOTAL LIABILITIES": 62197507,
    "TOTAL EQUITY": 88380378,
    "OPERATINF PROFIT": 24973743,
    "NET PROFIT": 7374265,
    "ROA": 4.89730945550205,
    "ROE": 8.34378078808398,
    "OPERATING MARGIN": 33.9350477534656,
    "NET PROFIT MARGIN": 10.0203655864365,
    "CURRENT RATIO": 1.45249034782621,
    "ASSET TURNOVER": 0.498291329388717,
    "INVENTORY TURNOVER": 1.78815291892488,
    "RECEIVABLE TURNOVER": 1.36285058780693,
    "DEBT TO EQUITY": 0.70374791789191,
    "DEBT TO ASSET": 0.413058710447421
  },
  {
    "ID": 12,
    "FIRM": "AYDEM YENİLENEBİLİR ENERJİ A.Ş.",
    "INDUSTRY": "ELECTRICITY GAS AND WATER / ELECTRICITY GAS AND STEAM",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.56,
    "Shareholders": 92.07,
    "Disclosure and Transparency": 98.79,
    "Stakeholders": 99.24,
    "Board of Directors": 94.18,
    "ESG SCORE": 73,
    "ENVIRONMENT": 88,
    "Emissions": 100,
    "Resource Use": 85,
    "Innovation": 75,
    "SOCIAL": 75,
    "Human Rights": 45,
    "Product Responsibility": 75,
    "Workforce": 74,
    "Community": 99,
    "GOVERNANCE": 47,
    "Management": 42,
    "Shareholders__1": 55,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 4738377445,
    "TOTAL ASSETS": 55606785506,
    "TOTAL CURRENT LIABILITIES": 2086718514,
    "TOTAL LIABILITIES": 26986010382,
    "TOTAL EQUITY": 28620775124,
    "OPERATINF PROFIT": 3057416254,
    "NET PROFIT": -1280100539,
    "ROA": -2.30205815234883,
    "ROE": -4.47262708104145,
    "OPERATING MARGIN": 48.0815175092538,
    "NET PROFIT MARGIN": -20.1311078918382,
    "CURRENT RATIO": 2.27073149215371,
    "ASSET TURNOVER": 0.110209384925057,
    "INVENTORY TURNOVER": 172.35177504295,
    "RECEIVABLE TURNOVER": 3.06458267487782,
    "DEBT TO EQUITY": 0.942881884403293,
    "DEBT TO ASSET": 0.485300672147075
  },
  {
    "ID": 13,
    "FIRM": "AYGAZ A.Ş.",
    "INDUSTRY": "MANUFACTURING / CHEMICALS, PETROLEUM RUBBER AND PLASTIC PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.57,
    "Shareholders": 95.9,
    "Disclosure and Transparency": 97.25,
    "Stakeholders": 99.51,
    "Board of Directors": 95.31,
    "ESG SCORE": 78,
    "ENVIRONMENT": 72,
    "Emissions": 90,
    "Resource Use": 93,
    "Innovation": 25,
    "SOCIAL": 90,
    "Human Rights": 91,
    "Product Responsibility": 97,
    "Workforce": 89,
    "Community": 82,
    "GOVERNANCE": 66,
    "Management": 74,
    "Shareholders__1": 61,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": 10143202,
    "TOTAL ASSETS": 46188584,
    "TOTAL CURRENT LIABILITIES": 9035505,
    "TOTAL LIABILITIES": 9665273,
    "TOTAL EQUITY": 36523311,
    "OPERATINF PROFIT": 211439,
    "NET PROFIT": 5540645,
    "ROA": 11.9957022280657,
    "ROE": 15.1701607775922,
    "OPERATING MARGIN": 0.32612039442801,
    "NET PROFIT MARGIN": 8.54580911177967,
    "CURRENT RATIO": 1.12259381185667,
    "ASSET TURNOVER": 1.41006880547086,
    "INVENTORY TURNOVER": 20.5272047334194,
    "RECEIVABLE TURNOVER": 16.0768113013151,
    "DEBT TO EQUITY": 0.264632990147032,
    "DEBT TO ASSET": 0.209256750542515
  },
  {
    "ID": 14,
    "FIRM": "COCA-COLA İÇECEK A.Ş.",
    "INDUSTRY": "MANUFACTURING / FOOD, BEVERAGE AND TOBACCO",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.81,
    "Shareholders": 89.25,
    "Disclosure and Transparency": 98.82,
    "Stakeholders": 99.48,
    "Board of Directors": 93.92,
    "ESG SCORE": 76,
    "ENVIRONMENT": 85,
    "Emissions": 89,
    "Resource Use": 92,
    "Innovation": 52,
    "SOCIAL": 88,
    "Human Rights": 90,
    "Product Responsibility": 99,
    "Workforce": 75,
    "Community": 87,
    "GOVERNANCE": 42,
    "Management": 29,
    "Shareholders__1": 55,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 48254432,
    "TOTAL ASSETS": 110157984,
    "TOTAL CURRENT LIABILITIES": 41507910,
    "TOTAL LIABILITIES": 65203205,
    "TOTAL EQUITY": 44954779,
    "OPERATINF PROFIT": 14474950,
    "NET PROFIT": 21160546,
    "ROA": 19.2092712953062,
    "ROE": 47.07073746264,
    "OPERATING MARGIN": 14.3256228589553,
    "NET PROFIT MARGIN": 20.9422486078069,
    "CURRENT RATIO": 1.16253581546264,
    "ASSET TURNOVER": 0.92947909819137,
    "INVENTORY TURNOVER": 5.62576578275122,
    "RECEIVABLE TURNOVER": 13.5289573997163,
    "DEBT TO EQUITY": 1.45041765192528,
    "DEBT TO ASSET": 0.59190630249733
  },
  {
    "ID": 15,
    "FIRM": "DOĞAN ŞİRKETLER GRUBU HOLDİNG A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / HOLDING AND INVESTMENT COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.71,
    "Shareholders": 95.48,
    "Disclosure and Transparency": 98.85,
    "Stakeholders": 93.96,
    "Board of Directors": 94.37,
    "ESG SCORE": 72,
    "ENVIRONMENT": 83,
    "Emissions": 91,
    "Resource Use": 84,
    "Innovation": 43,
    "SOCIAL": 86,
    "Human Rights": 84,
    "Product Responsibility": 84,
    "Workforce": 69,
    "Community": 95,
    "GOVERNANCE": 50,
    "Management": 42,
    "Shareholders__1": 42,
    "CSR Strategy": 97,
    "TOTAL CURRENT ASSETS": 57961088,
    "TOTAL ASSETS": 93417723,
    "TOTAL CURRENT LIABILITIES": 28780309,
    "TOTAL LIABILITIES": 38121130,
    "TOTAL EQUITY": 55296593,
    "OPERATINF PROFIT": 11504859,
    "NET PROFIT": 16117,
    "ROA": 0.0172526149026347,
    "ROE": 0.0291464611572,
    "OPERATING MARGIN": 21.8867325167665,
    "NET PROFIT MARGIN": 0.0306608249586306,
    "CURRENT RATIO": 2.01391472204138,
    "ASSET TURNOVER": 0.593211516348734,
    "INVENTORY TURNOVER": 5.43531243153562,
    "RECEIVABLE TURNOVER": 4.85804742814952,
    "DEBT TO EQUITY": 0.689393829381134,
    "DEBT TO ASSET": 0.408071710332738
  },
  {
    "ID": 16,
    "FIRM": "DOĞUŞ OTOMOTİV SERVİS VE TİCARET A.Ş.",
    "INDUSTRY": "WHOLESALE AND RETAIL TRADE / WHOLESALE TRADE",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 97.6,
    "Shareholders": 97.5,
    "Disclosure and Transparency": 97.86,
    "Stakeholders": 99.06,
    "Board of Directors": 96.97,
    "ESG SCORE": 70,
    "ENVIRONMENT": 56,
    "Emissions": 84,
    "Resource Use": 88,
    "Innovation": 23,
    "SOCIAL": 80,
    "Human Rights": 58,
    "Product Responsibility": 92,
    "Workforce": 95,
    "Community": 87,
    "GOVERNANCE": 73,
    "Management": 64,
    "Shareholders__1": 93,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 33214459,
    "TOTAL ASSETS": 67866864,
    "TOTAL CURRENT LIABILITIES": 18448237,
    "TOTAL LIABILITIES": 26021274,
    "TOTAL EQUITY": 41845590,
    "OPERATINF PROFIT": 26630904,
    "NET PROFIT": 19762150,
    "ROA": 29.1189968642134,
    "ROE": 47.2263624434498,
    "OPERATING MARGIN": 17.8437637670132,
    "NET PROFIT MARGIN": 13.241425680791,
    "CURRENT RATIO": 1.80041371975002,
    "ASSET TURNOVER": 2.54124608984804,
    "INVENTORY TURNOVER": 13.1677029897893,
    "RECEIVABLE TURNOVER": 16.2178635271863,
    "DEBT TO EQUITY": 0.621840294281906,
    "DEBT TO ASSET": 0.383416478474679
  },
  {
    "ID": 17,
    "FIRM": "ENERJİSA ENERJİ A.Ş.",
    "INDUSTRY": "ELECTRICITY GAS AND WATER / ELECTRICITY GAS AND STEAM",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.32,
    "Shareholders": 95.16,
    "Disclosure and Transparency": 98.79,
    "Stakeholders": 99.51,
    "Board of Directors": 94.02,
    "ESG SCORE": 87,
    "ENVIRONMENT": 81,
    "Emissions": 91,
    "Resource Use": 99,
    "Innovation": 47,
    "SOCIAL": 92,
    "Human Rights": 88,
    "Product Responsibility": 92,
    "Workforce": 98,
    "Community": 85,
    "GOVERNANCE": 93,
    "Management": 95,
    "Shareholders__1": 86,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 40685994,
    "TOTAL ASSETS": 132096404,
    "TOTAL CURRENT LIABILITIES": 48003993,
    "TOTAL LIABILITIES": 74321938,
    "TOTAL EQUITY": 57774466,
    "OPERATINF PROFIT": 14895975,
    "NET PROFIT": 4517326,
    "ROA": 3.41971913179408,
    "ROE": 7.81889701931646,
    "OPERATING MARGIN": 8.83171190376188,
    "NET PROFIT MARGIN": 2.67828871942743,
    "CURRENT RATIO": 0.847554369070923,
    "ASSET TURNOVER": 1.30636354423644,
    "INVENTORY TURNOVER": 40.6203948725998,
    "RECEIVABLE TURNOVER": 13.5448735276398,
    "DEBT TO EQUITY": 1.28641497093197,
    "DEBT TO ASSET": 0.56263407442946
  },
  {
    "ID": 18,
    "FIRM": "ENKA İNŞAAT VE SANAYİ A.Ş.",
    "INDUSTRY": "CONSTRUCTION AND PUBLIC WORKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 93.11,
    "Shareholders": 95.43,
    "Disclosure and Transparency": 96.07,
    "Stakeholders": 97.43,
    "Board of Directors": 87.49,
    "ESG SCORE": 87,
    "ENVIRONMENT": 92,
    "Emissions": 97,
    "Resource Use": 95,
    "Innovation": 86,
    "SOCIAL": 96,
    "Human Rights": 95,
    "Product Responsibility": 99,
    "Workforce": 92,
    "Community": 99,
    "GOVERNANCE": 68,
    "Management": 69,
    "Shareholders__1": 72,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 119155259,
    "TOTAL ASSETS": 276940651,
    "TOTAL CURRENT LIABILITIES": 41803971,
    "TOTAL LIABILITIES": 58406914,
    "TOTAL EQUITY": 218533737,
    "OPERATINF PROFIT": 12961162,
    "NET PROFIT": 17686528,
    "ROA": 6.38639648463887,
    "ROE": 8.09327120050119,
    "OPERATING MARGIN": 16.8847982242328,
    "NET PROFIT MARGIN": 23.0406391469564,
    "CURRENT RATIO": 2.85033350061409,
    "ASSET TURNOVER": 0.351008046898016,
    "INVENTORY TURNOVER": 9.0455415365923,
    "RECEIVABLE TURNOVER": 9.27839899502353,
    "DEBT TO EQUITY": 0.267267264092958,
    "DEBT TO ASSET": 0.210900471957076
  },
  {
    "ID": 19,
    "FIRM": "EREĞLİ DEMİR VE ÇELİK FABRİKALARI T.A.Ş.",
    "INDUSTRY": "MANUFACTURING / BASIC METAL",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.5,
    "Shareholders": 95.67,
    "Disclosure and Transparency": 98.82,
    "Stakeholders": 98.63,
    "Board of Directors": 94.47,
    "ESG SCORE": 65,
    "ENVIRONMENT": 59,
    "Emissions": 88,
    "Resource Use": 44,
    "Innovation": 0,
    "SOCIAL": 67,
    "Human Rights": 65,
    "Product Responsibility": 89,
    "Workforce": 64,
    "Community": 68,
    "GOVERNANCE": 67,
    "Management": 71,
    "Shareholders__1": 85,
    "CSR Strategy": 22,
    "TOTAL CURRENT ASSETS": 134518116,
    "TOTAL ASSETS": 310033249,
    "TOTAL CURRENT LIABILITIES": 89291663,
    "TOTAL LIABILITIES": 118504367,
    "TOTAL EQUITY": 191528882,
    "OPERATINF PROFIT": 13334560,
    "NET PROFIT": 4329064,
    "ROA": 1.39632249572045,
    "ROE": 2.2602669397924,
    "OPERATING MARGIN": 9.01594236183916,
    "NET PROFIT MARGIN": 2.92702507654642,
    "CURRENT RATIO": 1.5065025275652,
    "ASSET TURNOVER": 0.610050924433451,
    "INVENTORY TURNOVER": 2.39897814136758,
    "RECEIVABLE TURNOVER": 8.22686785345475,
    "DEBT TO EQUITY": 0.618728443264238,
    "DEBT TO ASSET": 0.382231155471973
  },
  {
    "ID": 20,
    "FIRM": "FORD OTOMOTİV SANAYİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.2,
    "Shareholders": 93.85,
    "Disclosure and Transparency": 94.57,
    "Stakeholders": 95.64,
    "Board of Directors": 93.55,
    "ESG SCORE": 84,
    "ENVIRONMENT": 87,
    "Emissions": 85,
    "Resource Use": 96,
    "Innovation": 83,
    "SOCIAL": 92,
    "Human Rights": 88,
    "Product Responsibility": 82,
    "Workforce": 99,
    "Community": 100,
    "GOVERNANCE": 64,
    "Management": 58,
    "Shareholders__1": 88,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 102969262,
    "TOTAL ASSETS": 217007029,
    "TOTAL CURRENT LIABILITIES": 94133906,
    "TOTAL LIABILITIES": 143999484,
    "TOTAL EQUITY": 73007545,
    "OPERATINF PROFIT": 44016841,
    "NET PROFIT": 49055669,
    "ROA": 22.6055668454868,
    "ROE": 67.1926018057449,
    "OPERATING MARGIN": 10.6861373711478,
    "NET PROFIT MARGIN": 11.9094329774269,
    "CURRENT RATIO": 1.09385944316387,
    "ASSET TURNOVER": 2.10524450549729,
    "INVENTORY TURNOVER": 15.1776456397206,
    "RECEIVABLE TURNOVER": 18.738886743004,
    "DEBT TO EQUITY": 1.97239181238049,
    "DEBT TO ASSET": 0.663570597982796
  },
  {
    "ID": 21,
    "FIRM": "GLOBAL YATIRIM HOLDİNG A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / HOLDING AND INVESTMENT COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 92.6,
    "Shareholders": 90.27,
    "Disclosure and Transparency": 96.68,
    "Stakeholders": 92.86,
    "Board of Directors": 91.31,
    "ESG SCORE": 62,
    "ENVIRONMENT": 57,
    "Emissions": 66,
    "Resource Use": 51,
    "Innovation": 43,
    "SOCIAL": 76,
    "Human Rights": 84,
    "Product Responsibility": 67,
    "Workforce": 83,
    "Community": 72,
    "GOVERNANCE": 57,
    "Management": 49,
    "Shareholders__1": 91,
    "CSR Strategy": 46,
    "TOTAL CURRENT ASSETS": 326413281,
    "TOTAL ASSETS": 9159539055,
    "TOTAL CURRENT LIABILITIES": 390564400,
    "TOTAL LIABILITIES": 2126743969,
    "TOTAL EQUITY": 7032795086,
    "OPERATINF PROFIT": 1472618019,
    "NET PROFIT": 623547735,
    "ROA": 6.80763225371716,
    "ROE": 8.86628612628399,
    "OPERATING MARGIN": 40886407.8928737,
    "NET PROFIT MARGIN": 17312450.8222438,
    "CURRENT RATIO": 0.835747653908037,
    "ASSET TURNOVER": 8.08986220364329e-8,
    "INVENTORY TURNOVER": 0.00000453136383989292,
    "RECEIVABLE TURNOVER": 0.00000189822232048616,
    "DEBT TO EQUITY": 0.302403801474844,
    "DEBT TO ASSET": 0.23218897329108
  },
  {
    "ID": 22,
    "FIRM": "İSKENDERUN DEMİR VE ÇELİK A.Ş.",
    "INDUSTRY": "MANUFACTURING / BASIC METAL",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.5,
    "Shareholders": 95.67,
    "Disclosure and Transparency": 98.82,
    "Stakeholders": 98.63,
    "Board of Directors": 94.47,
    "ESG SCORE": 58,
    "ENVIRONMENT": 56,
    "Emissions": 86,
    "Resource Use": 39,
    "Innovation": 0,
    "SOCIAL": 67,
    "Human Rights": 65,
    "Product Responsibility": 89,
    "Workforce": 51,
    "Community": 87,
    "GOVERNANCE": 45,
    "Management": 55,
    "Shareholders__1": 31,
    "CSR Strategy": 22,
    "TOTAL CURRENT ASSETS": 57495472,
    "TOTAL ASSETS": 135571219,
    "TOTAL CURRENT LIABILITIES": 37701321,
    "TOTAL LIABILITIES": 49568501,
    "TOTAL EQUITY": 86002718,
    "OPERATINF PROFIT": 7457446,
    "NET PROFIT": 4601547,
    "ROA": 3.39419165361344,
    "ROE": 5.35046694687021,
    "OPERATING MARGIN": 8.85395804828359,
    "NET PROFIT MARGIN": 5.46325164073668,
    "CURRENT RATIO": 1.52502539632497,
    "ASSET TURNOVER": 19.4635836806528,
    "INVENTORY TURNOVER": 8.03201007918798,
    "RECEIVABLE TURNOVER": 40.4283233075218,
    "DEBT TO EQUITY": 0.576359702957295,
    "DEBT TO ASSET": 0.3656270214698
  },
  {
    "ID": 23,
    "FIRM": "İŞ FİNANSAL KİRALAMA A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / FINANCIAL LEASING AND FACTORING COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 92.91,
    "Shareholders": 88.62,
    "Disclosure and Transparency": 97.21,
    "Stakeholders": 94.24,
    "Board of Directors": 92.34,
    "ESG SCORE": 63,
    "ENVIRONMENT": 81,
    "Emissions": 97,
    "Resource Use": 96,
    "Innovation": 50,
    "SOCIAL": 51,
    "Human Rights": 52,
    "Product Responsibility": 26,
    "Workforce": 74,
    "Community": 32,
    "GOVERNANCE": 78,
    "Management": 94,
    "Shareholders__1": 51,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": "",
    "TOTAL ASSETS": 51557546,
    "TOTAL CURRENT LIABILITIES": "",
    "TOTAL LIABILITIES": 51557546,
    "TOTAL EQUITY": 6769900,
    "OPERATINF PROFIT": "",
    "NET PROFIT": 2019452,
    "ROA": 3.91688929492494,
    "ROE": 29.8298645474822,
    "OPERATING MARGIN": "",
    "NET PROFIT MARGIN": 24.6836729542775,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.186176995908127,
    "INVENTORY TURNOVER": 0.556971751141433,
    "RECEIVABLE TURNOVER": 3.9269631330931,
    "DEBT TO EQUITY": 7.61570274302427,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 24,
    "FIRM": "KALEKİM KİMYEVİ MADDELER SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / NON-METALLIC MINERAL PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 92.07,
    "Shareholders": 92.93,
    "Disclosure and Transparency": 91.44,
    "Stakeholders": 96.32,
    "Board of Directors": 90.07,
    "ESG SCORE": 80,
    "ENVIRONMENT": 86,
    "Emissions": 78,
    "Resource Use": 89,
    "Innovation": 89,
    "SOCIAL": 74,
    "Human Rights": 82,
    "Product Responsibility": 26,
    "Workforce": 98,
    "Community": 74,
    "GOVERNANCE": 80,
    "Management": 98,
    "Shareholders__1": 59,
    "CSR Strategy": 22,
    "TOTAL CURRENT ASSETS": 2281772093,
    "TOTAL ASSETS": 3859138689,
    "TOTAL CURRENT LIABILITIES": 1236415404,
    "TOTAL LIABILITIES": 1333969925,
    "TOTAL EQUITY": 2525168764,
    "OPERATINF PROFIT": 936656859,
    "NET PROFIT": 454898571,
    "ROA": 11.7875673216055,
    "ROE": 18.01458094545,
    "OPERATING MARGIN": 20.0651465776972,
    "NET PROFIT MARGIN": 9.74487766506604,
    "CURRENT RATIO": 1.84547368596194,
    "ASSET TURNOVER": 1.2873605267635,
    "INVENTORY TURNOVER": 7.91396324549257,
    "RECEIVABLE TURNOVER": 5.46248340493706,
    "DEBT TO EQUITY": 0.528269612715675,
    "DEBT TO ASSET": 0.345665194361197
  },
  {
    "ID": 25,
    "FIRM": "KİMTEKS POLİÜRETAN SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / CHEMICALS, PETROLEUM RUBBER AND PLASTIC PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 93.2,
    "Shareholders": 89.1,
    "Disclosure and Transparency": 95.53,
    "Stakeholders": 98.13,
    "Board of Directors": 92.35,
    "ESG SCORE": 82,
    "ENVIRONMENT": 96,
    "Emissions": 98,
    "Resource Use": 94,
    "Innovation": 96,
    "SOCIAL": 78,
    "Human Rights": 65,
    "Product Responsibility": 79,
    "Workforce": 93,
    "Community": 82,
    "GOVERNANCE": 64,
    "Management": 59,
    "Shareholders__1": 97,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": 7661601231,
    "TOTAL ASSETS": 8887682793,
    "TOTAL CURRENT LIABILITIES": 5697894696,
    "TOTAL LIABILITIES": 6169540391,
    "TOTAL EQUITY": 2718142402,
    "OPERATINF PROFIT": 1646139949,
    "NET PROFIT": 604912879,
    "ROA": 6.80619339246033,
    "ROE": 22.25464267637,
    "OPERATING MARGIN": 15.4827259358514,
    "NET PROFIT MARGIN": 5.6894921518145,
    "CURRENT RATIO": 1.344637210719,
    "ASSET TURNOVER": 1.28022508491086,
    "INVENTORY TURNOVER": 8.99360489993758,
    "RECEIVABLE TURNOVER": 3.06460022761528,
    "DEBT TO EQUITY": 2.26976349232493,
    "DEBT TO ASSET": 0.69416748264904
  },
  {
    "ID": 26,
    "FIRM": "KONTROLMATİK TEKNOLOJİ ENERJİ VE MÜHENDİSLİK A.Ş.",
    "INDUSTRY": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES / ARCHITECTURAL AND ENGINEERING ACTIVITIES, TECHNICAL TESTING AND ANALYSIS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.17,
    "Shareholders": 95.59,
    "Disclosure and Transparency": 94.55,
    "Stakeholders": 94.87,
    "Board of Directors": 92.57,
    "ESG SCORE": 72,
    "ENVIRONMENT": 83,
    "Emissions": 96,
    "Resource Use": 84,
    "Innovation": 69,
    "SOCIAL": 80,
    "Human Rights": 95,
    "Product Responsibility": 86,
    "Workforce": 58,
    "Community": 83,
    "GOVERNANCE": 46,
    "Management": 43,
    "Shareholders__1": 45,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 5334972951,
    "TOTAL ASSETS": 11622164447,
    "TOTAL CURRENT LIABILITIES": 4101538869,
    "TOTAL LIABILITIES": 7933705552,
    "TOTAL EQUITY": 3688458895,
    "OPERATINF PROFIT": 434957118,
    "NET PROFIT": 430537093,
    "ROA": 3.70444846967497,
    "ROE": 11.6725468618785,
    "OPERATING MARGIN": 10.9675815989292,
    "NET PROFIT MARGIN": 10.8561292675368,
    "CURRENT RATIO": 1.3007247087971,
    "ASSET TURNOVER": 0.418361570929794,
    "INVENTORY TURNOVER": 4.0936709240407,
    "RECEIVABLE TURNOVER": 2.94226680837666,
    "DEBT TO EQUITY": 2.15095403740429,
    "DEBT TO ASSET": 0.682635802322338
  },
  {
    "ID": 27,
    "FIRM": "LOGO YAZILIM SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "TECHNOLOGY / INFORMATION TECHNOLOGY",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.81,
    "Shareholders": 90.94,
    "Disclosure and Transparency": 97.82,
    "Stakeholders": 98.78,
    "Board of Directors": 93.73,
    "ESG SCORE": 75,
    "ENVIRONMENT": 64,
    "Emissions": 96,
    "Resource Use": 58,
    "Innovation": 53,
    "SOCIAL": 84,
    "Human Rights": 71,
    "Product Responsibility": 78,
    "Workforce": 94,
    "Community": 89,
    "GOVERNANCE": 71,
    "Management": 76,
    "Shareholders__1": 50,
    "CSR Strategy": 77,
    "TOTAL CURRENT ASSETS": 1715043,
    "TOTAL ASSETS": 5343020,
    "TOTAL CURRENT LIABILITIES": 2584822,
    "TOTAL LIABILITIES": 3040275,
    "TOTAL EQUITY": 2302745,
    "OPERATINF PROFIT": 294316,
    "NET PROFIT": 130053,
    "ROA": 2.43407286515866,
    "ROE": 5.64773780857194,
    "OPERATING MARGIN": 9.89188418890287,
    "NET PROFIT MARGIN": 4.37104749459555,
    "CURRENT RATIO": 0.663505262644778,
    "ASSET TURNOVER": 0.580898757287035,
    "INVENTORY TURNOVER": 21.9672033036088,
    "RECEIVABLE TURNOVER": 4.10320455977813,
    "DEBT TO EQUITY": 1.3202829666333,
    "DEBT TO ASSET": 0.569018083406014
  },
  {
    "ID": 28,
    "FIRM": "MİGROS TİCARET A.Ş.",
    "INDUSTRY": "WHOLESALE AND RETAIL TRADE / CONSUMER TRADE",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.74,
    "Shareholders": 95.83,
    "Disclosure and Transparency": 98.45,
    "Stakeholders": 99.51,
    "Board of Directors": 94.97,
    "ESG SCORE": 88,
    "ENVIRONMENT": 92,
    "Emissions": 93,
    "Resource Use": 100,
    "Innovation": 76,
    "SOCIAL": 94,
    "Human Rights": 91,
    "Product Responsibility": 100,
    "Workforce": 98,
    "Community": 82,
    "GOVERNANCE": 76,
    "Management": 73,
    "Shareholders__1": 96,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 37875773,
    "TOTAL ASSETS": 92129481,
    "TOTAL CURRENT LIABILITIES": 44895539,
    "TOTAL LIABILITIES": 55875344,
    "TOTAL EQUITY": 36254137,
    "OPERATINF PROFIT": -6610061,
    "NET PROFIT": 8905395,
    "ROA": 9.6661729810461,
    "ROE": 24.5638035736446,
    "OPERATING MARGIN": -3.63841206697234,
    "NET PROFIT MARGIN": 4.90184532777461,
    "CURRENT RATIO": 0.843642238040621,
    "ASSET TURNOVER": 2.09121925341802,
    "INVENTORY TURNOVER": 7.29791601926509,
    "RECEIVABLE TURNOVER": 309.796876185669,
    "DEBT TO EQUITY": 1.54121291040523,
    "DEBT TO ASSET": 0.606487124354907
  },
  {
    "ID": 29,
    "FIRM": "OTOKAR OTOMOTİV VE SAVUNMA SANAYİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.6,
    "Shareholders": 95.92,
    "Disclosure and Transparency": 96.19,
    "Stakeholders": 97.13,
    "Board of Directors": 94.3,
    "ESG SCORE": 74,
    "ENVIRONMENT": 79,
    "Emissions": 93,
    "Resource Use": 69,
    "Innovation": 76,
    "SOCIAL": 94,
    "Human Rights": 90,
    "Product Responsibility": 93,
    "Workforce": 94,
    "Community": 99,
    "GOVERNANCE": 43,
    "Management": 38,
    "Shareholders__1": 74,
    "CSR Strategy": 22,
    "TOTAL CURRENT ASSETS": 24092387,
    "TOTAL ASSETS": 32484677,
    "TOTAL CURRENT LIABILITIES": 20908042,
    "TOTAL LIABILITIES": 24181534,
    "TOTAL EQUITY": 8303143,
    "OPERATINF PROFIT": 2492045,
    "NET PROFIT": 1967962,
    "ROA": 6.058123957951,
    "ROE": 23.7014104177177,
    "OPERATING MARGIN": 9.14885233354483,
    "NET PROFIT MARGIN": 7.22482689358641,
    "CURRENT RATIO": 1.15230240115263,
    "ASSET TURNOVER": 0.92152442166258,
    "INVENTORY TURNOVER": 2.86835377904517,
    "RECEIVABLE TURNOVER": 3.18363732533324,
    "DEBT TO EQUITY": 2.91233500374497,
    "DEBT TO ASSET": 0.744398166557112
  },
  {
    "ID": 30,
    "FIRM": "PEGASUS HAVA TAŞIMACILIĞI A.Ş.",
    "INDUSTRY": "TRANSPORTATION AND STORAGE",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 97.5,
    "Shareholders": 96.43,
    "Disclosure and Transparency": 97.39,
    "Stakeholders": 99.06,
    "Board of Directors": 97.76,
    "ESG SCORE": 82,
    "ENVIRONMENT": 79,
    "Emissions": 92,
    "Resource Use": 79,
    "Innovation": 50,
    "SOCIAL": 80,
    "Human Rights": 71,
    "Product Responsibility": 59,
    "Workforce": 92,
    "Community": 89,
    "GOVERNANCE": 88,
    "Management": 91,
    "Shareholders__1": 73,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 48001577327,
    "TOTAL ASSETS": 201955079557,
    "TOTAL CURRENT LIABILITIES": 37183794680,
    "TOTAL LIABILITIES": 147285893336,
    "TOTAL EQUITY": 54669186221,
    "OPERATINF PROFIT": 13087349012,
    "NET PROFIT": 20907501797,
    "ROA": 10.3525505983122,
    "ROE": 38.2436674884486,
    "OPERATING MARGIN": 18555.3165242462,
    "NET PROFIT MARGIN": 29642.7728196801,
    "CURRENT RATIO": 1.29092734456224,
    "ASSET TURNOVER": 0.473750509834952,
    "INVENTORY TURNOVER": 68.1215369760013,
    "RECEIVABLE TURNOVER": 0.04960115318819,
    "DEBT TO EQUITY": 2.69412997553315,
    "DEBT TO ASSET": 0.729300266470544
  },
  {
    "ID": 31,
    "FIRM": "QUA GRANITE HAYAL YAPI VE ÜRÜNLERİ SANAYİ TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / NON-METALLIC MINERAL PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 91.25,
    "Shareholders": 89.8,
    "Disclosure and Transparency": 94.84,
    "Stakeholders": 91.88,
    "Board of Directors": 89.46,
    "ESG SCORE": 67,
    "ENVIRONMENT": 61,
    "Emissions": 98,
    "Resource Use": 90,
    "Innovation": 17,
    "SOCIAL": 87,
    "Human Rights": 83,
    "Product Responsibility": 99,
    "Workforce": 96,
    "Community": 73,
    "GOVERNANCE": 43,
    "Management": 56,
    "Shareholders__1": 3,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": 8255991142,
    "TOTAL ASSETS": 14486978388,
    "TOTAL CURRENT LIABILITIES": 6179158902,
    "TOTAL LIABILITIES": 6720923480,
    "TOTAL EQUITY": 7766054908,
    "OPERATINF PROFIT": 1460677753,
    "NET PROFIT": 419391742,
    "ROA": 2.89495663462434,
    "ROE": 5.4003190418854,
    "OPERATING MARGIN": 18.7749663047687,
    "NET PROFIT MARGIN": 5.39069333285603,
    "CURRENT RATIO": 1.33610274034672,
    "ASSET TURNOVER": 0.530703415941191,
    "INVENTORY TURNOVER": 2.93543208079382,
    "RECEIVABLE TURNOVER": 2.02237915829048,
    "DEBT TO EQUITY": 0.865423121471446,
    "DEBT TO ASSET": 0.463928591594169
  },
  {
    "ID": 32,
    "FIRM": "SUN TEKSTİL SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / TEXTILE, WEARING APPAREL AND LEATHER",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 93.01,
    "Shareholders": 89.57,
    "Disclosure and Transparency": 96.74,
    "Stakeholders": 97.99,
    "Board of Directors": 92.04,
    "ESG SCORE": 87,
    "ENVIRONMENT": 89,
    "Emissions": 98,
    "Resource Use": 91,
    "Innovation": 80,
    "SOCIAL": 92,
    "Human Rights": 88,
    "Product Responsibility": 98,
    "Workforce": 98,
    "Community": 82,
    "GOVERNANCE": 75,
    "Management": 92,
    "Shareholders__1": 49,
    "CSR Strategy": 31,
    "TOTAL CURRENT ASSETS": 3099718664,
    "TOTAL ASSETS": 5657786895,
    "TOTAL CURRENT LIABILITIES": 1901147071,
    "TOTAL LIABILITIES": 2360783378,
    "TOTAL EQUITY": 3297003517,
    "OPERATINF PROFIT": 865412490,
    "NET PROFIT": 242119461,
    "ROA": 4.27940227324522,
    "ROE": 7.34362155671307,
    "OPERATING MARGIN": 11.1914015727195,
    "NET PROFIT MARGIN": 3.13105732576312,
    "CURRENT RATIO": 1.63044654002994,
    "ASSET TURNOVER": 1.48299511884836,
    "INVENTORY TURNOVER": 5.98993634929874,
    "RECEIVABLE TURNOVER": 13.6199514668766,
    "DEBT TO EQUITY": 0.716039083921911,
    "DEBT TO ASSET": 0.417262689778279
  },
  {
    "ID": 33,
    "FIRM": "ŞEKERBANK T.A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.03,
    "Shareholders": 95.95,
    "Disclosure and Transparency": 95.75,
    "Stakeholders": 99.24,
    "Board of Directors": 92.78,
    "ESG SCORE": 79,
    "ENVIRONMENT": 87,
    "Emissions": 88,
    "Resource Use": 93,
    "Innovation": 85,
    "SOCIAL": 87,
    "Human Rights": 93,
    "Product Responsibility": 99,
    "Workforce": 95,
    "Community": 63,
    "GOVERNANCE": 64,
    "Management": 66,
    "Shareholders__1": 61,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 20855429,
    "TOTAL ASSETS": 90741896,
    "TOTAL CURRENT LIABILITIES": "",
    "TOTAL LIABILITIES": 90741896,
    "TOTAL EQUITY": 12732625,
    "OPERATINF PROFIT": 3184188,
    "NET PROFIT": 3187489,
    "ROA": 3.51269825792487,
    "ROE": 25.0340287254199,
    "OPERATING MARGIN": 33.3727969909241,
    "NET PROFIT MARGIN": 33.4073940696352,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.119472438754283,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 0.239488029586947,
    "DEBT TO EQUITY": 7.126723358302,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 34,
    "FIRM": "TAT GIDA SANAYİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / FOOD, BEVERAGE AND TOBACCO",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.02,
    "Shareholders": 95.79,
    "Disclosure and Transparency": 98.05,
    "Stakeholders": 99.51,
    "Board of Directors": 93.23,
    "ESG SCORE": 66,
    "ENVIRONMENT": 57,
    "Emissions": 75,
    "Resource Use": 34,
    "Innovation": 84,
    "SOCIAL": 67,
    "Human Rights": 67,
    "Product Responsibility": 60,
    "Workforce": 73,
    "Community": 70,
    "GOVERNANCE": 75,
    "Management": 78,
    "Shareholders__1": 82,
    "CSR Strategy": 48,
    "TOTAL CURRENT ASSETS": 4925393494,
    "TOTAL ASSETS": 6607570975,
    "TOTAL CURRENT LIABILITIES": 3214504012,
    "TOTAL LIABILITIES": 4250608062,
    "TOTAL EQUITY": 2356962913,
    "OPERATINF PROFIT": -61568690,
    "NET PROFIT": -86244297,
    "ROA": -1.30523451547185,
    "ROE": -3.65912830126912,
    "OPERATING MARGIN": -1.07044793181396,
    "NET PROFIT MARGIN": -1.4994639215874,
    "CURRENT RATIO": 1.53224058069709,
    "ASSET TURNOVER": 0.870467436182174,
    "INVENTORY TURNOVER": 1.751100732489,
    "RECEIVABLE TURNOVER": 4.21378788848787,
    "DEBT TO EQUITY": 1.8034259421544,
    "DEBT TO ASSET": 0.643293591258019
  },
  {
    "ID": 35,
    "FIRM": "TAV HAVALİMANLARI HOLDİNG A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / HOLDING AND INVESTMENT COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.88,
    "Shareholders": 95.9,
    "Disclosure and Transparency": 98.65,
    "Stakeholders": 98.82,
    "Board of Directors": 95.48,
    "ESG SCORE": 84,
    "ENVIRONMENT": 74,
    "Emissions": 77,
    "Resource Use": 93,
    "Innovation": 0,
    "SOCIAL": 95,
    "Human Rights": 92,
    "Product Responsibility": 97,
    "Workforce": 95,
    "Community": 99,
    "GOVERNANCE": 77,
    "Management": 81,
    "Shareholders__1": 89,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": 33605578,
    "TOTAL ASSETS": 154826945,
    "TOTAL CURRENT LIABILITIES": 28932753,
    "TOTAL LIABILITIES": 108362243,
    "TOTAL EQUITY": 46464702,
    "OPERATINF PROFIT": 8458818,
    "NET PROFIT": 7777419,
    "ROA": 5.02329810873682,
    "ROE": 16.7383382766557,
    "OPERATING MARGIN": 24.5659724541537,
    "NET PROFIT MARGIN": 22.5870636912168,
    "CURRENT RATIO": 1.16150640763428,
    "ASSET TURNOVER": 1.62854662114016,
    "INVENTORY TURNOVER": 114.005304559309,
    "RECEIVABLE TURNOVER": 13.9031830324408,
    "DEBT TO EQUITY": 2.33214113801914,
    "DEBT TO ASSET": 0.699892664032091
  },
  {
    "ID": 36,
    "FIRM": "TOFAŞ TÜRK OTOMOBİL FABRİKASI A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 92.69,
    "Shareholders": 86.7,
    "Disclosure and Transparency": 94.53,
    "Stakeholders": 99.51,
    "Board of Directors": 92.73,
    "ESG SCORE": 79,
    "ENVIRONMENT": 80,
    "Emissions": 95,
    "Resource Use": 90,
    "Innovation": 66,
    "SOCIAL": 89,
    "Human Rights": 88,
    "Product Responsibility": 85,
    "Workforce": 92,
    "Community": 92,
    "GOVERNANCE": 59,
    "Management": 63,
    "Shareholders__1": 58,
    "CSR Strategy": 43,
    "TOTAL CURRENT ASSETS": 60503930,
    "TOTAL ASSETS": 78667295,
    "TOTAL CURRENT LIABILITIES": 35566119,
    "TOTAL LIABILITIES": 41787711,
    "TOTAL EQUITY": 36879584,
    "OPERATINF PROFIT": "18,326,525",
    "NET PROFIT": 15083439,
    "ROA": 19.1737099896469,
    "ROE": 40.8991571054598,
    "OPERATING MARGIN": "",
    "NET PROFIT MARGIN": 1.18207842642889,
    "CURRENT RATIO": 1.70116761966635,
    "ASSET TURNOVER": 16.7382466750639,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 59.2656057865815,
    "DEBT TO EQUITY": 1.13308520508257,
    "DEBT TO ASSET": 0.531195473290393
  },
  {
    "ID": 37,
    "FIRM": "TÜPRAŞ-TÜRKİYE PETROL RAFİNERİLERİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / CHEMICALS, PETROLEUM RUBBER AND PLASTIC PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.8,
    "Shareholders": 95.9,
    "Disclosure and Transparency": 98.03,
    "Stakeholders": 99.51,
    "Board of Directors": 95.41,
    "ESG SCORE": 78,
    "ENVIRONMENT": 71,
    "Emissions": 86,
    "Resource Use": 94,
    "Innovation": 25,
    "SOCIAL": 91,
    "Human Rights": 91,
    "Product Responsibility": 80,
    "Workforce": 97,
    "Community": 91,
    "GOVERNANCE": 64,
    "Management": 54,
    "Shareholders__1": 80,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 201149421,
    "TOTAL ASSETS": 366793673,
    "TOTAL CURRENT LIABILITIES": 155270974,
    "TOTAL LIABILITIES": 163852906,
    "TOTAL EQUITY": 202940767,
    "OPERATINF PROFIT": 57820358,
    "NET PROFIT": 53872161,
    "ROA": 14.687320138153,
    "ROE": 26.545756082611,
    "OPERATING MARGIN": 8.42213504762738,
    "NET PROFIT MARGIN": 7.8470391907557,
    "CURRENT RATIO": 1.295473428279,
    "ASSET TURNOVER": 1.92171903200764,
    "INVENTORY TURNOVER": 11.1011229223218,
    "RECEIVABLE TURNOVER": 18.1310231187488,
    "DEBT TO EQUITY": 0.807392760075653,
    "DEBT TO ASSET": 0.446716827637319
  },
  {
    "ID": 38,
    "FIRM": "TÜRKİYE GARANTİ BANKASI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 98.08,
    "Shareholders": 97.3,
    "Disclosure and Transparency": 98.5,
    "Stakeholders": 98.73,
    "Board of Directors": 98.07,
    "ESG SCORE": 78,
    "ENVIRONMENT": 96,
    "Emissions": 91,
    "Resource Use": 98,
    "Innovation": 95,
    "SOCIAL": 89,
    "Human Rights": 93,
    "Product Responsibility": 71,
    "Workforce": 92,
    "Community": 95,
    "GOVERNANCE": 56,
    "Management": 46,
    "Shareholders__1": 84,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 646099092,
    "TOTAL ASSETS": 2201713095,
    "TOTAL CURRENT LIABILITIES": 2273026,
    "TOTAL LIABILITIES": 2201713095,
    "TOTAL EQUITY": 245621518,
    "OPERATINF PROFIT": 103784318,
    "NET PROFIT": 86907216,
    "ROA": 3.94725435377401,
    "ROE": 35.3825742580094,
    "OPERATING MARGIN": 120.167399260159,
    "NET PROFIT MARGIN": 100.62612854151,
    "CURRENT RATIO": 284.246239154326,
    "ASSET TURNOVER": 0.0492777556891731,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 8.17243911675363,
    "DEBT TO EQUITY": 8.96384450730412,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 39,
    "FIRM": "TÜRKİYE HALK BANKASI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.64,
    "Shareholders": 94.37,
    "Disclosure and Transparency": 95.5,
    "Stakeholders": 96.55,
    "Board of Directors": 93.41,
    "ESG SCORE": 82,
    "ENVIRONMENT": 89,
    "Emissions": 96,
    "Resource Use": 97,
    "Innovation": 85,
    "SOCIAL": 94,
    "Human Rights": 93,
    "Product Responsibility": 100,
    "Workforce": 89,
    "Community": 99,
    "GOVERNANCE": 64,
    "Management": 67,
    "Shareholders__1": 44,
    "CSR Strategy": 81,
    "TOTAL CURRENT ASSETS": "",
    "TOTAL ASSETS": 2297010551,
    "TOTAL CURRENT LIABILITIES": 2293681,
    "TOTAL LIABILITIES": 2297010551,
    "TOTAL EQUITY": 142914943,
    "OPERATINF PROFIT": 15116736,
    "NET PROFIT": 17753239,
    "ROA": 0.772884521243107,
    "ROE": 12.4222412487685,
    "OPERATING MARGIN": 4.29219496470712,
    "NET PROFIT MARGIN": 5.04079472202478,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.188571424893835,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 0.32304248175743,
    "DEBT TO EQUITY": 16.0725708787499,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 40,
    "FIRM": "TÜRKİYE SINAİ KALKINMA BANKASI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.55,
    "Shareholders": 95.06,
    "Disclosure and Transparency": 98.72,
    "Stakeholders": 98.85,
    "Board of Directors": 95.09,
    "ESG SCORE": 85,
    "ENVIRONMENT": 97,
    "Emissions": 100,
    "Resource Use": 93,
    "Innovation": 95,
    "SOCIAL": 98,
    "Human Rights": 93,
    "Product Responsibility": 100,
    "Workforce": 99,
    "Community": 100,
    "GOVERNANCE": 64,
    "Management": 70,
    "Shareholders__1": 45,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": "",
    "TOTAL ASSETS": 180913852,
    "TOTAL CURRENT LIABILITIES": 39250,
    "TOTAL LIABILITIES": 180913852,
    "TOTAL EQUITY": 21825052,
    "OPERATINF PROFIT": 8492670,
    "NET PROFIT": 7149926,
    "ROA": 3.95211639183936,
    "ROE": 32.7601785324498,
    "OPERATING MARGIN": "",
    "NET PROFIT MARGIN": "",
    "CURRENT RATIO": "",
    "ASSET TURNOVER": "",
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": "",
    "DEBT TO EQUITY": 8.28927472887579,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 41,
    "FIRM": "TÜRKİYE ŞİŞE VE CAM FABRİKALARI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / HOLDING AND INVESTMENT COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.4,
    "Shareholders": 95.96,
    "Disclosure and Transparency": 97.58,
    "Stakeholders": 99.48,
    "Board of Directors": 94.56,
    "ESG SCORE": 79,
    "ENVIRONMENT": 87,
    "Emissions": 82,
    "Resource Use": 93,
    "Innovation": 85,
    "SOCIAL": 81,
    "Human Rights": 88,
    "Product Responsibility": 49,
    "Workforce": 93,
    "Community": 81,
    "GOVERNANCE": 64,
    "Management": 72,
    "Shareholders__1": 37,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 112858066,
    "TOTAL ASSETS": 291211843,
    "TOTAL CURRENT LIABILITIES": 66721873,
    "TOTAL LIABILITIES": 57363332,
    "TOTAL EQUITY": 167126638,
    "OPERATINF PROFIT": 15718429,
    "NET PROFIT": 18977975,
    "ROA": 6.51689670464398,
    "ROE": 11.3554459223909,
    "OPERATING MARGIN": 10.3414799268392,
    "NET PROFIT MARGIN": 12.4860027369501,
    "CURRENT RATIO": 1.69147029190862,
    "ASSET TURNOVER": 523.939282691913,
    "INVENTORY TURNOVER": 3269.58898412085,
    "RECEIVABLE TURNOVER": 5.05282404175393,
    "DEBT TO EQUITY": 0.343232728704804,
    "DEBT TO ASSET": 0.196981453120366
  },
  {
    "ID": 42,
    "FIRM": "TÜRKİYE VAKIFLAR BANKASI T.A.O.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 93.83,
    "Shareholders": 91.18,
    "Disclosure and Transparency": 97.6,
    "Stakeholders": 97.9,
    "Board of Directors": 91.3,
    "ESG SCORE": 74,
    "ENVIRONMENT": 82,
    "Emissions": 99,
    "Resource Use": 97,
    "Innovation": 50,
    "SOCIAL": 93,
    "Human Rights": 93,
    "Product Responsibility": 90,
    "Workforce": 95,
    "Community": 93,
    "GOVERNANCE": 52,
    "Management": 52,
    "Shareholders__1": 26,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 877162340,
    "TOTAL ASSETS": 2859246233,
    "TOTAL CURRENT LIABILITIES": "",
    "TOTAL LIABILITIES": 2859246233,
    "TOTAL EQUITY": 180875698,
    "OPERATINF PROFIT": 35702880,
    "NET PROFIT": 34086845,
    "ROA": 1.19216192738445,
    "ROE": 18.8454531907321,
    "OPERATING MARGIN": 10.3169618696516,
    "NET PROFIT MARGIN": 9.8499807332553,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.154570615432673,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 0.279889084408013,
    "DEBT TO EQUITY": 15.8077965399199,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 43,
    "FIRM": "TÜRK TELEKOMÜNİKASYON A.Ş.",
    "INDUSTRY": "INFORMATION AND COMMUNICATION / TELECOMMUNICATIONS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.03,
    "Shareholders": 87.47,
    "Disclosure and Transparency": 98.85,
    "Stakeholders": 99.51,
    "Board of Directors": 92.92,
    "ESG SCORE": 68,
    "ENVIRONMENT": 69,
    "Emissions": 73,
    "Resource Use": 74,
    "Innovation": 58,
    "SOCIAL": 76,
    "Human Rights": 85,
    "Product Responsibility": 79,
    "Workforce": 66,
    "Community": 71,
    "GOVERNANCE": 52,
    "Management": 39,
    "Shareholders__1": 70,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 48237767,
    "TOTAL ASSETS": 194720878,
    "TOTAL CURRENT LIABILITIES": 56574989,
    "TOTAL LIABILITIES": 96430664,
    "TOTAL EQUITY": 98290214,
    "OPERATINF PROFIT": 3430234,
    "NET PROFIT": 16421552,
    "ROA": 8.43338021514057,
    "ROE": 16.7072095295265,
    "OPERATING MARGIN": 3.42391147355117,
    "NET PROFIT MARGIN": 16.3912841824544,
    "CURRENT RATIO": 0.852634138382245,
    "ASSET TURNOVER": 0.536333227131658,
    "INVENTORY TURNOVER": 57.5772718266623,
    "RECEIVABLE TURNOVER": 5.51639494306988,
    "DEBT TO EQUITY": 0.981081026031747,
    "DEBT TO ASSET": 0.495225088292792
  },
  {
    "ID": 44,
    "FIRM": "TÜRK TRAKTÖR VE ZİRAAT MAKİNELERİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.58,
    "Shareholders": 86.74,
    "Disclosure and Transparency": 98.76,
    "Stakeholders": 99.51,
    "Board of Directors": 95.09,
    "ESG SCORE": 85,
    "ENVIRONMENT": 84,
    "Emissions": 96,
    "Resource Use": 100,
    "Innovation": 72,
    "SOCIAL": 93,
    "Human Rights": 90,
    "Product Responsibility": 86,
    "Workforce": 100,
    "Community": 100,
    "GOVERNANCE": 73,
    "Management": 70,
    "Shareholders__1": 94,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 25006937600,
    "TOTAL ASSETS": 32456340727,
    "TOTAL CURRENT LIABILITIES": 15735068305,
    "TOTAL LIABILITIES": 17058350411,
    "TOTAL EQUITY": 15397990316,
    "OPERATINF PROFIT": 12137369750,
    "NET PROFIT": 9341958870,
    "ROA": 28.7831550345679,
    "ROE": 60.6699879548099,
    "OPERATING MARGIN": 20.770493840797,
    "NET PROFIT MARGIN": 15.9867502734943,
    "CURRENT RATIO": 1.58924874778292,
    "ASSET TURNOVER": 1.99908300739523,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 19.8784069080527,
    "DEBT TO EQUITY": 1.10782966224331,
    "DEBT TO ASSET": 0.525578362467996
  },
  {
    "ID": 45,
    "FIRM": "VESTEL ELEKTRONİK SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.62,
    "Shareholders": 95.88,
    "Disclosure and Transparency": 98.44,
    "Stakeholders": 99.48,
    "Board of Directors": 94.63,
    "ESG SCORE": 87,
    "ENVIRONMENT": 96,
    "Emissions": 95,
    "Resource Use": 92,
    "Innovation": 99,
    "SOCIAL": 94,
    "Human Rights": 92,
    "Product Responsibility": 97,
    "Workforce": 97,
    "Community": 91,
    "GOVERNANCE": 63,
    "Management": 53,
    "Shareholders__1": 77,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 48104788,
    "TOTAL ASSETS": 125180830,
    "TOTAL CURRENT LIABILITIES": 78138,
    "TOTAL LIABILITIES": 84320621,
    "TOTAL EQUITY": 40860209,
    "OPERATINF PROFIT": 3015028,
    "NET PROFIT": 1449625,
    "ROA": 1.15802475506833,
    "ROE": 3.54776697299811,
    "OPERATING MARGIN": 2.68681395427133,
    "NET PROFIT MARGIN": 1.29181973715023,
    "CURRENT RATIO": 615.638844096342,
    "ASSET TURNOVER": 0.945844619855384,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 6.25003217869689,
    "DEBT TO EQUITY": 2.06363655653352,
    "DEBT TO ASSET": 0.67359052500291
  },
  {
    "ID": 46,
    "FIRM": "YAPI VE KREDİ BANKASI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 97.15,
    "Shareholders": 95.96,
    "Disclosure and Transparency": 98.72,
    "Stakeholders": 99.51,
    "Board of Directors": 95.87,
    "ESG SCORE": 78,
    "ENVIRONMENT": 99,
    "Emissions": 97,
    "Resource Use": 98,
    "Innovation": 95,
    "SOCIAL": 95,
    "Human Rights": 93,
    "Product Responsibility": 90,
    "Workforce": 96,
    "Community": 98,
    "GOVERNANCE": 49,
    "Management": 40,
    "Shareholders__1": 69,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 294102783,
    "TOTAL ASSETS": 1184267014,
    "TOTAL CURRENT LIABILITIES": "",
    "TOTAL LIABILITIES": 1184267014,
    "TOTAL EQUITY": 126261939,
    "OPERATINF PROFIT": 68958239,
    "NET PROFIT": 52745301,
    "ROA": 4.45383518889432,
    "ROE": 41.7745057756479,
    "OPERATING MARGIN": 55.6372323345905,
    "NET PROFIT MARGIN": 42.5562283615582,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.0817034662891593,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 0.156906583907552,
    "DEBT TO EQUITY": 9.37944580432905,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 47,
    "FIRM": "YÜNSA YÜNLÜ SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / TEXTILE, WEARING APPAREL AND LEATHER",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 85.9,
    "Shareholders": 85.94,
    "Disclosure and Transparency": 89.99,
    "Stakeholders": 89.26,
    "Board of Directors": 81.56,
    "ESG SCORE": 82,
    "ENVIRONMENT": 79,
    "Emissions": 91,
    "Resource Use": 70,
    "Innovation": 80,
    "SOCIAL": 84,
    "Human Rights": 88,
    "Product Responsibility": 84,
    "Workforce": 95,
    "Community": 61,
    "GOVERNANCE": 81,
    "Management": 89,
    "Shareholders__1": 53,
    "CSR Strategy": 81,
    "TOTAL CURRENT ASSETS": 1433500317,
    "TOTAL ASSETS": 3540798655,
    "TOTAL CURRENT LIABILITIES": 747130814,
    "TOTAL LIABILITIES": 1000710338,
    "TOTAL EQUITY": 2540088317,
    "OPERATINF PROFIT": 620022875,
    "NET PROFIT": 544242879,
    "ROA": 15.3706248795443,
    "ROE": 21.4261400029895,
    "OPERATING MARGIN": 28.3303346925113,
    "NET PROFIT MARGIN": 24.8677646225325,
    "CURRENT RATIO": 1.91867379866894,
    "ASSET TURNOVER": 0.813892306776831,
    "INVENTORY TURNOVER": 2.98273143591831,
    "RECEIVABLE TURNOVER": 5.4833838914665,
    "DEBT TO EQUITY": 0.393966749621486,
    "DEBT TO ASSET": 0.282622773985436
  }
]`)

function loadPage(pageHTMLStr, pageName) {

  let result = /*html*/`
    <h1 class="font-bold m-2 mt-5 text-2xl">${pageName}</h1>
    <hr class="m-2 opacity-25"/>
    ${pageHTMLStr}`;

  document.getElementsByTagName("main")[0].innerHTML = result;

  //ham menu
  let hamMenu = document.querySelectorAll(".hamMenu")[0];
  let state = hamMenu.getAttribute("data-state");
  state == "off" ? "" : toggleMenu(hamMenu);

}


function firmCard(props) {

  return /*html*/`
  <div class="bg-slate-300 opacity-85 p-1 *:m-1 *:mb-4" data-id=${props["ID"]}>
    <!--MAIN PART-->
    <p class="min-h-[50px] flex items-start *:m-1">
      <span class="hidden">FIRM</span>
      <span class="min-h-[80px] min-w-[80px] max-h-[80px] max-w-[80px] rounded-xl overflow-hidden">
        <img src="./Assets/logos.png" alt="${props["FIRM"]} logosu" style="transform: translate(0, -${(props["ID"] - 1) * 80}px)">
        <!--
        <img class="min-h-full min-w-full " alt="${props["FIRM"]} sirket logosu">
        -->
      </span>
      <span class="font-bold text-lg">${props["FIRM"]}</span>
    <p>
    <p class="min-h-[125px]">
      <span class="font-bold text-lg">INDUSTRY: </span>
      <span>${props["INDUSTRY"]}</span>
    <p>
    <p>
      <span class="font-bold text-lg">YEAR: </span>
      <span>${props["YEAR"]}</span>
    <p>
    <p>
      <span class="font-bold text-lg">INDEX 1: </span>
      <span>${props["INDEX 1"]}</span>
    <p>
    <p>
      <span class="font-bold text-lg">INDEX 2: </span>
      <span>${props["INDEX 2"]}</span>
    <p>
    <!--NON-FINANCIAL INDICATORS-->
    <details>
      <summary class="cursor-pointer font-bold text-lg">NON-FINANCIAL INDICATORS</summary>
      <div class="*:m-2">
        <p>
          <span class="font-bold">CG RATING OVERALL: </span>
          <span>${props["CG RATING OVERALL"]}</span>
        <p>
        <p>
          <span class="font-bold">Shareholders: </span>
          <span>${props["Shareholders"]}</span>
        <p>
        <p>
          <span class="font-bold">Disclosure and Transparency: </span>
          <span>${props["Disclosure and Transparency"]}</span>
        <p>
        <p>
          <span class="font-bold">Stakeholders: </span>
          <span>${props["Stakeholders"]}</span>
        <p>
        <p>
          <span class="font-bold">Board of Directors: </span>
          <span>${props["Board of Directors"]}</span>
        <p>
        <p>
          <span class="font-bold">ESG SCORE: </span>
          <span>${props["ESG SCORE"]}</span>
        <p>
        <p>
          <span class="font-bold">ENVIRONMENT: </span>
          <span>${props["ENVIRONMENT"]}</span>
        <p>
        <p>
          <span class="font-bold">Emissions: </span>
          <span>${props["Emissions"]}</span>
        <p>
        <p>
          <span class="font-bold">Resource Use: </span>
          <span>${props["Resource Use"]}</span>
        <p>
        <p>
          <span class="font-bold">Innovation: </span>
          <span>${props["Innovation"]}</span>
        <p>
        <p>
          <span class="font-bold">SOCIAL: </span>
          <span>${props["SOCIAL"]}</span>
        <p>
        <p>
          <span class="font-bold">Human Rights: </span>
          <span>${props["Human Rights"]}</span>
        <p>
        <p>
          <span class="font-bold">Product Responsibility: </span>
          <span>${props["Product Responsibility"]}</span>
        <p>
        <p>
          <span class="font-bold">Workforce: </span>
          <span>${props["Workforce"]}</span>
        <p>
        <p>
          <span class="font-bold">Community: </span>
          <span>${props["Community"]}</span>
        <p>
        <p>
          <span class="font-bold">GOVERNANCE: </span>
          <span>${props["GOVERNANCE"]}</span>
        <p>
        <p>
          <span class="font-bold">Management: </span>
          <span>${props["Management"]}</span>
        <p>
        <p>
          <span class="font-bold">Shareholders: </span>
          <span>${props["Shareholders__1"]}</span>
        <p>
        <p>
          <span class="font-bold">CSR Strategy: </span>
          <span>${props["CSR Strategy"]}</span>
        <p>
      </div>
    </details>
    <!--PRIMARY FINANCIAL DATA-->
    <details>
      <summary class="cursor-pointer font-bold text-lg">PRIMARY FINANCIAL DATA</summary>
      <div class="*:m-2">
        <p>
          <span class="font-bold">TOTAL CURRENT ASSETS: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL CURRENT ASSETS"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL ASSETS: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL ASSETS"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL CURRENT LIABILITIES: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL CURRENT LIABILITIES"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL LIABILITIES: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL LIABILITIES"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL EQUITY: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL EQUITY"])}</span>
        <p>
        <p>
          <span class="font-bold">OPERATING PROFIT: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["OPERATINF PROFIT"])}</span>
        <p>
        <p>
          <span class="font-bold">NET PROFIT: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["NET PROFIT"])}</span>
        <p>
      </div>
    </details>
    <!--FINANCIAL RATIOS-->
    <details>
      <summary class="cursor-pointer font-bold text-lg">FINANCIAL RATIOS</summary>
      <div class="*:m-3">
        <!--Profitability Ratios-->
        <h4 class="font-bold text-lg underline">Profitability Ratios</h4>
        <p>
          <span class="font-bold">ROA: </span>
          <span>${props["ROA"]}</span>
        <p>
        <p>
          <span class="font-bold">ROE: </span>
          <span>${props["ROE"]}</span>
        <p>
        <p>
          <span class="font-bold">OPERATING MARGIN: </span>
          <span>${props["OPERATING MARGIN"]}</span>
        <p>
        <p>
          <span class="font-bold">NET PROFIT MARGIN: </span>
          <span>${props["NET PROFIT MARGIN"]}</span>
        <p>
        <!--Liquidity Ratios-->
        <h4 class="font-bold text-lg underline">Liquidity Ratios</h4>
        <p>
          <span class="font-bold">CURRENT RATIO: </span>
          <span>${props["CURRENT RATIO"]}</span>
        <p>
        <p>
          <span class="font-bold">ASSET TURNOVER: </span>
          <span>${props["ASSET TURNOVER"]}</span>
        <p>
        <p>
          <span class="font-bold">INVENTORY TURNOVER: </span>
          <span>${props["INVENTORY TURNOVER"]}</span>
        <p>
        <p>
          <span class="font-bold">RECEIVABLE TURNOVER: </span>
          <span>${props["RECEIVABLE TURNOVER"]}</span>
        <p>
        <!--Solvency Ratios-->
        <h4 class="font-bold text-lg underline">Solvency Ratios</h4>
        <p>
          <span class="font-bold">DEBT TO EQUITY: </span>
          <span>${props["DEBT TO EQUITY"]}</span>
        <p>
        <p>
          <span class="font-bold">DEBT TO ASSET: </span>
          <span>${props["DEBT TO ASSET"]}</span>
        <p>
      </div>
    </details>
  </div>
`
}


//Anasayfa
function Main() {
  let result = /*html*/`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 *:rounded-lg *:shadow-lg">
      ${data.reduce((acc, currentVal) => acc + firmCard(currentVal), "")}
    </div>  
  `;

  return result;
}

//Teknik Bilgiler
function TechInfo() {
  return /*html*/`
    <div class="p-5">
      <h2 class="font-bold mb-5 text-xl">About Our Project: A Clear View of Corporate Responsibility</h2>
      <p class="my-5">
        In today's world, a company's success is measured by more than just its financial performance. Stakeholders, from investors to consumers, increasingly demand transparency in a company's social and environmental impact. However, accessing clear, consolidated, and reliable data is often a significant challenge. Information is typically scattered across various reports and databases, making it difficult to get a complete picture of a company's overall health, both financially and non-financially.
      </p>
      <p class="my-5">
        Our project was developed to solve this problem. We provide a centralized, user-friendly platform that gathers and presents key financial and non-financial performance indicators for leading companies in Turkey. Our goal is to empower users with accessible data, allowing for a holistic evaluation and fostering a more informed and transparent business environment.
      </p>
      <h2 class="font-bold mb-5 text-xl">Our Data Scope</h2>
      <p class="my-5">To ensure the data is relevant and reliable, our analysis focuses on a specific and significant group of companies. Instead of using a broad international list like the Fortune 500, we have concentrated on the Turkish market.
      </p>
      <p class="my-5">
        Our dataset includes <b>47 companies</b> that are listed on the <b>BIST 100 Index</b>. Crucially, all selected companies are also included in both the <b>BIST SUSTAINABILITY Index</b> and the <b>BIST CORPORATE GOVERNANCE Index</b>. This selection criterion ensures that our analysis is centered on firms that are already recognized for their commitment to high standards of sustainability and corporate governance.
      </p>


      <h2 class="font-bold mb-5 text-xl">What This Website Does</h2>
      <p class="my-5">
        This platform serves as a one-stop source for understanding the holistic performance of these 47 leading Turkish companies. We aggregate and display key metrics related to:
      </p>
      <ul class="list-disc ml-5">
        <li>
          <p class="my-5"><b>Sustainability (ESG Score): </b>How a company manages its environmental, social, and governance responsibilities.</p> 
        </li>
        <li>
          <p class="my-5"><b>Corporate Governance Index: </b>The effectiveness, transparency, and accountability of a company's leadership.</p> 
        </li>
        <li>
          <p class="my-5"><b>Primary Financial Data: </b>Primary Financial Data: Core financial information directly from company statements.</p> 
        </li>
        <li>
          <p class="my-5"><b>Financial Ratios: </b>Key calculations that provide insight into a company's financial health and performance.</p> 
        </li>
      </ul>
      <p class="my-5">By bringing this information together, we make it easy to compare companies and track their performance over time.</p>
      <h2 class="font-bold mb-5 text-xl">How to Use This Website</h2>
      <p class="my-5">
        Navigating the site is straightforward. You can use the main dashboard to view the overall scores for all companies or select specific companies to see their detailed performance across the different indicators. The data is presented through clear visualizations and scores, allowing you to assess and compare corporate responsibility and financial stability quickly.
      </p>
      <h2 class="font-bold mb-5 text-xl">Who Can Benefit from This Platform?</h2>
      <p class="my-5">This tool is designed for a wide range of users who are interested in the ethical and social dimensions of business:</p>
      <ul class="list-disc ml-5">
        <li>
          <p class="my-5"><b>Investors: </b>To make informed investment decisions that align with sustainability goals and to assess both financial and non-financial risks.</p>
        </li>
        <li>
          <p class="my-5"><b>Consumers: </b>To support companies that demonstrate a strong commitment to ethical practices and social responsibility.</p>
        </li>
        <li>
          <p class="my-5"><b>Researchers and Students: </b>To access consolidated data for academic studies on corporate sustainability, governance, and finance in Turkey.</p>
        </li>
        <li>
          <p class="my-5"><b>The Companies Themselves: </b>To benchmark their performance against peers and identify areas for improvement in their financial and social responsibility strategies.</p>
        </li>
        <li>
          <p class="my-5"><b>Non-Governmental Organizations (NGOs): </b>To monitor corporate performance and advocate for greater transparency and accountability.</p>
        </li>
      </ul>
    </div>
  `
}

//Hakkımızda
function AboutUs() {

  let people = [
    {
      id: 0,
      name: "Emir Moralıoğlu",
      dept: "Business Administration",
      uni: "Yaşar University",
      email: "emirmoralioglu@hotmail.com",
      mobile: "+90 (539) 768 4720"
    },
    {
      id: 1,
      name: "Halil Emre Şaşmazel",
      dept: "Business Administration",
      uni: "Yaşar University",
      email: "emresasmazel@hotmail.com",
      mobile: "+90 (507) 036 8269"
    },
    {
      id: 2,
      name: "Yiğit Yüksel",
      dept: "Business Administration",
      uni: "Yaşar University",
      email: "Yigit-478@hotmail.com",
      mobile: "+90 (530) 612 6949"
    },
  ]

  function personCard(person) {
    return /*html*/`
      <div class="p-2 bg-slate-200 *:my-1">
        <h3 class="font-bold text-2xl my-1 text-center">${person.name}</h3>
        <hr/>
        <!--University /Dept Info-->
        <div class="text-lg my-1 flex items-center justify-left *:m-1 ">
          <span class="text-2xl">
            👨‍🎓
          </span>
          <div class="flex flex-col justify-start *:m-1">
            <span>${person.uni}</span>
            <span>${person.dept}</span>
          </div>
        </div>
        <!--Email-->
        <p class="text-lg my-1 flex items-center justify-left *:m-1 ">
          <span class="text-2xl">✉️</span>
          <a href="mailto:${person.email}">
            ${person.email || "-"}
          </a>
        </p>
        <!--Phone-->
        <p class="text-lg my-1 flex items-center justify-left *:m-1 ">
          <span class="text-2xl">📞</span>
          <a href="tel:${person.mobile}">
            ${person.mobile || "-"}
          </a>
        </p>
      </div>
    `
  }

  return /*html*/`
    <div class="p-5">
      <p class="mb-5">
        This website was developed as part of our senior graduation project in the Department of Business Administration at Yaşar University during the 2024-2025 academic year.
      </p>
      <p class="my-5">
        Our project aims to provide a clear, comparative analysis of financial and non-financial data from companies listed in the BIST 100, BIST Sustainability, and BIST Corporate Governance indices.
      </p>
      <h2 class="font-bold mb-5 text-xl">Project Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 *:rounded-lg *:shadow-xl">
        <!--Cards-->
        ${people.reduce((acc, curVal) => acc + personCard(curVal), "")}
      </div>
    </div>
  `
}

let userFirmCompList = [];

function removeFirmCard(removeButton, firmId) {
  firmId = parseInt(firmId);
  userFirmCompList = userFirmCompList.filter(item => item != firmId);
  removeButton.closest('.firmCard').remove();
  loadPage(FirmComparison(), 'Compare Firms')
}

function addFirmToUserCompList(firmId) {
  if (!firmId) {
    alert("Please select a firm");
    return;
  }
  firmId = parseInt(firmId);
  if (userFirmCompList.indexOf(firmId) == -1) {
    userFirmCompList.push(firmId);
    loadPage(FirmComparison(), 'Compare Firms')
  } else {
    alert("The firm has already been selected!");
  }
}

//Firma Karşılaştırmaları
function FirmComparison() {
  //console.log(data, userFirmCompList);
  //Cards
  let cards = userFirmCompList.sort((a, b) => a > b).reduce((acc, curVal) =>
    acc +/*html*/`
      <div class="firmCard flex flex-col *:first:grow rounded-lg overflow-hidden">
        ${firmCard(data.filter(item => item.ID == curVal)[0])}
        <button class="w-full  bg-red-500 p-2  text-slate-50 font-bold shadow-sm hover:shadow-lg hover:cursor-pointer active:shadow-none" onclick="removeFirmCard(this, ${curVal})">Remove</button>
      </div>`, "");

  //Result HTML
  let result = /*html*/`
    <div class="p-2">
      <p>You can compare the firms by selecting them from the menu below and clicking the "Add" button.</p>
      <div class="*:mt-2">
        <!--Form-->
        <select class="border-2 p-2 rounded-lg border-slate-600 mt-5 sm:max-w-[340px] max-w-full">
          <option hidden value="">Select a Firm</option>
          ${data.filter(item => userFirmCompList.indexOf(item.ID) == -1).reduce((acc, curVal) => acc + /*html*/`<option value="${curVal.ID}">${curVal.FIRM}</option>`, "")}
        </select>
        <button
          type="button"
          class="w-full sm:max-w-fit  bg-blue-500 p-2 rounded-lg text-slate-50 font-bold shadow-sm hover:shadow-lg hover:cursor-pointer active:shadow-none"
          onclick="addFirmToUserCompList(this.previousElementSibling.value)"
        >Add (${userFirmCompList.length} / ${data.length})</button>
      </div>
      <!--Cards-->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 *:rounded-lg *:shadow-lg">
        ${cards}
      </div>
    </div>
  `


  return /*html*/`
    <div class="p-2" id="firmCompContainer">
      ${result}
    </div >
  `
}


document.addEventListener("DOMContentLoaded", () => {
  loadPage(Main(), "Firms");
  //loadPage(FirmComparison(), "x");
  //loadPage(TechInfo(), 'Teknik Bilgiler');
  //loadPage(AboutUs(), 'Teknik Bilgiler');
})
