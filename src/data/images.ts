// All images served from public/kc/ (symlink → ../../kc wardrobe)
const K = (p: string) => `/kc/${p}`;

// ── Formalwear ───────────────────────────────────────────────────────────────
export const FORMAL = {
  banner:   K('black tie formalwear/tuxedo (1).jpg'),
  tuxedo:   [1,2,3,4,5,6].map(n => K(`black tie formalwear/tuxedo (${n}).jpg`)),
  ties:     [1,2,3,4,5].map(n => K(`black tie formals- tie/ties (${n}).jpg`)),
  dressShoe:[K('dress shoe/dress shoe (1).jpg'), K('dress shoe/dress shoe (9).jpg'), K('dress shoe/dress shoe (10).jpg')],
};

// ── Suits & Tailoring ────────────────────────────────────────────────────────
export const SUITS = {
  banner: K('suits & tailoring/suits/two piece slim fit men.jpg'),
  suits: {
    twoPieceSlim:     K('suits & tailoring/suits/two piece slim fit men.jpg'),
    slimPinstripe:    K('suits & tailoring/suits/Slim Fit — Pinstripe.jpg'),
    regularPlain:     K('suits & tailoring/suits/Regular Fit — Plain.jpg'),
    doubleBreasted:   K('suits & tailoring/suits/Double-Breasted.jpg'),
    checkFit:         K('suits & tailoring/suits/Classic Fit — Check.jpg'),
    slimThreePiece:   K('suits & tailoring/suits/Slim Three-Piece.jpg'),
    classicThreePiece:K('suits & tailoring/suits/Classic Three-Piece.jpg'),
  },
  blazers: {
    solidNavy:        K('suits & tailoring/blazers/Solid Navy.jpg'),
    herringbone:      K('suits & tailoring/blazers/Herringbone.jpg'),
    velvet:           K('suits & tailoring/blazers/Velvet.jpg'),
    doubleBreasted:   K('suits & tailoring/blazers/Relaxed Double-Breasted.jpg'),
    jerseyKnit:       K('suits & tailoring/blazers/Jersey Knit.jpg'),
    houndstooth:      K('suits & tailoring/blazers/Houndstooth.jpg'),
    linen:            K('suits & tailoring/blazers/solid linen Unstructured Blazer.jpg'),
    powerShoulder:    K('suits & tailoring/blazers/oversized Power Shoulder.jpg'),
    powerShoulder2:   K('suits & tailoring/blazers/oversized Power Shoulder (2).jpg'),
    doubleBreasted2:  K('suits & tailoring/blazers/Relaxed Double-Breasted (2).jpg'),
  },
};

// ── Shirts & Tops ────────────────────────────────────────────────────────────
export const SHIRTS = {
  banner: K('shirts & tops/Formal shirts/spread collar white shirt (2).jpg'),
  formal: {
    buttonDown: K('shirts & tops/Formal shirts/Button-Down OCBD Slim.jpg'),
    cutaway:    K('shirts & tops/Formal shirts/Cutaway Collar Slim Fit.jpg'),
    regularBlue:K('shirts & tops/Formal shirts/Regular Fit — Blue.jpg'),
    mandarin:   K('shirts & tops/Formal shirts/Regular Fit Mandarin Shirt.jpg'),
    spread:     K('shirts & tops/Formal shirts/spread collar white shirt (2).jpg'),
  },
  casual: {
    campCuban:  K('shirts & tops/casual shirts/Camp  Cuban Collar Short Sleeve Printed.jpg'),
    chambray:   K('shirts & tops/casual shirts/Chambray Shirt Slim Fit.jpg'),
    linen:      K('shirts & tops/casual shirts/Linen Shirt Relaxed Fit.jpg'),
    overshirt:  K('shirts & tops/casual shirts/Overshirt  Shacket Heavy Shirt Jacket.jpg'),
  },
  polo: {
    classicPique:    K('shirts & tops/polo shirts/Classic Piqué Polo Short Sleeve (1).jpg'),
    merinoPolo:      K('shirts & tops/polo shirts/Merino Polo Fine-Knit (1).jpg'),
    performancePolo: K('shirts & tops/polo shirts/Performance Polo Athletic Fit (1).jpg'),
  },
  tshirts: {
    solidSlim:   K('shirts & tops/Tshirts/Round Neck — Solid Slim Fit (1).jpg'),
    graphic:     K('shirts & tops/Tshirts/Round Neck — Graphic Regular Fit (1).jpg'),
    vNeck:       K('shirts & tops/Tshirts/V-Neck Slim Fit (1).jpg'),
    oversized:   K('shirts & tops/Tshirts/Oversized Drop Shoulder (1).jpg'),
    henley:      K('shirts & tops/Tshirts/Henley Long Sleeve (1).jpg'),
  },
  blouses: {
    silk:     K('shirts & tops/Women Blouses/Silk Blouse Classic Button (1).jpg'),
    peplum:   K('shirts & tops/Women Blouses/Peplum Blouse Fitted Peplum (1).jpg'),
    tieNeck:  K('shirts & tops/Women Blouses/Tie-Neck Blouse Ruffle Front (1).jpg'),
  },
  womenTops: {
    camisole:    K('shirts & tops/women tops/Camisole  Cami Satin (1).jpg'),
    cropTop:     K('shirts & tops/women tops/Crop Top Fitted (1).jpg'),
    offShoulder: K('shirts & tops/women tops/Off-Shoulder Top Bodycon (1).jpg'),
  },
};

