import type { CatalogCategory, CatalogProduct, Gender } from '../types';
import {
  FORMAL, SUITS, SHIRTS, TROUSERS, CASUALS, FOOTWEAR,
  GOLF, RUNNING, CYCLING, TENNIS, SKIING, COMBAT,
  JEWELLERY, WATCHES, BAGS, SCARVES, BELTS, EYEWEAR,
  INDIAN_ETHNIC, JAPANESE, KNIVES, SWORDS,
  DRESSES, JUMPSUITS, KIDSWEAR, PANTS,
} from './images';

// ── Category grid (CategoriesPage) ───────────────────────────────────────────

export const CATS: Record<Gender, CatalogCategory[]> = {
  men: [
    { id: 'formalwear',       name: 'Formalwear',         parent: 'Clothing',     img: FORMAL.banner,              tag: 'Black Tie · White Tie · Cocktail' },
    { id: 'suits-tailoring',  name: 'Suits & Tailoring',  parent: 'Clothing',     img: SUITS.banner,               tag: 'Suits · Blazers · Dress Trousers' },
    { id: 'shirts-tops',      name: 'Shirts & Tops',      parent: 'Clothing',     img: SHIRTS.banner,              tag: 'Formal · Casual · Polo · T-Shirts' },
    { id: 'trousers',         name: 'Trousers & Denim',   parent: 'Clothing',     img: TROUSERS.banner,            tag: 'Trousers · Jeans · Shorts · Cargo' },
    { id: 'casuals',          name: 'Casuals',             parent: 'Clothing',     img: CASUALS.banner,             tag: 'Everyday · Smart Casual · Relaxed' },
    { id: 'footwear',         name: 'Footwear',            parent: 'Clothing',     img: FOOTWEAR.banner,            tag: 'Formal Shoes · Boots · Casuals' },
    { id: 'golf',             name: 'Golf',                parent: 'Sports',       img: GOLF.banner,                tag: 'Apparel · Footwear · Equipment' },
    { id: 'running',          name: 'Running',             parent: 'Sports',       img: RUNNING.banner,             tag: 'Road · Trail · Performance' },
    { id: 'cycling',          name: 'Cycling',             parent: 'Sports',       img: CYCLING.banner,             tag: 'Road · Mountain Biking' },
    { id: 'tennis-padel',     name: 'Tennis / Padel',      parent: 'Sports',       img: TENNIS.banner,              tag: 'On Court · Racket Sports' },
    { id: 'skiing-alpine',    name: 'Skiing / Alpine',     parent: 'Sports',       img: SKIING.banner,              tag: 'Outerwear · Layers · Footwear' },
    { id: 'combat-sports',    name: 'Combat Sports',       parent: 'Sports',       img: COMBAT.banner,              tag: 'Boxing · Muay Thai · BJJ · Fencing' },
    { id: 'jewellery',        name: 'Jewellery',           parent: 'Accessories',  img: JEWELLERY.banner,           tag: 'Fine · Cufflinks · Occasion' },
    { id: 'watches',          name: 'Watches',             parent: 'Accessories',  img: WATCHES.banner,             tag: 'Dress · Chronograph · Smart' },
    { id: 'bags',             name: 'Bags',                parent: 'Accessories',  img: BAGS.banner,                tag: 'Leather · Sports · Travel' },
    { id: 'scarves',          name: 'Scarves',             parent: 'Accessories',  img: SCARVES.banner,             tag: 'Cashmere · Silk · Wool' },
    { id: 'belts',            name: 'Belts',               parent: 'Accessories',  img: BELTS.banner,               tag: 'Dress · Casual · Leather' },
    { id: 'eyewear',          name: 'Eyewear',             parent: 'Accessories',  img: EYEWEAR.banner,             tag: 'Sunglasses · Optical' },
  ],
  women: [
    { id: 'suits-tailoring-w',name: 'Suits & Tailoring',  parent: 'Clothing',     img: SUITS.blazers.doubleBreasted, tag: 'Blazers · Power Dressing' },
    { id: 'shirts-tops-w',    name: 'Shirts & Tops',      parent: 'Clothing',     img: SHIRTS.blouses.silk,        tag: 'Blouses · Tops · Camisoles' },
    { id: 'trousers-w',       name: 'Trousers & Skirts',  parent: 'Clothing',     img: TROUSERS.skirts[0],         tag: 'Trousers · Skirts · Jeans' },
    { id: 'dresses',          name: 'Dresses',             parent: 'Clothing',     img: DRESSES.banner,             tag: 'Day · Evening · Occasion' },
    { id: 'jumpsuits',        name: 'Jumpsuits',           parent: 'Clothing',     img: JUMPSUITS.banner,           tag: 'Casual · Formal · Playsuit' },
    { id: 'footwear-w',       name: 'Footwear',            parent: 'Clothing',     img: FOOTWEAR.heels.stiletto,    tag: 'Heels · Boots · Casuals' },
    { id: 'golf-w',           name: 'Golf',                parent: 'Sports',       img: GOLF.banner,                tag: 'Apparel · Footwear · Equipment' },
    { id: 'running-w',        name: 'Running',             parent: 'Sports',       img: RUNNING.banner,             tag: 'Road · Trail · Performance' },
    { id: 'tennis-padel-w',   name: 'Tennis / Padel',      parent: 'Sports',       img: TENNIS.apparel.dress,       tag: 'On Court · Racket Sports' },
    { id: 'skiing-alpine-w',  name: 'Skiing / Alpine',     parent: 'Sports',       img: SKIING.banner,              tag: 'Outerwear · Layers · Footwear' },
    { id: 'jewellery-w',      name: 'Jewellery',           parent: 'Accessories',  img: JEWELLERY.items[5],         tag: 'Fine · Occasion · Statement' },
    { id: 'watches-w',        name: 'Watches',             parent: 'Accessories',  img: WATCHES.women.jewellery,    tag: 'Dress · Fashion · Smart' },
    { id: 'bags-w',           name: 'Bags',                parent: 'Accessories',  img: BAGS.women.leatherTote,     tag: 'Tote · Clutch · Crossbody' },
    { id: 'scarves-w',        name: 'Scarves',             parent: 'Accessories',  img: SCARVES.items[1],           tag: 'Cashmere · Silk · Wool' },
    { id: 'belts-w',          name: 'Belts',               parent: 'Accessories',  img: BELTS.items[2],             tag: 'Dress · Casual · Leather' },
    { id: 'eyewear-w',        name: 'Eyewear',             parent: 'Accessories',  img: EYEWEAR.items[1],           tag: 'Sunglasses · Optical' },
  ],
  kids: [
    { id: 'kidswear', name: 'Kidswear', parent: 'All', img: KIDSWEAR.banner, tag: 'Boys · Girls · Unisex · 2–16y' },
  ],
};

// ── Product configurator data (TypePage) ──────────────────────────────────────

