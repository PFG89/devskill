package school.devskill.testSpring.Controllers;

import org.springframework.web.bind.annotation.*;
import school.devskill.testSpring.Utility.HTTPUtility;

@RestController
@RequestMapping("user")
public class Utente {
    @PostMapping(value = HTTPUtility.CREATE)
    public void userCreate(){}

    @DeleteMapping(value = HTTPUtility.DELETE)
    public void userDelete(){}

    @PutMapping(value = HTTPUtility.UPDATE)
    public void userUpdate(){}

}
