import { Card, CardBody, Box, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid, Grid } from "@chakra-ui/react"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "../ProductCard/ProductCard";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const productData = [
    {
        "_id": {
            "$oid": "646df606603ec9b23478417a"
        },
        "id": 354,
        "brand": "maybelline",
        "name": "Maybelline Dream Velvet Foundation",
        "price": "18.49",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/24517c6c81c92eda31cd32b6327c1298_ra,w158,h184_pa,w158,h184.png",
        "product_link": "https://well.ca/products/maybelline-dream-velvet-foundation_112738.html?cat=581",
        "website_link": "https://well.ca",
        "description": "This Maybelline Dream Velvet Foundation is a refreshing gel-whipped foundation that leaves complexion perfected and smooth with a velvety, soft-matte finish. Skin stays hydrated for 12 hours. Features:Maybelline’s first hydrating matte foundation for 100% velvet-smooth perfectionUnique gel-whipped formulaIdeal for normal to combination skin, medium coverage For best results apply Maybelline Dream Velvet Foundation using Maybelline Dream Blender",
        "rating": 2.5,
        "category": "cream",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:21.385Z",
        "updated_at": "2017-12-23T21:08:36.656Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/354.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/354/original/open-uri20171223-4-ouczfl?1514063316",
        "product_colors": [
            {
                "hex_value": "#D39D7B",
                "colour_name": "Caramel "
            },
            {
                "hex_value": "#F5CAB9",
                "colour_name": "Classic Ivory "
            },
            {
                "hex_value": "#B37560",
                "colour_name": "Coconut "
            },
            {
                "hex_value": "#F3BEAC",
                "colour_name": "Creamy Natural  "
            },
            {
                "hex_value": "#E4A890",
                "colour_name": "Honey Beige  "
            },
            {
                "hex_value": "#F6D2BC",
                "colour_name": "Ivory "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b23478417b"
        },
        "id": 353,
        "brand": "maybelline",
        "name": "Maybelline Superstay Better Skin Foundation ",
        "price": "14.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/c7d967ef502ecd79ab7ab466c4952d82_ra,w158,h184_pa,w158,h184.png",
        "product_link": "https://well.ca/products/maybelline-superstay-better-skin_112548.html",
        "website_link": "https://well.ca",
        "description": "The Maybelline Superstay Better Skin Foundation reduces the appearance of spots, bumps, dullness and redness to give you brighter, smoother and more even skin. Features:Longwear that improves skin every minute you're in it: brighter, smoother and more even.With micro-flex technology and the antioxidant power of Actyl-C.Ideal for sensitive skin. Good for all skin types. Medium to full coverageHow to Apply: Apply evenly to your face and blend with your fingers. ",
        "rating": 3,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:19.867Z",
        "updated_at": "2017-12-23T21:08:27.318Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/353.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/353/original/open-uri20171223-4-q9ubsf?1514063307",
        "product_colors": [
            {
                "hex_value": "#9A6438",
                "colour_name": "Coconut  "
            },
            {
                "hex_value": "#DCBCA3",
                "colour_name": "Ivory "
            },
            {
                "hex_value": "#ECD3B2",
                "colour_name": "Porcelain "
            },
            {
                "hex_value": "#C99F6D",
                "colour_name": "Rich Tan  "
            },
            {
                "hex_value": "#CA9B5F",
                "colour_name": "Sun Beige  "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b23478417c"
        },
        "id": 352,
        "brand": "nyx",
        "name": "NYX Stay Matte But Not Flat Liquid Foundation",
        "price": "10.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/b5a40b7f3a55feb97f7b16987f1fe8c7_ra,w158,h184_pa,w158,h184.png",
        "product_link": "https://well.ca/products/nyx-stay-matte-but-not-flat-liquid_106808.html",
        "website_link": "https://well.ca",
        "description": "NYX Stay Matte But Not Flat Liquid Foundation provides full coverage with a mineral enriched matte finish. The oil-free and water-based formula is perfect whether you are in the studio or out and about all day! Features:Oil freeWater basedFull coverageMineral enrichedMatte finishIngredients: Water / Aqua / Eau, Cyclopentasiloxane, Cyclohexasiloxane, Cetyl Ethylhexanoate, Beeswax / Cera Alba / Cire d’Abeille, Disteardimonium Hectorite Propylene Carbonate, Polyglyceryl-4 Isostearate, Cetyl PEG/PPG-10/1 Dimethicone, Hexyl Laurate, Glyceryl Laurate, Stearyl Dimethicone, Polyglyceryl-4 Oleate, Phenoxyethanol,Methylparaben, Tocopheryl Acetate, Ascorbyl Palmitate, Butylparaben, Ethylparaben, Propylparaben. MAY CONTAIN / PEUT CONTENIR (+/-): Titanium Dioxide ( CI 77891 ), Iron Oxides ( CI 77491, 77492, 77499 ).",
        "rating": 4,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:18.634Z",
        "updated_at": "2017-12-23T21:08:27.072Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/352.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/352/original/open-uri20171223-4-1ep703w?1514063306",
        "product_colors": [
            {
                "hex_value": "#EAD3B3",
                "colour_name": "Ivory "
            },
            {
                "hex_value": "#E8BD90",
                "colour_name": "Natural  "
            },
            {
                "hex_value": "#D2AD84",
                "colour_name": "Nude  "
            },
            {
                "hex_value": "#CF9A79",
                "colour_name": "Tan  "
            },
            {
                "hex_value": "#C38E6A",
                "colour_name": "Tawny "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b23478417d"
        },
        "id": 350,
        "brand": "l'oreal",
        "name": "L'Oreal Paris True Match Lumi Glow Liquid Foundation",
        "price": "16.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/2a38b2c75a247fe6d1038431964dd24c_ra,w158,h184_pa,w158,h184.png",
        "product_link": "https://well.ca/products/loreal-paris-true-match-lumi-glow_107479.html",
        "website_link": "https://well.ca",
        "description": "The ultimate in luminosity. L’Oréal Paris introduces its first liquid highlighter specifically crafted to highlight key features or illuminate all-over. Designed in Golden, Rose, and Ice shades that flatter every skintone from warm to neutral to cool. Features:Golden Illuminator enhances peachy or yellow tones in warm skintonesRose Illuminator enhances yellow, peachy, pink or blue tones in neutral skintonesIce Illuminator enhances pink or blue tones in cool skintonesHighlight key features or illuminate all-overLightweight formulaFor every skintone & undertoneINGREDIENTS: AQUA/WATER/EAU, DIMETHICONE, GLYCERIN, ALCOHOL DENAT, SYNTHETIC FLUORPHLOGOPITE, DIMETHICONE/POLYGLYCERIN-3, CROSSPOLYMER, ACRYLAMIDE/SODIUM, ACRYLOYLDIMETHYLTAURATE COPOLYMER, PHENOXYETHANOL, ISOHEXADECANE, CAPRYLYL GLYCOL, POLYSORBATE 80, DIPROPYLENE, GLYCOL TIN OXIDE ",
        "rating": 3,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:15.758Z",
        "updated_at": "2017-12-23T21:08:26.250Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/350.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/350/original/open-uri20171223-4-vetytd?1514063306",
        "product_colors": [
            {
                "hex_value": "#E2A587",
                "colour_name": "Golden "
            },
            {
                "hex_value": "#F9E6E0",
                "colour_name": "Ice "
            },
            {
                "hex_value": "#DBA777",
                "colour_name": "Rose "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b23478417e"
        },
        "id": 349,
        "brand": "covergirl",
        "name": "CoverGirl Ready, Set Gorgeous Liquid Makeup 105",
        "price": "8.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/414eb9180f66dd8a75ddd34b307e3a36_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/covergirl-ready-set-gorgeous-liquid_97267.html",
        "website_link": "https://well.ca",
        "description": "CoverGirl Ready, Set Gorgeous foundation provides a flawless, natural look that lasts all day in one simple step!Features:Blends easily to even skin tone for a flawless lookShine free look lasts all dayOil free, won't clog poresApplication Tips: Dot foundation on forehead, cheeks and chin. Blend using fingertips or a makeup sponge. Use with any COVERGIRL Pressed Powder to help your look last.",
        "rating": 2,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:14.608Z",
        "updated_at": "2017-12-23T21:08:26.081Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/349.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/349/original/data?1514063306",
        "product_colors": [
            {
                "hex_value": "#F5C8A6",
                "colour_name": "105"
            },
            {
                "hex_value": "#E6B98F",
                "colour_name": "115"
            },
            {
                "hex_value": "#EEC392",
                "colour_name": "210"
            },
            {
                "hex_value": "#9A7751",
                "colour_name": "320"
            },
            {
                "hex_value": "#F5C497",
                "colour_name": "215"
            },
            {
                "hex_value": "#F8D5A7",
                "colour_name": "110"
            },
            {
                "hex_value": "#F4C891",
                "colour_name": "220"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b23478417f"
        },
        "id": 348,
        "brand": "covergirl",
        "name": "CoverGirl Outlast Stay Fabulous 3-in-1 Foundation",
        "price": "12.49",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/5b6bdfe942b6ffccbd2ca3f37e500744_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/covergirl-outlast-stay-fabulous_74018.html",
        "website_link": "https://well.ca",
        "description": "CoverGirl Outlast Stay Fabulous 3-in-1 foundation is an all-in-one foundation with a long-lasting formula that fuses primer, \nconcealer, and foundation in one easy step! The 3-in-1 formula provides a\n flawless look that lasts all day long.Features: All day, longwear formulaPrimer, concealer, and foundation in oneSmooth, flawless finishFoundation + Sunscreen SPF 20",
        "rating": null,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:12.257Z",
        "updated_at": "2017-12-23T21:08:25.875Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/348.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/348/original/data?1514063305",
        "product_colors": []
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234784180"
        },
        "id": 347,
        "brand": null,
        "name": "DaLish Silk to Matte Foundation",
        "price": "44.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/e98af12555201b5d34a30e3029191c6d_ra,w158,h184_pa,w158,h184.jpg",
        "product_link": "https://well.ca/products/dalish-silk-to-matte-foundation_98219.html",
        "website_link": "https://well.ca",
        "description": "This long-wear DaLish foundation starts out silky smooth—best applied using your fingers—and dries to a radiant matte finish. Light coverage ensures a natural-looking result, yet the buildable formula evens tone where you need it, for a perfect, cake-free base. Sunflower seed oil, rich in Vitamins A, D, and E, moisturizes, calms and protects skin without clogging pores. Shade Range: F01 - light – for very fair skin tones.FO2 - medium – DaLish's most popular shade. Fair to medium tones.FO3 - dark – for darker tone skin.Ingredients: Water, Coconut Alkanes, Coco-Caprylare/Caprate, Glycerin, Sorbitan Olivate, Polyglyceryl-3 Diisostearate, Caprylic/Capric Triglycerides, Carthamus Tinctoriur (Safflower) Oleosomes, Cetyl Palmitate, Sorbitan Palmitate, Sorbitan Olivate, Zinc Stearate, Sodium Benzoate, Helianthus Annuus (Sunflower) Seed Oil, Rosmarinus Officinals (Rosemary) Leaf Extract, Benzyl Alcohol, Dehydroacetic Acid, Benzoic Acid, Sorbic Acid, Tocopherol, Jojoba Ester May contain (+/-), Titanium Dioxide CI 77891, Mica CI 77019, Iron Oxide CI 77491, Iron Oxide CI 77492, Iron Oxide CI 77499. *Contains natural antioxidant* PEG free * ",
        "rating": 4,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [
            "Canadian",
            "Natural"
        ],
        "created_at": "2016-10-01T18:32:11.060Z",
        "updated_at": "2017-12-23T21:08:25.741Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/347.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/347/original/data?1514063305",
        "product_colors": [
            {
                "hex_value": "#edbc92",
                "colour_name": "F01 - light  "
            },
            {
                "hex_value": "#dc8c68",
                "colour_name": "FO2 - medium "
            },
            {
                "hex_value": "#ba6839",
                "colour_name": "FO3 - dark "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234784181"
        },
        "id": 345,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Visible Lift Blur Foundation ",
        "price": "18.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/c207687e567547445338321ae28c9b96_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/loreal-paris-visible-lift-blur_96664.html",
        "website_link": "https://well.ca",
        "description": "Discover instantly ageless skin. L'Oreal Paris Visible Lift Blur™ features Opti-Blur™ \ntechnology with a cushiony soft texture that glides on to blur the look \nof lines, wrinkles and uneven skin tone in seconds. Skin looks \nflawlessly smooth, instantly perfected.Ingredients: CYCLOPENTASILOXANE,\nAQUA, ETHYLHEXYL\nMETHOXYCINNAMATE,\nDIMETHICONE\nCROSSPOLYMER,\nGLYCERIN, ISOTRIDECYL\nISONONANOATE, PEG-9\nPOLYDIMETHYLSILOXYETHYL\nDIMETHICONE,\nDISTEARDIMONIUM\nHECTORITE,\nPHENOXYETHANOL,\nPEG-10 DIMETHICONE,\nHYDROLYZED WHEAT\nPROTEIN/PVP\nCROSSPOLYMER,\nDISODIUM STEAROYL\nGLUTAMATE,\nCHLORPHENESIN,\nMETHYLPARABEN,\nLYCIUM BARBARUM\nFRUIT EXTRACT,\nACRYLATES\nCOPOLYMER,\nPOTASSIUM SORBATE,\nETHYLPARABEN,\nTOCOPHEROL,\nASCORBYL PALMITATE,\nPANTHENOL, PEG-9,\nALUMINUM HYDROXIDE,\nCITRIC ACID, SODIUM\nPCA, UREA, TREHALOSE,\nPOLYQUATERNIUM-51,\nSOLUBLE COLLAGEN,\nSODIUM HYALURONATE.\n[+/- : CI 77891, MICA,\nCI 77492, CI 77491,\nCI 77499]\n\n\n",
        "rating": null,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:08.987Z",
        "updated_at": "2017-12-23T21:08:25.277Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/345.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/345/original/data?1514063305",
        "product_colors": [
            {
                "hex_value": "#F9D4B6",
                "colour_name": "Light Ivory "
            },
            {
                "hex_value": "#FCD1B9",
                "colour_name": "Classic Ivory "
            },
            {
                "hex_value": "#E4B99C",
                "colour_name": "Nude Beige  "
            },
            {
                "hex_value": "#EAC2A8",
                "colour_name": "Creamy Natural "
            },
            {
                "hex_value": "#E1B090",
                "colour_name": "Natural Buff "
            },
            {
                "hex_value": "#D09F80",
                "colour_name": "Natural Beige "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234784182"
        },
        "id": 344,
        "brand": "covergirl",
        "name": "CoverGirl Clean Liquid Makeup Normal Skin ",
        "price": "9.49",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/19422d63bf6e51c128bc2fa457fa61dc_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/covergirl-clean-liquid-makeup-normal_74981.html",
        "website_link": "https://well.ca",
        "description": "Clean Makeup’s formula lets your skin breathe, goes on easily and blends\n perfectly, so the world doesn't see makeup, just the look of great \nskin. The sensitive skin formula is fragrance and oil free, and is \nsuitable for sensitive skin. Features: Light coverage, not heavy or cakeyNon-comedogenic (won't clog pores)Dermatologically tested",
        "rating": 5,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:08.168Z",
        "updated_at": "2017-12-23T21:08:23.076Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/344.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/344/original/data?1514063303",
        "product_colors": []
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234784183"
        },
        "id": 343,
        "brand": "cargo cosmetics",
        "name": "Cargo Cosmetics Liquid Foundation",
        "price": "42.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/369c6a7dc5ce002dd66b2271256b84c9_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/cargo-cosmetics-liquid-foundation_87617.html",
        "website_link": "https://well.ca",
        "description": "Cargo Cosmetics Liquid Foundation is a smooth-as-silk, liquid foundation for sheer coverage that can be \nbuilt as required for professional coverage. It offers a long-wearing \nfinish without the need for heavy powder. The blend-able, lightweight \nand oil-free formulation, makes it ideal for oily skin types, while \ninnovative skin conditioners hydrate dry skin types without adding oil. \nThe sleek, recyclable plastic pouch package is so smart – it allows you \nto squeeze out just the right amount, using every drop of your purchase.\n It is cleaner and more hygienic than any traditional screw-top or pump \nbottle.  \n\n\nFeatures:\nOil-free Anti-oxidants to nourish the skinExcellent cover yet feels weightlessAll skin typesSleek, silver-colored plastic pouch package is so smart – it allows you to squeeze out just the right amount, use every drop of their \npurchase, and is cleaner and more hygienic than any traditional \nscrew-top or pump bottle.Key Ingredients: Vitamin E is a powerful anti-oxidant, helping the skin to fight the damaging effects of the environmentVitamin C augments the skin’s ability to fight free radicals \nthat are caused by UV rays and an effective treatment of fine lines as \nwell as helping to heal minor woundsGlycerin maintains and boost the skin’s natural water content by acting to draw moisture to the skinShade Range: Ingredients: Water (Aqua), Cyclopentasiloxane, Butylene Glycol, Dimethicone \nCrosspolymer, Octyldodecyl Neopentanoate, Glycerin, Hexyl Laurate, \nPolyglyceryl-4-Isostearate, Cetyl Peg/Ppg 10/1 Dimethicone, Dimethicone,\n Tocopherol, Tetrahexyldecyl Ascorbate, Glycyrrhiza Glabra (Licorice) \nRoot Extract, Peg/Ppg-18 /18 Dimethicone, Nylon-12 Fluorescent \nBrightener 230 Salt, Polyvinylalcohol Crosspolymer, Acetyl Glucosamine, \nPhytantriol, Silica, Lysine, Potassium Chloride, Zinc Chloride, Sodium \nChloride, Magnesium Chloride, Sodium Dehydroacetate, \nTriethoxycaprylylsilane, Disodium Edta, Sodium Hyaluronate, Hexylene \nGlycol, Caprylyl Glycol, May Contain (+/-): Mica, Iron Oxides (Ci 77491,\n Ci 77492, Ci 77499), Titanium Dioxide (Ci 77891) \n\n\n\n\n \n",
        "rating": null,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2016-10-01T18:32:07.108Z",
        "updated_at": "2017-12-23T21:08:23.793Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/343.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/343/original/data?1514063303",
        "product_colors": [
            {
                "hex_value": "#CC9157",
                "colour_name": "F-70 "
            },
            {
                "hex_value": "#EAD4AB",
                "colour_name": "F-10 "
            },
            {
                "hex_value": "#F1C69C",
                "colour_name": "F-20 "
            },
            {
                "hex_value": "#AF7A52",
                "colour_name": "F-30 "
            },
            {
                "hex_value": "#B48C5B",
                "colour_name": "F-40 "
            },
            {
                "hex_value": "#C8A480",
                "colour_name": "F-45 "
            }
        ]
    }
]

const product = productData.map(item => (
    <ProductCard key={item.id} {...item} />
))

function Part10() {
    return (
        <>
            <Grid maxW='6xl' margin="auto" marginTop="20px">
                <Carousel responsive={responsive} draggable={true} infinite={true} >
                    {product}
                </Carousel>
            </Grid>
        </>
    )
}
export default Part10
