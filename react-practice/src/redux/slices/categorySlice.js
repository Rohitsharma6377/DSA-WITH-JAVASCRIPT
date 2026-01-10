import {createSlice , createAsyncThunk , isRejectedWithValue} from '@reduxjs/toolkit'
import { categoryApi } from '../../services/api'


export const fetchCategories = createAsyncThunk(
    'categories/fetchCayegories',
    async(_, {rejectWithValue}) => {
        try{
            const response = await categoryApi.getAllcategories()
            return response.data
        }catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)

export const createcategory = createAsyncThunk(
    'categories/createCategory',
    async(categoryData, {rejectWithValue}) => {
        try{
            const response = await categoryApi.createcategory(categoryData);
            return response.data
        }catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)
export const updatecategory = createAsyncThunk(
    'categories/updateCategory',
    async({id,data}, {rejectWithValue}) => {
        try{
            const response = await categoryApi.updatecategory(id, data);
            return response.data
        }catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)
export const deletecategory = createAsyncThunk(
    'categories/deleteCategory',
    async(id, {rejectWithValue})=>{
        try{
            await categoryApi.deletecategory(id);
            return id
        }catch(error){
            return rejectWithValue(error.resoponse?.data)
        }
    }
)

export const DeleteAllcategories  =  createAsyncThunk(
    'categories/deleteAllcategories',
    async(_, {rejectWithValue})=>{
        try{
            await categoryApi.deleteAllcategories();
            return [];
        }
        catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)


const categorySlice = createSlice({
    name: 'categories',
    initialState:{
        items: [],
        loading: false,
        error: null,
    },
    reducers:{
        setSelectedCategory: (state, action)=>{
            state.setSelectedCategory = action.payload;
        },
        clearSelectedCategory: (state)=>{
            state.setSelectedCategory = null;
        },
        clearError: (state)=>{
            state.error = null;
        }
    },

    extraReducers:(builder) =>{
        builder

        .addCase(fetchCategories.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message;
        })  
        // Create category
        .addCase(createcategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(createcategory.fulfilled, (state, action)=>{
            state.loading = false;
            state.items.push(action.payload);
        })
        .addCase(createcategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message;
        })      
        // Update category
        .addCase(updatecategory.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updatecategory.fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.items.findIndex(category => category.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        })
        .addCase(updatecategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message;
        })

        // Delete category
        .addCase(deletecategory.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deletecategory.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = state.items.filter(category => category.id !== action.payload);
        })  

        .addCase(deletecategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message;
        })

        // Delete all categories
        .addCase(DeleteAllcategories.pending, (state)=>{
            state.loading = true;
        })
        .addCase(DeleteAllcategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = [];
        })  
        .addCase(DeleteAllcategories.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || action.error.message;
        })  
    },
})


export const {setSelectedCategory, clearSelectedCategory, clearError} = categorySlice.actions;
export default categorySlice.reducer;