// ── Trousers ─────────────────────────────────────────────────────────────────
export const TROUSERS = {
  banner: K('trousers/pants n trousers/trousers (1).jpg'),
  trousers: [1,2,3,4,5,6,7,8].map(n => K(`trousers/pants n trousers/trousers (${n}).jpg`)),
  jeans:    [1,2,3,4,5,6].map(n => K(`jeans/jeans (${n}).jpg`)),
  shorts:   [1,2,3,4].map(n => K(`trousers/shorts/shorts (${n}).jpg`)),
  cargo:    [1,2,3].map(n => K(`trousers/cargo/cargo (${n}).png`)),
  skirts:   [1,2,3,4,5,6,7,8,9,10].map(n => K(`trousers/skirts/skirt (${n}).jpg`)),
};

// ── Casuals ───────────────────────────────────────────────────────────────────
export const CASUALS = {
  banner: K('casuals/casuals (1).jpg'),
  items:  [1,2,3,4,5,6,7,8,9].map(n => K(`casuals/casuals (${n}).jpg`)),
};

// ── Footwear ──────────────────────────────────────────────────────────────────
export const FOOTWEAR = {
  banner: K('footwear/formal shoes/oxford/Plain Cap Toe (1).jpg'),
  oxford: {
    plainCapToe: K('footwear/formal shoes/oxford/Plain Cap Toe (1).jpg'),
    fullBrogue:  K('footwear/formal shoes/oxford/Full Brogue (1).jpg'),
    semiBrogue:  K('footwear/formal shoes/oxford/Semi-Brogue (1).jpg'),
    wholeCut:    K('footwear/formal shoes/oxford/Whole-Cut (1).jpg'),
  },
  loafer: {
    horsebit: K('footwear/formal shoes/Loafer/Horsebit Loafer (1).jpg'),
    penny:    K('footwear/formal shoes/Loafer/Penny Loafer (1).jpg'),
    tassel:   K('footwear/formal shoes/Loafer/Tassel Loafer (1).jpg'),
  },
  monk:   { double: K('footwear/formal shoes/Monk Strap/double monk (1).jpg') },
  derby:  {
    plain:  K('footwear/formal shoes/derby/Plain Derby (1).jpg'),
    brogue: K('footwear/formal shoes/derby/Brogue Derby (1).jpg'),
  },
  chelsea: {
    leather: K('footwear/boots/Chelsea boots/Leather Chelsea (1).jpg'),
    suede:   K('footwear/boots/Chelsea boots/Suede Chelsea (1).jpg'),
  },
  chukka:   { desert: K('footwear/boots/Chukka Boot/Desert Boot (1).jpg') },
  ankle:    { stackedHeel: K('footwear/boots/ankle boots/Stacked Heel (1).jpg') },
  knee:     { riding: K('footwear/boots/Knee Boot/Knee Boot Classic Riding (1).jpg') },
  sneaker: {
    canvasLow: K('footwear/Casual Shoes/sneaker/Canvas Low-Top (1).jpg'),
    dadShoe:   K('footwear/Casual Shoes/sneaker/Dad Shoe (1).jpg'),
    leatherLow:K('footwear/Casual Shoes/sneaker/Low-Top Leathe (1).jpg'),
  },
  espadrille: { classic: K('footwear/Casual Shoes/Espadrille/Espadrille Classic (1).jpg') },
  sandal: {
    leather: K('footwear/sandals/leather sandal/Leather Sandal Gladiator (1).jpg'),
    sport:   K('footwear/sandals/Sport Sandal/Sport Sandal Buckle Strap (1).jpg'),
  },
  heels: {
    stiletto:   K('footwear/women heels/Stiletto/Stiletto Classic Pump (1).jpg'),
    blockHeel:  K('footwear/women heels/Block Heel/Block Heel Mid Block (1).jpg'),
    kittenHeel: K('footwear/women heels/Kitten Heel/Kitten Heel Classic (1).jpg'),
    platform:   K('footwear/women heels/Platform/Platform Platform Pump (1).jpg'),
    wedge:      K('footwear/women heels/Wedge/Wedge Classic Wedge (1).jpg'),
  },
};

