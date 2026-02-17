var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();   // viktig rad
app.UseStaticFiles();

app.Run();