export const PRODS: Record<string, CatalogProduct> = {

  formalwear: {
    banner: FORMAL.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Only' }, { ico: '〰', lbl: 'Brush After Wearing' },
        { ico: '♨', lbl: 'Steam — Do Not Iron' }, { ico: '🌲', lbl: 'Cedar Protection' },
        { ico: '◻', lbl: 'Breathable Garment Bag' },
      ],
      washing: { temp: 'Dry Clean Only', cycle: 'Professional pressing', dry: 'Hang immediately on return', iron: 'Steam only — never direct iron satin lapels', special: 'Brush barathea wool with soft bristle after every wear' },
      hangers: [
        { type: 'Wide Contoured Cedar Suit Hanger — 55cm', barDia: '18mm diameter', spacing: '8–10cm between garments', note: 'Cedar absorbs moisture and deters moths' },
        { type: 'Clamp Trouser Bar — matching set', spacing: 'Hang trousers full-length, no crease fold', note: 'Alternate trouser direction weekly' },
      ],
      blueprint: [
        { zone: 'Full Hanging Rail', height: '180cm clearance', depth: '65cm rail depth', note: 'Min. 4 tuxedos per 60cm · satin garment bags required' },
      ],
      tips: ['Store on wide wooden suit hanger — never wire', 'Use breathable garment bag · never plastic', 'Keep satin lapels protected from friction', 'Rotate wear — allow 48h rest between wears', 'Cedar blocks in every zone for moth protection'],
      img: FORMAL.tuxedo[0],
    },
    retail: {
      lighting: { angle: '25–30° downlight', lux: '500–700 lux', cct: '2700–3000K warm white', fixture: 'Halogen or warm LED PAR20 — 35W equivalent' },
      dimensions: [
        { label: 'Rail Height', value: '210cm from floor — full clearance for tails' },
        { label: 'Face-Out Spacing', value: '10–12cm between garments' },
        { label: 'Lapel Display Height', value: '170cm — eye level for lapel detail' },
        { label: 'Accessory Zone Width', value: '90cm minimum — bow ties · pocket squares · studs' },
        { label: 'Mirror Clearance', value: '180cm floor-to-ceiling mirror · 1.2m in front' },
      ],
      tips: ['Display complete tuxedo sets — jacket, trouser, shirt, bow tie', 'Group by lapel: shawl lapel · peak lapel · notch lapel', 'Warm low-angle lighting reveals barathea texture and satin sheen', 'Dedicated Black Tie / White Tie sections — never intermix', 'Show a polished accessory vignette at eye level'],
      brands: { luxury: ['Tom Ford', 'Brioni', 'Canali'], premium: ['Hugo Boss', 'Ralph Lauren'], accessible: ['Zara', 'Massimo Dutti'] },
      img: FORMAL.tuxedo[1],
    },
    sections: [
      {
        title: 'Black Tie',
        items: [
          { name: 'Tuxedo', sub: 'Single-Breasted · Double-Breasted · Shawl Lapel · Peak Lapel', mat: 'Wool Barathea, Super 150s Wool, Wool-Silk Blend, Velvet', col: '#F1F2EF,#1e1e3a,#3b1218,#004739', img: FORMAL.tuxedo[0], imgs: FORMAL.tuxedo.slice(0,3) },
          { name: 'Bow Tie', sub: 'Self-Tie Silk · Pre-Tied · Velvet · Knitted', mat: 'Silk Grosgrain, Satin Silk, Velvet, Knit Wool', col: '#F1F2EF,#1e1e3a,#3b1218,#004739', img: FORMAL.ties[0], imgs: FORMAL.ties.slice(0,3) },
          { name: 'Dress Shoes', sub: 'Oxford Patent · Opera Pump · Patent Loafer', mat: 'Patent Leather, Calf Leather, Satin', col: '#F1F2EF,#3b1218', img: FORMAL.dressShoe[0], imgs: FORMAL.dressShoe },
        ],
      },
      {
        title: 'White Tie',
        items: [
          { name: 'Tuxedo Jacket', sub: 'Peak Lapel · Shawl Lapel', mat: 'Super 150s Wool, Wool Barathea', col: '#F1F2EF,#1e1e3a', img: FORMAL.tuxedo[3], imgs: FORMAL.tuxedo.slice(3,6) },
          { name: 'Evening Tie', sub: 'Silk · Satin · Velvet', mat: 'Silk, Satin, Velvet', col: '#F1F2EF,#1e1e3a,#3b1218', img: FORMAL.ties[2], imgs: FORMAL.ties.slice(2,5) },
        ],
      },
    ],
  },

  'suits-tailoring': {
    banner: SUITS.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Quarterly' }, { ico: '〰', lbl: 'Brush After Wearing' },
        { ico: '♨', lbl: 'Steam to Refresh' }, { ico: '🌲', lbl: 'Cedar Moth Protection' },
        { ico: '◻', lbl: 'Garment Bag Storage' },
      ],
      washing: { temp: 'Dry clean — suits & wool blazers', cycle: 'Cold hand wash — jersey/knit blazers only', dry: 'Hang damp · reshape shoulders · air dry', iron: 'Low-medium steam · damp press cloth · never direct iron wool', special: 'Spot clean lapels with diluted soda water — blot, never rub' },
      hangers: [
        { type: 'Wide Cedar Contour Suit Hanger — 50cm', barDia: '16mm diameter', spacing: '6–8cm between garments', note: 'Match hanger width to shoulder seam exactly' },
        { type: 'Trouser Clip Bar Hanger — 35cm', spacing: 'Hang full length — no crease bar fold for fine wool', note: 'Clamp above hem — prevents trouser bag stretch' },
      ],
      blueprint: [
        { zone: 'Full Hanging Rail', height: '155cm clearance', depth: '60cm rail depth', note: 'Min. 5 suits per 60cm · leave 8cm gap each' },
        { zone: 'Trouser Rail (Secondary)', height: '90cm from floor', depth: '55cm depth', note: 'Separate from jacket rail — prevents creasing' },
        { zone: 'Shelf (Folded Blazers)', height: '35cm per shelf', depth: '50cm depth', note: 'Max 2 per shelf — never stack more than 2 wool blazers' },
      ],
      tips: ['Alternate between minimum 2 suits — allow 48h to breathe', 'Brush wool in direction of weave after each wear', 'Hang immediately — never leave folded overnight', 'Rotate jacket and trouser storage positions monthly', 'Cedar chips in suit pockets · replace every 6 months'],
      img: SUITS.suits.twoPieceSlim,
    },
    retail: {
      lighting: { angle: '30° downlight + side wash', lux: '600–800 lux', cct: '3000K neutral warm', fixture: 'Track LED — 25W PAR20 · adjustable head' },
      dimensions: [
        { label: 'Rail Height', value: '185cm from floor — full jacket clearance' },
        { label: 'Face-Out Rail', value: '80–90cm per suit including hanger gap' },
        { label: 'Sleeve Display', value: '160cm — right sleeve forward, shows fabric weave' },
        { label: 'Swatch Board', value: '80cm from floor — eye level for seated client' },
        { label: 'Look Spacing', value: 'Min. 120cm between full suit vignettes' },
      ],
      tips: ['Display suits as complete looks — jacket, shirt, tie, trouser', 'Group by formality tier: business · smart casual · occasion', 'Position fabric swatch boards at client seating height', 'Face-out one key suit per section as hero piece', 'Side lighting reveals weave texture in herringbone and check fabrics'],
      brands: { luxury: ['Brioni', 'Canali', 'Kiton'], premium: ['Ermenegildo Zegna', 'Boglioli'], accessible: ['Hugo Boss', 'Massimo Dutti'] },
      img: SUITS.suits.twoPieceSlim,
    },
    sections: [
      {
        title: 'Suits',
        items: [
          { name: 'Two Piece Slim Fit', sub: 'Super 120s Wool · Business / Office', mat: 'Super 120s Wool', col: '#3a3a3a,#1e1e3a,#F1F2EF', img: SUITS.suits.twoPieceSlim },
          { name: 'Slim Fit Pinstripe', sub: 'Super 130s Wool · Boardroom / Business', mat: 'Super 130s Wool', col: '#3a3a3a,#1e1e3a', img: SUITS.suits.slimPinstripe },
          { name: 'Regular Fit Plain', sub: 'Wool · Business / Formal', mat: 'Wool', col: '#3a3a3a,#F1F2EF,#1e1e3a', img: SUITS.suits.regularPlain },
          { name: 'Double-Breasted', sub: 'Wool-Cashmere · Boardroom / Formal', mat: 'Wool-Cashmere', col: '#1e1e3a,#F1F2EF', img: SUITS.suits.doubleBreasted },
          { name: 'Classic Check', sub: 'Wool · Business / Smart', mat: 'Wool', col: '#3a3a3a,#c2b280', img: SUITS.suits.checkFit },
          { name: 'Slim Three-Piece', sub: 'Super 120s Wool · Special Occasion', mat: 'Super 120s Wool', col: '#3a3a3a,#1e1e3a', img: SUITS.suits.slimThreePiece },
          { name: 'Classic Three-Piece', sub: 'Wool · Formal / Boardroom', mat: 'Wool', col: '#F1F2EF,#3a3a3a', img: SUITS.suits.classicThreePiece },
        ],
      },
      {
        title: 'Blazers',
        items: [
          { name: 'Solid Navy Blazer', sub: 'Wool · Smart Casual / Business', mat: 'Wool', col: '#1e1e3a,#3a3a3a', img: SUITS.blazers.solidNavy },
          { name: 'Herringbone', sub: 'Wool · Casual / Smart', mat: 'Wool Herringbone', col: '#3a3a3a,#c2b280', img: SUITS.blazers.herringbone },
          { name: 'Velvet Blazer', sub: 'Velvet · Evening / Cocktail', mat: 'Velvet', col: '#1e1e3a,#3b1218,#F1F2EF', img: SUITS.blazers.velvet },
          { name: 'Double-Breasted Relaxed', sub: 'Stretch Wool · Smart Casual', mat: 'Stretch Wool', col: '#3a3a3a,#F1F2EF', img: SUITS.blazers.doubleBreasted },
          { name: 'Jersey Knit', sub: 'Jersey · Travel / Casual', mat: 'Jersey Knit', col: '#F1F2EF,#3a3a3a,#1e1e3a', img: SUITS.blazers.jerseyKnit },
          { name: 'Houndstooth', sub: 'Wool · Smart Casual / Autumn', mat: 'Wool Houndstooth', col: '#F1F2EF,#ffffff', img: SUITS.blazers.houndstooth },
          { name: 'Linen Unstructured', sub: 'Linen · Summer / Casual', mat: 'Linen', col: '#c2b280,#ffffff,#3a3a3a', img: SUITS.blazers.linen },
          { name: 'Oversized Power Shoulder', sub: 'Structured Wool · Statement / Formal', mat: 'Wool', col: '#F1F2EF,#3a3a3a,#1e1e3a', img: SUITS.blazers.powerShoulder },
        ],
      },
    ],
  },

  'shirts-tops': {
    banner: SHIRTS.banner,
    storage: {
      care: [
        { ico: '🌊', lbl: 'Machine Wash 40°C' }, { ico: '◻', lbl: 'No Tumble Dry (Formal)' },
        { ico: '♨', lbl: 'Iron 200°C Cotton' }, { ico: '〰', lbl: 'Hang Damp to Shape' },
        { ico: '⊙', lbl: 'Dry Clean (Silk Only)' },
      ],
      washing: { temp: '40°C cotton · 30°C delicate · silk dry clean', cycle: 'Gentle cycle — turn inside out for printed / coloured', dry: 'Hang damp immediately · reshape collar · no tumble dry for formal', iron: '200°C cotton · 150°C blends · iron damp for crease-free finish', special: 'Starch collar lightly for formal dress shirts · store unbuttoned' },
      hangers: [
        { type: 'Slim Wooden Shirt Hanger — 42cm', barDia: '12mm diameter', spacing: '4–5cm between shirts', note: 'Never use wire — distorts shoulder shape' },
        { type: 'Slim Velvet Non-Slip Hanger — 44cm', spacing: '4cm · velvet prevents slipping of silk and satin', note: 'Use for casual and linen shirts' },
      ],
      blueprint: [
        { zone: 'Half Hanging Rail', height: '90cm clearance', depth: '45cm depth', note: 'Max 12 shirts per 60cm rail · allow collar to breathe' },
        { zone: 'Shelf (Folded Casual)', height: '30cm per shelf', depth: '40cm depth', note: 'T-shirts and polos: fold KonMari vertical — 6 per 30cm' },
        { zone: 'Drawer (Undershirts)', height: '15cm drawer height', depth: '45cm depth', note: 'Roll t-shirts to maximise space — 10 per standard drawer' },
      ],
      tips: ['Button collar button when storing to maintain shape', 'Hang formal shirts — never fold', 'Iron on reverse for patterned or coloured fabrics', 'Air after wearing before returning to wardrobe', 'Linen: fold loosely — tight folds cause permanent creases'],
      img: SHIRTS.formal.buttonDown,
    },
    retail: {
      lighting: { angle: '35° downlight · adjustable track', lux: '800–1000 lux', cct: '3500K neutral', fixture: 'LED track PAR20 — 20W · directional adjustable' },
      dimensions: [
        { label: 'Half-Rail Height', value: '90cm from floor — collar at eye level for browsing' },
        { label: 'Face-Out Spacing', value: '5–6cm between shirts on rail' },
        { label: 'Collar Hero Display', value: '165cm height — collar spread facing customer' },
        { label: 'Folded Stack Width', value: '60cm per category — max 8 shirts per stack' },
        { label: 'Colour Run Length', value: '120cm per shade family · white · blue · stripe' },
      ],
      tips: ['Display collar styles as hero pieces — spread · cutaway · mandarin', 'Group by formality tier: formal · smart casual · casual', 'White and blue as anchor colours — patterned as accent', 'Fold sleeves evenly for stacked display — 3 folds per shirt', 'Highlight fabric texture with directional side lighting'],
      brands: { luxury: ['Turnbull & Asser', 'Loro Piana'], premium: ["Drake's", 'Ralph Lauren'], accessible: ['Zara', 'Massimo Dutti'] },
      img: SHIRTS.formal.buttonDown,
    },
    sections: [
      {
        title: 'Formal Shirts',
        items: [
          { name: 'Button-Down OCBD Slim', sub: 'Slim Fit · Business / Smart Casual', mat: 'Cotton Oxford', col: '#ffffff,#d4e0f0,#c2b280', img: SHIRTS.formal.buttonDown },
          { name: 'Cutaway Collar', sub: 'Slim Fit · Business / Formal', mat: 'Cotton Poplin', col: '#ffffff,#d4e0f0', img: SHIRTS.formal.cutaway },
          { name: 'Regular Fit Blue', sub: 'Regular Fit · Business / Office', mat: 'Cotton Poplin', col: '#d4e0f0,#1e1e3a', img: SHIRTS.formal.regularBlue },
          { name: 'Mandarin Collar', sub: 'Regular Fit · Smart Casual / Occasion', mat: 'Cotton', col: '#ffffff,#3a3a3a,#F1F2EF', img: SHIRTS.formal.mandarin },
          { name: 'Spread Collar White', sub: 'Classic Fit · Formal / Business', mat: 'Egyptian Cotton', col: '#ffffff', img: SHIRTS.formal.spread },
        ],
      },
      {
        title: 'Casual Shirts',
        items: [
          { name: 'Camp / Cuban Collar', sub: 'Short Sleeve · Casual / Resort', mat: 'Viscose, Linen', col: '#c2b280,#3a3a3a,#ffffff', img: SHIRTS.casual.campCuban },
          { name: 'Chambray Slim', sub: 'Slim Fit · Smart Casual / Weekend', mat: 'Chambray Cotton', col: '#d4e0f0,#1e1e3a', img: SHIRTS.casual.chambray },
          { name: 'Linen Relaxed', sub: 'Relaxed Fit · Casual / Holiday', mat: 'Linen', col: '#c2b280,#ffffff,#3a3a3a', img: SHIRTS.casual.linen },
          { name: 'Overshirt / Shacket', sub: 'Relaxed Fit · Casual / Layering', mat: 'Heavy Cotton, Wool', col: '#3a3a3a,#c2b280,#1e1e3a', img: SHIRTS.casual.overshirt },
        ],
      },
      {
        title: 'Polo Shirts',
        items: [
          { name: 'Classic Piqué Polo', sub: 'Short Sleeve · Smart Casual / Golf', mat: 'Cotton Piqué', col: '#ffffff,#1e1e3a,#3a3a3a,#c2b280', img: SHIRTS.polo.classicPique },
          { name: 'Merino Polo Fine-Knit', sub: 'Fine Knit · Smart Casual / Travel', mat: 'Merino Wool', col: '#F1F2EF,#3a3a3a,#c2b280', img: SHIRTS.polo.merinoPolo },
          { name: 'Performance Polo', sub: 'Athletic Fit · Sport / Active', mat: 'Performance Polyester', col: '#1e1e3a,#F1F2EF,#ffffff', img: SHIRTS.polo.performancePolo },
        ],
      },
      {
        title: 'T-Shirts',
        items: [
          { name: 'Round Neck Solid', sub: 'Slim Fit · Casual / Everyday', mat: 'Cotton', col: '#ffffff,#F1F2EF,#3a3a3a,#1e1e3a', img: SHIRTS.tshirts.solidSlim },
          { name: 'Round Neck Graphic', sub: 'Regular Fit · Casual / Streetwear', mat: 'Cotton', col: '#ffffff,#F1F2EF,#3a3a3a', img: SHIRTS.tshirts.graphic },
          { name: 'V-Neck Slim', sub: 'Slim Fit · Smart Casual', mat: 'Cotton', col: '#ffffff,#F1F2EF,#3a3a3a', img: SHIRTS.tshirts.vNeck },
          { name: 'Oversized Drop Shoulder', sub: 'Oversized · Streetwear / Casual', mat: 'Heavyweight Cotton', col: '#ffffff,#F1F2EF,#3a3a3a', img: SHIRTS.tshirts.oversized },
          { name: 'Henley Long Sleeve', sub: 'Regular Fit · Smart Casual', mat: 'Cotton-Modal', col: '#F1F2EF,#3a3a3a,#c2b280', img: SHIRTS.tshirts.henley },
        ],
      },
    ],
  },

  trousers: {
    banner: TROUSERS.banner,
    storage: {
      care: [
        { ico: '🌊', lbl: 'Wash 30°C Gentle' }, { ico: '◻', lbl: 'No Tumble Dry (Wool)' },
        { ico: '♨', lbl: 'Low Iron — Damp Cloth' }, { ico: '〰', lbl: 'Hang Full Length' },
        { ico: '❄', lbl: 'Cold Wash — Denim' },
      ],
      washing: { temp: '30°C wool & formal · cold for denim · 40°C cotton chino', cycle: 'Gentle cycle — turn denim inside out to preserve colour', dry: 'Hang full length damp · reshape waistband · no tumble dry for tailored', iron: 'Damp press cloth on wool · medium heat on cotton · steam denim seams', special: 'Dry clean pleated wool trousers · spot clean suede patches only' },
      hangers: [
        { type: 'Trouser Clip Bar Hanger — 35cm clamp', spacing: 'Hang full length — clip above hem, prevents knee bag', note: 'Never fold over a single bar — creates permanent centre crease' },
        { type: 'Multi-Trouser Tiered Hanger — 5 bar', spacing: '2–3cm between legs — open air circulation', note: 'For casual chino and denim only — not fine wool' },
      ],
      blueprint: [
        { zone: 'Full Hang Rail', height: '115cm clearance', depth: '50cm depth', note: 'Clip at hem — full length hang · 8 pairs per 60cm rail' },
        { zone: 'Trouser Rail', height: '95cm from floor', depth: '50cm depth', note: 'Dedicated rail below jacket zone — prevents cross-crease' },
        { zone: 'Shelf (Folded Denim)', height: '25cm per shelf', depth: '45cm depth', note: 'KonMari vertical fold · 8 pairs per 45cm shelf width' },
      ],
      tips: ['Hang wool and formal trousers immediately after wearing', 'Rotate between 3+ pairs — allow 24h rest to recover shape', 'Press crease with damp cloth weekly for tailored trousers', 'Store denim folded flat — avoid stacking more than 5 pairs', 'Cedar chips in drawer prevent moth damage to wool'],
      img: TROUSERS.banner,
    },
    retail: {
      lighting: { angle: '40° downlight · frontal wash', lux: '700–900 lux', cct: '3500K neutral', fixture: 'LED track PAR20 — adjustable head · side wash for texture' },
      dimensions: [
        { label: 'Trouser Bar Height', value: '95cm from floor — waistband at browsing height' },
        { label: 'Face-Out Spacing', value: '4–5cm between pairs on face-out rail' },
        { label: 'Folded Stack Width', value: '45cm per fabric group — wool · denim · cotton' },
        { label: 'Folded Stack Height', value: 'Max 6 pairs per stack — waist facing forward' },
        { label: 'Full-Length Display', value: '115cm clearance minimum — hem must not touch floor' },
      ],
      tips: ['Group by fabric: tailored wool · chino cotton · denim · linen', 'Display key trouser as flat lay with matching shirt and shoe', 'Show fabric composition and care label clearly at waistband', 'Denim: display by wash — light · medium · dark · black', 'Side lighting reveals twill weave in chino and herringbone trousers'],
      brands: { luxury: ['Brioni', 'Canali'], premium: ['Ralph Lauren', 'Hugo Boss'], accessible: ['Zara', 'Massimo Dutti'] },
      img: TROUSERS.banner,
    },
    sections: [
      {
        title: 'Trousers',
        items: TROUSERS.trousers.slice(0, 6).map((img, i) => ({
          name: ['Slim Chino', 'Straight Chino', 'Tailored Trouser', 'Pleated Trouser', 'Slim Formal', 'Wide Leg'][i],
          sub: ['Slim · Smart Casual', 'Straight · Casual', 'Slim · Business', 'Pleated · Business', 'Slim · Formal', 'Wide · Fashion'][i],
          mat: 'Cotton, Wool, Linen, Stretch Cotton',
          col: '#c2b280,#3a3a3a,#F1F2EF,#1e1e3a',
          img,
        })),
      },
      {
        title: 'Denim',
        items: TROUSERS.jeans.slice(0, 5).map((img, i) => ({
          name: ['Slim Fit Jeans', 'Straight Fit', 'Skinny', 'Relaxed Fit', 'Wide Leg'][i],
          sub: ['Slim · Casual', 'Straight · Everyday', 'Skinny · Casual', 'Relaxed · Casual', 'Wide · Fashion'][i],
          mat: 'Denim, Stretch Denim',
          col: '#1e1e3a,#3a3a3a,#F1F2EF',
          img,
        })),
      },
      {
        title: 'Shorts',
        items: TROUSERS.shorts.slice(0, 4).map((img, i) => ({
          name: ['Chino Shorts', 'Linen Shorts', 'Smart Shorts', 'Casual Shorts'][i],
          sub: ['Smart Casual · Summer', 'Casual · Holiday', 'Smart · City', 'Casual · Weekend'][i],
          mat: 'Cotton, Linen',
          col: '#c2b280,#3a3a3a,#F1F2EF',
          img,
        })),
      },
      {
        title: 'Cargo',
        items: TROUSERS.cargo.map((img, i) => ({
          name: ['Slim Cargo', 'Regular Cargo', 'Tech Cargo'][i],
          sub: 'Utility · Casual / Outdoor',
          mat: 'Cotton, Nylon',
          col: '#3a3a3a,#c2b280,#F1F2EF',
          img,
        })),
      },
    ],
  },

  casuals: {
    banner: CASUALS.banner,
    storage: {
      care: [
        { ico: '🌊', lbl: 'Machine Wash 40°C' }, { ico: '◻', lbl: 'Tumble Dry Low' },
        { ico: '♨', lbl: 'Iron Low–Med Heat' }, { ico: '〰', lbl: 'Hang or Fold' },
        { ico: '❄', lbl: '30°C Merino / Knit' },
      ],
      washing: { temp: '40°C cotton · 30°C blends and merino · cold for graphic prints', cycle: 'Normal cycle cotton · gentle cycle knit and printed · always turn inside out', dry: 'Tumble dry low cotton · air dry merino flat · reshape hoodies damp', iron: 'Low heat synthetics · medium heat cotton · no iron on graphic prints', special: 'Merino and wool blends: hand wash cold · lay flat to dry — never wring' },
      hangers: [
        { type: 'Standard Tubular Hanger — 44cm', spacing: '4cm between garments — casual items need less gap', note: 'Plastic or wood both suitable for casual weight fabrics' },
        { type: 'Velvet Slim Hanger — 44cm', spacing: '4cm · prevents slipping on slippery fabrics like satin blend', note: 'Ideal for casual shirts and lightweight overshirts' },
      ],
      blueprint: [
        { zone: 'Half Hanging Rail', height: '90cm clearance', depth: '45cm depth', note: '12–14 pieces per 60cm · casuals can hang closer than formal' },
        { zone: 'Shelf (Folded Knitwear)', height: '30cm per shelf', depth: '45cm depth', note: 'Fold knits — never hang · max 3 per stack to avoid stretching' },
        { zone: 'Drawer (T-shirts / Basics)', height: '15cm drawer', depth: '45cm depth', note: 'Roll KonMari vertical · 12–15 per standard drawer' },
      ],
      tips: ['Fold knitwear — hanging stretches shoulder seam over time', 'Air worn casuals for 2h before returning to wardrobe', 'Sort by colour family within each type for easy selection', 'Rotate seasonal items — store off-season in breathable boxes', 'Avoid overfilling shelves — creasing increases with compression'],
      img: CASUALS.banner,
    },
    retail: {
      lighting: { angle: '45° wide wash · relaxed ambience', lux: '700–800 lux', cct: '4000K neutral to bright', fixture: 'Wide-beam LED — 30W PAR30 · ambient track system' },
      dimensions: [
        { label: 'Half-Rail Height', value: '85–90cm — browsable at arm reach' },
        { label: 'Face-Out Spacing', value: '4–5cm — casual items can sit closer than tailoring' },
        { label: 'Folded Display Width', value: '60cm per category — t-shirts · knitwear · hoodies' },
        { label: 'Stack Height', value: 'Max 8 folded items per stack — face-out colour visible' },
        { label: 'Brand Zone Width', value: '120cm minimum per brand grouping' },
      ],
      tips: ['Create relaxed lifestyle looks — full outfit vignettes by occasion', 'Group by end-use: weekend · smart casual · active casual', 'Use open shelving for folded items — accessibility drives casual browsing', 'Anchor with neutral base colours · accent with seasonal palette', 'Wide ambient lighting creates approachable, relaxed retail atmosphere'],
      brands: { premium: ['Acne Studios', 'COS', 'Ralph Lauren'], accessible: ['Zara', 'Massimo Dutti'] },
      img: CASUALS.banner,
    },
    sections: [
      {
        title: 'Casual Wear',
        items: CASUALS.items.map((img, i) => ({
          name: `Casual Look ${i + 1}`,
          sub: 'Smart Casual · Relaxed Fit',
          mat: 'Cotton, Jersey, Linen',
          col: '#F1F2EF,#3a3a3a,#c2b280,#ffffff',
          img,
        })),
      },
    ],
  },

  footwear: {
    banner: FOOTWEAR.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Wipe After Wearing' }, { ico: '🌲', lbl: 'Cedar Shoe Trees' },
        { ico: '⊙', lbl: 'Condition Leather Monthly' }, { ico: '◻', lbl: 'Dust Bag Storage' },
        { ico: '❄', lbl: 'Suede Brush — Dry' },
      ],
      washing: { temp: 'Never machine wash — leather or suede', cycle: 'Spot clean only · damp cloth for smooth leather', dry: 'Air dry naturally away from heat — never direct sunlight', iron: 'No heat — use shoe stretcher for fit adjustment only', special: 'Condition smooth leather monthly · suede protector spray every 6 weeks · patent leather — wipe with petroleum jelly' },
      hangers: [
        { type: 'Cedar Shoe Trees — fitted to shoe last', spacing: 'Insert immediately after removing — holds shape within 10 min', note: 'Cedar absorbs moisture from foot sweat · replaces original shape' },
        { type: 'Slanted Shoe Shelf — 30° angle', spacing: '25cm per pair width · 15cm height clearance', note: 'Slant displays toe box · prevents leather creasing from flat stacking' },
      ],
      blueprint: [
        { zone: 'Slanted Shoe Shelf', height: '15cm per shelf tier', depth: '35cm depth', note: '4 pairs per 100cm shelf at 30° display angle' },
        { zone: 'Tall Boot Zone', height: '45cm clearance', depth: '35cm depth', note: 'Boot shapers maintain shaft · knee boots require 50cm clearance' },
        { zone: 'Dust Bag Storage', height: '20cm per box', depth: '35cm depth', note: 'Seasonal rotation — 1 clear photo label per shoe box' },
      ],
      tips: ['Rotate between minimum 3 pairs — allow 24h for leather to dry', 'Never wear same leather shoes two consecutive days', 'Insert cedar shoe trees within 30 minutes of removing', 'Polish smooth leather every 3–4 wears · condition every 4–6 weeks', 'Store suede away from smooth leather — oils transfer'],
      img: FOOTWEAR.oxford.plainCapToe,
    },
    retail: {
      lighting: { angle: '25° front-angle uplighting + 30° downlight', lux: '400–600 lux', cct: '2700–3000K warm', fixture: 'Halogen equivalent LED · uplighting at plinth base reveals sole profile' },
      dimensions: [
        { label: 'Shoe Shelf Depth', value: '35cm — 30° slant forward for toe-box display' },
        { label: 'Shelf Height Clearance', value: '15cm per tier — 20cm for boots' },
        { label: 'Width Per Pair', value: '25cm — allows full silhouette visibility' },
        { label: 'Display Height Range', value: '30cm to 160cm from floor — eye-level for key hero pieces' },
        { label: 'Boot Zone Height', value: '50cm clearance for knee-high · 35cm for ankle boots' },
      ],
      tips: ['Always display with matching cedar shoe trees — shows investment quality', 'Group by formality: dress Oxford · smart boot · casual sneaker', 'Hero shoe at 90–100cm from floor — natural browsing height', 'Show sole profile on at least one shoe per style — signals construction quality', 'Warm uplighting from base reveals welt stitching and leather texture'],
      brands: { luxury: ['Tom Ford', 'Berluti', 'Edward Green'], premium: ['Loake', 'Church\'s', 'Ralph Lauren'], accessible: ['Zara', 'Massimo Dutti'] },
      img: FOOTWEAR.oxford.plainCapToe,
    },
    sections: [
      {
        title: 'Oxford',
        items: [
          { name: 'Plain Cap Toe Oxford', sub: 'Classic · Black Tie / Business', mat: 'Calf Leather, Suede', col: '#F1F2EF,#3b1218,#3a3a3a', img: FOOTWEAR.oxford.plainCapToe },
          { name: 'Full Brogue Oxford', sub: 'Country · Smart Casual', mat: 'Calf Leather, Suede', col: '#3b1218,#3a3a3a,#c2b280', img: FOOTWEAR.oxford.fullBrogue },
          { name: 'Semi-Brogue Oxford', sub: 'Business · Formal / Smart', mat: 'Calf Leather', col: '#F1F2EF,#3b1218', img: FOOTWEAR.oxford.semiBrogue },
          { name: 'Whole-Cut Oxford', sub: 'Dress · Black Tie / Formal', mat: 'Calf Leather, Patent', col: '#F1F2EF,#3b1218', img: FOOTWEAR.oxford.wholeCut },
        ],
      },
      {
        title: 'Loafer',
        items: [
          { name: 'Horsebit Loafer', sub: 'Smart Casual / Business', mat: 'Calf Leather, Suede', col: '#3b1218,#F1F2EF,#c2b280', img: FOOTWEAR.loafer.horsebit },
          { name: 'Penny Loafer', sub: 'Smart Casual / Weekend', mat: 'Calf Leather, Suede', col: '#3b1218,#3a3a3a,#F1F2EF', img: FOOTWEAR.loafer.penny },
          { name: 'Tassel Loafer', sub: 'Smart Casual / Business', mat: 'Calf Leather', col: '#3b1218,#F1F2EF,#1e1e3a', img: FOOTWEAR.loafer.tassel },
        ],
      },
      {
        title: 'Monk Strap & Derby',
        items: [
          { name: 'Double Monk Strap', sub: 'Business / Smart', mat: 'Calf Leather, Suede', col: '#F1F2EF,#3b1218,#3a3a3a', img: FOOTWEAR.monk.double },
          { name: 'Plain Derby', sub: 'Business / Formal', mat: 'Calf Leather', col: '#F1F2EF,#3b1218', img: FOOTWEAR.derby.plain },
          { name: 'Brogue Derby', sub: 'Smart Casual / Business', mat: 'Calf Leather, Suede', col: '#3b1218,#3a3a3a,#c2b280', img: FOOTWEAR.derby.brogue },
        ],
      },
      {
        title: 'Boots',
        items: [
          { name: 'Leather Chelsea Boot', sub: 'Smart Casual / Everyday', mat: 'Calf Leather', col: '#F1F2EF,#3b1218', img: FOOTWEAR.chelsea.leather },
          { name: 'Suede Chelsea Boot', sub: 'Smart Casual / Weekend', mat: 'Suede', col: '#c2b280,#3a3a3a', img: FOOTWEAR.chelsea.suede },
          { name: 'Desert / Chukka Boot', sub: 'Casual / Smart Casual', mat: 'Suede, Leather', col: '#c2b280,#3a3a3a,#3b1218', img: FOOTWEAR.chukka.desert },
          { name: 'Stacked Heel Ankle Boot', sub: 'Casual / Fashion', mat: 'Leather, Suede', col: '#F1F2EF,#3b1218', img: FOOTWEAR.ankle.stackedHeel },
        ],
      },
      {
        title: 'Casual Shoes',
        items: [
          { name: 'Canvas Low-Top Sneaker', sub: 'Casual / Everyday', mat: 'Canvas, Leather', col: '#ffffff,#F1F2EF,#3a3a3a', img: FOOTWEAR.sneaker.canvasLow },
          { name: 'Dad Shoe', sub: 'Casual / Streetwear', mat: 'Mixed Upper', col: '#ffffff,#3a3a3a', img: FOOTWEAR.sneaker.dadShoe },
          { name: 'Leather Low-Top', sub: 'Smart Casual', mat: 'Leather', col: '#ffffff,#F1F2EF', img: FOOTWEAR.sneaker.leatherLow },
          { name: 'Espadrille', sub: 'Casual / Summer / Resort', mat: 'Canvas, Jute', col: '#c2b280,#ffffff,#F1F2EF', img: FOOTWEAR.espadrille.classic },
          { name: 'Leather Sandal', sub: 'Casual / Summer', mat: 'Leather', col: '#3b1218,#c2b280', img: FOOTWEAR.sandal.leather },
        ],
      },
    ],
  },

  golf: {
    banner: GOLF.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash Cold · Performance Fabrics' }, { ico: '⊙', lbl: 'Avoid Fabric Softener' },
        { ico: '◻', lbl: 'Hang Dry — No Tumble' }, { ico: '🌲', lbl: 'Breathable Garment Bag for Leather' },
        { ico: '❄', lbl: 'Store Shoes with Cedar Inserts' },
      ],
      washing: { temp: 'Polo shirts / shorts: 30°C gentle cycle · waterproof shells: 30°C tech-wash detergent', cycle: 'Turn performance fabrics inside-out · close zips · mesh laundry bag for polos', dry: 'Hang dry immediately — tumble drying degrades DWR coating on waterproof shells', iron: 'Low heat only on cotton polo collars — never iron synthetic performance fabrics', special: 'Fleece: zip inside-out · wash separately to prevent pilling · re-proof waterproof shells after 20 washes' },
      hangers: [
        { type: 'Plastic Shirt Hanger — 44cm', barDia: '12mm bar', spacing: '5–6cm per polo', note: 'Avoid wire hangers — stretch polo collars' },
        { type: 'Trouser Clip Hanger — Waistband', spacing: '4cm per pair', note: 'Hang stretch trousers by waistband to maintain shape' },
        { type: 'Padded Hanger for Waterproof Jacket', barDia: 'N/A — padded', spacing: '8cm per jacket', note: 'Hang packable jacket unfolded to preserve DWR membrane' },
      ],
      blueprint: [
        { zone: 'Polo / Apparel Hanging', height: '80cm rail height (folded short stack or hung)', depth: '50cm', note: 'Group by weight: cotton polos · performance polos · outerwear' },
        { zone: 'Shoe Shelf (Golf Footwear)', height: '20–22cm shelf height per pair', depth: '35cm', note: 'Store with spiked shoes face-in to protect adjacent items' },
        { zone: 'Equipment Cubby (Bag / Trolley)', height: '120–150cm vertical clearance', depth: '60cm', note: 'Lean stand bag vertically — lay cart bag flat on base shelf' },
        { zone: 'Accessories Drawer', height: '10cm deep drawer', depth: '40cm', note: 'Gloves flat-stored in zip-seal bag · caps on crown-form inserts' },
      ],
      tips: ['Remove metal spikes before indoor storage to protect shelf surfaces', 'Air-dry shoes 24h before boxing — moisture causes sole delamination', 'Store gloves in original pack or flat zip-seal bag to retain cabretta leather shape', 'Re-proof waterproof shells with Nikwax TX.Direct every 20 washes', 'Cedar shoe trees absorb moisture and maintain footwear shape in storage'],
      img: GOLF.banner,
    },
    retail: {
      lighting: { angle: '30° overhead spot · accent footwear from 15° low angle', lux: '800–1000 lux', cct: '4000K neutral white', fixture: 'LED PAR38 track spots · warm fill for apparel · accent LED for footwear' },
      dimensions: [
        { label: 'Apparel Rail Height', value: '180cm' }, { label: 'Hanging Spacing (Polos)', value: '5–6cm per unit' },
        { label: 'Shoe Shelf Height', value: '22cm per shelf · angled 10° forward' }, { label: 'Equipment Floor Area', value: '90 × 90cm per bag display' },
        { label: 'Accessories Counter Depth', value: '45cm at 90–100cm height' },
      ],
      tips: ['Display polo shirts on slim velvet hangers — collars stay crisp under high lux track lighting', 'Use angled shoe shelf risers to show sole profile and spike configuration', 'Golf bags displayed standing on floor risers with club head visible at top', 'Mannequin styling: full head-to-toe look with matching cap and gloves', 'Group by use-case: on-course / all-weather / post-round casual'],
      brands: { luxury: ['Loro Piana Golf', 'Ralph Lauren RLX', 'Peter Millar'], premium: ['FootJoy', 'Titleist', 'Galvin Green'], accessible: ['Callaway', 'Puma Golf', 'Under Armour Golf'] },
      img: GOLF.banner,
    },
    sections: [
      {
        title: 'Apparel',
        items: [
          { name: 'Classic Cotton Polo', sub: 'Short Sleeve · Golf / Smart Casual', mat: 'Cotton Piqué', col: '#ffffff,#1e1e3a,#3a3a3a', img: GOLF.polo.classicCotton },
          { name: 'Merino Polo', sub: 'Fine Knit · Golf / Smart Casual', mat: 'Merino Wool', col: '#F1F2EF,#3a3a3a,#c2b280', img: GOLF.polo.merinoPolo },
          { name: 'Performance Piqué Polo', sub: 'Athletic Fit · Golf / Active', mat: 'Performance Piqué', col: '#1e1e3a,#ffffff,#3a3a3a', img: GOLF.polo.performancePique },
          { name: '9-inch Performance Shorts', sub: 'Golf / Active', mat: 'Stretch Polyester', col: '#3a3a3a,#1e1e3a,#c2b280', img: GOLF.shorts.performance },
          { name: 'Stretch Slim Trousers', sub: 'Golf / Smart', mat: 'Stretch Polyester', col: '#3a3a3a,#1e1e3a,#c2b280', img: GOLF.trousers.stretchSlim },
          { name: 'Waterproof Shell Trousers', sub: 'Wet Weather · Golf', mat: 'Waterproof Shell', col: '#3a3a3a,#F1F2EF', img: GOLF.trousers.waterproof },
          { name: 'Quarter-Zip Fleece', sub: 'Mid Layer · Golf / Cold', mat: 'Fleece', col: '#1e1e3a,#3a3a3a,#ffffff', img: GOLF.midLayer.quarterZip },
          { name: 'Packable Waterproof Jacket', sub: 'Rain Protection · Golf', mat: 'Waterproof Shell', col: '#3a3a3a,#1e1e3a', img: GOLF.rainJacket.packable },
        ],
      },
      {
        title: 'Footwear',
        items: [
          { name: 'Lace-Up Spiked Shoe', sub: 'Spiked · Traditional Golf', mat: 'Leather, Synthetic', col: '#ffffff,#3b1218,#F1F2EF', img: GOLF.footwear.spiked },
          { name: 'BOA Closure Spikeless', sub: 'Spikeless · Versatile', mat: 'Leather, Synthetic', col: '#ffffff,#3a3a3a', img: GOLF.footwear.spikeless },
          { name: 'Winter Golf Boot', sub: 'Waterproof · Cold Weather', mat: 'Waterproof Leather', col: '#F1F2EF,#3b1218', img: GOLF.footwear.boot },
        ],
      },
      {
        title: 'Equipment',
        items: [
          { name: 'Cart Bag', sub: '14-Divider · Golf', mat: 'Nylon', col: '#F1F2EF,#3a3a3a,#1e1e3a', img: GOLF.equipment.cartBag },
          { name: 'Stand Bag', sub: 'Lightweight · Golf', mat: 'Nylon', col: '#3a3a3a,#F1F2EF', img: GOLF.equipment.standBag },
          { name: 'Manual Push Trolley', sub: '3-Wheel · Golf', mat: 'Aluminium', col: '#3a3a3a,#F1F2EF', img: GOLF.equipment.trolley },
        ],
      },
      {
        title: 'Accessories',
        items: [
          { name: 'Golf Gloves', sub: 'Cabretta Leather · Golf', mat: 'Leather, Synthetic', col: '#ffffff,#c2b280', img: GOLF.accessories.gloves },
          { name: 'Tour Cap', sub: 'Structured · Golf', mat: 'Cotton', col: '#F1F2EF,#ffffff,#3a3a3a', img: GOLF.accessories.cap },
          { name: 'Classic Visor', sub: 'Golf / Sports', mat: 'Polyester', col: '#ffffff,#F1F2EF', img: GOLF.accessories.visor },
        ],
      },
    ],
  },

  running: {
    banner: RUNNING.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash Cold — 30°C Max' }, { ico: '⊙', lbl: 'No Fabric Softener — Clogs Wicking' },
        { ico: '◻', lbl: 'Air Dry Only — No Tumble' }, { ico: '🌲', lbl: 'Mesh Bag for Compression Fabrics' },
        { ico: '❄', lbl: 'Store Shoes Stuffed with Paper' },
      ],
      washing: { temp: 'All running apparel: 30°C cold wash — never above 40°C · compression tights: 30°C max', cycle: 'Inside-out · mesh laundry bag · no spin above 800rpm for lycra · gentle cycle for merino', dry: 'Hang dry flat for tights · singlets on hanger · never tumble — heat degrades elastic and DWR', iron: 'Never iron performance fabrics · merino: cool iron inside-out only if required', special: 'Gore-Tex and waterproof shells: tech-wash only (Nikwax) · re-proof after 15 washes · hydration vests: hand wash bladder separately' },
      hangers: [
        { type: 'Slim Velvet Hanger — 40cm', barDia: '8mm bar', spacing: '4–5cm per singlet / short-sleeve', note: 'Prevents slipping of lightweight performance fabrics' },
        { type: 'Wide Clamp Hanger for Tights', spacing: '5cm per pair', note: 'Clip waistband — never fold compression tights long-term to avoid crease fatigue in elastane' },
        { type: 'Padded Hanger for Shells / Jackets', barDia: 'N/A — padded', spacing: '8cm per jacket', note: 'Hang packable jackets unfolded to maintain waterproof membrane' },
      ],
      blueprint: [
        { zone: 'Apparel Short-Hang (Singlets / Tees)', height: '60–70cm rail height', depth: '45cm', note: 'Group by weight: singlets · short-sleeve · long-sleeve' },
        { zone: 'Tights Hanging / Folded Stack', height: '80cm rail or 30cm shelf', depth: '40cm', note: 'Fold tights once at waist only — avoid crease lines at knee' },
        { zone: 'Shoe Shelf', height: '20cm per shelf', depth: '35cm', note: 'Store with paper stuffed to maintain foam midsole shape' },
        { zone: 'Accessories Drawer (GPS / Socks / Vest)', height: '10–12cm drawer', depth: '40cm', note: 'GPS watches stored on flat pad · compression socks rolled not folded' },
      ],
      tips: ['Rotate shoes between runs — foam needs 24h recovery time', 'Wash compression tights inside-out in mesh bag every 2–3 uses to preserve elastane', 'Stuff running shoes with newspaper after wet runs to retain shape', 'Never store damp performance fabrics — bacteria and odour compound rapidly', 'Carbon-plated race shoes: store in original box to protect plate geometry'],
      img: RUNNING.banner,
    },
    retail: {
      lighting: { angle: '45° overhead · 15° accent low-angle on footwear', lux: '1000–1200 lux', cct: '4000–5000K cool white (energy / performance feel)', fixture: 'High-CRI LED track lighting · cool-white fill panels' },
      dimensions: [
        { label: 'Apparel Rail Height', value: '180cm' }, { label: 'Hanging Spacing', value: '4–5cm per unit' },
        { label: 'Shoe Shelf Height', value: '20–22cm per shelf · 10° forward tilt' }, { label: 'Mannequin Platform', value: '15–20cm riser' },
        { label: 'Accessories Wall Display', value: '120 × 60cm panel at 150cm centre height' },
      ],
      tips: ['Cool-white 5000K lighting reinforces performance / speed positioning', 'Footwear displayed sole-forward to show grip pattern and carbon plate', 'Tights and compression displayed folded on acrylic shelves — no hangers', 'Mannequin styled head-to-toe: vest / shorts / socks / shoes / GPS watch', 'Group by surface type: road / trail / track — not by brand'],
      brands: { luxury: ['On Running', 'Satisfy Running', 'District Vision'], premium: ['Nike Running', 'Adidas Running', 'New Balance'], accessible: ['Decathlon Kalenji', 'Saucony', 'Brooks'] },
      img: RUNNING.banner,
    },
    sections: [
      {
        title: 'Apparel',
        items: [
          { name: 'Race Vest Singlet', sub: 'Race Fit · Road / Track', mat: 'Dry-Fit Polyester', col: '#1e1e3a,#F1F2EF,#ffffff', img: RUNNING.apparel.singlet },
          { name: 'Short-Sleeve Dry-Fit', sub: 'Regular Fit · Training', mat: 'Dry-Fit Polyester', col: '#1e1e3a,#F1F2EF,#3a3a3a', img: RUNNING.apparel.tshirtDry },
          { name: 'Merino Short-Sleeve', sub: 'Regular Fit · Trail / Comfort', mat: 'Merino Wool', col: '#c2b280,#3a3a3a,#F1F2EF', img: RUNNING.apparel.tshirtMerino },
          { name: '5-Inch Split Short', sub: 'Performance · Road / Track', mat: 'Lightweight Polyester', col: '#1e1e3a,#F1F2EF,#3a3a3a', img: RUNNING.apparel.shortsSplit },
          { name: '2-in-1 Short', sub: 'Training · Gym / Road', mat: 'Stretch Polyester', col: '#F1F2EF,#3a3a3a', img: RUNNING.apparel.shorts2in1 },
          { name: '3/4 Running Tights', sub: 'Training · Cool Weather', mat: 'Compression Polyester', col: '#F1F2EF,#1e1e3a', img: RUNNING.apparel.tights34 },
          { name: 'Full-Length Tights', sub: 'Cold Weather · Trail / Road', mat: 'Thermal Compression', col: '#F1F2EF,#1e1e3a,#3a3a3a', img: RUNNING.apparel.tightsFull },
          { name: 'Packable Wind Jacket', sub: 'Packable · Road / Race', mat: 'Windproof Nylon', col: '#1e1e3a,#F1F2EF,#3a3a3a', img: RUNNING.apparel.jackPackable },
          { name: 'Waterproof Shell Jacket', sub: 'Waterproof · Trail / Race', mat: 'Waterproof Nylon', col: '#3a3a3a,#F1F2EF', img: RUNNING.apparel.jackWaterproof },
        ],
      },
      {
        title: 'Footwear',
        items: [
          { name: 'Neutral Cushioned', sub: 'Daily Training · Road', mat: 'Foam, Mesh', col: '#ffffff,#1e1e3a,#3a3a3a', img: RUNNING.footwear.neutral },
          { name: 'Stability Road', sub: 'Overpronation · Road', mat: 'Foam, Mesh', col: '#ffffff,#1e1e3a', img: RUNNING.footwear.stability },
          { name: 'Carbon-Plated Racer', sub: 'Race Day · Road', mat: 'Carbon Plate, PEBA Foam', col: '#ffffff,#B58C53', img: RUNNING.footwear.carbon },
          { name: 'Grip Trail Shoe', sub: 'Trail · Grip · Off-Road', mat: 'Vibram Rubber, Mesh', col: '#3a3a3a,#c2b280', img: RUNNING.footwear.trailGrip },
          { name: 'Waterproof Trail', sub: 'Gore-Tex · Wet Trail', mat: 'Gore-Tex, Mesh', col: '#3a3a3a,#F1F2EF', img: RUNNING.footwear.trailWp },
        ],
      },
      {
        title: 'Accessories',
        items: [
          { name: 'Compression Socks', sub: 'Recovery · Road / Long Distance', mat: 'Nylon-Elastane', col: '#F1F2EF,#1e1e3a,#ffffff', img: RUNNING.accessories.compression },
          { name: 'Low No-Show Socks', sub: 'Training · Road', mat: 'Cotton-Nylon', col: '#ffffff,#F1F2EF', img: RUNNING.accessories.noShow },
          { name: 'Hydration Vest', sub: 'Trail · Long Run', mat: 'Nylon', col: '#3a3a3a,#F1F2EF', img: RUNNING.accessories.vest },
          { name: 'GPS Training Watch', sub: 'GPS · Road / Trail / Track', mat: 'Silicone, Plastic', col: '#F1F2EF,#3a3a3a', img: RUNNING.accessories.gpsWatch },
        ],
      },
    ],
  },

  cycling: {
    banner: CYCLING.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Cold Wash — 30°C · Inside-Out' }, { ico: '⊙', lbl: 'Chamois Wash — Specialist Detergent' },
        { ico: '◻', lbl: 'Air Dry — Never Tumble Lycra' }, { ico: '🌲', lbl: 'Helmet: Cool Dry Shelf' },
        { ico: '❄', lbl: 'Cycling Shoes: Cedar Insert' },
      ],
      washing: { temp: 'Jerseys / bib shorts: 30°C cold wash only · never above 40°C', cycle: 'Inside-out · mesh bag · gentle cycle · no spin above 800rpm · chamois-specific detergent (Assos/Castelli)', dry: 'Hang jerseys and bibs immediately — never wad in bag wet · lycra loses elasticity in tumble dryer', iron: 'Never iron — lycra and chamois padding are damaged by any heat', special: 'Helmets: wipe pads with damp cloth · never submerge or machine wash · EPS degrades with heat and impact · replace after any crash' },
      hangers: [
        { type: 'Wide Plastic Hanger — 44cm', barDia: '12mm bar', spacing: '5cm per jersey', note: 'Prevents shoulder deformation in lycra-polyester fabric' },
        { type: 'Double-Drop Bib Hanger', spacing: '8cm per bib short', note: 'Hang bib straps over second hook — avoids crease at chamois seam' },
        { type: 'Helmet Peg / Wall Mount', spacing: '20cm between helmet pegs', note: 'Never stack helmets — EPS deforms under weight' },
      ],
      blueprint: [
        { zone: 'Jersey / Apparel Rail', height: '70–80cm rail height', depth: '50cm', note: 'Road vs MTB separated — road jerseys lightest weight, hung first' },
        { zone: 'Bib Short / Tight Stack', height: '40cm shelf or separate hook rail', depth: '45cm', note: 'Bibs hung by straps on wide hooks — never folded at chamois' },
        { zone: 'Helmet Shelf', height: '20cm clearance per helmet', depth: '30cm', note: 'Shell-up display only — never inverted' },
        { zone: 'Shoe Shelf', height: '20cm per shelf', depth: '35cm', note: 'BOA closure shoes stored with dials clicked to tension-free position' },
      ],
      tips: ['Replace cycling helmet every 3–5 years regardless of visible damage — EPS foam degrades from UV and sweat', 'Wash chamois bibs after every use — bacteria in chamois padding causes saddle sores', 'BOA dials: store at zero tension — spring-loaded to avoid cable fatigue', 'MTB shoes: rinse mud from cleats before storing to prevent cleat seizure', 'Store cycling gloves flat — leather palm creases if balled up'],
      img: CYCLING.banner,
    },
    retail: {
      lighting: { angle: '30–45° overhead track · accent 15° for helmet and shoe profile', lux: '1000–1200 lux', cct: '4500–5000K cool white', fixture: 'LED PAR38 track spots with high CRI (≥90)' },
      dimensions: [
        { label: 'Jersey Rail Height', value: '180cm' }, { label: 'Hanging Spacing', value: '5cm per jersey' },
        { label: 'Bib Short Display Hook Width', value: '10cm hook spacing' }, { label: 'Helmet Plinth', value: '30 × 30cm × 30cm high riser per helmet' },
        { label: 'Shoe Shelf Height', value: '22cm per shelf · 10° forward tilt' },
      ],
      tips: ['Cool 5000K lighting gives aerodynamic performance energy to the retail environment', 'Display road kit together as head-to-toe system: helmet + jersey + bib + shoes + gloves', 'Helmet on plinth at eye level — largest visual anchor in the display', 'MTB and road displayed as separate sections — different customer journeys', 'Use mannequin torso for jersey + bib combination to show fit and chamois position'],
      brands: { luxury: ['Rapha', 'Pas Normal Studios', 'Assos'], premium: ['Castelli', 'Gore Wear', 'Sportful'], accessible: ['Decathlon Van Rysel', 'Endura', 'Altura'] },
      img: CYCLING.banner,
    },
    sections: [
      {
        title: 'Road Cycling',
        items: [
          { name: 'Short-Sleeve Race Jersey', sub: 'Race Fit · Road', mat: 'Lycra-Polyester', col: '#1e1e3a,#F1F2EF,#ffffff', img: CYCLING.road.jerseyShort },
          { name: 'Long-Sleeve Thermal Jersey', sub: 'Winter · Road', mat: 'Thermal Lycra', col: '#F1F2EF,#1e1e3a', img: CYCLING.road.jerseyLong },
          { name: 'Race Bib Short', sub: 'Race Fit · Road', mat: 'Lycra-Polyester', col: '#F1F2EF,#1e1e3a', img: CYCLING.road.bibShortRace },
          { name: 'Endurance Bib Short', sub: 'Training · Road', mat: 'Lycra-Polyester', col: '#F1F2EF,#3a3a3a', img: CYCLING.road.bibShortEnd },
          { name: 'Thermal Bib Tight', sub: 'Winter · Road', mat: 'Thermal Lycra', col: '#F1F2EF', img: CYCLING.road.bibTight },
          { name: 'BOA Road Shoe', sub: 'Road · Racing', mat: 'Carbon Sole, Synthetic', col: '#ffffff,#F1F2EF', img: CYCLING.road.shoesBoa },
          { name: 'Lace Road Shoe', sub: 'Road · Training', mat: 'Stiff Sole, Synthetic', col: '#ffffff,#3a3a3a', img: CYCLING.road.shoesLace },
          { name: 'Aero Road Helmet', sub: 'Road · Aerodynamic', mat: 'Polycarbonate, EPS', col: '#F1F2EF,#ffffff,#1e1e3a', img: CYCLING.road.helmetAero },
          { name: 'Classic Ventilated Helmet', sub: 'Road · Training', mat: 'Polycarbonate, EPS', col: '#ffffff,#3a3a3a', img: CYCLING.road.helmetClassic },
          { name: 'Packable Wind Vest', sub: 'Road · Wind Protection', mat: 'Windproof Nylon', col: '#1e1e3a,#F1F2EF', img: CYCLING.road.windVest },
        ],
      },
      {
        title: 'Mountain Biking',
        items: [
          { name: 'Trail Jersey', sub: 'MTB · Loose Fit', mat: 'Polyester', col: '#3a3a3a,#F1F2EF,#c2b280', img: CYCLING.mtb.jersey },
          { name: 'Trail Baggy Short', sub: 'MTB · Casual', mat: 'Nylon', col: '#3a3a3a,#F1F2EF', img: CYCLING.mtb.shortsBaggy },
          { name: 'DH Armoured Short', sub: 'Downhill · Protective', mat: 'Nylon, Foam Padding', col: '#F1F2EF,#3a3a3a', img: CYCLING.mtb.shortsDH },
          { name: 'Clipless MTB Shoe', sub: 'MTB · Technical', mat: 'Synthetic, Rubber', col: '#F1F2EF,#3a3a3a', img: CYCLING.mtb.shoeClipless },
          { name: 'Flat Pedal Shoe', sub: 'MTB · Sticky Rubber', mat: 'Synthetic, Rubber', col: '#3a3a3a,#F1F2EF', img: CYCLING.mtb.shoeFlat },
          { name: 'Full-Face Helmet', sub: 'Downhill · Full Protection', mat: 'Fibreglass, EPS', col: '#F1F2EF,#3a3a3a', img: CYCLING.mtb.helmetFull },
          { name: 'Open-Face Trail Helmet', sub: 'Trail · Ventilated', mat: 'Polycarbonate, EPS', col: '#F1F2EF,#3a3a3a,#ffffff', img: CYCLING.mtb.helmetTrail },
        ],
      },
    ],
  },

  'tennis-padel': {
    banner: TENNIS.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash Cold — 30°C' }, { ico: '⊙', lbl: 'No Fabric Softener' },
        { ico: '◻', lbl: 'Air Dry — No Tumble' }, { ico: '🌲', lbl: 'Racket: Press or Case When Not In Use' },
        { ico: '❄', lbl: 'Shoes: Cool Dry — Away From Direct Sun' },
      ],
      washing: { temp: 'Polo shirts / dresses / skirts: 30°C gentle cycle · compression shorts under skirts: 30°C max', cycle: 'Inside-out · mesh bag · gentle cycle · no bleach on whites — use specialist sports detergent', dry: 'Hang dry immediately — tumble drying degrades stretch polyester and lycra liners', iron: 'Never iron performance fabrics · cotton polo collar only: cool iron if required', special: 'Tennis whites: wash separately · colour-safe detergent · UV whitening agents maintain court-regulation white' },
      hangers: [
        { type: 'Slim Plastic Hanger — 42cm', barDia: '10mm bar', spacing: '5cm per polo / tee', note: 'Slim hanger prevents shoulder marks on performance polo knit' },
        { type: 'Skirt / Dress Hanger with Clips', spacing: '6cm per dress / skirt', note: 'Clip at waistband — preserve skirt pleat structure' },
        { type: 'Racket Wall Rack', spacing: '8cm per racket', note: 'Store rackets at 50–60% string tension off-season to extend string life' },
      ],
      blueprint: [
        { zone: 'Apparel Short-Hang (Polo / Tee / Dress)', height: '80cm rail height', depth: '45cm', note: 'Group men and women: polo · tee · shorts · dress · skirt' },
        { zone: 'Shoe Shelf', height: '20cm per shelf', depth: '35cm', note: 'Court shoes stored with insoles removed after play to dry fully' },
        { zone: 'Racket Rack (Wall-Mounted)', height: '120–150cm centre height', depth: '20cm projection', note: 'Rackets face-in · strings vertical · padel rackets stored flat' },
        { zone: 'Equipment / Bag Shelf', height: '40cm shelf height', depth: '55cm', note: 'Racket bags stored upright on base shelf' },
      ],
      tips: ['Remove court shoes insoles after every session — insoles air dry faster than the shoe interior', 'Re-string rackets every 40–50 hours of play or twice per season minimum', 'Padel rackets: never store in boot of car — extreme heat cracks EVA foam core', 'Wash tennis whites after every wear — sweat acids yellow polyester permanently if left', 'Store grip tape on roll in dry drawer — humidity causes adhesive to fail'],
      img: TENNIS.banner,
    },
    retail: {
      lighting: { angle: '30° overhead · 15° low accent for footwear sole detail', lux: '900–1100 lux', cct: '4000–4500K neutral to cool white', fixture: 'LED PAR30 track spots · high CRI ≥90' },
      dimensions: [
        { label: 'Apparel Rail Height', value: '180cm' }, { label: 'Hanging Spacing', value: '5–6cm per unit' },
        { label: 'Racket Wall Display', value: '8cm spacing · strings facing customer' }, { label: 'Shoe Shelf Height', value: '22cm per shelf · 10° forward tilt' },
        { label: 'Equipment Counter Depth', value: '50cm at 95cm height' },
      ],
      tips: ['Display polo on left / dress-skirt on right — gender zoning within the same category space', 'Rackets displayed wall-mounted at eye level — strings visible to show string pattern and gauge', 'Footwear angled to show sole grip pattern — hard court vs clay sole clearly different', 'Use court photography as backdrop — green / clay / padel blue surface creates context', 'Padel and tennis displayed as distinct sub-categories — different buying journeys'],
      brands: { luxury: ['Lacoste Premium', 'Roland Garros Collection', 'EleVen by Venus'], premium: ['Wilson', 'Babolat', 'Head'], accessible: ['Decathlon Artengo', 'Nike Court', 'Adidas Tennis'] },
      img: TENNIS.banner,
    },
    sections: [
      {
        title: 'Apparel',
        items: [
          { name: 'Performance Polo', sub: 'Tennis / Padel · Smart', mat: 'Performance Polyester', col: '#ffffff,#1e1e3a,#3a3a3a', img: TENNIS.apparel.polo },
          { name: 'Athletic Fit Tee', sub: 'Tennis / Padel · Training', mat: 'Dry-Fit Polyester', col: '#ffffff,#F1F2EF,#3a3a3a', img: TENNIS.apparel.tshirt },
          { name: '7-Inch Tennis Short', sub: 'Men · Tennis / Padel', mat: 'Stretch Polyester', col: '#ffffff,#F1F2EF,#1e1e3a', img: TENNIS.apparel.shorts },
          { name: 'A-Line Tennis Dress', sub: 'Women · Tennis / Padel', mat: 'Stretch Polyester', col: '#ffffff,#1e1e3a', img: TENNIS.apparel.dress },
          { name: 'Pleated Skirt + Short', sub: 'Women · Tennis / Padel', mat: 'Stretch Polyester', col: '#ffffff,#F1F2EF', img: TENNIS.apparel.skirt },
        ],
      },
      {
        title: 'Footwear',
        items: [
          { name: 'Hard Court Shoe', sub: 'All Court · Durable', mat: 'Synthetic, Rubber', col: '#ffffff,#1e1e3a,#3a3a3a', img: TENNIS.footwear.allCourt },
          { name: 'Clay Court Shoe', sub: 'Herringbone Sole · Clay', mat: 'Synthetic, Rubber', col: '#ffffff,#3b1218', img: TENNIS.footwear.clayCourt },
          { name: 'Padel-Specific Shoe', sub: 'Padel · Omnidirectional', mat: 'Synthetic, Rubber', col: '#ffffff,#1e1e3a', img: TENNIS.footwear.padelShoe },
        ],
      },
      {
        title: 'Equipment',
        items: [
          { name: 'Racket 97 sq.in', sub: '97 sq.in · Control · Advanced', mat: 'Graphite', col: '#F1F2EF,#1e1e3a', img: TENNIS.equipment.racket97 },
          { name: 'Racket 100 Oversized', sub: '100 sq.in · Power · All Levels', mat: 'Graphite-Aluminium', col: '#3a3a3a,#F1F2EF', img: TENNIS.equipment.racket100 },
          { name: 'Padel Racket Round Shape', sub: 'Control · All Levels', mat: 'Carbon-Fibre', col: '#3a3a3a,#c2b280', img: TENNIS.equipment.padelRacket },
          { name: '6-Racket Tennis Bag', sub: 'Padded · Travel', mat: 'Polyester', col: '#F1F2EF,#1e1e3a,#3a3a3a', img: TENNIS.equipment.bag },
        ],
      },
    ],
  },

  'skiing-alpine': {
    banner: SKIING.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Tech-Wash Waterproof Shells (Nikwax)' }, { ico: '⊙', lbl: 'Re-Proof DWR After 20 Washes' },
        { ico: '◻', lbl: 'Hang Dry — Never Tumble Shells' }, { ico: '🌲', lbl: 'Boot Dryer — 24h After Each Use' },
        { ico: '❄', lbl: 'Dry Dark Storage for Goggles / Helmet' },
      ],
      washing: { temp: 'Waterproof shells: 30°C tech-wash (Nikwax Tech Wash) · base layers merino: 30°C cold hand wash · synthetic base: 30°C machine gentle', cycle: 'Shells: close all zips and velcro · remove fur trim · no fabric softener · run extra rinse cycle', dry: 'Hang-dry shells — tumble drying destroys waterproof membrane bonding · merino: flat dry · base layers: hang dry', iron: 'Never iron waterproof shells · merino base layers: cool steam iron inside-out only if required', special: 'Re-proof shells with Nikwax TX.Direct spray or wash-in after every 15–20 ski days · goggles: never wipe inner lens dry — tap water rinse only' },
      hangers: [
        { type: 'Wide Padded Hanger — 50cm (Shell Jacket)', barDia: 'N/A — padded', spacing: '12–15cm per ski jacket', note: 'Wide hanger maintains ski jacket shoulder architecture — never fold ski jackets for storage' },
        { type: 'Wide Trouser Hanger (Salopette)', spacing: '10cm per salopette', note: 'Hang salopettes by suspenders on padded bar — clip-style crushes waterproof seam tape' },
        { type: 'Fleece / Base Layer Shelf Fold', spacing: '5cm per folded item on shelf', note: 'Fleece and base layers folded on shelf — hanging stretches lightweight merino ribbing' },
      ],
      blueprint: [
        { zone: 'Ski Jacket Hanging (Full-Hang)', height: '120cm clear rail height', depth: '65cm', note: 'Heaviest outerwear — insulated and shell jackets — at dedicated full-height rail' },
        { zone: 'Salopette / Bib Hanging', height: '130cm clearance (full-length bib)', depth: '60cm', note: 'Salopettes hang by shoulder straps — bib length requires 130cm clear height' },
        { zone: 'Boot Shelf (Ski Boots)', height: '30cm per shelf (ski boot tall)', depth: '35cm', note: 'Store boots with buckles fully open · boot dryer insert recommended' },
        { zone: 'Helmet / Goggle Shelf', height: '25cm clearance per helmet', depth: '35cm', note: 'Never stack helmets · goggles stored in microfibre bag in helmet bowl' },
        { zone: 'Mid Layer / Base Layer Stack', height: '30cm shelf per category', depth: '45cm', note: 'Merino and fleece folded and grouped: thermal bottom / mid top / outer fleece' },
      ],
      tips: ['Dry ski boots fully inside a boot dryer before off-season storage — mold grows in damp boot liners', 'Unclip all buckles fully when storing ski boots — clips under tension fatigue the ratchet mechanism', 'Store goggles in microfibre bag inside helmet bowl — prevents lens fogging coat transfer', 'Re-proof all ski shells before start of each season — DWR degrades over summer even in storage', 'Never compress down-insulated jackets in stuff sacks for extended storage — fills lose loft permanently'],
      img: SKIING.banner,
    },
    retail: {
      lighting: { angle: '30° overhead track · 15° low angle on boot and helmet', lux: '900–1100 lux', cct: '3500–4000K neutral white (mountain/alpine feel)', fixture: 'LED PAR38 track spots · blue-tinted accent optional for ice / snow atmosphere' },
      dimensions: [
        { label: 'Ski Jacket Rail Height', value: '200cm (full bib clearance)' }, { label: 'Hanging Spacing (Jacket)', value: '12–15cm per unit' },
        { label: 'Boot Display Shelf', value: '30cm per shelf · angled 5° forward' }, { label: 'Helmet Plinth', value: '35 × 35cm × 30cm high riser' },
        { label: 'Equipment / Goggle Gondola', value: '120cm wide × 160cm high · face-out hooks' },
      ],
      tips: ['Ski jackets displayed on wide padded hangers — narrow wire hangers deform technical fabric at shoulder', 'Boots displayed in anatomical pairs on angled shelf — buckle-side facing customer', 'Helmet + goggle at eye level as hero combination display — always styled together', 'Mannequin: full head-to-toe layering — base / mid / shell — shows layering system', 'Group by performance tier: beginner / intermediate / expert · separate resort vs freeride'],
      brands: { luxury: ['Bogner', 'Perfect Moment', 'Moncler Grenoble'], premium: ['Salomon', 'Arc\'teryx', 'Peak Performance'], accessible: ['Decathlon Wed\'ze', 'Roxy', 'Völkl'] },
      img: SKIING.banner,
    },
    sections: [
      {
        title: 'Outer Layer',
        items: [
          { name: 'Hardshell Technical Jacket', sub: '3-Layer · Expert · Race', mat: 'Gore-Tex Pro', col: '#F1F2EF,#1e1e3a,#3a3a3a', img: SKIING.outer.hardshell },
          { name: 'Insulated All-Mountain Jacket', sub: 'Versatile · Freeride', mat: 'Waterproof Shell + Down', col: '#3a3a3a,#1e1e3a,#c2b280', img: SKIING.outer.insulated },
          { name: 'Luxury Down Shell Jacket', sub: 'Premium · Resort', mat: 'Down, Waterproof Shell', col: '#F1F2EF,#ffffff,#c2b280', img: SKIING.outer.downShell },
          { name: 'Bib Salopette', sub: 'Full Coverage · Freeride', mat: 'Waterproof Nylon', col: '#F1F2EF,#3a3a3a', img: SKIING.outer.salopetteBib },
          { name: 'Straight Salopette', sub: 'Classic · On-Piste', mat: 'Waterproof Shell', col: '#F1F2EF,#1e1e3a,#3a3a3a', img: SKIING.outer.salopetteStraight },
        ],
      },
      {
        title: 'Mid Layers',
        items: [
          { name: 'Grid Fleece Zip', sub: 'Mid Layer · Warmth', mat: 'Polartec Fleece', col: '#3a3a3a,#1e1e3a,#c2b280', img: SKIING.mid.fleece },
          { name: 'Down + Fleece Hybrid', sub: 'Packable · Warmth', mat: 'Down, Fleece', col: '#F1F2EF,#3a3a3a', img: SKIING.mid.hybrid },
        ],
      },
      {
        title: 'Base Layers',
        items: [
          { name: 'Merino Lightweight Top', sub: 'Base Layer · Comfort', mat: 'Merino Wool', col: '#ffffff,#3a3a3a,#F1F2EF', img: SKIING.base.thermalTop },
          { name: 'Synthetic Midweight Top', sub: 'Base Layer · Performance', mat: 'Polyester', col: '#1e1e3a,#F1F2EF,#3a3a3a', img: SKIING.base.thermalTopSyn },
          { name: 'Merino Long John', sub: 'Base Layer Bottom · Comfort', mat: 'Merino Wool', col: '#ffffff,#3a3a3a', img: SKIING.base.thermalBottom },
        ],
      },
      {
        title: 'Footwear',
        items: [
          { name: 'Beginner Boot Flex 60–80', sub: 'Beginner · On-Piste', mat: 'Polyurethane', col: '#F1F2EF,#3a3a3a', img: SKIING.footwear.bootBeginner },
          { name: 'Intermediate Boot Flex 90–110', sub: 'Intermediate · All-Mountain', mat: 'Polyurethane', col: '#F1F2EF,#1e1e3a', img: SKIING.footwear.bootIntermediate },
          { name: 'Expert Boot Flex 120–130', sub: 'Expert · Race / Carving', mat: 'Polyurethane', col: '#F1F2EF', img: SKIING.footwear.bootExpert },
          { name: 'Après-Ski Sherpa Boot', sub: 'Off-Piste · Après', mat: 'Faux Sherpa, Rubber', col: '#c2b280,#3a3a3a', img: SKIING.footwear.apresSki },
        ],
      },
      {
        title: 'Headwear',
        items: [
          { name: 'MIPS In-Mould Helmet', sub: 'Safety · All-Mountain', mat: 'ABS, EPS', col: '#F1F2EF,#3a3a3a,#ffffff', img: SKIING.headwear.helmetMips },
          { name: 'Spherical Mirrored Goggles', sub: 'Sun · Bright Conditions', mat: 'Polycarbonate', col: '#F1F2EF,#c2b280', img: SKIING.headwear.gogglesMirror },
          { name: 'Photochromic Goggles', sub: 'Variable Light · All Conditions', mat: 'Polycarbonate', col: '#F1F2EF,#3a3a3a', img: SKIING.headwear.gogglesPhoto },
        ],
      },
      {
        title: 'Accessories',
        items: [
          { name: 'Insulated Mitt', sub: 'Warmth · Powder / Cold', mat: 'Waterproof Nylon, Down', col: '#F1F2EF,#3a3a3a', img: SKIING.accessories.mittInsulated },
          { name: 'Technical Glove', sub: 'Dexterity · On-Piste', mat: 'Goatskin, Waterproof', col: '#F1F2EF,#3a3a3a', img: SKIING.accessories.gloveTech },
          { name: 'Midweight Ski Sock', sub: 'All-Mountain · Comfort', mat: 'Merino Wool-Nylon', col: '#3a3a3a,#F1F2EF', img: SKIING.accessories.sockMid },
          { name: 'Thin Race Sock', sub: 'Racing · Speed Fit', mat: 'Merino Wool-Nylon', col: '#F1F2EF', img: SKIING.accessories.sockRace },
        ],
      },
    ],
  },

  'combat-sports': {
    banner: COMBAT.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash — Gi / Judogi Cold 30°C' }, { ico: '⊙', lbl: 'Gloves: Air-Dry Only · Bag Not Kitbag' },
        { ico: '◻', lbl: 'Rashguard: Inside-Out · Mesh Bag' }, { ico: '🌲', lbl: 'Anti-Bacterial Spray After Every Use' },
        { ico: '❄', lbl: 'Never Store Damp — Odour Compounds' },
      ],
      washing: { temp: 'Gi / judogi: 30°C cold only (40°C max once for pre-shrink) — never above 40°C after initial wash · rashguard / shorts: 30°C cold', cycle: 'Gi inside-out to protect weave · close all zips · no fabric softener on gi — destroys cotton absorption', dry: 'Hang-dry gi fully before storing — tumble drying shrinks cotton gi rapidly · rashguard / shorts: hang dry or tumble low heat briefly', iron: 'Never iron neoprene shin guards · gi jacket collar: warm iron on damp cloth to remove creases if required for competition', special: 'Boxing gloves: spray inside with antibacterial after every session · air-dry 24h minimum open cuff-down · glove dogs or cedar absorbers inside off-season' },
      hangers: [
        { type: 'Wide Plastic Hanger — 50cm (Gi / Judogi)', barDia: '14mm bar', spacing: '12cm per gi jacket', note: 'Gi jacket needs wide hanger — heavy pearl weave or double weave retains shoulder shape' },
        { type: 'Trouser Bar Hanger (Gi / Hakama)', spacing: '8cm per gi bottom / hakama', note: 'Fold hakama traditionally before hanging or store flat in drawer — pleats must be preserved' },
        { type: 'Hook Rail for Gloves / Shin Guards', spacing: '15cm per pair', note: 'Gloves hung open cuff-down on ventilated hook — never sealed in bag damp' },
      ],
      blueprint: [
        { zone: 'Gi / Judogi Full-Hang Rail', height: '120cm clear height (gi jacket + bottom hung)', depth: '55cm', note: 'Pearl weave and double weave gi are heavy — use steel rail not timber for weight bearing' },
        { zone: 'Glove / Protective Gear Hook Rail', height: '120–150cm wall rail', depth: '20cm projection', note: 'Ventilated wall zone — gloves, headguards, shin guards all require airflow' },
        { zone: 'Rashguard / Shorts Short-Hang', height: '70cm rail', depth: '40cm', note: 'Lightweight — slim velvet hangers prevent slipping of lycra-spandex fabrics' },
        { zone: 'Bag / Kitbag Shelf', height: '50cm shelf clearance', depth: '60cm', note: 'Leave training bag open between sessions for airflow — closed damp bags breed bacteria' },
      ],
      tips: ['Hang boxing gloves open-cuff-down on a ventilated rack after every session — never seal in kit bag damp', 'Spray gloves and shin guards with antibacterial spray (Dettol/Odoban) every use to prevent bacteria buildup', 'Gi: wash after every training session — bacteria in sweat degrades cotton weave fibres over time', 'Hakama: fold and store flat in acid-free box or fold traditionally — hanging unsupported stretches tetron fabric', 'Fencing jacket: wipe steel mesh and store dry — moisture causes mesh corrosion under the bib'],
      img: COMBAT.banner,
    },
    retail: {
      lighting: { angle: '30° overhead spot · 20° low accent on gloves and equipment', lux: '900–1100 lux', cct: '3500–4000K warm-neutral', fixture: 'LED PAR30 track spots · accent spots for equipment wall display' },
      dimensions: [
        { label: 'Gi / Judogi Rail Height', value: '180cm' }, { label: 'Hanging Spacing (Gi)', value: '12cm per unit' },
        { label: 'Glove Display Hook Spacing', value: '15cm per pair · wall-mounted' }, { label: 'Equipment Gondola Height', value: '160cm · face-out hooks' },
        { label: 'Protective Gear Shelf', value: '30cm per shelf · angled 10° forward' },
      ],
      tips: ['Gloves displayed in pairs on hooks at eye level — leather sheen is key visual selling point under warm light', 'Gi displayed folded on shelf with belt colour system visible — white / blue / colour progression', 'Boxing section: gloves as hero product flanked by headguard and shin guards', 'BJJ section: gi displayed with rashguard and shorts as complete system', 'Use discipline-specific signage: Boxing / Muay Thai / BJJ / Judo / Fencing — customers self-navigate by discipline'],
      brands: { luxury: ['Venum Signature', 'Tatami Fightwear', 'Fuji Sports'], premium: ['Hayabusa', 'Fairtex', 'Scramble'], accessible: ['Decathlon Outshock', 'Everlast', 'Adidas Combat'] },
      img: COMBAT.banner,
    },
    sections: [
      {
        title: 'Boxing',
        items: [
          { name: '12oz Training Glove', sub: 'Training · Bag / Pad Work', mat: 'Leather, Synthetic', col: '#F1F2EF,#3b1218,#1e1e3a', img: COMBAT.boxing.glove12 },
          { name: '16oz Sparring Glove', sub: 'Sparring · Contact', mat: 'Leather', col: '#F1F2EF,#3b1218', img: COMBAT.boxing.glove16 },
          { name: 'Satin Boxing Short', sub: 'Training · Competition', mat: 'Satin Polyester', col: '#F1F2EF,#3b1218,#1e1e3a', img: COMBAT.boxing.short },
          { name: 'High-Top Boxing Boot', sub: 'Competition · Ankle Support', mat: 'Leather, Synthetic', col: '#F1F2EF,#3a3a3a', img: COMBAT.boxing.boot },
          { name: 'Cheek Guard Headguard', sub: 'Sparring · Protection', mat: 'Leather, Foam', col: '#F1F2EF,#3b1218', img: COMBAT.boxing.headguard },
        ],
      },
      {
        title: 'Muay Thai',
        items: [
          { name: '10oz Muay Thai Glove', sub: 'Training · Muay Thai', mat: 'Leather, Synthetic', col: '#F1F2EF,#3b1218,#1e1e3a', img: COMBAT.muayThai.glove },
          { name: 'Traditional Satin Short', sub: 'Competition · Training', mat: 'Satin Polyester', col: '#F1F2EF,#3b1218,#1e1e3a', img: COMBAT.muayThai.short },
          { name: 'Full-Length Shin Pad', sub: 'Sparring · Protection', mat: 'Leather, Foam', col: '#F1F2EF,#3b1218', img: COMBAT.muayThai.shinGuard },
        ],
      },
      {
        title: 'BJJ / MMA',
        items: [
          { name: 'Pearl Weave Gi — Blue', sub: 'BJJ · Competition / Training', mat: 'Pearl Weave Cotton', col: '#1e1e3a', img: COMBAT.bjj.giBlue },
          { name: 'Weave Gi — White', sub: 'BJJ · Competition', mat: 'Pearl Weave Cotton', col: '#ffffff', img: COMBAT.bjj.giWhite },
          { name: 'MMA Tudo Short', sub: 'MMA / No-Gi · Training', mat: 'Stretch Polyester', col: '#F1F2EF,#3b1218,#1e1e3a', img: COMBAT.bjj.mmaShort },
          { name: 'Long-Sleeve Rashguard', sub: 'No-Gi · Compression', mat: 'Spandex-Polyester', col: '#F1F2EF,#1e1e3a,#3a3a3a', img: COMBAT.bjj.rashLong },
          { name: 'Short-Sleeve Rashguard', sub: 'No-Gi · Compression', mat: 'Spandex-Polyester', col: '#F1F2EF,#1e1e3a', img: COMBAT.bjj.rashShort },
        ],
      },
      {
        title: 'Judo',
        items: [
          { name: 'Blue IJF Judogi', sub: 'Competition · IJF Approved', mat: 'Cotton', col: '#1e1e3a', img: COMBAT.judo.blue },
          { name: 'White Single Weave Judogi', sub: 'Training · Club', mat: 'Single Weave Cotton', col: '#ffffff', img: COMBAT.judo.white },
          { name: 'Double Weave Judogi', sub: 'Training · Heavy Duty', mat: 'Double Weave Cotton', col: '#ffffff,#1e1e3a', img: COMBAT.judo.double },
        ],
      },
      {
        title: 'Fencing',
        items: [
          { name: '800N Fencing Jacket', sub: 'Competition · FIE Standard', mat: 'Ballistic Nylon', col: '#ffffff,#3a3a3a', img: COMBAT.fencing.jacket },
          { name: 'FIE 1600N Mask', sub: 'Competition · FIE Standard', mat: 'Steel Mesh', col: '#3a3a3a,#F1F2EF', img: COMBAT.fencing.mask },
        ],
      },
      {
        title: 'Kendo',
        items: [
          { name: 'Cotton Kendogi', sub: 'Training · Traditional', mat: 'Heavy Cotton', col: '#1e1e3a,#F1F2EF', img: COMBAT.kendo.kendogi },
          { name: 'Kendo Hakama', sub: 'Training · Traditional', mat: 'Tetron-Cotton', col: '#1e1e3a,#F1F2EF', img: COMBAT.kendo.hakama },
        ],
      },
    ],
  },

  jewellery: {
    banner: JEWELLERY.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Ultrasonic Clean (Metals)' }, { ico: '〰', lbl: 'Soft Cloth Wipe' },
        { ico: '🌲', lbl: 'Anti-Tarnish Strips' }, { ico: '◻', lbl: 'Individual Compartments' },
        { ico: '❄', lbl: 'Avoid Moisture & Perfume' },
      ],
      washing: { temp: 'Warm soapy water — plain gold and silver only', cycle: 'Soft toothbrush for stone settings · never submerge pearl or enamel', dry: 'Pat dry with lint-free cloth · air dry before storing', iron: 'Not applicable', special: 'Ultrasonic cleaner: diamonds · sapphires · rubies only — never pearls, opals or emeralds' },
      hangers: [
        { type: 'Velvet Ring Roll — individual slots', spacing: '1 ring per slot — prevents scratching between metals', note: 'Separate yellow gold · white gold · silver to prevent galvanic tarnish' },
        { type: 'T-Bar Necklace Stand — tiered', spacing: '5cm per necklace — prevents chain tangling', note: 'Fine chains: individual zip-lock or hook storage' },
        { type: 'Earring Board — foam lined', spacing: '3cm per pair — post earrings through foam', note: 'Label heavy statement earrings individually — clips can damage' },
      ],
      blueprint: [
        { zone: 'Velvet Lined Tray Drawer', height: '8cm drawer depth', depth: '40cm × 30cm tray', note: 'Compartmented insert: 12–16 slots per tray for rings and cufflinks' },
        { zone: 'Necklace Hook Zone', height: '30cm height zone', depth: '10cm wall depth', note: 'Tiered T-bar system — 8 necklaces per 60cm width' },
        { zone: 'Display Case Counter', height: '90cm counter height', depth: '45cm glass case depth', note: 'Angled 15° toward client for full visibility of settings' },
      ],
      tips: ['Store each piece individually — contact between metals causes scratching', 'Remove jewellery before perfume application — chemicals dull finish', 'Anti-tarnish strips in every drawer — replace every 6 months', 'Clean prongs and settings quarterly — loose stones are a security risk', 'Insure and photograph all fine jewellery — catalogue with gemstone certificates'],
      img: JEWELLERY.banner,
    },
    retail: {
      lighting: { angle: '20° tight downlight · no heat on gemstones', lux: '800–1200 lux', cct: '4000–5000K neutral-cool · reveals fire in diamonds', fixture: 'UV-free LED fibre optic or cool white LED — never halogen over gemstones' },
      dimensions: [
        { label: 'Counter Height', value: '90cm — client leans in comfortably when seated' },
        { label: 'Display Case Depth', value: '45cm — full arm reach from customer side' },
        { label: 'Tray Angle', value: '15° forward tilt — settings and stones face up toward customer' },
        { label: 'Tray Width', value: '30cm per tray — 4–6 trays per 120cm counter section' },
        { label: 'Mirror Zone', value: '60cm × 90cm mirror at ring and bracelet try-on station' },
      ],
      tips: ['Neutral-cool lighting maximises brilliance of diamonds and white metals', 'Group by metal: yellow gold · white gold · silver · mixed metals', 'Cufflinks and tie bars in a dedicated men\'s accessories case', 'Provide velvet try-on pad at every consultation point', 'Gemstone certificates and hallmark cards displayed alongside fine pieces'],
      brands: { luxury: ['Tiffany & Co.', 'Cartier', 'Bulgari'], premium: ['Pandora', 'Links of London'], accessible: ['Thomas Sabo', 'COS Jewellery'] },
      img: JEWELLERY.banner,
    },
    sections: [
      {
        title: 'Fine Jewellery',
        items: JEWELLERY.items.slice(0, 7).map((img, i) => ({
          name: ['Signet Ring', 'Cufflinks Set', 'Tie Bar', 'Lapel Pin', 'Bracelet', 'Necklace', 'Chain'][i],
          sub: 'Fine · Occasion / Formal', mat: 'Gold, Silver, Platinum', col: '#c2b280,#F1F2EF,#ffffff', img,
        })),
      },
      {
        title: 'Casual & Statement',
        items: JEWELLERY.items.slice(7, 14).map((img, i) => ({
          name: `Jewellery ${i + 8}`,
          sub: 'Casual · Everyday / Statement', mat: 'Silver, Gold-Fill, Steel', col: '#c2b280,#3a3a3a,#F1F2EF', img,
        })),
      },
    ],
  },

  watches: {
    banner: WATCHES.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Microfibre Wipe' }, { ico: '⊙', lbl: 'Service Every 3–5 Years' },
        { ico: '🌲', lbl: 'Watch Winder (Automatic)' }, { ico: '◻', lbl: 'Individual Watch Box' },
        { ico: '❄', lbl: 'No Moisture on Leather Strap' },
      ],
      washing: { temp: 'Never submerge unless rated 30ATM+ · wipe crown area with dry cloth', cycle: 'Rinse stainless steel sports watches under fresh water after seawater exposure', dry: 'Pat dry with microfibre — never compressed air on crown seals', iron: 'Not applicable', special: 'Leather straps: condition with leather balm monthly · avoid prolonged moisture · replace every 12–18 months of daily wear' },
      hangers: [
        { type: 'Watch Cushion — individual per timepiece', spacing: '15cm per watch position in display case', note: 'Cushion diameter matched to lug width — prevents bracelet distortion' },
        { type: 'Watch Winder — automatic movements', spacing: '1 rotor per watch · set to correct TPD for movement', note: 'Over-winding: set TPD to 650–800 for most Swiss automatics' },
        { type: 'Watch Roll — 5–10 slot travel', spacing: 'Individual pocket per watch — velvet lined', note: 'Use only for transport · long-term storage use rigid box or winder' },
      ],
      blueprint: [
        { zone: 'Watch Winder Cabinet', height: '40cm per winder tier', depth: '35cm depth', note: 'Min. 1 winder per automatic movement in regular rotation' },
        { zone: 'Display Case Counter', height: '90cm counter height', depth: '40cm depth', note: '10–15cm per watch · angled 10° toward client' },
        { zone: 'Watch Box Stack', height: '10cm per box', depth: '30cm depth', note: 'Stack max 8 boxes — heavyweight tourbillons on base only' },
      ],
      tips: ['Service mechanical movements every 3–5 years — oil degrades regardless of wear', 'Automatic watches: wear or wind daily to maintain power reserve', 'Avoid magnetic fields — speakers, laptops, and bags with magnets affect accuracy', 'Rotate straps seasonally — leather summer / rubber sport / metal winter', 'Store spare straps flat in UV-protected pouch'],
      img: WATCHES.banner,
    },
    retail: {
      lighting: { angle: '25° precision downlight · no UV', lux: '600–800 lux', cct: '3500K neutral · reveals metal texture without yellowing', fixture: 'Fibre optic preferred · cool white LED PAR16 12W — no heat on dials' },
      dimensions: [
        { label: 'Counter Height', value: '90cm — seated consultation or standing browse' },
        { label: 'Display Case Depth', value: '40cm — full dial visible from customer standing position' },
        { label: 'Width Per Watch', value: '15cm minimum · 20cm for chronographs with pushers' },
        { label: 'Tilt Angle', value: '10–15° toward customer — dial and hands fully visible' },
        { label: 'Try-On Cushion', value: 'One velvet cushion per consultation station · 25cm diameter' },
      ],
      tips: ['Group by complication: time-only · date · chronograph · GMT · tourbillon', 'Separate dress watches from sports — distinct counter zones', 'Show movement through case back on at least one piece per brand', 'Strap options in matching tray beside each reference — drives upsell', 'Neutral lighting reveals lume markings and brushed finishing accurately'],
      brands: { luxury: ['Patek Philippe', 'Rolex', 'A. Lange & Söhne'], premium: ['IWC', 'Jaeger-LeCoultre', 'TAG Heuer'], accessible: ['Tissot', 'Seiko', 'Longines'] },
      img: WATCHES.banner,
    },
    sections: [
      {
        title: "Men's Watches",
        items: [
          { name: 'Automatic Dress Watch', sub: 'Dress · Formal / Smart', mat: 'Steel Case, Leather Strap', col: '#c2b280,#F1F2EF,#3a3a3a', img: WATCHES.men.autoDress },
          { name: 'Manual Wind Dress', sub: 'Dress · Heritage', mat: 'Steel Case, Leather Strap', col: '#F1F2EF,#c2b280', img: WATCHES.men.manualDress },
          { name: 'Classic Chronograph', sub: 'Chronograph · Sport / Formal', mat: 'Steel Case, Leather Strap', col: '#F1F2EF,#c2b280,#3a3a3a', img: WATCHES.men.classicChron },
          { name: 'Racing Chronograph', sub: 'Chronograph · Sport / Racing', mat: 'Steel Case, Rubber Strap', col: '#F1F2EF,#3b1218,#3a3a3a', img: WATCHES.men.racingChron },
          { name: 'Diver Watch', sub: 'Sport · Water Resistant 300m', mat: 'Steel Case, Rubber Strap', col: '#F1F2EF,#1e1e3a', img: WATCHES.men.diver },
          { name: 'Pilot / Aviation', sub: 'Sport · Heritage / Pilot', mat: 'Steel Case, Leather Strap', col: '#F1F2EF,#3a3a3a,#c2b280', img: WATCHES.men.pilot },
        ],
      },
      {
        title: 'Smart Watches',
        items: [
          { name: 'GPS Multisport Watch', sub: 'Smart · Sports / Outdoor', mat: 'Titanium, Silicone', col: '#F1F2EF,#3a3a3a', img: WATCHES.smart.gps },
          { name: 'Health & Sleep Tracker', sub: 'Smart · Wellness', mat: 'Aluminium, Silicone', col: '#F1F2EF,#3a3a3a,#ffffff', img: WATCHES.smart.health },
        ],
      },
      {
        title: "Women's Watches",
        items: [
          { name: 'Fashion Strap Watch', sub: 'Casual · Everyday / Fashion', mat: 'Steel Case, Leather Strap', col: '#c2b280,#F1F2EF,#3b1218', img: WATCHES.women.fashion },
          { name: 'Diamond Set Jewellery Watch', sub: 'Dress · Occasion / Formal', mat: 'Steel Case, Diamond Bezel', col: '#c2b280,#ffffff,#F1F2EF', img: WATCHES.women.jewellery },
        ],
      },
    ],
  },

  bags: {
    banner: BAGS.banner,
    storage: {
      care: [
        { ico: '🌲', lbl: 'Condition Leather Monthly' }, { ico: '⊙', lbl: 'Stuff with Tissue When Stored' },
        { ico: '◻', lbl: 'Dust Bag Storage' }, { ico: '〰', lbl: 'Suede Protector Spray' },
        { ico: '❄', lbl: 'Keep Away from Direct Heat' },
      ],
      washing: { temp: 'Never machine wash leather or suede bags', cycle: 'Wipe smooth leather with barely damp cloth · suede: dry brush only', dry: 'Air dry naturally away from heat · stuff with tissue immediately to hold shape', iron: 'Not applicable — heat damages leather grain and glue bonds', special: 'Canvas: spot clean with mild soap and damp brush · patent leather: polish with petroleum jelly' },
      hangers: [
        { type: 'Bag Hook — wall-mounted 15cm projection', spacing: '40–50cm between hooks to prevent side compression', note: 'Hook through handle — never strap · reinforced fixings for heavy leather bags' },
        { type: 'Open Shelf Display — padded base', spacing: '50–60cm width per bag · allow breathing room', note: 'Stuff structured bags with tissue paper · fill soft bags loosely' },
      ],
      blueprint: [
        { zone: 'Open Shelf (Totes / Structured)', height: '35cm per shelf tier', depth: '40cm depth', note: '2 bags per 80cm shelf — breathing space prevents shape loss' },
        { zone: 'Hook Wall Zone', height: '100–160cm from floor', depth: '15cm projection', note: 'Tiered at 100 / 130 / 160cm · lighter bags on higher hooks' },
        { zone: 'Clutch & Small Bag Tray', height: '10cm tray depth', depth: '40cm × 30cm tray', note: 'Individual compartment per clutch · clear lids preferred' },
      ],
      tips: ['Stuff leather bags with tissue when not in use — prevents collapse and crease', 'Condition smooth leather every 4–6 weeks with matching leather cream', 'Suede protector spray every 6 weeks — especially in wet season', 'Never hang bags by a thin strap — hook always through main handle', 'Rotate bags in use — even unused leather dries out without conditioning'],
      img: BAGS.banner,
    },
    retail: {
      lighting: { angle: '30° downlight + side accent', lux: '500–700 lux', cct: '2700–3000K warm', fixture: 'Warm LED PAR20 · side accent spotlights reveal texture of grain and stitching' },
      dimensions: [
        { label: 'Open Shelf Depth', value: '40cm — full bag silhouette visible from 1m distance' },
        { label: 'Width Per Bag', value: '55–60cm — no side compression between pieces' },
        { label: 'Hook Height Tiers', value: '90 / 120 / 150cm — varied heights create visual flow' },
        { label: 'Counter Display Depth', value: '45cm — clutches and small bags angled 10° forward' },
        { label: 'Vignette Zone', value: '120cm wide · bag hero with matching accessories and shoes' },
      ],
      tips: ['Always display bags stuffed and open — collapsed bags read as defective', 'Group by end use: office · evening · travel · casual · sport', 'Show open interior of one key piece per section — quality of lining sells', 'Warm accent lighting on stitching and hardware creates premium impression', 'Co-display matching small leather goods — wallet · card case · keyring'],
      brands: { luxury: ['Louis Vuitton', 'Gucci', 'Bottega Veneta'], premium: ['Coach', 'Mulberry', 'Ted Baker'], accessible: ['Zara', 'COS'] },
      img: BAGS.banner,
    },
    sections: [
      {
        title: "Men's Bags",
        items: [
          { name: 'Tech Backpack', sub: 'Daily · Work / Travel', mat: 'Nylon, Leather Trim', col: '#F1F2EF,#3a3a3a', img: BAGS.men.techBackpack },
          { name: 'Leather Briefcase', sub: 'Formal · Office / Business', mat: 'Full-Grain Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.men.leatherBriefcase },
          { name: 'Slim Portfolio', sub: 'Formal · Meetings / Office', mat: 'Leather', col: '#F1F2EF,#3b1218', img: BAGS.men.slimPortfolio },
          { name: 'Canvas Messenger', sub: 'Casual · Daily / Commute', mat: 'Canvas, Leather Trim', col: '#3a3a3a,#c2b280', img: BAGS.men.canvasMessenger },
        ],
      },
      {
        title: 'Sports Bags',
        items: [
          { name: 'Sports Backpack', sub: 'Active · Gym / Sport', mat: 'Nylon', col: '#F1F2EF,#3a3a3a,#1e1e3a', img: BAGS.sports.sportsBackpack },
          { name: 'Large Gym Duffel', sub: 'Active · Gym / Sport', mat: 'Nylon', col: '#F1F2EF,#3a3a3a', img: BAGS.sports.largeDuffel },
        ],
      },
      {
        title: 'Travel',
        items: [
          { name: 'Aluminium Trolley', sub: 'Carry-On · Business Travel', mat: 'Aluminium', col: '#3a3a3a,#c2b280,#F1F2EF', img: BAGS.travel.alumTrolley },
          { name: 'Hard Shell Luggage', sub: 'Check-In · Travel', mat: 'Polycarbonate', col: '#F1F2EF,#3a3a3a,#1e1e3a', img: BAGS.travel.luggage },
          { name: 'Leather Weekend Duffle', sub: 'Weekend · Travel / Gym', mat: 'Full-Grain Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.travel.leatherDuffle },
        ],
      },
      {
        title: "Women's Bags",
        items: [
          { name: 'Envelope Clutch', sub: 'Evening · Formal / Occasion', mat: 'Leather, Satin', col: '#c2b280,#F1F2EF,#1e1e3a', img: BAGS.women.envelopeClutch },
          { name: 'Frame Clutch', sub: 'Evening · Cocktail / Formal', mat: 'Leather, Metal Frame', col: '#c2b280,#F1F2EF', img: BAGS.women.frameClutch },
          { name: 'Small Crossbody', sub: 'Day · Casual / Smart', mat: 'Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.women.smallCrossbody },
          { name: 'Medium Shoulder Bag', sub: 'Day · Smart Casual / Work', mat: 'Leather', col: '#3b1218,#c2b280,#F1F2EF', img: BAGS.women.mediumShoulder },
          { name: 'Canvas Tote', sub: 'Day · Casual / Beach', mat: 'Canvas, Leather Trim', col: '#ffffff,#3a3a3a,#c2b280', img: BAGS.women.canvasTote },
          { name: 'Leather Tote', sub: 'Work · Office / Smart', mat: 'Full-Grain Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.women.leatherTote },
        ],
      },
    ],
  },

  scarves: {
    banner: SCARVES.banner,
    storage: {
      care: [
        { ico: '🌊', lbl: 'Hand Wash 30°C (Wool)' }, { ico: '⊙', lbl: 'Dry Clean (Silk)' },
        { ico: '〰', lbl: 'Lay Flat to Dry' }, { ico: '◻', lbl: 'Roll — Do Not Fold' },
        { ico: '🌲', lbl: 'Cedar Moth Protection' },
      ],
      washing: { temp: 'Cashmere & wool: hand wash cold · silk: dry clean only · linen & cotton: 30°C gentle', cycle: 'Squeezing motion only — never wring or twist · press gently in towel to remove water', dry: 'Lay flat on clean towel · reshape while damp · never tumble dry or hang', iron: 'Silk: cool iron on reverse with pressing cloth · wool: steam only · cashmere: steam 10cm above fabric', special: 'Cashmere: de-pill with cashmere comb after every 3 wears · store with lavender sachets not cedar' },
      hangers: [
        { type: 'Scarf Hanger — multi-loop 12 arm', spacing: '1 scarf per arm — allows full drape visibility', note: 'Silk scarves: hang from one corner to prevent fold marks' },
        { type: 'Rolled storage in drawer', spacing: '10–12cm roll width per scarf', note: 'Cashmere and wool: roll loosely · silk: tissue interleaved between folds' },
      ],
      blueprint: [
        { zone: 'Scarf Rail Display', height: '120cm from floor', depth: '15cm projection', note: 'Drape display · 6 scarves per 60cm rail section' },
        { zone: 'Drawer (Rolled)', height: '15cm drawer depth', depth: '45cm depth', note: 'Roll loosely · 8–10 per drawer · cedar chips in corner' },
        { zone: 'Open Shelf (Folded Wool)', height: '25cm per shelf', depth: '40cm depth', note: 'Stack max 4 · interleave tissue between cashmere pieces' },
      ],
      tips: ['Store cashmere and wool with natural moth repellent — lavender, not cedar (cedar can dry out cashmere)', 'Never hang heavy wool scarves — rolling prevents distortion', 'De-pill cashmere with specialist comb — prevents matting and extends life significantly', 'Rotate seasonal scarves — off-season storage in breathable cotton bags', 'Silk: tissue-interleaved rolled storage prevents permanent fold lines'],
      img: SCARVES.banner,
    },
    retail: {
      lighting: { angle: '35° downlight with colour rendering focus', lux: '600–750 lux', cct: '3000–3500K · accurate colour rendering essential for print scarves', fixture: 'High-CRI LED (CRI 95+) — colour accuracy critical for silk print display' },
      dimensions: [
        { label: 'Drape Rail Height', value: '120–140cm — full scarf length visible without floor contact' },
        { label: 'Rail Length Per Category', value: '100cm: cashmere · 80cm: silk · 60cm: wool' },
        { label: 'Waterfall Hook Spacing', value: '20cm per scarf at 120cm height' },
        { label: 'Folded Display Width', value: '30cm per colour family — face-out folds at 90cm height' },
        { label: 'Print Hero Display', value: 'Full-open drape on form or frame — 60cm × 180cm space minimum' },
      ],
      tips: ['Display silk scarves in full-open drape — folded print loses impact', 'Group by fibre first: cashmere · silk · wool — then by palette', 'Show fabric weight difference through hanging — drape reveals weight naturally', 'High colour rendering index lighting (CRI 95+) essential for printed silk accuracy', 'Include a tactile tester — unfolded touchable piece builds cashmere sale confidence'],
      brands: { luxury: ['Hermès', 'Loro Piana', 'Brunello Cucinelli'], premium: ['Johnstons of Elgin', "Drake's"], accessible: ['COS', 'Zara'] },
      img: SCARVES.banner,
    },
    sections: [
      {
        title: 'Scarves',
        items: SCARVES.items.map((img, i) => ({
          name: ['Cashmere Scarf', 'Silk Scarf', 'Wool Scarf', 'Printed Silk', 'Merino Scarf', 'Linen Scarf', 'Heritage Plaid'][i],
          sub: ['Cashmere · Autumn / Winter', 'Silk · All Season', 'Wool · Winter', 'Silk · Occasion', 'Merino · Everyday', 'Linen · Summer', 'Wool Plaid · Heritage'][i],
          mat: 'Cashmere, Silk, Merino Wool, Linen',
          col: '#c2b280,#3a3a3a,#1e1e3a,#F1F2EF',
          img,
        })),
      },
    ],
  },

  belts: {
    banner: BELTS.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Wipe with Damp Cloth' }, { ico: '🌲', lbl: 'Condition Leather Annually' },
        { ico: '◻', lbl: 'Hang or Roll — Never Fold' }, { ico: '⊙', lbl: 'Suede Brush — Dry Only' },
        { ico: '❄', lbl: 'Keep Buckle Dry' },
      ],
      washing: { temp: 'Never machine wash leather belts', cycle: 'Wipe smooth leather with barely damp cloth · allow to air dry before buckling', dry: 'Air dry flat — never coil when wet · leather sets to shape when damp', iron: 'Not applicable — never apply heat to leather or suede', special: 'Patent leather: wipe with petroleum jelly to maintain shine · canvas: spot clean with mild soap and soft brush' },
      hangers: [
        { type: 'Belt Hook Rail — horizontal bar system', spacing: '8–10cm per belt on hook · buckle outward', note: 'Separate formal leather from casual woven and canvas' },
        { type: 'Belt Roll — drawer storage', spacing: 'Roll loosely · 10cm diameter roll max · buckle at outer end', note: 'Never fold sharply — creases in leather become permanent' },
      ],
      blueprint: [
        { zone: 'Hook Rail (Wall)', height: '100–140cm from floor', depth: '10cm projection', note: '8 belts per 60cm rail · buckles facing same direction' },
        { zone: 'Drawer (Rolled)', height: '12cm drawer depth', depth: '45cm width', note: '6–8 rolled belts per standard drawer · label by colour' },
        { zone: 'Display Peg Wall', height: '90–150cm range', depth: '15cm peg projection', note: 'Tiered peg system at varied heights for visual merchandising' },
      ],
      tips: ['Never coil leather belts tightly — circular stress cracks the grain over time', 'Condition leather once per year with matching colour cream', 'Rotate buckle placement side-to-side to prevent asymmetric wear', 'Suede belts: brush weekly in direction of nap to restore texture', 'Store dress belts separately — metal buckles scratch adjacent leather'],
      img: BELTS.banner,
    },
    retail: {
      lighting: { angle: '30° downlight · side accent for texture', lux: '700–900 lux', cct: '3500K neutral', fixture: 'LED PAR20 directional · side accent reveals grain texture on leather' },
      dimensions: [
        { label: 'Display Rail Height', value: '100–140cm — full belt length hangs without floor contact' },
        { label: 'Spacing Per Belt', value: '8–10cm on rail — buckle clearly visible at eye height' },
        { label: 'Tiered Peg Width', value: '60cm per category: dress · casual · woven · canvas' },
        { label: 'Buckle Display Height', value: '125cm — buckle at eye level for hardware appreciation' },
        { label: 'Stack Display', value: '6 belts max in flat fold stack — 30cm wide' },
      ],
      tips: ['Display belts at full length — never coiled in retail · coiled reads as damaged', 'Group by occasion: dress · smart casual · casual · utility', 'Buckle hardware at eye level draws attention to craftsmanship', 'Show matching shoe and trouser vignette with key belt styles', 'Leather grain texture visible under directional side lighting — builds perceived quality'],
      brands: { luxury: ['Hermès', 'Gucci', 'Bottega Veneta'], premium: ['Ralph Lauren', 'Ted Baker'], accessible: ['Zara', 'Massimo Dutti'] },
      img: BELTS.banner,
    },
    sections: [
      {
        title: 'Belts',
        items: BELTS.items.map((img, i) => ({
          name: ['Dress Belt', 'Casual Belt', 'Braided Belt', 'Western Belt', 'Canvas Belt', 'Patent Belt', 'Suede Belt', 'Reversible Belt'][i],
          sub: ['Dress · Formal / Business', 'Casual · Everyday', 'Casual · Summer', 'Heritage · Statement', 'Casual · Utility', 'Dress · Formal', 'Smart Casual', 'Versatile · 2-in-1'][i],
          mat: 'Leather, Suede, Canvas, Patent',
          col: '#F1F2EF,#3b1218,#c2b280,#3a3a3a',
          img,
        })),
      },
    ],
  },

  eyewear: {
    banner: EYEWEAR.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Microfibre Cloth Only' }, { ico: '⊙', lbl: 'Lens Spray Cleaner' },
        { ico: '◻', lbl: 'Hard Case Storage' }, { ico: '🌲', lbl: 'Never Leave in Hot Car' },
        { ico: '❄', lbl: 'Avoid Solvents & Alcohol' },
      ],
      washing: { temp: 'Lukewarm water only — not hot · hot water warps acetate frames', cycle: 'Mild dish soap · rinse thoroughly · no paper towels — micro-abrasion scratches lenses', dry: 'Pat dry with microfibre cloth · air dry open in case — never lens-down', iron: 'Not applicable — never apply heat to frames', special: 'Anti-reflective coated lenses: only dedicated AR lens spray · never household cleaners or alcohol wipes' },
      hangers: [
        { type: 'Individual Hard Case per frame', spacing: '15cm per case in drawer or shelf', note: 'Never nest two pairs in one case — temple arms scratch lenses' },
        { type: 'Display Stand — horizontal bar or peg', spacing: '15cm per frame on display rod', note: 'Hang by bridge over bar · temples folded · never lens-forward on hard surface' },
      ],
      blueprint: [
        { zone: 'Case Shelf Storage', height: '10cm per shelf', depth: '20cm depth', note: '6 cases per 90cm shelf · label front of each case' },
        { zone: 'Display Wall Bar', height: '140–165cm from floor', depth: '15cm projection', note: '6 frames per 90cm bar · at eye level for self-try-on browsing' },
        { zone: 'Counter Display Stand', height: '90cm counter height', depth: '25cm stand depth', note: '4–6 piece revolving stand · face-out for frame shape visibility' },
      ],
      tips: ['Never clean lenses with clothing — even clean fabric causes micro-scratches', 'Store in hard case always — soft pouches only for transport alongside case', 'Adjust loose hinges only with correct screwdriver — wrong size strips screws', 'Acetate frames: clean with microfibre + mild soap only · no alcohol', 'Replace nose pads annually — discolouration indicates bacteria build-up'],
      img: EYEWEAR.banner,
    },
    retail: {
      lighting: { angle: '35° downlight · colour accuracy priority', lux: '600–800 lux', cct: '4000K neutral · reveals true tint of lenses and frame colour', fixture: 'High-CRI LED (CRI 95+) — essential for accurate lens tint representation' },
      dimensions: [
        { label: 'Display Bar Height', value: '140–165cm — self-try-on at eye level' },
        { label: 'Frame Spacing', value: '15cm per frame on bar · 20cm for oversized' },
        { label: 'Mirror Placement', value: '165cm centre height · 50cm × 70cm per try-on station' },
        { label: 'Counter Display Depth', value: '25cm — revolving stand or stepped fixed display' },
        { label: 'Category Zone Width', value: '90cm: sunglasses · 60cm: optical · 60cm: sport / performance' },
      ],
      tips: ['Display frames at true eye level (165cm) — customers self-select by face shape', 'Neutral-cool lighting prevents sunglasses tint appearing lighter than actual', 'Keep try-on mirrors within 60cm of each frame group — reduces decision friction', 'Group by frame material: acetate · metal · TR90 — different repair and care needs', 'Include a lens tint swatch board alongside sunglasses section'],
      brands: { luxury: ['Oliver Peoples', 'Moscot', 'Lindberg'], premium: ['Ray-Ban', 'Oakley', 'Tom Ford'], accessible: ['Zara', 'ASOS'] },
      img: EYEWEAR.banner,
    },
    sections: [
      {
        title: 'Eyewear',
        items: EYEWEAR.items.map((img, i) => ({
          name: ['Aviator Sunglasses', 'Wayfarers', 'Round Frame', 'Square Frame', 'Sport Sunglasses', 'Optical Frame'][i],
          sub: ['Classic · All Occasion', 'Casual · Street / Beach', 'Vintage · Fashion', 'Modern · Fashion', 'Performance · Sport', 'Prescription · Everyday'][i],
          mat: 'Metal, Acetate, TR90',
          col: '#F1F2EF,#3b1218,#c2b280,#3a3a3a',
          img,
        })),
      },
    ],
  },

  'indian-ethnic-men': {
    banner: INDIAN_ETHNIC.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Silk & Embroidered Sherwanis' }, { ico: '〰', lbl: 'Hand Wash Cotton Kurtas — 30°C' },
        { ico: '◻', lbl: 'Padded Hanger — Never Wire' }, { ico: '🌲', lbl: 'Muslin Garment Bag — Breathable' },
        { ico: '❄', lbl: 'Cedar Blocks — Repels Moths from Silk' },
      ],
      washing: { temp: 'Cotton kurtas: 30°C cold hand wash or gentle machine · linen: 30°C gentle · silk: dry clean only — water distorts silk weave permanently', cycle: 'Cotton: swirl gently in cool water · linen: gentle cycle inside out · never machine wash embroidered or sequined pieces — embellishment loosens', dry: 'Hang from shoulder on padded hanger — cotton and linen shape naturally while damp · silk: lay flat on towel briefly then hang in shade', iron: 'Cotton kurta: medium iron on reverse · linen: iron while damp for crisp lines · silk: steam from 5cm distance · never iron directly on zardozi, mirror-work or sequin embellishment', special: 'Sherwani: dry clean after each formal wear · store with a small cedar block in the garment bag — silk is highly susceptible to moth damage in Indian subcontinent seasonal storage' },
      hangers: [
        { type: 'Wide Padded Hanger — 48–50cm (Sherwani / Achkan)', barDia: 'N/A — padded contoured', spacing: '10–12cm per sherwani', note: 'Sherwani shoulder architecture requires padded contoured hanger — wire crushes high-neck collar' },
        { type: 'Standard Wooden Hanger — 44cm (Kurta)', spacing: '6–8cm per kurta', note: 'Cotton and linen kurtas: wood hanger maintains shape and absorbs residual moisture' },
        { type: 'Dhoti / Churidar Fold in Drawer', spacing: '20cm per folded piece', note: 'Dhoti and churidar: fold and store flat in a deep drawer — hanging stretches the cotton weave' },
      ],
      blueprint: [
        { zone: 'Sherwani Full-Hang Rail', height: '120–130cm clearance', depth: '60cm', note: 'Sherwani knee-length requires 120cm clear height · breathable muslin bags' },
        { zone: 'Kurta Short-Hang Rail', height: '80–90cm clearance', depth: '45cm', note: 'Cotton and linen kurtas on wooden hangers · 7cm spacing · colour-blocked by occasion' },
        { zone: 'Dhoti / Churidar Drawer', height: '15cm drawer depth', depth: '50cm', note: 'Folded flat in layers · acid-free tissue between silk churidars' },
        { zone: 'Embellished / Occasion Zone (Garment Bags)', height: '130cm clearance', depth: '60cm', note: 'Heavily embroidered and mirror-work pieces: individual breathable muslin bags' },
      ],
      tips: ['Silk sherwani: dry clean after every formal wear — body oils degrade silk fibre structure over multiple wears if not cleaned', 'Cedar blocks (not balls) placed inside garment bag — moths specifically target natural silk and wool fibres in seasonal storage', 'Embroidered zardozi pieces: never fold — even brief folding cracks gold wire work permanently', 'Cotton kurtas worn daily: allow 24h hang-time between wears — cotton recovers shape when aired', 'Bandhgala jacket: steam collar gently before wearing — high collar creases overnight and is difficult to re-set with iron'],
      img: INDIAN_ETHNIC.banner,
    },
    retail: {
      lighting: { angle: '15–20° low accent for embellishment shimmer · 30° overhead fill', lux: '700–900 lux', cct: '2700–3000K warm gold (enhances silk sheen and gold zari embroidery)', fixture: 'Warm LED PAR20 spots · amber gel filter optional for festive atmosphere · canopy lighting for embellished display' },
      dimensions: [
        { label: 'Sherwani Display Height', value: '180cm mannequin + dupatta draped to floor' }, { label: 'Hanging Spacing (Sherwani)', value: '12cm per unit — embellished pieces need space' },
        { label: 'Kurta Rail Height', value: '160cm' }, { label: 'Dupatta Display Bar', value: '180cm high · 80cm wide · draped' },
        { label: 'Mirror Height', value: '210cm full-length — traditional garments read head-to-toe' },
      ],
      tips: ['Warm 2700K gold-tone lighting is essential — cool white kills the lustre of silk, zari, and mirror work', 'Display sherwani on a fully dressed mannequin with stole/dupatta draped — the complete ensemble drives purchase', 'Group by occasion: everyday kurta / festive / wedding — not by silhouette', 'Show coordinating footwear (jutis / mojris) at the base of mannequin display', 'Fabric swatches near the counter for tactile engagement — silk vs. linen vs. cotton is a key purchase decision for ethnic wear'],
      brands: { luxury: ['Sabyasachi', 'Tarun Tahiliani', 'Manish Malhotra'], premium: ['Manyavar', 'Fabindia Select', 'FabIndia'], accessible: ['Biba Men', 'W for Women', 'Fabindia Basics'] },
      img: INDIAN_ETHNIC.banner,
    },
    sections: [
      {
        title: 'Kurta & Sherwani',
        items: INDIAN_ETHNIC.items.slice(0, 8).map((img, i) => ({
          name: ['Kurta — Straight', 'Kurta — Angrakha', 'Sherwani', 'Nehru Jacket', 'Dhoti Set', 'Bandhgala', 'Achkan', 'Indo-Western'][i],
          sub: ['Ethnic · Casual / Festival', 'Ethnic · Occasion', 'Formal · Wedding / Occasion', 'Smart · Formal / Fusion', 'Heritage · Traditional', 'Formal · Wedding', 'Formal · Heritage', 'Fusion · Modern Ethnic'][i],
          mat: 'Cotton, Silk, Dupion, Velvet, Linen',
          col: '#c2b280,#F1F2EF,#3b1218,#1e1e3a,#004739',
          img,
        })),
      },
      {
        title: 'Women\'s Ethnic',
        items: INDIAN_ETHNIC.items.slice(8, 16).map((img, i) => ({
          name: ['Saree', 'Lehenga', 'Salwar Kameez', 'Kurti', 'Anarkali', 'Sharara', 'Palazzo Set', 'Dupatta'][i],
          sub: ['Silk · Occasion / Festival', 'Formal · Wedding', 'Casual / Formal · Daily / Festival', 'Casual · Daily', 'Formal · Festive', 'Heritage · Festive', 'Casual · Fusion', 'Dupatta · Occasion'][i],
          mat: 'Silk, Georgette, Cotton, Chiffon, Velvet',
          col: '#c2b280,#3b1218,#1e1e3a,#004739,#ffffff',
          img,
        })),
      },
    ],
  },

  'japanese-traditions': {
    banner: JAPANESE.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Silk Kimono — Specialist Only' }, { ico: '〰', lbl: 'Cotton Yukata: Hand Wash 30°C' },
        { ico: '◻', lbl: 'Washi-Paper Fold — Traditional Storage' }, { ico: '🌲', lbl: 'Paulownia Wood Box (Kiri-Bako)' },
        { ico: '❄', lbl: 'Camphor Cedar Anti-Moth — Silk' },
      ],
      washing: { temp: 'Silk kimono (furisode, tomesode, uchikake): specialist Japanese kimono dry cleaner only — never water wash · cotton yukata: 30°C cold gentle machine', cycle: 'Cotton yukata: gentle cycle inside out · rinse twice · no fabric softener — stiffens yukata incorrectly · never machine wash hakama — tetron pleats distort', dry: 'Cotton yukata: hang dry fully opened on kimono-width hanger · silk kimono: lay flat on tatami or dry cleaning return only', iron: 'Yukata: iron reverse side at medium cotton setting while slightly damp — restores traditional starched crispness · silk kimono: never iron — steam specialist only · hakama: press each pleat individually from inside with pressing cloth', special: 'Traditional storage: fold kimono in specific hon-datami fold using washi-paper between layers · store in kiri-bako (paulownia wood box) — paulownia regulates humidity and repels insects naturally' },
      hangers: [
        { type: 'Kimono Hanger (Kimono-Kake) — 60cm wide horizontal rod', barDia: '12mm wooden rod', spacing: 'One kimono per hanger · kimono arms extended horizontally', note: 'The full kimono width (approx. 130cm) drapes open on kimono-kake — this is the only correct hanging method' },
        { type: 'Standard Wide Hanger for Gi / Judogi', spacing: '10cm per gi jacket', note: 'Martial arts gi hung on standard wide hanger — same storage logic as western structured jacket' },
      ],
      blueprint: [
        { zone: 'Kimono Hanging Rail (Kimono-Kake)', height: '150cm clearance for full kimono body length', depth: '70cm (kimono sleeve arm extended)', note: 'Dedicated wide horizontal rail — kimono sleeve reaches 60–65cm from body each side' },
        { zone: 'Kiri-Bako (Paulownia Box) Shelf', height: '25cm per box layer', depth: '60cm', note: 'Stack maximum 3 boxes · heavier fabric (uchikake/tomesode) at bottom · furisode above' },
        { zone: 'Hakama Storage (Folded Flat)', height: '20cm drawer or shelf', depth: '55cm', note: 'Fold along existing pleats · traditional hon-orizome fold for tetron hakama' },
        { zone: 'Gi / Judogi Hang Rail', height: '110cm clearance', depth: '55cm', note: 'Cotton gi hung on wide wooden hangers · kendogi and hakama stored separately' },
      ],
      tips: ['Silk kimono must be stored in a kiri-bako (paulownia wood box) — synthetic storage degrades silk due to poor humidity regulation', 'Use washi-paper between kimono layers in the box — prevents dye transfer between different coloured kimono', 'Air silk kimono in shade for 2–3 hours before and after wearing — silk must breathe after body contact', 'Traditional hon-tatami folding preserves silk structure — modern arbitrary folding creates permanent crease lines in woven silk', 'Replace camphor cedar anti-moth insert every 6 months — silk is the primary target of textiles moths in storage'],
      img: JAPANESE.banner,
    },
    retail: {
      lighting: { angle: '20° low accent for silk shimmer · diffused overhead fill', lux: '600–800 lux (subdued — wabi-sabi aesthetic)', cct: '2700–3000K warm · reveals gold yuzen painting and obi silk sheen', fixture: 'Warm filament-style LED · indirect wash lighting preferred over harsh direct spots · canopy diffusion recommended' },
      dimensions: [
        { label: 'Kimono Display (Kimono-Kake)', value: '180cm height · 130cm wide horizontal rod per kimono' }, { label: 'Obi Display Shelf', value: '30cm wide per obi · folded open display at 120cm height' },
        { label: 'Gi Display Rail Height', value: '170cm' }, { label: 'Mirror Width', value: '120cm full-height — kimono sleeve span requires wide mirror' },
        { label: 'Display Zone Spacing', value: '180cm between kimono stands — negative space communicates reverence and value' },
      ],
      tips: ['Display kimono on a proper kimono-kake stand — sleeves extended horizontally shows the yuzen painting across the full fabric width', 'Low lux, warm lighting creates the reverent atmosphere appropriate to garments with cultural significance', 'Obi displayed folded beside coordinating kimono — customers rarely understand obi selection without visual guidance', 'Pair martial arts gi display with bokken or practice sword prop for context — heritage sportswear benefits from contextualisation', 'Include a printed care card with every kimono purchase — specialist storage instructions build confidence in premium purchase'],
      brands: { luxury: ['Kyoto Nishiki-ori Weaving Houses', 'Yamato Kimono', 'Iroha'], premium: ['Furifu', 'Kimono Dressing', 'Wasoukichijoji'], accessible: ['Uniqlo Yukata', 'Rakuten Traditional', 'Wacoal Wa-fu'] },
      img: JAPANESE.banner,
    },
    sections: [
      {
        title: 'Formal',
        items: [
          { name: 'Montsuki Haori Hakama', sub: 'Black 5-Mon Crest · Men · Formal Ceremony', mat: 'Silk', col: '#F1F2EF', img: JAPANESE.formal.montsuki },
        ],
      },
      {
        title: 'Kimono',
        items: [
          { name: 'Formal Furisode', sub: 'Long Sleeve · Women · Coming-of-Age / Formal', mat: 'Silk', col: '#3b1218,#1e1e3a,#c2b280', img: JAPANESE.kimono.furisode },
          { name: 'Kuro Tomesode', sub: 'Short Sleeve · Women · Formal Occasion', mat: 'Silk', col: '#F1F2EF', img: JAPANESE.kimono.tomesode },
          { name: 'Wedding Uchikake', sub: 'Bridal · Women · Wedding Ceremony', mat: 'Silk', col: '#ffffff,#c2b280,#3b1218', img: JAPANESE.kimono.uchikake },
          { name: 'Yukata Cotton Summer', sub: 'Cotton · Unisex · Festival / Summer', mat: 'Cotton', col: '#1e1e3a,#ffffff,#c2b280', img: JAPANESE.kimono.yukata },
        ],
      },
      {
        title: 'Hakama',
        items: [
          { name: 'Pleated Hakama — Divided', sub: 'Men · Martial Arts / Ceremony', mat: 'Tetron-Cotton', col: '#1e1e3a,#F1F2EF', img: JAPANESE.hakama.divided },
          { name: 'Pleated Hakama — Undivided', sub: 'Women · Ceremony', mat: 'Silk, Tetron', col: '#1e1e3a,#F1F2EF,#c2b280', img: JAPANESE.hakama.undivided },
        ],
      },
      {
        title: 'Martial Arts',
        items: [
          { name: 'Judogi White Competition', sub: 'Judo · Competition', mat: 'Cotton', col: '#ffffff', img: JAPANESE.martialArts.judogi },
          { name: 'Light Karate Gi', sub: 'Karate · Training / Competition', mat: 'Cotton', col: '#ffffff', img: JAPANESE.martialArts.karategi },
          { name: 'Kendogi + Hakama Set', sub: 'Kendo · Training / Competition', mat: 'Cotton, Tetron', col: '#1e1e3a,#F1F2EF', img: JAPANESE.martialArts.kendoSet },
        ],
      },
    ],
  },

  knives: {
    banner: KNIVES.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Oil Carbon Steel After Every Use' }, { ico: '〰', lbl: 'Wipe Blade Dry — Never Dishwasher' },
        { ico: '◻', lbl: 'Wooden Sheath or Magnetic Strip' }, { ico: '🌲', lbl: 'Climate-Controlled Cabinet for Damascus' },
        { ico: '❄', lbl: 'Camellia / Mineral Oil — Not Vegetable Oil' },
      ],
      washing: { temp: 'Hand wash only in warm water with mild soap — never dishwasher · dishwasher salts and high heat cause blade oxidation and handle delamination', cycle: 'Wipe blade clean with damp cloth immediately after use · dry fully before sheathing — moisture in sheath causes rust formation within hours', dry: 'Dry blade and ricasso completely with a dry cloth — never air dry · ensure sheath is dry before inserting blade', iron: 'Not applicable', special: 'Carbon steel and Damascus: apply a thin coat of camellia oil or food-safe mineral oil after drying and before storage · never vegetable oil — goes rancid and causes blade patina damage' },
      hangers: [
        { type: 'Magnetic Knife Strip — Wall Mounted', spacing: '8–10cm between blades on strip', note: 'Mount at safe height (180cm+) away from children · blade spine contacts magnet — edge never touches metal directly' },
        { type: 'Individual Wood-Lined Sheath / Block Slot', spacing: '1 slot per knife', note: 'Wooden block slots lined with soft material protect blade edge geometry · never store loose in a drawer' },
        { type: 'Collector Display Case (Glass-Fronted)', spacing: '15–20cm per knife in case', note: 'Lined velvet case for ceremonial and Damascus display pieces · climate-control preferred' },
      ],
      blueprint: [
        { zone: 'Magnetic Strip Wall (Kitchen / Chef Knives)', height: '180–200cm wall mount — adult reach only', depth: '10cm from wall', note: 'Horizontal strip at 180cm · blade parallel to wall · 8cm minimum between blades' },
        { zone: 'Display Cabinet (Collector / Ceremonial)', height: '90–150cm lockable glass cabinet', depth: '35cm', note: 'Velvet-lined slots · silica gel desiccant packet inside · UV-filtering glass preferred' },
        { zone: 'Working Storage (Block or Drawer Insert)', height: '90cm counter height (block)', depth: '30cm block footprint', note: 'Knife block on dry counter · never below sink — humidity causes handle rot' },
      ],
      tips: ['Carbon steel blades develop a natural patina — this is protective, not damage; embrace the grey-black oxide layer', 'Oil Damascus blades with camellia oil after every cleaning — Damascus folded steel is porous and rusts faster than monosteel', 'Never store knives loose in a drawer — edges contact other metal and dull within days', 'Wooden handles: rub with food-safe mineral oil twice yearly — prevents cracking and microbial growth in grain', 'Ceremonial daggers and display pieces: annual oil and inspection — even stored blades need maintenance attention'],
      img: KNIVES.banner,
    },
    retail: {
      lighting: { angle: '15–25° low directional accent for blade reflection', lux: '600–900 lux', cct: '3000–3500K warm · Damascus pattern and hand-forged texture visible under warm directional light', fixture: 'Narrow PAR20 spot at low angle · individual LED puck per display blade for collector cases' },
      dimensions: [
        { label: 'Display Case Height', value: '90cm counter + 60cm glass case = 150cm total viewing height' }, { label: 'Blade Spacing in Case', value: '15–20cm centre-to-centre — negative space communicates artisan value' },
        { label: 'Magnetic Strip Position', value: '180cm from floor (safety height)' }, { label: 'Counter Display Depth', value: '35–40cm — case depth allows customer to view at distance' },
        { label: 'Individual Spot Footprint', value: '10 × 10cm LED puck per blade in collector display' },
      ],
      tips: ['Low-angle 15° spot on blade reveals Damascus water-pattern and hand-forged grain — overhead light shows nothing', 'Lock display cases for blades over 15cm — standard retail compliance requires lockable storage for knives', 'Include oiling cloth and camellia oil mini-bottle as bundled purchase — aftercare drives repeat visits', 'Artisan and Damascus pieces: print provenance card (forge location, smith, steel type) and display beside blade', 'Group by use: kitchen / outdoor / ceremonial / collector — different buyers with entirely different decision criteria'],
      brands: { luxury: ['Yoshihiro', 'Konosuke', 'Kramer by Zwilling'], premium: ['Shun', 'Global', 'Wüsthof'], accessible: ['Victorinox', 'Opinel', 'Mora'] },
      img: KNIVES.banner,
    },
    sections: [
      {
        title: 'Knives',
        items: KNIVES.items.map((img, i) => ({
          name: ['Fixed Blade', 'Folding Knife', 'Chef\'s Knife', 'Hunting Knife', 'Tactical Knife', 'Ceremonial Dagger', 'Damascus Blade', 'Pocket Knife', 'Bowie Knife', 'Collector\'s Piece'][i],
          sub: ['Heritage · Display / Collection', 'EDC · Utility', 'Kitchen · Culinary', 'Outdoor · Hunting', 'Tactical · Utility', 'Ceremonial · Heritage', 'Artisan · Display', 'Pocket · EDC', 'Heritage · Outdoor', 'Collector · Display'][i],
          mat: 'Damascus Steel, Carbon Steel, Stainless Steel',
          col: '#F1F2EF,#3a3a3a,#c2b280',
          img,
        })),
      },
    ],
  },

  swords: {
    banner: SWORDS.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Uchiko Powder + Camellia Oil (Katana)' }, { ico: '〰', lbl: 'Never Touch Blade with Bare Hands' },
        { ico: '◻', lbl: 'Horizontal Wall Mount or Katana-Kake' }, { ico: '🌲', lbl: 'Climate-Controlled — 45–55% Humidity' },
        { ico: '❄', lbl: 'Carbon Steel: Oil Every 3 Months Minimum' },
      ],
      washing: { temp: 'Never water wash — blades are high-carbon steel and water contact causes immediate surface rust', cycle: 'Traditional katana maintenance: mekugi removal · habaki removal · uchiko powder application · tissue wipe from habaki to tip · camellia oil on new tissue from tip to habaki · re-assemble', dry: 'After any handling: wipe fingerprints with clean tissue before oiling — finger oils are acidic and initiate rust formation within 48h on polished high-carbon surfaces', iron: 'Not applicable', special: 'Antique blades (nihonto): never attempt home maintenance — consult a certified togishi (sword polisher) for any surface work · amateur polishing destroys centuries of surface patina irreversibly' },
      hangers: [
        { type: 'Katana-Kake (Sword Stand) — 2 or 3 tier horizontal rack', spacing: '20–25cm between sword tiers', note: 'Katana stored edge-up (ha-uchi) · wakizashi on lower tier · blade curves upward · never store edge-down' },
        { type: 'Wall Mount Sword Rack — Horizontal', spacing: '30cm wall clearance each side', note: 'Display mount: blade horizontal · edge up · secure with padded brackets · never bracket over bare blade' },
        { type: 'Sword Cabinet (Locking, Climate-Controlled)', spacing: '1 sword per padded slot', note: 'Premium option for antique and collector pieces · UV-filtering glass · internal humidity regulator' },
      ],
      blueprint: [
        { zone: 'Katana-Kake Display Zone', height: '120–150cm from floor to top tier', depth: '90cm stand footprint', note: 'Stand in corner of climate-stable room — away from heating vents, windows, and humidity sources' },
        { zone: 'Wall Mount Display (Decorative / Heritage)', height: '150–180cm centre height on wall', depth: '20cm projection', note: 'Horizontal mount · padded contact points only · no bare metal to blade contact' },
        { zone: 'Locked Storage Cabinet', height: '90–180cm lockable cabinet', depth: '100cm (accommodate full katana length 90–105cm)', note: 'Minimum cabinet depth 100cm for katana · padded individual slots · silica gel desiccant' },
      ],
      tips: ['Never touch a polished blade with bare hands — finger oils etch the surface permanently within hours on high-polish nihonto', 'Traditional katana maintenance cycle: every 3–6 months for stored blades · every handling session for displayed pieces', 'Tsuka (handle) wrap: inspect annually for loose or rotting tsuka-ito (silk/cotton wrap) — loose wrap indicates mekugi (peg) may have shifted', 'Climate control is non-negotiable for collector pieces — 45–55% humidity prevents both rust (too humid) and handle/saya cracking (too dry)', 'Display swords only in locked or secured mounts — displayed blades accessible to visitors are a serious liability and safety risk'],
      img: SWORDS.banner,
    },
    retail: {
      lighting: { angle: '15° low directional accent along blade length · dramatic shadow behind', lux: '400–700 lux (subdued — collector and heritage environment)', cct: '2700–3000K warm · shows temper line (hamon) on nihonto and blade geometry on western swords', fixture: 'Individual LED puck or narrow PAR16 spot per blade · lockable display case with internal LED strip' },
      dimensions: [
        { label: 'Display Case Depth', value: '100cm minimum — accommodates full katana (90–105cm) and western longsword (100–120cm)' }, { label: 'Blade Spacing in Display', value: '30cm centre-to-centre — prestige item requires significant negative space' },
        { label: 'Eye Level Placement', value: '120–140cm from floor to blade centre — horizontal display at natural viewing height' }, { label: 'Wall Mount Clearance', value: '60cm above and below display — prevents accidental contact' },
        { label: 'Locked Case Requirement', value: 'Mandatory for all blades over 30cm — standard retail compliance' },
      ],
      tips: ['Blade displayed horizontally at eye level with low-angle light is the only way to show the hamon (temper line) on nihonto', 'All display swords in a public retail environment must be in locked cases or secured fixed mounts — open display of real swords is a liability', 'Provenance and certification documentation displayed beside each blade — authenticity documentation drives collector purchase', 'Western sword (sabre, rapier, longsword): wall-mounted crossed pair is a classic heritage display that communicates martial history', 'Include a printed care guide with every purchase — proper oiling and storage is the key aftercare message for bladed instruments'],
      brands: { luxury: ['Nihonto Authentic (Japanese certified)', 'Del Tin Armi', 'Windlass Steelcrafts'], premium: ['Cold Steel', 'Hanwei', 'Paul Chen'], accessible: ['Condor Tool & Knife', 'United Cutlery', 'BladesUSA'] },
      img: SWORDS.banner,
    },
    sections: [
      {
        title: 'Swords',
        items: SWORDS.items.map((img, i) => ({
          name: ['Katana', 'Wakizashi', 'Tanto', 'Sabre', 'Rapier', 'Longsword', 'Scimitar', 'Display Sword', 'Ceremonial Sword', 'Collector\'s Blade'][i],
          sub: 'Heritage · Display / Collection',
          mat: 'High Carbon Steel, Damascus, Stainless Steel',
          col: '#F1F2EF,#3a3a3a,#c2b280',
          img,
        })),
      },
    ],
  },

  // ── Women-specific ──────────────────────────────────────────────────────────

  'suits-tailoring-w': {
    banner: SUITS.blazers.doubleBreasted,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Structured Blazers' }, { ico: '〰', lbl: 'Steam — Do Not Iron' },
        { ico: '◻', lbl: 'Padded Hanger Always' }, { ico: '🌲', lbl: 'Breathable Garment Bag' },
        { ico: '❄', lbl: 'Cool Dark Storage' },
      ],
      washing: { temp: 'Wool blazers: dry clean only · linen blend: cold hand wash where label permits', cycle: 'Never machine wash structured blazers — internal canvas and interfacing will shrink unevenly', dry: 'Hang immediately on padded hanger after dry clean · steam to release creases · never tumble dry', iron: 'Steam iron on wool setting from 3–5cm distance · use pressing cloth on lapels · never press shoulder padding directly', special: 'After wearing: hang 24h before storing to allow wool to breathe and recover shape · use cedar blocks not balls' },
      hangers: [
        { type: 'Contoured Padded Hanger — 50cm wide', barDia: 'N/A — padded contoured', spacing: '8–10cm per blazer — allows shoulder to retain form without compression', note: 'Padded width must match shoulder width exactly — too narrow crushes lapels' },
        { type: 'Trouser hanger — clamp style for matching trousers', spacing: '5cm between paired trouser and blazer', note: 'Hang suits together as a set — prevents colour mismatch after separate cleaning' },
      ],
      blueprint: [
        { zone: 'Full-Length Hanging (Blazers)', height: '120cm clear rail height', depth: '60cm depth', note: 'Contoured padded hangers · 8cm spacing · blazers face same direction' },
        { zone: 'Half-Hang (Suit Trousers)', height: '60cm lower rail', depth: '55cm depth', note: 'Clip hanger at waistband · below blazer zone in same bay' },
        { zone: 'Garment Bag Zone', height: '160cm clearance for evening blazers', depth: '60cm', note: 'Breathable cotton bags for seasonal and occasion pieces' },
      ],
      tips: ['Allow blazers to breathe 24h after wearing before returning to wardrobe — wool needs to decompress', 'Steam — never iron — structured shoulders: direct iron heat flattens padding permanently', 'Rotate between at least two blazers per week to allow shape recovery', 'Store casually folded blazers in a single cotton pillowcase for travel — reduces crease vs. rolling', 'Velvet and crepe blazers: store in individual breathable bags — fabric pile crushes under compression'],
      img: SUITS.blazers.doubleBreasted,
    },
    retail: {
      lighting: { angle: '15–20° spot · low angle accent for shoulder silhouette', lux: '900–1100 lux', cct: '3000K warm white · enhances wool and linen tones', fixture: 'Narrow-beam LED PAR30 · uplight rail accent at 40cm for silhouette drama' },
      dimensions: [
        { label: 'Hanging Rail Height', value: '180cm — full blazer plus display space above' },
        { label: 'Spacing Per Blazer', value: '10–12cm — structured shoulder requires breathing room' },
        { label: 'Mannequin Display Width', value: '60–65cm shoulder width · show with coordinated trouser' },
        { label: 'Face-Out Rail Depth', value: '50cm projection from wall — full front visibility' },
        { label: 'Folded Display (Accessories)', value: '45cm wide shelf at 90cm — pocket squares and ties as companion' },
      ],
      tips: ['Always display tailored blazers on a dressed form — a flat rail loses silhouette entirely', 'Pair with coordinating trouser on the same form — shows the complete look', 'Ensure consistent hanger direction and spacing — tailoring reads as disorder-sensitive', 'Directional shoulder lighting at 15° creates the dramatic shoulder shadow that sells structure', 'Premium labels facing outward on hanging rail — brand story drives conversion for tailoring'],
      brands: { luxury: ['Max Mara', 'Stella McCartney', 'The Row'], premium: ['Reiss', 'Hobbs', 'Massimo Dutti'], accessible: ['& Other Stories', 'COS', 'Zara TRF'] },
      img: SUITS.blazers.doubleBreasted,
    },
    sections: [
      {
        title: 'Blazers',
        items: [
          { name: 'Oversized Power Shoulder', sub: 'Statement · Fashion / Work', mat: 'Wool', col: '#3a3a3a,#F1F2EF', img: SUITS.blazers.powerShoulder },
          { name: 'Relaxed Double-Breasted', sub: 'Smart Casual · Day / Office', mat: 'Stretch Wool', col: '#c2b280,#3a3a3a,#F1F2EF', img: SUITS.blazers.doubleBreasted },
          { name: 'Oversized Collarless DB', sub: 'Evening · Statement', mat: 'Wool', col: '#3a3a3a,#F1F2EF,#1e1e3a', img: SUITS.blazers.powerShoulder2 },
          { name: 'Tailored Oversized Fit', sub: 'Smart Casual · Occasion', mat: 'Wool, Linen Blend', col: '#3a3a3a,#c2b280,#F1F2EF', img: SUITS.blazers.doubleBreasted2 },
        ],
      },
    ],
  },

  'shirts-tops-w': {
    banner: SHIRTS.blouses.silk,
    storage: {
      care: [
        { ico: '〰', lbl: 'Hand Wash Silk 30°C' }, { ico: '⊙', lbl: 'Dry Clean (Structured Blouses)' },
        { ico: '◻', lbl: 'Slim Satin Hanger' }, { ico: '🌲', lbl: 'Avoid Direct Sunlight' },
        { ico: '❄', lbl: 'No Heat on Chiffon' },
      ],
      washing: { temp: 'Silk blouses: hand wash 30°C with silk detergent or dry clean · jersey tops: 30°C machine gentle · cotton: 40°C', cycle: 'Silk: swirl gently — never agitate or scrub · rinse twice in cool water to remove soap completely', dry: 'Silk: roll in towel then hang on slim hanger to dry in shade · jersey: lay flat to dry · never tumble dry silk or chiffon', iron: 'Silk: cool iron reverse side while slightly damp · chiffon: steam only from 5cm · jersey: no iron needed · use pressing cloth always', special: 'Chiffon ruffle blouses: hang immediately after washing — ruffles reset as they dry · do not fold when damp' },
      hangers: [
        { type: 'Slim Velvet Hanger — 38–42cm width', barDia: 'N/A — velvet non-slip', spacing: '4–5cm per blouse · delicate fabrics need minimal contact', note: 'Silk and chiffon: velvet grips without stretching bias-cut necklines' },
        { type: 'Fold in drawer — jersey and camisoles', spacing: '15cm folded width per item · stack max 4', note: 'Knit and jersey tops: fold rather than hang to prevent hanger stretch marks on shoulder' },
      ],
      blueprint: [
        { zone: 'Blouse Hanging Rail', height: '80cm clearance', depth: '45cm depth', note: 'Slim velvet hangers · 5cm spacing · silk faces away from window light' },
        { zone: 'Top Drawer (Jersey / Cami)', height: '15cm drawer depth', depth: '45cm', note: 'Roll or fold camisoles · KonMari vertical fold for visibility' },
        { zone: 'Shelf (Folded Cotton Tops)', height: '25cm per shelf', depth: '40cm', note: 'Stack max 3 · lightest on top · colour-blocked for visual clarity' },
      ],
      tips: ['Rotate silk blouses after every wear — silk degrades under repeated direct light and body heat', 'Test washing by rubbing a hidden seam with damp white cloth — colour bleed indicates dry clean only', 'Spray silk with a fine mist of water after hanging — fibres relax and minor creases fall out naturally', 'Store camisoles and satin tops rolled in a soft cotton wrap to prevent surface snagging', 'Chiffon ruffles: gentle shake while damp immediately sets the ruffle back — saves ironing entirely'],
      img: SHIRTS.blouses.silk,
    },
    retail: {
      lighting: { angle: '30° downlight with subtle side fill', lux: '750–900 lux', cct: '3000–3500K · warm white reveals silk sheen and fabric drape', fixture: 'High-CRI LED strip under shelf + PAR20 spot for hero silk piece' },
      dimensions: [
        { label: 'Hanging Rail Height', value: '160cm — blouse hem clears 30cm above floor' },
        { label: 'Spacing Per Blouse', value: '5–6cm — delicate fabric needs air · no compression' },
        { label: 'Face-Out Display Width', value: '50cm per featured blouse on single arm' },
        { label: 'Folded Top Shelf', value: '30cm wide per stack · 3 high · at 90–110cm height' },
        { label: 'Mirror Clearance', value: '60cm in front of display — silk read-through requires space' },
      ],
      tips: ['Display silk blouses under warm CRI 95+ lighting — cold LED kills silk sheen entirely', 'Face-out display for hero blouses — hanging shows silhouette, folded loses detail', 'Group blouses by occasion: work · evening · casual — not by colour for tops', 'Include a tactile tester swatch of silk vs. cotton vs. chiffon — fabric education drives premium purchase', 'Show blouses styled with a trouser or skirt on an adjacent form — customers buy the outfit, not the top'],
      brands: { luxury: ['Zimmermann', 'Equipment', 'Vince'], premium: ['Reiss', 'LK Bennett', 'Whistles'], accessible: ['& Other Stories', 'COS', 'Arket'] },
      img: SHIRTS.blouses.silk,
    },
    sections: [
      {
        title: 'Blouses',
        items: [
          { name: 'Silk Classic Button Blouse', sub: 'Formal · Business / Smart', mat: 'Silk', col: '#ffffff,#1e1e3a,#c2b280', img: SHIRTS.blouses.silk },
          { name: 'Fitted Peplum Blouse', sub: 'Smart · Occasion / Work', mat: 'Silk, Crepe', col: '#ffffff,#1e1e3a,#3b1218', img: SHIRTS.blouses.peplum },
          { name: 'Ruffle Front Tie-Neck', sub: 'Feminine · Smart / Occasion', mat: 'Silk, Chiffon', col: '#ffffff,#c2b280,#1e1e3a', img: SHIRTS.blouses.tieNeck },
        ],
      },
      {
        title: 'Tops',
        items: [
          { name: 'Satin Camisole', sub: 'Casual / Layering · Versatile', mat: 'Satin, Silk', col: '#c2b280,#F1F2EF,#ffffff', img: SHIRTS.womenTops.camisole },
          { name: 'Fitted Crop Top', sub: 'Casual / Active', mat: 'Cotton, Jersey', col: '#F1F2EF,#3a3a3a,#ffffff', img: SHIRTS.womenTops.cropTop },
          { name: 'Off-Shoulder Bodycon', sub: 'Evening · Fashion / Occasion', mat: 'Stretch Jersey', col: '#F1F2EF,#3b1218,#1e1e3a', img: SHIRTS.womenTops.offShoulder },
        ],
      },
    ],
  },

  'trousers-w': {
    banner: TROUSERS.skirts[0],
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash 30°C (Cotton)' }, { ico: '⊙', lbl: 'Dry Clean (Crepe / Silk Skirts)' },
        { ico: '◻', lbl: 'Clip Hanger at Waistband' }, { ico: '🌲', lbl: 'Hang Skirts Immediately' },
        { ico: '❄', lbl: 'Cool Iron — Silk Side Out' },
      ],
      washing: { temp: 'Cotton skirts: 30°C machine gentle · crepe/silk skirts: dry clean or cold hand wash · denim: 30°C inside out · wool trousers: cold hand wash or dry clean', cycle: 'Denim: inside out on gentle cycle · never tumble dry denim as shrinkage is permanent · crepe and crepe-back satin: hand wash swirl only', dry: 'Hang skirts and trousers immediately on clip hanger while slightly damp — waistband sets smooth · denim: lay flat or hang from belt loop', iron: 'Cotton skirts: medium iron · silk/crepe: steam from 3cm or cool iron on reverse · denim: no iron needed · pleated skirts: press along pleat line from waistband down', special: 'Pleated skirts: fold along existing pleats before hanging — never bunch · pencil skirts: store without folding to preserve hem line' },
      hangers: [
        { type: 'Multi-Clip Skirt Hanger — 2-clip swivel bar', barDia: 'N/A', spacing: '6–8cm per skirt — clipped at waistband seam not fabric', note: 'Clip at side seam not centre front — prevents visible clip marks on waistband' },
        { type: 'Clip Trouser Hanger — straight bar with foam grip clips', spacing: '8–10cm per trouser', note: 'Wide-leg trousers: clip at both side seams · hang full length to prevent crease at knee' },
      ],
      blueprint: [
        { zone: 'Skirt Rail (Short-Medium)', height: '80cm clearance (mini/midi)', depth: '45cm depth', note: 'Upper half-height rail · 6cm hanger spacing · evening skirts in garment bags' },
        { zone: 'Skirt Rail (Maxi / Full Length)', height: '140cm clearance', depth: '45cm depth', note: 'Lower dedicated zone or full-height section for maxi and pleated skirts' },
        { zone: 'Trouser Rail (Wide Leg)', height: '100cm clearance', depth: '55cm depth', note: 'Clip full-length from waistband — avoids centre crease on wide-leg silhouette' },
        { zone: 'Denim Shelf / Drawer', height: '20cm per shelf', depth: '50cm', note: 'Folded or rolled denim · vertical filing for visibility' },
      ],
      tips: ['Clip skirts at the waistband from inside the seam — prevents clip marks showing on the outer fabric', 'Maxi and pleated skirts: hang full length always — folding breaks pleat sharpness permanently', 'Wide-leg trousers clipped at full length avoid the dreaded centre crease at knee height', 'Denim stored folded vertically (KonMari) — pulls out cleanly without disturbing the stack', 'Rotate denim — wearing the same pair daily accelerates dye fade unevenly at stress points'],
      img: TROUSERS.skirts[0],
    },
    retail: {
      lighting: { angle: '25° downlight · fill from opposite side for skirt fabric sheen', lux: '800–1000 lux', cct: '3000–3500K · warm reveals silk and satin skirt sheen', fixture: 'PAR20 directional LED · floor-level uplighter to show hem and length on maxi skirts' },
      dimensions: [
        { label: 'Skirt Hanging Rail Height', value: '160cm — maxi skirts hang clear of floor by 10cm' },
        { label: 'Spacing Per Skirt', value: '6–8cm — fabric needs air · compression creates permanent fold' },
        { label: 'Denim Shelf Height', value: '90–110cm — folded denim stack at reach height' },
        { label: 'Trouser Rail Height', value: '180cm — wide leg must hang full length to read silhouette' },
        { label: 'Floor Uplight Clearance', value: '30cm behind rail — maxi skirt hem shown against light ground' },
      ],
      tips: ['Display maxi skirts with floor uplighter — shows length and drape against illuminated floor', 'Pencil and midi skirts: use a dressed form to show body silhouette — hanging rail loses shape impact', 'Wide-leg trousers require full-length hang display — never folded over a rail', 'Group denim by wash (light, mid, dark) rather than style — visual palette reads cleanly', 'Place a coordinated blouse or top styled above the skirt rail — cross-category styling drives basket size'],
      brands: { luxury: ['Zimmermann', 'Toteme', 'Jacquemus'], premium: ['Reiss', 'Hobbs', 'Massimo Dutti'], accessible: ['COS', '& Other Stories', 'Mango'] },
      img: TROUSERS.skirts[0],
    },
    sections: [
      {
        title: 'Skirts',
        items: TROUSERS.skirts.slice(0, 8).map((img, i) => ({
          name: ['Mini Skirt', 'Midi Skirt', 'Maxi Skirt', 'A-Line', 'Pencil Skirt', 'Pleated Skirt', 'Wrap Skirt', 'Denim Skirt'][i],
          sub: ['Casual · Fashion', 'Smart Casual · Versatile', 'Boho · Relaxed', 'Classic · Smart Casual', 'Formal · Business', 'Feminine · Occasion', 'Casual · Smart', 'Casual · Everyday'][i],
          mat: 'Cotton, Wool, Satin, Linen, Denim',
          col: '#F1F2EF,#3a3a3a,#c2b280,#1e1e3a,#ffffff',
          img,
        })),
      },
      {
        title: 'Trousers',
        items: [
          { name: 'Wide Leg Trousers', sub: 'Smart Casual · Office / Day', mat: 'Wool, Crepe', col: '#c2b280,#F1F2EF,#3a3a3a', img: PANTS.wideLeg },
        ],
      },
      {
        title: 'Denim',
        items: [
          { name: 'Skinny Jeans', sub: 'Casual · Everyday', mat: 'Stretch Denim', col: '#1e1e3a,#3a3a3a,#F1F2EF', img: PANTS.jeansW[0] },
          { name: 'High-Waist Skinny', sub: 'Fashion · Casual', mat: 'Stretch Denim', col: '#1e1e3a,#3a3a3a', img: PANTS.jeansW[1] },
        ],
      },
    ],
  },

  dresses: {
    banner: DRESSES.banner,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Evening Gowns' }, { ico: '〰', lbl: 'Hand Wash Day Dresses 30°C' },
        { ico: '◻', lbl: 'Padded Hanger — Full Length' }, { ico: '🌲', lbl: 'Cotton Garment Bag for Evening' },
        { ico: '❄', lbl: 'Steam Only — No Direct Iron on Silk' },
      ],
      washing: { temp: 'Silk and crepe gowns: dry clean only · cotton/linen day dresses: 30°C gentle machine or hand wash · jersey dresses: 30°C inside out', cycle: 'Day dresses: gentle cycle · jersey: cold wash inside out · evening: dry clean — beading and boning distort under any water washing', dry: 'Hang immediately on padded hanger from shoulder loop — dress sets to shape while damp · never tumble dry silk or crepe · jersey: lay flat briefly then hang', iron: 'Cotton day dresses: medium iron · linen: iron while damp for crisp finish · silk and satin: steam from 5cm · never iron directly on beading or sequins', special: 'Beaded evening gowns: fold inside out in acid-free tissue paper for long-term storage — hanging stretches bodice over time' },
      hangers: [
        { type: 'Contoured Padded Hanger — 45–50cm, wide shoulder pad', barDia: 'N/A — padded', spacing: '10–12cm per gown or formal dress — satin and silk need space to breathe', note: 'Use dress shoulder loops always — prevents spaghetti strap stretch and hanger marks' },
        { type: 'Slim Velvet Hanger — for day dresses and jersey', spacing: '6–8cm per dress', note: 'Velvet grip prevents jersey sliding without compressing shoulder seam' },
      ],
      blueprint: [
        { zone: 'Evening Gown Zone (Full Length)', height: '180cm clearance', depth: '60cm depth', note: 'Padded hangers · 12cm spacing · individual breathable cotton bags · train protected at floor' },
        { zone: 'Midi Dress Rail', height: '120cm clearance', depth: '50cm depth', note: 'Padded or velvet slim hangers · 8cm spacing · seasonal rotation' },
        { zone: 'Day Dress Rail (Shirt / Jersey)', height: '100cm clearance', depth: '45cm depth', note: 'Velvet slim hangers · 6cm spacing · casual and workwear dresses' },
        { zone: 'Tissue-Wrapped Drawer (Occasion)', height: '20cm drawer depth', depth: '50cm', note: 'Beaded/sequin pieces: folded inside out in acid-free tissue · not hung long-term' },
      ],
      tips: ['Use dress shoulder loops — hanging by strap instead stretches the bodice over months and pulls neckline out of shape', 'Evening gowns: store individually in breathable cotton garment bags — synthetic bags trap humidity and distort fabric', 'Bodycon dresses: fold flat in a drawer rather than hang — elastic fibres in hanging tension lose recovery over time', 'Steam gowns before wearing rather than the night before — silk absorbs ambient moisture overnight', 'After formal events: hang dress immediately and allow 48h before bagging for storage — body heat and perfume need to off-gas'],
      img: DRESSES.banner,
    },
    retail: {
      lighting: { angle: '10–15° narrow spot for evening gowns · 30° wash for day dresses', lux: '800–1200 lux · evening zone at 1200 for drama', cct: '2700K for evening gown zone · 3500K for day dress zone', fixture: 'Narrow PAR30 spots for evening · LED flood for day · floor-level strip uplighter for train and hem' },
      dimensions: [
        { label: 'Evening Gown Display Height', value: '220cm pedestal + dress — train allowed to pool at floor' },
        { label: 'Mannequin Density', value: '1 mannequin per 120cm width — evening gowns need negative space' },
        { label: 'Day Dress Rail Height', value: '170cm — midi hem clears 30cm from floor' },
        { label: 'Spacing Per Day Dress', value: '8cm — allows customer to slide between pieces' },
        { label: 'Mirror Width', value: '90cm minimum full-height mirror opposite display — full silhouette essential' },
      ],
      tips: ['Evening gowns must be displayed on a dressed form — nothing else communicates a gown\'s silhouette', 'Use a raised platform (15–20cm) under the evening gown mannequin — creates editorial height and prevents train being walked on', 'Group by occasion: day / cocktail / black tie — length naturally signals formality within each zone', 'Warm 2700K lighting in the evening section transforms fabric — this alone differentiates a luxury from budget dress display', 'Provide a seating vignette near evening gowns — the decision to buy an occasion dress takes time, comfort sells'],
      brands: { luxury: ['Valentino', 'Elie Saab', 'Marchesa'], premium: ['Roland Mouret', 'Ghost', 'Ted Baker'], accessible: ['ASOS Edition', 'Karen Millen', 'Reiss'] },
      img: DRESSES.banner,
    },
    sections: [
      {
        title: 'Day Dresses',
        items: DRESSES.items.slice(0, 7).map((img, i) => ({
          name: ['Shirt Dress', 'Wrap Dress', 'Sundress', 'Midi Wrap', 'Linen Dress', 'Jersey Dress', 'Casual Maxi'][i],
          sub: ['Smart Casual · Office', 'Feminine · Versatile', 'Summer · Casual', 'Smart Casual · Day', 'Summer · Relaxed', 'Casual · Everyday', 'Casual · Boho'][i],
          mat: 'Cotton, Linen, Jersey, Silk', col: '#c2b280,#F1F2EF,#1e1e3a,#3b1218,#ffffff', img,
        })),
      },
      {
        title: 'Evening & Occasion',
        items: DRESSES.items.slice(7, 14).map((img, i) => ({
          name: ['Midi Bodycon', 'A-Line Gown', 'Column Dress', 'Off-Shoulder', 'Slip Dress', 'Cocktail Dress', 'Wrap Evening'][i],
          sub: ['Evening · Cocktail', 'Formal · Occasion', 'Elegant · Black Tie', 'Evening · Occasion', 'Satin · Evening', 'Cocktail · Event', 'Evening · Feminine'][i],
          mat: 'Crepe, Silk, Satin, Chiffon', col: '#F1F2EF,#1e1e3a,#3b1218,#c2b280', img,
        })),
      },
    ],
  },

  jumpsuits: {
    banner: JUMPSUITS.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash 30°C (Cotton / Linen)' }, { ico: '⊙', lbl: 'Dry Clean (Crepe / Silk)' },
        { ico: '◻', lbl: 'Padded Full-Length Hanger' }, { ico: '🌲', lbl: 'Hang Immediately — Prevents Crease' },
        { ico: '❄', lbl: 'Steam Leg Panels Before Wearing' },
      ],
      washing: { temp: 'Cotton and linen jumpsuits: 30°C machine gentle · crepe and silk: dry clean or cold hand wash · satin and evening: dry clean only', cycle: 'Unbutton / unzip all closures before washing — zip teeth damage adjacent fabric · turn inside out for colour protection · linen: 30°C gentle inside out', dry: 'Hang from shoulder loops immediately on padded hanger · leg panels drop smooth as fabric dries · never tumble dry crepe or satin', iron: 'Cotton: medium iron on legs then bodice · linen: iron while damp for crisp lines · silk/satin: steam only from 5cm distance · press pockets flat from reverse', special: 'Wide-leg jumpsuits: hang full length always — fold causes permanent crease across thigh which is extremely difficult to remove' },
      hangers: [
        { type: 'Padded Contoured Hanger — 45–50cm wide', barDia: 'N/A — padded', spacing: '10–12cm per jumpsuit — full garment length needs breathing room', note: 'Use internal shoulder loops always — distributes weight evenly and prevents neckline stretch' },
        { type: 'Trouser clip add-on for wide-leg styles', spacing: '2 clips at trouser hem · maintains full leg length display', note: 'Clip hem prevents wide-leg panels from folding inward and developing floor crease' },
      ],
      blueprint: [
        { zone: 'Full-Length Jumpsuit Rail', height: '180cm clearance minimum', depth: '55cm depth', note: 'Wide-leg and maxi jumpsuits: 180cm clear rail · hem must not touch floor · padded hangers' },
        { zone: 'Cropped Jumpsuit / Playsuit Rail', height: '100cm clearance', depth: '45cm', note: 'Slim velvet hangers · playsuit length suits upper half-height rail section' },
        { zone: 'Evening Jumpsuit Zone', height: '180cm clearance with garment bag', depth: '60cm', note: 'Satin and crepe evening jumpsuits: breathable cotton bags · 12cm hanger spacing' },
      ],
      tips: ['Hang jumpsuits full length from shoulder loops — body of the garment determines the drape of both top and leg', 'Wide-leg styles must never be folded across the thigh — the crease line does not steam out without dry cleaning', 'Linen jumpsuits worn crushed read as intentionally relaxed — but to re-press, iron while damp from reverse', 'After evening events: unzip and hang immediately — body heat sets creases in satin within 2 hours', 'Utility jumpsuits: shake out and hang immediately after outdoors wear — trapped heat and moisture in fabric panels cause permanent odour'],
      img: JUMPSUITS.banner,
    },
    retail: {
      lighting: { angle: '20° narrow downlight for silhouette shaping · fill from 45° opposite', lux: '900–1100 lux', cct: '3000–3500K · warm tone flatters all-in-one silhouettes', fixture: 'PAR20 narrow beam spots for mannequin display · LED flood for rail zone' },
      dimensions: [
        { label: 'Mannequin Display Height', value: '180cm pedestal height — wide-leg hem at floor for silhouette' },
        { label: 'Full-Length Rail Height', value: '200cm — wide-leg and maxi jumpsuits hang without floor contact' },
        { label: 'Spacing Per Jumpsuit', value: '10cm — full-length garment requires more breathing room than separates' },
        { label: 'Mirror Distance', value: '150cm from dressed form — customer sees full head-to-toe silhouette' },
        { label: 'Form Count Per Display Bay', value: 'Max 2 forms per 200cm width — jumpsuit is a statement piece, not a volume category' },
      ],
      tips: ['The jumpsuit silhouette only reads on a dressed form — never displayed flat or folded on a rail', 'Styled accessories on the form (belt, shoe) communicate wearability for customers unsure how to dress an all-in-one', 'Group by occasion first, then by leg width — occasion drives decision; silhouette is a secondary filter', 'Linen and cotton casual jumpsuits: show at natural drape without styling — ease of wear is the value proposition', 'Evening jumpsuits styled beside a coordinating evening bag creates an instant occasion look and drives accessory attach rate'],
      brands: { luxury: ['The Row', 'Stella McCartney', 'Halston'], premium: ['Reiss', 'French Connection', 'BOSS Womenswear'], accessible: ['Arket', 'COS', 'ASOS'] },
      img: JUMPSUITS.banner,
    },
    sections: [
      {
        title: 'Jumpsuits',
        items: JUMPSUITS.items.map((img, i) => ({
          name: ['Tailored Jumpsuit', 'Wide Leg Jumpsuit', 'Casual Playsuit', 'Belted Jumpsuit', 'Utility Jumpsuit', 'Evening Jumpsuit', 'Linen Jumpsuit'][i],
          sub: ['Smart · Occasion / Work', 'Relaxed · Fashion', 'Summer · Casual', 'Smart Casual · Versatile', 'Utility · Casual', 'Evening · Occasion', 'Summer · Casual'][i],
          mat: 'Crepe, Cotton, Linen, Silk, Satin', col: '#F1F2EF,#3a3a3a,#c2b280,#1e1e3a,#ffffff', img,
        })),
      },
    ],
  },

  'footwear-w': {
    banner: FOOTWEAR.heels.stiletto,
    storage: {
      care: [
        { ico: '〰', lbl: 'Wipe with Soft Damp Cloth' }, { ico: '🌲', lbl: 'Condition Leather Heels Monthly' },
        { ico: '◻', lbl: 'Heel Cap Protectors Always' }, { ico: '⊙', lbl: 'Suede Brush — Toe Cap Only' },
        { ico: '❄', lbl: 'Shoe Trees in Leather Boots' },
      ],
      washing: { temp: 'Leather heels: wipe clean with damp cloth immediately after wear · suede: dry suede brush only — never damp · satin: dry clean only · canvas sneakers: cold machine wash in mesh bag', cycle: 'Leather conditioning: apply cream conditioner with cloth in circular motion · buff dry · allow 12h before wearing', dry: 'Air dry at room temperature only — never direct heat · heels: dry upright with toe down to prevent heel cap stress · boots: insert shoe trees while damp to maintain shaft shape', iron: 'Not applicable — never apply heat to footwear directly · patent leather: petroleum jelly cloth restores shine', special: 'Stiletto heels: inspect metal tip after every 10 wears — exposed metal tip destroys floors and signals neglect · replace at first sign of wear-through' },
      hangers: [
        { type: 'Individual clear acrylic shoe box — stackable', barDia: 'N/A', spacing: '12cm per box width · stacked max 6 high', note: 'Photo label on each box face — eliminates unpacking to identify style' },
        { type: 'Angled shoe shelf — adjustable tilt 15–20°', spacing: '15–18cm per pair on shelf · heel at back, toe displayed forward', note: 'Display angle of 15° shows heel profile and toe box simultaneously' },
      ],
      blueprint: [
        { zone: 'Heel Display Shelf (Tiered)', height: '20–22cm per shelf', depth: '35cm shelf depth', note: 'Angled 15° toward viewer · heel at shelf back · stilettos tip protected · 4 pairs per 60cm shelf' },
        { zone: 'Boot Storage (Upright)', height: '45–50cm zone height', depth: '40cm depth', note: 'Boot shafts upright with boot shapers inserted · ankle boots in lower section · knee-high on side' },
        { zone: 'Sneaker / Casual Shelf', height: '18cm per shelf', depth: '38cm depth', note: 'Flat shelf · pair placed straight · 3 pairs per 60cm · clear boxes on shelf below' },
        { zone: 'Box Storage (Archived)', height: '15cm per box', depth: '35cm box depth', note: 'Clear acrylic boxes with photo label facing out · archived or seasonal styles' },
      ],
      tips: ['Stiletto heel caps: replace when metal shows through — worn tips destroy floors and cost significantly more to repair than a cap replacement', 'Boot shafts collapse without support — cedar boot shapers maintain shape and absorb residual moisture', 'Suede heels: apply suede protector spray at start of season — preventative treatment is 10× more effective than trying to clean suede damage', 'Rotate between at least two pairs per occasion type — continuous wear in one pair stresses leather beyond recovery', 'Store seasonal heels in clear boxes with photo labels — removes the what-is-in-this-box problem entirely'],
      img: FOOTWEAR.heels.stiletto,
    },
    retail: {
      lighting: { angle: '20–25° narrow spot · low angle for texture reveal on toe box and heel', lux: '1000–1200 lux · high intensity for shoe detail', cct: '3000K warm · enhances leather warmth and suede texture depth', fixture: 'Narrow PAR20 LED spots · side accent rail for heel silhouette · under-shelf LED strip for toe-box illumination' },
      dimensions: [
        { label: 'Display Shelf Height (Heels)', value: '20–22cm per shelf — heel can stand fully upright with space above' },
        { label: 'Shelf Tilt Angle', value: '10–15° forward — shows toe box and heel simultaneously from eye level' },
        { label: 'Width Per Pair', value: '18–20cm — heels need isolation, not touching adjacent pairs' },
        { label: 'Boot Display Height', value: '55cm zone minimum — knee-high boots must stand fully upright' },
        { label: 'Under-Shelf LED Position', value: '5cm from front shelf edge — illuminates toe cap from below without glare' },
      ],
      tips: ['Heels displayed at 10–15° tilt toward the viewer show both silhouette and toe shape simultaneously — flat display loses the heel profile', 'Side accent lighting reveals suede texture and leather grain — only discernible from directional 20° side light', 'Display one pair per shelf slot with clear negative space — crowding heels reads as discount retail', 'Knee-high boots require a dedicated upright display stand — lying flat collapses the shaft and hides the silhouette', 'Mirror tile at shoe shelf height (20–40cm from floor) — customers want to see the shoe on their own foot even before trying'],
      brands: { luxury: ['Jimmy Choo', 'Christian Louboutin', 'Manolo Blahnik'], premium: ['LK Bennett', 'Russell & Bromley', 'Ted Baker'], accessible: ['Mango', 'ALDO', 'Kurt Geiger'] },
      img: FOOTWEAR.heels.stiletto,
    },
    sections: [
      {
        title: 'Heels',
        items: [
          { name: 'Stiletto Classic Pump', sub: 'Formal · Evening / Business', mat: 'Leather, Suede', col: '#F1F2EF,#3b1218,#c2b280', img: FOOTWEAR.heels.stiletto },
          { name: 'Mid Block Heel', sub: 'Smart Casual · Versatile', mat: 'Leather, Suede', col: '#F1F2EF,#3b1218,#c2b280', img: FOOTWEAR.heels.blockHeel },
          { name: 'Kitten Heel Classic', sub: 'Smart · Office / Occasion', mat: 'Leather', col: '#F1F2EF,#c2b280,#3b1218', img: FOOTWEAR.heels.kittenHeel },
          { name: 'Platform Pump', sub: 'Fashion · Statement', mat: 'Leather, Patent', col: '#F1F2EF,#3b1218', img: FOOTWEAR.heels.platform },
          { name: 'Classic Wedge', sub: 'Casual / Smart · Summer', mat: 'Leather, Cork, Jute', col: '#c2b280,#3b1218,#F1F2EF', img: FOOTWEAR.heels.wedge },
        ],
      },
      {
        title: 'Boots',
        items: [
          { name: 'Leather Chelsea Boot', sub: 'Smart Casual · Everyday', mat: 'Leather', col: '#F1F2EF,#3b1218', img: FOOTWEAR.chelsea.leather },
          { name: 'Knee-High Riding Boot', sub: 'Heritage · Smart / Equestrian', mat: 'Leather', col: '#F1F2EF,#3b1218', img: FOOTWEAR.knee.riding },
          { name: 'Stacked Heel Ankle Boot', sub: 'Casual / Fashion', mat: 'Leather, Suede', col: '#F1F2EF,#3b1218', img: FOOTWEAR.ankle.stackedHeel },
        ],
      },
      {
        title: 'Casuals',
        items: [
          { name: 'Canvas Low-Top Sneaker', sub: 'Casual · Everyday', mat: 'Canvas', col: '#ffffff,#F1F2EF,#3a3a3a', img: FOOTWEAR.sneaker.canvasLow },
          { name: 'Leather Low-Top', sub: 'Smart Casual', mat: 'Leather', col: '#ffffff,#F1F2EF', img: FOOTWEAR.sneaker.leatherLow },
          { name: 'Classic Espadrille', sub: 'Summer · Casual / Resort', mat: 'Canvas, Jute', col: '#c2b280,#ffffff', img: FOOTWEAR.espadrille.classic },
        ],
      },
    ],
  },

  // Women sports + accessories — resolved below after PRODS is fully defined
  'golf-w':          { banner: GOLF.banner,              sections: [] },
  'running-w':       { banner: RUNNING.banner,           sections: [] },
  'tennis-padel-w':  { banner: TENNIS.banner,            sections: [] },
  'skiing-alpine-w': { banner: SKIING.banner,            sections: [] },
  'jewellery-w':     { banner: JEWELLERY.items[5],       sections: [] },
  'watches-w':       { banner: WATCHES.women.jewellery,  sections: [] },
  'bags-w':          { banner: BAGS.women.leatherTote,   sections: [] },
  'scarves-w':       { banner: SCARVES.items[1],         sections: [] },
  'belts-w':         { banner: BELTS.items[2],           sections: [] },
  'eyewear-w':       { banner: EYEWEAR.items[1],         sections: [] },

  'indian-ethnic-w': {
    banner: INDIAN_ETHNIC.items[10],
    storage: {
      care: [
        { ico: '⊙', lbl: 'Dry Clean Silk Saree & Lehenga' }, { ico: '〰', lbl: 'Hand Wash Cotton Kurti — 30°C' },
        { ico: '◻', lbl: 'Acid-Free Tissue Between Saree Folds' }, { ico: '🌲', lbl: 'Muslin Garment Bag — Never Plastic' },
        { ico: '❄', lbl: 'Cedar Block — Protects Silk from Moths' },
      ],
      washing: { temp: 'Silk saree and lehenga: dry clean only — never water wash silk · cotton kurti: 30°C cold gentle machine · georgette: dry clean or very gentle 30°C hand wash with silk detergent', cycle: 'Cotton: inside out · gentle cycle · no agitation · rinse twice in cold water · never machine wash dupatta or heavily embellished pieces', dry: 'Silk: lay flat briefly on clean white towel then hang in shade · never tumble dry · cotton kurti: hang dry immediately on hanger · linen: lay flat for 10 min then hang', iron: 'Cotton kurti: medium iron on reverse · silk saree: cool iron on reverse side using pressing cloth · georgette: steam from 5cm only · never iron directly on zari border, mirror work, or sequin embellishment', special: 'Silk saree: fold with acid-free tissue between each fold · store in muslin or cotton bag — never plastic which traps humidity · bridal lehenga: store unfolded in padded hanger inside breathable muslin bag' },
      hangers: [
        { type: 'Wide Padded Hanger — 50cm (Lehenga / Anarkali)', barDia: 'N/A — padded', spacing: '12–15cm per lehenga or anarkali', note: 'Heavy silk and velvet lehenga skirts: hang with separate hanger for skirt and choli to prevent shoulder strain' },
        { type: 'Slim Wooden Hanger (Kurti / Salwar Kameez)', spacing: '6–8cm per set', note: 'Cotton and linen kurtas: wood hanger absorbs moisture · hang top and trouser as a set' },
        { type: 'Saree Folded Storage (Shelf or Acid-Free Box)', spacing: '20cm per saree on shelf · labelled individually', note: 'Sarees: never hang — dead weight stretches silk weave over time · fold in traditional 5-fold with tissue and store flat' },
      ],
      blueprint: [
        { zone: 'Lehenga / Anarkali Full-Hang Rail', height: '130cm clearance', depth: '60cm', note: 'Floor-length anarkali needs 130cm minimum · padded wide hangers · individual breathable bags' },
        { zone: 'Kurti / Salwar Kameez Rail', height: '80cm clearance', depth: '45cm', note: 'Wooden hangers · 7cm spacing · group by occasion: casual daily / festive / formal' },
        { zone: 'Saree Shelf (Flat Folded)', height: '20cm per shelf', depth: '55cm', note: 'Sarees folded with acid-free tissue and stored flat · label visible at front with saree name / colour' },
        { zone: 'Embellished Occasion Pieces (Garment Bag)', height: '130cm clearance', depth: '60cm', note: 'Bridal lehenga, heavily embroidered sets: individual padded muslin bags on dedicated rail' },
      ],
      tips: ['Silk saree: refold along different crease lines every 6 months — permanent fold lines weaken silk fibre over years of static storage', 'Dupatta: fold and store with the matching set — never separately — mismatched dupattas are a common wardrobe loss over seasons', 'Zari and zardozi embellishment: avoid perfume or deodorant spray near embellished garments — alcohol-based sprays tarnish gold wire rapidly', 'Bridal lehenga: keep in original padded box/bag from designer until next wear — professional packing is often better than home repack', 'Velvet fabric: store with pile direction consistent and never compressed — compressed velvet pile does not recover'],
      img: INDIAN_ETHNIC.items[10],
    },
    retail: {
      lighting: { angle: '15–20° low accent for zari and mirror shimmer · overhead warm fill', lux: '700–900 lux', cct: '2700–3000K warm gold · essential for silk sheen and gold embroidery', fixture: 'Warm LED PAR20 spots · amber accent optional · avoid cool-white which kills silk lustre' },
      dimensions: [
        { label: 'Lehenga / Anarkali Display', value: '210cm mannequin + dupatta draped to floor' }, { label: 'Saree Drape Display', value: 'Full 5.5m drape on mannequin · needs 180cm clearance behind form' },
        { label: 'Kurti Rail Height', value: '160cm' }, { label: 'Dupatta Display Bar', value: '180cm high · 80cm wide · draped open' },
        { label: 'Mirror Height', value: '210cm full-length — ethnic silhouettes read from head to toe' },
      ],
      tips: ['Warm 2700K gold-tone lighting is non-negotiable — it activates silk, zari, and mirror embroidery; cool LED kills all three', 'Saree displayed on a fully draped mannequin — undrapped saree fabric on a rail communicates nothing about the garment', 'Group by occasion: casual kurti daily / festive / bridal — not by colour for ethnic wear', 'Include a fabric and embellishment information card — silk vs. georgette vs. cotton and zari vs. mirror-work is a key education and purchase driver', 'Bridal lehenga displayed on an elevated platform (15–20cm) — the ceremony and gravitas of bridal purchase requires a special display zone'],
      brands: { luxury: ['Sabyasachi', 'Anita Dongre', 'Tarun Tahiliani'], premium: ['Manyavar Mohey', 'W for Women', 'Biba'], accessible: ['Fabindia', 'Global Desi', 'Libas'] },
      img: INDIAN_ETHNIC.items[10],
    },
    sections: [
      {
        title: "Women's Indian Ethnic",
        items: INDIAN_ETHNIC.items.slice(8, 20).map((img, i) => ({
          name: ['Saree', 'Silk Saree', 'Lehenga', 'Salwar Kameez', 'Kurti', 'Anarkali', 'Sharara', 'Palazzo Set', 'Dupatta', 'Designer Set', 'Bridal Set', 'Festive Kurti'][i],
          sub: 'Ethnic · Occasion / Festival',
          mat: 'Silk, Georgette, Cotton, Chiffon, Velvet, Brocade',
          col: '#c2b280,#3b1218,#1e1e3a,#004739,#ffffff',
          img,
        })),
      },
    ],
  },

  'japanese-traditions-w': {
    banner: JAPANESE.kimono.furisode,
    storage: {
      care: [
        { ico: '⊙', lbl: 'Specialist Kimono Dry Cleaner Only' }, { ico: '〰', lbl: 'Cotton Yukata: Hand Wash 30°C Cold' },
        { ico: '◻', lbl: 'Hon-Tatami Fold — Traditional Washi Paper' }, { ico: '🌲', lbl: 'Kiri-Bako Paulownia Wood Box' },
        { ico: '❄', lbl: 'Camphor Cedar — Replace Every 6 Months' },
      ],
      washing: { temp: 'All silk kimono (furisode, tomesode, uchikake): specialist Japanese kimono dry cleaner only — never home wash · cotton yukata: 30°C cold gentle machine or hand wash', cycle: 'Yukata: gentle cycle inside out · rinse twice · no fabric softener · women\'s hakama (tetron): never machine wash — dry clean or spot clean', dry: 'Yukata: hang dry fully opened on kimono-width hanger in shade · silk: dry cleaning return only · never tumble dry any kimono or hakama', iron: 'Yukata: iron reverse side with medium cotton setting while slightly damp · silk kimono: never iron — steam specialist only · hakama pleats: press each pleat individually from inside with pressing cloth on low heat', special: 'Bridal uchikake: particularly precious — washi-paper wrap inside kiri-bako · store horizontal not hanging · consult kimono specialist before any cleaning attempt' },
      hangers: [
        { type: 'Kimono Hanger (Kimono-Kake) — 60cm wide horizontal rod', barDia: '12mm wooden rod', spacing: 'One kimono per hanger · sleeves extended horizontally · full width open', note: 'Full kimono hung open shows the full yuzen painting across sleeve and body — the only correct hanging method for airing' },
        { type: 'Hakama Flat Storage — Folded in Drawer', spacing: '20cm per folded hakama', note: 'Women\'s undivided hakama: fold along existing pleats · store flat in drawer or box — never hang long-term' },
      ],
      blueprint: [
        { zone: 'Kimono Airing Rail (Kimono-Kake)', height: '150cm clearance for full body length', depth: '70cm (sleeve arm extended)', note: 'Dedicated wide horizontal rail · one kimono per hanger · air 2–3 hours before and after wearing' },
        { zone: 'Kiri-Bako (Paulownia Box) Shelf', height: '25cm per box', depth: '60cm', note: 'Furisode on upper shelf · tomesode below · uchikake in largest box at base · each with acid-free washi paper' },
        { zone: 'Hakama and Obi Flat Storage', height: '20cm drawer or shelf per item', depth: '55cm', note: 'Obi folded traditionally and stored flat with paper · hakama pleats maintained' },
      ],
      tips: ['Silk kimono: air for 2–3 hours in shade on kimono-kake before returning to kiri-bako — silk must breathe after body contact', 'Bridal uchikake: very heavy white silk — store horizontal in kiri-bako only, never hanging — the weight stretches the woven silk if hung', 'Furisode long sleeves: fold carefully using hon-tatami method — long sleeves are the most easily damaged part under improper folding', 'Camphor cedar anti-moth blocks replaced every 6 months — silk is primary textile moth target in Japan, stored kimono are vulnerable', 'Obi: store unfolded in a separate obi box if possible — obi fabric creases at fold lines and is very difficult to restore without specialist steaming'],
      img: JAPANESE.kimono.furisode,
    },
    retail: {
      lighting: { angle: '15–20° low accent for yuzen pigment and gold embroidery shimmer', lux: '500–700 lux (subdued and reverential)', cct: '2700–3000K warm · shows gold surihaku foil and silk dye depth', fixture: 'Warm filament-style or indirect LED · diffused canopy light · individual accent on displayed obi' },
      dimensions: [
        { label: 'Kimono-Kake Display Width', value: '130cm per stand · 60cm wide horizontal rod' }, { label: 'Obi Display', value: '30cm shelf · open-folded display at 120cm height' },
        { label: 'Mirror Width', value: '120cm full-height — kimono sleeve span requires wide viewing mirror' }, { label: 'Display Spacing', value: '200cm between kimono stands — significant negative space signals cultural reverence' },
        { label: 'Bridal Uchikake Plinth', value: '30cm raised platform — weight of uchikake requires floor pooling display' },
      ],
      tips: ['Display kimono on kimono-kake with sleeves fully extended — the yuzen painting across the full sleeve is the primary value communication', 'Bridal uchikake displayed on elevated plinth with white fabric ground — white on white shows embroidery relief detail', 'Warm subdued lighting creates reverence appropriate to culturally significant garments — too bright reads as disrespectful', 'Obi displayed beside coordinating kimono with a fold showing the front face — customers rarely understand obi selection without guidance', 'Printed care and cultural significance card with every kimono purchase — the story and care instructions build confidence in the premium investment'],
      brands: { luxury: ['Kyoto Nishiki-ori Weaving Houses', 'Yamato Kimono Bridal', 'Iroha'], premium: ['Furifu', 'Wasoukichijoji', 'Kimono Dressing'], accessible: ['Uniqlo Yukata', 'Rakuten Traditional', 'Kimono Rental Converted Purchase'] },
      img: JAPANESE.kimono.furisode,
    },
    sections: [
      {
        title: 'Kimono',
        items: [
          { name: 'Formal Furisode', sub: 'Coming-of-Age · Formal', mat: 'Silk', col: '#3b1218,#1e1e3a,#c2b280', img: JAPANESE.kimono.furisode },
          { name: 'Kuro Tomesode', sub: 'Married Women · Formal', mat: 'Silk', col: '#F1F2EF', img: JAPANESE.kimono.tomesode },
          { name: 'Wedding Uchikake', sub: 'Bridal · Ceremony', mat: 'Silk', col: '#ffffff,#c2b280,#3b1218', img: JAPANESE.kimono.uchikake },
          { name: 'Yukata Cotton', sub: 'Festival · Summer', mat: 'Cotton', col: '#1e1e3a,#ffffff,#c2b280', img: JAPANESE.kimono.yukata },
        ],
      },
      {
        title: 'Hakama',
        items: [
          { name: "Women's Hakama (Undivided)", sub: 'Ceremony / Graduation', mat: 'Silk, Tetron', col: '#1e1e3a,#c2b280', img: JAPANESE.hakama.undivided },
        ],
      },
    ],
  },

  kidswear: {
    banner: KIDSWEAR.banner,
    storage: {
      care: [
        { ico: '〰', lbl: 'Machine Wash 30–40°C · Cotton & Jersey' }, { ico: '⊙', lbl: 'Non-Bio Detergent — Sensitive Skin' },
        { ico: '◻', lbl: 'Fold or Hang — Lightweight Items' }, { ico: '🌲', lbl: 'Clear Label Storage Bins by Size' },
        { ico: '❄', lbl: 'Pass On / Archive by Age Band' },
      ],
      washing: { temp: 'Cotton and jersey: 30–40°C machine wash · denim and outerwear: 30°C inside out · delicate fabrics and ceremonial: 30°C cold gentle or hand wash', cycle: 'Non-biological detergent always — biological enzyme detergents cause skin reactions in children under 5 · inside out for printed tees — print adhesive degrades under heat and agitation', dry: 'Tumble low heat acceptable for cotton basics · hang dry preferred for printed tees and branded items — preserves print and dye longer · outerwear: hang dry only', iron: 'Most kidswear does not require ironing · school uniform shirts: cool iron · never iron directly on printed graphics or embroidered patches', special: 'Outgrown items: size-label and store in vacuum bags by age band for younger siblings or donation · school uniforms: name-tape all items before first wear' },
      hangers: [
        { type: 'Child-Size Plastic Hanger — 30–36cm', barDia: '10mm', spacing: '4–5cm per item', note: 'Adult-sized hangers deform children\'s clothing at the shoulder — always use age-appropriate sized hangers' },
        { type: 'Velvet Slim Hanger (Dress / Occasion)', spacing: '6cm per dress or occasion piece', note: 'Slim velvet hanger prevents occasion dress sliding and keeps collar shape' },
        { type: 'Shelf Fold (T-Shirts / Shorts)', spacing: '8cm per folded stack (max 5 high)', note: 'Children\'s basics: fold vertically in drawer — visible at a glance reduces morning decision friction' },
      ],
      blueprint: [
        { zone: 'Hanging Rail (Tops / Dresses)', height: '80–100cm clearance (adjustable-height rail recommended)', depth: '40cm', note: 'Adjustable rail grows with child — lower rail at 80cm for toddlers · raise to 100cm by age 8' },
        { zone: 'Drawer (Basics: T-Shirts / Shorts / Socks)', height: '15cm per drawer', depth: '40cm', note: 'Vertical fold system — items face up and are visible without disturbing adjacent items' },
        { zone: 'Shoe Shelf', height: '15cm per shelf', depth: '30cm', note: 'Children\'s shoes: 2 pairs per 30cm shelf · store with heel together and toe forward' },
        { zone: 'Archive Shelf / Vacuum Storage (Outgrown)', height: '50cm per bin or vacuum bag shelf', depth: '55cm', note: 'Clear bins labelled by age band (2–3Y / 4–5Y) · vacuum bags for seasonal and outgrown archiving' },
      ],
      tips: ['Use child-sized hangers from day 1 — adult hangers stretch shoulder seams of childrenswear permanently', 'Label all school uniform items with name tapes before first wear — laundry labels fade faster than sewn name tapes', 'Store outgrown clothes in clear labelled bins by size immediately — waiting leads to mixing and confusion across multiple age bands', 'Non-bio detergent only for children under 5 — bio detergents contain enzymes that cause eczema flare-ups in sensitive skin', 'Vertical fold in drawers for basics — children can see all their clothes at once and learn to self-dress more easily'],
      img: KIDSWEAR.banner,
    },
    retail: {
      lighting: { angle: '30–45° overhead wash · bright and welcoming', lux: '1000–1200 lux (brighter than adult — children\'s retail is playful and energetic)', cct: '4000–5000K cool-neutral · bright and clean', fixture: 'LED flood wash · primary colour accent lighting optional · avoid dim or overly dramatic lighting' },
      dimensions: [
        { label: 'Hanging Rail Height', value: '110–130cm — child and parent reach' }, { label: 'Spacing Per Item', value: '4–5cm — kidswear compact but readable' },
        { label: 'Display Table Height', value: '75cm — parent reach for folded items' }, { label: 'Shoe Shelf Height', value: '50–90cm — child reach for self-selection' },
        { label: 'Mannequin / Form Scale', value: 'Age-appropriate scale: toddler (3Y) · junior (8Y) · pre-teen (12Y) per zone' },
      ],
      tips: ['Zone by age band (2–4Y / 5–8Y / 9–12Y / 13–16Y) — parents navigate by age not gender in modern kidswear', 'Use age-appropriate mannequins or forms — adult forms wearing scaled-down kidswear reads as unsettling and reduces dwell time', 'Bright 4000–5000K lighting is standard for kidswear — this is not a luxury fashion environment, it is a playful high-function one', 'Include a garment care label face-out on hanging rail — parents read care labels before purchase for kidswear, more than any other category', 'Group school uniform as a separate destination zone — it has a completely different buying mission to fashion kidswear'],
      brands: { luxury: ['Bonpoint', 'Tartine et Chocolat', 'Jacadi'], premium: ['Next', 'John Lewis & Partners', 'Joules Kids'], accessible: ['H&M Kids', 'Zara Kids', 'Primark'] },
      img: KIDSWEAR.banner,
    },
    sections: [
      {
        title: 'All Kidswear',
        items: KIDSWEAR.items.slice(0, 16).map((img, i) => ({
          name: `Kidswear ${i + 1}`,
          sub: 'Boys / Girls / Unisex · 2–16y',
          mat: 'Cotton, Jersey, Denim',
          col: '#ffffff,#1e1e3a,#3b1218,#c2b280,#004739',
          img,
        })),
      },
    ],
  },
};

