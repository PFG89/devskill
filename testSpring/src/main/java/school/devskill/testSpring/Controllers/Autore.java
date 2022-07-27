package school.devskill.testSpring.Controllers;

import org.springframework.web.bind.annotation.*;
import school.devskill.testSpring.Command.AuthorCommand;
import school.devskill.testSpring.DTO.AuthorDTO;
import school.devskill.testSpring.Utility.HTTPUtility;

@RestController
@RequestMapping("author")

public class Autore {
        @PostMapping(value = HTTPUtility.CREATE)
        public AuthorDTO authorCreate(@RequestBody AuthorCommand autore) {
                AuthorDTO author = new AuthorDTO();
                author.setId(null);
                author.setName(autore.getName());
                author.setSurname(autore.getSurname());
                return author;
        }

        @DeleteMapping(value = HTTPUtility.DELETE)
        public void authorDelete(){}

        @PutMapping(value = HTTPUtility.UPDATE)
        public void authorUpdate(){}

        @GetMapping (value = HTTPUtility.GET)
        public AuthorDTO authorGet (@PathVariable Integer id) {
               AuthorDTO author = new AuthorDTO();
               author.setId(id);
                author.setName(null);
                author.setSurname(null);
                return author;
        }
        @PostMapping(value = HTTPUtility.SEARCH)
        public void authorSearch(){}
}
