import { sample_foods,sample_tags } from '../data';

export const getAll =async () => sample_foods;


export const search = async (searchTerm) =>sample_foods
.filter(item =>item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

export const getAllTags = async () => {
    return sample_tags; // Ensure sample_tags is defined or imported
  };
  export const getAllTag = async tag =>{
    if(tag === 'All') return getAll();
    return sample_foods.filter(item => item.tags?.includes(tag));
  }
  export const getAllByTag = async (tag) => {
    if (tag === 'All') return sample_foods; // Return all food items when tag is 'All'
    return sample_foods.filter((item) => item.tags.includes(tag));
  };
export const getById = async foodId =>
  sample_foods.find(item=>item.id === foodId);