// ── Golf ─────────────────────────────────────────────────────────────────────
export const GOLF = {
  banner: K('golf/apparel/polo shirts/Classic Cotton (1).jpg'),
  polo: {
    classicCotton:   K('golf/apparel/polo shirts/Classic Cotton (1).jpg'),
    merinoPolo:      K('golf/apparel/polo shirts/Merino Polo (1).jpg'),
    performancePique:K('golf/apparel/polo shirts/Performance Piqué (1).jpg'),
  },
  shorts:    { performance: K('golf/apparel/golf shorts/Golf Shorts 9-inch Performance (1).jpg') },
  trousers:  { stretchSlim: K('golf/apparel/golf trousers/Stretch Slim (1).jpg'), waterproof: K('golf/apparel/golf trousers/Waterproof Shell.jpg') },
  midLayer:  { quarterZip: K('golf/apparel/mid layer/Mid-Layer Quarter-Zip Fleece (1).jpg') },
  rainJacket:{ packable: K('golf/apparel/rain jacket/Rain Jacket Packable Waterproof (1).jpg') },
  footwear: {
    spiked:    K('golf/footwear/spiked shoe/Spiked Shoe Lace-Up Spiked (1).jpg'),
    spikeless: K('golf/footwear/spikeless shoe/Spikeless Shoe BOA Closure (1).jpg'),
    boot:      K('golf/footwear/Waterproof Golf Boot/Waterproof Golf Boot Winter Golf (1).jpg'),
  },
  equipment: {
    cartBag:  K('golf/equipments/golf bag/Cart Bag (1).jpg'),
    standBag: K('golf/equipments/golf bag/stand bag (1).jpg'),
    trolley:  K('golf/equipments/push trolley/Push Trolley Manual Push (1).jpg'),
  },
  accessories: {
    gloves: K('golf/accesories/golf gloves (1).jpg'),
    cap:    K('golf/accesories/golf tour cap.jpg'),
    visor:  K('golf/accesories/Golf Visor Classic Visor.jpg'),
  },
};

// ── Running ───────────────────────────────────────────────────────────────────
export const RUNNING = {
  banner: K('running/apparel/Running Jacket/Packable Wind (1).jpg'),
  apparel: {
    singlet:    K('running/apparel/Running Singlet/Running Singlet Race Vest (1).jpg'),
    tshirtDry:  K('running/apparel/Running T-Shirt/Short-Sleeve Dry-Fit (1).jpg'),
    tshirtMerino:K('running/apparel/Running T-Shirt/Merino Short-Sleeve (1).jpg'),
    shortsSplit: K('running/apparel/Running Shorts/5-inch Split (1).jpg'),
    shorts2in1:  K('running/apparel/Running Shorts/2-in-1 Short (1).jpg'),
    tights34:    K('running/apparel/Running Tights/34 Tight (1).jpg'),
    tightsFull:  K('running/apparel/Running Tights/Full-Length Tight (1).jpg'),
    jackPackable:K('running/apparel/Running Jacket/Packable Wind (1).jpg'),
    jackWaterproof:K('running/apparel/Running Jacket/Waterproof Shell.jpg'),
  },
  footwear: {
    neutral:    K('running/Footwear/Road Running Shoe/Neutral Cushioned (1).jpg'),
    stability:  K('running/Footwear/Road Running Shoe/Stability (1).jpg'),
    carbon:     K('running/Footwear/Road Running Shoe/Carbon-Plated Racer.jpg'),
    trailGrip:  K('running/Footwear/Road Running Shoe/Trail Running Shoe/Grip Trail (1).jpg'),
    trailWp:    K('running/Footwear/Road Running Shoe/Trail Running Shoe/Waterproof Trail (1).jpg'),
  },
  accessories: {
    compression: K('running/Accessories/Running Socks/Compression.jpg'),
    noShow:      K('running/Accessories/Running Socks/Low No-Show (1).jpg'),
    vest:        K('running/Accessories/Running Vest Pack/Hydration Vest (1).jpg'),
    gpsWatch:    K('running/Accessories/Running Watch  GPS/GPS Training Watch (1).jpg'),
  },
};

