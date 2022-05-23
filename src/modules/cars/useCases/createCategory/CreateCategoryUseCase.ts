import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest{
  name: string
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
 
  execute({description, name} : IRequest): void{
    
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists) {
     throw new Error("Categoria already exists")
    }
    
    this.categoriesRepository.create({name, description})
  }
}

export { CreateCategoryUseCase }