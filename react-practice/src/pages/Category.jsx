import React from 'react'
import { useEffect , useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {fetchCategories , createcategory , updatecategory , deletecategory, DeleteAllcategories} from '../redux/slices/categorySlice';
const Category = () => {

    const dispatch = useDispatch();
    const {items: categorys , loading , error} = useSelector((state) => state.categories)
    const [showForm , setShowForm] = useState (false);
    const [editCategory , setEditCategory] = useState (null);
    useEffect(()=>{
        dispatch(fetchCategories())
    }, [dispatch])

  return (
    <div>Category</div>
  )
}

export default Category;