// ── Cycling ───────────────────────────────────────────────────────────────────
export const CYCLING = {
  banner: K('cycling/Road Cycling/Cycling Jersey/short Sleeve Race (1).jpg'),
  road: {
    jerseyShort:  K('cycling/Road Cycling/Cycling Jersey/short Sleeve Race (1).jpg'),
    jerseyLong:   K('cycling/Road Cycling/Cycling Jersey/Long-Sleeve Thermal (1).jpg'),
    bibShortRace: K('cycling/Road Cycling/bib short/Race Bib Short (1).jpg'),
    bibShortEnd:  K('cycling/Road Cycling/bib short/Endurance Bib Short (1).jpg'),
    bibTight:     K('cycling/Road Cycling/Bib Tight/Thermal Bib Tight (1).jpg'),
    shoesBoa:     K('cycling/Road Cycling/Cycling Shoe/BOA Road Shoe (1).jpg'),
    shoesLace:    K('cycling/Road Cycling/Cycling Shoe/Lace Road Shoe.jpg'),
    helmetAero:   K('cycling/Road Cycling/Cycling Helmet/Aero Road Helmet (1).jpg'),
    helmetClassic:K('cycling/Road Cycling/Cycling Helmet/Classic Ventilated (1).jpg'),
    windVest:     K('cycling/Road Cycling/Wind Jacket/Wind Jacket Packable Wind Vest (1).jpg'),
  },
  mtb: {
    jersey:       K('cycling/Mountain Biking/MTB Jersey/Trail Jersey (1).jpg'),
    shortsBaggy:  K('cycling/Mountain Biking/MTB Shorts/Trail Baggy Short (1).jpg'),
    shortsDH:     K('cycling/Mountain Biking/MTB Shorts/DH Armoured Shor (1).jpg'),
    shoeClipless: K('cycling/Mountain Biking/MTB Shoe/Clipless MTB Shoe.jpg'),
    shoeFlat:     K('cycling/Mountain Biking/MTB Shoe/Flat Pedal Shoe (1).jpg'),
    helmetFull:   K('cycling/Mountain Biking/MTB Helmet/Full-Face Helmet (1).jpg'),
    helmetTrail:  K('cycling/Mountain Biking/MTB Helmet/Open-Face  Trail Helmet (1).jpg'),
  },
};

// ── Tennis / Padel ────────────────────────────────────────────────────────────
export const TENNIS = {
  banner: K('tennis or padel/apparel/polo shirt/Polo Shirt Performance Polo (1).jpg'),
  apparel: {
    polo:         K('tennis or padel/apparel/polo shirt/Polo Shirt Performance Polo (1).jpg'),
    tshirt:       K('tennis or padel/apparel/tshirt/Athletic Fit Tee (1).jpg'),
    shorts:       K('tennis or padel/apparel/Tennis Shorts/7 inches short.jpg'),
    dress:        K('tennis or padel/apparel/Tennis Dress/a line dress (1).jpg'),
    skirt:        K('tennis or padel/apparel/skirt/Pleated Skirt + Short (1).jpg'),
  },
  footwear: {
    allCourt:   K('tennis or padel/footwear/all court shoe/All-Court Shoe Hard Court (1).jpg'),
    clayCourt:  K('tennis or padel/footwear/clay court shoe/Clay Court Shoe Herringbone Sole (1).jpg'),
    padelShoe:  K('tennis or padel/footwear/padel shoe/Padel Shoe Padel-Specific (1).jpg'),
  },
  equipment: {
    racket97:   K('tennis or padel/equipment/racket/Racket 97 (1).jpg'),
    racket100:  K('tennis or padel/equipment/racket/100 oversized.jpg'),
    padelRacket:K('tennis or padel/equipment/padel racket/Padel Racket Round Shape (1).jpg'),
    bag:        K('tennis or padel/equipment/tennis bag/Tennis Bag 6-Racket Bag (1).jpg'),
  },
};

