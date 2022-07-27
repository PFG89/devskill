package school.devskill.testSpring.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("testing")
public class Testing {

    @GetMapping(value = "/get")
     public String testingGet () {
       return "ciao sono un metodo get";
   }

   @GetMapping (value = "/array")
    public List<String> array () {
        ArrayList<String> libri = new ArrayList <>();
        libri.add("Dylan Dog");
        libri.add("Dragon Ball");
        return libri;
   }


}