// ── Resolve forward references (women share men's sections with their banner) ──
PRODS['golf-w']         = { ...PRODS['golf'],         banner: GOLF.banner };
PRODS['running-w']      = { ...PRODS['running'],      banner: RUNNING.banner };
PRODS['tennis-padel-w'] = { ...PRODS['tennis-padel'], banner: TENNIS.banner };
PRODS['skiing-alpine-w']= { ...PRODS['skiing-alpine'],banner: SKIING.banner };
PRODS['scarves-w']      = { ...PRODS['scarves'],      banner: SCARVES.items[1] };
PRODS['belts-w']        = { ...PRODS['belts'],        banner: BELTS.items[2] };
PRODS['eyewear-w']      = { ...PRODS['eyewear'],      banner: EYEWEAR.items[1] };

// Women's jewellery — fine and statement pieces, no men's cufflinks/tie bars
PRODS['jewellery-w'] = {
  banner: JEWELLERY.items[5],
  storage: {
    care: [
      { ico: '〰', lbl: 'Warm Soapy Water — Gold & Silver Only' }, { ico: '⊙', lbl: 'Soft Toothbrush for Stone Settings' },
      { ico: '◻', lbl: 'Individual Compartments — Never Heap' }, { ico: '🌲', lbl: 'Anti-Tarnish Strips in Jewellery Box' },
      { ico: '❄', lbl: 'Avoid Perfume, Hairspray & Chlorine' },
    ],
    washing: { temp: 'Gold and silver pieces: warm soapy water with mild dish soap · rinse thoroughly in clean water', cycle: 'Soft bristle toothbrush for stone settings · never submerge pearl, coral, amber, turquoise, opal, or enamel pieces in water', dry: 'Pat dry with lint-free microfibre cloth · air dry open before storing — never seal damp jewellery', iron: 'Not applicable', special: 'Pearls: wipe with damp cloth only · store separately from harder gemstones — diamonds scratch pearl nacre · never leave pearls in sunlight or near heat sources' },
    hangers: [
      { type: 'Individual Compartment Jewellery Box or Tray', spacing: '1 piece per slot — no touching', note: 'Diamond and sapphire hardness (9–10 Mohs) scratches softer stones if stored together' },
      { type: 'Necklace Hook or T-Bar', spacing: '4–5cm per necklace hung', note: 'Fine chain necklaces: hang on individual hooks to prevent knotting — unknotting fine gold chain causes link fatigue' },
      { type: 'Ring Cushion / Cone Row', spacing: '2cm per ring cone', note: 'Never stack rings without cushion between — stone and setting scratch each other under pressure' },
    ],
    blueprint: [
      { zone: 'Fine Jewellery Drawer (Lined Tray)', height: '8–10cm drawer depth', depth: '35cm', note: 'Velvet-lined tray with individual compartments · anti-tarnish strip in drawer · no damp' },
      { zone: 'Necklace Hook Rail (Inside Door or Drawer)', height: '30cm hook rail', depth: '15cm', note: 'Chain necklaces hung individually · delicate fine chains: one per hook' },
      { zone: 'Statement Jewellery Shelf (Acrylic or Glass)', height: '15cm per shelf', depth: '30cm', note: 'Large statement pieces displayed open on padded stand — prevents bending of oversized cuff bracelets' },
    ],
    tips: ['Remove jewellery before applying perfume, hairspray, or sunscreen — chemical films coat stone and dull surface permanently', 'Chlorine from swimming pools is the single fastest way to damage gold alloys — remove before swimming always', 'Pearls should be the last item put on and first item removed — body oils and perfume are their greatest enemies', 'Anti-tarnish strips in storage box neutralise sulphur compounds in air — replace every 3–6 months', 'Diamond and hard gemstones scratch softer stones (opal, pearl, turquoise) — always store in separate compartments'],
    img: JEWELLERY.items[5],
  },
  retail: {
    lighting: { angle: '20–25° directional spot for stone sparkle · under-shelf LED for display case', lux: '800–1000 lux · counter case interior: 1200 lux', cct: '3000–3500K warm · reveals gold and gemstone colour depth', fixture: 'High-CRI LED (CRI 95+) PAR20 spots · lockable glass counter with LED strip under shelves' },
    dimensions: [
      { label: 'Display Case Height', value: '90cm counter + 40cm glass case = 130cm total' }, { label: 'Item Spacing in Case', value: '10–15cm per fine piece — negative space signals value' },
      { label: 'Necklace Stand Height', value: '20–25cm T-bar or bust form within case' }, { label: 'Ring Tray', value: '30cm × 20cm per tray · 12–16 ring cones' },
      { label: 'Statement Piece Display', value: 'Plinth: 15 × 15cm × 10cm high per hero item' },
    ],
    tips: ['High-CRI 95+ warm lighting is non-negotiable — standard LED washes out diamond fire and gold depth', 'Fine jewellery displayed in locked glass counter — security and reverence signal luxury equally', 'Every piece displayed with space and a clean background — crowded jewellery displays read as costume, not fine', 'Pearl and coloured stone pieces displayed on dark velvet — white or silver velvet background for diamonds', 'Include a gemstone and metal information card — educated buyers spend more and return more often'],
    brands: { luxury: ['Cartier', 'Tiffany & Co', 'Van Cleef & Arpels'], premium: ['Monica Vinader', 'Astley Clarke', 'Missoma'], accessible: ['Pandora', 'Thomas Sabo', 'Swarovski'] },
    img: JEWELLERY.items[5],
  },
  sections: [
    {
      title: 'Fine Jewellery',
      items: JEWELLERY.items.slice(5, 12).map((img, i) => ({
        name: ['Necklace', 'Statement Necklace', 'Bracelet', 'Bangle', 'Diamond Ring', 'Earrings', 'Drop Earrings'][i],
        sub: 'Fine · Occasion / Formal', mat: 'Gold, Silver, Platinum, Diamond', col: '#c2b280,#ffffff,#F1F2EF', img,
      })),
    },
    {
      title: 'Casual & Statement',
      items: JEWELLERY.items.slice(12, 19).map((img, i) => ({
        name: ['Layered Chain', 'Cuff Bracelet', 'Charm Bracelet', 'Statement Ring', 'Hoop Earrings', 'Stud Earrings', 'Pendant'][i],
        sub: 'Casual · Everyday / Statement', mat: 'Silver, Gold-Fill, Steel', col: '#c2b280,#3a3a3a,#F1F2EF', img,
      })),
    },
  ],
};

