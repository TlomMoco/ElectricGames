using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
            builder => builder
                .AllowAnyHeader()
                .AllowAnyOrigin()
                .AllowAnyMethod()
        );
    }
);

builder.Services.AddDbContext<GameContext>( options => 
    options.UseSqlite("Data Source=ElectricGames.db")
);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

DefaultFilesOptions defaultFilesOptions = new DefaultFilesOptions();
defaultFilesOptions.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(defaultFilesOptions);

app.UseCors("AllowAll");
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
