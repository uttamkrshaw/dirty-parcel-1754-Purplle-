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
            "$oid": "646df606603ec9b2347842b0"
        },
        "id": 10,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Voluminous Million Lashes Mascara",
        "price": "13.29",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/7a372820b4a151ec62a6ce4261948421_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/loreal-paris-voluminous-million_28968.html",
        "website_link": "https://well.ca",
        "description": "For lashes that \nlook a million times multiplied and perfectly defined, there's only one \nmascara - Voluminous® Million Lashes™. The built-in Clean Sweep \nWiping System wipes the brush free of clumps leaving the perfect amount \nof mascara for an ultra-volumized clean lash look. The Millionizing \nBrush evenly thickens lashes from root to tip. The result? Lashes look \nso multiplied, so clean, it's like seeing millions. Features: \nOphthalmologist-tested and allergy-testedSuitable for sensitive eyes an contact len wearersClump-free.Fragrance-free\n                                                 ",
        "rating": 4.6,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:57.744Z",
        "updated_at": "2017-12-23T20:31:49.446Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/10.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/010/original/data?1514061109",
        "product_colors": [
            {
                "hex_value": "#030001",
                "colour_name": "Blackest Black "
            },
            {
                "hex_value": "#231F20",
                "colour_name": "Black "
            },
            {
                "hex_value": "#4D2C00",
                "colour_name": "Black Brown "
            },
            {
                "hex_value": "#000000",
                "colour_name": "Blackest Black "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b1"
        },
        "id": 9,
        "brand": "maybelline",
        "name": "Maybelline Great Lash Lots of Lashes Mascara",
        "price": "7.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/dfaf77464a8cb52a1a8f2a15e8abf920_ra,w158,h184_pa,w158,h184.png",
        "product_link": "https://well.ca/products/maybelline-great-lash-lots-of-lashes_50739.html",
        "website_link": "https://well.ca",
        "description": "Introducing a Great Lash innovation - Great Lash Lots of Lashes!The favourite Maybelline mascara now gives the look of more lashes than ever, thanks to the exclusive Great Little Grabber Brush. In just one swipe, the Grabber Brush easily reaches all lashes - even \nin the corners - for a multiplied lash look without the clumps. The result? Great lashes with lots of impact and not a lot of work.For best results: sweep brush from root to \ntip of lashes. Continue building volume until the desired lash look is \nachieved. Do not let dry between coats. Removes easily with soap and \nwater or eye makeup remover. \n                    ",
        "rating": 4.2,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:56.475Z",
        "updated_at": "2017-12-23T20:31:47.757Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/9.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/009/original/open-uri20171223-4-axycg0?1514061107",
        "product_colors": [
            {
                "hex_value": "#000000",
                "colour_name": "Blackest Black "
            },
            {
                "hex_value": "#2d1e17",
                "colour_name": "Brownish Black "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b2"
        },
        "id": 8,
        "brand": "maybelline",
        "name": "Maybelline Lash Stiletto Ultimate Length Mascara",
        "price": "10.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/812b5ae27df9be983052063d52d7ab7a_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/maybelline-lash-stiletto-ultimate_17287.html",
        "website_link": "https://well.ca",
        "description": "The only mascara that does for lashes what stilettos do for legs.\n\n    The Grip & Extend brush grasps each lash and coats from every angle\n    Elastic formula stretches lashes for provocative length\n    Pro-Vitamin B-5 formula conditions and smoothes for black-patent shine\n    Contact lens safe and Ophthalmologist tested\n    Waterproof \n\n ",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:55.406Z",
        "updated_at": "2017-12-23T20:31:47.606Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/8.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/008/original/data?1514061107",
        "product_colors": [
            {
                "hex_value": "#0E0F11",
                "colour_name": "Very Black "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b3"
        },
        "id": 7,
        "brand": "maybelline",
        "name": "Maybelline Volum'Express the Falsies Mascara",
        "price": "9.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/af1f35f15ee64cc1003f1ccfc6451d71_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/maybelline-volumexpress-the-falsies_26311.html",
        "website_link": "https://well.ca",
        "description": "False lash glam in a tube, instantly!The Falsies Mascara delivers a false lash look, giving you a full set of voluminous, bold, fanned-out lashes and the appearance of no gaps from any angle.The Pro-Keratin Fiber enriched formula is designed to deliver immediate results, distributing volume and visible intensity to your lashes. The spoon-shaped brush helps fan lashes out.The Falsies Mascara is designed to give the appearance of no gaps and spaces. In a wink, lashes you didn’t even know you had look visibly thickened!",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:54.660Z",
        "updated_at": "2017-12-23T20:31:47.473Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/7.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/007/original/data?1514061107",
        "product_colors": [
            {
                "hex_value": "#0E0F11",
                "colour_name": "Very Black "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b4"
        },
        "id": 6,
        "brand": "covergirl",
        "name": "CoverGirl Lashblast Volume Blasting Mascara ",
        "price": "9.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/18790b1fce6ddd2c7c20e73ce964eadd_ra,w158,h184_pa,w158,h184.jpg",
        "product_link": "https://well.ca/products/covergirl-lashblast-volume-blasting_74922.html",
        "website_link": "https://well.ca",
        "description": "Get a blast of lush, volumized lashes! LashBlast’s patented \nvolume-boosting formula and patent-pending brush are designed to max-out\n each and every lash, leaving you with the ultimate big lash look.Features: Instant volume and fullnessSmudge and smear-proofHypoallergenic and suitable for contact lens wearers",
        "rating": 4.8,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:53.573Z",
        "updated_at": "2017-12-23T20:31:47.348Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/6.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/006/original/data?1514061107",
        "product_colors": []
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b5"
        },
        "id": 5,
        "brand": "pacifica",
        "name": "Pacifica Stellar Gaze Length & Strength Mineral Mascara",
        "price": "28.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/b4a5f31a499b42938980fb369d0213ab_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/pacifica-stellar-gaze-length_90822.html",
        "website_link": "https://well.ca",
        "description": "You will fall in love with Pacifica's long lasting, nourishing, natural mineral\n mascara.  This amazing formula is infused with coconut oil and vitamin B\n to hydrate each lash as it lengthens, strengthens and adds volume. \nApply for a natural look by day, or layer for more volume with the super\n plush 100% vegan brush that provides effortless coverage.100% vegan. Cruelty-free. Formulated without FD & C color, parabens, talc and mineral oil.\nRead our blog post for tips on how to Green & Clean your makeup bag.  Ingredients: Aqua, glycerin (vegetable), glyceryl stearate se, jojoba \nesters, tapioca starch, stearic acid ( vegetable), copernicia cerfera \n(carnauba) wax, euphorbia cerifera (candelilla) wax, arabic/acacia gum, \nacrylates, crosspolymer, potassium cetyl phosphate, microcrystalline \ncellulse (plant), cocos nucifera (coconut) oil, panthenol (vitamin b), \ncellulose gum, gluconolactone, macrocystis pyifera (brown kelp) extract,\n hydrolyzed oryza sativa (rice) protein, sodium benzoate, iron oxides c1\n 77499.",
        "rating": 4.2,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
            "Natural",
            "Vegan"
        ],
        "created_at": "2016-10-01T18:10:52.756Z",
        "updated_at": "2017-12-23T20:31:47.230Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/5.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/005/original/data?1514061107",
        "product_colors": []
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b6"
        },
        "id": 4,
        "brand": "physicians formula",
        "name": "Physicians Formula Organic Wear FakeOut Mascara",
        "price": "15.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/2b3d5588b073bfae89c6308dcfe96436_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/physicians-formula-organic-wear_70944.html",
        "website_link": "https://well.ca",
        "description": "Physicians Formula Organic Wear FakeOut Mascara is the 1st EVER mascara with 100% natural origin lash extension fibers for the full-on fringe of false lashes without irritation.The innovative formula amplifies lash volume, length & curl. Plus the oversized brush creates a fabulously false lash effect instantly!Features:  100% of the Total Ingredients are from Natural Origin  70% of the Total Ingredients are from Organic FarmingDirections: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water*, Glycerin*, Glyceryl \nStearate SE, Beeswax*, Microcrystalline Cellulose, Copernicia Cerifera \n(Carnauba) Wax*, Tapioca Starch*, Hydrolyzed Corn Starch, Stearic Acid, \nJojoba Esters, Oryza Sativa (Rice) Powder*, Oryza Sativa (Rice) \nExtract*, Ceiba Pentandra Fiber Powder, Cellulose, Nylon-10/10, Aloe \nBarbadensis Leaf Extract*, Cucumis Sativus (Cucumber) Fruit Extract*, \nGlycine Soja (Soybean) Oil*, Olea Europaea (Olive) Leaf Extract*, \nGlycerin, Magnesium Aluminum Silicate, Water, Glyceryl Caprylate, \nLeuconostoc / Radish Root Ferment Filtrate May Contain: Iron Oxides, \nTitanium Dioxide* Ingredients from Organic FarmingHypoallergenic.  Fragrance Free. Safe for Sensitive Eyes and Contact Lens Wearers.  Ophthalmologist Approved.",
        "rating": 3.9,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
            "Natural",
            "Gluten Free"
        ],
        "created_at": "2016-10-01T18:10:51.387Z",
        "updated_at": "2017-12-23T20:31:47.075Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/4.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/004/original/open-uri20171223-4-a405lz?1514061107",
        "product_colors": [
            {
                "hex_value": "#000000",
                "colour_name": "Ultra Black (7883C) "
            },
            {
                "hex_value": "#2d2d2d",
                "colour_name": "Black (7884C) "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b7"
        },
        "id": 3,
        "brand": "physicians formula",
        "name": "Physicians Formula Organic Wear Lash Boosting Mascara",
        "price": "15.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/ca3136ce9bff5df45b34b25b3bbf99aa_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/physicians-formula-organic-wear-lash_58514.html",
        "website_link": "https://well.ca",
        "description": "Physicians Formula Organic Wear Lash Boosting Mascara is the 1st Ever 100% Natural Lash Boosting formula enhances the appearance of \nlash length, thickness and volume for dramatic lashes instantly and \nlong-term.Additional Features:100% of the Total Ingredients are from Natural Origin.  44% of the Total Ingredients are from Organic Farming.  100% saw enhanced lashes INSTANLY!Delivers ingredients to the base of lashes for  best results!93% saw thicker & longer looking lashes instantly!  92% saw \nextended & fuller looking lashes after 4 weeks!  *Based on \nindividual perception of results of a panel of women wearing Organic \nWear Lash Boosting Mascara.Directions for Use: Sweep mascara brush from lash base to tips. Apply multiple coats for \nadded volume. Can easily be washed off with soap and water or removed \nwith Physicians Formula Eye Makeup Remover Pads or Lotions.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water *, Glycerin, Iron Oxides, \nMicrocrystalline Cellulose, Glyceryl Stearate SE, Water, Lactobacillus \nBulgaricus Ferment Filtrate, Beeswax *, Jojoba Esters, Copernicia \nCerifera (Carnauba) Wax *, Tapioca Starch *, Stearic Acid, Glyceryl \nCaprylate, Aloe Barbadensis Leaf Juice *, Cellulose Gum, Cucumis Sativus\n (Cucumber) Fruit Extract *, Glycine Soja (Soybean) Oil *, Hydrolyzed \nOryza Sativa (Rice) Protein, Magnesium Aluminum Silicate, Olea Europaea \n(Olive) Leaf Extract *, Saccharomyces/Copper Ferment, Saccharomyces/Iron\n Ferment, Saccharomyces/Magnesium Ferment, Saccharomyces/Silicon \nFerment, Saccharomyces/Zinc Ferment, Leuconostoc/Aloe Barbadensis \nLeaf/Sorbus Aucuparia Fruit Ferment Filtrate, Leuconostoc/Radish Root \nFerment Filtrate, Populus Tremuloides Bark Extract, Citric Acid  May \nContain: Titanium DioxideHypoallergenic. Fragrance free. Ophthalmologist approved.  Gluten Free.",
        "rating": 3.7,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
            "Natural",
            "Gluten Free"
        ],
        "created_at": "2016-10-01T18:10:50.417Z",
        "updated_at": "2017-12-23T20:31:46.951Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/3.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/003/original/open-uri20171223-4-1naf0qv?1514061106",
        "product_colors": [
            {
                "hex_value": "#000000",
                "colour_name": "Ultra Black Organics (7561C) "
            },
            {
                "hex_value": "#282828",
                "colour_name": "Black Organics (7562C) "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b8"
        },
        "id": 2,
        "brand": null,
        "name": "L' Oreal Paris Voluminous Mascara",
        "price": "9.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/4d671a9af4d2ce8d310ae263569018fb_ra,w158,h184_pa,w158,h184.jpeg",
        "product_link": "https://well.ca/products/l-oreal-paris-voluminous-mascara_25094.html",
        "website_link": "https://well.ca",
        "description": "Voluminous - Volume Building Waterproof Mascara’s unique waterproof formula builds lashes to four times their natural thickness. Patented Volume-Maximizing Brush™ thickens lashes evenly and smoothly, leaving them soft with virtually no flakes, smudges, or clumps.Uniquely formulated to resist clumping, soften lashes, and build lashes to four times their natural thickness, with waterproof wear. Patented Volume Maximizing Brush™ thickens lashes evenly and smoothly, leaving them soft with virtually no flakes, smudges, or clumps.Ophthalmologist-tested and allergy-tested.Suitable for sensitive eyes and contact lens wearers.Clump-resistant.Fragrance-free.All-day wear.Ingredients:ISODODECANE • AQUA / WATER / EAU • CERA ALBA / BEESWAX / CIRE D'ABEILLE • DISTEARDIMONIUM HECTORITE • CARNAUBA / CARNAUBA WAX / CIRE DE CARNAUBA • PARAFFIN • ALCOHOL DENAT • ALLYL STEARATE/VA COPOLYMER • VA/VINYL BUTYL BENZOATE/CROTONATES COPOLYMER • PROP",
        "rating": 4.5,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:49.185Z",
        "updated_at": "2017-12-23T20:31:46.436Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/2.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/002/original/data?1514061106",
        "product_colors": [
            {
                "hex_value": "#231F20",
                "colour_name": "Black "
            },
            {
                "hex_value": "#4D2C00",
                "colour_name": "Black Brown "
            },
            {
                "hex_value": "#030000",
                "colour_name": "Carbon Black "
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b2347842b9"
        },
        "id": 1,
        "brand": "pure anada",
        "name": "Pure Anada Natural Mascara",
        "price": "14.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/afefede002b8d94f6e53ea07dd4070f9_ra,w158,h184_pa,w158,h184.jpg",
        "product_link": "https://well.ca/products/pure-anada-natural-mascara_83255.html",
        "website_link": "https://well.ca",
        "description": "Finally, a natural mascara you can feel good about putting on your lashes!\nIt is naturally paraben-free, gluten-free, and mercury-free. \nYou will be amazed at how well this mascara builds volume and length to your lashes.\nThis is the natural mascara you’ve been waiting for!Ingredients: Aqua (Water), Oryza Sativa Wax (Rice Bran Wax), Olea Europea fruit oil \n(Olive Oil), Vegetable Source Cetyl Alcohol (Coconut), Coernica Cerifera\n (Carnauba Wax), Euphorbia Cerifera (Candelilla Wax), Vegetable \nGlycerin, Stearic Acid, Acacia Gum, Black Iron oxide (CI 77499),  \nAminomethyl Popandiol (Ph Adjuster), Phenoxyethanol (Preservative).",
        "rating": 4.6,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
            "Natural",
            "Gluten Free",
            "Canadian"
        ],
        "created_at": "2016-10-01T18:10:46.893Z",
        "updated_at": "2017-12-23T20:31:46.013Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/001/original/data?1514061104",
        "product_colors": [
            {
                "hex_value": "#000000",
                "colour_name": "Black "
            },
            {
                "hex_value": "#3E2829",
                "colour_name": "Brown "
            }
        ]
    }
]

const product = productData.map(item => (
    <ProductCard key={item.id} {...item} />
))

function Part5() {
    return (
        <>
            <Grid maxW='6xl' margin="auto" marginTop="20px">
                <Carousel responsive={responsive} draggable={true} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
                    {product}
                </Carousel>
            </Grid>
        </>
    )
}
export default Part5
