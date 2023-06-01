import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Radio, RadioGroup, Box, VStack, Stack
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeBrand, changeCategory, changeProduct, changeTag, getBrandProductData, getCategoryProductData, getProductTypeData, getTagProductData } from '../../../Redux/ProductSection/Action/action';
import { useEffect } from 'react';
import { store } from '../../../Redux/store';
export const Sidebar = () => {
    const dispatch = useDispatch()
    // const initialCateogy = JSON.parse(localStorage.getItem("category"));
    // const initialProduct = JSON.parse(localStorage.getItem("product"));
    // const initialTag = JSON.parse(localStorage.getItem("tag"));
    // const initialBrand = JSON.parse(localStorage.getItem("brand"));
    // console.log("cat",initialCateogy);
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [tag, setTag] = useState("")
    const [product, setProduct] = useState("")
    const handleCategory = (e) => {
        setCategory(e)
        setBrand("")
        setProduct("")
        setTag("")
        dispatch(changeCategory(e))
        dispatch(getCategoryProductData(category))
    }
    const handlebrand = (e) => {
        setCategory("")
        setBrand(e)
        setProduct("")
        setTag("")
        dispatch(changeBrand(e))
        dispatch(getBrandProductData(brand))
    }
    const handletag = (e) => {
        setCategory("")
        setBrand("")
        setProduct("")
        setTag(e)
        dispatch(changeTag(e))
        dispatch(getTagProductData(tag))
    }
    const handleproduct = (e) => {
        setCategory("")
        setBrand("")
        setProduct(e)
        setTag("")
        dispatch(changeProduct(e))
        dispatch(getProductTypeData(product))
    }
    useEffect(() => {
        if (category != "") {
            dispatch(getCategoryProductData(category))
        } else if (brand != "") {
            dispatch(getBrandProductData(brand))
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
                                <Radio value='Powder'>Powder</Radio>
                                <Radio value='Cream'>Cream</Radio>
                                <Radio value='Pencil'>Pencil</Radio>
                                <Radio value='Gel'>Gel</Radio>
                                <Radio value='Palette'>Palette</Radio>
                                <Radio value='Concealer'>Concealer</Radio>
                                <Radio value='Contour'>Contour</Radio>
                                <Radio value='Mineral'>Mineral</Radio>
                                <Radio value='Highlighter'>Highlighter</Radio>
                                <Radio value='Lipstick'>Lipstick</Radio>
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
                                <Radio value='Lipstick'>Lipstick</Radio>
                                <Radio value='Mascara'>Mascara</Radio>
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
                                <Radio value='Dairy Free'>Dairy Free</Radio>
                                <Radio value='Fair Trade'>Fair Trade</Radio>
                                <Radio value='Gluten Free'>Gluten Free</Radio>
                                <Radio value='Natural'>Natural</Radio>
                                <Radio value='Non-GMO'>Non-GMO</Radio>
                                <Radio value='Organic'>Organic</Radio>
                                <Radio value='Peanut Free Product'>Peanut Free Product</Radio>
                                <Radio value='Sugar Free'>Sugar Free</Radio>
                                <Radio value='Vegan'>Vegan</Radio>
                                <Radio value='cruelty free'>cruelty free</Radio>
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
                                <Radio value='anna sui'>anna sui</Radio>
                                <Radio value='annabelle'>annabelle</Radio>
                                <Radio value="burt's bees">burt's bees</Radio>
                                <Radio value='butter london'>butter london</Radio>
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
                                <Radio value='glossier'>glossier</Radio>
                                <Radio value="l'oreal">l'oreal</Radio>
                                <Radio value='marcelle'>marcelle</Radio>
                                <Radio value='maybelline'>maybelline</Radio>
                                <Radio value='milani'>milani</Radio>
                                <Radio value='mineral fusion'>mineral fusion</Radio>
                                <Radio value='misa'>misa</Radio>
                                <Radio value='mistura'>mistura</Radio>
                                <Radio value='moov'>moov</Radio>
                                <Radio value='nyx'>nyx</Radio>
                                <Radio value='orly'>orly</Radio>
                                <Radio value='pacifica'>pacifica</Radio>
                                <Radio value='physicians formula'>physicians formula</Radio>
                                <Radio value='piggy paint'>piggy paint</Radio>
                                <Radio value='pure anada'>pure anada</Radio>
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

