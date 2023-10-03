#nullable disable
using Microsoft.EntityFrameworkCore; 
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Contexts; 

public class GameContext : DbContext{
    
    public GameContext(DbContextOptions<GameContext> options): base(options){}

    public DbSet<Game> Game {get; set;}
    public DbSet<GameCharacter> GameCharacter {get; set;}
}