// ── Skiing / Alpine ───────────────────────────────────────────────────────────
export const SKIING = {
  banner: K('Skiing  Alpine/outer jacket/Ski Jacket/Insulated All-Mountain (1).jpg'),
  outer: {
    hardshell:   K('Skiing  Alpine/outer jacket/Ski Jacket/Hardshell Technical (1).jpg'),
    insulated:   K('Skiing  Alpine/outer jacket/Ski Jacket/Insulated All-Mountain (1).jpg'),
    downShell:   K('Skiing  Alpine/outer jacket/Ski Jacket/Luxury Down Shell (1).jpg'),
    salopetteBib:K('Skiing  Alpine/outer jacket/Ski Salopette/Bib Style (1).jpg'),
    salopetteStraight:K('Skiing  Alpine/outer jacket/Ski Salopette/Straight Trouser (1).jpg'),
  },
  mid: {
    fleece:  K('Skiing  Alpine/Mid Layers/fleece/Grid Fleece Zip (1).jpg'),
    hybrid:  K('Skiing  Alpine/Mid Layers/Hybrid Jacket/Hybrid Jacket Down + Fleece Hybrid (1).jpg'),
  },
  base: {
    thermalTop:    K('Skiing  Alpine/Base Layers/Thermal Top/Merino Lightweight (1).jpg'),
    thermalTopSyn: K('Skiing  Alpine/Base Layers/Thermal Top/Synthetic Midweight (1).jpg'),
    thermalBottom: K('Skiing  Alpine/Base Layers/Thermal Bottom/Merino Long John (1).jpg'),
  },
  footwear: {
    bootBeginner:    K('Skiing  Alpine/footwear/Ski Boot/Beginner Boot (Flex 60–80) (1).jpg'),
    bootIntermediate:K('Skiing  Alpine/footwear/Ski Boot/Intermediate (Flex 90–110) (1).jpg'),
    bootExpert:      K('Skiing  Alpine/footwear/Ski Boot/Expert (Flex 120–130) (1).jpg'),
    apresSki:        K('Skiing  Alpine/footwear/Après-Ski Boot/Sherpa Boot (1).jpg'),
  },
  headwear: {
    helmetMips:  K('Skiing  Alpine/Headwear/Ski Helmet/MIPS In-Mould (1).jpg'),
    gogglesMirror:K('Skiing  Alpine/Headwear/Ski Goggles/Spherical Mirrored (1).jpg'),
    gogglesPhoto: K('Skiing  Alpine/Headwear/Ski Goggles/Photochromic.jpg'),
  },
  accessories: {
    mittInsulated: K('Skiing  Alpine/accesories/Ski Gloves/Insulated Mitt (1).jpg'),
    gloveTech:     K('Skiing  Alpine/accesories/Ski Gloves/Technical Glove (1).jpg'),
    sockMid:       K('Skiing  Alpine/accesories/Ski Socks/Midweight Ski Sock (1).jpg'),
    sockRace:      K('Skiing  Alpine/accesories/Ski Socks/Thin Race Sock (1).jpg'),
  },
};

