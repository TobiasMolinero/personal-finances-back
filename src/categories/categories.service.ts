import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {

  private categories = [
    {id: 1, category: 'Comida', id_type: 1, type: 'expense'},
    {id: 2, category: 'Estacionamiento', id_type: 1, type: 'expense'},
    {id: 3, category: 'Salario', id_type: 2, type: 'income'},
    {id: 4, category: 'Intereses ganados', id_type: 2, type: 'income'},
    {id: 5, category: 'Regalo', id_type: 2, type: 'income'},
  ]
  
  getAll() {
    return this.categories;
  }
  
  getOne(id: number) {
    return this.categories.find(category => category.id === id);
  }

  create(category: CreateCategoryDto) {
    const newCategory = {
      id: this.categories.length + 1,
      category: category.category,
      id_type: category.id_type,
      type: category.id_type === 1 ? 'expense' : 'income'
    }

    this.categories.push(newCategory);

    return newCategory;
  }

  update(id: number, category: UpdateCategoryDto) {
    const categoryIndex = this.categories.findIndex(category => category.id === id);

    if(categoryIndex === -1) return 'No se encontro la categoria';

    this.categories[categoryIndex].category = category.category;

    return this.categories[categoryIndex];
  }
}
