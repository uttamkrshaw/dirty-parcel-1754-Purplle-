import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Radio, RadioGroup, Box, VStack, Stack
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getBrandProductData, getCategoryProductData, getProductTypeData, getTagProductData } from '../../../Redux/ProductSection/Action/action';
import { useEffect } from 'react';
export const Sidebar = ({ handleLoad }) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState(JSON.parse(localStorage.getItem("category")) || "")
    const [brand, setBrand] = useState(JSON.parse(localStorage.getItem("brand")) || "")
    const [tag, setTag] = useState(JSON.parse(localStorage.getItem("tag")) || "")
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem("product")) || "")
    const handleCategory = (e) => {
        setCategory(e)
        localStorage.setItem("category", JSON.stringify(category))
        dispatch(getCategoryProductData(category))
    }
    const handlebrand = (e) => {
        setBrand(e)
        localStorage.setItem("brand", JSON.stringify(brand))
        dispatch(getBrandProductData(category))
    }
    const handletag = (e) => {
        setTag(e)
        localStorage.setItem("tag", JSON.stringify(tag))

        dispatch(getTagProductData(tag))
    }
    const handleproduct = (e) => {
        setProduct(e)
        localStorage.setItem("product", JSON.stringify(product))
        dispatch(getProductTypeData(product))
    }
    useEffect(() => {
        if (category != "") {
            dispatch(getCategoryProductData(category))
        } else if (brand != "") {
            dispatch(getBrandProductData(category))
        } else if (tag !== "") {
            dispatch(getTagProductData(tag))
        } else if (product != "") {
            dispatch(getProductTypeData(product))
        }
    }, [category, brand, tag, product])
    return (
        <>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Category
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={(e) => { handleCategory(e) }} value={category}>
                            <Stack direction={'column'}>
                            <Radio value=''>Choose Product Category</Radio>
                                <Radio value='liquid'>liquid</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Product Type
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={(e) => { handleproduct(e) }} value={product}>
                            <Stack direction={'column'}>
                                <Radio value=''>Choose Product Type</Radio>
                                <Radio value='Blush'>Blush</Radio>
                                <Radio value='Bronzer'>Bronzer</Radio>
                                <Radio value='Eyebrow'>Eyebrow</Radio>
                                <Radio value='Eyeliner'>Eyeliner</Radio>
                                <Radio value='Eyeshadow'>Eyeshadow</Radio>
                                <Radio value='Foundation'>Foundation</Radio>
                                <Radio value='Lip liner'>Lip liner</Radio>
                                <Radio value='Lipstick'>Lipstick</Radio>
                                <Radio value='Mascara'>Mascara</Radio>
                                <Radio value='Nail polish'>Nail polish</Radio>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Tags
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={(e) => { handletag(e) }} value={tag}>
                            <Stack direction={'column'}>
                                <Radio value=''>Choose Product Tag</Radio>
                                <Radio value='Canadian'>Canadian</Radio>
                                <Radio value='CertClean'>CertClean</Radio>
                                <Radio value='Chemical Free'>
                                    Chemical Free
                                </Radio>
                                <Radio value='Dairy Free'>Dairy Free</Radio>
                                <Radio value='EWG Verified'>EWG Verified</Radio>
                                <Radio value='EcoCert'>EcoCert</Radio>
                                <Radio value='Fair Trade'>Fair Trade</Radio>
                                <Radio value='Gluten Free'>Gluten Free</Radio>
                                <Radio value='Hypoallergenic'>Hypoallergenic</Radio>
                                <Radio value='Natural'>Natural</Radio>
                                <Radio value='No Talc'>No Talc</Radio>
                                <Radio value='Non-GMO'>Non-GMO</Radio>
                                <Radio value='Organic'>Organic</Radio>
                                <Radio value='Peanut Free Product'>Peanut Free Product</Radio>
                                <Radio value='Sugar Free'>Sugar Free</Radio>
                                <Radio value='USDA Organic'>USDA Organic</Radio>
                                <Radio value='Vegan'>Vegan</Radio>
                                <Radio value='alcohol free'>alcohol free</Radio>
                                <Radio value='cruelty free'>cruelty free</Radio>
                                <Radio value='oil free'>oil free</Radio>
                                <Radio value='purpicks'>purpicks</Radio>
                                <Radio value='silicone free'>silicone free</Radio>
                                <Radio value='water free'>water free</Radio>

                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <RadioGroup onChange={(e) => { handlebrand(e) }} value={brand}>
                            <Stack direction={'column'}>
                                <Radio value=''>Choose Product Brand</Radio>
                                <Radio value='almay'>almay</Radio>
                                <Radio value='alva'>alva</Radio>
                                <Radio value='anna sui'>anna sui</Radio>
                                <Radio value='annabelle'>annabelle</Radio>
                                <Radio value='benefit'>benefit</Radio>
                                <Radio value='boosh'>boosh</Radio>
                                <Radio value="burt's bees">burt's bees</Radio>
                                <Radio value='butter london'>butter london</Radio>
                                <Radio value="c'est moi">c'est moi</Radio>
                                <Radio value='cargo cosmetics'>cargo cosmetics</Radio>
                                <Radio value='china glaze'>china glaze</Radio>
                                <Radio value='clinique'>clinique</Radio>
                                <Radio value='colourpop'>colourpop</Radio>
                                <Radio value='covergirl'>covergirl</Radio>
                                <Radio value='dalish'>dalish</Radio>
                                <Radio value='deciem'>deciem</Radio>
                                <Radio value='dior'>dior</Radio>
                                <Radio value='dr. hauschka'>dr. hauschka</Radio>
                                <Radio value='e.l.f'>e.l.f</Radio>
                                <Radio value='essie'>essie</Radio>
                                <Radio value='fenty'>fenty</Radio>
                                <Radio value='glossier'>glossier</Radio>
                                <Radio value='green people'>green people</Radio>
                                <Radio value='iman'>iman</Radio>
                                <Radio value="l'oreal">l'oreal</Radio>
                                <Radio value='lotus cosmetics usa'>lotus cosmetics usa</Radio>
                                <Radio value="maia's mineral galaxy">maia's mineral galaxy</Radio>
                                <Radio value='marcelle'>marcelle</Radio>
                                <Radio value='marienatie'>marienatie</Radio>
                                <Radio value='maybelline'>maybelline</Radio>
                                <Radio value='milani'>milani</Radio>
                                <Radio value='mineral fusion'>mineral fusion</Radio>
                                <Radio value='misa'>misa</Radio>
                                <Radio value='mistura'>mistura</Radio>
                                <Radio value='moov'>moov</Radio>
                                <Radio value='nudus'>nudus</Radio>
                                <Radio value='nyx'>nyx</Radio>
                                <Radio value='orly'>orly</Radio>
                                <Radio value='pacifica'>pacifica</Radio>
                                <Radio value='penny lane organics'>penny lane organics</Radio>
                                <Radio value='physicians formula'>physicians formula</Radio>
                                <Radio value='piggy paint'>piggy paint</Radio>
                                <Radio value='pure anada'>pure anada</Radio>
                                <Radio value='rejuva minerals'>rejuva minerals</Radio>
                                <Radio value='revlon'>revlon</Radio>
                                <Radio value='salon perfect'>salon perfect</Radio>
                                <Radio value='sante'>sante</Radio>
                                <Radio value='sinful colours'>sinful colours</Radio>
                                <Radio value='smashbox'>smashbox</Radio>
                                <Radio value='stila'>stila</Radio>
                                <Radio value='suncoat'>suncoat</Radio>
                                <Radio value='wet n wild'>wet n wild</Radio>
                                <Radio value='zorah'>zorah</Radio>
                            </Stack>
                        </RadioGroup>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

