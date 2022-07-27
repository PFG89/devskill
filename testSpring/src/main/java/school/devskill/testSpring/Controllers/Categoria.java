package school.devskill.testSpring.Controllers;

import org.springframework.web.bind.annotation.*;
import school.devskill.testSpring.Command.CategoryCommand;
import school.devskill.testSpring.DTO.CategoryDTO;
import school.devskill.testSpring.Utility.HTTPUtility;

@RestController
@RequestMapping("category")
public class Categoria {
    @GetMapping (value = HTTPUtility.GET)
    public CategoryDTO categoryGet(@PathVariable Integer id){
        CategoryDTO category = new CategoryDTO();
        category.setId(id);
        category.setName(null);
        category.setDescription(null);
        return category;
    }

    @PostMapping(value = HTTPUtility.CREATE)
    public CategoryDTO categoryCreate(@RequestBody CategoryCommand categoria){
        CategoryDTO category = new CategoryDTO();
        category.setId(null);
        category.setName(categoria.getName());
        category.setDescription(categoria.getDescription());
        return category;
    }

    @DeleteMapping(value = HTTPUtility.DELETE)
    public void categoryDelete(@PathVariable Integer id){}

    @PutMapping(value = HTTPUtility.UPDATE)
    public void categoryUpdate(){}

    @PostMapping(value = HTTPUtility.SEARCH)
    public void categorySearch(){}
}
