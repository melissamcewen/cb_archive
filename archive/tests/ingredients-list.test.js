import analyze from '../src/ingredients/analyze';
import detector from '../src/ingredients/detector';



test('analyze Keratin shampoo correctly', () => {
  var list = "Water (Aqua), Disodium Laureth Sulfosuccinate, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Cocamidopropyl Hydroxysultaine, PEG-12 Dimethicone, Cocamide MIPA, Glycol Distearate, Hydrolyzed Keratin, Theobroma Cacao (Cocoa) Seed Butter, Fragrance (Parfum), Cocos Nucifera (Coconut) Oil, Persea Gratissima (Avocado) Oil, Aloe Barbadensis Leaf Extract, Panthenol, Polyquaternium-11, DMDM Hydantoin, Sodium Chloride, Cetyl Alcohol, Guar Hydroxypropyltrimonium Chloride, PEG-14M, Blue 1 (CI 42090), Red 40 (CI 16035), Yellow 5 (CI 19140).";
  var expected =  {"alcohol": {"bad": [], "caution": [], "good": ["cetyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": ["peg-12 dimethicone"], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": ["sodium c14-16 olefin sulfonate"], "good": ["disodium laureth sulfosuccinate", "cocamidopropyl betaine", "cocamidopropyl hydroxysultaine"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(results).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});

test('analyze Tresemme Runway Waves correctly', () => {
  var list = "Aqua (Water), Acrylates Copolymer, Glycerin, Propylene Glycol, Polysorbate 20, VP/Methacrylamide/Vinyl Imidazole Copolymer, Triethanolamine, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ammonium Hydroxide, Caprylyl Glycol, Citric Acid, Disodium EDTA, Hydrolyzed Milk Protein, Hydroxyethylcellulose, Iodopropynyl Butylcarbamate, Lactic Acid, Laureth-7, Parfum (Fragrance), PEG/PPG-25/25 Dimethicone, PEG-10 Dimethicone, PEG-4 Dilaurate, PEG-4 Laurate, PEG-4, Phenoxyethanol, Phenylpropanol, Propanediol, Sodium Benzoate, Alpha-Isomethyl Ionone, Benzyl Alcohol, Butylphenyl Methylpropional, Citronellol, Geraniol, Hexyl Cinnamal, Hydroxycitronellal, Linalool, Contains Milk Protein";
  var expected =  {"alcohol": {"bad": [], "caution": [], "good": ["phenylpropanol", "benzyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": ["pegppg-2525 dimethicone", "peg-10 dimethicone"], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});



test('analyze Ouidad Curl Recovery Meltdown correctly', () => {
  var list = "Water/Aqua/Eau, C12-15 Alkyl Benzoate, Cetearyl Alcohol, Stearamidopropyl Dimethylamine, Glycerin, Propanediol, Bis-Hydroxy/Methoxy Amodimethicone, Behentrimonium Chloride, Cetrimonium Chloride, Cetyl Esters, Methyl Hydroxyethylcellulose, Behentrimonium Methosulfate, Cetyl Alcohol, Cocos Nucifera (Coconut) Oil, Limnanthes Alba (Meadowfoam) Seed Oil, Persea Gratissima (Avocado) Oil, Raphanus Sativus (Radish) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Citrullus Lanatus (Watermelon) Seed Oil, Trichilia Emetica Seed Butter, Lactic Acid, Euterpe Oleracea Fruit Oil, Oryza Sativa (Rice) Bran Oil, Passiflora Edulis Seed Oil, Panthenol (Provitamin B5), Tocopheryl Acetate (Vitamin E), Hydrogenated Castor Oil/Sebacic Acid Copolymer, Dipropylene Glycol, Quaternium-91, Cetrimonium Methosulfate, C10-40 Isoalkylamidopropylethyldimonium Ethosulfate, Guar Hydroxypropyltrimonium Chloride, Potassium Sorbate, Ethylhexylglycerin, Disodium EDTA, Phenoxyethanol, Vanillyl Butyl Ether, Butylene Glycol, Isopropyl Alcohol, Hexyl Cinnamal, Linalool, Butylphenyl Methylpropional, Limonene, Citronellol, Benzyl Benzoate, Fragrance/Parfum.";
  var expected = {"alcohol": {"bad": ["isopropyl alcohol"], "caution": [], "good": ["cetearyl alcohol", "cetyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": ["bis-hydroxymethoxy amodimethicone"], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("bad");

});

test('analyze COCONUT & HIBISCUS CURL ENHANCING SMOOTHIE 12OZ correctly', () => {
  var list = "Deionized Water, Butyrospermum Parkii (Shea Butter)*, Cocos Nucifera (Coconut ) Oil*, Macadamia Ternifolia Seed Oil, Magnifera Indica (Mango) Seed Butter*, Persea Gratissima (Avacado) Oil, Vegetable Glycerin, Aloe Barbadensis Leaf Extract, Silk Protein, Ammonium Salt, Melia Azadiratcha (Neem) Seed Oil,Daucus Carota Sativa (Carrot) Seed oil, Sorbitol Esters, Panthenol (Pro-Vitamin B-5), Caprylyl Glycol, Essential Oil Blend, Lonicera Caprifolium (honeysuckle) Flower (and) Lonicera Japonica (Japanese Honeysuckle) Flower Extract, Tocopherol (Vitamin E), Hibiscus Flower Extract ";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": [], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("good");

});


test('analyze Bounce Light Creme Gel correctly', () => {
  var list = "Water, VP/VA copolymer, Glycerin, Hydrolyzed Jojoba Esters, Jojoba Esters, Hydrolyzed wheat protein, Hydrolyzed Oat protein, Aloe Barbadensis Leaf Extract, Panax Ginseng root Extract, Salvia Officlnalis (Sage) Extract,*Nigella Sativa (Virgin Black Cumin) Oil, Boswellia Carter Oil, Polyquaternium-10, Polysorbate 20, Aminomethyl Propanol, Carbomer, Disodium Edta, Caprylyl Glycol, Hexylene Glycol, Phenoxyethanol, Citric Acid, Fragrance. ";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": ["aminomethyl propanol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("good");

});


test('analyze GVP Balm correctly', () => {
  var list = "Water (Aqua), Propylene Glycol, Myristyl Alcohol, Cetrimonium Chloride, Cetearyl Alcohol, Decyl Oleate, Phenoxyethanol, Fragrance (Parfum), Methylparaben, Propylparaben, Hexyl Cinnamal, Rosmarinus Officinalis (Rosemary) Leaf Extract, Hydrastis Canadensis (Golden Seal) Extract, Fucus Vesiculosus (Bladderwack) Extract, Methyl-2-Octynoate";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": ["myristyl alcohol", "cetearyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": ["parabens"], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});


test('analyze Ulta Total Textures kit correctly', () => {
  var list = "Ouidad Advanced Climate Control Heat and Humidity Gel: Water (Aqua), Butylene Glycol, Polyquaternium-28, Sericin, Tocopheryl Acetate, Retinyl Palmitate, Panthenol, Polyquaternium-7, Chamomilla Recutita (Matricaria) Flower Extract, Actinidia Chinensis (Kiwi) Fruit Extract, Lawsonia Inermis (Henna) Extract, Wheat Amino Acids, Hydrolyzed Wheat Protein/PVP Crosspolymer, PEG-60 Almond Glycerides, Glycerin, Guar Hydroxypropyltrimonium Chloride, Behentrimonium Chloride, Cetrimonium Chloride, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, VP/DMAPA Acrylates Copolymer, Hydroxyethylcellulose, Hexylene Glycol, Caprylyl Glycol, Ethylhexylglycerin, Potassium Sorbate, Disodium EDTA, Phenoxyethanol, Fragrance (Parfum). Design Essentials Natural Almond and Avocado Curl Enhancing Mousse: Aqua/Water/Eau, Decyl Glucoside, Polyquaternium-55, Cetrimonium Chloride, Polysorbate 20, Fragrance (Parfum), Cetrimonium Dimethicone PEG-8 Olivate/Succinate, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Persea Gratissima (Avocado) Oil, PEG-75 Lanolin, Hydrolyzed Wheat Protein, PEG-12 Dimethicone, Panthenol, Phenoxyethanol, Benzoic Acid, Ethylhexylglycerin, Glycereth-2 Cocoate, Citric Acid, Yellow 5 (CI 19140), Blue 1 (CI 42090). DevaCurl Leave-In Decadence: Water (Aqua, Eau), Isopentyldiol, Cocos Nucifera (Coconut) Oil, Caryocar Brasiliense Fruit Oil, Hydrolyzed Quinoa, Cyperus Esculentus Tuber Extract, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Oil, Persea Gratissima (Avocado) Oil, Aloe Barbadensis Leaf Juice, Helianthus Annuus (Sunflower) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Melissa Officinalis Extract, Humulus Lupulus (Hops) Extract, Cymbopogon Schoenanthus Extract, Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Achillea Millefolium Extract, Hydrolyzed Jojoba Esters, Glycerin, Glycine Soja (Soybean) Oil, Glycine Soja (Soybean) Sterols, Glycolipids, Hydroxyethylcellulose, Phospholipids, Tocopherol, Xanthan Gum, PPG-3 Benzyl Ether Myristate, Sodium Hydroxide, Carbomer, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin, Fragrance (Parfum). Bumble and Bumble Hairdresser's Invisible Oil Balm-To-Oil Pre-Shampoo Masque: Elaeis Oleifera (Palm) Kernel Oil, Elaeis Guineensis (Palm) Oil, Fragrance, Vitis Vinifera (Grape) Seed Oil, Gardenia Tahitensis (Tiare) Flower Extract, Macadamia Integrifolia Seed Oil, Cocos Nucifera (Coconut) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Argania Spinosa Kernel Oil, Carthamus Tinctorius (Safflower) Seed Oil, Hydrogenated Lecithin, Tocopherol, Coumarin, Linalool, Limonene, Hexyl Cinnamal, Butylphenyl Methylpropional. arth's Nectar Honey Curls: Water, Glycerin, Aloe Barbadensus Leaf Juice, Polysorbate 80, Carbomer, Jojoba Seed Oil, Sweet Almond Oil, Panthenol, Tocopheryl Acetate, Nettle Extract, Willow Bark Extract, Witch Hazel Water, Sodium Hydroxide, Caramel, Potassium Sorbate, DMDM Hydanton, Fragrance. CurlSmith Curl Defining Styling Souffle: Water (Aqua), Glycerin, Irish Moss (Chondrus Crispus), Sorbitol, Caprylyl/Capryl Glucoside, Fragrance (Parfum), Babassu Oil Polyglyceryl-4 Esters, Linum Usitatissimum (Flax) Seed Extract, Carapa Guaianensis (Andiroba) Seed Oil, Rosmarinus Officinalis (Rosemary) Leaf Extract, Salvia Officinalis (Sage) Leaf Extract, Persea Gratissima (Avocado) Oil, Selaginella Lepidophylla (Resurrection Flower) Extract, Aloe Barbadensis (Aloe Vera) Leaf Juice, Ocimum Basilicum (Basil) Leaf Extract, Piper Nigrum (Black Pepper) Seed Extract, Butyrospermum Parkii (Shea) Butter, Helianthus Annuus (Sunflower) Seed Oil, Glyceryl Caprylate, Glyceryl Undecylenate, Potassium Sorbate, Sodium Benzoate, Polyglyceryl-10 Laurate, Disodium EDTA, Citric Acid, Limonene, Linalool.";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": [], "unknown": []}, "other": {"bad": [], "caution": ["witch"], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": ["cetrimonium dimethicone peg-8 olivatesuccinate", "peg-12 dimethicone"], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": ["decyl glucoside", "caprylylcapryl glucoside"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": ["peg-75 lanolin"], "unknown": []}};
  var results = analyze(list);
  expect(results).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});


test('analyze Shea soap bar correctly', () => {
  var list = "Sodium Palmate, Sodium Palm Kernelate, Water, Glycerin (Vegetable), Fragrance (Essential Oil Blend), Sodium Gluconate, Butyrospermum Parkii (Shea) Butter*♥, Xanthan Gum, Palm Acid, Bentonite, Moroccan Lava Clay, Cocos Nucifera (Coconut) Oil, Sodium Chloride, Kaolinite, Palm Kernel Acid, Adansonia Digitata Seed Oil, Trichilia Emetica Seed Butter, Rosmarinus Officinalis (Rosemary) Leaf Extract, Ficus Carica (Fig) Fruit Extract *Certified Organic Ingredient ♥Fair Trade Ingredient";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": [], "unknown": []}, "other": {"bad": [], "caution": ["soap"], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});

test('analyze Deva Arc Angel correctly', () => {
  var list = "Water, VP/VA Copolymer, Glycerin, PEG 7 Glyceryl Cocoate, PEG 40 Hydrogenated Castor Oil, Citrus Aurantium Dulcis (Orange) Peel Extract, Triticum Vulgare (Wheat Germ) Peptide, Avena Sativa (Oat) Protein, Glycine Soja (Soy) Peptide, Melissa Officinalis (Lemon Balm) Extract, Humulus Lupulas (Hops) Extract, Cymbopogon Citrarus (Lemongrass) Extract, Chamomilla Recutita (Matricaria) Extract, Rosmarinus Officinalis (Rosemary) Extract, Achillea Millefolium (Yarrow) Extract, DMDM Hydantoin, Amino Methyl Propanol, Acrylates/C10 30 Alkyl Acrylate Crosspolymer, Fragrance, Red 33 (CI 17200), Yellow 5 Lake.";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": ["amino methyl propanol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("good");

});


test('analyze NYMN dry shampoo correctly', () => {
  var list = "Isobutane, Propane, Alcohol Denat., Tapioca Starch & Polymethylsilsesquioxane, Oryza Sativa (Rice) Starch, Isopropyl Myristate, Salvia Hispanica (Chia) Extract, Linum Usitatissimum (Linseed) Seed Extract, Prunus Domestica (Plum) Fruit Oil, Silica.";
  var expected =  {"alcohol": {"bad": ["alcohol denat"], "caution": [], "good": [], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": ["polymethylsilsesquioxane"], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("bad");

});


test('analyze Aveda Be Curly Controller correctly', () => {
  var list = "Ingredients: Water\Aqua\Eau , Methyl Gluceth-10 , Glycerin , Hydroxypropyl Starch , Caprylyl Glycol , Propanediol , Aloe Barbadensis Leaf , Orbignya Oleifera (Babassu) Seed Oil , Hydrolyzed Wheat Protein , PEG-40 Hydrogenated Castor Oil , Dimethicone , Pullulan , Decyl Glucoside , Glyceryl Stearate , Hydroxyethylcellulose , PEG-100 Stearate , Isopropyl Alcohol , C14-22 Alcohols , C12-20 Alkyl Glucoside , Dimethiconol , Guar Hydroxypropyltrimonium Chloride , Polyquaternium-4 , Dicetyldimonium Chloride , Sodium Chloride , Fragrance (Parfum) , Citral , Geraniol , Linalool , Citronellol , Eugenol , Limonene , Phenoxyethanol <ILN42699>";
  var expected = {"alcohol": {"bad": ["isopropyl alcohol"], "caution": [], "good": ["c14-22 alcohols"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": ["dimethicone", "dimethiconol"], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": ["decyl glucoside"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};

  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("bad");

});


test('Analyse Innersense Dry Shampoo correctly', () => {
  var list = "Water, Aqua- EAU, Hamamelis Virginiana (Witch Hazel) Extract, Tapioca Starch, Caprylyl/Capryl Glucoside, Citrus Aurantium Dulcis Peel Oil, Caprylic/Capric Triglyceride, Zea Maize Starch, Decyl Glucoside, Dehydroacetic Acid, Benzyl Alcohol, Galactoarabinan, Pullulan, Plant Glycerin, Xanthan Gum, Potassium Sorbate, Hydroxypropyltrimonium Honey, Panthenol (Vitamin B-5), Hydrolyzed Rice Protein, Hydrolyzed Quinoa, Chamomilla Recutita (Matricaria) Flower Extract*, Eucalyptus Globulus Leaf Extract*, Ginkgo Biloba Leaf Extract*, Aspalathus Linearis Leaf Extract*, Honey Extract*, Tocopheryl Acetate (Vitamin E). ";
  var expected =  {"alcohol": {"bad": [], "caution": [], "good": ["benzyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": ["witch"], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": ["caprylylcapryl glucoside", "decyl glucoside"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});


test('Analyse Jason Biotin Shampoo correctly', () => {
  var list = "Aqua (water), cocamidopropyl hydroxysultaine, sodium cocoyl isethionate, glycerin, sodium laurylglucosides hydroxypropylsulfonate, mentha arvensis leaf oil, simmondsia chinensis (jojoba) seed oil¹ aloe barbadensis leaf juice¹, calendula officinalis (calendula) flower extract¹, chamomilla recutita (matricaria) flower extract¹, chenopodium quinoa seed¹, citrus grandis (grapefruit) fruit extract¹, equisetum arvense leaf extract¹, lavandula angustifolia (lavender) flower/leaf/stem extract¹, panax ginseng root extract, biotin, tocopheryl, tocopheryl acetate, alcohol¹, citric acid, guar hydroxypropyltrimonium chloride, linoleic acid, menthol, panthenol, phenethyl alcohol, sodium chloride triethyl citrate, benzyl alcohol, potassium sorbate, sodium benzoate. ";
  var expected =   {"alcohol": {"bad": ["alcohol"], "caution": [], "good": ["phenethyl alcohol", "benzyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": ["cocamidopropyl hydroxysultaine", "sodium cocoyl isethionate", "sodium laurylglucosides hydroxypropylsulfonate"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("bad");

});


test('Analyse badly formatted list correctly', () => {
  var list = "Aqua (Water), Coco-Glucoside, Sodium Lauroyl Methyl Isethionate, Acrylates Copolymer, /n Parfum (Fragrance), Phenoxyethanol, Glycol Distearate, Laureth-4, Polyquaternium-10, Benzyl\nAlcohol, Hydroxypropyl Guar Hydroxypropyltrimonium Chloride, Sodium Hydroxide, Limonene, Disodium EDTA, Cocamidopropyl Betaine, Linalool, Geraniol, Dehydroacetic Acid, Sodium\n PCA, Sodium Lactate, Glycerin, PG-Hydroxyethylcellulose Cocodimonium Chloride, Arginine,\n Aspartic Acid, PCA, Formic Acid, Glycine, Alanine, Serine, Valine, Isoleucine, Proline,\nThreonine, Histidine, Phenylalanine";
  var expected = {"alcohol": {"bad": [], "caution": [], "good": ["benzyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": ["sodium lauroyl methyl isethionate"], "good": ["cocamidopropyl betaine"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});

test('Analyse witch hazel with misspelling in Replenish Conditioning Spray', () => {
  var list = "Water/Aqua/Eau, Polysorbate 20, Cetrimonium Chloride, Panthenol, Propylene Glycol, Fragrance/Parfum, Wheat Amino Acids, Glycerin, Cinnamidopropyltrimonium Chloride, Aloe Barbadensis Leaf Juice, Chamomilla Recutita (Matricaria) Flower Extract, Salvia Officinalis (Sage) Extract, Geranium Maculatum Extract, Achillea Millefolium Extract, Melissa Officinalis Leaf Extract, Cymbopogon Schoenanthus Extract, Quercus Alba Bark Extract, Hamamellis Virginiana (Witch Hazel) Extract, Rosa Canina Seed Extract, Symphytum Officinale Leaf Extract, Acrylates/Methoxy PEG-10 Maleate/Styrene Copolymer, Tetrasodium EDTA, Methylisothiazolinone, Methylchloroisothiazolinone, Yellow 5/CI 19140, Benzyl Alcohol, Coumarin, Potassium Sorbate, Phenoxyethanol.";
  var expected =  {"alcohol": {"bad": [], "caution": [], "good": ["benzyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": ["witch"], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});


test('Analyse As I Am Olive & Tea Tree Oil Leave-In Conditioner', () => {
  var list = "Aqua/Water/Eau, Glycerin, Aloe Barbadensis Leaf Juice, Betaine, Cetearyl Alcohol, Olea Europaea (Olive) Fruit Oil, Cocos Nucifera (Coconut) Oil, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Linum Usitatissimum (Linseed) Seed Extract, Quaternium-18, Polysorbate 60, Mentha Piperita (Peppermint) Oil, Fragrance/Parfum, Polyquaternium-37, Phenoxyethanol, Caprylyl Glycol, Propylene Glycol Dicaprylate/Dicaprate, Piroctone Olamine, Phytosterols, Quaternium-80, Propanediol, Polyacrylamide, PPG-1 Trideceth-6, Citric Acid, Laureth-9, PEG-8, Ceramide NG, PEG-3 Distearate, Sodium Lauroyl Lactylate, Coconut Fatty Acids, Sodium Lauroyl Glutamate, Sodium Cocoyl Isethionate, Ceteareth-25, Disodium Ethylene Dicocamide PEG-15 Disulfate, Methyl Ionone, Benzyl Salicylate, Citronellol, Coumarin, Limonene, Geraniol, Hexyl Cinnamal, Hydroxy Citronellal, Lilial, Linalool";
  var expected =  {"alcohol": {"bad": [], "caution": [], "good": ["cetearyl alcohol"], "unknown": []}, "other": {"bad": [], "caution": [], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": ["sodium lauroyl lactylate", "sodium lauroyl glutamate", "sodium cocoyl isethionate"], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("good");

});


test('Dr. Bronner\'s Pure Castile Liquid Soap Hemp Tea Tree', () => {
  var list = "Water, Organic Coconut Oil*, Potassium Hydroxide**, Organic Palm Kernel Oil*, Organic Olive Oil*, Tea Tree Extract, Organic Hemp Oil, Organic Jojoba Oil, Citric Acid, Tocopherol";
  var expected =  {"alcohol": {"bad": [], "caution": [], "good": [], "unknown": []}, "other": {"bad": [], "caution": ["soap"], "good": [], "unknown": []}, "silicones": {"bad": [], "caution": [], "good": [], "unknown": []}, "sulfates": {"bad": [], "caution": [], "good": [], "unknown": []}, "wax": {"bad": [], "caution": [], "good": [], "unknown": []}};
  var results = analyze(list);
  expect(analyze(list)).toEqual(expected);
  expect(detector(results)).toEqual("caution");

});
