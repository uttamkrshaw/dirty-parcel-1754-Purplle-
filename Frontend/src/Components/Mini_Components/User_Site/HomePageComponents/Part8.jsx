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
            "$oid": "646df606603ec9b234783fbf"
        },
        "id": 1048,
        "brand": "colourpop",
        "name": "Lippie Pencil",
        "price": "5.0",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
        "product_link": "https://colourpop.com/collections/lippie-pencil",
        "website_link": "https://colourpop.com",
        "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
        "rating": null,
        "category": "pencil",
        "product_type": "lip_liner",
        "tag_list": [
            "cruelty free",
            "Vegan"
        ],
        "created_at": "2018-07-08T23:45:08.056Z",
        "updated_at": "2018-07-09T00:53:23.301Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1048.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614",
        "product_colors": [
            {
                "hex_value": "#B28378",
                "colour_name": "BFF Pencil"
            },
            {
                "hex_value": "#A36B5E",
                "colour_name": "951 Pencil"
            },
            {
                "hex_value": "#966A60",
                "colour_name": "Beeper Pencil"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc0"
        },
        "id": 1047,
        "brand": "colourpop",
        "name": "Blotted Lip",
        "price": "5.5",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
        "product_link": "https://colourpop.com/collections/lippie-stix?filter=blotted-lip",
        "website_link": "https://colourpop.com",
        "description": "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
        "rating": null,
        "category": "lipstick",
        "product_type": "lipstick",
        "tag_list": [
            "cruelty free",
            "Vegan"
        ],
        "created_at": "2018-07-08T22:01:20.178Z",
        "updated_at": "2018-07-09T00:53:23.287Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1047.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
        "product_colors": [
            {
                "hex_value": "#b72227",
                "colour_name": "Bee's Knees"
            },
            {
                "hex_value": "#BB656B",
                "colour_name": "Brain Freeze"
            },
            {
                "hex_value": "#8E4140",
                "colour_name": "Drip"
            },
            {
                "hex_value": "#A12A33",
                "colour_name": "On a Stick"
            },
            {
                "hex_value": "#904550",
                "colour_name": "Ice Cube"
            },
            {
                "hex_value": "#452222",
                "colour_name": "Lolly"
            },
            {
                "hex_value": "#7C3F35",
                "colour_name": "Candyfloss"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc1"
        },
        "id": 1046,
        "brand": "colourpop",
        "name": "Lippie Stix",
        "price": "5.5",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803",
        "product_link": "https://colourpop.com/collections/lippie-stix",
        "website_link": "https://colourpop.com",
        "description": "Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.",
        "rating": null,
        "category": "lipstick",
        "product_type": "lipstick",
        "tag_list": [
            "cruelty free",
            "Vegan"
        ],
        "created_at": "2018-07-08T21:47:49.858Z",
        "updated_at": "2018-07-09T00:53:23.274Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1046.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651",
        "product_colors": [
            {
                "hex_value": "#F2DEC3",
                "colour_name": "Fair 05"
            },
            {
                "hex_value": "#793C36",
                "colour_name": "Ziggie"
            },
            {
                "hex_value": "#723739",
                "colour_name": "Goldie"
            },
            {
                "hex_value": "#BF3A30",
                "colour_name": "Love Life"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc2"
        },
        "id": 1004,
        "brand": "glossier",
        "name": "Stretch Concealer",
        "price": "22.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://static-assets.glossier.com/production/spree/images/attachments/000/001/631/portrait_normal/SC_Carousel_1_copy_2.jpg?1506948615",
        "product_link": "https://www.glossier.com/products/stretch-concealer",
        "website_link": "https://www.glossier.com",
        "description": "A traditional concealer sets to a stiff, flat, dry finish—a dead giveaway that you’re wearing it. Ours is a new type of concealer with elastic micro waxes that move with your face instead of caking on top of it, and nourishing oils that give a dewy, glowing finish. The buildable formula covers everything from dark circles to redness and blemishes. In five shades painstakingly developed to enhance, brighten, and—most importantly—completely disappear into the widest range of skin tones.",
        "rating": null,
        "category": "concealer",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2017-12-27T03:11:01.369Z",
        "updated_at": "2017-12-27T03:12:42.235Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1004.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/004/original/open-uri20171227-4-1wp63cr?1514344255",
        "product_colors": [
            {
                "hex_value": "#96644A",
                "colour_name": "Deep"
            },
            {
                "hex_value": "#4F3425",
                "colour_name": "Rich"
            },
            {
                "hex_value": "#BC8E5A",
                "colour_name": "Dark"
            },
            {
                "hex_value": "#E5BE93",
                "colour_name": "Medium"
            },
            {
                "hex_value": "#F1DBC3",
                "colour_name": "Light"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc3"
        },
        "id": 1002,
        "brand": "glossier",
        "name": "Wowder",
        "price": "27.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://static-assets.glossier.com/production/spree/images/attachments/000/001/476/portrait_normal/carousel-1.jpg?1501534121",
        "product_link": "https://www.glossier.com/products/wowder",
        "website_link": "https://www.glossier.com",
        "description": "It’s not powder, it’s Wowder—for non-dewy days. Wowder will: cut shine, blur the appearance of pores, set makeup, look like skin. Wowder won’t: leave a chalky film, cake into fine lines, flatten skin’s texture, or announce its presence in photographs (no camera flashback). In three sheer, glowy, adaptable shades...because no skin tone is HD-white. Pair with the angelically soft Wowder Brush for all-over and targeted application—perfect size, perfect shape, perfect density for the optimal matte-not-flat finish.",
        "rating": null,
        "category": "powder",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2017-12-27T02:50:48.250Z",
        "updated_at": "2017-12-27T02:53:24.450Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1002.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/002/original/open-uri20171227-4-1ne7r73?1514343097",
        "product_colors": [
            {
                "hex_value": "#EABC98",
                "colour_name": "Light/Medium"
            },
            {
                "hex_value": "#9B674E",
                "colour_name": "Dark/Deep"
            },
            {
                "hex_value": "#714831",
                "colour_name": "Rich"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc4"
        },
        "id": 1001,
        "brand": "glossier",
        "name": "Haloscope",
        "price": "27.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://static-assets.glossier.com/production/spree/images/attachments/000/001/109/portrait_normal/Haloscope_01-compressor.jpg?1498613775",
        "product_link": "https://www.glossier.com/products/haloscope",
        "website_link": "https://www.glossier.com",
        "description": "Skincare + makeup = Haloscope, the galaxy’s first dew effect highlighter. It’s a dual-delivery formula: the outer halo is infused with genuine crystal extracts for all-day enlightenment, with a solid oil core of vitamin-rich moisturizers for a hydrated, dewy finish. Expect an otherworldly sheen that’s never dry, never glittery. Comes in…",
        "rating": null,
        "category": "highlighter",
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2017-12-27T02:44:12.059Z",
        "updated_at": "2017-12-27T02:58:27.019Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1001.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/001/original/open-uri20171227-4-1das33x?1514342770",
        "product_colors": [
            {
                "hex_value": "#D19668",
                "colour_name": "Topaz"
            },
            {
                "hex_value": "#FBE9E1",
                "colour_name": "Quartz"
            },
            {
                "hex_value": "#F0EDEB",
                "colour_name": "Moonstone"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc5"
        },
        "id": 1000,
        "brand": "glossier",
        "name": "Perfecting Skin Tint",
        "price": "32.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://static-assets.glossier.com/production/spree/images/attachments/000/000/726/portrait_normal/PST_Carousel_02-compressor.jpg?1470088244",
        "product_link": "https://www.glossier.com/products/perfecting-skin-tint",
        "website_link": "https://www.glossier.com",
        "description": "In the land between bare skin and makeup makeup exists the imperceptible wash of color that is our Perfecting Skin Tint. What does it do? Evens out discoloration and leaves your face looking toned, smooth, and dewy. The breathable, ultra thin formula auto-fits to skin, making application as simple as throwing on moisturizer. What won’t it do? Hide your freckles, spackle your pores, or erase any other evidence that you are, in fact, a real human being.",
        "rating": null,
        "category": null,
        "product_type": "foundation",
        "tag_list": [],
        "created_at": "2017-12-27T02:34:21.781Z",
        "updated_at": "2017-12-27T02:57:42.311Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1000.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/000/original/open-uri20171227-4-14arcgf?1514342096",
        "product_colors": [
            {
                "hex_value": "#F1DBC3",
                "colour_name": "Light"
            },
            {
                "hex_value": "#E5BE93",
                "colour_name": "Medium"
            },
            {
                "hex_value": "#4F3425",
                "colour_name": "Rich"
            },
            {
                "hex_value": "#BC8E5A",
                "colour_name": "Dark"
            },
            {
                "hex_value": "#96644A",
                "colour_name": "Deep"
            }
        ]
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc6"
        },
        "id": 998,
        "brand": "nyx",
        "name": "Fly With Me Mascara",
        "price": "9.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd5e25f68/ProductImages/Eyes/Fly_With_Me_Mascara/800897141431_flywithmemascara_main.jpg?sw=390&sh=390&sm=fit",
        "product_link": "https://www.nyxcosmetics.com/fly-with-me-mascara/NYX_018.html?cgid=mascara",
        "website_link": "https://www.nyxcosmetics.com",
        "description": "Your lashes will reach new heights with our Fly With Me Mascara. Lashes appear more dramatic making average lashes look super-long and ultra dark. Pros adore the intense yet lightweight coverage and how the unique volumizing wand boosts even the wimpiest of the eyelashes.",
        "rating": null,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2017-12-24T02:33:07.960Z",
        "updated_at": "2017-12-24T02:33:08.735Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/998.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/998/original/data?1514082787",
        "product_colors": []
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc7"
        },
        "id": 997,
        "brand": "nyx",
        "name": "Propel My Eyes Mascara",
        "price": "9.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8068dbc4/ProductImages/Eyes/Propel_My_Eyes_Mascara/propelmyeyesmascara_main.jpg?sw=390&sh=390&sm=fit",
        "product_link": "https://www.nyxcosmetics.com/propel-my-eyes-mascara/NYX_020.html?cgid=mascara",
        "website_link": "https://www.nyxcosmetics.com",
        "description": "Get ready for aerodynamic lashes! The brush boasts a four-way pinwheel design that lifts lashes up and coats them in a conditioning formula enriched with Pro Vitamin B5 D-Panthenol and Green Tea Extract. Take it for a spin and enjoy!",
        "rating": null,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2017-12-24T02:33:07.488Z",
        "updated_at": "2017-12-24T02:33:07.828Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/997.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/997/original/data?1514082787",
        "product_colors": []
    },
    {
        "_id": {
            "$oid": "646df606603ec9b234783fc8"
        },
        "id": 996,
        "brand": "nyx",
        "name": "Proof It! Waterproof Mascara Top Coat",
        "price": "7.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw31cb2063/ProductImages/Eyes/Proof_It_Waterproof_Mascara_Top_Coat/proofitwaterproofmascaratopcoat_main.jpg?sw=390&sh=390&sm=fit",
        "product_link": "https://www.nyxcosmetics.com/proof-it-waterproof-mascara-top-coat/NYX_179.html?cgid=mascara",
        "website_link": "https://www.nyxcosmetics.com",
        "description": "With just two swipes our lash top coat transforms your favorite mascara from being conventional to waterproof! Our formula helps prevent clumping and leaves lashes looking gorgeous.",
        "rating": null,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2017-12-24T02:33:06.827Z",
        "updated_at": "2017-12-24T02:33:07.353Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/996.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/996/original/data?1514082786",
        "product_colors": []
    }
]

const product = productData.map(item => (
    <ProductCard key={item.id} {...item} />
))

function Part8() {
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
export default Part8