// Women's watches — women's and smart only, no men's dress/chronograph watches
PRODS['watches-w'] = {
  banner: WATCHES.women.jewellery,
  storage: {
    care: [
      { ico: '〰', lbl: 'Damp Cloth Wipe — Case & Bracelet' }, { ico: '⊙', lbl: 'Soft Brush for Bracelet Links' },
      { ico: '◻', lbl: 'Watch Cushion or Box — Never Stacked' }, { ico: '🌲', lbl: 'Watch Winder for Mechanical Auto' },
      { ico: '❄', lbl: 'Avoid Magnets — Movement Accuracy' },
    ],
    washing: { temp: 'Water-resistant watches: rinse case and bracelet under fresh water after saltwater exposure · leather strap: wipe with barely damp cloth only — never submerge leather', cycle: 'Steel bracelet: occasional warm soapy water with soft brush for link cleaning · sapphire crystal: clean with microfibre cloth · avoid ultrasonic cleaner on diamond-set bezels', dry: 'Pat dry with soft microfibre cloth after any moisture contact · allow 10 minutes air dry before boxing', iron: 'Not applicable', special: 'Smart watch bands: wipe with damp cloth after every wear — sweat accumulation under band causes skin irritation · silicone bands: mild soap and water acceptable' },
    hangers: [
      { type: 'Individual Watch Cushion / Watch Pillow', spacing: '1 cushion per watch · 12–15cm between pillows in display tray', note: 'Watch cushion maintains crown and case position — prevents scratching from adjacent items' },
      { type: 'Watch Box / Roll (Travel)', spacing: '1 slot per watch', note: 'Individual padded slot for each watch · leather watch rolls for travel — never loose in bag' },
      { type: 'Watch Winder (Mechanical Automatic)', spacing: '1 winder slot per automatic watch', note: 'Automatic watches left unworn for over 24h require winding · winder maintains mainspring tension and lubricant distribution' },
    ],
    blueprint: [
      { zone: 'Watch Tray in Drawer (Fine Watches)', height: '8–10cm drawer depth', depth: '40cm', note: 'Velvet-lined tray with individual cushioned slots · silica gel desiccant · anti-magnetic organiser liner' },
      { zone: 'Watch Winder Station (Automatic)', height: '20cm clearance on shelf', depth: '35cm', note: 'Winder placed away from speakers, motors, and phone charging pads — EMF affects mechanical movement accuracy' },
      { zone: 'Smart Watch Charging Station', height: '15cm shelf', depth: '30cm', note: 'Individual wireless charging pad per watch · cables managed cleanly · store near dressing table or desk' },
    ],
    tips: ['Never store watches face-down on a hard surface — even a brief scratch on sapphire crystal is expensive to fix', 'Magnetic fields (handbags with magnetic clasps, phone, speakers) affect mechanical watch accuracy — store at least 30cm from magnetic sources', 'Leather strap: allow to breathe 24h off the wrist — body sweat in the leather causes premature cracking if worn daily without rest', 'Smart watch: remove and clean silicone band weekly — trapped moisture under the band causes skin redness and odour', 'Dress / jewellery watch with diamond bezel: remove before sport, washing, or gardening — diamond settings absorb impact and loosen under physical activity'],
    img: WATCHES.women.jewellery,
  },
  retail: {
    lighting: { angle: '25–30° directional spot · under-case LED strip', lux: '800–1000 lux · display case interior: 1200 lux', cct: '3000–3500K warm (jewellery watches) · 4000K neutral (sport and smart)', fixture: 'High-CRI LED (CRI 95+) · lockable glass counter case with integrated LED' },
    dimensions: [
      { label: 'Display Case Height', value: '90cm counter + 40cm glass case = 130cm total' }, { label: 'Watch Spacing in Case', value: '15–20cm per piece — prestige display' },
      { label: 'Watch Pillow Height in Case', value: '8–10cm cushion on case floor' }, { label: 'Smart Watch Wall Panel', value: '120cm wide × 90cm high at 130cm centre height' },
      { label: 'Mirror Placement', value: '165cm centre height beside counter for wrist try-on' },
    ],
    tips: ['Jewellery watches (diamond bezel, dress pieces) displayed in locked counter under warm 3000K — same environment as fine jewellery', 'Sport and smart watches displayed on open wall panel — customers interact and try on freely, requires tactile engagement', 'Side-by-side comparison of fashion strap watch and smart watch model drives the main women\'s watch purchase decision', 'Always display watches at a 45° tilt on cushion — the face, hands, and bezel are legible at 45° and invisible face-flat', 'Include a wrist-sizing tool on the counter — watch fit is a key purchase barrier for women buying their own watches'],
    brands: { luxury: ['Cartier', 'Rolex Lady-Datejust', 'Bulgari Serpenti'], premium: ['Longines', 'TAG Heuer Ladies', 'Frederique Constant'], accessible: ['Apple Watch', 'Garmin Lily', 'Fossil Women'] },
    img: WATCHES.women.jewellery,
  },
  sections: [
    {
      title: "Women's Watches",
      items: [
        { name: 'Fashion Strap Watch', sub: 'Casual · Everyday / Fashion', mat: 'Steel Case, Leather Strap', col: '#c2b280,#F1F2EF,#3b1218', img: WATCHES.women.fashion },
        { name: 'Diamond Set Jewellery Watch', sub: 'Dress · Occasion / Formal', mat: 'Steel Case, Diamond Bezel', col: '#c2b280,#ffffff,#F1F2EF', img: WATCHES.women.jewellery },
      ],
    },
    {
      title: 'Smart Watches',
      items: [
        { name: 'GPS Multisport Watch', sub: 'Smart · Sports / Outdoor', mat: 'Titanium, Silicone', col: '#F1F2EF,#3a3a3a', img: WATCHES.smart.gps },
        { name: 'Health & Sleep Tracker', sub: 'Smart · Wellness', mat: 'Aluminium, Silicone', col: '#F1F2EF,#3a3a3a,#ffffff', img: WATCHES.smart.health },
      ],
    },
  ],
};

