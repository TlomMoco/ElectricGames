using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; 
using ElectricGamesApi.Contexts; 
using ElectricGamesApi.Models; 

namespace ElectricGamesApi.Controllers; 

[ApiController]
[Route("[controller]")]

public class GameCharacterController : ControllerBase
{
    private readonly GameContext context;

    public GameCharacterController(GameContext _context)
    {
        context = _context; 
    }

    //HTTP get all game character
    [HttpGet]
    public async Task<ActionResult<List<GameCharacter>>> Get()
    {
        try
        {
            List<GameCharacter> gameCharacters = await context.GameCharacter.ToListAsync(); 
            return Ok(gameCharacters); 
        }
        catch
        {
            return StatusCode(500); 
        }
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        GameCharacter? character = await context.GameCharacter.FindAsync(id);

        if(character != null)
        {
            return Ok(character);
        }
        else 
        {
            return NotFound(500); 
        }
    }

    //HTTP get by title
    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<List<Game>>> GetByName(string name)
    {
        try
        {
            List<GameCharacter>? gameCharacters = await context.GameCharacter.Where(character => character.Name.ToLower() == name.ToLower()).ToListAsync();

            return Ok(gameCharacters);
        }
        catch
        {
            return StatusCode(500); 
        }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try 
        {
            GameCharacter? characterToDelete = await context.GameCharacter.FindAsync(id); 

            if(characterToDelete != null)
            {
                context.GameCharacter.Remove(characterToDelete);
                await context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    //HTTP add new game
    [HttpPost]
    public IActionResult Post(GameCharacter newCharacter)
    {
        try
        {
            context.GameCharacter.Add(newCharacter);
            context.SaveChanges();
            return CreatedAtAction("Get", new {id = newCharacter.Id}, newCharacter); 
        }
        catch
        {
            return StatusCode(500); 
        }
    }

    [HttpPut]
    public IActionResult Put (GameCharacter editedCharacter){
    try{
        context.Entry(editedCharacter).State = EntityState.Modified;
        context.SaveChanges();
        return NoContent();
    }
    catch{
        return NotFound(500);
    }
}
}
