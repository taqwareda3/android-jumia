import { async } from '@firebase/util'
import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../../core/config'
import{ View,Input} from 'react-native'

function showProducts() {
    const[getproduct,setProduct] = useState([])
    const getProduct = async(()=>{
        const productRef = collection(db,"Products");
        await getDocs(productRef)
        .then((snap)=>{
            // setProduct(snap)

            console.log(snap)

        })
    })
    showProducts()

    return (
        <>

            <Input
                placeholder='BASIC INPUT'
            />


        </>
    )
}

export default showProducts