// Women's bags — women's styles and travel, no men's briefcases/messenger bags
PRODS['bags-w'] = {
  banner: BAGS.women.leatherTote,
  storage: {
    care: [
      { ico: '〰', lbl: 'Leather Conditioner Every 3 Months' }, { ico: '⊙', lbl: 'Stuff with Acid-Free Tissue — Retain Shape' },
      { ico: '◻', lbl: 'Breathable Dust Bag — Never Plastic' }, { ico: '🌲', lbl: 'Upright Storage — Never Stacked' },
      { ico: '❄', lbl: 'Avoid Sunlight — Leather Fades and Dries' },
    ],
    washing: { temp: 'Full-grain leather bags: wipe with barely damp cloth · specialist leather cleaner for marks · never submerge or machine wash', cycle: 'Suede: dry brush with suede brush for surface dirt · suede eraser for scuffs · never water on suede · canvas bags: wipe with damp cloth · canvas with leather trim: water on canvas only', dry: 'Pat dry with clean cloth after rain · allow to air dry naturally — never near heat source or in sunlight · heat drying causes leather to crack and shrink', iron: 'Not applicable', special: 'Satin and evening clutch: store in original box or individual dust bag · satin scratches easily — never store loose with harder bag hardware' },
    hangers: [
      { type: 'Bag Shelf (Upright — Stuffed)', spacing: '15–20cm per bag on shelf', note: 'All structured bags stored upright and stuffed with acid-free tissue — flat storage deforms handles and base over time' },
      { type: 'Bag Hook on Rail (Large Shoulder / Tote)', spacing: '20cm between bag hooks', note: 'Hang large tote and shoulder bags by handle on dedicated bag hook — prevents base deformation from shelf weight' },
      { type: 'Individual Dust Bag (Each Bag)', spacing: '1 dust bag per bag', note: 'Designer and leather bags: always in breathable cotton dust bag · never two bags in one dust bag' },
    ],
    blueprint: [
      { zone: 'Large Bag Shelf (Tote / Shoulder)', height: '35–40cm clearance per shelf', depth: '40cm', note: 'Structured bags upright and stuffed · 15cm between bags · leather conditioner applied before seasonal storage' },
      { zone: 'Clutch / Evening Bag Drawer or Box', height: '15cm drawer depth', depth: '45cm', note: 'Evening clutches stored flat in individual dust bags · satin and metallic pieces in original box if retained' },
      { zone: 'Travel Bag Shelf (Duffle / Luggage)', height: '50cm clearance per item', depth: '60cm', note: 'Duffle stored flat or rolled · luggage stored upright at base of wardrobe' },
    ],
    tips: ['Stuff all leather bags with acid-free tissue before storing — even for short periods, an unstuffed bag loses its shape as leather relaxes', 'Condition full-grain leather with leather conditioner (Saphir/Collonil) every 3 months — prevents cracking and maintains suppleness', 'Store bags away from direct sunlight — UV bleaches leather colour and dries the hide within weeks of exposure', 'Hardware (clasps, chains, studs): buff with dry soft cloth to prevent tarnish — never use silver cleaner directly on bag hardware which contacts leather', 'Evening clutches: retain original box for storage — brand boxes are sized and padded specifically for that bag shape'],
    img: BAGS.women.leatherTote,
  },
  retail: {
    lighting: { angle: '20–25° directional spot for leather texture · 30° fill overhead', lux: '800–1000 lux', cct: '3000–3500K warm · reveals leather grain, suede nap, and hardware depth', fixture: 'PAR20 directional LED (CRI 95+) · under-shelf LED strip for counter display' },
    dimensions: [
      { label: 'Bag Display Shelf Height', value: '35–40cm clearance per shelf · bags upright-stuffed' }, { label: 'Shelf Depth', value: '40cm — allows full bag depth visibility' },
      { label: 'Spacing Per Bag', value: '20cm between bags — negative space signals luxury' }, { label: 'Mannequin Shoulder Bag Display', value: '1 shoulder bag per mannequin at hip height' },
      { label: 'Counter Display (Clutch)', value: '90cm counter · 15cm between clutches on velvet-lined tray' },
    ],
    tips: ['All leather bags displayed stuffed and upright — a flat unstuffed bag reads as cheap regardless of price', 'Display tote at natural carry height (45cm from floor when resting) — customers visualise the bag at hip level', 'Evening clutch displayed open to show interior lining and hardware — the interior is a key purchase driver for women\'s bags', 'Hardware finish (gold / silver / ruthenium) grouped together — mixed metal finishes on one shelf is visually distracting', 'Include a leather care kit as a bundled purchase suggestion — aftercare product drives bag longevity and repeat brand loyalty'],
    brands: { luxury: ['Chanel', 'Bottega Veneta', 'Loewe'], premium: ['Mulberry', 'Coach', 'Kate Spade'], accessible: ['& Other Stories', 'Mango', 'Zara Premium'] },
    img: BAGS.women.leatherTote,
  },
  sections: [
    {
      title: "Women's Bags",
      items: [
        { name: 'Leather Tote', sub: 'Daily · Work / Smart Casual', mat: 'Full-Grain Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.women.leatherTote },
        { name: 'Canvas Tote', sub: 'Everyday · Casual', mat: 'Canvas, Leather Trim', col: '#3a3a3a,#c2b280,#ffffff', img: BAGS.women.canvasTote },
        { name: 'Medium Shoulder Bag', sub: 'Daily · Smart Casual', mat: 'Leather', col: '#F1F2EF,#3b1218,#c2b280', img: BAGS.women.mediumShoulder },
        { name: 'Small Crossbody', sub: 'Everyday · Casual / Smart', mat: 'Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.women.smallCrossbody },
        { name: 'Envelope Clutch', sub: 'Evening · Formal / Occasion', mat: 'Leather, Satin', col: '#c2b280,#F1F2EF,#1e1e3a', img: BAGS.women.envelopeClutch },
        { name: 'Frame Clutch', sub: 'Evening · Cocktail / Occasion', mat: 'Metal Frame, Leather', col: '#c2b280,#F1F2EF', img: BAGS.women.frameClutch },
      ],
    },
    {
      title: 'Travel',
      items: [
        { name: 'Aluminium Trolley', sub: 'Carry-On · Business Travel', mat: 'Aluminium', col: '#3a3a3a,#c2b280,#F1F2EF', img: BAGS.travel.alumTrolley },
        { name: 'Hard Shell Luggage', sub: 'Check-In · Travel', mat: 'Polycarbonate', col: '#F1F2EF,#3a3a3a,#1e1e3a', img: BAGS.travel.luggage },
        { name: 'Leather Weekend Duffle', sub: 'Weekend · Travel', mat: 'Full-Grain Leather', col: '#3b1218,#F1F2EF,#c2b280', img: BAGS.travel.leatherDuffle },
      ],
    },
  ],
};

// ── Exports ───────────────────────────────────────────────────────────────────

export function getCategoryById(gender: Gender, id: string): CatalogCategory | undefined {
  return CATS[gender]?.find(c => c.id === id);
}

export function getProductById(id: string): CatalogProduct {
  return PRODS[id] || { banner: PRODS['casuals'].banner, sections: [{ title: 'Items', items: [] }] };
}

export const HERO_IMAGES: Record<Gender, string> = {
  men:   FORMAL.banner,
  women: DRESSES.items[0],
  kids:  KIDSWEAR.banner,
};
