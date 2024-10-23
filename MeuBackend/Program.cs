using Microsoft.EntityFrameworkCore;
using MeuBackend.Models;

var builder = WebApplication.CreateBuilder(args);

// Adicione a string de conexão para o MySQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Adicione o CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

// Adicione os serviços ao contêiner
builder.Services.AddControllers();

var app = builder.Build();

// Configure o pipeline de solicitação HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    // Para ambientes de produção
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts(); // HSTS para maior segurança
}

app.UseHttpsRedirection(); // Redireciona HTTP para HTTPS
app.UseAuthorization(); // Middleware para autorização

// Adicione o uso do CORS
app.UseCors("AllowAll");

app.MapControllers(); // Mapear os controladores

app.Run(); // Iniciar a aplicação