// ── Combat Sports ─────────────────────────────────────────────────────────────
export const COMBAT = {
  banner: K('Combat Sport/boxing/boxing glove/12oz Training Glove (1).jpg'),
  boxing: {
    glove12:     K('Combat Sport/boxing/boxing glove/12oz Training Glove (1).jpg'),
    glove16:     K('Combat Sport/boxing/boxing glove/16oz Sparring Glove (1).jpg'),
    short:       K('Combat Sport/boxing/boxing short/Satin Short (1).jpg'),
    boot:        K('Combat Sport/boxing/Boxing Boot/Boxing Boot High-Top Boot (1).jpg'),
    headguard:   K('Combat Sport/boxing/Headguard/Cheek Guard (1).jpg'),
  },
  muayThai: {
    glove:     K('Combat Sport/Muay Thai/Muay Thai Glove/10oz Muay Thai (1).jpg'),
    short:     K('Combat Sport/Muay Thai/Muay Thai Short/Traditional Satin (1).jpg'),
    shinGuard: K('Combat Sport/Muay Thai/Shin Guard/Full-Length Shin Pad (1).jpg'),
  },
  bjj: {
    giBlue:    K('Combat Sport/BJJ  MMA/BJJ Gi/Pearl Weave Gi — Blue (1).jpg'),
    giWhite:   K('Combat Sport/BJJ  MMA/BJJ Gi/Weave Gi — White (1).jpg'),
    mmaShort:  K('Combat Sport/BJJ  MMA/MMA Short/Tudo Short.jpg'),
    rashLong:  K('Combat Sport/BJJ  MMA/No-Gi Rashguard/long-Sleeve Rashguard (1).jpg'),
    rashShort: K('Combat Sport/BJJ  MMA/No-Gi Rashguard/Short-Sleeve Rashguard (1).jpg'),
  },
  judo: {
    blue:    K('Combat Sport/judo/judogi/Blue — IJF Approved (1).jpg'),
    white:   K('Combat Sport/judo/judogi/White — Single Weave (1).jpg'),
    double:  K('Combat Sport/judo/judogi/Double Weave.jpg'),
  },
  fencing: {
    jacket: K('Combat Sport/fencing/Fencing Jacket/Fencing Jacket 800N Jacket   (1).jpg'),
    mask:   K('Combat Sport/fencing/Fencing Mask/Fencing Mask FIE 1600N Mask (1).jpg'),
  },
  kendo: {
    kendogi: K('Combat Sport/kando/Cotton Kendogi (1).jpg'),
    hakama:  K('Combat Sport/kando/Hakama (Kendo) Kendo Hakam (1).jpg'),
  },
};

// ── Jewellery ─────────────────────────────────────────────────────────────────
export const JEWELLERY = {
  banner: K('jewellery/jewellery (1).jpg'),
  items:  [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n => K(`jewellery/jewellery (${n}).jpg`)),
};

// ── Watches ───────────────────────────────────────────────────────────────────
export const WATCHES = {
  banner: K('watches/men_s watch/dress watch/Automatic Dress (1).jpg'),
  men: {
    autoDress:    K('watches/men_s watch/dress watch/Automatic Dress (1).jpg'),
    manualDress:  K('watches/men_s watch/dress watch/manual wind dress (1).jpg'),
    classicChron: K('watches/men_s watch/Chronograph/classic chronograph (1).jpg'),
    racingChron:  K('watches/men_s watch/Chronograph/racing chronograph (1).jpg'),
    diver:        K('watches/men_s watch/sports watch/diver watch (2).jpg'),
    pilot:        K('watches/men_s watch/sports watch/Pilot  Aviation.jpg'),
  },
  smart: {
    gps:     K('watches/smart watch/GPS sport watch/GPS Sport Watch Multisport GPS (1).jpg'),
    health:  K('watches/smart watch/health tracker/Health Tracker Health  Sleep Focus (1).jpg'),
  },
  women: {
    fashion:    K('watches/women_s watch/casual watch/Casual Watch Fashion Strap Watch (1).jpg'),
    jewellery:  K('watches/women_s watch/jewellery watch/Jewellery Watch Diamond Set (1).jpg'),
  },
};

// ── Bags ──────────────────────────────────────────────────────────────────────
export const BAGS = {
  banner: K('bag/men_s bag/briefcases/briefcase leather bag (1).jpg'),
  men: {
    techBackpack:   K('bag/men_s bag/backpack/Backpack Tech Backpack (1).jpg'),
    leatherBriefcase:K('bag/men_s bag/briefcases/briefcase leather bag (1).jpg'),
    slimPortfolio:  K('bag/men_s bag/briefcases/Slim Portfolio (1).jpg'),
    canvasMessenger:K('bag/men_s bag/messenger/Messenger Canvas Messenger (1).jpg'),
  },
  sports: {
    sportsBackpack: K('bag/sports bag/back pack/Backpack Sports Backpack (1).jpg'),
    largeDuffel:    K('bag/sports bag/gym duffle/Gym Duffel Large Duffel (1).jpg'),
  },
  travel: {
    alumTrolley:  K('bag/travel/carry on lggage/Aluminium Trolley.jpg'),
    luggage:      K('bag/travel/carry on lggage/luggage (1).jpg'),
    leatherDuffle:K('bag/travel/Weekender  Holdall/Weekender  Holdall Leather Duffle (1).jpg'),
  },
  women: {
    envelopeClutch: K('bag/women_s bag/clutch/Envelope Clutch (1).jpg'),
    frameClutch:    K('bag/women_s bag/clutch/Frame Clutch.jpg'),
    smallCrossbody: K('bag/women_s bag/cross body/Crossbody Small Crossbody (1).jpg'),
    mediumShoulder: K('bag/women_s bag/shoulder bag/Shoulder Bag Medium Shoulder (1).jpg'),
    canvasTote:     K('bag/women_s bag/tote bag/Canvas Tote (1).jpg'),
    leatherTote:    K('bag/women_s bag/tote bag/tote bag leather.jpg'),
  },
};

// ── Accessories ───────────────────────────────────────────────────────────────
export const SCARVES  = { banner: K('scarfs/scarfs (1).jpg'), items: [1,2,3,4,5,6,7].map(n => K(`scarfs/scarfs (${n}).jpg`)) };
export const BELTS    = { banner: K('accesories/belts (1).jpg'), items: [1,2,3,4,5,6,7,8].map(n => K(`accesories/belts (${n}).jpg`)) };
export const EYEWEAR  = { banner: K('eyewear/eyewear (1).jpg'),  items: [1,9,10,11,12,13].map(n => K(`eyewear/eyewear (${n}).jpg`)) };

// ── Heritage ──────────────────────────────────────────────────────────────────
export const INDIAN_ETHNIC = {
  banner: K('indian ethnic/indian ethnic (1).jpg'),
  items:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n => K(`indian ethnic/indian ethnic (${n}).jpg`)),
};

export const JAPANESE = {
  banner: K('japanese traditions/kimono/furisode/Formal Furisode (1).jpg'),
  kimono: {
    furisode:  K('japanese traditions/kimono/furisode/Formal Furisode (1).jpg'),
    tomesode:  K('japanese traditions/kimono/tomesode/Tomesode Kuro Tomesode (1).jpg'),
    uchikake:  K('japanese traditions/kimono/Uchikake/Wedding Uchikake.jpg'),
    yukata:    K('japanese traditions/kimono 1/yukata/Yukata Cotton Summer.jpg'),
  },
  hakama: {
    divided:   K('japanese traditions/hakama/pleated hakama/pleated hakama (divided).jpg'),
    undivided: K('japanese traditions/hakama/pleated hakama/Women_s Style (undivided).jpg'),
  },
  formal:      { montsuki: K('japanese traditions/formal/Montsuki Haori Hakama/Montsuki Haori Hakama Black 5-Mon (1).jpg') },
  martialArts: {
    judogi:    K('japanese traditions/martial arts/judo/Judogi White Competition Gi (1).jpg'),
    karategi:  K('japanese traditions/martial arts/karategi/Light Karate Gi (1).jpg'),
    kendoSet:  K('japanese traditions/martial arts/kendogi+hakama/Kendogi + Hakama Kendo Set (1).jpg'),
  },
};

export const KNIVES = { banner: K('knives/knives (1).jpg'), items: [1,2,3,4,5,6,7,8,9,10].map(n => K(`knives/knives (${n}).jpg`)) };
export const SWORDS = { banner: K('swords/swords (1).jpg'),  items: [1,2,3,4,5,6,7,8,9,10].map(n => K(`swords/swords (${n}).jpg`)) };

// ── Women-specific ────────────────────────────────────────────────────────────
export const DRESSES   = { banner: K('dress/dress (1).jpg'), items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(n => K(`dress/dress (${n}).jpg`)) };
export const JUMPSUITS = { banner: K('jumpsuits/jumpsuit (1).jpg'), items: [1,2,3,4,5,6,7].map(n => K(`jumpsuits/jumpsuit (${n}).jpg`)) };

// ── Kids ──────────────────────────────────────────────────────────────────────
export const KIDSWEAR = { banner: K('kidswear/kidswear (1).jpg'), items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(n => K(`kidswear/kidswear (${n}).jpg`)) };

// ── Women's Pants (separate folder — product shots of women's trousers/wide-leg) ─
export const PANTS = {
  banner:        K('pants/pants (1)(1).jpg'),
  wideLeg:       K('pants/pants (1)(1).jpg'),
  jeansW:        [K('jeans/jeans (1).png'), K('jeans/jeans (13).png')],
};
